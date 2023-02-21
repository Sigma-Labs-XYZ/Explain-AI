export const fetchData = async (endpoint) => {
    try {
      const res = await fetch(endpoint)
      console.log(res)
      console.log(endpoint)
      const json = await res.json()
      return json
    }
    catch(err) {
      console.log(err)
      return null
    }
  }