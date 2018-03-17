import {Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import { url } from '../../../url-config';
import { strRes } from '../../../language';

@Component({
  selector: 'app-gacha-control-box',
  templateUrl: './gacha-control-box.component.html',
  styleUrls: ['./gacha-control-box.component.less']
})
export class GachaControlBoxComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Input() tip = '';
  @Input() card = '';
  @Input() basePath = url.icons;
  @Output() update = new EventEmitter<number>();
  strRes = strRes
  cardPath = '';
  constructor() { }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.card) {
      this.cardPath = `${this.basePath}${this.card}.png`;
    }
    if (changes.tip) {
      this.tip = `${this.basePath}${this.tip}.png`;
    }
  }
  trigger(times: number) {
    this.update.emit(times);
  }
}
