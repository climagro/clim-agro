// ============================================================
//  CLIM-AGRO LTD — CENTRAL CONTENT FILE
//  Edit this file to update text, statistics, and news posts
//  across the whole website. After editing:
//     git add .
//     git commit -m "Update content"
//     git push
//  Vercel redeploys automatically in ~60 seconds.
// ============================================================

export const company = {
  name: "CLIM-AGRO LTD",
  tagline: "Smart Agriculture & Climate Resilient Solutions",
  coreMessage:
    "We convert market waste into valuable agricultural products — creating climate resilience, food security, and economic opportunity in Rwanda.",
  email: "climagroltd@gmail.com",
  phone: "+250 788 381 223",
  whatsapp: "250788381223", // digits only, for the wa.me link
  location: "Kigali, Kicukiro District, Niboye, Rwanda",
  facebook: "https://web.facebook.com/profile.php?id=61590326979898",
};

// ------------------------------------------------------------
//  IMPACT STATISTICS  (provided by CLIM-AGRO)
//  Keep these backed by your own records for investor scrutiny.
// ------------------------------------------------------------
export const stats = [
  { value: "70", unit: "tonnes", label: "Market waste recycled annually" },
  { value: "85", unit: "", label: "Farmers reached" },
  { value: "18", unit: "tonnes", label: "BSF feed produced annually" },
  { value: "25", unit: "tonnes", label: "Organic fertilizer produced annually" },
  { value: "12", unit: "", label: "Direct jobs created" },
  { value: "40", unit: "", label: "Indirect jobs supported" },
  { value: "14", unit: "", label: "Training sessions delivered" },
  { value: "35", unit: "t CO₂e", label: "Emissions avoided per year (estimated)" },
];

// ------------------------------------------------------------
//  ABOUT PAGE CONTENT
// ------------------------------------------------------------
export const about = {
  story: [
    "CLIM-AGRO was founded to address one of the most pressing challenges facing modern agriculture: producing more food sustainably while adapting to climate change and creating economic opportunities for rural communities.",
    "The idea emerged from a clear observation that many farmers struggle with declining productivity, rising production costs, inefficient waste management systems, and limited access to modern agricultural technologies. At the same time, growing populations demand affordable, nutritious food produced in environmentally responsible ways.",
    "Recognizing these challenges as opportunities for innovation, CLIM-AGRO was established as an integrated agricultural enterprise dedicated to combining sustainable livestock production, climate-smart farming practices, waste valorization, and modern agricultural technologies into a scalable and commercially viable model.",
    "Today, CLIM-AGRO is building a diversified agricultural system that contributes to food security, environmental sustainability, and economic development while demonstrating how agriculture can become both profitable and resilient in the face of changing climatic conditions.",
  ],
  mission:
    "To establish a world-class, sustainable, and integrated agricultural enterprise in Rwanda that provides nutritious, affordable food products to local markets while creating meaningful employment, demonstrating environmental stewardship through waste recycling, and building a scalable model that can attract both local and international agri-business investment. To empower farmers through climate-smart agricultural solutions, training, innovation, and sustainable livestock and crop production.",
  vision:
    "To become a leading agricultural enterprise that promotes sustainable farming, food security, climate resilience, waste valorization, and smart agriculture — while contributing meaningfully to Rwanda's Vision 2050 food security and economic transformation goals.",
  whatWeDo: [
    "Poultry production and management",
    "Rabbit farming and livestock development",
    "Black Soldier Fly (BSF) waste valorization",
    "Climate-smart agricultural technologies",
    "Sustainable waste recycling and resource recovery",
    "Agricultural innovation and technology adoption",
    "Farmer support and capacity development",
  ],
  commitment: [
    "Producing safe, nutritious, and affordable food",
    "Creating employment opportunities within local communities",
    "Promoting environmentally responsible farming practices",
    "Advancing climate-smart agriculture",
    "Supporting Rwanda's food security objectives",
    "Building scalable agricultural models that attract investment and drive rural economic growth",
  ],
  team: [
    {
      name: "Simon Omondi",
      role: "Founder & Operations Director",
      credential: "Senior Agricultural Engineer (BSc Agricultural Engineering)",
      bio: [
        "Simon Omondi is the founder of CLIM-AGRO and leads all technical and operational functions of the enterprise. With a background in Agricultural Engineering and a strong commitment to sustainable agricultural development, he oversees production systems, technology implementation, farm operations, and innovation initiatives.",
        "Driven by a passion for agriculture and rural development, Simon is committed to helping farmers and agricultural enterprises adopt sustainable practices that increase productivity, improve resource efficiency, and protect the environment.",
      ],
    },
    {
      name: "Alfred Otieno",
      role: "Co-Founder, Managing Director & Company Chairperson",
      credential: "Strategy, Finance & Investor Relations",
      bio: [
        "As Co-Founder, Managing Director, and majority shareholder, Alfred Otieno provides the strategic leadership and financial foundation that enables CLIM-AGRO to grow at commercial scale.",
        "His responsibilities include strategic direction, capital mobilization, investor relations, banking and grant partnerships, land management, stakeholder engagement, high-level marketing, and financial oversight. Alfred plays a critical role in positioning CLIM-AGRO for sustainable growth and long-term investment readiness.",
      ],
    },
  ],
};

