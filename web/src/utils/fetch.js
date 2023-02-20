export const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/topics')
      const json = await res.json()
      return JSON.stringify(json.topic)
    }
    catch(err) {
      console.log(err)
      return null
    }
  }