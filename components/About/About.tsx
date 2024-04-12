import { Container, Title, Text, Grid, Card, Avatar } from '@mantine/core';

const About = () => {
    return (
        <Container size="lg" my={40}>
            <Title align="center" mb={20}>About ExpendMate</Title>
            <Text align="center" mb={40}>
                ExpendMate is a group expense tracking application developed by a university
                sophomore as part of their project. The goal is to simplify the process of
                managing shared expenses for individuals and teams.
            </Text>

            <Title order={2} mb={20}>Meet the Developer</Title>
            <Grid>
                <Grid.Col xs={12} sm={6} md={4}>
                    <Card shadow="sm" padding="lg">
                        <Card.Section>
                            <Avatar src="https://avatars.githubusercontent.com/u/25097841?v=4" size={120} radius={120} mx="auto" />
                        </Card.Section>
                        <Text weight={500} size="lg" align="center" mt={10}>
                            thecoder-001
                        </Text>
                        <Text color="dimmed" size="sm" align="center">
                            University Sophomore
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>

            <Title order={2} mt={40} mb={20}>Our Mission</Title>
            <Text>
                The mission of ExpendMate is to help individuals and teams stay on top of their
                finances and eliminate the hassle of settling up with group members. By
                providing a simple and intuitive expense tracking tool, we aim to make group
                expense management a breeze.
            </Text>
        </Container>
    );
};

export default About;
