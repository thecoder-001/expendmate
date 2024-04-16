import { useDisclosure } from '@mantine/hooks';
import {
    Modal,
    Button,
    ActionIcon,
    Affix,
    Select,
    Input,
    rem,
    NativeSelect,
    TextInput,
    MultiSelect, Group
} from '@mantine/core';
import {IconSquareRoundedPlus} from "@tabler/icons-react";
import { DateTimePicker } from '@mantine/dates';
import '@mantine/dates/styles.css';

import classes from "@/app/recover/ForgotPassword.module.css";

export function InputModal() {
    const [opened, { open, close }] = useDisclosure(false);
    const data = [
        { value: 'inr', label: '🇮🇳 INR'},
        { value: 'eur', label: '🇪🇺 EUR' },
        { value: 'usd', label: '🇺🇸 USD' },
        { value: 'cad', label: '🇨🇦 CAD' },
        { value: 'gbp', label: '🇬🇧 GBP' },
        { value: 'aud', label: '🇦🇺 AUD' },
    ];

    const select = (
        <NativeSelect
            data={data}
            rightSectionWidth={28}
            styles={{
                input: {
                    fontWeight: 500,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    width: rem(92),
                    marginRight: rem(-2),
                },
            }}
        />
    );

    return (
        <>
            <Modal opened={opened} onClose={close} title="New transaction">
                {/*<Input size="lg" radius="md" placeholder="Amount" />*/}
                <TextInput
                    type="number"
                    placeholder="1000"
                    label="Transfer amount"
                    rightSection={select}
                    rightSectionWidth={92}
                />
                <Select
                    mt="md"
                    comboboxProps={{ withinPortal: true }}
                    data={['Food', 'Travel', 'Medical', 'Misc']}
                    placeholder="Pick one"
                    label="Expense category"
                />
                <MultiSelect
                    label="Share expense with"
                    placeholder="Pick value"
                    data={['Alex', 'John', 'Aman', 'Amy']}
                />
                    <DateTimePicker
                        clearable
                        defaultValue={new Date()}
                        label="Pick date and time"
                        placeholder="Pick date and time"
                    />
                <Group justify="space-between" mt="lg" className={classes.controls}>
                    <Button variant="filled" size="md" radius="md" onClick={close}>Submit</Button>
                </Group>
                {/* Modal content */}
            </Modal>

            <Affix position={{ bottom: 20, right: 20 }}>
                <ActionIcon onClick={open}
                    autoContrast aria-label="autoContrast action icon"
                    size="xl" radius="lg" color="lime.4"
                    style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <IconSquareRoundedPlus size={20} />
                </ActionIcon>
            </Affix>
        </>
    );
}
