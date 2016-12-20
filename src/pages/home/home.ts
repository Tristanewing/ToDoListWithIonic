import { Component } from '@angular/core';

import { NavController, Modal, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tasks=[
	  	{task:'task1', priority:'low', status:'pending'},
	  	{task:'task2', priority:'high', status:'done'},
	  	{task:'task3', priority:'medium', status:'pending'},
	  	{task:'task4', priority:'low', status:'pending'},
	  	{task:'task5', priority:'medium', status:'pending'}
  	]

  constructor(public navCtrl: NavController) {
  	
    
  }

}
