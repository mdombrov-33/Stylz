const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const allowedOrigins = ["http://localhost:5173", "https://stylzmc.netlify.app"];

// Configure CORS to allow only specific origins
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Serve static images
app.use("/images", express.static("public/images"));

// Function to load nanoid dynamically
const getNanoid = async () => {
  const { nanoid } = await import("nanoid"); // Dynamic import
  return nanoid;
};

(async () => {
  // Use nanoid
  const nanoid = await getNanoid();

  // Mock data with generated IDs using nanoid
  const newItems = [
    {
      id: nanoid(),
      name: "Brushed Houndstooth Hendrik Overcoat",
      sizes: ["S", "M", "L", "XL"],
      category: "coats",
      price: 249.99,
      gender: "men",
      description:
        "This classically-cut overcoat wears like a tailored suit. Two pockets on the exterior and two more on the interior of the coat make for lots of storage to wear this out for the day and have everything you could ever need. The coat is also cut with extra room to fit comfortably over a suit, with a beautiful gray virgin wool to complement anything underneath it.",
      image: "images/new/brushed-houndstooth-overcoat.jpg",
      altImage: "images/new/brushed-houndstooth-overcoat-hover.jpg",
      altImage2: "images/new/brushed-houndstooth-overcoat-2.jpg",
      altImage3: "images/new/brushed-houndstooth-overcoat-3.jpg",
    },
    {
      id: nanoid(),
      name: "Ronnie Turtleneck",
      sizes: ["M", "L", "XL"],
      category: "sweaters",
      price: 89.99,
      gender: "men",
      description:
        "At the core of every winter wardrobe is a great turtleneck. The Ronnie Turtleneck is ours. It’s made from soft Italian cashmere wool, and features textured ribs at the sleeve, neck, and bottom, so make sure that the sweater highlights your best features while wearing it.",
      image: "images/new/ronnie-turtleneck.jpg",
      altImage: "images/new/ronnie-turtleneck-hover.jpg",
      altImage2: "images/new/ronnie-turtleneck-2.jpg",
      altImage3: "images/new/ronnie-turtleneck-3.jpg",
    },
    {
      id: nanoid(),
      name: "Classic Moto",
      sizes: ["S", "M"],
      category: "jackets",
      price: 149.99,
      gender: "women",
      description:
        "An archival style from over a decade ago - the Classic Moto is an iconic, customer-favorite piece. It’s crafted from soft and supple, washed lambskin that gets better with wear and is finished with luxe details like antique brass closures and zippers. Perfect with your favorite worn-in jeans or over a drapey dress - there is no wrong way to wear a leather jacket.",
      image: "images/new/classic-moto.jpg",
      altImage: "images/new/classic-moto-hover.jpg",
      altImage2: "images/new/classic-moto-2.jpg",
      altImage3: "images/new/classic-moto-3.jpg",
    },
    {
      id: nanoid(),
      name: "Twill Moleskin Flat Front Trouser",
      sizes: ["S", "M", "L", "XL"],
      category: "pants",
      price: 149.99,
      gender: "men",
      description:
        "These sleek trousers feel as comfortable as our iconic moleskin jean, with the sophisticated cut of a trouser pant. It’s a fabric update on our other icon, the flat front trouser, made with a fabric that will only get better with age. With an option in black and oak brown, the pants are made to suit a variety of wardrobe choices from suit separates to being paired with a polished-looking sweater.",
      image: "images/new/twill-moleskin-trouser.jpg",
      altImage: "images/new/twill-moleskin-trouser-hover.jpg",
      altImage2: "images/new/twill-moleskin-trouser-2.jpg",
      altImage3: "images/new/twill-moleskin-trouser-3.jpg",
    },
    {
      id: nanoid(),
      name: "Abstract Ribbon Cardigan",
      sizes: ["S", "M", "L"],
      category: "sweaters",
      price: 119.99,
      gender: "men",
      description:
        "The Abstract Ribbon Cardigan is a modern take on the classic cardigan. The ribbons are woven into the fabric, creating a unique texture that is both visually interesting and soft to the touch. The cardigan is made from a blend of wool and cashmere, making it warm and comfortable to wear.",
      image: "images/new/abstract-ribbon-cardigan.jpg",
      altImage: "images/new/abstract-ribbon-cardigan-hover.jpg",
      altImage2: "images/new/abstract-ribbon-cardigan-2.jpg",
      altImage3: "images/new/abstract-ribbon-cardigan-3.jpg",
    },
    {
      id: nanoid(),
      name: "Flat Front Trouser",
      sizes: ["S", "M", "L"],
      category: "pants",
      price: 129.99,
      gender: "women",
      description:
        "The Flat Front Trouser is a classic, tailored pant that is perfect for any occasion. The pant is made from a soft, stretchy fabric that is comfortable to wear all day long. The pant features a flat front, side pockets, and a straight leg that is flattering on all body types. The pant is available in a range of colors, and is perfect for both casual and formal occasions.",
      image: "images/new/flat-front-trouser.jpg",
      altImage: "images/new/flat-front-trouser-hover.jpg",
      altImage2: "images/new/flat-front-trouser-2.jpg",
      altImage3: "images/new/flat-front-trouser-3.jpg",
    },
    {
      id: nanoid(),
      name: "Plaid Zip Sweater",
      sizes: ["S", "M", "L", "XL"],
      category: "sweaters",
      price: 99.99,
      gender: "men",
      description:
        "This patterned, zip-up sweater is meant to be the one you reach for all through the winter season. With a subtle, dark plaid, and cord zipper pull, it’s easy to get on and off. The fabric is a mix of cotton and alpaca yarn, to make sure that the garment is warm, but always soft on the skin.",
      image: "images/new/plaid-zip-sweater.jpg",
      altImage: "images/new/plaid-zip-sweater-hover.jpg",
      altImage2: "images/new/plaid-zip-sweater-2.jpg",
      altImage3: "images/new/plaid-zip-sweater-3.jpg",
    },
    {
      id: nanoid(),
      name: "Oak Street x Billy Reid Trench Boot",
      sizes: ["8", "9", "10", "11"],
      category: "shoes",
      price: 299.99,
      gender: "men",
      description:
        "The Oak Street x Billy Reid Trench Boot is a collaboration between two American brands known for their quality and craftsmanship. The boot is made from Horween Chromexcel leather, and features a Goodyear welt construction, making it durable and long-lasting. The boot is handcrafted in the USA, and is available in both black and brown.",
      image: "images/new/oak-street-trench-boot.jpg",
      altImage: "images/new/oak-street-trench-boot-hover.jpg",
      altImage2: "images/new/oak-street-trench-boot-2.jpg",
      altImage3: "images/new/oak-street-trench-boot-3.jpg",
    },
    {
      id: nanoid(),
      name: "Melange Yellowhammer Tuscumbia Shirt Button-Down",
      sizes: ["S", "M", "L", "XL"],
      category: "shirts",
      price: 79.99,
      gender: "men",
      description:
        "The Melange Yellowhammer Tuscumbia Shirt Button-Down is a classic button-down shirt with a modern twist. The shirt is made from a soft, melange cotton fabric, and features a button-down collar and a chest pocket. The shirt is available in a range of colors, and is perfect for both casual and formal occasions.",
      image: "images/new/melange-yellowhammer-shirt.jpg",
      altImage: "images/new/melange-yellowhammer-shirt-hover.jpg",
      altImage2: "images/new/melange-yellowhammer-shirt-2.jpg",
      altImage3: "images/new/melange-yellowhammer-shirt-3.jpg",
    },
    {
      id: nanoid(),
      name: "Corded Plaid Tuscumbia Shirt Button Down",
      sizes: ["S", "M", "L", "XL"],
      category: "shirts",
      price: 159.99,
      gender: "men",
      description:
        "Our best-selling Tuscumbia shirt is the cornerstone of lived-in luxury. This version is cut in a standard fit, providing ease of movement and ultimate comfort. It’s 100% cotton, but with a brushed finish to the exterior giving it a little more weight and a super soft feel.  It's constructed with a button-down collar, barrel cuffs, and a tonal thread throughout the body. Thoughtfully finished with smoke mother of pearl buttons, a left-side chest pocket, and a subtle detail: our heirloom ribbon applied to the bottom of the under-placket.",
      image: "images/new/corded-plaid-shirt.jpg",
      altImage: "images/new/corded-plaid-shirt-hover.jpg",
      altImage2: "images/new/corded-plaid-shirt-2.jpg",
      altImage3: "images/new/corded-plaid-shirt-3.jpg",
    },
  ];
  ////////////////////////////////////////
  const catalogItems = [
    {
      id: nanoid(),
      name: "Brushed Houndstooth  Overcoat",
      sizes: ["S", "M", "L", "XL"],
      category: "coats",
      price: 249.99,
      isAvailable: true,
      gender: "men",
      description:
        "This classically-cut overcoat wears like a tailored suit. Two pockets on the exterior and two more on the interior of the coat make for lots of storage to wear this out for the day and have everything you could ever need. The coat is also cut with extra room to fit comfortably over a suit, with a beautiful gray virgin wool to complement anything underneath it.",
      image: "images/new/brushed-houndstooth-overcoat.jpg",
      altImage: "images/new/brushed-houndstooth-overcoat-hover.jpg",
      altImage2: "images/new/brushed-houndstooth-overcoat-2.jpg",
      altImage3: "images/new/brushed-houndstooth-overcoat-3.jpg",
    },
    {
      id: nanoid(),
      name: "Ronnie Turtleneck",
      sizes: ["M", "L", "XL"],
      category: "sweaters",
      price: 89.99,
      gender: "men",
      isAvailable: true,
      description:
        "At the core of every winter wardrobe is a great turtleneck. The Ronnie Turtleneck is ours. It’s made from soft Italian cashmere wool, and features textured ribs at the sleeve, neck, and bottom, so make sure that the sweater highlights your best features while wearing it.",
      image: "images/new/ronnie-turtleneck.jpg",
      altImage: "images/new/ronnie-turtleneck-hover.jpg",
      altImage2: "images/new/ronnie-turtleneck-2.jpg",
      altImage3: "images/new/ronnie-turtleneck-3.jpg",
    },
    {
      id: nanoid(),
      name: "Classic Moto",
      sizes: ["S", "M"],
      category: "jackets",
      price: 149.99,
      isAvailable: true,
      gender: "women",
      description:
        "An archival style from over a decade ago - the Classic Moto is an iconic, customer-favorite piece. It’s crafted from soft and supple, washed lambskin that gets better with wear and is finished with luxe details like antique brass closures and zippers. Perfect with your favorite worn-in jeans or over a drapey dress - there is no wrong way to wear a leather jacket.",
      image: "images/new/classic-moto.jpg",
      altImage: "images/new/classic-moto-hover.jpg",
      altImage2: "images/new/classic-moto-2.jpg",
      altImage3: "images/new/classic-moto-3.jpg",
    },
    {
      id: nanoid(),
      name: "Twill Moleskin Flat Front Trouser",
      sizes: ["S", "M", "L", "XL"],
      category: "pants",
      price: 149.99,
      isAvailable: true,
      gender: "men",
      description:
        "These sleek trousers feel as comfortable as our iconic moleskin jean, with the sophisticated cut of a trouser pant. It’s a fabric update on our other icon, the flat front trouser, made with a fabric that will only get better with age. With an option in black and oak brown, the pants are made to suit a variety of wardrobe choices from suit separates to being paired with a polished-looking sweater.",
      image: "images/new/twill-moleskin-trouser.jpg",
      altImage: "images/new/twill-moleskin-trouser-hover.jpg",
      altImage2: "images/new/twill-moleskin-trouser-2.jpg",
      altImage3: "images/new/twill-moleskin-trouser-3.jpg",
    },
    {
      id: nanoid(),
      name: "Abstract Ribbon Cardigan",
      sizes: ["S", "M", "L"],
      category: "sweaters",
      price: 119.99,
      isAvailable: true,
      gender: "men",
      description:
        "The Abstract Ribbon Cardigan is a modern take on the classic cardigan. The ribbons are woven into the fabric, creating a unique texture that is both visually interesting and soft to the touch. The cardigan is made from a blend of wool and cashmere, making it warm and comfortable to wear.",
      image: "images/new/abstract-ribbon-cardigan.jpg",
      altImage: "images/new/abstract-ribbon-cardigan-hover.jpg",
      altImage2: "images/new/abstract-ribbon-cardigan-2.jpg",
      altImage3: "images/new/abstract-ribbon-cardigan-3.jpg",
    },
    {
      id: nanoid(),
      name: "Flat Front Trouser",
      sizes: ["S", "M", "L"],
      category: "pants",
      price: 129.99,
      isAvailable: true,
      gender: "women",
      description:
        "The Flat Front Trouser is a classic, tailored pant that is perfect for any occasion. The pant is made from a soft, stretchy fabric that is comfortable to wear all day long. The pant features a flat front, side pockets, and a straight leg that is flattering on all body types. The pant is available in a range of colors, and is perfect for both casual and formal occasions.",
      image: "images/new/flat-front-trouser.jpg",
      altImage: "images/new/flat-front-trouser-hover.jpg",
      altImage2: "images/new/flat-front-trouser-2.jpg",
      altImage3: "images/new/flat-front-trouser-3.jpg",
    },
    {
      id: nanoid(),
      name: "Plaid Zip Sweater",
      sizes: ["S", "M", "L", "XL"],
      category: "sweaters",
      price: 99.99,
      isAvailable: true,
      gender: "men",
      description:
        "This patterned, zip-up sweater is meant to be the one you reach for all through the winter season. With a subtle, dark plaid, and cord zipper pull, it’s easy to get on and off. The fabric is a mix of cotton and alpaca yarn, to make sure that the garment is warm, but always soft on the skin.",
      image: "images/new/plaid-zip-sweater.jpg",
      altImage: "images/new/plaid-zip-sweater-hover.jpg",
      altImage2: "images/new/plaid-zip-sweater-2.jpg",
      altImage3: "images/new/plaid-zip-sweater-3.jpg",
    },
    {
      id: nanoid(),
      name: "Oak Street x Billy Reid Trench Boot",
      sizes: ["8", "9", "10", "11"],
      category: "shoes",
      isAvailable: true,
      price: 299.99,
      gender: "men",
      description:
        "The Oak Street x Billy Reid Trench Boot is a collaboration between two American brands known for their quality and craftsmanship. The boot is made from Horween Chromexcel leather, and features a Goodyear welt construction, making it durable and long-lasting. The boot is handcrafted in the USA, and is available in both black and brown.",
      image: "images/new/oak-street-trench-boot.jpg",
      altImage: "images/new/oak-street-trench-boot-hover.jpg",
      altImage2: "images/new/oak-street-trench-boot-2.jpg",
      altImage3: "images/new/oak-street-trench-boot-3.jpg",
    },
    {
      id: nanoid(),
      name: "Melange Yellowhammer Tuscumbia Shirt Button-Down",
      sizes: ["S", "M", "L", "XL"],
      category: "shirts",
      isAvailable: true,
      price: 79.99,
      gender: "men",
      description:
        "The Melange Yellowhammer Tuscumbia Shirt Button-Down is a classic button-down shirt with a modern twist. The shirt is made from a soft, melange cotton fabric, and features a button-down collar and a chest pocket. The shirt is available in a range of colors, and is perfect for both casual and formal occasions.",
      image: "images/new/melange-yellowhammer-shirt.jpg",
      altImage: "images/new/melange-yellowhammer-shirt-hover.jpg",
      altImage2: "images/new/melange-yellowhammer-shirt-2.jpg",
      altImage3: "images/new/melange-yellowhammer-shirt-3.jpg",
    },
    {
      id: nanoid(),
      name: "Corded Plaid Tuscumbia Shirt Button Down",
      sizes: ["S", "M", "L", "XL"],
      category: "shirts",
      isAvailable: true,
      price: 159.99,
      gender: "men",
      description:
        "Our best-selling Tuscumbia shirt is the cornerstone of lived-in luxury. This version is cut in a standard fit, providing ease of movement and ultimate comfort. It’s 100% cotton, but with a brushed finish to the exterior giving it a little more weight and a super soft feel.  It's constructed with a button-down collar, barrel cuffs, and a tonal thread throughout the body. Thoughtfully finished with smoke mother of pearl buttons, a left-side chest pocket, and a subtle detail: our heirloom ribbon applied to the bottom of the under-placket.",
      image: "images/new/corded-plaid-shirt.jpg",
      altImage: "images/new/corded-plaid-shirt-hover.jpg",
      altImage2: "images/new/corded-plaid-shirt-2.jpg",
      altImage3: "images/new/corded-plaid-shirt-3.jpg",
    },
    ////////////////////
    {
      id: nanoid(),
      name: "Leather Flight Jacket with Shearling Collar",
      sizes: ["S", "M", "L", "XL"],
      category: "jackets",
      isAvailable: true,
      price: 499.99,
      gender: "men",
      description:
        "This classic leather flight jacket is made from premium cowhide leather and features a shearling collar. The jacket is lined with a quilted polyester lining for added warmth and comfort. It has two front pockets and a zippered chest pocket for storage. The jacket is available in black and brown.",
      image: "images/catalog/leather-flight-jacket.jpg",
      altImage: "images/catalog/leather-flight-jacket-hover.jpg",
      altImage2: "images/catalog/leather-flight-jacket-2.jpg",
      altImage3: "images/catalog/leather-flight-jacket-3.jpg",
    },
    {
      id: nanoid(),
      name: "Tiger Sweater",
      sizes: ["S", "M", "L"],
      category: "sweaters",
      isAvailable: true,
      price: 99.99,
      gender: "women",
      description:
        "This cozy sweater features a tiger graphic on the front and is made from a soft, stretchy fabric. It has a crew neck and long sleeves. The sweater is available in a range of sizes and colors.",
      image: "images/catalog/tiger-sweater.jpg",
      altImage: "images/catalog/tiger-sweater-hover.jpg",
      altImage2: "images/catalog/tiger-sweater-2.jpg",
      altImage3: "images/catalog/tiger-sweater-3.jpg",
    },
    {
      id: nanoid(),
      name: "Wide Leg Pant",
      sizes: ["S", "M", "L", "XL"],
      category: "pants",
      isAvailable: false,
      price: 79.99,
      gender: "women",
      description:
        "These wide-leg pants are made from a soft, stretchy fabric and feature a high waist and wide legs. They have a zip fly and button closure and are available in a range of sizes and colors.",
      image: "images/catalog/wide-leg-pant.jpg",
      altImage: "images/catalog/wide-leg-pant-hover.jpg",
      altImage2: "images/catalog/wide-leg-pant-2.jpg",
      altImage3: "images/catalog/wide-leg-pant-3.jpg",
    },
    {
      id: nanoid(),
      name: "Long Sleeve Tuck Terry Crew",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "shirts",
      isAvailable: true,
      price: 49.99,
      gender: "men",
      description:
        "This long sleeve tuck terry crew is made from 100% cotton and features a crew neck and long sleeves. It has a relaxed fit and is available in a range of sizes and colors.",
      image: "images/catalog/long-sleeve-crew.jpg",
      altImage: "images/catalog/long-sleeve-crew-hover.jpg",
      altImage2: "images/catalog/long-sleeve-crew-2.jpg",
      altImage3: "images/catalog/long-sleeve-crew-3.jpg",
    },
    {
      id: nanoid(),
      name: "Baffle Shirt Jacket",
      sizes: ["S", "M", "L", "XL"],
      category: "jackets",
      isAvailable: false,
      price: 129.99,
      gender: "men",
      description:
        "This baffle shirt jacket is made from a soft, stretchy fabric and features a button front and long sleeves. It has a relaxed fit and is available in a range of sizes and colors.",
      image: "images/catalog/baffle-shirt-jacket.jpg",
      altImage: "images/catalog/baffle-shirt-jacket-hover.jpg",
      altImage2: "images/catalog/baffle-shirt-jacket-2.jpg",
      altImage3: "images/catalog/baffle-shirt-jacket-3.jpg",
    },
    {
      id: nanoid(),
      name: "Citizens Of Humanity Isola Straight Crop (Splendor)",
      sizes: ["XS", "S", "M", "L"],
      category: "pants",
      isAvailable: true,
      gender: "women",
      price: 249.99,
      description:
        "These straight crop jeans are made from a soft, stretchy fabric and feature a high waist and straight legs. They have a zip fly and button closure and are available in a range of sizes and colors.",
      image: "images/catalog/citizens-of-humanity-jeans.jpg",
      altImage: "images/catalog/citizens-of-humanity-jeans-hover.jpg",
      altImage2: "images/catalog/citizens-of-humanity-jeans-2.jpg",
      altImage3: "images/catalog/citizens-of-humanity-jeans-3.jpg",
    },
  ];

  app.get("/api/new", (req, res) => {
    res.json(newItems);
  });

  // API endpoint to get the catalog items with pagination
  app.get("/api/catalog", (req, res) => {
    const { page = 1, limit = 10, category, gender } = req.query;

    // Convert to numbers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 12);

    // Validate page and limit
    if (pageNumber < 1 || limitNumber < 1) {
      return res
        .status(400)
        .json({ error: "Page and limit must be greater than 0." });
    }

    let filteredItems = catalogItems;

    // Filter by category
    if (category) {
      filteredItems = catalogItems.filter((item) => item.category === category);
    }

    if (gender) {
      filteredItems = filteredItems.filter((item) => item.gender === gender);
    }

    // Calculate start index and end index for slicing the items
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = startIndex + limitNumber;

    // Get paginated items
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    // Prepare the response
    const response = {
      totalItems: filteredItems.length,
      totalPages: Math.ceil(filteredItems.length / limitNumber),
      currentPage: pageNumber,
      items: paginatedItems,
    };

    res.json(response);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
