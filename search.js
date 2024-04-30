function toggleSearch() {
    console.log("toggleSearch function called");
    var searchContainer = document.getElementById('search-container');
    if (searchContainer) {
        console.log("Yay Search container");
        searchContainer.classList.toggle('expanded');
    
    } else {
        console.log("Boo no Search container");
    }
}


var pins = [
    { name: "Cat", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Unicorn", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Ladybug", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Butterfly", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Dinosaur", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Paw Print", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Llama", page: "collectionanimal.html", pageName: "Animal Collection" },
    { name: "Rick", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Morty", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Buzz Lightyear", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Minnie Mouse", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Snoopy", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Woodstock", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Yoda", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "Spongebob", page: "collectioncartoon.html", pageName: "Cartoon Collection" },
    { name: "A", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "M", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "E", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "J", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "H", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "O", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "W", page: "collectionletter.html", pageName: "Letter Collection" },
    { name: "Retro Pack", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "Hang Loose", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "70s Heart Chain", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "Disco Cherries", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "Festival Daisy Icon", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "Heart Sunglasses", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "Beaded Strap Chain", page: "collectionretro.html", pageName: "Retro Collection" },
    { name: "Soccer", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Basketball", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Football", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Baseball Glove", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Nascar", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Softball", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Dodgers", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Yankees", page: "collectionsports.html", pageName: "Sports Collection" },
    { name: "Stanford", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "Duke", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "University of Miami", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "University of Florida", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "University of Kansas", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "University of Oregon", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "Louisiana State University", page: "collectionuniversity.html", pageName: "University Collection" },
    { name: "Florida State University", page: "collectionuniversity.html", pageName: "University Collection" }
];


document.getElementById('search-button').addEventListener('click', function() {
    var input = document.getElementById('search-input');
    console.log("Input: " + input.value);
    var query = input.value.toLowerCase();
    var resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    var found = false;
    pins.forEach(function(pin) {
        if (pin.name.toLowerCase().includes(query)) {
            var div = document.createElement('div');
            div.textContent = pin.name + ' - ' + pin.pageName;
            div.onclick = function() {
                window.location.href = pin.page;
                document.getElementById('search-input').value = '';
                toggleSearch();
            };
            resultsContainer.appendChild(div);
            found = true;
            console.log("Pin Found");
        }
    });

    if (found) {
        console.log("Pin Displayed");
        resultsContainer.style.display = 'block';
    } else {
        console.log("Pin NOT Found");
        resultsContainer.style.display = 'none';
    }
});
