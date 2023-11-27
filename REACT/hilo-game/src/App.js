import './App.css';
import { useState, createContext } from "react";
import { Game } from './Game';
import { AppContext } from '../../state-management/src/App';

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
  // Represents the current card on the table
  const[currentCard, setCurrentCard] = useState(0);
  // Represents the name of the card player will see ex: "Ace of clubs"
  const[cardValue, setCardValue] = useState("");
  // Player balance
  const[balance, setBalance] = useState(0.0);
  // Player's bet this round
  const[currentBet, setCurrentBet] = useState(0.0);
  // Indicates if current round has been won
  const[roundWon, setRoundWon] = useState(false);
  // Initialize boolean to start game
  const[gameStart, setGameStart] = useState(false);

  const gameState = {
    currentBalance : balance,
    userBet : currentBet,

  }


  // Finds random card in deck not drawn yet and takes it out, making it the current card
  const DrawCard = (deckOfCards) => {
    var foundCard = false;
    var possibleCard;
    while (!foundCard) {
      possibleCard = (Math.floor(Math.random() * 52));
      foundCard = deckOfCards[possibleCard];
    }
    setCurrentCard(possibleCard);
    {ReadCard(currentCard)}
  }

  // Puts all cards back into the deck
  const ShuffleDeck = () => {
    setDeckOfCards(new Array(52).fill(true));
  }

  // Uses modulus to determine what suit
  const determineSuit = (currentSuit) => {
    if (currentSuit % 4 === 0) {
       return "Hearts";
    } else if (currentSuit % 4 === 1) {
      return "Diamonds";
    } else if (currentSuit % 4 === 2) {
      return "Clubs";
    } else {
      return "Spades";
    }
  }



  // Sets the card value to the correct string depending on current card 
  const ReadCard = (currentCard) => {
    const currentSuit = determineSuit(currentCard % 4);  // 0 is hearts, 1 diamonds, 2 clubs, 3 spades
    var currentValue = Math.floor(currentCard / 4);  // 0 is ace, 1-9 is 2-10, 10-12 is J,Q,K

    // If it's Ace...
    if (currentValue === 0) {
      setCardValue("Ace of " + currentSuit);
    // If its 2-9
    } else if (currentValue < 10) {
      setCardValue((currentValue + 1) + " of " + currentSuit);
    // If Jack
    } else if (currentValue === 10) {
      setCardValue("Jack of " + currentSuit);
    // If Queen
    } else if (currentValue === 11) {
      setCardValue("Queen of " + currentSuit);
    // If King
    } else {
      setCardValue("King of " + currentSuit);
    }
  }

  // Adds the winnings to the player's balance (only call if won)
  const CashBet = () => {
    setBalance(balance + (currentBet * currentOdds));
  }

  // I was gonna assign all these manually based on the card but this is probably simpler
  // I will assign based on high or low bet and number of card.
  const possibleLoOdds = [12.0, 5.0, 3.0, 3.0, 2.0, 1.8, 1.5, 1.4, 1.3, 1.2, 1.1, 1.0];
  const possibleHiOdds = [1.0, 1.1, 1.2, 1.4, 1.4, 1.5, 1.8, 2.0, 3.0, 4.0, 5.0, 12.0];
  const tieOdds = 12.5;
  // Assigns the correct odds to player odds after 
  const CalculateOdds = (betType) => {
    var cardNum = currentCard / 4;
    if (betType === "Hi") {
      // Have to subtract from the card num by one because one value is excluded
      setCurrentOdds(possibleHiOdds[cardNum - 1]);
    } else if (betType === "Lo") {
      if (cardNum === 0) {
        setCurrentOdds(possibleLoOdds[11]);
      } else {
        // One value is excluded like before, but another one effectively is too, as ace is handled differently
        setCurrentOdds(possibleLoOdds[cardNum - 2]);
      }
    } else {
      // Tie odds are always constant
      setCurrentOdds(tieOdds);
    }
  }

  const MakeBet = (currentBet) => {
    setBalance(balance - currentBet);
    setCurrentBet(currentBet);
  }

  const CreateGame = () => {
    setGameStart(!gameStart);
    DrawCard(deckOfCards);
  }
  <AppContext.Provider {...currentCard, cardValue, currentOdds, balance, currentRound, roundWon, gameStart} />
  return (
    <div className="App">
      <h1>Welcome to Hi-Lo!</h1>
      <p>Playing Hi-Lo is very simple; as the player, you 
        need to bet on whether the next card to be drawn from 
        the deck will be higher or lower than the current card. 
        You can also bet on the card being the same value as the current card – 
        which is known as a tie. Hi-Lo (usually) is played 
        with a standard 52-card deck, and the value of 
        all the cards is determined by their rank; for example, Ace is always high, 
        while two is the lowest-possible value.</p>
        <div className='gameboard'>
          {gameStart === false && <button onClick={CreateGame}>Start Game!</button>}
          {gameStart === true && 
            <Game />
          }
        </div>
    </div>
  );
}

export default App;
