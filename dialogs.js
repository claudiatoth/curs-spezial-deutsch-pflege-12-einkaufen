// ============================================
// DIALOGS.JS — Pflege 12: Einkaufen
// 2 dialoguri (la casă cu Verkäuferin + Apotheke cu Apotheker) · sync audio.currentTime
// Personaje noi: Verkäuferin 👩‍💼 + Apotheker 👨‍⚕️
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

// ============================================
// DIALOG 1: „An der Kasse" — Andreea + Verkäuferin
// 10 replici, ~70 sec
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'An der Kasse',
    context: 'Ora 14:15. Andreea a pus toate cumpărăturile pe banda rulantă la Aldi — pâine, lapte, ouă, hähnchen, mere. E în spate doar 1 client. Verkäuferin (vânzătoarea) scanează rapid. Andreea are cardul Frauei Müller în buzunar (Frau Müller i-a dat PIN-ul ieri). Acesta este momentul primei cumpărături sale singură pentru pacientă.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 70,
    replici: [
        { id: 1, speaker: 'verkaeuferin', start: 0,  duration: 6, de: 'Guten Tag! Haben Sie eine Payback-Karte?', ro: 'Bună ziua! Aveți un card de fidelitate?' },
        { id: 2, speaker: 'andreea',      start: 6,  duration: 5, de: 'Nein, danke.', ro: 'Nu, mulțumesc.' },
        { id: 3, speaker: 'verkaeuferin', start: 11, duration: 7, de: 'Das macht 23 Euro 45.', ro: 'Asta face 23 euro 45.' },
        { id: 4, speaker: 'andreea',      start: 18, duration: 6, de: 'Mit Karte, bitte.', ro: 'Cu card, vă rog.' },
        { id: 5, speaker: 'verkaeuferin', start: 24, duration: 6, de: 'PIN bitte. Und unterschreiben.', ro: 'PIN-ul, vă rog. Și semnați.' },
        { id: 6, speaker: 'andreea',      start: 30, duration: 7, de: 'So. Brauche ich eine Quittung?', ro: 'Așa. Am nevoie de o chitanță?' },
        { id: 7, speaker: 'verkaeuferin', start: 37, duration: 7, de: 'Möchten Sie den Bon?', ro: 'Doriți bonul?' },
        { id: 8, speaker: 'andreea',      start: 44, duration: 8, de: 'Ja, bitte. Für meine Patientin.', ro: 'Da, vă rog. Pentru pacienta mea.' },
        { id: 9, speaker: 'verkaeuferin', start: 52, duration: 8, de: 'Hier bitte. Schönen Tag noch!', ro: 'Aici vă rog. O zi frumoasă!' },
        { id: 10, speaker: 'andreea',     start: 60, duration: 7, de: 'Danke, ebenfalls. Auf Wiedersehen!', ro: 'Mulțumesc, la fel. La revedere!' }
    ]
};

// ============================================
// DIALOG 2: „In der Apotheke" — Andreea + Apotheker
// 10 replici, ~75 sec
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'In der Apotheke',
    context: 'După supermarket, Andreea merge la Apotheke cu rețeta primită de la Dr. Schmidt săptămâna trecută. Frau Müller are 3 medicamente cronice — pastilă tensiune, vitamină D, calmant pentru spate. Apotheker (farmacistul) verifică rețeta + sfat profesional. Andreea e politicos-profesională, întreabă despre interacțiuni.',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 75,
    replici: [
        { id: 1, speaker: 'andreea',   start: 0,  duration: 7, de: 'Guten Tag. Ich habe ein Rezept für Frau Müller.', ro: 'Bună ziua. Am o rețetă pentru Frau Müller.' },
        { id: 2, speaker: 'apotheker', start: 7,  duration: 6, de: 'Gerne. Zeigen Sie mir das Rezept.', ro: 'Cu plăcere. Arătați-mi rețeta.' },
        { id: 3, speaker: 'andreea',   start: 13, duration: 5, de: 'Hier ist es.', ro: 'Aici este.' },
        { id: 4, speaker: 'apotheker', start: 18, duration: 10, de: 'Drei Medikamente — Blutdruck, Vitamin D, Schmerzmittel.', ro: 'Trei medicamente — tensiune, vitamina D, calmant.' },
        { id: 5, speaker: 'andreea',   start: 28, duration: 9, de: 'Gibt es Wechselwirkungen mit ihren anderen Tabletten?', ro: 'Sunt interacțiuni cu celelalte pastile?' },
        { id: 6, speaker: 'apotheker', start: 37, duration: 9, de: 'Nein, alles passt zusammen. Vorsicht: das Schmerzmittel nach dem Essen.', ro: 'Nu, totul se potrivește. Atenție: calmantul după mâncare.' },
        { id: 7, speaker: 'andreea',   start: 46, duration: 5, de: 'Verstanden. Vielen Dank.', ro: 'Am înțeles. Mulțumesc mult.' },
        { id: 8, speaker: 'apotheker', start: 51, duration: 8, de: 'Das macht 18 Euro 20. Möchten Sie eine Quittung?', ro: 'Asta face 18 euro 20. Doriți o chitanță?' },
        { id: 9, speaker: 'andreea',   start: 59, duration: 8, de: 'Ja, bitte. Die Familie braucht sie.', ro: 'Da, vă rog. Familia are nevoie de ea.' },
        { id: 10, speaker: 'apotheker', start: 67, duration: 8, de: 'Hier sind die Medikamente. Gute Besserung an Frau Müller!', ro: 'Aici sunt medicamentele. Însănătoșire grabnică Frauei Müller!' }
    ]
};

