const bigOController = require('express').Router()
require('dotenv').config()

const { messages } = require('../constants/trainingMessages')
const apiKey = process.env.OPENAI_API_KEY

const { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } = require('openai')
const openAiConfiguration = new Configuration({ apiKey })
const openai = new OpenAIApi(openAiConfiguration)
// const bigO = '{"TimeComplexity": "O(1)", "SpaceComplexity": "O(n!)", "Explanation": "asjkdh ajshd jahsd kjhkaldhsfl asdfk asdkfja sfkja sdkjfh askfas kdfsa fhashf kasdhk k hksdfh kahf lihfiu hkjhdsf kdkfahiukehfk sfjhasdk fjhask fajehf ksjdfhkjasdfh kaljdfhiuefhkjdfkj haksdhfkjakl sjdhflkasjdfh klasdfhlkas dfhkashfkashfkasjfhkasfhkasfhkjashdkf asdkfahsdk fkjhf iauwhfksad fhkjasdhf ajkffh dksjfhasdfknskfjskncknndf jksdfkjadhf akjdf kadjfhiufeuierhwieurwuieryweryuiweruyiwer ywer rewrwerwerweryiuyuisfjklfk$The time complexity of the twoSum function is O(n), where n is the length of the input array nums. This is because the function iterates over the array once, and each iteration performs constant-time operations (such as map lookups and assignments).The space complexity of the function is also O(n), because in the worst case, the map can store all n elements of the input array (if there are no two elements that add up to the target). However, in the average case, the map will only need to store a few elements, so the space complexity can be considered closer to O(1) in practical scenarios."}'
// const bigO = '{"TimeComplexity": "dsfasdfasdfasdf", "SpaceComplexity": "O(n!)", "Explanation": "The time complexity of the twoSum function is O(n), where n is the length of the input array nums. This is because the function iterates over the array once, and each iteration performs constant-time operations (such as map lookups and assignments).The space complexity of the function is also O(n), because in the worst case, the map can store all n elements of the input array (if there are no two elements that add up to the target). However, in the average case, the map will only need to store a few elements, so the space complexity can be considered closer to O(1) in practical scenarios."}'

bigOController.post('/', async (req, res, next) => {
  try {
    const { code } = req.body
    console.log('code', code)
    const bigOResult = await getBigO(code)
    res.status(200).json(JSON.parse(bigOResult))
  } catch (err) {
    console.log(err)
    next(err)
  }
})

module.exports = bigOController

async function getBigO (code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Delayed')
      resolve('{"TimeComplexity": "O(1)", "SpaceComplexity": "O(n!)", "Explanation": "The time complexity of the twoSum function is O(n), where n is the length of the input array nums. This is because the function iterates over the array once, and each iteration performs constant-time operations (such as map lookups and assignments).The space complexity of the function is also O(n), because in the worst case, the map can store all n elements of the input array (if there are no two elements that add up to the target). However, in the average case, the map will only need to store a few elements, so the space complexity can be considered closer to O(1) in practical scenarios."}'
      )
    }, 1000)
  })
  // try {
  //   const completion = await openai.createChatCompletion({
  //     model: 'gpt-3.5-turbo',
  //     messages: [
  //       ...messages,
  //       {
  //         role: ChatCompletionRequestMessageRoleEnum.User,
  //         content: code
  //       }
  //     ]
  //   })
  //   return completion.data.choices[0]?.message?.content
  // } catch (error) {
  //   throw new Error(`Error getting BigO: ${error.message}`)
  // }
}
