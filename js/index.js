'use strict';

/** Class representing a tennis player. */
class TennisPlayer {
  /**
    * Creates a tennis player instance
    * @param {string} name - Player's complete name
    * @param {string} birthday - Player's birthday (MM/DD/YYYY)
    * @param {string} birthplace - Player's birthplace (country name)
    * @param {string} citizenship - Player's citizenship (country name)
    * @param {number} height - Player's height (in meters)
    * @param {string} outfitter - Player's outfitter (Brand's complete name)
    */
  constructor(name, birthday, birthplace, citizenship, height, outfitter) {
    this.name = name;
    this.birthday = birthday;
    this.birthplace = birthplace;
    this.citizenship = citizenship;
    this.height = height;
    this.outfitter = outfitter;
    this.statistics = new Statistics();
    this.ranking = new Ranking();
  }

  /**
    * Returns a string representation of the player's instance
    */
  toString() {
    return this.name + ', ' + this.birthday + ', ' + this.birthplace + ', ' + this.citizenship + ', ' + this.height + ', ' + this.outfitter;
  }

  /**
    * Creates a Map object with player's basic info.
    * @returns {Map} a Map object
    */
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

/** Class representing a player's overall statistics. */
class Statistics {
  /**
    * Creates a statistics instance
    */
  constructor() {
    if (localStorage.singlesServiceRecord === undefined)
      this.singlesServiceRecord = this.initializeSinglesService();
    else
      this.singlesServiceRecord = new Map(JSON.parse(localStorage.singlesServiceRecord)); // ES6 Map
    if (localStorage.singlesReturnRecord === undefined)
      this.singlesReturnRecord = this.initializeSinglesReturn();
    else
      this.singlesReturnRecord = new Map(JSON.parse(localStorage.singlesReturnRecord)); // ES6 Map

    this.complementaryService = new Map();
    this.complementaryReturn = new Map();
    this.setComplementaryServiceFields();
    this.setComplementaryReturnFields();

  }

  /**
   * Set complementary fields (for autocompletion)
   * for service records.
   */
  setComplementaryServiceFields() {
    this.complementaryService.set('1st Serve Points Won (%)', '1st Serve Points Lost (%)');
    this.complementaryService.set('2nd Serve Points Won (%)', '2nd Serve Points Lost (%)');
    this.complementaryService.set('Break Points Saved (%)', 'Break Points Lost (%)');
    this.complementaryService.set('Service Games Won (%)', 'Service Games Lost (%)');
    this.complementaryService.set('Total Service Points Won (%)', 'Total Service Points Lost (%)');
  }

  /**
  * Set complementary fields (for autocompletion)
  * for return records.
  */
  setComplementaryReturnFields() {
    this.complementaryReturn.set('1st Serve Return Points Won (%)', '1st Serve Return Points Lost (%)');
    this.complementaryReturn.set('2nd Serve Return Points Won (%)', '2nd Serve Return Points Lost (%)');
    this.complementaryReturn.set('Break Points Converted (%)', 'Break Points Not Converted (%)');
    this.complementaryReturn.set('Return Games Won (%)', 'Return Games Lost (%)');
    this.complementaryReturn.set('Return Points Won (%)', 'Return Points Lost (%)');
  }

