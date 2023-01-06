import {Link, Spacer, Text, useTheme} from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export function Navbar() {
    const {theme} = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0px 20px',
                backgroundColor: theme?.colors.gray50.value,
            }}>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt='ditto'
                width={70}
                height={70}
            />
            <NextLink href='/' passHref>
                <Link>
                    <Text css={{margin: 0}} color='white' h4>
                        Pokemón
                    </Text>
                </Link>
            </NextLink>
            <Spacer css={{flex: 1}} />
            <NextLink href='/favorites' passHref>
                <Link>
                    <Text color='white' h4>
                        Favoritos
                    </Text>
                </Link>
            </NextLink>
        </div>
    );
}
