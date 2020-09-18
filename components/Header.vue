<template>
  <div class="topbar-wrap">
    <div class="topbar is-sticky">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <ul class="topbar-nav d-lg-none">
            <li class="topbar-nav-item relative">
              <a class="toggle-nav" href="#">
                <div class="toggle-icon">
                  <span class="toggle-line"></span>
                  <span class="toggle-line"></span>
                  <span class="toggle-line"></span>
                  <span class="toggle-line"></span>
                </div>
              </a>
            </li>
            <!-- .topbar-nav-item -->
          </ul>
          <!-- .topbar-nav -->
          <nuxt-link class="topbar-logo" to="/">
            <img src="assets/images/210 x 47.png" srcset="assets/images/210 x 47.png 2x" alt="logo" />
          </nuxt-link>
          <ul class="topbar-nav">
            <li class="topbar-nav-item relative">
              <div class>
                <span class="schedule-bonus">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#pay-online"
                    style="color: #ffffff;"
                  >Connect</a>
                </span>
              </div>
            </li>
            <!-- .topbar-nav-item -->
          </ul>
          <!-- .topbar-nav -->
        </div>
      </div>
      <!-- .container -->
    </div>
    <!-- .topbar -->
    <div class="navbar">
      <div class="container">
        <div class="navbar-innr">
          <ul class="navbar-menu">
            <li>
              <nuxt-link to="/transactions">
                <em class="ikon ikon-transactions"></em> Transactions
              </nuxt-link>
            </li>
            <li>
              <a href="#referral">
                <em class="ikon ikon-user"></em> Referrals
              </a>
            </li>
            <li>
              <a href="#">
                <em class="ikon ikon-exchange"></em> Community
              </a>
            </li>
            <li>
              <a href="#">
                <em class="ikon ikon-exchange"></em> FAQ
              </a>
            </li>
          </ul>
        </div>
        <!-- .navbar-innr -->
      </div>
      <!-- .container -->
    </div>
    <!-- .navbar -->

    <!-- Connect Modal -->
    <div class="modal fade" id="pay-online" tabindex="-1">
      <div class="modal-dialog modal-dialog-md modal-dialog-centered">
        <div class="modal-content pb-0">
          <div class="popup-body">
            <h4 class="popup-title">Connect to Secure Wallet</h4>
            <h5 class="mgt-1-5x font-mid">Select Wallet:</h5>
            <ul class="pay-list guttar-20px">
              <li class="pay-item">
                <input type="radio" class="pay-check" name="pay-option" id="pay-coin" />
                <label class="pay-check-label" for="pay-coin">
                  <img src="assets/images/Metamask.png" alt="metamask" />
                </label>
                  <button class="btn btn-primary mb-5">Add Wallet</button>
              </li>
              <li class="pay-item">
                <input type="radio" class="pay-check" name="pay-option" id="pay-coinpay" />
                <label class="pay-check-label" for="pay-coinpay">
                  <img src="assets/images/walletconnect.svg" alt="wallet connect" />
                </label>
                <button class="btn btn-primary">Add Wallet</button>
              </li>
            </ul>
            <div class="gaps-2x"></div>
            <div class="gaps-1x d-none d-sm-block"></div>
          </div>
        </div>
        <!-- .modal-content -->
      </div>
      <!-- .modal-dialog -->
    </div>
    <!-- Modal End -->
  </div>
  <!-- .topbar-wrap -->
</template>