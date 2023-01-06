import {Spacer, Text, useTheme} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    const {theme} = useTheme();
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                padding: "0px 20px",
                backgroundColor: theme?.colors.gray50.value,
            }}
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="ditto"
                width={70}
                height={70}
            />
            <Link href="/">
                <Text css={{margin: 0}} color="white" h4>
                    Pokemón
                </Text>
            </Link>
            <Spacer css={{flex: 1}} />
            <Text color="white" h4>
                Favoritos
            </Text>
        </div>
    );
}

