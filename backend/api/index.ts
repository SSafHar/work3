import * as express from 'express';
import { locationRouter } from './company-location';
import { emailRouter } from './email';
import { homeRouter } from './home-banner';
import { jobRouter } from './job';
import { projectRouter } from './project';
import { serviceRouter } from './service';
import { teamRouter } from './team-member';

export const apiRouter = express.Router();

apiRouter.use('/email', emailRouter);
apiRouter.use('/home', homeRouter);
apiRouter.use('/job', jobRouter);
apiRouter.use('/location', locationRouter);
apiRouter.use('/project', projectRouter);
apiRouter.use('/service', serviceRouter);
apiRouter.use('/team', teamRouter);

apiRouter.use((req, res) => {
  res.status(404).end();
});
