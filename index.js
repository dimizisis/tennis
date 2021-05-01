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

      /* Singles Service Record */
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
      /* End Singles Service Record */

      /* Singles Return Record */
      this.statistics.singlesReturnRecord.set('1st Serve Return Points Won (%)', 34);
      this.statistics.singlesReturnRecord.set('1st Serve Return Points Lost (%)', (100 - this.statistics.singlesReturnRecord.get('1st Serve Return Points Won (%)')));
      this.statistics.singlesReturnRecord.set('2nd Serve Return Points Won (%)', 55);
      this.statistics.singlesReturnRecord.set('2nd Serve Return Points Lost (%)', (100 - this.statistics.singlesReturnRecord.get('2nd Serve Return Points Won (%)')));
      this.statistics.singlesReturnRecord.set('Break Points Opportunities', 9583);
      this.statistics.singlesReturnRecord.set('Break Points Converted (%)', 44);
      this.statistics.singlesReturnRecord.set('Break Points Not Converted (%)', (100 - this.statistics.singlesReturnRecord.get('Break Points Converted (%)')));
      this.statistics.singlesReturnRecord.set('Return Games Played', 13294);
      this.statistics.singlesReturnRecord.set('Return Games Won (%)', 32);
      this.statistics.singlesReturnRecord.set('Return Games Lost (%)', (100 - this.statistics.singlesReturnRecord.get('Return Games Won (%)')));
      this.statistics.singlesReturnRecord.set('Return Points Won (%)', 42);
      this.statistics.singlesReturnRecord.set('Return Points Lost (%)', (100 - this.statistics.singlesReturnRecord.get('Return Points Won (%)')));
      this.statistics.singlesReturnRecord.set('Total Points Won (%)', 54);
      /* End Singles Return Record */

      /* Ranking */
      let high = [{2003: 660}, {2004: 184}, {2005: 75}, {2006: 16}, {2007: 3}, {2008: 3}, {2009: 3}, {2010: 2}, {2011: 1}, {2012: 1}, {2013: 1}, {2014: 1}, {2015: 1}, {2016: 1}, {2017: 2}, {2018: 1}, {2019: 1}, {2020: 1}];
      let low = [{2003: 774}, {2004: 681}, {2005: 188}, {2006: 81}, {2007: 16}, {2008: 3}, {2009: 4}, {2010: 3}, {2011: 3}, {2012: 2}, {2013: 2}, {2014: 2}, {2015: 1}, {2016: 2}, {2017: 12}, {2018: 22}, {2019: 2}, {2020: 2}];
      let end = [{2003: 679}, {2004: 186}, {2005: 78}, {2006: 16}, {2007: 3}, {2008: 3}, {2009: 3}, {2010: 3}, {2011: 1}, {2012: 1}, {2013: 2}, {2014: 1}, {2015: 1}, {2016: 2}, {2017: 12}, {2018: 1}, {2019: 2}, {2020: 1}];
      this.ranking = new Ranking(high, low, end);

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

class Ranking {
  constructor(high, end, low) {
    this.high = high;
    this.low = end;
    this.end = low;
  }
  toSingleArray() {
    return [this.high, this.low, this.end];
  }
}

/* Player Declaration */
var player = new TennisPlayer('Novak Djokovic', '07/22/1987', 'Serbia', 'Serbia', 188, 'Lacoste');

/* Create table with player's basic info */
function displayPlayerInfo() {
  var infoSection = createSection('Basic Information', 'info', './images/icons/info.svg', 'info-icon');
  let [infoTable, headerDiv] = createTable(player.toKeyValuePair(), 'info-table', '');
  infoSection.appendChild(infoTable);

  /* Insert infoSection AFTER cover */
  document.getElementById('cover').parentNode.insertBefore(infoSection, document.getElementById('cover').nextSibling);
}

/* Create tables with player's statistics (service & return records) */
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

  /* Insert statsSection AFTER info */
  document.getElementById('info').parentNode.insertBefore(statsSection, document.getElementById('info').nextSibling);
}

