const TEXT_ELEMENT = "TEXT_ELEMENT";

const createTextElement = text => ({
    tagName: TEXT_ELEMENT,
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

const render = (element, container) => {
    const dom = element.tagName === TEXT_ELEMENT
        ? document.createTextNode("")
        : document.createElement(element.tagName);

    const isProperty = key => key !== "children";

    Object.keys(element.options).filter(isProperty).forEach(name => {
      dom[name] = element.options[name]
    })

    element.options.children.map(child => {
        render(child, dom)
    });

    container.appendChild(dom);
};

const Meact = {
    createElement,
    render,
};

/** @jsx Meact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

const container = document.getElementById("root");
Meact.render(element, container);
