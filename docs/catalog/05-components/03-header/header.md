`header --white` makes the header white.
Look under for an example of how you can implement a javascript function to add the white class after user has scrolled down.

```html|responsive
<header class="header" >
  <div class="header__wrapper">
    <div class="header__logo">
      <a>
        Logo here
      </a>
    </div>

    <nav class="header__nav --desktop">
      <ul class="header__nav-links">
        <li class="header__nav-link">
          <a>Arrangementer</a>
        </li>
        <li class="header__nav-link">
          <a>Forskning</a>
        </li>
        <li class="header__nav-link">
          <a>Rusveiledere</a>
        </li>
        <li class="header__nav-link">
          <a>Testkits</a>
        </li>
        <li class="header__nav-link">
          <a>Media</a>
        </li>
        <li class="header__nav-link">
          <a>Om oss</a>
        </li>
        <li class="header__nav-link">
          <button class="button --small">Bli medlem</button>
        </li>
      </ul>
    </nav>

    <nav class="header__nav --mobile">
      <input type="checkbox" class="header__hamburger-menu-checkbox" id="hamburger-menu">
      <label class="header__hamburger-menu" for="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
      </label>
      <div class="overlay-menu --hidden">

        <div class="overlay-menu__contents">
          <nav class="overlay-menu__nav">
            <ul class="overlay-menu__nav-links">
              <li class="overlay-menu__nav-link">
                <h2>Forside</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <h2>Arrangementer</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <h2>Forskning</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <h2>Rusveiledere</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <h2>Testkits</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <h2>Media</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <h2>Om oss</h2>
              </li>
              <li class="overlay-menu__nav-link">
                <button class="button --white --large">Bli medlem</button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </nav>

  </div>
</header>
```

```code
const ESHeader = () => {

  const header = document.querySelector('.header');

  const getScrollPosition = () => {

    const position = window.pageYOffset | document.body.scrollTop;
    if (position < 50) {
      header.classList.remove('--white');
    } else {
      header.classList.add('--white');
    }

  };

  window.onscroll = () => { getScrollPosition() };

};

ESHeader();
```
