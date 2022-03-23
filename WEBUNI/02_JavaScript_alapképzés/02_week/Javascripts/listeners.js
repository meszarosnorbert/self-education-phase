import { createItem } from "./Listeners/createListener.js";
import { deleteItem } from "./Listeners/deleteListener.js";
import { changeItem, initOrderButtons } from "./Listeners/updateListener.js";

export const initListeners = (dataset) => {
    createItem(dataset);
    initOrderButtons(dataset);
};

export const refreshAfterChange = (dataset) => {
    deleteItem(dataset);
    changeItem(dataset);
};
