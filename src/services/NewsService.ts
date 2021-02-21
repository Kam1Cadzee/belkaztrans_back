import {BaseService} from './BaseService';
import NewsModel, {INews} from '../db/models/NewsModel';

export class NewsService extends BaseService<INews> {
  constructor() {
    super();
    this.document = NewsModel;
  }
}
