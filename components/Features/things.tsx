export const things: ThingsToBringType[] = [
  {
    id: 1,
    title:
      "Una Borraccetta per prendere l'acqua dagli erogatori in sala, onde evitare lo spreco plastica",
  },
  {
    id: 2,
    title:
      "Ricordiamo a tutti i partecipanti che necessitano di medicinali di portarli con sé",
  },
  {
    id: 3,
    title: "Carta e penna per prendere appunti",
  },
  {
    id: 4,
    title: "Caricatori vari per i nostri dispositivi",
  },
  {
    id: 5,
    title: "Felpa se dovesse far freddo e un ombrello in caso piovesse",
  },
  {
    id: 6,
    title: "Scarpe comode",
  },
];

export type ThingsToBringType = {
  id: number;
  title: string;
};
