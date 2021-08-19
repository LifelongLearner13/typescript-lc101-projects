/**
 * Specs for Cargo:
 *  - Defined in Cargo.ts
 *  - Implements the Payload interface
 *  - Properties
 *      - massKg should be a number.
 *      - material should be a string.
 *  - Constructor
 *      - Parameter massKg should be a number.
 *      - Parameter material should be a string.
 *      - Sets value of this.massKg and this.material
 */
import { Payload } from './Payload';

export class Cargo implements Payload {
  massKg: number;
  material: string;

  constructor(massKg: number, material: string) {
    this.massKg = massKg;
    this.material = material;
  }
}
