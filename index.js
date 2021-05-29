'use strict';

class TennisPlayer {
  constructor(name, birthday, birthplace, citizenship, height, outfitter) {
    this.name = name;
    this.birthday = birthday;
    this.birthplace = birthplace;
    this.citizenship = citizenship;
    this.height = height;
    this.outfitter = outfitter;
    this.statistics = new Statistics();

    /* Ranking */
    let high = [{ 2003: 660 }, { 2004: 184 }, { 2005: 75 }, { 2006: 16 }, { 2007: 3 }, { 2008: 3 }, { 2009: 3 }, { 2010: 2 }, { 2011: 1 }, { 2012: 1 }, { 2013: 1 }, { 2014: 1 }, { 2015: 1 }, { 2016: 1 }, { 2017: 2 }, { 2018: 1 }, { 2019: 1 }, { 2020: 1 }];
    let low = [{ 2003: 774 }, { 2004: 681 }, { 2005: 188 }, { 2006: 81 }, { 2007: 16 }, { 2008: 3 }, { 2009: 4 }, { 2010: 3 }, { 2011: 3 }, { 2012: 2 }, { 2013: 2 }, { 2014: 2 }, { 2015: 1 }, { 2016: 2 }, { 2017: 12 }, { 2018: 22 }, { 2019: 2 }, { 2020: 2 }];
    let end = [{ 2003: 679 }, { 2004: 186 }, { 2005: 78 }, { 2006: 16 }, { 2007: 3 }, { 2008: 3 }, { 2009: 3 }, { 2010: 3 }, { 2011: 1 }, { 2012: 1 }, { 2013: 2 }, { 2014: 1 }, { 2015: 1 }, { 2016: 2 }, { 2017: 12 }, { 2018: 1 }, { 2019: 2 }, { 2020: 1 }];
    this.ranking = new Ranking(high, low, end);
    /* End Ranking */

  }

  toString() {
    return this.name + ', ' + this.birthday + ', ' + this.birthplace + ', ' + this.citizenship + ', ' + this.height + ', ' + this.outfitter;
  }

  toKeyValuePair() {
    let infoMap = new Map();
    infoMap.set('Name', this.name);
    infoMap.set('Date of Birth', this.birthday);
    infoMap.set('Place of birth', this.birthplace);
    infoMap.set('Age', isNaN(parseInt(new Date().getFullYear() - new Date(this.birthday).getFullYear())) ? '-' : parseInt(new Date().getFullYear() - new Date(this.birthday).getFullYear()));
    infoMap.set('Height (m)', this.height);
    infoMap.set('Citizenship', this.citizenship);
    infoMap.set('Outfitter', this.outfitter);
    return infoMap;
  }
}

class Statistics {
  constructor() {
    if (localStorage.singlesServiceRecord === undefined)
      this.singlesServiceRecord = this.initialize_singles_service();
    else
      this.singlesServiceRecord = new Map(JSON.parse(localStorage.singlesServiceRecord)); // ES6 Map
    if (localStorage.singlesReturnRecord === undefined)
      this.singlesReturnRecord = this.initialize_singles_return();
    else
      this.singlesReturnRecord = new Map(JSON.parse(localStorage.singlesReturnRecord)); // ES6 Map

    this.complementaryService = new Map();
    this.complementaryReturn = new Map();
    this.setComplementaryServiceFields();
    this.setComplementaryReturnFields();

  }

  setComplementaryServiceFields() {
    this.complementaryService.set('1st Serve Points Won (%)', '1st Serve Points Lost (%)');
    this.complementaryService.set('2nd Serve Points Won (%)', '2nd Serve Points Lost (%)');
    this.complementaryService.set('Break Points Saved (%)', 'Break Points Lost (%)');
    this.complementaryService.set('Service Games Won (%)', 'Service Games Lost (%)');
    this.complementaryService.set('Total Service Points Won (%)', 'Total Service Points Lost (%)');
  }

  setComplementaryReturnFields() {
    this.complementaryReturn.set('1st Serve Return Points Won (%)', '1st Serve Return Points Lost (%)');
    this.complementaryReturn.set('2nd Serve Return Points Won (%)', '2nd Serve Return Points Lost (%)');
    this.complementaryReturn.set('Break Points Converted (%)', 'Break Points Not Converted (%)');
    this.complementaryReturn.set('Return Games Won (%)', 'Return Games Lost (%)');
    this.complementaryReturn.set('Return Points Won (%)', 'Return Points Lost (%)');
  }

