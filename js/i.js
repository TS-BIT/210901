

const createDiv = () => document.createElement("DIV");


const createDivText = (text) => {
    const div = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(texNode);
    return element;
}
*/

const data = ['Labas', 'pats', 'tu labas'];
console.log(data);
const sorting =  data.sort( function(a, b) {
    return a.charAt(2).toLowerCase().charCodeAt() - b.charAt(2).toLowerCase().charCodeAt()
  });
console.log(data);
/*
function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
*/



const data2 = new Set(['Labas', 'pats', 'tu labas']);
const data3 = new Map([
    ['viens', 'Labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']

]);

const data4 = {
    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'
}

/*
const createDivText = (text) => {
    const div = document.createElement('DIV');
    const textNode = data[i];
    element.appendChild(texNode);
    return element;
}
*/




const root = document.querySelector('#root');

root.appendChild(crev());

const createDiv = () => document.createElement("DIV1");
const createDiv = () => document.createElement("DIV2");
const createDiv = () => document.createElement("DIV3");



/*
function createDivOld() {
  const div = document.createElement('DIV');
  return div;
}


function createDivOld1() {
  const div = document.createElement('DIV');
  return div;
}

const createDivOld2 = () => {
    const div = document.createElement('DIV');
    return div;
}

const createDivOld3 = () => document.createElement('DIV');

// viena eilute iki kabletaskio; jei turime arow f-j ji be kurlibratu 
// dvieju ar daugiau eiluciu  f-jo susikuria pacios this. zodeli
// vienos eilutes f-j pasiskolina zodeli is auksciau
*/
/*
function constructorDOM(inputTag, content, outputTag) {
    const NODE_Element = document.createElement(inputTag);
    const NODE_Content = document.createTextNode(content);
    NODE_Element.appendChild(NODE_Content);
    document.getElementById(outputTag).appendChild(NODE_Element);
}

constructorDOM("div", "this is component", "root");
*/



/*
function addElement () {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
*/
