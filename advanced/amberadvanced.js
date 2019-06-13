//Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motor and Truck
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
var vehicles = /** @class */ (function () {
    function vehicles(name, type, performanceModel, km, seats, fuelType, year) {
        this.name = "";
        this.type = "";
        this.performanceModel = "";
        this.km = "";
        this.seats = "";
        this.fuelType = "";
        this.year = "";
        this.name = name;
        this.type = type;
        this.performanceModel = performanceModel;
        this.km = km;
        this.seats = seats;
        this.fuelType = fuelType;
        this.year = year;
    }
    return vehicles;
}());
var motor = /** @class */ (function (_super) {
    __extends(motor, _super);
    function motor(name, type, performanceModel, km, seats, feulType, year, style) {
        var _this = _super.call(this, name, type, performanceModel, km, seats, feulType, year) || this;
        _this.style = "";
        _this.style = style;
        return _this;
    }
    motor.prototype.price = function () {
        return (+this.performanceModel + +this.seats) / +this.km * +this.year * 5000;
    };
    return motor;
}(vehicles));
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(name, type, performanceModel, km, seats, feulType, year, load) {
        var _this = _super.call(this, name, type, performanceModel, km, seats, feulType, year) || this;
        _this.load = "";
        _this.load = load;
        return _this;
    }
    truck.prototype.price = function () {
        return (+this.performanceModel + +this.seats) / +this.km * +this.year * 5000;
    };
    return truck;
}(vehicles));
var Mazda = new motor("Mazda", "Mazda6", 2.2, 50890, 5, "Diesel", 2014, "Saloon");
var ford = new motor("Ford", "Fiesta", 1.0, 26968, 5, "Petrol", 2016, "Hatchback");
var honda = new motor("Honda", "Jazz", 1.3, 15465, 5, "Petrol", 2018, "Hatchback");
var volkswagen = new truck("Volkswagen", "Caddy", 2.0, 115000, 2, "Petrol", 2016, 716);
var toyota = new truck("Toyota", "Hilux", 2.4, 2200, 5, "Diesel", 2019, 1120);
var mercedes = new truck("Mercedes-Benz", "Sprinter", 2.2, 264000, 3, "Petrol", 2011, 1060);
console.log(Mazda.price());
console.log(ford.price());
console.log(honda.price());
console.log(volkswagen.price());
console.log(toyota.price());
console.log(mercedes.price());
