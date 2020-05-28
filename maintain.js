// Javascrip arrays from https://www.w3schools.com/js/js_arrays.asp //

// initialization of function
createSidebar();

function createSidebar() {
    // array containing supplements 
    var suppItems = [
            "------------------------------------------------",
            "Elemental Sulfur Pellets",
            "------------------------------------------------",
            "Fortified Sulfur Solution",
            "------------------------------------------------",
            "Hydroponic Phosphoric Solution",
            "------------------------------------------------",
            "Growth-Cycle Optimized Plant Food",
            "------------------------------------------------",
            "Chelated Iron",
            "------------------------------------------------",
            "Foliar Feed Solution",
            "------------------------------------------------",
            "Soil pH Meter",
            "------------------------------------------------"
        ],

        // create new container
        sidebarDiv = document.createElement('div'),
        // create new unordered list
        sidebarUl = document.createElement('ul'),
        // iterate through each supplement
        total = suppItems.length,
        sidebarLi, i;

    // append div to sidebar
    document.getElementsByTagName("aside")[0].appendChild(sidebarDiv);
    sidebarDiv.appendChild(sidebarUl);

    for (i = 0; i < total; ++i) {
        // create an item for each one
        sidebarLi = document.createElement('li');

        // append a supplement to each list item
        sidebarLi.innerHTML = suppItems[i];

        // append each list item to unordered list
        sidebarUl.appendChild(sidebarLi);
    }
}