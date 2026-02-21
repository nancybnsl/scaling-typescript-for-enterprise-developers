class City {
    name: string;
    country: string;
    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
    }   
}

const berlin = new City("Berlin", "Germany");
console.log(berlin.name);   
console.log(berlin.country);
