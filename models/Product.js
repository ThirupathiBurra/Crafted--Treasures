import Order from '../pages/order';

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String,unique:true, required: true },
    desc : { type: String, required: true },
    img : { type: String, required: true },
    category : { type: String, required: true },
    colour : { type: String},
    price : { type: Number, required:true  },
    availableQty : { type: Number, required:true  }
}, {timestamps:true});

mongoose.models={}
export default mongoose.model("Product",ProductSchema);
