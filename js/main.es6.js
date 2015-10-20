import {Person} from './person.es6';

let andrea = new Person('Andrea', 'Stagi');
let mark = new Person('Mark', 'Iozz');
let matt = new Person('Matt', 'Lap');

andrea.addFriend(mark);
andrea.addFriend(mark);
andrea.showFriends();
mark.showFriends();

for (var age of andrea.pullEar()) {
  // truncate the sequence at 15
  if (age == 15) {
    break;
  }
  console.log(`${age}!!`);
}

console.log(mark.getIdentityCard());
