import {FriendlyGuy} from './friendlyguy.es6';

let andrea = new FriendlyGuy('Andrea', 'Stagi', 28);
let mark = new FriendlyGuy('Mark', 'Iozz', 27);
let matt = new FriendlyGuy('Matt', 'Lap', 29);

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
