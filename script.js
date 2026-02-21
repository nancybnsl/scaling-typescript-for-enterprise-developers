var Hotel = /** @class */ (function () {
    function Hotel(id, name, cost, category) {
        this.amenities = [];
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
    }
    Hotel.prototype.addAmenity = function (amenity) {
        this.amenities.push(amenity);
    };
    Hotel.prototype.describeHotel = function () {
        return "The ".concat(this.name, " costs $").concat(this.cost, "  for category ").concat(this.category, " and includes the following amenities: ").concat(this.amenities.join(", "), ".");
    };
    return Hotel;
}());
var peakLodge = new Hotel("06", "Peak Lodge", 250, "bhg");
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
var description = peakLodge.describeHotel();
console.log(description);
