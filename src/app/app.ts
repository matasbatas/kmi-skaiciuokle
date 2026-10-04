import { Component } from '@angular/core';
import { BmiCalculator } from './components/bmi-calculator/bmi-calculator';

@Component({
  selector: 'app-root',
  imports: [BmiCalculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}