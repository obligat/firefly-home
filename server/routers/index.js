/**
 * Created by afaren on 8/16/16.
 */
const regRouter = (app) => {
  app.use('/api/users', require('./users'));
  app.use('/api/house', require('./houseslist'));
};

export default regRouter;