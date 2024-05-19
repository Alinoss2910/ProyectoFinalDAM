using ApiUsersRecipeTool.Data;
using ApiUsersRecipeTool.DTO;
using ApiUsersRecipeTool.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiUsersRecipeTool.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly UserService _userService;
        private readonly TokenService _tokenService;

        public UserController(DataContext context, UserService userService, TokenService tokenService)
        {
            _context = context;
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] AuthDTO dto)
        {
            var user = new User
            {
                Username = dto.Username,
                Password = _userService.HashPassword(dto.Password)
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok("Usuario registrado correctamente");
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] AuthDTO dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == dto.Username);

            if (user == null || !_userService.VerifyPassword(dto.Password, user.Password))
            {
                return Unauthorized();
            }

            var token = _tokenService.GenerateToken(dto.Username);
            return Ok(new { Token = token });
        }

        [HttpGet("GetUser")]
        //[Authorize]
        public async Task<IActionResult> GetUser(string username)
        {
            var query = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);

            var user = new
            {
                Id = query.Id,
                Username = query.Username
            };


            return Ok(user);
        }

        [HttpGet("FavoriteRecipes")]
        public async Task<IActionResult> FavoriteRecipes()
        {
            var recipes = await _context.Recipes
                .Include(r => r.User)
                .ToListAsync();

            recipes = recipes.Select(r => new Recipe
            {
                Id = r.Id,
                Url = r.Url,
                User = new User
                {
                    Id = r.User.Id,
                    Username = r.User.Username
                }
            }).ToList();

            return Ok(recipes);
        }

        [HttpPost("AddFavoriteRecipe")]
        //[Authorize]
        public async Task<IActionResult> AddFavoriteRecipe([FromBody] RecipeDTO dto)
        {

            if (dto.UserId == 0)
            {
                return BadRequest("Usuario no encontrado");
            }

            var url = await _context.Recipes.FirstOrDefaultAsync(r => r.Url == dto.Url && r.User.Id == dto.UserId);

            if (url != null)
            {
                await DeleteFavoriteRecipe(url.Id);
                return Ok("Receta eliminada de favoritos");
            }

            var recipe = new Recipe
            {
                Url = dto.Url,
                User = await _context.Users.FirstOrDefaultAsync(u => u.Id == dto.UserId)
            };

            await _context.Recipes.AddAsync(recipe);
            await _context.SaveChangesAsync();

            return Ok("Receta guardada con exito");
        }

        [HttpGet("GetFavoriteRecipe/{id}")]
        public async Task<IActionResult> GetFavoriteRecipe(int id)
        {
            var recipe = await _context.Recipes.FirstOrDefaultAsync(r => r.Id == id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        [HttpDelete("DeleteFavoriteRecipe/{id}")]
        //[Authorize]
        public async Task<IActionResult> DeleteFavoriteRecipe(int id)
        {
            var recipe = await _context.Recipes.FirstOrDefaultAsync(r => r.Id == id);

            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();

            return Ok("Receta eliminada con exito");
        }
    }
}
