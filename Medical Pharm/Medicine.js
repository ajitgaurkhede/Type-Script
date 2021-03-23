"use strict";
exports.__esModule = true;
exports.Medicine = void 0;
var Medicine = /** @class */ (function () {
    function Medicine() {
        this.brandName = "";
        this.price = 0;
        this.quantity = 0;
        this.status = '';
    }
    Medicine.prototype.getStatus = function () {
        return status;
    };
    Medicine.prototype.setStatus = function (status) {
        this.status = status;
    };
    Medicine.prototype.getBrandName = function () {
        return this.brandName;
    };
    Medicine.prototype.setBrandName = function (brandName) {
        this.brandName = brandName;
    };
    Medicine.prototype.getPrice = function () {
        return this.price;
    };
    Medicine.prototype.setPrice = function (price) {
        this.price = price;
    };
    Medicine.prototype.getQuantity = function () {
        return this.quantity;
    };
    Medicine.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Medicine.prototype.toString = function () {
        return ("Brand Name : " +
            this.brandName +
            "\tPrice : " +
            this.price +
            "\tQuantity : " +
            this.quantity +
            "\n");
    };
    return Medicine;
}());
exports.Medicine = Medicine;
