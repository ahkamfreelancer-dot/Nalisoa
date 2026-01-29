// ============================================
// MAMBOLY FORCE - APPLICATION JAVASCRIPT
// Toutes les données sont stockées localement
// ============================================

// ============================================
// DONNÉES ET CITATIONS
// ============================================

const QUOTES = {
    force: [
        { text: "La force ne vient pas de ce que tu peux faire. Elle vient de surmonter ce que tu pensais impossible.", author: "Rikki Rogers" },
        { text: "Tu es plus brave que tu ne le crois, plus forte que tu ne le parais, et plus intelligente que tu ne le penses.", author: "A.A. Milne" },
        { text: "Les difficultés préparent souvent les personnes ordinaires à des destins extraordinaires.", author: "C.S. Lewis" },
        { text: "La résilience n'est pas ce qui nous arrive, mais comment nous y répondons.", author: "Anonyme" },
        { text: "Chaque jour, tu fais des choses que tu ne pensais pas pouvoir faire. C'est ça, la force.", author: "Anonyme" }
    ],
    hope: [
        { text: "Même la nuit la plus sombre prendra fin et le soleil se lèvera.", author: "Victor Hugo" },
        { text: "Il n'est jamais trop tard pour être ce que tu aurais pu être.", author: "George Eliot" },
        { text: "Les fins sont souvent de nouveaux départs déguisés.", author: "Anonyme" },
        { text: "L'espoir est cette petite voix que tu entends murmurer 'peut-être' quand le monde entier crie 'non'.", author: "Anonyme" },
        { text: "Demain est un autre jour, une nouvelle page, une nouvelle chance.", author: "Anonyme" }
    ],
    confidence: [
        { text: "Tu mérites d'être heureuse. Tu mérites d'être aimée. Tu mérites de t'épanouir.", author: "Anonyme" },
        { text: "N'oublie jamais ta valeur. Elle ne dépend de personne d'autre que toi.", author: "Anonyme" },
        { text: "Être toi-même dans un monde qui essaie constamment de faire de toi quelqu'un d'autre est le plus grand des accomplissements.", author: "Ralph Waldo Emerson" },
        { text: "Tu n'as pas besoin de la permission de quelqu'un pour être incroyable.", author: "Anonyme" },
        { text: "La beauté d'une femme se voit dans ses yeux, parce que c'est la porte de son cœur, l'endroit où réside l'amour.", author: "Audrey Hepburn" }
    ],
    motherhood: [
        { text: "Une mère est celle qui peut prendre la place de tous les autres, mais dont la place ne peut être prise par personne.", author: "Cardinal Mermillod" },
        { text: "Tu fais de ton mieux avec ce que tu as, et c'est toujours assez.", author: "Anonyme" },
        { text: "Tes enfants n'ont pas besoin d'une mère parfaite. Ils ont besoin d'une mère heureuse.", author: "Anonyme" },
        { text: "La force d'une mère est quelque chose que personne ne peut expliquer. Elle est faite d'amour inconditionnel, de sacrifices et de courage.", author: "Anonyme" },
        { text: "Les enfants se souviendront toujours de comment tu les as fait sentir, pas de la perfection de ta maison.", author: "Anonyme" }
    ],
    career: [
        { text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "Albert Schweitzer" },
        { text: "Crois en toi. Tu es plus capable que tu ne le penses.", author: "Roy T. Bennett" },
        { text: "L'opportunité ne frappe pas, elle se présente quand tu enfonces la porte.", author: "Kyle Chandler" },
        { text: "Chaque candidature est une graine plantée. Continue d'arroser, quelque chose finira par pousser.", author: "Anonyme" },
        { text: "Le rejet n'est pas un échec. C'est une redirection vers quelque chose de meilleur.", author: "Anonyme" }
    ],
    separation: [
        { text: "Parfois, de bonnes choses se défont pour que de meilleures choses puissent se mettre en place.", author: "Marilyn Monroe" },
        { text: "Tu ne perds jamais en aimant. Tu perds en retenant quelqu'un qui ne veut pas rester.", author: "Anonyme" },
        { text: "La fin d'une relation n'est pas un échec. C'est simplement la fin d'une histoire et le début d'une autre.", author: "Anonyme" },
        { text: "Ce qui est pour toi ne passera pas à côté de toi.", author: "Proverbe" },
        { text: "Tu n'as pas échoué. Tu as survécu. Et maintenant, tu renais.", author: "Anonyme" }
    ]
};

const SPECIAL_MESSAGES = [
    {
        trigger: 'day1',
        message: "Je suis tellement fière de toi d'avoir ouvert cette app. Le premier pas est souvent le plus difficile. Tu l'as fait. 💜"
    },
    {
        trigger: 'week1',
        message: "Une semaine déjà. Je vois combien tu es courageuse. Continue, un jour à la fois. Je crois en toi. 🌟"
    },
    {
        trigger: 'mood_tough_3',
        message: "Je vois que tu traverses des jours difficiles. C'est normal. N'oublie pas : tu n'es pas seule. Appelle-moi si tu as besoin. 💝"
    },
    {
        trigger: 'first_victory',
        message: "Ta première victoire ! Peu importe qu'elle te semble petite, elle est ÉNORME. Chaque pas compte. Je suis fière de toi ! 🎉"
    },
    {
        trigger: 'first_application',
        message: "Tu as postulé ! C'est un acte de courage énorme. Le bon emploi viendra. Continue, tu vas y arriver ! 💼✨"
    }
];

// ============================================
// STOCKAGE LOCAL
// ============================================

const Storage = {
    save(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Erreur de sauvegarde:', e);
            return false;
        }
    },
    
    load(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Erreur de chargement:', e);
            return defaultValue;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    }
};

// ============================================
// ÉTAT DE L'APPLICATION
// ============================================

let appState = {
    currentSection: 'home',
    user: {
        name: '',
        startDate: new Date().toISOString(),
        lastVisit: new Date().toISOString()
    },
    mood: {
        today: null,
        history: []
    },
    journal: [],
    victories: [],
    todos: {
        today: [],
        week: [],
        important: []
    },
    career: {
        applications: [],
        linkedinProgress: 0,
        skills: []
    },
    selfCare: {
        activities: [],
        goals: [],
        prideMoments: []
    },
    journey: {
        stages: [],
        practicalSteps: [],
        reconstruction: []
    },
    settings: {
        darkMode: false,
        reminders: false,
        reminderTime: '09:00'
    },
    unlockedMessages: []
};

// ============================================
// INITIALISATION
// ============================================

