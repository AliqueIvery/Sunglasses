import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SunglassesService } from '../sunglasses.service';

@Component({
  selector: 'app-sunglasses-detail',
  templateUrl: './sunglasses-detail.component.html',
  styleUrls: ['./sunglasses-detail.component.css']
})
export class SunglassesDetailComponent implements OnInit {
  public id : any;
  public sunglasses: any;
  constructor(private sServ: SunglassesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sServ.getSunglasses().subscribe(data => this.sunglasses = data);
  }

}
