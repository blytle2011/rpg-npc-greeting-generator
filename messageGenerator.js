const mess1 = ['Greetings', 'Hello', 'Well Met', 'Hail', 'Salutations'];
const mess2 = ['Adventurer', 'Traveler', 'Friend', 'Hero', 'Warrior'];
const mess3 = ['How do you fare?', 'Good to see you.', 'Are you well?', 'Do you need anything?', 'How can I be of assistance?'];

function friendlyGreeting(arr1, arr2, arr3) {
let greeting = (arr1[Math.floor(Math.random() * arr1.length)]) + ', ' + (arr2[Math.floor(Math.random() * arr2.length)]) + '. ' + (arr3[Math.floor(Math.random() * arr3.length)]);
alert(greeting);
}

friendlyGreeting(mess1, mess2, mess3)