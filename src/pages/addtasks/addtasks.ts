import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DAILY} from '../../dailytodo/daily'


/**
 * Generated class for the AddtasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtasks',
  templateUrl: 'addtasks.html',
})
export class AddtasksPage {

  donelist;
  DAILY
  name
  tue 
  wed
  thur
  fri
  sat
  sun

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtasksPage');
  }

  done(){
    this.navCtrl.push('TasksPage')
    DAILY.push({list:this.name})
   
  }

}
