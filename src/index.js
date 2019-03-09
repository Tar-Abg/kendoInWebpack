import  './css/style.css';
import * as $ from "jquery";
import { Car } from "../models";




import { createNavabr } from  "kendonavbar";
import { createGrid } from "module2";



createNavabr(document.body)
createGrid(document.body, Car)
  
  
