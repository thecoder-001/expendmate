'use client';

import { useRouter } from 'next/navigation';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Alert,
    Notification,
    Affix,
    PaperProps,
    Divider,
    Stack,
} from '@mantine/core';
import { IconAlertTriangle, IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import classes from './AuthenticationTitle.module.css';
import firebase, { auth } from '../../firebase';

export default function AuthenticationPage() {
    const [type, toggle] = useToggle(['login', 'register']);
    const [error, setError] = useState<string | null>(null);
    const [showRegisterNotification, setShowRegisterNotification] = useState(false);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
            name: (val) => (val.length < 2 ? 'Username should have at least 2 characters' : null),
        },
    });
    const router = useRouter();

    const handleSubmit = async () => {
        setError(null); // Reset the error state
        console.log('testing');
        if (type === 'login') {
            try {
                await signInWithEmailAndPassword(auth, form.values.email, form.values.password);
                // Redirect the user to the dashboard after successful login
                router.push('/dashboard');
            } catch (error) {
                console.error('Error logging in:', error);
                if (error.code === 'auth/invalid-credential') {
                    setError('Invalid credentials');
                } else {
                    // setError('An error occurred. Please try again.');
                    setError(error.message);
                }
            }
        } else {
            try {
                const result = await createUserWithEmailAndPassword(auth,
                    form.values.email,
                    form.values.password
                );
                await updateProfile(result.user, {
                    displayName: form.values.name,
                });
                // Perform additional actions after successful registration
                setError(null);
                setShowRegisterNotification(true);
                toggle(); // Switch back to the login type
                setTimeout(() => {
                    setShowRegisterNotification(false);
                }, 5000);
            } catch (error) {
                console.error('Error registering:', error);
                setError(error.message);
            }
        }
    };

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                {type === 'register'
                    ? 'Already have an account? '
                    : "Don't have an account yet? "}
                <Anchor size="sm" component="button" onClick={() => toggle()}>
                    {type === 'register'
                        ? 'Login'
                        : 'Register'}
                </Anchor>
            </Text>
            {error && (
                <Alert color="red" mt={20} radius="md" icon={<IconAlertTriangle />} title={error}>
                </Alert>
            )}
            {showRegisterNotification && (
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Notification
                      title="Registration Successful"
                      color="teal"
                      icon={<IconCheck size={18} />}
                      onClose={() => setShowRegisterNotification(false)}
                    >
                        You can now log in with your new account.
                    </Notification>
                </Affix>
            )}
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                              label="Name"
                              placeholder="Your name"
                              value={form.values.name}
                              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                              error={form.errors.password && 'Username should have at least 2 characters'}
                              radius="md"
                            />
                        )}
                        <TextInput
                          required
                          label="Email"
                          placeholder="hello@gmail.com"
                          value={form.values.email}
                          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                          error={form.errors.email && 'Invalid email'}
                          radius="md"
                        />

                        <PasswordInput
                          required
                          label="Password"
                          placeholder="Your password"
                          value={form.values.password}
                          onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                          error={form.errors.password && 'Password should include at least 6 characters'}
                          radius="md"
                        />

                        {type === 'register' && (
                            <Checkbox
                              label="I accept terms and conditions"
                              checked={form.values.terms}
                              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>

                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                        <Anchor component={Link} size="sm" href="/recover" c="dimmed">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl" type="submit">
                        {upperFirst(type)}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
