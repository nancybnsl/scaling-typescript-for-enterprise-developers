import { skiLesson } from "./activities";



type HotelCategory = "gold" | "silver" | "bronze";

class Hotel {
  readonly id: string;
  readonly name: string;
  cost: number;
  amenities: string[] = [];
  category: HotelCategory;

  constructor(
    id: string,
    name: string,
    cost: number,
    category: HotelCategory
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.category = category;
  }

  addAmenity(amenity: string) {
    this.amenities.push(amenity);
  }
  describeHotel(): string {
    return `The ${this.category} category ${
      this.name
    } costs $${
      this.cost
    } and includes the following amenities: ${this.amenities.join(
      ", "
    )}.`;
  }
}

const peakLodge = new Hotel(
  "06",
  "Peak Lodge",
  250,
  "silver"
);
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
let description = peakLodge.describeHotel();
console.log(description);
console.log(skiLesson);