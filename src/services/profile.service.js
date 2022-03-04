import axios from "axios";
import getEnv from "@/utils/env";
export const API = getEnv("VUE_APP_API_PATH");
// import MockAdapter from "axios-mock-adapter";

const instance = axios.create({
  baseURL: API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
// const mock = new MockAdapter(instance);

// mock.onGet("/i_am/").reply(200, {
//   email: "kordsfadsgf@example.com",
//   name: "Kornelia Kojnjkla",
//   discord: "korneldsfala#8322",
//   roll20: null,
//   organisation: "Avangarda",
//   organizing: [],
//   attending: [
//     {
//       name: "Ciemność pod wzgórzem",
//       event_type: "rpg",
//       organizer: 'Tomek "Femuss" Balwierz',
//       age_restrictions: "15+",
//       keywords: "",
//       description:
//         "Nieoczekiwane odkrycie dokonane podczas renowacji domu znajomego w Providence zaprowadzi was wprost w ciemność pod wzgórzem. Czy ciekawość okaże się być silniejsza niż rozsądek?",
//       game: "Zew Cthulhu",
//       triggers: "brak",
//       newbie_friendly: "Tak",
//       setting_familiarity_required: "Nie",
//       safety_tools: "",
//       start: "2021-03-05T19:00:00",
//       end: "2021-03-05T23:00:00",
//       attending: [
//         "Yashtruna#2705",
//         "Marcin#9458",
//         "Tes<>elation#0635",
//         "Pan_Hytrus#2848",
//       ],
//       attending_count: 4,
//       wait_list: ["korneliakobiela#8348", "esse#3412"],
//       waiting_count: 2,
//       capacity: 4,
//       registration_opened: true,
//     },
//     {
//       name: "Przestrzeń Pomiędzy",
//       event_type: "rpg",
//       organizer: "Strasznik Piotr",
//       age_restrictions: "16+",
//       keywords: "#Los Angeles, #film",
//       description:
//         'Los Angeles, produkcję filmu "Przestrzeń Pomiędzy" finansowanego przez kościół Sunyata wstrzymuje zaginięcie gwiazdy produkcji, Verity Harrow. Jednak prawdziwe problemy dopiero na was czekają.',
//       game: "Zew Cthulhu",
//       triggers: "brak",
//       newbie_friendly: "Tak",
//       setting_familiarity_required: "Nie",
//       safety_tools: "",
//       start: "2021-03-05T18:00:00",
//       end: "2021-03-05T23:00:00",
//       attending: [
//         "josette#9703",
//         "Dante304#4394",
//         "Pandzik#7576",
//         "bielak1992r#3012",
//         "esse#3412",
//       ],
//       attending_count: 5,
//       wait_list: ["korneliakobiela#8348"],
//       waiting_count: 1,
//       capacity: 5,
//       registration_opened: true,
//     },
//     {
//       name: "Dorwać Bestię!",
//       event_type: "rpg",
//       organizer: "Arond",
//       age_restrictions: "16+",
//       keywords: "#wolsung #Steampunk #śledztwo",
//       description:
//         "Niedawno do waszych rąk trafił list, i to nie od byle kogo. Napisał sam Lorent di Mua, poważany obywatel,potentat Tartaczny oraz bajecznie bogaty biznesmen. Z treści listu wynika iż ma pewien delikatny problem na terenie swojej najnowszej inwestycji. Jest nim tartak postawiony w Perle, miasteczku granicznym. Grzechem byłoby nie skorzystać z nadażającej się okazji. Jako miejsce spotkania i obgadania warunków kontraktu pan Di Mua wyznaczył przytyulną i dyskretną kawiarnię na obrzeżach Orsoux. klub do którego należycie postanowił wyznaczyć właśnie was. Ciekawe z jakim problemem boryka się niziołek który ma pieniędzy jak lodu?",
//       game: "Wolsung",
//       triggers: "Przemoc,wulgarny język mogą się pojawić",
//       newbie_friendly: "Tak",
//       setting_familiarity_required: "Nie",
//       safety_tools: "Green, yellow, red",
//       start: "2021-03-06T22:00:00",
//       end: "2021-03-07T02:00:00",
//       attending: [
//         "Nika#3975",
//         "Pumpernikiel#5229",
//         "Gula#7644",
//         "Chidori#0927",
//       ],
//       attending_count: 4,
//       wait_list: ["korneliakobiela#8348"],
//       waiting_count: 1,
//       capacity: 4,
//       registration_opened: true,
//     },
//     {
//       name: "Siri, puść playlistę do rytuałów",
//       event_type: "rpg",
//       organizer: "Młodzik",
//       age_restrictions: "16+",
//       keywords: "",
//       description:
//         "Grupa Bohaterów, wiedziona pilnym poszukiwaniem rozwiązania kłopotu z wyjątkowo dokuczliwą klątwą, trafia do dziwnej posiadłości. Mieszkający tam gnom, znany w okolicy zaklinacz, ma rzekomo mieć zdolności, które pomogą wstrzymać działanie uroku. \nSesja polegająca na kreatywnej eksploracji zamkniętej lokacji. Prawdopodobnie wystąpi odrobina walki. Rzuty kostkami napędzają rozgrywką i są ważne, budujemy historię zarówno na sukcesach jak i na porażkach. Postaci będą gotowe, do wyboru przed sesją. Możliwa jest ich personalizacja.",
//       game: "Dungeons & Dragons",
//       triggers: "brutalność, porwanie",
//       newbie_friendly: "Tak",
//       setting_familiarity_required: "Nie",
//       safety_tools: "Karta X",
//       start: "2021-03-06T18:00:00",
//       end: "2021-03-06T22:00:00",
//       attending: [
//         "The Majek#0013",
//         "MikeKowalsky#4286",
//         "Werka#1964",
//         "Hantohamase#5091",
//         "",
//       ],
//       attending_count: 5,
//       wait_list: ["korneliakobiela#8348", "esse#3412"],
//       waiting_count: 2,
//       capacity: 5,
//       registration_opened: true,
//     },
//   ],
// });

// mock.onGet("/i_am/attending/").reply(200, [
//   {
//     url: "http://horse.konwent.online/events/29037dcc-a2f8-44db-8587-4d3883d14f25",
//     name: "Siri, puść playlistę do rytuałów",
//     event_type: "rpg",
//     organizer: "Młodzik",
//     age_restrictions: "16+",
//     keywords: "",
//     description:
//       "Grupa Bohaterów, wiedziona pilnym poszukiwaniem rozwiązania kłopotu z wyjątkowo dokuczliwą klątwą, trafia do dziwnej posiadłości. Mieszkający tam gnom, znany w okolicy zaklinacz, ma rzekomo mieć zdolności, które pomogą wstrzymać działanie uroku. \nSesja polegająca na kreatywnej eksploracji zamkniętej lokacji. Prawdopodobnie wystąpi odrobina walki. Rzuty kostkami napędzają rozgrywką i są ważne, budujemy historię zarówno na sukcesach jak i na porażkach. Postaci będą gotowe, do wyboru przed sesją. Możliwa jest ich personalizacja.",
//     game: "Dungeons & Dragons",
//     triggers: "brutalność, porwanie",
//     newbie_friendly: "Tak",
//     setting_familiarity_required: "Nie",
//     safety_tools: "Karta X",
//     start: "2021-03-06T18:00:00",
//     end: "2021-03-06T22:00:00",
//     attending: [
//       "The Majek#0013",
//       "MikeKowalsky#4286",
//       "Werka#1964",
//       "Hantohamase#5091",
//       "",
//     ],
//     attending_count: 5,
//     wait_list: ["korneliakobiela#8348", "esse#3412"],
//     waiting_count: 2,
//     capacity: 5,
//     registration_opened: true,
//   },
//   {
//     url: "http://horse.konwent.online/events/d30d6b79-3a28-437c-b11c-53ba1cc8672d",
//     name: "Ciemność pod wzgórzem",
//     event_type: "rpg",
//     organizer: 'Tomek "Femuss" Balwierz',
//     age_restrictions: "15+",
//     keywords: "",
//     description:
//       "Nieoczekiwane odkrycie dokonane podczas renowacji domu znajomego w Providence zaprowadzi was wprost w ciemność pod wzgórzem. Czy ciekawość okaże się być silniejsza niż rozsądek?",
//     game: "Zew Cthulhu",
//     triggers: "brak",
//     newbie_friendly: "Tak",
//     setting_familiarity_required: "Nie",
//     safety_tools: "",
//     start: "2021-03-05T19:00:00",
//     end: "2021-03-05T23:00:00",
//     attending: [
//       "Yashtruna#2705",
//       "Marcin#9458",
//       "Tes<>elation#0635",
//       "Pan_Hytrus#2848",
//     ],
//     attending_count: 4,
//     wait_list: ["korneliakobiela#8348", "esse#3412"],
//     waiting_count: 2,
//     capacity: 4,
//     registration_opened: true,
//   },
//   {
//     url: "http://horse.konwent.online/events/0beac4d1-cead-411d-a319-250e00d80801",
//     name: "Dorwać Bestię!",
//     event_type: "rpg",
//     organizer: "Arond",
//     age_restrictions: "16+",
//     keywords: "#wolsung #Steampunk #śledztwo",
//     description:
//       "Niedawno do waszych rąk trafił list, i to nie od byle kogo. Napisał sam Lorent di Mua, poważany obywatel,potentat Tartaczny oraz bajecznie bogaty biznesmen. Z treści listu wynika iż ma pewien delikatny problem na terenie swojej najnowszej inwestycji. Jest nim tartak postawiony w Perle, miasteczku granicznym. Grzechem byłoby nie skorzystać z nadażającej się okazji. Jako miejsce spotkania i obgadania warunków kontraktu pan Di Mua wyznaczył przytyulną i dyskretną kawiarnię na obrzeżach Orsoux. klub do którego należycie postanowił wyznaczyć właśnie was. Ciekawe z jakim problemem boryka się niziołek który ma pieniędzy jak lodu?",
//     game: "Wolsung",
//     triggers: "Przemoc,wulgarny język mogą się pojawić",
//     newbie_friendly: "Tak",
//     setting_familiarity_required: "Nie",
//     safety_tools: "Green, yellow, red",
//     start: "2021-03-06T22:00:00",
//     end: "2021-03-07T02:00:00",
//     attending: ["Nika#3975", "Pumpernikiel#5229", "Gula#7644", "Chidori#0927"],
//     attending_count: 4,
//     wait_list: ["korneliakobiela#8348"],
//     waiting_count: 1,
//     capacity: 4,
//     registration_opened: true,
//   },
//   {
//     url: "http://horse.konwent.online/events/6b256bd3-2e85-45f7-8088-b75977d18b16",
//     name: "Przestrzeń Pomiędzy",
//     event_type: "rpg",
//     organizer: "Strasznik Piotr",
//     age_restrictions: "16+",
//     keywords: "#Los Angeles, #film",
//     description:
//       'Los Angeles, produkcję filmu "Przestrzeń Pomiędzy" finansowanego przez kościół Sunyata wstrzymuje zaginięcie gwiazdy produkcji, Verity Harrow. Jednak prawdziwe problemy dopiero na was czekają.',
//     game: "Zew Cthulhu",
//     triggers: "brak",
//     newbie_friendly: "Tak",
//     setting_familiarity_required: "Nie",
//     safety_tools: "",
//     start: "2021-03-05T18:00:00",
//     end: "2021-03-05T23:00:00",
//     attending: [
//       "josette#9703",
//       "Dante304#4394",
//       "Pandzik#7576",
//       "bielak1992r#3012",
//       "esse#3412",
//     ],
//     attending_count: 5,
//     wait_list: ["korneliakobiela#8348"],
//     waiting_count: 1,
//     capacity: 5,
//     registration_opened: true,
//   },
// ]);
// mock.onPatch("/i_am/changing")

export const getProfileData = () => {
  return instance.get("/i_am/");
};

export const getAttendingData = () => {
  return instance.get("/i_am/attending/");
};

export const setProfileDetails = async (data) => {
  return instance.patch("/i_am/changing/", data);
};
