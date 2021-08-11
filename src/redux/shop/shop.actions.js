import ShopActionTypes from './shop.type'

export const updateCollections = (collectionsMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  }
}
