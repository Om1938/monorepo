import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavDropdownComponent } from './components/util/nav-dropdown/nav-dropdown.component';
import { NavDropdowmOptionComponent } from './components/util/nav-dropdowm-option/nav-dropdowm-option.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderColComponent } from './components/util/table-header-col/table-header-col.component';
import { TableDataCellComponent } from './components/util/table-data-cell/table-data-cell.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, NavDropdownComponent, NavDropdowmOptionComponent, TableComponent, TableHeaderColComponent, TableDataCellComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, TableComponent],
})
export class SharedModule {}
