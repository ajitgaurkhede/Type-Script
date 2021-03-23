"use strict";
exports.__esModule = true;
exports.MedicineServicesImpl = void 0;
var Medicine_1 = require("./Medicine");
var MedicineServicesImpl = /** @class */ (function () {
    function MedicineServicesImpl() {
        this.medicineList = new Array();
    }
    MedicineServicesImpl.prototype.getMedicineList = function () {
        return this.medicineList;
    };
    MedicineServicesImpl.prototype.setMedicineList = function (value) {
        this.medicineList = value;
    };
    MedicineServicesImpl.prototype.addMedicine = function () {
        var medicine = new Medicine_1.Medicine();
        var brandName = "xyz";
        medicine.setBrandName(brandName);
        var price = 112; //prompt('Please enter medicine price');
        medicine.setPrice(price);
        var quantity = 12; //prompt('Please enter medicine quantity');
        medicine.setQuantity(quantity);
        medicine.setStatus(" ");
        this.medicineList.push(medicine);
    };
    /*getMedicineByName(medName: string): Medicine {

    }*/
    MedicineServicesImpl.prototype.getInventory = function () {
        this.medicineList.forEach(function (element) {
            console.log(element);
        });
    };
    MedicineServicesImpl.prototype.getList = function () {
        return this.medicineList;
    };
    return MedicineServicesImpl;
}());
exports.MedicineServicesImpl = MedicineServicesImpl;
