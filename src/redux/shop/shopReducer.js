// import SHOP_DATA from "./ShopPage.data";
import shopActionTyoes from "./shopTypes";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTyoes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
