const cities = [
  "New York",
  "Huston",
  "Chicago"
]

// console.log('Init Push')
// console.log(cities)
// cities.push("Los Angeles");
// console.log(cities)
// console.log('End Push')
// console.log(cities)
// cities.pop()
// console.log(cities)
// console.log(cities)
// console.log('Init Unshift')
// cities.unshift('San Diego')
// console.log(cities)
// console.log('End Unshift')
// console.log('Init Shift')
// cities.shift()
// console.log(cities)
// console.log('End Shift')

// cities[0] //New York

// console.log(cities[0])


// console.log(hustonIndex)

// const chicagoIndex = cities.indexOf('Chicago')
// const chicago = cities[chicagoIndex]
// console.log(chicago)


const mapCities = cities.map(function(city){
  return `${city} is a City`;
})
console.log(cities)
console.log(mapCities)