import {Component, OnInit} from '@angular/core';
import { XBridge , Lounger } from './xbridge.service';
@Component({
    providers:[
        XBridge
    ],
    selector: 'my-app',
    template: `<h1>One step for dave. A leap for mandem.</h1> 
        <p> Test cache busting again and again. sanity check </p> 
        <ul>
            <li *ngFor="let lounger of loungers"> 
            {{lounger.FirstName}} ( lounger.UserName )
            </li>
        </ul>
    `
})
export class AppComponent implements OnInit { 
    loungers : Lounger[];
    constructor (private xbridge : XBridge){
        
    }

    ngOnInit()
    {
        this.getLoungers();
    }

    getLoungers(){
        this.xbridge.Get<Lounger[]>("Loungers")
        .then(
        function(result: Lounger[]){
            this.loungers = result;
        }, 
        function(reason){
            alert(reason);
        })
        .catch(function(reason){
            alert(reason);
        })
    }
}
