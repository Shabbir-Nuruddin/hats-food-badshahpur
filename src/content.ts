import "@fontsource/syne/600.css";
import "@fontsource/syne/800.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "HAT'S FOOD",
  sub: { en: "Momos, chaap & Chinese · Badshahpur Sohna Rd, Sector 69", hi: "मोमोज़, चाप और चाइनीज़ · बादशाहपुर सोहना रोड, सेक्टर 69" },
  banner: { en: "Friends who want different things? Everyone finds their dish here", hi: "दोस्तों की पसंद अलग-अलग? यहां सबको अपनी डिश मिलती है" },
  phone: "918595252509",
  phoneDisplay: "+91 85952 52509",
  lat: 28.3898916,
  lon: 77.050224,
  hours: [[12, 24], [12, 24], [12, 24], [12, 24], [12, 24], [12, 24], [12, 24]],
  theme: {
    dark: true,
    bg: "#0c0c11",
    bg2: "#13131a",
    panel: "#191922",
    ink: "#f3f1f5",
    ink2: "#c3c0cb",
    ink3: "#85828f",
    line: "#2a2a36",
    accent: "#ff5a4e",
    onAccent: "#2a0300",
    display: "Syne",
    weight: 800,
    upper: false,
  },
  scene: "feast",
  align: "left",
  hero: {
    title: [
      { en: "Momos, chaap, Chinese,", hi: "मोमोज़, चाप, चाइनीज़," },
      { en: "all under one roof.", hi: "सब एक ही छत के नीचे।" },
    ],
    proof: {
      en: "4.9 on Google from 133 reviews. Juicy momos, tandoori chaap and Chinese, behind Sona Marbles on Badshahpur Sohna Road.",
      hi: "गूगल पर 133 रिव्यू से 4.9। रसीले मोमोज़, तंदूरी चाप और चाइनीज़, बादशाहपुर सोहना रोड पर सोना मार्बल्स के पीछे।",
    },
    fallback: "/img/p2.jpg",
    slides: ["/img/p1.jpg", "/img/p4.jpg", "/img/p6.jpg", "/img/p9.jpg"],
  },
  marquee: ["Paneer Momos", "Chicken Momos", "Tandoori Chaap", "Chilli Paneer", "Hakka Noodles", "Manchurian", "Fried Rice"],
  dishes: {
    title: { en: "What to order first", hi: "पहले क्या मंगाएं" },
    body: { en: "Every line is a real Google review.", hi: "हर लाइन असली गूगल रिव्यू है।" },
    layout: "cards",
    items: [
      { name: { en: "Momos", hi: "मोमोज़" }, quote: "I tried their Paneer, Veg and chicken momos. They were authentic and juicy, plus point super reasonable.", img: "/img/p2.jpg" },
      { name: { en: "Tandoori Chaap", hi: "तंदूरी चाप" }, quote: "We also tried their Tandoori chaap and found it delicious.", img: "/img/p6.jpg" },
      { name: { en: "Chinese", hi: "चाइनीज़" }, quote: "Best Chinese food yr too good hats food ko hats off😅", img: "/img/p9.jpg" },
    ],
  },
  gallery: { title: { en: "", hi: "" }, layout: "strip", photos: [] },
  feature: {
    kind: "counter",
    title: { en: "One kitchen, every craving", hi: "एक किचन, हर क्रेविंग" },
    body: { en: "Why groups end up here, in guests' own words.", hi: "ग्रुप यहां क्यों आते हैं, मेहमानों के अपने शब्दों में।" },
    img: "/img/p4.jpg",
    items: [
      { label: { en: "Mixed tastes", hi: "अलग-अलग पसंद" }, quote: "Great fusion of foods. Came here with friends of different tastes and each of us got our type of dishes here." },
      { label: { en: "Multi-cuisine", hi: "मल्टी क्यूज़ीन" }, quote: "best food in town, the beat thing is they are serving multi cuisine under one roof" },
      { label: { en: "The Chinese", hi: "चाइनीज़" }, quote: "Best restaurant in gurgaon amazing chinese food specially" },
      { label: { en: "Quality", hi: "क्वालिटी" }, quote: "Best multi kitchen in whole g town superb taste and quality" },
    ],
  },
  reviews: {
    title: { en: "130 of 133 reviews are five stars", hi: "133 में से 130 रिव्यू पांच स्टार" },
    rating: 4.9,
    dist: [130, 0, 0, 0, 3],
    quotes: [
      { quote: "Best Chinese food they are serving all over gurgaon", stars: 5 },
      { quote: "We also tried their Tandoori chaap and found it delicious. Overall total value for money.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Behind Sona Marbles", hi: "सोना मार्बल्स के पीछे" },
    img: "/img/p1.jpg",
    alt: "HAT'S FOOD shopfront",
    address: { en: "Shop No. 5, Badshahpur Sohna Rd, behind Sona Marbles, near Arya Samaj Mandir, Sector 69, Gurugram", hi: "शॉप नं. 5, बादशाहपुर सोहना रोड, सोना मार्बल्स के पीछे, आर्य समाज मंदिर के पास, सेक्टर 69, गुरुग्राम" },
    note: { en: "Open 12pm to midnight, every day.", hi: "हर दिन दोपहर 12 से रात 12 बजे तक।" },
  },
  pour: { from: "pan", into: "kadhai", liquid: "#a8321c", foam: "#d4582f", thick: 1.8, hot: true },
  story: [
    { kicker: { en: "The momos", hi: "मोमोज़" }, title: { en: "Authentic and juicy.", hi: "असली और रसीले।" }, quote: "They were authentic and juicy, plus point super reasonable." },
    { kicker: { en: "The chaap", hi: "चाप" }, title: { en: "Tandoori chaap, too.", hi: "तंदूरी चाप भी।" }, quote: "We also tried their Tandoori chaap and found it delicious." },
    { kicker: { en: "The name", hi: "नाम" }, title: { en: "Hats off.", hi: "हैट्स ऑफ़।" }, quote: "Best Chinese food yr too good hats food ko hats off😅" },
  ],
  build: {
    title: { en: "Build your order in a few taps", hi: "कुछ टैप में अपना ऑर्डर बनाइए" },
    body: { en: "Tap what you want, set how many and when. It goes to WhatsApp exactly as you see it.", hi: "जो चाहिए टैप करें, कितने लोग और कब, चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Order", hi: "ऑर्डर" }, options: [
      { name: { en: "Delivery", hi: "डिलीवरी" } },
      { name: { en: "Pickup", hi: "पिकअप" } },
      { name: { en: "Dine-in", hi: "बैठकर खाना" } },
    ] },
    items: [
      { en: "Paneer Momos", hi: "पनीर मोमोज़" },
      { en: "Veg Momos", hi: "वेज मोमोज़" },
      { en: "Chicken Momos", hi: "चिकन मोमोज़" },
      { en: "Tandoori Chaap", hi: "तंदूरी चाप" },
      { en: "Chilli Paneer", hi: "चिली पनीर" },
      { en: "Hakka Noodles", hi: "हक्का नूडल्स" },
    ],
    people: true,
    when: true,
    hello: { en: "Hi HAT'S FOOD, I'd like:", hi: "नमस्ते हैट्स फ़ूड, मुझे चाहिए:" },
  },
  waHello: {
    en: "Hi HAT'S FOOD, I'd like to order. Items: , delivery / pickup: , address: ",
    hi: "नमस्ते हैट्स फ़ूड, मुझे ऑर्डर देना है। आइटम: , डिलीवरी / पिकअप: , पता: ",
  },
  order: ["build", "dishes", "feature", "reviews", "visit"],
};
