/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createManufacturer = /* GraphQL */ `
  mutation CreateManufacturer(
    $input: CreateManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    createManufacturer(input: $input, condition: $condition) {
      id
      name
      description
      website
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateManufacturer = /* GraphQL */ `
  mutation UpdateManufacturer(
    $input: UpdateManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    updateManufacturer(input: $input, condition: $condition) {
      id
      name
      description
      website
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteManufacturer = /* GraphQL */ `
  mutation DeleteManufacturer(
    $input: DeleteManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    deleteManufacturer(input: $input, condition: $condition) {
      id
      name
      description
      website
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        nextToken
        startedAt
      }
    }
  }
`;
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
      id
      name
      slug
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
      id
      name
      slug
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
      id
      name
      slug
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        nextToken
        startedAt
      }
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      slug
      tags
      sku
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ProductProductCategories {
        nextToken
        startedAt
      }
      ProductManufacturers {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      slug
      tags
      sku
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ProductProductCategories {
        nextToken
        startedAt
      }
      ProductManufacturers {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      slug
      tags
      sku
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ProductProductCategories {
        nextToken
        startedAt
      }
      ProductManufacturers {
        nextToken
        startedAt
      }
    }
  }
`;
export const createProductProductCategory = /* GraphQL */ `
  mutation CreateProductProductCategory(
    $input: CreateProductProductCategoryInput!
    $condition: ModelProductProductCategoryConditionInput
  ) {
    createProductProductCategory(input: $input, condition: $condition) {
      id
      productID
      productcategoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      productcategory {
        id
        name
        slug
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        description
        price
        slug
        tags
        sku
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateProductProductCategory = /* GraphQL */ `
  mutation UpdateProductProductCategory(
    $input: UpdateProductProductCategoryInput!
    $condition: ModelProductProductCategoryConditionInput
  ) {
    updateProductProductCategory(input: $input, condition: $condition) {
      id
      productID
      productcategoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      productcategory {
        id
        name
        slug
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        description
        price
        slug
        tags
        sku
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteProductProductCategory = /* GraphQL */ `
  mutation DeleteProductProductCategory(
    $input: DeleteProductProductCategoryInput!
    $condition: ModelProductProductCategoryConditionInput
  ) {
    deleteProductProductCategory(input: $input, condition: $condition) {
      id
      productID
      productcategoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      productcategory {
        id
        name
        slug
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        description
        price
        slug
        tags
        sku
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createProductManufacturer = /* GraphQL */ `
  mutation CreateProductManufacturer(
    $input: CreateProductManufacturerInput!
    $condition: ModelProductManufacturerConditionInput
  ) {
    createProductManufacturer(input: $input, condition: $condition) {
      id
      productID
      manufacturerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      manufacturer {
        id
        name
        description
        website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        description
        price
        slug
        tags
        sku
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateProductManufacturer = /* GraphQL */ `
  mutation UpdateProductManufacturer(
    $input: UpdateProductManufacturerInput!
    $condition: ModelProductManufacturerConditionInput
  ) {
    updateProductManufacturer(input: $input, condition: $condition) {
      id
      productID
      manufacturerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      manufacturer {
        id
        name
        description
        website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        description
        price
        slug
        tags
        sku
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteProductManufacturer = /* GraphQL */ `
  mutation DeleteProductManufacturer(
    $input: DeleteProductManufacturerInput!
    $condition: ModelProductManufacturerConditionInput
  ) {
    deleteProductManufacturer(input: $input, condition: $condition) {
      id
      productID
      manufacturerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      manufacturer {
        id
        name
        description
        website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        description
        price
        slug
        tags
        sku
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
