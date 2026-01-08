import Receipt from '../src/Receipt';

const myReceipt = new Receipt(5, [{ 티본스테이크: 1 }, { 바비큐립: 1 }, { 초코케이크: 2 }, { 제로콜라: 1 }]);

describe('Receipt class test', () => {
    test('Receipt 클래스 검증', () => {
        const receipt = myReceipt.getReceipt();

        expect(receipt.toHaveProperty('menus'));
        expect(receipt.toHaveProperty('totalAmount'));
        expect(receipt.toHaveProperty('totalPromotionAmount'));
        expect(receipt.toHaveProperty('promotionContents'));
        expect(receipt.toHaveProperty('presentationMenu'));
        expect(receipt.toHaveProperty('expectAmount'));
        expect(receipt.toHaveProperty('eventBadge'));

        expect(receipt.totalAmount).toBe(142000);
        expect(receipt.totalPromotionAmount).toBe(31246);
        expect(receipt.presentationMenu).toBe(true);
        expect(receipt.expectAmount).toBe(135754);
    });
});
