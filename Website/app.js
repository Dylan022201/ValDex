new Vue({
    el: '#btns',
    data: {
        buttons: [
            { url: 'index.html', text: 'Home' },
            { url: 'agents.html', text: 'Agents' },
            { url: 'maps.html', text: 'Maps' },
            { url: 'strategies.html', text: 'Basic Strats' }
        ],
    }, methods: {
        computeButtonUrl(button) {
            const currentPageUrl = window.location.href;
            if (currentPageUrl.includes('agent-info.html')) {
                // Modify the URL for this webpage only
                return '../' + button.url;
            } else {
                return button.url;
            }
        }
    }
});

new Vue({
    el: '#app',
    data: {
        // General data
        pageTitle: document.title,

        // Page-specific data

        // Welcome messages
        welcomeMessage: "This website is your ultimate guide to mastering Valorant. Whether you're looking to improve your agent knowledge, learn map strategies, or refine your gameplay tactics, we've got you covered.",
        agentPageWelcome: "Valorant Agents",
        mapsPageWelcome: "Valorant Maps",
        strategiesPageWelcome: "Basic Strategies",

        // Page general messages
        agentsMessage: "Explore detailed information about key agents in Valorant, including their unique abilities, playstyles, and strategies for maximizing their effectiveness on the battlefield.",
        mapsMessage: "Interested in learning maps? Well, you've come to the right place. Take a dive into our section about the various maps Valorant has to offer. There you will learn an abundance of information such as callouts, common pushes, team composition, and more!",
        agentPageMessage: "This page is dedicated to helping you learn individual agents and how to play them, strategies, their economy and unique characteristics of them.",
        mapsPageMessage: "This page is here to teach you the ins and outs, dos and don'ts of Valorant maps. Here, you will learn various strategies that Valorant pros and top radiants utilize to take the advantage and win the round.",
        strategiesPageMessage: "This page is dedicated to teaching you the Valorant basics. Here, you will learn more information on how to read your teammates, opponents, and read the push before it happens."

    },
    mounted() {
        // No need for a separate method to find page title
        this.pageTitle = document.title;
    }
});

new Vue({
    el: '#map-cards',
    data: {
        maps: [
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
        ]
    },
    mounted() {
        this.generateMapCards();
    },
    methods: {
        generateMapCards() {
            const container = document.querySelector('.map-grid');
            this.maps.forEach(map => {
                const card = document.createElement('div');
                card.classList.add('map-card');
                card.style.backgroundImage = `url('${map.image}')`;
                card.dataset.name = map.name;

                const nameLabel = document.createElement('p');
                nameLabel.classList.add('mcLabel');
                nameLabel.textContent = map.name;

                const overlay = document.createElement('div');
                overlay.classList.add('overlay', 'clickable-box');

                card.appendChild(nameLabel);
                card.appendChild(overlay);

                container.appendChild(card);

                card.addEventListener('click', () => {
                    localStorage.setItem('selectedMap', map.name);
                    window.location.href = map.link;
                });

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
    }
});



