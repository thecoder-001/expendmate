'use client'

import { useEffect, useState } from 'react';
import {Container, Title, Text, Card, Grid, Pagination, Group} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';

const HistoryPage = () => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            date: new Date(2023, 3, 1),
            description: 'Groceries',
            amount: 50.00,
        },
        {
            id: 2,
            date: new Date(2023, 3, 5),
            description: 'Dining out',
            amount: 75.00,
        },
        {
            id: 3,
            date: new Date(2023, 3, 10),
            description: 'Movie tickets',
            amount: 20.00,
        },
        {
            id: 4,
            date: new Date(2023, 3, 10),
            description: 'Spare bulb',
            amount: 5.00,
        },
        {
            id: 5,
            date: new Date(2023, 3, 10),
            description: 'Bus fare',
            amount: 10.00,
        },
        {
            id: 6,
            date: new Date(2023, 3, 10),
            description: 'Food',
            amount: 40.00,
        },
        // Add more dummy transactions here
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Container>
            <Title order={2}>Transaction History</Title>

            <Group gap="xl">
                <div>
                    <Calendar
                        fullWidth
                        styles={{
                            day: { height: 50, fontSize: 14 },
                        }}
                    />
                </div>
                <div>
                    <Grid>
                        {transactions
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((transaction) => (
                                <Grid.Col sm={12} key={transaction.id}>
                                    <Card shadow="sm" p="lg" radius="md" withBorder>
                                        <Text weight={500}>{transaction.description}</Text>
                                        <Text color="dimmed" size="sm">
                                            {dayjs(transaction.date).format('MM/DD/YYYY')}
                                        </Text>
                                        <Text color="dimmed" size="sm">
                                            Amount: {transaction.amount.toFixed(2)}
                                        </Text>
                                    </Card>
                                </Grid.Col>
                            ))}
                    </Grid>
                    <br/>
                    <Pagination
                        total={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        position="center"
                        withEdges
                        withControls
                    />
                </div>
            </Group>
        </Container>
    );
};

export default HistoryPage;
