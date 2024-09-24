


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






