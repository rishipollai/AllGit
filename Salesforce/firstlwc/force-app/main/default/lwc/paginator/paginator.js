import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

   handleNext(){
       //create a new custom event
       const nextEvent = new CustomEvent('next');
       //firing the event
       this.dispatchEvent(nextEvent);
   }

   handlePrevious(){
    const previousEvent = new CustomEvent('previous');
    this.dispatchEvent(previousEvent);
}

}