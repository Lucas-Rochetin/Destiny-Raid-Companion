const axios = require("axios")

const API_KEY = process.env.BUNGIE_API_KEY

const headers = {
  "X-API-Key": API_KEY
}

async function searchPlayer(name){

  const url = `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/3/${name}/0/`

  const response = await axios.get(url, { headers })

  return response.data

}

module.exports = { searchPlayer }