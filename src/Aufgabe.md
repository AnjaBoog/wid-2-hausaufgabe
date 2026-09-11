# Hausaufgabe WID 2 - JavaScript

Die JSON-Datei "unfaelle.json" enthält einen Array mit Unfällen (jeder Unfall ein Objekt). 
- Schau dir zunächst die Datei an. Jedes Objekt hat die gleichen Eigenschaften (Schlüssel-Wert-Paare). 
- Die Datei enthält Daten aus Basel, der Datensatz wurde auf 20 Unfälle reduziert.
- Jahreszahlen sind im Datensatz als Strings geschrieben (möglicherweise ein Prozessierungsfehler).
- Die Datei wird in der App.js importiert und einer Variablen ("unfaelle") - diese hat den Datentyp Array (mit Objekten / Unfällen als Inhalt)

## Aufgabe 1 - Ein Element im Array abfragen, Eigenschaften / Werte in Objekt abfragen:
- Verwende `length`und `console.log()` um dir den letzten Unfall anzeigen zu lassen (Tipp: Arrays sind in JS 0-indiziert). Stimmt die Anzeige mit dem letzten Unfall in der .json Datei überein?
- Deklariere eine Variable (`const`) und speicher in ihr die ID ("id_unfall") und Schwere ("schwere") des letzten Unfalls, getrennt durch ein ":". Dazu benötigst du einen ["Template String"](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Template_literals) (Syntax `${eineVariable}`) und musst Werte aus einem Objekt abfragen.
- Leg im HTML-Teil der App.js ein Element an, welches diesen String anzeigt. Vergiss dabei die `{}` nicht.

## Aufgabe 2 - Einen Array filtern
- Nutze `.filter()` um über den Array zu iterieren und das Ergebnis in einer neuen Variable "unfaelleNebenstrassen" zu speichern. Schreibe die Filterfunktion (innerhalb von `filter()`) als Pfeil-Funktion. Sie soll nur Unfälle auswählen, welche auf "Nebenstrassen" erfolgt sind (Achtung: Die benötigte Eigenschaft heisst in der Datei "Strasseart" - kein N). Du benötigst den `===`Operator und vergleichst Strings.
- Nutze `console.log()` um dir die Unfälle anzeigen zu lassen.

## Aufgabe 3 - Ein Element im Array finden
- Schau dir in der [JS-Referenz](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) die Methode `find()` an. Sie benötigt eine Funktion die bestimmt, was gefunden werden soll und gibt dann den ersten Treffer (oder sonst "undefined") zurück.
- Nutze die Methode um die folgende Frage zu beantworten: "Gab es im November (monat 11) 2015 einen Unfall mit Velo-Beteiligung (fahrrd_bet)?" Nutze `console.log()` und beachte die Datentypen. Du benötigste logische Operatoren.

## Aufgabe 4 - Eine HTML-Liste dynamisch generieren.
Die IDs (unfall.id_unfall) aller Unfälle sollen als Liste in einem HTML-Element angezeigt werden. Schreibe den folgenden Code direkt im HTML Teil und in geschweiften Klammern. Das Ganze sollte etwa so aussehen:
```
return (
 <div className="App>
    <ol>
    {
        /*
        * Dein Code anstelle des Kommentars.
        */

    }
    </ol>
 </div>
)
```
- Beachte das `<ol>` ("ordered list") Element. Dieses erwartet mehrere `<li>` Elemente als Kinder - die Listeneinträge.
- Nutze in den geschweifen Klammern direkt `unfaelle.map()` um die `<li>`Elemente zu erzeugen. Achtung: Verwende hier im "HTML Teil" keine Variablenzuweisung (z.B. `const liste = unfaelle.map()` ) denn das wäre eine Anweisung / Statement und ist nicht erlaubt.
- Schreibe als innere Funktion in map(): `unfall => (<li>unfall.id_unfall</li>)` und überprüfe das Ergebnis
- Werden die ids angezeigt? Was fehlt? Versuche den Fehler zu beheben.
