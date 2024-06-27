//  ALL REDUCERS ARE IMPORTED HERE ONLY 1 REDUCERS WAS MADE CALLED POSTS

import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });   // POST WILL BE USES WHEN WE NEED TO GET POSTS DATA WHILE USING USESELECTOR LATER IN FRONTEND
