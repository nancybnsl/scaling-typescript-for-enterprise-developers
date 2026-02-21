class Hotel {
  readonly id: string;
  readonly name: string;
  cost: number;
  amenities: string[] = [];
  category: HotelCategory;

  constructor(id: string, name: string, cost: number, category: HotelCategory) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.category = category;
  }

  addAmenity(amenity: string) {
    this.amenities.push(amenity);
  }
  describeHotel(): string {
    return `The ${this.name} costs $${
      this.cost 
    }  for category ${this.category} and includes the following amenities: ${this.amenities.join(
      ", "
    )}.`;
  }
}
type HotelCategory = "gold" | "silver" | "bronze";
const peakLodge = new Hotel("06", "Peak Lodge", 250, "gold");
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
let description = peakLodge.describeHotel();
console.log(description);
