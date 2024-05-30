// Define an array of objects representing map cards
const maps = [
    { name: "Bind", image: "assets/Maps/Bind.jpg", link: "map-pages/map-info.html" },
    { name: "Haven", image: "assets/Maps/Haven.jpg", link: "map-pages/map-info.html" },
    { name: "Split", image: "assets/Maps/Split.jpg", link: "map-pages/map-info.html" },
    { name: "Ascent", image: "assets/Maps/Ascent.jpg", link: "map-pages/map-info.html" },
    { name: "Icebox", image: "assets/Maps/Icebox.jpg", link: "map-pages/map-info.html" },
    { name: "Breeze", image: "assets/Maps/Breeze.jpg", link: "map-pages/map-info.html" },
    { name: "Fracture", image: "assets/Maps/Fracture.jpg", link: "map-pages/map-info.html" },
    { name: "Pearl", image: "assets/Maps/Pearl.jpg", link: "map-pages/map-info.html" },
    { name: "Lotus", image: "assets/Maps/Lotus.jpg", link: "map-pages/map-info.html" },
    { name: "Sunset", image: "assets/Maps/Sunset.jpg", link: "map-pages/map-info.html" },
];


// Function to generate map cards dynamically
function generateMapCards() {
    const container = document.querySelector('.map-grid'); // Assuming you have a container element with the class 'map-grid'

    // Loop through the maps array
    maps.forEach(map => {
        // Create elements
        const card = document.createElement('div');
        card.classList.add('map-card');
        card.style.backgroundImage = `url('${map.image}')`;
        card.dataset.name = map.name; // Add data attribute to store map name
        card.classList.add('shadows');

        const nameLabel = document.createElement('p');
        nameLabel.classList.add('mcLabel'); // Change to mcLabel
        nameLabel.textContent = map.name;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay', 'clickable-box');

        // Append elements to card
        card.appendChild(nameLabel);
        card.appendChild(overlay);

        // Append card to container
        container.appendChild(card);

        // Add event listener for click to store selected map
        card.addEventListener('click', () => {
            localStorage.setItem('selectedMap', map.name);
            window.location.href = map.link;
        });

        // Add event listeners for mouseenter and mouseleave
        card.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex';
        });
        card.addEventListener('mouseleave', () => {
            overlay.style.display = 'none';
        });
        overlay.addEventListener('mouseleave', () => {
            overlay.style.display = 'none';
        });


    });
}

// Call the function to generate map cards when the page loads
window.addEventListener('load', generateMapCards);
