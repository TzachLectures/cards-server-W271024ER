import { createCard } from "./cardsDataService.js";

//get all

//get one by id

//create
export const createNewCard = async (card) => {
  //generate biznumber for the card
  //it will look like this:
  //card.bizNumber = generateBizNumber()
  const newCard = await createCard(card);
  return newCard;
};

//update

//delete

//toggleLike

//changeBizNumber
