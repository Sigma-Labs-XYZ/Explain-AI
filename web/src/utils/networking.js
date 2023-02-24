export const fetchData = async (url) => {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    console.log("unable to fetch data", e);
    return "unable to fetch data";
  }
};
