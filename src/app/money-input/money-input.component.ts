import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface InputData {
  id: number;
  moneyAmount: number | null;
  inputDate: Date;
}

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styleUrls: ['./money-input.component.css']
})
export class MoneyInputComponent {
  inputDataList: InputData[] = [];
  moneyAmount: number | null = null;
  inputDate: Date | null = null;

  trackInput() {
    const newInput: InputData = {
      id: this.generateUniqueId(),
      moneyAmount: this.moneyAmount,
      inputDate: new Date()
    };
    this.inputDataList.push(newInput);
    this.resetForm();
  }

  updateInput(input: InputData) {
    // Update the input data based on the provided input object
    input.moneyAmount = this.moneyAmount;
    input.inputDate = new Date();
    this.resetForm();
  }

  deleteInput(input: InputData) {
    // Delete the input data from the list
    const index = this.inputDataList.findIndex(item => item.id === input.id);
    if (index > -1) {
      this.inputDataList.splice(index, 1);
    }
    this.resetForm();
  }

  private generateUniqueId(): number {
    // Generate a unique ID for each input data
    return new Date().getTime();
  }

  private resetForm() {
    // Reset the form fields after track, update, or delete operation
    this.moneyAmount = null;
    this.inputDate = null;
  }
}
