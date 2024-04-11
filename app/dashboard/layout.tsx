'use client';

import {AppShell, Burger, Group, Grid, Skeleton, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarSimple } from '@/components/Navbar/Navbar';
import { IconWallet } from '@tabler/icons-react';

import '@mantine/charts/styles.css';
import DashboardSection from "@/components/DashboardSection/DashboardSection";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";

export default function Shell({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

    return (

        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group justify="space-between" h="100%" px="md">
                    <Group>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <IconWallet size={30} /> ExpendMate
                    </Group>
                    <Group>
                        <ColorSchemeToggle />
                    </Group>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <NavbarSimple />
                {/*Navbar*/}
                {/*{Array(15)*/}
                {/*    .fill(0)*/}
                {/*    .map((_, index) => (*/}
                {/*        <Skeleton key={index} h={28} mt="sm" animate={false} />*/}
                {/*    ))}*/}
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
