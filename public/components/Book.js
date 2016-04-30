import React from "react";

class Book extends React.Component {
  priceDisplay() {
    const { price } = this.props;
    if(price !== undefined ) {
      return <span> - {price === 0 ? "Free": price/100}</span>
    }
  }
  render() {
    return (
      <li onClick={this.props.removeItem.bind(null, this.props.id)}>
        {this.props.id} : {this.props.name}

        {this.priceDisplay()}
      </li>
    )
  }
}

export default Book;
// import React from "react";
//
// class Book extends React.Component {
//   render() {
//     return (
//       <li>
//         {this.props.id} : {this.props.name}
//
//         {this.props.price ? <span>- {this.props.price/100}</span> : null}
//       </li>
//     )
//   }
// }
//
// export default Book;
