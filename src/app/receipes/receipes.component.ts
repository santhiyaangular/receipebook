import { Component, OnInit } from '@angular/core';

import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {

  constructor(private receipeSerive: ReceipeService) { }

  ngOnInit() {
    
  }

}
