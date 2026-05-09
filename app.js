// Car Dealership - Main JavaScript

// بيانات السيارات
const carsData = [
    { id: 1, name: "تويوتا كامري", brand: "toyota", price: "120,000", year: 2024, image: "https://via.placeholder.com/400x200?text=Toyota+Camry" },
    { id: 2, name: "هوندا أكورد", brand: "honda", price: "115,000", year: 2024, image: "https://via.placeholder.com/400x200?text=Honda+Accord" },
    { id: 3, name: "بي إم دبليو X5", brand: "bmw", price: "250,000", year: 2024, image: "https://via.placeholder.com/400x200?text=BMW+X5" }
];

// CAR-1: عرض جميع السيارات
function getAllCars() {
    return carsData;
}

// CAR-2: عرض تفاصيل سيارة معينة
function getCarDetails(carId) {
    return carsData.find(car => car.id === carId);
}

// CAR-3: تصفية السيارات حسب الماركة
function filterCarsByBrand(brand) {
    if (brand === 'all') {
        return carsData;
    }
    return carsData.filter(car => car.brand === brand);
}

// CAR-4: إضافة سيارة جديدة (للأدمن)
function addNewCar(car) {
    const newId = carsData.length + 1;
    const newCar = { id: newId, ...car };
    carsData.push(newCar);
    return newCar;
}

// CAR-5: نموذج اتصال
function validateContactForm(name, phone, car) {
    if (!name || name.trim() === '') return false;
    if (!phone || phone.trim() === '') return false;
    if (!car || car === '') return false;
    return true;
}

// تصدير الدوال للاختبار (للـ Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getAllCars, getCarDetails, filterCarsByBrand, addNewCar, validateContactForm, carsData };
}
