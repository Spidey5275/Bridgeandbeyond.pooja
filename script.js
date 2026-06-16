const facts = [

"Talking openly about emotions reduces stress and improves mental well-being.",

"Studies show supportive family communication improves adolescent resilience.",

"Regular mentoring can significantly increase self-confidence in teenagers.",

"Feeling heard activates areas of the brain associated with emotional regulation.",

"Strong parent-teen relationships are linked to better academic and social outcomes.",

"Seeking support early often prevents small challenges from becoming bigger problems."

];

let current = 0;

const factText = document.getElementById("factText");

function changeFact()
{
factText.textContent = facts[current];

current++;

if(current >= facts.length)
{
current = 0;
}
}

changeFact();

setInterval(changeFact, 5000);
