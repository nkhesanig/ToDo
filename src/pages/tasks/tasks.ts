import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DAILY} from '../../dailytodo/daily'
/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

 surname
 dailylists = DAILY;
 addlist;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.surname = this.navParams.get("nkhesani")

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  nav(){
    this.navCtrl.push('AddtasksPage',{nhluli:this.addlist})
   // DAILY.push({list:})
  }

}
