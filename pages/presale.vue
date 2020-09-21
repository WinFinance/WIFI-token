<template>
  <main>
    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="main-content col-lg-8">
            <div class="content-area card">
              <div class="card-innr">
                <div class="card-head">
                  <span class="card-sub-title text-primary font-mid">Buy {{name}} Token</span>
                  <!-- <h4 class="card-title">Amount of ETH to contribute</h4> -->
                </div>
                <div class="card-text">
                  <p>Input the ETH amount you want to contribute and measure the amount of the token you get. The calculator helps to convert the appropriate currency into {{name}} tokens.</p>
                </div>
                <div class="token-contribute">
                  <div class="token-calc">
                    <div class="token-pay-amount">
                      <input
                        id="token-base-amount"
                        class="input-bordered input-with-hint"
                        type="number"
                        v-model="ethMinimum"
                      />
                      <div class="token-pay-currency">
                        <a href="#" class="link ucap link-light toggle-tigger">ETH</a>
                      </div>
                    </div>
                    <div class="token-received">
                      <div class="token-eq-sign">=</div>
                      <div class="token-received-amount">
                        <h5 class="token-amount">{{wifiAmount}}</h5>
                        <div class="token-symbol">{{name}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="token-calc-note note note-plane">
                    <div v-show="ethMinimum < 0.42">
                      <em class="fas fa-times-circle text-danger"></em>
                      <span class="note-text text-light">0.42 ETH minimum contribution require.</span>
                    </div>
                    <div v-show="ethMinimum > 20">
                      <em class="fas fa-times-circle text-danger"></em>
                      <span class="note-text text-light">20 ETH maximum contribution Allowed.</span>
                    </div>
                  
                  </div>
                </div>
                <div class="token-overview-wrap">
                  <div class="token-overview">
                    <div class="row">
                      <div class="col-md-4 col-sm-6">
                        <div class="token-bonus token-bonus-sale">
                          <span class="token-overview-title">+ 20% Sale Bonus</span>
                          <span class="token-overview-value bonus-on-sale">{{saleBonus}}</span>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <div class="token-bonus token-bonus-amount">
                          <span class="token-overview-title">+ 30% Amount Bonus</span>
                          <span class="token-overview-value bonus-on-amount">{{amountBonus}}</span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="token-total">
                          <span class="token-overview-title font-bold">Total {{name}}</span>
                          <span
                            class="token-overview-value token-total-amount text-primary"
                          >{{totalWifi}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="note note-plane note-danger note-sm pdt-1x pl-0">
                    <p>Your contribution will be calculated at the moment your transaction is confirmed, based on the exchange rate.</p>
                  </div>
                </div>
                <div class="pay-buttons pt-0">
                  <div class="pay-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#get-pay-address"
                      class="btn btn-light-alt btn-between w-100"
                    >
                      Reveal Address for Payment
                      <em class="ti ti-wallet"></em>
                    </a>
                  </div>
                </div>
                <div class="pay-notes">
                  <div class="note note-plane note-light note-md font-italic">
                    <em class="fas fa-info-circle"></em>
                    <p>return (this.ethMinimum * this.wifiRate).toFixed(2);
                      {{name}} Tokens will appear in your account after payment is successfully made and approved by our team.
                      <br class="d-none d-lg-block" />
                      Please note that, {{name}} tokens will be distributed at the end of the {{fullName}} ICO Token Sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-area card">
              <div class="card-innr">
                <div class="card-head">
                  <h4 class="card-title">ICO Distribution, Rate &amp; Sales Info</h4>
                </div>
                <div class="card-text">
                  <p>
                    To become a part of {{fullName}} project, you can find all
                    details of ICO.
                    <br class="d-none d-sm-block" />You can contribute and
                    <a href="#">buy {{name}} tokens</a>.
                  </p>
                  <p>
                    You can get a quick response and chat with our team in
                    Telegram:
                    <a :href="telegram" target="_blank">Link Here</a>
                  </p>
                </div>
                <div class="gaps-3x"></div>
                <div class="card-head">
                  <h5 class="card-title card-title-md">ICO Schedule</h5>
                </div>
                <div class="schedule-item">
                  <div class="row">
                    <div class="col-xl-5 col-md-5 col-lg-6">
                      <div class="pdb-1x">
                        <h5 class="schedule-title">
                          <span>Private Sale</span>
                          <span class="badge badge-disabled ucap badge-xs">Upcoming</span>
                        </h5>
                        <span>Start at Sept 22, 2020 - 11:00 AM</span>
                        <span>End at Oct 15, 2020 - 11:59 PM</span>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md col-lg-6">
                      <div class="pdb-1x">
                        <h5 class="schedule-title">
                          <span>150 ETH</span>
                        </h5>
                        <span>Min purchase - 0.42 ETH</span>
                        <span>Tokens to be Distributed - 150,000</span>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-3 align-self-center text-xl-right">
                      <div class="pdb-1x">
                        <span class="schedule-bonus">20% Bonus</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="schedule-item">
                  <div class="row">
                    <div class="col-xl-5 col-md-5 col-lg-6">
                      <div class="pdb-1x">
                        <h5 class="schedule-title">
                          <span>Crowd Sale</span>
                          <span class="badge badge-disabled ucap badge-xs">Upcoming</span>
                        </h5>
                        <span>Start at Dec 02, 2020 - 11:00 AM</span>
                        <span>End at Jan 15, 2021 - 11:00 AM</span>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md col-lg-6">
                      <div class="pdb-1x">
                        <h5 class="schedule-title">
                          <span>250 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Tokens to be Distributed - 250,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="text-light mb-0">* Time zone set in (GMT +6) Dhaka, Bangladesh</h6>
              </div>
            </div>
            <div class="content-area card">
              <div class="card-innr">
                <div class="card-head">
                  <h5
                    class="card-title card-title-md"
                  >Invite your friends and family and receive free tokens</h5>
                </div>
                <div class="card-text">
                  <p>
                    Each holder will have a unique {{name}} referral link to share with
                    friends and family and receive a
                    <strong>bonus - 20% of the value of their contribution</strong>
                    . COntributors who sign-up with this link, will be added to your
                    referral program. The referral link may be used while {{name}}
                    token sale is running.
                  </p>
                </div>
                <div class="referral-form">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 font-bold">Referral URL</h5>
                    <a href="#" class="link link-primary link-ucap">See Your referral</a>
                  </div>
                  <div class="copy-wrap mgb-1-5x mgt-1-5x">
                    <span class="copy-feedback"></span>
                    <em class="fas fa-link"></em>
                    <input
                      type="text"
                      class="copy-address"
                      value="https://winfinance.io/contrib?ref=7d264f90653733592"
                      disabled
                    />
                    <button
                      class="copy-trigger copy-clipboard"
                      data-clipboard-text="https://winfinance.io/contrib?ref=7d264f90653733592"
                    >
                      <em class="ti ti-files"></em>
                    </button>
                  </div>
                  <!-- .copy-wrap -->
                </div>
                <ul class="share-links">
                  <li>Connect with us:</li>
                  <li>
                    <a href="https://t.me/winfinanceofficial">
                      <em class="fab fa-telegram"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/WifiDefi">
                      <em class="fab fa-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em class="fab fa-github"></em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- .col -->
          <div class="aside sidebar-right col-lg-4">
            <div class="token-statistics card card-token height-auto">
              <div class="card-innr">
                <div class="token-balance">
                  <div class="token-balance-text">
                    <span class="lead">
                      Verified Smart Contract
                    </span>
                  </div>
                </div>
                <div class="token-balance token-balance-s2">
                  <a href="https://etherscan.io/address/0x2De0a1f9EbeBBcb681Eda3b52E02B1A30AF3Fb93#code" class="card-sub-title">0x2De0a1f9EbeBBcb681Eda3b52E02B1A30AF3Fb93</a>
                </div>
              </div>
            </div>
            <div class="token-sales card">
              <div class="card-innr">
                <div class="card-head">
                  <h5 class="card-title card-title-sm">Pre-Sale Token Sales</h5>
                </div>
                <div class="token-rate-wrap row">
                  <div class="token-rate col-md-6 col-lg-12">
                    <span class="card-sub-title">{{fullName}} Token Price</span>
                    <h4 class="font-mid text-dark">
                      1 ETH =
                      <span>1,200 {{name}}</span>
                    </h4>
                  </div>
                </div>
                <div class="token-bonus-current">
                  <div class="fake-class">
                    <span class="card-sub-title">Current Bonus</span>
                    <div class="h3 mb-0">20 %</div>
                  </div>
                  <div class="token-bonus-date">
                    End at
                    <br />10 Jan, 2020
                  </div>
                </div>
              </div>
              <div class="sap"></div>
              <div class="card-innr">
                <div class="card-head">
                  <h5 class="card-title card-title-sm">Token Supply</h5>
                </div>
                <div class="token-rate-wrap row">
                  <div class="token-rate col-md-6 col-lg-12">
                    <span class="card-sub-title">Total Token Supply</span>
                    <h4 class="font-mid text-dark">
                      1 ETH =
                      <span>1,000,000 {{name}}</span>
                    </h4>
                  </div>
                </div> <div class="token-rate-wrap row">
                  <div class="token-rate col-md-6 col-lg-12">
                    <span class="card-sub-title">Available for Private Sale</span>
                    <h4 class="font-mid text-dark">
                      150,000 {{name}}
                      <span>1 ETH = 1,200 {{name}}</span>
                    </h4>
                  </div>
                </div> <div class="token-rate-wrap row">
                  <div class="token-rate col-md-6 col-lg-12">
                    <span class="card-sub-title">Available for Crowdsale</span>
                    <h4 class="font-mid text-dark">
                      250,000 {{name}}
                      <span>1 ETH = 1,000 {{name}}</span>
                    </h4>
                  </div>
                </div>
                <span class="card-sub-title mgb-0-5x">Sales END IN</span>
                <div class="countdown-clock" data-date="2019/02/05"></div>
              </div>
            </div>
          </div>
          <!-- .col -->
        </div>
        <!-- .container -->
      </div>
      <!-- .container -->
    </div>
    <!-- modal -->
    <div class="modal fade" id="get-pay-address" tabindex="-1">
      <div class="modal-dialog modal-dialog-md modal-dialog-centered">
        <div class="modal-content">
          <a href="#" class="modal-close" data-dismiss="modal" aria-label="Close">
            <em class="ti ti-close"></em>
          </a>
          <div class="popup-body">
            <h4 class="popup-title">Payment Address for Deposit</h4>
            <p>
              Please make deposit amount of
              <strong>{{ethMinimum}} ETH</strong> to our
              address and receive
              <strong>{{totalWifi}} {{name}}</strong> tokens including
              <strong>bonus {{amountBonus}} {{name}}</strong> once we receive payment.
            </p>
            <div class="gaps-1x"></div>
            <h6 class="font-bold">Pay {{ethMinimum}}ETH to the following Address</h6>
            <div class="copy-wrap mgb-0-5x">
              <span class="copy-feedback"> Copied to clipboard</span>
              <em class="fab fa-ethereum"></em>
              <input
                type="text"
                class="copy-address"
                :value="preSaleAddress"
                disabled
              />
              <button
                class="copy-trigger copy-clipboard"
                :data-clipboard-text="preSaleAddress"
                @click="copyData"
              >
                <em class="ti ti-files"></em>
              </button>
            </div>
        
            <!-- .pay-info-list -->
            <div class="pdb-2-5x pdt-1-5x">
              <input type="checkbox" class="input-checkbox input-checkbox-md" id="agree-term" />
              <label for="agree-term">
                I hereby agree to the
                <strong>token purchase agreement &amp; token sale term</strong>.
              </label>
            </div>
            <a :href="'https://metamask.app.link/send/'+this.preSaleAddress"
            target="_blank"
              class="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#pay-confirm"
            >
              Buy Tokens Now
              <em class="ti ti-arrow-right mgl-4-5x"></em>
            </a>
            <div class="gaps-3x"></div>
            <div class="note note-plane note-light mgb-1x">
              <em class="fas fa-info-circle"></em>
              <p>
                Do not make payment through exchange (Kraken, Bitfinex) or any Smart Contract Address. We recommend you
                use MyEtherWallet, MetaMask, Mist wallets etc.
              </p>
            </div>
            <div class="note note-plane note-danger">
              <em class="fas fa-info-circle"></em>
              <p>
                In case you send a different amount, number of {{name}} tokens will
                update accordingly.
              </p>
            </div>
          </div>
        </div>
        <!-- .modal-content -->
      </div>
      <!-- .modal-dialog -->
    </div>
    <!-- Modal End -->
  </main>
</template>

<script>

export default {
  data() {
    return {
      fullName: "Winfinance",
      name: "WIFI",
      wifiRate: 1200,
      ethMinimum: 0.42,
      preSaleAddress: '0xbb2Ffe23258d5431a531e15d435C5497a77a91bb',
      telegram: 'https://t.me/winfinanceofficial',
      twitter:'https://twitter.com/WifiDefi',
      github:'',
    };
  },
  computed: {
    wifiAmount() {
     return (1200 * this.ethMinimum);
    },
    saleBonus() {
      return (this.wifiAmount * 0.2).toFixed(2);
    },
    amountBonus() {
      return (this.wifiAmount * 0.3).toFixed(2);
    },
    totalWifi() {
      return (
        parseInt(this.saleBonus) +
        parseInt(this.amountBonus) +
        parseInt(this.wifiAmount)
      );
    },
  },
  methods: {
  copyData() {
    //btw writeText() returns a promise so you could utilize that somehow if you want
    navigator.clipboard.writeText(this.preSaleAddress);
    
  }
}
};
</script>