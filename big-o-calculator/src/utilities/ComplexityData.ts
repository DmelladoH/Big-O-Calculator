interface TComplexityData {
  color: string
  name: string
}

export enum ComplexityTypes {
  O1 = 'O(1)',
  OLogN = 'O(log n)',
  ON = 'O(n)',
  ONLogN = 'O(n log n)',
  ON2 = 'O(n^2)',
  O2N = 'O(2^n)',
  ONFactorial = 'O(n!)',
}

type ComplexityData = Record<ComplexityTypes, TComplexityData>

export function isOfTypeComplexity (str: string): str is ComplexityTypes {
  return Object.values(ComplexityTypes).includes(str as ComplexityTypes)
}

export const complexityData: ComplexityData = {
  [ComplexityTypes.O1]: { color: 'text-green-400', name: 'Constant' },
  [ComplexityTypes.OLogN]: { color: 'text-green-500', name: 'Logarithmic' },
  [ComplexityTypes.ON]: { color: 'text-yellow-500', name: 'Linear' },
  [ComplexityTypes.ONLogN]: { color: 'text-orange-500', name: 'Log-Linear' },
  [ComplexityTypes.ON2]: { color: 'text-red-500', name: 'Quadratic' },
  [ComplexityTypes.O2N]: { color: 'text-red-500', name: 'Exponential' },
  [ComplexityTypes.ONFactorial]: { color: 'text-red-500', name: 'Factorial' }
}
