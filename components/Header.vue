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
              </li>
              <li class="pay-item" style="width: 50%">
                <input type="radio" class="pay-check" name="pay-option" id="pay-coinpay" />
                <label class="pay-check-label" for="pay-coinpay">
                  <img src="assets/images/walletconnect.png" alt="wallet connect" />
                </label>
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
    <div class="modal fade" id="pay-coingate" tabindex="-1">
      <div class="modal-dialog modal-dialog-md modal-dialog-centered">
        <div class="modal-content">
          <div class="popup-body">
            <h4 class="popup-title">Buy Tokens and Payment</h4>
            <p class="lead">
              To receiving
              <strong>18,750 TWZ</strong> tokens including
              <strong>bonus 1,540 TWZ</strong> require payment amount of
              <strong>1.0 ETH</strong>.
            </p>
            <p>
              You can pay via online payment geteway
              <strong>“Coingate”</strong>. It’s safe and secure.
            </p>
            <div class="pdb-2-5x pdt-1-5x">
              <input type="checkbox" class="input-checkbox input-checkbox-md" id="agree-term-2" />
              <label for="agree-term-2">
                I hereby agree to the
                <strong>token purchase aggrement &amp; token sale term</strong>.
              </label>
            </div>
            <button
              class="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#pay-thanks"
            >
              Place Order &amp; Process to Pay
              <em class="ti ti-arrow-right mgl-4-5x"></em>
            </button>
            <div class="gaps-3x"></div>
            <div class="note note-plane note-light mgb-1x">
              <em class="fas fa-info-circle"></em>
              <p>You will automatically redirect to Coingate website for payment</p>
            </div>
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