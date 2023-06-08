import { HiLogin, HiDuplicate, HiOutlineHome, HiInformationCircle } from 'react-icons/hi';

import { MenuItemProps, SideBar } from '@/components';

const appMenuItems: MenuItemProps[] = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: HiOutlineHome,
  },
  {
    name: 'Information',
    link: '/#',
    Icon: HiInformationCircle,
  },

  {
    name: 'Nested Pages',
    Icon: HiDuplicate,
    link: '#',
    items: [
      {
        name: 'Level 2',
        link: '#',
      },
      {
        name: 'Level 2',
        link: '#',
        items: [
          {
            name: 'Level 3',
            link: '#',
          },
          {
            name: 'Level 3',
            link: '#',
          },
        ],
      },
    ],
  },
  {
    name: 'Login',
    link: '/login',
    Icon: HiLogin,
  },
];

export const AppSideBar = () => {
  return <SideBar items={appMenuItems} />;
};
