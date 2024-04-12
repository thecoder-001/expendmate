import { Group, Code } from '@mantine/core';
import {
    IconBellRinging,
    IconHome,
    IconCalendar,
    IconSettings,
    IconUser,
    IconDatabaseImport,
    IconReceipt2,
} from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';
import classes from './NavbarSimple.module.css';
import { UserButton } from "@/components/UserButton/UserButton";
import Link from "next/link";

const data = [
    // { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '/dashboard', label: 'Dashboard', icon: IconHome },
    { link: '/dashboard/pending', label: 'Pending', icon: IconReceipt2 },
    { link: '', label: 'Groups', icon: IconDatabaseImport },
    { link: '/dashboard/history', label: 'History', icon: IconCalendar },
    { link: '/dashboard/profile', label: 'Profile', icon: IconUser },
    { link: '/dashboard/other', label: 'Other Settings', icon: IconSettings },
];

export function NavbarSimple() {
    // const [active, setActive] = useState('Dashboard');
    // const router = useRouter();
    const pathname = usePathname();

    const links = data.map((item) => (
        <Link
          className={classes.link}
          data-active={item.link === pathname || undefined}
          href={item.link}
          key={item.label}
          // onClick={(event) => {
          //       event.preventDefault();
          //       setActive(item.label);
          //       router.push(item.link);
          //   }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                {/*<Group className={classes.header} justify="space-between">*/}
                {/*    <IconWallet size={28} />*/}
                {/*    <Code fw={700}>v3.1.2</Code>*/}
                {/*</Group>*/}
                { links }
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