  initialize_singles_service() {
    var singlesServiceRecord = new Map();
    /* Singles Service Record */
    singlesServiceRecord.set('Aces', 0);
    singlesServiceRecord.set('Double Faults', 0);
    singlesServiceRecord.set('1st Serve (%)', 0);
    singlesServiceRecord.set('1st Serve Points Won (%)', 0);
    singlesServiceRecord.set('1st Serve Points Lost (%)', 0);
    singlesServiceRecord.set('2nd Serve Points Won (%)', 0);
    singlesServiceRecord.set('2nd Serve Points Lost (%)', 0);
    singlesServiceRecord.set('Break Points Faced', 0);
    singlesServiceRecord.set('Break Points Saved (%)', 0);
    singlesServiceRecord.set('Break Points Lost (%)', 0);
    singlesServiceRecord.set('Break Points Saved (Cardinal)', 0);
    singlesServiceRecord.set('Break Points Lost (Cardinal)', 0);
    singlesServiceRecord.set('Service Games Played', 0);
    singlesServiceRecord.set('Service Games Won (%)', 0);
    singlesServiceRecord.set('Service Games Lost (%)', 0);
    singlesServiceRecord.set('Service Games Won (Cardinal)', 0);
    singlesServiceRecord.set('Service Games Lost (Cardinal)', 0);
    singlesServiceRecord.set('Total Service Points Won (%)', 0);
    singlesServiceRecord.set('Total Service Points Lost (%)', 0);
    /* End Singles Service Record */

    return singlesServiceRecord;
  }

  initialize_singles_return() {
    var singlesReturnRecord = new Map();
    /* Singles Return Record */
    singlesReturnRecord.set('1st Serve Return Points Won (%)', 0);
    singlesReturnRecord.set('1st Serve Return Points Lost (%)', 0);
    singlesReturnRecord.set('2nd Serve Return Points Won (%)', 0);
    singlesReturnRecord.set('2nd Serve Return Points Lost (%)', 0);
    singlesReturnRecord.set('Break Points Opportunities', 0);
    singlesReturnRecord.set('Break Points Converted (%)', 0);
    singlesReturnRecord.set('Break Points Not Converted (%)', 0);
    singlesReturnRecord.set('Return Games Played', 0);
    singlesReturnRecord.set('Return Games Won (%)', 0);
    singlesReturnRecord.set('Return Games Lost (%)', 0);
    singlesReturnRecord.set('Return Points Won (%)', 0);
    singlesReturnRecord.set('Return Points Lost (%)', 0);
    singlesReturnRecord.set('Total Points Won (%)', 0);
    /* End Singles Return Record */

    return singlesReturnRecord;
  }
}

class Ranking {
  constructor(high, end, low) {
    this.high = high;
    this.low = end;
    this.end = low;
  }
}

var player = initializePlayer();

function initializePlayer() {
  const defaultVals = ['Enter Name Here', 'MM/DD/YYYY', 'Enter Birthplace', 'Enter Citizenship', 'Enter Height', 'Enter Outfitter'];
  if (localStorage.length === 0) {
    var player = new TennisPlayer(defaultVals[0], defaultVals[1], defaultVals[2], defaultVals[3], defaultVals[4], defaultVals[5]);
  }
  else {
    let playerName = localStorage.getItem('Name') === null ? defaultVals[0] : localStorage.getItem('Name');
    let birthday = localStorage.getItem('Date of Birth') === null ? defaultVals[1] : localStorage.getItem('Date of Birth');
    let birthplace = localStorage.getItem('Place of birth') === null ? defaultVals[2] : localStorage.getItem('Place of birth');
    let citizenship = localStorage.getItem('Citizenship') === null ? defaultVals[3] : localStorage.getItem('Citizenship');
    let height = localStorage.getItem('Height (m)') === null || isNaN(localStorage.getItem('Height (m)')) ? defaultVals[4] : localStorage.getItem('Height (m)');
    let outfitter = localStorage.getItem('Outfitter') === null ? defaultVals[5] : localStorage.getItem('Outfitter');
    /* Player Declaration */
    var player = new TennisPlayer(playerName, birthday, birthplace, citizenship, height, outfitter);
  }
  return player;
}

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
    td.id = key;
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
  for (let i = 0; i < headers.length; ++i) {
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
  for (let i = 0; i < ranking.high.length; ++i) {
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

function insertRankingRow() {
  var rankingTable = document.getElementById('ranking-by-year-table');
  var row = rankingTable.insertRow(-1);
  var year = row.insertCell(0);
  var high = row.insertCell(1);
  var end = row.insertCell(2);
  var low = row.insertCell(3);
}

function getBase64Image(img) {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL('image/png');

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
}

function loadMainTitle() {
  if (localStorage.getItem('maintitle') != null)
    document.getElementById('maintitle').innerHTML = localStorage.getItem('maintitle');
  else
    document.getElementById('maintitle').innerHTML = 'Enter Name Here';
}

/* Load player's image (if exists). Else, show input for img upload. */
window.addEventListener('load', function () {
  if (localStorage.getItem('playerImg') != null) {
    document.getElementById('imginput').style = 'display: none';
    var dataImage = localStorage.getItem('playerImg');
    document.getElementById('playerimg').src = 'data:image/png;base64,' + dataImage;
    return;
  }
  document.getElementById('imginput').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      var img = document.getElementById('playerimg');
      img.addEventListener('load', () => {
        document.getElementById('imginput').style = 'display: none';
        var imgData = getBase64Image(img);
        localStorage.setItem('playerImg', imgData);
      });
      img.src = URL.createObjectURL(this.files[0]); // set src to blob url
    }
  });
});

