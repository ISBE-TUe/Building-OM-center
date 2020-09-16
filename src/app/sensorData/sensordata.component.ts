import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Chart} from 'chart.js';
import {DataB} from '../DataB';




@Component({
  selector: 'app-sensordata',
  templateUrl: './sensordata.component.html',
  styleUrls: ['./sensordata.component.css']
})
export class SensordataComponent implements OnInit, OnChanges {

  public xmlItems: any;
  arr=[];
  arr_fromDateTime=[];
  arr_toDateTime=[];
  arr_avgKW=[];
  arr_endAccKWH=[];
  arr_maxKW=[];
  arr_minKW=[];
  arr_startAccKWH=[];
  chart;
  locationID: String;
  sensorID;
  
  @Input('displayedData') displayedData: DataB[] ;
 
  
  constructor(private _http: HttpClient) { }
  

  ngOnInit(): void {
    this.loadXML();
  }
  
  ngOnChanges() {

   if (this.displayedData !== undefined) {
    for (let i=0; i<this.displayedData.length; i++) {
      if (this.displayedData[i].p.value =='https://w3id.org/props#sensorID') {this.sensorID = this.displayedData[i].o.value;
       if (this.sensorID == this.locationID)
      {this.makeGraph(this.arr, this.arr_fromDateTime, 
      this.arr_toDateTime, this.arr_avgKW, this.arr_endAccKWH,this.arr_maxKW,
      this.arr_minKW, this.arr_startAccKWH)}}  else if (this.chart !== undefined) {this.cleanChart()}
  }

  loadXML() {
    this._http.get('/assets/response_POST_getMetricReport_Energy_Hour.xml',
  {
    headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
  })
  .subscribe((data) => {
    var parser = new DOMParser();
     this.xmlItems=parser.parseFromString (data, 'text/xml');
     this.getSensorID(this.xmlItems);
     this.buildArray(this.xmlItems);
      
          });
  };
     
  getSensorID(x) {
    let LocationID = x.getElementsByTagName('locationID');
    for (let i=0; i<LocationID.length; i++) {
       this.locationID = LocationID[i].innerHTML;
  }
    
  };

  buildArray(x) {
   
    let fromDateTimes = x.getElementsByTagName('fromDateTime');
    let toDateTimes = x.getElementsByTagName('toDateTime');
    let avgKWs = x.getElementsByTagName('avgKW');
    let endAccKWHs = x.getElementsByTagName('endAccKWH');
    let maxKWs = x.getElementsByTagName('maxKW');
    let minKWs = x.getElementsByTagName('minKW');
    let startAccKWHs = x.getElementsByTagName('startAccKWH');
    
    for (let i=0; i<fromDateTimes.length; i++) {
      var fromDateTime = new Date (fromDateTimes[i].innerHTML);
      var toDateTime = new Date(toDateTimes[i].innerHTML);
      var avgKW = avgKWs[i].innerHTML;
      var endAccKWH = endAccKWHs[i].innerHTML;
      var maxKW = maxKWs[i].innerHTML;
      var minKW = minKWs[i].innerHTML;
      var startAccKWH = startAccKWHs[i].innerHTML;
      
      this.arr.push({
        avgKW,
        endAccKWH,
        maxKW,
        minKW,
        startAccKWH
      }) 
     
            
     this.arr_fromDateTime.push(
        fromDateTime.toLocaleTimeString('nl-NL', {hour: '2-digit', minute:'2-digit'})
      );
      this.arr_toDateTime.push(
        toDateTime.toLocaleTimeString('nl-NL', {hour: '2-digit', minute:'2-digit'})
       );
     this.arr_avgKW.push(
        +avgKW
      );
    this.arr_endAccKWH.push(
        +endAccKWH
      );
     this.arr_maxKW.push(
        +maxKW
      );
     this.arr_minKW.push(+minKW);
     this.arr_startAccKWH.push(
        +startAccKWH
      );
             
    }

  };
  
  
  makeGraph(arr, fromDateTime, toDateTime, avgKW, endAccKWH, maxKW, minKW, startAccKWH) {
      

     this.chart = new Chart("canvas", {
      // The type of chart to create
     type: 'line',
  
      // The data for the dataset
     data: {
        labels: toDateTime.sort(),
         datasets: [
           {
              label: 'MaxKW',
            // backgroundColor: 'rgb(50, 135, 168)',
             borderColor: 'rgb(50, 135, 168)',
             data: maxKW,
          },
          {
            label: 'MinKW',
          // backgroundColor: 'rgb(234, 237, 24)',
           borderColor: 'rgb(234, 237, 24)',
           data: minKW,
        },
        {
          label: 'avgKW',
         //backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(255, 99, 132)',
         data: avgKW,
      }
        
        ]
      },
      /* to add a title to the Graph
      options: {
        title: {
        display:true,
        position:'top',
        fontSize:16,
        text:'Energy',
        padding:10
        }
        }
        */
  });
};


cleanChart ()
{
  this.chart.destroy();
}

}
  
 
