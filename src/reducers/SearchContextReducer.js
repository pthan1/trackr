export const searchContextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: action.searchKeyword
      }
    default:
      return state;
  }
}