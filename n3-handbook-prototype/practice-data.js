const PRACTICE_DATA = {
  1: {
    title: "第1単元 練習",
    pages: [
      {
        page: 24, title: "パートI 問題1", type: "choice",
        questions: [
          { id:"24-1", pattern:"〜上(に)", q:"彼は背が高い__、ハンサムだ。", qHtml:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>背<rt>せ</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>__、ハンサムだ。", options:["うえに","うえで","うえは","うえも"], answer:0, explain:"「〜うえに」表示递进：又高又帅。" },
          { id:"24-2", pattern:"〜上で", q:"面接を__上で、採用するかどうかを決める。", qHtml:"<ruby>面接<rt>めんせつ</rt></ruby>を__<ruby>上<rt>うえ</rt></ruby>で、<ruby>採用<rt>さいよう</rt></ruby>するかどうかを<ruby>決め<rt>きめ</rt></ruby>る。", options:["する","した","している","していた"], answer:1, explain:"「〜た上で」完成后续动作。" },
          { id:"24-3", pattern:"〜うちに", q:"休み__うちに、部屋を片付けましょう。", qHtml:"<ruby>休み<rt>やすみ</rt></ruby>__うちに、<ruby>部屋<rt>へや</rt></ruby>を<ruby>片付<rt>かたづ</rt></ruby>けましょう。", options:["の","が","を","に"], answer:0, explain:"「〜うちに」趁…期间，固定「休みのうちに」。" },
          { id:"24-4", pattern:"〜にくい/やすい", q:"新聞の活字が小さいので、読み__。", qHtml:"<ruby>新聞<rt>しんぶん</rt></ruby>の<ruby>活字<rt>かつじ</rt></ruby>が<ruby>小さい<rt>ちいさい</rt></ruby>ので、<ruby>読み<rt>よみ</rt></ruby>__。", options:["にくい","やすい","がたい","ぎみだ"], answer:0, explain:"小字→难以读「読みにくい」。" },
          { id:"24-5", pattern:"〜以上は", q:"皆の前で約束した__、守らなければならない。", qHtml:"<ruby>皆<rt>みんな</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>約束<rt>やくそく</rt></ruby>した__、<ruby>守ら<rt>まもら</rt></ruby>なければならない。", options:["以上","以上は","以上で","以上に"], answer:1, explain:"「〜以上は」既然…就…。" },
          { id:"24-6", pattern:"〜一方で", q:"田中先生は学生を叱る__、ほめることも忘れない。", qHtml:"<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>を<ruby>叱る<rt>しかる</rt></ruby>__、ほめることも<ruby>忘れ<rt>わすれ</rt></ruby>ない。", options:["一方","一方で","一方だ","一方に"], answer:1, explain:"「〜一方で」一方面…另一方面。" },
          { id:"24-7", pattern:"〜一方だ", q:"ここ数年、海水の温度が__一方だ。", qHtml:"ここ<ruby>数年<rt>すうねん</rt></ruby>、<ruby>海水<rt>かいすい</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>が__<ruby>一方<rt>いっぽう</rt></ruby>だ。", options:["高くなる","高くする","高い","高かった"], answer:0, explain:"「〜一方だ」客观趋势「高くなる一方だ」。" },
          { id:"24-8", pattern:"〜間/間に", q:"友だちと公園を散歩している__、雨が降り出してきた。", qHtml:"<ruby>友だち<rt>ともだち</rt></ruby>と<ruby>公園<rt>こうえん</rt></ruby>を<ruby>散歩<rt>さんぽ</rt></ruby>している__、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降り出して<rt>ふりだして</rt></ruby>きた。", options:["あいだ","あいだに","あいだで","あいだは"], answer:1, explain:"持续中瞬间发生用「あいだに」。" },
          { id:"24-9", pattern:"〜上で", q:"二人は仕事の__、よきライバルだ。", qHtml:"<ruby>二人<rt>ふたり</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>の__、よきライバルだ。", options:["うえで","うえの","あいだで","あいだに"], answer:0, explain:"「仕事のうえで」工作上。" },
          { id:"24-10", pattern:"〜おかげで", q:"皆の__、無事に頂上までたどりついた。", qHtml:"<ruby>皆<rt>みんな</rt></ruby>の__、<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>頂上<rt>ちょうじょう</rt></ruby>までたどりついた。", options:["おかげで","おかげだ","せいで","せいだ"], answer:0, explain:"「〜おかげで」多亏…（积极）。" }
        ]
      },
      {
        page: 25, title: "パートI 問題2", type: "bank",
        bank: ["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"],
        questions: [
          { id:"25-11", q:"せっかくこの会社に入った__、一生懸命頑張らなければならない。", qHtml:"せっかくこの<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>入った<rt>はいった</rt></ruby>__、<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>頑張ら<rt>がんばら</rt></ruby>なければならない。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:2, explain:"「〜以上」既然入社就…。" },
          { id:"25-12", q:"留守の__、吉田さんが訪ねてきたそうだ。", qHtml:"<ruby>留守<rt>るす</rt></ruby>の__、<ruby>吉田<rt>よしだ</rt></ruby>さんが<ruby>訪ねて<rt>たずねて</rt></ruby>きたそうだ。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:0, explain:"「留守の間に」不在期间的瞬间来访。" },
          { id:"25-13", q:"最近あまり運動していないから、太る__。", qHtml:"<ruby>最近<rt>さいきん</rt></ruby>あまり<ruby>運動<rt>うんどう</rt></ruby>していないから、<ruby>太る<rt>ふとる</rt></ruby>__。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:3, explain:"「太る一方だ」趋势。" },
          { id:"25-14", q:"彼女は仕事で頑張っている__、家族の面倒も見なければならない。", qHtml:"<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>で<ruby>頑張って<rt>がんばって</rt></ruby>いる__、<ruby>家族<rt>かぞく</rt></ruby>の<ruby>面倒<rt>めんどう</rt></ruby>も<ruby>見<rt>み</rt></ruby>なければならない。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:4, explain:"「〜一方で」一方面…" },
          { id:"25-15", q:"この薬は苦味がなく、飲み__。", qHtml:"この<ruby>薬<rt>くすり</rt></ruby>は<ruby>苦味<rt>にがみ</rt></ruby>がなく、<ruby>飲み<rt>のみ</rt></ruby>__。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:1, explain:"「飲みやすい」易于服用。" },
          { id:"25-16", q:"若い__は、新しい知識をどんどん吸収しなければならない。", qHtml:"<ruby>若い<rt>わかい</rt></ruby>__は、<ruby>新しい<rt>あたらしい</rt></ruby><ruby>知識<rt>ちしき</rt></ruby>をどんどん<ruby>吸収<rt>きゅうしゅう</rt></ruby>しなければならない。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:8, explain:"「若いうち」年轻时。" },
          { id:"25-17", q:"彼が手伝ってくれた__、締切に間に合った。", qHtml:"<ruby>彼<rt>かれ</rt></ruby>が<ruby>手伝って<rt>てつだって</rt></ruby>くれた__、<ruby>締切<rt>しめきり</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合った<rt>あった</rt></ruby>。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:9, explain:"「〜おかげで」多亏…（积极）。" },
          { id:"25-18", q:"試験の点数が出た__、志望校を決めたいと思う。", qHtml:"<ruby>試験<rt>しけん</rt></ruby>の<ruby>点数<rt>てんすう</rt></ruby>が<ruby>出た<rt>でた</rt></ruby>__、<ruby>志望校<rt>しぼうこう</rt></ruby>を<ruby>決め<rt>きめ</rt></ruby>たいと<ruby>思う<rt>おもう</rt></ruby>。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:5, explain:"「出た上で」在…后。" },
          { id:"25-19", q:"夜が明けない__、出発の準備をした。", qHtml:"<ruby>夜<rt>よる</rt></ruby>が<ruby>明けない<rt>あけない</rt></ruby>__、<ruby>出発<rt>しゅっぱつ</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>をした。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:7, explain:"「明けないうちに」天亮前。" },
          { id:"25-20", q:"梅雨の時期に気温が高い__、湿度も高い。", qHtml:"<ruby>梅雨<rt>つゆ</rt></ruby>の<ruby>時期<rt>じき</rt></ruby>に<ruby>気温<rt>きおん</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>__、<ruby>湿度<rt>しつど</rt></ruby>も<ruby>高い<rt>たかい</rt></ruby>。", options:["間に","やすい","以上","一方だ","一方で","上で","上に","うちに","うち","おかげで"], answer:4, explain:"「〜一方で」一方面高温一方面高湿。" }
        ]
      },
      {
        page: 25, title: "パートI 問題3", type: "input",
        questions: [
          { id:"25-21", q:"この辺は静かで__所だ。（住む）", qHtml:"この<ruby>辺<rt>へん</rt></ruby>は<ruby>静か<rt>しずか</rt></ruby>で__<ruby>所<rt>ところ</rt></ruby>だ。（<ruby>住む<rt>すむ</rt></ruby>）", options:["住みやすい","住みにくい","住みがたい","住みそう"], answer:0, explain:"「住みやすい」易于居住。" },
          { id:"25-22", q:"__、しっかり勉強しなければならない。（学生）", qHtml:"__、しっかり<ruby>勉強<rt>べんきょう</rt></ruby>しなければならない。（<ruby>学生<rt>がくせい</rt></ruby>）", options:["学生以上","学生以上は","学生以上で","学生以上に"], answer:1, explain:"「学生以上は」既然是学生就…" },
          { id:"25-23", q:"私が__間に、雪が止んだ。（眠る）", qHtml:"<ruby>私<rt>わたし</rt></ruby>が__<ruby>間<rt>あいだ</rt></ruby>に、<ruby>雪<rt>ゆき</rt></ruby>が<ruby>止んだ<rt>やんだ</rt></ruby>。（<ruby>眠る<rt>ねむる</rt></ruby>）", options:["寝ている","寝た","寝る","寝て"], answer:0, explain:"「寝ている間に」睡着期间。" },
          { id:"25-24", q:"田中さんは仕事が__、部下の面倒をよく見ている。（できる）", qHtml:"<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>仕事<rt>しごと</rt></ruby>が__、<ruby>部下<rt>ぶか</rt></ruby>の<ruby>面倒<rt>めんどう</rt></ruby>をよく<ruby>見て<rt>みて</rt></ruby>いる。（できる）", options:["できる","できる一方","できる一方で","できる一方だ"], answer:2, explain:"「できる一方で」一方面能干一方面照顾。" },
          { id:"25-25", q:"注意事項を__上で、署名してください。（読む）", qHtml:"<ruby>注意事項<rt>ちゅういじこう</rt></ruby>を__<ruby>上<rt>うえ</rt></ruby>で、<ruby>署名<rt>しょめい</rt></ruby>してください。（<ruby>読む<rt>よむ</rt></ruby>）", options:["読んだ","読む","読んで","読むこと"], answer:0, explain:"「読んだ上で」读完后。" },
          { id:"25-26", q:"登山は健康を__上で役立つ。（保つ）", qHtml:"<ruby>登山<rt>とざん</rt></ruby>は<ruby>健康<rt>けんこう</rt></ruby>を__<ruby>上<rt>うえ</rt></ruby>で<ruby>役立<rt>やくだ</rt></ruby>つ。（<ruby>保つ<rt>たもつ</rt></ruby>）", options:["保つ","保った","保って","保つこと"], answer:0, explain:"「保つ上で」在保持健康方面。" },
          { id:"25-27", q:"日本の漫画を__うちに、日本文化に興味を持った。（読む）", qHtml:"<ruby>日本<rt>にほん</rt></ruby>の<ruby>漫画<rt>まんが</rt></ruby>を__うちに、<ruby>日本<rt>にほん</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持った<rt>もった</rt></ruby>。（<ruby>読む<rt>よむ</rt></ruby>）", options:["読む","読んだ","読んでいる","読めば"], answer:2, explain:"「読んでいるうちに」阅读过程中。" }
        ]
      },
      {
        page: 26, title: "パートII 問題1", type: "choice",
        questions: [
          { id:"26-1", q:"食事をしている__、ドアのチャイムが鳴った。", qHtml:"<ruby>食事<rt>しょくじ</rt></ruby>をしている__、ドアのチャイムが<ruby>鳴った<rt>なった</rt></ruby>。", options:["あいだ","あいだに","あいだで","あいだは"], answer:1, explain:"瞬间动作在持续中发生用「あいだに」。" },
          { id:"26-2", q:"彼は約束を守る__、熱心な人なので皆に信頼されている。", qHtml:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>約束<rt>やくそく</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>__、<ruby>熱心<rt>ねっしん</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>なので<ruby>皆<rt>みんな</rt></ruby>に<ruby>信頼<rt>しんらい</rt></ruby>されている。", options:["うえで","うえに","ために","うえを"], answer:0, explain:"「守るうえで」在…方面。" },
          { id:"26-3", q:"ここ数年、住宅の価格が__一方だ。", qHtml:"ここ<ruby>数年<rt>すうねん</rt></ruby>、<ruby>住宅<rt>じゅうたく</rt></ruby>の<ruby>価格<rt>かかく</rt></ruby>が__<ruby>一方<rt>いっぽう</rt></ruby>だ。", options:["上がる","上がった","上がっている","上がりつつある"], answer:0, explain:"「上がる一方だ」持续上升。" },
          { id:"26-4", q:"旅行は視野を広げる__役に立つ。", qHtml:"<ruby>旅行<rt>りょこう</rt></ruby>は<ruby>視野<rt>しや</rt></ruby>を<ruby>広げる<rt>ひろげる</rt></ruby>__<ruby>役<rt>やく</rt></ruby>に<ruby>立つ<rt>たつ</rt></ruby>。", options:["うえで","うえに","ために","うえを"], answer:0, explain:"「〜うえで」在…过程中有帮助。" },
          { id:"26-5", q:"若い__時間の大切さに気づかなかった。", qHtml:"<ruby>若い<rt>わかい</rt></ruby>__<ruby>時間<rt>じかん</rt></ruby>の<ruby>大切<rt>たいせつ</rt></ruby>さに<ruby>気づか<rt>きづか</rt></ruby>なかった。", options:["うちは","うちに","ために","だけで"], answer:0, explain:"「若いうちは」年轻时。" },
          { id:"26-6", q:"この携帯はボタンが大きくて、お年寄りにも__。", qHtml:"この<ruby>携帯<rt>けいたい</rt></ruby>はボタンが<ruby>大きく<rt>おおきく</rt></ruby>て、お<ruby>年寄り<rt>としより</rt></ruby>にも__。", options:["使いにくい","使いやすい","使いすぎる","使えばいい"], answer:1, explain:"易用「使いやすい」。" },
          { id:"26-7", q:"本を__、いつの間にか眠ってしまった。", qHtml:"<ruby>本<rt>ほん</rt></ruby>を__、いつの<ruby>間<rt>ま</rt></ruby>にか<ruby>眠って<rt>ねむって</rt></ruby>しまった。", options:["読んでいるうちに","読んだうちに","読むうちに","読んでうちに"], answer:0, explain:"「読んでいるうちに」读着读着。" },
          { id:"26-8", q:"勉強する時間がない__、ゲームに夢中だ。", qHtml:"<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>時間<rt>じかん</rt></ruby>がない__、ゲームに<ruby>夢中<rt>むちゅう</rt></ruby>だ。", options:["といいながら","といえば","というと","というのに"], answer:0, explain:"「〜といいながら」嘴上说…却…" },
          { id:"26-9", q:"田中さんに__、楽しい一日を過ごした。", qHtml:"<ruby>田中<rt>たなか</rt></ruby>さんに__、<ruby>楽しい<rt>たのしい</rt></ruby><ruby>一日<rt>いちにち</rt></ruby>を<ruby>過ごした<rt>すごした</rt></ruby>。", options:["誘ってもらったおかげで","誘ってくれたおかげで","誘ってあげたおかげで","誘ってさしあげたおかげで"], answer:1, explain:"受惠用「〜てくれたおかげで」。" },
          { id:"26-10", q:"日本への留学__、日本語だけでなく文化にも触れたい。", qHtml:"<ruby>日本<rt>にほん</rt></ruby>への<ruby>留学<rt>りゅうがく</rt></ruby>__、<ruby>日本語<rt>にほんご</rt></ruby>だけでなく<ruby>文化<rt>ぶんか</rt></ruby>にも<ruby>触れ<rt>ふれ</rt></ruby>たい。", options:["をきっかけに","が決まった以上","のために","おかげで"], answer:0, explain:"「〜をきっかけに」以…为契机。" },
          { id:"26-11", q:"先生が__、この論文を完成した。", qHtml:"<ruby>先生<rt>せんせい</rt></ruby>が__、この<ruby>論文<rt>ろんぶん</rt></ruby>を<ruby>完成<rt>かんせい</rt></ruby>した。", options:["指導したおかげで","指導してくれたおかげで","指導してもらったおかげで","指導したおかげで"], answer:1, explain:"尊敬「指導してくれたおかげで」。" },
          { id:"26-12", q:"この魚は__、値段も安い。", qHtml:"この<ruby>魚<rt>さかな</rt></ruby>は__、<ruby>値段<rt>ねだん</rt></ruby>も<ruby>安い<rt>やすい</rt></ruby>。", options:["新鮮なうえで","新鮮なうえに","新鮮な一方で","新鮮である以上"], answer:1, explain:"「新鮮なうえに」且…" },
          { id:"26-13", q:"映画がまだ__うちに、売店に行ってくる。", qHtml:"<ruby>映画<rt>えいが</rt></ruby>がまだ__うちに、<ruby>売店<rt>ばいてん</rt></ruby>に<ruby>行って<rt>いって</rt></ruby>くる。", options:["始まっている","始まった","始まる","始まっていない"], answer:3, explain:"「始まっていないうちに」未开始前。" }
        ]
      },
      {
        page: 27, title: "パートII 問題2", type: "choice",
        questions: [
          { id:"27-15", q:"ベッドで__、財布を盗まれた。", qHtml:"ベッドで__、<ruby>財布<rt>さいふ</rt></ruby>を<ruby>盗まれた<rt>ぬすまれた</rt></ruby>。", options:["寝ている間に","寝た間に","寝る間に","寝て間に"], answer:0, explain:"「寝ている間に」熟睡期间被盗。" },
          { id:"27-16", q:"もう__以上は、誰に勧められても吸わない。", qHtml:"もう__<ruby>以上<rt>いじょう</rt></ruby>は、<ruby>誰<rt>だれ</rt></ruby>に<ruby>勧め<rt>すすめ</rt></ruby>られても<ruby>吸わない<rt>すわない</rt></ruby>。", options:["吸わないと決めた","タバコを吸わないと","決心した","吸わない"], answer:2, explain:"「決心した以上は」既然决心就…" },
          { id:"27-17", q:"彼女はきれいな__人気が高い。", qHtml:"<ruby>彼女<rt>かのじょ</rt></ruby>はきれいな__<ruby>人気<rt>にんき</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>。", options:["うえに","うえで","なので","から"], answer:0, explain:"「きれいなうえに」漂亮且..." },
          { id:"27-18", q:"鈴木先生が__おかげで、優勝できた。", qHtml:"<ruby>鈴木<rt>すずき</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>が__おかげで、<ruby>優勝<rt>ゆうしょう</rt></ruby>できた。", options:["熱心に教えてくださった","熱心に教えた","教えてくれた","教えてもらった"], answer:0, explain:"尊敬「教えてくださったおかげで」。" },
          { id:"27-19", q:"日本には、お盆や正月に物を|19|。", qHtml:"<ruby>日本<rt>にほん</rt></ruby>には、お<ruby>盆<rt>ぼん</rt></ruby>や<ruby>正月<rt>しょうがつ</rt></ruby>が<ruby>近く<rt>ちかく</rt></ruby>なると、<ruby>世話<rt>せわ</rt></ruby>になった<ruby>人<rt>ひと</rt></ruby>や<ruby>目上<rt>めうえ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>物<rt>もの</rt></ruby>を|19|。", options:["あげることがある","おくる習慣がある","かかることがある","くれる習慣がある"], answer:1, explain:"「おくる習慣がある」。" }
        ]
      },
      {
        page: 28, title: "パートII 問題3", type: "reading",
        passage: "日本には、お盆や正月が近くなると、世話になった人や目上の人に物を|19|。お盆に贈る物を「お中元」、年の終わりに贈る物を「お歳暮」という。…外国人に日本人のこの習慣を|22|のは、難しいかもしれない。",
        passageHtml: "<ruby>日本<rt>にほん</rt></ruby>には、お<ruby>盆<rt>ぼん</rt></ruby>や<ruby>正月<rt>しょうがつ</rt></ruby>が<ruby>近く<rt>ちかく</rt></ruby>なると…",
        questions: [
          { id:"28-20", q:"|20| に入る最もよいもの", qHtml:"|20| に<ruby>入る<rt>はいる</rt></ruby><ruby>最も<rt>もっとも</rt></ruby>よいもの", options:["というくらいで","といえないので","と同じ気持ちで","と違う形で"], answer:2, explain:"「と同じ気持ちで」。" },
          { id:"28-22", q:"|22| に入る最もよいもの", qHtml:"|22| に<ruby>入る<rt>はいる</rt></ruby><ruby>最も<rt>もっとも</rt></ruby>よいもの", options:["理解してもらう","理解させる","理解される","理解してくれる"], answer:0, explain:"「理解してもらう」。" },
          { id:"28-23", q:"|23| に入る最もよいもの", qHtml:"|23| に<ruby>入る<rt>はいる</rt></ruby><ruby>最も<rt>もっとも</rt></ruby>よいもの", options:["親切で助けてくれて","親切にしてくださって","親切で助けてもらって","親切にしてあげて"], answer:1, explain:"「してくださって」。" },
          { id:"28-21", q:"|21| に入る最もよいもの", qHtml:"|21| に<ruby>入る<rt>はいる</rt></ruby><ruby>最も<rt>もっとも</rt></ruby>よいもの", options:["しかし","つまり","それでは","たとえば"], answer:3, explain:"举例「たとえば」。" },
          { id:"28-29", q:"この贈り物には「|23|、ありがとう…」という意味がある。", qHtml:"この<ruby>贈り物<rt>おくりもの</rt></ruby>には「|23|、ありがとう…」という<ruby>意味<rt>いみ</rt></ruby>がある。", options:["親切で助けてくれて","親切にしてくださって","親切にしてあげて","お世話になりました"], answer:3, explain:"完整句「お世話になりました」。" }
        ]
      }
    ]
  }
};