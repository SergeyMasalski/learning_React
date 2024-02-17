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

  export interface User {
    name: string;
    mail: string;
  }

  export interface RestaurantsNorm {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
  }

  export interface DishNorm {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
  }

  export interface ReviewNorm {
    id: string;
    userId: string;
    text: string;
    rating: number;
  }

  export interface UserNorm {
    id: string;
    name: string;
  }
}

export default Interfaces;
