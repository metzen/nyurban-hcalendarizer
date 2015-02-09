/**
 * Options namespace.
 * @namespace
 */
var options = {};

/**
 * DOM IDs for elements in the options page.
 * @enum {string}
 */
options.DomId = {
  TITLE_TEMPLATE: 'title-template'
};

/**
 * Saves options to chrome.storage.
 */
options.saveOptions = function() {
  var element = document.getElementById(options.DomId.TITLE_TEMPLATE);
  preferences.titleTemplate = element.value;
  chrome.storage.sync.set(preferences, function() {
    window.close();
  });
};

/**
 * Restores the preferences stored in chrome.storage.
 */
options.restoreOptions = function() {
  chrome.storage.sync.get(preferences, function(preferences) {
    var element = document.getElementById(options.DomId.TITLE_TEMPLATE);
    element.value = preferences.titleTemplate;
  });
};

document.addEventListener('DOMContentLoaded', options.restoreOptions);
document.getElementById('save').addEventListener('click', options.saveOptions);