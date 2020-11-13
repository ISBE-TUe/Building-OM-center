# Building O&M center

This application is an open-source prototype to display data from a BIM model and the energy metric report from a building sensor. The BIM data is retrieved from a repository in GhaphDB in .ttl format, and the sample sensor data is in XML. These files are processed to populate a table and a chart component in the user interface. By default, the app starts displaying data about the building element, the user can select the elements contained in it to get information about them, and also go back to the previous element displayed. The sensor sample data is shown when sensor (250195) is selected.  

The sample files are located in `Building-OM-center/Data/Atlas_8_floor_sensor.ttl` and `Building-OM-center/src/assets/response_POST_getMetricReport_Energy_Hour.xml` The `.ttl` file was obtained using the IFCtoLBD converter adapted version from Pieter Pauwels (https://github.com/pipauwel/IFCtoLBD).

## Prerequisites

The app has the following Prerequisites:

•	Install node.js and the npm package manager.

•	Install the Angular CLI, This project was generated with Angular CLI version 9.1.0. 

•	Install Ontotext GraphDB, create a repository and include the `.ttl` file located in the `Data` folder.

## Initiate App 

•	In `Building-OM-center/src/app/elementInfo/elementInfo.ts`, the URL `http://localhost:7200/repositories/05/` must match the repository path created in graphDB.

•	Run `ng serve` in Angular CLI for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

This project is licensed under the terms of the MIT license.
