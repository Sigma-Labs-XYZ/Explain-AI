const baseUrl = "http://localhost:4000";

export async function fetchTopics() {
  try {
    const data = await fetch(`${baseUrl}/topics`);
    const json = await data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}
