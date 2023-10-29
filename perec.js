class Dog {
    constructor(name) {
      this.name = name;
      this.energy = 100;
      this.happiness = 100;
    }
  
    bark() {
      console.log("Woof! Woof!");
      this.energy -= 10;
      this.happiness += 5;
      this.checkStatus();
    }
  
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
      this.energy -= 15;
      this.happiness += 10;
      this.checkStatus();
    }
  
    checkStatus() {
      console.log(`${this.name}'s energy: ${this.energy}, happiness: ${this.happiness}`);
      if (this.energy <= 0) {
        console.log(`${this.name} is tired. Time to rest.`);
        this.rest();
      }
    }
  
    rest() {
      console.log(`${this.name} is taking a nap.`);
      this.energy = 100;
    }
  }
  
  const perec = new Dog("Perec");
  
  perec.bark();
  perec.fetch();
  perec.bark();
  