const { mockData } = require('../mockData/mockData')

const bigOController = require('express').Router()
require('dotenv').config()

const { messages } = require('../constants/trainingMessages')
const apiKey = process.env.OPENAI_API_KEY

const { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } = require('openai')
const openAiConfiguration = new Configuration({ apiKey })
const openai = new OpenAIApi(openAiConfiguration)

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
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        ...messages,
        {
          role: ChatCompletionRequestMessageRoleEnum.User,
          content: code
        }
      ]
    })
    const result = completion.data.choices[0]?.message?.content
    console.log('result', result)
    return result
  } catch (error) {
    throw new Error(`Error getting BigO: ${error.message}`)
  }
}
