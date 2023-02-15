import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import { Button } from "@nextui-org/react";
import Layout from "@/components/layouts/Layout";
import { GetStaticProps } from "next";
import { PropsWithChildren } from "react";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";
// const inter = Inter({ subsets: ["latin"] });
interface Props{
  pokemons:SmallPokemon[];
}
export   const  Home = ({pokemons}:Props)=> {
  // console.log({props})
  return (
    <>
      <main className={styles.main}>
        <Layout title="Listado de Pokemones" />
        <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>
      </main>
    </>
  );
}
export default Home;

// export async function getStaticProps(context){
//   return{
//     props:{}
//   }
// }

// esta funcion se ejecuta en el build time
//en el tiempo de construccin de la aplicacion

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const {data}= await
  // console.log(props)
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons:SmallPokemon[]= data.results.map((poke,i)=>({
    ...poke,
    id:i + 1,
    imag:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  return {
    props: {
      pokemons
    },
  };
};
