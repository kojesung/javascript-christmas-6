import { MENU_LIST } from '../constants';

export const hasNotMyMenu = (purchasedMenuList) => {
    return purchasedMenuList.some((menuName) => !MENU_LIST.includes(menuName));
};
