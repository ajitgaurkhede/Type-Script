import { Medicine } from "./Medicine"; 

export interface MedicineServices {

	addMedicine():void;
	//getMedicineByName(medName:string):Medicine;
	getInventory():void;
	getList():Array<Medicine>;
}
