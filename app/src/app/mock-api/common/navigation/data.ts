/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        link: '/home',
    },
    {
        id: 'about',
        title: 'About us',
        type: 'group',

        icon: 'mat_outline:arrow_drop_down',
        children: [
            {
                id: 'who',
                title: 'Who we are',
                type: 'basic',
                link: '/who',
            },
            {
                id: 'team',
                title: 'Our Team',
                type: 'basic',
                link: '/team',
            },
            {
                id: 'contact',
                title: 'Contact',
                type: 'basic',
                link: '/contact',
            },
        ],
    },
    {
        id: 'participate',
        title: 'Take part',
        type: 'group',

        icon: 'mat_outline:arrow_drop_down',
        children: [
            {
                id: 'ambassador',
                title: 'Ambassador Program',
                type: 'basic',
                link: '/ambassador',
            },
            {
                id: 'community',
                title: 'Community',
                type: 'basic',
                link: '/community',
            },
        ],
    },
];
