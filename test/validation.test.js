describe('Basic Tests', () => {
    test('should pass basic math', () => {
        expect(1 + 1).toBe(2);
    });

    test('should pass string check', () => {
        expect("car").toBe("car");
    });

    test('should detect empty string', () => {
        const emptyValue = "";
        expect(emptyValue.trim() === "").toBe(true);
    });

    test('should detect non-empty string', () => {
        const validValue = "Toyota";
        expect(validValue.trim() !== "").toBe(true);
    });
});
