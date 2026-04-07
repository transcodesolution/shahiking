const products = [
  {
    id: 1,
    name: "Himalayan Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img1.webp",
  }, 
  {
    id: 2,
    name: "Peri-Peri Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img2.webp",
  },
  {
    id: 3,
    name: "Himalayan Salt Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img3.webp",
  },
  {
    id: 4,
    name: "Peri-Peri Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img2.webp",
  },
  {
    id: 5,
    name: "Himalayan Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img1.webp",
  },
  {
    id: 6,
    name: "Peri-Peri Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img2.webp",
  },
  {
    id: 7,
    name: "Himalayan Salt Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img3.webp",
  },
  {
    id: 8,
    name: "Peri-Peri Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img2.webp",
  },
  {
    id: 9,
    name: "Himalayan Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img1.webp",
  },
  {
    id: 10,
    name: "Peri-Peri Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img2.webp",
  },
   {
    id: 11,
    name: "Himalayan Salt Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img3.webp",
  },
  {
    id: 12,
    name: "Peri-Peri Makhana",
    price: "₹300.00",
    rating: 5.0,
    img: "/Image/productpage/product_img2.webp",
  }, 
];


const categories = [
  {
    id: "nuts",
    name: "Nuts & Snacks",
    img: "/Image/homepage/category_img1.webp",
  },
  {
    id: "protein",
    name: "Plant-Based Protein",
    img: "/Image/homepage/category_img2.webp",
  }
];

const productsData = {
  nuts: [
    {
      name: "Premium Row Makhana",
      price: "250/-",
      desc: "Light & crunchy healthy snack, perfect for roasting and daily nutrition.",
      img: "/Image/homepage/product_1.webp",
    },
  ],
  protein: [
    {
      name: "Pure Bean Fit Tofu",
      price: "350/-",
      desc: "High-protein tofu – clean plant-based protein for balanced meals.",
      img: "/Image/homepage/product_2.webp",
    },
  ],
};

const whychooseData=[
  {
    id:1,
    name:"Premium Quality Ingredients"
  },
  {
    id:2,
    name:"Health-Focused Selection"
  },
  {
    id:3,
    name:"Hygienically Processed"
  },
  {
    id:4,
    name:"No Compromise on Taste"
  },
]

  const recipeData = [
    {
      id: 1,
      title: "Fruit Custard",
      video: "/Video/recipe_video1.mp4",
      details:
        "Creamy Fruit Custard, Perfect summer dessert",
    },
    {
      id: 2,
      title: "Roasted Makhana",
      video: "/Video/recipe_video2.mp4",
      details:
        "Healthy Makhana in 5 Min, Weight loss snack",
    },
    {
      id: 3,
      title: "Sesame Air Fryer Tofu",
      video: "/Video/recipe_video3.mp4",
      details:
        "Crispy Air Fryer Tofu, High protein + easy meal",
    },
    {
      id: 4,
      title: "Makhana Tikki",
      video: "/Video/recipe_video4.mp4",
      details:
        "Makhana Tikki for Weight Loss, Crispy & healthy",
    },
    {
      id: 5,
      title: "Breaded Tofu",
      video: "/Video/recipe_video5.mp4",
      details:
        "Crispy Tofu You Must Try, Crunchy outside",
    },
     {
      id: 6,
      title: "Tofu vs Paneer",
      video: "/Video/recipe_video6.mp4",
      details:
        "Tofu vs Paneer Which is Better?, Healthy choice reveal",
    },
     {
      id: 7,
      title: "Silken Tofu Recipe",
      video: "/Video/recipe_video7.mp4",
      details:
        "Creamy Silken Tofu High Protein, Healthy + smooth",
    },
     {
      id: 8,
      title: "Chilli Tofu",
      video: "/Video/recipe_video8.mp4",
      details:
        "Crispy Chilli Tofu Street Style, Spicy + crunchy",
    },
  ];

  const testimonialData = [
    {
      id: 1,
      name: "Ellis Ken",
      company: "Cloud Nexus",
      rating: 4.0,
      img: "/Image/homepage/testimonial_img1.webp",
      review:
        "It's hard to find delicious vegan food, but Shahiking makes it so easy. Fresh ingredients, great quality, and fast service!",
    },
    {
      id: 2,
      name: "Burns Andy",
      company: "Pixel Pulse",
      rating: 5.0,
      img: "/Image/homepage/testimonial_img2.webp",
      review:
        "Shahiking Foods has completely changed my eating habits. The taste is amazing, and I love that everything is healthy and vegan. Highly recommended!",
    },
    {
      id: 3,
      name: "Burns Andy",
      company: "Data Dynamo",
      rating: 4.5,
      img: "/Image/homepage/testimonial_img3.webp",
      review:
        "I never thought healthy food could taste this good. Their regular meals are balanced, nutritious, and very satisfying.",
    },
    {
      id: 4,
      name: "Harshita Dudhat",
      company: "Harmony Spa",
      rating: 4.0,
      img: "/Image/homepage/testimonial_img4.webp",
      review:
        "If you’re looking for wholesome and plant-based meals, Shahiking Foods is the best choice. Great flavors without compromising health.",
    },
    {
      id: 5,
      name: "Ray Patel",
      company: "Fitness Coach",
      rating: 5.0,
      img: "/Image/homepage/testimonial_img5.webp",
      review:
        "Great quality and very fresh products. The makhana is light and perfect for healthy snacking.",
    },
    {
      id: 6,
      name: "Neha Mehta",
      company: "Diet Planner",
      rating: 4.5,
      img: "/Image/homepage/testimonial_img6.webp",
      review:
        "Healthy snack that actually tastes good. Packaging and quality are excellent.",
    },
    {
      id: 7,
      name: "Karan Malhotra  ",
      company: "Health Enthusiast",
      rating: 4.0,
      img: "/Image/homepage/testimonial_img7.webp",
      review:
        "Premium quality and natural taste. Highly recommended for clean eating.",
    },
    {
      id: 8,
      name: "Priyesh Desai",
      company: "Wellness Blogger",
      rating: 5.0,
      img: "/Image/homepage/testimonial_img8.webp",
      review:
        "Shahiking products are now part of my daily routine. Very reliable brand.",
    },
    {
      id: 9,
      name: "Lewis Chrysta",
      company: "SyncSphere",
      rating: 5.0,
      img: "/Image/homepage/testimonial_img9.webp",
      review:
        "I order from Shahiking every week. The quality is consistent, packaging is neat, and the food always feels fresh.",
    },
  ];


  const categoriesData = [
    { id: "nuts", name: "Nuts & Snacks" },
    { id: "protein", name: "Plant-Based Protein" },
  ];
  
  const productsItem = {
    nuts: [
      {
        id: 1,
        name: "Himalayan Salt Makhana",
        img: "/Image/productpage/product_img3.webp",
      },
      {
        id: 2,
        name: "Peri-Peri Makhana",
        img: "/Image/productpage/product_img2.webp",
      },
      {
        id: 3,
        name: "Himalayan Makhana",
        img: "/Image/productpage/product_img1.webp",
      },
    ],
    protein: [
      {
        id: 1,
        name: "Pure Bean Fit Tofu",
        img: "/Image/productpage/protein_img1.webp",
      },
    ],
  };

export { categories, productsData , whychooseData ,recipeData ,testimonialData,categoriesData, productsItem };
export default products;
