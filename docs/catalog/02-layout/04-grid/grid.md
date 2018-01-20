```hint|warning
Depricated: We used [http://flexboxgrid.com/] as grid before, it is still available, but use the grid defined under instead.
```

### Introduction to the grid

We use the class `grid` to define a new grid.
Every column is defined as a `grid__item`.

The grid system is divided in 12, and uses 3 breakpoints.
To define the width of each item you add a midifier like this `--{breakpoint}-{width}`.

**Example**
`grid__item --s-12`
`grid__item --m-6`
`grid__item --l-4`

### Standard example

```html|span-5,plain,white
<div class="grid">
    <div class="grid__item --s-12 --m-6">
      <div class="block --bg-light --pt --pb">
        grid__item --s-12 --m-6
      </div>
    </div>
    <div class="grid__item --s-12 --m-6">
      <div class="block --bg-light --pt --pb">
        grid__item --s-12 --m-6
      </div>
    </div>
    <div class="grid__item --s-12 --l-4">
      <div class="block --bg-light --pt --pb">
        grid__item --s-12 --l-4
      </div>
    </div>
    <div class="grid__item --s-12 --l-4">
      <div class="block --bg-light --pt --pb">
        grid__item --s-12 --l-4
      </div>
    </div>
    <div class="grid__item --s-12 --l-4">
      <div class="block --bg-light --pt --pb">
        grid__item --s-12 --l-4
      </div>
    </div>
</div>
```

### Equal height for each item

You can put modifiers on the `grid` to decide how all the `grid__item`'s will behave.

`grid --equal` makes every item equal height.


```html|span-5,plain,white
<div class="grid --equal">
    <div class="grid__item --s-6">
      <div class="block --bg-light --pt --pb">
        En setning som <br>
        er på to linjer.
      </div>
    </div>
    <div class="grid__item --s-6">
      <div class="block --bg-light --pt --pb">
        En setning som er på én linje.
      </div>
    </div>
</div>
```

### Centering

`grid --center` makes the items center.


```html|span-5,plain,white
<div class="grid --center">
    <div class="grid__item --s-6 --m-3">
      <div class="block --bg-light --pt --pb">
        grid__item --s-6 --m-3
      </div>
    </div>
    <div class="grid__item --s-6 --m-3">
      <div class="block --bg-light --pt --pb">
        grid__item --s-6 --m-3
      </div>
    </div>
</div>
```

`grid --middle` centers the items vertically (yey!).


```html|span-5,plain,white
<div class="grid --middle">
    <div class="grid__item --s-3">
      <div class="block --bg-light --pt --pb">
        A text on <br>
        three <br>
        lines
      </div>
    </div>
    <div class="grid__item --s-3">
      <div class="block --bg-light --pt --pb">
        Text on one line
      </div>
    </div>
</div>
```

`grid --bottom` puts the items on the bottom.


```html|span-5,plain,white
<div class="grid --bottom">
    <div class="grid__item --s-3">
      <div class="block --bg-light --pt --pb">
        A text on <br>
        three <br>
        lines
      </div>
    </div>
    <div class="grid__item --s-3">
      <div class="block --bg-light --pt --pb">
        Text on one line
      </div>
    </div>
</div>
```

`grid --top` puts the items on the top.


```html|span-5,plain,white
<div class="grid --top">
    <div class="grid__item --s-3">
      <div class="block --bg-light --pt --pb">
        A text on <br>
        three <br>
        lines
      </div>
    </div>
    <div class="grid__item --s-3">
      <div class="block --bg-light --pt --pb">
        Text on one line
      </div>
    </div>
</div>
```
