import { create } from "zustand";

const useProuctStore = create((set)=>({
    products : [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        },
        "slug": "fjallraven-foldsack-no-1-backpack"
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        },
        "slug": "mens-casual-premium-slim-fit-t-shirts"
      },
      {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        },
        "slug": "mens-cotton-jacket"
      },
      {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.1,
          "count": 430
        },
        "slug": "mens-casual-slim-fit"
      },
      {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        },
        "slug": "john-hardy-legends-naga-bracelet"
      },
      {
        "id": 6,
        "title": "Solid Gold Petite Micropave",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 70
        },
        "slug": "solid-gold-petite-micropave"
      },
      {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3,
          "count": 400
        },
        "slug": "white-gold-plated-princess-ring"
      },
      {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 1.9,
          "count": 100
        },
        "slug": "pierced-owl-rose-gold-plated-earrings"
      },
      {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
          "rate": 3.3,
          "count": 203
        },
        "slug": "wd-2tb-elements-portable-external-hard-drive"
      },
      {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 470
        },
        "slug": "sandisk-ssd-plus-1tb"
      },
      {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 319
        },
        "slug": "silicon-power-256gb-ssd-3d-nand"
      },
      {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 400
        },
        "slug": "wd-4tb-gaming-drive-ps4"
      },
      {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21.5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        },
        "slug": "acer-sb220q-full-hd-ips-monitor"
      },
      {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR SAMSUNG'S LARGEST 49 INCH CURVED SCREEN delivers an immersive gaming experience, with the 32:9 aspect ratio, providing a panoramic screen. Quantum Dot (QLED) technology, HDR support and factory calibration provides stunningly realistic and accurate color and contrast.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.2,
          "count": 140
        },
        "slug": "samsung-49-inch-chg90-curved-gaming-monitor"
      },
      {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Waterproof, Windproof, durable and stain repellent.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
          "rate": 2.6,
          "count": 235
        },
        "slug": "biylaclesen-womens-snowboard-jacket"
      },
      {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE (shell) 100% POLYESTER (lining) Detachable hood with adjustable drawstring, 2 front zipper pockets, quilted shoulders, and front zipper closure. Perfect for everyday wear.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 2.9,
          "count": 340
        },
        "slug": "lock-love-womens-faux-leather-jacket"
      },
      {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfect for trip or casual wear—long sleeve with hooded, adjustable drawstring waist design. Two big front pockets to keep your hands warm or items secure.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71Z2pM8DIKL._AC_UX679_.jpg",
        "rating": {
          "rate": 3.8,
          "count": 679
        },
        "slug": "rain-jacket-women-striped-climbing-raincoats"
      },
      {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX; Made in USA or Imported. Do Not Bleach. Lightweight fabric, flattering fit, available in various colors.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        },
        "slug": "mbj-womens-solid-boat-neck-v"
      },
      {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester; Machine washable, soft moisture-wicking fabric with a soft feel, dries quickly, perfect for workout or everyday wear.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 146
        },
        "slug": "opna-womens-moisture-short-sleeve"
      },
      {
        "id": 20,
        "title": "DANVOUY Women's T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Made of premium quality cotton, lightweight, and comfortable for everyday wear.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
          "rate": 3.6,
          "count": 145
        },
        "slug": "danvouy-womens-tshirt-casual"
      },
      {
        "id": 21,
        "title": "Timex Men's Expedition Scout",
        "price": 49.99,
        "description": "With a durable leather strap and classic design, this watch is water-resistant and has an easy-to-read dial with a date window. Perfect for outdoor adventures.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71IqfHXs5sL._AC_UL640_QL65_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 203
        },
        "slug": "timex-mens-expedition-scout"
      },
      {
        "id": 22,
        "title": "Casio Men's 'G-Shock' Quartz Resin Watch",
        "price": 69.99,
        "description": "Shock-resistant watch featuring an LED light, countdown timer, and 200-meter water resistance. Ideal for rugged adventures.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/51VQ3D5X1UL._AC_UL640_QL65_.jpg",
        "rating": {
          "rate": 4.9,
          "count": 280
        },
        "slug": "casio-mens-g-shock-quartz-watch"
      },
      {
        "id": 23,
        "title": "Ray-Ban Men's Square Sunglasses",
        "price": 139.99,
        "description": "Timeless design, crafted for durable wear and providing 100% UV protection. Perfect for any outdoor activity with a stylish look.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71tqmmVdz9L._AC_UL640_QL65_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 325
        },
        "slug": "ray-ban-mens-square-sunglasses"
      },
      {
        "id": 24,
        "title": "Nike Men's Running Shoes",
        "price": 89.99,
        "description": "Breathable mesh fabric, cushioned sole for maximum comfort, and a durable design. Ideal for running and other athletic activities.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/61ZPQ7oQIrL._AC_UL640_QL65_.jpg",
        "rating": {
          "rate": 4.3,
          "count": 230
        },
        "slug": "nike-mens-running-shoes"
      },
      {
        "id": 25,
        "title": "Adidas Originals Men's Stan Smith Shoes",
        "price": 74.99,
        "description": "Classic design with a rubber sole and leather upper for durability and style. Perfect for casual or athletic wear.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71tH-9V-kgL._AC_UL640_QL65_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        },
        "slug": "adidas-originals-mens-stan-smith-shoes"
      }

    ]
    
}));


export default useProuctStore;