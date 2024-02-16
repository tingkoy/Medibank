// page assets
import media from '../assets/img/6.png';
import qr from '../assets/img/6_qr_lbr.png';
import pointArrow from '../assets/img/pointArrow.svg';

export default function botThree() {

  return (`
      <div class="cont">

        <div class="head">
          <div class="btn_back">

            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
            <svg width="18%" height="18%" viewBox="0 0 85 79" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5;">
              <g transform="matrix(1,0,0,1,-135.069,-167.664)">
                <g transform="matrix(1,0,0,1,0,-94.6022)">
                  <path class="svgBackStrk1" d="M142.28,301.296L215.363,301.296" style="fill:none;stroke:white;stroke-width:8px;" />
                </g>
                <path class="svgBackStrk2"  d="M177.376,174.875L142.28,206.694L177.376,238.512"
                  style="fill:none;stroke:white;stroke-width:8px;stroke-linejoin:miter;" />
              </g>
            </svg>
            <div style="padding-left: 20px;">back</div>
            </div>
          <div class="cont_title">
            Live Better rewards.
          </div>
        </div>
        <div class="cont_med_cntx">
          <div class="cmc_media_wrap">
            <img class="cmc_media_src" src=`+ media + ` alt="">
          </div>
          <div class="cmc_cntxt_wrap">
            <div class="cmc_cntxt_desc">
              We think you should be rewarded for looking after your health, however you enjoy doing that. That’s why eligible Medibank members* with hospital or extras cover can now earn rewards with our Live Better rewards program.
            </div>
            <div class="cmc_cntxt_scan_wrap">
              <div class="cmc_cntxt_qr">
                <img class="cmc_media_src" src=`+ qr + ` alt="">
              </div>
                <div class="cmc_cntxt_msg">
                  <img src=`+ pointArrow + ` alt=""/>
                  <span>Scan the QR code to find out more.</span>
                </div>
            </div>
            <div class="cmc_disclaimer">
              * Must register for Medibank Live Better rewards. Full program T&Cs apply, including to register, earn and redeem rewards, search Medibank Live Better rewards.
            </div>
          </div>
        </div>

      </div>
  `)
}