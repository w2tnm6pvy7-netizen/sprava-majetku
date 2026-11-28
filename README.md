# Správa majetku – desktopová aplikace (Mac a Windows)

Rozúčtování energií mezi byty v domě. Data jsou v jednom souboru `energie-domu.json`
ve složce, kterou zvolíte při prvním spuštění (aplikace si ji pamatuje).
Při prvním spuštění vás provede průvodce: vysvětlí, co se ukládá, a nabídne vhodná místa (Dokumenty pro jeden počítač, iCloud Drive / OneDrive pro více počítačů, vlastní složka) i s důvody.
Žádný server, žádné účty, vše offline. iPhone a iPad nejsou podporovány.

Ve zvolené složce vznikne:

- `energie-domu.json` – všechna data
- `zalohy/` – kopie souboru s datem a časem v názvu (po vyúčtování, nebo tlačítkem „Záloha teď“)
- `PDF/` – vytvořená PDF (vyúčtování, pokladní doklady, přehledy)
- `export/` – CSV a ruční export dat

Kde je složka, vidíte v aplikaci: Nastavení → „Složka s daty“ (a drobně nahoře na každé stránce).
Tam ji můžete změnit nebo otevřít ve Finderu / Průzkumníku.

## Ochrana před přepsáním novějších dat

Každé uložení zvýší číslo revize v souboru. Před zápisem aplikace porovná revizi,
kterou načetla, s tou, která je právě v souboru. Pokud se soubor mezitím změnil jinde
(jiný počítač přes iCloud / OneDrive), nic nepřepíše a nabídne „Načíst novější“ nebo „Přepsat“.
Pracujte přesto vždy jen na jednom počítači najednou – iCloud i OneDrive mohou změnu doručit se zpožděním.

## Podporované systémy

| Systém | Výstup | Poznámka |
|---|---|---|
| Mac (Intel i Apple Silicon) | `.dmg` (univerzální) | přetažení do Aplikací |
| Windows 10 / 11, x64 | `.exe` (NSIS) | |
| Windows 11 ARM64 | `.exe` (NSIS) | stejný postup, jiný cíl |
| Android telefon a tablet | `.apk` | viz níže; neověřeno |

Sestavení všech variant spustí GitHub (Actions → Sestavit instalátory). **Nic z toho nebylo zkoušeno** – při první chybě pošlete výpis.

### Android – co je jinak
- Data se ukládají do soukromé složky aplikace (bez výběru složky). Zálohujte tlačítkem Zálohovat a soubor si odneste z aplikace; export souborů na Androidu je potřeba vyzkoušet a pravděpodobně doplnit o sdílení.
- Instalace ladicího APK: v telefonu povolte instalaci z neznámých zdrojů. Pro Google Play a trvalé aktualizace je nutný vlastní podpisový klíč (keystore) a vydání `cargo tauri android build --apk` / `--aab` s podpisem.
- Biometrie (otisk, obličej) by na Androidu šla přes plugin `tauri-plugin-biometric`; zatím není doplněná, používá se heslo.

## Průvodce instalací a prvním spuštěním

- **Windows (instalátor NSIS):** průvodce v češtině, nabídne výběr složky pro program a instalaci jen pro vás nebo pro všechny uživatele. Neověřeno – závisí na sestavení.
- **Mac (.dmg):** systém neumožňuje průvodce, stačí přetáhnout aplikaci do složky Aplikace.
- **První spuštění (obě platformy):** průvodce uvnitř aplikace vysvětlí, co se ukládá, a pomůže vybrat složku pro data (kam a proč). Složku lze později změnit v Nastavení.

## Instalátory

Koncový uživatel žádný internet nepotřebuje: hotový `.dmg` / `-setup.exe` je samostatný soubor (Windows instalátor má v sobě i komponentu WebView2, proto je větší). Internet potřebuje jen ten, kdo instalátor jednou vytváří.

- **Mac:** `.dmg` – po otevření se zobrazí okno s ikonou aplikace a složkou Aplikace, stačí přetáhnout.
- **Windows:** `...-setup.exe` – klasický instalátor (bez práva správce, pro aktuálního uživatele), vytvoří zástupce v nabídce Start; zástupce na plochu si můžete přetáhnout.

### Nejjednodušší cesta: sestavení na GitHubu (nic neinstalujete)

1. Na github.com vytvořte soukromý repozitář a nahrajte do něj obsah této složky (včetně skryté složky `.github`).
2. Záložka Actions → „Sestavit instalátory“ → Run workflow.
3. Za cca 10–15 minut dole na stránce běhu stáhněte Artifacts: `.dmg` pro Mac a `.exe` pro Windows.

### Nebo ručně na svém počítači

Aplikaci je potřeba sestavit na tom systému, pro který je určená
(Mac verzi na Macu, Windows verzi na Windows).

#### Mac

Nejsnáz: dvojklik na `sestavit-mac.command` (udělá všechny kroky níže sám; při prvním spuštění potřebuje internet; když Mac soubor odmítne, pravý klik → Otevřít). Ručně:

