
function searchBar() {
    const input = document.getElementById('search-bar').value.toLowerCase();

    const main = document.getElementById('main');
    const items = main.getElementsByClassName('car-card');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = (item.textContent || item.innerText || '').toLowerCase();
        if (input === '' || text.includes(input)) {
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

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    if (searchInput) searchInput.addEventListener('input', searchBar);

    const darkBtn = document.getElementById('darkModeToggle');
    if (darkBtn) darkBtn.addEventListener('click', toggleDarkMode);
});

const filterDropdown = document.getElementById('cars-filter');
const carItems = document.querySelectorAll('.car-card');

filterDropdown.addEventListener('change', function() {
  const selectedValue = this.value;

  carItems.forEach(item => {
    const itemBrand = item.getAttribute('data-brand');

    if (selectedValue === "all" || itemBrand === selectedValue) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none";
    }
  });
});
