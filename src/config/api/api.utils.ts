// below PROXY has been used for handling CORS errors
const PROXY = "https://evening-anchorage-65916.herokuapp.com";

export const handleApiRequest = async (endpoint: string): Promise<any> => {
  try {
    const res = await fetch(
      `${PROXY}/https://invoicesapi20210913135422.azurewebsites.net${endpoint}`,
      {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    const json = await res.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};
