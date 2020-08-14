import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataB } from '../DataB';





@Component({
  selector: 'app-elementInfo',
  templateUrl: './elementInfo.component.html',
  styleUrls: ['./elementInfo.component.css'],
  
})

export class ElementInfoComponent implements OnInit {

 

@Input('buildb') building: DataB[]; 
@Input('storey9b') storey9: DataB[];
@Input('storey8b') storey8: DataB[];
@Input('spaceb') space88: DataB[];
@Input('defb') displayedData: DataB[];
@Input('light_1b') light1: DataB[];
@Input('light_2b') light2: DataB[];
@Input('light_3b') light3: DataB[];
@Input('sensorb') sensor: DataB[];

@Output() outputoParent = new EventEmitter<DataB[]>();
 
  displayedColumns = ['property', 'value'];
 
  isActive = true;
  term:string;


  constructor() { 
  
  }


   ngOnInit() {
  
  }


  updateData (element) {
    this.term = '';
    this.isActive = false;
    
    const compare = [
      //0 storey 9
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/storey_153',
      //1 storey 8
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/storey_147',
      //2 space
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/space_9832',
      //3 light1
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/lightFixture_250342',
      //4 light2
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/lightFixture_250266',
      //5 light3
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/lightFixture_250418',
      //6 sensor
      'http://linkedbuildingdata.net/ifc/resources20200408_172328/sensor_250195'
    ];

      if (element.o.value == compare[0]) 
    {this.displayedData = this.storey9} else if (element.o.value == compare[1])
    {this.displayedData = this.storey8} else if (element.o.value == compare[2])
      {this.displayedData = this.space88} else if (element.o.value == compare[3])
      {this.displayedData = this.light1} else if (element.o.value == compare[4])
      {this.displayedData = this.light2} else if (element.o.value == compare[5])
      {this.displayedData = this.light3} else if (element.o.value == compare[6])
      {this.displayedData = this.sensor} else (this.displayedData = this.displayedData);

      this.outputoParent.emit(this.displayedData);

    
}

goBack (displayedData) {
  this.term = '';
  const compareback = [
  //0 storey 9
    '90b511b9-b7c0-465c-8e11-4a40cc9af266',
  //1 storey 8
    '90b511b9-b7c0-465c-8e11-4a40cc9af1e7',
  //2 space
    '15c75cfb-4a4e-404f-812a-77c1d3c20375',
  //3 light1
    '11aa13e4-f1bd-498e-bbda-cd90469ff87d',
  //4 light2
    '11aa13e4-f1bd-498e-bbda-cd90469ff87a',
  //5 light3
    '11aa13e4-f1bd-498e-bbda-cd90469ff87c',
  //6 sensor
    '11aa13e4-f1bd-498e-bbda-cd90469ff87b'
  ];

    if (displayedData[3].o.value == compareback[0]) 
  { this.displayedData = this.building,this.isActive = !this.isActive } else if (displayedData[3].o.value == compareback[1])
  {this.displayedData = this.building,this.isActive = !this.isActive} else if (displayedData[1].o.value == compareback[2])
    {this.displayedData = this.storey9} else if (displayedData[4].o.value == compareback[3])
    {this.displayedData = this.space88} else if (displayedData[4].o.value == compareback[4])
    {this.displayedData = this.space88} else if (displayedData[4].o.value == compareback[5])
    {this.displayedData = this.space88} else if (displayedData[4].o.value == compareback[6])
    {this.displayedData = this.space88} else (this.displayedData = this.displayedData);
    
    this.outputoParent.emit(this.displayedData);

 
}

}

