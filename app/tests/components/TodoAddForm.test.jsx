var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var TodoAddForm = require('TodoAddForm');

describe('Todo add form component',() => {
    it('Should exist', () => {
        expect(TodoAddForm).toExist();
    });
});
