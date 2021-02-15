import express from 'express';
import expressJwt from 'express-jwt';

const customerRouter = express.Router();

const requireCookie = expressJwt({
  algorithms: ['HS256'],
  secret: process.env.CUSTOMER_JWT_SECRET || '',
  getToken: (req) => req.cookies['customer-token'],
});

customerRouter.get('/', (req, res) => {
  res.status(200).json({ data: 'customer-api' });
});

customerRouter.use('/auth/gateway', requireCookie);
customerRouter.get('/auth/gateway', require('./authentication/gateway').default);

customerRouter.post('/auth/register', require('./authentication/register').default);
customerRouter.post('/auth/login', require('./authentication/login').default);
customerRouter.post('/auth/logout', require('./authentication/logout').default);

customerRouter.get('/qr', require('./qr/get').default);

export default customerRouter;
export { default as customerPassport } from '@server/customer/passport';
