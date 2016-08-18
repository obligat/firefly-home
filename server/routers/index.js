/**
 * Created by afaren on 8/16/16.
 */
const regRouter = (app) => {
  app.use('/api/users', require('./users'));
};

export default regRouter;