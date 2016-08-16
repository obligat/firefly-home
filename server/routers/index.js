/**
 * Created by afaren on 8/16/16.
 */
const regRouter = (app) => {
  app.use('/users', require('./users'));
};

export default regRouter;