import { Feature } from "@/types/feature";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ClockIcon,
  CurrencyEuroIcon,
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const featuresData: Feature[] = [
  {
    id: 0,
    icon: <BookOpenIcon />,
    title: "Studio",
    paragraphHTML: `Al corso sara' centrale lo studio del Gosho 'Ripagare i debiti di gratitudine' che puoi trovare <a href='https://biblioteca.sgi-italia.org/rsnd/ripagare-i-debiti-di-gratitudine' class='text-blue-600 hover:underline' target='_blank'>qui</a>. <br />
      Scarica lo studio da qui: <a href='/ripagare_i_debiti_di_gratitudine-1.pdf' class='text-blue-600 hover:underline' download>Parte 1</a> e <a href='/ripagare_i_debiti_di_gratitudine-2.pdf' class='text-blue-600 hover:underline' download>Parte 2</a>`,
  },
  {
    id: 1,
    icon: <MapIcon />,
    title: "Luogo",
    paragraphHTML: `<a class='text-blue-600 hover:underline' target='_blank' href='https://www.google.com/maps/place/Grand+Hotel+Salerno/@40.6725175,14.7733016,17z/data=!3m1!4b1!4m9!3m8!1s0x133bc246d5b3550b:0x14eeac8b514c5197!5m2!4m1!1i2!8m2!3d40.6725135!4d14.7758765!16s%2Fg%2F1tj5515h?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
       Grand Hotel Salerno via Lungomare Clemente Tafuri, 1 - 84127 Salerno (SA)
      </a> con parcheggio <a class='text-blue-600 hover:underline' target='_blank' href='https://www.google.com/maps/place/Via+Torrione,+6-80,+84127+Salerno+SA/@40.6731502,14.7749734,18z/data=!3m1!4b1!4m17!1m10!3m9!1s0x133bc246d5b3550b:0x14eeac8b514c5197!2sGrand+Hotel+Salerno!5m2!4m1!1i2!8m2!3d40.6725135!4d14.7758765!16s%2Fg%2F1tj5515h!3m5!1s0x133bc2476c3a2413:0x194f102b39a83728!8m2!3d40.6731482!4d14.7762257!16s%2Fg%2F11w36_cs09?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>qui</a>`,
  },
  {
    id: 10,
    icon: <MapPinIcon />,
    title: "Parcheggio",
    paragraphHTML: `<strong>Parcheggio via A. Carella</strong>: aperto ( con parcometro), adiacente Hotel Salerno, Tariffa 1€ ogni 2 ore, (aperto H24)<br />
<strong>Parcheggio Vinciprova: chiuso  </strong>( con sbarre), a circa 100 m dall' Hotel Salerno, Tariffa 1 € ogni 2 ore, (aperto H 24 )<br />
<strong>Parcheggio Foce Irno </strong>: 
Chiuso (con sbarre), con ingresso da via Torrione, adiacente Hotel Salerno, Tariffe 1€ ogni ora ( aperto H 24 )<br />
<strong>Parcheggio interrato Foce Irno Chiuso</strong> ( con sbarre), con ingresso da via lungomare, adiacente Hotel Salerno, tariffa diurna 1 € ogni ora, tariffa notturna 1 € ogni 2 ore, (aperto H 24 ).`,
  },
  {
    id: 2,
    icon: <CalendarDaysIcon />,
    title: "Giorni",
    paragraph: "Dal 7 al 9 di Marzo",
  },
  {
    id: 8,
    icon: <ClockIcon />,
    title: "Orari",
    paragraphHTML:
      "Il check-in si potra' effettuare dalle ore 14:00 di venerdi' 7 - il corso iniziera' alle ore 15 e terminera' alle ore 12 di domenica 9.",
  },
  {
    id: 3,
    icon: <UserGroupIcon />,
    title: "Partecipanti",
    paragraph: "Responsabili fino a capitolo",
  },

  {
    id: 4,
    icon: <CurrencyEuroIcon />,
    title: "Costi",
    paragraphHTML: `<strong>Camera singola</strong> disponibilità limitata euro 296,00€ <br/>
  <strong>Camera doppia</strong> euro 230,00€ <br/>
  <strong>Camera tripla</strong> euro 205,00€ <br/>
  <strong>Camera quadrupla</strong> con due bagni euro 195,00€<br/>
  la tassa di soggiorno, di tre euro per notte, è invulsa nel prezzo della stanza.`,
  },

  {
    id: 5,
    icon: <BanknotesIcon className="fill-current" />,
    title: "Metodo di pagamento",
    paragraphHTML: `Bonifico bancario <strong>entro il 10 Febbraio</strong> <br/>
    intestato a: Dapro Viaggi Tour Operator Sas <br>
    IBAN: <strong>IT93S0542415102000000001950</strong><br />
    Banca Popolare di Bari <br />
    Causale: SGI - Nome, Cognome, Camera singola/doppia/tripla/quadrupla`,
  },

  {
    id: 6,
    icon: <EnvelopeIcon />,
    title: "Contatti",
    paragraphHTML: `Per chiarimenti e/o informazioni scrivere al comitato del corso:
                <a class='text-blue-600 hover:underline' target='_blank' href="mailto:corso.uomini@sgi-italia.org">
                  corso.uomini@sgi-italia.org
                </a>`,
  },
];
export default featuresData;
