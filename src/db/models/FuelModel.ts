import mongoose from 'mongoose';
import FuelSchema from '../schemas/FuelSchema';

const FuelModel = mongoose.model('Fuel', FuelSchema);

export default FuelModel;
