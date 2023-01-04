import { ComputedData, DataType } from '../CompoundData.js';

import { getNumberProperties } from './getNumberProperties.js';

/**
 * Returns the heavy atom count of a compound
 *
 * @param data Data of a compound data request to the PubChem API
 * @returns Computed Data
 */
export function getHeavyAtomCount(data: DataType): ComputedData {
  const heavyAtomCount = getNumberProperties(data, 'Heavy Atom Count');
  return heavyAtomCount;
}
