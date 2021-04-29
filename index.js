'use strict';

class TennisPlayer {
  constructor (name, birthday, birthplace, citizenship, height, outfitter) {
      this.name = name;
      this.birthday = birthday;
      this.birthplace = birthplace;
      this.citizenship = citizenship;
      this.height = height;
      this.outfitter = outfitter;
      this.statistics = new Statistics();
      this.statistics.singlesServiceRecord.set('Aces', 5985);
      this.statistics.singlesServiceRecord.set('Double Faults', 2509);
      this.statistics.singlesServiceRecord.set('1st Serve (%)', 65);
      this.statistics.singlesServiceRecord.set('1st Serve Points Won (%)', 74);
      this.statistics.singlesServiceRecord.set('1st Serve Points Lost (%)', (100 - this.statistics.singlesServiceRecord.get('1st Serve Points Won (%)')));
      this.statistics.singlesServiceRecord.set('2nd Serve Points Won (%)', 55);
      this.statistics.singlesServiceRecord.set('2nd Serve Points Lost (%)', (100 - this.statistics.singlesServiceRecord.get('2nd Serve Points Won (%)')));
      this.statistics.singlesServiceRecord.set('Break Points Faced', 5613);
      this.statistics.singlesServiceRecord.set('Break Points Saved (%)', 65);
      this.statistics.singlesServiceRecord.set('Break Points Lost (%)', (100 - this.statistics.singlesServiceRecord.get('Break Points Saved (%)')));
      this.statistics.singlesServiceRecord.set('Break Points Saved (Cardinal)', this.statistics.singlesServiceRecord.get('Break Points Saved (%)') * this.statistics.singlesServiceRecord.get('Break Points Faced'));
      this.statistics.singlesServiceRecord.set('Break Points Lost (Cardinal)', this.statistics.singlesServiceRecord.get('Break Points Lost (%)') * this.statistics.singlesServiceRecord.get('Break Points Faced'));
      this.statistics.singlesServiceRecord.set('Service Games Played', 13670);
      this.statistics.singlesServiceRecord.set('Service Games Won (%)', 86);
      this.statistics.singlesServiceRecord.set('Service Games Lost (%)', (100 - this.statistics.singlesServiceRecord.get('Service Games Won (%)')));
      this.statistics.singlesServiceRecord.set('Service Games Won (Cardinal)', this.statistics.singlesServiceRecord.get('Service Games Won (%)') * this.statistics.singlesServiceRecord.get('Service Games Played'));
      this.statistics.singlesServiceRecord.set('Service Games Lost (Cardinal)', this.statistics.singlesServiceRecord.get('Service Games Lost (%)') * this.statistics.singlesServiceRecord.get('Service Games Played'));
      this.statistics.singlesServiceRecord.set('Total Service Points Won (%)', 67);
      this.statistics.singlesServiceRecord.set('Total Service Points Lost (%)', (100 - this.statistics.singlesServiceRecord.get('Total Service Points Won (%)')));
  }
  
  toString() {
      return this.name + ', ' + this.birthday + ', ' + this.birthplace + ', ' + this.citizenship + ', ' + this.height + ', ' + this.outfitter;
  }

  toKeyValuePair() {
    let infoMap = new Map();
    infoMap.set('Name', this.name);
    infoMap.set('Date of Birth', this.birthday);
    infoMap.set('Place of birth', this.birthplace);
    infoMap.set('Age', parseInt(new Date().getFullYear() - new Date(this.birthday).getFullYear()));
    infoMap.set('Height', this.height);
    infoMap.set('Citizenship', this.citizenship);
    infoMap.set('Outfitter', this.outfitter);
    return infoMap;
  }
}

class Statistics {
  constructor() {
    this.singlesServiceRecord = new Map(); // ES6 Map
    this.singlesReturnRecord = new Map(); // ES6 Map
  }
}

var player = new TennisPlayer('Novak Djokovic', '07/22/1987', 'Serbia', 'Serbia', 188, 'Lacoste');

function displayPlayerInfo() {
  var infoSection = createSection('Basic Information', 'info', './images/icons/info.svg', 'info-icon');
  let [infoTable, headerDiv] = createTable(player.toKeyValuePair(), 'info-table', '');
  infoSection.appendChild(infoTable);
  insertAfter(infoSection, document.getElementById('cover'));
}

