var $ = require("jquery");
import { createGrid } from "kendoGridModule";
import { cars } from "../models";
import { credeKendoGrid } from "../../node_modules/kendoGrid/src/main";

createGrid($("body"), cars);
credeKendoGrid($("#kendoGrid"));
