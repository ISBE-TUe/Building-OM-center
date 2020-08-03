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
  test = [];
  chart;
  @Input('displayedData') displayedData: DataB[] ;
 
  
  constructor(private _http: HttpClient) { }
  

  ngOnInit(): void {
    this.loadXML();
  }
  
  ngOnChanges() {

 if ( this.arr_avgKW !== [] && this.displayedData[1].o.value == '15c75cfb-4a4e-404f-812a-77c1d3c20375' || this.displayedData[4].o.value == '11aa13e4-f1bd-498e-bbda-cd90469ff87b')   
 {this.makeGraph(this.arr, this.arr_fromDateTime, 
    this.arr_toDateTime, this.arr_avgKW, this.arr_endAccKWH,this.arr_maxKW,
    this.arr_minKW, this.arr_startAccKWH)} else if (this.displayedData[1].o.value !== '15c75cfb-4a4e-404f-812a-77c1d3c20375' && this.displayedData[4].o.value !== '11aa13e4-f1bd-498e-bbda-cd90469ff87b')
        { this.cleanChart()}
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
    // console.log(this.xmlItems.getElementsByTagName('metricsReportResponse')[0]);
     this.buildArray(this.xmlItems);
      
          });
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
      // The type of chart we want to create
     type: 'line',
  
      // The data for our dataset
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
      // options: {
        //  title: {
        // display:true,
        //  position:'top',
        //  fontSize:16,
        //  text:'Energy',
        //  padding:10
        //  }
        // }
  });
};


cleanChart ()
{
  this.chart.destroy();
}

}

  
 //,{year:'numeric', month: 'short', day:'numeric'}
  
     // console.log(x);

    //var arr2 = [];
    
    

   // var labelstring = [
     //'00hr', '01hr','02hr','03hr','04hr','05hr','06hr', '07hr',
   //  '08hr', '09hr', '10hr','11hr','12hr','13hr','14hr','15hr',
    //  '16hr','17hr','18hr','19hr','20hr','21hr','22hr','23hr','24hr',
   // ]

   
    //for(let i=0; i<x.length; i++) {
    // let  value = +arr[i].maxKW

    // arr2.push(
    //   value
    // )
               
   // }
   // console.log(arr2)
  
 



    //if (this.displayedData[1].o.value == '0LnrpxIav0Ju4gTy7JmWDr' || this.displayedData[3].o.value == '0HgXFayRr9ZhlQpP16d$Xx' ) {
  // if (minKW.length !== 24) { 
    // minKW.splice(11, minKW.length-24 )
     // console.log (minKW)
 //  } else {

 //}

 // } else (console.log('not working'))
//}  else if ( this.displayedData[1].o.value !== '0LnrpxIav0Ju4gTy7JmWDr' || this.displayedData[3].o.value !== '0HgXFayRr9ZhlQpP16d$Xx') 
//{console.log ('no sensor available for this element')} 

  //this.test.splice(0,this.test.length, this.arr_minKW.values())
  // console.log(this.test)
    //console.log(this.arr_minKW),
   //this.makeGraph(this.arr, this.arr_fromDateTime, 
    //this.arr_toDateTime, this.arr_avgKW, this.arr_endAccKWH,this.arr_maxKW,
    //this.arr_minKW, this.arr_startAccKWH)