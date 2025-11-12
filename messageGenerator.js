function friendlyGreeting(arr, arr, arr) {
const messPart1 = ['Greetings', 'Hello', 'Well Met', 'Hail', 'Salutations'];
const messPart2 = ['Adventurer', 'Traveler', 'Friend', 'Hero', 'Warrior'];
const messPart3 = ['How do you fare?', 'Good to see you.', 'Are you well?', 'Do you need anything?', 'How can I be of assistance?'];
let greeting = (messPart1[Math.floor(Math.random() * messPart1.length)]) + ',' + (messPart2[Math.floor(Math.random() * messPart2.length)]) + '.' + (messPart3[Math.floor(Math.random() * messPart3.length)]);
alert(greeting);
}