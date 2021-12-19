import { LightningElement } from 'lwc';
export default class helloworld extends LightningElement {
  greeting = 'Rishi';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}