import Layout from '@/components/layouts/Layout'
import { FavoritePokemons } from '@/components/pokemon'
import NoFavorites from '@/components/ui/NoFavorites'
import { localFavorites } from '@/utils'
import React, { useEffect, useState } from 'react'

const FavoritesPage = () => {
   const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])


useEffect(() => {
  setFavoritePokemons(localFavorites.pokemons())

}, [ ])


  return (
     <Layout title='Pokemons - favoritos'>
        {
          favoritePokemons.length === 0 
            ? ( <NoFavorites /> )
            : ( <FavoritePokemons pokemons={favoritePokemons} /> )
              }
     </Layout>
  )
}

export default FavoritesPage