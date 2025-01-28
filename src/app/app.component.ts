import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CheckboxModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pizza: string[] = [];
  title = 'testeAngular';
  imagemPath: string = 'https://dheka.com.br/wp-content/uploads/2015/08/Qualidade11.jpg'
  ingredient!: string;
  value: string | undefined;
}
