import {atomNames} from "./mydata";
import {atomObjects, Atom} from "./mydata";

/************ PART 1 OF THE PROGRAMMING ASSIGNMENT **********/
// Find the placeholder node in the HTML document
const div1 = document.getElementById("part1");

// Create ol element
const ol1 = document.createElement("ol");
// Add names in loop
for (const atom of atomNames) {
    const li = document.createElement("li");
    const name = document.createTextNode(`${atom}`);
    ol1.appendChild(li);
    li.appendChild(name);
}
div1?.appendChild(ol1);

/************** PART 2 OF THE ASSIGNMENT **************/
// Find the placeholder node in the HTML document
const div2 = document.getElementById("part2");

// Create ol element
const ol2 = document.createElement("ol");
// Add names in loop
for (const atom of atomObjects) {
    const li = document.createElement("li");
    if (atom.weight <= 150) {
        const name = document.createTextNode(`${atom.name} (weight: ${atom.weight})`);
        li.classList.add("light");
        ol2.appendChild(li);
        li.appendChild(name);
    } else {
        const name = document.createTextNode(`${atom.name} (weight: ${atom.weight})`);
        li.classList.add("heavy");
        ol2.appendChild(li);
        li.appendChild(name);
    }
}
div2?.appendChild(ol2);

/************ PART 3 OF THE ASSIGNMENT *****************/
//Creat part3 div
const div3 = document.getElementById("part3");
//Create table
const table = document.createElement("table");
//Create thead for labels
const thead = document.createElement("thead");
//Create first tr
const tr1 = document.createElement("tr");
//Create Atom and Weight th's
const th1 = document.createElement("th");
const th2 = document.createElement("th");
//Add text nodes to th's
const left_title = document.createTextNode("Atom");
const right_title = document.createTextNode("Weight");
//Append text nodes to th's
th1.appendChild(left_title);
th2.appendChild(right_title);
//Append th's to tr1
tr1.appendChild(th1);
tr1.appendChild(th2);
//Append tr1 to thead
thead.appendChild(tr1);

//Create tbody
const tbody = document.createElement("tbody");
//Counter for loop
let counter: number = 0;
//For loop to dynamically add tr's and td's
for (const atom of atomObjects) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    //Create text nodes for name and weight
    const name = document.createTextNode(`${atom.name}`);
    const weight = document.createTextNode(`${atom.weight}`);
    if (atom.weight <= 150) {
        tr.classList.add("light");
    } else {
        tr.classList.add("heavy");
    }
    //Append text nodes
    td1.appendChild(name);
    td2.appendChild(weight);
    //Append td's to tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    //Add class for background color
    counter % 2 == 0 ? tr.classList.add("even") : tr.classList.add("odd");
    counter++;
    //Append to tbody
    tbody.appendChild(tr);
}
//Append thead to table
table.appendChild(thead);
//Append tbody to table
table.appendChild(tbody)
//Append table to div3
div3?.appendChild(table);