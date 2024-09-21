document.addEventListener("DOMContentLoaded", () => {
    const categories = {
        electronics: ["Смартфоны", "Ноутбуки", "Телевизоры"],
        fashion: ["Одежда", "Обувь", "Аксессуары"],
        home: ["Мебель", "Посуда", "Текстиль"]
    };

    let selectedSubcategories = [];
    const categoryItems = document.querySelectorAll(".category-item");
    const subcategoryList = document.getElementById("subcategory-list");
    const messageField = document.getElementById("message");
    const priceOutput = document.getElementById("price-output");

    // Handle category selection and display subcategories
    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            const category = item.dataset.category;
            subcategoryList.innerHTML = ''; // Clear existing subcategories

            categories[category].forEach(subcategory => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = subcategory;
                checkbox.id = subcategory;

                const label = document.createElement("label");
                label.htmlFor = subcategory;
                label.innerText = subcategory;

                subcategoryList.appendChild(checkbox);
                subcategoryList.appendChild(label);
            });
        });
    });

    // Calculate price
    document.getElementById("calculate-price").addEventListener("click", () => {
        selectedSubcategories = Array.from(subcategoryList.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value);
        let totalPrice = selectedSubcategories.length * 1000;
        let discount = 0;

        if (selectedSubcategories.length === 2) {
            discount = 0.1;
        } else if (selectedSubcategories.length >= 3) {
            discount = 0.3;
        }

        totalPrice = totalPrice - (totalPrice * discount);
        priceOutput.innerText = `Итоговая цена: ${totalPrice} тенге (Скидка: ${discount * 100}%)`;
    });

    // Leave request and scroll to feedback
    document.getElementById("leave-request").addEventListener("click", () => {
        const selectedItems = Array.from(subcategoryList.querySelectorAll("input[type='checkbox']:checked")).map(item => item.value);
        const selectedText = `Интересуют категории: ${selectedItems.join(", ")}`;
        messageField.value = selectedText;

        // Scroll to contact section
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
});