// ============================================
// BUILD ANIMATED DIALOG HTML
// ============================================
function buildAnimatedDialog(data) {
    let otherLabel, otherAvatar, otherBadge, otherSpeakerCode;
    if (data.id === 'dialog1') {
        otherSpeakerCode = 'verkaeuferin';
        otherLabel = 'Verkäuferin';
        otherAvatar = '👩‍💼';
        otherBadge = '👩‍💼 Verkäuferin';
    } else {
        otherSpeakerCode = 'apotheker';
        otherLabel = 'Apotheker';
        otherAvatar = '👨‍⚕️';
        otherBadge = '👨‍⚕️ Apotheker';
    }

    const repliciHTML = data.replici.map(r => {
        const spkrLabel = r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : otherBadge;
        return `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${spkrLabel}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>`;
    }).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context">
                <strong>📍 Situația:</strong> ${data.context}
            </div>

            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        <div class="character-avatar">
                            <img src="images/andreea.png" alt="Andreea">
                        </div>
                        <div class="character-label">Andreea</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>

                    <div class="character-wrapper character-${otherSpeakerCode}" data-speaker="${otherSpeakerCode}">
                        <div class="character-avatar frau-mueller-avatar-large">
                            <span class="avatar-face" style="font-size:48px;">${otherAvatar}</span>
                        </div>
                        <div class="character-label">${otherLabel}</div>
                        <div class="speech-bubble speech-${otherSpeakerCode}" id="bubble-${data.id}-${otherSpeakerCode}">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>
                </div>

                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>

                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>

                <audio id="audio-${data.id}" preload="none">
                    <source src="${data.audioFile}" type="audio/mpeg">
                </audio>
            </div>

            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">
                    ${repliciHTML}
                </div>
            </details>
        </div>
    `;
}

// ============================================
// STATE + PLAY/PAUSE cu currentTime sync
// ============================================
const dialogState = {};

function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = {
            isPlaying: false,
            currentReply: 0,
            lastDisplayedIdx: -1,
            timeouts: [],
            timeUpdateHandler: null,
            endedHandler: null,
            data: dialogId === 'dialog1' ? dialog1Data : dialog2Data
        };
    }
    return dialogState[dialogId];
}

function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;
    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);
    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;
    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying) return;
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) {
                if (t >= data.replici[i].start) currentIdx = i;
                else break;
            }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx;
                state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]);
                updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);
        state.endedHandler = () => endDialog(dialogId);
        audio.addEventListener('ended', state.endedHandler);
    }
    if (audio) {
        if (state.currentReply >= data.replici.length) {
            audio.currentTime = 0;
            state.currentReply = 0;
            state.lastDisplayedIdx = -1;
        }
        audio.play().catch(() => { startTimerFallback(dialogId); });
    } else {
        startTimerFallback(dialogId);
    }
}

function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;
    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i;
            showReply(dialogId, reply);
            state.currentReply = i + 1;
            updateProgress(dialogId);
            if (i === data.replici.length - 1) {
                setTimeout(() => endDialog(dialogId), reply.duration * 1000);
            }
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => {
        if (c !== activeChar) c.classList.remove('speaking');
    });
    if (activeChar) activeChar.classList.add('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => {
        if (!b.id.endsWith('-' + reply.speaker)) b.classList.remove('visible');
    });
    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;
    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => {
            bubble.querySelector('.bubble-de').textContent = reply.de;
            bubble.querySelector('.bubble-ro').textContent = reply.ro;
            bubble.classList.remove('text-fading');
        }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de;
        bubble.querySelector('.bubble-ro').textContent = reply.ro;
        bubble.classList.add('visible');
    }
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const replyItem = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (replyItem) replyItem.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false;
    state.timeouts.forEach(t => clearTimeout(t));
    state.timeouts = [];
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) audio.pause();
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0;
    state.lastDisplayedIdx = -1;
    state.timeouts = [];
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) { audio.pause(); audio.currentTime = 0; }
    updateProgress(dialogId);
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false;
    state.currentReply = state.data.replici.length;
    state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length;
    const pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`);
    const text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

function replayReply(dialogId, replyId) {
    const data = (dialogId === 'dialog1') ? dialog1Data : dialog2Data;
    const replyIdx = data.replici.findIndex(r => r.id === replyId);
    if (replyIdx < 0) return;
    const reply = data.replici[replyIdx];
    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1;
    showReply(dialogId, reply);
    state.currentReply = replyIdx + 1;
    updateProgress(dialogId);
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) {
            state.isPlaying = true;
            audio.play().catch(() => {});
            document.getElementById(`btn-play-${dialogId}`).disabled = true;
            document.getElementById(`btn-pause-${dialogId}`).disabled = false;
        }
    }
}

document.getElementById('dialog1-container').innerHTML = buildAnimatedDialog(dialog1Data);
document.getElementById('dialog2-container').innerHTML = buildAnimatedDialog(dialog2Data);
