import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  constructor() {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
  }
}
