# Medicine scanner
Een webapplicatie die medicijn gebruikers helpt op de juiste informatie te verkrijven over hun medicijn. Met het gebruikt van nieuwe technologie als "Optical Character Recognition" oftewel OCR kunnen gebruikers simpel weg een foto uploaden en hierbij de juiste data binnen halen. Door op de juiste en betrouwbare manier data op te halen uit de medicijn-api, geproduceerd door de Voorhoede, is de applicatie voor iedereen toegankelijk.

© [Joan Padolina](www.github.com/joanpadolina) & [Lien Vo](www.github.com/nlvo)

## Introducion
Dit project is verdeeld in 3 delen:

1. Design Rationale // __[Readme (u bevindt zich hier)](https://github.com/joanpadolina/meesterproef-1920)__
1. Product biografie // __[Joan Padolina](https://github.com/joanpadolina/meesterproef-1920/wiki)__
1. Product biografie // __[Lien Vo](https://github.com/nlvo/meesterproef-1920/wiki)__

## Inhoudsopgave

1. [Installatie](#installatie)
1. [Documentatie](#documentatie)
    1. Debrief 
    2. Programma van Eisen
1. [API](#api)
1. [Tesseract](#tesseract)
1. [Diagrammen](#diagrammen)
    1. Actordiagram
    2. Interactiondiagram
1. [Concept](#concept)
1. [Source](#source)
1. [Credits](#credits)


## Installatie

1. Kloon repository
```
git clone https://github.com/joanpadolina/meesterproef-1920.git
```

2. Install packages
```
npm install 
```
3. Install tesseract lokaal
```
brew install tesseract
```
4. Start server
``` 
npm run dev 
```

## Documentatie

__<details><summary>Debrief</summary>__
<p>

## Medicijn Scanner
18 mei 2020

### Inleiding

Voorhoede is een bedrijf die zich bezighoudt met gebruikers en gebruikersbeleving op het internet. Aan ons is gevraagd om een concept te ontwikkelen waarbij medicijngebruikers de juiste medicijn binnen krijgt door gebruik te maken van Machine Learning. 
Hoofdvraag: Hoe maak je het zoeken, naar medicijn met de specifieke registratie nummer en actieve stoffen, makkelijker voor medicijngebruikers.
Opdracht
Voor dit project is aan ons gevraagd webapplicatie te maken waarmee je een medicijndoosje kunt scannen, met behulp van een webcam of met de camera van je mobiel. Het doel van de medicijn scanner is om informatie te verkrijgen over jou medicijn.
De gebruiker kan met de webapplicatie de naam of registratienummer van een medicijndoosje scannen en hiervoor zullen we gebruik maken van Machine Learning. Door middel van Optical Character Recognition (OCR), kunnen we teksten herkennen en koppelen aan de juiste data. Op basis hiervan kunnen we de juiste informatie beschikbaar stellen voor de gebruiker.
### Doelgroep
Ons doelgroep zijn medicijngebruikers die vaak of veel medicijnen van de apotheek halen.
Doel
Het doel van de webapplicatie is de gebruiker helpen met het verkrijgen van de juiste informatie over zijn of haar medicijn. Wij willen een goede gebruikers beleving creëren door de applicatie heen, zonder verwarringen en content gericht werken.
### Eisen en wensen
* Scannen: De gebruiker is in staat om informatie te verkrijgen van de desbetreffende medicijn door gebruik te maken van zijn of haar camera van de telefoon of computer.
* Informatie verkrijgen: De gebruiker krijgt door de scanner de juiste data binnen waardoor de informatie en de bijsluiter beschikbaar is.
* Error handelingen: Door de grote dataset kan het zijn dat er geen informatie beschikbaar is. Stel de gebruiker daarom tot rust door ze goed en duidelijk door te verwijzen.
### Technische eisen
* Dataset uit de geleverde API
* Teksten herkennen uit foto’s
* Foto’s als gescannde document kunnen opslaan
* *extra Bijsluiter toevoegen als er een pdf beschikbaar is

### Planning

|             |   maandag   |   dinsdag   |   woensdag    |   donderdag   |   vrijdag   |
| ----------  | ----------  |  -----------  | ------------  | ----------- | ----------- |
| sprint 0 `week 21`   | `9:30` <br> meeting kickoff case & vragen |  `9:30` <br> Debrief case inleveren op slack  |   |   |   |
| sprint 1 `week 22`  | `9:00` <br> Eerste demo  |   |   |   | `10:00` <br> Tweede Demo  |
| sprint 2 `week 23`  |   |   |   |   | `10:00` <br> Derde Demo   |
| sprint 3 `week 24`  |   |   |   |   | `10:00` <br> Vierde Demo   |
| sprint 3 `week 24`  |   |   |   | :star: __Demo Final__  |   |

</p>
</details>

__<details><summary> Programma van Eisen </summary>__  
 <p>
   
## Programma van Eisen
* Scan text door middel van een foto
* Geef meerdere suggesties vanuit de api aan de hand van de scan
* Handmatig zoeken door de medicijnlijst
* Geeft de meest recente zoekopdracht op de hoofdpagina
* Genoeg feedback als het scannen te lang duurt
* Zowel voor mobiel als voor laptop beschikbaar
* Offline beschikbaar
* *extra Mogelijkheid om de webapplicatie te downloaden?
* *extra Vind de juiste bijsluiter bij elke zoekresultaat
* *extra mogelijkheid om live te scannen door middel van je camera/webcam
</p>
</details>


## API
Dit project maakt gebruikt van de API die door Voorhoede is aangeleverd.
De volledige documentatie over deze API is te lezen in de volgende [ReadMe](https://github.com/typicode/json-server).

[Link naar de API](https://hva-cmd-meesterproef-ai.now.sh/medicines) 
### Data
```json
[
  {
    "id": Number,
    "registrationNumber": string,
    "name": string,
    "activeIngredient":string
  }
]
```

## Tesseract
Gelukkig bestaan OCR al een tijdje en hebben wij kunnen experimenteren met Tesseract.js. 
Om tesseract te gebruiken moet je dit eerst activeren.

```js
const tesseract = require('node-tesseract-ocr');
async function imageToText(image) {
	const config = {
		lang: "eng",
	}

	return tesseract.recognize(image, config)
		.then(text => text)
		.catch(error => {
			console.log(error.message)
		})
}
```
Deze tesseract draait op de server


## Diagrammen

### Actordiagram
![actor](https://i.imgur.com/wyqiLwB.png)
### Interaction diagram
![interaction](https://i.imgur.com/ITPSneO.png)

## Concept

## Source
* [Tesseract](https://github.com/tesseract-ocr/)
* [Stackoverflow](http://stackoverflow.com/)

## Credits
* [Damian](https://github.com/damian1997) // Multiple help on tesseract problems
* Janno // Feedback on error handling
* Laurens // Checkups
* [Bas](https://github.com/aaraar) // Explained how branches work
