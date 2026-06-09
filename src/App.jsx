import { useState } from "react";

const laptops = [
  {
    id: 1,
    name: "ASUS ROG Zephyrus G16",
    model: "ROG-G16-2024",
    price: 2499,
    image: "https://dlcdnwebimgs.asus.com/gain/b5bae2ee-8a3b-411a-b7f3-c9e8c4765a26/w800",
    condition: "Like New",
    specs: [
      { label: "Processor", value: "Intel Core i9-14900HX" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "2TB NVMe SSD" },
      { label: "Graphics", value: "NVIDIA RTX 4090" },
      { label: "Display", value: '16" QHD+ OLED 240Hz' },
      { label: "Battery", value: "90Wh, up to 10 hrs" },
      { label: "Condition", value: "Like New" },
    ],
    seller: { name: "Tariq Mahmood", location: "Karachi, DHA Phase 6", rating: 4.9, reviews: 127, responseTime: "Replies in ~15 min", member: "2019" },
  },
  {
    id: 2,
    name: "Apple MacBook Pro 14",
    model: "MBP-14-M3PRO",
    price: 1999,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-m3-pro-max-spaceb-select-202310?wid=800&hei=600&fmt=jpeg&qlt=90",
    condition: "Used",
    specs: [
      { label: "Processor", value: "Apple M3 Pro" },
      { label: "RAM", value: "18GB Unified" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Graphics", value: "18-core GPU" },
      { label: "Display", value: '14" Liquid Retina XDR' },
      { label: "Battery", value: "70Wh, up to 18 hrs" },
      { label: "Condition", value: "Used - Good" },
    ],
    seller: { name: "Sara Ahmed", location: "Lahore, Gulberg", rating: 4.7, reviews: 89, responseTime: "Replies in ~30 min", member: "2021" },
  },
  {
    id: 3,
    name: "Dell XPS 15",
    model: "XPS-15-9530",
    price: 1799,
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-black-gallery-1.psd?fmt=jpg&wid=800",
    condition: "Like New",
    specs: [
      { label: "Processor", value: "Intel Core i7-13700H" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Graphics", value: "NVIDIA RTX 4060" },
      { label: "Display", value: '15.6" OLED Touch' },
      { label: "Battery", value: "86Wh, up to 12 hrs" },
      { label: "Condition", value: "Like New" },
    ],
    seller: { name: "Bilal Khan", location: "Islamabad, F-7", rating: 4.8, reviews: 54, responseTime: "Replies in ~1 hr", member: "2020" },
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon",
    model: "X1C-GEN11",
    price: 1299,
    image:"https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen11-14-hero.png?context=bWFzdGVyfHJvb3R8MjMwNzAxfGltYWdlL3BuZ3w&w=800",
    condition: "Used",
    specs: [
      { label: "Processor", value: "Intel Core i7-1365U" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Graphics", value: "Intel Iris Xe" },
      { label: "Display", value: '14" IPS Anti-glare' },
      { label: "Battery", value: "57Wh, up to 15 hrs" },
      { label: "Condition", value: "Used - Good" },
    ],
    seller: { name: "Usman Ali", location: "Rawalpindi, Bahria", rating: 4.6, reviews: 33, responseTime: "Replies in ~2 hrs", member: "2022" },
  },
  {
    id: 5,
    name: "HP Spectre x360",
    model: "SPECTRE-X360-14",
    price: 1499,
    image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/knowledgebase/c08292444.png",
    condition: "Like New",
    specs: [
      { label: "Processor", value: "Intel Core i7-1355U" },
      { label: "RAM", value: "16GB LPDDR4x" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Graphics", value: "Intel Iris Xe" },
      { label: "Display", value: '13.5" OLED Touch 2.8K' },
      { label: "Battery", value: "66Wh, up to 17 hrs" },
      { label: "Condition", value: "Like New" },
    ],
    seller: { name: "Ayesha Noor", location: "Karachi, Clifton", rating: 5.0, reviews: 210, responseTime: "Replies in ~10 min", member: "2018" },
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    model: "SURFACE-L5-15",
    price: 1199,
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW13hZo?ver=2d3a&w=800",
    condition: "Used",
    specs: [
      { label: "Processor", value: "Intel Core i5-1245U" },
      { label: "RAM", value: "8GB LPDDR5x" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Graphics", value: "Intel Iris Xe" },
      { label: "Display", value: '15" PixelSense Touch' },
      { label: "Battery", value: "58Wh, up to 18 hrs" },
      { label: "Condition", value: "Used - Fair" },
    ],
    seller: { name: "Hamza Sheikh", location: "Lahore, DHA", rating: 4.5, reviews: 41, responseTime: "Replies in ~45 min", member: "2021" },
  },
];


function ProductCard({ laptop }) {
  const [showDetail, setShowDetail] = useState(false);
  const [contacted, setContacted] = useState(false);

  return (
    <div style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", marginBottom: 24 }}>

      
      <img
        src={laptop.image}
        alt={laptop.name}
        style={{ width: "100%", height: 220, objectFit: "cover" }}
      />

     
      <div style={{ padding: "16px 16px 12px" }}>
        <span style={{ background: laptop.condition === "Like New" ? "#e8f5e9" : "#fff3e0", color: laptop.condition === "Like New" ? "#2e7d32" : "#e65100", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>
          {laptop.condition}
        </span>
        <h2 style={{ fontSize: 18, margin: "8px 0 2px" }}>{laptop.name}</h2>
        <p style={{ color: "#999", fontSize: 13, margin: "0 0 8px" }}>Model: {laptop.model}</p>
        <p style={{ fontSize: 24, fontWeight: "bold", color: "#1a1a1a", margin: 0 }}>
          ${laptop.price.toLocaleString()}
        </p>
      </div>

    
      <div style={{ padding: "0 16px 12px" }}>
        <button
          onClick={() => setShowDetail(!showDetail)}
          style={{
            width: "100%", padding: 11,
            background: showDetail ? "#f5f5f5" : "#1a1a1a",
            color: showDetail ? "#333" : "white",
            border: "none", borderRadius: 8,
            fontSize: 13, cursor: "pointer",
          }}
        >
          {showDetail ? "Hide Details ▲" : "View Product Details ▼"}
        </button>
      </div>

     
      {showDetail && (
        <div style={{ padding: "0 16px 16px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <tbody>
              {laptop.specs.map((s) => (
                <tr key={s.label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "9px 0", color: "#888", width: "45%" }}>{s.label}</td>
                  <td style={{ padding: "9px 0", fontWeight: 500 }}>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

     
      <div style={{ height: 1, background: "#f0f0f0", margin: "0 16px" }} />

      {/* 5. SELLER INFO */}
      <div style={{ padding: 16 }}>
        <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: 1 }}>Seller</p>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "#1a1a1a", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: "bold", flexShrink: 0,
          }}>
            {laptop.seller.name[0]}
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{laptop.seller.name}</p>
            <p style={{ margin: 0, color: "#999", fontSize: 12 }}>Member since {laptop.seller.member}</p>
          </div>
        </div>

        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#555" }}>📍 {laptop.seller.location}</p>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#555" }}>⭐ {laptop.seller.rating} / 5 ({laptop.seller.reviews} reviews)</p>
        <p style={{ margin: "0 0 14px", fontSize: 13, color: "#555" }}>⏱ {laptop.seller.responseTime}</p>

        <button
          onClick={() => setContacted(true)}
          style={{
            width: "100%", padding: 12,
            background: contacted ? "#4CAF50" : "#1a1a1a",
            color: "white", border: "none",
            borderRadius: 8, fontSize: 14, cursor: "pointer",
          }}
        >
          {contacted ? "✓ Message Sent!" : "Contact Seller"}
        </button>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "20px 16px" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, margin: "0 0 4px" }}>💻 Laptop Store</h1>
        <p style={{ color: "#888", fontSize: 14, margin: 0 }}>{laptops.length} laptops available</p>
      </div>

   
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        {laptops.map((laptop) => (
          <ProductCard key={laptop.id} laptop={laptop} />
        ))}
      </div>

    </div>
  );
}
