const api_key = "85712eadf2b7f543b34439edf7102efe";
const base_url = "https://api.themoviedb.org/3";


export const getpopularmovie = async () => {
    const response = fetch(`${base_url}/movie/popular?api_key=${api_key}`);
    const data = await response.json();
    return data.results;
};

export const searchpopularmovie = async (query) => {
    const response = fetch(`${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
