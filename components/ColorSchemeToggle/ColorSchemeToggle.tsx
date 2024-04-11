'use client';

import {Button, Group, rem, Switch, useMantineColorScheme, useMantineTheme} from '@mantine/core';
import {IconMoonStars, IconSun} from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({keepTransitions: true});
    const theme = useMantineTheme();

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );
    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );
    // checked={colorScheme === 'dark'} -> hydration error
    return <Switch size="lg" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} onChange={toggleColorScheme} />;
}
