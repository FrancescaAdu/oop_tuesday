class Dino {
    constructor(name, species, diet) {
      this.name = name;
      this.species = species;
      this.diet = diet;
    }
  
    introduce() { // instance method
      console.log(`My name is ${this.name}`)
    }
  }
  
  
  class Triceratops extends Dino {

    static extinct = false;

    static toggleExtinction() {
        Triceratops.extinct = !Triceratops.extinct;
    }

    constructor(name) {
      super(name, 'Triceratops', 'plants')
    }
  
    charge(enemy) {
      console.log(`The enraged ${this.species} charges at the ${enemy}!`);
    }
  }

  const mark = new Triceratops("Mark");
  mark.charge('Sasuke')

  mark.introduce()
  console.log(mark.name)
  console.log(mark.species)
  console.log(mark.diet)

  Triceratops.toggleExtinction()
  console.log(Triceratops.extinct)