var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',() => {
    describe('searchTextReducer',() => {
        it('should setSerchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompledReducer',() => {
        it('Should toggle false to true', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompledReducer(df(''), df(action));

            expect(res).toEqual(true);
        });
    });

    it('', () => {

    });
});
