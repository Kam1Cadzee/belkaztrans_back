import {Request, Response} from 'express';
import {NewsService} from '../services/NewsService';
import {HTTP500Error} from '../utils/httpErrors';

export class NewsController {
  private service: NewsService;

  constructor() {
    this.service = new NewsService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const r = await this.service.create(req.body);
      return res.status(200).send(r);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.update(req.body, id);
      return res.status(200).send(r);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.delete(id);
      return res.status(200).send(r);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const {page = 1, limit = 5, year = ''} = req.query as any;
      let query = {};
      if(year && parseInt(year)) {
        query = { date: { $gte: new Date(year, 0, 1), $lte: new Date(year, 11, 31) } }
      }
      const r = await this.service.getAll( query, {
        page: +page,
        limit: +limit,
        sort: {
          date: -1
        }
      });
      return res.status(200).send(r);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.getOne(id);
      return res.status(200).send(r);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };
}
