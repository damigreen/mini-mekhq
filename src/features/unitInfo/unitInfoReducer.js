import orm from '../../app/orm';
import { createConditionalSliceReducer } from '../../common/utils/reducerUtils';

import {
  UNIT_INFO_UPDATE,
  UNIT_INFO_SET_COLOR,
} from './unitInfoConstants';


export function updateUnitInfo(state, payload) {
  const session = orm.session(state);
  const {Unit} = session;
  
  const currentUnit = Unit.all().first();
  
  if(currentUnit) {
    currentUnit.update(payload);
  }

  return session.state;
}


// Create an action to set the unit color
export function setUnitColor(state, payload) {
  const {color} = payload;
  const session = orm.session(state);
  const {Unit} = session;

  const currentUnit = Unit.all().first();

  if(currentUnit) {
    currentUnit.color = color;
  }

  return session.state;
}


export default createConditionalSliceReducer('entities', {
  [UNIT_INFO_UPDATE] : updateUnitInfo,
  [UNIT_INFO_SET_COLOR] : setUnitColor,
});
