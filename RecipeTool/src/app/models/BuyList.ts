import { Ingredient } from "./Ingredient"

export class BuyList {
    id!: number
    name: string
    ingredients!: Ingredient[]

    constructor(name: string) {
        this.name = name
    }
}