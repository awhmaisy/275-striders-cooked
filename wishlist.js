document.addEventListener('DOMContentLoaded', function() {
    updateHearts();
    displayWishlist();
});

function updateHearts() {

    var products = document.querySelectorAll('.product');
    var wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    //ChatGPT used to debug this loop
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.getElementsByTagName('h2')[0].textContent;
        var heart = product.getElementsByClassName('heart')[0];

        var isInWishlist = false;

        for (var j = 0; j < wishlistItems.length; j++) {
            if (wishlistItems[j].productName == productName) {
                isInWishlist = true;
                break;
            }
        }

        if (isInWishlist) {
            heart.textContent = '🩷';
        } else {
            heart.textContent = '🤍';
        }
    }
}

function toggleHeart(event, productName, price, picSrc, picAlt) {
   
    var heart = event.target;
    var wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    var newWishlistItems = [];

    if (heart.textContent == '🤍') {

        heart.textContent = '🩷';
        wishlistItems.push({ productName: productName, price: price, picSrc: picSrc, picAlt: picAlt });
    
    } else {
        
        heart.textContent = '🤍';
        
        for (var i = 0; i < wishlistItems.length; i++) {
            
            if (wishlistItems[i].productName !== productName) {
                
                newWishlistItems.push(wishlistItems[i]);
            }
        }
        wishlistItems = newWishlistItems;
    }
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
}

function displayWishlist() {

    var wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    var wishlistDisplay = document.getElementById('wishlist-items');
    
    if (wishlistDisplay) {

        wishlistDisplay.innerHTML = '';

        wishlistItems.forEach(function(item) {
            var li = document.createElement('li');
            li.className = 'product';
            li.innerHTML = '<div class="heart" onclick="toggleHeart(event, \'' + item.productName + '\', ' + item.price + ', \'' + item.picSrc + '\', \'' + item.picAlt + '\')">🩷</div>' +
                            '<img src="' + item.picSrc + '" alt="' + item.picAlt + '">' +
                            '<h2>' + item.productName + '</h2>' +
                            '<p>$' + item.price + '</p>' +
                            '<button onclick="addToCart(\'' + item.productName + '\', ' + item.price + ')">Add to Cart</button>';

                wishlistDisplay.appendChild(li);
        });
    }
}

function clearWishlist() {
    localStorage.removeItem('wishlistItems');
    displayWishlist();
}

document.getElementById('clear-wishlist').addEventListener('click', clearWishlist);
