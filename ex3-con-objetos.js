const flightReservations = [
  {
    flightNumber: "AA456",
    airline: "American Airlines",
    departure: {
      airport: "LAX Airport",
      date: "2023-11-02",
      time: "10:15 AM",
    },
    arrival: {
      airport: "JFK Airport",
      date: "2023-11-02",
      time: "03:30 PM",
    },
    passenger: {
      firstName: "Alice",
      lastName: "Smith",
      passport: "CD789012",
      contactInfo: {
        email: "alice.smith@example.com",
        phone: "+1 (234) 567-8901",
      },
    },
    seat: "15C",
    ticketClass: "Business",
    specialMeals: ["Vegetarian", "Kosher"],
    baggage: {
      checked: {
        quantity: 2,
        totalWeight: "35 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "8 kg",
      },
    },
    inFlightServices: ["Entertainment", "Wi-Fi"],
    loyaltyProgram: {
      name: "Frequent Flyer",
      points: 1800,
    },
    specialRequests: "None",
    totalPrice: "$650.00",
    paymentMethod: "Credit Card",
    bookingReference: "ABC123",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "A7",
  },
  {
    flightNumber: "DL789",
    airline: "Delta Airlines",
    departure: {
      airport: "SFO Airport",
      date: "2023-11-03",
      time: "09:45 AM",
    },
    arrival: {
      airport: "ORD Airport",
      date: "2023-11-03",
      time: "02:00 PM",
    },
    passenger: {
      firstName: "Bob",
      lastName: "Johnson",
      passport: "EF123456",
      contactInfo: {
        email: "bob.johnson@example.com",
        phone: "+1 (345) 678-9012",
      },
    },
    seat: "12F",
    ticketClass: "Economy",
    specialMeals: ["Vegetarian"],
    baggage: {
      checked: {
        quantity: 1,
        totalWeight: "20 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "6 kg",
      },
    },
    inFlightServices: ["Entertainment"],
    loyaltyProgram: {
      name: "SkyMiles",
      points: 1200,
    },
    specialRequests: "None",
    totalPrice: "$350.00",
    paymentMethod: "Debit Card",
    bookingReference: "DEF456",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "C12",
  },
  {
    flightNumber: "UA789",
    airline: "United Airlines",
    departure: {
      airport: "ORD Airport",
      date: "2023-11-04",
      time: "11:30 AM",
    },
    arrival: {
      airport: "LGA Airport",
      date: "2023-11-04",
      time: "04:45 PM",
    },
    passenger: {
      firstName: "David",
      lastName: "Brown",
      passport: "GH123456",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "+1 (456) 789-0123",
      },
    },
    seat: "7A",
    ticketClass: "First Class",
    specialMeals: ["Vegetarian", "Vegan"],
    baggage: {
      checked: {
        quantity: 2,
        totalWeight: "40 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "10 kg",
      },
    },
    inFlightServices: ["Entertainment", "Wi-Fi", "Gourmet Dining"],
    loyaltyProgram: {
      name: "MileagePlus",
      points: 2200,
    },
    specialRequests: "None",
    totalPrice: "$950.00",
    paymentMethod: "Credit Card",
    bookingReference: "GHI789",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "D5",
  },
  {
    flightNumber: "LH456",
    airline: "Lufthansa",
    departure: {
      airport: "FRA Airport",
      date: "2023-11-05",
      time: "10:00 AM",
    },
    arrival: {
      airport: "JFK Airport",
      date: "2023-11-05",
      time: "03:15 PM",
    },
    passenger: {
      firstName: "Sophia",
      lastName: "Lee",
      passport: "IJ123456",
      contactInfo: {
        email: "sophia.lee@example.com",
        phone: "+1 (567) 890-1234",
      },
    },
    seat: "19B",
    ticketClass: "Business",
    specialMeals: ["Gluten-free"],
    baggage: {
      checked: {
        quantity: 2,
        totalWeight: "30 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "8 kg",
      },
    },
    inFlightServices: ["Entertainment", "Wi-Fi"],
    loyaltyProgram: {
      name: "Miles & More",
      points: 1600,
    },
    specialRequests: "None",
    totalPrice: "$750.00",
    paymentMethod: "Credit Card",
    bookingReference: "IJK123",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "D5",
  },
  {
    flightNumber: "EK789",
    airline: "Emirates",
    departure: {
      airport: "DXB Airport",
      date: "2023-11-06",
      time: "08:00 AM",
    },
    arrival: {
      airport: "JFK Airport",
      date: "2023-11-06",
      time: "02:30 PM",
    },
    passenger: {
      firstName: "Michael",
      lastName: "Wilson",
      passport: "KL123456",
      contactInfo: {
        email: "michael.wilson@example.com",
        phone: "+1 (678) 901-2345",
      },
    },
    seat: "6F",
    ticketClass: "First Class",
    specialMeals: ["Vegetarian", "Halal"],
    baggage: {
      checked: {
        quantity: 3,
        totalWeight: "50 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "12 kg",
      },
    },
    inFlightServices: ["Entertainment", "Wi-Fi", "Spa Services"],
    loyaltyProgram: {
      name: "Skywards",
      points: 2500,
    },
    specialRequests: "None",
    totalPrice: "$1200.00",
    paymentMethod: "Credit Card",
    bookingReference: "KLM456",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "F10",
  },
  {
    flightNumber: "QF123",
    airline: "Qantas",
    departure: {
      airport: "SYD Airport",
      date: "2023-11-07",
      time: "12:15 PM",
    },
    arrival: {
      airport: "LAX Airport",
      date: "2023-11-07",
      time: "06:30 PM",
    },
    passenger: {
      firstName: "Emily",
      lastName: "Anderson",
      passport: "MN123456",
      contactInfo: {
        email: "emily.anderson@example.com",
        phone: "+1 (789) 012-3456",
      },
    },
    seat: "22D",
    ticketClass: "Economy",
    specialMeals: ["Gluten-free"],
    baggage: {
      checked: {
        quantity: 2,
        totalWeight: "25 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "7 kg",
      },
    },
    inFlightServices: ["Entertainment", "Wi-Fi"],
    loyaltyProgram: {
      name: "Qantas Frequent Flyer",
      points: 1400,
    },
    specialRequests: "None",
    totalPrice: "$550.00",
    paymentMethod: "Credit Card",
    bookingReference: "MNO123",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "G3",
  },
];

