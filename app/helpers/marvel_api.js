// https://developer.marvel.com/

const API_TS = "ts=1",
  API_KEY = "apikey=29d20dc8a308a7128144a622a541237e",
  API_HASH = "hash=fcc9cc52eac26301dc673b4cd6544384",
  API_KEY_COMPLETE = `${API_TS}&${API_KEY}&${API_HASH}`,
  API_MARVEL = "https://gateway.marvel.com:443/v1/public",
  CHARACTERS = `${API_MARVEL}/characters?${API_KEY_COMPLETE}`,
  CHARACTER_ID = `${API_MARVEL}/characters/`,
  CHARACTER_NAME = `${API_MARVEL}/characters?name=`,
  CHARACTER_STARTS_WITH = `${API_MARVEL}/characters?nameStartsWith=`;

export default {
  API_TS,
  API_KEY,
  API_HASH,
  API_KEY_COMPLETE,
  API_MARVEL,
  CHARACTERS,
  CHARACTER_ID,
  CHARACTER_NAME,
  CHARACTER_STARTS_WITH,
};
