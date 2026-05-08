// Car Dealership - Main JavaScript

// عرض تفاصيل السيارة
function showCarDetails(carName, carPrice, carYear, carEngine) {
    alert("🚗 " + carName + 
          "\n💰 السعر: " + carPrice + " ر.س" + 
          "\n🏭 الموديل: " + carYear + 
          "\n⚙️ المحرك: " + carEngine);
}

// فلترة السيارات
function filterCars() {
    var brand = document.getElementById('brandFilter').value;
    var allCars = document.querySelectorAll('.car-card');
    
    for(var i = 0; i < allCars.length; i++) {
        if(brand === 'all') {
            allCars[i].style.display = 'block';
        } else if(allCars[i].getAttribute('data-brand') === brand) {
            allCars[i].style.display = 'block';
        } else {
            allCars[i].style.display = 'none';
        }
    }
}

// نموذج الاتصال
function showContactForm() {
    alert("📞 سيتم تفعيل نموذج الاتصال قريباً");
}

// التأكد من تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ موقع وكالة السيارات جاهز");
});
