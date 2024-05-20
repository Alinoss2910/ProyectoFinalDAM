export class RecipeDTO {
    url: string;
    userId: number;

    constructor(Url: string, UserId: number) {
        this.url = Url;
        this.userId = UserId;
    }
}

