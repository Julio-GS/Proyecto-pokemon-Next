import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

interface Props{
    pokemonId: number;
}

export const FavoriteCard: React.FC<PropsWithChildren<Props>> = ({pokemonId}) => {

  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
        <Card hoverable clickable css={{ padding: 10 }}>
            <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={'100%'} height={140}
            />                     
        </Card>
    </Grid>
  )
}
