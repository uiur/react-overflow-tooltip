require('babel/register')

var OverflowTooltip = require('../src/index.js')
var test = require('tape')

test(function (t) {
  t.ok(OverflowTooltip)
  t.end()
})