1. `xcode-select --install`
2. Rust: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` (pak nové okno Terminálu)
3. `cargo install tauri-cli --version "^2" --locked`
4. Ikony aplikace a pozadí instalačního okna jsou už připravené ve složce `src-tauri/icons` a `src-tauri/dmg` – příkaz `cargo tauri icon` NESPOUŠTĚJTE, přepsal by ikony od grafika.
5. Zkouška: `cargo tauri dev`  ·  Hotová aplikace: `cargo tauri build`
   (výsledek: `src-tauri/target/release/bundle/dmg` a `.../macos`)

Podepsanou aplikaci vyžaduje až distribuce jiným lidem. Při prvním spuštění vlastní aplikace
Mac zobrazí varování: pravý klik na aplikaci → Otevřít → Otevřít.

#### Windows

1. Visual Studio Build Tools (zátěž „Vývoj pro stolní počítače v C++“) a Rust (rustup, MSVC).
   WebView2 je ve Windows 10/11 už obsažen.
2. `cargo install tauri-cli --version "^2" --locked`
3. V této složce: `cargo tauri build` (ikony jsou už připravené v `src-tauri/icons`)
   (výsledek: `src-tauri\target\release\bundle\msi` a `...\nsis`)

Při prvním spuštění může SmartScreen varovat (nepodepsaná aplikace): „Další informace“ → „Přesto spustit“.

## Upozornění (neověřeno)

Tento projekt vznikl bez možnosti ho zde zkompilovat. Logika aplikace (výpočty, průvodce, ukládání,
kontrola revize, zálohy) je otestovaná se simulovaným rozhraním, ale vlastní zkompilování a běh v okně
je potřeba ověřit na vašem počítači. Zvláště:

- **Tisk a PDF:** PDF se vytváří uvnitř okna a ukládá do složky `PDF/`. Tlačítko „Tisk“ používá tisk okna;
  na Macu (WKWebView) nemusí fungovat – použijte pak PDF ze složky.
- **Fotky měřidel** jsou zatím uvnitř souboru s daty (zvětšují ho). Přesun do složky `fotky/` je plánovaný.
- **iCloud:** pokud je soubor „jen v cloudu“, aplikace to oznámí – stáhněte ho ve Finderu a zkuste znovu.

## iPhone a iPad (příprava)

Tauri 2 podporuje iOS. Postup na Macu s Xcode a účtem Apple Developer:

1. `cargo tauri ios init` (vytvoří složku `src-tauri/gen/apple`)
2. V Xcode nastavit Team (podepisování) a identifikátor `cz.energiedomu.app`
3. `cargo tauri ios dev` (simulátor) nebo `cargo tauri ios build` (archiv pro TestFlight / App Store)

Poznámky: data se ukládají do soukromé složky aplikace (výběr vlastní složky jako na počítači tam není), zálohu a export je nutné posílat přes sdílení souboru. Face ID a tisk/PDF je potřeba ověřit na skutečném zařízení. Stav: nezkoušeno.

## Zkušební tisk na BLE účtenkovou tiskárnu

V Nastavení je karta „Účtenková tiskárna (zkušební)“: ESC/POS, 58 mm, kódová stránka CP852 (české znaky), náhled i tisk.
- Na počítači/Androidu v Chrome/Edge: tisk přes Web Bluetooth (nezkoušeno na zařízení).
- V Tauri: příkazy `ble_scan` a `ble_print` jsou v `src-tauri/src/ble.rs` (knihovna btleplug, macOS/iOS/Windows/Linux). NEZKOMPILOVÁNO ani nezkoušeno na zařízení; Android zatím vrací hlášku „neimplementováno“ (btleplug tam potřebuje JNI vazbu). Aplikace při prvním tisku vyhledá zařízení (5 s), nabídne výběr a zapamatuje si ho. `Info.plist` obsahuje NSBluetoothAlwaysUsageDescription (pro iOS ho po `tauri ios init` zkontrolovat v `gen/apple`).
- Ověřeno jen sestavení bajtů (testem). Skutečný tisk na Cashino PTP-III nezkoušen; podle tiskárny může být potřeba jiná kódová stránka (např. 47 = WPC1250).

### Cashino PTP-III – poznatky z rešerše (27. 11. 2026, nic fyzicky neověřeno)
- 80 mm papír, tisková šířka 72 mm = 576 bodů, doporučeno 48 znaků/řádek.
- Čeština: doložena Windows-1250 (ESC t 30); manuál uvádí i CP852 (ESC t 18). V aplikaci jsou obě na výběr, výchozí Win-1250.
- BLE: služby/charakteristiky nejsou pevně dané; vybírá se první charakteristika s write i writeWithoutResponse (jako ve fungující ukázce inited/tisk-cashino). Data po 75 bajtech s prodlevou. Po odeslání aplikace vypíše nalezené charakteristiky (zapsat si UUID).
- Logo: rastr GS v 0 (nahrává se v kartě), případně logo v NV paměti tiskárny (FS p) – zatím neimplementováno.
- Při zkoušce vyfotit self-test (Setting → Print self-test page; zakrýt PIN) – model, firmware, rozhraní.

### Výsledky zkoušky Cashino PTP-III (27. 11. 2026, iPhone + Bluefy, PWA z GitHub Pages)
- Text (80 mm, 48 znaků/řádek, Windows-1250, zarovnání, zvětšený nadpis): OK.
- CP852: na tomto kusu rozsypané.
- Rychlost přenosu: 75 bajtů / 60 ms OK; 150/30 a 180/15 téměř nefunguje (malý buffer tiskárny).
- Logo (rastr): tiskne, ale velmi pomalu; dořešit (menší obrázek, logo v paměti tiskárny FS q).
- Nezkoušeno: QR, offline start v Bluefy, obnovení spojení, Safari + beacio.
- Safari + beacio (iPhone): tisk textu OK, i v letadlovém režimu (offline, Bluetooth zapnutý). Beacio povoluje zápis bez odpovědi jen do 61 B – stránka si velikost bloku zmenší sama. Bluefy: tisk textu OK (blok 75 B).
- Nezkoušeno: restart iPhonu offline, vypnutí/zapnutí tiskárny, QR, delší účtenka, logo rychle.
