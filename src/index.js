import  './css/style.css';
import $ from "jquery";
import { Car } from "./models";
import { createNavabr } from  "kendonavbar";
import { createGrid } from "kendoGridModule";

createNavabr($("body"));
createGrid($("body"), Car);


  
