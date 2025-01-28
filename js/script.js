// Placeholder for the items
let items = [
    { name: 'Sword of Power', type: 'Weapon', stat: 'Strength' },
    { name: 'Ring of Wisdom', type: 'Accessory', stat: 'Wisdom' },
    // Add more items for testing
];

// Function to display the items
function displayItems(itemsToDisplay) {
    const itemList = document.querySelector('.item-list');
    itemList.innerHTML = '';  // Clear current list

    itemsToDisplay.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Type: ${item.type}</p>
            <p>Stat: ${item.stat}</p>
        `;
        itemList.appendChild(itemDiv);
    });
}

// Function to filter items based on search input
document.getElementById('search-box').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayItems(filteredItems);
});

// Display all items when the page loads
window.onload = () => displayItems(items);
