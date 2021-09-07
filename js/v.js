

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

const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

animals.forEach((value, index) => console.log(value, index));

// Komponentas
const createDivText = (text) => {
    const div = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(texNode);
    return element;
}
root.appendChild(createDivText(animals.forEach((value, index) => console.log(value, index))));



animals.forEach(animal => {
    const div = createDivText(animal); // elemto sukurimas
    root.appendChild(div); // nuleidimas ant zemes i root diva
});


const addClass = (element, className) => element.classList.add(className);

const root = document.querySelector('#root');

root.appendChild(createDivText('Valio'));


animals.forEach(animal => {
    const div = createDivText(animal); // elemento sukurimas
    root.appendChild(div, 'grozis'); // nuleidimas ant zemes i root diva
});

animals.forEach(animal => {
    // const div = createDivText(animal); // elemento sukurimas
    // root.appendChild(div, 'grozis'); // nuleidimas ant zemes i root diva
    const div = GrazusCreateDivText(animal, 'grozis');
    root.appendChild(div);  // nuleidimas ant zemes i root diva

});


const addClass = (element, className) => element.class.List.add(className);

const withClassName = (element, className) => element.class.List.add(className);

// HOC

const GrazusCreateDivText = (text, className) => {
    const div = createDivText(text);
    withClassName(div, className);
    return div;
}

const booksTypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},
{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},
{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},
{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';

/*
fetch('https://in3.dev/knygos/types/')
    .then(response =>.json())
    .then(data => {
        forEach(type => {
                const div = GrazusCreateDivText(type.title, 'grozis');
                root.appendChild(div); // nuleidimas ant zemes i root diva
        })
    })
*/

JSON.parse(booksTypes).forEach(type => {
    const div = GrazusCreateDivText(type.title, 'grozis');
    root.appendChild(div); // nuleidimas ant zemes i root diva
});



