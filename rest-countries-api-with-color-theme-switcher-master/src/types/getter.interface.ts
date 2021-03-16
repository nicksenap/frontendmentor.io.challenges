import { State } from './state.interface';
import { Country } from './country.interface';

export interface Getter {
  getCountriesbyRegion(region: string, state: State): Country[];
}
