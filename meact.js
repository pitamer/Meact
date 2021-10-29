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

const element = Meact.createElement(
    "div",
    {id: foo},
    React.createElement("a", null, "bar"),
    React.createElement("b"),
);

const container = document.getElementById("root");
ReactDOM.render(element, container);
