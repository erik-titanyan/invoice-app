export const handleApiRequest = async (endpoint: string): Promise<any> => {
  try {
    const res = await fetch(
      `https://invoicesapi20210913135422.azurewebsites.net${endpoint}`
    );
    const json = await res.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};
