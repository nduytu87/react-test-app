import { HiMenu } from 'react-icons/hi';

import { MenuItem } from './MenuItem';
import { MenuItemProps } from './types';

interface SidebarProps {
  items: MenuItemProps[];
}
export const SideBar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside id="sidebar-multi-level-sidebar" className="fixed w-64 h-screen " aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          {items.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
