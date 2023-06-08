import { IconType } from 'react-icons';

export interface MenuItemProps {
  name: string;
  link: string;
  Icon?: IconType;
  items?: MenuItemProps[];
}

export interface MenuButtonProps {
  name: string;
  Icon?: IconType;
  onClick?: () => void;
}
