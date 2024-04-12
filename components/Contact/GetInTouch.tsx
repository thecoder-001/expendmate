import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import bg from './bg.svg';
import classes from './GetInTouch.module.css';
import { useForm } from '@mantine/form';

export function GetInTouch() {
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: '',
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            name: (val) => (val.length < 1 ? 'Username should have at least 1 character1' : null),
            message: (val) => (val.length < 1 ? 'Please enter a subject' : null),
            message: (val) => (val.length < 1 ? 'Please enter your review' : null),
        },
    });
    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
                <div className={classes.contacts} style={{backgroundImage: `url(${bg.src})`}}>
                    <Text fz="lg" fw={700} className={classes.title} c="#fff">
                        Contact information
                    </Text>

                    <ContactIconsList/>
                </div>

                {/*<form className={classes.form} onSubmit={(event) => event.preventDefault()}>*/}
                <form className={classes.form} onSubmit={form.onSubmit()}>
                    <Text fz="lg" fw={700} className={classes.title}>
                        Get in touch
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={{base: 1, sm: 2}}>
                            <TextInput label="Your name" placeholder="Your name"/>
                            <TextInput label="Your email" placeholder="hello@mantine.dev" required/>
                        </SimpleGrid>

                        <TextInput mt="md" label="Subject" placeholder="Subject" required/>

                        <Textarea
                            mt="md"
                            label="Your message"
                            placeholder="Please include all relevant information"
                            minRows={3}
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className={classes.control}>
                                Send message
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}
