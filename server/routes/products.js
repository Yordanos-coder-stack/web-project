import { Router } from "express";
const router = Router();

// You can later replace this with a MongoDB Product model
const products = [
  { id: 1, name: "Smart Watch", price: 199.99, category: "electronics" },
  { id: 2, name: "Habesha Dress", price: 249.99, category: "cloths" },
  { id: 3, name: "Surface Laptop", price: 999.99, category: "electronics" }
];

// Fetch all products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;

