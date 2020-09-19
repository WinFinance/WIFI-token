<template>
  <div class="nk-wrap">
    <Lhead />
    <Nuxt />
    <Lfoot />
  </div>
</template>

<script>
import Lhead from "~/components/Lhead"
import Lfoot from "~/components/Lfoot"
export default {
  components:{
    Lhead,
    Lfoot
  },
   data() {
      return {
        title: 'Hello World!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ],
        link:[
          { rel: 'stylesheet', href: 'assets/css/vendor.bundle.css'},
          {
             rel: 'stylesheet', href: 'assets/css/style-dark.css', id: 'changeTheme'
          },
          { rel: 'stylesheet', href: 'assets/css/theme.css'}
        ]
      }
    }
}
</script>