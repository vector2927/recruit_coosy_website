<div class="footerPathNav">
  <ul class="footerPathNav__list">
    <?php
      if(isset($footer_params)):
    ?>
      <li class="footerPathNav__list__item"><a href="/"><span class="stylePc">ホーム</span><span class="styleSp"><img src="../assets/img/common/icon_home.png" width="15" alt=""></span></a></li>
      <?php
        foreach ($footer_params as $key => $value) {
          if(isset($value['url']) && !empty($value['url'])){
      ?>
          <li class="footerPathNav__list__item"><a href="<?php echo $value['url']; ?>"><?php echo $value['name']; ?></a></li>
        <?php
          }else{
        ?>
          <li class="footerPathNav__list__item"><?php echo $value['name']; ?></li>
    <?php
        }
      }
      endif;
    ?>
  </ul>
  <div class="footerPathNav__pageTop" id="pagetop">
    <div class="footerPathNav__pageTop__fixed">
      <a href="#" class="link"></a>
    </div>
  </div>
</div>
<footer class="footer">
  <div class="footer__inner">
    <ul class="footer__upperNav">
      <li class="footer__upperNav__item styleSp">
        <a href="/">TOP</a>
      </li>
      <li class="footer__upperNav__item">
        <div class="label jq-nextToggleSlide">SERVICE</div>
        <ul class="list">
          <li class="list__item"><a href="/service/">サービスTOP</a></li>
          <li class="list__item"><a href="/service/planning/">企画戦略</a></li>
          <li class="list__item"><a href="/service/service_design/">Webデザイン</a></li>
          <li class="list__item"><a href="/service/system/">システム開発</a></li>
          <li class="list__item"><a href="/servicezw/webmarketing/">Webマーケティング</a></li>
          <li class="list__item"><a href="/service/maintenance/">運用・保守</a></li>
        </ul>
      </li>
      <li class="footer__upperNav__item">
        <div class="label jq-nextToggleSlide">WORK</div>
        <ul class="list">
          <li class="list__item"><a href="/work/">制作実績</a></li>
          <li class="list__item"><a href="/work/web-service/">Webサービス</a></li>
          <li class="list__item"><a href="/work/ec/">ECサイト</a></li>
          <li class="list__item"><a href="/work/corporate/">コーポレート</a></li>
          <li class="list__item"><a href="/work/recruit/">リクルート</a></li>
          <li class="list__item"><a href="/work/promotion/">プロモーション</a></li>
          <li class="list__item"><a href="/work/applicaton/">アプリ</a></li>
        </ul>
      </li>
      <li class="footer__upperNav__item">
        <div class="label jq-nextToggleSlide">RECRUIT</div>
        <ul class="list">
          <li class="list__item"><a href="/recruit/">リクルートTOP</a></li>
          <li class="list__item"><a href="/recruit/new_graduates/">新卒採用</a></li>
          <li class="list__item"><a href="/recruit/mid-career/">中途採用</a></li>
          <li class="list__item"><a href="/recruit/iwate/">岩手採用</a></li>
          <li class="list__item"><a href="/recruit/faq/">FAQ</a></li>
        </ul>
      </li>
      <li class="footer__upperNav__item">
        <div class="label jq-nextToggleSlide">ABOUT</div>
        <ul class="list">
          <li class="list__item"><a href="/about/">クーシーについて</a></li>
          <li class="list__item"><a href="/about/profile/">企業情報</a></li>
          <li class="list__item"><a href="/about/tokyo/">東京本社</a></li>
          <li class="list__item"><a href="/about/iwate/">クーシーラボ岩手</a></li>
          <li class="list__item"><a href="/news/">ニュース</a></li>
          <li class="list__item"><a href="/contact/">お問い合わせ</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="footer__sns">
    <p class="footer__sns__title">COOSY SNS</p>
    <ul class="footer__sns__list">
      <li class="item"><a href="https://www.facebook.com/CoosyPage/" target="_blank"><img src="../assets/img/common/icon_facebook.png" alt="facebook"></a></li>
      <li class="item"><a href="https://twitter.com/coosyinc" target="_blank"><img src="../assets/img/common/icon_twitter.png" alt="twitter"></a></li>
    </ul>
  </div>
  <div class="footer__lower">
    <ul class="footer__lower__list">
      <li class="item"><a href="/privacypolicy/">Privacy policy</a></li>
      <li class="item"><a href="/sitepolicy/">Site policy</a></li>
      <li class="item"><a href="/securitypolicy/">Security Policy</a></li>
    </ul>
    <small class="footer__lower__copyRight">&copy; COOSY All Rights Reserved.</small>
  </div>
</footer>
