import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' ,
 
  /*
                  //INLINE TEMPLATE
  template: `<div>
  <h1>{{appTitle}}</h1>
  <div>Sravan reddy started anguler 2</div>
</div>`,
*/
})
export class AppComponent  { 
  appTitle: string = 'Reddy';
}


