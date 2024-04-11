'use client';

import { Grid, Title } from '@mantine/core';
import { AreaChart, RadarChart } from '@mantine/charts';
import { data2 } from '@/app/dashboard/_data2';
import { data } from '@/app/dashboard/_data';
import { TableBalance } from '@/components/Tables-temp/TableTemp';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export default function DashboardSection() {
    return (
        <>
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
            <ColorSchemeToggle /></>
    );
}
