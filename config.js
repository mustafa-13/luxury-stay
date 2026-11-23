/* ============================================================
   EDIT THIS FILE TO CHANGE YOUR WEBSITE.
   - Only change the text between the "quotes".
   - Keep the commas and brackets exactly as they are.
   - Leave "" empty to show a grey placeholder photo.
   ============================================================ */
const CONFIG = {
  name: "Luxury Stay",
  tagline: "A private home in the heart of Srinagar",
  intro: "Four spacious bedrooms, a quiet garden and a caretaker on site. About 20 minutes from the airport and 15 minutes from Lal Chowk.",
  whatsapp: "918082143045",
  phone: "+91 80821 43045",
  email: "",
  address: "House no 7, Sector H, Iram Lane, Natipora, Srinagar, Jammu and Kashmir, 190015",
  mapLink: "https://maps.app.goo.gl/t8DYdzcNT3BpGChUA",
  mapEmbed: "",
  heroImage: "assets/images/hero.jpg",

  about: [
    "Luxury Stay is an entire-house stay in Srinagar, Kashmir. The whole property is yours for the duration of your visit: four big, spacious bedrooms, a lobby and living area, a dining area and a garden.",
    "A caretaker is available at the property, and you can reach them by phone or WhatsApp whenever you need help.",
    "It suits families, couples and groups who prefer privacy and space over a hotel room. Check-in and check-out are flexible, and extra beds are available on request."
  ],
  highlights: [
    "Entire house, exclusively yours",
    "4 spacious bedrooms with king beds",
    "Sleeps up to 12 guests",
    "Garden and dining area",
    "Free Wi-Fi and parking",
    "Caretaker at the property"
  ],

  rooms: [
    { name: "Bedroom 1", beds: "King bed", sleeps: "2 guests (extra bed on request)", desc: "A big, spacious bedroom with a king bed.", facilities: ["King bed", "Free Wi-Fi", "Extra bed on request"], images: ["assets/images/bedroom-1.jpg", "assets/images/wardrobe.jpg"] },
    { name: "Bedroom 2", beds: "King bed", sleeps: "2 guests (extra bed on request)", desc: "A big, spacious bedroom with a king bed.", facilities: ["King bed", "Free Wi-Fi", "Extra bed on request"], images: ["assets/images/bedroom-2.jpg"] },
    { name: "Bedroom 3", beds: "King bed", sleeps: "2 guests (extra bed on request)", desc: "A big, spacious bedroom with a king bed. Photos show a similar bedroom.", facilities: ["King bed", "Free Wi-Fi", "Extra bed on request"], images: ["assets/images/bedroom-1.jpg", "assets/images/wardrobe.jpg"] },
    { name: "Bedroom 4", beds: "King bed", sleeps: "2 guests (extra bed on request)", desc: "A big, spacious bedroom with a king bed. Photos show a similar bedroom.", facilities: ["King bed", "Free Wi-Fi", "Extra bed on request"], images: ["assets/images/bedroom-2.jpg"] }
  ],
  spaces: [
    { name: "Living room", desc: "A spacious shared area for guests to relax together.", image: "assets/images/living-room.jpg" },
    { name: "Lobby", desc: "A welcoming lobby with a wooden staircase.", image: "assets/images/lobby.jpg" },
    { name: "Garden", desc: "A private garden, open to all guests.", image: "assets/images/garden.jpg" }
  ],

  packages: [
    { name: "Couple Stay", desc: "A quiet, private stay for two.", duration: "Flexible duration", guests: "2 guests", price: "Contact us for the best price", includes: ["Private stay in the house", "Free Wi-Fi", "Caretaker on site"] },
    { name: "Family Stay", desc: "Space for the whole family to spread out.", duration: "Flexible duration", guests: "Families, up to 12 guests", price: "Contact us for the best price", includes: ["Private stay in the house", "Free Wi-Fi", "Caretaker on site", "Extra beds on request"] },
    { name: "Group Stay", desc: "Friends or relatives travelling together.", duration: "Flexible duration", guests: "Up to 12 guests", price: "Contact us for the best price", includes: ["All four bedrooms", "Garden and dining area", "Extra beds on request"] },
    { name: "Weekend Getaway", desc: "A short break away from the city.", duration: "Weekend", guests: "Flexible group size", price: "Contact us for the best price", includes: ["Private stay in the house", "Free Wi-Fi", "Caretaker on site"] },
    { name: "Kashmir Holiday", desc: "A longer stay to explore the valley at your pace.", duration: "Flexible duration", guests: "Flexible group size", price: "Contact us for the best price", includes: ["Private stay in the house", "Airport pickup and sightseeing arrangements on request"] },
    { name: "Extended Stay", desc: "For guests staying a few weeks or more.", duration: "Long stays", guests: "Flexible group size", price: "Contact us for the best price", includes: ["Private stay in the house", "Free Wi-Fi", "Caretaker on site"] },
    { name: "Seasonal Special", desc: "Stays timed for spring tulips, summer, autumn colours or winter snow.", duration: "Varies by season", guests: "Flexible group size", price: "Contact us for the best price", includes: ["Private stay in the house", "Ask us about current seasonal offers"] }
  ],

  /* by: "property" = arranged by you on request. "external" = a suggestion only. */
  experiencesNote: "Items marked 'Arranged by us' are available on request. Please confirm details when you enquire. Other places are suggestions only; their tickets and tours are not included.",
  experiences: [
    { name: "Airport pickup and drop", desc: "Pickup and drop-off can be arranged on request.", image: "assets/images/exp-airport-pickup.svg", by: "property" },
    { name: "Breakfast and meals", desc: "Meals can be arranged on request.", image: "assets/images/exp-meals.svg", by: "property" },
    { name: "Sightseeing and taxi", desc: "Local sightseeing and taxi can be arranged on request.", image: "assets/images/exp-sightseeing-taxi.svg", by: "property" },
    { name: "Bonfire and barbecue", desc: "Bonfire or barbecue in the garden on request.", image: "assets/images/exp-bonfire.svg", by: "property" },
    { name: "Dal Lake", desc: "Shikara rides and the lake-side promenade.", image: "assets/images/exp-dal-lake.svg", by: "external" },
    { name: "Mughal Gardens", desc: "Terraced gardens such as Nishat Bagh and Shalimar Bagh.", image: "assets/images/exp-mughal-gardens.svg", by: "external" },
    { name: "Gulmarg", desc: "A day excursion to the meadows and gondola.", image: "assets/images/exp-gulmarg.svg", by: "external" },
    { name: "Pahalgam", desc: "River valleys and pine forests.", image: "assets/images/exp-pahalgam.svg", by: "external" },
    { name: "Sonamarg", desc: "Mountain scenery and glacier views.", image: "assets/images/exp-sonamarg.svg", by: "external" },
    { name: "Local sightseeing", desc: "Old-city landmarks, mosques and shrines.", image: "assets/images/exp-local-sightseeing.svg", by: "external" },
    { name: "Shopping and local food", desc: "Lal Chowk markets, handicrafts and Kashmiri cuisine.", image: "assets/images/exp-shopping-food.svg", by: "external" }
  ],

  galleryCategories: ["Exterior", "Bedrooms", "Living Area", "Garden", "Amenities"],
  gallery: [
    { cat: "Exterior", src: "assets/images/courtyard.jpg", label: "Courtyard and entrance" },
    { cat: "Garden", src: "assets/images/garden.jpg", label: "Garden lawn" },
    { cat: "Bedrooms", src: "assets/images/bedroom-1.jpg", label: "Bedroom with king bed" },
    { cat: "Bedrooms", src: "assets/images/bedroom-2.jpg", label: "Bedroom with blue king bed" },
    { cat: "Bedrooms", src: "assets/images/wardrobe.jpg", label: "Bedroom wardrobe" },
    { cat: "Living Area", src: "assets/images/living-room.jpg", label: "Living room" },
    { cat: "Living Area", src: "assets/images/lobby.jpg", label: "Lobby and staircase" },
    { cat: "Amenities", src: "assets/images/kitchen-1.jpg", label: "Kitchen" },
    { cat: "Amenities", src: "assets/images/kitchen-2.jpg", label: "Kitchen counter" },
    { cat: "Amenities", src: "assets/images/bathroom-1.jpg", label: "Bathroom" },
    { cat: "Amenities", src: "assets/images/bathroom-2.jpg", label: "Bathroom" }
  ],

  /* Add only real reviews. Leave the list empty [] until you have some. */
  reviews: [
    // { text: "Paste a real guest comment here.", name: "Guest name", note: "City, month year" }
  ],

  location: {
    airport: "Srinagar Airport: about 20 minutes (subject to traffic).",
    lalChowk: "Lal Chowk: about 15 minutes.",
    nearby: ["Railway station: about 15 minutes", "Dal Lake: about 20 minutes", "Mughal Gardens: about 30 minutes"]
  },

  faqs: [
    { q: "What are the check-in and check-out times?", a: "Both are flexible. Tell us your plans and we will arrange it." },
    { q: "How many bedrooms are there?", a: "Four big, spacious bedrooms, each with a king bed. Guests can access all of them." },
    { q: "How many guests can stay?", a: "Each bedroom sleeps 2 guests, and extra beds are available on request. The house hosts up to 12 guests." },
    { q: "Is parking available?", a: "Yes, there is a parking facility at the property." },
    { q: "Is Wi-Fi available?", a: "Yes, free Wi-Fi is available." },
    { q: "Is someone at the property?", a: "Yes, a caretaker is available. Guests can reach them by phone or WhatsApp." },
    { q: "Can guests use the garden and dining area?", a: "Yes. Guests can use the lobby, garden and dining area." },
    { q: "Do you arrange airport pickup, meals or sightseeing?", a: "Yes, on request: airport pickup and drop, breakfast and meals, sightseeing and taxi, and bonfire or barbecue in the garden. Please confirm details when you enquire." },
    { q: "What are the booking and cancellation policies?", a: "Cancellation terms are shared at the time of booking. Send us an enquiry on WhatsApp to begin." },
    { q: "Which payment methods do you accept?", a: "UPI, bank transfer and cash on arrival." },
    { q: "Do you host families and groups?", a: "Yes. The property suits families, couples and groups of up to 12 guests." }
  ]
};
