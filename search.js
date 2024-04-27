function toggleSearch() {
    var searchContainer = document.getElementById('search-container');
    if (searchContainer.style.width === '250px') {
        searchContainer.style.width = '0';
    } else {
        searchContainer.style.width = '300px'; // Adjusted to accommodate the button
        document.getElementById('search-input').focus();
    }
}

document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input');
    const query = input.value;
    const resultsContainer = document.getElementById('results-container');

    if (!query) {
        resultsContainer.style.display = 'none';
        return;
    }

    const pages = [
        { name: "Home", url: "main-page.html" },
        { name: "All Pins", url: "all-pins.html" },
        { name: "Collections", url: "collections.html" },
        { name: "Animal Collection", url: "collectionanimal.html" },
        { name: "Cartoon Collection", url: "collectioncartoonn.html" },
        { name: "Letter Collection", url: "collectionletter.html" },
        { name: "Retro Collection", url: "collectionretro.html" },
        { name: "Sports Collection", url: "collectionsports.html" },
        { name: "University Collection", url: "collectionuniversity.html" },
        { name: "Why Striders?", url: "why-striders.html" },
        { name: "About Us", url: "about-us.html" }
    ];

    const filteredResults = pages.filter(page => page.name.toLowerCase().includes(query.toLowerCase()));

    if (filteredResults.length > 0) {
        resultsContainer.innerHTML = '';
        filteredResults.forEach(page => {
            const div = document.createElement('div');
            div.textContent = page.name;
            div.addEventListener('click', () => {
                window.location.href = page.url;
            });
            resultsContainer.appendChild(div);
        });
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
});

// Optional: Handle 'Enter' key to trigger search button click
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        document.getElementById('search-button').click();
    }
});
