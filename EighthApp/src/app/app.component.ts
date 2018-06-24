import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center"><h3 align='center'> Your name</h3>
  <input type='text' name='name' align='center'></div>`,
  styles: [`input {
  background-color : blue;
  }`]
})
export class AppComponent {
  title = 'EighthApp';
}
