import React from "react";
import Book from "./Book";

class List extends React.Component {

  render() {
    const Component = this.props.component;
    return (
      <div>
        <ul>
        {this.props.items.map(item =>
          <Book key={item.id} {...item} removeItem={this.props.removeItem} />)}
        </ul>
      </div>
    );
  }
};

export default List;


//using the backing instance - onChange = on input
// import React from "react";
//
// class List extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: [
//         { id: 1, name: "Learn React", price: 2999},
//         { id: 2, name: "Learn Flux"},
//         { id: 3, name: "Learn GraphQL", price: 3999},
//         { id: 4, name: "Learn Relay", price: 4999},
//       ],
//       userInput: ""
//     };
//   }
//
//   handleChange(se) {
//     console.log("handleChange");
//     console.log(se.target.value);
//     this.setState({userInput: se.target.value});
//   }
//   addItem() {
//     const currentItems = this.state.items;
//     const newBook = {name: this.state.userInput};
//
//     this.setState({items: currentItems.concat({newBook)});
//   }
//   render() {
//     const Component = this.props.component;
//     return (
//       <div>
//         <ul>
//           {this.state.items.map(item => <Component key={item.id} {...item}/>)}
//         </ul>
//         <input value={this.state.userInput} onChange={this.handleChange.bind(this)}/>
//
//         <button onClick={this.addItem.bind(this)}>Add</button>
//       </div>
//     )
//   }
// }
//
// export default List;
