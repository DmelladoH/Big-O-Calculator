function mockData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Delayed')
      resolve('{"TimeComplexity": "O(1)", "SpaceComplexity": "O(n!)", "Explanation": "The time complexity of the twoSum function is O(n), where n is the length of the input array nums. This is because the function iterates over the array once, and each iteration performs constant-time operations (such as map lookups and assignments).The space complexity of the function is also O(n), because in the worst case, the map can store all n elements of the input array (if there are no two elements that add up to the target). However, in the average case, the map will only need to store a few elements, so the space complexity can be considered closer to O(1) in practical scenarios."}'
      )
    }, 1000)
  })
}

module.exports = { mockData }
