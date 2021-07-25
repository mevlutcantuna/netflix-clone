import { DELETE_USER, SAVE_USER } from "../constants/user";
import { ActionTypes } from "../../types/actionsTypes";
import { userType } from "../../types/userType";

interface State {
  user: userType | object;
}

const initialState: State = {
  user: {},
};

const userReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    case DELETE_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
