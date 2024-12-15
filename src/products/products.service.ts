import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/product/create-product.dto';
import { UpdateProductDto } from 'src/dto/product/update-product.dto';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll() {
    return this.productModel.find();
  }

  async create(createProduct: CreateProductDto) {
    const newProduct = new this.productModel(createProduct);
    return await newProduct.save();
  }

  async findOne(id: string) {
    return this.productModel.findById(id);
  }

  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async update(id: string, product: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, product, { new: true });
  }
}