function displayPlayerStatistics() {
  
  var statsSection = createSection('Statistics', 'stats', './images/icons/stats.svg', 'stats-icon');
  var tableDiv = document.createElement('div');
  tableDiv.id = 'player-stats';
  tableDiv.classList.add('stats-table-wrapper');

  let [serviceTable, serviceHeaderDiv] = createTable(player.statistics.singlesServiceRecord, 'stats-table-singles-service', 'Singles Service Record');

  tableDiv.appendChild(serviceHeaderDiv);
  tableDiv.appendChild(serviceTable);

  let [returnTable, returnHeaderDiv] = createTable(player.statistics.singlesReturnRecord, 'stats-table-singles-return', 'Singles Return Record');

  tableDiv.appendChild(returnHeaderDiv);
  tableDiv.appendChild(returnTable);

  statsSection.appendChild(tableDiv);
  insertAfter(statsSection, document.getElementById('info'));
}

function createSection(headerStr, id, categoryIconSrc, categoryIconAltTxt) {
  var section = document.createElement('section');
  section.id = id;
  var imgDiv = document.createElement('div');
  var categoryIcon = document.createElement('img');
  categoryIcon.src = categoryIconSrc;
  categoryIcon.classList.add('category-icon');
  categoryIcon.alt = categoryIconAltTxt;
  imgDiv.appendChild(categoryIcon);

  var header = document.createElement('h2');
  header.textContent = headerStr;
  imgDiv.appendChild(header);

  section.appendChild(imgDiv);

  return section;
}

function createTable(keyValObj, tableId, header) {
  var table = document.createElement('table');
  table.id = tableId;
  var headerDiv = document.createElement('div');
  var subcategoryHeader = document.createElement('h3');
  subcategoryHeader.textContent = header;
  headerDiv.appendChild(subcategoryHeader);
  for (var [key, value] of keyValObj) {
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      var td = document.createElement('td');
      th.appendChild(document.createTextNode(key))
      td.appendChild(document.createTextNode(value));
      tr.appendChild(th);
      tr.appendChild(td);
      table.appendChild(tr);
  }

  return [table, headerDiv];
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/* Load basic player info */
window.addEventListener('load', displayPlayerInfo);

/* Load player statistics */
window.addEventListener('load', displayPlayerStatistics);

/* ----------------- NAVIGATION BAR ----------------- */

/* Add the sticky class to the navigation bar when you reach its scroll position. Remove 'sticky' when you leave the scroll position */
function keepNavBar() {
  let navbar = document.getElementById('navbar');
  let sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky)
    navbar.classList.add('sticky');
  else
    navbar.classList.remove('sticky');
}

/* When the user scrolls the page, execute keepNavBar */
window.addEventListener('scroll', keepNavBar);

/* Change active status when a navigation bar button is clicked */
Array.from(document.getElementsByClassName('navbtn')).forEach(element => {
  element.addEventListener('click', function (e) {
    let buttons = document.getElementsByClassName('navbtn');
    for (let i = 0; i < buttons.length; ++i) {
      if (buttons[i].classList.contains('active'))
        buttons[i].classList.toggle('active');
    }
    document.getElementById(element.id).classList.add('active');
  })
});

/* ----------------- END NAVIGATION BAR ----------------- */

/* ----------------- TABLE SORTING ----------------- */

/* Add event listeners for all columns, according to their class & id (word before the '-th') */
Array.from(document.getElementsByClassName('rankth')).forEach((thElement) => {
  var rankTableId = 'ranking-by-year-table';
  var ths = {
    'year': 0,
    'high': 1,
    'low': 2,
    'end': 3
  };
  thElement.addEventListener('click', sortTable.bind(null, rankTableId, ths[thElement.id.substring(0, thElement.id.lastIndexOf('-'))])); // bind() - ES5
});

/* Sort table with the given ID, by clicked column. This will be triggered only when user clicks on a column.  */
function sortTable(id, n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  table = document.getElementById(id);
  switching = true;
  dir = 'asc';
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); ++i) {
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
      ++switchCount;
    } else {
        if (switchCount == 0 && dir == 'asc') {
          dir = 'desc';
          switching = true;
        }
    }
  }
}

/* ----------------- END TABLE SORTING ----------------- */

/* ----------------- COLUMN VISIBILITY ----------------- */

Array.from(document.getElementsByClassName('th-icon')).forEach((icon) => {
  var colName = icon.id.substring(icon.id.lastIndexOf('-') + 1);
  icon.addEventListener('click', function (e) {
    if (this.getAttribute('src').includes('invisible'))
      this.setAttribute('src', this.getAttribute('src').replace('invisible', 'visible'));
    else
      this.setAttribute('src', this.getAttribute('src').replace('visible', 'invisible'));
  
    let colTds = document.getElementsByClassName(colName + '-td');
    for (let i=0; i<colTds.length; ++i) {
      if (colTds[i].style.visibility == 'collapse')
        colTds[i].style.visibility = 'visible';
      else
        colTds[i].style.visibility = 'collapse';
    }
  });
});

/* ----------------- END COLUMN VISIBILITY ----------------- */
