import fetchApi from "../../services/requestAPI";

export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL";

export const fetchCharactersFail = (err) => ({
  type: FETCH_CHARACTERS_FAIL,
  error: err
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  characters
});

// IMPLEMENTAR O THUNK => Funcao quer retorna outra Funcao
// USAR A FUNCAO fetchApi()
// () => (dispatch) => {}
export const fetchCharacters = () => (dispatch) => {
  fetchApi()
    .then((resp) => {
      dispatch(fetchCharactersSuccess(resp.results));
    })
    .catch((error) => {
      dispatch(fetchCharactersFail(error));
    });
};
