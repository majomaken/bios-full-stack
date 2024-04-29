// const myCat = {
//   name: 'Mila',
//   color: 'Black',
//   numberOfEyes: 1,
//   hasHair: false,
//   genre: 'Helicopter',
//   hungry: 10,
//   eat: function(time) {
//     console.log('Mi gato está comiendo a las ', time)
//     return myCat.hungry = 10
//   }
// }

// const day = 24
// let eatTimes = 0

// for(let i = 0; i <= day; i++) {
//   myCat.hungry = myCat.hungry - 1
//   // console.log('Valor del hambre de mi gato',myCat.hungry)
//   if (myCat.hungry === 0) {
//     eatTimes = eatTimes + 1
//     console.log(myCat.eat(i));
//   }
// }

function cat(name, color, numberOfEyes, hasHair, genre, hungry) {
  this.name = name
  this.color = color
  this.numberOfEyes = numberOfEyes
  this.hasHair = hasHair
  this.genre = genre
  this.hungry = hungry
  this.paws = 4
  this.eat = function() {
    console.log(`${this.name} está comiendo`)
    return this.hungry = 10
  }
}

const cat1 = new cat(
  'Mila',
  'Orange',
  2,
  true,
  '',
  20
)

const cat2 = new cat(
  'Jacaranda',
  'Grey',
  2,
  true,
  '',
  10
)

console.log(cat1.paws)
cat2.paws = 3
console.log(cat2.name + ' tiene ' + cat2.paws + ' patas')

