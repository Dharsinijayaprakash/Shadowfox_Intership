const cskPlayers = [
    {
        name: "MS Dhoni",
        role: "Wicket-keeper (C)",
        matches: 264,
        runs: 5082,
        average: 39.1,
        initials: "MSD"
    },
    {
        name: "Ruturaj Gaikwad",
        role: "Batsman",
        matches: 45,
        runs: 1797,
        average: 42.8,
        initials: "RG"
    },
    {
        name: "Ravindra Jadeja",
        role: "All-rounder",
        matches: 240,
        runs: 2756,
        wickets: 157,
        initials: "RJ"
    },
    {
        name: "Deepak Chahar",
        role: "Bowler",
        matches: 76,
        wickets: 80,
        economy: 7.28,
        initials: "DC"
    },
    {
        name: "Moeen Ali",
        role: "All-rounder",
        matches: 34,
        runs: 675,
        wickets: 25,
        initials: "MA"
    },
    {
        name: "Devon Conway",
        role: "Batsman",
        matches: 31,
        runs: 1152,
        average: 42.7,
        initials: "DC"
    },
    {
        name: "Shivam Dube",
        role: "All-rounder",
        matches: 89,
        runs: 1434,
        wickets: 15,
        initials: "SD"
    },
    {
        name: "Tushar Deshpande",
        role: "Bowler",
        matches: 23,
        wickets: 33,
        economy: 9.17,
        initials: "TD"
    },
    {
        name: "Matheesha Pathirana",
        role: "Bowler",
        matches: 16,
        wickets: 28,
        economy: 7.53,
        initials: "MP"
    }
];

// CSK Matches Data
const cskMatches = {
    upcoming: [
        {
            opponent: "Mumbai Indians",
            date: "March 24, 2024",
            time: "7:30 PM",
            venue: "MA Chidambaram Stadium, Chennai",
            opponentInitials: "MI"
        },
        {
            opponent: "Royal Challengers Bangalore",
            date: "March 29, 2024",
            time: "7:30 PM",
            venue: "M. Chinnaswamy Stadium, Bangalore",
            opponentInitials: "RCB"
        },
        {
            opponent: "Delhi Capitals",
            date: "April 3, 2024",
            time: "7:30 PM",
            venue: "MA Chidambaram Stadium, Chennai",
            opponentInitials: "DC"
        },
        {
            opponent: "Kolkata Knight Riders",
            date: "April 8, 2024",
            time: "7:30 PM",
            venue: "Eden Gardens, Kolkata",
            opponentInitials: "KKR"
        }
    ],
    completed: [
        {
            opponent: "Punjab Kings",
            date: "March 20, 2024",
            venue: "MA Chidambaram Stadium, Chennai",
            result: "CSK won by 28 runs",
            opponentInitials: "PBKS"
        },
        {
            opponent: "Rajasthan Royals",
            date: "March 15, 2024",
            venue: "Sawai Mansingh Stadium, Jaipur",
            result: "RR won by 5 wickets",
            opponentInitials: "RR"
        },
        {
            opponent: "Sunrisers Hyderabad",
            date: "March 10, 2024",
            venue: "MA Chidambaram Stadium, Chennai",
            result: "CSK won by 6 wickets",
            opponentInitials: "SRH"
        }
    ]
};

// CSK News Data
const cskNews = [
    {
        title: "MS Dhoni Announces Retirement from International Cricket",
        date: "March 22, 2024",
        excerpt: "Captain Cool bids farewell to international cricket but continues to lead CSK in IPL 2024 season.",
        category: "Player News"
    },
    {
        title: "CSK Retains Core Squad for IPL 2024",
        date: "March 18, 2024",
        excerpt: "Chennai Super Kings announces retention of key players including Dhoni, Jadeja, and Gaikwad for the upcoming season.",
        category: "Team News"
    },
    {
        title: "Chepauk Stadium Gets Major Upgrade",
        date: "March 15, 2024",
        excerpt: "MA Chidambaram Stadium receives infrastructure improvements ahead of the new IPL season.",
        category: "Stadium News"
    },
    {
        title: "CSK Foundation Launches Cricket Academy",
        date: "March 12, 2024",
        excerpt: "New cricket academy aims to nurture young talent from Tamil Nadu and surrounding regions.",
        category: "Community"
    },
    {
        title: "Pathirana's Bowling Action Cleared",
        date: "March 8, 2024",
        excerpt: "Young Sri Lankan pacer gets green light from ICC for his unique bowling action.",
        category: "Player News"
    },
    {
        title: "CSK Announces New Jersey Design",
        date: "March 5, 2024",
        excerpt: "The iconic yellow jersey gets a fresh look while maintaining the classic CSK identity.",
        category: "Merchandise"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPlayers();
    loadMatches('upcoming');
    loadNews();
    setupEventListeners();
});

