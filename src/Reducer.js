export const Reducer = (state = [], action) => {
  console.log("data", state, "action", action.val);
  switch (action.type) {
    case "add_Fav":
      return [
        ...state,
        {
          image: action.val
        }
      ]
    case "add_Collect":
      break;
    case "removeFav":
      console.log("state to remove",state)
      return  state.filter(st => st.image.id != action.val)
  }
};
