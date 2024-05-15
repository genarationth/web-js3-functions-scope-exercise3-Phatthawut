const friendLists = ["Joe", "Jason", "Jacob"];

console.log(friendLists);

console.log(`hello there "${friendLists[0]}" "${friendLists[1]}" "${friendLists[2]}"`);

const birthYearLists = [1990, 1995, 1985]

console.log(`There birth year is "${birthYearLists[0]}" "${birthYearLists[1]}" "${birthYearLists[2]}"`);

const ageCal = (friendYear) => {
        friendAge = 2024 - friendYear;
        return friendAge;
    };

    
const ageLists = [];

for (let i = 0; i < birthYearLists.length; i++) {
    //console.log(birthYearLists[i]);
    ageLists.push(ageCal(birthYearLists[i]));
}

//console.log(ageLists);


const greetingEd = () => {
    console.log(`Welcome "${friendLists[0]}", you are ${ageLists[0]} "${friendLists[1]}", you are ${ageLists[1]} "${friendLists[2]}", you are ${ageLists[2]}`);
}

greetingEd();