// Usa el método forEach para iterar por cada uno de los vuelos y mostrarlos por consola
flightReservations.forEach(flightReservation => console.log(flightReservation))

// Usa el método forEach para mostrar UNICAMENTE el pasajero de cada uno de lo vuelos
flightReservations.forEach(flightReservation => console.log(flightReservation.passenger))

// USa el método find para encontrar el vuelo número 'AA456'. Luego, muestra por consola el precio total de este vuelo
function searchFlight(){
  const flightSearched = flightReservations.find(flightReservation => flightReservation.flightNumber === 'AA456')
  return flightSearched.totalPrice
}
console.log(searchFlight())

// Usa el método find para encontrar el vuelo que ha reservado el señor bob.johnson@example.com. Muestra el objeto entero
function searchFlightByEmail(){
  const flightSearched = flightReservations.find(flightReservation => flightReservation.passenger.contactInfo.email === 'bob.johnson@example.com')
  return flightSearched.flightNumber
}
console.log(searchFlightByEmail())

// Usa el método some para averiguar si algún vuelo tiene como destino el aeropuerto de LPA GRAN CANARIA
function searchFlightByArrival(){
  const flightSearched = flightReservations.some(flightReservation => flightReservation.arrival.airport === "LPA GRAN CANARIA")
  return flightSearched
}
console.log(searchFlightByArrival())

// Usa el método every para comprobar si todos los vuelos están confirmados (isConfirmed)
function checkFlightsAreConfirmed(){
  const areConfirmed = flightReservations.every(flightReservation => flightReservation.isConfirmed === true)
  return areConfirmed
}
console.log(checkFlightsAreConfirmed())

// Usa el método filter para obtener todos los vuelos que tienen la puerta de embarque 'D5'
function checkD5DoorFlights(){
  const haveD5Door =  flightReservations.filter(flightReservation => flightReservation.gate === "D5")
  return haveD5Door
}
console.log(checkD5DoorFlights())

// Usa el método filter para obtener todos los vuelos que incluyen menús con comida Vegan. BONUS: Muestra por consola el nombre de la aerolínea
function filterVeganAirlines(){
  const veganFlights = flightReservations.filter(flightReservation => flightReservation.specialMeals.includes("Vegan"))
  veganFlights.forEach(veganflight => console.log(veganflight.airline))
}
filterVeganAirlines()

// Usa el método map para convertir cada objeto en un string con el formato 'numero de vuelo'-'compañía area'´Ejemplo : "AA456-American Airlines"
function changeFlightFormat(){
  const newFlightFormat = flightReservations.map(flight => flight.flightNumber + "-" + flight.airline)
  console.log(newFlightFormat)
}
changeFlightFormat()

// DIFICIL. USA el método reduce para sumar el conjunto total de puntos obtenidos de loyalyProgram de todos los tickets
function sumLoyalyProgramPoints(){
  const totalPoints = flightReservations.reduce((acum, flightReservation) => {
    return acum + flightReservation.loyaltyProgram.points
  }, 0)
  console.log(totalPoints)
}
sumLoyalyProgramPoints()