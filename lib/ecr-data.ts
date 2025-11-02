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
  // POS ECR Devices
  {
    id: "E600",
    name: "E600",
    category: "Pax",
    brand: "PAX",
    description: "Portable or desktop, with large screen & small footprint",
    features: ["Powered by Android 10", "4G + WiFi + Bluetooth 5.1", "Contactless + Chip & PIN + Magnetic stripe", "3.5-inch customer-facing touchscreen", "Android payment module"],
    image: "/E600.webp",
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
