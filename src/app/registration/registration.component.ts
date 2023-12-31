import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule, // Include CommonModule in the imports array
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
// export class RegistrationComponent {
//
// }

export class RegistrationComponent implements OnInit {

  ngOnInit(): void {
    this.setupPasswordToggle();
  }

  passwordVisible = false;
  passwordFieldType = 'password';

  private setupPasswordToggle(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;
    const showPasswordIcon = document.getElementById('showPassword');
    const hidePasswordIcon = document.getElementById('hidePassword');

    if (!passwordInput || !showPasswordIcon || !hidePasswordIcon) {
      console.error('Element not found');
      return;
    }

    showPasswordIcon.addEventListener('click', () => {
      passwordInput.type = 'text';
      showPasswordIcon.classList.add('hidden');
      hidePasswordIcon.classList.remove('hidden');
    });

    hidePasswordIcon.addEventListener('click', () => {
      passwordInput.type = 'password';
      hidePasswordIcon.classList.add('hidden');
      showPasswordIcon.classList.remove('hidden');
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
  }

}
