import Head from 'next/head';
import {ReactNode} from 'react';

import {Navbar} from '../ui';

interface Props {
    children: ReactNode;
    title?: string;
}

export function Layout({children, title}: Props) {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Cristhian Hernandez' />
                <meta
                    name='description'
                    content='Informacion sobre el pokemon xxxx'
                />
            </Head>
            <Navbar />
            <main
                style={{
                    padding: '0px 20px',
                }}>
                {children}
            </main>
        </>
    );
}
