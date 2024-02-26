import {Component, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";

@Component({
  selector: 'app-test',
  standalone: true,
    imports: [
        FormsModule,
        RadioButtonModule,
        ReactiveFormsModule
    ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  @Input() accountId?: any;
  @Output() value?: any;

}
