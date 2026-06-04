// ============================================
// FLASHCARDS — Pflege 12: Einkaufen
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const flashcardsData = [
    // === 1. LOCURI (8) ===
    { de: "der Supermarkt · die Supermärkte", ro: "🛒 supermarketul · masculin · plural cu Umlaut · Aldi/Lidl/Edeka", audio: "audio/letters/supermarkt.wav" },
    { de: "der Markt · die Märkte", ro: "🍅 piața (în aer liber) · masculin · plural cu Umlaut · Wochenmarkt", audio: "audio/letters/markt.wav" },
    { de: "die Bäckerei · die Bäckereien", ro: "🥖 brutăria · feminin · plural cu -en · pâine proaspătă dimineața", audio: "audio/letters/baeckerei.wav" },
    { de: "die Metzgerei · die Metzgereien", ro: "🥩 măcelăria · feminin · carne proaspătă + mezeluri", audio: "audio/letters/metzgerei.wav" },
    { de: "die Apotheke · die Apotheken", ro: "💊 farmacia · medicamente + rețete + sfaturi medicale", audio: "audio/letters/apotheke.wav" },
    { de: "die Drogerie · die Drogerien", ro: "🧴 drogheria · dm/Rossmann · cosmetice + vitamine OTC", audio: "audio/letters/drogerie.wav" },
    { de: "zum Supermarkt", ro: "📍 LA supermarket · zu+dem · direcție masc · Ich gehe zum...", audio: "audio/letters/zum-supermarkt.wav" },
    { de: "zur Apotheke", ro: "📍 LA farmacie · zu+der · direcție feminin · Ich gehe zur...", audio: "audio/letters/zur-apotheke.wav" },

    // === 2. EINKAUFSLISTE + CANTITĂȚI (8) ===
    { de: "die Einkaufsliste", ro: "📋 lista de cumpărături · feminin · standard zilnic", audio: "audio/letters/einkaufsliste.wav" },
    { de: "ein Liter Milch", ro: "🥛 un litru de lapte · einen Liter (Akk masc)", audio: "audio/letters/liter-milch.wav" },
    { de: "ein Kilo Kartoffeln", ro: "🥔 un kilo de cartofi · ein Kilo (neutru la fel)", audio: "audio/letters/kilo-kartoffeln.wav" },
    { de: "500 Gramm Hähnchen", ro: "🍗 500 grame pui · fünfhundert Gramm", audio: "audio/letters/gramm-haehnchen.wav" },
    { de: "eine Packung Butter", ro: "🧈 un pachet de unt · eine Packung (feminin la fel)", audio: "audio/letters/packung-butter.wav" },
    { de: "ein Stück Käse", ro: "🧀 o bucată de brânză · ein Stück (neutru)", audio: "audio/letters/stueck-kaese.wav" },
    { de: "zwei Flaschen Wasser", ro: "💧 două sticle de apă · plural Flaschen", audio: "audio/letters/flaschen-wasser.wav" },
    { de: "zehn Eier", ro: "🥚 zece ouă · plural die Eier · cantitate simplă", audio: "audio/letters/zehn-eier.wav" },

    // === 3. AN DER KASSE (8) ===
    { de: "an der Kasse", ro: "💰 la casă · an+der (feminin Dativ)", audio: "audio/letters/an-der-kasse.wav" },
    { de: "Wie viel kostet das?", ro: "💶 Cât costă asta? · întrebare preț SINGULAR", audio: "audio/letters/wie-viel-kostet.wav" },
    { de: "Das macht 23 Euro 45.", ro: "💶 Asta face 23 euro 45 · STANDARD la casă", audio: "audio/letters/das-macht.wav" },
    { de: "Bar oder mit Karte?", ro: "💳 Numerar sau cu card? · întrebare standard casă", audio: "audio/letters/bar-oder-karte.wav" },
    { de: "Mit Karte, bitte.", ro: "💳 Cu card, vă rog · răspuns clasic", audio: "audio/letters/mit-karte.wav" },
    { de: "PIN, bitte.", ro: "🔢 PIN-ul, vă rog · prescurtat la casă", audio: "audio/letters/pin-bitte.wav" },
    { de: "Möchten Sie den Bon?", ro: "🧾 Doriți bonul? · cere ÎNTOTDEAUNA pentru familie", audio: "audio/letters/moechten-bon.wav" },
    { de: "die Quittung · die Quittungen", ro: "🧾 chitanța · feminin · pentru rambursare familie!", audio: "audio/letters/quittung.wav" },

    // === 4. ALIMENTE (8) ===
    { de: "der Apfel · die Äpfel", ro: "🍎 mărul · masculin · plural cu Umlaut", audio: "audio/letters/apfel.wav" },
    { de: "die Tomate · die Tomaten", ro: "🍅 roșia · feminin · plural -n", audio: "audio/letters/tomate.wav" },
    { de: "die Gurke", ro: "🥒 castravetele · FEMININ în DE!", audio: "audio/letters/gurke.wav" },
    { de: "die Karotte", ro: "🥕 morcovul · feminin · adesea cumpărați la bucată", audio: "audio/letters/karotte.wav" },
    { de: "die Milch", ro: "🥛 laptele · NUMAI singular · 1L standard", audio: "audio/letters/milch.wav" },
    { de: "der Joghurt", ro: "🥄 iaurtul · MASCULIN!", audio: "audio/letters/joghurt.wav" },
    { de: "das Brot · die Brote", ro: "🍞 pâinea · neutru · plural -e", audio: "audio/letters/brot.wav" },
    { de: "das Hackfleisch", ro: "🥩 carnea tocată · neutru · NUMAI singular", audio: "audio/letters/hackfleisch.wav" },

    // === 5. APOTHEKE (8) ===
    { de: "das Rezept · die Rezepte", ro: "📋 rețeta medicală · de la Hausarzt", audio: "audio/letters/rezept.wav" },
    { de: "der Apotheker · die Apothekerin", ro: "👨‍⚕️ farmacistul · masculin · -in pentru fem", audio: "audio/letters/apotheker.wav" },
    { de: "die Salbe", ro: "🧴 crema medicală · feminin", audio: "audio/letters/salbe.wav" },
    { de: "der Hustensaft", ro: "🥄 siropul de tuse · masculin", audio: "audio/letters/hustensaft.wav" },
    { de: "die Lieferung", ro: "📦 livrarea · feminin · la domiciliu pentru cronice", audio: "audio/letters/lieferung.wav" },
    { de: "die Wechselwirkung", ro: "⚠️ interacțiunea medicamentoasă · feminin · ÎNTREABĂ mereu!", audio: "audio/letters/wechselwirkung.wav" },
    { de: "Ich habe ein Rezept.", ro: "💊 Am o rețetă · prima frază la Apotheke", audio: "audio/letters/habe-rezept.wav" },
    { de: "Gute Besserung!", ro: "💚 Însănătoșire grabnică! · urare standard la Apotheke", audio: "audio/letters/gute-besserung.wav" },

    // === 6. BRAUCHEN + WIE VIEL/VIELE (8) ===
    { de: "brauchen + Akkusativ", ro: "📐 a avea nevoie · Ich brauche einen/eine/ein", audio: "audio/letters/brauchen.wav" },
    { de: "Ich brauche einen Liter Milch.", ro: "📐 Liter MASCULIN: ein → einen", audio: "audio/letters/brauche-liter.wav" },
    { de: "Ich brauche eine Packung Butter.", ro: "📐 Packung FEMININ: ein → eine", audio: "audio/letters/brauche-packung.wav" },
    { de: "Ich brauche ein Kilo Kartoffeln.", ro: "📐 Kilo NEUTRU: ein rămâne ein", audio: "audio/letters/brauche-kilo.wav" },
    { de: "Wie viel Milch brauchen wir?", ro: "❓ Cât lapte? (substantiv SINGULAR/colectiv)", audio: "audio/letters/wie-viel-milch.wav" },
    { de: "Wie viele Eier brauchen wir?", ro: "❓ Câte ouă? (substantiv PLURAL)", audio: "audio/letters/wie-viele-eier.wav" },
    { de: "Wie viel kostet das?", ro: "❓ Cât costă? (preț — singular)", audio: "audio/letters/wie-viel-kostet.wav" },
    { de: "Brauchen Sie eine Tüte?", ro: "🛍️ Aveți nevoie de o pungă? · la casă", audio: "audio/letters/brauchen-tuete.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Locuri · Lista+Cantități · La casă · Alimente · Apotheke · brauchen+Wie viel/viele.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
