<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  components:{
    Header,
    Footer
  },
  head(){
    return{
      title: 'WinFinance DeFi - ICO Channel',
    bodyAttrs: {
      class: 'page-user'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WinFinance offers solution which aggregates cryptocurrency exchanges, non-bank liquidity providers, Forex brokers, cryptocurrency brokers, OTC orders of institutional clients, hedge funds and thousands of client-broker orders' }
    ],
    link: [
      { rel: 'stylesheet', href: '/assets/css/vendor.bundle49f7.css'},
      { rel: 'stylesheet', href:'/assets/css/style49f7.css',  id:'layoutstyle'}
    ],
    script: [
      { src: '/assets/js/jquery.bundle49f7.js', body: true},
      { src: '/assets/js/script49f7.js', body: true}

    ]
    }
  }
}
</script>