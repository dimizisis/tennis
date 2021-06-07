# tennis-player

## Classes

<dl>
<dt><a href="#TennisPlayer">TennisPlayer</a></dt>
<dd><p>Class representing a tennis player.</p>
</dd>
<dt><a href="#Statistics">Statistics</a></dt>
<dd><p>Class representing a player&#39;s overall statistics.</p>
</dd>
<dt><a href="#Ranking">Ranking</a></dt>
<dd><p>Class representing a player&#39;s ranking</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#initializePlayer">initializePlayer()</a> ⇒ <code>Player</code></dt>
<dd><p>Initializes player. If data in local
storage exists, retrieves them. If not,
dummy data are shown to the user.</p>
</dd>
<dt><a href="#displayPlayerInfo">displayPlayerInfo()</a></dt>
<dd><p>Creates table with player&#39;s basic info</p>
</dd>
<dt><a href="#displayPlayerStatistics">displayPlayerStatistics()</a></dt>
<dd><p>Creates tables with player&#39;s statistics
(service &amp; return records)</p>
</dd>
<dt><a href="#displayPlayerRanking">displayPlayerRanking()</a></dt>
<dd><p>Create table with player&#39;s ranking
(by year)</p>
</dd>
<dt><a href="#createSection">createSection(headerStr, categoryIconSrc, categoryIconAltTxt)</a> ⇒ <code>Element</code></dt>
<dd><p>Creates a section, along with its header
and icon.</p>
</dd>
<dt><a href="#createTable">createTable(keyValObj, tableId, header)</a> ⇒ <code>Array</code></dt>
<dd><p>Creates a new table based on
a key-value object (populates its data).</p>
</dd>
<dt><a href="#createRankingTable">createRankingTable(tableId, header)</a> ⇒ <code>Array</code></dt>
<dd><p>Creates a new table (ranking) based on
given a table id &amp; a subcategory header.</p>
</dd>
<dt><a href="#insertRankingRow">insertRankingRow()</a></dt>
<dd><p>Inserts a new row at the end 
of the ranking table.</p>
</dd>
<dt><a href="#getBase64Image">getBase64Image(img)</a> ⇒ <code>string</code></dt>
<dd><p>Given a img element, creates a
2d canvas &amp; draws a base64 image.</p>
</dd>
<dt><a href="#loadMainTitle">loadMainTitle()</a></dt>
<dd><p>Loads the main title (H1). 
If it is previous saved, retrieves
it from local storage. Else, shows
&#39;Enter Name Here&#39;.</p>
</dd>
<dt><a href="#keepNavBar">keepNavBar()</a></dt>
<dd><p>Add the sticky class to the navigation bar 
when you reach its scroll position. 
Remove &#39;sticky&#39; when you leave the scroll 
position.</p>
</dd>
<dt><a href="#addSortingEventListeners">addSortingEventListeners()</a></dt>
<dd><p>Add event listeners for all columns,
according to their class &amp; id
(word before the &#39;-th&#39;)</p>
</dd>
<dt><a href="#sortTable">sortTable(id, n)</a></dt>
<dd><p>Sorts a table with the given ID, by clicked column. 
This will be triggered only when user clicks on 
a column.</p>
</dd>
<dt><a href="#addVisibilityEventListeners">addVisibilityEventListeners()</a></dt>
<dd><p>Adds event listeners that refer to column&#39;s visibility.
This function is triggered when the user clicks the
&#39;eye&#39; button.</p>
</dd>
<dt><a href="#loadRankingChart">loadRankingChart()</a></dt>
<dd><p>Loads the ranking chart (disposes potential old ones first)</p>
</dd>
<dt><a href="#addEventListenerToMainTitle">addEventListenerToMainTitle()</a></dt>
<dd><p>Adds all the proper events listeners to H1 (title of page)</p>
</dd>
<dt><a href="#saveDataToLocalStorage">saveDataToLocalStorage(element)</a></dt>
<dd><p>Given an element, saves its data to local storage properly.</p>
</dd>
<dt><a href="#saveRankingToLocalStorage">saveRankingToLocalStorage()</a></dt>
<dd><p>Saves ranking table data to local storage properly.</p>
</dd>
<dt><a href="#setAutomaticCalculations">setAutomaticCalculations()</a></dt>
<dd><p>Sets a number of automatic calculations that need to be
done. This function is triggered when user changes specific
data from a stats table.</p>
</dd>
<dt><a href="#addEventListenersToTds">addEventListenersToTds()</a></dt>
<dd><p>Adds event listeners to tds (row cells). This function
is triggered once at the begining (on load) &amp; every time
a users adds rows to ranking table.</p>
</dd>
<dt><a href="#addEventListenersToSocialMedia">addEventListenersToSocialMedia()</a></dt>
<dd><p>Adds event listeners to social media icons
in order to make their links editable by
the user.</p>
</dd>
</dl>

<a name="TennisPlayer"></a>

## TennisPlayer
Class representing a tennis player.

**Kind**: global class  

* [TennisPlayer](#TennisPlayer)
    * [new TennisPlayer(name, birthday, birthplace, citizenship, height, outfitter)](#new_TennisPlayer_new)
    * [.toString()](#TennisPlayer+toString)
    * [.toKeyValuePair()](#TennisPlayer+toKeyValuePair) ⇒ <code>Map</code>

<a name="new_TennisPlayer_new"></a>

### new TennisPlayer(name, birthday, birthplace, citizenship, height, outfitter)
Creates a tennis player instance


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Player's complete name |
| birthday | <code>string</code> | Player's birthday (MM/DD/YYYY) |
| birthplace | <code>string</code> | Player's birthplace (country name) |
| citizenship | <code>string</code> | Player's citizenship (country name) |
| height | <code>number</code> | Player's height (in meters) |
| outfitter | <code>string</code> | Player's outfitter (Brand's complete name) |

<a name="TennisPlayer+toString"></a>

### tennisPlayer.toString()
Returns a string representation of the player's instance

**Kind**: instance method of [<code>TennisPlayer</code>](#TennisPlayer)  
<a name="TennisPlayer+toKeyValuePair"></a>

### tennisPlayer.toKeyValuePair() ⇒ <code>Map</code>
Creates a Map object with player's basic info.

**Kind**: instance method of [<code>TennisPlayer</code>](#TennisPlayer)  
**Returns**: <code>Map</code> - a Map object  
<a name="Statistics"></a>

## Statistics
Class representing a player's overall statistics.

**Kind**: global class  

* [Statistics](#Statistics)
    * [new Statistics()](#new_Statistics_new)
    * [.setComplementaryServiceFields()](#Statistics+setComplementaryServiceFields)
    * [.setComplementaryReturnFields()](#Statistics+setComplementaryReturnFields)
    * [.initializeSinglesService()](#Statistics+initializeSinglesService)
    * [.initializeSinglesReturn()](#Statistics+initializeSinglesReturn)

<a name="new_Statistics_new"></a>

### new Statistics()
Creates a statistics instance

<a name="Statistics+setComplementaryServiceFields"></a>

### statistics.setComplementaryServiceFields()
Set complementary fields (for autocompletion)
for service records.

**Kind**: instance method of [<code>Statistics</code>](#Statistics)  
<a name="Statistics+setComplementaryReturnFields"></a>

### statistics.setComplementaryReturnFields()
Set complementary fields (for autocompletion)
for return records.

**Kind**: instance method of [<code>Statistics</code>](#Statistics)  
<a name="Statistics+initializeSinglesService"></a>

### statistics.initializeSinglesService()
Initialize data for singles
service records.

**Kind**: instance method of [<code>Statistics</code>](#Statistics)  
<a name="Statistics+initializeSinglesReturn"></a>

### statistics.initializeSinglesReturn()
Initialize data for return records.

**Kind**: instance method of [<code>Statistics</code>](#Statistics)  
<a name="Ranking"></a>

## Ranking
Class representing a player's ranking

**Kind**: global class  
<a name="new_Ranking_new"></a>

### new Ranking(high, end, low)
Creates a ranking instance


| Param | Type | Description |
| --- | --- | --- |
| high | <code>array</code> | Array with the highest rankings (per year). |
| end | <code>array</code> | Array with the final rankings (per year). |
| low | <code>array</code> | Array with the lowest rankings (per year). |

<a name="initializePlayer"></a>

## initializePlayer() ⇒ <code>Player</code>
Initializes player. If data in local
storage exists, retrieves them. If not,
dummy data are shown to the user.

**Kind**: global function  
**Returns**: <code>Player</code> - New player instance.  
<a name="displayPlayerInfo"></a>

## displayPlayerInfo()
Creates table with player's basic info

**Kind**: global function  
<a name="displayPlayerStatistics"></a>

## displayPlayerStatistics()
Creates tables with player's statistics
(service & return records)

**Kind**: global function  
<a name="displayPlayerRanking"></a>

## displayPlayerRanking()
Create table with player's ranking
(by year)

**Kind**: global function  
<a name="createSection"></a>

## createSection(headerStr, categoryIconSrc, categoryIconAltTxt) ⇒ <code>Element</code>
Creates a section, along with its header
and icon.

**Kind**: global function  
**Returns**: <code>Element</code> - Section's element  

| Param | Type | Description |
| --- | --- | --- |
| headerStr | <code>string</code> | The header's string |
| categoryIconSrc | <code>string</code> | Icon's src |
| categoryIconAltTxt | <code>string</code> | Icon's alternative text |

<a name="createTable"></a>

## createTable(keyValObj, tableId, header) ⇒ <code>Array</code>
Creates a new table based on
a key-value object (populates its data).

**Kind**: global function  
**Returns**: <code>Array</code> - Containing table & header's division  

| Param | Type | Description |
| --- | --- | --- |
| keyValObj | <code>string</code> | The key-value object |
| tableId | <code>Element</code> | Table's id |
| header | <code>Element</code> | Subcategory header |

<a name="createRankingTable"></a>

## createRankingTable(tableId, header) ⇒ <code>Array</code>
Creates a new table (ranking) based on
given a table id & a subcategory header.

**Kind**: global function  
**Returns**: <code>Array</code> - Containing table & header's division  

| Param | Type | Description |
| --- | --- | --- |
| tableId | <code>string</code> | Ranking table id |
| header | <code>Element</code> | Subcategory header |

<a name="insertRankingRow"></a>

## insertRankingRow()
Inserts a new row at the end 
of the ranking table.

**Kind**: global function  
<a name="getBase64Image"></a>

## getBase64Image(img) ⇒ <code>string</code>
Given a img element, creates a
2d canvas & draws a base64 image.

**Kind**: global function  
**Returns**: <code>string</code> - the url of the created image  

| Param | Type | Description |
| --- | --- | --- |
| img | <code>Element</code> | An image element |

<a name="loadMainTitle"></a>

## loadMainTitle()
Loads the main title (H1). 
If it is previous saved, retrieves
it from local storage. Else, shows
'Enter Name Here'.

**Kind**: global function  
<a name="keepNavBar"></a>

## keepNavBar()
Add the sticky class to the navigation bar 
when you reach its scroll position. 
Remove 'sticky' when you leave the scroll 
position.

**Kind**: global function  
<a name="addSortingEventListeners"></a>

## addSortingEventListeners()
Add event listeners for all columns,
according to their class & id
(word before the '-th')

**Kind**: global function  
<a name="sortTable"></a>

## sortTable(id, n)
Sorts a table with the given ID, by clicked column. 
This will be triggered only when user clicks on 
a column.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the table's element |
| n | <code>int</code> | The column number that will be sorted |

<a name="addVisibilityEventListeners"></a>

## addVisibilityEventListeners()
Adds event listeners that refer to column's visibility.
This function is triggered when the user clicks the
'eye' button.

**Kind**: global function  
<a name="loadRankingChart"></a>

## loadRankingChart()
Loads the ranking chart (disposes potential old ones first)

**Kind**: global function  
<a name="addEventListenerToMainTitle"></a>

## addEventListenerToMainTitle()
Adds all the proper events listeners to H1 (title of page)

**Kind**: global function  
<a name="saveDataToLocalStorage"></a>

## saveDataToLocalStorage(element)
Given an element, saves its data to local storage properly.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | A HTML element |

<a name="saveRankingToLocalStorage"></a>

## saveRankingToLocalStorage()
Saves ranking table data to local storage properly.

**Kind**: global function  
<a name="setAutomaticCalculations"></a>

## setAutomaticCalculations()
Sets a number of automatic calculations that need to be
done. This function is triggered when user changes specific
data from a stats table.

**Kind**: global function  
<a name="addEventListenersToTds"></a>

## addEventListenersToTds()
Adds event listeners to tds (row cells). This function
is triggered once at the begining (on load) & every time
a users adds rows to ranking table.

**Kind**: global function  
<a name="addEventListenersToSocialMedia"></a>

## addEventListenersToSocialMedia()
Adds event listeners to social media icons
in order to make their links editable by
the user.

**Kind**: global function  
