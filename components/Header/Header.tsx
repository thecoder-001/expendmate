import { Menu, Group, Center, Burger, Container, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconWallet } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './HeaderMenu.module.css';

const links = [
    { link: '/about', label: 'About' },
    {
        link: '/resources',
        label: 'Learn',
        links: [
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { link: '/contact', label: 'Contact us' },
    {
        link: '/faq',
        label: 'Support',
        links: [
            { link: '/faq', label: 'FAQ' },
            { link: 'https://www.github.com/thecoder-001/expendmate/issues', label: 'Forums' },
        ],
    },
];

export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Link href={item.link} key={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Menu.Item>{item.label}</Menu.Item>
            </Link>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <Link href={link.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link href={link.link} key={link.label} className={classes.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                {link.label}
            </Link>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}><IconWallet size={28} /></Link>
                    {/*<IconWallet size={28} />*/}
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <Group visibleFrom="sm">
                        <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}><Button variant="default">Log in</Button></Link>
                        <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}><Button>Sign up</Button></Link>
                    </Group>
                </div>
            </Container>
        </header>
    );
}
