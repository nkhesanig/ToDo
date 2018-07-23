import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddtasksPage } from './addtasks';

@NgModule({
  declarations: [
    AddtasksPage,
  ],
  imports: [
    IonicPageModule.forChild(AddtasksPage),
  ],
})
export class AddtasksPageModule {}
