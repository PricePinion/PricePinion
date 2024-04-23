import { Component , OnInit} from "@angular/core";

@Component({
	selector: "app-save-for-later",
	templateUrl: "./save-for-later.component.html",
	styleUrl: "./save-for-later.component.css",
})

export class SaveForLaterComponent{
	productName: string = '';

	  //This array will hold the list of products saved for later
	  productList: any[] = [];


}
