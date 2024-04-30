document.addEventListener('DOMContentLoaded', function() {
    displayWishlistItems();
});

function toggleHeart(event, productName, price, picSrc, picAlt) {
    var heart = event.target;
    var wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    var newWishlistItems = [];

    // Toggle the heart emoji and update the wishlist in local storage
    if (heart.textContent === '🤍') {
        heart.textContent = '🩷';  // Change to pink heart
        wishlistItems.push({ productName: productName, price: price, picSrc: picSrc, picAlt: picAlt });
    } else {
        heart.textContent = '🤍';  // Change back to white heart
        // Manually filtering items
        for (var i = 0; i < wishlistItems.length; i++) {
            if (wishlistItems[i].productName !== productName) {
                newWishlistItems.push(wishlistItems[i]);
            }
        }
        wishlistItems = newWishlistItems;
    }
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
}

function displayWishlistItems() {
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
    localStorage.removeItem('wishlistItems'); // Remove wishlist items from localStorage
    displayWishlistItems(); // Update the display
}

document.getElementById('clear-wishlist').addEventListener('click', clearWishlist);
