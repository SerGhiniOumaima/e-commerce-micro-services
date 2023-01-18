import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

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
