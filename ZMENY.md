# Správa majetku – seznam změn

## 1.6 (28. 11. 2026)
- Nové rozvržení podle grafiky v6 pro 6 velikostí okna: telefon na výšku, telefon na šířku, tablet na výšku, tablet na šířku / menší notebook, počítač a široký monitor až 3840 px. Obsah se roztahuje podle okna (počítač do 1616 px, široký monitor do 3440 px), karty jsou ve více sloupcích, obrázky domu a bytů jsou na větším okně větší.
- Telefon: spodní záložky Přehled / Byty / Odečty / Další (Další otevře celé menu), okna (dialogy) vyjíždějí zdola jako list, respektují se okraje iPhonu (výřez, domovský indikátor) i na šířku.
- Tablet na výšku (iPad mini, iPad Pro na výšku, Android tablet): sbalené boční menu s ikonami, rozbalí se tlačítkem nabídky.
- Velikost zobrazení: nově Automaticky (výchozí – na monitoru 4K bez zvětšení systému se aplikace sama zvětší), přibyly Velmi velká a Největší.
- Kompaktní horní lišta pod 1440 px (motiv jedním tlačítkem, kratší štítek ukázkových dat).
- Nové ikony od grafika: Hledat, Klíče a čipy, Revize a termíny, Krizová karta. Webová verze: ikony pro plochu iPhonu a iPadu, úvodní obrazovky, maskovatelná ikona pro Android. Windows: ikona ve všech velikostech.
- Oprava: na širokém monitoru byla vpravo uříznutá horní lišta a vlevo spodní text menu (stránka byla o kousek širší než okno).
- Automatický test kontroluje 21 velikostí obrazovky (iPhone mini až 4K) – přetečení stránky i horní lišty.

## 1.5.1 (28. 11. 2026)
- Přehled: karta „Co je potřeba udělat“ (nejdůležitější upozornění na jednom místě, proklik) a zůstatek fondu oprav.
- Nové agendy: Revize a termíny (samostatně v Provozu, rychlé přidání komín / kotel / hasicí přístroj…), Klíče a čipy (kdo má co, vráceno), Krizová karta (uzávěry, havarijní a tísňová čísla, funguje offline), Hledat (byty, nájemníci, osoby, měřidla, faktury, fond, revize, klíče).
- Ověření (cejch) i u hlavních měřidel domu, upozornění ve zvonku.
- Průvodce vyúčtováním upozorní, když je nový stav nižší než minule nebo je spotřeba víc než 3× vyšší než v minulém období (možný únik vody).
- Fond oprav: Tisk / PDF.
- Mac: když aplikace neběží ze složky Aplikace, nabídne „Přesunout do Aplikací“ a sama se přesune a restartuje.
- Počítač: při zavření automatická záloha do složky se zálohami (uchová posledních 30, lze vypnout v Nastavení); při rozpracovaném vyúčtování se zeptá.
- Vydání obsahuje instalátory s jasnými názvy (INSTALACE-Mac.dmg, INSTALACE-Windows.exe) a návod „Jak nainstalovat“.
- Oprava: na iPhonu se pod otevřeným oknem (např. O aplikaci) už neukazuje kus menu.

## 1.5 (28. 11. 2026)
- Automatické aktualizace na Macu a ve Windows: jednou denně kontrola nové verze, nabídka „Aktualizovat“, stažení, instalace a restart; data zůstávají. V O aplikaci tlačítko Zkontrolovat aktualizaci.
- Aktualizace jsou podepsané (aplikace přijme jen verzi podepsanou autorovým klíčem) a vydávají se ve veřejném repozitáři sprava-majetku (Releases).
- Instalátor Windows je menší: WebView2 se stáhne jen tam, kde v systému chybí (Windows 10/11 ho obvykle mají).
- Android se automaticky neaktualizuje (později přes obchod).

## 1.4 (28. 11. 2026)
- Měřidla bytu: datum ověření (cejchu / kalibrace) ze štítku, platnost v letech (u vodoměrů předvyplněno 5 let) a výrobní číslo.
- U měřidla je vidět „ověřeno do“, oranžově 90 dní před koncem, červeně po skončení.
- Zvonek upozorní 90 dní před koncem ověření a po jeho skončení (proklik na byt).
- Hlavní měřidla domu zatím ověření nemají (bývají v péči distributora).

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
