const { twoSumExampleTS } = require('./codeExamples')
const { ChatCompletionRequestMessageRoleEnum } = require('openai')

const messages = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: 'You are an AI that calculates the complexity of a piece of code. you are given a piece of code and you need to calculate the complexity of it in any programming language. you have to calculate the time complexity and space complexity also you have to give a short explanation. You will return a JSON with this fields TimeComplexity, SpaceComplexity and Explanation. like: \'{ "TimeComplexity": "", "SpaceComplexity": "",  "Explanation": ""}\'. '
  },
  {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: twoSumExampleTS
  },
  {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: '{"TimeComplexity": "O(n)", "SpaceComplexity": "O(n)", "Explanation": "The time complexity of the twoSum function is O(n), where n is the length of the input array nums. This is because the function iterates over the array once, and each iteration performs constant-time operations (such as map lookups and assignments).The space complexity of the function is also O(n), because in the worst case, the map can store all n elements of the input array (if there are no two elements that add up to the target). However, in the average case, the map will only need to store a few elements, so the space complexity can be considered closer to O(1) in practical scenarios."}'
  }
]

module.exports = { messages }
