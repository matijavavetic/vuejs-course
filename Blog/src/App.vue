<template>
  <div>
   <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blogs': listBlogs
  },

  data () {
    return {
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
