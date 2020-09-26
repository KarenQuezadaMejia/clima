import { TestBed } from '@angular/core/testing';

import { weatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: weatherService = TestBed.get(weatherService);
    expect(service).toBeTruthy();
  });
});