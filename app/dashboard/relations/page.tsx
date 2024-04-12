'use client';

import {Avatar, Badge, Table, Group, Text, Select, rem, Menu, ActionIcon} from '@mantine/core';
import {IconDots, IconMessages, IconNote, IconPencil, IconReportAnalytics, IconTrash} from "@tabler/icons-react";
import { Sparkline } from '@mantine/charts';

const data = [
    {
        avatar:
            'https://avatars.githubusercontent.com/u/25097841?v=4',
        name: 'Rob',
        trend:[10, 20, 20, -40, 40, 10, 10],
        email: 'rob@gmail.com',
        relation: 'Roommate',
        balance: '+₹10',
        active: true,
    },
    {
        avatar:
            '',
        name: 'Amy',
        trend:[300, 20, 240, -40, 40, 10, 800],
        email: 'amy@gmail.com',
        relation: 'Friend',
        balance: '+₹800',
        active: true,
    },
    {
        avatar:
            '',
        name: 'Aman',
        trend:[210, 20, 240, -40, 84, 10, -94],
        email: 'aman@yahoo.com',
        relation: 'Family',
        balance: '-₹94',
        active: false,
    },
    {
        avatar:
            '',
        name: 'Bill',
        trend:[-900, 20, 570, 0, 40, 10, 21],
        email: 'bill@gmail.com',
        relation: 'Roommate',
        balance: '+₹32',
        active: true,
    },
    {
        avatar:
            '',
        name: 'Mike',
        trend:[600, 20, 20, -40, 80, 10, -120],
        email: 'mike@gmail.com',
        relation: 'Friend',
        balance: '-₹120',
        active: false,
    },
];

const relationsData = ['Roommate', 'Friend', 'Family'];

export default function UsersrelationsTable() {
    const rows = data.map((item) => (
        <Table.Tr key={item.name}>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={40} src={item.avatar} radius={40} />
                    <div>
                        <Text fz="sm" fw={500}>
                            {item.name}
                        </Text>
                        <Text fz="xs" c="dimmed">
                            {item.email}
                        </Text>
                    </div>
                </Group>
            </Table.Td>

            <Table.Td>
                <Select
                    data={relationsData}
                    defaultValue={item.relation}
                    variant="unstyled"
                    allowDeselect={false}
                />
            </Table.Td>
            <Table.Td>
                    <Sparkline
                        w={100}
                        h={30}
                        data={item.trend}
                        curveType="linear"
                        color="blue"
                        fillOpacity={0.6}
                        strokeWidth={2}
                        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
                    />
            </Table.Td>
            <Table.Td><Text fz="sm">{item.balance}</Text></Table.Td>
            <Table.Td>
                {item.active ? (
                    <Badge fullWidth variant="light">
                        Positive
                    </Badge>
                ) : (
                    <Badge color="gray" fullWidth variant="light">
                        In Debt
                    </Badge>
                )}
            </Table.Td>
            <Table.Td>
                <Group gap={0} justify="flex-end">
                    <ActionIcon variant="subtle" color="gray">
                        <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon>
                    <Menu
                        transitionProps={{ transition: 'pop' }}
                        withArrow
                        position="bottom-end"
                        withinPortal
                    >
                        <Menu.Target>
                            <ActionIcon variant="subtle" color="gray">
                                <IconDots style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={
                                    <IconMessages style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                Send message
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<IconNote style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                            >
                                Add note
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconReportAnalytics style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                History
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                                color="red"
                            >
                                Delete connection
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Employee</Table.Th>
                        <Table.Th>Relation</Table.Th>
                        <Table.Th>Trend</Table.Th>
                        <Table.Th>Balance</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}
