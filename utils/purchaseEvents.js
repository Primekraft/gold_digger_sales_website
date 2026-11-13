import EventEmitter from "events";
import { generatepdf } from "./generatepdf.js";

export const purchaseEvent = new EventEmitter()


purchaseEvent.on("purchase-was-made", generatepdf)
