import React from "react";

class Cell extends React.Component {
  handleClick() {
    console.log(this.props.id);
    if(this.props.canGuess) {
      this.props.recordGuess(this.props.id, this.active());
    }
  }
  active() {
    return this.props.randomCells.indexOf(this.props.id) >= 0;
  }
  correct() {
    return this.props.correctGuesses.indexOf(this.props.id) >= 0;
  }
  incorrect() {
    return this.props.incorrectGuesses.indexOf(this.props.id) >= 0;
  }
  render() {
    let className = "cell";
    if (this.props.shouldHighlight && this.active()) {
      className += " active"
    }
    if (this.correct()) {
      className += " correct"
    }
    if (this.incorrect()) {
      className += " incorrect"
    }
    return (
      <span
        className={className}
        onClick={this.handleClick.bind(this)}>
      </span>
    );
  }
}

export default Cell;
// import React from "react";
//
// class Cell extends React.Component {
//
// handleClick() {
//   console.log('working');
// }
//
// active() {
//   return this.props.randomCells.indexOf(this.props.id) >= 0;
// }
// render() {
//   let className="cell"
//   if (this.active()) {
//     className += "active"
//   }
//   return (
//     <span
//       className={className}
//       onClick={this.handleClick.bind(this)}>
//       {this.props.id}
//     </span>
//     );
//   }
// }
//
// export default Cell;