/* Create table with player's ranking (by year) */
function displayPlayerRanking() {
  var rankingSection = createSection('ATP Ranking by Year', 'ranking', './images/icons/ranking.svg', 'ranking-icon');
  var tableDiv = document.createElement('div');
  tableDiv.id = 'player-ranking';

  let [rankingTable, rankingHeaderDiv] = createRankingTable(player.ranking, 'ranking-by-year-table', 'General');

  tableDiv.appendChild(rankingHeaderDiv);
  tableDiv.appendChild(rankingTable);

  rankingSection.appendChild(tableDiv);

  /* Insert rankingSection AFTER stats */
  document.getElementById('stats').parentNode.insertBefore(rankingSection, document.getElementById('stats').nextSibling);
}

/* Creates a section, along with its header and icon */
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

/* Creates a new table based on a key-value object (populates its data) */
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

/* Creates a new table based on a key-value object (populates its data) */
function createRankingTable(ranking, tableId, header) {

  var headers = ['Year', 'High', 'Low', 'End'];

  var table = document.createElement('table');
  table.id = tableId;

  /* Append headers (th) */
  var tr = document.createElement('tr');
  for (let i=0; i<headers.length; ++i) {
    var th = document.createElement('th');
    th.id = headers[i].toLowerCase() + '-th';
    th.classList.add('rankth');
    th.appendChild(document.createTextNode(headers[i]));
    var img = document.createElement('img');
    img.src = './images/icons/invisible.svg';
    img.classList.add('th-icon');
    img.id = 'visibility-' + headers[i].toLowerCase();
    img.alt = headers[i].toLowerCase() + '-visibility-icon';
    th.appendChild(img);
    tr.appendChild(th);
    table.appendChild(tr);
  }

  /* Populate data */
  var headerDiv = document.createElement('div');
  var subcategoryHeader = document.createElement('h3');
  subcategoryHeader.textContent = header;
  headerDiv.appendChild(subcategoryHeader);
  for (let i=0; i<ranking.high.length; ++i) {
    tr = document.createElement('tr');
    var tdYear = document.createElement('td');
    tdYear.appendChild(document.createTextNode(Object.keys(ranking.high[i])[0]));
    tdYear.classList.add('year-td');
    var tdHigh = document.createElement('td');
    tdHigh.appendChild(document.createTextNode(ranking.high[i][Object.keys(ranking.high[i])[0]]));
    tdHigh.classList.add('high-td');
    var tdLow = document.createElement('td');
    tdLow.appendChild(document.createTextNode(ranking.low[i][Object.keys(ranking.low[i])[0]]));
    tdLow.classList.add('low-td');
    var tdEnd = document.createElement('td');
    tdEnd.appendChild(document.createTextNode(ranking.end[i][Object.keys(ranking.end[i])[0]]));
    tdEnd.classList.add('end-td');

    tr.appendChild(tdYear);
    tr.appendChild(tdHigh);
    tr.appendChild(tdLow);
    tr.appendChild(tdEnd);

    table.appendChild(tr);
  }
  return [table, headerDiv];
}

/* Load basic player info */
window.addEventListener('load', displayPlayerInfo);

/* Load player statistics */
window.addEventListener('load', displayPlayerStatistics);

/* Load player ranking */
window.addEventListener('load', displayPlayerRanking);

/* Add column visibility listeners */
window.addEventListener('load', addSortingEventListeners);

/* dd column visibility listeners */
window.addEventListener('load', addVisibilityEventListeners);

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
function addSortingEventListeners () {
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
}

/* Sort table with the given ID, by clicked column. This will be triggered only when user clicks on a column. */
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

function addVisibilityEventListeners () {
  Array.from(document.getElementsByClassName('th-icon')).forEach((icon) => {
    var colName = icon.id.substring(icon.id.lastIndexOf('-') + 1);
    console.log(icon);
    icon.addEventListener('click', function (e) {
      e.stopPropagation();
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
}

/* ----------------- END COLUMN VISIBILITY ----------------- */