function initApp() {
    // Charger les données sauvegardées
    const savedState = Storage.load('appState');
    if (savedState) {
        appState = { ...appState, ...savedState };
    }
    
    // Vérifier si c'est la première visite
    const hasVisited = Storage.load('hasVisited');
    if (!hasVisited) {
        showWelcome();
    } else {
        startApp();
    }
    
    // Initialiser la date
    updateDateDisplay();
    
    // Générer la citation du jour
    generateDailyQuote();
    
    // Charger les stats
    updateStats();
    
    // Appliquer le thème
    if (appState.settings.darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
    
    // Charger les données de toutes les sections
    loadAllSections();
    
    // Charger l'historique du chat
    loadChatHistory();
    
    // Vérifier les messages spéciaux à débloquer
    checkSpecialMessages();
    
    // Vérifier les célébrations
    checkCelebrationTriggers();
    
    // Sauvegarder la visite
    appState.user.lastVisit = new Date().toISOString();
    saveState();
}

function showWelcome() {
    document.getElementById('welcomePage').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

function startApp() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    Storage.save('hasVisited', true);
    
    // Marquer le premier jour
    if (!appState.unlockedMessages.includes('day1')) {
        appState.unlockedMessages.push('day1');
        saveState();
    }
}

function saveState() {
    Storage.save('appState', appState);
}

// ============================================
// NAVIGATION
// ============================================

function toggleMenu() {
    const nav = document.getElementById('sideNav');
    const overlay = document.getElementById('navOverlay');
    
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
}

function showSection(sectionId) {
    // Cacher toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    document.getElementById(`section-${sectionId}`).classList.add('active');
    
    // Mettre à jour la navigation
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    // Fermer le menu
    toggleMenu();
    
    // Sauvegarder la section actuelle
    appState.currentSection = sectionId;
    saveState();
    
    // Faire défiler vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ACCUEIL
// ============================================

function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString('fr-FR', options);
    const element = document.getElementById('dateDisplay');
    if (element) {
        element.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    }
}

function generateDailyQuote() {
    // Sélectionner une catégorie aléatoire
    const categories = Object.keys(QUOTES);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const quotes = QUOTES[randomCategory];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById('dailyQuote').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
}

function selectMood(mood, emoji) {
    // Enlever la sélection précédente
    document.querySelectorAll('.mood-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Sélectionner le nouveau
    event.target.closest('.mood-button').classList.add('selected');
    
    // Afficher la zone de note
    document.getElementById('moodNote').style.display = 'block';
    
    // Sauvegarder l'humeur
    appState.mood.today = {
        mood,
        emoji,
        date: new Date().toISOString(),
        note: ''
    };
    
    saveState();
    
    // Vérifier si c'est difficile plusieurs jours de suite
    checkMoodPattern();
}

function saveMoodNote() {
    const note = document.getElementById('moodNoteText').value;
    if (appState.mood.today) {
        appState.mood.today.note = note;
        appState.mood.history.push(appState.mood.today);
        saveState();
        
        // Afficher une confirmation
        alert('✓ Humeur sauvegardée');
        
        // Réinitialiser
        document.getElementById('moodNoteText').value = '';
    }
}

function checkMoodPattern() {
    const recent = appState.mood.history.slice(-3);
    const difficult = recent.filter(m => m.mood === 'difficile' || m.mood === 'dur').length;
    
    if (difficult >= 3 && !appState.unlockedMessages.includes('mood_tough_3')) {
        appState.unlockedMessages.push('mood_tough_3');
        saveState();
        showSpecialMessage('mood_tough_3');
    }
}

function saveDailyVictory() {
    const text = document.getElementById('dailyVictory').value;
    if (text.trim()) {
        const victory = {
            text,
            date: new Date().toISOString()
        };
        
        appState.victories.push(victory);
        
        // Débloquer le message de première victoire
        if (appState.victories.length === 1 && !appState.unlockedMessages.includes('first_victory')) {
            appState.unlockedMessages.push('first_victory');
            showSpecialMessage('first_victory');
        }
        
        saveState();
        updateStats();
    }
}

function updateStats() {
    // Victoires totales
    document.getElementById('totalVictories').textContent = appState.victories.length;
    
    // Jours suivis
    const startDate = new Date(appState.user.startDate);
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('daysTracked').textContent = days;
    
    // Progression carrière
    const careerSteps = calculateCareerProgress();
    document.getElementById('careerProgress').textContent = careerSteps;
}

function calculateCareerProgress() {
    let completed = 0;
    
    // LinkedIn checklist (10 items)
    completed += (appState.career.linkedinProgress / 10) * 30;
    
    // Applications
    completed += Math.min(appState.career.applications.length * 2, 30);
    
    // Skills
    completed += Math.min(appState.career.skills.length * 5, 40);
    
    return Math.round(completed);
}

// ============================================
// SECTION MA FORCE
// ============================================

function loadNewQuotes() {
    const container = document.getElementById('quotesList');
    container.innerHTML = '';
    
    // Mélanger toutes les citations
    const allQuotes = [];
    Object.values(QUOTES).forEach(category => {
        allQuotes.push(...category);
    });
    
    // Sélectionner 5 citations aléatoires
    const shuffled = allQuotes.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    selected.forEach(quote => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <p style="font-style: italic; margin-bottom: 0.5rem;">"${quote.text}"</p>
            <p style="text-align: right; font-weight: 500; font-size: 0.9rem;">— ${quote.author}</p>
        `;
        container.appendChild(div);
    });
}

function addJournalEntry() {
    const textarea = document.getElementById('newJournalEntry');
    const text = textarea.value.trim();
    
    if (text) {
        const entry = {
            id: Date.now(),
            text,
            date: new Date().toISOString()
        };
        
        appState.journal.unshift(entry);
        saveState();
        
        textarea.value = '';
        loadJournalEntries();
    }
}

function loadJournalEntries() {
    const container = document.getElementById('journalEntries');
    container.innerHTML = '';
    
    if (appState.journal.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Aucune entrée pour le moment. Écris ta première pensée ci-dessous.</p>';
        return;
    }
    
    appState.journal.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'list-item';
        const date = new Date(entry.date).toLocaleDateString('fr-FR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <small style="color: var(--text-secondary);">${date}</small>
                <button onclick="deleteJournalEntry(${entry.id})" style="background: none; padding: 0; color: var(--text-light);">🗑️</button>
            </div>
            <p>${entry.text}</p>
        `;
        container.appendChild(div);
    });
}

function deleteJournalEntry(id) {
    if (confirm('Supprimer cette entrée ?')) {
        appState.journal = appState.journal.filter(e => e.id !== id);
        saveState();
        loadJournalEntries();
    }
}

function startExercise(type) {
    const modal = document.getElementById('exerciseModal');
    const content = document.getElementById('exerciseContent');
    
    let html = '';
    
    switch(type) {
        case 'breathing':
            html = `
                <h2>🌬️ Respiration apaisante</h2>
                <p>Prends 5 minutes pour toi. Respire profondément.</p>
                <div id="breathingExercise" style="text-align: center; padding: 2rem;">
                    <div style="width: 200px; height: 200px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent)); margin: 2rem auto; display: flex; align-items: center; justify-content: center; font-size: 3rem; animation: pulse 4s infinite;">
                        🌸
                    </div>
                    <p id="breathingInstruction" style="font-size: 1.5rem; margin-top: 2rem;">Inspire...</p>
                </div>
            `;
            break;
        case 'gratitude':
            html = `
                <h2>🙏 3 Gratitudes</h2>
                <p>Trouve 3 choses pour lesquelles tu es reconnaissante aujourd'hui :</p>
                <div style="margin-top: 2rem;">
                    <input type="text" placeholder="1. Je suis reconnaissante pour..." style="margin-bottom: 1rem;">
                    <input type="text" placeholder="2. Je suis reconnaissante pour..." style="margin-bottom: 1rem;">
                    <input type="text" placeholder="3. Je suis reconnaissante pour..." style="margin-bottom: 1rem;">
                    <button onclick="saveGratitudes()">Sauvegarder</button>
                </div>
            `;
            break;
        case 'affirmation':
            html = `
                <h2>💫 Affirmations positives</h2>
                <p>Répète ces phrases à voix haute ou dans ta tête :</p>
                <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
                    <div class="list-item">Je suis forte et capable.</div>
                    <div class="list-item">Je mérite le bonheur.</div>
                    <div class="list-item">Je suis une bonne mère.</div>
                    <div class="list-item">Je vais surmonter cette épreuve.</div>
                    <div class="list-item">Je crois en mon avenir.</div>
                    <div class="list-item">Je suis digne d'amour et de respect.</div>
                </div>
            `;
            break;
    }
    
    content.innerHTML = html;
    modal.classList.add('show');
    
    if (type === 'breathing') {
        startBreathingCycle();
    }
}

function startBreathingCycle() {
    const instruction = document.getElementById('breathingInstruction');
    let cycle = 0;
    
    const breathingInterval = setInterval(() => {
        const phase = cycle % 4;
        
        switch(phase) {
            case 0:
                instruction.textContent = 'Inspire...';
                break;
            case 1:
                instruction.textContent = 'Retiens...';
                break;
            case 2:
                instruction.textContent = 'Expire...';
                break;
            case 3:
                instruction.textContent = 'Retiens...';
                break;
        }
        
        cycle++;
        
        if (cycle >= 20) {
            clearInterval(breathingInterval);
            instruction.textContent = 'Bien joué ! 🌟';
        }
    }, 4000);
}

function closeExerciseModal() {
    document.getElementById('exerciseModal').classList.remove('show');
}

// ============================================
// SECTION PRENDRE SOIN DE MOI
// ============================================

const DEFAULT_SELF_CARE_ITEMS = [
    'Prendre une douche relaxante',
    'Me maquiller si j\'en ai envie',
    'M\'habiller avec une tenue dans laquelle je me sens bien',
    'Boire assez d\'eau',
    'Manger des repas équilibrés',
    'Faire 10 minutes d\'exercice ou de marche',
    'Lire quelques pages d\'un livre',
    'Écouter de la musique que j\'aime',
    'Prendre 5 minutes pour moi'
];

const DEFAULT_ACTIVITIES = [
    { name: 'Prendre un bain', icon: '🛁' },
    { name: 'Lire un livre', icon: '📖' },
    { name: 'Regarder un film que j\'aime', icon: '🎬' },
    { name: 'Appeler une amie', icon: '📞' },
    { name: 'Écrire dans mon journal', icon: '✍️' },
    { name: 'Faire du yoga', icon: '🧘‍♀️' },
    { name: 'Écouter un podcast', icon: '🎧' },
    { name: 'Cuisiner un plat que j\'aime', icon: '🍳' },
    { name: 'Jardiner', icon: '🌱' },
    { name: 'Me faire les ongles', icon: '💅' }
];

function loadSelfCareChecklist() {
    const container = document.getElementById('selfCareChecklist');
    container.innerHTML = '';
    
    // Initialiser avec les items par défaut si vide
    if (!appState.selfCare.dailyChecklist) {
        appState.selfCare.dailyChecklist = DEFAULT_SELF_CARE_ITEMS.map(item => ({
            text: item,
            completed: false,
            date: new Date().toISOString().split('T')[0]
        }));
    }
    
    // Réinitialiser chaque jour
    const today = new Date().toISOString().split('T')[0];
    appState.selfCare.dailyChecklist.forEach(item => {
        if (item.date !== today) {
            item.completed = false;
            item.date = today;
        }
    });
    
    appState.selfCare.dailyChecklist.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `checklist-item ${item.completed ? 'completed' : ''}`;
        div.onclick = () => toggleSelfCareItem(index);
        div.innerHTML = `
            <div class="checklist-checkbox"></div>
            <span>${item.text}</span>
        `;
        container.appendChild(div);
    });
}

