// export class Weather {
//     public city: string;
//     public description: string;
//     public temperature: number;
//
//     constructor(city: string, description: string, temperature: number) {
//         this.city = city;
//         this.description = description;
//         this.temperature = temperature;
//     }
// }
export class Weather {
    public city: string;
    public description: string;
    public temperature: number;
    public country: string;
    public icon: string;

    constructor(city: string, description: string, temperature: number, country: string, icon: string) {
        this.city = city;
        this.description = description;
        this.temperature = temperature;
        this.country = country;
        this.icon = icon;
    }
}
