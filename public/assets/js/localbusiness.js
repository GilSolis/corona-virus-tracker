if (window.location.pathname === "/") {
    $(document).ready(showBiz());
}



function showBiz() {
    /* global moment */

    // businessContainer holds all daat

    $.get("/api/categories", function (data) {
        console.log("Categories", data);
        console.log(data)
        $(".business-container").append(arrayToTable(data));
    })

};


function arrayToTable(tableData) {
    var container = $('<div>');
    container.addClass('list-group')

    for (var i = 0; i < tableData.length; i++) {
        var item = $('<div>');
        item.addClass("list-group-item text-center")
        var name = $("<h2>").text(tableData[i].name)
        name.addClass('font-weight-bold')
        item.append(name)


        for (var j = 0; j < tableData[i].Places.length; j++) {
            var place = tableData[i].Places[j]
            var placeContainer = $("<div>")
            placeContainer.addClass('m-2')

            var name = $("<a>").text(place.name)

            if (place.titleLink.length > 0) {
                name.attr("href", place.titleLink)
                name.attr("target", "_blank")
            } else {
                name.attr("href", "#")
                name.onclick = function () { return false }
            }

            var text = $("<p>").text(place.text)

            placeContainer.append(name, text)
            item.append(placeContainer)            
        }

        container.append(item)
    }

    return container;
}

//     $(tableData).each(function (i, rowData) {
//         var row = $('<tr></tr>');
//         $(rowData).each(function (j, cellData) {
//             row.append($('<td>' + cellData + '</td>'));
//         });
//         table.append(row);
//     });
//     return table;
// }