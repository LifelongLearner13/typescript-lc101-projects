/**
 * Specs for Astronaut:
 *  - Defined in Astronaut.ts
 *  - Implements the Payload interface
 *  - Properties
 *      - massKg should be a number.
 *      - name should be a string.
 *  - Constructor
 *      - Parameter massKg should be a number.
 *      - Parameter name should be string.
 *      - Sets value of this.massKg and this.name.
 */
import { Payload } from './Payload';

export class Astronaut implements Payload {
  massKg: number;
  name: string;

  constructor(massKg: number, name: string) {
    this.massKg = massKg;
    this.name = name;
  }
}
