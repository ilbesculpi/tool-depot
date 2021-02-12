// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Manufacturer, ProductManufacturer, Product, ProductProductCategory, ProductCategory } = initSchema(schema);

export {
  Manufacturer,
  ProductManufacturer,
  Product,
  ProductProductCategory,
  ProductCategory
};