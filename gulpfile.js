var gulp = require('gulp');
var requireDir = require('require-dir');

global.REGEX = /\{\{\{(\S*?)\}\}\}/g
global.REG_BUILD = '/static/$1'
global.MANIFEST =  __dirname + '/fe/static/rev-manifest.json'

requireDir('./gulp', {recurse: true});