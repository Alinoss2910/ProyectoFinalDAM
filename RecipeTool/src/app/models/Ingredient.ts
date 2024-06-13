export class Ingredient {
    id!: number;
    name: string;
    buyListId: number;

    constructor(name: string, buyListId: number) {
        this.name = name;
        this.buyListId = buyListId;
    }
}