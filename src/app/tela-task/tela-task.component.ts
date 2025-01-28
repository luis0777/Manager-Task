import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Router } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-tela-task',
  standalone: true,
  imports: [
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    ToggleButtonModule,
    InputSwitchModule,
    SidebarModule,
    TableModule,
  ],
  templateUrl: './tela-task.component.html',
  styleUrl: './tela-task.component.css',
})
export class TelaTaskComponent {
  imagemPath: string =
    'https://dheka.com.br/wp-content/uploads/2015/08/Qualidade11.jpg';
  ingredient!: string;
  value: string | undefined;
  checked: boolean = false;
  sidebarVisible: boolean = false;
  private _router = inject(Router);
  // função para navegar para tela-task
  navegationToRouteTask() {
    this._router.navigate(['task']);
  }
  // função para navegar para view-task
  navegationToRouteManager() {
    this._router.navigate(['view']);
  }
  // função para navegar para home
  navegationToRouteRegister() {
    this._router.navigate(['']);
  }
  
  products = [
    {Tarefa: 'Angular', Descricao:'Estudar sobre angular, primeng, primeflex', Inicio:'10/06/2024', Fim:'10/07/2024', Nivel:'Urgente', Status:''},
    {Tarefa: 'C#', Descricao:'Explicar conceitos', Inicio:'10/06/2024', Fim:'10/07/2024', Nivel:'Basico', Status:''}
  ]
}