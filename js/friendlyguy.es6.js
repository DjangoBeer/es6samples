import {Person} from './person.es6';
import '../node_modules/babel/polyfill'

// 1. Classes
export class FriendlyGuy extends Person {
  // 2. Default parameter
  constructor(firstName, lastName, age=18) {
    super(firstName, lastName, age);
    this._friends = [];
  }

  hasFriend(friend) {
    for (let currentFriend in this._friends) {
      if (this._friends[currentFriend] == friend) {
        return true;
      }
    }
    return false;
  }

  addFriend(friend) {
    if (!(this.hasFriend(friend))) {
      this._friends.push(friend);
    } else {
      return;
    }
    friend.addFriend(this);
  }

  pullEar() {
    let that = this;
    var pullEarActions = {
      [Symbol.iterator]: function*() {
        for (let i = 1; i <= that._age; i++) {
          yield i;
        }
      }
    };
    return pullEarActions;
  }

  showFriends() {
    // 4. Arrows
    this._friends.forEach(f =>
      // 3. Template Strings
      // 4. Unlike functions, arrows share the same lexical this as their surrounding code
      console.log(`${this._firstName} and ${f._firstName} are friends`)
    );
  }
}