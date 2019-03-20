import $ from "jquery";
import  './css/style.css';
import { createGrid } from "kendoGridModule";
import { cars } from "./models";


createGrid($("body"), cars);