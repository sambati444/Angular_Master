import { Component, ElementRef, Input } from '@angular/core';


@Component ({
    selector: 'homepage',
    templateUrl: 'homepage.html',
    styleUrls: ['./homepage.less']
})
export class HomePage {
    constructor(private ElementRef:ElementRef){
    } 
   
}