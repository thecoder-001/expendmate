import { useDisclosure } from '@mantine/hooks';
import {Modal, Button, Affix, ActionIcon, TextInput, Group, Notification} from '@mantine/core';
import {IconCheck, IconUserEdit} from "@tabler/icons-react";
import classes from "@/app/recover/ForgotPassword.module.css";
import {useState} from "react";
import {useForm} from "@mantine/form";

export function RelationInputModal() {
    const [opened, { open, close }] = useDisclosure(false);
    const [showRequestNotification, setshowRequestNotification] = useState(false);

    const form = useForm({
        initialValues: {
            userid: '',
        },
        validate: {
            userid: (val) => (/^@\S+$/.test(val) ? null : 'Invalid userid'),
        },
    });
    const handleRequest = async () => {
        setshowRequestNotification(true);
        close();
        setTimeout(() => {
            setshowRequestNotification(false);
        }, 3000);
    };
    return (
        <>
            <Modal opened={opened} onClose={close} title="Add new connection">
                {/* Modal content */}
                <form onSubmit={form.onSubmit(handleRequest)}>
                    <TextInput
                        // type="text"
                        placeholder="@user"
                        label="Enter username:"
                        value={form.values.userid}
                        onChange={(event) => form.setFieldValue('userid', event.currentTarget.value)}
                        error={form.errors.userid && 'Please enter a valid userid'}
                    />
                    <Group justify="space-between" mt="md" className={classes.controls}>
                        <Button variant="filled" radius="md" type="submit">Send request</Button>
                    </Group>
                </form>
            </Modal>
            <Affix position={{bottom: 20, right: 20 }}>
                {/*<Button onClick={open}><IconUserEdit />Open modal</Button>*/}
                <ActionIcon onClick={open} autoContrast aria-label="autoContrast action icon" size="xl" radius="lg" color="lime.4"      style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <IconUserEdit size={20}/>
                </ActionIcon>
            </Affix>
            {showRequestNotification && (
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Notification
                        title="Connection request sent"
                        color="teal"
                        icon={<IconCheck size={18} />}
                        onClose={() => setshowRequestNotification(false)}
                    >
                        Waiting for confirmation from user.
                    </Notification>
                </Affix>
            )}
        </>
    );
}
