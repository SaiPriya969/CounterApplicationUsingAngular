import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent {
  @Input() inputToChild3:any;
  @Input() labelToChild3:any;
  @Output() output3ToParent=new EventEmitter<Number>();
  Dec(){
     this.inputToChild3--;
     this.output3ToParent.emit(this.inputToChild3)
  }

}
