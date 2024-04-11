import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
    IconBellRinging,
    IconHome,
    IconCalendar,
    IconSettings,
    IconUser,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
    IconWallet,
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import { UserButton } from "@/components/UserButton/UserButton";

const data = [
    // { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Dashboard', icon: IconHome },
    { link: '', label: 'Pending', icon: IconReceipt2 },
    { link: '', label: 'Groups', icon: IconDatabaseImport },
    { link: '', label: 'History', icon: IconCalendar },
    { link: '', label: 'Profile', icon: IconUser },
    { link: '', label: 'Other Settings', icon: IconSettings },
];

export function NavbarSimple() {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                {/*<Group className={classes.header} justify="space-between">*/}
                {/*    <IconWallet size={28} />*/}
                {/*    <Code fw={700}>v3.1.2</Code>*/}
                {/*</Group>*/}
                {links}
            </div>

            <div className={classes.footer}>
                <UserButton />
                {/*<a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>*/}
                {/*    <IconLogout className={classes.linkIcon} stroke={1.5} />*/}
                {/*    <span>Logout</span>*/}
                {/*</a>*/}
            </div>
        </nav>
    );
}
