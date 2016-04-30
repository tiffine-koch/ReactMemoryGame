import React from "react";
import { get } from "jquery";

export default class OneBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: "", currentDate: new Date().toLocaleDateString()};
  }
  componentWillMount() {
    console.log("Will Mount");
  }
  componentDidMount() {
    console.log("Did Mount");
    this.intervalId = setInterval(() => {
      this.setState({currentDate: new Date().toLocaleDateString()})
    }, 1000);
    console.log("intervalId", this.intervalId);
    get("/desc.txt").done(desc => this.setState({description: desc}));
  }
  componentWillUnmount() {
    //whenever you make a time, clear it in the will unmount. timers are part of the real browser, not the fake browser
    clearInterval(this.intervalId);
    console.log("Will Unmount");
  }
  shouldComponentUpdate(_, nextState) {
    console.log(nextState);
    console.log("should update");
    // return nextState.currentDate !== this.state.currentDate;
    return true;
  }
  componentWillUpdate() {
    console.log("Will Update");
  }
  componentDidUpdate() {
    console.log("Did Update");
  }

  priceDisplay() {
    const { price } = this.props;
    if(price !== undefined) {
      return (
        <div>
          {price === 0 ? "Free": price/100}
        </div>
      );
    }
  }
  descriptionDisplay() {
    const { description } = this.state;
    if(description !== undefined ) {
      return (
        <em>{description}</em>
      );
    }
  }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.descriptionDisplay()}

        {this.priceDisplay()}
        {this.state.currentDate}
      </div>
    );
  }
}
