export const selectPage = (state) => state.adverts.page;
export const selectLoading = (state) => state.adverts.loading;
export const selectError = (state) => state.adverts.error;
export const selectFilters = (state) => state.adverts.filters;
export const selectAdverts = (state) => state.adverts.items;
export const selectFavorite = (state) => state.adverts.favorite;
export const selectTotalPages = (state) => state.adverts.totalPages;

export const selectIsFavorite = (item) => (state) =>
  state.adverts.favorite.some((el) => el._id === item._id);
