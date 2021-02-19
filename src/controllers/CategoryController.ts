import {Request, Response} from 'express';
import {CategoryService} from '../services/CategoryService';
import {HTTP500Error} from '../utils/httpErrors';

export class CategoryController {
  private service: CategoryService;

  constructor() {
    this.service = new CategoryService();
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
      const r = await this.service.getAll();
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
