# Hópverkefni 2

Í þessu verkefni notum við node.js til að keyra vefsíðuna. Við notum pakkastjóra node sem heitir [Npm](https://www.npmjs.com). Hann sér um að sækja alla pakka sem við notum tengda vefsíðunni. 


# Hvernig keyra skal verkefnið

Til þess að setja upp verkefnið þarf að byrja á að afrita Github svæðið sem hýsir skrárnar á bakvið síðuna.  Fara skal inn á eftirfarandi hlekk [Hópverkefni 2](https://github.com/1ngimar/Hopaverkefni-2) og smella á græna hnappinn þar sem stendur "Clone or download". Síðan skal afrita hlekkinn að Github verkefninu. 

Næst skal ræsa skelina í tölvunni *(Terminal/bash)* og skrifa:
```bash
git clone https://github.com/1ngimar/Hopaverkefni-2.git
cd Hopaverkefni2
```
Þar næst þarf að hlaða niður öllum skrám verkefnisins, og skrifa:

```bash
npm install
```
Nú þegar búið er að sækja allar skrár verkefnisins þarf aðeins að keyra upp sjálft verkefnið. Þá skal skrifa:

```bash
npm run dev
```
Nú ætti settur vafri á tölvunni að opna verkefnið á port 3000. [localhost:3000](http://localhost:3000)

## Uppsetning verkefnis

Verkefnið er sett upp í mismunandi skjölum:
* .stylelintrc með upplýsingum um hvernig stylelint eigi að haga sér.
* .eslintrc skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað.
* .gitattributes sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa.
* .gitignore sem hunsar almennar skrár.
* .editorconfig sem samræmir notkun á tabs og spaces, bilum og fleira.
* grid.css til að sjá grind sem verkefnið er unnið eftir.
* rollup sem pakkar saman JavaScript kóða
* babel sem transpilar kóða
* src/ mappa með
	* styles undirmöppu með styles.scss grunni
	* lib/ undirmappa sem inniheldur JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu.
	* index.js skrá sem vísar í lib/
* dist/ mappa sem inniheldur þýddar sass og JavaScript skrár 
* img/ mappa með öllum myndum sem notaðar eru í verkefninu. 
* package.json hefur uppsett script ásamt dependencies
	* eslint til að keyra eslint
	* stylelint til að keyra stylelint
	* test til að keyra bæði eslint og stylelint
	* browser-sync til að keyra verkefnið
	* sass til að keyra fyrstu þýðingu
	* sass-watch til að fylgjast með sass skrám og þýða
	* dev til að keyra sass og browser-sync

## Fleiri gögn
* lectures.json sem inniheldur fylki af fyrirlestrum sem birta skal. Hver fyrirlestur hefur:
	* slug - notað til að hlekkja á fyrirlestur
	* title - titill fyrirlesturs
	* category - flokkur fyrirlesturs
	* image - mynd í hausi fyrirlesturs
	* thumbnail - mynd á yfirliti fyrirlestra
	* content - fylki af efni fyrirlesturs
* Fyrir efni fyrirlesturs er efni alltaf með:	
	* type - gerð efnis
	* data - gögn efnis


## Þeir sem unnu verkefnið

* Helga Gunndís Þórhallsdóttir
hth179@hi.is

* Ingimar Logi Guðlaugsson
ilg5@hi.is

* Sólveig Ásta Friðriðriksdóttir 
saf10@hi.is

## Verkefnalýsing

Verkefnið felst í því að smíða prótótýpu af fyrirlestravef fyrir vefforritun. Gefnar eru fyrirmyndir í `500px` og `1500px` án grindar ásamt `1500px` með grind og yfirlit yfir virkni vefsins í /demo.mp4.

Keyra verður verkefnið með  `browser-sync`  til að það virki.

Efni síðu skal ekki vera breiðara en  `1200px`. Litir og myndir í haus skulu fylla út í allt lárétt pláss. Yfir myndum er 60% gegnsær hvítur litur. Myndir fyrir hvern fyrirlestur eru skilgreindir í  `json`  skrá.

Grunn leturstærð er 16px og fylgja allar aðrar leturgerðir eftirfarandi skala:  `16 24 32 48`.

Litapalletta fyrir vef er  `#000`,  `#999`,  `#aaa`,  `#ccc`,  `#2d2`,  `#1a1`,  `#fcffd2`  og  `#cc9694`.

Letur fyrir meginmál er Lora, Times New Roman eða serif letur. Letur fyrir fyrirsagnir er Roboto Mono, Courier New eða monospace.

Flest allt er sett upp í 12 dálka grind með  `20px`  gutter.

Öll bil eru hálft, heilt, tvöfalt eða þrefalt margfeldi af gutter. 

Allar hreyfingar gerast á  `300ms`  með  `ease-in-out`  hröðunarfalli. Hreyfingar eru þegar svimað er yfir fyrirlestri í lista og síunar tökkum.