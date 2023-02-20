const baseUrl = "http://localhost:4000";

export async function fetchTopics(setTopics) {
  try {
    const data = await fetch(`${baseUrl}/topics`);
    const json = await data.json();
    // setTopics(JSON.stringify(json));
    return json;
  } catch (e) {
    console.log(e);
  }
}
