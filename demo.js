const axios = require('axios')

async function main() {
  // Setup client
  const apiKey = 'YOUR_API_KEY'
  const baseURL = 'https://api.trmlabs.com/public/'
  const client = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    // Set your API key to use it. Otherwise, code will default to anonymous calls. Note that anonymous calls have
    // a lower rate limit.
    auth: apiKey === 'YOUR_API_KEY' ? undefined : { username: apiKey, password: apiKey },
  })

  // Define the addresses you want to screen
  const request = [
    { address: '0xbF7BE1D1aa31E456f09FE9316e07Ac9F15B87De8' },
    { address: '0x2E100055A4F7100FF9898BAa3409085150355b4f' },
    // Add more as you go
  ]

  // Call endpoint
  const response = await client.post('/sanctions/screening', request)

  // Print response
  console.log(response.data)
  /**
   * [
   *   {
   *     address: '0xbF7BE1D1aa31E456f09FE9316e07Ac9F15B87De8',
   *     isSanctioned: false
   *   },
   *   {
   *     address: '0x2E100055A4F7100FF9898BAa3409085150355b4f',
   *     isSanctioned: false
   *   }
   * ]
   */
}

main()
  .then(() => console.log('Done'))
  .catch(console.error)
