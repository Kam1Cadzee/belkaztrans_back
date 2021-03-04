import {Request, Response} from 'express';
import {HTTP404Error, HTTP500Error} from '../utils/httpErrors';
import FileModel from '../db/models/FileModel';
import {FuelService} from '../services/FuelService';
import {IFuel} from '../db/schemas/FuelSchema';
import {FileService} from '../services/FileService';

export class FuelController {
  private service: FuelService;
  private serviceFile: FileService;

  constructor() {
    this.service = new FuelService();
    this.serviceFile = new FileService();
  }

  getImage = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const image = await FileModel.findById(id);

      if (!image) {
        throw new HTTP404Error('Image not found');
      }

      const source = await this.serviceFile.getFile(image._id);

      res.writeHead(200, {
        'Content-Type': image.contentType,
        'Content-Length': source.length
      });
      return res.status(200).end(source);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  uploadImage = async (req: Request, res: Response) => {
    try {
      if(!req.file) {
        throw new HTTP404Error();
      }
      const {id} = req.params;
      const product:IFuel = await this.service.getOne(id);
      if(!product) {
        throw new HTTP404Error();
      }
      if(product.file) {
        await FileModel.findByIdAndRemove(product.file)
      }

      product.file = (req.file as any).id;

      await this.service.update(product, product._id);

      return res.status(200).send({
        _id: product.file,
        filename: req.file.filename
      });
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

  removeImage = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const result = await this.serviceFile.removeFile(id);

      return res.status(200).send(result);
    }
    catch (e) {
      throw new HTTP500Error('Error: ' + e);
    }
  };

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
