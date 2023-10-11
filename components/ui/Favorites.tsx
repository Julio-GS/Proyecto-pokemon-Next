import { Grid } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { FavoriteCard } from "../pokemon";

interface Props {
    pokemons: number[];

}

export const Favorites: React.FC<PropsWithChildren<Props>> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
            pokemons.map(id => (
                <FavoriteCard pokemonId={id} key={id}/>
            ))
        }
    </Grid.Container>
  )
}
