interface Activity<AttendeeType> {
  name: string;
  location: string;
  attendees: AttendeeType[];
}

interface Guest {
  name: string;
  interest: string;
}

type Skier = Guest & { interest: "skiing" };
type SpaEnthusiast = Guest & { interest: "spas" };
type Foodie = Guest & { interest: "restaurants" };
type ThrillSeeker = Guest & {
  interest: "adrenaline sports";
};

type GuestWithActivity<GuestType> = GuestType extends Guest ? GuestType : never;
const skiLesson: Activity<GuestWithActivity<Skier | ThrillSeeker>> = {
  name: "Steeps Clinic",
  location: "Matterhorn Gondola",
  attendees: [
    {
      name: "Jessica Sweet",
      interest: "skiing"
    },
    {
      name: "Jason Williams",
      interest: "adrenaline sports"
    }
  ]
};

const cookingClass : Activity<GuestWithActivity<Foodie>> = {
  name: "Thai Cooking Class",
  location: "West Kitchen",
  attendees: [
    {
      name: "Leon Vida",
      interest: "restaurants"
    }
  ]
};

const massage : Activity<GuestWithActivity<SpaEnthusiast>> = {
  name: "Hot Stone Massage",
  location: "Lotus Spa Lounge",
  attendees: [
    {
      name: "Jordan James",
      interest: "spas"
    }
  ]
};

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
