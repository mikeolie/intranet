import { combineReducers } from "redux";

import posts from "./posts";
import weather from "./weather";

const rootReducer = combineReducers({ posts, weather });

export default rootReducer;
