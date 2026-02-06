function filterItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();

    const items = document.getElementById('itemList').getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent || item.innerText;

        if (text.toLowerCase().includes(input)) {
            item.classList.remove('hidden'); // Show the item
        } else {
            item.classList.add('hidden'); // Hide the item
        }
    }
}

function searchBar() {
    const input = document.getElementById('search-bar').value.toLoweCase();
    const items = document.getElementsById('main').getElementsByClassName('car-card');

    for (let i=0;i<items.length;i++) {
        const item = items[i];
        const text = item.textContent || item.innerText;

        if (text.toLowerCase().includes(input)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById('darkModeToggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️ Light Mode';
    } else {
        darkModeBtn.textContent = '🌙 Dark Mode';
    }
}
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
