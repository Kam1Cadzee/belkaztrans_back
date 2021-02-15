import {Request, Response} from 'express';
import {ProductService} from '../services/ProductService';
import {NewsService} from '../services/NewsService';

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
      return res.status(400).send(e);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.update(req.body, id);
      return res.status(200).send(r);
    }
    catch (e) {
      return res.status(400).send(e);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.delete(id);
      return res.status(200).send(r);
    }
    catch (e) {
      return res.status(400).send(e);
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
        limit: +limit
      });
      return res.status(200).send(r);
    }
    catch (e) {
      return res.status(400).send(e);
    }
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.getOne(id);
      return res.status(200).send(r);
    }
    catch (e) {
      return res.status(400).send(e);
    }
  };

  getYearNews = async (req: Request, res: Response) => {
    try {
      const r = await this.service.getAll({});
      return res.status(200).send(r);
    }
    catch (e) {
      return res.status(400).send(e);
    }
  };
}
