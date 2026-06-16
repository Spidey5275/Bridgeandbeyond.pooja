const facts = [

"Teenagers who feel emotionally supported are more resilient during stressful situations.",

"Open communication between parents and teenagers improves mental well-being.",

"Feeling heard activates brain regions associated with emotional regulation.",

"Supportive mentoring can significantly improve self-confidence and decision-making.",

"Strong parent-teen relationships are linked with better academic performance.",

"Seeking guidance early often prevents small concerns from becoming larger challenges."

];

let currentFact = 0;

const factText =
document.getElementById("factText");

function changeFact(){

factText.style.opacity = 0;

setTimeout(()=>{

factText.textContent =
facts[currentFact];

factText.style.opacity = 1;

currentFact++;

if(currentFact >= facts.length){
currentFact = 0;
}

},400);

}

changeFact();

setInterval(changeFact,5000);
