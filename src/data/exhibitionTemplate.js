{
  id: "uuid-v4",
  title: "",
  status: "active", // active | archived | planned
  year: 2026,
  season: "spring", // winter | spring | summer | autumn

  type: "thematic", 
  // thematic | solo | group | commissioned | project | dialogue

  media: ["photography"],
  // see media discussion below

  artist: "", // optional (string or array later)
  works: 18,
  location: "Main Gallery",

  tagline: "", // optional short press line

  timeplan: {
    startDate: "2026-03-01",
    endDate: "2026-05-10",
    duration: "10 weeks"
  },

  admission: {
    standard: 8,
    concession: 5,
    under16: 0
  },

  intro: "",
  curatorial: "",

  credit: "", // optional (curator / gallery)
  accessibility: [], // array of short notes

  assetsPath: "exhibitions/silent-structures",

  events: [] // array of event IDs or URLs
}
