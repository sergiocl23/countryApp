import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-captial-page',
  templateUrl: './by-captial-page.component.html',
  styles: ``
})
export class ByCaptialPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ){}

  searchByCapital( term: string): void {
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
