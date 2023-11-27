export const Game = (props) => {
    return(
        <div className="gameScreen">
              <p>Game has begun!</p>
              <h1>Welcome! Your current balance is: {balance}</h1>
              <h2>Let's play</h2>
              <br></br>
              <br></br>
              <h2>The current card is: {cardValue}</h2>
              {(currentCard / 4) !== 0 && <button>Bet Higher? Odds: {possibleHiOdds[Math.floor(currentCard / 4) - 1]}</button>}
              {(currentCard / 4) !== 12 && <button>Bet Lower? Odds: {possibleLoOdds[Math.floor(currentCard / 4) - 2]}</button>}
              <button>Bet on a Tie? Odds: {tieOdds}</button>
        </div>
    );
}