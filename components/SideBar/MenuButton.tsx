import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({ name, Icon, onClick }) => {
  const [toggle, setToggle] = useState(false);

  const handleMenuButtonClick = () => {
    setToggle(!toggle);
    onClick?.();
  };

  return (
    <button
      type="button"
      className="flex items-center w-full p-2  rounded-lg  text-white hover:bg-gray-700"
      onClick={handleMenuButtonClick}
    >
      {Icon && <Icon />}
      <span className="flex-1 ml-3 text-left whitespace-nowrap">{name}</span>
      {toggle ? <HiChevronUp /> : <HiChevronDown />}
    </button>
  );
};
