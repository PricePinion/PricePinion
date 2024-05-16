import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
	selector: "app-account",
	templateUrl: "./account.component.html",
	styleUrl: "./account.component.css",
})
export class AccountComponent {
	customerForm = this.formBuilder.group({
		//FormGroup name
		name: "customer customer", //FormControlName
		email: "customer@customer.com",
		password: "12345",
	});

	statusText = this.formBuilder.group({
		text: "",
	});

	constructor(private formBuilder: FormBuilder) {}

	onSubmit(): void {
		let statusMessage = this.statusText.get("text");
		if (statusMessage) {
			statusMessage.setValue("Data is saved successfully!");
		}

		// this.customerForm.reset();
	}
}
