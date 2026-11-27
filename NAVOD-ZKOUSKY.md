# Zkoušky tisku a PWA bez placeného Apple účtu

Obsah balíčku (celá složka se nahraje na HTTPS, např. GitHub Pages):
- `index.html` – Správa majetku jako PWA (offline, ikona na ploše)
- `tisk/` – samostatná zkušební stránka pro tisk na BLE tiskárnu (Cashino PTP-III)
- `sw.js`, `manifest.webmanifest`, `ikony/` – podpora offline a instalace

Stav: ověřeno jen v Chrome na localhost (offline start funguje). Vše ostatní je nezkoušené.

## 0. Před zkouškami (5 minut)
1. Zapsat si ze štítku označení varianty (BT4 / BT24 / DUAL BT).
2. Vytisknout self-test (Setting → Print self-test page → Feed). Zakrýt PIN, vyfotit: model, firmware, rozhraní.
3. Tiskárnu odpojit od mPohody.

## 1. Mac, Chrome (nejdřív)
- Otevřít `tisk/index.html` (z HTTPS adresy). Vybrat 80 mm, Windows-1250, Zkušební tisk.
- Zapsat: spojení / české znaky / šířka řádku / logo / výpis charakteristik.

## 2. iPhone, Bluefy
- Nainstalovat Bluefy (App Store), otevřít v něm adresu `…/tisk/`. Tisk. Pak `…/` (Správa majetku) – ověřit, že se načte.
- Offline: v letadlovém režimu s ZAPNUTÝM Bluetooth zavřít a znovu otevřít stránku. Zapsat výsledek.

## 3. iPhone, Safari + beacio
- Nainstalovat beacio, zapnout v Safari → Rozšíření, povolit web a Bluetooth. Stránku otevřít v běžném Safari (ne z ikony na ploše).
- Tisk a offline start jako v bodě 2.

## 4. iPhone, PWA z plochy (jen Správa majetku)
- Safari → Sdílet → Přidat na plochu. Spustit z ikony. Ověřit offline start a že data zůstala.
- Pozor: data jsou v zařízení a nejsou záloha. Používejte Zálohovat / export.

## 5. Cinema Print Bridge (pokud je dostupná v App Store)
- Nainstalovat; API pro naši stránku zatím neznáme. Zkoušku proveďte až po bodech 1–3. Pokud ji dohledáte, napište a navrhnu napojení.

## 6. Záznam výsledků (zapsat pro každou sestavu)
| Sestava | Spojení | Čeština | Celá účtenka | Logo | Offline start | Poznámka |
|---|---|---|---|---|---|---|
| Mac + Chrome | | | | | | |
| iPhone + Bluefy | | | | | | |
| iPhone + Safari + beacio | | | | | | |

Kontrolujte skutečný papír: úspěšné odeslání dat není důkaz výtisku. Při zkažené účtence zkuste Znakovou stránku CP852 nebo menší bloky.

## Poznámky
- Po změně souborů zvýšit `VERZE` v `sw.js`, jinak telefon drží starou verzi.
- QZ Tray (Mac, USB) vyžaduje knihovnu qz-tray.js, kterou zde nemáme (bez sítě); doplní se později.