// ------------------------------------------------------------
//  THE CIRCULAR FARMING MODEL (used on the Model page)
// ------------------------------------------------------------
export const modelSteps = [
  { id: 1, title: "Market Waste", note: "Collected from local markets" },
  { id: 2, title: "BSF Larvae", note: "Black Soldier Fly bioconversion" },
  { id: 3, title: "Animal Feed", note: "Protein-rich larvae & meal" },
  { id: 4, title: "Poultry & Rabbits", note: "Fed on insect protein" },
  { id: 5, title: "Manure & Frass", note: "Organic fertilizer" },
  { id: 6, title: "Vegetable Production", note: "Grown with organic inputs" },
  { id: 7, title: "Food Market", note: "Fresh produce sold locally" },
];

// ------------------------------------------------------------
//  PROJECTS
// ------------------------------------------------------------
export const projects = [
  {
    title: "BSF (Black Soldier Fly) Production Unit",
    img: "/photos/bsf-hero.jpg",
    objective:
      "Convert organic waste into high-protein animal feed and organic fertilizer.",
    outcomes: [
      "Established a functional BSF production unit",
      "Regular processing of organic waste from markets",
      "Production of larvae used as poultry and fish feed",
    ],
    metrics: [
      "Organic waste processed: 3 tons/month",
      "BSF larvae produced: 450 kg/week",
      "Reduction in waste sent to landfill: 65%",
    ],
  },
  {
    title: "Poultry Farming (Exotic & Indigenous)",
    img: "/photos/poultry-flock.jpg",
    objective:
      "Produce affordable, high-quality eggs and meat using sustainable feed sources.",
    outcomes: [
      "Operational poultry units with both indigenous and improved breeds",
      "Integration of BSF larvae into feed system to reduce costs",
    ],
    metrics: [],
  },
  {
    title: "Rabbit Farming",
    img: "/photos/rabbits-staff-1.jpg",
    objective:
      "Provide an affordable and fast-reproducing source of protein and income.",
    outcomes: [
      "Established rabbit housing and breeding system",
      "Growing local demand for rabbit meat",
    ],
    metrics: [],
  },
];

