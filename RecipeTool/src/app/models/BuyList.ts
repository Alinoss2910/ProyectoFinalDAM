import { Ingredient } from "./Ingredient"

export class BuyList {
    id: number
    name: string
    ingredients: Ingredient[]

    constructor(id: number, name: string, ingredients: Ingredient[]) {
        this.id = id
        this.name = name
        this.ingredients = ingredients
    }
}