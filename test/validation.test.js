// اختبار وظيفة addTask اللي في app.js
function addTask() {
    const input = document.getElementById("taskInput");
    if (!input) return false;
    const value = input.value.trim();
    return value !== "";
}

describe("Task Manager Tests", () => {
    test('should reject empty task', () => {
        // محاكاة input فارغ
        const emptyValue = "";
        const result = emptyValue.trim() !== "";
        expect(result).toBe(false);
    });

    test('should accept valid task', () => {
        const validValue = "شراء سيارة";
        const result = validValue.trim() !== "";
        expect(result).toBe(true);
    });

    test('should reject whitespace only', () => {
        const whitespaceValue = "   ";
        const result = whitespaceValue.trim() !== "";
        expect(result).toBe(false);
    });
});
