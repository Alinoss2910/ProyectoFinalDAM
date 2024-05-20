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

export const enum CuisineType {
    American = 'American',
    Asian = 'Asian',
    British = 'British',
    Caribbean = 'Caribbean',
    CentralEurope = 'Central Europe',
    Chinese = 'Chinese',
    EasternEurope = 'Eastern Europe',
    French = 'French',
    Indian = 'Indian',
    Italian = 'Italian',
    Japanese = 'Japanese',
    Kosher = 'Kosher',
    Mediterranean = 'Mediterranean',
    Mexican = 'Mexican',
    MiddleEastern = 'Middle Eastern',
    Nordic = 'Nordic',
    SouthAmerican = 'South American',
    SouthEastAsian = 'South East Asian',
}

export const enum MealType {
    Breakfast = 'Breakfast',
    Dinner = 'Dinner',
    Lunch = 'Lunch',
    Snack = 'Snack',
    TeaTime = 'Tea Time',
}

export const enum DishType {
    BiscuitsAndCookies = 'Biscuits and cookies',
    Bread = 'Bread',
    Cereals = 'Cereals',
    CondimentsAndSauces = 'Condiments and sauces',
    Drinks = 'Drinks',
    Desserts = 'Desserts',
    MainCourse = 'Main course',
    Pancake = 'Pancake',
    Preps = 'Preps',
    Preserves = 'Preserves',
    Salads = 'Salads',
    Sandwiches = 'Sandwiches',
    SideDish = 'Side dish',
    Soup = 'Soup',
    Starter = 'Starter',
    Sweets = 'Sweets',
}