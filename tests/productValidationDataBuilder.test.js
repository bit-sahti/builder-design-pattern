const { expect } = require('chai')
const { it, describe } = require('mocha')
const { productValidator } = require('../src')
const { ProductDataBuilder } = require('./model/productDataBuilder')

describe('Test data builder', () => {
  it("shouln'd return error with a valid product", () => {
    const product = ProductDataBuilder.product().build()

    const result = productValidator(product)

    const expected = {
      isValid: true,
      errors: [],
    }

    expect(result).to.be.deep.equal(expected)
  })

  describe('Product Validation Rules', () => {
    it('should return an error object when creating a product with invalid id', () => {
      const product = ProductDataBuilder.product().invalidId().build()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The id provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })

    it('should return an error object when creating a product with invalid name', () => {
      const product = ProductDataBuilder.product().invalidName().build()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The name provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })

    it('should return an error object when creating a product with invalid price', () => {
      const product = ProductDataBuilder.product().invalidPrice().build()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The price provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })

    it('should return an error object when creating a product with invalid category', () => {
      const product = ProductDataBuilder.product().invalidCategory().build()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The category provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })
  })
})
