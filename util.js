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
 * @constructor
 */
util.Template = function(templateString) {
  this.templateString = templateString;
};

/**
 * Evaluate the template using the given context.
 * @param {Object.<str,str>} context
 * @return {string} The evaluated template.
 */
util.Template.prototype.evaluate = function(context) {
  result = this.templateString;
  for (var key in context) {
    result = result.replace(`\${${key}}`, context[key]);
  }
  return result;
};
