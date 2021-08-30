import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EarringService } from '../earring.service';

@Component({
  selector: 'app-earring-list',
  templateUrl: './earring-list.component.html',
  styleUrls: ['./earring-list.component.css']
})
export class EarringListComponent implements OnInit {
  public earrings:any;
  constructor(private eServ: EarringService, private route:Router) { }

  ngOnInit(): void {
    this.eServ.getAllEarrings().subscribe(data => this.earrings = data);
  }
  onSelect(earring:any){
    this.route.navigate(['/earring-detail',earring.id]);
  }
}
