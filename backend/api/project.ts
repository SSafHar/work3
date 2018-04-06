import * as express from 'express';
import { join } from 'path';
import { SlidableProject } from '../../src/common/portfolio.model';
import { readJson } from '../utils/fs-helpers';
import { setInternalServerError, setNotFound } from '../utils/request-helpers';

export const projectRouter = express.Router();

const filePath = join(__dirname, '../data', 'projects.json');

projectRouter.get('/list', (req, res) => {
  readJson(filePath)
    .catch((err) => setInternalServerError(res, err))
    .then((data) => res.json(data));
});

projectRouter.get('/:projectId', (req, res) => {
  readJson(filePath)
    .then((data) => {
      this.length = data.length;
      const index = data.findIndex((item) => item.id === req.params.projectId);
      if(index < 0) {
        setNotFound(res);
      }
      const project = data[index] as SlidableProject;
      if(index === this.length - 1) {
        project.nextId = data[0].id;
      } else {
        project.nextId = data[index + 1].id;
      }
      if(index === 0) {
        project.previousId = data[this.length - 1].id;
      } else {
        project.previousId = data[index - 1].id;
      }

      res.json(project);
    })
    .catch((err) => setInternalServerError(res, err));
});