  /**
  * Initialize data for singles
  * service records.
  */
  initializeSinglesService() {
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

  /**
  * Initialize data for return records.
  */
  initializeSinglesReturn() {
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

/** Class representing a player's ranking */
class Ranking {
  /**
    * Creates a ranking instance
    * @param {array} high - Array with the highest rankings (per year).
    * @param {array} end - Array with the final rankings (per year).
    * @param {array} low - Array with the lowest rankings (per year).
    */
  constructor(high, end, low) {
    if (!arguments.length) {
      if (localStorage.getItem('high') === null)
        this.high = [{ 'YYYY': 0 }];
      else
        this.high = JSON.parse(localStorage.getItem('high'))
      if (localStorage.getItem('low') === null)
        this.low = [{ 'YYYY': 0 }];
      else
        this.low = JSON.parse(localStorage.getItem('low'))
      if (localStorage.getItem('end') === null)
        this.end = [{ 'YYYY': 0 }];
      else
        this.end = JSON.parse(localStorage.getItem('end'))
    } else {
      this.high = high;
      this.low = end;
      this.end = low;
    }
  }
}

/* Player Initialization */
var player = initializePlayer();

/** Initializes player. If data in local
 * storage exists, retrieves them. If not,
 * dummy data are shown to the user.
 * @returns {Player} New player instance.
 */
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

/** Creates table with player's basic info
 */
function displayPlayerInfo() {
  var infoSection = createSection('Basic Information', 'info', './images/icons/info.svg', 'info-icon');
  let [infoTable, headerDiv] = createTable(player.toKeyValuePair(), 'info-table', '');
  infoSection.appendChild(infoTable);

  /* Insert infoSection AFTER cover */
  document.getElementById('cover').parentNode.insertBefore(infoSection, document.getElementById('cover').nextSibling);
}

/** Creates tables with player's statistics
 * (service & return records)
 */
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

/**
 * Create table with player's ranking
 * (by year)
 */
function displayPlayerRanking() {
  var rankingSection = createSection('ATP Ranking by Year', 'ranking', './images/icons/ranking.svg', 'ranking-icon');
  var tableDiv = document.createElement('div');
  tableDiv.id = 'player-ranking';

  let [rankingTable, rankingHeaderDiv] = createRankingTable('ranking-by-year-table', 'General');
  let addRowImg = document.createElement('img');
  addRowImg.id = 'add-row-img'
  addRowImg.src = './images/icons/plus.svg';
  addRowImg.tagName = 'addrow';

  addRowImg.addEventListener('click', insertRankingRow);
  addRowImg.addEventListener('click', saveRankingToLocalStorage);
  if (navigator.onLine)
    addRowImg.addEventListener('click', loadRankingChart);
  addRowImg.addEventListener('click', addEventListenersToTds);

  tableDiv.appendChild(rankingHeaderDiv);
  tableDiv.appendChild(rankingTable);
  tableDiv.appendChild(addRowImg);

  rankingSection.appendChild(tableDiv);

  /* Insert rankingSection AFTER stats */
  document.getElementById('stats').parentNode.insertBefore(rankingSection, document.getElementById('stats').nextSibling);
}

/**
 * Creates a section, along with its header
 * and icon.
 * @param {string} headerStr - The header's string
 * @param {string} categoryIconSrc - Icon's src
 * @param {string} categoryIconAltTxt - Icon's alternative text
 * @return {Element} Section's element
 */
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

/**
 * Creates a new table based on
 * a key-value object (populates its data).
 * @param {string} keyValObj - The key-value object
 * @param {Element} tableId - Table's id
 * @param {Element} header - Subcategory header
 * @return {Array} Containing table & header's division
 */
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

/**
 * Creates a new table (ranking) based on
 * given a table id & a subcategory header.
 * @param {string} tableId - Ranking table id
 * @param {Element} header - Subcategory header
 * @return {Array} Containing table & header's division
 */
function createRankingTable(tableId, header) {

  var headers = ['Year', 'High', 'Low', 'End', ''];

  var table = document.createElement('table');
  table.id = tableId;

  /* Append headers (th) */
  var tr = document.createElement('tr');
  for (let i = 0; i < headers.length; ++i) {
    var th = document.createElement('th');
    th.id = headers[i].toLowerCase() + '-th';
    th.classList.add('rankth');
    th.appendChild(document.createTextNode(headers[i]));
    if (i <= headers.length - 2) {
      var img = document.createElement('img');
      img.src = './images/icons/invisible.svg';
      img.classList.add('th-icon');
      img.id = 'visibility-' + headers[i].toLowerCase();
      img.alt = headers[i].toLowerCase() + '-visibility-icon';
      th.appendChild(img);
    }
    tr.appendChild(th);
  }

  table.appendChild(tr);

  /* Populate data */
  var headerDiv = document.createElement('div');
  var subcategoryHeader = document.createElement('h3');
  subcategoryHeader.textContent = header;
  headerDiv.appendChild(subcategoryHeader);
  for (let i = 0; i < player.ranking.high.length; ++i) {
    tr = document.createElement('tr');
    var tdYear = document.createElement('td');
    tdYear.appendChild(document.createTextNode(Object.keys(player.ranking.high[i])[0]));
    tdYear.classList.add('year-td');
    var tdHigh = document.createElement('td');
    tdHigh.appendChild(document.createTextNode(player.ranking.high[i][Object.keys(player.ranking.high[i])[0]]));
    tdHigh.classList.add('high-td');
    var tdLow = document.createElement('td');
    tdLow.appendChild(document.createTextNode(player.ranking.low[i][Object.keys(player.ranking.low[i])[0]]));
    tdLow.classList.add('low-td');
    var tdEnd = document.createElement('td');
    tdEnd.appendChild(document.createTextNode(player.ranking.end[i][Object.keys(player.ranking.end[i])[0]]));
    tdEnd.classList.add('end-td');

    tr.appendChild(tdYear);
    tr.appendChild(tdHigh);
    tr.appendChild(tdLow);
    tr.appendChild(tdEnd);

    let removeRowImg = document.createElement('img');
    removeRowImg.src = './images/icons/remove.svg';
    removeRowImg.classList.add('remove-img');
    removeRowImg.addEventListener('click', function () {
      document.getElementById('ranking-by-year-table').deleteRow(this.parentElement.rowIndex);
      if (navigator.onLine)
        loadRankingChart();
      saveRankingToLocalStorage();
    });

    tr.appendChild(removeRowImg);

    table.appendChild(tr);

  }
  return [table, headerDiv];
}

/**
 * Inserts a new row at the end 
 * of the ranking table.
 */
function insertRankingRow() {
  var rankingTable = document.getElementById('ranking-by-year-table');
  var tr = document.createElement('tr');
  var tdYear = document.createElement('td');
  tdYear.innerHTML = 'YYYY';
  tdYear.classList.add('year-td');
  var tdHigh = document.createElement('td');
  tdHigh.innerHTML = '0';
  tdHigh.classList.add('high-td');
  var tdLow = document.createElement('td');
  tdLow.innerHTML = '0';
  tdLow.classList.add('low-td');
  var tdEnd = document.createElement('td');
  tdEnd.innerHTML = '0';
  tdEnd.classList.add('end-td');
  var removeRowImg = document.createElement('img');
  removeRowImg.className = 'remove-img';
  removeRowImg.src = './images/icons/remove.svg';
  removeRowImg.tagName = 'deleterow';
  removeRowImg.addEventListener('click', function () {
    document.getElementById('ranking-by-year-table').deleteRow(this.parentElement.rowIndex);
    if (navigator.onLine)
      loadRankingChart();
    saveRankingToLocalStorage();
  });

  tr.appendChild(tdYear);
  tr.appendChild(tdHigh);
  tr.appendChild(tdLow);
  tr.appendChild(tdEnd);
  tr.appendChild(removeRowImg);
  rankingTable.appendChild(tr);
}

/**
 * Given a img element, creates a
 * 2d canvas & draws a base64 image.
 * @param {Element} img - An image element
 * @returns {string} the url of the created image
 */
function getBase64Image(img) {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL('image/png');

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
}

/**
 * Loads the main title (H1). 
 * If it is previous saved, retrieves
 * it from local storage. Else, shows
 * 'Enter Name Here'.
 */
function loadMainTitle() {
  if (localStorage.getItem('maintitle') != null)
    document.getElementById('maintitle').innerHTML = localStorage.getItem('maintitle');
  else
    document.getElementById('maintitle').innerHTML = 'Enter Name Here';
}

/* ----------------- NAVIGATION BAR ----------------- */

/**
 * Add the sticky class to the navigation bar 
 * when you reach its scroll position. 
 * Remove 'sticky' when you leave the scroll 
 * position.
 */
function keepNavBar() {
  let navbar = document.getElementById('navbar');
  let sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky)
    navbar.classList.add('sticky');
  else
    navbar.classList.remove('sticky');
}

/* ----------------- END NAVIGATION BAR ----------------- */

/* ----------------- TABLE SORTING ----------------- */

/**
 * Add event listeners for all columns,
 * according to their class & id
 * (word before the '-th')
 */
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

/**
 * Sorts a table with the given ID, by clicked column. 
 * This will be triggered only when user clicks on 
 * a column.
 * @param {string} id - The id of the table's element
 * @param {int} n - The column number that will be sorted
 */
function sortTable(id, n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  table = document.getElementById(id);
  switching = true;
  dir = 'asc';
  try {
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
  } catch (e) { }
}

/* ----------------- END TABLE SORTING ----------------- */

/* ----------------- COLUMN VISIBILITY ----------------- */

/**
 * Adds event listeners that refer to column's visibility.
 * This function is triggered when the user clicks the
 * 'eye' button.
 */
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

/* ----------------- RANKING CHART ----------------- */

/**
 * Loads the ranking chart (disposes potential old ones first)
 */
function loadRankingChart() {

  am4core.disposeAllCharts();

  am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    /* Create chart instance */
    var chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.responsive.enabled = true;

    /* Adapt data to necessary form */
    var data = [];
    for (let i = 0; i < player.ranking.high.length; ++i)
      data[i] = { 'year': Object.keys(player.ranking.high[i])[0], 'high': player.ranking.high[i][Object.keys(player.ranking.high[i])[0]], 'low': player.ranking.low[i][Object.keys(player.ranking.low[i])[0]], 'end': player.ranking.end[i][Object.keys(player.ranking.end[i])[0]] };

    /* Add data */
    chart.data = data

    /* Add Scrollbar in Y axis */
    chart.scrollbarY = new am4core.Scrollbar();

    /* Create legend */
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color('#fff');
    chart.legend.valueLabels.template.fill = am4core.color('#fff');

    /* Create axes */
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

    /* Create series */
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

/* ----------------- END RANKING CHART ----------------- */

/**
 * Adds all the proper events listeners to H1 (title of page)
 */
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
      saveDataToLocalStorage(this);
      this.contentEditable = false;
    }
  });
  mainTitle.addEventListener('focusout', function (e) {
    saveDataToLocalStorage(this);
    this.contentEditable = false;
  });
}

