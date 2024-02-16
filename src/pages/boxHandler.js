// svg
import box1 from '../assets/img/1_box_bkbm.svg'
import box2 from '../assets/img/2_box_bhrt.svg'
import box3 from '../assets/img/3_box_mtdp.svg'
import box4 from '../assets/img/4_box_bd.svg'
import box5 from '../assets/img/5_box_jh.svg'
import box6 from '../assets/img/6_box_lbr.svg'

export default function boxHandler() {
  return (`
    <div class="btn_a top_one">
      <img class="boxImg" src=`+ box1 + `>
      <div class="captionHolder">
        <div class="caption">
          Better Knee, Better Me
        </div>
      </div>
    </div>
    <div class="btn_a top_two">
      <img class="boxImg" src=`+ box2 + `>
      <div class="captionHolder">
        <div class="caption">
          Better Hip research trial
        </div>
      </div>
    </div>
    <div class="btn_a top_three">
      <img class="boxImg" src=`+ box3 + `>
      <div class="captionHolder">
        <div class="caption">
          Medibank Type 2 Diabetes Program
        </div>
      </div>
    </div>
    <div class="btn_a bot_one">
      <img class="boxImg" src=`+ box4 + `>
      <div class="captionHolder">
        <div class="caption">
          Blood donation
        </div>
      </div>
    </div>
    <div class="btn_a bot_two">
      <img class="boxImg" src=`+ box5 + `>
      <div class="captionHolder">
        <div class="caption">
          Joint health
        </div>
      </div>
    </div>
    <div class="btn_a bot_three">
      <img class="boxImg" src=`+ box6 + `>
      <div class="captionHolder">
        <div class="caption">
          Live Better rewards
        </div>
      </div>
    </div>
  `)

}