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

    static menuListParser() {}
}
export default Parser;
