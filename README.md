threex.lighting
===============
threex.lighting is a three.js extension which provides 
a [three point lighting](http://en.wikipedia.org/wiki/Three-point_lighting). 
It is a typical lighting used in movie:
A key light, a back light and a fill light.
It is perfect if you dunno much about lighting and want to add lights in your games.
Nothing big or special in this extension.
This is mainly educational purpose or for starting your project fast.

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.basiclighting/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.basiclighting/blob/master/examples/basic.html)\] :
It shows a basic example of extension.
* [examples/demo.html](http://jeromeetienne.github.io/threex.basiclighting/examples/demo.html)
\[[view source](https://github.com/jeromeetienne/threex.basiclighting/blob/master/examples/demo.html)\] :
It shows a demo of it.

A Screenshot
============
[![screenshot](https://raw.githubusercontent.com/jeromeetienne/threex.basiclighting/master/examples/images/screenshot-threex-basiclighting-512x512.jpg)](http://jeromeetienne.github.io/threex.basiclighting/examples/demo.html)

How To Install It
=================

You can install it manually. Just do 

```html
<script src='threex.basiclighting.js'></script>
```

You can install with [bower](http://bower.io/).

```bash
bower install threex.basiclighting
```

then you add that in your html

```html
<script src="bower_components/threex.basiclighting/threex.basiclighting.js"></script>
```

## How to Use It

create a three point lighting

```javascript
var lighting	= new THREEx.ThreePointsLighting()
scene.add(lighting)
```

create a sun set lighting

```javascript
var lighting	= new THREEx.SunSetLighting()
scene.add(lighting)
```

## Possible Improvements
* do a day light, night light
  * a smooth transition between the two would be even better
