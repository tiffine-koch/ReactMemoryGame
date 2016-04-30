import React from "react";

import Cell from "./Cell";
import Row from "./Row";

import { sampleSize, flatten } from "lodash";

class Game extends React.Component {
  constructor(props) {
    super(props);

    let row, r, c;

    this.grid = [];

    for (r = 0; r < this.props.rows; r++) {
      row = [];
      for (c = 0; c < this.props.cols; c++) {
        row.push(`${r}-${c}`);
      }
      this.grid.push(row);
    }

    this.randomCells = sampleSize(flatten(this.grid), 6);

    console.log(this.randomCells);

    this.state = {
      correctGuesses: [],
      incorrectGuesses: [],
      currentState: "ready",
      remainingSeconds: ""
    };
  }
  recordGuess(cellId, correct) {
    console.log('inside recordGuess', cellId, correct);
    let { correctGuesses, incorrectGuesses } = this.state;
    if (correct) {
      correctGuesses.push(cellId);
    } else {
      incorrectGuesses.push(cellId);
    }
    this.setState({ correctGuesses, incorrectGuesses}, () => {
      this.checkFinalState();
    });
  }
  finishGame() {
    //clear all timers + intervals
    clearTimeout(this.memorizeTimerId);
    clearTimeout(this.recallTimerId);
    clearInterval(this.remainingSecondsIntervalId);
  }
  checkFinalState() {
    let { currentState, incorrectGuesses, correctGuesses } = this.state;
    if (this.state.incorrectGuesses.length === 3) {
      currentState = "over";
      this.finishGame();
    }
    if (this.state.correctGuesses.length === 6) {
      currentState = "won";
      this.finishGame();
    }
    this.setState({currentState});
  }
  componentDidMount() {
    this.memorizeTimerId = setTimeout(() => {
      this.setState({currentState: "memorize"});
      this.recallTimerId = setTimeout(() => {
        this.setState({currentState: "recall", remainingSeconds: 10}, () => {

          this.remainingSecondsIntervalId = setInterval(() => {
            let { currentState, remainingSeconds } = this.state;
            if(remainingSeconds === 1) {
              currentState = "over";
              this.finishGame();
            }
            this.setState({
              currentState,
              remainingSeconds: remainingSeconds - 1
            });
          }, 1000);
        });
      }, 2000);
    }, 2000);
  }
  componentWillUnmount() {
    this.finishGame();
  }
  shouldHighlight() {
    return ["memorize", "over"].indexOf(this.state.currentState) >= 0;
  }
displayResetButton() {
    if(["over", "won"].indexOf(this.state.currentState) >= 0) {
      return <button onClick={this.props.resetGame}>Play Again</button>;
    }
  }
  render() {
    const shouldHighlight = this.shouldHighlight();
    const canGuess = this.state.currentState === "recall";
    return (
      <div className="game">

      {this.grid.map((row, index) => (
        <Row key={index}>
          {row.map(col => <Cell
                            key={col} id={col}
                            recordGuess = {this.recordGuess.bind(this)}
                            shouldHighlight={shouldHighlight}
                            canGuess={canGuess}
                            {...this.state}
                            randomCells={this.randomCells} />)}
        </Row>
      ))}

      <div>{this.state.currentState}</div>
      <div>{this.state.remainingSeconds}</div>
        {this.displayResetButton}
      </div>
    );
  }
}

export default Game;
// import React from "react";
//
// import Cell from "./Cell";
// import Row from "./Row";
//
// import { sampleSize, flatten } from "lodash";
//
// class Game extends React.Component {
//
// render() {
//       let grid = [], row, r, c;
//
//       for(r = 0; r < this.props.rows; r++) {
//         row = [];
//         for(c = 0; c < this.props.cols; c++) {
//           row.push(`${r}-${c}`);
//         }
//         grid.push(row);
//       }
//       console.log('grid', grid);
//
//       const randomCells = sampleSize(flatten(grid), 6);
//
//       console.log(randomCells);
//
//       return (
//         <div className="game">
//
//         {grid.map((row, index) => (
//           <Row key={index}>
//           {row.map(col => <Cell key={col} id={col} randomCells={randomCells}/>)}
//           </Row>
//         ))}
//
//         </div>
//     );
//   }
// }
//
// export default Game;
