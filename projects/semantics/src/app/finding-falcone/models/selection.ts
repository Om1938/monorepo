import { Planet } from './planet';
import { Vehicle } from './vehicle';

export interface Selection {
  selectedPlanet: Planet;
  selectedVehicle: Vehicle;
}
