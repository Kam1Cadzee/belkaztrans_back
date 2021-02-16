import {Request, Response} from 'express';
import {CategoryService} from '../services/CategoryService';

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
      const r = await this.service.getAll();
      console.log(r)
      return res.status(200).send(r);
    }
    catch (e) {
      console.log(e)
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
}
