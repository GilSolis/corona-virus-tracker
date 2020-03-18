// messing up with dates

//today date to include into url (upd - not using this, need to remove w datepicker)

let today = new Date();

let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

if(dd<10) {dd='0'+dd;} 
if(mm<10) {mm='0'+mm;} 

today = mm+'-'+dd+'-'+yyyy;

// today date end (old - no need)


//counter of dates

let date1 = new Date("01-22-2020"); 
let date2 = new Date(today); 
  
// To calculate the time difference of two dates 
let Difference_In_Time = date2.getTime() - date1.getTime(); 
// To calculate the no. of days between two dates 
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 
  
//counter of dates end
console


// main portion of the code 
// 
// 
// 

window.addEventListener('load', (event) => {
	$("#dataDays").html(Difference_In_Days);
	$("#todayDate").html(today);
	$("#todayDate1").html(today);
	datePicker();
	userDateInput();
		
});

  /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

//   
// 
// 
// 
// end main portion of the code



	// date picker limits the # of days to choose from

function datePicker(){
		var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
	var maxDate = year + '-' + month + '-' + day;
	
	$('#datePicker1').attr('max', maxDate);
	
	$('#datePicker1').attr('min', '2020-01-22');
	};

	// end date picker


	
// main function - capture user date choice
function userDateInput(){

	$("#submitBtn").on("click",function(){
$("#today").empty();
	let userDate = $("#datePicker1").val();
	readyUserDate = convertDate(userDate);
		
	const searchUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${readyUserDate}.csv`
	
	dataForToday();
		scrollToTable();
	
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
		$(tableData).each(function (i, rowData) {
            var row = $('<tr></tr>');
            $(rowData).each(function (j, cellData) {
                row.append($('<td>'+cellData+'</td>'));
            });
            table.append(row);
		});
	
		return table;
		
	}
	
	//scrolling to the results for mobile
	function scrollToTable(){
		$('html, body').animate({
			scrollTop: $("#tableFixHead").offset().top
		  }, 1000);
	}
	//end scrolling to the results for mobile
	


	});

 };

 // end capture user date choice


//converting user input to use for the search
 function convertDate(dateString){
	var p = dateString.split(/\D/g);
	return [p[1],p[2],p[0] ].join("-");
	};
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