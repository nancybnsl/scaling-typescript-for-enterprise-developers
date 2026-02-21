var City = /** @class */ (function () {
    function City(name, country) {
        this.name = name;
        this.country = country;
    }
    return City;
}());
var berlin = new City("Berlin", "Germany");
console.log(berlin.name);
console.log(berlin.country);