function toggleSelfCareItem(index) {
    appState.selfCare.dailyChecklist[index].completed = !appState.selfCare.dailyChecklist[index].completed;
    saveState();
    loadSelfCareChecklist();
}

function loadActivitiesList() {
    const container = document.getElementById('activitiesList');
    container.innerHTML = '';
    
    // Initialiser avec les activités par défaut
    if (!appState.selfCare.activities || appState.selfCare.activities.length === 0) {
        appState.selfCare.activities = [...DEFAULT_ACTIVITIES];
        saveState();
    }
    
    appState.selfCare.activities.forEach((activity, index) => {
        const div = document.createElement('div');
        div.className = 'exercise-item';
        div.innerHTML = `
            <span class="exercise-icon">${activity.icon}</span>
            <div class="exercise-info" style="flex: 1;">
                <h4>${activity.name}</h4>
            </div>
            <button onclick="deleteActivity(${index})" style="background: none; padding: 5px; color: var(--text-light);">🗑️</button>
        `;
        container.appendChild(div);
    });
}

function addCustomActivity() {
    const name = prompt('Activité qui te fait du bien :');
    if (name && name.trim()) {
        const emojis = ['💝', '✨', '🌸', '🌟', '💫', '🎨', '🎵', '☕'];
        const icon = emojis[Math.floor(Math.random() * emojis.length)];
        
        appState.selfCare.activities.push({ name: name.trim(), icon });
        saveState();
        loadActivitiesList();
    }
}

function deleteActivity(index) {
    if (confirm('Supprimer cette activité ?')) {
        appState.selfCare.activities.splice(index, 1);
        saveState();
        loadActivitiesList();
    }
}

function loadWellnessGoals() {
    const container = document.getElementById('wellnessGoals');
    container.innerHTML = '';
    
    if (!appState.selfCare.goals) {
        appState.selfCare.goals = [];
    }
    
    if (appState.selfCare.goals.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Aucun objectif pour cette semaine. Ajoute-en un !</p>';
        return;
    }
    
    appState.selfCare.goals.forEach((goal, index) => {
        const div = document.createElement('div');
        div.className = `checklist-item ${goal.completed ? 'completed' : ''}`;
        div.onclick = () => toggleWellnessGoal(index);
        div.innerHTML = `
            <div class="checklist-checkbox"></div>
            <span>${goal.text}</span>
            <button onclick="event.stopPropagation(); deleteWellnessGoal(${index})" style="background: none; padding: 5px; margin-left: auto; color: var(--text-light);">🗑️</button>
        `;
        container.appendChild(div);
    });
}

function addWellnessGoal() {
    const goal = prompt('Mon objectif bien-être cette semaine :');
    if (goal && goal.trim()) {
        appState.selfCare.goals.push({
            text: goal.trim(),
            completed: false,
            date: new Date().toISOString()
        });
        saveState();
        loadWellnessGoals();
    }
}

function toggleWellnessGoal(index) {
    appState.selfCare.goals[index].completed = !appState.selfCare.goals[index].completed;
    saveState();
    loadWellnessGoals();
}

function deleteWellnessGoal(index) {
    if (confirm('Supprimer cet objectif ?')) {
        appState.selfCare.goals.splice(index, 1);
        saveState();
        loadWellnessGoals();
    }
}

