import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'ReactiveForm';
	myFormModel: FormGroup;

	constructor() {
		this.myFormModel = new FormGroup({
			username: new FormControl(),
			ssn: new FormControl(),
			passwordsGroup: new FormGroup({
				password: new FormControl(),
				pconfirm: new FormControl()
			})
		});
	}

	onSubmit() {
		console.log(this.myFormModel.value);
	}
}
