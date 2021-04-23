import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Participation } from 'src/app/participation/participation';
import { ParticipationTableDataSource } from './participation-table-datasource';

@Component({
  selector: 'app-participation-table',
  templateUrl: './participation-table.component.html',
  styleUrls: ['./participation-table.component.css']
})
export class ParticipationTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Participation>;
  dataSource: ParticipationTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'user_name'];

  @Input()
  participation$:Observable<Participation[]>
  ngOnInit() {
    
    this.dataSource = new ParticipationTableDataSource(this.participation$);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
