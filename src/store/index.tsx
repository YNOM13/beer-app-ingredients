import { create } from "zustand";

export interface IBeer {
  name: string;
  id: number;
  image_url: string;
  description: string;
  ingredients: string[];
}

interface BeersState {
  beers: IBeer[];
  isLoading: boolean;
  errors: string[];
  fetchBeer: () => void;
  selectedBeer:IBeer[]
  handleSelectBeer: (beer: IBeer) => void;
  deleteBeer:(id:number)=>void
}

export const useBeersStore = create<BeersState>((set) => ({
  beers: [],
  selectedBeer:[],
  isLoading: false,
  errors: [],
  handleSelectBeer: (beer: IBeer) => {
    set((prevState) => ({
      selectedBeer: Array.from(new Set([...prevState.selectedBeer, beer])),
      //if it won`t work you should delete Array.from(new Set)
    }));
  },

  deleteBeer: (id:number) => set((state)=>({
    selectedBeer: state.selectedBeer.filter(i=>i.id !== id)
  })),

  fetchBeer: async () => {
    set({ isLoading: true });
    try {
      const result = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=15");
      const json = await result.json();
      const beerDataOfElements = json.map((beer: any) => {
        const newIngredients: any = [];
        Object.keys(beer.ingredients).forEach((element) => {
          if (Array.isArray(beer.ingredients[element])) {
            beer.ingredients[element].forEach((ingredients: any) =>
              newIngredients.push(ingredients.name)
            );
          }
        });
        return {
          ...beer,
          ingredients: Array.from(new Set(newIngredients)),
        };
      });
      set({ beers: beerDataOfElements, isLoading: false });
    } catch (error) {
      set({ isLoading: false, errors: ["Failed to fetch beers."] });
    }
  },
}));
