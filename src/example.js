// // ===== App No.1 - Example =====
//
// // >> The React way
//
// const element = <h1 title={foo}>Hello</h1>;
// const container = document.getElementById("root");
// ReactDOM.render(element, container);
//
//
//
// // >> Use JS with React instead of JSX
//
// const element = React.createElement(
//     "h1",
//     {title: "foo"},
//     "Hello",
// )
// const container = document.getElementById("root");
// ReactDOM.render(element, container);
//
//
//
// // >> Use pure JS without React for creating the element
//
// const element = {
//     type: "h1",
//     props: {
//         title: "foo",
//         children: "Hello",
//     },
// }
// const container = document.getElementById("root");
// ReactDOM.render(element, container);
//
//
//
// // >> Use pure JS without React for the full app
//
// const element = {
//     type: "h1",
//     props: {
//         title: "foo",
//         children: "Hello",
//     },
// }
//
// const container = document.getElementById("root");
//
// const node = document.createElement(element.type);
// node["title"] = element.props.title;
//
// const text = document.createTextNode("");
// text["nodeValue"] = element.props.children;
//
// node.appendChild(text);
// container.appendChild(node);
//
//
//
//
// // ===== App No.2 - Another example =====
//
// >> The React way
//
// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)
//
//
// // >> Use JS with React instead of JSX
//
// const element = React.createElement(
//     "div",
//     {id: foo},
//     React.createElement("a", null, "bar"),
//     React.createElement("b"),
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)
//
