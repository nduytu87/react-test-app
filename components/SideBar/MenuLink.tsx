import Link from 'next/link';
import { MenuItemProps } from './types';

export const MenuLink: React.FC<MenuItemProps> = ({ name, link, Icon }) => {
  return (
    <Link href={link} className="flex items-center p-2 rounded-lg  text-white hover:bg-gray-700">
      {Icon && <Icon />}
      <span className="ml-3">{name}</span>
    </Link>
  );
};
