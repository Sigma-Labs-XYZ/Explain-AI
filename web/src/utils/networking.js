// eslint-disable-next-line import/prefer-default-export
export const fetchData = async (url) => {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    return "unable to fetch data";
  }
};
