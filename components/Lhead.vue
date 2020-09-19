<template>
       <!-- Main header -->
    <header class="header">
        <!-- Start Header Navbar-->
        <div class="main-header">
            <div class="main-menu-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-3 col-md-4 col-6">
                            <!-- Logo -->
                            <div class="">
                                <nuxt-link to="/">
                                    <img src="/assets/images/420 x 94.png" data-rjs="2" :alt="name">
                                </nuxt-link>
                            </div>
                            <!-- End of Logo -->
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-4 col-6">
                            
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-5">
                            <div class="urgent-call text-right">
                               <nuxt-link to="#" class="btn">Join Airdrop</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Navbar-->
    </header>
    <!-- End of Main header -->
</template>
<script>
export default {
    data(){
        return{
            name: 'WinFinance'
        }
    }
}
</script>