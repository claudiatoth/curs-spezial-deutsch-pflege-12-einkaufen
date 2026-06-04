// ============================================
// THEORY.JS — Pflege 12: Einkaufen
// Cumpărături general + Apotheke + brauchen+Akkusativ + Wie viel/viele
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🛒 Cumpărăturile — ies din casă cu lista în mână</h4>
  <p>Ora 14:00. Frau Müller a mâncat, a luat pastilele de prânz, doarme acum în fotoliul ei (1-2 ore Nickerchen — somn de amiază). E momentul tău să <strong>ieși la cumpărături</strong>. 90 de minute, maxim. Lista pe frigider o știi pe de rost.</p>
  <p>Lecția aceasta îți dă: <strong>locurile</strong> (Supermarkt vs Markt vs Apotheke), <strong>cum cumperi</strong> (brauchen + Akkusativ, cantități cu Wie viel), <strong>cum plătești</strong> (bar/Karte), și ce-i UNIC pentru Pflege: <strong>Apotheke cu rețete</strong>.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni ai cumpărăturilor</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🛒</div>
      <div class="pillar-title">Locuri</div>
      <div class="pillar-text">Supermarkt · Markt · Bäckerei · Metzgerei · Apotheke · Drogerie.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">📋</div>
      <div class="pillar-title">Einkaufsliste</div>
      <div class="pillar-text">Cum o pregătești + citești cu Frau Müller înainte.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💰</div>
      <div class="pillar-title">Prețuri + Plata</div>
      <div class="pillar-text">Wie viel kostet das? · bar (numerar) / mit Karte (card).</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🥕</div>
      <div class="pillar-title">Alimente</div>
      <div class="pillar-text">Obst · Gemüse · Milchprodukte · Brot · Eier · Fleisch.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💊</div>
      <div class="pillar-title">Apotheke</div>
      <div class="pillar-text">Rezept · Lieferung · wiederholen pentru rețete cronice.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">📐</div>
      <div class="pillar-title">brauchen + Akk</div>
      <div class="pillar-text">Ich brauche einen Liter Milch · cantități + Wie viel/viele.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Locuri de cumpărături
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Locurile de cumpărături — Supermarkt, Markt, Apotheke</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-locuri.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">În Germania, fiecare tip de magazin are specializare. <strong>NU mergi la Aldi pentru o aspirină</strong> — mergi la Apotheke. NU iei pâine din supermarket cu termen lung — mergi la Bäckerei dimineața. Învață locurile + ce iei de unde.</p>

    <h5 style="color:#065f46; margin-top:18px;">🏪 Locurile esențiale (6 cuvinte)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Singular · Plural</th><th>🇷🇴</th><th>Pentru ce</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">der Supermarkt · die Supermärkte</span></td><td>supermarket</td><td>Aldi · Lidl · Edeka · totul pe un loc</td></tr>
          <tr><td><span class="pflege-fraza">der Markt · die Märkte</span></td><td>piața (în aer liber)</td><td>Wochenmarkt · fructe + legume + flori proaspete</td></tr>
          <tr><td><span class="pflege-fraza">die Bäckerei · die Bäckereien</span></td><td>brutăria</td><td>Pâine + Brötchen + prăjituri · dimineața</td></tr>
          <tr><td><span class="pflege-fraza">die Metzgerei · die Metzgereien</span></td><td>măcelăria</td><td>Carne proaspătă · mezeluri</td></tr>
          <tr><td><span class="pflege-fraza">die Apotheke · die Apotheken</span></td><td>farmacia</td><td>Medicamente + rețete + sfaturi medicale</td></tr>
          <tr><td><span class="pflege-fraza">die Drogerie · die Drogerien</span></td><td>drogheria</td><td>dm · Rossmann · cosmetice + ingrijire + vitamine</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Prepoziții pentru cumpărături</h5>
      <p>📌 <strong>zum Supermarkt</strong> = la supermarket (zu + dem · direcție masculin)<br>
      📌 <strong>zur Apotheke</strong> = la farmacie (zu + der · direcție feminin)<br>
      📌 <strong>im Supermarkt</strong> = în supermarket (in + dem · locație)<br>
      📌 <strong>in der Apotheke</strong> = în farmacie (in + der · locație feminin)</p>
      <p>Construcția: <em>„Ich gehe ZUM Supermarkt"</em> (merg LA — direcție) vs <em>„Ich bin IM Supermarkt"</em> (sunt ÎN — locație).</p>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcana Apotheke vs Drogerie</h5>
      <p>📌 <strong>Apotheke</strong> = farmacia · medicamente cu rețetă · medicamente serioase · sfat farmaceutic profesional<br>
      📌 <strong>Drogerie</strong> = drogheria (dm, Rossmann) · cosmetice · vitamine OTC · paste de dinți · MAI IEFTIN</p>
      <p>NU le confunda — Frau Müller te corectează imediat dacă spui Drogerie când vrei Apotheke.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Einkaufsliste
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Einkaufsliste — lista de cumpărături</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-liste.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Lista se face <strong>ÎMPREUNĂ cu Frau Müller</strong> (chiar dacă ea uită jumătate până ajungi acasă). O întrebi sistematic. Te uiți în frigider. Verifici Brot + Milch + Eier (cele 3 esențiale). Apoi vânătoare la magazin.</p>

    <h5 style="color:#065f46; margin-top:18px;">📋 Fraze cheie pentru pregătire</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Was brauchen wir?</span></td><td>Ce avem nevoie?</td></tr>
          <tr><td><span class="pflege-fraza">Was steht auf der Liste?</span></td><td>Ce e pe listă?</td></tr>
          <tr><td><span class="pflege-fraza">Haben wir noch Milch?</span></td><td>Mai avem lapte?</td></tr>
          <tr><td><span class="pflege-fraza">Wir brauchen Brot.</span></td><td>Avem nevoie de pâine.</td></tr>
          <tr><td><span class="pflege-fraza">Ich gehe einkaufen.</span></td><td>Merg la cumpărături.</td></tr>
          <tr><td><span class="pflege-fraza">Ich bin in einer Stunde zurück.</span></td><td>Mă întorc într-o oră.</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📋 Cantități esențiale</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Cantitate</th><th>🇷🇴 Traducere</th><th>Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">ein Liter Milch</span></td><td>un litru de lapte</td><td>einen Liter (Akk)</td></tr>
          <tr><td><span class="pflege-fraza">ein Kilo Kartoffeln</span></td><td>un kilogram de cartofi</td><td>ein Kilo (neutru, la fel)</td></tr>
          <tr><td><span class="pflege-fraza">500 Gramm Hähnchen</span></td><td>500 grame pui</td><td>fünfhundert Gramm</td></tr>
          <tr><td><span class="pflege-fraza">eine Packung Butter</span></td><td>un pachet de unt</td><td>eine Packung (fem)</td></tr>
          <tr><td><span class="pflege-fraza">ein Stück Käse</span></td><td>o bucată de brânză</td><td>ein Stück (neutru)</td></tr>
          <tr><td><span class="pflege-fraza">zwei Flaschen Wasser</span></td><td>două sticle de apă</td><td>plural · zwei Flaschen</td></tr>
          <tr><td><span class="pflege-fraza">ein Bund Petersilie</span></td><td>o legătură de pătrunjel</td><td>ein Bund (neutru)</td></tr>
          <tr><td><span class="pflege-fraza">zehn Eier</span></td><td>zece ouă</td><td>plural · die Eier</td></tr>
        </tbody>
      </table>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Prețuri + plata
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Prețuri + plata — la casă</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-preturi.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La <strong>casa supermarketului</strong> (an der Kasse) vânzătoarea (Verkäuferin) lucrează RAPID. Tu pui produsele pe banda rulantă, ea le scanează, îți spune suma, plătești, primești bonul. Frazele sunt STANDARDIZATE — învățe pe de rost cele 8.</p>

    <h5 style="color:#065f46; margin-top:18px;">💰 La casă (an der Kasse)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Cine</th><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Verkäuferin</strong></td><td><span class="pflege-fraza">Haben Sie eine Payback-Karte?</span></td><td>Aveți un card de fidelitate?</td></tr>
          <tr><td><strong>Tu</strong></td><td><span class="pflege-fraza">Nein, danke.</span></td><td>Nu, mulțumesc.</td></tr>
          <tr><td><strong>Verkäuferin</strong></td><td><span class="pflege-fraza">Das macht 23,45 Euro.</span></td><td>Asta face 23,45 Euro.</td></tr>
          <tr><td><strong>Verkäuferin</strong></td><td><span class="pflege-fraza">Bar oder mit Karte?</span></td><td>Cu numerar sau cu card?</td></tr>
          <tr><td><strong>Tu</strong></td><td><span class="pflege-fraza">Mit Karte, bitte.</span></td><td>Cu card, vă rog.</td></tr>
          <tr><td><strong>Verkäuferin</strong></td><td><span class="pflege-fraza">PIN, bitte.</span></td><td>PIN-ul, vă rog.</td></tr>
          <tr><td><strong>Verkäuferin</strong></td><td><span class="pflege-fraza">Möchten Sie den Bon?</span></td><td>Doriți bonul?</td></tr>
          <tr><td><strong>Tu</strong></td><td><span class="pflege-fraza">Ja, bitte. Auf Wiedersehen!</span></td><td>Da, vă rog. La revedere!</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💶 Citirea prețurilor</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Cifra</th><th>🇩🇪 Citire</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1,50 €</strong></td><td><span class="pflege-fraza">ein Euro fünfzig</span></td><td>un euro cincizeci</td></tr>
          <tr><td><strong>3,99 €</strong></td><td><span class="pflege-fraza">drei Euro neunundneunzig</span></td><td>3 euro 99</td></tr>
          <tr><td><strong>12,45 €</strong></td><td><span class="pflege-fraza">zwölf Euro fünfundvierzig</span></td><td>12 euro 45</td></tr>
          <tr><td><strong>23,45 €</strong></td><td><span class="pflege-fraza">dreiundzwanzig Euro fünfundvierzig</span></td><td>23 euro 45</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Wie viel kostet das? — întrebări prețuri</h5>
      <p>📌 <strong>Wie viel kostet das?</strong> = Cât costă asta? (singular)<br>
      📌 <strong>Was macht das zusammen?</strong> = Cât e tot? (la sfârșit)<br>
      📌 <strong>Das ist zu teuer.</strong> = Asta e prea scump.<br>
      📌 <strong>Das ist günstig.</strong> = Asta e ieftin / convenabil.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Alimente esențiale
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Alimente esențiale pentru Frau Müller</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-alimente.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🥕 Obst + Gemüse (fructe + legume)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪</th><th>🇷🇴</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">der Apfel · die Äpfel</span></td><td>mărul · plural cu Umlaut</td></tr>
          <tr><td><span class="pflege-fraza">die Banane · die Bananen</span></td><td>banana</td></tr>
          <tr><td><span class="pflege-fraza">die Tomate · die Tomaten</span></td><td>roșia</td></tr>
          <tr><td><span class="pflege-fraza">die Gurke · die Gurken</span></td><td>castravetele · feminin în DE!</td></tr>
          <tr><td><span class="pflege-fraza">die Karotte · die Karotten</span></td><td>morcovul · feminin</td></tr>
          <tr><td><span class="pflege-fraza">die Zwiebel · die Zwiebeln</span></td><td>ceapa</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🥛 Milchprodukte (lactate)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪</th><th>🇷🇴</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">die Milch</span></td><td>laptele · NUMAI singular</td></tr>
          <tr><td><span class="pflege-fraza">der Joghurt</span></td><td>iaurtul · masculin!</td></tr>
          <tr><td><span class="pflege-fraza">die Sahne</span></td><td>smântâna · NUMAI singular</td></tr>
          <tr><td><span class="pflege-fraza">der Quark</span></td><td>brânza de vaci (Quark — specific german)</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🍞 Brot + Eier + Fleisch</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪</th><th>🇷🇴</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">das Brot · die Brote</span></td><td>pâinea</td></tr>
          <tr><td><span class="pflege-fraza">das Brötchen · die Brötchen</span></td><td>chifla</td></tr>
          <tr><td><span class="pflege-fraza">das Ei · die Eier</span></td><td>oul</td></tr>
          <tr><td><span class="pflege-fraza">das Hähnchen</span></td><td>puiul (gata fript la magazin)</td></tr>
          <tr><td><span class="pflege-fraza">das Hackfleisch</span></td><td>carnea tocată</td></tr>
        </tbody>
      </table>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — Apotheke (farmacia)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ In der Apotheke — la farmacie</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-apotheke.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Apotheke e <strong>parte din rutina Pflege</strong> — Frau Müller are 5-7 medicamente cronice, le iei lunar. Aduci <strong>Rezept</strong> (rețeta) de la Hausarzt + plătești o parte din preț. Apotheker te ajută cu sfaturi (Wechselwirkung — interacțiuni medicamentoase).</p>

    <h5 style="color:#065f46; margin-top:18px;">💊 Vocabular Apotheke</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Singular · Plural</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">das Rezept · die Rezepte</span></td><td>rețeta (medicală)</td></tr>
          <tr><td><span class="pflege-fraza">der Apotheker · die Apothekerin</span></td><td>farmacistul · farmacista</td></tr>
          <tr><td><span class="pflege-fraza">die Tablette · die Tabletten</span></td><td>pastila</td></tr>
          <tr><td><span class="pflege-fraza">die Salbe · die Salben</span></td><td>crema (medicală)</td></tr>
          <tr><td><span class="pflege-fraza">der Tropfen · die Tropfen</span></td><td>picătura</td></tr>
          <tr><td><span class="pflege-fraza">der Hustensaft</span></td><td>siropul de tuse</td></tr>
          <tr><td><span class="pflege-fraza">die Lieferung</span></td><td>livrarea (la domiciliu)</td></tr>
          <tr><td><span class="pflege-fraza">die Wechselwirkung</span></td><td>interacțiunea (medicamentoasă)</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze cheie în Apotheke</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich habe ein Rezept für Frau Müller.</span></td><td>Am o rețetă pentru Frau Müller.</td></tr>
          <tr><td><span class="pflege-fraza">Können Sie das Rezept wiederholen?</span></td><td>Puteți repeta rețeta? (pentru cronice)</td></tr>
          <tr><td><span class="pflege-fraza">Wann ist die Lieferung fertig?</span></td><td>Când e gata livrarea?</td></tr>
          <tr><td><span class="pflege-fraza">Wie soll Frau Müller das nehmen?</span></td><td>Cum trebuie Frau Müller să le ia?</td></tr>
          <tr><td><span class="pflege-fraza">Gibt es Wechselwirkungen mit ihren anderen Medikamenten?</span></td><td>Sunt interacțiuni cu celelalte medicamente?</td></tr>
          <tr><td><span class="pflege-fraza">Brauche ich eine Quittung?</span></td><td>Am nevoie de o chitanță?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 Sfat practic</h5>
      <p>Cere ÎNTOTDEAUNA <strong>Quittung</strong> (chitanță) la Apotheke — familia rambursează costurile la sfârșitul lunii. Păstrează toate Quittungen într-un dosar. Asta e profesionalism Pflege.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Gramatica brauchen + Akkusativ + Wie viel/viele
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ 🧱 Gramatica — brauchen + Akkusativ + Wie viel/viele</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-brauchen.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📋 brauchen — conjugarea</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Persoana</th><th>🇩🇪 Conjugare</th><th>🇷🇴 Sens</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ich</strong></td><td><span class="pflege-fraza">ich brauche</span></td><td>eu am nevoie</td></tr>
          <tr><td><strong>du</strong></td><td><span class="pflege-fraza">du brauchst</span></td><td>tu ai nevoie</td></tr>
          <tr><td><strong>er/sie/es</strong></td><td><span class="pflege-fraza">er braucht</span></td><td>el are nevoie</td></tr>
          <tr><td><strong>wir</strong></td><td><span class="pflege-fraza">wir brauchen</span></td><td>noi avem nevoie</td></tr>
          <tr><td><strong>Sie</strong></td><td><span class="pflege-fraza">Sie brauchen</span></td><td>dumneavoastră aveți nevoie</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🛒 brauchen + Akkusativ — exemple</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Propoziție</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich brauche einen Liter Milch.</span></td><td>Am nevoie de un litru de lapte. (masc Akk: ein → einen)</td></tr>
          <tr><td><span class="pflege-fraza">Ich brauche eine Packung Butter.</span></td><td>Am nevoie de un pachet de unt. (feminin la fel)</td></tr>
          <tr><td><span class="pflege-fraza">Ich brauche ein Kilo Kartoffeln.</span></td><td>Am nevoie de un kilogram de cartofi. (neutru la fel)</td></tr>
          <tr><td><span class="pflege-fraza">Wir brauchen Brot und Eier.</span></td><td>Avem nevoie de pâine și ouă. (substantive fără articol)</td></tr>
          <tr><td><span class="pflege-fraza">Brauchen Sie eine Tüte?</span></td><td>Aveți nevoie de o pungă? (la casă)</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">❓ Wie viel vs Wie viele</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Întrebarea</th><th>Pentru</th><th>🇩🇪 Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Wie viel?</strong></td><td>cantități NUMĂRABILE singular sau colective (lapte, pâine, brânză)</td><td>Wie viel Milch brauchen wir?</td></tr>
          <tr><td><strong>Wie viele?</strong></td><td>cantități numărabile PLURAL (ouă, mere, sticle)</td><td>Wie viele Eier brauchen wir?</td></tr>
          <tr><td><strong>Wie viel kostet?</strong></td><td>preț (singular)</td><td>Wie viel kostet das?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-summary">
      <h5 style="color:#065f46; margin-bottom:10px;">🎯 Regula de aur (3 secunde)</h5>
      <p><strong>brauchen + Akkusativ</strong>: Ich brauche EINEN Liter / EINE Packung / EIN Kilo / einen Apfel.<br>
      <strong>Wie viel</strong> = cantitate singular / preț.<br>
      <strong>Wie viele</strong> = cantitate PLURAL.</p>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcana ein/eine/ein la cantități</h5>
      <p>Cantitățile au GENUL lor — NU al alimentului din spate.</p>
      <p>📌 <em>„einen Liter Milch"</em> = un litru de lapte · Liter e MASCULIN (der Liter) → masc Akk = einen<br>
      📌 <em>„eine Packung Butter"</em> = un pachet de unt · Packung e FEMININ (die Packung) → einen NU<br>
      📌 <em>„ein Kilo Kartoffeln"</em> = un kilo de cartofi · Kilo e NEUTRU (das Kilo) → la fel</p>
      <p>Cuvântul <em>„Milch"</em> NU determină genul lui „ein/eine" — DETERMINĂ cantitatea (Liter, Kilo, Packung).</p>
    </div>

  </div>
</div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
