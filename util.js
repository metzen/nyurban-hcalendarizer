/**
 * @fileoverview Utilities.
 */

/**
 * The namespace for utilities;
 * @namespace
 */
var util = {};

/**
 * A formatted string template.
 * @param {string} templateString The template string.
 * @constructor
 */
util.Template = function(templateString) {
  this.templateString = templateString;
};

/**
 * Evaluate the template using the given context.
 * @param {!Object<string, string>} context A map from variable names to values.
 * @return {string} The evaluated template.
 */
util.Template.prototype.evaluate = function(context) {
  result = this.templateString;
  for (var key in context) {
    result = result.replace(`\${${key}}`, context[key]);
  }
  return result;
};
