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
        title: 'Sobre nós',
        type: 'group',

        icon: 'mat_outline:arrow_drop_down',
        children: [
            {
                id: 'who',
                title: 'Quem nós somos',
                type: 'basic',
                link: '/who',
            },
            {
                id: 'team',
                title: 'Nosso time',
                type: 'basic',
                link: '/team',
            },
            {
                id: 'contact',
                title: 'Contato',
                type: 'basic',
                link: '/contact',
            },
        ],
    },
    {
        id: 'participate',
        title: 'Faça parte',
        type: 'group',

        icon: 'mat_outline:arrow_drop_down',
        children: [
            {
                id: 'ambassador',
                title: 'Programa de Embaixadores',
                type: 'basic',
                link: '/ambassador',
            },
            {
                id: 'community',
                title: 'Comunidade',
                type: 'basic',
                link: '/community',
            },
        ],
    },
];
