export const client = {
  // Business Details
  name: "Paralax",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in London.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07771 723939",
  email: "",
  website: "",

  // Location
  address: "London",
  city: "London",
  county: "",
  postcode: "",
  basedIn: "London",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Holly M.", rating: 5, text: "Had a wonderful experience with Paralax. From the design phase right through to the final clean-up, everything was handled brilliantly. The new patio and planting scheme look amazing.", date: "3 months ago" },
    { name: "Tony M.", rating: 5, text: "Hired Paralax for a full garden redesign and the results speak for themselves. The team worked hard, kept us informed throughout, and left the site spotless each day. It's like having a brand new garden. Highly recommend to anyone in London.", date: "3 years ago" },
    { name: "Rosie Collins", rating: 5, text: "Used Paralax for landscaping work at our property in London. The team were friendly, professional and clearly know their trade inside out. The finished result exceeded what we'd imagined. Will definitely be using them again.", date: "6 months ago" },
    { name: "Owen K.", rating: 5, text: "After getting several quotes, we went with Paralax and it was the best decision. Not the cheapest, but the quality of work is in a different league. Professional, reliable, and the results are gorgeous.", date: "3 years ago" },
    { name: "Zoe Jackson", rating: 5, text: "We found Paralax online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "2 months ago" },
    { name: "Charlie Clarke", rating: 5, text: "Just had Paralax finish our garden project in London. What a difference! The team were lovely to have around — respectful of our property, cleaned up after themselves, and produced an amazing result.", date: "a month ago" },
    { name: "Nick Turner", rating: 5, text: "Brilliant job by Paralax. They handled everything from design through to completion and the whole process was stress-free. The lawn, planting, and fencing all look superb. Worth every penny.", date: "4 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Paralax | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
