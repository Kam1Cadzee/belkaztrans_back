import {Request, Response} from 'express';
import {ContactService} from '../services/ContactService';

export class ContactController {
  private service: ContactService;

  constructor() {
    this.service = new ContactService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const r = await this.service.create(req.body);
      return res.status(200).send(r);
    } catch (e) {
      return res.status(400).send(e);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.update(req.body, id);
      return res.status(200).send(r);
    } catch (e) {
      return res.status(400).send(e);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.delete(id);
      return res.status(200).send(r);
    } catch (e) {
      return res.status(400).send(e);
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const r = await this.service.getAll();
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
}
