
export interface Weather {
    '@context': Array<ContextClass | string>;
    type: string;
    geometry: Geometry;
    properties: Properties;
}
  
export interface ContextClass {
    '@version': string;
    wx: string;
    geo: string;
    unit: string;
    '@vocab': string;
}
  
export interface Geometry {
    type: string;
    coordinates: Array<Array<number[]>>;
}
  
export interface Properties {
    updated: Date;
    units: string;
    forecastGenerator: string;
    generatedAt: Date;
    updateTime: Date;
    validTimes: string;
    elevation: Elevation;
    periods: Period[];
}
  
export interface Elevation {
    unitCode: string;
    value: number;
}
  
export interface Period {
    number: number;
    name: string;
    startTime: Date;
    endTime: Date;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: TemperatureUnit;
    temperatureTrend: null | string;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}
  
export enum TemperatureUnit {
    F = 'F',
    C = 'C',
}

//enum -- special type of data that allows you to go from
// one value to another representation of data
// enum - enumeration
