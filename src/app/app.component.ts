import { Component } from '@angular/core';
import { Service } from './service';
import { Data } from './Data';
import { DataB } from './DataB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Building O&M center';

  build: Data;
  buildb: DataB[];
  space: Data;
  spaceb: DataB[];
  storey9: Data;
  storey9b: DataB[];
  storey8: Data;
  storey8b: DataB[];
  def: Data;
  defb: DataB[];
  light_1: Data;
  light_1b: DataB[];
  light_2: Data;
  light_2b: DataB[];
  light_3: Data;
  light_3b: DataB[];
  sensor: Data;
  sensorb: DataB[]; 

  displayedData: DataB[] ;

  constructor(private Service: Service) { }

  ngOnInit() {
    this.getDefaultData ();
    this.getBuild ();
    this.getData();
    this.getStoreya ();
    this.getStoreyb ();
    this.getlight1();
    this.getlight2();
    this.getlight3();
    this.getsensor();

  }

  updateDisplayedData(data: DataB[]) {
    if (data)
    {
      this.displayedData = data
    } 
    console.log(this.displayedData[1].o.value);
  }

  

  getDefaultData(): void {
    this.Service.getDefaultData()
    .subscribe(
      (response) => {
        this.def = JSON.parse (response)
        //console.log(this.def)
        this.defb = this.def.results.bindings
        //console.log(this.defb)
       })
      };

  getBuild(): void {
    this.Service.getBuild()
    .subscribe(
      (response) => {
        this.build = JSON.parse (response)
        //console.log(this.buil)
        this.buildb = this.build.results.bindings
       // console.log(this.buildb)
       })
      };

  getData(): void {
    this.Service.getData()
    .subscribe(
          (response) => {
          this.space = JSON.parse (response)
         //console.log(this.data2)
          this.spaceb = this.space.results.bindings
          //console.log(this.datab2)
          });
    
    }

    getStoreya(): void {
      this.Service.getStoreya()
      .subscribe(
            (response) => {
            this.storey9 = JSON.parse (response)
           //console.log(this.data3)
            this.storey9b = this.storey9.results.bindings
           // console.log(this.datab3)
            });
      
      }
    getStoreyb(): void {
      this.Service.getStoreyb()
      .subscribe(
            (response) => {
            this.storey8 = JSON.parse (response)
           //console.log(this.data4)
            this.storey8b = this.storey8.results.bindings
           // console.log(this.datab4)
            });
      
      }

      getlight1(): void {
        this.Service.getlight1()
        .subscribe(
              (response) => {
              this.light_1 = JSON.parse (response)
            //console.log(this.light_1)
              this.light_1b = this.light_1.results.bindings
             //console.log(this.light_1b)
              });
        
        }   
        getlight2(): void {
          this.Service.getlight2()
          .subscribe(
                (response) => {
                this.light_2 = JSON.parse (response)
                //console.log(this.light_2)
                this.light_2b = this.light_2.results.bindings
              // console.log(this.light_2b)
                });
          }
          getlight3(): void {
            this.Service.getlight3()
            .subscribe(
                  (response) => {
                  this.light_3 = JSON.parse (response)
                // console.log(this.light_3)
                  this.light_3b = this.light_3.results.bindings
                 //console.log(this.light_3b)
                  });
            }    
            getsensor(): void {
              this.Service.getsensor()
              .subscribe(
                    (response) => {
                    this.sensor = JSON.parse (response)
                 // console.log(this.sensor)
                    this.sensorb = this.sensor.results.bindings
                   //console.log(this.sensorb)
                    });
              }      

}






