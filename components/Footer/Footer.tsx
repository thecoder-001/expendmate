import {Text, Container, ActionIcon, Group, rem} from '@mantine/core';
import {IconBrandTwitter, IconBrandMastodon, IconBrandYoutube, IconBrandGithub} from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import Link from "next/link";
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";

const data = [
    {
        title: 'About',
        links: [
            { label: 'Features', link: '#' },
            { label: 'FAQ', link: '/faq' },
            { label: 'Support', link: '/contact' },
            { label: 'Forums', link: 'https://github.com/thecoder-001/expendmate/discussions' },
        ],
    },
    {
        title: 'Project',
        links: [
            { label: 'Contribute', link: 'https://github.com/thecoder-001/expendmate/' },
            { label: 'Changelog', link: 'https://github.com/thecoder-001/expendmate/commits/master/' },
            { label: 'Releases', link: 'https://github.com/thecoder-001/expendmate/releases' },
        ],
    },
    {
        title: 'Community',
        links: [
            {label: 'Join newsletter', link: '#'},
            {label: 'GitHub discussions', link: 'https://github.com/thecoder-001/expendmate/discussions'},
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                // onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    {/*<MantineLogo size={30} />*/}
                    <Group>
                        <Text size="xs" c="dimmed" className={classes.description}>
                            Toggle theme
                        </Text>
                        <ColorSchemeToggle />
                    </Group>
                    <Text size="xs" c="dimmed" className={classes.description}>
                        The all in one expense tracker<br /> By students, for students
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    by thecoder-001.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{width: rem(18), height: rem(18)}} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandMastodon style={{width: rem(18), height: rem(18)}} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{width: rem(18), height: rem(18)}} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg"
                                color="gray" variant="subtle"
                                component='a' href={"https://github.com/thecoder-001/expendmate/"}>
                        <IconBrandGithub style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}
