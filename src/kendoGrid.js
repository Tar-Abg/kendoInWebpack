import $ from "jquery";
import  './css/style.css';
import { createGrid } from "kendoGridModule";
import { cars } from "./models";
import { credeKendoGrid } from "../node_modules/npm-ts-example/src/main"

createGrid($("body"), cars);
credeKendoGrid($("#kendoGrid"));