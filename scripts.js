document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const categoryTitle = document.getElementById('category-title');
        const subcategoryList = document.getElementById('subcategory-list');
        const subcategorySelect = document.getElementById('subcategories');

        // Устанавливаем название категории
        categoryTitle.textContent = `Подкатегории для: ${this.querySelector('p').textContent}`;

        // Показываем карточку категории
        document.getElementById('category-card').style.display = 'block';

        // Очищаем подкатегории
        subcategoryList.innerHTML = '';
        subcategorySelect.innerHTML = '<option value="">Выберите подкатегорию</option>';

        // Добавляем подкатегории в зависимости от категории
        if (category === 'electronics') {
            addSubcategory('phones', 'Смартфоны', 'https://img.joomcdn.net/33a964c24e2fce2d79149495181151946fbdcab1_original.jpeg', 10000);
            addSubcategory('laptops', 'Ноутбуки', 'https://my-apple-store.ru/wa-data/public/shop/products/31/35/13531/images/22695/22695.500@2x.jpg', 20000);
        } else if (category === 'fashion') {
            addSubcategory('clothing', 'Одежда', 'https://static.zara.net/assets/public/5b94/0be2/0760484089c8/b05d1c250f98/08281500401-a1/08281500401-a1.jpg?ts=1721380263493&w=404', 5000);
            addSubcategory('accessories', 'Аксессуары', 'https://static.zara.net/assets/public/3013/befa/fdc144699061/896f68a6ebe2/02188201038-e1/02188201038-e1.jpg?ts=1726672409192&w=824', 3000);
        } else if (category === 'home') {
            addSubcategory('furniture', 'Мебель', 'https://design-mate.ru/upload/images/post/post_5706_g1.jpg?1606557823', 15000);
            addSubcategory('decor', 'Декор', 'https://romatti.ru/upload/iblock/d1a/d1ac7177ee132d57d389fabbaed021d6.png', 7000);
        }

        document.getElementById('subcategory-selector').style.display = 'block';
    });
});

// Функция для добавления подкатегорий с изображениями
function addSubcategory(value, name, imgSrc, price) {
    const subcategoryList = document.getElementById('subcategory-list');
    const subcategoryItem = document.createElement('div');
    subcategoryItem.classList.add('subcategory-item');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = name;
    img.classList.add('responsive-img');

    const subcategoryText = document.createElement('p');
    subcategoryText.textContent = name;

    subcategoryItem.appendChild(img);
    subcategoryItem.appendChild(subcategoryText);

    subcategoryList.appendChild(subcategoryItem);

    // Добавляем в селектор
    const option = document.createElement('option');
    option.value = value;
    option.textContent = name;
    option.setAttribute('data-price', price);
    document.getElementById('subcategories').appendChild(option);
}

document.getElementById('calculate-price').addEventListener('click', function() {
    const selectedOption = document.getElementById('subcategories').selectedOptions[0];
    const price = selectedOption ? selectedOption.getAttribute('data-price') : 0;

    document.getElementById('price-output').textContent = `Цена за услугу: ${price} тг.`;
});
