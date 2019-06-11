export class WeatherItem {
    public city: string;
    public description: string;
    public temperature: number;
    public country: string;

    constructor(city: string, description: string, temperature: number, country: string) {
        this.city = city;
        this.description = description;
        this.temperature = temperature;
        this.country = country;
    }
}
