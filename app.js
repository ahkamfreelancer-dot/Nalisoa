// --- FONCTION ACCORDÉON (CORRIGÉE) ---
function toggleAccordion(header) {
    const card = header.parentElement;
    
    // Fermer les autres (optionnel, pour un effet accordéon pur)
    /*
    document.querySelectorAll('.accordion-card').forEach(otherCard => {
        if (otherCard !== card) otherCard.classList.remove('active');
    });
    */

    card.classList.toggle('active');
}

// --- GESTION DU CHAT (CORRIGÉE) ---
function toggleChat() {
    const chatWin = document.getElementById('chat-window');
    chatWin.classList.toggle('open');
    
    if(chatWin.classList.contains('open')) {
        scrollChatToBottom();
        document.getElementById('chatInput').focus();
    }
}

function scrollChatToBottom() {
    const container = document.getElementById('chat-messages');
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    
    if (text !== "") {
        addMessage(text, 'user');
        input.value = "";
        
        // Simulation réponse Kiala
        setTimeout(() => {
            addMessage("Je suis là avec toi. On avance ensemble, petit à petit. ✨", 'kiala');
        }, 800);
    }
}

function addMessage(text, sender) {
    const container = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    
    msgDiv.innerHTML = `
        <div class="message-avatar">${sender === 'user' ? '👤' : '🦋'}</div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    container.appendChild(msgDiv);
    scrollChatToBottom();
}

// Support de la touche Entrée pour le chat
document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// --- SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW fail', err));
    });
}
