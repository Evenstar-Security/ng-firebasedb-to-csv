import { Component } from '@angular/core';
import { FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { CsvserviceService } from './csvservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-firebasedb-to-csv';

  items = this.csvserviceservice.getItems();

  csvForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private csvserviceservice: CsvserviceService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.csvserviceservice.clearCart();
    console.warn('Your order has been submitted', this.csvForm.value);
    this.csvForm.reset();
  }
}