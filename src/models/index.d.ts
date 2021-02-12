import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Manufacturer {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly website?: string;
  readonly products?: (ProductManufacturer | null)[];
  constructor(init: ModelInit<Manufacturer>);
  static copyOf(source: Manufacturer, mutator: (draft: MutableModel<Manufacturer>) => MutableModel<Manufacturer> | void): Manufacturer;
}

export declare class ProductManufacturer {
  readonly id: string;
  readonly product: Product;
  readonly manufacturer: Manufacturer;
  constructor(init: ModelInit<ProductManufacturer>);
  static copyOf(source: ProductManufacturer, mutator: (draft: MutableModel<ProductManufacturer>) => MutableModel<ProductManufacturer> | void): ProductManufacturer;
}

export declare class Product {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly slug?: string;
  readonly tags?: string;
  readonly ProductProductCategories?: (ProductProductCategory | null)[];
  readonly sku?: string;
  readonly ProductManufacturers?: (ProductManufacturer | null)[];
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

export declare class ProductProductCategory {
  readonly id: string;
  readonly product: Product;
  readonly productcategory: ProductCategory;
  constructor(init: ModelInit<ProductProductCategory>);
  static copyOf(source: ProductProductCategory, mutator: (draft: MutableModel<ProductProductCategory>) => MutableModel<ProductProductCategory> | void): ProductProductCategory;
}

export declare class ProductCategory {
  readonly id: string;
  readonly name?: string;
  readonly slug?: string;
  readonly tags?: string;
  readonly products?: (ProductProductCategory | null)[];
  constructor(init: ModelInit<ProductCategory>);
  static copyOf(source: ProductCategory, mutator: (draft: MutableModel<ProductCategory>) => MutableModel<ProductCategory> | void): ProductCategory;
}