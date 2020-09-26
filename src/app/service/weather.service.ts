import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class weatherService{
    apiKey = 'a4109177b2c2f50afcb693edd5c13f07';
    URI: string = '';

    constructor(public httpClient: HttpClient){
        this.URI = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=?`
    }

    getWeather(cityId: string, countryId: string){
        
       return this.httpClient.get(`${this.URI}${cityId}.${countryId}`);
    }

    listarPais(){
        return this.httpClient.get('./assets/country.json');
    }

    // const axios = require('axios');
    // const params = {
    //   access_key: 'a4109177b2c2f50afcb693edd5c13f07',
    //   query: 'New York'
    // }
    
    // get('https://api.weatherstack.com/current', {params})
    //   .then(response => {
    //     const apiResponse = response.data;
    //     console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    //   }).catch(error => {
    //     console.log(error);
    //   });
}
