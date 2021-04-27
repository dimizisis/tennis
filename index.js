'use strict';

// When the user scrolls the page, execute keepNavBar
window.onscroll = function() {
  keepNavBar()
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove 'sticky' when you leave the scroll position
function keepNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

function setCurrentAge() {
  document.getElementById('ageval').innerHTML = String(new Date().getFullYear() - 1987);
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  table = document.getElementById('ranking-by-year-table');
  switching = true;
  dir = 'asc';
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];
      if (dir == 'asc') {
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchCount++;
    } else {
        if (switchCount == 0 && dir == 'asc') {
          dir = 'desc';
          switching = true;
        }
    }
  }
}

function makeNavBarBtnActive(id) {
  var items = document.getElementsByClassName('navbtn');
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains('active')) {
      items[i].classList.toggle('active')
    }
  }
  document.getElementById(id).classList.add('active');
}
