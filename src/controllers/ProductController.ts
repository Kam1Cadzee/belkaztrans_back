import {Request, Response} from 'express';
import {ProductService} from '../services/ProductService';
import {IProduct} from '../db/models/ProductModel';
import {HTTP404Error, HTTP500Error} from '../utils/httpErrors';
import FileModel from '../db/models/FileModel';
import mongoose from 'mongoose';

const collectionChunks = mongoose.connection.collection('pdfs.chunks');

export class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  getImage = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const image = await FileModel.findById(id);

      if (!image) {
        throw new HTTP404Error('Image not found');
      }

      const chunks = await collectionChunks.find({files_id: image._id}).toArray();

      let data = [];
      for (let i = 0; i < chunks.length; i++) {
        data.push(chunks[i].data.toString('base64'));
      }
      const source = Buffer.from(data.join(''), 'base64');

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
        return res.status(404);
      }
      const {id} = req.params;
      const product:IProduct = await this.service.getOne(id);
      if(!product) {
        return res.status(404);
      }
      if(product.file) {
        await FileModel.findByIdAndRemove(product.file)
      }

      product.file = (req.file as any).id;

      await this.service.update(product, product._id);

      return res.status(200).send({
        file: product.file
      });
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