/* Load main title (if exists) */
window.addEventListener('load', loadMainTitle);

/* Load basic player info */
window.addEventListener('load', displayPlayerInfo);

/* Load player statistics */
window.addEventListener('load', displayPlayerStatistics);

/* Load player ranking */
window.addEventListener('load', displayPlayerRanking);

/* Add column visibility listeners */
window.addEventListener('load', addSortingEventListeners);

/* Add column visibility listeners */
window.addEventListener('load', addVisibilityEventListeners);

window.addEventListener('load', loadRankingChart.bind(null, player.ranking));

/* Add listeners to table cells (making them editable) */
window.addEventListener('load', addEventListenersToTds);

/* Add listener to main title (making it editable) */
window.addEventListener('load', addEventListenerToMainTitle);

/* Enable automatic calculations on stats tables */
window.addEventListener('load', setAutomaticCalculations);

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
function addSortingEventListeners() {
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

function addVisibilityEventListeners() {
  Array.from(document.getElementsByClassName('th-icon')).forEach((icon) => {
    var colName = icon.id.substring(icon.id.lastIndexOf('-') + 1);
    icon.addEventListener('click', function (e) {
      /* We only want the icon's event listener to be triggered, not its parent's (as events bubble to the highest point in the DOM) */
      e.stopPropagation();
      if (this.getAttribute('src').includes('invisible'))
        this.setAttribute('src', this.getAttribute('src').replace('invisible', 'visible'));
      else
        this.setAttribute('src', this.getAttribute('src').replace('visible', 'invisible'));

      let colTds = document.getElementsByClassName(colName + '-td');
      for (let i = 0; i < colTds.length; ++i) {
        if (colTds[i].style.visibility == 'collapse')
          colTds[i].style.visibility = 'visible';
        else
          colTds[i].style.visibility = 'collapse';
      }
    });
  });
}

/* ----------------- END COLUMN VISIBILITY ----------------- */

function loadRankingChart(ranking) {

  am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.responsive.enabled = true;

    var data = [];
    for (let i = 0; i < ranking.high.length; ++i)
      data[i] = { 'year': Object.keys(ranking.high[i])[0], 'high': ranking.high[i][Object.keys(ranking.high[i])[0]], 'low': ranking.low[i][Object.keys(ranking.low[i])[0]], 'end': ranking.end[i][Object.keys(ranking.end[i])[0]] };

    // Add data
    chart.data = data

    // Add Scrollbar in Y axis
    chart.scrollbarY = new am4core.Scrollbar();

    // Create legend
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color('#fff');
    chart.legend.valueLabels.template.fill = am4core.color('#fff');

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.numberFormatter.numberFormat = '#';
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.labels.template.fill = am4core.color('#fff');

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.fill = am4core.color('#fff');

    // Create series
    function createSeries(field, name) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = 'year';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueX}[/]';
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;
    }

    createSeries('high', 'High');
    createSeries('low', 'Low');
    createSeries('end', 'End');

  });
}

function addEventListenerToMainTitle() {
  var mainTitle = document.getElementById('maintitle');
  mainTitle.addEventListener('dblclick', function (e) {
    this.contentEditable = true;
  });
  mainTitle.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    this.contentEditable = true;
  });
  mainTitle.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      saveToLocalStorage(this);
      this.contentEditable = false;
    }
  });
  mainTitle.addEventListener('focusout', function (e) {
    saveToLocalStorage(this);
    this.contentEditable = false;
  });
}

