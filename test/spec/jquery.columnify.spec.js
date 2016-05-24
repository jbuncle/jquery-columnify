(function ($, QUnit) {

    "use strict";

    QUnit.test("Arrays - Create Array Test", function (assert) {
        var newArray = $.fn.columnify.Arrays.createArray(5, 0);
        assert.equal(newArray.length, 5, "Passed!");
        assert.deepEqual(newArray, [0, 0, 0, 0, 0], "Passed!");
    });
    QUnit.test("Arrays - Get Max Value", function (assert) {
        var array = [0, 1, 10, 99, 10000, -1];
        var fn = $.fn.columnify.Arrays.getMaxValue;
        var result = fn(array);
        assert.equal(result, 10000, "getMaxValue([0, 1, 10, 99, 10000, -1]) = 10000");
    });
    QUnit.test("Arrays - Get Max Value Index", function (assert) {
        var array = [0, 1, 10, 99, 10000, -1];
        var result = $.fn.columnify.Arrays.getMaxValueIndex(array);
        assert.equal(result, 4, "getMaxValueIndex([0, 1, 10, 99, 10000, -1]) = 4");
    });
    QUnit.test("Arrays - Get Most Distant to Max", function (assert) {
        var fn = $.fn.columnify.Arrays.getMostDistantToMax;
        var result = fn([0, 10000, 100]);
        assert.equal(result, 0, "getMostDistantToMax([0, 10000, 100]) = 0");
        result = fn([0, 1, 2]);
        assert.equal(result, 0, "getMostDistantToMax([0, 1, 2]) = 0");
        result = fn([10, 5, 2]);
        assert.equal(result, 2, "getMostDistantToMax([10, 5, 2]) = 2");
    });
    QUnit.test("Arrays - Get Most Distant", function (assert) {
        var fn = $.fn.columnify.Arrays.getMostDistant;
        var result = fn([0, 10000, 100], 200);
        assert.equal(result, 1, "getMostDistant([0, 10000, 100], 200) = 1");

        result = fn([0, 10000, 100], 9999);
        assert.equal(result, 0, "getMostDistant([0, 10000, 100], 9999) = 0");

        result = fn([0, 1, 2], 1);
        assert.equal(result, 0, "getMostDistant([0, 1, 2], 1) = 0");

        result = fn([10, 5, 2], 1);
        assert.equal(result, 0, "getMostDistant([10, 5, 2], 1) = 0");

        result = fn([0, 1, 2], 1);
        assert.equal(result, 0, "getMostDistant([0, 1, 2], 0) = 0");
    });

}(jQuery, QUnit));
