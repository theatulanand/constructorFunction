
function Person(name,skill,city){
    this.name = name,
    this.skill = skill,
    this.city = city
}

var amar = new Person("Amar","Singer","Goa");

var akbar = new Person("Akbar","Chef","Mumbai");

var antony = new Person("Antony","Magician","Kashmir");


function borrowSkill(skill){
    this.borrowSkill = skill;
}

borrowSkill.call(amar,"Chef");

borrowSkill.call(akbar,"Magician");

borrowSkill.call(antony,"Singer");

console.log(amar);
console.log(akbar);
console.log(antony);


