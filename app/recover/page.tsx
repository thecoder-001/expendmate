'use client';

import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Notification,
    Group,
    Anchor,
    Center,
    Box,
    rem, Alert, Affix,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconAlertTriangle, IconArrowLeft, IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import classes from './ForgotPassword.module.css';
import { auth } from '../../firebase';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [showResetNotification, setShowResetNotification] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setError(null);
            setShowResetNotification(true);
            setTimeout(() => {
                setShowResetNotification(false);
                router.push('/login');
            }, 3000);
        } catch (error1) {
            console.error('Error resetting password:', error1);
            setError(error1.message);
        }
    };
    return (
        <Container size={460} my={30}>
            <Title className={classes.title} ta="center">
                Forgot your password?
            </Title>
            <Text c="dimmed" fz="sm" ta="center">
                Enter your email to get a reset link
            </Text>

            {showResetNotification && (
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Notification
                      title="Password Reset Email Sent"
                      color="teal"
                      icon={<IconCheck size={18} />}
                      onClose={() => setShowResetNotification(false)}
                    >
                        Please check your email to reset your password.
                    </Notification>
                </Affix>
            )}

            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                {error && (

                    <Alert
                      title={error}
                      color="red"
                      icon={<IconAlertTriangle />}
                      onClose={() => setError(null)}
                    >
                    </Alert>
                )}
                <TextInput
                  label="Your email"
                  placeholder="me@expendmate.com"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
                <Group justify="space-between" mt="lg" className={classes.controls}>
                    <Anchor c="dimmed" size="sm" className={classes.control}>
                        <Center inline>
                            <IconArrowLeft
                              style={{ width: rem(12), height: rem(12) }}
                              stroke={1.5}
                            />
                            <Anchor component={Link} size="sm" href="/login" c="dimmed">
                                Back to the login page
                            </Anchor>
                        </Center>
                    </Anchor>
                    <Button className={classes.control} onClick={handleResetPassword}>
                        Reset password
                    </Button>
                </Group>
            </Paper>
        </Container>
    );
}
