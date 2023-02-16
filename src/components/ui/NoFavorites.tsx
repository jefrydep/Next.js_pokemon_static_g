import { Container, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        alignSelf: "center",
        // backgroundColor: "red",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        alt="pokemon Image"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        
      />
    </Container>
  );
};

export default NoFavorites;
