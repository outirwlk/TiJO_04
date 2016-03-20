describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('should return false when numberFrom is not a number', function () {
        it('should divide number a by b', function () {
            expect(app.getDescendingNumbers('a', 5)).toEqual(false);
        });
        it('should return false when numberFrom is greater than number', function () {
            expect(app.getDescendingNumbers(2, 'i')).toEqual(false);
        });
        it('should return false when numberTo and numberFrom are not a number', function () {
            expect(app.getDescendingNumbers('w', 'i')).toEqual(false);
        });
        it('should return false when numberTo is not a numberFrom', function () {
            expect(app.getDescendingNumbers(2, 5)).toEqual(false);
            expect(app.getDescendingNumbers(-5, 2)).toEqual(false);
        });
        it('should return list of number between numberFrom than numberTo', function () {
            expect(app.getDescendingNumbers(5, 2)).toEqual('5 4 3 2');
            expect(app.getDescendingNumbers(-2, -5)).toEqual('-2 -3 -4 -5');
        });
        it('should return false of number between numberFrom than numberTo', function () {
            expect(app.getDescendingNumbers(5, 5)).toEqual(false);
        });
    });


    describe('areaOfTrapezoid Function', function () {
        it('should return are of trapezoid', function () {
            expect(app.areaOfTrapezoid(0, 2, 1)).toEqual(1);
            expect(app.areaOfTrapezoid(6, 2, 2)).toEqual(8);
            expect(app.areaOfTrapezoid(6, 9 ,3.5)).toEqual(26.25);
        });
        it('should return false when a, b and h are not a numbers', function () {
            expect(app.areaOfTrapezoid('a', 2, 4)).toEqual(false);
            expect(app.areaOfTrapezoid(2, 'a', 1)).toEqual(false);
            expect(app.areaOfTrapezoid(1, 5, 'a')).toEqual(false);
        });
        it('should return false when a, b or h are lower then 0', function () {
            expect(app.areaOfTrapezoid(-2, 2, 5)).toEqual(false);
            expect(app.areaOfTrapezoid(2, -10, 5)).toEqual(false);
            expect(app.areaOfTrapezoid(2, 5, -4)).toEqual(false);
        });
        it('should return false if b is lower than 0', function(){
            expect(app.areaOfTrapezoid(1,-5,3)).toEqual(false);
        });

    });

    describe ('maxArray Function', function (){
        it('should return false when array is empty',function(){
            expect(app.maxArray([])).toEqual(false);
        });
        it('Should return greatest number', function(){
            expect(app.maxArray([1,2,-30,20])).toEqual(20);
            except(app.maxArray([])).toEqual(0);
        });
        it('should return false when argument is not array',function(){
            expect(app.maxArray(false)).toEqual(false);
        });

    });

    describe ('squareOdd Function', function () {
        it('should return empty array when array is empty',function(){
            expect(app.squareOdd([])).toEqual([]);
        });
        it('should return false when argument is not array',function(){
            expect(app.squareOdd('a')).toEqual(false);
        });
        it('should square odd',function(){
            expect(app.squareOdd([1,4,7,'10'])).toEqual([1,4,49,'10']);
            expect(app.squareOdd([2,2,10,8])).toEqual([2,2,10,8]);
            expect(app.squareOdd([-3,0,2,'12'])).toEqual([9,0,2,'12']);
        });
    });
});



