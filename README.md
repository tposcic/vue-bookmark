# vue-bookmark

Vue component that enables localstorage based Vue route bookmarks

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