/* ----------------- SAVING TO LOCAL STORAGE ----------------- */

/**
 * Given an element, saves its data to local storage properly.
 * @param {Element} element - A HTML element
 */
function saveDataToLocalStorage(element) {
  if (document.getElementById('stats-table-singles-service').contains(element)) {
    player.statistics.singlesServiceRecord.set(element.id, element.textContent);
    localStorage.singlesServiceRecord = JSON.stringify(Array.from(player.statistics.singlesServiceRecord.entries()));
  }
  else if (document.getElementById('stats-table-singles-return').contains(element)) {
    player.statistics.singlesReturnRecord.set(element.id, element.textContent);
    localStorage.singlesReturnRecord = JSON.stringify(Array.from(player.statistics.singlesReturnRecord.entries()));
  }
  else if (document.getElementById('ranking-by-year-table').contains(element)) {
    saveRankingToLocalStorage();
  }
  else {
    localStorage.setItem(element.id, element.textContent);
  }
}

/**
 * Saves ranking table data to local storage properly.
 */
function saveRankingToLocalStorage() {
  var rankingTable = document.getElementById('ranking-by-year-table');
  var high = [];
  var end = [];
  var low = [];
  for (var i = 1, row; row = rankingTable.rows[i]; ++i) {
    let highVal = row.cells[1].innerHTML;
    let endVal = row.cells[2].innerHTML;
    let lowVal = row.cells[3].innerHTML;
    var yearVal = row.cells[0].innerHTML;

    high.push({ [yearVal]: highVal });
    end.push({ [yearVal]: endVal });
    low.push({ [yearVal]: lowVal });
  }
  player.ranking = new Ranking(high, end, low);
  localStorage.setItem('high', JSON.stringify(player.ranking.high));
  localStorage.setItem('end', JSON.stringify(player.ranking.end));
  localStorage.setItem('low', JSON.stringify(player.ranking.low));
}

