function toggleSearch() {
    var searchContainer = document.getElementById('search-container');
    if (searchContainer.style.width === '300px') {
        searchContainer.style.width = '0';
    } else {
        searchContainer.style.width = '300px';
        document.getElementById('search-input').focus();
    }
}

var pins = [
    { name: "Cat", page: "collectionanimal.html" },
    { name: "Unicorn", page: "collectionanimal.html" },
    { name: "Ladybug", page: "collectionanimal.html" },
    { name: "Butterfly", page: "collectionanimal.html" },
    { name: "Dinosaur", page: "collectionanimal.html" },
    { name: "Paw Print", page: "collectionanimal.html" },
    { name: "Llama", page: "collectionanimal.html" },
    { name: "Rick", page: "collectioncartoon.html" },
    { name: "Morty", page: "collectioncartoon.html" },
    { name: "Buzz Lightyear", page: "collectioncartoon.html" },
    { name: "Minnie Mouse", page: "collectioncartoon.html" },
    { name: "Snoopy", page: "collectioncartoon.html" },
    { name: "Woodstock", page: "collectioncartoon.html" },
    { name: "Yoda", page: "collectioncartoon.html" },
    { name: "Spongebob", page: "collectioncartoon.html" }
];

document.getElementById('search-button').addEventListener('click', function() {
    var input = document.getElementById('search-input');
    var query = input.value.toLowerCase();
    var resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // Clear previous results

    var found = false;
    pins.forEach(function(pin) {
        if (pin.name.toLowerCase().includes(query)) {
            var div = document.createElement('div');
            div.textContent = pin.name + ' - ' + pin.page;
            div.style.cursor = 'pointer';
            div.onclick = function() {
                window.location.href = pin.page;
            };
            resultsContainer.appendChild(div);
            found = true;
        }
    });

    if (found) {
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
});
