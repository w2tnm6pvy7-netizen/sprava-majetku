# Správa majetku – seznam změn

## 1.3.1 (28. 11. 2026)
- Grafika v5: nové ikony Osoby a role, Fond oprav, Plyn, Společné prostory, vlastní položka; ikony u voleb Rozúčtování nákladů.
- Ilustrace prázdných stavů pro Osoby a role a Fond oprav.
- Oprava: ve Fondu oprav se u přehledu záloh podle bytů mohl zobrazit rok „undefined“.

## 1.3 (28. 11. 2026)
- Menu rozdělené do skupin Dům, Lidé, Finance a Provoz; zrušena duplicitní položka „Domů“ (stejná jako Přehled).
- Nová agenda Osoby a role: předseda, místopředseda / zástupce, člen výboru, hospodář, správce, jiná role; kontakty, ve funkci od–do, dřívější funkce zvlášť. Zatím jen evidence (bez účtů a práv).
- Nová agenda Fond oprav: zálohy (od bytu nebo jiného přispěvatele), výdaje zaplacené i plánované, zůstatek, filtr, přehled záloh podle bytů za rok, upozornění, když plánované výdaje převyšují zůstatek.
- U bytu „Rozúčtování nákladů“: Plyn, Bazén, Garáž, Zahrada, Společné prostory a všechny vlastní položky. Napojeno na stávající výpočet (plyn, bazén, položky rozúčtování) – hotová vyúčtování se nemění.
- Karta „Další náklady“ v záložce Dům přejmenována na „Položky rozúčtování“.
- Automatický test kontroluje i dvě funkce se stejným jménem.

## 1.2 (28. 11. 2026)
- Telefon: úspornější horní lišta (bez loga, kompaktní rok, motiv jedním tlačítkem), dolní lišta jako 4 tlačítka s ikonou a popiskem, bezpečný okraj u spodní hrany iPhonu.
- Telefon na šířku: nižší lišty, více místa pro obsah.
- Přehled na telefonu: dlaždice vedle sebe.
- Upozornění pro iPhone/iPad jde zavřít křížkem (do příštího otevření).
- Číslo verze v patičce menu; v O aplikaci verze, platforma, „Co je nového“ a tlačítko Zkontrolovat aktualizaci (webová verze).
- U bytu nadpis „Rozúčtování nákladů“ a volba „Plyn“ (dříve „Byt je na plynu“).
- Servisní režim (7× klepnout na číslo verze v O aplikaci): deník chyb a akcí, Nahlásit problém (bez jmen, telefonů, e-mailů a fotek), kontrola dat, vynucená aktualizace.
- Při chybě se místo bílé obrazovky ukáže hláška s tlačítkem Nahlásit problém.
- Před každým sestavením instalátorů proběhne automatický test všech tlačítek a lišt (počítač, tablet, iPhone na výšku i na šířku) a kontrola čísla verze.

## 1.1 (27. 11. 2026)
- Menší a úspornější vzhled podle grafika: výchozí velikost „Střední“, menší písmo, tlačítka, menu, karty, průvodci i obrázky.
- Nastavení → Velikost zobrazení: Malá / Střední / Velká (pamatuje se). Na dotykových zařízeních zůstávají ovládací prvky alespoň 48 px.
- Levé menu: nové ikony od grafika; celé menu se vejde na obrazovku; Ceny a Faktury se v menu podsvítí a cílová karta krátce blikne; text v menu se při klikání neoznačuje; patička menu na dva řádky (Autor / O aplikaci) menším písmem.
- Obrázky domu a bytů: výběr z připravených ilustrací (4 domy, 9 bytů, garáž, zahrada, jiný objekt), vlastní obrázek s ořezem (posun, přiblížení, otočení, celý obrázek / vyplnit), Obnovit výchozí, Bez obrázku s potvrzením.
- Prázdná aplikace: Evidence bez bytů nabízí „Přidat byt“; okno „Nejdřív přidejte byt“ vede rovnou k přidání bytu; upozornění mají jen jedno tlačítko OK.
- Nové ilustrace prázdných stavů (byty, dokumenty, smlouvy) od grafika.
- Cesta ke složce s daty dole je zkrácená na jeden řádek (celá cesta v bublině po najetí myší).
- Nová ikona aplikace; na Macu zaoblená. Nové pozadí DMG, obrázky instalátoru Windows.
- Instalátor Windows: doplněn český text (druhé zaškrtávátko = „Vytvořit zástupce na ploše“) a ostatní české hlášky.
- Okno aplikace si pamatuje velikost a polohu; výchozí velikost 1180 × 780.
- Android: adaptivní ikona z vrstev od grafika, barva úvodní obrazovky (světlá / tmavá).

## 1.0 (první vydání)
- Přejmenování na „Správa majetku“; v záhlaví jméno majitele.
- Průvodce prvním spuštěním (kam ukládat data) a průvodce zavedením domu (tarif VT/NT, počet měřidel, byty, garáže, zahrady, ceny).
- Souhlas s podmínkami: blikající upozornění, bez souhlasu pouze ukázková data. Po smazání dat se souhlas vyžaduje znovu.
- Prázdný start: byty se zakládají v průvodci (i jediný byt). Ukázková data mají tři byty.
- Volitelný zámek aplikace (heslo s nápovědou a kódem pro obnovení, Face ID / Touch ID – neověřeno).
- Více objektů (domů) a přehledy v agendě majitele; přepínač domu a roku v liště.
- Zvonek: nové/staré, odložit, smazat, filtrace.
- Evidence majetku a nářadí s fotografiemi, škody, opravy, revize, předávací protokol.
- Export: Excel (.xlsx), Word (.docx), CSV; Numbers a Pages otevřou xlsx/docx.
- Zobrazení pro PC, iPad, iPhone, Android (telefon, tablet); PWA verze pro Safari.
- Zkušební tisk na Bluetooth účtenkovou tiskárnu (Nastavení) – pouze ověřovací funkce.

## Nezkoušeno na zařízeních
Sestavení Tauri (Mac, Windows x64/ARM, Android), tisk/PDF v Tauri, ukládání do souboru v Tauri, biometrie, Android sdílení souborů.

- Hlavička: název aplikace se už nezalamuje ani nepřetéká přes okraj (zkontrolováno ve vestavěném prohlížeči Claude, ne v Safari).
- PWA service worker v7: při instalaci obchází HTTP cache, aby se po aktualizaci nenačetla stará verze (nová verze se i tak naplno projeví až při druhém otevření).
