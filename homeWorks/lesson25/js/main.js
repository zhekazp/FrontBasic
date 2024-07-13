function initialisition() {
    document.querySelectorAll('.item').forEach(item =>
        item.addEventListener('click', (e) => {
                location.href='./pages/shop.html?cat='+e.target.getAttribute("cat");
        }));
}

initialisition();