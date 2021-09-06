

const createDiv = () => document.createElement("DIV");
const root = document.querySelector('#root');

root.appendChild(createDiv());


const createDivText = (text) => {
    const div = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(texNode);
    return element;
}
root.appendChild(createDivText('Valio'));


const data = ['Labas', 'pats', 'tu labas'];
console.log(data);
/*
data.sort(function(a, b) {
  let nameA = a.name.toUppercase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
  });
*/
  data.sort(function(a, b) {
      let nameA = a[2].toUpperCase();
      let nameB = b[2].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
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


/*
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
*/

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

const createDiv = () => document.createElement("DIV");

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
// ka antroje eiluteje pasiskoliname, ta trecioje eiluteje graziname 
// dvieju ar daugiau eiluciu  f-jo susikuria pacios this. zodeli
// vienos eilutes f-j pasiskolina zodeli this. is auksciau esancios f-jos ar klases, t.y. kokiame scoupe f-ja buvo iskviesta, 
o jei f-ja neiskvieciama tai ji paima is klases
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


