import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuList } from '../../../models';
declare var jQuery: any;

@Component({
  selector: 'sem-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
})
export class NavDropdownComponent implements OnInit {
  constructor() {}

  @Input() text: string = 'Dropdown';
  @Input() options!: MenuList;
  @Input() direction: string = '';

  @Output() onChange: EventEmitter<string | number> = new EventEmitter<
    string | number
  >();
  @ViewChild('dropdown') dropdown!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      onChange: (
        value: string | number,
        a: string | number,
        b: Array<HTMLElement>,
      ) => {
        if (b != null && b.length) {
          this.onChange.emit(b[0].innerText);
        }
      },
      ...this.options,
    };
    jQuery(this.dropdown.nativeElement).dropdown(options);
  }
  clickItem(e: any, item: any) {
    if (item.onClick) {
      item.onClick(e);
    }
  }
}
