import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './products/products.entity';


@Injectable()
export class ProductsService {
  getProduct(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly products: Repository<Product>,
  ) { }

  async getAllProductsByBrand(brand: string){
    return await  this.products.find({
      where: {
        brand,
      },
    });
  }

  async updateProductAvailability(productId: string, product) {
    const myProduct = await this.products.findOne({ where: { id: parseInt(productId) } });
  if (!productId) {
    throw new NotFoundException(`Product with id ${productId} not found`);
  }
  return await this.products.save({...product,id: +productId});
  return productId;
  }

  async addProduct(product: Product){
    return await this.products.save(product);
  }

  async deleteProduct(productId: string) {
    return await this.products.delete(productId);
  }
}

