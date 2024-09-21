document.addEventListener("DOMContentLoaded", () => {
    // Accordion functionality
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Динамическое обновление цены при изменении выбора подкатегорий
    const updatePrice = () => {
        const selectedSubcategories = document.querySelectorAll('.subcategory-list input[type="checkbox"]:checked');
        let totalPrice = selectedSubcategories.length * 1000; // Базовая цена за каждую подкатегорию
        let discount = 0;

        // Применение скидок в зависимости от количества выбранных подкатегорий
        if (selectedSubcategories.length === 2) {
            discount = 0.1; // 10% скидка
        } else if (selectedSubcategories.length >= 3) {
            discount = 0.3; // 30% скидка
        }

        totalPrice -= totalPrice * discount;
        document.getElementById("price-output").textContent = `Итоговая цена: ${totalPrice} тенге (Скидка: ${discount * 100}%)`;
    };

    // Привязываем событие изменения к каждому чекбоксу
    document.querySelectorAll('.subcategory-list input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updatePrice);
    });

    // Функциональность для заявки
    document.getElementById("leave-request").addEventListener("click", () => {
        const selectedItems = Array.from(document.querySelectorAll('.subcategory-list input[type="checkbox"]:checked')).map(item => item.value);
        document.getElementById("message").value = `Интересуют категории: ${selectedItems.join(", ")}`;
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});



document.getElementById('search-input').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    document.querySelectorAll('.category-item').forEach(function(category) {
        let categoryText = category.textContent.toLowerCase();
        let hasSubcategories = false;
        
        // Поиск по категории
        if (categoryText.includes(query)) {
            category.style.display = "block";
        } else {
            // Поиск по подкатегориям
            category.querySelectorAll('.subcategory-list label').forEach(function(subcat) {
                if (subcat.textContent.toLowerCase().includes(query)) {
                    category.style.display = "block";
                    hasSubcategories = true;
                }
            });
            if (!hasSubcategories) {
                category.style.display = "none";
            }
        }
    });
});




