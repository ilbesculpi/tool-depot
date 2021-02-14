/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateManufacturer = /* GraphQL */ `
  subscription OnCreateManufacturer {
    onCreateManufacturer {
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
export const onUpdateManufacturer = /* GraphQL */ `
  subscription OnUpdateManufacturer {
    onUpdateManufacturer {
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
export const onDeleteManufacturer = /* GraphQL */ `
  subscription OnDeleteManufacturer {
    onDeleteManufacturer {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory {
    onCreateProductCategory {
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
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory {
    onUpdateProductCategory {
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
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory {
    onDeleteProductCategory {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductProductCategory = /* GraphQL */ `
  subscription OnCreateProductProductCategory {
    onCreateProductProductCategory {
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
export const onUpdateProductProductCategory = /* GraphQL */ `
  subscription OnUpdateProductProductCategory {
    onUpdateProductProductCategory {
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
export const onDeleteProductProductCategory = /* GraphQL */ `
  subscription OnDeleteProductProductCategory {
    onDeleteProductProductCategory {
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
export const onCreateProductManufacturer = /* GraphQL */ `
  subscription OnCreateProductManufacturer {
    onCreateProductManufacturer {
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
export const onUpdateProductManufacturer = /* GraphQL */ `
  subscription OnUpdateProductManufacturer {
    onUpdateProductManufacturer {
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
export const onDeleteProductManufacturer = /* GraphQL */ `
  subscription OnDeleteProductManufacturer {
    onDeleteProductManufacturer {
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
