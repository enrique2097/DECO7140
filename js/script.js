// Search filtering

// Title: How To - Filter/Search List
// Author: w3Schools
// Availability: https://www.w3schools.com/howto/howto_js_filter_lists.asp 

function searchFilter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toLowerCase();
    table = document.getElementById('timetable');
    tr = table.getElementsByTagName("tr");  

for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

// Smooth scrolling

// Title: Vanilla Javascript Smooth Scroll Tutorial | Modern CSS Tutorial
// Author: BigBrackets Learning
// Availability: https://www.youtube.com/watch?v=RcD1aWNwdao

const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.au');
    for(let n in navLinks){
        if(navLinks.hasOwnProperty(n)){
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                .scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    }
}
smoothScroll()














