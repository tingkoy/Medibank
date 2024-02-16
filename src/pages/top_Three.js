// page assets
import media from '../assets/img/3.png';
import qr from '../assets/img/3_qr_mtdp.png';
import pointArrow from '../assets/img/pointArrow.svg'

export default function topThree() {
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
            Medibank Type 2 Diabetes Program.
          </div>
        </div>
        <div class="cont_med_cntx">
          <div class="cmc_media_wrap">
            <img class="cmc_media_src" src=`+ media + ` alt="">
          </div>
          <div class="cmc_cntxt_wrap">
            <div class="cmc_cntxt_desc">
              With over 300 new cases diagnosed daily, diabetes is one of the biggest challenges facing our healthcare system. This program aims to help eligible members* better manage their type 2 diabetes through diet and weight management.
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
              *Available to eligible members with hospital cover at no extra cost.
            </div>
          </div>
        </div>

      </div>
  `)
}