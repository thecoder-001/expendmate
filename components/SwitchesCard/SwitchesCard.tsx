import { Card, Group, Switch, Text } from '@mantine/core';
import classes from './SwitchesCard.module.css';

const data = [
    { title: 'Messages', description: 'Direct messages you have received from other users' },
    { title: 'Review requests', description: 'New transaction review requests from your team members' },
    { title: 'Reminders', description: 'Daily reminders of leftover transactions' },
    {
        title: 'Alerts',
        description: 'Security alerts, new releases, and other important notifications',
    },
];

export function SwitchesCard() {
    const items = data.map((item) => (
        <Group justify="space-between" className={classes.item} wrap="nowrap" gap="xl" key={item.title}>
            <div>
                <Text>{item.title}</Text>
                <Text size="xs" c="dimmed">
                    {item.description}
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
    ));

    return (
        <Card withBorder radius="md" p="xl" className={classes.card}>
            <Text fz="lg" className={classes.title} fw={500}>
                Configure notifications
            </Text>
            <Text fz="xs" c="dimmed" mt={3} mb="xl">
                Choose what notifications you want to receive
            </Text>
            {items}
        </Card>
    );
}
