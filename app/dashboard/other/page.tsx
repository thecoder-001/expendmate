'use client';

import {Select, Title, useMantineColorScheme} from '@mantine/core';
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";

export default function ProfileSection() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    return (
        <div>
            <Title order={3}>Misc settings</Title>
            {/*<ColorSchemeToggle />*/}
            <br />
            <Select
              label="Change your color scheme"
              style={{ width: '300px' }}
              data={[{ value: 'light', label: 'Light' },
                    { value: 'dark', label: 'Dark' },
                    { value: 'auto', label: 'Auto' }]}
              value={colorScheme}
              onChange={(_value, option) => setColorScheme(_value)}
            />
        </div>
    );
}
