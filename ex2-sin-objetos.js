const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach(student => console.log("Siguiente nombre: " + student))

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const mariaIndex = students.findIndex(student => student == "Maria")
console.log(mariaIndex)

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const isKaterinaHere = students.some(student => student == "Katerina")
console.log(isKaterinaHere)

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const firstShorterName = students.find(student => student.length <= 5)
console.log(firstShorterName)

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const shorterStrings = students.every(student => student.length >= 4)
console.log(shorterStrings)

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const namesWithI = students.filter(student => "i") 
console.log(namesWithI)

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
const initialFromNames = students.map(student => student[0])
console.log(initialFromNames)
