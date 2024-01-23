namespace Interfaces {
  export interface Ingredient {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
  }

  export interface Review {
    id: string;
    user: string;
    text: string;
    rating: number;
  }

  export interface Restaurant {
    id: string;
    name: string;
    menu: Interfaces.Ingredient[];
    reviews: Interfaces.Review[];
  }
}

export default Interfaces;
