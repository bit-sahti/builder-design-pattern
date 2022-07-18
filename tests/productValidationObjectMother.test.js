const { expect } = require('chai')
const { it, describe } = require('mocha')
const { productValidator } = require('../src')
const { ProductObjectMother } = require('./model/productObjectMother')

describe('Test data builder', () => {
  it("shouln'd return error with a valid product", () => {
    const product = ProductObjectMother.withValidData()

    const result = productValidator(product)

    const expected = {
      isValid: true,
      errors: [],
    }

    expect(result).to.be.deep.equal(expected)
  })

  describe('Product Validation Rules', () => {
    it('should return an error object when creating a product with invalid id', () => {
      const product = ProductObjectMother.withInvalidId()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The id provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })

    it('should return an error object when creating a product with invalid name', () => {
      const product = ProductObjectMother.withInvalidName()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The name provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })

    it('should return an error object when creating a product with invalid price', () => {
      const product = ProductObjectMother.withInvalidPrice()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The price provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })

    it('should return an error object when creating a product with invalid category', () => {
      const product = ProductObjectMother.withInvalidCategory()

      const result = productValidator(product)

      const expected = {
        isValid: false,
        errors: ['The category provided is invalid'],
      }

      expect(result).to.be.deep.equal(expected)
    })
  })
})
