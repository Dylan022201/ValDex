// Define an array of objects representing character cards
const characters = [
    { name: "Brimstone", image: "assets/Brimstone.JPG", link: "info-pages/agent-info.html" },
    { name: "Phoenix", image: "assets/Phoenix.jpg", link: "info-pages/agent-info.html" },
    { name: "Sage", image: "assets/Sage.jpg", link: "info-pages/agent-info.html" },
    { name: "Sova", image: "assets/Sova.jpg", link: "info-pages/agent-info.html" },
    { name: "Viper", image: "assets/Viper.jpg", link: "info-pages/agent-info.html" },
    { name: "Cypher", image: "assets/Cypher.jpg", link: "info-pages/agent-info.html" },
    { name: "Reyna", image: "assets/Reyna.jpg", link: "info-pages/agent-info.html" },
    { name: "Killjoy", image: "assets/Killjoy.jpg", link: "info-pages/agent-info.html" },
    { name: "Breach", image: "assets/Breach.jpg", link: "info-pages/agent-info.html" },
    { name: "Omen", image: "assets/Omen.jpg", link: "info-pages/agent-info.html" },
    { name: "Jett", image: "assets/Jett.jpg", link: "info-pages/agent-info.html" },
    { name: "Raze", image: "assets/Raze.jpg", link: "info-pages/agent-info.html" },
    { name: "Skye", image: "assets/Skye.jpg", link: "info-pages/agent-info.html" },
    { name: "Yoru", image: "assets/Yoru.jpg", link: "info-pages/agent-info.html" },
    { name: "Astra", image: "assets/Astra.jpg", link: "info-pages/agent-info.html" },
    { name: "KAY/O", image: "assets/Kayo.jpg", link: "info-pages/agent-info.html" },
    { name: "Chamber", image: "assets/Chamber.jpg", link: "info-pages/agent-info.html" },
    { name: "Neon", image: "assets/Neon.jpg", link: "info-pages/agent-info.html" },
    { name: "Fade", image: "assets/Fade.jpg", link: "info-pages/agent-info.html" },
    { name: "Harbor", image: "assets/Harbor.jpg", link: "info-pages/agent-info.html" },
    { name: "Gekko", image: "assets/Gekko.jpg", link: "info-pages/agent-info.html" },
    { name: "Deadlock", image: "assets/Deadlock.jpg", link: "info-pages/agent-info.html" },
    { name: "Iso", image: "assets/iso.jpg", link: "info-pages/agent-info.html" },
    { name: "Clove", image: "assets/clove.jpg", link: "info-pages/agent-info.html" },
];




// Function to generate character cards dynamically
function generateCharacterCards() {
    const container = document.querySelector('.character-grid'); // Assuming you have a container element with the class 'character-grid'

    // Loop through the characters array
    characters.forEach(character => {
        // Create elements
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.style.backgroundImage = `url('${character.image}')`;
        card.dataset.name = character.name; // Add data attribute to store character name
        card.classList.add('shadows');
        
        const nameLabel = document.createElement('p');
        nameLabel.classList.add('ccLabel');
        nameLabel.textContent = character.name;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay', 'clickable-box');

        // Append elements to card
        card.appendChild(nameLabel);
        card.appendChild(overlay);

        // Append card to container
        container.appendChild(card);

        // Add event listener for click to store selected character
        card.addEventListener('click', () => {
            localStorage.setItem('selectedCharacter', character.name);
            window.location.href = character.link;
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

// Call the function to generate character cards when the page loads
window.addEventListener('load', generateCharacterCards);