function addEventListenersToTds() {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; ++i) {
    cells[i].addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        saveToLocalStorage(this);
        this.contentEditable = false;
      }
    });
    cells[i].addEventListener('focusout', function (e) {
      saveToLocalStorage(this);
      this.contentEditable = false;
    });
    cells[i].addEventListener('dblclick', function (e) {
      this.contentEditable = true;
    });
    cells[i].addEventListener('contextmenu', function (e) {
      e.preventDefault();
      this.contentEditable = true;
    });
  }
}

function saveToLocalStorage(element) {
  if (document.getElementById('stats-table-singles-service').contains(element)) {
    player.statistics.singlesServiceRecord.set(element.id, element.textContent);
    localStorage.singlesServiceRecord = JSON.stringify(Array.from(player.statistics.singlesServiceRecord.entries()));
  }
  else if (document.getElementById('stats-table-singles-return').contains(element)) {
    player.statistics.singlesReturnRecord.set(element.id, element.textContent);
    localStorage.singlesReturnRecord = JSON.stringify(Array.from(player.statistics.singlesReturnRecord.entries()));
  }
  else {
    localStorage.setItem(element.id, element.textContent);
  }
}

function setAutomaticCalculations() {
  player.statistics.complementaryService.forEach((value, key) => {
    document.getElementById(key).addEventListener('input', function (e) {
      player.statistics.singlesServiceRecord.set(value, 100 - parseInt(document.getElementById(key).textContent));
      document.getElementById(value).innerHTML = 100 - parseInt(document.getElementById(key).textContent);
      if (isNaN(parseInt(document.getElementById(value).textContent)))
        document.getElementById(value).innerHTML = 0;
    });
    document.getElementById(value).addEventListener('input', function (e) {
      if (isNaN(parseInt(document.getElementById(key).textContent)))
        document.getElementById(key).innerHTML = 0;
      else {
        player.statistics.singlesServiceRecord.set(key, 100 - parseInt(document.getElementById(value).textContent));
        document.getElementById(key).innerHTML = 100 - parseInt(document.getElementById(value).textContent);
      }
    });
  });

  player.statistics.complementaryReturn.forEach((value, key) => {
    document.getElementById(key).addEventListener('input', function (e) {
      player.statistics.singlesReturnRecord.set(value, 100 - parseInt(document.getElementById(key).textContent));
      document.getElementById(value).innerHTML = 100 - parseInt(document.getElementById(key).textContent);
      if (isNaN(parseInt(document.getElementById(value).textContent)))
        document.getElementById(value).innerHTML = 0;
    });
    document.getElementById(value).addEventListener('input', function (e) {
      if (isNaN(parseInt(document.getElementById(key).textContent)))
        document.getElementById(key).innerHTML = 0;
      else {
        player.statistics.singlesReturnRecord.set(key, 100 - parseInt(document.getElementById(value).textContent));
        document.getElementById(key).innerHTML = 100 - parseInt(document.getElementById(value).textContent);
      }
    });
  });

  document.getElementById('Break Points Saved (Cardinal)').addEventListener('input', function (e) {
    player.statistics.singlesServiceRecord.set('Break Points Saved (Cardinal)', parseInt(document.getElementById('Break Points Saved (%)').textContent) * parseInt(document.getElementById('Break Points Faced').textContent));
    document.getElementById('Break Points Saved (%)').innerHTML = parseInt(document.getElementById('Break Points Saved (%)').textContent) * parseInt(document.getElementById('Break Points Faced').textContent);
  });
  document.getElementById('Break Points Lost (Cardinal)').addEventListener('input', function (e) {
    player.statistics.singlesServiceRecord.set('Break Points Lost (Cardinal)', parseInt(document.getElementById('Break Points Lost (%)').textContent) * parseInt(document.getElementById('Break Points Faced').textContent));
    document.getElementById('Break Points Lost (Cardinal)').innerHTML = parseInt(document.getElementById('Break Points Lost (%)').textContent) * parseInt(document.getElementById('Break Points Faced').textContent);
  });

  document.getElementById('Date of Birth').addEventListener('input', function (e) {
    try {
      document.getElementById('Age').innerHTML = parseInt(new Date().getFullYear() - new Date(this.textContent).getFullYear());
    } catch (ignored) {}
  });
}