// Load Players
function loadPlayers() {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = '';
    
    cskPlayers.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        
        let stats = '';
        if (player.runs) {
            stats += `<div class="player-stat"><strong>${player.runs}</strong><span>Runs</span></div>`;
        }
        if (player.wickets) {
            stats += `<div class="player-stat"><strong>${player.wickets}</strong><span>Wickets</span></div>`;
        }
        if (player.average) {
            stats += `<div class="player-stat"><strong>${player.average}</strong><span>Average</span></div>`;
        }
        if (player.economy) {
            stats += `<div class="player-stat"><strong>${player.economy}</strong><span>Economy</span></div>`;
        }
        
        playerCard.innerHTML = `
            <div class="player-image">${player.initials}</div>
            <h3>${player.name}</h3>
            <p class="player-role">${player.role}</p>
            <div class="player-stats">${stats}</div>
        `;
        
        teamGrid.appendChild(playerCard);
    });
}

// Load Matches
function loadMatches(type) {
    const matchesContainer = document.getElementById('matchesContainer');
    matchesContainer.innerHTML = '';
    
    const matches = cskMatches[type];
    
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        
        if (type === 'upcoming') {
            matchCard.innerHTML = `
                <div class="match-teams">
                    <div class="team">
                        <div class="team-logo">CSK</div>
                        <span>Chennai Super Kings</span>
                    </div>
                    <div class="vs">VS</div>
                    <div class="team">
                        <div class="team-logo">${match.opponentInitials}</div>
                        <span>${match.opponent}</span>
                    </div>
                </div>
                <div class="match-info">
                    <div class="match-date">${match.date} • ${match.time}</div>
                    <div class="match-venue">${match.venue}</div>
                </div>
            `;
        } else {
            matchCard.innerHTML = `
                <div class="match-teams">
                    <div class="team">
                        <div class="team-logo">CSK</div>
                        <span>Chennai Super Kings</span>
                    </div>
                    <div class="vs">VS</div>
                    <div class="team">
                        <div class="team-logo">${match.opponentInitials}</div>
                        <span>${match.opponent}</span>
                    </div>
                </div>
                <div class="match-info">
                    <div class="match-date">${match.date}</div>
                    <div class="match-venue">${match.venue}</div>
                    <div class="match-result" style="color: ${match.result.includes('CSK won') ? '#22c55e' : '#ef4444'}; font-weight: 600; margin-top: 5px;">${match.result}</div>
                </div>
            `;
        }
        
        matchesContainer.appendChild(matchCard);
    });
}

// Load News
function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';
    
    cskNews.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        newsCard.innerHTML = `
            <div class="news-image">📰</div>
            <div class="news-content">
                <div class="news-date">${news.date} • ${news.category}</div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
            </div>
        `;
        
        newsGrid.appendChild(newsCard);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Match tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadMatches(btn.dataset.tab);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Hero buttons
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');
    
    btnPrimary.addEventListener('click', () => {
        document.querySelector('#news').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    btnSecondary.addEventListener('click', () => {
        document.querySelector('#matches').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Poll buttons
    const pollBtns = document.querySelectorAll('.poll-btn');
    pollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            pollBtns.forEach(b => b.style.background = 'transparent');
            btn.style.background = '#1e3a8a';
            btn.style.color = '#ffcc00';
            
            // Show result after voting
            setTimeout(() => {
                alert(`Thanks for voting for ${btn.textContent}! Current results will be displayed soon.`);
            }, 500);
        });
    });
    
    // Fan zone buttons
    const fanButtons = document.querySelectorAll('.fan-card .btn-primary');
    fanButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cardTitle = btn.closest('.fan-card').querySelector('h3').textContent;
            if (cardTitle.includes('Gallery')) {
                alert('Photo upload feature coming soon! Share your CSK moments with #WhistlePodu');
            } else if (cardTitle.includes('Predictions')) {
                alert('Match prediction feature coming soon! Predict and win exciting prizes.');
            }
        });
    });
}

// Add some interactive animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.player-card, .match-card, .news-card, .stat-card, .fan-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addScrollAnimations, 1000);
});

// Add Whistle Podu chant feature
function whistlePodu() {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {
        // Fallback for browsers that don't support audio
        console.log('🎺 Whistle Podu! 🎺');
    });
}

// Add whistle sound on logo click
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.nav-logo');
    logo.addEventListener('click', whistlePodu);
});
