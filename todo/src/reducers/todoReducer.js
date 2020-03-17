//ANCHOR COMPONENT HERE //
export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE":
      let newArr = state.filter(item => {
        return item.completed !== true;
      });

      return newArr;

    default:
      return state;
  }
};
