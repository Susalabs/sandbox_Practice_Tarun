import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DiaglogComponent } from './diaglog/diaglog.component';
import { ApiService } from './services/api.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '';
  displayedColumns: string[] = [ 'id','name', 'gender', 'mob_no','dob','doc','dos','dor','rank','med_cat','pers_no'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog:MatDialog, private api:ApiService){}
  openDialog() {
    this.dialog.open(DiaglogComponent, {
      width:'100%',
    });
  }
  ngOnInit(): void {
      this.getDetails()
  }
  getDetails(){
    this.api.allDetails().subscribe({
      next:(res:any)=>{
        res.data.reverse();
        this.dataSource=new MatTableDataSource(res.data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
