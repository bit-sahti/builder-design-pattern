const { errorMessage, allowedCategories} = require("./constants")

 function productValidator(product) {
    const errors = []

    if (product.id < 2 || product.id > 20) {
        errors.push(errorMessage('id'))
    }

    if (typeof product.name !== 'string') {
        errors.push(errorMessage('name'))
    }

    if (product.price < 0 || product.price > 1000) {
        errors.push(errorMessage('price'))
    }

    if (!allowedCategories.includes(product.category)) {
        errors.push(errorMessage('category'))
    }


    return {
        isValid: errors.length === 0,
        errors
    }
 }

 module.exports = { productValidator }