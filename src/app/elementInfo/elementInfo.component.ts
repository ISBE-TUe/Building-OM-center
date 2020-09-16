import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataB } from '../DataB';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';





@Component({
  selector: 'app-elementInfo',
  templateUrl: './elementInfo.component.html',
  styleUrls: ['./elementInfo.component.css'],
  
})

export class ElementInfoComponent implements OnInit {

 

@Output() outputoParent = new EventEmitter<DataB[]>();
 
  displayedColumns = ['property', 'value'];
 
  isActive = true;
  term:string;
  arr = [];
  displayedData = [{
    p:{
    type: "",
    value:"",
    },
    o:{
    type: "",
    value:"",
    }

}];

  constructor(private _http: HttpClient) { 
  
  }


   ngOnInit() {
  
         const httpParamsdef = new HttpParams ({
      fromObject:{
        query:'select ?o ?p where {<http://linkedbuildingdata.net/ifc/resources20200408_172328/building_134> ?p ?o}'
      }
    });
  
    this._http.get('http://localhost:7200/repositories/05', {params: httpParamsdef,

    headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
  })
  .subscribe((data) => {
    this.displayedData = (JSON.parse(data)).results.bindings
  });
       
  }


  updateData (element) {
    this.term = '';
    this.isActive = false;
    
    const httpParams = new HttpParams ({
      fromObject:{
        query:'select ?o ?p where {<' + element.o.value + '> ?p ?o}'
      }
    });

    this._http.get('http://localhost:7200/repositories/05', {params: httpParams,

  headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType: 'text'
})
.subscribe((data) => {
  this.displayedData = (JSON.parse(data)).results.bindings;
  // console.log(this.displayedData)
  this.outputoParent.emit(this.displayedData);
});

this.arr.push(
  this.displayedData,
)

    
}

goBack (displayedData) {
  this.term = '';
  const compareback = [
  //0 storey 9
    '90b511b9-b7c0-465c-8e11-4a40cc9af266',
  //1 storey 8
    '90b511b9-b7c0-465c-8e11-4a40cc9af1e7',
  ];

  this.displayedData = this.arr[(this.arr.length)-1];
  if (displayedData[3].o.value == compareback[0] || displayedData[3].o.value == compareback[1]) {this.isActive = !this.isActive}
  this.arr.splice((this.arr.length)-1,1);
    
  this.outputoParent.emit(this.displayedData);

 
}

}

