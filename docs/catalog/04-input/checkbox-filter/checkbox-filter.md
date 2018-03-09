## Closed

When closed the filter box displays a button for opening the filters on mobile.

```html|span-3
<fieldset class="checkbox-filter">
  <legend class="checkbox-filter__legend">Filtrer på tema</legend>
  <ul class="checkbox-filter__list" v-for="tag in tags">
    <li class="checkbox-filter__list-item">
      <label class="checkbox">
        <input type="checkbox" />
        <i class="checkbox__indicator"></i>
        Et filter
      </label>
    </li>
    <li class="checkbox-filter__list-item">
      <label class="checkbox">
        <input type="checkbox" />
        <i class="checkbox__indicator"></i>
        Et filter
      </label>
    </li>
    <li class="checkbox-filter__list-item">
      <label class="checkbox">
        <input type="checkbox" />
        <i class="checkbox__indicator"></i>
        Et filter
      </label>
    </li>
  </ul>
  <button class="checkbox-filter__toggle">
    <span class="checkbox-filter__toggle-icon"></span>
  </button>
</fieldset>
```

## Open

When open the filters are shown on mobile.

```html|span-3
<fieldset class="checkbox-filter --open">
  <legend class="checkbox-filter__legend">Filtrer på tema</legend>
  <ul class="checkbox-filter__list" v-for="tag in tags">
    <li class="checkbox-filter__list-item">
      <label class="checkbox">
        <input type="checkbox" />
        <i class="checkbox__indicator"></i>
        Et filter
      </label>
    </li>
    <li class="checkbox-filter__list-item">
      <label class="checkbox">
        <input type="checkbox" />
        <i class="checkbox__indicator"></i>
        Et filter
      </label>
    </li>
    <li class="checkbox-filter__list-item">
      <label class="checkbox">
        <input type="checkbox" />
        <i class="checkbox__indicator"></i>
        Et filter
      </label>
    </li>
  </ul>
  <button class="checkbox-filter__toggle">
    <span class="checkbox-filter__toggle-icon"></span>
  </button>
</fieldset>
```
