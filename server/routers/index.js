/**
 * Created by afaren on 8/16/16.
 */
const regRouter = (app) => {
  app.use('/user', require('./user'));
};

export default regRouter;