'use client';

import {AppShell, Burger, Group, Grid, Skeleton, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarSimple } from '@/components/Navbar/Navbar';
import { RadarChart, AreaChart } from '@mantine/charts';
import { TableBalance } from '@/components/Tables-temp/TableTemp'; //fixme: temp remove
import { IconWallet } from '@tabler/icons-react';

import { data } from '@/app/dashboard/_data'; //fixme: temp remove
import { data2 } from '@/app/dashboard/_data2'; //fixme: temp remove
import '@mantine/charts/styles.css';

export default function BasicAppShell() {
    const [opened, { toggle }] = useDisclosure();

    return (

        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <IconWallet size={30} /> ExpendMate
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
                Main
                <Grid>
                    <Grid.Col span={6}>
                    <AreaChart
                        h={300}
                        data={data2}
                        dataKey="date"
                        series={[
                            { name: 'User1', color: 'indigo.6' },
                            { name: 'User2', color: 'blue.6' },
                            { name: 'User3', color: 'teal.6' },
                        ]}
                        curveType="linear"
                    />
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <RadarChart
                        h={300}
                        data={data}
                        dataKey="product"
                        withPolarRadiusAxis
                        series={[{ name: 'balance', color: 'blue.4', opacity: 0.2 }]}
                    />
                    </Grid.Col>
                </Grid>
                <Title order={4} size="h1">Current balance:</Title>
                <TableBalance />
                <ColorSchemeToggle />
            </AppShell.Main>
        </AppShell>
    );
}