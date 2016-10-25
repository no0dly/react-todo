var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('Todo search component',() => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });
});
