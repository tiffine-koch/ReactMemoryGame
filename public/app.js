import React from "react";
import ReactDOM from "react-dom";

import OneBook from "./components/OneBook";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { id: 1, name: "Learn React", price: 2999 },
        { id: 2, name: "Learn Flux" },
        { id: 3, name: "Learn GraphQL", price: 0 },
        { id: 4, name: "Learn Relay", price: 4999 },
      ],
      currentBookIndex: 0
    };
  }
next() {
  //change the current displayed book
  this.setState({currentBookIndex: this.state.currentBookIndex + 1});
}
isLastBook() {
  // when out of books disable the button
  return this.state.books.length === this.state.currentBookIndex + 1;
}

render() {
  return (
    <div>
      <OneBook {...this.state.books[this.state.currentBookIndex]}/>
      <button onClick={this.next.bind(this)} disabled={this.isLastBook()}>Next</button>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("react")
);

window.ReactDOM = ReactDOM;
// import React from "react";
// import ReactDOM from "react-dom";
//
// import List from "./components/List";
// import Book from "./components/Book";
// import Form from "./components/Form";
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//       items: [
//         { id: 1, name: "Learn React", price: 2999 },
//         { id: 2, name: "Learn Flux" },
//         { id: 3, name: "Learn GraphQL", price: 0 },
//         { id: 4, name: "Learn Relay", price: 4999 },
//       ],
//     };
//     this.addItems = this.addItem.bind(this);
//   }
//
//   addItem(newBook) {
//     const currentItems = this.state.items;
//
//     this.setState({
//       items: currentItems.concat(newBook),
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <List items={this.state.items} component={Book} />
//         <Form addItem={this.addItem}/>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById("react")
// );


// //makes it global anywhere
// window.g = 42;
//
// setInterval(() => {
//
//   const Hello = () => (
//       <div>
//         Hello JSX
//         <br />
//         Date is: <span id="date">{new Date().toString()}</span>
//         <br />
//         {g}
//         <input />
//         <input type="checkbox" />
//       </div>
//   );
//
//   ReactDOM.render(
//     <Hello></Hello>,
//     document.getElementById("react")
//   );
//
// }, 1000)

//this an example of a react components - just a function
// var List = ({books}) => {
//   return React.createElement("ul", {},
//     books.map(book =>
//       React.createElement(Book, book))
//     );
// };

//destructuring
//way to create a component - do it this way 90%
// var Book = ({name}) => {
//   return React.createElement("li", {}, name);
// };

//second way
// var Book = React.createClass({
//   render() {
//     return React.createElement("li", {}, this.props.name);
//   }
// })

//third way
// class Book extends React.Component {
//   render() {
//     return React.createElement("li", {}, this.props.name);
//   }
// }
//
//
// var books = [
//   { id: 1, name: "Learn React", price: 2999},
//   { id: 2, name: "Learn Flux", price: 1999},
//   { id: 3, name: "Learn GraphQL", price: 3999},
//   { id: 4, name: "Learn Relay", price: 4999},
// ];

// ReactDOM.render(
//   React.createElement(List, { books: books} ),
//   document.getElementById("react")
// );

//react example

// import React from "react";
// import ReactDOM from "react-dom";
//
// setInterval(() => {
//
//   var hello = React.createElement("div", {},
//     "Hello React",
//     React.createElement("br"),
//     `Date is: ${new Date()}`,
//     React.createElement("br"),
//     React.createElement("input"),
//     React.createElement("input", {type: "checkbox"})
//     );
//
//   ReactDOM.render(
//     hello,
//     document.getElementById("react")
//   );
//
//   $("#date").html(new Date());
//
// }, 1000)
//
// var jHello = `
//   Hello jQuery
//   <br />
//   Date is: <span id="date">${new Date()}</span>
//   <br />
//   <input />
//   <input type="checkbox" />
//   `;
//
// $("#jquery").html(jHello);

//samer
// setInterval(() => {
//   var hello = React.createElement("div", {}, "Hello React",
//       React.createElement("br"),
//       `Date is: ${new Date()}`,
//       React.createElement("br"),
//       React.createElement("input"),
//       React.createElement("input", {type: "checkbox"})
//     );
//
//   ReactDOM.render(
//     hello,
//     document.getElementById("react")
//   );
//
//   var jHello = `Hello Jquery <br /> Date is: ${new Date()} <br /> <input /> <input type="checkbox" /> `;
//
//   $("#jquery").html(jHello);
//
// }, 1000);



//first arguments is what you want to render, second is where

/////
// var books = [
//   { id: 1, name: "Learn React", price: 2999},
//   { id: 2, name: "Learn Flux", price: 1999},
//   { id: 3, name: "Learn GraphQL", price: 3999},
//   { id: 4, name: "Learn Relay", price: 4999},
// ];
//
// var bookElement = books.map(book => React.createElement("li", {}, book.name ));
//
// var link = React.createElement("a", { href: "http://codinghouse.co" }, "Click Me");
// var div = React.createElement("ul", {}, "Hello Beautiful", bookElement);
// ReactDOM.render(div, document.getElementById("react"));
// import React from "react";
// import ReactDOM from "react-dom";
//
// import List from "./components/List";
// import Book from "./components/Book";
// import Form from "./components/Form";
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: [
//         { id: 1, name: "Learn React", price: 2999 },
//         { id: 2, name: "Learn Flux" },
//         { id: 3, name: "Learn GraphQL", price: 0 },
//         { id: 4, name: "Learn Relay", price: 4999 },
//       ],
//     };
//
//     this.addItem = this.addItem.bind(this);
//   }
//
//   removeItem(itemId) {
//     const currentItems = this.state.items;
//
//     this.setState({items: currentItems.filter(item => item.id !== itemId)});
//   }
//
//   addItem(newBook) {
//     console.log(this);
//     const currentItems = this.state.items;
//     this.setState({
//       items: currentItems.concat(newBook),
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <List items={this.state.items}
//           removeItem={this.removeItem.bind(this)} />
//         <Form addItem={this.addItem} />
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById("react")
// );
// import React from "react";
// import ReactDOM from "react-dom";
//
// import List from "./components/List";
// import Book from "./components/Book";
// import Form from "./components/Form";
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//       items: [
//         { id: 1, name: "Learn React", price: 2999 },
//         { id: 2, name: "Learn Flux" },
//         { id: 3, name: "Learn GraphQL", price: 0 },
//         { id: 4, name: "Learn Relay", price: 4999 },
//       ],
//     };
//     this.addItems = this.addItem.bind(this);
//   }
//
//   addItem(newBook) {
//     const currentItems = this.state.items;
//
//     this.setState({
//       items: currentItems.concat(newBook),
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <List items={this.state.items} component={Book} />
//         <Form addItem={this.addItem}/>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById("react")
// );


// //makes it global anywhere
// window.g = 42;
//
// setInterval(() => {
//
//   const Hello = () => (
//       <div>
//         Hello JSX
//         <br />
//         Date is: <span id="date">{new Date().toString()}</span>
//         <br />
//         {g}
//         <input />
//         <input type="checkbox" />
//       </div>
//   );
//
//   ReactDOM.render(
//     <Hello></Hello>,
//     document.getElementById("react")
//   );
//
// }, 1000)

//this an example of a react components - just a function
// var List = ({books}) => {
//   return React.createElement("ul", {},
//     books.map(book =>
//       React.createElement(Book, book))
//     );
// };

//destructuring
//way to create a component - do it this way 90%
// var Book = ({name}) => {
//   return React.createElement("li", {}, name);
// };

//second way
// var Book = React.createClass({
//   render() {
//     return React.createElement("li", {}, this.props.name);
//   }
// })

//third way
// class Book extends React.Component {
//   render() {
//     return React.createElement("li", {}, this.props.name);
//   }
// }
//
//
// var books = [
//   { id: 1, name: "Learn React", price: 2999},
//   { id: 2, name: "Learn Flux", price: 1999},
//   { id: 3, name: "Learn GraphQL", price: 3999},
//   { id: 4, name: "Learn Relay", price: 4999},
// ];

// ReactDOM.render(
//   React.createElement(List, { books: books} ),
//   document.getElementById("react")
// );

//react example

// import React from "react";
// import ReactDOM from "react-dom";
//
// setInterval(() => {
//
//   var hello = React.createElement("div", {},
//     "Hello React",
//     React.createElement("br"),
//     `Date is: ${new Date()}`,
//     React.createElement("br"),
//     React.createElement("input"),
//     React.createElement("input", {type: "checkbox"})
//     );
//
//   ReactDOM.render(
//     hello,
//     document.getElementById("react")
//   );
//
//   $("#date").html(new Date());
//
// }, 1000)
//
// var jHello = `
//   Hello jQuery
//   <br />
//   Date is: <span id="date">${new Date()}</span>
//   <br />
//   <input />
//   <input type="checkbox" />
//   `;
//
// $("#jquery").html(jHello);

//samer
// setInterval(() => {
//   var hello = React.createElement("div", {}, "Hello React",
//       React.createElement("br"),
//       `Date is: ${new Date()}`,
//       React.createElement("br"),
//       React.createElement("input"),
//       React.createElement("input", {type: "checkbox"})
//     );
//
//   ReactDOM.render(
//     hello,
//     document.getElementById("react")
//   );
//
//   var jHello = `Hello Jquery <br /> Date is: ${new Date()} <br /> <input /> <input type="checkbox" /> `;
//
//   $("#jquery").html(jHello);
//
// }, 1000);



//first arguments is what you want to render, second is where

/////
// var books = [
//   { id: 1, name: "Learn React", price: 2999},
//   { id: 2, name: "Learn Flux", price: 1999},
//   { id: 3, name: "Learn GraphQL", price: 3999},
//   { id: 4, name: "Learn Relay", price: 4999},
// ];
//
// var bookElement = books.map(book => React.createElement("li", {}, book.name ));
//
// var link = React.createElement("a", { href: "http://codinghouse.co" }, "Click Me");
// var div = React.createElement("ul", {}, "Hello Beautiful", bookElement);
// ReactDOM.render(div, document.getElementById("react"));
