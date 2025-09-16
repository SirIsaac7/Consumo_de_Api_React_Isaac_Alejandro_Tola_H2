import axios from "axios";

export interface Model{
    id: string
    name: string
    thumbnail: string
    viewerUrl: string
}

//const API_URL = "https://api.sketchfab.com/v3/models";
const API_URL = "https://dog.ceo/api/breeds/image/random";

/*export const fetchModels = async(query :string) : Promise<Model[]> => {
    try{
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                type: "models",
                count: 12,
            }
        });
        return response.data.results.map((item: any) => ({
            //En esta parte esta la informacion guardad y la va ir sacando (iterando)
            id: item.uid,
            name: item.name,
            thumbnail: item.thumbnails.images[0].url,
            viewerUrl: item.viewerUrl,
        }))
    }catch(error){
        console.error("El error es: ", error);
        return [];
    }
}*/
export const fetchModels = async (count: number = 15): Promise<Model[]> => {
  try {
    const requests = Array.from({ length: count }, () => axios.get(API_URL));
    const responses = await Promise.all(requests);
    console.log('responses --->', responses);
    return responses.map((response, idx) => ({
      id: `dog-${idx}`,
      name: "",
      thumbnail: response.data.message, 
      viewerUrl: response.data.message,
    }));
  } catch (error) {
    console.error("El error es: ", error);
    return [];
  }
};