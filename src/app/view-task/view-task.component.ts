import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepperModule } from 'primeng/stepper';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    StepperModule,
    SidebarModule,
    ToastModule,
    RippleModule,
  ],
  providers: [MessageService],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css',
})
export class ViewTaskComponent {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successo',
      detail: 'Tarefa cadastrada com sucesso',
    });
  }
  imagemPath: string =
    'https://dheka.com.br/wp-content/uploads/2015/08/Qualidade11.jpg';
  ingredient!: string;
  value: string | undefined;
  date: Date | undefined;
  sidebarVisible: boolean = false;
  private _router = inject(Router);

  // função para navegar entre as paginas
  navegationToRouteTask() {
    this._router.navigate(['task']);
  }

  navegationToRouteManager() {
    this._router.navigate(['view']);
  }
  navegationToRouteRegister() {
    this._router.navigate(['']);
  }
}
