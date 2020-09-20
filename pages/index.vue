<template>
<main>
    <!-- home banner area -->
    <div class="banner-area-inner">
        <div class="banner-inner-area banner-area1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <!-- banner text -->
                        <div class="banner-text-inner">
                            <div class="banner-shape-wrap">
                                <div class="banner-shape-inner">
                                    <img src="/landing/assets/img/banner/shaps1.png" alt="" class='shape shape1 rotate3d'>
                                    <img src="/landing/assets/img/banner/shaps2.png" alt="" class='shape shape2 rotate2d'>
                                    <img src="/landing/assets/img/banner/shaps3.png" alt="" class='shape shape3 rotate-2d'>
                                    <img src="/landing/assets/img/banner/shaps4.png" alt="" class='shape shape4 rotate3d'>
                                    <img src="/landing/assets/img/banner/shaps5.png" alt="" class='shape shape5 rotate2d'>
                                    <img src="/landing/assets/img/banner/shaps6.png" alt="" class='shape shape6 rotate-2d'>
                                    <img src="/landing/assets/img/banner/shaps7.png" alt="" class='shape shape7 rotate3d'>
                                </div>
                            </div>

                            <h1>Cryptocurrency derivatives (CFD) and deliverable (cash) liquidity</h1>
                            <p>{{name}}, is a pooling mechanics arbitration system that rewards both buyer and liquidity providers, thus alleviating issues of impermanent loss.</p>
                            <nuxt-link to="presale" class="btn">Join Airdrop Now</nuxt-link>
                        </div>
                        <!-- banner text -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End of home banner area -->

    <!-- feature area -->
    <section class="pb-110" id='features'>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-8">
                    <!-- section title -->
                    <div class="section-title text-center mt-2">
                        <h2>How {{name}} Works</h2>
                        <p>{{name}} offers solution which aggregates cryptocurrency exchanges, non-bank liquidity providers, Forex brokers, cryptocurrency brokers, OTC orders of institutional clients, hedge funds and thousands of client-broker orders. This enables us to create the deepest liquidity pool in the industry.</p>
                    </div>
                    <!-- End of section title -->
                </div>
            </div>
        </div><!--/.container-->
    </section><!-- End of feature area -->

    <!-- interact user -->
    <section class="bg-2 pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-sm-7">
                    <!-- user interact image -->
                    <div class="user-interact-image">
                        <img src="/landing/assets/img/feature/defi.jpg"  alt="">
                    </div>
                    <!-- End of user interact image -->
                </div>
                <div class="col-lg-5 col-sm-5">
                    <!-- user ineract text -->
                    <div class="user-interact-inner">
                        <div class="interact-icon">
                            <img src="/landing/assets/img/icons/teamwork.svg" class="svg" alt="">
                        </div>
                        <h2>Community driven Project</h2>
                        <p>
                           The {{name}} team wanted to focus on incentivizing stakers to perform useful actions for the community by participating in a DAO. Between a transaction tax sent to the DAO fund, voting participation multiplier, and a referral program this is a truly community driven project
                        </p>
                        <a href="#" class="btn">Get Started</a>
                    </div>
                    <!--End of user ineract text -->
                </div>
            </div>
        </div>
    </section>
    <!-- interact user -->

    <!-- interact user -->
    <section class="pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-5">
                    <!-- user ineract text -->
                    <div class="user-interact-inner">
                        <div class="interact-icon">
                            <img src="/landing/assets/img/icons/solution1.svg" class="svg" alt="">
                        </div>
                        <h2>Secure Purchases</h2>
                        <p>
                            {{name}} solves the issue of Uniswap exit scamming by using standardized non-custodial presale smart contracts that lock liquidity.
                        </p>
                        <a href="#" class="btn">See Presale</a>
                    </div>
                    <!--End of user ineract text -->
                </div>
                <div class="col-lg-7 col-sm-7">
                    <!-- user interact image -->
                    <div class="user-interact-image type2">
                        <img src="/landing/assets/img/feature/secure.jpg"  alt="">
                    </div>
                    <!-- End of user interact image -->
                </div>
            </div>
        </div>
    </section>
    <!-- interact user -->

    <!-- download app -->
    <section id="airdrop" class="border-top pt-110 pb-150">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12">
                    <div class="download-app-inner text-center">
                        <h2 class="h1">
                            Participate in the<br>
                            WIFI Airdrop Pre-seed Phase
                        </h2>
                        <h3>WIFI, is a high value token within the staking arbitrage network of liquidity pools. In the coming days, we will issue new tokens that will also provide liquidity to the system's pools.</h3>

                        <form>
  <div class="row">
    <div class="col">
      <input type="email" v-model="email" class="form-control" placeholder="Your Email">
    </div>
    <div class="col">
      <input type="text" v-model="wallet" class="form-control" placeholder="Your ETH Wallet Address">
    </div>
  </div>
  <div class="row">
       <div class="col">
      <label class="sr-only" for="inlineFormInputGroup">Twitter</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" v-model="twitter" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
     <div class="col">
      <label class="sr-only" for="inlineFormInputGroup">Telegram</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" v-model="telegram" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
  </div>
</form>
                        <button @click="sendForm" class="btn">Join Airdrop</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End of download app -->
</main>

</template>

<script>
  export default {
    layout: 'landing',
    data(){
        return{
            name:'WinFinance',
            email: '',
            twitter: '',
            telegram: '',
            wallet:''
        }
    },
    methods: {

                async sendForm(){
           try{
            let data = new FormData();
            data.append('email', this.email);
            data.append('twitter', this.twitter);
            data.append('telegram', this.telegram);
            data.append('wallet', this.wallet);
            let result = await this.$axios.$post('https://script.google.com/macros/s/AKfycbxukw_bpvnnZ3phBKsCXaDA_S6jM6E5UvowCSuP9ApcwTf5sNI/exec', data);

                        this.$router.push("/success");
            }catch(err){
               console.log(err);
           }
        }
    }
   
  }
</script>