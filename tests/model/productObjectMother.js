const { ProductDataBuilder } = require("./productDataBuilder");

class ProductObjectMother {
    static withValidData() {
        return ProductDataBuilder
                .product()
                .build()
    }

    static withInvalidId() {
        return ProductDataBuilder
                .product()
                .invalidId()
                .build()
    }

    static withInvalidName() {
        return ProductDataBuilder
                .product()
                .invalidName()
                .build()
    }

    static withInvalidPrice() {
        return ProductDataBuilder
                .product()
                .invalidPrice()
                .build()
    }

    static withInvalidCategory() {
        return ProductDataBuilder
                .product()
                .invalidCategory()
                .build()
    }
}

module.exports = { ProductObjectMother }