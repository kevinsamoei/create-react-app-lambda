// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler(event, context) {
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random", { headers: { Accept: "application/json" } })
    const data = response.data
    console.log(data.joke)
    console.info("this is an async dad jokes serverless function")
    console.warn("warn log here")
    console.debug("just a debug log")
    console.error("not an error. an test error log it is")
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
