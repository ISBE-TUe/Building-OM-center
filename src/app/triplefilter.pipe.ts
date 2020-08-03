import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'triplefilter'
})
export class TriplefilterPipe implements PipeTransform {

  transform(datab: any): any {
   const term = [
      "https://w3id.org/props#nameIfcRoot_attribute_simple",
      "https://w3id.org/bot#adjacentElement",
      "https://w3id.org/props#isExternal",
      "https://w3id.org/props#longNameIfcSpatialElement_attribute_simple",
      "https://w3id.org/bot#containsElement",
      "https://w3id.org/bot#hasStorey",
      "https://w3id.org/bot#hasSpace",
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
      "https://w3id.org/props#baseOffset",
      "https://w3id.org/props#computationHeight",
      "https://w3id.org/props#unboundedHeight",
      "https://w3id.org/props#actualLightingLoad",
      "https://w3id.org/props#actualLightingLoadarea",
      "https://w3id.org/props#actualPowerLoad",
      "https://w3id.org/props#actualPowerLoadperarea",
      "https://w3id.org/props#areaperPerson",
      "https://w3id.org/props#baseLightingLoadon",
      "https://w3id.org/props#basePowerLoadon",
      "https://w3id.org/props#heatLoadValues",
      "https://w3id.org/props#latentHeatGainperperson",
      "https://w3id.org/props#lightingLoadUnits",
      "https://w3id.org/props#numberofPeople",
      "https://w3id.org/props#plenumLightingContribution",
      "https://w3id.org/props#powerLoadUnits",
      "https://w3id.org/props#sensibleHeatGainperperson",
      "https://w3id.org/props#specifiedLightingLoad",
      "https://w3id.org/props#specifiedLightingLoadperarea",
      "https://w3id.org/props#specifiedPowerLoad",
      "https://w3id.org/props#specifiedPowerLoadperarea",
      "https://w3id.org/props#totalHeatGainperperson",
      "https://w3id.org/props#phaseId",
      "https://w3id.org/props#movesWithNearbyElements",
      "https://w3id.org/props#volume",
      "https://w3id.org/props#circuitNumber",
      "https://w3id.org/props#panel",
      "https://w3id.org/props#calculateCoefficientofUtilization",
      "https://w3id.org/props#mark",
      "https://w3id.org/props#phaseCreated",
      "https://w3id.org/props#hostId",
      "https://w3id.org/props#family",
      "https://w3id.org/props#familyandType",
      "https://w3id.org/props#lightSourceSymbolSize",
      "https://w3id.org/props#assemblyDescription",
      "https://w3id.org/props#codeName",
      "https://w3id.org/props#omniClassNumber",
      "https://w3id.org/props#omniClassTitle",
      "https://w3id.org/props#typeName",
      "https://w3id.org/props#familyName",
      "https://w3id.org/props#colorFilter",
      "https://w3id.org/props#dimmingLampColorTemperatureShift",
      "https://w3id.org/props#efficacy",
      "https://w3id.org/props#emitfromLineLength",
      "https://w3id.org/props#illuminance",
      "https://w3id.org/props#initialColor",
      "https://w3id.org/props#initialColorTemperature",
      "https://w3id.org/props#initialIntensity",
      "https://w3id.org/props#lightingLossFactor",
      "https://w3id.org/props#luminousFlux",
      "https://w3id.org/props#luminousIntensity",
      "https://w3id.org/props#totalLightingLossFactor",
      "https://w3id.org/props#wattage",
      "https://w3id.org/props#limitOffset",
      "https://w3id.org/props#actualLightingLoadperarea",
      "https://w3id.org/props#assemblyCode",
      "https://w3id.org/props#typeId",
      "https://w3id.org/props#lightLossFactor",
      "https://w3id.org/props#lightSourceDefinitionfamily",
      "https://w3id.org/props#totalLightLossFactor"

    ];
    
    return datab.filter(function(f) {
      return (f.p.value !== term[0]  && 
        f.p.value !== term[1] && 
        f.p.value !== term[2] && 
        f.p.value !== term[3] && 
        f.p.value !== term[4] && 
        f.p.value !== term[5] &&
        f.p.value !== term[6] &&
        f.p.value !== term[7] &&
        f.p.value !== term[8] && 
        f.p.value !== term[9] && 
        f.p.value !== term[10] && 
        f.p.value !== term[11] &&
        f.p.value !== term[12] &&
        f.p.value !== term[13] && 
        f.p.value !== term[14] && 
        f.p.value !== term[15] && 
        f.p.value !== term[16] && 
        f.p.value !== term[17] &&
        f.p.value !== term[18] &&
        f.p.value !== term[19] &&
        f.p.value !== term[20] && 
        f.p.value !== term[21] && 
        f.p.value !== term[22] && 
        f.p.value !== term[23] &&
        f.p.value !== term[24] &&  
        f.p.value !== term[25] && 
        f.p.value !== term[26] &&
        f.p.value !== term[27] &&
        f.p.value !== term[28] && 
        f.p.value !== term[29] && 
        f.p.value !== term[30] && 
        f.p.value !== term[31] && 
        f.p.value !== term[32] &&
        f.p.value !== term[33] &&
        f.p.value !== term[34] &&
        f.p.value !== term[35] &&
        f.p.value !== term[36] && 
        f.p.value !== term[37] && 
        f.p.value !== term[38] && 
        f.p.value !== term[39] &&
        f.p.value !== term[40] &&  
        f.p.value !== term[41] && 
        f.p.value !== term[42] &&
        f.p.value !== term[43] &&
        f.p.value !== term[44] && 
        f.p.value !== term[45] && 
        f.p.value !== term[46] && 
        f.p.value !== term[47] && 
        f.p.value !== term[48] && 
        f.p.value !== term[49] &&
        f.p.value !== term[50] &&  
        f.p.value !== term[51] && 
        f.p.value !== term[52] &&
        f.p.value !== term[53] &&
        f.p.value !== term[54] && 
        f.p.value !== term[55] && 
        f.p.value !== term[56] && 
        f.p.value !== term[57] && 
        f.p.value !== term[58] &&
        f.p.value !== term[59] &&
        f.p.value !== term[60] &&
        f.p.value !== term[61] &&
        f.p.value !== term[62] &&
        f.p.value !== term[63] &&
        f.p.value !== term[64] &&
        f.p.value !== term[65] &&
        f.p.value !== term[66] &&
        f.p.value !== term[67] &&
        f.o.value !== ""
        );
          
    });


  }

}
