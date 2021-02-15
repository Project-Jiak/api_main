import express from 'express';
import expressJwt from 'express-jwt';

const stallRouter = express.Router();

const requireCookie = expressJwt({
  algorithms: ['HS256'],
  secret: process.env.CUSTOMER_JWT_SECRET || '',
  getToken: (req) => req.cookies['stall-token'],
});

stallRouter.get('/', (req, res) => {
  res.status(200).json({ data: 'stall-api' });
});

stallRouter.use('/auth/gateway', requireCookie);
stallRouter.get('/auth/gateway', require('./authentication/gateway').default);

stallRouter.post('/auth/register', require('./authentication/register').default);
stallRouter.post('/auth/login', require('./authentication/login').default);
stallRouter.post('/auth/logout', require('./authentication/logout').default);

export default stallRouter;
export { default as stallPassport } from '@server/stall/passport';
