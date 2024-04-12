'use client';

import { Accordion, Title, Text, Container } from '@mantine/core';

const FAQ = () => {
    return (
        <Container size="md" my={40}>
            <Title align="center" mb={20}>ExpendMate FAQ</Title>
            <Accordion variant="separated">
                <Accordion.Item value="what-is-ExpendMate">
                    <Accordion.Control>What is ExpendMate?</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            ExpendMate is a user-friendly group expense tracking application that helps
                            you and your friends or colleagues manage shared expenses seamlessly. It
                            allows you to create groups, track individual and group expenses, and
                            easily settle up with your group members.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="how-to-create-group">
                    <Accordion.Control>How do I create a group?</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            To create a group, simply click on the "Create Group" button on the
                            dashboard. You will be prompted to enter a group name and invite your
                            friends or colleagues to join. Once they accept the invitation, you can
                            start tracking expenses together.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="add-expenses">
                    <Accordion.Control>How do I add expenses?</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            To add an expense, click on the "Add Expense" button on the group page.
                            You will be asked to enter the expense details, such as the amount, the
                            person who paid, and the category. Once you submit the expense, it will be
                            added to the group's expense tracker.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="settle-up">
                    <Accordion.Control>How do I settle up with my group?</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            ExpendMate automatically calculates the amount owed by each group member
                            based on the expenses added. You can view the settlement details on the
                            group page. To settle up, simply click on the "Settle Up" button, and
                            ExpendMate will guide you through the process.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="support">
                    <Accordion.Control>How can I get support?</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            If you have any questions or issues, please don't hesitate to reach out to
                            our support team at support@ExpendMate.com. We're here to help!
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;
