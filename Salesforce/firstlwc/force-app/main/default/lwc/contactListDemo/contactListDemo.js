import { LightningElement, track, wire } from 'lwc';

import getContactList from '@salesforce/apex/ContactList.getContactList';

export default class ContactListDemo extends LightningElement {

    @track searchKey;
    @track contacts;
    @track error;

    @wire(getContactList,{
        name:'$searchKey'
    })
    wiredContact({error,data}){
        if(data){
            this.contacts=data;
            console.log(this.contacts);
        }
        if(error){
            this.error=error;
            console.log('Error',error);
        }
    }


    handleChange(event){
        event.preventDefault();
        console.log('value',event.target.value);
        console.log(this.contacts);
        this.searchKey = event.target.value;
    }

}