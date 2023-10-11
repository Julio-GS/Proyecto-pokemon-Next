import { Favorites, NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useEffect, useState } from 'react';
import { Layout } from "../../components/layout";

function FavoritesPage(){

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
    

  },[])


  return (
    <Layout title="Pokemon - Favorites">
        
      {
        favoritesPokemons.length === 0
        ? (
          <NoFavorites/>)
          :(
            <Favorites pokemons={favoritesPokemons} />
          )
      }


    
    </Layout>
  )
}


export default FavoritesPage;