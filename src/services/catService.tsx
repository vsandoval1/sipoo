const API_URL = 'https://cataas.com';


export const getCatImage = async (): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/cat`);
    if (!response.ok) {
      throw new Error('Error fetching cat image');
    }
    return response.url;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



// https://cataas.com/cat/says/jksdhsakjdhasd?fontSize=50&fontColor=red

type CatOptions = {
  fontSize?: number;
  fontColor?: string;
}

export const getCat = async (text: string, options?: CatOptions): Promise<string> => {
  const { fontSize, fontColor } = options || {};
  let url = `${API_URL}/cat/says/${encodeURIComponent(text)}`;

  const params = new URLSearchParams();
  if (fontSize) {
    params.append('fontSize', fontSize.toString());
  }
  if (fontColor) {
    params.append('fontColor', fontColor);
  }
  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching cat image');
    }
    return response.url;

  } catch (err) {
    console.log(err)
    throw err;
  }


}
