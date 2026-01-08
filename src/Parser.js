import { hasDuplicateElement } from './utils/hasDuplicateElement';
import { hasNotMyMenu } from './utils/hasNotMyMenu';
import { isOnlyDrinks } from './utils/isOnlyDrinks';
import { validateNotEmpty, validateNumber, validateNumberInRange } from './utils/validator';

class Parser {
    static visitDateParser(input) {
        const trimmed = validateNotEmpty(input);
        if (!trimmed) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
        const parsedDate = validateNumber(trimmed);
        if (!parsedDate) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
        const inRangeDate = validateNumberInRange(parsedDate, 1, 31);
        if (!inRangeDate) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
        return inRangeDate;
    }

    static menuListParser(input) {
        const trimmed = validateNotEmpty(input);
        if (!trimmed) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        const menuList = trimmed.split(',');
        const parsedMenuList = menuList.map((menu) => {
            const [menuName, count] = menu.split('-');
            if (menuName == undefined || count == undefined)
                throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
            const parsedCount = validateNumber(count);
            if (!parsedCount) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
            const inRangeDate = validateNumberInRange(parsedCount, 1, 19);
            if (!inRangeDate) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
            return { menuName, count: inRangeDate };
        });
        const menuNameList = menuList.map((menu) => {
            const [menuName, _] = menu.split('-');
            return menuName;
        });
        if (hasNotMyMenu(menuNameList)) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        if (hasDuplicateElement(menuNameList)) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        if (isOnlyDrinks(menuNameList)) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        return parsedMenuList;
    }
}
export default Parser;
