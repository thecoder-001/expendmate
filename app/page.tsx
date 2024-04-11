'use client';

import { Welcome } from '@/components/Welcome/Welcome';
import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/Header';

export default function HomePage() {
    return (
        <>
            <HeaderMenu />
            <Welcome />
            <Footer />
        </>
    );
}
