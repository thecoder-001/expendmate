import { Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from './TableTemp.module.css';

const data = [
    {
        name: 'Ayush',
        year: 2024,
        balance: { positive: 2223, negative: 259 },
    },
    {
        name: 'Aman',
        year: 2023,
        balance: { positive: 5677, negative: 1265 },
    },
    {
        name: 'Alex',
        year: 2022,
        balance: { positive: 3487, negative: 1845 },
    },
    {
        name: 'Dune',
        year: 2024,
        balance: { positive: 8576, negative: 663 },
    },
    {
        name: 'Test',
        year: 2022,
        balance: { positive: 6631, negative: 993 },
    },
    {
        name: 'Max',
        year: 2024,
        balance: { positive: 8124, negative: 1847 },
    },
];

export function TableBalance() {
    const rows = data.map((row) => {
        const totalBalance = row.balance.negative + row.balance.positive;
        const positiveBalance = (row.balance.positive / totalBalance) * 100;
        const negativeBalance = (row.balance.negative / totalBalance) * 100;

        return (
            <Table.Tr key={row.name}>
                <Table.Td>
                    <Anchor component="button" fz="sm">
                        {row.name}
                    </Anchor>
                </Table.Td>
                <Table.Td>{row.year}</Table.Td>
                {/*<Table.Td>*/}
                {/*    <Anchor component="button" fz="sm">*/}
                {/*        {row.author}*/}
                {/*    </Anchor>*/}
                {/*</Table.Td>*/}
                <Table.Td>{Intl.NumberFormat().format(totalBalance)}</Table.Td>
                <Table.Td>
                    <Group justify="space-between">
                        <Text fz="xs" c="teal" fw={700}>
                            {positiveBalance.toFixed(0)}%
                        </Text>
                        <Text fz="xs" c="red" fw={700}>
                            {negativeBalance.toFixed(0)}%
                        </Text>
                    </Group>
                    <Progress.Root>
                        <Progress.Section
                            className={classes.progressSection}
                            value={positiveBalance}
                            color="teal"
                        />

                        <Progress.Section
                            className={classes.progressSection}
                            value={negativeBalance}
                            color="red"
                        />
                    </Progress.Root>
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="xs">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Last change</Table.Th>
                        {/*<Table.Th>Author</Table.Th>*/}
                        <Table.Th>Amount</Table.Th>
                        <Table.Th>Overall account</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}