import { Component } from '@angular/core';
import { DataB } from './DataB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Building O&M center';

  displayedData: DataB[] ;

  constructor(private Service: Service) { }

  ngOnInit() {

  }

  updateDisplayedData(data: DataB[]) {
    if (data)
    {
      this.displayedData = data
    } 
  }

}






