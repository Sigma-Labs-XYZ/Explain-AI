export default async function fetchData(url) {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    return "unable to fetch data";
  }
}
