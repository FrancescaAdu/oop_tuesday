const dinosaur = {
    name: "Helena",
    species: "Brontosaurus",
    introduce: function() {
  console.log(`Hi! My name is Helena!`)
 }
}

const dinosaurTwo = {
    name: "Adrian",
    species: "Velociraptor",
    introduce: function() {
  console.log(`Hi! My name is Adrian!`)
 }
}

const dinosaurThree = {
    name: "Miriam",
    species: "Triceratops",
    introduce: function() {
        console.log(`Hi! My name is ${this.name}!`);
    }
}

// console.log(dinosaur.name);
dinosaur.introduce();

dinosaurTwo.introduce();

dinosaurThree.introduce();
