import { DELETE_USER, SAVE_USER } from "../redux/constants/user";
import { userType } from "./userType";

interface SaveActionType {
  type: typeof SAVE_USER;
  payload: userType | object;
}

interface DeleteActionType {
  type: typeof DELETE_USER;
  payload: userType | object;
}

export type ActionTypes = SaveActionType | DeleteActionType;
