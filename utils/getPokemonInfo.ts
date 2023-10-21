import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const url = nameOrId.toLowerCase();

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${url}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
