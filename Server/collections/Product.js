const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        company:{
            type: mongoose.Schema.ObjectId,
            ref: 'Company',
            required: true
        },
        type: {
            type: String,
            enum: ['treatment', 'seedling'],
            required: true
        },
        available: {
            type: Boolean,
            default: true
        },
        nursery: {
            type: mongoose.Schema.ObjectId,
            ref: 'Nursery'
        },
        name: {
            type: String,
            required: true
        },
        position: {
            type: Number,
        }, 
        price: {
            type: Number,
            required: true
        },
        inWarehouse: {
            type: Boolean,
            default: false
        },
        plantedAt: {
            type: Date
        },
        treatment: {
            type: mongoose.Schema.ObjectId,
            ref: 'Seedling'
        },
        time: {
            type: Number,
            required: true
        },
        endDate:{
            type: Date
        }, 
        progress: {
            type: Number
        }
    },
    {
        versionKey: false
    }
);

var model = mongoose.model('Product', ProductSchema);
model.collection.name = 'Product';
module.exports = model;