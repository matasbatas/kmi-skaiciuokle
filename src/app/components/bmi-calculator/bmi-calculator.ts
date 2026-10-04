import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-calculator.html',
  styleUrl: './bmi-calculator.css'
})
export class BmiCalculator {

  weight: number | null = null;
  height: number | null = null;
  bmi: number | null = null;

  calculateBmi() {
    if (
      this.weight !== null &&
      this.height !== null &&
      this.weight > 0 &&
      this.height > 0
    ) {
      const heightMeters = this.height / 100;

      this.bmi =
        this.weight / (heightMeters * heightMeters);
    }
  }
}