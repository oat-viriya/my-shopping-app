import "server-only";
import { Product } from "@/types/products";

export const productsData: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 16 Pro Max",
    desc: "สมารท์ โฟนเรอื ธงหนา้จอ 6.9 นวชปิ A18 Pro กลอ้ ง 48MP",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NUhYUVRUSGZPT1hLZHJnb1RKSTNPSXdybW9LbS85Y2RJV0dJVlFIampKakswekI5ZWpRa0o2WWdVYzdzTUdBdFhrelNkd0hWUUlHbG91OUp5N01PcWE&traceId=1",
    price: 48900,
    rating: {
      rate: 4.9,
      count: 1580,
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    desc: "มอื ถอื รนุ่ ท็อป กลอ้ ง 200MP จอ AMOLED 6.8 นวิ",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/th/2401/gallery/th-galaxy-s24-s928-sm-s928bzkqthl-539305548?$684_547_PNG$",
    price: 45900,
    rating: {
      rate: 4.8,
      count: 1332,
    },
  },
  {
    id: 3,
    name: "MacBook Air M3 13-inch",
    desc: "โนต้ บกุ๊ รนุ่ ลา่ สดุ จาก Apple ชปิ M3 บางเบา พกพางา่ ย",
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbookair-og-202402?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1707414684423",
    price: 42900,
    rating: {
      rate: 4.7,
      count: 820,
    },
  },
  {
    id: 4,
    name: "iPad Pro M4 11-inch",
    desc: "แท็บเล็ตประสทิ ธภิ าพสงู ชปิ M4 หนา้จอ OLED ใหมล่ า่ สดุ ",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWR23TH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1714066781765",
    price: 34900,
    rating: {
      rate: 4.6,
      count: 540,
    },
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    desc: "หฟู ังไรส้ ายตดั เสยี งรบกวนอนั ดบั 1 จาก Sony",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_504x441_v3_converted.webp",
    price: 13990,
    rating: {
      rate: 4.8,
      count: 2010,
    },
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G16 (2024)",
    desc: "โนต้ บคุ๊ เกมมงบางเบา จอ OLED Intel Core Ultra 9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrUgybxgidQB323WBkaB1NL487WF3DjGd4g&s",
    price: 69990,
    rating: {
      rate: 4.7,
      count: 412,
    },
  },
  {
    id: 7,
    name: "Google Pixel 8 Pro",
    desc: "สมารท์ โฟน Pure Android ชปิ Tensor G3 กลอ้ งคณุ ภาพเยยม",
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_8_Pro_in_Porcelain.max-936x936.format-webp.webp",
    price: 38900,
    rating: {
      rate: 4.6,
      count: 1280,
    },
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    desc: "สมารท์ วอทชอ์ จัฉรยิ ะ ตรวจจับสขุ ภาพ พรอ้ มฟีเจอรใ์หม่ Double Tap",
    image:
      "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
    price: 15900,
    rating: {
      rate: 4.7,
      count: 720,
    },
  },
  {
    id: 9,
    name: "Bose QuietComfort Ultra",
    desc: "หฟู ังไรส้ ายเกบ็ เสยี งดเียยม เสยี งคมชดั เบสแน่น",
    image:
      "https://www.istudio.store/cdn/shop/files/BoseQuietcomfortUltraHeadphones-White.001.jpg?v=1716191339&width=823",
    price: 12900,
    rating: {
      rate: 4.6,
      count: 310,
    },
  },
  {
    id: 10,
    name: "Nintendo Switch OLED",
    desc: "เครองเลน่ เกมพกพา หนา้จอ OLED สสี ด เลน่ เกมไดท้ กุ ท",
    image:
      "https://media.education.studio7thailand.com/70617/Nintendo-Switch-H-Oled-Console-White-1-square_medium.jpg",
    price: 13490,
    rating: {
      rate: 4.9,
      count: 2730,
    },
  },
];
