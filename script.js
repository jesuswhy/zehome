document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Спасибо за интерес! Мы свяжемся с вами.');
});

document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const subcategorySelect = document.getElementById('subcategories');
        
        // Clear existing options
        subcategorySelect.innerHTML = '<option value="">Выберите подкатегорию</option>';
        
        // Sample subcategories based on selected category
        if (category === 'electronics') {
            subcategorySelect.innerHTML += '<option value="phones">Смартфоны</option>';
            subcategorySelect.innerHTML += '<option value="laptops">Ноутбуки</option>';
        } else if (category === 'fashion') {
            subcategorySelect.innerHTML += '<option value="clothing">Одежда</option>';
            subcategorySelect.innerHTML += '<option value="accessories">Аксессуары</option>';
        } else if (category === 'home') {
            subcategorySelect.innerHTML += '<option value="furniture">Мебель</option>';
            subcategorySelect.innerHTML += '<option value="decor">Декор</option>';
        }
        
        document.getElementById('subcategory-selector').style.display = 'block';
    });
});

document.getElementById('calculate-price').addEventListener('click', function() {
    const subcategory = document.getElementById('subcategories').value;
    let price = 0;

    if (subcategory === 'phones') {
        price = 10000; // Example price
    } else if (subcategory === 'laptops') {
        price = 20000; // Example price
    }
    // Add other subcategory prices as needed

    document.getElementById('price-output').textContent = `Цена за услугу: ${price} тг.`;
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами.');
});
