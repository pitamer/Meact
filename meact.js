// Meact - The Real Deal

const createTextElement = text => ({
    tagName: "TEXT_ELEMENT",
    options: {
        nodeValue: text,
        children: [],
    }
});

const createElement = (tagName, options, ...children) => ({
    tagName,
    options: {
        ...options,
        children: children.map(child => (
            typeof child === "object" ? child : createTextElement(child)
        )),
    },
});

const Meact = {
    createElement,
};

/** @jsx Meact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

const container = document.getElementById("root");
ReactDOM.render(element, container);
