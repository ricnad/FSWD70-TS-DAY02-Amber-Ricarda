//Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motor and Truck
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
class vehicles {
	name = "";
	type = "";
	performanceModel = "";
	km= "";
	seats = "";
	fuelType = "";
	year = "";
constructor(name, type, performanceModel, km, seats, fuelType, year) {
	this.name = name;
	this.type = type;
	this.performanceModel = performanceModel;
	this.km = km;
	this.seats = seats;
	this.fuelType = fuelType;
	this.year = year;
}
}

class motor extends vehicles {
	style = "";
constructor(name, type, performanceModel, km, seats, feulType, year, style){
	super(name, type, performanceModel, km, seats, feulType, year)
	this.style = style;
}
price(){
	return (+this.performanceModel + +this.seats) / +this.km * +this.year *5000 
}
}

class truck extends vehicles {
	load = "";
constructor(name, type, performanceModel, km, seats, feulType, year, load ){
	super(name, type, performanceModel, km, seats, feulType, year)
	this.load = load;
}
price(){
	return (+this.performanceModel + +this.seats) / +this.km * +this.year *5000 
}
}

let Mazda = new motor ("Mazda", "Mazda6", 2.2, 50890, 5, "Diesel", 2014, "Saloon")
let ford = new motor ("Ford", "Fiesta", 1.0, 26968, 5, "Petrol", 2016, "Hatchback")
let honda = new motor ("Honda", "Jazz", 1.3, 15465, 5, "Petrol", 2018, "Hatchback")

let volkswagen = new truck ("Volkswagen", "Caddy", 2.0, 115000, 2, "Petrol", 2016, 716)
let toyota = new truck ("Toyota", "Hilux", 2.4, 2200, 5, "Diesel", 2019, 1120)
let mercedes = new truck ("Mercedes-Benz", "Sprinter", 2.2, 264000, 3, "Petrol", 2011, 1060)

console.log(Mazda.price())
console.log(ford.price())
console.log(honda.price())
console.log(volkswagen.price())
console.log(toyota.price())
console.log(mercedes.price())