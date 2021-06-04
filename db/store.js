import { writeFileSync, readFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";

export class Store {
  static async read() {
    return JSON.parse(readFileSync("db/db.json", { encoding: "utf-8" }));
  }
  static async write(note) {
    return writeFileSync("db/db.json", note);
  }
  static async getNotes() {
    return await this.read();
  }

  static async writeNote(note) {
    const { title, text } = note;
    console.log(`Title: ${title}, Text: ${text}`);
    if (!title || !text) {
      throw new Error("Must contain title and text");
    }
    const newNote = { title, text, id: uuidv4() };
    const notes = await this.getNotes();
    notes.push(newNote);
    this.write(JSON.stringify(notes));
    return newNote;
  }

  static async deleteNote(noteId) {
    const notes = await this.getNotes();
    this.write(JSON.stringify(notes.filter((note) => note.id !== noteId)));
  }
}
