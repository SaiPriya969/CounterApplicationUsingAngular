import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent {
    @Input() inputToChild1:any;
    @Input() labelToChild1:any;
    @Output() output1ToParent = new EventEmitter<Number>();
   Inc()
   {
     this.inputToChild1++;
     this.output1ToParent.emit(this.inputToChild1);
      
   }


}
