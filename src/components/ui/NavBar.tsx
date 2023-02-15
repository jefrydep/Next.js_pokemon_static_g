import { Spacer, Text, useTheme } from "@nextui-org/react";
import NavbarLink from "@nextui-org/react/types/navbar/navbar-link";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        width={70}
        height={70}
        alt="pikachu"
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png"
        }
      />
      <Link href={"/"}>
        
        {/* <Text color="white" h2>p</Text> */}
        <Text color="white" h3>
          Pokemon
        </Text>
      </Link>

      <Spacer
        css={{
          flex: 1,
        }}
      />
      <Link href={'/favoritos'}>
      <Text color="white">Favoritos</Text>
      </Link>
      {/* <span>Pokemon</span> */}
    </div>
  );
};

export default NavBar;
