import 'express-async-errors';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';

class Routes {
  private baseRoute: any;

  private router: any;

  constructor() {
    this.baseRoute = '/api/v1';
    this.router = express.Router();

    this.initializeParser();
    this.initializeRootRoute();
    this.initializeErrorHandling();
  }

  getRouter(): any {
    return this.router;
  }

  static configCors(whitelist: string[]) {
    let allowAll = false;
    if (whitelist.length === 0) allowAll = true;
    return {
      methods: 'POST,PUT,PATCH,GET,UPDATE,DELETE',
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Authorization',
      ],
      credentials: true,
      origin: (origin: string, callback: any) => {
        if (allowAll || whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback({
            name: 'UnauthorizedOriginError',
            message: `Unauthorized 401: CORS from Origin ${origin} not Allowed`,
          });
        }
      },
    };
  }

  private initializeParser() {
    this.router.use(cookieParser());
    this.router.use(bodyParser.json());
    this.router.use(bodyParser.urlencoded({ extended: false }));
    this.router.use(mongoSanitize({ replaceWith: '_' }));
  }

  private initializeRootRoute() {
    this.router.get('/', (req: any, res: any) => {
      res.status(200).json({ message: true });
    });

    this.router.get(`${this.baseRoute}/`, (req: any, res: any) => {
      res.status(200).json({ message: true });
    });
  }

  private initializeErrorHandling() {
    this.router.use((err: any, req: any, res: any, next: any) => {
      if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: true });
      } else if (err.name === 'UnauthorizedOriginError') {
        res.status(401).json({ error: true });
      } else {
        next(err);
      }
    });
  }
}

export default Routes;
