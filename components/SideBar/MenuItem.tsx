import { useCallback, useMemo, useState } from 'react';

import { MenuLink } from './MenuLink';
import { MenuButton } from './MenuButton';
import { MenuItemProps } from './types';

export const MenuItem: React.FC<MenuItemProps> = ({ name, link, Icon, items = [] }) => {
  const [open, setOpen] = useState(false);
  const isExpandable = useMemo(() => items && items.length > 0, [items]);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const renderMenuItemRoot = useCallback(
    () =>
      isExpandable ? (
        <MenuButton name={name} Icon={Icon} onClick={handleClick} />
      ) : (
        <MenuLink name={name} Icon={Icon} link={link} />
      ),
    [Icon, handleClick, isExpandable, link, name],
  );

  const renderMenuItemChildren = useCallback(
    () =>
      isExpandable &&
      open && (
        <ul className="px-5">
          {items.map((item, index) => (
            <MenuItem {...item} key={index}></MenuItem>
          ))}
        </ul>
      ),
    [isExpandable, items, open],
  );

  return (
    <li>
      {renderMenuItemRoot()}
      {renderMenuItemChildren()}
    </li>
  );
};
