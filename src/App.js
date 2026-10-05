import "./styles.css";
import data from "./unfaelle.json"; 

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.
  
// Aufgabe 1
  const laenge = unfaelle.length
  console.log(laenge)
  console.log(unfaelle[19])

  const letzterUnfall = unfaelle[unfaelle.length -1];
  const unfaelleInfo = `${letzterUnfall.id_unfall} : ${letzterUnfall.schwere}`;
  console.log(unfaelleInfo);

// Aufgabe 2
  const unfaelleNebenstrassen = unfaelle.filter((unfall) => unfall.strasseart === "Nebenstrasse");
  console.log(unfaelleNebenstrassen);

  // Aufgabe 3
  const unfaelleVelobeteiligung = unfaelle.filter((unfall) => unfall.fahrrd_bet === true);
  console.log(unfaelleVelobeteiligung);

  const veloUnfallNov2015 = unfaelleVelobeteiligung.find( (unfall) => unfall.monat === 11 && unfall.jahr === "2015");
  console.log(veloUnfallNov2015);

  return (
    <div className="App">
      <div>Aufgabe 1:</div>
      <div>letzter Unfall in der Tabelle: {unfaelleInfo}</div>

      <div>Aufgabe 2:</div>
      <div>Anzahl Unfälle auf Nebenstrassen: {unfaelleNebenstrassen.length}</div>
      <div>Die Unfälle auf Nebenstrassen: {unfaelleNebenstrassen.map(
        (unfall) => ( <span key={unfall.id_unfall}> ID {unfall.id_unfall}</span>))}</div>

      <div>Aufgabe 3:</div>
      <div>Anzahl Velounfälle gesamt: {unfaelleVelobeteiligung.length}</div>
      {veloUnfallNov2015 ? (
        <div>
          Gab es im Nov 2015 einen Velounfall? Ja (ID: {veloUnfallNov2015.id_unfall}, Typ: {veloUnfallNov2015.typ})
        </div>
      ) : (
        <div>Gab es im Nov 2015 einen Velounfall? Nein</div>
      )}
    <ol>
      {unfaelle.map( (unfall) => (<li>{unfall.id_unfall}</li>))}
      
      
    </ol>  
    </div>
  );
}
