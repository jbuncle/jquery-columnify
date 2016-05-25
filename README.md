# jQuery Columnify

[![Build Status](https://travis-ci.org/jbuncle/jquery-columnify.svg?branch=master)](https://travis-ci.org/jbuncle/jquery-columnify)

jQuery Plugin to responsively reflow child elements into columns

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.columnify.min.js"></script>
	```

3. Call the plugin:

	```javascript
        //Example
        $(window).load(function(){
            //Wait for full page load to get correct content sizes
            $('ul').columnify({options});
        });
	```

### Options

| Property      | Default       | Description                        |
| ------------- |---------------| -----------------------------------|
| maxwidth      | auto          | Target maximum css width of items  |
| minwidth      | 0             | Target minimum css width of items  |
| columns       | 3             | Target number of columns to create |

## Licence

The MIT License

Copyright 2016 James Buncle <jbuncle@hotmail.com>.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
