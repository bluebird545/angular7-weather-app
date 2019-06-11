import { Weather } from './weather';

export const WEATHERS: Weather[] = [
    // { city: 'Seoul', description: 'Snowy', temperature: -2 },
    // { city: 'Columbia', description: 'Windy', temperature: 50 },
    // { city: 'Tokyo', description: 'Rainy', temperature: 70 },
    // { city: 'Athens', description: 'Sunny', temperature: 90 },
    { city: 'Seoul', description: 'Snowy', temperature: -2, country: 'South Korea', icon: 'string' },
    { city: 'Columbia', description: 'Windy', temperature: 50, country: 'United States', icon: 'string' },
    { city: 'Tokyo', description: 'Rainy', temperature: 70, country: 'Japan', icon: 'string' },
    { city: 'Athens', description: 'Sunny', temperature: 90, country: 'Greece', icon: 'string' },
];
