import express from "express";
import Card from "../models/Card.js";
import {
  createNewCard,
  deleteCard,
  getAllCards,
  updateCard,
} from "../services/cardsService.js";

const router = express.Router();

let cards = [
  { id: 1, title: "card1", subtitle: "sub card1" },
  { id: 2, title: "card2", subtitle: "sub card2" },
  { id: 3, title: "card3", subtitle: "sub card3" },
];

router.get("/", async (req, res) => {
  const allCards = await getAllCards();
  if (allCards) {
    res.send(allCards);
  } else {
    res.status(500).send("something went wrong with get all cards");
  }
});

router.post("/", async (req, res) => {
  const newCard = req.body;
  const cardResult = await createNewCard(newCard);
  if (cardResult) {
    res.status(201).send("New card added successfully");
  } else {
    res.status(400).send("something went wrong with card creation");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const card = await getCardById(id);
  if (card) {
    res.send(card);
  } else {
    res.status(404).send("Card not found");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const idOfDeletedCard = await deleteCard(id);
  if (idOfDeletedCard) {
    res.send("Card deleted successfully");
  } else {
    res.status(400).send("something went wrong with card delete");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newCard = req.body;
  const modifiedCard = await updateCard(id, newCard);
  if (modifiedCard) {
    res.send(modifiedCard);
  } else {
    res.status(400).send("something went wrong with card edit");
  }
});

export default router;
