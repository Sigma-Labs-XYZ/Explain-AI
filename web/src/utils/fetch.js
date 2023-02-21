export const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/topics')
      console.log({res})
      const json = await res.json()
      console.log(json)
      return JSON.stringify(json.topic)
    }
    catch(err) {
      console.log(err)
      return null
    }
  }