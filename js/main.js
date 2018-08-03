new Vue({
  el: '#v-character',
  data: {
    item: {},
    items: {
      neko: {
        url: "images/neko.png",
        subname: "",
        name: "にゃん太郎さん",
        about: "にゃん太郎さんは村のみんなととても仲良しで、誰とでも打ち解けられる性格。冒険好きで、いつもパワフルに活動している。基本真面目で優しい。恋愛に対して鈍感な部分がある。ひよこさんと気が合い、いつも一緒にいる。ひよこさんの病気のことは知らない。",
        skill: "畑で野菜作り。運動",
        hobby: "花畑でお花のアートを作ること",
        word: "みんな違ってみんな良い！"
      },
      father: {
        url: "images/father.png",
        subname: "にゃん太郎さんの",
        name: "お父さん",
        about: "にゃん太郎さんのお父さん。村の村長で、いつもみんなの相談を受けながら、より良い村にしようと様々な事に挑戦し続けている。赤いブローチは村長の証。",
        skill: "釣り・筋トレ",
        hobby: "うさみちゃんのパパと村の事を議論する事。",
        word: "行動するのみ！",
        for: "好きな事をやるんだお父さんは見守っているよ。"
      },
      mother: {
        url: "images/mother.png",
        subname: "にゃん太郎さんの",
        name: "お母さん",
        about: "にゃん太郎のお母さん。家事が好きで、気配りやさん。いつもにゃん太郎のことを思っている心配性。穏やかそうに言えて、実は怒ると・・・。お父さんと仲良しで二人で旅行に行くほど仲睦まじい。平和主義。",
        skill: "家事全般・筋トレ",
        hobby: "いろんなデザインのエプロン集め",
        word: "何もないが一番いい",
        for: "すくすくと育ってくださいね。暖かいご飯用意していつでも待ってるわ。"
      },
      chinchira: {
        url: "images/chinchira.png",
        subname: "",
        name: "チンチラちゃん",
        about: "にゃん太郎のお友達。穏やかで太陽のような性格。野原でいつもぼーっとしている。うさみちゃんとは友達歴が一番長く、よく相談に乗る優しさも兼ね備えている。いつも眠たそう。辛いものが大好き。",
        skill: "ぼーっとする事。",
        hobby: "水泳・少林寺拳法",
        word: "平和にいこう",
        for: "にゃん太郎くん！またみんなでピクニックしようね！"
      },
      kumashi: {
        url: "images/kumashi.png",
        name: "クーマ氏",
        subname: "",
        about: "にゃん太郎のお友達。必衰のナルシストながら、女子からの人気も熱いまさにカリスマ。スポーツ万能、勉強もできるが、虫とグリンピースが苦手。キザなセリフで男の子達をもメロメロにしてしまう凄腕を持っている。両親はいなく、一人ぐらし。",
        skill: "君のハートを射止める事♡",
        hobby: "サボテンを育てる。定期的に趣味が変わる。",
        word: "俺を止めるな",
        for: "おう！にゃん太郎くん！一緒に星を見て、星座のストーリーを語ろう！"
      },
      hiyoko: {
        url: "images/hiyoko.png",
        subname: "",
        name: "ひよこさん",
        about: "にゃん太郎の親友。６匹のひよこの兄弟の中で２番目に上のお姉さん。にゃん太郎さんがなぜこんなに一緒にいてくれるかは謎だなぁと思いながら楽しいから基本的に一緒にいようと思って過ごしている。重い病気を患っていて、最終回で死んでしまう。",
        skill: "存在を消す事。",
        hobby: "ひよこたちのおもり。",
        word: "今が幸せ",
        for: "いつも一緒にいてくれてありがとう。これからもよろしくね。"
      },
      usami: {
        url: "images/usami.png",
        subname: "にゃん太郎の事が好きな",
        name: "うさみちゃん",
        about: "にゃん太郎のお友達の一人。にゃん太郎さんに恋心を抱く乙女心満載なうさぎ。お父さんによく恋愛話を相談する。お母さんは子供の時からいない父子家庭。頭はすごくいいが、恋愛は苦手。不器用ながらも、日々全力で頑張る子。",
        skill: "妄想・おかし作り・お掃除",
        hobby: "恋話・ピアノで感性を生かし曲を作る",
        word: "好きこそ物の上手なれ",
        for: "え？！い、今？！・・・にゃん太郎さん！こ、これからもこれからもよろしくお願いします///"
      },
      usami_father: {
        url: "images/usami_father.png",
        subname: "うさみちゃんの",
        name: "お父さん",
        about: "うさみちゃんのお父さん。副村長で、にゃん太郎さんのお父さんと協力して、より良い村にしようと、案をたくさん出す村一番のエリートうさぎ。赤い蝶ネクタイは副村長の証。",
        skill: "妄想・ゴルフ・釣り",
        hobby: "うさみちゃんの恋愛相談にのる事。",
        word: "適材適所",
        for: "うさみをよろしく頼むよ！"
      },
      kerorin: {
        url: "images/kerorin.png",
        subname: "",
        name: "ケロリンくん",
        about: "にゃん太郎のお友達。ひょうきん者で、いつもにゃん太郎にちょっかいを出してくる。遊ぶ事が大好きで、いろんな遊びを提案する。みんなを喜ばせる事が好き。大勢でパーティーなどがあると池から身を乗り出してケロケロ叫び出す。",
        skill: "水泳・ジャンプ",
        hobby: "魚の上に乗ろうと、日々訓練している。",
        word: "海は俺のものだ",
        for: "ようようよう！また冒険しようぜ！俺たちの友情は不滅！"
      },
      risuto: {
        url: "images/risuto.png",
        subname: "",
        name: "リストくん",
        about: "ひよこちゃんのお友達。おっちょこちょいな性格で、野原や木の上でいつもぼーっとしている。ひよこさんとは友達歴が一番長く、よく相談に乗っている仙人のような名言を突発的に出す新手のリス。どんぐりをいつもほっぺに貯めていて、食べるのを忘れている。",
        skill: "ぼーっとする事。",
        hobby: "荒波をくぐり抜けたリスによる、人生相談",
        word: "睡眠とどんぐり",
        for: "やあやあ！これからもエンジョイしよう！！"
      }
    }
  },
  created() {
    this.item = this['items']['neko']
  },
  methods: {
    changechar: function(name){
      this.item = this['items'][name]
    }
  }
})

$(window).on('load resize',function(){
  
  $('.scroll-story').on('click',function(){
    let targetY = $('.story').offset().top
    $('html, body').stop().animate({scrollTop: targetY}, 500, 'swing')
    return false
  })

  $('.scroll-profile').on('click',function(){
    let targetY = $('.character').offset().top
    $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing')
    return false
  })

  $('.scroll-goods').on('click',function(){
    let targetY = $('.goods').offset().top
    $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing')
    return false
  })
})

$('.characret-slide').slick({
  centerMode: true,
  centerPadding: '12px',
  slidesToShow: 10,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '24px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '24px',
        slidesToShow: 1
      }
    }
  ]
});