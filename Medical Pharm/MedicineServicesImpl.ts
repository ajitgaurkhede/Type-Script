import { Medicine } from "./Medicine"; 
import { MedicineServices } from "./MedicineServices"; 

export class MedicineServicesImpl implements MedicineServices {

	private medicineList: Array<Medicine> = new Array();

	public  getMedicineList(): Array<Medicine> {
		return this.medicineList;
	}
	public  setMedicineList(value: Array<Medicine>) {
		this.medicineList = value;
	}

	 addMedicine() {
		let	medicine = new Medicine();
		let brandName = "xyz"
		medicine.setBrandName(brandName);
		let price = 112 //prompt('Please enter medicine price');
		medicine.setPrice(price);
		let quantity = 12//prompt('Please enter medicine quantity');
		medicine.setQuantity(quantity);
		medicine.setStatus(" ");
		this.medicineList.push(medicine);

	 }
	 /*getMedicineByName(medName: string): Medicine {

	 }*/
	 getInventory() {
		this.medicineList.forEach(element => {
			 console.log(element);
		 });
	 }
	 getList(): Array<Medicine> {
		 return this.medicineList;
	 }

	

}
