/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});

$(document).ready(function() {
  const today = moment();
  const dayZero = moment("01/22/2020", "MM/DD/YYYY");
  const daysSinceOutbreak = today.diff(dayZero, "days");
  const yesterday = moment()
    .add(-1, "days")
    .format("YYYY-MM-DD");

  datePicker(today);
  displayTable(yesterday);

  $("#dataDays").html(daysSinceOutbreak);
  $(".todayDate").html(today.format("M-D-YYYY"));

  $("#submitBtn").on("click", function(event) {
    event.preventDefault();

    $("#today").empty();
    displayTable($("#datePicker1").val());
  });

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

function datePicker(today) {
  // var dtToday = new Date();

  // date picker limits the # of days to choose from

  function datePicker(today) {
    // var dtToday = new Date();

    // var month = dtToday.getMonth() + 1;
    // var day = dtToday.getDate();
    // var year = dtToday.getFullYear();
    // if (month < 10)
    // 	month = '0' + month.toString();
    // if (day < 10)
    // 	day = '0' + day.toString();

    // var maxDate = year + '-' + month + '-' + day;

    $("#datePicker1").attr("max", today.format("YYYY-MM-DD"));
  }

  // end date picker

  function displayTable(date) {
    const searchDate = convertDate(date);
    const searchUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${searchDate}.csv`;

    dataForToday();

    function dataForToday() {
      Papa.parse(searchUrl, {
        download: true,
        complete: function(results) {
          $("#today").append(arrayToTable(results.data));
          scrollToTable();
        }
      });
    }

    //adding data to the table
    function arrayToTable(tableData) {
      var table = $('<table id="tableFixHead"></table>');
      $(tableData).each(function(i, rowData) {
        var row = $("<tr></tr>");
        $(rowData).each(function(j, cellData) {
          row.append($("<td>" + cellData + "</td>"));
        });
        table.append(row);
      });
      return table;
    }

    //scrolling to the results for mobile
    function scrollToTable() {
      $("html, body").animate(
        {
          scrollTop: $("#tableFixHead").offset()
        },
        1000
      );
    }
    //end scrolling to the results for mobile
  }

  // end capture user date choice

  // var maxDate = year + '-' + month + '-' + day;

  $("#datePicker1").attr("max", today.format("YYYY-MM-DD"));
}

function displayTable(date) {
  const searchDate = convertDate(date);
  const searchUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${searchDate}.csv`;

  dataForToday();

  function dataForToday() {
    Papa.parse(searchUrl, {
      download: true,
      complete: function(results) {
        $("#today").append(arrayToTable(results.data));
        scrollToTable();
      }
    });
  }

  //end scrolling to the results for mobile
}

//adding data to the table
function arrayToTable(tableData) {
  var table = $('<table id="tableFixHead"></table>');
  $(tableData).each(function(i, rowData) {
    var row = $("<tr></tr>");
    $(rowData).each(function(j, cellData) {
      row.append($("<td>" + cellData + "</td>"));
    });
    table.append(row);
  });
  return table;
}
//scrolling to the results for mobile
function scrollToTable() {
  $("html, body").animate(
    {
      scrollTop: $("#tableFixHead").offset()
    },
    1000
  );
}
// end capture user date choice

//converting user input to use for the search
function convertDate(dateString) {
  var p = dateString.split(/\D/g);
  return [p[1], p[2], p[0]].join("-");
}
//

// Have fun and stay healthy! Peter :)

// in case I need data from the table - but it's same as papa parse returns
// function getTableData(table) {
// 	var data = [];
// 	table.find('tr').each(function (rowIndex, r) {
// 		var cols = [];
// 		$(this).find('th,td').each(function (colIndex, c) {
// 			cols.push(c.textContent);
// 		});
// 		data.push(cols);
// 	});
// 	console.log(data);
// };
function zoomin() {
  var myImg = document.getElementById("sky");
  var currWidth = myImg.clientWidth;
  if (currWidth == 500) {
    alert("Maximum zoom-in level reached.");
  } else {
    myImg.style.width = currWidth + 50 + "px";
  }
}
function zoomout() {
  var myImg = document.getElementById("sky");
  var currWidth = myImg.clientWidth;
  if (currWidth == 50) {
    alert("Maximum zoom-out level reached.");
  } else {
    myImg.style.width = currWidth - 50 + "px";
  }
}
