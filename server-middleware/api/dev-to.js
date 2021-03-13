require('dotenv').config()
const axios = require('axios')

export default async function(req, res) {
  const { status, headers, data } = await axios.get(
    `https://dev.to/api/${req.url}`,
    {
      // Three seconds
      timeout: 10000 * 3,
      headers: {
        'api-key': process.env.DEV_TO_API_KEY
      }
    }
  )
  console.log(status, headers, data)
  // Prepare and return the response
  res.statusCode = status
  res.setHeader('Content-Type', headers['content-type'])
  res.end(JSON.stringify(data))
}
