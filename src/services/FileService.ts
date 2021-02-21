import {BaseService} from './BaseService';
import {IFuel} from '../db/schemas/FuelSchema';
import mongoose from 'mongoose';
import FileModel from '../db/models/FileModel';
import {HTTP500Error} from '../utils/httpErrors';

const collectionChunks = mongoose.connection.collection('pdfs.chunks');

export class FileService extends BaseService<IFuel, typeof FileModel> {
  constructor() {
    super();
    this.document = FileModel;
  }

  getFile = async id => {
    const chunks = await collectionChunks.find({files_id: id}).toArray();

    let data = [];
    for (let i = 0; i < chunks.length; i++) {
      data.push(chunks[i].data.toString('base64'));
    }

    return Buffer.from(data.join(''), 'base64');
  };

  removeFile = async (id: string) => {
    try {
      const deleted = await this.document.findByIdAndDelete({
        _id: id
      });
      if (deleted) {
        await collectionChunks.deleteMany({files_id: deleted._id});
      }
      return deleted;
    } catch (e) {
      throw new HTTP500Error(e);
    }
  };
}
