import { DELETE_USER, SAVE_USER } from "../constants/user";
import { userType } from "../../types/userType";

export const saveUser = (user: userType) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
    payload: "Silinecek data",
  };
};
