'use client';

import { Grid, Title, Tabs, Table, Text } from '@mantine/core';
import { BarChart, LineChart } from '@mantine/charts';
import { pendingTransactionData, transactionTableData } from './_data';

export default function PendingTransactionsSection() {
    return (
        <>
            <Title order={2}>Pending Transactions</Title>
            <Tabs defaultValue="overview">
                <Tabs.List>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview">
                    <Grid>
                        <Grid.Col span={6}>
                            <BarChart
                                data={pendingTransactionData.barChartData}
                                spacing={10}
                                barThickness={25}
                                height={300}
                                axis={{
                                    x: { label: 'Category' },
                                    y: { label: 'Amount' },
                                }}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <LineChart
                                data={pendingTransactionData.lineChartData}
                                height={300}
                                axis={{
                                    x: { label: 'Date' },
                                    y: { label: 'Amount' },
                                }}
                            />
                        </Grid.Col>
                    </Grid>
                </Tabs.Panel>

                <Tabs.Panel value="transactions">
                    <Table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactionTableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.date}</td>
                                <td>{row.category}</td>
                                <td>{row.amount}</td>
                                <td>{row.description}</td>
                                <td>
                                    <Text color={row.status === 'Pending' ? 'orange' : 'green'}>
                                        {row.status}
                                    </Text>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Tabs.Panel>
            </Tabs>
        </>
    );
}
