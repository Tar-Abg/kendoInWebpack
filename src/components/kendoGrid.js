var $ = require("jquery");
import { createGrid } from "kendoGridModule";
import { cars } from "../models";
import { dataForSecndGrid } from "../models"
import { gridColumn } from "../models"
import { gridColumnToo } from "../models"
// import { credeKendoGrid } from "../../node_modules/kendoGrid/src/main";

createGrid($("body"), cars,gridColumn, "Rapprochments", "11/04/2019");
createGrid($("body"), dataForSecndGrid,gridColumnToo, "Situation des comptes", "")
// credeKendoGrid($("#kendoGrid"));
