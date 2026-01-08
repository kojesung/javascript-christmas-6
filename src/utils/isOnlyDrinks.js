import { DRINKS } from '../constants';

export const isOnlyDrinks = (list) => {
    const filteredList = list.filter((element) => DRINKS.includes(element));
    return filteredList.length === list.length;
};
