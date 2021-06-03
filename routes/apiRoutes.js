import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ hi: "hi" });
});

export default router;
