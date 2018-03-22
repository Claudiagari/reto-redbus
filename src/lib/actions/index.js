
export const selectItem = item => ({
  type:'ITEM_SELECT',
  payload:item

});

export const selectItemCash = itemC => ({

  type: 'ITEM_SELECT_CASH',
  payload: itemC

})