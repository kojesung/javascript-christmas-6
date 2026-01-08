import Parser from '../src/Parser';

describe('Parser class test', () => {
    test('예상 방문 날짜를 입력하면 숫자로 반환한다.', () => {
        const visitDate = Parser.visitDateParser('5');
        expect(visitDate).toBe(5);
    });
    test('예상 방문 날짜를 숫자가 아닌 값으로 입력하면 에러를 반환한다.', () => {
        expect(() => Parser.visitDateParser('오일').toThrow('[ERROR]'));
    });
    test('예상 방문 날짜를 1 ~ 31범위가 아닌 값으로 입력하면 에러를 반환한다.', () => {
        expect(() => Parser.visitDateParser('365').toThrow('[ERROR]'));
    });
    test('주문할 메뉴와 개수를 입력하면 배열로 반환한다.', () => {
        const menuList = Parser.menuListParser('티본스테이크-1,바비큐립-1,초코케이크-2');
        expect(menuList).toEqual([{ 티본스테이크: 1 }, { 바비큐립: 1 }, { 초코케이크: 2 }]);
    });
    test('주문할 메뉴와 개수를 20개 이상 입력하면 에러를 반환한다.', () => {
        expect(() => Parser.menuListParser('티본스테이크-1,바비큐립-1,초코케이크-20').toThrow('[ERROR]'));
    });
    test('주문할 메뉴의 개수가 1 이상의 숫자가 아닌 경우 에러를 반환한다.', () => {
        expect(() => Parser.menuListParser('티본스테이크-1,바비큐립-1,초코케이크-0').toThrow('[ERROR]'));
    });
    test('주문할 메뉴의 개수의 형식이 다른 경우 에러를 반환한다.', () => {
        expect(() => Parser.menuListParser('티본스테이크:1,바비큐립:1,초코케이크:2').toThrow('[ERROR]'));
    });
    test('주문할 메뉴에 중복이 있는 경우 경우 에러를 반환한다.', () => {
        expect(() => Parser.menuListParser('티본스테이크-1,티본스테이크-1,초코케이크-2').toThrow('[ERROR]'));
    });
    test('메뉴판에 없는 메뉴가 입력된 경우 에러를 반환한다.', () => {
        expect(() => Parser.menuListParser('킹크랩-1,바비큐립-1,초코케이크-2').toThrow('[ERROR]'));
    });
});
