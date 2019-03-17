import  './css/style.css';
import $ from "jquery";
import { cars } from "./models";
import { dataMenu } from  "./models"
import { createNavabr } from  "kendonavbar";
import { createGrid } from "kendoGridModule";


createNavabr($("body"), dataMenu);
createGrid($("body"), cars);


  
