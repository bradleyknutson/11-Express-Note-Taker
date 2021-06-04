import { Router } from "express";
import { Store } from "../db/store";
const router = Router();

router.get("/notes", async (req, res) => {
  const notes = await Store.getNotes();
  res.json(notes);
});

router.post("/notes", async (req, res) => {
  const newNote = await Store.writeNote(req.body);
  res.json(newNote);
});

router.delete("/notes/:id", async (req, res) => {
  const notes = await Store.deleteNote(req.params.id);
  res.json(notes);
});

export default router;
