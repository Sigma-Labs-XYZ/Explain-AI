export default async function fetchData(url, method = "GET") {
  try {
    const apiResponse = await fetch(url, { method });
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    return "unable to fetch data";
  }
}
