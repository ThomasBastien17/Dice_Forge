const initialState = {
  // ici nos emplacements de state
  nbClick: 0,
};

const myReducer = (state = initialState, action = { type: '@@INIT' }) => {
  console.log('state donné au reducer', state);
  console.log('action donnée au reducer', action);

  // le role du reducer est de return un state sur lequel les modifs de l'action sont appliquées
  return state;
};

export default myReducer;
