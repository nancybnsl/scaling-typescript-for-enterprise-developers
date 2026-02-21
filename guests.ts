export interface Guest {
  name: string;
  interest: string;
}

export type Skier = Guest & { interest: "skiing" };
export type SpaEnthusiast = Guest & { interest: "spas" };
export type Foodie = Guest & { interest: "restaurants" };
export type ThrillSeeker = Guest & {
  interest: "adrenaline sports";
};
export type GuestWithActivity<GuestType> = GuestType extends Guest
  ? GuestType
  : never;