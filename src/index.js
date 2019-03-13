import  './css/style.css';
import { Car } from "./models";
import { createNavabr } from  "kendonavbar";
import { createGrid } from "kendoGridModule";

createNavabr(document.body);
createGrid(document.body, Car);
  
  
