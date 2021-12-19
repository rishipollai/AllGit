import { api, LightningElement, track , wire} from 'lwc';

import mapDemo from '@salesforce/apex/Utility.mapDemo'

export default class MyFirstLWC extends LightningElement {

    @track greeting = 'Wecome rishi';
    @track message = 'LWC methodology';
    @track maps;

    @track contacts = [
        {
            id: '238838',
            name: 'rishi'
        },
        {
            id:'38883',
            name:'ram'
        }
    ];

    @wire(mapDemo) records;

    handelClick(){
        mapDemo().then(result=>{
            console.log(result);
            const options= [];
            for(let key in result){
                if(key){
                    options.push({
                        key:key,
                        value:result[key]
                    })
                }
            }
            console.log(options);
            this.maps=options;
        })
    }



}