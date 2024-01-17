import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { ProductsService } from './app.service';

@Controller('products')
export class ProductsController {
  getProduct(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly productsService: ProductsService) {}

  @Get('byBrand/:brand')
  async getAllProductsByBrand(@Param('brand') brand: string) {
    return await this.productsService.getAllProductsByBrand(brand);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string,@Body() products){
    return await this.productsService.updateProductAvailability(id,products);
  }
  
  @Post()
  async createProduct(@Body() products) {
    return await this.productsService.addProduct(products);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productsService.deleteProduct(id);
  }
}