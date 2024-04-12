'use client';

import {Button, Paper, PasswordInput, TextInput, Title,Text} from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import {upperFirst} from "@mantine/hooks";
import '@mantine/dropzone/styles.css';
export default function ProfileSection() {
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
            name: (val) => (val.length < 1 ? 'Username should have at least 1 character1' : null),
        },
    });
    return (
        <div>
            <Title order={3}>Profile Section</Title>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit({})}>
                    <Dropzone
                        accept={[
                            MIME_TYPES.png,
                            MIME_TYPES.jpeg,
                            MIME_TYPES.svg,
                            MIME_TYPES.gif,
                        ]}
                        onDrop={() => {}}
                    >
                        <Text ta="center">Upload profile picture</Text>
                    </Dropzone>
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        value={form.values.name}
                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                        error={form.errors.name && 'Username should have at least 1 character'}
                        radius="md"
                    />
                    <TextInput
                        label="Email"
                        placeholder="hello@gmail.com"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        radius="md"
                    />
                    <PasswordInput
                        label="Old password"
                        placeholder="Your new password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />
                    <PasswordInput
                        label="Confirm password"
                        placeholder="Repeat your new password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />
                    <Button fullWidth mt="xl" type="submit">
                        {upperFirst('Update')}
                    </Button>
                </form>
            </Paper>
        </div>
);
}
