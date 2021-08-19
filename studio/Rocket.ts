/**
 * Specs for Rocket:
 *  - Defined in Rocket.ts.
 *  - Properties:
 *      - name should be a string.
 *      - totalCapacityKg should be a number.
 *      - cargoItems should be an array of Cargo objects.
 *          - Should be initialized to an empty array []
 *      - astronauts should be an array of Astronaut objects.
 *          - Should be initialized to an empty array []
 *  - Constructor:
 *      - Parameter name should be a string.
 *      - Parameter totalCapacityKg should be a number.
 *      - Sets value of this.name and this.totalCapacityKg
 *  - Methods:
 *      - sumMass( items: Payload[] ): number
 *          - Returns the sum of all items using each item's massKg property
 *      - currentMassKg(): number
 *          - Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
 *      - canAdd(item: Payload): boolean
 *          - Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
 *      - addCargo(cargo: Cargo): boolean
 *          - Uses this.canAdd() to see if another item can be added.
 *              - If true, adds cargo to this.cargoItems and returns true.
 *              - If false, returns false.
 *      - addAstronaut(astronaut: Astronaut): boolean
 *          - Uses this.canAdd() to see if another astronaut can be added.
 *          - If true, adds astronaut to this.astronauts and returns true.
 *          - If false, returns false.
 */

import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    return items.reduce(
      (acc: number, cur: Payload): number => acc + cur.massKg,
      0
    );
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;
  }
}
