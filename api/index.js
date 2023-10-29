import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
		data: { data },
	} = await axios.get(
		`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
		{
			params: {
				bl_latitude: bl_lat ? bl_lat : "51.15543993776612",
				tr_latitude: tr_lat ? tr_lat : "52.41257834546226",
				bl_longitude: bl_lng ? bl_lng : "0.39587210719369",
				tr_longitude: tr_lng ? tr_lng : "0.92812119686502",
				limit: '30',
				currency: 'USD',
				lunit: 'km',
				lang: 'en_US',
			},
			headers: {
				'X-RapidAPI-Key':
					'533785e320msh9172b5fdd4d6c4ap1ad5c8jsn3ea7693f22e6',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
			},
		}
	);

    return data;
  } catch (error) {
    return null;
  }
};