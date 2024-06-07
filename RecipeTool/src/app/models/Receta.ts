export class Receta {
    recipe!: Recipe;
    _links!: string[];
}

interface Recipe {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    glycemicIndex: number;
    inflammatoryIndex: number;
    totalCO2Emissions: number;
    co2EmissionsClass: string;
    cuisineType: CuisineType;
    mealType: MealType[]; // Can be multiple meal types
    dishType: DishType[]; // Can be multiple dish types
    instructions: string;
    tags: string[];
    externalId: string;
    totalNutrients: {
        [nutrientName: string]: NutrientsInfo;
    };
    totalDailyNutrients: {
        [nutrientName: string]: number;
    };
    digest: Digest[];
}

export interface Ingredient {
    uri: string;
    label: string;
    image: string;
}

export interface NutrientsInfo {
    label: string;
    quantity: number;
    unit: string;
}

export interface Digest {
    daily: number;
    hasRDI: boolean;
    label: string;
    schemaOrgTag: string;
    sub: Digest[];
    tag: string;
    total: number;
    unit: string;
}

export  class CuisineType {
    static American = 'American'
    static Asian = 'Asian'
    static British = 'British'
    static Caribbean = 'Caribbean'
    static CentralEurope = 'Central Europe'
    static Chinese = 'Chinese'
    static EasternEurope = 'Eastern Europe'
    static French = 'French'
    static Greek = 'Greek'
    static Indian = 'Indian'
    static Italian = 'Italian'
    static Japanese = 'Japanese'
    static Korean = 'Korean'
    static Kosher = 'Kosher'
    static Mediterranean = 'Mediterranean'
    static Mexican = 'Mexican'
    static MiddleEastern = 'Middle Eastern'
    static Nordic = 'Nordic'
    static SouthAmerican = 'South American'
    static SouthEastAsian = 'South East Asian'
    static World = 'World'
}

export class MealType {
    static Breakfast = 'Breakfast'
    static Lunch = 'Lunch'
    static Dinner = 'Dinner'
    static Snack = 'Snack'
    static TeaTime = 'TeaTime'
}

export class DishType {
    static AlcoholCocktail = 'Alcohol Cocktail'
    static BiscuitsAndCookies = 'Biscuits and cookies'
    static Bread = 'Bread'
    static Cereals = 'Cereals'
    static CondimentsAndSauces = 'Condiments and sauces'
    static Desserts = 'Desserts'
    static Drinks = 'Drinks'
    static Egg = 'Egg'
    static IcecreamAndCustard = 'Ice cream and custard'
    static MainCourse = 'Main course'
    static Pancake = 'Pancake'
    static Pasta = 'Pasta'
    static Pastry = 'Pastry'
    static PiesAndTarts = 'Pies and tarts'
    static Pizza = 'Pizza'
    static Preps = 'Preps'
    static Preserves = 'Preserves'
    static Salad = 'Salad'
    static Sandwiches = 'Sandwiches'
    static SideDish = 'Side dish'
    static Soup = 'Soup'
    static SpecialOcasions = 'Special occasions'
    static Starter = 'Starter'
    static Sweets = 'Sweets'
}

export class HealthLabel {
    AlcoholCocktail = 'Alcohol-Cocktail'
    static AlcoholFree = 'Alcohol-Free'
    static CeleryFree = 'Celery-Free'
    static CrustaceanFree = 'Crustacean-Free'
    static Dash = 'DASH'
    static DairyFree = 'Dairy-Free'
    static EggFree = 'Egg-Free'
    static FishFree = 'Fish-Free'
    static FodMapFree = 'FODMAP-Free'
    static GlutenFree = 'Gluten-Free'
    static ImmunoSupportive = 'Immuno-Supportive'
    static KetoFriendly = 'Keto-Friendly'
    static KidneyFriendly = 'Kidney-Friendly'
    static Kosher = 'Kosher'
    static LowPotassium = 'Low-Potassium'
    static LowSugar = 'Low-Sugar'
    static LupineFree = 'Lupine-Free'
    static Mediterranean = 'Mediterranean'
    static MolluskFree = 'Mollusk-Free'
    static MustardFree = 'Mustard-Free'
    static NoOilAdded = 'No-Oil-Added'
    static NoSugar = 'No-Sugar'
    static Paleo = 'Paleo'
    static PeanutFree = 'Peanut-Free'
    static Pescatarian = 'Pescatarian'
    static PorkFree = 'Pork-Free'
    static RedMeatFree = 'Red-Meat-Free'
    static SesameFree = 'Sesame-Free'
    static ShellfishFree = 'Shellfish-Free'
    static SoyFree = 'Soy-Free'
    static SugarConscious = 'Sugar-Conscious'
    static SulfiteFree = 'Sulfite-Free'
    static TreeNutFree = 'Tree-Nut-Free'
    static Vegan = 'Vegan'
    static Vegetarian = 'Vegetarian'
    static WheatFree = 'Wheat-Free'
}

export class DietLabel {
    static Balanced = 'Balanced'
    static HighFiber = 'High-Fiber'
    static HighProtein = 'High-Protein'
    static LowCarb = 'Low-Carb'
    static LowFat = 'Low-Fat'
    static LowSodium = 'Low-Sodium'
}