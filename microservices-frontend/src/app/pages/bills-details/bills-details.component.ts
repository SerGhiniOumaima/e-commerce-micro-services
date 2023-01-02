import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})
export class BillsDetailsComponent implements OnInit {

  billDetails : any;
  billID! : number;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.billID = this.route.snapshot.params['billID'];

    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.billID).subscribe({
      next : (data)=>{
        this.billDetails = data;
      },
      error : (err)=>{

      }
    })
  }



}
