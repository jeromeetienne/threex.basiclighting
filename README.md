threex.lighting
===============
threex.lighting is a three.js extension which provides various standard ligthings:
the typical [three point lighting](http://en.wikipedia.org/wiki/Three-point_lighting)
or a sunset lighting. Nothing big or special in this extension.
This is mainly educational purpose or for starting your project fast.

Here is the basic example 
[live](http://jeromeetienne.github.io/threex/src/threex.basiclighting/examples/basic.html)
 and its 
[source](https://github.com/jeromeetienne/threex/blob/master/src/threex.basiclighting/examples/basic.html).
There is a [demo live](http://jeromeetienne.github.io/threex/src/threex.basiclighting/examples/demo.html)
 and its 
[source](https://github.com/jeromeetienne/threex/blob/master/src/threex.basiclighting/examples/demo.html).

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

