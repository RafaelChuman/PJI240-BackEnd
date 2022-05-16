
import { PostgresDataSource } from "../../data-source";
import { IProductsRepository, ICreateProductDTO } from "./IProductsRepository";
import { Products } from "./Products";

class ProductRepository implements IProductsRepository{

  async create(data: ICreateProductDTO): Promise<Products> {

    const product = new Products();

    
    product.category = data.category;
    product.name = data.name;
    product.numberStocke = data.numberStocke;
    product.image = data.image;
    product.quantity = data.quantity;
    product.value = data.value;
    
    await PostgresDataSource.manager.save(product);

    return product;
  }

  async list(): Promise<Products[]> {
    const products = await PostgresDataSource.manager.find(Products);
    
    return products;
  }
}

export { ProductRepository };
