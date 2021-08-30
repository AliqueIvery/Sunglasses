import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SunglassesService } from '../sunglasses.service';

@Component({
  selector: 'app-sunglasses-list',
  templateUrl: './sunglasses-list.component.html',
  styleUrls: ['./sunglasses-list.component.css']
})
export class SunglassesListComponent implements OnInit {
  public sunglasses: any;
  constructor(private sServ: SunglassesService, private route: Router) { }

  ngOnInit(): void {
    this.sServ.getSunglasses().subscribe(data => this.sunglasses=data);
  }

}
