// https://v6.exchangerate-api.com/v6/f6f59c4ca2d1244f7b2b4089/latest/USD
//https://flagsapi.com/EG/shiny/32.png

const COUNTRY_NAMES = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Dutch Guilders",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Bruneian Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BZD: "Belizean Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account UF",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan Offshore",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Krona",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Caymanian Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Basotho Maloti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Arabian Riyal",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SYP: "Syrian Pound",
  SZL: "Swazi Emalangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "Taiwan New Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VND: "Vietnamese Dong",
  VUV: "Ni-Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
};
const myfirstselect = document.querySelector(".firstselect");
const mysecondselect = document.querySelector(".secondselect");
const theinput = document.querySelector(".theinput");
const mysubmit = document.querySelector(".mysubmit");
const firstimg = document.querySelector(".firstimg");
const secondimg = document.querySelector(".secondimg");
let myh1 = document.querySelector(".myh1");
const myswitch = document.querySelector(".switch");

// console.log(firstimg);

let arrcounteris = Object.assign(COUNTRY_NAMES);
for (const x in arrcounteris) {
  let temp = `<option value="${x}">  ${x}|| ${arrcounteris[x]}</option>`;
  myfirstselect.innerHTML += temp;
  mysecondselect.innerHTML += temp;
}
myfirstselect.addEventListener("change", () => {
  console.log(myfirstselect.value);
  let temp = `
    <img src="https://flagsapi.com/${myfirstselect.value.slice(
      0,
      2
    )}/shiny/32.png" class="" alt="" />`;
  firstimg.innerHTML = temp;
});
mysecondselect.addEventListener("change", () => {
  let temp = `
    <img src="https://flagsapi.com/${mysecondselect.value.slice(
      0,
      2
    )}/shiny/32.png" class="" alt="" />`;
  secondimg.innerHTML = temp;
});

myswitch.addEventListener("click", () => {
  let X = myfirstselect.value;
  let y = mysecondselect.value;
  let z = null;
  let first = (z = X);
  let second = (x = y);
  let last = (y = z);
  let temp = `
  <img src="https://flagsapi.com/${second.slice(
    0,
    2
  )}/shiny/32.png" class="" alt="" />`;
  firstimg.innerHTML = temp;
  myfirstselect.innerHTML = `<option value="${x}">  ${x}|| ${arrcounteris[x]}</option>`;
  let temp2 = `
  <img src="https://flagsapi.com/${last.slice(
    0,
    2
  )}/shiny/32.png" class="" alt="" />`;
  secondimg.innerHTML = temp2;
  mysecondselect.innerHTML = `<option value="${y}">  ${y}|| ${arrcounteris[y]}</option>`;
});

mysubmit.addEventListener("click", () => {
  fetch(
    `https://v6.exchangerate-api.com/v6/f6f59c4ca2d1244f7b2b4089/latest/${myfirstselect.value}`
  )
    .then((data) => data.json())
    .then((result) => {
      let temp = `${theinput.value}:${myfirstselect.value}=${
        mysecondselect.value
      }:${
        theinput.value *
        Math.floor(result.conversion_rates[mysecondselect.value])
      }`;
      myh1.innerHTML = temp;
    });
});
