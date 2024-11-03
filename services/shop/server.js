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
  const catalog = [
    {
      id: nanoid(),
      name: "Brushed Houndstooth Hendrik Overcoat",
      price: 249.99,
      gender: "men",
      description:
        "This classically-cut overcoat wears like a tailored suit. Two pockets on the exterior and two more on the interior of the coat make for lots of storage to wear this out for the day and have everything you could ever need. The coat is also cut with extra room to fit comfortably over a suit, with a beautiful gray virgin wool to complement anything underneath it.",
      image: "images/brushed-houndstooth-overcoat.jpg",
      altImage: "images/brushed-houndstooth-overcoat-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Ronnie Turtleneck",
      price: 89.99,
      gender: "men",
      description:
        "At the core of every winter wardrobe is a great turtleneck. The Ronnie Turtleneck is ours. It’s made from soft Italian cashmere wool, and features textured ribs at the sleeve, neck, and bottom, so make sure that the sweater highlights your best features while wearing it.",
      image: "images/ronnie-turtleneck.jpg",
      altImage: "images/ronnie-turtleneck-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Classic Moto",
      price: 149.99,
      gender: "women",
      description:
        "An archival style from over a decade ago - the Classic Moto is an iconic, customer-favorite piece. It’s crafted from soft and supple, washed lambskin that gets better with wear and is finished with luxe details like antique brass closures and zippers. Perfect with your favorite worn-in jeans or over a drapey dress - there is no wrong way to wear a leather jacket.",
      image: "images/classic-moto.jpg",
      altImage: "images/classic-moto-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Twill Moleskin Flat Front Trouser",
      price: 149.99,
      gender: "men",
      description:
        "These sleek trousers feel as comfortable as our iconic moleskin jean, with the sophisticated cut of a trouser pant. It’s a fabric update on our other icon, the flat front trouser, made with a fabric that will only get better with age. With an option in black and oak brown, the pants are made to suit a variety of wardrobe choices from suit separates to being paired with a polished-looking sweater.",
      image: "images/twill-moleskin-trouser.jpg",
      altImage: "images/twill-moleskin-trouser-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Abstract Ribbon Cardigan",
      price: 119.99,
      gender: "men",
      description:
        "The Abstract Ribbon Cardigan is a modern take on the classic cardigan. The ribbons are woven into the fabric, creating a unique texture that is both visually interesting and soft to the touch. The cardigan is made from a blend of wool and cashmere, making it warm and comfortable to wear.",
      image: "images/abstract-ribbon-cardigan.jpg",
      altImage: "images/abstract-ribbon-cardigan-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Flat Front Trouser",
      price: 129.99,
      gender: "women",
      description:
        "The Flat Front Trouser is a classic, tailored pant that is perfect for any occasion. The pant is made from a soft, stretchy fabric that is comfortable to wear all day long. The pant features a flat front, side pockets, and a straight leg that is flattering on all body types. The pant is available in a range of colors, and is perfect for both casual and formal occasions.",
      image: "images/flat-front-trouser.jpg",
      altImage: "images/flat-front-trouser-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Plaid Zip Sweater",
      price: 99.99,
      gender: "men",
      description:
        "This patterned, zip-up sweater is meant to be the one you reach for all through the winter season. With a subtle, dark plaid, and cord zipper pull, it’s easy to get on and off. The fabric is a mix of cotton and alpaca yarn, to make sure that the garment is warm, but always soft on the skin.",
      image: "images/plaid-zip-sweater.jpg",
      altImage: "images/plaid-zip-sweater-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Oak Street x Billy Reid Trench Boot",
      price: 299.99,
      gender: "men",
      description:
        "The Oak Street x Billy Reid Trench Boot is a collaboration between two American brands known for their quality and craftsmanship. The boot is made from Horween Chromexcel leather, and features a Goodyear welt construction, making it durable and long-lasting. The boot is handcrafted in the USA, and is available in both black and brown.",
      image: "images/oak-street-trench-boot.jpg",
      altImage: "images/oak-street-trench-boot-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Melange Yellowhammer Tuscumbia Shirt Button-Down",
      price: 79.99,
      gender: "men",
      description:
        "The Melange Yellowhammer Tuscumbia Shirt Button-Down is a classic button-down shirt with a modern twist. The shirt is made from a soft, melange cotton fabric, and features a button-down collar and a chest pocket. The shirt is available in a range of colors, and is perfect for both casual and formal occasions.",
      image: "images/melange-yellowhammer-shirt.jpg",
      altImage: "images/melange-yellowhammer-shirt-hover.jpg",
    },
    {
      id: nanoid(),
      name: "Corded Plaid Tuscumbia Shirt Button Down",
      price: 159.99,
      gender: "men",
      description:
        "Our best-selling Tuscumbia shirt is the cornerstone of lived-in luxury. This version is cut in a standard fit, providing ease of movement and ultimate comfort. It’s 100% cotton, but with a brushed finish to the exterior giving it a little more weight and a super soft feel.  It's constructed with a button-down collar, barrel cuffs, and a tonal thread throughout the body. Thoughtfully finished with smoke mother of pearl buttons, a left-side chest pocket, and a subtle detail: our heirloom ribbon applied to the bottom of the under-placket.",
      image: "images/corded-plaid-shirt.jpg",
      altImage: "images/corded-plaid-shirt-hover.jpg",
    },
  ];

  // API endpoint to get the catalog
  app.get("/api/catalog", (req, res) => {
    res.json(catalog);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
