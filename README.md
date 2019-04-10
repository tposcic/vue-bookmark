# vue-bookmark

Vue component that enables localstorage based Vue route bookmarks

It will store an object array in JSON with the following format:
{url: '', name: ''}

The name will be fetched from the current route name or stored as an empty string

## Installation

```js
npm i --save vue-bookmark
```

### Browser

Include the script file and install the component with `Vue.use(VueBookmark);`

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-bookmark/dist/vue-bookmark.min.js"></script>
<script type="text/javascript">
  Vue.use(VueBookmark);
</script>
```

Following that you can use it like so:

```html
<vue-bookmark></vue-bookmark>
```

### Module

```js
import VueBookmark from 'vue-bookmark';

Vue.use(VueBookmark);
```

or you can name it

```js
import VueBookmark from 'vue-bookmark';

Vue.component('vue-bookmark', VueBookmark)
```

### Props

#### storageName

Sets the name that will be used for the localstorage item
Default: 'bookmark'

```html
<vue-bookmark storageName="bookmark"></vue-bookmark>
```

### Slot

The component uses a Font Awesome 4.7 icon as default but you can use any other element with the slot:

```html
<vue-bookmark><i class="large material-icons">bookmark</i></vue-bookmark>
```