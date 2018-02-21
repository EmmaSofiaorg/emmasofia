## Default card

```html|span-4
<a class="card" >
  <div class="block --mt --mb --pt --pb">
    Halla
  </div>
</a>
```

## Drug card

```html|span-4
<a class="card-drug" >
  <div
    class="card-drug__image"
    style="background-image: url(http://entheonation.com/wp-content/uploads/2016/03/lsd-experience.jpg)">
    <div class="card-drug__overlay">
      <h3>LSD</h3>
    </div>
  </div>
</a>
```

## Event card

```html|span-4
<div class="card-event" >
  <div class="card-event__date">
    <div class="card-event__month">
      Juni
    </div>
    <div class="card-event__day">
      5
    </div>
  </div>
  <div class="card-event__contents">
    <div class="card-event__title">
      <a>Tittel på event</a>
    </div>
    <div class="card-event__place">
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <a target="_blank" href="">Sted</a>
    </div>
    <div class="card-event__facebook">
      <i class="fa fa-facebook-official" aria-hidden="true"></i>
      <a target="_blank" href="hello">Facebook</a>
    </div>
  </div>
</div>
```

## Mediaclip card

```html|span-4
<div class="card-media-clip">
  <div class="card-media-clip__logo">
    <img src="http://styleguide.dagbladet.no/assets/favicon/dagbladet/favicon-228.png" />
  </div>
  <div class="card-media-clip__contents">
    <div class="card-media-clip__date">
      19. August 2017
    </div>
    <div class="card-media-clip__headline">
      <h2>Her er en overskrift</h2>
    </div>
    <div class="card-media-clip__ingress">
      Dette er en ingress
    </div>
    <div class="block --full --mt">
      <a href="#" target="_blank">Les hele saken
        <i class="fa fa-external-link" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</div>
```

## Publication card

```html|span-4
<div class="card-publication">
  <div
    class="card-publication__image"
    style="background-image: url('https://images.unsplash.com/photo-1505855265981-d52719d1f64e?auto=format&fit=crop&w=1001&q=80')">
  </div>
  <div class="card-publication__contents">
    <div class="card-publication__title">
      En tittel
    </div>
    <div class="card-publication__link">
      <a :href="publication.link" target="_blank">
        Les hele studien
        <i class="fa fa-external-link" aria-hidden="true"></i>
      </a>
    </div>
    <div class="card-publication__tags">
      <div class="card-publication__tag" v-for="tag in publication.tags">
        En tag
      </div>
    </div>
  </div>
</div>
```
