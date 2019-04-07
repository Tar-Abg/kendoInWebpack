var $ = require('jquery')
import { dataMenu } from  "../models";
import { secndMenu } from "../models"
import { createNavabr } from  "kendonavbar";
import { createSecndNavabr} from "kendonavbar"

createNavabr( $ ("body"), dataMenu);
createSecndNavabr($("body"), secndMenu);



  
