import { combineReducers } from "redux";
import { reservationHistory, accounting } from "./reducer";
export default combineReducers({ reservationHistory, accounting });