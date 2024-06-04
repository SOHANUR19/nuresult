/*
  Copyright (c) 2020 Ashraful Sarkar Authors (https://github.com/ashrafulsarkar)
  Licensed under MIT (https://github.com/ashrafulsarkar/nuresult/blob/master/LICENSE)
*/

document.querySelector("#year").addEventListener("change", function myfunction() {
    document.querySelector("#year").value;
});

function result_show() {
    var roll_number = document.querySelector("#roll").value;
    var exam_year = document.querySelector("#exam_year").value;
    var selectedValue = document.querySelector("#year").value;
    if (selectedValue == "select") {
        alert("Please Select Honours Year");
    }else if (roll_number == "") {
        alert("Please Enter Your Roll");
        document.getElementById('roll').focus();
    }
    else if (exam_year == "") {
        alert("Please Select Year");
        document.getElementById('exam_year').focus();
    }
    else{
        var url = 'http://103.113.200.7/honours/' + selectedValue + '_year_result_show.php?roll_number=&reg_no=' + roll_number + '&exam_year=' + exam_year;
      // var url = 'https://www.nu.ac.bd/results_lastest/result_show.php?reg_no='+roll_number+'&exm_code='+selectedValue+'&exam_year='+exam_year;
      
        window.open(url, '_blank', 'height=750,width=780,left=130, top=5,resizable=yes, scrollbars');
    }
    
}

