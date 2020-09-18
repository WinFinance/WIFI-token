<template>
  <main>
    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="main-content col-lg-8">
            <div class="content-area card">
              <div class="card-innr">
                <div class="card-head">
                  <span class="card-sub-title text-primary font-mid">Buy Token</span>
                  <h4 class="card-title">Amount of contribute</h4>
                </div>
                <div class="card-text">
                  <p>Enter your amount, you would like to contribute and calculate the amount of token you will received. The calculator helps to convert required currency to tokens.</p>
                </div>
                <div class="token-contribute">
                  <div class="token-calc">
                    <div class="token-pay-amount">
                      <input
                        id="token-base-amount"
                        class="input-bordered input-with-hint"
                        type="text"
                        value="1"
                      />
                      <div class="token-pay-currency">
                        <a href="#" class="link ucap link-light toggle-tigger toggle-caret">ETH</a>
                        <div class="toggle-class dropdown-content">
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">BTC</a>
                            </li>
                            <li>
                              <a href="#">LTC</a>
                            </li>
                            <li>
                              <a href="#">USD</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="token-received">
                      <div class="token-eq-sign">=</div>
                      <div class="token-received-amount">
                        <h5 class="token-amount">123,500.84</h5>
                        <div class="token-symbol">TWZ</div>
                      </div>
                    </div>
                  </div>
                  <div class="token-calc-note note note-plane">
                    <em class="fas fa-times-circle text-danger"></em>
                    <span class="note-text text-light">0.35 ETH minimum contribution require.</span>
                  </div>
                </div>
                <div class="token-overview-wrap">
                  <div class="token-overview">
                    <div class="row">
                      <div class="col-md-4 col-sm-6">
                        <div class="token-bonus token-bonus-sale">
                          <span class="token-overview-title">+ 20% Sale Bonus</span>
                          <span class="token-overview-value bonus-on-sale">15,000.00</span>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <div class="token-bonus token-bonus-amount">
                          <span class="token-overview-title">+ 30% Amount Bonus</span>
                          <span class="token-overview-value bonus-on-amount">5,000.00</span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="token-total">
                          <span class="token-overview-title font-bold">Total TWZ</span>
                          <span
                            class="token-overview-value token-total-amount text-primary"
                          >1,823,500.84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="note note-plane note-danger note-sm pdt-1x pl-0">
                    <p>Your Contribution will be calculated based on exchange rate at the moment your transaction is confirm.</p>
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
                      Get Address for Payment
                      <em class="ti ti-wallet"></em>
                    </a>
                  </div>
                </div>
                <div class="pay-notes">
                  <div class="note note-plane note-light note-md font-italic">
                    <em class="fas fa-info-circle"></em>
                    <p>
                      Tokens will appear in your account after payment successfully made and approved by our team.
                      <br class="d-none d-lg-block" />Please note that, TWZ tokens will distributed end of ICO Token Sales.
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
                    To become a part of TokenWiz project, you can found all
                    details of ICO.
                    <br class="d-none d-sm-block" />You can contribute and
                    <a href="#">buy TWZ tokens</a>.
                  </p>
                  <p>
                    You can get a quick response and chat with our team in
                    Telegram:
                    <a href="#">htts://t.me/tokenwiz</a>
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
                          <span>Pre-Sale ICO</span>
                          <span class="badge badge-success ucap badge-xs">Running</span>
                        </h5>
                        <span>Start at Dec 02, 2018 - 11:00 AM</span>
                        <span>End at Jan 15, 2019 - 11:00 AM</span>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md col-lg-6">
                      <div class="pdb-1x">
                        <h5 class="schedule-title">
                          <span>0.00080 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Token Distribute - 250,000</span>
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
                          <span>Main ICO Sale</span>
                          <span class="badge badge-disabled ucap badge-xs">Upcomming</span>
                        </h5>
                        <span>Start at Dec 02, 2018 - 11:00 AM</span>
                        <span>End at Jan 15, 2019 - 11:00 AM</span>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md col-lg-6">
                      <div class="pdb-1x">
                        <h5 class="schedule-title">
                          <span>0.00080 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Token Distribute - 250,000</span>
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
                    Each member have a unique TWZ referral link to share with
                    friends and family and receive a
                    <strong>bonus - 15% of the value of their contribution</strong>. If any one sign-up with this link, will be added to your
                    referral program. The referral link may be used during a
                    token sales running.
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
                      value="https://demo.themenio.com/tokenwiz?ref=7d264f90653733592"
                      disabled
                    />
                    <button
                      class="copy-trigger copy-clipboard"
                      data-clipboard-text="https://demo.themenio.com/tokenwiz?ref=7d264f90653733592"
                    >
                      <em class="ti ti-files"></em>
                    </button>
                  </div>
                  <!-- .copy-wrap -->
                </div>
                <ul class="share-links">
                  <li>Share with :</li>
                  <li>
                    <a href="#">
                      <em class="fab fa-google-plus-g"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em class="fab fa-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em class="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em class="fab fa-linkedin-in"></em>
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
                    <h6 class="card-sub-title">Tokens Balance</h6>
                    <span class="lead">
                      120,000,000
                      <span>TWZ</span>
                    </span>
                  </div>
                </div>
                <div class="token-balance token-balance-s2">
                  <h6 class="card-sub-title">Your Contribution</h6>
                  <ul class="token-balance-list">
                    <li class="token-balance-sub">
                      <span class="lead">2.646</span>
                      <span class="sub">ETH</span>
                    </li>
                    <li class="token-balance-sub">
                      <span class="lead">1.265</span>
                      <span class="sub">BTC</span>
                    </li>
                    <li class="token-balance-sub">
                      <span class="lead">6.506</span>
                      <span class="sub">LTC</span>
                    </li>
                  </ul>
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
                    <span class="card-sub-title">TWZ Token Price</span>
                    <h4 class="font-mid text-dark">
                      1 ETH =
                      <span>12500 TWZ</span>
                    </h4>
                  </div>
                  <div class="token-rate col-md-6 col-lg-12">
                    <span class="card-sub-title">Exchange Rate</span>
                    <span>1 ETH = 196.98 USD = 0.032 BTC</span>
                  </div>
                </div>
                <div class="token-bonus-current">
                  <div class="fake-class">
                    <span class="card-sub-title">Current Bonus</span>
                    <div class="h3 mb-0">20 %</div>
                  </div>
                  <div class="token-bonus-date">
                    End at
                    <br />10 Jan, 2019
                  </div>
                </div>
              </div>
              <div class="sap"></div>
              <div class="card-innr">
                <div class="card-head">
                  <h5 class="card-title card-title-sm">Token Sales Progress</h5>
                </div>
                <ul class="progress-info">
                  <li>
                    <span>Raised</span> 2,758 TWZ
                  </li>
                  <li class="text-right">
                    <span>TOTAL</span> 1,500,000 TWZ
                  </li>
                </ul>
                <div class="progress-bar">
                  <div class="progress-hcap" data-percent="83">
                    <div>
                      Hard cap
                      <span>1,400,000</span>
                    </div>
                  </div>
                  <div class="progress-scap" data-percent="24">
                    <div>
                      Soft cap
                      <span>40,000</span>
                    </div>
                  </div>
                  <div class="progress-percent" data-percent="28"></div>
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
          <a
            href="#"
            class="modal-close"
            data-dismiss="modal"
            aria-label="Close"
            ><em class="ti ti-close"></em
          ></a>
          <div class="popup-body">
            <h4 class="popup-title">Payment Address for Deposit</h4>
            <p>
              Please make deposit amount of <strong>1.0 ETH</strong> to our
              address and receive <strong>18,750 TWZ</strong> tokens including
              <strong>bonus 1,540 TWZ</strong> once we recevied payment.
            </p>
            <div class="gaps-1x"></div>
            <h6 class="font-bold">Payment to the following Address</h6>
            <div class="copy-wrap mgb-0-5x">
              <span class="copy-feedback"></span
              ><em class="fab fa-ethereum"></em
              ><input
                type="text"
                class="copy-address"
                value="0x4156d3342d5c385a87d264f90653733592000581"
                disabled=""
              /><button
                class="copy-trigger copy-clipboard"
                data-clipboard-text="0x4156d3342d5c385a87d264f90653733592000581"
              >
                <em class="ti ti-files"></em>
              </button>
            </div>
            <!-- .copy-wrap -->
            <ul class="pay-info-list row">
              <li class="col-sm-6"><span>SET GAS LIMIT:</span> 120 000</li>
              <li class="col-sm-6"><span>SET GAS PRICE:</span> 95 Gwei</li>
            </ul>
            <!-- .pay-info-list -->
            <div class="pdb-2-5x pdt-1-5x">
              <input
                type="checkbox"
                class="input-checkbox input-checkbox-md"
                id="agree-term"
              /><label for="agree-term"
                >I hereby agree to the
                <strong>token purchase aggrement &amp; token sale term</strong
                >.</label
              >
            </div>
            <button
              class="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#pay-confirm"
            >
              Buy Tokens Now <em class="ti ti-arrow-right mgl-4-5x"></em>
            </button>
            <div class="gaps-3x"></div>
            <div class="note note-plane note-light mgb-1x">
              <em class="fas fa-info-circle"></em>
              <p>
                Do not make payment through exchange (Kraken, Bitfinex). You can
                use MayEtherWallet, MetaMask, Mist wallets etc.
              </p>
            </div>
            <div class="note note-plane note-danger">
              <em class="fas fa-info-circle"></em>
              <p>
                In case you send a different amount, number of TWZ tokens will
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
export default {};
</script>