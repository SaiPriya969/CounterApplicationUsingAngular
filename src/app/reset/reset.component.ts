import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  @Input() inputToChild2:any;
  @Input() labelToChild2:any;
  @Output() output2ToParent=new EventEmitter<Number>();
    Res(){
      this.inputToChild2=0;
      this.output2ToParent.emit(this.inputToChild2);
    }
}
