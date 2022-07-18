const { Product } = require('../../src/product')

class ProductDataBuilder {
  constructor() {
    this.productData = {
      id: '0002',
      name: 'computer',
      price: 1000,
      category: 'eletronic',
    }
  }

  static product() {
    return new ProductDataBuilder()
  }

  invalidId() {
    this.productData.id = ''

    return this
  }

  invalidName() {
    this.productData.name = 235

    return this
  }

  invalidPrice() {
    this.productData.price = 2000

    return this
  }

  invalidCategory() {
    this.productData.category = 'cdfsdfd'

    console.log(this.productData.category)

    return this
  }

  build() {
    const product = new Product(this.productData)

    return product
  }
}

module.exports = { ProductDataBuilder }
