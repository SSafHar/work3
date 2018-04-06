import * as express from 'express';
import { join } from 'path';
import { readJson } from '../utils/fs-helpers';
import { setInternalServerError, setNotFound } from '../utils/request-helpers';

export const jobRouter = express.Router();

const filePath = join(__dirname, '../data', 'jobs.json');

jobRouter.get('/list', (req, res) => {
  readJson(filePath)
    .catch((err) => setInternalServerError(res, err))
    .then((data) => res.json(data));
});

jobRouter.get('/:jobId', (req, res) => {
  readJson(filePath)
    .then((data) => {
      const job = data.find(j => j.id === req.params.jobId);
      job ? res.json(job) : setNotFound(res);
    })
    .catch((err) => setInternalServerError(res, err));
});