/* ----------------- END SAVING TO LOCAL STORAGE ----------------- */

/* ----------------- AUTOMATIC TABLE CALCULATIONS ----------------- */

/**
 * Sets a number of automatic calculations that need to be
 * done. This function is triggered when user changes specific
 * data from a stats table.
 */
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
    } catch (ignored) { }
  });
}

/* ----------------- END AUTOMATIC TABLE CALCULATIONS ----------------- */

/* ----------------- ADD EVENT LISTENERS ----------------- */

/**
 * Adds event listeners to tds (row cells). This function
 * is triggered once at the begining (on load) & every time
 * a users adds rows to ranking table.
 */
 function addEventListenersToTds() {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; ++i) {
    cells[i].addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        saveDataToLocalStorage(this);
        this.contentEditable = false;
        if (document.getElementById('ranking-by-year-table').contains(this)) {
          if (navigator.onLine)
            loadRankingChart();
        }
      }
    });
    cells[i].addEventListener('focusout', function (e) {
      saveDataToLocalStorage(this);
      this.contentEditable = false;
      if (document.getElementById('ranking-by-year-table').contains(this)) {
        if (navigator.onLine)
          loadRankingChart();
      }
    });
    cells[i].addEventListener('dblclick', function (e) {
      if (this.getElementsByTagName('img').length == 0)
        this.contentEditable = true;
    });
    cells[i].addEventListener('contextmenu', function (e) {
      e.preventDefault();
      if (this.getElementsByTagName('img').length == 0)
        this.contentEditable = true;
    });
  }
}

/**
 * Adds event listeners to social media icons
 * in order to make their links editable by
 * the user.
 */
function addEventListenersToSocialMedia() {
  var socialMedia = ['facebook', 'instagram', 'twitter'];
  for (const sc of socialMedia) {
    document.getElementById(sc).addEventListener('contextmenu', function (e) {
      e.preventDefault();
      var link = prompt('Enter Player\'s ' + this.id[0].toUpperCase() + this.id.slice(1) + ' Link:', '');
      document.getElementById(sc + '-target').href = link;
    });
    document.getElementById(sc).addEventListener('keypress', function (e) {
      var link = prompt('Enter Player\'s ' + this.id[0].toUpperCase() + this.id.slice(1) + ' Link:', '');
      document.getElementById(sc + '-target').href = link;
    });
  }
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

if (navigator.onLine)
  window.addEventListener('load', loadRankingChart);

/* Add listeners to table cells (making them editable) */
window.addEventListener('load', addEventListenersToTds);

/* Add listener to main title (making it editable) */
window.addEventListener('load', addEventListenerToMainTitle);

/* Enable automatic calculations on stats tables */
window.addEventListener('load', setAutomaticCalculations);

window.addEventListener('load', addEventListenersToSocialMedia);

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

/* ----------------- END ADD EVENT LISTENERS ----------------- */
