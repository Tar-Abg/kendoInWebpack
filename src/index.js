import  './css/style.css';
import * as $ from "jquery";
// require ("jquery") I wont like this, but it's not working 
import { Car } from "../models";
require ("@progress/kendo-ui/js/kendo.menu.js");
require ("@progress/kendo-ui/js/kendo.grid.js");






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

var div = document.createElement('div');
document.body.appendChild(div);
$("div").addClass("grid");
$("div").kendoGrid({
    columns: [
      { title: "id", field: "id" },
      { title: "Model", field: "model" },
      { title: "Price", field: "price" },
      { title: "Country", field: "country" },
      {
        title: "img",
        field: "picture",
        template: '<img src="#= picture #" alt="image"  class="img"/>',
      },
      { command: "edit" }
    ],
    dataSource: {
      data: Car,
      pageSize: 5,
      schema: {
        model: {
          id: "id",
          fields: {
            "id": { type: "number" }
          }
        }
      }
    },
    pageable: true,
    sortable: { mode: "multiple" },
    groupable: true,
    selectable: true,
    editable: "popup",

    edit: function (e) {
      if (!e.model.isNew()) {
        var numeric = e.container.find("input[name=id]").data("kendoNumericTextBox");
        numeric.enable(false);
      }
    }
  });
  document.body.appendChild(div); 

  
  
