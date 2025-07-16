// data/competitions.js

export const competitions = [
  {
    id: 1,
    name: "Liga šampiona - Kvalifikacije",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png?20230107004614",
    matches: [
      {
        id: 1,
        homeTeam: {
          name: "Dinamo Minsk",
          logo: "https://cdn-img.zerozero.pt/img/logos/equipas/1035_imgbank_1687529691.png",
        },
        awayTeam: {
          name: "Ludogorets",
          logo: "https://upload.wikimedia.org/wikipedia/pt/0/0e/LudogoretsRazgrad.png",
        },
        streams: [
          { id: 1, url: "https://mbe1.dbcast.live/uf6j9nVTeGkLvLer--1qtg/1752648328/38352e3230322e3131332e3637/ff640/playlist.m3u8", label: "Stream 1" },
          { id: 2, url: "https://stream2.example.com", label: "Stream 2" },
        ],
      },
      {
        id: 2,
        homeTeam: {
          name: "Linfield",
          logo: "https://images.racingpost.com/football/teambadges/1585.png",
        },
        awayTeam: {
          name: "Shelbourne",
          logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Shels_logo_sml.png",
        },
        streams: [
          { id: 1, url: "https://stream3.example.com", label: "Stream 1" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Liga Evrope - Kvalifikacije",
    imageUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/X0jMzqfLeOndg74b6n97IA_64x64.png",
    matches: [
      // Dodaj utakmice ovde po želji
    ],
  },
  {
    id: 3,
    name: "Liga Konferencija - Kvalifikacije",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/UEFA_Conference_League_full_logo_%282024_version%29.svg/250px-UEFA_Conference_League_full_logo_%282024_version%29.svg.png",
    matches: [
      {
        id: 3,
        homeTeam: {
          name: "Auda",
          logo: "https://tmssl.akamaized.net//images/wappen/big/8606.png?lm=1533462229",
        },
        awayTeam: {
          name: "Larne",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Larne_FC_crest.svg/1200px-Larne_FC_crest.svg.png",
        },
        streams: [
          { id: 3, url: "https://mae1.dbcast.live/98zfMDgRbwR2CVFxEM-EXw/1752712477/38352e3230322e3131332e3637/ff602/playlist.m3u8", label: "Stream 1" },
        ],
      },
    ],
  },
];
