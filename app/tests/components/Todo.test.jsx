var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo main component',() => {
    it('Should exist', () => {
        expect(Todo).toExist();
    });
});
