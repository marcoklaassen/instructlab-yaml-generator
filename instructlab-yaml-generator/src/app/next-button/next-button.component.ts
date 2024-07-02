import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'next-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.scss',
})
export class NextButtonComponent {
  @Input() nextTab!: string;
  @Input() title = 'Next step';
}
