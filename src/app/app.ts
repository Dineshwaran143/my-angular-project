import { Target } from '@angular/compiler';
import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular');

  userName:string ='';
  count:number =0;
  value:WritableSignal<number> = signal(10)

  constructor(){
    effect(()=>{
      console.log('value of cou t',this.value())
    })
  }

  users =['dinesh','femila','vanitha','vicky','andrason']

  valueChange(val:Event){
    this.userName =(val.target as HTMLInputElement).value
    console.log((val.target as HTMLInputElement).value)
  }

  setValue(){
    this.userName = 'dinesh'
  }
  getValue(val:string){
    this.userName =val;
    console.log(val)
  }

  //update count

  updateCount(){
    this.count++;
  }


  //siganls

  updateSignalValue(){
    // this.value.set(this.value()+3)
    this.value.update(val => val +10)
  }
}
