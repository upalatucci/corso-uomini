import { Feature } from "@/types/feature";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  CurrencyEuroIcon,
  EnvelopeIcon,
  MapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const featuresData: Feature[] = [
  {
    id: 0,
    icon: <BookOpenIcon />,
    title: "Studio",
    paragraphHTML:
      "Al corso sara' centrale lo studio del Gosho 'Ripagare i debiti di gratitudine' che puoi trovare <a href='https://biblioteca.sgi-italia.org/rsnd/ripagare-i-debiti-di-gratitudine' class='text-blue-600 hover:underline' target='_blank'>qui</a>",
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
    id: 2,
    icon: <CalendarDaysIcon />,
    title: "Giorni",
    paragraph: "Dal 7 al 9 di Marzo",
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
  <strong>Camera quadrupla</strong> con due bagni euro 195,00€`,
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
                <a href="mailto:corso.uomini@sgi-italia.org">
                  corso.uomini@sgi-italia.org
                </a>`,
  },

  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"
  //       />
  //       <path d="M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z" />
  //     </svg>
  //   ),
  //   title: "Tailwind CSS",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
  //       />
  //       <rect width="28" height="28" rx="1" />
  //     </svg>
  //   ),
  //   title: "Fully Customizable",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
  //       />
  //       <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
  //     </svg>
  //   ),
  //   title: "Free and Open-Source",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
];
export default featuresData;
