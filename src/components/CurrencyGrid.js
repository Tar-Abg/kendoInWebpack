var $ = require("jquery");
import { createCurrency } from '../../node_modules/kendogridcurrency/index';
import { gridDataCurrency } from "../models";
import { gridColumnCurrency } from "../models";

createCurrency ($('body'), gridColumnCurrency, gridDataCurrency, "Cours du jour"  )