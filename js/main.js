//Coding time!
Dogs
Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
Execution result

Character inventory
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.

Here's the expected execution result.

Execution result
class Dog {
  // Initialize the dog
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  // Make the dog bark
  bark() {
    let sound = "Woof! Woof!";
    if (this.size > 60) {
      sound = "Grrr! Grrr!";
    }
    return sound;
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

Execution result
// Account class
class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }
  // Add an amount to the bank balance
  credit(amount) {
    this.balance += amount;
  }
  // Return account description
  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
}

const accountList = [];
// Add 3 accounts to the list
accountList.push(new Account("Sean"));
accountList.push(new Account("Brad"));
accountList.push(new Account("Georges"));

// Credit and describe each account
accountList.forEach(account => {
  account.credit(1000);
  console.log(account.describe());
});
