require('babel-core/register')

const test = require('ava')
const jsdom = require('jsdom').jsdom

const React = require('react')
const ReactDOM = require('react-dom')

const OverflowTooltip = require('../src/index.js')

global.document = jsdom()
global.window = document.defaultView

test((t) => {
  const container = document.createElement('div')

  ReactDOM.render(
    <OverflowTooltip title='too long text...'>
      <div>too long text</div>
    </OverflowTooltip>,
    container
  )

  t.true(/too long text/.test(container.textContent))
  t.end()
})
