import ProductModel, {IProduct} from '../db/models/ProductModel';
import {BaseService} from './BaseService';
import FuelModel from '../db/models/FuelModel';
import {FuelService} from './FuelService';

export class ProductService extends BaseService<IProduct, typeof ProductModel> {
  private serviceFuel: FuelService;

  constructor() {
    super();
    this.document = ProductModel;
    this.serviceFuel = new FuelService();
  }

  create = async data => {
    let fuels = data.fuels || [];

    data.fuels = await FuelModel.insertMany(fuels);
    const product: any = await this.document.create(data);

    return product;
  };

  delete = async id => {
    let result:any = await this.document.findByIdAndRemove(id);
    await this.serviceFuel.deleteMany(result.fuels);

    return result;
  }
}
