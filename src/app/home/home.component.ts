import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepperModule } from 'primeng/stepper';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-home',
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
    DialogModule,
    PasswordModule,
    InputMaskModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imagemPath: string =
    'https://dheka.com.br/wp-content/uploads/2015/08/Qualidade11.jpg';
  ingredient!: string;
  value: string | undefined;
  date: Date | undefined;
  sidebarVisible: boolean = false;
  private _router = inject(Router);

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  // função para navegar entre as paginas

  confirmAndNavigate(event: any) {
    this.confirm(event),
      setTimeout(() => {
        this.navegationToRouteManager();
      }, 3000);
  }
  navegationToRouteTask() {
    this._router.navigate(['task']);
  }

  navegationToRouteManager() {
    this._router.navigate(['view']);
  }
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Deseja confirmar seu cadastro.',
      icon: 'pi pi-exclamation-circle',
      acceptIcon: 'pi pi-check mr-1',
      rejectIcon: 'pi pi-times mr-1',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'p-button-outlined p-button-sm',
      acceptButtonStyleClass: 'p-button-sm',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cadastro salvo com sucesso',
          detail: 'Redirecionando...',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Recusado',
          detail: 'Você rejeitou o cadastro',
          life: 3000,
        });
      },
    });
  }
}
