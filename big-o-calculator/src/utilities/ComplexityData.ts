interface TComplexityData {
  color: string
  name: string
}

export enum ComplexityType {
  O1 = 'O(1)',
  OLogN = 'O(log n)',
  ON = 'O(n)',
  ONLogN = 'O(n log n)',
  ON2 = 'O(n^2)',
  O2N = 'O(2^n)',
  ONFactorial = 'O(n!)',
}

type ComplexityData = Record<ComplexityType, TComplexityData>

export function isOfTypeComplexity (str: string): str is ComplexityType {
  return Object.values(ComplexityType).includes(str as ComplexityType)
}

export const complexityData: ComplexityData = {
  [ComplexityType.O1]: { color: 'text-green-400', name: 'Constant' },
  [ComplexityType.OLogN]: { color: 'text-green-500', name: 'Logarithmic' },
  [ComplexityType.ON]: { color: 'text-yellow-500', name: 'Linear' },
  [ComplexityType.ONLogN]: { color: 'text-orange-500', name: 'Log-Linear' },
  [ComplexityType.ON2]: { color: 'text-red-500', name: 'Quadratic' },
  [ComplexityType.O2N]: { color: 'text-red-500', name: 'Exponential' },
  [ComplexityType.ONFactorial]: { color: 'text-red-500', name: 'Factorial' }
}
