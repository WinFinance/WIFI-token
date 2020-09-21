<template>
  <div class="nk-wrap">
    <Lhead />
    <Nuxt />
    <Lfoot />
    <!-- back to top -->
    <div class="back-to-top">
        <a href="#"><i class="fa fa-chevron-up"></i></a>
    </div>
    <!-- back to top -->
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
        title: 'Cryptocurrency Liquidity Provider - Winfinance'
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
            content: 'WinFinance offers solution which aggregates cryptocurrency exchanges, non-bank liquidity providers, Forex brokers, cryptocurrency brokers, OTC orders of institutional clients, hedge funds and thousands of client-broker orders'
          },
        ],
        link:[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700'},
          { rel: 'stylesheet', href: '/landing/assets/css/bootstrap.min.css'},
          { rel: 'stylesheet', href: '/landing/assets/css/font-awesome.min.css'},
          { rel: 'stylesheet', href: '/landing/assets/plugins/owl-carousel/owl.carousel.min.css'},
          { rel: 'stylesheet', href: '/landing/assets/plugins/Magnific-Popup/magnific-popup.css'},
          { rel: 'stylesheet', href: '/landing/assets/css/style.css'},
          { rel: 'stylesheet', href: '/landing/assets/css/responsive.css'},
          { rel: 'stylesheet', href: '/landing/assets/css/custom.css'},
        ],
        script: [
          { src:'/landing/assets/js/jquery-3.3.1.min.js'},
          { src:'/landing/assets/js/bootstrap.bundle.min.js'},
          { src:'/landing/assets/plugins/waypoints/jquery.waypoints.min.js'},
          { src:'/landing/assets/plugins/parsley/parsley.min.js'},
          { src:'/landing/assets/plugins/parallax/parallax.js'},
          { src:'/landing/assets/plugins/owl-carousel/owl.carousel.min.js'},
          { src: '/landing/assets/js/menu.min.js'},
          { src: '/landing/assets/plugins/Magnific-Popup/jquery.magnific-popup.min.js'},
          { src: '/landing/assets/plugins/waypoints/jquery.counterup.min.js'},
          { src:'/landing/assets/js/scripts.js'},
          { src: '/landing/assets/js/custom.js'}
        ]
      }
    }
}
</script>