// ------------------------------------------------------------
//  INVESTORS & PARTNERS
// ------------------------------------------------------------
export const investors = {
  ask:
    "We are currently raising USD 50,000 – 150,000 in growth capital to scale our integrated circular agriculture model. This funding will enable us to expand operations, increase production capacity, and strengthen our supply chain.",
  useOfFunds: [
    {
      title: "Infrastructure Development",
      desc: "Construction and expansion of BSF production units, poultry housing, rabbit units, and vegetable farming systems",
    },
    {
      title: "Equipment & Technology",
      desc: "Waste collection systems, larvae processing equipment, irrigation systems, and storage facilities",
    },
    {
      title: "Operations & Working Capital",
      desc: "Labor, feed optimization, logistics, and day-to-day farm operations",
    },
    {
      title: "Training & Community Programs",
      desc: "Capacity building for farmers and youth in sustainable agriculture and waste management",
    },
    {
      title: "Market Expansion",
      desc: "Branding, distribution networks, and partnerships with markets and institutions",
    },
  ],
  traction: [
    "Active organic waste collection and conversion into valuable inputs (BSF larvae & compost)",
    "Operational poultry, rabbit, and vegetable production units",
    "Growing demand for our products (eggs, meat, vegetables, organic fertilizer)",
    "Engagement with local communities and farmers through training programs",
    "Early-stage revenue generation with strong scalability potential",
  ],
  offer: [
    "Equity investment in a scalable agribusiness venture",
    "Impact investment opportunities with measurable environmental and social returns",
    "Participation in a circular economy model addressing waste management, food security, and youth employment",
    "Long-term value creation through sustainable agriculture and innovation",
  ],
  whyInvest: [
    { title: "Proven circular model", desc: "Waste -> protein -> food -> soil fertility." },
    { title: "Climate-smart alignment", desc: "Strong fit with sustainability and climate goals." },
    { title: "High growth potential", desc: "Agriculture and waste management sectors in Africa." },
    { title: "Scalable & replicable", desc: "A model that can expand across regions." },
  ],
};

// ------------------------------------------------------------
//  NEWS / UPDATES  (the "dynamic" section)
//  To add a post: copy one block, change the fields, put it at
//  the TOP of the array. slug must be unique (used in the URL).
// ------------------------------------------------------------
export const news = [
  {
    slug: "launch-bugesera-initiative",
    date: "2026-05-31",
    title:
      "CLIM-AGRO launches integrated climate-smart agriculture initiative in Bugesera",
    excerpt:
      "CLIM-AGRO announces the launch of its integrated agricultural enterprise dedicated to sustainable food production, climate resilience, and rural economic development in Rwanda.",
    body:
      "Bugesera, Rwanda — CLIM-AGRO is proud to announce the launch of its integrated agricultural enterprise dedicated to advancing sustainable food production, climate resilience, and rural economic development in Rwanda.\n\n" +
      "Founded with a vision to transform agricultural systems through innovation and environmental stewardship, CLIM-AGRO combines poultry production, rabbit farming, Black Soldier Fly (BSF) waste valorization, and smart agriculture technologies into a single circular farming model.\n\n" +
      "The enterprise aims to address key challenges facing modern agriculture, including food insecurity, waste management, rising feed costs, and the impacts of climate change. By converting organic waste into valuable agricultural inputs such as insect-based protein feed and organic fertilizer, CLIM-AGRO demonstrates how sustainable agriculture can create both economic and environmental benefits.\n\n" +
      "\"Our goal is to build a model farm that not only produces nutritious and affordable food but also creates employment opportunities, promotes responsible resource use, and attracts investment into Rwanda's agricultural sector,\" said Simon Omondi, Founder and Operations Director.\n\n" +
      "As part of its long-term vision, CLIM-AGRO seeks to become one of the leading integrated agricultural enterprises in the Bugesera region by 2030, recognized for innovation in poultry management, BSF technology, and climate-smart farming systems.\n\n" +
      "The company is currently focused on developing its production infrastructure, strengthening partnerships, and creating scalable systems that support Rwanda's Vision 2050 objectives for food security and economic transformation.\n\n" +
      "\"We believe agriculture can be both profitable and environmentally responsible,\" said Alfred Otieno, Co-Founder and Managing Director. \"CLIM-AGRO is committed to demonstrating that sustainable farming practices can drive business growth while delivering meaningful impact for communities.\"\n\n" +
      "As operations expand, CLIM-AGRO looks forward to sharing updates on farm development, sustainability initiatives, training programs, and innovations that contribute to a more resilient agricultural future.\n\n" +
      "For partnership, investment, or collaboration opportunities, interested stakeholders are encouraged to contact CLIM-AGRO directly.",
  },
];
