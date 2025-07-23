import express from "express";
import Card from "../models/Card.js";

const router = express.Router();

let cards = [
  { id: 1, title: "card1", subtitle: "sub card1" },
  { id: 2, title: "card2", subtitle: "sub card2" },
  { id: 3, title: "card3", subtitle: "sub card3" },
];

router.get("/", (req, res) => {
  res.send(cards);
});

router.post("/", async (req, res) => {
  const newCard = req.body;

  const newCardForMongo = new Card(newCard);
  await newCardForMongo.save();

  res.status(201).send("New card added successfully");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const card = cards.find((c) => c.id.toString() === id);
  if (card) {
    res.send(card);
  } else {
    res.status(404).send("Card not found");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  cards = cards.filter((card) => card.id.toString() !== id);
  res.send(cards);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newCard = req.body;
  const cardToReplaceIndex = cards.findIndex(
    (card) => card.id.toString() === id
  );
  if (cardToReplaceIndex !== -1) {
    cards[cardToReplaceIndex] = newCard;
  }

  res.send(cards);
});

export default router;
