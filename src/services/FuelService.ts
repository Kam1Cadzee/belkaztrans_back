import {BaseService} from './BaseService';
import FuelModel from '../db/models/FuelModel';
import {IFuel} from '../db/schemas/FuelSchema';
import {FileService} from './FileService';

export class FuelService extends BaseService<IFuel, typeof FuelModel> {
  private serviceFile: FileService;

  constructor() {
    super();
    this.document = FuelModel;
    this.serviceFile = new FileService();
  }

  deleteMany = async (ids: any[]) => {
    const result: any[] = await this.document.find({_id:{$in: ids}});
    console.log(result)
    await this.document.deleteMany({_id:{$in: ids}});
    await Promise.all(result.map(f => this.serviceFile.removeFile(f.file)));
    return result;
  }
}