function loadPrideMoments() {
    const container = document.getElementById('prideMoments');
    container.innerHTML = '';
    
    if (!appState.selfCare.prideMoments) {
        appState.selfCare.prideMoments = [];
    }
    
    if (appState.selfCare.prideMoments.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Note les moments où tu es fière de toi !</p>';
        return;
    }
    
    appState.selfCare.prideMoments.forEach((moment, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        const date = new Date(moment.date).toLocaleDateString('fr-FR');
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div style="flex: 1;">
                    <small style="color: var(--text-secondary);">${date}</small>
                    <p style="margin-top: 0.5rem;">${moment.text}</p>
                </div>
                <button onclick="deletePrideMoment(${index})" style="background: none; padding: 0; color: var(--text-light);">🗑️</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function addPrideMoment() {
    const moment = prompt('Un moment où j\'étais fière de moi :');
    if (moment && moment.trim()) {
        appState.selfCare.prideMoments.unshift({
            text: moment.trim(),
            date: new Date().toISOString()
        });
        saveState();
        loadPrideMoments();
    }
}

function deletePrideMoment(index) {
    if (confirm('Supprimer ce moment ?')) {
        appState.selfCare.prideMoments.splice(index, 1);
        saveState();
        loadPrideMoments();
    }
}

// ============================================
// SECTION MA MAISON
// ============================================

let currentTodoTab = 'today';

function showTodoTab(tab) {
    currentTodoTab = tab;
    
    // Mettre à jour les onglets
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    // Mettre à jour les listes
    document.querySelectorAll('.todo-list').forEach(list => list.classList.remove('active'));
    document.getElementById(`todo-${tab}`).classList.add('active');
}

function addTodo() {
    const input = document.getElementById('newTodoInput');
    const text = input.value.trim();
    
    if (text) {
        if (!appState.todos[currentTodoTab]) {
            appState.todos[currentTodoTab] = [];
        }
        
        appState.todos[currentTodoTab].push({
            id: Date.now(),
            text,
            completed: false,
            date: new Date().toISOString()
        });
        
        saveState();
        input.value = '';
        loadTodos();
    }
}

function loadTodos() {
    ['today', 'week', 'important'].forEach(tab => {
        const container = document.getElementById(`todo-${tab}`);
        container.innerHTML = '';
        
        if (!appState.todos[tab] || appState.todos[tab].length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic; padding: 2rem;">Aucune tâche pour le moment.</p>';
            return;
        }
        
        appState.todos[tab].forEach(todo => {
            const div = document.createElement('div');
            div.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            div.innerHTML = `
                <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" onclick="toggleTodo('${tab}', ${todo.id})"></div>
                <span class="todo-text">${todo.text}</span>
                <button class="todo-delete" onclick="deleteTodo('${tab}', ${todo.id})">🗑️</button>
            `;
            container.appendChild(div);
        });
    });
}

function toggleTodo(tab, id) {
    const todo = appState.todos[tab].find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveState();
        loadTodos();
    }
}

function deleteTodo(tab, id) {
    appState.todos[tab] = appState.todos[tab].filter(t => t.id !== id);
    saveState();
    loadTodos();
}

function loadWeeklyPlanner() {
    const container = document.getElementById('weeklyPlanner');
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    
    container.innerHTML = days.map(day => `
        <div style="margin-bottom: 1.5rem;">
            <h4>${day}</h4>
            <textarea 
                placeholder="Activités, rendez-vous..."
                onblur="saveWeeklyPlan('${day}', this.value)"
                style="margin-top: 0.5rem;"
            >${appState.weeklyPlan ? (appState.weeklyPlan[day] || '') : ''}</textarea>
        </div>
    `).join('');
}

function saveWeeklyPlan(day, value) {
    if (!appState.weeklyPlan) {
        appState.weeklyPlan = {};
    }
    appState.weeklyPlan[day] = value;
    saveState();
}

function loadBudgetSummary() {
    const container = document.getElementById('budgetSummary');
    
    if (!appState.budget) {
        appState.budget = {
            income: 0,
            expenses: []
        };
    }
    
    const totalExpenses = appState.budget.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const remaining = appState.budget.income - totalExpenses;
    
    container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
            <div class="stat-card">
                <div class="stat-value" style="font-size: 1.5rem; color: var(--success);">${appState.budget.income}€</div>
                <div class="stat-label">Revenus</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" style="font-size: 1.5rem; color: var(--text-secondary);">${totalExpenses}€</div>
                <div class="stat-label">Dépenses</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" style="font-size: 1.5rem; color: ${remaining >= 0 ? 'var(--success)' : 'var(--warning)'};">${remaining}€</div>
                <div class="stat-label">Reste</div>
            </div>
        </div>
    `;
}

function manageBudget() {
    alert('Fonctionnalité de gestion de budget complète à venir. Pour l\'instant, note tes dépenses dans ton journal !');
}

function loadFamilySection() {
    loadChildrenCards();
    loadMotherCard();
}

function loadChildrenCards() {
    const container = document.getElementById('childrenCards');
    
    if (!appState.children) {
        appState.children = [];
    }
    
    if (appState.children.length === 0) {
        container.innerHTML = `
            <button onclick="addChild()" class="secondary-button">+ Ajouter mes enfants</button>
        `;
        return;
    }
    
    container.innerHTML = appState.children.map((child, index) => `
        <div class="card" style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4>${child.name} (${child.age} ans)</h4>
                <button onclick="editChild(${index})" style="background: none; padding: 5px; color: var(--text-secondary);">✏️</button>
            </div>
            <textarea 
                placeholder="Notes, activités, garde..."
                onblur="saveChildNote(${index}, this.value)"
                style="min-height: 80px;"
            >${child.notes || ''}</textarea>
        </div>
    `).join('');
}

function addChild() {
    const name = prompt('Prénom de ton enfant :');
    if (!name) return;
    
    const age = prompt('Âge :');
    if (!age) return;
    
    if (!appState.children) {
        appState.children = [];
    }
    
    appState.children.push({
        name: name.trim(),
        age: parseInt(age),
        notes: ''
    });
    
    saveState();
    loadChildrenCards();
}

function editChild(index) {
    const child = appState.children[index];
    const name = prompt('Prénom :', child.name);
    if (!name) return;
    
    const age = prompt('Âge :', child.age);
    if (!age) return;
    
    appState.children[index] = {
        ...child,
        name: name.trim(),
        age: parseInt(age)
    };
    
    saveState();
    loadChildrenCards();
}

function saveChildNote(index, value) {
    appState.children[index].notes = value;
    saveState();
}

function loadMotherCard() {
    const container = document.getElementById('motherCard');
    
    if (!appState.mother) {
        appState.mother = { notes: '' };
    }
    
    container.innerHTML = `
        <textarea 
            placeholder="Organisation avec maman, notes..."
            onblur="saveMotherNote(this.value)"
            style="min-height: 100px;"
        >${appState.mother.notes || ''}</textarea>
    `;
}

function saveMotherNote(value) {
    appState.mother.notes = value;
    saveState();
}

// ============================================
// SECTION MA CARRIÈRE
// ============================================

const LINKEDIN_CHECKLIST = [
    'Photo de profil professionnelle',
    'Photo de couverture attractive',
    'Titre clair et impactant',
    'Résumé personnel complet (À propos)',
    'Expériences professionnelles détaillées',
    'Formation ajoutée',
    'Compétences listées (au moins 10)',
    'Recommandations demandées',
    'Publications / Articles partagés',
    'Réseau actif (connexions pertinentes)'
];

function loadLinkedInChecklist() {
    const container = document.getElementById('linkedinChecklist');
    container.innerHTML = '';
    
    if (!appState.career.linkedinItems) {
        appState.career.linkedinItems = LINKEDIN_CHECKLIST.map(item => ({
            text: item,
            completed: false
        }));
    }
    
    appState.career.linkedinItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `checklist-item ${item.completed ? 'completed' : ''}`;
        div.onclick = () => toggleLinkedInItem(index);
        div.innerHTML = `
            <div class="checklist-checkbox"></div>
            <span>${item.text}</span>
        `;
        container.appendChild(div);
    });
    
    updateCareerProgress();
}

function toggleLinkedInItem(index) {
    appState.career.linkedinItems[index].completed = !appState.career.linkedinItems[index].completed;
    
    // Calculer le pourcentage
    const completed = appState.career.linkedinItems.filter(i => i.completed).length;
    appState.career.linkedinProgress = completed;
    
    saveState();
    loadLinkedInChecklist();
    updateCareerProgress();
}

function loadJobSearchRoutine() {
    const container = document.getElementById('jobSearchRoutine');
    
    const routine = [
        { task: 'Consulter 5 offres d\'emploi', icon: '🔍' },
        { task: 'Postuler à 2 offres minimum', icon: '📧' },
        { task: 'Optimiser 1 élément de mon profil LinkedIn', icon: '💼' },
        { task: 'Me former 30 minutes (vidéo, article, cours)', icon: '📚' },
        { task: 'Réseauter : 3 nouvelles connexions LinkedIn', icon: '🤝' }
    ];
    
    container.innerHTML = routine.map((item, index) => `
        <div class="exercise-item">
            <span class="exercise-icon">${item.icon}</span>
            <div class="exercise-info">
                <h4>${item.task}</h4>
            </div>
        </div>
    `).join('');
}

function loadApplicationsTracker() {
    const container = document.getElementById('applicationsTracker');
    
    if (!appState.career.applications) {
        appState.career.applications = [];
    }
    
    if (appState.career.applications.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Aucune candidature pour le moment.</p>';
        return;
    }
    
    container.innerHTML = appState.career.applications.map((app, index) => `
        <div class="list-item" style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 0.5rem;">
                <div style="flex: 1;">
                    <h4 style="margin-bottom: 0.25rem;">${app.position}</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">${app.company}</p>
                </div>
                <button onclick="deleteApplication(${index})" style="background: none; padding: 0; color: var(--text-light);">🗑️</button>
            </div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span style="background: var(--${app.status === 'envoyée' ? 'accent' : app.status === 'réponse' ? 'warning' : app.status === 'entretien' ? 'success' : 'text-light'}); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.85rem; color: white;">${app.status}</span>
                <span style="color: var(--text-secondary); font-size: 0.85rem;">📅 ${new Date(app.date).toLocaleDateString('fr-FR')}</span>
            </div>
            ${app.notes ? `<p style="margin-top: 0.5rem; font-size: 0.9rem; font-style: italic;">${app.notes}</p>` : ''}
        </div>
    `).join('');
}

function addApplication() {
    const position = prompt('Poste :');
    if (!position) return;
    
    const company = prompt('Entreprise :');
    if (!company) return;
    
    if (!appState.career.applications) {
        appState.career.applications = [];
    }
    
    appState.career.applications.unshift({
        position: position.trim(),
        company: company.trim(),
        status: 'envoyée',
        date: new Date().toISOString(),
        notes: ''
    });
    
    // Débloquer message première candidature
    if (appState.career.applications.length === 1 && !appState.unlockedMessages.includes('first_application')) {
        appState.unlockedMessages.push('first_application');
        showSpecialMessage('first_application');
    }
    
    saveState();
    loadApplicationsTracker();
    updateStats();
}

function deleteApplication(index) {
    if (confirm('Supprimer cette candidature ?')) {
        appState.career.applications.splice(index, 1);
        saveState();
        loadApplicationsTracker();
    }
}

function loadInterviewPrep() {
    const container = document.getElementById('interviewPrep');
    
    const tips = [
        {
            title: 'Prépare ton pitch (30 secondes)',
            content: 'Qui tu es, ce que tu as fait, ce que tu cherches.'
        },
        {
            title: 'Questions fréquentes',
            content: 'Parle-moi de toi / Tes forces et faiblesses / Pourquoi ce poste ?'
        },
        {
            title: 'Questions à poser',
            content: 'Culture d\'entreprise / Évolution / Équipe / Défis du poste'
        },
        {
            title: 'Tenue professionnelle',
            content: 'Prépare ta tenue la veille, quelque chose où tu te sens confiante.'
        }
    ];
    
    container.innerHTML = tips.map(tip => `
        <div style="margin-bottom: 1.5rem;">
            <h4>${tip.title}</h4>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">${tip.content}</p>
        </div>
    `).join('');
}

function loadSkillsDevelopment() {
    const container = document.getElementById('skillsDevelopment');
    
    if (!appState.career.skills) {
        appState.career.skills = [];
    }
    
    if (appState.career.skills.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Ajoute des compétences à développer.</p>';
        return;
    }
    
    container.innerHTML = appState.career.skills.map((skill, index) => `
        <div class="list-item" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h4 style="margin-bottom: 0.25rem;">${skill.name}</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${skill.resource || 'Ressource à définir'}</p>
            </div>
            <button onclick="deleteSkill(${index})" style="background: none; padding: 0; color: var(--text-light);">🗑️</button>
        </div>
    `).join('');
}

function addSkillGoal() {
    const name = prompt('Compétence à développer :');
    if (!name) return;
    
    const resource = prompt('Comment ? (cours en ligne, livre, pratique...)');
    
    if (!appState.career.skills) {
        appState.career.skills = [];
    }
    
    appState.career.skills.push({
        name: name.trim(),
        resource: resource ? resource.trim() : ''
    });
    
    saveState();
    loadSkillsDevelopment();
    updateStats();
}

function deleteSkill(index) {
    if (confirm('Supprimer cette compétence ?')) {
        appState.career.skills.splice(index, 1);
        saveState();
        loadSkillsDevelopment();
    }
}

function updateCareerProgress() {
    const percentage = calculateCareerProgress();
    const circle = document.getElementById('careerProgressCircle');
    const percentageText = circle.querySelector('.progress-percentage');
    const message = document.getElementById('careerProgressMessage');
    
    if (circle) {
        circle.style.background = `conic-gradient(var(--primary) ${percentage}%, var(--bg-hover) ${percentage}%)`;
        percentageText.textContent = `${percentage}%`;
    }
    
    if (message) {
        if (percentage < 30) {
            message.textContent = 'Tu commences ton parcours. Chaque pas compte ! 💪';
        } else if (percentage < 60) {
            message.textContent = 'Tu avances bien ! Continue comme ça ! 🌟';
        } else if (percentage < 90) {
            message.textContent = 'Tu es sur la bonne voie ! Plus que quelques étapes ! 🚀';
        } else {
            message.textContent = 'Incroyable ! Tu gères ! 🎉';
        }
    }
}

// ============================================
// SECTION MON CHEMIN
// ============================================

const JOURNEY_STAGES = [
    {
        name: 'Choc et déni',
        description: 'C\'est normal de ne pas y croire au début. Prends ton temps.',
        color: '#B4E4FF'
    },
    {
        name: 'Colère',
        description: 'La colère est une émotion saine. Exprime-la (dans ton journal, en sport...).',
        color: '#FFE082'
    },
    {
        name: 'Marchandage',
        description: '"Et si...?" Ces pensées sont normales. Laisse-les passer.',
        color: '#FFD4B8'
    },
    {
        name: 'Tristesse',
        description: 'Pleurer est OK. C\'est même nécessaire. Ne te juge pas.',
        color: '#E8D5F2'
    },
    {
        name: 'Acceptation',
        description: 'Accepter ne veut pas dire oublier. C\'est juste faire la paix avec ce qui est.',
        color: '#C8E6C9'
    },
    {
        name: 'Reconstruction',
        description: 'Tu commences à voir un avenir. Tu redeviens toi-même, en mieux.',
        color: '#FFE5EC'
    }
];

const PRACTICAL_STEPS = [
    'Consulter un avocat pour connaître mes droits',
    'Organiser la garde des enfants',
    'Faire le point sur les finances',
    'Prévenir l\'école des enfants',
    'Informer ma famille proche',
    'Trouver un soutien psychologique si besoin',
    'Réorganiser le logement',
    'Mettre à jour mes documents administratifs'
];

const RECONSTRUCTION_STEPS = [
    'Redécouvrir qui je suis sans lui',
    'Reprendre confiance en moi',
    'Me reconnecter avec mes amies',
    'Retrouver mes passions',
    'Définir mes nouvelles priorités',
    'Me projeter dans l\'avenir',
    'Créer de nouveaux souvenirs avec mes enfants'
];

function loadJourneyStages() {
    const container = document.getElementById('journeyStages');
    
    if (!appState.journey.stages) {
        appState.journey.stages = JOURNEY_STAGES.map(stage => ({
            ...stage,
            visited: false,
            notes: ''
        }));
    }
    
    container.innerHTML = appState.journey.stages.map((stage, index) => `
        <div class="card" style="border-left: 4px solid ${stage.color}; margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div style="flex: 1;">
                    <h4>${stage.name}</h4>
                    <p style="color: var(--text-secondary); margin: 0.5rem 0;">${stage.description}</p>
                </div>
                <button onclick="toggleJourneyStage(${index})" 
                    style="background: none; padding: 5px; font-size: 1.5rem;">
                    ${stage.visited ? '✓' : '○'}
                </button>
            </div>
            <textarea 
                placeholder="Mes notes sur cette étape..."
                onblur="saveJourneyNote(${index}, this.value)"
                style="margin-top: 1rem; min-height: 60px;"
            >${stage.notes || ''}</textarea>
        </div>
    `).join('');
}

function toggleJourneyStage(index) {
    appState.journey.stages[index].visited = !appState.journey.stages[index].visited;
    saveState();
    loadJourneyStages();
}

function saveJourneyNote(index, value) {
    appState.journey.stages[index].notes = value;
    saveState();
}

function loadPracticalSteps() {
    const container = document.getElementById('practicalSteps');
    
    if (!appState.journey.practicalSteps) {
        appState.journey.practicalSteps = PRACTICAL_STEPS.map(step => ({
            text: step,
            completed: false
        }));
    }
    
    container.innerHTML = appState.journey.practicalSteps.map((step, index) => `
        <div class="checklist-item ${step.completed ? 'completed' : ''}" onclick="togglePracticalStep(${index})">
            <div class="checklist-checkbox"></div>
            <span>${step.text}</span>
        </div>
    `).join('');
}

function togglePracticalStep(index) {
    appState.journey.practicalSteps[index].completed = !appState.journey.practicalSteps[index].completed;
    saveState();
    loadPracticalSteps();
}

function loadReconstructionChecklist() {
    const container = document.getElementById('reconstructionChecklist');
    
    if (!appState.journey.reconstruction) {
        appState.journey.reconstruction = RECONSTRUCTION_STEPS.map(step => ({
            text: step,
            completed: false
        }));
    }
    
    container.innerHTML = appState.journey.reconstruction.map((step, index) => `
        <div class="checklist-item ${step.completed ? 'completed' : ''}" onclick="toggleReconstructionStep(${index})">
            <div class="checklist-checkbox"></div>
            <span>${step.text}</span>
        </div>
    `).join('');
}

function toggleReconstructionStep(index) {
    appState.journey.reconstruction[index].completed = !appState.journey.reconstruction[index].completed;
    saveState();
    loadReconstructionChecklist();
}

function saveFutureVision() {
    const textarea = document.getElementById('futureVision');
    appState.futureVision = textarea.value;
    saveState();
}

function loadFutureVision() {
    const textarea = document.getElementById('futureVision');
    if (textarea && appState.futureVision) {
        textarea.value = appState.futureVision;
    }
}

function loadSpecialMessages() {
    const container = document.getElementById('specialMessages');
    
    const unlockedSpecialMessages = SPECIAL_MESSAGES.filter(msg => 
        appState.unlockedMessages.includes(msg.trigger)
    );
    
    if (unlockedSpecialMessages.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-style: italic;">Des messages spéciaux apparaîtront ici au fur et à mesure de ton parcours... 💌</p>';
        return;
    }
    
    container.innerHTML = unlockedSpecialMessages.map(msg => `
        <div class="card" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; margin-bottom: 1rem;">
            <p style="line-height: 1.8;">${msg.message}</p>
        </div>
    `).join('');
}

function checkSpecialMessages() {
    // Vérifier la semaine 1
    const startDate = new Date(appState.user.startDate);
    const now = new Date();
    const daysSince = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    
    if (daysSince >= 7 && !appState.unlockedMessages.includes('week1')) {
        appState.unlockedMessages.push('week1');
        showSpecialMessage('week1');
    }
}

function showSpecialMessage(trigger) {
    const message = SPECIAL_MESSAGES.find(m => m.trigger === trigger);
    if (message) {
        setTimeout(() => {
            alert(`💜 Message spécial pour toi 💜\n\n${message.message}`);
        }, 500);
    }
}

// ============================================
// PARAMÈTRES
// ============================================

function toggleDarkMode() {
    appState.settings.darkMode = !appState.settings.darkMode;
    document.body.classList.toggle('dark-mode');
    saveState();
}

function toggleReminders() {
    appState.settings.reminders = !appState.settings.reminders;
    saveState();
    
    if (appState.settings.reminders) {
        alert('Rappels activés ! (Note: fonctionnalité navigateur limitée, pense à visiter l\'app régulièrement)');
    }
}

function saveReminderTime() {
    const time = document.getElementById('reminderTime').value;
    appState.settings.reminderTime = time;
    saveState();
}

function exportData() {
    const dataStr = JSON.stringify(appState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `mamboly-force-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                appState = { ...appState, ...importedData };
                saveState();
                alert('✓ Données importées avec succès !');
                location.reload();
            } catch (error) {
                alert('❌ Erreur lors de l\'import. Fichier invalide.');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

function clearAllData() {
    if (confirm('⚠️ ATTENTION : Ceci va effacer TOUTES tes données.\n\nExporte d\'abord tes données si tu veux les garder.\n\nContinuer ?')) {
        if (confirm('Es-tu vraiment sûre ? Cette action est irréversible.')) {
            Storage.clear();
            location.reload();
        }
    }
}

// ============================================
// CHARGEMENT DE TOUTES LES SECTIONS
// ============================================

function loadAllSections() {
    // Accueil
    loadDailyVictory();
    
    // Ma Force
    loadNewQuotes();
    loadJournalEntries();
    
    // Prendre Soin de Moi
    loadSelfCareChecklist();
    loadActivitiesList();
    loadWellnessGoals();
    loadPrideMoments();
    
    // Ma Maison
    loadTodos();
    loadWeeklyPlanner();
    loadBudgetSummary();
    loadFamilySection();
    
    // Ma Carrière
    loadLinkedInChecklist();
    loadJobSearchRoutine();
    loadApplicationsTracker();
    loadInterviewPrep();
    loadSkillsDevelopment();
    updateCareerProgress();
    
    // Mon Chemin
    loadJourneyStages();
    loadPracticalSteps();
    loadReconstructionChecklist();
    loadFutureVision();
    loadSpecialMessages();
    loadAccordionStates(); // Charger l'état des accordéons
    
    // Paramètres
    loadSettings();
}

function loadDailyVictory() {
    const textarea = document.getElementById('dailyVictory');
    const today = new Date().toISOString().split('T')[0];
    const todayVictory = appState.victories.find(v => v.date.startsWith(today));
    
    if (textarea && todayVictory) {
        textarea.value = todayVictory.text;
    }
}

function loadSettings() {
    document.getElementById('darkModeToggle').checked = appState.settings.darkMode;
    document.getElementById('remindersToggle').checked = appState.settings.reminders;
    document.getElementById('reminderTime').value = appState.settings.reminderTime;
}

// ============================================
// ACCORDIONS (Mon Chemin)
// ============================================

function toggleAccordion(contentId) {
    const content = document.getElementById(contentId);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.accordion-icon');
    
    // Toggle le contenu
    content.classList.toggle('open');
    header.classList.toggle('open');
    
    // Change l'icône
    if (content.classList.contains('open')) {
        icon.textContent = '⊖';
    } else {
        icon.textContent = '⊕';
    }
    
    // Sauvegarder l'état
    if (!appState.accordions) {
        appState.accordions = {};
    }
    appState.accordions[contentId] = content.classList.contains('open');
    saveState();
}

function loadAccordionStates() {
    if (appState.accordions) {
        Object.keys(appState.accordions).forEach(contentId => {
            if (appState.accordions[contentId]) {
                const content = document.getElementById(contentId);
                if (content) {
                    content.classList.add('open');
                    const header = content.previousElementSibling;
                    header.classList.add('open');
                    const icon = header.querySelector('.accordion-icon');
                    icon.textContent = '⊖';
                }
            }
        });
    }
}

// ============================================
// CHAT KIALA BEST - INTELLIGENCE
// ============================================

const CHAT_RESPONSES = {
    // Sentiments
    greetings: [
        "Bonjour ma belle 💜 Comment puis-je t'aider aujourd'hui ?",
        "Hello ! Heureuse de te voir 💜 Que se passe-t-il ?",
        "Coucou ! Je suis là pour toi. Raconte-moi."
    ],
    
    sadness: [
        "Je t'entends. C'est OK de se sentir comme ça. Tu veux qu'on en parle, ou tu préfères un moment de calme ?",
        "Je comprends que ce soit dur. Prends une grande respiration avec moi. Tu n'es pas seule 💜",
        "Tes émotions sont légitimes. Tu as le droit d'être triste. Je suis là."
    ],
    
    happiness: [
        "🎉 Ça me fait tellement plaisir de te voir heureuse ! Profite de ce moment !",
        "Oui ! J'adore te voir comme ça ! Tu mérites ce bonheur 💜",
        "Continue ! Tu rayonnes ! ✨"
    ],
    
    anger: [
        "Je comprends ta colère. Elle est légitime. Veux-tu en parler ou faire un exercice pour te calmer ?",
        "C'est normal d'être en colère. Ne la refoule pas, mais ne la laisse pas te consumer. Je suis là.",
        "Ta colère dit quelque chose d'important. On peut l'écouter ensemble."
    ],
    
    // Encouragements
    encouragement: [
        "Tu es tellement plus forte que tu ne le penses. Chaque jour, tu fais des choses courageuses.",
        "Je crois en toi. Vraiment. Tu vas y arriver 💪",
        "Regarde tout ce que tu as déjà surmonté. Tu es une guerrière 💜",
        "Un pas à la fois, ma belle. Pas de pression. Tu avances."
    ],
    
    // Victoires
    victory: [
        "🎉🎉🎉 OH OUI ! Je suis TELLEMENT fière de toi !",
        "BRAVO ! Tu vois ? Tu peux le faire ! Continue ! 🌟",
        "Ça c'est ma championne ! Ajoute ça dans tes victoires pour te rappeler ! 💪",
        "YES ! Chaque victoire compte ! Tu es sur le bon chemin ! ✨"
    ],
    
    // Navigation
    help: [
        "Bien sûr ! Je peux t'aider avec :\n• 🏠 Navigation dans l'app\n• 💪 Encouragement\n• 📝 Conseils pratiques\n• 🦋 Support émotionnel\n\nQue veux-tu ?",
        "Je suis là pour :\n✨ T'écouter\n💜 T'encourager\n📍 Te guider dans l'app\n🎯 Célébrer tes victoires\n\nComment puis-je t'aider ?"
    ],
    
    linkedin: [
        "Va dans 💼 Ma Carrière → Optimisation LinkedIn. J'ai une checklist de 10 étapes pour toi ! Veux-tu que je te guide ?",
        "LinkedIn c'est essentiel ! Va voir la section Carrière, il y a un guide complet. Tu veux des conseils spécifiques ?"
    ],
    
    job: [
        "Pour la recherche d'emploi, va dans 💼 Ma Carrière. Il y a :\n• Routine quotidienne\n• Suivi candidatures\n• Prep entretiens\n\nTu cherches quoi précisément ?",
        "Je sais que c'est dur. Mais 2 candidatures par jour = 60 par mois = des chances ! Va voir Ma Carrière pour t'organiser."
    ],
    
    selfcare: [
        "Prendre soin de toi n'est PAS égoïste ! Va dans ✨ Prendre Soin de Moi. Il y a plein d'idées. Tu mérites de te sentir bien 💜",
        "Self-care = pas de culpabilité ! Va voir la section dédiée. Même 5 minutes pour toi, ça compte !"
    ],
    
    // Urgence
    crisis: [
        "Je vois que c'est très difficile. Fais une respiration avec moi. [Bouton: Exercice 2 min]\n\nSi tu as des pensées sombres, appelle quelqu'un de confiance ou le 15 (SAMU). Tu n'es pas seule 💜",
        "C'est OK de ne pas aller bien. Mais si tu es en détresse, parle à quelqu'un : ami, famille, ou professionnel. Le 15 est là 24/7. Je suis inquiète pour toi 💜"
    ],
    
    // Questions pratiques
    howto: [
        "Dis-moi ce que tu veux faire et je te guide ! Navigation ? Paramètres ? Une fonction spécifique ?",
        "Je t'aide ! Tu veux savoir comment utiliser quelle partie de l'app ?"
    ],
    
    // Séparation
    separation: [
        "Je sais que c'est l'épreuve la plus difficile. Va voir 🦋 Mon Chemin, il y a des ressources pour toi. Tu veux en parler ?",
        "Chaque jour qui passe, tu guéris un peu plus. Va voir Mon Chemin, ça aide. Et je suis là pour t'écouter 💜"
    ],
    
    children: [
        "Tes enfants ont de la chance de t'avoir. Tu fais de ton mieux dans une situation difficile. C'est déjà énorme 💜",
        "Être maman ET traverser ça = tu es une héroïne. Ne l'oublie jamais. Va voir 🏡 Ma Maison pour t'organiser."
    ],
    
    // Motivation
    cantdo: [
        "Si, tu PEUX. Peut-être pas tout aujourd'hui. Mais une petite chose. Laquelle ?",
        "Je comprends que ça semble impossible. Mais tu as déjà fait tellement de choses impossibles. Un tout petit pas ?",
        "OK. Pas aujourd'hui alors. Et c'est OK. Repose-toi. Demain est un autre jour 💜"
    ],
    
    tired: [
        "Tu as le droit d'être fatiguée. Tu portes beaucoup. Repose-toi si tu peux. Pas de culpabilité 💜",
        "La fatigue est normale. Tu gères tellement ! Va dans Self-Care, prends 5 minutes pour toi."
    ],
    
    // Remerciements
    thanks: [
        "De rien ma belle 💜 Je suis toujours là pour toi.",
        "Avec plaisir ! Tu mérites tout le soutien du monde 💜",
        "C'est normal ! Je suis là pour ça 💜"
    ],
    
    // Default
    default: [
        "Je t'écoute. Continue, je suis là 💜",
        "Dis-m'en plus. Je veux comprendre.",
        "Je suis là. Prends ton temps pour m'expliquer.",
        "Comment puis-je t'aider avec ça ?"
    ]
};

let chatHistory = [];

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatBubble = document.getElementById('chatBubble');
    
    if (chatWindow.classList.contains('open')) {
        chatWindow.classList.remove('open');
        chatBubble.style.display = 'flex';
    } else {
        chatWindow.classList.add('open');
        chatBubble.style.display = 'none';
        
        // Scroll vers le bas
        setTimeout(() => {
            const messages = document.getElementById('chatMessages');
            messages.scrollTop = messages.scrollHeight;
        }, 100);
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Ajouter message utilisateur
    addChatMessage(message, 'user');
    input.value = '';
    
    // Analyser et répondre
    setTimeout(() => {
        const response = analyzeMessage(message);
        addChatMessage(response, 'bot');
    }, 500);
}

function sendQuickReply(reply) {
    sendChatMessage();
    document.getElementById('chatInput').value = reply;
    sendChatMessage();
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'bot' ? '💜' : '👤';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    // Si c'est du HTML (avec boutons), utiliser innerHTML
    if (text.includes('<button') || text.includes('<div')) {
        content.innerHTML = text;
    } else {
        // Sinon, créer des paragraphes
        const paragraphs = text.split('\n').filter(p => p.trim());
        paragraphs.forEach(p => {
            const para = document.createElement('p');
            para.textContent = p;
            content.appendChild(para);
        });
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    messagesContainer.appendChild(messageDiv);
    
    // Sauvegarder dans l'historique
    chatHistory.push({ text, sender, timestamp: new Date().toISOString() });
    if (chatHistory.length > 50) chatHistory.shift(); // Garder 50 messages max
    
    // Scroll vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Sauvegarder
    if (!appState.chatHistory) appState.chatHistory = [];
    appState.chatHistory = chatHistory;
    saveState();
}

function analyzeMessage(message) {
    const msg = message.toLowerCase();
    
    // Mots-clés urgence
    if (msg.includes('mourir') || msg.includes('suicide') || msg.includes('en finir') || 
        msg.includes('plus envie') || msg.includes('disparaître')) {
        return getRandom(CHAT_RESPONSES.crisis);
    }
    
    // Sentiments
    if (msg.includes('triste') || msg.includes('pleure') || msg.includes('mal') || 
        msg.includes('déprim') || msg.includes('vide')) {
        return getRandom(CHAT_RESPONSES.sadness);
    }
    
    if (msg.includes('colère') || msg.includes('énerve') || msg.includes('furieuse') || 
        msg.includes('rage')) {
        return getRandom(CHAT_RESPONSES.anger);
    }
    
    if (msg.includes('heureux') || msg.includes('bien') || msg.includes('contente') || 
        msg.includes('joie') || msg.includes('super')) {
        return getRandom(CHAT_RESPONSES.happiness);
    }
    
    if (msg.includes('fatigue') || msg.includes('épuisée') || msg.includes('crevée')) {
        return getRandom(CHAT_RESPONSES.tired);
    }
    
    // Victoires
    if (msg.includes('réussi') || msg.includes('j\'ai fait') || msg.includes('fière') || 
        msg.includes('bravo') || msg.includes('youpi') || msg.includes('gagné')) {
        return getRandom(CHAT_RESPONSES.victory);
    }
    
    // Navigation
    if (msg.includes('aide') || msg.includes('comment') || msg.includes('?')) {
        return getRandom(CHAT_RESPONSES.help);
    }
    
    if (msg.includes('linkedin')) {
        return getRandom(CHAT_RESPONSES.linkedin);
    }
    
    if (msg.includes('emploi') || msg.includes('travail') || msg.includes('candidat') || 
        msg.includes('cv') || msg.includes('entretien')) {
        return getRandom(CHAT_RESPONSES.job);
    }
    
    if (msg.includes('prendre soin') || msg.includes('self-care') || msg.includes('bien-être')) {
        return getRandom(CHAT_RESPONSES.selfcare);
    }
    
    // Thèmes spécifiques
    if (msg.includes('séparation') || msg.includes('divorce') || msg.includes('ex') || 
        msg.includes('mari')) {
        return getRandom(CHAT_RESPONSES.separation);
    }
    
    if (msg.includes('enfant') || msg.includes('fils') || msg.includes('fille') || 
        msg.includes('maman')) {
        return getRandom(CHAT_RESPONSES.children);
    }
    
    // Motivation
    if (msg.includes('peux pas') || msg.includes('impossible') || msg.includes('y arriver')) {
        return getRandom(CHAT_RESPONSES.cantdo);
    }
    
    // Salutations
    if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('coucou') || 
        msg.includes('hello')) {
        return getRandom(CHAT_RESPONSES.greetings);
    }
    
    // Remerciements
    if (msg.includes('merci') || msg.includes('thank')) {
        return getRandom(CHAT_RESPONSES.thanks);
    }
    
    // Encouragement général
    if (msg.length < 20 && (msg.includes('dur') || msg.includes('difficile'))) {
        return getRandom(CHAT_RESPONSES.encouragement);
    }
    
    // Default
    return getRandom(CHAT_RESPONSES.default);
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function loadChatHistory() {
    if (appState.chatHistory && appState.chatHistory.length > 0) {
        chatHistory = appState.chatHistory;
        
        // Recharger les messages (sauf le premier qui est déjà là)
        const messagesContainer = document.getElementById('chatMessages');
        chatHistory.slice(1).forEach(msg => {
            // Reconstruire les messages sans les rajouter à l'historique
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${msg.sender}`;
            
            const avatar = document.createElement('div');
            avatar.className = 'message-avatar';
            avatar.textContent = msg.sender === 'bot' ? '💜' : '👤';
            
            const content = document.createElement('div');
            content.className = 'message-content';
            const para = document.createElement('p');
            para.textContent = msg.text;
            content.appendChild(para);
            
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(content);
            messagesContainer.appendChild(messageDiv);
        });
    }
}

// ============================================
// CÉLÉBRATIONS & CONFETTIS
// ============================================

function triggerCelebration(message) {
    // Créer overlay
    const overlay = document.getElementById('celebrationOverlay');
    
    // Confettis
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }
    
    // Message célébration
    const celebMsg = document.createElement('div');
    celebMsg.className = 'celebration-message';
    celebMsg.innerHTML = `
        <h2>🎉 ${message} 🎉</h2>
        <p>Continue comme ça !</p>
    `;
    overlay.appendChild(celebMsg);
    
    // Retirer après 3 secondes
    setTimeout(() => {
        celebMsg.remove();
    }, 3000);
}

function createConfetti() {
    const overlay = document.getElementById('celebrationOverlay');
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Position et couleur aléatoire
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    const colors = ['#E8D5F2', '#FFE5EC', '#B4E4FF', '#C8E6C9', '#FFE082'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    overlay.appendChild(confetti);
    
    // Retirer après animation
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Déclencher célébrations sur certaines actions
function checkCelebrationTriggers() {
    // 10 victoires
    if (appState.victories.length === 10 && !appState.celebrated?.victories10) {
        triggerCelebration('10 Victoires !');
        if (!appState.celebrated) appState.celebrated = {};
        appState.celebrated.victories10 = true;
        saveState();
    }
    
    // LinkedIn complété
    if (appState.career.linkedinProgress === 10 && !appState.celebrated?.linkedin) {
        triggerCelebration('LinkedIn au Top !');
        if (!appState.celebrated) appState.celebrated = {};
        appState.celebrated.linkedin = true;
        saveState();
    }
    
    // 7 jours d'utilisation
    const startDate = new Date(appState.user.startDate);
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    if (days === 7 && !appState.celebrated?.week1) {
        triggerCelebration('Une Semaine !');
        if (!appState.celebrated) appState.celebrated = {};
        appState.celebrated.week1 = true;
        saveState();
    }
}

// ============================================
// DÉMARRAGE DE L'APPLICATION
// ============================================

document.addEventListener('DOMContentLoaded', initApp);

// Sauvegarder automatiquement toutes les 30 secondes
setInterval(saveState, 30000);
