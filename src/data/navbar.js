import {
  IconServer2,
  IconWorld,
  IconBrandDatabricks,
  IconFolderOpen,
  IconRobot,
} from '@tabler/icons-react';

export const navbar = [
  {
    title: 'דף הבית',
    href: '/',
  },
  {
    title: 'תקנון',
    href: '/legal',
  },
  {
    isGroup: true,
    title: 'שירותים ומוצרים',
    children: [
      {
        title: 'שרתים וירטואליים',
        description: 'שרתים וירטואליים בענן',
        icon: <IconServer2 stroke={2} color='#0e87eb' />,
        href: '/services/virtual-servers',
      },
      {
        title: 'אחסון אתרים',
        description: 'אחסון אתרים בענן',
        icon: <IconWorld stroke={2} color='#0e87eb' />,
        href: '/services/web-hosting',
      },
      {
        title: 'שרתים יעודיים',
        description: 'שרתים יעודיים בענן',
        icon: <IconBrandDatabricks stroke={2} color='#0e87eb' />,
        href: '/services/dedicated-servers',
      },
      {
        title: 'אחסון בוטים',
        description: 'אחסון בוטים בענן',
        icon: <IconRobot stroke={2} color='#0e87eb' />,
        href: '/services/bot-hosting',
      },
      {
        title: 'שירותי אחסון קבצים',
        description: 'שירותי אחסון קבצים בענן',
        icon: <IconFolderOpen stroke={2} color='#0e87eb' />,
        href: '/services/storage',
      },
    ],
  },
];
