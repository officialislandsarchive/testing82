let modal = document.getElementById('myModal');
let searchButton = document.getElementById("search");
let searchEntry = document.getElementById("searchInput");

const serverUrl = 'https://bcdc41d3-842e-4e00-8e04-04719bd5037b-00-29xicmtw1oktw.janeway.replit.dev:3000/';

let items = {
"crops": [
    { name: "Wheat", value: "10" },
    { name: "Tomato", value: "15" },
    { name: "Carrot", value: "20" },
    { name: "Berry", value: "25" },
    { name: "Onion", value: "30" },
    { name: "Red Flowers", value: "35" },
    { name: "Yellow Flowers", value: "40" },
    { name: "Blue Flowers", value: "45" },
    { name: "Tall Grass", value: "50" }
],

"blocks": [
    { name: "Stone Brick", value: "10" },
    { name: "Wood", value: "15" },
    { name: "Wood Plank", value: "20" },
    { name: "Pine Wood", value: "25" },
    { name: "Pine Wood Plank", value: "30" },
    { name: "Grass Block", value: "35" },
    { name: "Glass Pane", value: "40" },
    { name: "Glass Pane (Colored)", value: "45" },
    { name: "Clay", value: "50" },
    { name: "Clay (Colored)", value: "55" },
    { name: "Red Rug", value: "60" },
    { name: "Wood Stairs", value: "65" },
    { name: "Pine Stairs", value: "70" },
    { name: "Stone Stairs", value: "75" },
    { name: "Brick Stairs", value: "80" },
    { name: "Wood Fence", value: "85" },
    { name: "Pine Fence", value: "90" },
    { name: "Ladder", value: "95" },
    { name: "Pine Door", value: "100" }
],

"totems": [
    { name: "Stone Totem", value: "10" },
    { name: "Coal Totem", value: "15" },
    { name: "Iron Totem", value: "20" },
    { name: "Clay Totem", value: "25" },
    { name: "Wheat Totem", value: "30" },
    { name: "Tomato Totem", value: "35" },
    { name: "Carrot Totem", value: "40" },
    { name: "Onion Totem", value: "45" }
],

"industrial": [
    { name: "Medium Chest", value: "10" },
    { name: "Steel Rod", value: "15" },
    { name: "Conveyor Belt", value: "20" },
    { name: "Left Conveyor", value: "25" },
    { name: "Right Conveyor", value: "30" },
    { name: "Industrial Chest", value: "35" },
    { name: "Industrial Oven", value: "40" },
    { name: "Industrial Sawmill", value: "45" },
    { name: "Industrial Smelter", value: "50" }
],

"stations": [
    { name: "Workbench Tier 1", value: "10" },
    { name: "Workbench Tier 2", value: "15" },
    { name: "Anvil", value: "20" },
    { name: "Sawmill", value: "25" },
    { name: "Stonecutter", value: "30" },
    { name: "Coloring Station", value: "35" },
    { name: "Campfire", value: "40" },
    { name: "Cooking Table", value: "45" },
    { name: "Floral Bench", value: "50" },
    { name: "Small Furnace", value: "55" },
    { name: "Small Chest", value: "60" }
],

"cooking": [
    { name: "Dough", value: "10" },
    { name: "Berry Dough", value: "15" },
    { name: "Bread", value: "20" },
    { name: "Berry Pie", value: "25" }
],

"seeds": [
    { name: "Wheat Seeds", value: "10" },
    { name: "Tomato Seeds", value: "15" },
    { name: "Carrot Seeds", value: "20" },
    { name: "Berry Seeds", value: "25" },
    { name: "Onion Seeds", value: "30" },
    { name: "Red Flower Seeds", value: "35" },
    { name: "Yellow Flower Seeds", value: "40" },
    { name: "Blue Flower Seeds", value: "45" },
    { name: "Sapling", value: "50" },
    { name: "Pine Sapling", value: "55" }
],

"slimeIsland": [
    { name: "Green Slime Balls", value: "10" },
    { name: "Blue Slime Balls", value: "15" },
    { name: "Pink Slime Balls", value: "20" },
    { name: "Green Gear", value: "25" },
    { name: "Blue Gear", value: "30" },
    { name: "Pink Gear", value: "35" }
],

"tools": [
    { name: "Wooden Axe", value: "10" },
    { name: "Wooden Pickaxe", value: "15" },
    { name: "Wooden Sword", value: "20" },
    { name: "Plow", value: "25" },
    { name: "Stone Axe", value: "30" },
    { name: "Stone Pickaxe", value: "35" },
    { name: "Stone Sword", value: "40" },
    { name: "Iron Axe", value: "45" },
    { name: "Iron Pickaxe", value: "50" },
    { name: "Iron Sword", value: "55" }
],

"ore": [
    { name: "Iron Ore", value: "10" },
    { name: "Coal", value: "15" },
    { name: "Gold Ore", value: "20" },
    { name: "Iron", value: "25" },
    { name: "Steel", value: "30" }
]
};

function openModal(category) {
    let modalTitle = document.getElementById('modalTitle');
    let modalItems = document.getElementById('modalItems');

    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    modalItems.innerHTML = '';

    items[category].forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `<strong>${item.name}</strong>: ${item.value}`;
        modalItems.appendChild(itemElement);
    });

    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

searchButton.addEventListener("click", async function() {
    let item = searchEntry.value;
    let res = await fetch(serverUrl + "items/search/" + item);
    let json = await res.json();
    let category = json.category;

    let modalTitle = document.getElementById('modalTitle');
    let modalItems = document.getElementById('modalItems');
    modalTitle.textContent = "Search Results";
    modalItems.innerHTML = '';

    if (category) {
        json.results.forEach(item => {
            let itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `<strong>${item.name}</strong>: ${item.value}`;
            modalItems.appendChild(itemElement);
        });
        modal.style.display = 'block';
    } else {
        modalItems.innerHTML = `<p>No results found for "${item}"</p>`;
        modal.style.display = 'block';
    }
});
