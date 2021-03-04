import {Request, Response} from 'express';
import {ProductService} from '../services/ProductService';
import {HTTP500Error} from '../utils/httpErrors';
import {FuelService} from '../services/FuelService';

export class ProductController {
  private service: ProductService;
  private serviceFuels: FuelService;

  constructor() {
    this.service = new ProductService();
    this.serviceFuels = new FuelService();
  }

  createContact = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const product: any = await this.service.getOne(id);
      const contacts = [...product.contacts, req.body];
      const result: any = await this.service.update({
        contacts
      }, id);
      const contact = result.contacts[result.contacts.length - 1];
      return res.status(200).send(contact);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  removeContact = async (req: Request, res: Response) => {
    try {
      const {id, idContact} = req.params;
      const product: any = await this.service.getOne(id);
      const contacts = product.contacts.filter(c => {
        return c._id.toString() !== idContact
      });
      await this.service.update({
        contacts
      }, id);
      return res.status(200).send();
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const product: any = await this.service.create(req.body);
      return res.status(200).send(product);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const r = await this.service.update(req.body, id);
      await Promise.all(req.body.fuels.map(f => this.serviceFuels.update(f, f._id)));
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
