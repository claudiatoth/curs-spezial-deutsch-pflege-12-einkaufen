// ============================================
// FINAL TEST — Pflege 12: Einkaufen
// 25 întrebări × 5 categorii
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // === 1. LOCURI (5) ===
    { id: 1, category: 'Locuri', type: 'fill', question: 'Brutăria (cu articol): „die ____"', correct: 'Bäckerei', accept: ['baeckerei', 'bäckerei'] },
    { id: 2, category: 'Locuri', type: 'mc', question: 'Apotheke vs Drogerie:', options: ['Sunt sinonime', 'Apotheke = medicamente cu rețetă · Drogerie = cosmetice + OTC ieftin', 'Apotheke = formal, Drogerie = informal', 'Diferă doar de regiune'], correctIndex: 1, correct: 'Apotheke pentru rețete · Drogerie pentru cosmetice + OTC' },
    { id: 3, category: 'Locuri', type: 'fill', question: 'Merg LA supermarket: „Ich gehe ____ Supermarkt." (zu+dem masc)', correct: 'zum', accept: ['zum'] },
    { id: 4, category: 'Locuri', type: 'fill', question: 'Merg LA farmacie: „Ich gehe ____ Apotheke." (zu+der feminin)', correct: 'zur', accept: ['zur'] },
    { id: 5, category: 'Locuri', type: 'fill', question: 'Măcelăria (cu articol): „die ____"', correct: 'Metzgerei', accept: ['metzgerei'] },

    // === 2. CANTITĂȚI + ALIMENTE (5) ===
    { id: 6, category: 'Cantități + Alimente', type: 'fill', question: 'Un litru de lapte: „____ Liter Milch." (un — masc Akk)', correct: 'einen', accept: ['einen'] },
    { id: 7, category: 'Cantități + Alimente', type: 'fill', question: 'Un pachet de unt: „____ Packung Butter." (un — feminin)', correct: 'eine', accept: ['eine'] },
    { id: 8, category: 'Cantități + Alimente', type: 'mc', question: 'Genul lui Joghurt în germană:', options: ['feminin (die Joghurt)', 'masculin (der Joghurt)', 'neutru (das Joghurt)', 'plural'], correctIndex: 1, correct: 'der Joghurt (MASCULIN!)' },
    { id: 9, category: 'Cantități + Alimente', type: 'fill', question: 'Pluralul lui der Apfel: „die ____" (cu Umlaut)', correct: 'Äpfel', accept: ['aepfel', 'äpfel'] },
    { id: 10, category: 'Cantități + Alimente', type: 'mc', question: 'Genul lui Gurke (castravetele) în germană:', options: ['masculin (der Gurke)', 'FEMININ (die Gurke)', 'neutru (das Gurke)', 'plural'], correctIndex: 1, correct: 'die Gurke (FEMININ în DE!)' },

    // === 3. LA CASĂ (5) ===
    { id: 11, category: 'La casă', type: 'fill', question: 'Întrebarea standard: „Wie viel ____ das?" (a costa)', correct: 'kostet', accept: ['kostet'] },
    { id: 12, category: 'La casă', type: 'fill', question: 'Răspuns la „bar oder mit Karte?": „Mit ____, bitte."', correct: 'Karte', accept: ['karte'] },
    { id: 13, category: 'La casă', type: 'mc', question: 'Pentru ce ceri ÎNTOTDEAUNA Quittung?', options: ['Pentru tine, ca să verifici', 'Pentru rambursare cu familia + dosar Pflege', 'Pentru taxe', 'Nu e necesar'], correctIndex: 1, correct: 'Pentru rambursare cu familia + dosar Pflege' },
    { id: 14, category: 'La casă', type: 'fill', question: 'Chitanța (cu articol): „die ____"', correct: 'Quittung', accept: ['quittung'] },
    { id: 15, category: 'La casă', type: 'fill', question: '„Das macht 23 Euro ____." (CIFRA 45)', correct: '45', accept: ['45', 'fünfundvierzig', 'fuenfundvierzig'] },

    // === 4. APOTHEKE (5) ===
    { id: 16, category: 'Apotheke', type: 'fill', question: 'Rețeta medicală: „das ____"', correct: 'Rezept', accept: ['rezept'] },
    { id: 17, category: 'Apotheke', type: 'fill', question: 'Întrebare INTERACȚIUNI: „Gibt es ____ mit anderen Tabletten?"', correct: 'Wechselwirkungen', accept: ['wechselwirkungen'] },
    { id: 18, category: 'Apotheke', type: 'fill', question: 'Sirop de tuse: „der ____"', correct: 'Hustensaft', accept: ['hustensaft'] },
    { id: 19, category: 'Apotheke', type: 'mc', question: 'La Apotheke pentru rețete CRONICE (lunare), ceri:', options: ['das Rezept', 'die Lieferung (livrare la domiciliu)', 'Können Sie das Rezept wiederholen? (pentru repetare lunară)', 'die Wechselwirkung'], correctIndex: 2, correct: 'Können Sie das Rezept wiederholen? — pentru rețete cronice repetate' },
    { id: 20, category: 'Apotheke', type: 'fill', question: 'Urare la final: „Gute ____!" (însănătoșire)', correct: 'Besserung', accept: ['besserung'] },

    // === 5. BRAUCHEN + WIE VIEL/VIELE + TRADUCERE (5) ===
    { id: 21, category: 'brauchen + Wie viel + Traducere', type: 'fill', question: 'brauchen + Akk: „Ich brauche ____ Apfel." (un — masc Akk!)', correct: 'einen', accept: ['einen'] },
    { id: 22, category: 'brauchen + Wie viel + Traducere', type: 'mc', question: 'Wie viel vs Wie viele:', options: ['Sunt sinonime', 'Wie viel = SINGULAR/colectiv + preț · Wie viele = PLURAL numărabil', 'Wie viel = formal, Wie viele = informal', 'Diferă de regiune'], correctIndex: 1, correct: 'Wie viel pentru singular/colectiv/preț · Wie viele pentru plural numărabil' },
    { id: 23, category: 'brauchen + Wie viel + Traducere', type: 'fill', question: '„____ Eier brauchen wir?" (PLURAL)', correct: 'Wie viele', accept: ['wie viele'] },
    { id: 24, category: 'brauchen + Wie viel + Traducere', type: 'fill', question: '🇷🇴 „Am o rețetă pentru Frau Müller." → 🇩🇪 ?', correct: 'Ich habe ein Rezept für Frau Müller.', accept: ['ich habe ein rezept fuer frau mueller', 'ich habe ein rezept für frau müller'] },
    { id: 25, category: 'brauchen + Wie viel + Traducere', type: 'fill', question: '🇷🇴 „Cât costă asta?" → 🇩🇪 ?', correct: 'Wie viel kostet das?', accept: ['wie viel kostet das', 'wie viel kostet das?'] }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Locuri · Cantități+Alimente · La casă · Apotheke · brauchen+Wie viel/viele+Traducere</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Cumpărăturile sunt sub control!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
