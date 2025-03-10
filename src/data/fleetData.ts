import { Vehicle, EnvironmentalStat } from '../types';

// Fleet data with eco-friendly vehicles
export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Tesla Model S",
    category: "Luxury Sedan",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    description: "Premium electric sedan with cutting-edge technology and zero emissions.",
    passengers: 4,
    range: "652 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "Autopilot capability", "Premium sound system", "Panoramic roof"],
    co2Saved: "4.6 tons per year",
    energySource: "100% Electric",
    pricePerDay: 299,
    pricePerWeek: 1799,
    available: true
  },
  {
    id: 2,
    name: "Mercedes-Benz EQS",
    category: "Executive Sedan",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24",
    description: "Luxury electric vehicle with exceptional range and comfort for executive travel.",
    passengers: 5,
    range: "770 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "MBUX Hyperscreen", "Burmester sound system", "Air filtration system"],
    co2Saved: "5.2 tons per year",
    energySource: "100% Electric",
    pricePerDay: 349,
    pricePerWeek: 2099,
    available: true
  },
  {
    id: 3,
    name: "Toyota Mirai",
    category: "Hydrogen Sedan",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
    description: "Hydrogen fuel cell vehicle with water as the only emission.",
    passengers: 5,
    range: "650 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Hydrogen fuel cell", "Water emissions only", "Quick refueling", "Advanced safety"],
    co2Saved: "4.8 tons per year",
    energySource: "Hydrogen Fuel Cell",
    pricePerDay: 279,
    pricePerWeek: 1679,
    available: true
  },
  {
    id: 4,
    name: "Volvo XC90 Recharge",
    category: "Luxury SUV",
    image: "https://images.unsplash.com/photo-1653417580576-1b60b6dae7c5",
    description: "Plug-in hybrid SUV with spacious interior and advanced safety features.",
    passengers: 7,
    range: "450 km",
    emissions: "19 g/km CO₂",
    efficiency: "A",
    features: ["Plug-in hybrid", "Air suspension", "Bowers & Wilkins audio", "Advanced air purifier"],
    co2Saved: "3.2 tons per year",
    energySource: "Plug-in Hybrid",
    pricePerDay: 329,
    pricePerWeek: 1979,
    available: true
  },
  {
    id: 5,
    name: "BMW iX",
    category: "Electric SUV",
    image: "https://images.unsplash.com/photo-1655410295367-2fded0b1f2d7",
    description: "Flagship electric SUV with innovative design and sustainable materials.",
    passengers: 5,
    range: "630 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "Recycled materials", "Harman Kardon sound", "Panoramic glass roof"],
    co2Saved: "4.9 tons per year",
    energySource: "100% Electric",
    pricePerDay: 339,
    pricePerWeek: 2039,
    available: true
  },
  {
    id: 6,
    name: "Mercedes-Benz EQV",
    category: "Luxury Van",
    image: "https://images.unsplash.com/photo-1617469767053-8f35aaa39fce",
    description: "All-electric premium van for group travel with zero emissions.",
    passengers: 8,
    range: "520 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "Configurable seating", "MBUX system", "Fast charging"],
    co2Saved: "5.8 tons per year",
    energySource: "100% Electric",
    pricePerDay: 389,
    pricePerWeek: 2339,
    available: true
  },
  {
    id: 7,
    name: "Audi e-tron GT",
    category: "Sports Sedan",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    description: "High-performance electric sports sedan with stunning design.",
    passengers: 4,
    range: "488 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "800V charging", "Adaptive air suspension", "Matrix LED headlights"],
    co2Saved: "4.5 tons per year",
    energySource: "100% Electric",
    pricePerDay: 359,
    pricePerWeek: 2159,
    available: true
  },
  {
    id: 8,
    name: "Lexus RX 450h",
    category: "Hybrid SUV",
    image: "https://images.unsplash.com/photo-1633507104446-8e94bd08c1de",
    description: "Self-charging hybrid SUV combining luxury with efficiency.",
    passengers: 5,
    range: "800 km",
    emissions: "29 g/km CO₂",
    efficiency: "A",
    features: ["Self-charging hybrid", "Mark Levinson audio", "Climate concierge", "Adaptive suspension"],
    co2Saved: "2.8 tons per year",
    energySource: "Self-charging Hybrid",
    pricePerDay: 299,
    pricePerWeek: 1799,
    available: true
  },
  {
    id: 9,
    name: "Porsche Taycan",
    category: "Luxury Sports",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    description: "High-performance electric sports car with exceptional handling and acceleration.",
    passengers: 4,
    range: "484 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "800V architecture", "Adaptive air suspension", "Performance Battery Plus"],
    co2Saved: "4.7 tons per year",
    energySource: "100% Electric",
    pricePerDay: 399,
    pricePerWeek: 2399,
    available: true
  },
  {
    id: 10,
    name: "Jaguar I-PACE",
    category: "Electric SUV",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
    description: "Award-winning electric SUV with distinctive design and sporty handling.",
    passengers: 5,
    range: "470 km",
    emissions: "0 g/km CO₂",
    efficiency: "A+",
    features: ["Zero emissions", "Meridian sound system", "Air suspension", "Head-up display"],
    co2Saved: "4.3 tons per year",
    energySource: "100% Electric",
    pricePerDay: 319,
    pricePerWeek: 1919,
    available: false
  }
];

// Environmental impact statistics
export const environmentalStats: EnvironmentalStat[] = [
  {
    title: "CO₂ Reduction",
    value: "1,250",
    unit: "tons",
    description: "Annual CO₂ emissions saved by our eco-friendly fleet"
  },
  {
    title: "Renewable Energy",
    value: "85",
    unit: "%",
    description: "Percentage of our fleet powered by renewable energy sources"
  },
  {
    title: "Trees Equivalent",
    value: "62,500",
    unit: "trees",
    description: "Equivalent number of trees needed to absorb the same amount of CO₂"
  },
  {
    title: "Fuel Saved",
    value: "425,000",
    unit: "liters",
    description: "Annual fossil fuel saved compared to conventional vehicles"
  }
];