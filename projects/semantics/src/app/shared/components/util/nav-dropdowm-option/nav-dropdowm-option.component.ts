import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuList } from '../../../models';

@Component({
  selector: 'sem-nav-dropdowm-option',
  templateUrl: './nav-dropdowm-option.component.html',
  styleUrls: ['./nav-dropdowm-option.component.scss'],
})
export class NavDropdowmOptionComponent implements OnInit, AfterViewInit {
  @Input() option!: MenuList;
  @Input() direction: string = '';
  @ViewChild('container') innerItemElement!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    this.innerItemElement.nativeElement.parentElement.classList.add('item');
  }
  ngOnInit(): void {}
  clickItem(e: any) {
    if (this.option.onClick) {
      this.option.onClick(e);
    }
  }
}
