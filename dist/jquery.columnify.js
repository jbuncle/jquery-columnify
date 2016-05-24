/*
 *  jquery-columnify - v4.1.0
 *  A jump-start for jQuery plugins development.
 *  
 *
 *  Made by James Buncle
 *  Under MIT License
 */
/*!
 * jQuery Responsive Columns (Columnify)
 * 
 * Version: @version@
 * Copyright 2013 James Buncle
 * 
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
(function ($) {
    "use strict";
    function columnify($parent, settings) {
        var numberOfColumns = settings.columns,
                parentWidth = $parent.outerWidth(),
                targetWidth = parentWidth / numberOfColumns,
                columnHeights = $.fn.columnify.Arrays.createArray(
                        numberOfColumns, 0);

        if (targetWidth < settings.minwidth) {
            //Current target width is less than minimum
            //Recalculate columns and widths
            numberOfColumns = Math.round(parentWidth / settings.minwidth);
            targetWidth = parentWidth / numberOfColumns;
        }

        if (settings.maxwidth !== "auto") {
            if (targetWidth > settings.maxwidth) {
                //Recalculate columns and widths
                numberOfColumns = Math.round(
                        $parent.width() /
                        settings.maxwidth);
                targetWidth = parentWidth / numberOfColumns;
            }
        }

        $parent.children().each(function (index, item) {
            $.fn.columnify.setElementPosition(
                    $(item), targetWidth, columnHeights);
        });
        //Fix the containers height
        $parent.css({
            'position': 'relative',
            'height': $.fn.columnify.Arrays.getMaxValue(columnHeights)
        });
    }
    $.fn.columnify = function (options) {
        var defaults = {
            maxwidth: 'auto',
            columns: 3,
            minwidth: 0
        },
        settings = $.extend(defaults, options);

        return this.each(function () {
            var $this = $(this);
            $(window).resize(function () {
                columnify($this, settings);
            });
            columnify($this, settings);
        });
    };
    $.fn.columnify.setElementPosition = function (
            $element,
            width,
            columnHeights) {
        //Set outer width first, to establish new height
        $element.css({
            'position': 'absolute',
            'min-width': 0,
            'max-width': '100%',
            'height': 'auto'
        });
        $element.outerWidth(width);
        var itemHeight = $element.height(),
                targetColumn = $.fn.columnify.Arrays.getMostDistantToMax(
                        columnHeights);
        $element.css({
            'top': columnHeights[targetColumn],
            'left': width * targetColumn
        });
        columnHeights[targetColumn] += itemHeight;
    };
    $.fn.columnifyStatic = function (options) {
        var defaults = {
            maxwidth: 'auto',
            columns: 3,
            minwidth: 0
        },
        settings = $.extend(defaults, options);

        return this.each(function () {
            columnify($(this), settings);
        });
    };

    $.fn.columnify.Arrays = {
        /**
         * Get the array index which is most distant to the largest value
         * @param {type} columnHeights
         * @returns {Number|@var;index}
         */
        getMostDistantToMax: function (columnHeights) {
            //Iterate column heights
            var maxHeight = $.fn.columnify.Arrays.getMaxValue(columnHeights);
            return $.fn.columnify.Arrays.getMostDistant(
                    columnHeights, maxHeight
                    );
        },
        /**
         * Get the array index which is most distant to the given value.
         * @param {array} columnHeights
         * @param {Number} targetValue
         * @returns {Number|@var;index}
         */
        getMostDistant: function (columnHeights, targetValue) {
            //Iterate column heights
            var differences = [], index, difference;
            //Calculate differences
            for (index = 0; index < columnHeights.length; index = index + 1) {
                difference = targetValue - columnHeights[index];
                differences[index] = Math.abs(difference);
            }
            return $.fn.columnify.Arrays.getMaxValueIndex(differences);
        },
        /**
         * 
         * @param {Number} length
         * @param {type} initialValue
         * @returns {Array}
         */
        createArray: function (length, initialValue) {
            var data = [], i;
            for (i = 0; i < length; i = i + 1) {
                data.push(initialValue);
            }
            return data;
        },
        /**
         * Get the highest value from the given array
         * 
         * @param {Array[Number]} values
         * @returns {@var;value|Number} the highest value in the array
         */
        getMaxValue: function (values) {
            var maxValue = 0;
            $.each(values, function (index, value) {
                if (value > maxValue) {
                    maxValue = value;
                }
            });
            return maxValue;
        },
        getMaxValueIndex: function (values) {
            var maxValue = 0, maxIndex = 0;
            $.each(values, function (index, value) {
                if (value > maxValue) {
                    maxValue = value;
                    maxIndex = index;
                }
            });
            return maxIndex;
        }
    };

}(jQuery));