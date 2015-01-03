/**
 * @fileoverview Content script implementation.
 * @author metzen@gmail.com (Matt McDonald)
 */


/**
 * Create a hidden DOM element which contains hCalendar VEVENT data.
 * @param {string} summary The event summary.
 * @param {string} description The event description.
 * @param {string} dtstart The event start time.
 * @param {string} dtend The event end time.
 * @param {string} location The event location.
 * @return {jQuery} The generated DOM element.
 */
function createHiddenVeventDataElement(
    summary, description, dtstart, dtend, location) {
  var span = $('<span>').css('display', 'none');
  span.append($('<span>').addClass(hcalendar.ClassName.SUMMARY).text(summary));
  span.append($('<span>').addClass(hcalendar.ClassName.DESCRIPTION).text(
      description));
  span.append($('<span>').addClass(hcalendar.ClassName.DTSTART).text(dtstart));
  span.append($('<span>').addClass(hcalendar.ClassName.DTEND).text(dtend));
  span.append($('<span>').addClass(hcalendar.ClassName.LOCATION).text(
      location));
  return span;
};


$('.payMidWrapper > div > table > tbody > tr:gt(0)').each(function() {
  var tds = $(this).children();

  var dateTd = tds[0];
  var locationTd = tds[1];
  var timeTd = tds[2];
  var opponentTd = tds[3];
  var resultsTd = tds[4];
  
  var opponent = $(opponentTd).find('div > a').text().trim();
  if (opponent == nyurban.NO_GAME_THIS_WEEK) {
    return;
  }

  $(this).addClass('vevent');

  var dateParts = $(dateTd).text().trim().split(' ');
  var timeParts = $(timeTd).text().trim().split(':');
  var monthDay = dateParts[1].split('/');
  var dtstart = new Date(
      new Date().getFullYear(),
      parseInt(monthDay[0]) - 1,
      monthDay[1],
      12 + parseInt(timeParts[0]),
      timeParts[1]);
  var dtend = new Date(dtstart.getTime());
  dtend.setHours(dtend.getHours() + 1);

  var locationTokens = $(locationTd).find('div > a').text().trim().split('-');
  if (locationTokens.length > 1) {
    var court = nyurban.COURTS[locationTokens[1]] + ' court';
  } else {
    var court = '';
  }

  // Add the hCalendar VEVENT data to the DOM, but as hidden elements because
  // the "Google Calendar (by Google)" Chrome Extension doesn't properly support
  // parsing <abbr> titles for "summary" or "location" fields.
  $(this).prepend(createHiddenVeventDataElement(
      $('.green_block > h1 > span').text() + ' vs ' + opponent,
      court,
      dtstart.toISOString(),
      dtend.toISOString(),
      nyurban.GYMS[locationTokens[0]]));

  // Arbitrarily attach a summary class to the last column in the table, so that
  // the "Google Calendar (by Google)" Chrome Extension will show a small
  // interface element indicating that there is an addable event.
  $(resultsTd).addClass('summary');
});