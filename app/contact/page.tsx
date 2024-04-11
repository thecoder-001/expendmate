'use client';

import { Container, Title } from '@mantine/core';
import { Footer } from '@/components/Footer/Footer';
import { HeaderMenu } from '@/components/Header/Header';
import { GetInTouch } from '@/components/Contact/GetInTouch';

export default function HomePage() {
    return (
        <>
            <HeaderMenu />
            <Container>
                <Title order={1}>Contact our team</Title>
                <GetInTouch />
            </Container>
            <Footer />
        </>
    );
}
