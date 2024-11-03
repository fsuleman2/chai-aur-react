function customRender(reactElement, container) {
//   //how to inject?
//   //we need to first create DOM element in tree to inject, we can do it by below code
//   const domElement = document.createElement(reactElement.type); //element created but empty i mean no value

//   domElement.innerHTML = reactElement.children; //value set

//   //now setting attribute

//   domElement.setAttribute('href', reactElement.props.href);
//   domElement.setAttribute('target', reactElement.props.target);

//   //final step is to append that to contianer

//   container.appendChild(domElement);

//above code is not modular, if we have more no. of attributes, we need set it manually everytime, we can do this now by using loop
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for(const prop in reactElement.props){
    if(prop === 'children') //if we have children in props
        continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
}
container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to Visit Google",
};

const mainContainer = document.querySelector('#root');

//whatever element we have like reactElement, that will be injected in root
customRender(reactElement, mainContainer); //(what to inject, where to inject)
