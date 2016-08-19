import rawData from './fixture/raw-data';
import User from '../models/User';
import House from '../models/House';
import dbUrl from '../../db-config';

import refresh from './mongo-util';

const modelsMap = {
  User,
  House
};


refresh(modelsMap, rawData, dbUrl);