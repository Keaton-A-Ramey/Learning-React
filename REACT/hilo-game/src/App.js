import './App.css';
import { useState } from "react";

function App() {
  /*
  Variables:
  Boolean[52] deckOfCards  // Array of 52 booleans, indices represent card, index % 4 represents suit, 
                              and T/F value represents if card still in deck
  Double Lo-Odds  // Double containing odds on winning lo-bet
  Double Hi-Odds  // Double containing odds on winning hi-bet
  // Tie or Snap odds are constant: 12.5x

  String betType // Whether player bets on Hi, Lo, or Tie
  Integer currentCard // Current card on display that player has to bet on.

  Double balance  // Contains the player's balance to bet with
  Double currentBet  // Contains amount player is currently betting

  Boolean roundWon  // Indicates whether player bet was successful


  Methods: 

  DrawCard  // Take random number 0-51 and look through deck of cards for true, 
                return that index

  ShuffleDeck  // When all cards have been drawn, assign true to every card, clear the board
                // and basically start over

  ReadCard  // Takes card index and generates card name from it. Uses card number / 4 to get value
               and uses %4 to get suit.

  Payout  // Uses odds and bet to calculate winnings or loss depending on whether roundWon true or not

  Calculate Odds  // Determines (and assigns) Hi and Lo odds in current game state. 

  Make bet  // Takes credits from user balance and assigns amount to currentBet.
  */


  // Array where each index represents a card and boolean value indicates if still there
  const[deckOfCards, setDeckOfCards] = useState(new Array(52).fill(true));

  // lo and hi odds represent odds if either bet (lo or high taken)
  const[loOdds, setLoOdds] = useState(1.0);
  const[hiOdds, setHiOdds] = useState(1.0);

  // Odds that the player took on current bet
  const[currentOdds, setCurrentOdds] = useState(1.0);
  
  // Will say if user takes "hi", "lo", or "tie" this round
  const[betType, setBetType] = useState("");
  // Represents the current card on the table
  const[currentCard, setCurrentCard] = useState(0);
  // Represents the value of the card (index of currentCard / 4)
  const[cardValue, setCardValue] = useState("");
  // Player balance
  const[balance, setBalance] = useState(0.0);
  // Indicates if current round has been won
  const[roundWon, setRoundWon] = useState(false);

  const DrawCard = (deckOfCards) => {
    var foundCard = false;
    var possibleCard;
    while (!foundcard) {
      possibleCard = (Math.floor(Math.random() * 52));
      foundCard = deckOfCards[possibleCard];
    }
    setCurrentCard(possibleCard);
  }

  const ShuffleDeck = () => {
    setDeckOfCards(new Array(52).fill(true));
  }

  const determineSuit = (currentSuit) => {
    if (currentSuit % 4 == 0) {
       return "Hearts";
    } else if (currentSuit % 4 == 1) {
      return "Diamonds";
    } else if (currentSuit % 4 == 2) {
      return "Clubs";
    } else {
      return "Spades";
    }
  }

  const readCard = () => {
    const currentSuit = determineSuit(currentCard % 4);  // 0 is hearts, 1 diamonds, 2 clubs, 3 spades
    var currentValue = currentCard / 4;  // 0 is ace, 1-9 is 2-10, 10-12 is J,Q,K

    // If it's Ace...
    if (currentValue == 0) {
      return "Ace of " + currentSuit;
    // If its 2-9
    } else if (currentValue < 10) {
      return (currentValue + 1) + " of " + currentSuit;
    // If Jack
    } else if (currentValue == 10) {
      return "Jack of " + currentSuit;
    // If Queen
    } else if (currentValue == 11) {
      return "Queen of " + currentSuit;
    // If King
    } else {
      return "King of " + currentSuit;
    }
  }

  const cashBet = (roundWon, ) => {

  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
