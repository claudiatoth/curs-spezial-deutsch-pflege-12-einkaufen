// ============================================
// EXERCISES.JS — Pflege 12: Einkaufen
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/znvr3QLvx3JJxDia8
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match locuri + alimente
const ex1Data = [
    { id: 'a', de: 'der Supermarkt', accept: ['supermarket', 'supermarketul'], correct: 'supermarketul' },
    { id: 'b', de: 'die Bäckerei', accept: ['brutarie', 'brutăria', 'brutaria'], correct: 'brutăria' },
    { id: 'c', de: 'die Metzgerei', accept: ['macelaria', 'măcelăria'], correct: 'măcelăria' },
    { id: 'd', de: 'die Apotheke', accept: ['farmacie', 'farmacia'], correct: 'farmacia' },
    { id: 'e', de: 'das Rezept', accept: ['reteta', 'rețeta'], correct: 'rețeta' },
    { id: 'f', de: 'die Einkaufsliste', accept: ['lista de cumparaturi', 'lista de cumpărături'], correct: 'lista de cumpărături' },
    { id: 'g', de: 'die Quittung', accept: ['chitanta', 'chitanța', 'bonul'], correct: 'chitanța' },
    { id: 'h', de: 'die Lieferung', accept: ['livrare', 'livrarea'], correct: 'livrarea' },
    { id: 'i', de: 'die Wechselwirkung', accept: ['interactiune', 'interacțiune', 'interactiuni'], correct: 'interacțiunea (medicamentoasă)' },
    { id: 'j', de: 'das Hähnchen', accept: ['pui', 'puiul'], correct: 'puiul (fript)' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🛒 Scrie traducerea</strong> pentru cuvintele cumpărăturilor.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 2: brauchen + Akkusativ
const ex2Data = [
    { id: 'a', sentence: 'Ich brauche ____ Liter Milch. (un — masc Akk: Liter e masculin)', translation: 'Am nevoie de UN litru de lapte.', correct: 'einen', accept: ['einen'] },
    { id: 'b', sentence: 'Ich brauche ____ Packung Butter. (un — feminin: Packung)', translation: 'Am nevoie de UN pachet de unt.', correct: 'eine', accept: ['eine'] },
    { id: 'c', sentence: 'Ich brauche ____ Kilo Kartoffeln. (un — neutru: Kilo)', translation: 'Am nevoie de UN kilo de cartofi.', correct: 'ein', accept: ['ein'] },
    { id: 'd', sentence: 'Wir brauchen ____ Brötchen. (un — neutru singular)', translation: 'Avem nevoie de O chiflă.', correct: 'ein', accept: ['ein'] },
    { id: 'e', sentence: 'Du ____ Brot. (a avea nevoie — tu)', translation: 'TU AI NEVOIE de pâine.', correct: 'brauchst', accept: ['brauchst'] },
    { id: 'f', sentence: 'Sie ____ einen Apfel. (a avea nevoie — el/ea)', translation: 'EA ARE NEVOIE de un măr.', correct: 'braucht', accept: ['braucht'] },
    { id: 'g', sentence: 'Ich brauche ____ Apfel. (un — masc Akk!)', translation: 'Am nevoie de UN măr.', correct: 'einen', accept: ['einen'] },
    { id: 'h', sentence: 'Frau Müller braucht ____ Joghurt. (un — masc Akk: der Joghurt!)', translation: 'Frau Müller are nevoie de UN iaurt.', correct: 'einen', accept: ['einen'] },
    { id: 'i', sentence: 'Wir brauchen ____ Eier. (numeral — zece)', translation: 'Avem nevoie de ZECE ouă.', correct: 'zehn', accept: ['zehn', '10'] },
    { id: 'j', sentence: 'Brauchen Sie ____ Tüte? (o — feminin: die Tüte)', translation: 'Aveți nevoie de O pungă?', correct: 'eine', accept: ['eine'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📐 brauchen + Akkusativ.</strong> Atenție la genul cantității (NU al alimentului): einen Liter / eine Packung / ein Kilo / ein Stück / zwei Flaschen.</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'der Supermarkt', accept: ['der supermarkt', 'supermarkt'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'die Bäckerei', accept: ['die baeckerei', 'die bäckerei', 'baeckerei', 'bäckerei'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'die Apotheke', accept: ['die apotheke', 'apotheke'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'das Rezept', accept: ['das rezept', 'rezept'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'die Quittung', accept: ['die quittung', 'quittung'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'brauchen', accept: ['brauchen'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'der Apfel', accept: ['der apfel', 'apfel'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'die Milch', accept: ['die milch', 'milch'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'die Tomate', accept: ['die tomate', 'tomate'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'die Wechselwirkung', accept: ['die wechselwirkung', 'wechselwirkung'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Locuri + alimente + Apotheke.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie cuvântul..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 4: Wie viel vs Wie viele
const ex4Data = [
    { id: 'a', sentence: '____ Milch brauchen wir? (substantiv SINGULAR/colectiv)', translation: 'CÂT lapte avem nevoie?', correct: 'Wie viel', accept: ['wie viel'] },
    { id: 'b', sentence: '____ Eier brauchen wir? (substantiv PLURAL)', translation: 'CÂTE ouă avem nevoie?', correct: 'Wie viele', accept: ['wie viele'] },
    { id: 'c', sentence: '____ kostet das? (preț — singular)', translation: 'CÂT costă asta?', correct: 'Wie viel', accept: ['wie viel'] },
    { id: 'd', sentence: '____ Äpfel brauchen wir? (substantiv PLURAL)', translation: 'CÂTE mere avem nevoie?', correct: 'Wie viele', accept: ['wie viele'] },
    { id: 'e', sentence: '____ Brot brauchen wir? (substantiv SINGULAR colectiv)', translation: 'CÂTĂ pâine avem nevoie?', correct: 'Wie viel', accept: ['wie viel'] },
    { id: 'f', sentence: '____ Flaschen Wasser brauchen wir? (PLURAL — Flaschen)', translation: 'CÂTE sticle de apă avem nevoie?', correct: 'Wie viele', accept: ['wie viele'] },
    { id: 'g', sentence: '____ Gramm Käse möchten Sie? (colectiv — Gramm singular)', translation: 'CÂTE grame de brânză doriți?', correct: 'Wie viel', accept: ['wie viel'] },
    { id: 'h', sentence: '____ Tomaten brauchen wir? (PLURAL — Tomaten)', translation: 'CÂTE roșii avem nevoie?', correct: 'Wie viele', accept: ['wie viele'] },
    { id: 'i', sentence: '____ kostet die Suppe? (preț)', translation: 'CÂT costă supa?', correct: 'Wie viel', accept: ['wie viel'] },
    { id: 'j', sentence: '____ Kinder hat Frau Müller? (PLURAL — Kinder)', translation: 'CÂȚI copii are Frau Müller?', correct: 'Wie viele', accept: ['wie viele'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>❓ Wie viel sau Wie viele?</strong> Wie viel = SINGULAR/colectiv + preț · Wie viele = PLURAL numărabil.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="Wie viel sau Wie viele..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 5: Dialog Gap-Fill — La Apotheke (Dialog 2)
const ex5Data = [
    { id: 'a', sentence: 'Andreea: „Ich habe ein ____ für Frau Müller." (REȚETĂ)', translation: 'Am o REȚETĂ.', correct: 'Rezept', accept: ['rezept'] },
    { id: 'b', sentence: 'Apotheker: „____ Sie mir das Rezept." (a arăta — imperativ Sie)', translation: 'ARĂTAȚI-mi rețeta.', correct: 'Zeigen', accept: ['zeigen'] },
    { id: 'c', sentence: 'Apotheker: „Drei Medikamente — Blutdruck, Vitamin D, ____ "" (CALMANT — masc)', translation: 'CALMANT.', correct: 'Schmerzmittel', accept: ['schmerzmittel'] },
    { id: 'd', sentence: 'Andreea: „Gibt es ____ mit anderen Tabletten?" (INTERACȚIUNI)', translation: 'Sunt INTERACȚIUNI?', correct: 'Wechselwirkungen', accept: ['wechselwirkungen'] },
    { id: 'e', sentence: 'Apotheker: „Nein, alles ____ zusammen." (a se potrivi — el/ea)', translation: 'Totul SE POTRIVEȘTE împreună.', correct: 'passt', accept: ['passt'] },
    { id: 'f', sentence: 'Apotheker: „____: das Schmerzmittel nach dem Essen." (ATENȚIE — feminin)', translation: 'ATENȚIE: calmantul după mâncare.', correct: 'Vorsicht', accept: ['vorsicht'] },
    { id: 'g', sentence: 'Apotheker: „Das macht 18 Euro ____." (CIFRE 20)', translation: '18 euro 20.', correct: '20', accept: ['20', 'zwanzig'] },
    { id: 'h', sentence: 'Andreea: „Ja, bitte. Die ____ braucht sie." (FAMILIA)', translation: 'FAMILIA are nevoie de ea.', correct: 'Familie', accept: ['familie'] },
    { id: 'i', sentence: 'Apotheker: „Hier sind die ____." (MEDICAMENTELE — plural)', translation: 'Aici sunt MEDICAMENTELE.', correct: 'Medikamente', accept: ['medikamente'] },
    { id: 'j', sentence: 'Apotheker: „Gute ____ an Frau Müller!" (ÎNSĂNĂTOȘIRE)', translation: 'ÎNSĂNĂTOȘIRE grabnică Frauei Müller!', correct: 'Besserung', accept: ['besserung'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>💊 Dialog gap-fill — La Apotheke (Dialog 2).</strong> Completează replicile lipsă.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 6: Traducere RO → DE
const ex6Data = [
    { id: 'a', ro: 'Am nevoie de un litru de lapte.', correct: 'Ich brauche einen Liter Milch.', accept: ['ich brauche einen liter milch'] },
    { id: 'b', ro: 'Avem nevoie de pâine și ouă.', correct: 'Wir brauchen Brot und Eier.', accept: ['wir brauchen brot und eier'] },
    { id: 'c', ro: 'Merg la supermarket.', correct: 'Ich gehe zum Supermarkt.', accept: ['ich gehe zum supermarkt'] },
    { id: 'd', ro: 'Cât costă asta?', correct: 'Wie viel kostet das?', accept: ['wie viel kostet das', 'wie viel kostet das?'] },
    { id: 'e', ro: 'Cu card, vă rog.', correct: 'Mit Karte, bitte.', accept: ['mit karte bitte', 'mit karte, bitte'] },
    { id: 'f', ro: 'Doriți bonul?', correct: 'Möchten Sie den Bon?', accept: ['moechten sie den bon', 'möchten sie den bon', 'möchten sie den bon?'] },
    { id: 'g', ro: 'Am o rețetă pentru Frau Müller.', correct: 'Ich habe ein Rezept für Frau Müller.', accept: ['ich habe ein rezept fuer frau mueller', 'ich habe ein rezept für frau müller'] },
    { id: 'h', ro: 'Sunt interacțiuni cu celelalte medicamente?', correct: 'Gibt es Wechselwirkungen mit den anderen Medikamenten?', accept: ['gibt es wechselwirkungen mit den anderen medikamenten', 'gibt es wechselwirkungen mit den anderen medikamenten?'] },
    { id: 'i', ro: 'Câte ouă avem nevoie?', correct: 'Wie viele Eier brauchen wir?', accept: ['wie viele eier brauchen wir', 'wie viele eier brauchen wir?'] },
    { id: 'j', ro: 'Am nevoie de o chitanță, vă rog.', correct: 'Ich brauche eine Quittung, bitte.', accept: ['ich brauche eine quittung bitte', 'ich brauche eine quittung, bitte'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong></div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 7: Schreiben — Lista cumpărături
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Lista de cumpărături pentru Frau Müller</h4>
                <p>Mâine mergi la cumpărături pentru Frau Müller. <strong>Scrie o listă (5-7 propoziții)</strong> cu ce trebuie să cumperi + de unde + dacă ai și o rețetă la Apotheke.</p>
                <p>Include: <em>3-5 obiecte concrete cu cantități (einen Liter Milch, 500 Gramm Hähnchen, zwei Brötchen) + zum/zur (zum Supermarkt, zur Apotheke) + dacă duci o rețetă</em>.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Morgen gehe ich einkaufen · Ich brauche · einen Liter / eine Packung / ein Kilo · Zum Supermarkt · Zur Apotheke · Ich habe ein Rezept · Wie viele Eier brauchen wir?</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier die Einkaufsliste auf Deutsch...
Beispiel:
Morgen gehe ich einkaufen..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Hallo Petra. Morgen gehe ich einkaufen für Ihre Mutter. Ich brauche einen Liter Milch, zwei Brötchen, ein Kilo Kartoffeln und 500 Gramm Hähnchen. Zum Supermarkt gehe ich zuerst, danach zur Bäckerei für frische Brötchen. Ich habe auch ein Rezept für die Apotheke — das Schmerzmittel und Vitamin D. Wie viel Geld brauche ich ungefähr? Schönen Tag! Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Bună Petra. Mâine merg la cumpărături pentru mama dumneavoastră. Am nevoie de un litru de lapte, două chifle, un kilogram de cartofi și 500 de grame de pui. Merg întâi la supermarket, apoi la brutărie pentru chifle proaspete. Am și o rețetă pentru farmacie — calmantul și vitamina D. Cât bani am nevoie aproximativ? O zi frumoasă! Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/znvr3QLvx3JJxDia8" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite lista aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) {
        const pct = Math.round((result.correct / result.total) * 100);
        let msg = `Scor: ${result.correct}/${result.total} (${pct}%)`;
        if (pct === 100) msg += ' — Perfect! 🎉';
        else if (pct >= 80) msg += ' — Foarte bine! 💪';
        else if (pct >= 60) msg += ' — Bine, mai exersează puțin. 🙂';
        else msg += ' — Reia teoria și încearcă din nou. 📚';
        scoreEl.textContent = msg;
        scoreEl.className = 'score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
    }
}

function resetExercise(n) {
    const containerId = `ex${n}-container`;
    const c = document.getElementById(containerId);
    if (!c) return;
    c.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    c.querySelectorAll('.feedback').forEach(fb => { fb.className = 'feedback'; fb.textContent = ''; });
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'score'; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
