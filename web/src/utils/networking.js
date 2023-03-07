export default async function fetchData(url, method = "GET", body = {}) {
  try {
    const apiResponse = await fetch(url, { method, body });
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    return "unable to fetch data";
  }
}
