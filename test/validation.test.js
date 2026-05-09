// استيراد الدوال من app.js
const { getAllCars, getCarDetails, filterCarsByBrand, addNewCar, validateContactForm, carsData } = require('../app.js');

// ========== CAR-1: عرض جميع السيارات ==========
describe('CAR-1: عرض جميع السيارات', () => {
    test('getAllCars should return array of cars', () => {
        const cars = getAllCars();
        expect(Array.isArray(cars)).toBe(true);
        expect(cars.length).toBeGreaterThan(0);
    });

    test('each car should have id, name, brand, price, year', () => {
        const cars = getAllCars();
        cars.forEach(car => {
            expect(car).toHaveProperty('id');
            expect(car).toHaveProperty('name');
            expect(car).toHaveProperty('brand');
            expect(car).toHaveProperty('price');
            expect(car).toHaveProperty('year');
        });
    });
});

// ========== CAR-2: عرض تفاصيل السيارة ==========
describe('CAR-2: عرض تفاصيل السيارة', () => {
    test('getCarDetails should return correct car for id=1', () => {
        const car = getCarDetails(1);
        expect(car).toBeDefined();
        expect(car.id).toBe(1);
        expect(car.name).toBe('تويوتا كامري');
    });

    test('getCarDetails should return undefined for non-existing id', () => {
        const car = getCarDetails(999);
        expect(car).toBeUndefined();
    });
});

// ========== CAR-3: تصفية السيارات ==========
describe('CAR-3: تصفية السيارات حسب الماركة', () => {
    test('filterCarsByBrand("all") should return all cars', () => {
        const cars = filterCarsByBrand('all');
        expect(cars.length).toBe(carsData.length);
    });

    test('filterCarsByBrand("toyota") should return only toyota cars', () => {
        const cars = filterCarsByBrand('toyota');
        cars.forEach(car => {
            expect(car.brand).toBe('toyota');
        });
    });

    test('filterCarsByBrand("bmw") should return only bmw cars', () => {
        const cars = filterCarsByBrand('bmw');
        cars.forEach(car => {
            expect(car.brand).toBe('bmw');
        });
    });
});

// ========== CAR-4: إضافة سيارة جديدة ==========
describe('CAR-4: إضافة سيارة جديدة', () => {
    test('addNewCar should add car and return new id', () => {
        const newCar = { name: 'سيارة جديدة', brand: 'new', price: '100,000', year: 2024 };
        const result = addNewCar(newCar);
        expect(result.id).toBeDefined();
        expect(result.name).toBe('سيارة جديدة');
    });
});

// ========== CAR-5: نموذج اتصال ==========
describe('CAR-5: نموذج اتصال', () => {
    test('validateContactForm should accept valid data', () => {
        const result = validateContactForm('أحمد', '0501234567', 'تويوتا');
        expect(result).toBe(true);
    });

    test('validateContactForm should reject empty name', () => {
        const result = validateContactForm('', '0501234567', 'تويوتا');
        expect(result).toBe(false);
    });

    test('validateContactForm should reject empty phone', () => {
        const result = validateContactForm('أحمد', '', 'تويوتا');
        expect(result).toBe(false);
    });
});
