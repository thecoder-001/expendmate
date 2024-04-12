'use client';

import {Select, Title, NumberInput, Switch, useMantineColorScheme, Card} from '@mantine/core';
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import {SwitchesCard} from "@/components/SwitchesCard/SwitchesCard";
import classes from "@/components/SwitchesCard/SwitchesCard.module.css";

export default function ProfileSection() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const data = [
        { value: 'inr', label: '🇮🇳 INR'},
        { value: 'eur', label: '🇪🇺 EUR' },
        { value: 'usd', label: '🇺🇸 USD' },
        { value: 'cad', label: '🇨🇦 CAD' },
        { value: 'gbp', label: '🇬🇧 GBP' },
        { value: 'aud', label: '🇦🇺 AUD' },
    ];
    return (
        <div>
            <Title order={3}>Misc Settings</Title>
            <Card withBorder radius="md" p="xl" className={classes.card}>
                {/* Color Scheme Toggle */}
                <Select
                    label="Change your color scheme"
                    style={{width: '300px'}}
                    data={[
                        {value: 'light', label: 'Light'},
                        {value: 'dark', label: 'Dark'},
                        {value: 'auto', label: 'Auto'},
                    ]}
                    value={colorScheme}
                    onChange={(_value, option) => setColorScheme(_value)}
                /><br/>

                {/* Currency Setting */}
                <Select
                    label="Backup Frequency"
                    style={{width: '300px'}}
                    data={data}
                    placeholder="Select currency"
                /><br/>

                {/* Notification Settings */}

                {/* Backup Settings */}
                <Select
                    label="Backup Frequency"
                    style={{width: '300px'}}
                    data={[
                        {value: 'daily', label: 'Daily'},
                        {value: 'weekly', label: 'Weekly'},
                        {value: 'monthly', label: 'Monthly'},
                    ]}
                    placeholder="Select frequency"
                />
                <br/>
                {/*<Switch*/}
                {/*    label="Receive email notifications"*/}
                {/*    style={{width: '300px'}}*/}
                {/*/>*/}
            </Card><br/>
            <SwitchesCard />
        </div>
    );
}
