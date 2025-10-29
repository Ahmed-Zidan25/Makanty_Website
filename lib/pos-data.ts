export interface Product {
  id: string
  name: string
  category: "Pax" | "Verifone" | "Sunmi" | "Newland" | "Newpos" | "Nexgo"
  brand: string
  description: string
  features: string[]
  image: string
  price?: string
}


export const products: Product[] = [
  // POS Devices - Android Smart POS
  {
    id: "pax-a920",
    name: "PAX A920",
    category: "Pax",
    brand: "PAX",
    description: "Advanced Android Smart POS terminal with large touchscreen and integrated printer",
    features: ['5.5" HD touchscreen', "Android OS", "Built-in printer", "4G/WiFi/Bluetooth", "NFC payment"],
    image: "/pax-a920-terminal.jpg",
    price: "Contact for pricing",
  },
  {
    id: "sunmi-p2",
    name: "Sunmi P2",
    category: "Sunmi",
    brand: "SUNMI",
    description: "Portable Android Smart POS with powerful performance and elegant design",
    features: ['5.99" display', "Quad-core processor", "58mm printer", "Dual cameras", "Long battery life"],
    image: "/sunmi-p2-device.jpg",
    price: "Contact for pricing",
  },
  {
    id: "nexgo-n5",
    name: "NEXGO N5",
    category: "Nexgo",
    brand: "NEXGO",
    description: "Compact Android Smart POS for mobile payment acceptance",
    features: ["Android 9.0", "4G connectivity", "5-inch touchscreen", "Thermal printer", "Multi-payment support"],
    image: "/newpostech-np500.jpg",
    price: "Contact for pricing",
  },
  {
    id: "imin-m2",
    name: "IMIN M2",
    category: "pos",
    brand: "IMIN",
    description: "All-in-one Android POS terminal for retail and hospitality",
    features: ["15.6-inch display", "Android 11", "Dual screen option", "High performance", "Cloud-ready"],
    image: "/pax-a920-terminal.jpg",
    price: "Contact for pricing",
  },

  // POS Devices - Traditional & Desktop
  {
    id: "verifone-v400m",
    name: "Verifone V400m",
    category: "Nexgo",
    brand: "Verifone",
    description: "Versatile countertop payment terminal with advanced security",
    features: ['7" touchscreen', "EMV certified", "Contactless payments", "Secure encryption", "Cloud-ready"],
    image: "/verifone-v400m.jpg",
    price: "Contact for pricing",
  },
  {
    id: "newpos-np500",
    name: "NewPOS NP500",
    category: "Nexgo",
    brand: "NewPOS",
    description: "Reliable desktop POS terminal for retail and hospitality",
    features: ["Compact design", "Fast processor", "Multiple connectivity", "Easy integration", "Durable build"],
    image: "/newpostech-np500.jpg",
    price: "Contact for pricing",
  },

  // POS Devices - Mini & Mobile
  {
    id: "pax-a80",
    name: "PAX A80",
    category: "Nexgo",
    brand: "PAX",
    description: "Compact mobile POS for on-the-go payment acceptance",
    features: ["Lightweight design", "Long battery life", "4G connectivity", "Contactless ready", "Portable"],
    image: "/sunmi-p2-device.jpg",
    price: "Contact for pricing",
  },
  {
    id: "feitian-c10",
    name: "Feitian C10",
    category: "Nexgo",
    brand: "Feitian",
    description: "Mini POS terminal with secure payment processing",
    features: ["Compact size", "EMV certified", "Bluetooth/WiFi", "Long standby time", "Easy to use"],
    image: "/vanstone-vt1000.jpg",
    price: "Contact for pricing",
  },

  // ECR Systems
  {
    id: "ecr-basic-100",
    name: "ECR Basic 100",
    category: "Nexgo",
    brand: "Makanty",
    description: "Entry-level electronic cash register for small businesses",
    features: ["Easy operation", "Thermal printer", "Cash drawer", "Basic reporting", "Affordable"],
    image: "/ecr-basic-100.jpg",
    price: "Contact for pricing",
  },
  {
    id: "ecr-pro-500",
    name: "ECR Pro 500",
    category: "Nexgo",
    brand: "Makanty",
    description: "Professional ECR with advanced features and reporting",
    features: ["LCD display", "Multiple departments", "Inventory tracking", "Sales reports", "USB connectivity"],
    image: "/ecr-pro-500.jpg",
    price: "Contact for pricing",
  },
  {
    id: "ecr-premium-1000",
    name: "ECR Premium 1000",
    category: "ecr",
    brand: "Makanty",
    description: "Premium electronic cash register with touchscreen",
    features: ["Touchscreen interface", "Advanced reporting", "Network capable", "Employee management", "Cloud backup"],
    image: "/ecr-premium-1000.jpg",
    price: "Contact for pricing",
  },

  // POS Spare Parts & Accessories
  {
    id: "thermal-printer-head",
    name: "Thermal Printer Head",
    category: "pos-parts",
    brand: "Universal",
    description: "Replacement thermal printer head compatible with major POS brands",
    features: ["High durability", "Easy installation", "Universal fit", "1-year warranty", "OEM quality"],
    image: "/thermal-printer-head.jpg",
    price: "Contact for pricing",
  },
  {
    id: "pos-battery-pack",
    name: "POS Battery Pack",
    category: "pos-parts",
    brand: "Universal",
    description: "High-capacity replacement battery for portable POS devices",
    features: ["Extended runtime", "Fast charging", "Safety certified", "Compatible models", "2-year warranty"],
    image: "/pos-battery-pack.jpg",
    price: "Contact for pricing",
  },
  {
    id: "touchscreen-digitizer",
    name: "Touchscreen Digitizer",
    category: "pos-parts",
    brand: "Universal",
    description: "Replacement touchscreen for various POS terminal models",
    features: ["Responsive touch", "Scratch resistant", "Multiple sizes", "Easy replacement", "Quality tested"],
    image: "/touchscreen-digitizer.jpg",
    price: "Contact for pricing",
  },
  {
    id: "pos-power-adapter",
    name: "POS Power Adapter",
    category: "Nexgo",
    brand: "Universal",
    description: "Universal power adapter for POS terminals",
    features: ["Multiple voltages", "Surge protection", "Compact design", "Long cable", "Safety certified"],
    image: "/pos-power-adapter.jpg",
    price: "Contact for pricing",
  },
  {
    id: "charging-dock",
    name: "Charging Dock",
    category: "Nexgo",
    brand: "Universal",
    description: "Multi-device charging dock for POS terminals",
    features: [
      "Charges multiple devices",
      "Cable management",
      "Stable base",
      "LED indicators",
      "Universal compatibility",
    ],
    image: "/pos-battery-pack.jpg",
    price: "Contact for pricing",
  },
  {
    id: "keypad-replacement",
    name: "Keypad Replacement",
    category: "pos-parts",
    brand: "Universal",
    description: "Replacement keypad for POS terminals",
    features: ["Tactile feedback", "Durable construction", "Easy installation", "Multiple layouts", "OEM quality"],
    image: "/touchscreen-digitizer.jpg",
    price: "Contact for pricing",
  },

  // ECR Spare Parts & Consumables
  {
    id: "ecr-paper-roll",
    name: "Thermal Paper Rolls",
    category: "Nexgo",
    brand: "Universal",
    description: "High-quality thermal paper rolls for ECR and POS systems",
    features: ["BPA-free", "Long-lasting print", "Various sizes", "Bulk available", "Eco-friendly"],
    image: "/ecr-paper-roll.jpg",
    price: "Contact for pricing",
  },
  {
    id: "cash-drawer-insert",
    name: "Cash Drawer Insert",
    category: "Nexgo",
    brand: "Universal",
    description: "Replacement cash drawer insert tray",
    features: ["Durable plastic", "Multiple compartments", "Standard size", "Easy to clean", "Secure fit"],
    image: "/cash-drawer-insert.jpg",
    price: "Contact for pricing",
  },
  {
    id: "ecr-keyboard",
    name: "ECR Keyboard",
    category: "Nexgo",
    brand: "Universal",
    description: "Replacement keyboard for electronic cash registers",
    features: ["Tactile keys", "Spill resistant", "Easy installation", "Long lifespan", "Compatible models"],
    image: "/ecr-keyboard.jpg",
    price: "Contact for pricing",
  },
  {
    id: "sim-cards",
    name: "SIM Cards & Data Packs",
    category: "Nexgo",
    brand: "Makanty",
    description: "SIM cards with data packages for POS connectivity",
    features: [
      "Multiple carriers",
      "Data plans included",
      "Easy activation",
      "Nationwide coverage",
      "Flexible packages",
    ],
    image: "/ecr-paper-roll.jpg",
    price: "Contact for pricing",
  },
  {
    id: "security-seals",
    name: "Security Seals & Stickers",
    category: "Nexgo",
    brand: "Makanty",
    description: "Tamper-evident security seals for POS devices",
    features: ["Tamper-evident", "Strong adhesive", "Custom printing", "Various sizes", "Bulk orders"],
    image: "/cash-drawer-insert.jpg",
    price: "Contact for pricing",
  },
]


export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "Pax", name: "Pax", count: products.filter((p) => p.category === "Pax").length },
  { id: "Verifone", name: "Verifone", count: products.filter((p) => p.category === "Verifone").length },
  { id: "Sunmi", name: "Sunmi", count: products.filter((p) => p.category === "Sunmi").length },
  { id: "Newland", name: "Newland", count: products.filter((p) => p.category === "Newland").length },
  { id: "Newpos", name: "Newpos", count: products.filter((p) => p.category === "Newpos").length },
  { id: "Nexgo", name: "Nexgo", count: products.filter((p) => p.category === "Nexgo").length },
]
