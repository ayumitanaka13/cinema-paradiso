import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import * as types from './types';
import { sagas } from './sagas'; 

const info = {
  name: 'movie',
  actions,
  selectors,
  reducer,
  sagas,
  types,
};

export default info;
