import  './css/style.css';
import * as $ from "jquery";
// require ("jquery") I wont like this, but it's not working 
import { Car } from "../models";
require ("@progress/kendo-ui/js/kendo.menu.js");
require ("@progress/kendo-ui/js/kendo.grid");


import { createGrid } from "module2";

var navBar = document.createElement("ul");
document.body.appendChild(navBar); 
$("ul").kendoMenu({
    dataSource: [
      {
        text: "Model",
        items: [
          {
            text: "Bmw",
            items: [
              { text: "BMW X1" },
              { text: "BMW 3 Series GT" },
              { text: "BMW i8" },
              { text: "BMW X4" },
              { text: "BMW X6" },
            ]
          },
          {
            text: "Mercedes-Benz",
            items: [
              { text: "GLA 45 AMG" },
              { text: "AMG GT" },
              { text: "GLE" },
              { text: "GLE 2019" },
            ],
          }
        ],
        cssClass: "forFont"
      },
      {
        text: "German Cars",
        items: [
          { text: "Audi" },
          { text: "Opel" },
          { text: "Volkswagen" },
          { text: "Ford-Werke GmbH" }
        ],
      },
      {
        text: "Contact",
        cssClass: "forFont",
        url: "#"
      },
      {
        text: "About",
        cssClass: "forFont",
        url: "#grid"
      }
    ],
  });


createGrid(document.body, Car)
  
  
