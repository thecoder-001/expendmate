'use client';

import { UnstyledButton, Group, Avatar, Text, rem, Menu } from '@mantine/core';
import {
    IconArrowsLeftRight,
    IconChevronRight,
    IconLogout,
    IconSettings,
    IconTrash,
    IconUserCircle
} from '@tabler/icons-react';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import classes from './UserButton.module.css';
import { auth } from '../../firebase';


export function UserButton() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName || '');
                setUserEmail(user.email || '');
                setUserAvatar(user.photoURL || '');
            } else {
                setUserName('User');
                setUserEmail('test@test.com');
            }
        });

        return unsubscribe;
    }, []);
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.push('/');
            console.log("Signed out successfully");
        }).catch((error) => {
            // An error happened.
            console.log("Error signing out");
        });
    }
    return (
        <Menu shadow="md" width={200} position="right-end">
            <Menu.Target>
                <UnstyledButton className={classes.user}>
                    <Group>
                        <Avatar
                          src= { userAvatar }
                          radius="xl"
                        > {userName?userName[0].toUpperCase() : <IconUserCircle />}
                        </Avatar>

                        <div style={{ flex: 1 }}>
                            <Text size="sm" fw={500}>
                                {userName}
                            </Text>

                            <Text c="dimmed" size="xs">
                                {userEmail}
                            </Text>
                        </div>
                        {/* eslint-disable-next-line max-len */}
                        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item component="a" href="/dashboard/other"
                  leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                    Settings
                </Menu.Item>
                <Menu.Item
                  onClick={handleLogout}
                  leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
                    Logout
                </Menu.Item>
                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                  leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                >
                    Transfer my data
                </Menu.Item>
                <Menu.Item
                  color="red"
                  leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                >
                    Delete my account
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
