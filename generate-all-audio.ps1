# Generare WAV-uri Hedda pentru Pflege L12 - Einkaufen
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='der Supermarkt.' },
    @{ file='dictat-02.wav'; text='die Backerei.' },
    @{ file='dictat-03.wav'; text='die Apotheke.' },
    @{ file='dictat-04.wav'; text='das Rezept.' },
    @{ file='dictat-05.wav'; text='die Quittung.' },
    @{ file='dictat-06.wav'; text='brauchen.' },
    @{ file='dictat-07.wav'; text='der Apfel.' },
    @{ file='dictat-08.wav'; text='die Milch.' },
    @{ file='dictat-09.wav'; text='die Tomate.' },
    @{ file='dictat-10.wav'; text='die Wechselwirkung.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # Locuri (8)
    @{ file='supermarkt.wav';      text='der Supermarkt.' },
    @{ file='markt.wav';           text='der Markt.' },
    @{ file='baeckerei.wav';       text='die Backerei.' },
    @{ file='metzgerei.wav';       text='die Metzgerei.' },
    @{ file='apotheke.wav';        text='die Apotheke.' },
    @{ file='drogerie.wav';        text='die Drogerie.' },
    @{ file='zum-supermarkt.wav';  text='zum Supermarkt.' },
    @{ file='zur-apotheke.wav';    text='zur Apotheke.' },

    # Einkaufsliste + cantitati (8)
    @{ file='einkaufsliste.wav';   text='die Einkaufsliste.' },
    @{ file='liter-milch.wav';     text='ein Liter Milch.' },
    @{ file='kilo-kartoffeln.wav'; text='ein Kilo Kartoffeln.' },
    @{ file='gramm-haehnchen.wav'; text='funfhundert Gramm Hahnchen.' },
    @{ file='packung-butter.wav';  text='eine Packung Butter.' },
    @{ file='stueck-kaese.wav';    text='ein Stuck Kase.' },
    @{ file='flaschen-wasser.wav'; text='zwei Flaschen Wasser.' },
    @{ file='zehn-eier.wav';       text='zehn Eier.' },

    # An der Kasse (8)
    @{ file='an-der-kasse.wav';    text='an der Kasse.' },
    @{ file='wie-viel-kostet.wav'; text='Wie viel kostet das?' },
    @{ file='das-macht.wav';       text='Das macht 23 Euro 45.' },
    @{ file='bar-oder-karte.wav';  text='Bar oder mit Karte?' },
    @{ file='mit-karte.wav';       text='Mit Karte, bitte.' },
    @{ file='pin-bitte.wav';       text='PIN, bitte.' },
    @{ file='moechten-bon.wav';    text='Mochten Sie den Bon?' },
    @{ file='quittung.wav';        text='die Quittung.' },

    # Alimente (8)
    @{ file='apfel.wav';           text='der Apfel.' },
    @{ file='tomate.wav';          text='die Tomate.' },
    @{ file='gurke.wav';           text='die Gurke.' },
    @{ file='karotte.wav';         text='die Karotte.' },
    @{ file='milch.wav';           text='die Milch.' },
    @{ file='joghurt.wav';         text='der Joghurt.' },
    @{ file='brot.wav';            text='das Brot.' },
    @{ file='hackfleisch.wav';     text='das Hackfleisch.' },

    # Apotheke (8)
    @{ file='rezept.wav';          text='das Rezept.' },
    @{ file='apotheker.wav';       text='der Apotheker.' },
    @{ file='salbe.wav';           text='die Salbe.' },
    @{ file='hustensaft.wav';      text='der Hustensaft.' },
    @{ file='lieferung.wav';       text='die Lieferung.' },
    @{ file='wechselwirkung.wav';  text='die Wechselwirkung.' },
    @{ file='habe-rezept.wav';     text='Ich habe ein Rezept.' },
    @{ file='gute-besserung.wav';  text='Gute Besserung!' },

    # brauchen + Wie viel/viele (8)
    @{ file='brauchen.wav';        text='brauchen plus Akkusativ.' },
    @{ file='brauche-liter.wav';   text='Ich brauche einen Liter Milch.' },
    @{ file='brauche-packung.wav'; text='Ich brauche eine Packung Butter.' },
    @{ file='brauche-kilo.wav';    text='Ich brauche ein Kilo Kartoffeln.' },
    @{ file='wie-viel-milch.wav';  text='Wie viel Milch brauchen wir?' },
    @{ file='wie-viele-eier.wav';  text='Wie viele Eier brauchen wir?' },
    @{ file='brauchen-tuete.wav';  text='Brauchen Sie eine Tute?' },
    @{ file='ich-gehe-einkaufen.wav'; text='Ich gehe einkaufen.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
