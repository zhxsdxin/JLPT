// 蓝宝书 N3 文法 194 条 + 第20単元 敬語（OCR 结构化，待校对）
// 单元划分：每 10 条一个单元（第19単元=181~194），第20単元=敬語
const N3_DATA = [
 {
  "id": 1,
  "unit": 1,
  "pattern": "〜間/間に",
  "senses": [
   {
    "connect": [
     "名词＋の＋間/間に",
     "动词普通形＋間/間に"
    ],
    "desc": "在……期间。表示在某一段时间里持续进行某动作或保持某状态。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "山田先生の講演の間、皆熱心に話を聞いていた。",
      "zh": "山田老师演讲的时候，大家都非常认真地听着。",
      "jaHtml": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>講演<rt>こうえん</rt></ruby>の<span class=\"target\"><ruby>間<rt>あいだ</rt></ruby></span>、<ruby>皆<rt>みんな</rt></ruby><ruby>熱心<rt>ねっしん</rt></ruby>に<ruby>話<rt>はなし</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>ていた。"
     },
     {
      "src": "2008年真题",
      "ja": "赤ちゃんが寝ている間に、洗濯をしてしまった。",
      "zh": "趁小宝宝睡觉的时候，把衣服洗好了。",
      "jaHtml": "<ruby>赤ちゃん<rt>あかちゃん</rt></ruby>が<ruby>寝て<rt>ねて</rt></ruby>いる<span class=\"target\"><ruby>間に<rt>あいだに</rt></ruby></span>、<ruby>洗濯<rt>せんたく</rt></ruby>をしてしまった。"
     },
     {
      "src": "",
      "ja": "私は夏休みの間、ずっと実家にいました。",
      "zh": "暑假期间，我一直待在老家。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は<ruby>夏休み<rt>なつやすみ</rt></ruby>の<span class=\"target\"><ruby>間<rt>あいだ</rt></ruby></span>、ずっと<ruby>実家<rt>じっか</rt></ruby>にいました。"
     }
    ],
    "note": "「〜間」表示整个时间段内动作/状态持续（谓语用持续动词）；「〜間に」表示时间段内某一点发生某事（谓语用瞬间动词）。"
   }
  ],
  "patternHtml": "〜<ruby>間<rt>あいだ</rt></ruby>/<ruby>間に<rt>あいだに</rt></ruby>"
 },
 {
  "id": 2,
  "unit": 1,
  "pattern": "〜いい/よい",
  "senses": [
   {
    "connect": [
     "动词ます形＋いい/よい"
    ],
    "desc": "容易……、易于……。表示某个动作做起来很容易、很顺畅。反义表达为「〜にくい」。",
    "examples": [
     {
      "src": "",
      "ja": "この町は住みよいです。",
      "zh": "这个城市很适合居住。",
      "jaHtml": "この<ruby>町<rt>まち</rt></ruby>は<ruby>住み<rt>すみ</rt></ruby><span class=\"target\">よい</span>です。"
     },
     {
      "src": "",
      "ja": "この薬は飲みよいです。",
      "zh": "这个药很容易喝。",
      "jaHtml": "この<ruby>薬<rt>くすり</rt></ruby>は<ruby>飲み<rt>のみ</rt></ruby><span class=\"target\">よい</span>です。"
     },
     {
      "src": "",
      "ja": "この本は分かりいいです。",
      "zh": "这本书容易看懂。",
      "jaHtml": "この<ruby>本<rt>ほん</rt></ruby>は<ruby>分か<rt>わか</rt></ruby>り<span class=\"target\">いい</span>です。"
     }
    ],
    "note": "「〜いい/よい」只能用于积极评价的场合；「〜やすい」表示对象的客观性质，积极、消极的场合都可用。"
   }
  ],
  "patternHtml": "〜いい/よい"
 },
 {
  "id": 3,
  "unit": 1,
  "pattern": "〜以上(は)",
  "senses": [
   {
    "connect": [
     "动词普通形＋以上(は)",
     "名词である＋以上(は)"
    ],
    "desc": "既然……就……。表示既然前项事实成立，后项自然应当与之相符。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "留学する以上は、勉強だけでなく、その国の文化を学んだり交流をしたりしたい。",
      "zh": "既然去留学了，就不仅想学习，还想了解该国的文化并进行交流。",
      "jaHtml": "<ruby>留学<rt>りゅうがく</rt></ruby>する<span class=\"target\"><ruby>以上<rt>いじょう</rt></ruby></span>は、<ruby>勉強<rt>べんきょう</rt></ruby>だけでなく、その<ruby>国<rt>くに</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>を<ruby>学ん<rt>まなん</rt></ruby>だり<ruby>交流<rt>こうりゅう</rt></ruby>をしたりしたい。"
     },
     {
      "src": "2001年真题",
      "ja": "いったん仕事を引き受けた以上は、途中でやめることはできない。",
      "zh": "既然接受了这项工作，就不能中途放弃。",
      "jaHtml": "いったん<ruby>仕事<rt>しごと</rt></ruby>を<ruby>引き受け<rt>ひきうけ</rt></ruby>た<span class=\"target\"><ruby>以上<rt>いじょう</rt></ruby></span>は、<ruby>途中<rt>とちゅう</rt></ruby>でやめることはできない。"
     },
     {
      "src": "",
      "ja": "この会社の社員である以上、会社の利益を守らなければならない。",
      "zh": "既然是这家公司的员工，就必须维护公司的利益。",
      "jaHtml": "この<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>社員<rt>しゃいん</rt></ruby>である<span class=\"target\"><ruby>以上<rt>いじょう</rt></ruby></span>、<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>利益<rt>りえき</rt></ruby>を<ruby>守ら<rt>まもら</rt></ruby>なければならない。"
     }
    ],
    "note": "后项多用表示义务、决心、希望的表达，如「〜なければならない/べきだ/つもりだ/たい」等。"
   }
  ],
  "patternHtml": "〜<ruby>以上<rt>いじょう</rt></ruby>(は)"
 },
 {
  "id": 4,
  "unit": 1,
  "pattern": "〜一方(で)",
  "senses": [
   {
    "connect": [
     "动词普通形＋一方(で)",
     "い形容词辞书形＋一方(で)",
     "な形容词词干＋である＋一方(で)",
     "名词＋である＋一方(で)"
    ],
    "desc": "一方面……，另一方面……/……的同时……。表示同一主语的两个不同方面（对比或并列）。",
    "examples": [
     {
      "src": "",
      "ja": "彼は自分に厳しい一方で、他人には優しい。",
      "zh": "他对自己严格，对别人却很和善。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>自分<rt>じぶん</rt></ruby>に<ruby>厳しい<rt>いかめしい</rt></ruby><span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby></span>で、<ruby>他人<rt>たにん</rt></ruby>には<ruby>優しい<rt>やさしい</rt></ruby>。"
     },
     {
      "src": "2006年真题",
      "ja": "収入が減る一方で、教育費などの支出は増えていくのだから、節約するしかない。",
      "zh": "收入不断减少，而另一方面教育费等开支不断增加，所以只能节约了。",
      "jaHtml": "<ruby>収入<rt>しゅうにゅう</rt></ruby>が<ruby>減る<rt>へる</rt></ruby><span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby></span>で、<ruby>教育費<rt>きょういくひ</rt></ruby>などの<ruby>支出<rt>ししゅつ</rt></ruby>は<ruby>増え<rt>ふえ</rt></ruby>ていくのだから、<ruby>節約<rt>せつやく</rt></ruby>するしかない。"
     },
     {
      "src": "",
      "ja": "彼は英会話学校の先生である一方、大学院の学生でもある。",
      "zh": "他既是英语会话学校的老师，同时也是研究生院的学生。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>英会話学校<rt>えいかいわがっこう</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>である<span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby></span>、<ruby>大学院<rt>だいがくいん</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>でもある。"
     }
    ],
    "note": "前后项既可是对比关系，也可是并列关系。"
   },
   {
    "connect": [],
    "desc": "与……相反（就两个不同主语对比）。",
    "examples": [
     {
      "src": "",
      "ja": "姉は明るい一方で、妹は無口だ。",
      "zh": "姐姐很开朗，而妹妹沉默寡言。",
      "jaHtml": "<ruby>姉<rt>あね</rt></ruby>は<ruby>明るい<rt>あかるい</rt></ruby><span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby></span>で、<ruby>妹<rt>いもうと</rt></ruby>は<ruby>無口<rt>むくち</rt></ruby>だ。"
     }
    ],
    "note": "「〜一方(で)」也可作为接续词单独使用，如：兄は働き者だ。一方、弟は怠け者だ。"
   }
  ],
  "patternHtml": "〜<ruby>一方<rt>いっぽう</rt></ruby>(で)"
 },
 {
  "id": 5,
  "unit": 1,
  "pattern": "〜一方だ",
  "senses": [
   {
    "connect": [
     "动词辞书形＋一方だ"
    ],
    "desc": "不断地……、越来越……。表示某种事态朝着某个方向不断发展。",
    "examples": [
     {
      "src": "2003年真题",
      "ja": "ここ数年、この町の人口は減る一方だ。",
      "zh": "近几年来，这个城市的人口在不断减少。",
      "jaHtml": "ここ<ruby>数年<rt>すうねん</rt></ruby>、この<ruby>町<rt>まち</rt></ruby>の<ruby>人口<rt>じんこう</rt></ruby>は<ruby>減る<rt>へる</rt></ruby><span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby>だ</span>。"
     },
     {
      "src": "",
      "ja": "わが社の業績は上がる一方だ。",
      "zh": "我们公司的业绩越来越好。",
      "jaHtml": "わが<ruby>社<rt>しゃ</rt></ruby>の<ruby>業績<rt>ぎょうせき</rt></ruby>は<ruby>上が<rt>あが</rt></ruby>る<span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby>だ</span>。"
     },
     {
      "src": "",
      "ja": "ここ数年、物価は上がる一方だ。",
      "zh": "近几年来，物价不断上涨。",
      "jaHtml": "ここ<ruby>数年<rt>すうねん</rt></ruby>、<ruby>物価<rt>ぶっか</rt></ruby>は<ruby>上が<rt>あが</rt></ruby>る<span class=\"target\"><ruby>一方<rt>いっぽう</rt></ruby>だ</span>。"
     }
    ],
    "note": "既可用于好的事态，也可用于不好的事态。"
   }
  ],
  "patternHtml": "〜<ruby>一方<rt>いっぽう</rt></ruby>だ"
 },
 {
  "id": 6,
  "unit": 1,
  "pattern": "〜上(に)",
  "senses": [
   {
    "connect": [
     "动词普通形＋上(に)",
     "い形容词辞书形＋上(に)",
     "な形容词词干＋な＋上(に)",
     "名词である/の＋上(に)"
    ],
    "desc": "不仅……而且……。表示添加、累加。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "そのスポーツクラブは入会金が要らないうえに、わが家から近い。",
      "zh": "那家体育俱乐部不仅不收会费，而且离我家很近。",
      "jaHtml": "そのスポーツクラブは<ruby>入会金<rt>にゅうかいきん</rt></ruby>が<ruby>要ら<rt>いら</rt></ruby>ない<span class=\"target\">うえに</span>、わが<ruby>家<rt>いえ</rt></ruby>から<ruby>近い<rt>ちかい</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "この車はデザインがいい上に、値段も安い。",
      "zh": "这辆车不仅设计好，而且价格也便宜。",
      "jaHtml": "この<ruby>車<rt>くるま</rt></ruby>はデザインがいい<span class=\"target\"><ruby>上に<rt>うえに</rt></ruby></span>、<ruby>値段<rt>ねだん</rt></ruby>も<ruby>安い<rt>やすい</rt></ruby>。"
     }
    ],
    "note": "前后项必须是同一性质的因素（积极因素累加或消极因素累加）。"
   }
  ],
  "kana": [
   "うえに"
  ],
  "patternHtml": "〜<ruby>上<rt>うえ</rt></ruby>(に)"
 },
 {
  "id": 7,
  "unit": 1,
  "pattern": "〜上で/上での",
  "senses": [
   {
    "connect": [
     "名词＋の＋上で/上での",
     "动词た形＋上で/上での"
    ],
    "desc": "在……之后。表示做完前项之后再着手后项。",
    "examples": [
     {
      "src": "2003年真题",
      "ja": "私が皆様のご意見を伺った上で、来週ご報告いたします。",
      "zh": "听取各位的意见之后，下周我再作报告。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>が<ruby>皆様<rt>みなさま</rt></ruby>のご<ruby>意見<rt>いけん</rt></ruby>を<ruby>伺っ<rt>うかがっ</rt></ruby>た<span class=\"target\"><ruby>上で<rt>うえで</rt></ruby></span>、<ruby>来週<rt>らいしゅう</rt></ruby>ご<ruby>報告<rt>ほうこく</rt></ruby>いたします。"
     },
     {
      "src": "2001年真题",
      "ja": "それぞれの説明をよく聞いた上で、旅行のコースを選びたいと思います。",
      "zh": "我想仔细听完各自的说明之后，再选择旅行路线。",
      "jaHtml": "それぞれの<ruby>説明<rt>せつめい</rt></ruby>をよく<ruby>聞い<rt>きい</rt></ruby>た<span class=\"target\"><ruby>上で<rt>うえで</rt></ruby></span>、<ruby>旅行<rt>りょこう</rt></ruby>のコースを<ruby>選び<rt>えらび</rt></ruby>たいと<ruby>思い<rt>おもい</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "これは私がよく考えた上での決心です。",
      "zh": "这是我经过深思熟虑之后的决定。",
      "jaHtml": "これは<ruby>私<rt>わたし</rt></ruby>がよく<ruby>考え<rt>かんがえ</rt></ruby>た<span class=\"target\"><ruby>上で<rt>うえで</rt></ruby>の</span><ruby>決心<rt>けっしん</rt></ruby>です。"
     }
    ],
    "note": "「〜上での」后续名词作定语使用。该句型强调人的意志，即根据某个结果再做出下一个动作。"
   }
  ],
  "patternHtml": "〜<ruby>上で<rt>うえで</rt></ruby>/<ruby>上で<rt>うえで</rt></ruby>の"
 },
 {
  "id": 8,
  "unit": 1,
  "pattern": "〜上で(は)/上での",
  "senses": [
   {
    "connect": [
     "动词普通形＋上で(は)",
     "名词＋の＋上で(は)/上での"
    ],
    "desc": "在……方面、在……上。表示在某范围、某方面或某种场合。",
    "examples": [
     {
      "src": "",
      "ja": "仕事の上では別に問題はない。",
      "zh": "在工作方面没有什么问题。",
      "jaHtml": "<ruby>仕事<rt>しごと</rt></ruby>の<span class=\"target\"><ruby>上で<rt>うえで</rt></ruby></span>は<ruby>別に<rt>べつに</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>はない。"
     },
     {
      "src": "",
      "ja": "外国語を勉強する上で、単語を覚えるのはとても大事なことだ。",
      "zh": "在学习外语方面，背单词是非常重要的。",
      "jaHtml": "<ruby>外国語<rt>がいこくご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>する<span class=\"target\"><ruby>上で<rt>うえで</rt></ruby></span>、<ruby>単語<rt>たんご</rt></ruby>を<ruby>覚え<rt>おぼえ</rt></ruby>るのはとても<ruby>大事<rt>だいじ</rt></ruby>なことだ。"
     },
     {
      "src": "",
      "ja": "英語とフランス語は、発音の上で似ているところがある。",
      "zh": "英语和法语在发音上有相似之处。",
      "jaHtml": "<ruby>英語<rt>えいご</rt></ruby>とフランス<ruby>語<rt>ご</rt></ruby>は、<ruby>発音<rt>はつおん</rt></ruby>の<span class=\"target\"><ruby>上で<rt>うえで</rt></ruby></span><ruby>似て<rt>にて</rt></ruby>いるところがある。"
     }
    ],
    "note": "「〜上での」后续名词作定语，此时「上」可换成「面/場合/点」等词。"
   }
  ],
  "patternHtml": "〜<ruby>上で<rt>うえで</rt></ruby>(は)/<ruby>上で<rt>うえで</rt></ruby>の"
 },
 {
  "id": 9,
  "unit": 1,
  "pattern": "〜うちに/うちは",
  "senses": [
   {
    "connect": [
     "动词普通形/い形容词辞书形＋うちに",
     "な形容词词干＋な＋うちに",
     "名词＋の＋うちに"
    ],
    "desc": "趁着……。表示在某状态尚未发生变化之前做某事。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "どうぞ、温かいうちにお上がりください。",
      "zh": "请趁热吃。",
      "jaHtml": "どうぞ、<ruby>温かい<rt>あたたかい</rt></ruby><span class=\"target\">うちに</span>お<ruby>上が<rt>あが</rt></ruby>りください。"
     },
     {
      "src": "",
      "ja": "暇なうちに、遊びに来てください。",
      "zh": "趁有空的时候来玩吧。",
      "jaHtml": "<ruby>暇<rt>ひま</rt></ruby>な<span class=\"target\">うちに</span>、<ruby>遊び<rt>あそび</rt></ruby>に<ruby>来て<rt>きて</rt></ruby>ください。"
     }
    ],
    "note": "后项多用表示动作的动词。"
   },
   {
    "connect": [
     "动词ない形＋うちに"
    ],
    "desc": "趁还没……。表示趁着前项的动作或现象尚未发生，赶快做后项的事情。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "弟と妹がいると集中できないから、きょうはふたりが帰ってこないうちに、宿題をやってしまおう。",
      "zh": "有弟弟妹妹在无法集中注意力，所以趁两个人还没回来，把作业做完吧。",
      "jaHtml": "<ruby>弟<rt>おとうと</rt></ruby>と<ruby>妹<rt>いもうと</rt></ruby>がいると<ruby>集中<rt>しゅうちゅう</rt></ruby>できないから、きょうはふたりが<ruby>帰っ<rt>かえっ</rt></ruby>てこない<span class=\"target\">うちに</span>、<ruby>宿題<rt>しゅくだい</rt></ruby>をやってしまおう。"
     }
    ],
    "note": ""
   },
   {
    "connect": [
     "动词ている形＋うちに"
    ],
    "desc": "在……过程中。表示正在做前项事情的时候，发生了与前项主语意志无关的另一件事。",
    "examples": [
     {
      "src": "",
      "ja": "テレビを見ているうちに、眠ってしまった。",
      "zh": "看电视看着看着就睡着了。",
      "jaHtml": "テレビを<ruby>見て<rt>みて</rt></ruby>いる<span class=\"target\">うちに</span>、<ruby>眠っ<rt>ねむっ</rt></ruby>てしまった。"
     },
     {
      "src": "",
      "ja": "彼女の話を聞いているうちに、涙が出てきた。",
      "zh": "听着她的话，不由得流下了眼泪。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>ている<span class=\"target\">うちに</span>、<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出て<rt>でて</rt></ruby>きた。"
     }
    ],
    "note": "相当于「〜ている間に」。"
   },
   {
    "connect": [
     "动词普通形/い形容词辞书形＋うちは",
     "な形容词词干＋な＋うちは",
     "名词＋の＋うちは"
    ],
    "desc": "在……的时候。表示在某时期内一直做某件事或一直处于某个状态。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "膝に痛みがあるうちは、まだ運動をしないでください。",
      "zh": "膝盖还疼的时候，请不要运动。",
      "jaHtml": "<ruby>膝<rt>ひざ</rt></ruby>に<ruby>痛み<rt>いたみ</rt></ruby>がある<span class=\"target\">うち</span>は、まだ<ruby>運動<rt>うんどう</rt></ruby>をしないでください。"
     },
     {
      "src": "2001年真题",
      "ja": "若いうちはいろいろなことを経験させたほうがいい。",
      "zh": "趁年轻的时候，最好让孩子多经历一些事情。",
      "jaHtml": "<ruby>若い<rt>わかい</rt></ruby><span class=\"target\">うち</span>はいろいろなことを<ruby>経験<rt>けいけん</rt></ruby>させたほうがいい。"
     }
    ],
    "note": "「〜うちは」后面是这个期间内持续的状态；「〜うちに」后面是这个期间内发生的事情，谓语多用瞬间动词。"
   }
  ],
  "patternHtml": "〜うちに/うちは"
 },
 {
  "id": 10,
  "unit": 1,
  "pattern": "〜おかげで/おかげだ",
  "senses": [
   {
    "connect": [
     "动词普通形＋おかげで/おかげだ",
     "い形容词辞书形＋おかげで/おかげだ",
     "な形容词词干＋な＋おかげで/おかげだ",
     "名词＋の＋おかげで/おかげだ"
    ],
    "desc": "多亏……才……、托……的福。表示由于某种原因产生了好的结果。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "皆様のおかげで、大会は無事に終わりました。",
      "zh": "多亏了大家，大会得以圆满结束。",
      "jaHtml": "<ruby>皆様<rt>みなさま</rt></ruby>の<span class=\"target\">おかげで</span>、<ruby>大会<rt>たいかい</rt></ruby>は<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>終わり<rt>おわり</rt></ruby>ました。"
     },
     {
      "src": "",
      "ja": "合格できたのは、応援してくれたみんなのおかげです。",
      "zh": "能够合格，多亏了大家为我加油。",
      "jaHtml": "<ruby>合格<rt>ごうかく</rt></ruby>できたのは、<ruby>応援<rt>おうえん</rt></ruby>してくれたみんなの<span class=\"target\">おかげで</span>す。"
     }
    ],
    "note": "有时也用于不好的结果，表示反语、挖苦、责备，意思是「都怪……」。例：あいつのおかげで、ひどい目に遭った。（都怪那家伙，害我吃了大亏。）"
   }
  ],
  "patternHtml": "〜おかげで/おかげだ"
 },
 {
  "id": 11,
  "unit": 2,
  "pattern": "〜おきに",
  "senses": [
   {
    "connect": [
     "名词＋おきに"
    ],
    "desc": "每隔……。表示时间或距离的间隔。",
    "examples": [
     {
      "src": "",
      "ja": "この薬は2時間おきに飲んでください。",
      "zh": "这个药请每隔两小时吃一次。",
      "jaHtml": "この<ruby>薬<rt>くすり</rt></ruby>は2<ruby>時間<rt>じかん</rt></ruby><span class=\"target\">おきに</span><ruby>飲ん<rt>のん</rt></ruby>でください。"
     },
     {
      "src": "",
      "ja": "駅は1キロおきにある。",
      "zh": "每隔1公里就有一个车站。",
      "jaHtml": "<ruby>駅<rt>えき</rt></ruby>は1キロ<span class=\"target\">おきに</span>ある。"
     }
    ],
    "note": "「〜ごとに」表示每隔（强调每次）；「〜おきに」表示间隔。"
   }
  ],
  "patternHtml": "〜おきに"
 },
 {
  "id": 12,
  "unit": 2,
  "pattern": "〜恐れがある",
  "senses": [
   {
    "connect": [
     "动词普通形＋恐れがある",
     "名词＋の＋恐れがある"
    ],
    "desc": "有……的危险、恐怕会……。表示发生不好事情的可能性。",
    "examples": [
     {
      "src": "",
      "ja": "このままでは、大地震が起こる恐れがある。",
      "zh": "照这样下去，恐怕会发生大地震。",
      "jaHtml": "このままでは、<ruby>大地震<rt>だいじしん</rt></ruby>が<ruby>起こ<rt>おこ</rt></ruby>る<span class=\"target\"><ruby>恐れ<rt>おそれ</rt></ruby>があ</span>る。"
     },
     {
      "src": "",
      "ja": "台風の影響で、列車が遅れる恐れがあります。",
      "zh": "受台风影响，列车可能会晚点。",
      "jaHtml": "<ruby>台風<rt>たいふう</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>で、<ruby>列車<rt>れっしゃ</rt></ruby>が<ruby>遅れ<rt>おくれ</rt></ruby>る<span class=\"target\"><ruby>恐れ<rt>おそれ</rt></ruby>があ</span>ります。"
     }
    ],
    "note": "多用于新闻、正式场合，表示对不好结果的担心。"
   }
  ],
  "patternHtml": "〜<ruby>恐れ<rt>おそれ</rt></ruby>がある"
 },
 {
  "id": 13,
  "unit": 2,
  "pattern": "〜がする",
  "senses": [
   {
    "connect": [
     "名词＋がする"
    ],
    "desc": "感到……、发出……。表示感觉到气味、味道、声音、感觉等。",
    "examples": [
     {
      "src": "",
      "ja": "変な音がする。",
      "zh": "发出奇怪的声音。",
      "jaHtml": "<ruby>変な<rt>へんな</rt></ruby><ruby>音<rt>おと</rt></ruby><span class=\"target\">がす</span>る。"
     },
     {
      "src": "",
      "ja": "何かいい匂いがする。",
      "zh": "闻到一股好闻的气味。",
      "jaHtml": "<ruby>何か<rt>なにか</rt></ruby>いい<ruby>匂い<rt>におい</rt></ruby><span class=\"target\">がす</span>る。"
     }
    ],
    "note": "前面常接表示感觉、感受的名词，如「におい/味/音/寒気/吐き気」等。"
   }
  ],
  "patternHtml": "〜がする"
 },
 {
  "id": 14,
  "unit": 2,
  "pattern": "〜がたい",
  "senses": [
   {
    "connect": [
     "动词ます形＋がたい"
    ],
    "desc": "难以……。表示很难做到某事。",
    "examples": [
     {
      "src": "",
      "ja": "彼の気持ちは理解しがたい。",
      "zh": "他的心情令人难以理解。",
      "jaHtml": "<ruby>彼の<rt>かの</rt></ruby><ruby>気持ち<rt>きもち</rt></ruby>は<ruby>理解<rt>りかい</rt></ruby>し<span class=\"target\">がたい</span>。"
     },
     {
      "src": "",
      "ja": "この機会を逃すのは惜しい。得がたいチャンスだ。",
      "zh": "错过这个机会很可惜，这是难得的机会。",
      "jaHtml": "この<ruby>機会<rt>きかい</rt></ruby>を<ruby>逃す<rt>のがす</rt></ruby>のは<ruby>惜しい<rt>おしい</rt></ruby>。<ruby>得<rt>え</rt></ruby><span class=\"target\">がたい</span>チャンスだ。"
     }
    ],
    "note": "书面语。多与「信じ/理解/忘れ/得(え)/耐え」等动词搭配。"
   }
  ],
  "patternHtml": "〜がたい"
 },
 {
  "id": 15,
  "unit": 2,
  "pattern": "〜がちだ/がちで/がちの/がちな",
  "senses": [
   {
    "connect": [
     "动词ます形＋がちだ",
     "名词＋がちだ"
    ],
    "desc": "常常……、动不动就……。表示容易发生某种（多不好的）倾向。",
    "examples": [
     {
      "src": "",
      "ja": "冬は風邪を引きがちだ。",
      "zh": "冬天容易感冒。",
      "jaHtml": "<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引き<rt>ひき</rt></ruby><span class=\"target\">がち</span>だ。"
     },
     {
      "src": "",
      "ja": "若い人は忘れがちだが、約束は守らなければならない。",
      "zh": "年轻人容易忘记，但约定必须要遵守。",
      "jaHtml": "<ruby>若い<rt>わかい</rt></ruby><ruby>人<rt>にん</rt></ruby>は<ruby>忘れ<rt>わすれ</rt></ruby><span class=\"target\">がち</span>だが、<ruby>約束<rt>やくそく</rt></ruby>は<ruby>守ら<rt>まもら</rt></ruby>なければならない。"
     }
    ],
    "note": "「〜がちな」后续名词作定语；多用于不好的倾向。"
   }
  ],
  "patternHtml": "〜がちだ/がちで/がちの/がちな"
 },
 {
  "id": 16,
  "unit": 2,
  "pattern": "〜かどうか/か",
  "senses": [
   {
    "connect": [
     "动词普通形＋かどうか",
     "い形容词普通形＋かどうか",
     "な形容词词干＋かどうか",
     "名词＋かどうか"
    ],
    "desc": "是否……。表示不确定的选择疑问。",
    "examples": [
     {
      "src": "",
      "ja": "彼が来るかどうか分からない。",
      "zh": "不知道他是否会来。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>来る<rt>くる</rt></ruby><span class=\"target\">かどうか</span><ruby>分か<rt>わか</rt></ruby>らない。"
     },
     {
      "src": "",
      "ja": "この店がおいしいかどうか、一度食べてみたい。",
      "zh": "这家店好不好吃，想去尝一次。",
      "jaHtml": "この<ruby>店<rt>みせ</rt></ruby>がおいしい<span class=\"target\">かどうか</span>、<ruby>一度<rt>いちど</rt></ruby><ruby>食べて<rt>たべて</rt></ruby>みたい。"
     }
    ],
    "note": "「〜かどうか」也可用「〜か〜ないか」的形式。"
   }
  ],
  "patternHtml": "〜かどうか/か"
 },
 {
  "id": 17,
  "unit": 2,
  "pattern": "〜か何か",
  "senses": [
   {
    "connect": [
     "名词＋か何か"
    ],
    "desc": "……什么的。表示列举不确定的一个例子。",
    "examples": [
     {
      "src": "",
      "ja": "コーヒーか何か飲みましょう。",
      "zh": "喝点咖啡什么的吧。",
      "jaHtml": "コーヒー<span class=\"target\">か<ruby>何か<rt>なにか</rt></ruby></span><ruby>飲み<rt>のみ</rt></ruby>ましょう。"
     },
     {
      "src": "",
      "ja": "お茶か何かを持ってきてください。",
      "zh": "请拿点茶之类的东西来。",
      "jaHtml": "お<ruby>茶<rt>ちゃ</rt></ruby><span class=\"target\">か<ruby>何か<rt>なにか</rt></ruby></span>を<ruby>持っ<rt>もっ</rt></ruby>てきてください。"
     }
    ],
    "note": "表示自己不明确的举例，语气较轻。"
   }
  ],
  "patternHtml": "〜か<ruby>何か<rt>なにか</rt></ruby>"
 },
 {
  "id": 18,
  "unit": 2,
  "pattern": "〜かもしれない",
  "senses": [
   {
    "connect": [
     "动词普通形＋かもしれない",
     "い形容词普通形＋かもしれない",
     "な形容词词干＋かもしれない",
     "名词＋かもしれない"
    ],
    "desc": "也许……、可能……。表示说话人的推测（把握不大）。",
    "examples": [
     {
      "src": "",
      "ja": "明日は雨が降るかもしれない。",
      "zh": "明天可能会下雨。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降る<rt>ふる</rt></ruby><span class=\"target\">かもしれない</span>。"
     },
     {
      "src": "",
      "ja": "あの人は田中さんかもしれない。",
      "zh": "那个人也许是田中。",
      "jaHtml": "あの<ruby>人<rt>にん</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>さん<span class=\"target\">かもしれない</span>。"
     }
    ],
    "note": "口语中常说「かもしれない」→「かも」。后项不能接意志、命令等表达。"
   }
  ],
  "patternHtml": "〜かもしれない"
 },
 {
  "id": 19,
  "unit": 2,
  "pattern": "〜から",
  "senses": [
   {
    "connect": [
     "动词普通形＋から",
     "い形容词普通形＋から",
     "な形容词词干＋だ＋から",
     "名词＋だ＋から"
    ],
    "desc": "因为……。表示理由、原因（主观性较强）。",
    "examples": [
     {
      "src": "",
      "ja": "もう遅いから、先に帰るね。",
      "zh": "已经晚了，我先回去了。",
      "jaHtml": "もう<ruby>遅い<rt>おそい</rt></ruby><span class=\"target\">から</span>、<ruby>先に<rt>さきに</rt></ruby><ruby>帰る<rt>かえる</rt></ruby>ね。"
     },
     {
      "src": "",
      "ja": "明日は休みだから、ゆっくり寝られる。",
      "zh": "明天休息，所以能好好睡一觉。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>は<ruby>休み<rt>やすみ</rt></ruby>だ<span class=\"target\">から</span>、ゆっくり<ruby>寝ら<rt>ねら</rt></ruby>れる。"
     }
    ],
    "note": "「〜から」后项可以是请求、命令、意志等表达；「〜ので」更客观，后项较少接主观表达。"
   }
  ],
  "patternHtml": "〜から"
 },
 {
  "id": 20,
  "unit": 2,
  "pattern": "〜から言うと/から言えば/から言って",
  "senses": [
   {
    "connect": [
     "名词＋から言うと/から言えば/から言って"
    ],
    "desc": "从……来说。表示从某个立场、角度、观点来判断。",
    "examples": [
     {
      "src": "",
      "ja": "私の立場から言うと、その提案には賛成できない。",
      "zh": "从我的立场来说，不能赞成那个提案。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby><span class=\"target\">から<ruby>言う<rt>いう</rt></ruby>と</span>、その<ruby>提案<rt>ていあん</rt></ruby>には<ruby>賛成<rt>さんせい</rt></ruby>できない。"
     },
     {
      "src": "",
      "ja": "経験から言えば、この方法が一番確実だ。",
      "zh": "从经验来说，这个方法最可靠。",
      "jaHtml": "<ruby>経験<rt>けいけん</rt></ruby><span class=\"target\">から<ruby>言<rt>い</rt></ruby></span>えば、この<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>一番確実<rt>いちばんかくじつ</rt></ruby>だ。"
     }
    ],
    "note": "与「〜からすると/からすれば」意思相近；「〜から言って」也可说「〜から言っても」。"
   }
  ],
  "patternHtml": "〜から<ruby>言う<rt>いう</rt></ruby>と/から<ruby>言え<rt>いえ</rt></ruby>ば/から<ruby>言って<rt>いって</rt></ruby>"
 },
 {
  "id": 21,
  "unit": 3,
  "pattern": "からして",
  "senses": [
   {
    "connect": [
     "名词＋からして"
    ],
    "desc": "单从……来看，就……。表示仅从所举的要素、事例来看，就大概可以知道整体情况。",
    "examples": [
     {
      "src": "2003年真题",
      "ja": "わたしは彼のことが大嫌いだ。彼の話し方や服装からして我慢ならない。",
      "zh": "我十分讨厌他。光是他的说话方式和着装就让我无法忍受。",
      "jaHtml": "わたしは<ruby>彼の<rt>かの</rt></ruby>ことが<ruby>大嫌い<rt>だいきらい</rt></ruby>だ。<ruby>彼の<rt>かの</rt></ruby><ruby>話し方<rt>はなしかた</rt></ruby>や<ruby>服装<rt>ふくそう</rt></ruby><span class=\"target\">からして</span><ruby>我慢<rt>がまん</rt></ruby>ならない。"
     }
    ],
    "note": "强调从某个细节就能推测整体。"
   }
  ],
  "patternHtml": "からして"
 },
 {
  "id": 22,
  "unit": 3,
  "pattern": "〜からすると/からすれば",
  "senses": [
   {
    "connect": [
     "名词＋からすると/からすれば"
    ],
    "desc": "从……来看、从……来衡量。表示从某种角度评价的话，可以得出某种结论、判断。",
    "examples": [
     {
      "src": "",
      "ja": "専門家からすると、私の技術はまだ未熟だ。",
      "zh": "从专家的角度来看，我的技术还不纯熟。",
      "jaHtml": "<ruby>専門家<rt>せんもんか</rt></ruby><span class=\"target\">からす</span>ると、<ruby>私<rt>わたし</rt></ruby>の<ruby>技術<rt>ぎじゅつ</rt></ruby>はまだ<ruby>未熟<rt>みじゅく</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "彼女の表情からすると、何かうれしいことがあったらしい。",
      "zh": "从她的表情来看，好像有什么高兴的事。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>表情<rt>ひょうじょう</rt></ruby><span class=\"target\">からす</span>ると、<ruby>何か<rt>なにか</rt></ruby>うれしいことがあったらしい。"
     }
    ],
    "note": "与「〜から言うと」用法相同。"
   }
  ],
  "patternHtml": "〜からすると/からすれば"
 },
 {
  "id": 23,
  "unit": 3,
  "pattern": "〜から〜にかけて",
  "senses": [
   {
    "connect": [
     "名词＋から＋名词＋にかけて"
    ],
    "desc": "从……到……。表示时间、空间的大致范围。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "あの鳥が日本で見られるのは、11月から3月にかけてです。",
      "zh": "在日本能见到那种鸟，是从11月到第二年3月。",
      "jaHtml": "あの<ruby>鳥<rt>とり</rt></ruby>が<ruby>日本<rt>にっぽん</rt></ruby>で<ruby>見ら<rt>みら</rt></ruby>れるのは、11<ruby>月<rt>がつ</rt></ruby><span class=\"target\">から</span>3<ruby>月<rt>がつ</rt></ruby>にかけてです。"
     },
     {
      "src": "",
      "ja": "昨夜は10時から11時にかけて、地震が2回あった。",
      "zh": "昨晚10点到11点之间，发生了两次地震。",
      "jaHtml": "<ruby>昨夜<rt>さくや</rt></ruby>は10<ruby>時<rt>とき</rt></ruby><span class=\"target\">から</span>11<ruby>時に<rt>ときに</rt></ruby>かけて、<ruby>地震<rt>じしん</rt></ruby>が2<ruby>回<rt>かい</rt></ruby>あった。"
     }
    ],
    "note": "表示的是大致范围，不是精确的起止。"
   }
  ],
  "patternHtml": "〜から〜にかけて"
 },
 {
  "id": 24,
  "unit": 3,
  "pattern": "〜から見ると/から見れば/から見て",
  "senses": [
   {
    "connect": [
     "名词＋から見ると/から見れば/から見て"
    ],
    "desc": "从……来看。表示站在某立场上可以得出某种看法、结论、判断。",
    "examples": [
     {
      "src": "2009年7月真题",
      "ja": "平凡なわたしから見ると、彼女はあらゆる才能に恵まれているように思える。",
      "zh": "在平凡的我看来，她似乎拥有所有的才能。",
      "jaHtml": "<ruby>平凡<rt>へいぼん</rt></ruby>なわたし<span class=\"target\">から<ruby>見<rt>み</rt></ruby></span>ると、<ruby>彼女<rt>かのじょ</rt></ruby>はあらゆる<ruby>才能<rt>さいのう</rt></ruby>に<ruby>恵ま<rt>めぐま</rt></ruby>れているように<ruby>思え<rt>おもえ</rt></ruby>る。"
     },
     {
      "src": "",
      "ja": "親の立場から見れば、子どもの意見は無謀に思えるかもしれない。",
      "zh": "从父母的立场来看，孩子的意见也许显得很鲁莽。",
      "jaHtml": "<ruby>親<rt>おや</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby><span class=\"target\">から<ruby>見れ<rt>みれ</rt></ruby>ば</span>、<ruby>子ども<rt>こども</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>は<ruby>無謀<rt>むぼう</rt></ruby>に<ruby>思え<rt>おもえ</rt></ruby>るかもしれない。"
     }
    ],
    "note": "与「〜から言うと」「〜からすると」意思相近，但「〜から見ると」可直接接在表示人物的名词后面。"
   }
  ],
  "patternHtml": "〜から<ruby>見る<rt>みる</rt></ruby>と/から<ruby>見れ<rt>みれ</rt></ruby>ば/から<ruby>見て<rt>みて</rt></ruby>"
 },
 {
  "id": 25,
  "unit": 3,
  "pattern": "〜がる",
  "senses": [
   {
    "connect": [
     "い形容词词干＋がる",
     "な形容词词干＋がる"
    ],
    "desc": "感到……、觉得……。表示第三人称的感情、感受。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "急に大きな音がしたので、その子は怖がって泣いてしまった。",
      "zh": "突然发出很大的声响，那个孩子害怕地哭了。",
      "jaHtml": "<ruby>急に<rt>きゅうに</rt></ruby><ruby>大き<rt>おおき</rt></ruby>な<ruby>音<rt>おと</rt></ruby>がしたので、その<ruby>子<rt>こ</rt></ruby>は<span class=\"target\"><ruby>怖が<rt>こわが</rt></ruby>っ</span>て<ruby>泣い<rt>ない</rt></ruby>てしまった。"
     },
     {
      "src": "2001年真题",
      "ja": "ストーブがないので、子どもたちは寒がっている。",
      "zh": "因为没有暖炉，所以孩子们感到寒冷。",
      "jaHtml": "ストーブがないので、<ruby>子ども<rt>こども</rt></ruby>たちは<ruby>寒<rt>かん</rt></ruby><span class=\"target\">がっ</span>ている。"
     }
    ],
    "note": "只能用于第三人称的感情、感受；い形容词去「い」后接「がる」。"
   }
  ],
  "patternHtml": "〜がる"
 },
 {
  "id": 26,
  "unit": 3,
  "pattern": "〜代わりに",
  "senses": [
   {
    "connect": [
     "名词＋の＋代わりに",
     "动词普通形＋代わりに",
     "い形容词辞书形＋代わりに"
    ],
    "desc": "代替……、作为……的替代。表示代替某人做某事，或用某物代替某物。",
    "examples": [
     {
      "src": "",
      "ja": "社長のかわりに、副社長が挨拶をした。",
      "zh": "代替社长，由副社长致辞。",
      "jaHtml": "<ruby>社長<rt>しゃちょう</rt></ruby>の<span class=\"target\">かわりに</span>、<ruby>副社長<rt>ふくしゃちょう</rt></ruby>が<ruby>挨拶<rt>あいさつ</rt></ruby>をした。"
     },
     {
      "src": "",
      "ja": "わたしが課長のかわりに、会議に出た。",
      "zh": "我代替课长去参加了会议。",
      "jaHtml": "わたしが<ruby>課長<rt>かちょう</rt></ruby>の<span class=\"target\">かわりに</span>、<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出た<rt>でた</rt></ruby>。"
     }
    ],
    "note": "也可表示作为交换的条件，如：手伝ってもらう代わりに、昼ご飯をごちそうしよう。"
   }
  ],
  "kana": [
   "かわりに"
  ],
  "patternHtml": "〜<ruby>代わり<rt>かわり</rt></ruby>に"
 },
 {
  "id": 27,
  "unit": 3,
  "pattern": "〜気味",
  "senses": [
   {
    "connect": [
     "名词＋気味",
     "动词ます形＋気味"
    ],
    "desc": "（觉得）有点……、稍微……。表示具有某种感觉或倾向，但并不十分确定。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "このところ忙しくて少し疲れ気味だから、今日は早く帰ることにした。",
      "zh": "最近很忙，觉得有点累，所以今天决定早点回去。",
      "jaHtml": "このところ<ruby>忙しく<rt>いそがしく</rt></ruby>て<ruby>少し<rt>すこし</rt></ruby><ruby>疲れ<rt>つかれ</rt></ruby><span class=\"target\"><ruby>気味<rt>ぎみ</rt></ruby></span>だから、<ruby>今日は<rt>きょうは</rt></ruby><ruby>早く<rt>はやく</rt></ruby><ruby>帰る<rt>かえる</rt></ruby>ことにした。"
     },
     {
      "src": "",
      "ja": "最近太り気味なので、夕食を抜くことにした。",
      "zh": "最近觉得有点胖，所以决定不吃晚饭。",
      "jaHtml": "<ruby>最近<rt>さいきん</rt></ruby><ruby>太り<rt>ふとり</rt></ruby><span class=\"target\"><ruby>気味<rt>ぎみ</rt></ruby></span>なので、<ruby>夕食<rt>ゆうしょく</rt></ruby>を<ruby>抜く<rt>ぬく</rt></ruby>ことにした。"
     }
    ],
    "note": "多用于不好的倾向；「〜気味の」后续名词作定语。"
   }
  ],
  "patternHtml": "〜<ruby>気味<rt>ぎみ</rt></ruby>"
 },
 {
  "id": 28,
  "unit": 3,
  "pattern": "〜きる/きれる/きれない",
  "senses": [
   {
    "connect": [
     "动词ます形＋きる/きれる/きれない"
    ],
    "desc": "……完。表示把某动作彻底做完。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "こんなに長い小説は、1日では読みきれない。",
      "zh": "这么长的小说，一天之内是看不完的。",
      "jaHtml": "こんなに<ruby>長い<rt>ながい</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>は、1<ruby>日<rt>にち</rt></ruby>では<ruby>読み<rt>よみ</rt></ruby><span class=\"target\">きれ</span>ない。"
     },
     {
      "src": "",
      "ja": "お小遣いを使いきってしまった。",
      "zh": "把零花钱全用光了。",
      "jaHtml": "お<ruby>小遣い<rt>こづかい</rt></ruby>を<ruby>使い<rt>つかい</rt></ruby><span class=\"target\">きって</span>しまった。"
     }
    ],
    "note": "「〜きれる」表示「能够完成」，是「〜きる」的可能形式；「〜きれない」是其否定形式。"
   }
  ],
  "patternHtml": "〜きる/きれる/きれない"
 },
 {
  "id": 29,
  "unit": 3,
  "pattern": "〜くせに",
  "senses": [
   {
    "connect": [
     "动词普通形＋くせに",
     "い形容词普通形＋くせに",
     "な形容词词干＋な＋くせに",
     "名词＋の＋くせに"
    ],
    "desc": "明明……却……、虽然……但是……。表示逆接，带有指责、抱怨、不满的语气。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "姉は食事のことで文句ばかり言っているくせに、自分では何も作らない。",
      "zh": "姐姐总是对饭菜挑三拣四，但自己却什么都不做。",
      "jaHtml": "<ruby>姉<rt>あね</rt></ruby>は<ruby>食事<rt>しょくじ</rt></ruby>のことで<ruby>文句<rt>もんく</rt></ruby>ばかり<ruby>言って<rt>いって</rt></ruby>いる<span class=\"target\">くせに</span>、<ruby>自分<rt>じぶん</rt></ruby>では<ruby>何も<rt>なにも</rt></ruby><ruby>作ら<rt>つくら</rt></ruby>ない。"
     },
     {
      "src": "",
      "ja": "知っているくせに、知らないふりをしている。",
      "zh": "明明知道，却装作不知道。",
      "jaHtml": "<ruby>知って<rt>しって</rt></ruby>いる<span class=\"target\">くせに</span>、<ruby>知ら<rt>しら</rt></ruby>ないふりをしている。"
     }
    ],
    "note": "表示指责、抱怨、不满的语气很强；主语必须是人，且前后项必须是同一主语。"
   }
  ],
  "patternHtml": "〜くせに"
 },
 {
  "id": 30,
  "unit": 3,
  "pattern": "〜くらい/ぐらい",
  "senses": [
   {
    "connect": [
     "名词＋くらい/ぐらい",
     "动词普通形＋くらい/ぐらい"
    ],
    "desc": "大约……。表示大概的数量、程度。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "皿が10枚ぐらいあります。",
      "zh": "大约有10个盘子。",
      "jaHtml": "<ruby>皿<rt>さら</rt></ruby>が10<ruby>枚<rt>まい</rt></ruby><span class=\"target\">ぐらい</span>あります。"
     },
     {
      "src": "",
      "ja": "A「日本に来て、どのぐらいですか。」B「2週間です。」",
      "zh": "A：来日本多久了？B：两周了。",
      "jaHtml": "A「<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>来て<rt>きて</rt></ruby>、どの<span class=\"target\">ぐらい</span>ですか。」B「2<ruby>週間<rt>しゅうかん</rt></ruby>です。」"
     }
    ],
    "note": "「〜くらい/ぐらい」是口语，「〜ほど」为书面语。"
   },
   {
    "connect": [
     "动词普通形＋くらい/ぐらい"
    ],
    "desc": "得……、简直……。表示程度（达到某程度）。",
    "examples": [
     {
      "src": "",
      "ja": "彼ぐらい頭のいい人はいない。",
      "zh": "没有比他更聪明的人了。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby><span class=\"target\">ぐらい</span><ruby>頭<rt>あたま</rt></ruby>のいい<ruby>人<rt>にん</rt></ruby>はいない。"
     },
     {
      "src": "",
      "ja": "涙が出るくらいうれしかった。",
      "zh": "高兴得都要流泪了。",
      "jaHtml": "<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出る<rt>でる</rt></ruby><span class=\"target\">くらい</span>うれしかった。"
     }
    ],
    "note": "表示最高程度时，常与「いない/ない」等搭配。"
   }
  ],
  "patternHtml": "〜くらい/ぐらい"
 },
 {
  "id": 31,
  "unit": 4,
  "pattern": "〜こそ",
  "senses": [
   {
    "connect": [
     "名词＋こそ"
    ],
    "desc": "正是……、才是……。表示强调。",
    "examples": [
     {
      "src": "",
      "ja": "A「どうぞよろしくお願いします。」B「いいえ、こちらこそ。」",
      "zh": "A：请多多关照。B：哪里哪里，我才要请您多多关照。",
      "jaHtml": "A「どうぞよろしくお<ruby>願い<rt>ねがい</rt></ruby>します。」B「いいえ、こちら<span class=\"target\">こそ</span>。」"
     },
     {
      "src": "",
      "ja": "今年こそ試験に合格できるよう、頑張る。",
      "zh": "今年一定要通过考试，我会努力的。",
      "jaHtml": "<ruby>今年<rt>こんねん</rt></ruby><span class=\"target\">こそ</span><ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>できるよう、<ruby>頑張る<rt>がんばる</rt></ruby>。"
     }
    ],
    "note": "「〜こそ」表示强调；「〜てこそ」表示「只有……才……」。"
   }
  ],
  "patternHtml": "〜こそ"
 },
 {
  "id": 32,
  "unit": 4,
  "pattern": "〜ことだ",
  "senses": [
   {
    "connect": [
     "动词辞书形＋こと",
     "动词ない形＋こと"
    ],
    "desc": "要……、不要……。表示命令、禁止（多用于书面语、告示）。",
    "examples": [
     {
      "src": "",
      "ja": "指定の場所以外に自転車を止めないこと。",
      "zh": "不要在指定区域以外停放自行车。",
      "jaHtml": "<ruby>指定<rt>してい</rt></ruby>の<ruby>場所以外<rt>ばしょいがい</rt></ruby>に<ruby>自転車<rt>じてんしゃ</rt></ruby>を<ruby>止め<rt>とめ</rt></ruby>ない<span class=\"target\">こと</span>。"
     },
     {
      "src": "",
      "ja": "実験室に勝手に入らないこと。",
      "zh": "不许擅自进入实验室。",
      "jaHtml": "<ruby>実験室<rt>じっけんしつ</rt></ruby>に<ruby>勝手<rt>かって</rt></ruby>に<ruby>入ら<rt>いら</rt></ruby>ない<span class=\"target\">こと</span>。"
     }
    ],
    "note": "「〜こと」相当于「〜なさい」；「〜ないこと」相当于「〜ないでください」。"
   },
   {
    "connect": [
     "句子的普通形・礼貌形＋こと"
    ],
    "desc": "……啊。表示感叹、惊讶的心情。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "まあ、なんてきれいな夕焼けだこと。",
      "zh": "啊，多美的晚霞！",
      "jaHtml": "まあ、なんてきれいな<ruby>夕焼け<rt>ゆうやけ</rt></ruby>だ<span class=\"target\">こと</span>。"
     },
     {
      "src": "",
      "ja": "まあ、きれいに咲いたこと。",
      "zh": "啊，花开得真美！",
      "jaHtml": "まあ、きれいに<ruby>咲い<rt>さい</rt></ruby>た<span class=\"target\">こと</span>。"
     }
    ],
    "note": "是口语，多用于女性；有时用「どんなに/なんと＋…＋ことだろう」表示感叹。"
   }
  ],
  "patternHtml": "〜ことだ"
 },
 {
  "id": 33,
  "unit": 4,
  "pattern": "こ/そ/あ",
  "senses": [
   {
    "connect": [
     "この/その/あの＋名词",
     "こんな/そんな/あんな＋名词",
     "こう/そう/ああ＋动词",
     "こんなに/そんなに/あんなに＋形容词"
    ],
    "desc": "这样的、那样的、那样的（指示代词的近称/中称/远称）。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "A「私の指輪を見て。昨日買ったの。かわいいでしょ。」B「いいなあ、わたしもそんな指輪がほしいなあ。」",
      "zh": "A：看我的戒指，是昨天买的，很可爱吧。B：真不错，我也想要那样的戒指。",
      "jaHtml": "A「<ruby>私<rt>わたし</rt></ruby>の<ruby>指輪<rt>ゆびわ</rt></ruby>を<ruby>見て<rt>みて</rt></ruby>。<ruby>昨日<rt>きのう</rt></ruby><ruby>買っ<rt>かっ</rt></ruby>たの。かわいいでしょ。」B「いいなあ、わたしも<span class=\"target\">そ</span>んな<ruby>指輪<rt>ゆびわ</rt></ruby>がほしいなあ。」"
     },
     {
      "src": "2007年真题",
      "ja": "このゲームはこうやって遊ぶんです。",
      "zh": "这个游戏是这样玩的。",
      "jaHtml": "<span class=\"target\">こ</span>のゲームはこうやって<ruby>遊ぶ<rt>あそぶ</rt></ruby>んです。"
     }
    ],
    "note": "「こ」指代自己说的内容；「そ」指代对方说的内容（即前面说过的事物）；「あ」指代双方都知道的事实，还可用于回忆。"
   }
  ],
  "patternHtml": "こ/そ/あ"
 },
 {
  "id": 34,
  "unit": 4,
  "pattern": "〜ことがある/こともある",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ことがある",
     "动词ない形＋ことがある"
    ],
    "desc": "有时……。表示有时或偶尔发生某事。",
    "examples": [
     {
      "src": "2003年真题",
      "ja": "時々日本の歌を歌うことがあります。",
      "zh": "有时会唱日本的歌。",
      "jaHtml": "<ruby>時々<rt>ときどき</rt></ruby><ruby>日本<rt>にっぽん</rt></ruby>の<ruby>歌を<rt>うたを</rt></ruby><ruby>歌う<rt>うたう</rt></ruby><span class=\"target\">こと</span>があります。"
     },
     {
      "src": "",
      "ja": "仕事が忙しいときは、昼ごはんを食べないことがあります。",
      "zh": "工作忙的时候，有时会不吃午饭。",
      "jaHtml": "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>忙しい<rt>いそがしい</rt></ruby>ときは、<ruby>昼<rt>ひる</rt></ruby>ごはんを<ruby>食べ<rt>たべ</rt></ruby>ない<span class=\"target\">こと</span>があります。"
     }
    ],
    "note": "常与「たまに/時々」等副词搭配使用。"
   },
   {
    "connect": [
     "动词た形＋ことがある"
    ],
    "desc": "（曾经）……过。表示曾经经历过、出现过某种事情。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "この漫画はまだ読んだことがない。",
      "zh": "这本漫画还没有读过。",
      "jaHtml": "この<ruby>漫画<rt>まんが</rt></ruby>はまだ<ruby>読んだ<rt>よんだ</rt></ruby><span class=\"target\">こと</span>がない。"
     },
     {
      "src": "",
      "ja": "あそこへ行ったことがあります。",
      "zh": "我曾经去过那里。",
      "jaHtml": "あそこへ<ruby>行った<rt>いった</rt></ruby><span class=\"target\">こと</span>があります。"
     }
    ],
    "note": "否定形式是「〜たことがない」。"
   }
  ],
  "patternHtml": "〜ことがある/こともある"
 },
 {
  "id": 35,
  "unit": 4,
  "pattern": "〜ことができる",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ことができる"
    ],
    "desc": "能够……、可以……。表示能力或可能。",
    "examples": [
     {
      "src": "",
      "ja": "日本語で手紙を書くことができます。",
      "zh": "能用日语写信。",
      "jaHtml": "<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>書く<rt>かく</rt></ruby><span class=\"target\">ことができ</span>ます。"
     },
     {
      "src": "",
      "ja": "駅まで歩いていくことができます。",
      "zh": "可以步行去车站。",
      "jaHtml": "<ruby>駅<rt>えき</rt></ruby>まで<ruby>歩い<rt>あるい</rt></ruby>ていく<span class=\"target\">ことができ</span>ます。"
     }
    ],
    "note": "书面语中「ことができる」也可省略为「ことが」；口语中常用可能动词（書ける、行ける）替代。"
   }
  ],
  "patternHtml": "〜ことができる"
 },
 {
  "id": 36,
  "unit": 4,
  "pattern": "〜ことに",
  "senses": [
   {
    "connect": [
     "动词た形/ない形＋ことに",
     "い形容词词干＋い＋ことに",
     "な形容词词干＋な＋ことに"
    ],
    "desc": "令人……的是。表示说话人的感情（惊讶、遗憾、高兴等），多用于句首。",
    "examples": [
     {
      "src": "",
      "ja": "残念なことに、彼は来なかった。",
      "zh": "遗憾的是，他没有来。",
      "jaHtml": "<ruby>残念<rt>ざんねん</rt></ruby>な<span class=\"target\">ことに</span>、<ruby>彼は<rt>かれは</rt></ruby><ruby>来な<rt>こな</rt></ruby>かった。"
     },
     {
      "src": "",
      "ja": "驚いたことに、彼は試験に合格した。",
      "zh": "令人惊讶的是，他通过了考试。",
      "jaHtml": "<ruby>驚い<rt>おどろい</rt></ruby>た<span class=\"target\">ことに</span>、<ruby>彼は<rt>かれは</rt></ruby><ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した。"
     }
    ],
    "note": "常与「驚く/残念/うれしい/悲しい/困る」等表示感情的词搭配。"
   }
  ],
  "patternHtml": "〜ことに"
 },
 {
  "id": 37,
  "unit": 4,
  "pattern": "〜ごとに",
  "senses": [
   {
    "connect": [
     "名词＋ごとに",
     "动词辞书形＋ごとに"
    ],
    "desc": "每……。表示每次、每隔。",
    "examples": [
     {
      "src": "",
      "ja": "この薬は1時間ごとに飲んでください。",
      "zh": "这个药请每隔一小时吃一次。",
      "jaHtml": "この<ruby>薬<rt>くすり</rt></ruby>は1<ruby>時間<rt>じかん</rt></ruby><span class=\"target\">ごとに</span><ruby>飲ん<rt>のん</rt></ruby>でください。"
     },
     {
      "src": "",
      "ja": "季節が変わるごとに、街の様子も変わる。",
      "zh": "每到季节变换，街景也随之变化。",
      "jaHtml": "<ruby>季節<rt>きせつ</rt></ruby>が<ruby>変わ<rt>かわ</rt></ruby>る<span class=\"target\">ごとに</span>、<ruby>街<rt>まち</rt></ruby>の<ruby>様子<rt>ようす</rt></ruby>も<ruby>変わ<rt>かわ</rt></ruby>る。"
     }
    ],
    "note": "「〜ごとに」强调每次、每处都如此；「〜おきに」强调间隔。"
   }
  ],
  "patternHtml": "〜ごとに"
 },
 {
  "id": 38,
  "unit": 4,
  "pattern": "〜ことにする",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ことにする",
     "动词ない形＋ことにする"
    ],
    "desc": "决定……。表示自己做出决定（主观意志）。",
    "examples": [
     {
      "src": "",
      "ja": "来年、日本へ留学することにしました。",
      "zh": "决定明年去日本留学。",
      "jaHtml": "<ruby>来年<rt>らいねん</rt></ruby>、<ruby>日本<rt>にっぽん</rt></ruby>へ<ruby>留学<rt>りゅうがく</rt></ruby>する<span class=\"target\">ことに</span>しました。"
     },
     {
      "src": "",
      "ja": "毎朝、ジョギングすることにしている。",
      "zh": "（我）决定每天早晨慢跑。",
      "jaHtml": "<ruby>毎朝<rt>まいあさ</rt></ruby>、ジョギングする<span class=\"target\">ことに</span>している。"
     }
    ],
    "note": "「〜ことにしている」表示一直坚持的决定、习惯。"
   }
  ],
  "patternHtml": "〜ことにする"
 },
 {
  "id": 39,
  "unit": 4,
  "pattern": "〜ことになる",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ことになる",
     "动词ない形＋ことになる"
    ],
    "desc": "规定为……、结果是……。表示客观的决定、结果（不是自己的意志）。",
    "examples": [
     {
      "src": "",
      "ja": "会議は来週の水曜日に行われることになりました。",
      "zh": "会议定于下周三举行。",
      "jaHtml": "<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>水曜日<rt>すいようび</rt></ruby>に<ruby>行わ<rt>おこなわ</rt></ruby>れる<span class=\"target\">ことにな</span>りました。"
     },
     {
      "src": "",
      "ja": "来月から大阪に転勤することになった。",
      "zh": "决定下个月调到大阪工作。",
      "jaHtml": "<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>大阪<rt>おおさか</rt></ruby>に<ruby>転勤<rt>てんきん</rt></ruby>する<span class=\"target\">ことになっ</span>た。"
     }
    ],
    "note": "与「〜ことにする」（主观决定）相对，多用于客观的决定、安排。"
   }
  ],
  "patternHtml": "〜ことになる"
 },
 {
  "id": 40,
  "unit": 4,
  "pattern": "〜ことになっている",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ことになっている",
     "动词ない形＋ことになっている"
    ],
    "desc": "按规定……、预定……。表示规则、惯例、预定（客观存在的决定）。",
    "examples": [
     {
      "src": "",
      "ja": "この寮では、10時に門が閉まることになっている。",
      "zh": "这个宿舍规定10点关门。",
      "jaHtml": "この<ruby>寮<rt>りょう</rt></ruby>では、10<ruby>時に<rt>ときに</rt></ruby><ruby>門<rt>もん</rt></ruby>が<ruby>閉ま<rt>しま</rt></ruby>る<span class=\"target\">ことになってい</span>る。"
     },
     {
      "src": "",
      "ja": "来週、出張に行くことになっている。",
      "zh": "预定下周出差。",
      "jaHtml": "<ruby>来週<rt>らいしゅう</rt></ruby>、<ruby>出張<rt>しゅっちょう</rt></ruby>に<ruby>行く<rt>いく</rt></ruby><span class=\"target\">ことになってい</span>る。"
     }
    ],
    "note": "表示已经定好的规定或安排，不是说话人现场的决定。"
   }
  ],
  "patternHtml": "〜ことになっている"
 },
 {
  "id": 41,
  "unit": 5,
  "pattern": "〜ことはない/こともない",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ことはない"
    ],
    "desc": "不必……、用不着……。表示没有必要做某事。",
    "examples": [
     {
      "src": "2009年7月真题",
      "ja": "あなたが悪いと思うことはない。あなたのせいではない。",
      "zh": "你不必觉得自己有错，这不是你的责任。",
      "jaHtml": "あなたが<ruby>悪い<rt>わるい</rt></ruby>と<ruby>思う<rt>おもう</rt></ruby><span class=\"target\">ことはない</span>。あなたのせいではない。"
     },
     {
      "src": "",
      "ja": "電話で話せばいい、わざわざ行くことはない。",
      "zh": "打个电话就行了，不必特意去。",
      "jaHtml": "<ruby>電話<rt>でんわ</rt></ruby>で<ruby>話せ<rt>はなせ</rt></ruby>ばいい、わざわざ<ruby>行く<rt>いく</rt></ruby><span class=\"target\">ことはない</span>。"
     }
    ],
    "note": "相当于「〜する必要はない」，用于给对方忠告、劝告，常与副词「わざわざ」呼应使用。"
   }
  ],
  "patternHtml": "〜ことはない/こともない"
 },
 {
  "id": 42,
  "unit": 5,
  "pattern": "〜さ",
  "senses": [
   {
    "connect": [
     "い形容词词干＋さ",
     "な形容词词干＋さ"
    ],
    "desc": "……度、……之大。表示性质、状态的程度，构成名词。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "私の部屋の広さはこの部屋と同じぐらいです。",
      "zh": "我房间的大小和这个房间差不多。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>の<span class=\"target\"><ruby>広さ<rt>ひろさ</rt></ruby></span>はこの<ruby>部屋<rt>へや</rt></ruby>と<ruby>同じ<rt>おなじ</rt></ruby>ぐらいです。"
     },
     {
      "src": "2000年真题",
      "ja": "そのかばんの軽さに驚いた。",
      "zh": "那个包的轻让我吃惊。",
      "jaHtml": "そのかばんの<span class=\"target\"><ruby>軽さ<rt>かるさ</rt></ruby></span>に<ruby>驚い<rt>おどろい</rt></ruby>た。"
     },
     {
      "src": "",
      "ja": "富士山の高さは3776メートルです。",
      "zh": "富士山的高度是3776米。",
      "jaHtml": "<ruby>富士山<rt>ふじさん</rt></ruby>の<span class=\"target\"><ruby>高さ<rt>たかさ</rt></ruby></span>は3776メートルです。"
     }
    ],
    "note": "形容词词干接「〜さ」可构成表示程度的名词。"
   }
  ],
  "patternHtml": "〜さ"
 },
 {
  "id": 43,
  "unit": 5,
  "pattern": "〜最中に",
  "senses": [
   {
    "connect": [
     "动词ている形＋最中に",
     "名词＋の＋最中に"
    ],
    "desc": "正在……的时候。表示某个动作正在进行中。",
    "examples": [
     {
      "src": "2002年真题",
      "ja": "電話している最中に、誰かが玄関に来た。",
      "zh": "正在打电话的时候，有人来门口了。",
      "jaHtml": "<ruby>電話<rt>でんわ</rt></ruby>している<span class=\"target\"><ruby>最中<rt>さなか</rt></ruby>に</span>、<ruby>誰か<rt>だれか</rt></ruby>が<ruby>玄関<rt>げんかん</rt></ruby>に<ruby>来た<rt>きた</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "食事の最中にお客さんが来た。",
      "zh": "正在吃饭的时候来客人了。",
      "jaHtml": "<ruby>食事<rt>しょくじ</rt></ruby>の<span class=\"target\"><ruby>最中<rt>さなか</rt></ruby>に</span>お<ruby>客<rt>きゃく</rt></ruby>さんが<ruby>来た<rt>きた</rt></ruby>。"
     }
    ],
    "note": "「〜最中に、〜」表示前项正在进行时，后项突然发生了意外的事情。"
   }
  ],
  "patternHtml": "〜<ruby>最中<rt>さなか</rt></ruby>に"
 },
 {
  "id": 44,
  "unit": 5,
  "pattern": "〜さえ",
  "senses": [
   {
    "connect": [
     "名词＋さえ",
     "助词＋さえ"
    ],
    "desc": "甚至……、连……都……。表示举出一个极端的例子，从而类推其他事物。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "最初は怖くてプールに入ることさえできなかったが、今では50メートルも泳げるようになった。",
      "zh": "刚开始很害怕，连游泳池都不敢进，现在已经能游50米了。",
      "jaHtml": "<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>怖く<rt>こわく</rt></ruby>てプールに<ruby>入る<rt>いる</rt></ruby>こと<span class=\"target\">さえ</span>できなかったが、<ruby>今<rt>いま</rt></ruby>では50メートルも<ruby>泳げ<rt>およげ</rt></ruby>るようになった。"
     },
     {
      "src": "2001年真题",
      "ja": "日本に来たばかりのときは、あいさつさえ日本語でできなかった。",
      "zh": "刚来日本的时候，连打招呼都不会用日语。",
      "jaHtml": "<ruby>日本<rt>にっぽん</rt></ruby>に<ruby>来た<rt>きた</rt></ruby>ばかりのときは、あいさつ<span class=\"target\">さえ</span><ruby>日本語<rt>にほんご</rt></ruby>でできなかった。"
     }
    ],
    "note": "「〜さえ」相当于「〜も」，「〜でさえ」相当于「〜でも」，语气更强；还有「〜さえも」「〜でさえも」的用法。"
   }
  ],
  "patternHtml": "〜さえ"
 },
 {
  "id": 45,
  "unit": 5,
  "pattern": "〜さえ〜ば",
  "senses": [
   {
    "connect": [
     "动词ます形＋さえ＋ば",
     "い形容词词干＋く＋さえ＋ば",
     "な形容词词干＋で＋さえ＋ば",
     "名词＋さえ＋ば"
    ],
    "desc": "只要……就……。表示只要具备了该条件，某件事情就能成立。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "最近、自分さえよければいいという考えの人が増えている。",
      "zh": "最近，认为只要自己好就行的人多起来了。",
      "jaHtml": "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby><span class=\"target\">さえ</span>よければいいという<ruby>考え<rt>かんがえ</rt></ruby>の<ruby>人<rt>にん</rt></ruby>が<ruby>増え<rt>ふえ</rt></ruby>ている。"
     },
     {
      "src": "",
      "ja": "仕事が忙しくさえなければ、英語の勉強を続けられる。",
      "zh": "只要工作不忙，就能继续学英语。",
      "jaHtml": "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>忙しく<rt>いそがしく</rt></ruby><span class=\"target\">さえ</span>なければ、<ruby>英語<rt>えいご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>続け<rt>つづけ</rt></ruby>られる。"
     }
    ],
    "note": "表示只要具备了该条件，某事就能成立。"
   }
  ],
  "patternHtml": "〜さえ〜ば"
 },
 {
  "id": 46,
  "unit": 5,
  "pattern": "〜(さ)せられる（使役受身）",
  "senses": [
   {
    "connect": [
     "一类动词ない形＋せられる/される",
     "二类、三类动词ない形＋させられる"
    ],
    "desc": "被迫……、不由得……。表示被迫做某事或自然而然产生的情感。",
    "examples": [
     {
      "src": "",
      "ja": "田中君、きみ、また大阪に出張なんだって？ ええ、ついこの前も出張に行かされたばかりなんです。",
      "zh": "听说你又要去大阪出差？是啊，前不久刚被派去出差。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby><ruby>君<rt>くん</rt></ruby>、きみ、また<ruby>大阪<rt>おおさか</rt></ruby>に<ruby>出張<rt>しゅっちょう</rt></ruby>なんだって？ ええ、ついこの<ruby>前<rt>まえ</rt></ruby>も<ruby>出張<rt>しゅっちょう</rt></ruby>に<ruby>行か<rt>いか</rt></ruby><span class=\"target\">され</span>たばかりなんです。"
     },
     {
      "src": "",
      "ja": "この映画を見て、将来のことを考えさせられた。",
      "zh": "看了这部电影，不由得开始思考将来。",
      "jaHtml": "この<ruby>映画<rt>えいが</rt></ruby>を<ruby>見て<rt>みて</rt></ruby>、<ruby>将来<rt>しょうらい</rt></ruby>のことを<ruby>考え<rt>かんがえ</rt></ruby><span class=\"target\">させられ</span>た。"
     }
    ],
    "note": "使役被动形：一类动词「行く→行かされる」、二类三类动词「食べる→食べさせられる」。"
   }
  ],
  "kana": [
   "させられる",
   "される"
  ],
  "patternHtml": "〜(さ)せられる（<ruby>使役<rt>しえき</rt></ruby><ruby>受身<rt>うけみ</rt></ruby>）"
 },
 {
  "id": 47,
  "unit": 5,
  "pattern": "〜しか〜ない",
  "senses": [
   {
    "connect": [
     "名词＋しか＋否定",
     "助词＋しか＋否定"
    ],
    "desc": "只有……、仅……。表示限定。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "あのレストランは予約した人しか入れません。",
      "zh": "那家餐厅只有预约的人才能进。",
      "jaHtml": "あのレストランは<ruby>予約<rt>よやく</rt></ruby>した<ruby>人<rt>にん</rt></ruby><span class=\"target\">しか</span><ruby>入れ<rt>いれ</rt></ruby>ません。"
     },
     {
      "src": "2006年真题",
      "ja": "残り5分しかない。急ごう。",
      "zh": "只剩5分钟了，快点吧。",
      "jaHtml": "<ruby>残り<rt>のこり</rt></ruby>5<ruby>分<rt>ふん</rt></ruby><span class=\"target\">しかない</span>。<ruby>急ご<rt>いそご</rt></ruby>う。"
     }
    ],
    "note": "接在数量词后时，多强调说话人不满、遗憾等主观感情。"
   }
  ],
  "patternHtml": "〜しか〜ない"
 },
 {
  "id": 48,
  "unit": 5,
  "pattern": "〜しかない",
  "senses": [
   {
    "connect": [
     "动词辞书形＋しかない"
    ],
    "desc": "只好……。表示除此以外别无他法。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "最近の食べ物は安全だとはいえないので、もう自分で作るしかない。",
      "zh": "最近的食物不能说安全，所以只好自己做了。",
      "jaHtml": "<ruby>最近<rt>さいきん</rt></ruby>の<ruby>食べ物<rt>たべもの</rt></ruby>は<ruby>安全<rt>あんぜん</rt></ruby>だとはいえないので、もう<ruby>自分<rt>じぶん</rt></ruby>で<ruby>作る<rt>つくる</rt></ruby><span class=\"target\">しかない</span>。"
     },
     {
      "src": "2002年真题",
      "ja": "ここまで来たらもうやるしかない。",
      "zh": "到了这个地步只能做了。",
      "jaHtml": "ここまで<ruby>来た<rt>きた</rt></ruby>らもうやる<span class=\"target\">しかない</span>。"
     }
    ],
    "note": "与「〜ほかない」意思相同。"
   }
  ],
  "patternHtml": "〜しかない"
 },
 {
  "id": 49,
  "unit": 5,
  "pattern": "〜上/上は/上の",
  "senses": [
   {
    "connect": [
     "名词＋上/上は/上の"
    ],
    "desc": "在……上、……方面。表示在某个范围、某方面、某种立场。",
    "examples": [
     {
      "src": "",
      "ja": "理論上は可能でも、現実にはかなり難しいと思う。",
      "zh": "理论上可行，但现实中很难。",
      "jaHtml": "<span class=\"target\"><ruby>理論上<rt>りろんじょう</rt></ruby>は</span><ruby>可能<rt>かのう</rt></ruby>でも、<ruby>現実<rt>げんじつ</rt></ruby>にはかなり<ruby>難しい<rt>むずかしい</rt></ruby>と<ruby>思う<rt>おもう</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "自分の仕事上のミスで会社に大きな損害を与えてしまった。",
      "zh": "因为自己工作上的失误，给公司造成了很大损失。",
      "jaHtml": "<ruby>自分<rt>じぶん</rt></ruby>の<span class=\"target\"><ruby>仕事上<rt>しごとじょう</rt></ruby>の</span>ミスで<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>大き<rt>おおき</rt></ruby>な<ruby>損害<rt>そんがい</rt></ruby>を<ruby>与え<rt>あたえ</rt></ruby>てしまった。"
     },
     {
      "src": "",
      "ja": "これはただ形式上の問題だから気にしなくてもいい。",
      "zh": "这只是形式上的问题，不必介意。",
      "jaHtml": "これはただ<span class=\"target\"><ruby>形式上<rt>けいしきじょう</rt></ruby>の</span><ruby>問題<rt>もんだい</rt></ruby>だから<ruby>気に<rt>きに</rt></ruby>しなくてもいい。"
     }
    ],
    "note": "「〜上の」后续名词作定语；「上」前常接「教育/歴史/仕事/技術/経済」等词。"
   }
  ],
  "kana": [
   "じょう",
   "じょうは",
   "じょうの"
  ],
  "patternHtml": "〜<ruby>上<rt>うえ</rt></ruby>/<ruby>上<rt>うえ</rt></ruby>は/<ruby>上の<rt>うえの</rt></ruby>"
 },
 {
  "id": 50,
  "unit": 5,
  "pattern": "〜ず(に)",
  "senses": [
   {
    "connect": [
     "动词ない形＋ず(に)"
    ],
    "desc": "不……就……。表示对动作、状态的否定或表示原因。（する→せず）",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "辞書を使わずに日本語の新聞を読むことができますか。",
      "zh": "你能不用字典看日语报纸吗？",
      "jaHtml": "<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>使わ<rt>つかわ</rt></ruby><span class=\"target\">ずに</span><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>読む<rt>よむ</rt></ruby>ことができますか。"
     },
     {
      "src": "2004年真题",
      "ja": "テキストを見ずに、答えてください。",
      "zh": "请不要看教科书回答。",
      "jaHtml": "テキストを<ruby>見<rt>み</rt></ruby><span class=\"target\">ずに</span>、<ruby>答え<rt>こたえ</rt></ruby>てください。"
     },
     {
      "src": "",
      "ja": "途中で諦めず、最後まで頑張ってください。",
      "zh": "不要中途放弃，请坚持到最后。",
      "jaHtml": "<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>諦め<rt>あきらめ</rt></ruby><span class=\"target\">ず</span>、<ruby>最後<rt>さいご</rt></ruby>まで<ruby>頑張っ<rt>がんばっ</rt></ruby>てください。"
     }
    ],
    "note": "「〜ず」是书面语，相当于「〜ないで」。"
   }
  ],
  "patternHtml": "〜ず(に)"
 },
 {
  "id": 51,
  "unit": 6,
  "pattern": "〜末に/末の",
  "senses": [
   {
    "connect": [
     "名词＋の＋末に/末の",
     "动词た形＋末に/末の"
    ],
    "desc": "……之后，结果……、最后……。表示经过一番周折之后的结果。",
    "examples": [
     {
      "src": "2003年真题",
      "ja": "この新しい薬は、何年にもわたる研究の末に開発された。",
      "zh": "这种新药是经过多年的研究才研制出来的。",
      "jaHtml": "この<ruby>新しい<rt>あたらしい</rt></ruby><ruby>薬<rt>くすり</rt></ruby>は、<ruby>何年<rt>なんねん</rt></ruby>にもわたる<ruby>研究<rt>けんきゅう</rt></ruby>の<span class=\"target\"><ruby>末<rt>まつ</rt></ruby>に</span><ruby>開発<rt>かいはつ</rt></ruby>された。"
     },
     {
      "src": "",
      "ja": "彼は努力の末に、事業に成功した。",
      "zh": "他经过不懈努力，事业终于成功了。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>努力<rt>どりょく</rt></ruby>の<span class=\"target\"><ruby>末<rt>まつ</rt></ruby>に</span>、<ruby>事業<rt>じぎょう</rt></ruby>に<ruby>成功<rt>せいこう</rt></ruby>した。"
     }
    ],
    "note": "「〜末に」可用于积极或消极的结果；「〜末の」后续名词作定语；句末一般以「た」的形式结束。"
   }
  ],
  "kana": [
   "すえに",
   "すえの"
  ],
  "patternHtml": "〜<ruby>末<rt>まつ</rt></ruby>に/<ruby>末<rt>まつ</rt></ruby>の"
 },
 {
  "id": 52,
  "unit": 6,
  "pattern": "〜すぎる",
  "senses": [
   {
    "connect": [
     "动词ます形＋すぎる",
     "い形容词词干＋すぎる",
     "な形容词词干＋すぎる"
    ],
    "desc": "过于……、太……。表示程度上超过一般正常的限度。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "タバコを吸いすぎると、体に悪い。",
      "zh": "吸烟过度对身体有害。",
      "jaHtml": "タバコを<ruby>吸い<rt>すい</rt></ruby><span class=\"target\">すぎ</span>ると、<ruby>体<rt>からだ</rt></ruby>に<ruby>悪い<rt>わるい</rt></ruby>。"
     },
     {
      "src": "2004年真题",
      "ja": "コピーの字が薄すぎて、読めない。",
      "zh": "复印件的字太淡了，看不清。",
      "jaHtml": "コピーの<ruby>字が<rt>じが</rt></ruby><ruby>薄<rt>はく</rt></ruby><span class=\"target\">すぎ</span>て、<ruby>読め<rt>よめ</rt></ruby>ない。"
     }
    ],
    "note": "常用「食べすぎる/飲みすぎる/大きすぎる/高すぎる/小さすぎる」等。"
   }
  ],
  "kana": [
   "すぎる"
  ],
  "patternHtml": "〜すぎる"
 },
 {
  "id": 53,
  "unit": 6,
  "pattern": "〜ずとも",
  "senses": [
   {
    "connect": [
     "动词ない形＋ずとも"
    ],
    "desc": "即使不……也……。（する→せず）",
    "examples": [
     {
      "src": "",
      "ja": "嫌なら行かずともよい。",
      "zh": "如果不想去，不去也行。",
      "jaHtml": "<ruby>嫌な<rt>いやな</rt></ruby>ら<ruby>行か<rt>いか</rt></ruby><span class=\"target\">ずとも</span>よい。"
     },
     {
      "src": "",
      "ja": "この部分は書かずともよい。",
      "zh": "这一部分不写也行。",
      "jaHtml": "この<ruby>部分<rt>ぶぶん</rt></ruby>は<ruby>書か<rt>かか</rt></ruby><span class=\"target\">ずとも</span>よい。"
     },
     {
      "src": "",
      "ja": "そんな簡単なことぐらい聞かずとも分かる。",
      "zh": "这么简单的事，不用问也知道。",
      "jaHtml": "そんな<ruby>簡単<rt>かんたん</rt></ruby>なことぐらい<ruby>聞か<rt>きか</rt></ruby><span class=\"target\">ずとも</span><ruby>分か<rt>わか</rt></ruby>る。"
     }
    ],
    "note": "谓语多接「分かる/いい」等，相当于「〜なくても」。"
   }
  ],
  "patternHtml": "〜ずとも"
 },
 {
  "id": 54,
  "unit": 6,
  "pattern": "〜せいで/せいだ/せいか",
  "senses": [
   {
    "connect": [
     "动词普通形＋せいで/せいだ/せいか",
     "い形容词普通形＋せいで/せいだ/せいか",
     "な形容词词干＋な＋せいで/せいだ/せいか",
     "名词＋の＋せいで/せいだ/せいか"
    ],
    "desc": "都怪……、因为……、大概是因为……吧。表示因为前项的缘故造成了后项不好的结果，说话人责怪、遗憾的语气较强。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "今年は気温が高いせいか、冬になってもなかなか雪が降らない。",
      "zh": "大概是因为今年气温高，即使入冬了也不怎么下雪。",
      "jaHtml": "<ruby>今年<rt>こんねん</rt></ruby>は<ruby>気温<rt>きおん</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby><span class=\"target\">せい</span>か、<ruby>冬<rt>ふゆ</rt></ruby>になってもなかなか<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降ら<rt>ふら</rt></ruby>ない。"
     },
     {
      "src": "",
      "ja": "自分の失敗を人のせいにするな。",
      "zh": "不要把失败归咎于别人。",
      "jaHtml": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>人<rt>にん</rt></ruby>の<span class=\"target\">せい</span>にするな。"
     }
    ],
    "note": "「〜せいか」表示并不十分确定的原因；「〜をせいにする」表示把责任归咎于……。"
   }
  ],
  "kana": [
   "せいで",
   "せいだ",
   "せいか"
  ],
  "patternHtml": "〜せいで/せいだ/せいか"
 },
 {
  "id": 55,
  "unit": 6,
  "pattern": "〜せる/させる（使役）",
  "senses": [
   {
    "connect": [
     "一类动词ない形＋せる",
     "二类、三类动词ない形＋させる"
    ],
    "desc": "让……、使……。表示强制、允许、放任。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "息子に宿題をさせる。",
      "zh": "让孩子做作业。",
      "jaHtml": "<ruby>息子<rt>むすこ</rt></ruby>に<ruby>宿題<rt>しゅくだい</rt></ruby>を<span class=\"target\">させる</span>。"
     },
     {
      "src": "",
      "ja": "お母さんは子どもを庭で遊ばせる。",
      "zh": "妈妈让孩子在院子里玩。",
      "jaHtml": "お<ruby>母さん<rt>かあさん</rt></ruby>は<ruby>子ども<rt>こども</rt></ruby>を<ruby>庭<rt>にわ</rt></ruby>で<ruby>遊ば<rt>あそば</rt></ruby><span class=\"target\">せる</span>。"
     }
    ],
    "note": "他动词时被使役者用助词「に」，但「待つ」虽然是他动词，助词却要用「を」（人を待たせる）。"
   }
  ],
  "kana": [
   "せる",
   "させる"
  ],
  "patternHtml": "〜せる/させる（<ruby>使役<rt>しえき</rt></ruby>）"
 },
 {
  "id": 56,
  "unit": 6,
  "pattern": "〜ぞ",
  "senses": [
   {
    "connect": [
     "句子的普通形＋ぞ"
    ],
    "desc": "用于叮嘱、警告对方注意等。",
    "examples": [
     {
      "src": "",
      "ja": "危ないぞ。",
      "zh": "危险！",
      "jaHtml": "<ruby>危ない<rt>あぶない</rt></ruby><span class=\"target\">ぞ</span>。"
     },
     {
      "src": "",
      "ja": "遅いぞ、早くしろ。",
      "zh": "要迟到了，快点！",
      "jaHtml": "<ruby>遅い<rt>おそい</rt></ruby><span class=\"target\">ぞ</span>、<ruby>早く<rt>はやく</rt></ruby>しろ。"
     }
    ],
    "note": "男性用语，主要用于上级对下级、长辈对晚辈的场合。"
   },
   {
    "connect": [],
    "desc": "表示自言自语（把自己的判断、决定说给自己听）。",
    "examples": [
     {
      "src": "",
      "ja": "さあ、行くぞ。",
      "zh": "好，出发了！",
      "jaHtml": "さあ、<ruby>行く<rt>いく</rt></ruby><span class=\"target\">ぞ</span>。"
     },
     {
      "src": "",
      "ja": "彼にはどこかで会ったことがあるぞ。",
      "zh": "好像在哪里见过他。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>にはどこかで<ruby>会っ<rt>あっ</rt></ruby>たことがある<span class=\"target\">ぞ</span>。"
     }
    ],
    "note": ""
   }
  ],
  "patternHtml": "〜ぞ"
 },
 {
  "id": 57,
  "unit": 6,
  "pattern": "〜そうにない/そうもない/そうではない",
  "senses": [
   {
    "connect": [
     "动词ます形＋そうにない/そうもない",
     "い形容词词干/な形容词词干＋そうではない"
    ],
    "desc": "看样子不会……。表示说话人根据周围的情况或事物的外观而做出的判断。",
    "examples": [
     {
      "src": "",
      "ja": "会議はまだ始まりそうにない。",
      "zh": "会议看样子还不会开始。",
      "jaHtml": "<ruby>会議<rt>かいぎ</rt></ruby>はまだ<ruby>始まり<rt>はじまり</rt></ruby><span class=\"target\">そう</span>にない。"
     },
     {
      "src": "",
      "ja": "この様子では、雨が止みそうもない。",
      "zh": "照这个样子，雨好像不会停。",
      "jaHtml": "この<ruby>様子<rt>ようす</rt></ruby>では、<ruby>雨<rt>あめ</rt></ruby>が<ruby>止み<rt>とみ</rt></ruby><span class=\"target\">そう</span>もない。"
     }
    ],
    "note": "与「〜そうだ」的否定形。"
   }
  ],
  "patternHtml": "〜そうにない/そうもない/そうではない"
 },
 {
  "id": 58,
  "unit": 6,
  "pattern": "〜たいものだ",
  "senses": [
   {
    "connect": [
     "动词ます形＋たいものだ"
    ],
    "desc": "真想……啊。表示对难以实现的事情给予莫大的期待。",
    "examples": [
     {
      "src": "",
      "ja": "一度ハワイへ行ってみたいものだ。",
      "zh": "真想有一天去夏威夷看看。",
      "jaHtml": "<ruby>一度<rt>いちど</rt></ruby>ハワイへ<ruby>行って<rt>いって</rt></ruby>み<span class=\"target\">たいもの</span>だ。"
     },
     {
      "src": "",
      "ja": "もう一度若くなりたいものだ。",
      "zh": "真想再年轻一次。",
      "jaHtml": "もう<ruby>一度<rt>いちど</rt></ruby><ruby>若く<rt>わかく</rt></ruby>なり<span class=\"target\">たいもの</span>だ。"
     }
    ],
    "note": "「〜たいものだ」用于表达长久以来的强烈愿望。"
   }
  ],
  "patternHtml": "〜たいものだ"
 },
 {
  "id": 59,
  "unit": 6,
  "pattern": "〜た後で/後で",
  "senses": [
   {
    "connect": [
     "动词た形＋後で",
     "名词＋の＋後で"
    ],
    "desc": "在……之后。表示先做前项，再做后项。",
    "examples": [
     {
      "src": "1998年真题",
      "ja": "映画を見た後で、お茶でも飲みましょう。",
      "zh": "看完电影后，去喝杯茶吧。",
      "jaHtml": "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby><span class=\"target\">た<ruby>後で<rt>あとで</rt></ruby></span>、お<ruby>茶<rt>ちゃ</rt></ruby>でも<ruby>飲み<rt>のみ</rt></ruby>ましょう。"
     },
     {
      "src": "",
      "ja": "食事の後で、散歩をします。",
      "zh": "吃完饭去散步。",
      "jaHtml": "<ruby>食事<rt>しょくじ</rt></ruby>の<span class=\"target\"><ruby>後で<rt>あとで</rt></ruby></span>、<ruby>散歩<rt>さんぽ</rt></ruby>をします。"
     }
    ],
    "note": "「〜た後で」不能后续表示持续意义的句子。"
   }
  ],
  "kana": [
   "あとで"
  ],
  "patternHtml": "〜た<ruby>後で<rt>あとで</rt></ruby>/<ruby>後で<rt>あとで</rt></ruby>"
 },
 {
  "id": 60,
  "unit": 6,
  "pattern": "〜たきり〜ない",
  "senses": [
   {
    "connect": [
     "动词た形＋きり"
    ],
    "desc": "自从……之后，再也没有……。表示自从前项发生之后，情况再也没有改变。",
    "examples": [
     {
      "src": "",
      "ja": "彼は出かけたきり、戻ってこない。",
      "zh": "他出去之后就没有回来。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>出か<rt>でか</rt></ruby>け<span class=\"target\">たきり</span>、<ruby>戻っ<rt>もどっ</rt></ruby>てこない。"
     },
     {
      "src": "",
      "ja": "彼とは3年前に一度会ったきり、会っていない。",
      "zh": "和他3年前见过一次之后，就再没见过。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>とは3<ruby>年前<rt>ねんまえ</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby><ruby>会っ<rt>あっ</rt></ruby><span class=\"target\">たきり</span>、<ruby>会っ<rt>あっ</rt></ruby>ていない。"
     }
    ],
    "note": "「〜きり」通常后续否定表达；口语中也有「〜きりで」「〜きり」的说法。"
   }
  ],
  "kana": [
   "きり"
  ],
  "patternHtml": "〜たきり〜ない"
 },
 {
  "id": 61,
  "unit": 7,
  "pattern": "〜だけ",
  "senses": [
   {
    "connect": [
     "名词＋だけ",
     "动词普通形＋だけ"
    ],
    "desc": "光……、只……。表示限定。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "中村さんから借りた本は1冊だけです。",
      "zh": "从中村那里借的书只有一本。",
      "jaHtml": "<ruby>中村<rt>なかむら</rt></ruby>さんから<ruby>借り<rt>かり</rt></ruby>た<ruby>本<rt>ほん</rt></ruby>は1<ruby>冊<rt>さつ</rt></ruby><span class=\"target\">だけ</span>です。"
     },
     {
      "src": "",
      "ja": "みんな出かけて、私だけが家に残った。",
      "zh": "大家都出去了，只有我一个人留在家里。",
      "jaHtml": "みんな<ruby>出か<rt>でか</rt></ruby>けて、<ruby>私<rt>わたし</rt></ruby><span class=\"target\">だけ</span>が<ruby>家<rt>いえ</rt></ruby>に<ruby>残っ<rt>のこっ</rt></ruby>た。"
     }
    ],
    "note": "「〜だけ」还可与助词连用，如「だけが/だけに/だけの」。"
   }
  ],
  "patternHtml": "〜だけ"
 },
 {
  "id": 62,
  "unit": 7,
  "pattern": "〜だけでなく",
  "senses": [
   {
    "connect": [
     "名词＋だけでなく",
     "动词普通形＋だけでなく",
     "い形容词普通形＋だけでなく",
     "な形容词词干＋な＋だけでなく"
    ],
    "desc": "不但……而且……。表示累加。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "新しい携帯電話は、写真が撮れるだけじゃなくて、テレビだって見られるんだよ。",
      "zh": "新手机不仅能拍照，还能看电视呢。",
      "jaHtml": "<ruby>新しい<rt>あたらしい</rt></ruby><ruby>携帯電話<rt>けいたいでんわ</rt></ruby>は、<ruby>写真<rt>しゃしん</rt></ruby>が<ruby>撮れ<rt>とれ</rt></ruby>る<span class=\"target\">だけ</span>じゃなくて、テレビだって<ruby>見ら<rt>みら</rt></ruby>れるんだよ。"
     },
     {
      "src": "",
      "ja": "彼は英語だけでなく、中国語も話せる。",
      "zh": "他不仅会英语，还会说中文。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>英語<rt>えいご</rt></ruby><span class=\"target\">だけでなく</span>、<ruby>中国語<rt>ちゅうごくご</rt></ruby>も<ruby>話せ<rt>はなせ</rt></ruby>る。"
     }
    ],
    "note": "相当于「〜ばかりでなく」，后项常和「も/だって」等呼应使用。"
   }
  ],
  "patternHtml": "〜だけでなく"
 },
 {
  "id": 63,
  "unit": 7,
  "pattern": "〜だけでは",
  "senses": [
   {
    "connect": [
     "动词普通形＋だけでは",
     "名词＋だけでは"
    ],
    "desc": "光是……的话。表示只做前项的事很难出现期待的结果。",
    "examples": [
     {
      "src": "",
      "ja": "スポーツは見るだけでは面白くない。",
      "zh": "体育运动光看是没意思的。",
      "jaHtml": "スポーツは<ruby>見る<rt>みる</rt></ruby><span class=\"target\">だけでは</span><ruby>面白く<rt>おもしろく</rt></ruby>ない。"
     },
     {
      "src": "",
      "ja": "言うだけでは何も変わらない。",
      "zh": "光说是什么也不会改变的。",
      "jaHtml": "<ruby>言う<rt>いう</rt></ruby><span class=\"target\">だけでは</span><ruby>何も<rt>なにも</rt></ruby><ruby>変わ<rt>かわ</rt></ruby>らない。"
     }
    ],
    "note": "「〜だけでは」后项多含否定，常和副词「ただ」搭配使用；「〜だけじゃ」是口语。"
   }
  ],
  "patternHtml": "〜だけでは"
 },
 {
  "id": 64,
  "unit": 7,
  "pattern": "〜たことにする",
  "senses": [
   {
    "connect": [
     "动词た形＋ことにする"
    ],
    "desc": "就当作……（没有发生）。表示把实际没发生的事当作发生过，或把发生过的事当作没发生。",
    "examples": [
     {
      "src": "",
      "ja": "その話は聞かなかったことにしてください。",
      "zh": "那件事请当作没听过。",
      "jaHtml": "その<ruby>話<rt>はなし</rt></ruby>は<ruby>聞か<rt>きか</rt></ruby>なかっ<span class=\"target\">たことに</span>してください。"
     },
     {
      "src": "",
      "ja": "あの日のことはなかったことにしよう。",
      "zh": "那天的事就当没发生过吧。",
      "jaHtml": "あの<ruby>日<rt>にち</rt></ruby>のことはなかっ<span class=\"target\">たことに</span>しよう。"
     }
    ],
    "note": "「〜たことになる」则表示客观的结果。"
   }
  ],
  "patternHtml": "〜たことにする"
 },
 {
  "id": 65,
  "unit": 7,
  "pattern": "〜たつもりで",
  "senses": [
   {
    "connect": [
     "动词た形＋つもりで"
    ],
    "desc": "就算是……、当做……一样。表示虽然实际上没那样，但权当那样做了。",
    "examples": [
     {
      "src": "",
      "ja": "死んだつもりで頑張ろう。",
      "zh": "豁出去拼了吧。",
      "jaHtml": "<ruby>死ん<rt>しん</rt></ruby><span class=\"target\">だつもりで</span><ruby>頑張ろ<rt>がんばろ</rt></ruby>う。"
     },
     {
      "src": "",
      "ja": "旅行したつもりで、お金を貯めることにした。",
      "zh": "就当是旅行了，把钱存起来。",
      "jaHtml": "<ruby>旅行<rt>りょこう</rt></ruby>し<span class=\"target\">たつもりで</span>、お<ruby>金<rt>きん</rt></ruby>を<ruby>貯め<rt>ため</rt></ruby>ることにした。"
     }
    ],
    "note": "可以换成「〜したと考えて」等表达方式。"
   }
  ],
  "patternHtml": "〜たつもりで"
 },
 {
  "id": 66,
  "unit": 7,
  "pattern": "〜だって",
  "senses": [
   {
    "connect": [
     "疑问词＋だって"
    ],
    "desc": "无论……都……。表示全面肯定。",
    "examples": [
     {
      "src": "",
      "ja": "私の応援が力になるなら、いくらだって応援します。",
      "zh": "如果我的加油能成为力量的话，无论多少都为你加油。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>の<ruby>応援<rt>おうえん</rt></ruby>が<ruby>力<rt>ちから</rt></ruby>になるなら、いくら<span class=\"target\">だって</span><ruby>応援<rt>おうえん</rt></ruby>します。"
     },
     {
      "src": "",
      "ja": "この本は誰だって読めます。",
      "zh": "这本书谁都能读。",
      "jaHtml": "この<ruby>本<rt>ほん</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby><span class=\"target\">だって</span><ruby>読め<rt>よめ</rt></ruby>ます。"
     }
    ],
    "note": "「〜だって」多用于口语，相当于「疑问词＋でも」，语气较强。"
   }
  ],
  "patternHtml": "〜だって"
 },
 {
  "id": 67,
  "unit": 7,
  "pattern": "たとえ〜ても",
  "senses": [
   {
    "connect": [
     "たとえ＋动词て形＋も",
     "たとえ＋い形容词＋ても",
     "たとえ＋名词＋でも"
    ],
    "desc": "即使……也……。表示即使前项成立，后项也不会受其影响。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "たとえみんなに反対されても、私は絶対にこの計画を実行したい。",
      "zh": "即使大家都反对，我也一定要实行这个计划。",
      "jaHtml": "<span class=\"target\">たとえ</span>みんなに<ruby>反対<rt>はんたい</rt></ruby>されても、<ruby>私<rt>わたし</rt></ruby>は<ruby>絶対<rt>ぜったい</rt></ruby>にこの<ruby>計画<rt>けいかく</rt></ruby>を<ruby>実行<rt>じっこう</rt></ruby>したい。"
     },
     {
      "src": "",
      "ja": "たとえ雨でも、予定通り運動会を行う。",
      "zh": "即使下雨，也将如期举行运动会。",
      "jaHtml": "<span class=\"target\">たとえ</span><ruby>雨<rt>あめ</rt></ruby>でも、<ruby>予定通り<rt>よていどおり</rt></ruby><ruby>運動会<rt>うんどうかい</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。"
     }
    ],
    "note": "常与「〜ても/でも」呼应，构成让步表达。"
   }
  ],
  "kana": [
   "たとえ"
  ],
  "patternHtml": "たとえ〜ても"
 },
 {
  "id": 68,
  "unit": 7,
  "pattern": "〜たばかりだ",
  "senses": [
   {
    "connect": [
     "动词た形＋ばかりだ"
    ],
    "desc": "刚刚……。表示刚刚做完某个动作。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "A「遅くなってすみません。」B「いいえ、私も今来たばかりです。」",
      "zh": "A：对不起，迟到了。B：哪里哪里，我也是刚到。",
      "jaHtml": "A「<ruby>遅く<rt>おそく</rt></ruby>なってすみません。」B「いいえ、<ruby>私<rt>わたし</rt></ruby>も<ruby>今来<rt>こんらい</rt></ruby><span class=\"target\">たばかり</span>です。」"
     },
     {
      "src": "",
      "ja": "このテレビは半年前に買ったばかりなのに、壊れてしまいました。",
      "zh": "这台电视半年前刚买的，就坏了。",
      "jaHtml": "このテレビは<ruby>半年前<rt>はんとしまえ</rt></ruby>に<ruby>買っ<rt>かっ</rt></ruby><span class=\"target\">たばかり</span>なのに、<ruby>壊れ<rt>こわれ</rt></ruby>てしまいました。"
     }
    ],
    "note": "「〜たばかりだ」强调动作刚结束不久。"
   }
  ],
  "patternHtml": "〜たばかりだ"
 },
 {
  "id": 69,
  "unit": 7,
  "pattern": "〜たび(に)",
  "senses": [
   {
    "connect": [
     "动词辞书形＋たびに",
     "名词＋の＋たびに"
    ],
    "desc": "每当……就……。表示每逢某时机都发生同样的事。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "私は山田さんに会うたびに、素敵な人だといつも思う。",
      "zh": "我每次见到山田，都觉得他是个很出色的人。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は<ruby>山田<rt>やまだ</rt></ruby>さんに<ruby>会う<rt>あう</rt></ruby><span class=\"target\">たび</span>に、<ruby>素敵<rt>すてき</rt></ruby>な<ruby>人<rt>にん</rt></ruby>だといつも<ruby>思う<rt>おもう</rt></ruby>。"
     },
     {
      "src": "2008年真题",
      "ja": "この写真を見るたび、故郷のことを思い出す。",
      "zh": "每当我看到这张照片，就会想起故乡。",
      "jaHtml": "この<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見る<rt>みる</rt></ruby><span class=\"target\">たび</span>、<ruby>故郷<rt>こきょう</rt></ruby>のことを<ruby>思い出す<rt>おもいだす</rt></ruby>。"
     }
    ],
    "note": "「〜たび」比「〜たびに」更书面一些。"
   }
  ],
  "kana": [
   "たびに",
   "たび"
  ],
  "patternHtml": "〜たび(に)"
 },
 {
  "id": 70,
  "unit": 7,
  "pattern": "〜たほうがいい/ないほうがいい",
  "senses": [
   {
    "connect": [
     "动词た形＋ほうがいい",
     "动词ない形＋ほうがいい"
    ],
    "desc": "最好……、最好不要……。表示劝告、建议。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "もう少し待ったほうがいいですよ。",
      "zh": "最好再等一会儿。",
      "jaHtml": "もう<ruby>少し<rt>すこし</rt></ruby><ruby>待っ<rt>まっ</rt></ruby><span class=\"target\">たほうがいい</span>ですよ。"
     },
     {
      "src": "",
      "ja": "熱が高い時は、無理をしないほうがいい。",
      "zh": "发烧的时候，最好不要勉强。",
      "jaHtml": "<ruby>熱<rt>ねつ</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby><ruby>時<rt>とき</rt></ruby>は、<ruby>無理<rt>むり</rt></ruby>をし<span class=\"target\">ないほうがいい</span>。"
     }
    ],
    "note": "含有比较和选择之意，不能对地位比自己高的人使用。"
   }
  ],
  "kana": [
   "ほうがいい",
   "ないほうがいい"
  ],
  "patternHtml": "〜たほうがいい/ないほうがいい"
 },
 {
  "id": 71,
  "unit": 8,
  "pattern": "〜たまえ",
  "senses": [
   {
    "connect": [
     "动词ます形＋たまえ"
    ],
    "desc": "表示轻微的命令（多用于长辈对晚辈）。",
    "examples": [
     {
      "src": "",
      "ja": "遊びに来たまえ。",
      "zh": "来玩啊。",
      "jaHtml": "<ruby>遊び<rt>あそび</rt></ruby>に<ruby>来<rt>き</rt></ruby><span class=\"target\">たまえ</span>。"
     },
     {
      "src": "",
      "ja": "原田君と一緒に来たまえ。",
      "zh": "你和原田一起过来。",
      "jaHtml": "<ruby>原田<rt>はらだ</rt></ruby><ruby>君<rt>くん</rt></ruby>と<ruby>一緒に<rt>いっしょに</rt></ruby><ruby>来<rt>き</rt></ruby><span class=\"target\">たまえ</span>。"
     }
    ],
    "note": "「〜たまえ」是较温和的命令语气，多见于男性长辈用语。"
   }
  ],
  "patternHtml": "〜たまえ"
 },
 {
  "id": 72,
  "unit": 8,
  "pattern": "〜ために",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ために",
     "名词＋の＋ために"
    ],
    "desc": "为了……。表示目的。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "日本で働くために、日本語を勉強している。",
      "zh": "为了在日本工作，正在学日语。",
      "jaHtml": "<ruby>日本<rt>にっぽん</rt></ruby>で<ruby>働く<rt>はたらく</rt></ruby><span class=\"target\">ために</span>、<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>している。"
     },
     {
      "src": "",
      "ja": "健康のために、毎日運動している。",
      "zh": "为了健康，每天运动。",
      "jaHtml": "<ruby>健康<rt>けんこう</rt></ruby>の<span class=\"target\">ために</span>、<ruby>毎日<rt>まいにち</rt></ruby><ruby>運動<rt>うんどう</rt></ruby>している。"
     }
    ],
    "note": "「〜ために」还可表示原因（后项为不好的结果），注意区分。"
   }
  ],
  "kana": [
   "ために"
  ],
  "patternHtml": "〜ために"
 },
 {
  "id": 73,
  "unit": 8,
  "pattern": "〜たら",
  "senses": [
   {
    "connect": [
     "动词た形＋ら",
     "い形容词词干＋かったら",
     "名词＋だったら"
    ],
    "desc": "如果……的话。表示假定条件。",
    "examples": [
     {
      "src": "",
      "ja": "もしわからないことがあったら、何でも聞いてください。",
      "zh": "如果有不明白的地方，请尽管问。",
      "jaHtml": "もしわからないことがあっ<span class=\"target\">たら</span>、<ruby>何で<rt>なんで</rt></ruby>も<ruby>聞い<rt>きい</rt></ruby>てください。"
     },
     {
      "src": "",
      "ja": "明日雨が降ったら、試合は中止だ。",
      "zh": "如果明天下雨，比赛就取消。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby><ruby>雨<rt>あめ</rt></ruby>が<ruby>降っ<rt>ふっ</rt></ruby><span class=\"target\">たら</span>、<ruby>試合<rt>しあい</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>だ。"
     }
    ],
    "note": "经常和副词「もし」搭配使用。"
   }
  ],
  "patternHtml": "〜たら"
 },
 {
  "id": 74,
  "unit": 8,
  "pattern": "〜たら/ったら",
  "senses": [
   {
    "connect": [
     "名词＋ったら"
    ],
    "desc": "说起……、谈到……。表示提起话题，带有说话人亲昵、取笑、告诫、责难等语气。",
    "examples": [
     {
      "src": "",
      "ja": "私の学校ったら、ずいぶん古いのよ。",
      "zh": "说起我的学校，实在很破旧。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>の<ruby>学校<rt>がっこう</rt></ruby><span class=\"target\">ったら</span>、ずいぶん<ruby>古い<rt>ふるい</rt></ruby>のよ。"
     },
     {
      "src": "",
      "ja": "おねえちゃんたら、まだ起きないよ。",
      "zh": "姐姐也真是的，还没起床。",
      "jaHtml": "おねえちゃん<span class=\"target\">たら</span>、まだ<ruby>起き<rt>おき</rt></ruby>ないよ。"
     }
    ],
    "note": "相当于「〜と言ったら」，常用于口语。"
   }
  ],
  "patternHtml": "〜たら/ったら"
 },
 {
  "id": 75,
  "unit": 8,
  "pattern": "〜だらけ",
  "senses": [
   {
    "connect": [
     "名词＋だらけ"
    ],
    "desc": "净是……、满是……。表示满是某种（多不愉快）东西。",
    "examples": [
     {
      "src": "",
      "ja": "この部屋は何年も住んでいないので、ほこりだらけだ。",
      "zh": "这间屋子好多年没住人了，净是灰尘。",
      "jaHtml": "この<ruby>部屋<rt>へや</rt></ruby>は<ruby>何年<rt>なんねん</rt></ruby>も<ruby>住ん<rt>すん</rt></ruby>でいないので、ほこり<span class=\"target\">だらけ</span>だ。"
     },
     {
      "src": "",
      "ja": "あの本は間違いだらけだ。",
      "zh": "那本书错误百出。",
      "jaHtml": "あの<ruby>本<rt>ほん</rt></ruby>は<ruby>間違い<rt>まちがい</rt></ruby><span class=\"target\">だらけ</span>だ。"
     }
    ],
    "note": "一般用于贬义，表示不愉快的东西或事情。"
   }
  ],
  "patternHtml": "〜だらけ"
 },
 {
  "id": 76,
  "unit": 8,
  "pattern": "〜たらどうですか",
  "senses": [
   {
    "connect": [
     "动词た形＋らどうですか"
    ],
    "desc": "……怎么样。表示提议或劝诱。",
    "examples": [
     {
      "src": "",
      "ja": "私もよくわからないから、先生に聞いたらどうですか。",
      "zh": "我也不太清楚，问问老师怎么样？",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>もよくわからないから、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>聞い<rt>きい</rt></ruby><span class=\"target\">たらどうですか</span>。"
     },
     {
      "src": "",
      "ja": "一度行ってみたらどうですか。",
      "zh": "去一次看看怎么样？",
      "jaHtml": "<ruby>一度<rt>いちど</rt></ruby><ruby>行って<rt>いって</rt></ruby>み<span class=\"target\">たらどうですか</span>。"
     }
    ],
    "note": "也可说「〜たらどうでしょうか」，更委婉。"
   }
  ],
  "kana": [
   "たらどうですか"
  ],
  "patternHtml": "〜たらどうですか"
 },
 {
  "id": 77,
  "unit": 8,
  "pattern": "〜だろうか",
  "senses": [
   {
    "connect": [
     "动词普通形＋だろうか",
     "形容词普通形＋だろうか",
     "名词＋だろうか"
    ],
    "desc": "能……吗、会是……吗。表示怀疑、自问。",
    "examples": [
     {
      "src": "",
      "ja": "今日中にこの仕事が終わるだろうか。",
      "zh": "今天之内能完成这项工作吗？",
      "jaHtml": "<ruby>今日中<rt>きょうじゅう</rt></ruby>にこの<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終わ<rt>おわ</rt></ruby>る<span class=\"target\">だろうか</span>。"
     },
     {
      "src": "",
      "ja": "こんな方法で本当に成功するだろうか。",
      "zh": "用这种方法真的能成功吗？",
      "jaHtml": "こんな<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>成功<rt>せいこう</rt></ruby>する<span class=\"target\">だろうか</span>。"
     }
    ],
    "note": "常与「本当に/いったい」等副词搭配，表示强烈的怀疑。"
   }
  ],
  "patternHtml": "〜だろうか"
 },
 {
  "id": 78,
  "unit": 8,
  "pattern": "〜ちゃう",
  "senses": [
   {
    "connect": [
     "动词て形＋ちゃう",
     "动词て形＋じゃう（浊音）"
    ],
    "desc": "……完了、……了。表示动作结束，或表示遗憾、后悔等心情。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "あっ、財布を忘れちゃった。",
      "zh": "啊，把钱包给忘了。",
      "jaHtml": "あっ、<ruby>財布<rt>さいふ</rt></ruby>を<ruby>忘れ<rt>わすれ</rt></ruby><span class=\"target\">ちゃ</span>った。"
     },
     {
      "src": "",
      "ja": "この本はもう読んじゃった。",
      "zh": "这本书已经读完了。",
      "jaHtml": "この<ruby>本<rt>ほん</rt></ruby>はもう<ruby>読ん<rt>よん</rt></ruby><span class=\"target\">じゃ</span>った。"
     }
    ],
    "note": "「〜てしまう」的口语形式。「〜ちゃう」在ます形时变成「〜ちゃいます」。"
   }
  ],
  "patternHtml": "〜ちゃう"
 },
 {
  "id": 79,
  "unit": 8,
  "pattern": "〜っけ",
  "senses": [
   {
    "connect": [
     "动词普通形＋っけ",
     "い形容词词干＋かったっけ",
     "名词＋だっけ"
    ],
    "desc": "……来着。表示回忆、确认。",
    "examples": [
     {
      "src": "",
      "ja": "明日の会議は何時だっけ。",
      "zh": "明天的会议是几点来着？",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>だ<span class=\"target\">っけ</span>。"
     },
     {
      "src": "",
      "ja": "あの人、確か田中さんだったっけ。",
      "zh": "那个人，记得是田中吧。",
      "jaHtml": "あの<ruby>人<rt>にん</rt></ruby>、<ruby>確か<rt>たしか</rt></ruby><ruby>田中<rt>たなか</rt></ruby>さんだった<span class=\"target\">っけ</span>。"
     }
    ],
    "note": "口语表达，用于确认自己记不太清的事情。"
   }
  ],
  "kana": [
   "っけ"
  ],
  "patternHtml": "〜っけ"
 },
 {
  "id": 80,
  "unit": 8,
  "pattern": "〜って",
  "senses": [
   {
    "connect": [
     "句子＋って"
    ],
    "desc": "（口语）表示引用、传闻、话题等。",
    "examples": [
     {
      "src": "",
      "ja": "田中さんが来るって聞いたよ。",
      "zh": "听说田中要来。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>来る<rt>くる</rt></ruby><span class=\"target\">って</span><ruby>聞い<rt>きい</rt></ruby>たよ。"
     },
     {
      "src": "",
      "ja": "「また明日ね」って言ってた。",
      "zh": "他说了明天见。",
      "jaHtml": "「また<ruby>明日<rt>あした</rt></ruby>ね」<span class=\"target\">って</span><ruby>言って<rt>いって</rt></ruby>た。"
     }
    ],
    "note": "相当于「〜と/〜という」，用于口语。"
   }
  ],
  "patternHtml": "〜って"
 },
 {
  "id": 81,
  "unit": 9,
  "pattern": "〜で",
  "senses": [
   {
    "connect": [
     "名词＋で",
     "动词普通形＋ことで"
    ],
    "desc": "通过……、由于……。表示手段、方法或原因。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "留学したことで、異なる文化に興味を持つようになった。",
      "zh": "通过留学，对异国文化产生了兴趣。",
      "jaHtml": "<ruby>留学<rt>りゅうがく</rt></ruby>したこと<span class=\"target\">で</span>、<ruby>異なる<rt>ことなる</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持つ<rt>もつ</rt></ruby>ようになった。"
     },
     {
      "src": "",
      "ja": "この問題は話し合いで解決できる。",
      "zh": "这个问题可以通过协商解决。",
      "jaHtml": "この<ruby>問題<rt>もんだい</rt></ruby>は<ruby>話し合い<rt>はなしあい</rt></ruby><span class=\"target\">で</span><ruby>解決<rt>かいけつ</rt></ruby>できる。"
     }
    ],
    "note": "「〜ことで」强调通过某件事；「〜で」还可表示工具、场所等。"
   }
  ],
  "patternHtml": "〜で"
 },
 {
  "id": 82,
  "unit": 9,
  "pattern": "〜てあげる/てさしあげる/てやる",
  "senses": [
   {
    "connect": [
     "动词て形＋あげる",
     "动词て形＋さしあげる",
     "动词て形＋やる"
    ],
    "desc": "给……做……。表示一方为另一方做某事。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "A「消しゴム持ってる？」B「うん、持ってるよ。貸してあげるよ。」",
      "zh": "A：带橡皮了吗？B：嗯，带着呢，借给你。",
      "jaHtml": "A「<ruby>消しゴム<rt>けしごむ</rt></ruby><ruby>持っ<rt>もっ</rt></ruby>てる？」B「うん、<ruby>持っ<rt>もっ</rt></ruby>てるよ。<ruby>貸し<rt>かし</rt></ruby><span class=\"target\">てあげ</span>るよ。」"
     },
     {
      "src": "",
      "ja": "私は社長に荷物を持ってさしあげました。",
      "zh": "我帮社长拿行李。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は<ruby>社長<rt>しゃちょう</rt></ruby>に<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby><span class=\"target\">てさしあげ</span>ました。"
     }
    ],
    "note": "「〜てあげる」用于同辈或晚辈；「〜てさしあげる」用于长辈、上级（自谦）；「〜てやる」用于晚辈或动物。"
   }
  ],
  "kana": [
   "てあげる",
   "てさしあげる",
   "てやる"
  ],
  "patternHtml": "〜てあげる/てさしあげる/てやる"
 },
 {
  "id": 83,
  "unit": 9,
  "pattern": "〜てある",
  "senses": [
   {
    "connect": [
     "动词て形＋ある"
    ],
    "desc": "……着。表示动作、作用的结果存续（人为安排的状态）。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "カレンダーが壁に貼ってあります。",
      "zh": "墙上贴着日历。",
      "jaHtml": "カレンダーが<ruby>壁<rt>かべ</rt></ruby>に<ruby>貼っ<rt>はっ</rt></ruby><span class=\"target\">てあ</span>ります。"
     },
     {
      "src": "2000年真题",
      "ja": "そこにはボールペンが置いてあります。",
      "zh": "那里放着圆珠笔。",
      "jaHtml": "そこにはボールペンが<ruby>置い<rt>おい</rt></ruby><span class=\"target\">てあ</span>ります。"
     }
    ],
    "note": "一般接他动词，表示人为动作完成后的状态；与「〜ている」不同，「〜てある」强调是有意为之。"
   }
  ],
  "kana": [
   "てある"
  ],
  "patternHtml": "〜てある"
 },
 {
  "id": 84,
  "unit": 9,
  "pattern": "〜ていく",
  "senses": [
   {
    "connect": [
     "动词て形＋いく"
    ],
    "desc": "……而去、渐渐……。表示空间上远离，或随时间推移持续变化。",
    "examples": [
     {
      "src": "",
      "ja": "彼はこの部屋から出ていきました。",
      "zh": "他从这个房间出去了。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby>この<ruby>部屋<rt>へや</rt></ruby>から<ruby>出<rt>で</rt></ruby><span class=\"target\">ていきました</span>。"
     },
     {
      "src": "",
      "ja": "飛行機が飛んでいきました。",
      "zh": "飞机飞走了。",
      "jaHtml": "<ruby>飛行機<rt>ひこうき</rt></ruby>が<ruby>飛ん<rt>とん</rt></ruby><span class=\"target\">でいきました</span>。"
     },
     {
      "src": "",
      "ja": "これからもこの町で暮らしていくつもりだ。",
      "zh": "今后也打算继续在这座城市生活下去。",
      "jaHtml": "これからもこの<ruby>町<rt>まち</rt></ruby>で<ruby>暮らし<rt>くらし</rt></ruby><span class=\"target\">てい</span>くつもりだ。"
     }
    ],
    "note": "与「〜てくる」相对：ていく 表示远离/继续，てくる 表示靠近/从过去到现在。"
   }
  ],
  "kana": [
   "ていく"
  ],
  "patternHtml": "〜ていく"
 },
 {
  "id": 85,
  "unit": 9,
  "pattern": "〜て以来",
  "senses": [
   {
    "connect": [
     "动词て形＋以来"
    ],
    "desc": "自从……以来。表示自从过去发生的某件事之后直到现在。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "彼とは10年前のクラス会で会って以来、一度も連絡を取っていない。",
      "zh": "自从10年前在同学聚会上见过他以来，一次也没联系过。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>とは10<ruby>年前<rt>ねんまえ</rt></ruby>のクラス<ruby>会<rt>かい</rt></ruby>で<ruby>会っ<rt>あっ</rt></ruby><span class=\"target\">て<ruby>以来<rt>いらい</rt></ruby></span>、<ruby>一度<rt>いちど</rt></ruby>も<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>取っ<rt>とっ</rt></ruby>ていない。"
     }
    ],
    "note": "后项多接否定或持续状态；「〜てから」只表示先后顺序，不强调持续到现在。"
   }
  ],
  "kana": [
   "て以来",
   "てから"
  ],
  "patternHtml": "〜て<ruby>以来<rt>いらい</rt></ruby>"
 },
 {
  "id": 86,
  "unit": 9,
  "pattern": "〜てくる",
  "senses": [
   {
    "connect": [
     "动词て形＋くる"
    ],
    "desc": "（向这边）……来、渐渐……。表示空间上靠近，或从过去持续到现在。",
    "examples": [
     {
      "src": "",
      "ja": "彼は遠くから走ってきました。",
      "zh": "他从远处跑了过来。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>遠く<rt>とおく</rt></ruby>から<ruby>走っ<rt>はしっ</rt></ruby><span class=\"target\">てきました</span>。"
     },
     {
      "src": "",
      "ja": "台風17号が九州に近づいてきました。",
      "zh": "台风17号正向九州逼近。",
      "jaHtml": "<ruby>台風<rt>たいふう</rt></ruby>17<ruby>号<rt>ごう</rt></ruby>が<ruby>九州<rt>きゅうしゅう</rt></ruby>に<ruby>近づ<rt>ちかづ</rt></ruby>い<span class=\"target\">てきました</span>。"
     },
     {
      "src": "",
      "ja": "長年かけて築いてきた信頼を失いたくない。",
      "zh": "不想失去多年建立起来的信任。",
      "jaHtml": "<ruby>長年<rt>ながねん</rt></ruby>かけて<ruby>築い<rt>きづい</rt></ruby><span class=\"target\">てき</span>た<ruby>信頼<rt>しんらい</rt></ruby>を<ruby>失い<rt>うしない</rt></ruby>たくない。"
     }
    ],
    "note": "表示朝说话人方向移动，或某状态一直发展到现在。"
   }
  ],
  "kana": [
   "てくる"
  ],
  "patternHtml": "〜てくる"
 },
 {
  "id": 87,
  "unit": 9,
  "pattern": "〜てくれる/てくださる",
  "senses": [
   {
    "connect": [
     "动词て形＋くれる",
     "动词て形＋くださる"
    ],
    "desc": "给我（们）做……。表示别人为我（我方）做某事，多含感激之情。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "友達が掃除を手伝ってくれました。",
      "zh": "朋友们帮我打扫了。",
      "jaHtml": "<ruby>友達<rt>ともだち</rt></ruby>が<ruby>掃除<rt>そうじ</rt></ruby>を<ruby>手伝っ<rt>てつだっ</rt></ruby><span class=\"target\">てく</span>れました。"
     },
     {
      "src": "",
      "ja": "今井先生は雑誌を送ってくださいました。",
      "zh": "今井老师给我寄了杂志。",
      "jaHtml": "<ruby>今井<rt>いまい</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>雑誌<rt>ざっし</rt></ruby>を<ruby>送っ<rt>おくっ</rt></ruby><span class=\"target\">てくださ</span>いました。"
     }
    ],
    "note": "「〜てくださる」用于长辈、上级，更尊敬；「くださる」的ます形是「くださいます」。"
   }
  ],
  "kana": [
   "てくれる",
   "てくださる"
  ],
  "patternHtml": "〜てくれる/てくださる"
 },
 {
  "id": 88,
  "unit": 9,
  "pattern": "〜てごらん",
  "senses": [
   {
    "connect": [
     "动词て形＋ごらん"
    ],
    "desc": "请……试试。表示说话人让对方尝试做某事。",
    "examples": [
     {
      "src": "",
      "ja": "おいしいから、食べてごらん。",
      "zh": "很好吃，尝尝看。",
      "jaHtml": "おいしいから、<ruby>食<rt>た</rt></ruby>べ<span class=\"target\">てごらん</span>。"
     },
     {
      "src": "",
      "ja": "もう一度やってごらん。",
      "zh": "再做一次试试看。",
      "jaHtml": "もう<ruby>一度<rt>いちど</rt></ruby>やっ<span class=\"target\">てごらん</span>。"
     }
    ],
    "note": "「ごらん」是「見ること」的敬语；「〜てごらん」相当于「〜てみなさい」。"
   }
  ],
  "kana": [
   "てごらん"
  ],
  "patternHtml": "〜てごらん"
 },
 {
  "id": 89,
  "unit": 9,
  "pattern": "〜てしかたがない/てしようがない/てしょうがない",
  "senses": [
   {
    "connect": [
     "动词て形＋しかたがない/しょうがない",
     "い形容词词干＋くて＋しかたがない/しょうがない",
     "な形容词词干＋で＋しかたがない/しょうがない"
    ],
    "desc": "……得不得了、非常……。表示程度之甚。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "昨日は徹夜したから、眠くてしかたがない。",
      "zh": "昨天熬夜了，困得不得了。",
      "jaHtml": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>徹夜<rt>てつや</rt></ruby>したから、<ruby>眠く<rt>ねむく</rt></ruby><span class=\"target\">てしかたがない</span>。"
     },
     {
      "src": "",
      "ja": "家が会社から遠くて、不便でしかたがない。",
      "zh": "家离公司很远，不方便得不得了。",
      "jaHtml": "<ruby>家<rt>いえ</rt></ruby>が<ruby>会社<rt>かいしゃ</rt></ruby>から<ruby>遠く<rt>とおく</rt></ruby>て、<ruby>不便<rt>ふべん</rt></ruby><span class=\"target\">でし</span>かたがない。"
     }
    ],
    "note": "用于表达说话人的感情、感觉；主语是第三人称时，句末要加「〜のだ/ようだ」等。"
   }
  ],
  "kana": [
   "てしかたがない",
   "てしょうがない"
  ],
  "patternHtml": "〜てしかたがない/てしようがない/てしょうがない"
 },
 {
  "id": 90,
  "unit": 9,
  "pattern": "〜て済む/で済む",
  "senses": [
   {
    "connect": [
     "动词て形＋済む",
     "名词＋で＋済む"
    ],
    "desc": "……就解决了、……就办好了。表示事情可以简单地解决。",
    "examples": [
     {
      "src": "",
      "ja": "用事は電話で済んだ。",
      "zh": "打个电话事情就办完了。",
      "jaHtml": "<ruby>用事<rt>ようじ</rt></ruby>は<ruby>電話<rt>でんわ</rt></ruby><span class=\"target\">で<ruby>済<rt>す</rt></ruby></span>んだ。"
     },
     {
      "src": "",
      "ja": "飲んで食べて3000円で済んだ。",
      "zh": "又吃又喝，3000日元就够了。",
      "jaHtml": "<ruby>飲ん<rt>のん</rt></ruby>で<ruby>食べて<rt>たべて</rt></ruby>3000<ruby>円<rt>えん</rt></ruby><span class=\"target\">で<ruby>済<rt>す</rt></ruby></span>んだ。"
     }
    ],
    "note": "否定形式「〜て済むことではない」（不是……就能解决的），如：謝って済むことではない。"
   }
  ],
  "kana": [
   "てすむ",
   "ですむ"
  ],
  "patternHtml": "〜て<ruby>済む<rt>すむ</rt></ruby>/で<ruby>済む<rt>すむ</rt></ruby>"
 },
 {
  "id": 91,
  "unit": 10,
  "pattern": "〜てたまらない",
  "senses": [
   {
    "connect": [
     "动词て形＋たまらない",
     "い形容词词干＋くて＋たまらない",
     "な形容词词干＋で＋たまらない"
    ],
    "desc": "……得不得了、非常……。表示说话人强烈的感情、感觉、欲望。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "私は3年も国へ帰っていないので、早く家族に会いたくてたまらない。",
      "zh": "我已经3年没回家了，特别想早点见到家人。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は3<ruby>年<rt>ねん</rt></ruby>も<ruby>国<rt>くに</rt></ruby>へ<ruby>帰っ<rt>かえっ</rt></ruby>ていないので、<ruby>早く<rt>はやく</rt></ruby><ruby>家族<rt>かぞく</rt></ruby>に<ruby>会い<rt>あい</rt></ruby>たく<span class=\"target\">てたまらない</span>。"
     }
    ],
    "note": "与「〜てならない」相近，但「〜てたまらない」多用于感情、欲望强烈时。"
   }
  ],
  "kana": [
   "てたまらない"
  ],
  "patternHtml": "〜てたまらない"
 },
 {
  "id": 92,
  "unit": 10,
  "pattern": "〜てちょうだい",
  "senses": [
   {
    "connect": [
     "动词て形＋ちょうだい"
    ],
    "desc": "请……。表示请求（语气亲昵，多用于女性、儿童）。",
    "examples": [
     {
      "src": "",
      "ja": "あの新聞を取ってちょうだい。",
      "zh": "帮我拿一下那份报纸。",
      "jaHtml": "あの<ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>取っ<rt>とっ</rt></ruby><span class=\"target\">てちょうだい</span>。"
     },
     {
      "src": "",
      "ja": "明日また来てちょうだいね。",
      "zh": "明天再来哦。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>また<ruby>来<rt>き</rt></ruby><span class=\"target\">てちょうだい</span>ね。"
     }
    ],
    "note": "相当于「〜てください」，但语气更亲昵、随意。"
   }
  ],
  "kana": [
   "てちょうだい"
  ],
  "patternHtml": "〜てちょうだい"
 },
 {
  "id": 93,
  "unit": 10,
  "pattern": "〜てならない",
  "senses": [
   {
    "connect": [
     "动词て形＋ならない",
     "い形容词词干＋くて＋ならない",
     "な形容词词干＋で＋ならない"
    ],
    "desc": "……得不得了、不由得……。表示情不自禁地产生某种感情或感觉。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "何かあったのか、心配でならない。",
      "zh": "是不是出了什么事，担心得不得了。",
      "jaHtml": "<ruby>何か<rt>なにか</rt></ruby>あったのか、<ruby>心配<rt>しんぱい</rt></ruby><span class=\"target\">でならない</span>。"
     },
     {
      "src": "",
      "ja": "彼女のことが思い出されてならない。",
      "zh": "不由得想起她。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>のことが<ruby>思い出さ<rt>おもいださ</rt></ruby>れ<span class=\"target\">てならない</span>。"
     }
    ],
    "note": "多与表示心理状态的词搭配，强调无法抑制的情感。"
   }
  ],
  "kana": [
   "てならない"
  ],
  "patternHtml": "〜てならない"
 },
 {
  "id": 94,
  "unit": 10,
  "pattern": "〜ては/では",
  "senses": [
   {
    "connect": [
     "动词て形＋は",
     "动词ない形＋では"
    ],
    "desc": "一……就……。表示反复出现前项行为。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "息子は小学生のころ、よくお腹が痛いといっては学校を休んでいた。",
      "zh": "儿子上小学时，经常一说肚子疼就请假不去上学。",
      "jaHtml": "<ruby>息子<rt>むすこ</rt></ruby>は<ruby>小学生<rt>しょうがくせい</rt></ruby>のころ、よくお<ruby>腹<rt>はら</rt></ruby>が<ruby>痛い<rt>いたい</rt></ruby>といっ<span class=\"target\">ては</span><ruby>学校<rt>がっこう</rt></ruby>を<ruby>休ん<rt>やすん</rt></ruby>でいた。"
     }
    ],
    "note": "「〜ては〜ては」表示两个动作反复交替进行。"
   }
  ],
  "kana": [
   "ては",
   "では"
  ],
  "patternHtml": "〜ては/では"
 },
 {
  "id": 95,
  "unit": 10,
  "pattern": "〜てはいられない",
  "senses": [
   {
    "connect": [
     "动词て形＋はいられない"
    ],
    "desc": "不能……（不能再……了）。表示不允许继续某种状态。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "仕事が予定より遅れている。だから、今度の日曜日は、仕事を休んではいられない。",
      "zh": "工作比计划落后了，所以这个周日不能休息。",
      "jaHtml": "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>予定<rt>よてい</rt></ruby>より<ruby>遅れ<rt>おくれ</rt></ruby>ている。だから、<ruby>今度<rt>こんど</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>は、<ruby>仕事<rt>しごと</rt></ruby>を<ruby>休ん<rt>やすん</rt></ruby><span class=\"target\">ではいられない</span>。"
     },
     {
      "src": "",
      "ja": "その問題についてはもう黙ってはいられない。",
      "zh": "关于那个问题，不能再保持沉默了。",
      "jaHtml": "その<ruby>問題<rt>もんだい</rt></ruby>についてはもう<ruby>黙っ<rt>だまっ</rt></ruby><span class=\"target\">てはいられない</span>。"
     }
    ],
    "note": "常与「もう/これ以上」等搭配，表示忍耐的界限。"
   }
  ],
  "kana": [
   "てはいられない"
  ],
  "patternHtml": "〜てはいられない"
 },
 {
  "id": 96,
  "unit": 10,
  "pattern": "〜てはじめて",
  "senses": [
   {
    "connect": [
     "动词て形＋はじめて"
    ],
    "desc": "……之后才……。表示出现了某种事态之后才明白/做到某事。",
    "examples": [
     {
      "src": "2009年7月真题",
      "ja": "外国で生活をしてはじめて自分の国の良さが分かった。",
      "zh": "在国外生活之后，才明白祖国的可贵。",
      "jaHtml": "<ruby>外国<rt>がいこく</rt></ruby>で<ruby>生活<rt>せいかつ</rt></ruby>をし<span class=\"target\">てはじめて</span><ruby>自分<rt>じぶん</rt></ruby>の<ruby>国<rt>くに</rt></ruby>の<ruby>良さ<rt>よさ</rt></ruby>が<ruby>分か<rt>わか</rt></ruby>った。"
     },
     {
      "src": "2006年真题",
      "ja": "一人で暮らすようになってはじめて、家族がどんなにありがたいかが分かった。",
      "zh": "一个人生活之后，才明白家人有多重要。",
      "jaHtml": "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>暮ら<rt>くら</rt></ruby>すようになっ<span class=\"target\">てはじめて</span>、<ruby>家族<rt>かぞく</rt></ruby>がどんなにありがたいかが<ruby>分か<rt>わか</rt></ruby>った。"
     }
    ],
    "note": "强调经过某事之后才有的新认识。"
   }
  ],
  "kana": [
   "てはじめて"
  ],
  "patternHtml": "〜てはじめて"
 },
 {
  "id": 97,
  "unit": 10,
  "pattern": "〜ではないか/じゃないか",
  "senses": [
   {
    "connect": [
     "动词普通形＋ではないか",
     "名词＋ではないか",
     "い形容词普通形＋ではないか"
    ],
    "desc": "不是……吗！。表示征求对方同意、反问或惊讶。",
    "examples": [
     {
      "src": "",
      "ja": "ほら、君はできるじゃないか。",
      "zh": "瞧，你不是行的吗！",
      "jaHtml": "ほら、<ruby>君<rt>くん</rt></ruby>はできる<span class=\"target\">じゃないか</span>。"
     },
     {
      "src": "",
      "ja": "A「遅かったじゃないか。」B「あの、道が込んでいたんです。」",
      "zh": "A：你不是迟到了吗！B：那个，路上堵车了。",
      "jaHtml": "A「<ruby>遅か<rt>おそか</rt></ruby>った<span class=\"target\">じゃないか</span>。」B「あの、<ruby>道<rt>みち</rt></ruby>が<ruby>込ん<rt>こん</rt></ruby>でいたんです。」"
     }
    ],
    "note": "口语中「ではないか」常说成「じゃないか」。"
   }
  ],
  "kana": [
   "ではないか",
   "じゃないか"
  ],
  "patternHtml": "〜ではないか/じゃないか"
 },
 {
  "id": 98,
  "unit": 10,
  "pattern": "〜(の)ではないか",
  "senses": [
   {
    "connect": [
     "动词普通形＋のではないか",
     "名词＋なのではないか",
     "い形容词普通形＋のではないか"
    ],
    "desc": "不是……吗、也许是……吧。表示说话人的推测、判断。",
    "examples": [
     {
      "src": "",
      "ja": "彼の成績では、この大学は無理ではないかと思います。",
      "zh": "以他的成绩，考这所大学恐怕很难吧。",
      "jaHtml": "<ruby>彼の<rt>かの</rt></ruby><ruby>成績<rt>せいせき</rt></ruby>では、この<ruby>大学<rt>だいがく</rt></ruby>は<ruby>無理<rt>むり</rt></ruby><span class=\"target\">ではないか</span>と<ruby>思い<rt>おもい</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "今年は桜の開花が早いのではないか。",
      "zh": "今年樱花开得也许比较早吧。",
      "jaHtml": "<ruby>今年<rt>こんねん</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby>の<ruby>開花<rt>かいか</rt></ruby>が<ruby>早い<rt>はやい</rt></ruby><span class=\"target\">のではないか</span>。"
     }
    ],
    "note": "委婉说法是「〜のではないでしょうか」，常与「〜と思う」搭配使用。"
   }
  ],
  "kana": [
   "のではないか",
   "ではないか"
  ],
  "patternHtml": "〜(の)ではないか"
 },
 {
  "id": 99,
  "unit": 10,
  "pattern": "〜てほしい",
  "senses": [
   {
    "connect": [
     "名词＋に＋动词て形＋ほしい",
     "动词て形＋ほしい"
    ],
    "desc": "希望……。表示对对方或他人的希望、要求。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "わたしの気持ちは、きっとあなたにわからないだろうし、あなたにわかってほしくない。",
      "zh": "我的心情你一定不明白，我也不希望你能明白。",
      "jaHtml": "わたしの<ruby>気持ち<rt>きもち</rt></ruby>は、きっとあなたにわからないだろうし、あなたにわかっ<span class=\"target\">てほし</span>くない。"
     },
     {
      "src": "",
      "ja": "もっと早く来てほしかった。",
      "zh": "希望你能早点来。",
      "jaHtml": "もっと<ruby>早く<rt>はやく</rt></ruby><ruby>来<rt>き</rt></ruby><span class=\"target\">てほし</span>かった。"
     }
    ],
    "note": "「〜てほしい」前用「に」表示希望的对象。"
   }
  ],
  "kana": [
   "てほしい"
  ],
  "patternHtml": "〜てほしい"
 },
 {
  "id": 100,
  "unit": 10,
  "pattern": "〜てみせる",
  "senses": [
   {
    "connect": [
     "动词て形＋みせる"
    ],
    "desc": "做给……看、一定要……。表示以实际行动证明。",
    "examples": [
     {
      "src": "",
      "ja": "彼はみんなの前で歌ってみせた。",
      "zh": "他在大家面前唱了一首。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby>みんなの<ruby>前<rt>まえ</rt></ruby>で<ruby>歌っ<rt>うたっ</rt></ruby><span class=\"target\">てみせ</span>た。"
     },
     {
      "src": "",
      "ja": "今度こそ絶対勝ってみせる。",
      "zh": "这次一定要赢给你们看。",
      "jaHtml": "<ruby>今度<rt>こんど</rt></ruby>こそ<ruby>絶対<rt>ぜったい</rt></ruby><ruby>勝っ<rt>かっ</rt></ruby><span class=\"target\">てみせ</span>る。"
     }
    ],
    "note": "表示做给某人看，或下决心实现某事。"
   }
  ],
  "kana": [
   "てみせる"
  ],
  "patternHtml": "〜てみせる"
 },
 {
  "id": 101,
  "unit": 11,
  "pattern": "〜てみる",
  "senses": [
   {
    "connect": [
     "动词て形＋みる"
    ],
    "desc": "……一下、试着……。表示试着做某个动作。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "A「すみません、この帽子、かぶってみてもいいですか。」B「はい、どうぞ。」",
      "zh": "A：不好意思，这顶帽子可以试戴一下吗？B：好的，请。",
      "jaHtml": "A「すみません、この<ruby>帽子<rt>ぼうし</rt></ruby>、かぶっ<span class=\"target\">てみ</span>てもいいですか。」B「はい、どうぞ。」"
     },
     {
      "src": "",
      "ja": "一度やってみよう。",
      "zh": "试着做一次吧。",
      "jaHtml": "<ruby>一度<rt>いちど</rt></ruby>やっ<span class=\"target\">てみ</span>よう。"
     }
    ],
    "note": "「〜てみる」表示尝试做某事以确认结果。"
   }
  ],
  "kana": [
   "てみる"
  ],
  "patternHtml": "〜てみる"
 },
 {
  "id": 102,
  "unit": 11,
  "pattern": "〜ても/でも",
  "senses": [
   {
    "connect": [
     "动词て形＋も",
     "い形容词词干＋くても",
     "な形容词词干＋でも",
     "名词＋でも"
    ],
    "desc": "即使……也……。表示逆接。",
    "examples": [
     {
      "src": "",
      "ja": "雨が降っても、運動会は行われる。",
      "zh": "即使下雨，运动会也会举行。",
      "jaHtml": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降っ<rt>ふっ</rt></ruby><span class=\"target\">ても</span>、<ruby>運動会<rt>うんどうかい</rt></ruby>は<ruby>行わ<rt>おこなわ</rt></ruby>れる。"
     },
     {
      "src": "",
      "ja": "高くても、買いたい。",
      "zh": "即使贵，也想买。",
      "jaHtml": "<ruby>高く<rt>たかく</rt></ruby><span class=\"target\">ても</span>、<ruby>買い<rt>かい</rt></ruby>たい。"
     }
    ],
    "note": "常与「たとえ」呼应（たとえ〜ても）。"
   }
  ],
  "kana": [
   "ても",
   "でも"
  ],
  "patternHtml": "〜ても/でも"
 },
 {
  "id": 103,
  "unit": 11,
  "pattern": "〜てもかまわない",
  "senses": [
   {
    "connect": [
     "动词て形＋もかまわない",
     "い形容词词干＋くてもかまわない",
     "名词＋でもかまわない"
    ],
    "desc": "……也可以、……也没有关系。表示许可、允许。",
    "examples": [
     {
      "src": "",
      "ja": "遅くてもかまわないので、電話してください。",
      "zh": "晚一点也没关系，请打电话。",
      "jaHtml": "<ruby>遅く<rt>おそく</rt></ruby><span class=\"target\">てもかまわない</span>ので、<ruby>電話<rt>でんわ</rt></ruby>してください。"
     }
    ],
    "note": "「かまわない」是一类动词「かまう（介意，在意）」的否定形式。"
   }
  ],
  "kana": [
   "てもかまわない"
  ],
  "patternHtml": "〜てもかまわない"
 },
 {
  "id": 104,
  "unit": 11,
  "pattern": "〜てもしかたがない/てもしようがない",
  "senses": [
   {
    "connect": [
     "动词て形＋もしかたがない",
     "い形容词词干＋くてもしかたがない",
     "な形容词词干＋でもしかたがない"
    ],
    "desc": "即使……也没用、即使……也无可奈何。",
    "examples": [
     {
      "src": "",
      "ja": "今さら文句を言ってもしかたがない。",
      "zh": "事到如今，抱怨也没用了。",
      "jaHtml": "<ruby>今さ<rt>いまさ</rt></ruby>ら<ruby>文句<rt>もんく</rt></ruby>を<ruby>言<rt>い</rt></ruby>っ<span class=\"target\">てもしかたがない</span>。"
     }
    ],
    "note": "与「〜ても始まらない」意思相近。"
   }
  ],
  "kana": [
   "てもしかたがない",
   "てもしようがない"
  ],
  "patternHtml": "〜てもしかたがない/てもしようがない"
 },
 {
  "id": 105,
  "unit": 11,
  "pattern": "〜ても始まらない",
  "senses": [
   {
    "connect": [
     "动词て形＋も始まらない"
    ],
    "desc": "即使……也没用。表示做了也无济于事。",
    "examples": [
     {
      "src": "",
      "ja": "今さらそんなことを言っても始まらない。",
      "zh": "事到如今，说那些也没用了。",
      "jaHtml": "<ruby>今さ<rt>いまさ</rt></ruby>らそんなことを<ruby>言<rt>い</rt></ruby>っ<span class=\"target\">ても</span><ruby>始ま<rt>はじま</rt></ruby>らない。"
     },
     {
      "src": "",
      "ja": "怒っても始まらない。",
      "zh": "生气也没用。",
      "jaHtml": "<ruby>怒っ<rt>いかっ</rt></ruby><span class=\"target\">ても</span><ruby>始ま<rt>はじま</rt></ruby>らない。"
     }
    ],
    "note": "表示做了也没意义，不如不做。"
   }
  ],
  "kana": [
   "ても始まらない",
   "てもはじまらない"
  ],
  "patternHtml": "〜ても<ruby>始ま<rt>はじま</rt></ruby>らない"
 },
 {
  "id": 106,
  "unit": 11,
  "pattern": "〜てもらう/ていただく",
  "senses": [
   {
    "connect": [
     "动词て形＋もらう",
     "动词て形＋いただく"
    ],
    "desc": "请……做……。表示请求某人为自己做某事。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "私は先生に作文を直していただきました。",
      "zh": "我请老师帮我修改了作文。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>に<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>直し<rt>なおし</rt></ruby><span class=\"target\">ていただ</span>きました。"
     },
     {
      "src": "",
      "ja": "友達に手伝ってもらった。",
      "zh": "请朋友帮了忙。",
      "jaHtml": "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>手伝っ<rt>てつだっ</rt></ruby><span class=\"target\">てもら</span>った。"
     }
    ],
    "note": "「〜ていただく」是「〜てもらう」的自谦形式，用于长辈、上级。"
   }
  ],
  "kana": [
   "てもらう",
   "ていただく"
  ],
  "patternHtml": "〜てもらう/ていただく"
 },
 {
  "id": 107,
  "unit": 11,
  "pattern": "〜てよかった",
  "senses": [
   {
    "connect": [
     "动词て形＋よかった"
    ],
    "desc": "幸亏……。表示说话人认为事先做了某事是很好的。",
    "examples": [
     {
      "src": "",
      "ja": "先生と相談してよかった。",
      "zh": "幸亏和老师商量了。",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>し<span class=\"target\">てよかった</span>。"
     },
     {
      "src": "",
      "ja": "傘を持ってきてよかった。",
      "zh": "幸亏带了伞。",
      "jaHtml": "<ruby>傘<rt>かさ</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby>てき<span class=\"target\">てよかった</span>。"
     }
    ],
    "note": "「よかった」是「よい」的过去时，但表达的是说话人现在的心情。"
   }
  ],
  "kana": [
   "てよかった"
  ],
  "patternHtml": "〜てよかった"
 },
 {
  "id": 108,
  "unit": 11,
  "pattern": "〜と",
  "senses": [
   {
    "connect": [
     "动词辞书形＋と",
     "动词ない形＋と"
    ],
    "desc": "一……就……。表示必然的恒定条件或习惯。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "その花は5月にならないと咲かない。",
      "zh": "那种花不到5月是不会开的。",
      "jaHtml": "その<ruby>花<rt>はな</rt></ruby>は5<ruby>月<rt>がつ</rt></ruby>にならない<span class=\"target\">と</span><ruby>咲か<rt>さか</rt></ruby>ない。"
     },
     {
      "src": "2004年真题",
      "ja": "ここを押すと、人形が動きます。",
      "zh": "按一下这里，布偶娃娃就会动。",
      "jaHtml": "ここを<ruby>押す<rt>おす</rt></ruby><span class=\"target\">と</span>、<ruby>人形<rt>にんぎょう</rt></ruby>が<ruby>動き<rt>うごき</rt></ruby>ます。"
     }
    ],
    "note": "后项不能用命令、意志等主观表达。"
   }
  ],
  "patternHtml": "〜と"
 },
 {
  "id": 109,
  "unit": 11,
  "pattern": "〜という",
  "senses": [
   {
    "connect": [
     "名词＋という＋名词",
     "句子的普通形＋という＋名词"
    ],
    "desc": "叫做……、……的……。表示下定义或解释。",
    "examples": [
     {
      "src": "",
      "ja": "「りかい」という言葉はどういう意味ですか。",
      "zh": "「理解」这个词是什么意思？",
      "jaHtml": "「りかい」<span class=\"target\">という</span><ruby>言葉<rt>ことば</rt></ruby>はどういう<ruby>意味<rt>いみ</rt></ruby>ですか。"
     },
     {
      "src": "",
      "ja": "山田という人から電話がありました。",
      "zh": "有个叫山田的人来电话了。",
      "jaHtml": "<ruby>山田<rt>やまだ</rt></ruby><span class=\"target\">という</span><ruby>人<rt>にん</rt></ruby>から<ruby>電話<rt>でんわ</rt></ruby>がありました。"
     }
    ],
    "note": "「〜という」连接名词，表示名称或内容。"
   }
  ],
  "kana": [
   "という"
  ],
  "patternHtml": "〜という"
 },
 {
  "id": 110,
  "unit": 11,
  "pattern": "〜ということ",
  "senses": [
   {
    "connect": [
     "句子的普通形＋ということ"
    ],
    "desc": "……这件事、……这一点。把前面的内容名词化。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "彼が来月結婚するということは、まだ誰にも知らせていない。",
      "zh": "他下个月结婚这件事，还没有告诉任何人。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>来月<rt>らいげつ</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>する<span class=\"target\">ということ</span>は、まだ<ruby>誰<rt>だれ</rt></ruby>にも<ruby>知らせ<rt>しらせ</rt></ruby>ていない。"
     },
     {
      "src": "2005年真题",
      "ja": "いろいろ調べて、その駅が一番便利だということが分かった。",
      "zh": "做了各种调查，知道了那个车站最方便。",
      "jaHtml": "いろいろ<ruby>調べ<rt>しらべ</rt></ruby>て、その<ruby>駅<rt>えき</rt></ruby>が<ruby>一番便利<rt>いちばんべんり</rt></ruby>だ<span class=\"target\">ということ</span>が<ruby>分か<rt>わか</rt></ruby>った。"
     }
    ],
    "note": "「〜ということ」后接「だ/が/を」等，构成名词性表达。"
   }
  ],
  "kana": [
   "ということ"
  ],
  "patternHtml": "〜ということ"
 },
 {
  "id": 111,
  "unit": 12,
  "pattern": "〜ということだ",
  "senses": [
   {
    "connect": [
     "句子的普通形＋ということだ"
    ],
    "desc": "听说……、据说……。表示传闻。",
    "examples": [
     {
      "src": "2001年真题",
      "ja": "コーチの話では、彼が試合に出れば、優勝は間違いないということだ。",
      "zh": "据教练说，只要他出场比赛，夺冠是毫无疑问的。",
      "jaHtml": "コーチの<ruby>話<rt>はなし</rt></ruby>では、<ruby>彼<rt>かれ</rt></ruby>が<ruby>試合<rt>しあい</rt></ruby>に<ruby>出れ<rt>でれ</rt></ruby>ば、<ruby>優勝<rt>ゆうしょう</rt></ruby>は<ruby>間違い<rt>まちがい</rt></ruby>ない<span class=\"target\">ということだ</span>。"
     },
     {
      "src": "",
      "ja": "鈴木さんは行けないだろうということだった。",
      "zh": "听说铃木大概去不了了。",
      "jaHtml": "<ruby>鈴木<rt>すずき</rt></ruby>さんは<ruby>行け<rt>いけ</rt></ruby>ないだろう<span class=\"target\">ということだ</span>った。"
     }
    ],
    "note": "常与「〜の話では」等表示信息来源的表达搭配。"
   }
  ],
  "kana": [
   "ということだ"
  ],
  "patternHtml": "〜ということだ"
 },
 {
  "id": 112,
  "unit": 12,
  "pattern": "〜というと/といえば/といったら",
  "senses": [
   {
    "connect": [
     "名词＋というと/といえば/といったら"
    ],
    "desc": "说起……、谈到……。表示提出话题，提到某事马上联想到别的事物。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "日本といえば、桜を思い出す。",
      "zh": "说起日本，就想起樱花。",
      "jaHtml": "<ruby>日本<rt>にっぽん</rt></ruby><span class=\"target\">とい</span>えば、<ruby>桜<rt>さくら</rt></ruby>を<ruby>思い出す<rt>おもいだす</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "外国語というと、まず英語を思い浮かべる。",
      "zh": "说到外语，首先想到英语。",
      "jaHtml": "<ruby>外国語<rt>がいこくご</rt></ruby><span class=\"target\">とい</span>うと、まず<ruby>英語<rt>えいご</rt></ruby>を<ruby>思い浮か<rt>おもいうか</rt></ruby>べる。"
     }
    ],
    "note": "用于列举话题并联想相关事物。"
   }
  ],
  "kana": [
   "というと",
   "といえば",
   "といったら"
  ],
  "patternHtml": "〜というと/といえば/といったら"
 },
 {
  "id": 113,
  "unit": 12,
  "pattern": "〜というのは/とは",
  "senses": [
   {
    "connect": [
     "名词＋というのは/とは"
    ],
    "desc": "所谓的……。表示下定义或解释。",
    "examples": [
     {
      "src": "2002年真题",
      "ja": "「下水」というのは、台所などで使った汚れた水のことである。",
      "zh": "所谓的下水，就是指厨房等处用过的脏水。",
      "jaHtml": "「<ruby>下水<rt>げすい</rt></ruby>」<span class=\"target\">というのは</span>、<ruby>台所<rt>だいどころ</rt></ruby>などで<ruby>使った<rt>つかった</rt></ruby><ruby>汚れ<rt>よごれ</rt></ruby>た<ruby>水<rt>みず</rt></ruby>のことである。"
     },
     {
      "src": "",
      "ja": "「愛情」とは、相手を思いやることだ。",
      "zh": "所谓的爱情，就是体谅对方。",
      "jaHtml": "「<ruby>愛情<rt>あいじょう</rt></ruby>」<span class=\"target\">とは</span>、<ruby>相手<rt>あいて</rt></ruby>を<ruby>思い<rt>おもい</rt></ruby>やることだ。"
     }
    ],
    "note": "常与「〜のことだ/〜だ」等搭配用于下定义。"
   }
  ],
  "kana": [
   "というのは",
   "とは"
  ],
  "patternHtml": "〜というのは/とは"
 },
 {
  "id": 114,
  "unit": 12,
  "pattern": "〜というほどではない/というほどでもない",
  "senses": [
   {
    "connect": [
     "动词普通形＋というほどではない",
     "名词＋というほどではない"
    ],
    "desc": "并没有达到……的程度。",
    "examples": [
     {
      "src": "",
      "ja": "英語は少し勉強しましたが、通訳ができるというほどではありません。",
      "zh": "虽然学了一些英语，但还没有达到能当翻译的程度。",
      "jaHtml": "<ruby>英語<rt>えいご</rt></ruby>は<ruby>少し<rt>すこし</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しましたが、<ruby>通訳<rt>つうやく</rt></ruby>ができる<span class=\"target\">というほどで</span>はありません。"
     }
    ],
    "note": "表示程度并非那么高。"
   }
  ],
  "kana": [
   "というほどではない",
   "というほどでもない"
  ],
  "patternHtml": "〜というほどではない/というほどでもない"
 },
 {
  "id": 115,
  "unit": 12,
  "pattern": "〜といっても",
  "senses": [
   {
    "connect": [
     "句子的普通形＋といっても"
    ],
    "desc": "虽说……但是……。表示转折，对前项内容做补充说明。",
    "examples": [
     {
      "src": "",
      "ja": "A「4月から外国語の学校に通ってるの。」B「へえ、がんばってるね。」A「といっても、週に1回だけだけどね。」",
      "zh": "A：从4月开始在上外语学校。B：哦，真努力啊。A：虽说如此，不过一周只有一次。",
      "jaHtml": "A「4<ruby>月<rt>がつ</rt></ruby>から<ruby>外国語<rt>がいこくご</rt></ruby>の<ruby>学校<rt>がっこう</rt></ruby>に<ruby>通って<rt>とおって</rt></ruby>るの。」B「へえ、がんばってるね。」A「<span class=\"target\">といっても</span>、<ruby>週<rt>しゅう</rt></ruby>に1<ruby>回<rt>かい</rt></ruby>だけだけどね。」"
     }
    ],
    "note": "对前项叙述的内容，后项补充说明实际还达不到那个程度。"
   }
  ],
  "kana": [
   "といっても"
  ],
  "patternHtml": "〜といっても"
 },
 {
  "id": 116,
  "unit": 12,
  "pattern": "〜というものは",
  "senses": [
   {
    "connect": [
     "名词＋というものは"
    ],
    "desc": "……这种东西。表示一般性的论述。",
    "examples": [
     {
      "src": "",
      "ja": "戦争というものは、残酷なものだ。",
      "zh": "战争这种东西是非常残酷的。",
      "jaHtml": "<ruby>戦争<rt>せんそう</rt></ruby><span class=\"target\">というものは</span>、<ruby>残酷<rt>ざんこく</rt></ruby>なものだ。"
     },
     {
      "src": "",
      "ja": "人間というものは、一人で生きていくことはできない。",
      "zh": "人这种东西，是无法独自生存的。",
      "jaHtml": "<ruby>人間<rt>にんげん</rt></ruby><span class=\"target\">というものは</span>、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>生き<rt>いき</rt></ruby>ていくことはできない。"
     }
    ],
    "note": "用于阐述一般性、普遍性的事物性质。"
   }
  ],
  "kana": [
   "というものは"
  ],
  "patternHtml": "〜というものは"
 },
 {
  "id": 117,
  "unit": 12,
  "pattern": "〜とおり(に)/とおりの/どおり(に)/どおりの",
  "senses": [
   {
    "connect": [
     "动词辞书形/た形＋とおり(に)",
     "名词＋の＋とおり(に)",
     "名词＋どおり(に)"
    ],
    "desc": "按照……、如……一样。",
    "examples": [
     {
      "src": "",
      "ja": "説明書に書いてあるとおりにやってください。",
      "zh": "请按照说明书上写的做。",
      "jaHtml": "<ruby>説明書<rt>せつめいしょ</rt></ruby>に<ruby>書い<rt>かい</rt></ruby>てある<span class=\"target\">とおり</span>にやってください。"
     },
     {
      "src": "",
      "ja": "予定どおりに進んでいる。",
      "zh": "正按计划进行。",
      "jaHtml": "<ruby>予定<rt>よてい</rt></ruby><span class=\"target\">どおり</span>に<ruby>進ん<rt>すすん</rt></ruby>でいる。"
     }
    ],
    "note": "「どおり」是「とおり」的浊音形式，接在名词后。"
   }
  ],
  "kana": [
   "とおり",
   "どおり"
  ],
  "patternHtml": "〜とおり(に)/とおりの/どおり(に)/どおりの"
 },
 {
  "id": 118,
  "unit": 12,
  "pattern": "〜とか",
  "senses": [
   {
    "connect": [
     "动词辞书形＋とか",
     "名词＋とか"
    ],
    "desc": "……之类的、……啦。表示列举。",
    "examples": [
     {
      "src": "",
      "ja": "休みの日はテレビを見るとか、買い物をするとかして過ごす。",
      "zh": "休息日看看电视、买买东西什么的度过。",
      "jaHtml": "<ruby>休み<rt>やすみ</rt></ruby>の<ruby>日<rt>にち</rt></ruby>はテレビを<ruby>見る<rt>みる</rt></ruby><span class=\"target\">とか</span>、<ruby>買い物<rt>かいもの</rt></ruby>をするとかして<ruby>過ご<rt>すご</rt></ruby>す。"
     },
     {
      "src": "",
      "ja": "机の上に本とかノートが置いてある。",
      "zh": "桌子上放着书啦本子之类的。",
      "jaHtml": "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上に<rt>うえに</rt></ruby><ruby>本<rt>ほん</rt></ruby><span class=\"target\">とか</span>ノートが<ruby>置い<rt>おい</rt></ruby>てある。"
     }
    ],
    "note": "「〜とか〜とか」并列列举两个以上例子。"
   }
  ],
  "patternHtml": "〜とか"
 },
 {
  "id": 119,
  "unit": 12,
  "pattern": "〜とか〜とか",
  "senses": [
   {
    "connect": [
     "动词辞书形＋とか＋动词辞书形＋とか",
     "名词＋とか＋名词＋とか"
    ],
    "desc": "……啦……啦。表示从几个例子中举出具有代表性的例子。",
    "examples": [
     {
      "src": "1998年真题",
      "ja": "A「デパートで何か買いましたか。」B「ええ、シャツとか靴下とか、いろいろ買いました。」",
      "zh": "A：在百货商店买了什么吗？B：嗯，衬衫啦袜子啦，买了很多。",
      "jaHtml": "A「デパートで<ruby>何か<rt>なにか</rt></ruby><ruby>買い<rt>かい</rt></ruby>ましたか。」B「ええ、シャツ<span class=\"target\">とか</span><ruby>靴下<rt>くつした</rt></ruby>とか、いろいろ<ruby>買い<rt>かい</rt></ruby>ました。」"
     }
    ],
    "note": "以「〜とか〜とか」的形式列举代表性例子。"
   }
  ],
  "patternHtml": "〜とか〜とか"
 },
 {
  "id": 120,
  "unit": 12,
  "pattern": "〜としたら/とすれば",
  "senses": [
   {
    "connect": [
     "动词辞书形＋としたら",
     "名词＋としたら",
     "句子的普通形＋としたら"
    ],
    "desc": "如果……的话。表示假设。",
    "examples": [
     {
      "src": "",
      "ja": "もし100万円もらえるとしたら、何に使いますか。",
      "zh": "如果能得到100万日元的话，你会用在什么地方？",
      "jaHtml": "もし100<ruby>万円<rt>まんえん</rt></ruby>もらえる<span class=\"target\">としたら</span>、<ruby>何<rt>なに</rt></ruby>に<ruby>使い<rt>つかい</rt></ruby>ますか。"
     },
     {
      "src": "",
      "ja": "今すぐ出発するとしたら、何時に着く？",
      "zh": "如果现在出发的话，几点能到？",
      "jaHtml": "<ruby>今す<rt>います</rt></ruby>ぐ<ruby>出発<rt>しゅっぱつ</rt></ruby>する<span class=\"target\">としたら</span>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>着く<rt>つく</rt></ruby>？"
     }
    ],
    "note": "「〜としたら」和「〜とすれば」意思相近，都表示假设。"
   }
  ],
  "kana": [
   "としたら",
   "とすれば"
  ],
  "patternHtml": "〜としたら/とすれば"
 },
 {
  "id": 121,
  "unit": 13,
  "pattern": "〜として/としての/としては/としても",
  "senses": [
   {
    "connect": [
     "名词＋として/としての/としては/としても"
    ],
    "desc": "作为……、作为……也……。表示某种身份、资格或立场。",
    "examples": [
     {
      "src": "",
      "ja": "留学生として日本に来ました。",
      "zh": "作为留学生来到了日本。",
      "jaHtml": "<ruby>留学生<rt>りゅうがくせい</rt></ruby><span class=\"target\">として</span><ruby>日本<rt>にっぽん</rt></ruby>に<ruby>来ま<rt>きま</rt></ruby>した。"
     },
     {
      "src": "",
      "ja": "彼は医者としても有名だ。",
      "zh": "他作为医生也很有名。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>医者<rt>いしゃ</rt></ruby><span class=\"target\">としても</span><ruby>有名<rt>ゆうめい</rt></ruby>だ。"
     }
    ],
    "note": "「〜としての」后续名词作定语；「〜としては」表示站在某立场；「〜としても」表示即使作为……也……。"
   }
  ],
  "kana": [
   "として",
   "としての",
   "としては",
   "としても"
  ],
  "patternHtml": "〜として/としての/としては/としても"
 },
 {
  "id": 122,
  "unit": 13,
  "pattern": "〜とともに",
  "senses": [
   {
    "connect": [
     "动词辞书形＋とともに",
     "名词＋とともに"
    ],
    "desc": "随着……、与……一起。表示伴随变化或共同进行。",
    "examples": [
     {
      "src": "",
      "ja": "年を取るとともに、体が弱くなってきた。",
      "zh": "随着年龄增长，身体变弱了。",
      "jaHtml": "<ruby>年<rt>ねん</rt></ruby>を<ruby>取る<rt>とる</rt></ruby><span class=\"target\">とともに</span>、<ruby>体<rt>からだ</rt></ruby>が<ruby>弱く<rt>よわく</rt></ruby>なってきた。"
     },
     {
      "src": "",
      "ja": "家族とともに暮らしたい。",
      "zh": "想和家人一起生活。",
      "jaHtml": "<ruby>家族<rt>かぞく</rt></ruby><span class=\"target\">とともに</span><ruby>暮らし<rt>くらし</rt></ruby>たい。"
     }
    ],
    "note": "「〜とともに」可用于书面语，表示伴随、共同。"
   }
  ],
  "kana": [
   "とともに"
  ],
  "patternHtml": "〜とともに"
 },
 {
  "id": 123,
  "unit": 13,
  "pattern": "〜と(は)反対に",
  "senses": [
   {
    "connect": [
     "名词＋と(は)反対に",
     "句子的普通形＋のと(は)反対に"
    ],
    "desc": "与……相反。",
    "examples": [
     {
      "src": "",
      "ja": "去年とは反対に、今年は暖冬だ。",
      "zh": "和去年相反，今年是暖冬。",
      "jaHtml": "<ruby>去年<rt>きょねん</rt></ruby><span class=\"target\">とは</span><ruby>反対<rt>はんたい</rt></ruby>に、<ruby>今年<rt>こんねん</rt></ruby>は<ruby>暖冬<rt>だんとう</rt></ruby>だ。"
     }
    ],
    "note": "「〜とは反対に」强调对比。"
   }
  ],
  "kana": [
   "とはんたいに",
   "と反対に",
   "とは反対に"
  ],
  "patternHtml": "〜と(は)<ruby>反対<rt>はんたい</rt></ruby>に"
 },
 {
  "id": 124,
  "unit": 13,
  "pattern": "〜ないで済む/ずに済む",
  "senses": [
   {
    "connect": [
     "动词ない形＋ないで済む",
     "动词ない形＋ずに済む"
    ],
    "desc": "不……就解决了、不用……就可以了。（する→せずに）",
    "examples": [
     {
      "src": "",
      "ja": "奨学金がもらえるので、アルバイトはしないで済む。",
      "zh": "因为能拿到奖学金，所以不用打工。",
      "jaHtml": "<ruby>奨学金<rt>しょうがくきん</rt></ruby>がもらえるので、アルバイトはし<span class=\"target\">ないで<ruby>済む<rt>すむ</rt></ruby></span>。"
     }
    ],
    "note": "表示避免了某种麻烦或不必要的行为。"
   }
  ],
  "kana": [
   "ないですむ",
   "ずにすむ"
  ],
  "patternHtml": "〜ないで<ruby>済む<rt>すむ</rt></ruby>/ずに<ruby>済む<rt>すむ</rt></ruby>"
 },
 {
  "id": 125,
  "unit": 13,
  "pattern": "〜ないかな",
  "senses": [
   {
    "connect": [
     "动词ない形＋ないかな"
    ],
    "desc": "多希望……啊。表示说话人的希望、愿望。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "社長のスピーチ、早く終わらないかな、いつも長くて困るよ。",
      "zh": "社长的演讲能不能早点结束啊，总是那么长，真让人头疼。",
      "jaHtml": "<ruby>社長<rt>しゃちょう</rt></ruby>のスピーチ、<ruby>早く<rt>はやく</rt></ruby><ruby>終わ<rt>おわ</rt></ruby>ら<span class=\"target\">ないかな</span>、いつも<ruby>長く<rt>ながく</rt></ruby>て<ruby>困る<rt>こまる</rt></ruby>よ。"
     }
    ],
    "note": "前接表示动作、变化等动词的否定形，女性口语是「〜ないかしら」。"
   }
  ],
  "kana": [
   "ないかな"
  ],
  "patternHtml": "〜ないかな"
 },
 {
  "id": 126,
  "unit": 13,
  "pattern": "〜直す",
  "senses": [
   {
    "connect": [
     "动词ます形＋直す"
    ],
    "desc": "重新……。表示再做一次。",
    "examples": [
     {
      "src": "",
      "ja": "字が汚いので、書き直す。",
      "zh": "字太潦草，重写一遍。",
      "jaHtml": "<ruby>字が<rt>じが</rt></ruby><ruby>汚い<rt>きたない</rt></ruby>ので、<span class=\"target\"><ruby>書き直す<rt>かきなおす</rt></ruby></span>。"
     },
     {
      "src": "",
      "ja": "提出する前にもう一度作文を見直した。",
      "zh": "提交之前又检查了一遍作文。",
      "jaHtml": "<ruby>提出<rt>ていしゅつ</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>にもう<ruby>一度<rt>いちど</rt></ruby><ruby>作文<rt>さくぶん</rt></ruby>を<span class=\"target\"><ruby>見直し<rt>みなおし</rt></ruby>た</span>。"
     }
    ],
    "note": "表示对前面行为的结果不满意，重新做一次。"
   }
  ],
  "kana": [
   "なおす"
  ],
  "patternHtml": "〜<ruby>直す<rt>なおす</rt></ruby>"
 },
 {
  "id": 127,
  "unit": 13,
  "pattern": "〜ながら(も)",
  "senses": [
   {
    "connect": [
     "动词ます形＋ながら(も)",
     "い形容词辞书形＋ながら(も)",
     "な形容词词干/名词＋ながら(も)"
    ],
    "desc": "虽然……但是……。表示逆接。",
    "examples": [
     {
      "src": "",
      "ja": "この車は小型ながら、高性能だ。",
      "zh": "这辆车虽然小，但性能很高。",
      "jaHtml": "この<ruby>車<rt>くるま</rt></ruby>は<ruby>小型<rt>こがた</rt></ruby><span class=\"target\">ながら</span>、<ruby>高性能<rt>こうせいのう</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "狭いながらも楽しい我が家。",
      "zh": "虽然狭小但很温馨的家。",
      "jaHtml": "<ruby>狭い<rt>せまい</rt></ruby><span class=\"target\">ながら</span>も<ruby>楽しい<rt>たのしい</rt></ruby><ruby>我が家<rt>わがや</rt></ruby>。"
     }
    ],
    "note": "「〜ながら」之后常伴有「も」，以「〜ながらも」的形式使用。"
   }
  ],
  "kana": [
   "ながら",
   "ながらも"
  ],
  "patternHtml": "〜ながら(も)"
 },
 {
  "id": 128,
  "unit": 13,
  "pattern": "〜なければならない/なければいけない/なくてはならない/なくてはいけない",
  "senses": [
   {
    "connect": [
     "动词ない形＋なければならない",
     "い形容词词干＋くなくてはならない",
     "名词＋でなくてはならない"
    ],
    "desc": "必须……、非……不可。表示有必要、有义务做某事或必要的条件。",
    "examples": [
     {
      "src": "",
      "ja": "学生は勉強しなければならない。",
      "zh": "学生必须学习。",
      "jaHtml": "<ruby>学生<rt>がくせい</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>し<span class=\"target\">なければならない</span>。"
     },
     {
      "src": "",
      "ja": "明日の会議には出席しなければいけません。",
      "zh": "明天的会议必须出席。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>には<ruby>出席<rt>しゅっせき</rt></ruby>し<span class=\"target\">なければ</span>いけません。"
     }
    ],
    "note": "口语中「〜なければ」常说成「〜なきゃ」。"
   }
  ],
  "kana": [
   "なければならない",
   "なければいけない",
   "なくてはならない",
   "なくてはいけない"
  ],
  "patternHtml": "〜なければならない/なければいけない/なくてはならない/なくてはいけない"
 },
 {
  "id": 129,
  "unit": 13,
  "pattern": "〜なくてもかまわない",
  "senses": [
   {
    "connect": [
     "动词ない形＋なくてもかまわない",
     "名词＋でなくてもかまわない"
    ],
    "desc": "不……也没关系。表示没有必要做某事。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "この仕事は日本語が上手でなくてもかまいません。",
      "zh": "这份工作日语不好也没关系。",
      "jaHtml": "この<ruby>仕事<rt>しごと</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>で<span class=\"target\">なくてもかま</span>いません。"
     }
    ],
    "note": "与「〜なくてもいい」意思相近。"
   }
  ],
  "kana": [
   "なくてもかまわない"
  ],
  "patternHtml": "〜なくてもかまわない"
 },
 {
  "id": 130,
  "unit": 13,
  "pattern": "〜など/なんか/なんて",
  "senses": [
   {
    "connect": [
     "名词＋など/なんか/なんて",
     "动词普通形＋など/なんか/なんて"
    ],
    "desc": "……之类的。表示列举（常带轻视、自谦的语气）。",
    "examples": [
     {
      "src": "",
      "ja": "毎日忙しくて、手紙を書くなどする時間がない。",
      "zh": "每天都很忙，没有写信之类的时间。",
      "jaHtml": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>忙しく<rt>いそがしく</rt></ruby>て、<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>書く<rt>かく</rt></ruby><span class=\"target\">など</span>する<ruby>時間<rt>じかん</rt></ruby>がない。"
     },
     {
      "src": "",
      "ja": "私なんか、とても無理です。",
      "zh": "像我这样的，肯定不行。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby><span class=\"target\">なんか</span>、とても<ruby>無理<rt>むり</rt></ruby>です。"
     }
    ],
    "note": "「なんか」「なんて」比「など」更口语，常带轻视、自谦语气。"
   }
  ],
  "kana": [
   "など",
   "なんか",
   "なんて"
  ],
  "patternHtml": "〜など/なんか/なんて"
 },
 {
  "id": 131,
  "unit": 14,
  "pattern": "なにしろ〜から",
  "senses": [
   {
    "connect": [
     "なにしろ＋句子的普通形・礼貌形＋から"
    ],
    "desc": "因为……（毕竟……）。强调理由。",
    "examples": [
     {
      "src": "",
      "ja": "なにしろここは田舎だから、買い物には不便だ。",
      "zh": "毕竟这里是乡下，买东西不方便。",
      "jaHtml": "<span class=\"target\">なにしろ</span>ここは<ruby>田舎<rt>いなか</rt></ruby>だから、<ruby>買い物<rt>かいもの</rt></ruby>には<ruby>不便<rt>ふべん</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "なにしろ東京だから、家賃が高くて大変です。",
      "zh": "毕竟是东京，房租高得不得了。",
      "jaHtml": "<span class=\"target\">なにしろ</span><ruby>東京<rt>とうきょう</rt></ruby>だから、<ruby>家賃<rt>やちん</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>て<ruby>大変<rt>たいへん</rt></ruby>です。"
     }
    ],
    "note": "多以「なにしろ〜だから/で/て」等形式用于陈述理由。"
   }
  ],
  "kana": [
   "なにしろ"
  ],
  "patternHtml": "なにしろ〜から"
 },
 {
  "id": 132,
  "unit": 14,
  "pattern": "〜なら",
  "senses": [
   {
    "connect": [
     "动词普通形＋なら",
     "い形容词普通形＋なら",
     "な形容词词干＋なら",
     "名词＋なら"
    ],
    "desc": "如果……的话。表示假定条件。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "明日雨が降るなら、洗濯はしない。",
      "zh": "如果明天下雨，就不洗衣服。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby><ruby>雨<rt>あめ</rt></ruby>が<ruby>降る<rt>ふる</rt></ruby><span class=\"target\">なら</span>、<ruby>洗濯<rt>せんたく</rt></ruby>はしない。"
     },
     {
      "src": "",
      "ja": "山なら、やはり富士山が一番だ。",
      "zh": "说到山，还是富士山最好。",
      "jaHtml": "<ruby>山<rt>やま</rt></ruby><span class=\"target\">なら</span>、やはり<ruby>富士山<rt>ふじさん</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby>だ。"
     }
    ],
    "note": "「〜なら」也用于提起话题。"
   }
  ],
  "kana": [
   "なら"
  ],
  "patternHtml": "〜なら"
 },
 {
  "id": 133,
  "unit": 14,
  "pattern": "〜に",
  "senses": [
   {
    "connect": [
     "名词＋に"
    ],
    "desc": "作为……（表赠予、用途等对象）。",
    "examples": [
     {
      "src": "",
      "ja": "誕生日の祝いに時計をもらった。",
      "zh": "作为生日礼物收到了手表。",
      "jaHtml": "<ruby>誕生日<rt>たんじょうび</rt></ruby>の<ruby>祝い<rt>いわい</rt></ruby><span class=\"target\">に</span><ruby>時計<rt>とけい</rt></ruby>をもらった。"
     },
     {
      "src": "",
      "ja": "病気見舞いに花束を贈る。",
      "zh": "给病人送花束作慰问。",
      "jaHtml": "<ruby>病気<rt>びょうき</rt></ruby><ruby>見舞い<rt>みまい</rt></ruby><span class=\"target\">に</span><ruby>花束<rt>はなたば</rt></ruby>を<ruby>贈る<rt>おくる</rt></ruby>。"
     }
    ],
    "note": "表示用途、目的、对象。"
   },
   {
    "connect": [
     "名词＋に"
    ],
    "desc": "由于……而感到……。表示心理现象的原因。",
    "examples": [
     {
      "src": "",
      "ja": "彼の無責任な態度に腹が立つ。",
      "zh": "对他不负责任的态度感到生气。",
      "jaHtml": "<ruby>彼の<rt>かの</rt></ruby><ruby>無責任<rt>むせきにん</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby><span class=\"target\">に</span><ruby>腹<rt>はら</rt></ruby>が<ruby>立つ<rt>たつ</rt></ruby>。"
     }
    ],
    "note": "常伴有表示心理活动的动词，如「困る/迷う/驚く」等。"
   },
   {
    "connect": [
     "名词＋に"
    ],
    "desc": "表示比较、评价的基准。",
    "examples": [
     {
      "src": "",
      "ja": "この製品は熱に弱い。",
      "zh": "这个产品不耐热。",
      "jaHtml": "この<ruby>製品<rt>せいひん</rt></ruby>は<ruby>熱<rt>ねつ</rt></ruby><span class=\"target\">に</span><ruby>弱い<rt>よわい</rt></ruby>。"
     }
    ],
    "note": "后面常与表示状态的词搭配，如「強い/弱い/似ている」等。"
   }
  ],
  "patternHtml": "〜に"
 },
 {
  "id": 134,
  "unit": 14,
  "pattern": "〜において/における",
  "senses": [
   {
    "connect": [
     "名词＋において/における"
    ],
    "desc": "在……、在……方面。表示场合、时间、范围等。",
    "examples": [
     {
      "src": "2001年真题",
      "ja": "当時においては、海外旅行などは夢のようなことだった。",
      "zh": "在当时，海外旅行什么的简直像做梦一样。",
      "jaHtml": "<ruby>当時<rt>とうじ</rt></ruby><span class=\"target\">にお</span>いては、<ruby>海外旅行<rt>かいがいりょこう</rt></ruby>などは<ruby>夢<rt>ゆめ</rt></ruby>のようなことだった。"
     },
     {
      "src": "",
      "ja": "わが国はゴミの分別収集においてはまだ不十分だ。",
      "zh": "我国在垃圾分类收集方面做得还不够。",
      "jaHtml": "わが<ruby>国<rt>くに</rt></ruby>はゴミの<ruby>分別<rt>ふんべつ</rt></ruby><ruby>収集<rt>しゅうしゅう</rt></ruby><span class=\"target\">にお</span>いてはまだ<ruby>不十分<rt>ふじゅうぶん</rt></ruby>だ。"
     }
    ],
    "note": "「〜における」后续名词作定语，是书面语。"
   }
  ],
  "kana": [
   "において",
   "における"
  ],
  "patternHtml": "〜において/における"
 },
 {
  "id": 135,
  "unit": 14,
  "pattern": "〜にかわって/にかわり",
  "senses": [
   {
    "connect": [
     "名词＋にかわって/にかわり"
    ],
    "desc": "代替……。表示代替某人或某物。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "入院した先生にかわって、今は新しい先生が授業をしている。",
      "zh": "代替住院的老师，现在由新老师上课。",
      "jaHtml": "<ruby>入院<rt>にゅういん</rt></ruby>した<ruby>先生<rt>せんせい</rt></ruby><span class=\"target\">にかわって</span>、<ruby>今<rt>いま</rt></ruby>は<ruby>新しい<rt>あたらしい</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>が<ruby>授業<rt>じゅぎょう</rt></ruby>をしている。"
     }
    ],
    "note": "「〜にかわり」多用于书面。"
   }
  ],
  "kana": [
   "にかわって",
   "にかわり"
  ],
  "patternHtml": "〜にかわって/にかわり"
 },
 {
  "id": 136,
  "unit": 14,
  "pattern": "〜に関して(は)/に関しても/に関する",
  "senses": [
   {
    "connect": [
     "名词＋に関して(は)/に関しても/に関する"
    ],
    "desc": "关于……、有关……。表示事物和行为所涉及的对象。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "コンピューターの使い方に関して、質問がある方は、私のところまでどうぞ。",
      "zh": "有关电脑使用方法有疑问的人，请到我这里来。",
      "jaHtml": "コンピューターの<ruby>使い方<rt>つかいかた</rt></ruby><span class=\"target\">に<ruby>関し<rt>かんし</rt></ruby>て</span>、<ruby>質問<rt>しつもん</rt></ruby>がある<ruby>方は<rt>かたは</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>のところまでどうぞ。"
     }
    ],
    "note": "「〜に関する」后续名词作定语。"
   }
  ],
  "kana": [
   "にかんして",
   "にかんする"
  ],
  "patternHtml": "〜に<ruby>関し<rt>かんし</rt></ruby>て(は)/に<ruby>関し<rt>かんし</rt></ruby>ても/に<ruby>関す<rt>かんす</rt></ruby>る"
 },
 {
  "id": 137,
  "unit": 14,
  "pattern": "〜にくい",
  "senses": [
   {
    "connect": [
     "动词ます形＋にくい"
    ],
    "desc": "很难……。表示做某事有困难。",
    "examples": [
     {
      "src": "",
      "ja": "この本は漢字が多くて読みにくい。",
      "zh": "这本书汉字太多，很难读。",
      "jaHtml": "この<ruby>本<rt>ほん</rt></ruby>は<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>多く<rt>おおく</rt></ruby>て<ruby>読み<rt>よみ</rt></ruby><span class=\"target\">にくい</span>。"
     },
     {
      "src": "",
      "ja": "このペンは書きにくい。",
      "zh": "这支笔不好写。",
      "jaHtml": "このペンは<ruby>書き<rt>かき</rt></ruby><span class=\"target\">にくい</span>。"
     }
    ],
    "note": "「〜にくい」多用于客观困难；与「〜やすい」（容易）相对。"
   }
  ],
  "kana": [
   "にくい"
  ],
  "patternHtml": "〜にくい"
 },
 {
  "id": 138,
  "unit": 14,
  "pattern": "〜に比べ(て)",
  "senses": [
   {
    "connect": [
     "名词＋に比べて"
    ],
    "desc": "和……相比。表示比较。",
    "examples": [
     {
      "src": "",
      "ja": "今日は昨日に比べて少し暑いようだ。",
      "zh": "今天好像比昨天热一些。",
      "jaHtml": "<ruby>今日は<rt>きょうは</rt></ruby><ruby>昨日<rt>きのう</rt></ruby><span class=\"target\">に<ruby>比べ<rt>くらべ</rt></ruby></span>て<ruby>少し<rt>すこし</rt></ruby><ruby>暑い<rt>あつい</rt></ruby>ようだ。"
     },
     {
      "src": "",
      "ja": "去年に比べて今年の冬は寒い。",
      "zh": "和去年相比，今年冬天很冷。",
      "jaHtml": "<ruby>去年<rt>きょねん</rt></ruby><span class=\"target\">に<ruby>比べ<rt>くらべ</rt></ruby></span>て<ruby>今年<rt>こんねん</rt></ruby>の<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>寒い<rt>さむい</rt></ruby>。"
     }
    ],
    "note": "「〜に比べて」强调对比基准。"
   }
  ],
  "kana": [
   "にくらべ",
   "にくらべて"
  ],
  "patternHtml": "〜に<ruby>比べ<rt>くらべ</rt></ruby>(て)"
 },
 {
  "id": 139,
  "unit": 14,
  "pattern": "〜にしろ〜にしろ/〜にせよ〜にせよ/〜にしても〜にしても",
  "senses": [
   {
    "connect": [
     "动词普通形＋にしろ〜动词普通形＋にしろ",
     "名词＋にしろ〜名词＋にしろ"
    ],
    "desc": "无论是……还是……都……。举出两个对立的事物，表示无论哪种情况都无一例外。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "出席するにしろ欠席するにしろ、招待状の返事は早く出したほうがいい。",
      "zh": "无论是出席还是缺席，最好早点回复邀请函。",
      "jaHtml": "<ruby>出席<rt>しゅっせき</rt></ruby>する<span class=\"target\">にし</span>ろ<ruby>欠席<rt>けっせき</rt></ruby>するにしろ、<ruby>招待状<rt>しょうたいじょう</rt></ruby>の<ruby>返事<rt>へんじ</rt></ruby>は<ruby>早く<rt>はやく</rt></ruby><ruby>出し<rt>だし</rt></ruby>たほうがいい。"
     }
    ],
    "note": "「〜にせよ〜にせよ」比「〜にしろ」更正式。"
   }
  ],
  "kana": [
   "にしろ",
   "にせよ",
   "にしても"
  ],
  "patternHtml": "〜にしろ〜にしろ/〜にせよ〜にせよ/〜にしても〜にしても"
 },
 {
  "id": 140,
  "unit": 14,
  "pattern": "〜にする",
  "senses": [
   {
    "connect": [
     "名词＋にする"
    ],
    "desc": "决定……、选……。表示从供选择的几项中选定一项。",
    "examples": [
     {
      "src": "",
      "ja": "A「何を食べようか。」B「わたし、スパゲッティとコーヒーにする。」",
      "zh": "A：吃什么好呢？B：我选意大利面和咖啡。",
      "jaHtml": "A「<ruby>何を<rt>なにを</rt></ruby><ruby>食べ<rt>たべ</rt></ruby>ようか。」B「わたし、スパゲッティとコーヒー<span class=\"target\">にす</span>る。」"
     }
    ],
    "note": "「〜にする」表示主观选择；「〜になる」表示客观决定。"
   }
  ],
  "kana": [
   "にする"
  ],
  "patternHtml": "〜にする"
 },
 {
  "id": 141,
  "unit": 15,
  "pattern": "〜に対して/に対する/に対しての",
  "senses": [
   {
    "connect": [
     "名词＋に対して/に対する/に対しての"
    ],
    "desc": "对……、对于……。表示对象。",
    "examples": [
     {
      "src": "",
      "ja": "お客様に対して失礼なことをしてはいけない。",
      "zh": "不能对客人做失礼的事。",
      "jaHtml": "お<ruby>客様<rt>きゃくさま</rt></ruby><span class=\"target\">に<ruby>対し<rt>たいし</rt></ruby>て</span><ruby>失礼<rt>しつれい</rt></ruby>なことをしてはいけない。"
     },
     {
      "src": "",
      "ja": "彼は誰に対しても親切だ。",
      "zh": "他对谁都很亲切。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>誰<rt>だれ</rt></ruby><span class=\"target\">に<ruby>対し<rt>たいし</rt></ruby>て</span>も<ruby>親切<rt>しんせつ</rt></ruby>だ。"
     }
    ],
    "note": "「〜に対する」后续名词作定语。"
   }
  ],
  "kana": [
   "に対して",
   "に対する",
   "に対しての"
  ],
  "patternHtml": "〜に<ruby>対し<rt>たいし</rt></ruby>て/に<ruby>対する<rt>たいする</rt></ruby>/に<ruby>対し<rt>たいし</rt></ruby>ての"
 },
 {
  "id": 142,
  "unit": 15,
  "pattern": "〜について/についての",
  "senses": [
   {
    "connect": [
     "名词＋について/についての"
    ],
    "desc": "关于……。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "大学では日本文学史について研究したいと思っています。",
      "zh": "想在大学研究日本文学史。",
      "jaHtml": "<ruby>大学<rt>だいがく</rt></ruby>では<ruby>日本文<rt>にほんぶん</rt></ruby><ruby>学史<rt>がくし</rt></ruby><span class=\"target\">について</span><ruby>研究<rt>けんきゅう</rt></ruby>したいと<ruby>思って<rt>おもって</rt></ruby>います。"
     },
     {
      "src": "",
      "ja": "彼に経済についての本を借りました。",
      "zh": "向他借了本经济方面的书。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>に<ruby>経済<rt>けいざい</rt></ruby><span class=\"target\">についての</span><ruby>本<rt>ほん</rt></ruby>を<ruby>借り<rt>かり</rt></ruby>ました。"
     }
    ],
    "note": "「〜についての」后续名词作定语；比「〜に関して」更口语化。"
   }
  ],
  "kana": [
   "について",
   "についての"
  ],
  "patternHtml": "〜について/についての"
 },
 {
  "id": 143,
  "unit": 15,
  "pattern": "〜につれて/につれ",
  "senses": [
   {
    "connect": [
     "动词辞书形＋につれて",
     "名词＋につれて"
    ],
    "desc": "随着……。表示随着前项变化，后项也相应变化。",
    "examples": [
     {
      "src": "2009年7月真题",
      "ja": "農業技術が発達するにつれて、人々の暮らしは豊かになっていった。",
      "zh": "随着农业技术的发展，人们的生活变得富裕起来。",
      "jaHtml": "<ruby>農業<rt>のうぎょう</rt></ruby><ruby>技術<rt>ぎじゅつ</rt></ruby>が<ruby>発達<rt>はったつ</rt></ruby>する<span class=\"target\">につれて</span>、<ruby>人々<rt>ひとびと</rt></ruby>の<ruby>暮らし<rt>くらし</rt></ruby>は<ruby>豊か<rt>ゆたか</rt></ruby>になっていった。"
     },
     {
      "src": "",
      "ja": "年を取るにつれて、経験も豊富になる。",
      "zh": "随着年龄增长，经验也越来越丰富。",
      "jaHtml": "<ruby>年<rt>ねん</rt></ruby>を<ruby>取る<rt>とる</rt></ruby><span class=\"target\">につれて</span>、<ruby>経験<rt>けいけん</rt></ruby>も<ruby>豊富<rt>ほうふ</rt></ruby>になる。"
     }
    ],
    "note": "「〜につれ」多用于书面语。"
   }
  ],
  "kana": [
   "につれて",
   "につれ"
  ],
  "patternHtml": "〜につれて/につれ"
 },
 {
  "id": 144,
  "unit": 15,
  "pattern": "〜にて",
  "senses": [
   {
    "connect": [
     "名词＋にて"
    ],
    "desc": "在……。表示事情发生的场所（书面语）。",
    "examples": [
     {
      "src": "",
      "ja": "新人教育は本社にて行います。",
      "zh": "新人培训在总公司进行。",
      "jaHtml": "<ruby>新人教育<rt>しんじんきょういく</rt></ruby>は<ruby>本社<rt>ほんしゃ</rt></ruby><span class=\"target\">にて</span><ruby>行い<rt>おこない</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "駅前にて集合します。",
      "zh": "在车站前集合。",
      "jaHtml": "<ruby>駅前<rt>えきまえ</rt></ruby><span class=\"target\">にて</span><ruby>集合<rt>しゅうごう</rt></ruby>します。"
     }
    ],
    "note": "主要用于郑重的书信等，是书面语，相当于「〜で」。"
   },
   {
    "connect": [
     "名词＋にて"
    ],
    "desc": "用……。表示工具、方法、材料、手段。",
    "examples": [
     {
      "src": "",
      "ja": "飛行機にて香港へ行く。",
      "zh": "乘飞机去香港。",
      "jaHtml": "<ruby>飛行機<rt>ひこうき</rt></ruby><span class=\"target\">にて</span><ruby>香港<rt>ほんこん</rt></ruby>へ<ruby>行く<rt>いく</rt></ruby>。"
     }
    ],
    "note": "相当于「〜で/〜によって」。"
   },
   {
    "connect": [
     "名词＋にて"
    ],
    "desc": "于……（结束的时间）。",
    "examples": [
     {
      "src": "",
      "ja": "本大会は本日にて終了します。",
      "zh": "本次大会于今天结束。",
      "jaHtml": "<ruby>本大会<rt>ほんたいかい</rt></ruby>は<ruby>本日<rt>ほんじつ</rt></ruby><span class=\"target\">にて</span><ruby>終了<rt>しゅうりょう</rt></ruby>します。"
     }
    ],
    "note": "书面语，表示结束的时间。"
   }
  ],
  "kana": [
   "にて"
  ],
  "patternHtml": "〜にて"
 },
 {
  "id": 145,
  "unit": 15,
  "pattern": "〜にとって(は)/にとっても/にとっての",
  "senses": [
   {
    "connect": [
     "名词＋にとって(は)/にとっても/にとっての"
    ],
    "desc": "对……来说。表示站在某立场来说。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "今回改正された法律は、ほとんどの国民にとってあまり役に立たない。",
      "zh": "此次修改的法律，对大多数国民来说没什么用处。",
      "jaHtml": "<ruby>今回<rt>こんかい</rt></ruby><ruby>改正<rt>かいせい</rt></ruby>された<ruby>法律<rt>ほうりつ</rt></ruby>は、ほとんどの<ruby>国民<rt>こくみん</rt></ruby><span class=\"target\">にとって</span>あまり<ruby>役に立た<rt>やくにたた</rt></ruby>ない。"
     },
     {
      "src": "2005年真题",
      "ja": "この時計は古いのですが、私にとってとても大切なものです。",
      "zh": "这块手表虽然旧，但对我来说非常重要。",
      "jaHtml": "この<ruby>時計<rt>とけい</rt></ruby>は<ruby>古い<rt>ふるい</rt></ruby>のですが、<ruby>私<rt>わたし</rt></ruby><span class=\"target\">にとって</span>とても<ruby>大切<rt>たいせつ</rt></ruby>なものです。"
     }
    ],
    "note": "后项多为表示评价的形容词，如「大切だ/重要だ/難しい/うれしい」等。"
   }
  ],
  "kana": [
   "にとって",
   "にとっても",
   "にとっての"
  ],
  "patternHtml": "〜にとって(は)/にとっても/にとっての"
 },
 {
  "id": 146,
  "unit": 15,
  "pattern": "〜には",
  "senses": [
   {
    "connect": [
     "动词辞书形＋には"
    ],
    "desc": "要……、为了……。表示动作、行为的目的。",
    "examples": [
     {
      "src": "2002年真题",
      "ja": "東京駅に行くには、そこの角を右に曲がった方が近いですよ。",
      "zh": "要去东京站的话，在那个拐角右转比较近。",
      "jaHtml": "<ruby>東京駅<rt>とうきょうえき</rt></ruby>に<ruby>行く<rt>いく</rt></ruby><span class=\"target\">には</span>、そこの<ruby>角<rt>かく</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲がっ<rt>まがっ</rt></ruby>た<ruby>方が<rt>ほうが</rt></ruby><ruby>近い<rt>ちかい</rt></ruby>ですよ。"
     },
     {
      "src": "",
      "ja": "日本へ行くには、ビザを取らなければならない。",
      "zh": "要去日本，必须办签证。",
      "jaHtml": "<ruby>日本<rt>にっぽん</rt></ruby>へ<ruby>行く<rt>いく</rt></ruby><span class=\"target\">には</span>、ビザを<ruby>取ら<rt>とら</rt></ruby>なければならない。"
     }
    ],
    "note": "「〜には」的前项表示目的，后项表示达到目的所需做的事情，相当于「〜するためには」。"
   }
  ],
  "kana": [
   "には"
  ],
  "patternHtml": "〜には"
 },
 {
  "id": 147,
  "unit": 15,
  "pattern": "〜によって(は)/により/による",
  "senses": [
   {
    "connect": [
     "名词＋によって(は)/により/による"
    ],
    "desc": "根据……、通过……。表示依据、方式或原因。",
    "examples": [
     {
      "src": "",
      "ja": "国によって、習慣が違う。",
      "zh": "因国家不同，习惯也不同。",
      "jaHtml": "<ruby>国<rt>くに</rt></ruby><span class=\"target\">によって</span>、<ruby>習慣<rt>しゅうかん</rt></ruby>が<ruby>違う<rt>ちがう</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "この事故は不注意によって起こった。",
      "zh": "这起事故是由于疏忽引起的。",
      "jaHtml": "この<ruby>事故<rt>じこ</rt></ruby>は<ruby>不注意<rt>ふちゅうい</rt></ruby><span class=\"target\">によって</span><ruby>起こ<rt>おこ</rt></ruby>った。"
     }
    ],
    "note": "「〜による」后续名词作定语；「〜によっては」表示「根据情况有时……」。"
   }
  ],
  "kana": [
   "によって",
   "により",
   "による"
  ],
  "patternHtml": "〜によって(は)/により/による"
 },
 {
  "id": 148,
  "unit": 15,
  "pattern": "〜によると/によれば/の話では",
  "senses": [
   {
    "connect": [
     "名词＋によると/によれば",
     "名词＋の話では"
    ],
    "desc": "据说……。表示传闻的根据、消息的来源。",
    "examples": [
     {
      "src": "",
      "ja": "天気予報によると、明日は雨だそうです。",
      "zh": "据天气预报说，明天会下雨。",
      "jaHtml": "<ruby>天気予報<rt>てんきよほう</rt></ruby><span class=\"target\">によると</span>、<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>だそうです。"
     },
     {
      "src": "",
      "ja": "田中さんの話では、あの店は安くておいしいらしい。",
      "zh": "据田中说，那家店又便宜又好吃。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さん<span class=\"target\">の<ruby>話<rt>はなし</rt></ruby>では</span>、あの<ruby>店<rt>みせ</rt></ruby>は<ruby>安く<rt>やすく</rt></ruby>ておいしいらしい。"
     }
    ],
    "note": "常与「〜そうだ/〜らしい/〜ということだ」等传闻表达搭配。"
   }
  ],
  "kana": [
   "によると",
   "によれば"
  ],
  "patternHtml": "〜によると/によれば/の<ruby>話<rt>はなし</rt></ruby>では"
 },
 {
  "id": 149,
  "unit": 15,
  "pattern": "〜ぬ/ん",
  "senses": [
   {
    "connect": [
     "动词ない形＋ぬ/ん"
    ],
    "desc": "不……（否定）。",
    "examples": [
     {
      "src": "",
      "ja": "そのことについて、僕はさっぱり分からぬ。",
      "zh": "关于那件事，我完全不知道。",
      "jaHtml": "そのことについて、<ruby>僕は<rt>ぼくは</rt></ruby>さっぱり<ruby>分か<rt>わか</rt></ruby>ら<span class=\"target\">ぬ</span>。"
     },
     {
      "src": "",
      "ja": "彼はわが社にとってなくてはならぬ人だ。",
      "zh": "他是我们公司不可或缺的人。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby>わが<ruby>社<rt>しゃ</rt></ruby>にとってなくてはなら<span class=\"target\">ぬ</span><ruby>人<rt>にん</rt></ruby>だ。"
     }
    ],
    "note": "「ぬ/ん」是文语否定助动词；「ぬ」是书面语，「ん」是口语，意思同「ない」。"
   }
  ],
  "kana": [
   "ぬ",
   "ん"
  ],
  "patternHtml": "〜ぬ/ん"
 },
 {
  "id": 150,
  "unit": 15,
  "pattern": "〜ねばならない/ねばならぬ",
  "senses": [
   {
    "connect": [
     "动词ない形＋ねばならない"
    ],
    "desc": "必须……。（する→せねば）",
    "examples": [
     {
      "src": "",
      "ja": "学生は勉強せねばならない。",
      "zh": "学生必须学习。",
      "jaHtml": "<ruby>学生<rt>がくせい</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>せ<span class=\"target\">ねばならない</span>。"
     }
    ],
    "note": "「〜なければならない」的书面语形式。"
   }
  ],
  "kana": [
   "ねばならない",
   "ねばならぬ"
  ],
  "patternHtml": "〜ねばならない/ねばならぬ"
 },
 {
  "id": 151,
  "unit": 16,
  "pattern": "〜の",
  "senses": [
   {
    "connect": [
     "动词普通形/い形容词普通形＋の",
     "な形容词词干＋な＋の",
     "名词＋な＋の"
    ],
    "desc": "（口语）表示说明、质问等语气。",
    "examples": [
     {
      "src": "",
      "ja": "顔色が悪いけど、どうしたの。",
      "zh": "你脸色不好，怎么了？",
      "jaHtml": "<ruby>顔色<rt>かおいろ</rt></ruby>が<ruby>悪い<rt>わるい</rt></ruby>けど、どうした<span class=\"target\">の</span>。"
     },
     {
      "src": "",
      "ja": "誰に聞いたの。",
      "zh": "你是听谁说的？",
      "jaHtml": "<ruby>誰<rt>だれ</rt></ruby>に<ruby>聞い<rt>きい</rt></ruby>た<span class=\"target\">の</span>。"
     }
    ],
    "note": "口语中「〜の」相当于「〜のです/んだ」，多用于女性或亲密场合。"
   },
   {
    "connect": [],
    "desc": "（口语）表示命令、叮嘱（语气较强）。",
    "examples": [
     {
      "src": "",
      "ja": "さっさと着替えるの。",
      "zh": "快点换衣服！",
      "jaHtml": "さっさと<ruby>着替え<rt>きがえ</rt></ruby>る<span class=\"target\">の</span>。"
     }
    ],
    "note": ""
   }
  ],
  "patternHtml": "〜の"
 },
 {
  "id": 152,
  "unit": 16,
  "pattern": "〜のだ/んだ",
  "senses": [
   {
    "connect": [
     "动词普通形/い形容词普通形＋のだ/んだ",
     "な形容词词干＋な＋のだ/んだ",
     "名词＋な＋のだ/んだ"
    ],
    "desc": "（原因）是……。表示说明、强调。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "A「あした、いっしょに出掛けませんか。」B「あしたは友だちがうちに来る予定なんです。」",
      "zh": "A：明天一起出去吗？B：明天朋友要来我家。",
      "jaHtml": "A「あした、いっしょに<ruby>出掛け<rt>でかけ</rt></ruby>ませんか。」B「あしたは<ruby>友<rt>とも</rt></ruby>だちがうちに<ruby>来る<rt>くる</rt></ruby><ruby>予定<rt>よてい</rt></ruby>な<span class=\"target\">んで</span>す。」"
     }
    ],
    "note": "用于解释说明前项事实发生的原因、理由；用在疑问句中要求对方做出说明。"
   }
  ],
  "kana": [
   "のだ",
   "んだ"
  ],
  "patternHtml": "〜のだ/んだ"
 },
 {
  "id": 153,
  "unit": 16,
  "pattern": "〜のに",
  "senses": [
   {
    "connect": [
     "动词辞书形＋のに",
     "名词＋のに"
    ],
    "desc": "用于……、为了……。表示用途、目的。",
    "examples": [
     {
      "src": "",
      "ja": "パスポートを申請するのに、いろいろな書類や写真を用意する必要がある。",
      "zh": "申请护照需要准备各种材料和照片。",
      "jaHtml": "パスポートを<ruby>申請<rt>しんせい</rt></ruby>する<span class=\"target\">のに</span>、いろいろな<ruby>書類<rt>しょるい</rt></ruby>や<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>用意す<rt>よういす</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。"
     },
     {
      "src": "",
      "ja": "料理を作るのに1時間かかります。",
      "zh": "做菜要花1个小时。",
      "jaHtml": "<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作る<rt>つくる</rt></ruby><span class=\"target\">のに</span>1<ruby>時間<rt>じかん</rt></ruby>かかります。"
     }
    ],
    "note": "后项常用「使う/かかる/必要だ/不可欠だ/役立つ」等。"
   }
  ],
  "kana": [
   "のに"
  ],
  "patternHtml": "〜のに"
 },
 {
  "id": 154,
  "unit": 16,
  "pattern": "〜ば",
  "senses": [
   {
    "connect": [
     "动词ば形＋ば",
     "い形容词词干＋ければ",
     "な形容词词干＋なら"
    ],
    "desc": "如果……就……。表示假定条件。",
    "examples": [
     {
      "src": "",
      "ja": "もっと勉強すれば、試験に合格できる。",
      "zh": "再努力一点的话，就能通过考试。",
      "jaHtml": "もっと<ruby>勉強<rt>べんきょう</rt></ruby>すれ<span class=\"target\">ば</span>、<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>できる。"
     },
     {
      "src": "",
      "ja": "春になれば雪が溶ける。",
      "zh": "一到春天雪就会融化。",
      "jaHtml": "<ruby>春<rt>はる</rt></ruby>になれ<span class=\"target\">ば</span><ruby>雪<rt>ゆき</rt></ruby>が<ruby>溶け<rt>とけ</rt></ruby>る。"
     }
    ],
    "note": "「〜ば」后项一般不用过去时结句；也可表示恒常条件。"
   }
  ],
  "kana": [
   "ば"
  ],
  "patternHtml": "〜ば"
 },
 {
  "id": 155,
  "unit": 16,
  "pattern": "〜ばかり",
  "senses": [
   {
    "connect": [
     "动词て形＋ばかり＋いる",
     "名词＋ばかり",
     "动词辞书形＋ばかり"
    ],
    "desc": "总是……、一味……。表示频繁进行某一行为。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "田中さんはいつも人のやることに文句を言うばかりで自分では何もしない。",
      "zh": "田中总是对别人做的事说长道短，自己却什么都不做。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さんはいつも<ruby>人<rt>にん</rt></ruby>のやることに<ruby>文句<rt>もんく</rt></ruby>を<ruby>言う<rt>いう</rt></ruby><span class=\"target\">ばかり</span>で<ruby>自分<rt>じぶん</rt></ruby>では<ruby>何も<rt>なにも</rt></ruby>しない。"
     },
     {
      "src": "2007年真题",
      "ja": "息子は毎日遊んでばかりで、勉強しない。",
      "zh": "儿子每天光玩，不学习。",
      "jaHtml": "<ruby>息子<rt>むすこ</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>遊んで<rt>あそんで</rt></ruby><span class=\"target\">ばかり</span>で、<ruby>勉強<rt>べんきょう</rt></ruby>しない。"
     }
    ],
    "note": "表示频繁进行某一行为，说话人多持不满态度，一般用于消极场合。"
   }
  ],
  "kana": [
   "ばかり"
  ],
  "patternHtml": "〜ばかり"
 },
 {
  "id": 156,
  "unit": 16,
  "pattern": "〜ばかりだ",
  "senses": [
   {
    "connect": [
     "动词辞书形＋ばかりだ"
    ],
    "desc": "越来越……、不断地……。表示事态朝不好的方向不断发展。",
    "examples": [
     {
      "src": "2001年真题",
      "ja": "物価は上がるばかりで、生活は少しも楽にならない。",
      "zh": "物价不断上涨，生活一点也没轻松。",
      "jaHtml": "<ruby>物価<rt>ぶっか</rt></ruby>は<ruby>上が<rt>あが</rt></ruby>る<span class=\"target\">ばかり</span>で、<ruby>生活<rt>せいかつ</rt></ruby>は<ruby>少し<rt>すこし</rt></ruby>も<ruby>楽<rt>らく</rt></ruby>にならない。"
     }
    ],
    "note": "与「〜一方だ」意思相近，多用于不好的变化。"
   }
  ],
  "kana": [
   "ばかりだ"
  ],
  "patternHtml": "〜ばかりだ"
 },
 {
  "id": 157,
  "unit": 16,
  "pattern": "〜はずだ/はずがない",
  "senses": [
   {
    "connect": [
     "动词普通形/い形容词普通形＋はずだ",
     "な形容词词干＋な＋はずだ",
     "名词＋の＋はずだ"
    ],
    "desc": "理应……、应该……。表示说话人根据常理或趋势进行推断。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "この薬を飲めば病気は治るはずです。",
      "zh": "吃了这个药病应该会好。",
      "jaHtml": "この<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲め<rt>のめ</rt></ruby>ば<ruby>病気<rt>びょうき</rt></ruby>は<ruby>治る<rt>なおる</rt></ruby><span class=\"target\">はず</span>です。"
     },
     {
      "src": "2006年真题",
      "ja": "きのう連絡したので、田中さんも知っているはずです。",
      "zh": "昨天联系过了，所以田中应该也知道。",
      "jaHtml": "きのう<ruby>連絡<rt>れんらく</rt></ruby>したので、<ruby>田中<rt>たなか</rt></ruby>さんも<ruby>知って<rt>しって</rt></ruby>いる<span class=\"target\">はず</span>です。"
     }
    ],
    "note": "「〜はずがない」表示不可能……，推断完全没有出现的可能。"
   },
   {
    "connect": [
     "动词普通形＋はずがない",
     "な形容词词干＋な＋はずがない",
     "名词＋の＋はずがない"
    ],
    "desc": "不可能……、不会……。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "わたしに解けるはずがないじゃない。数学が苦手なの知ってるでしょ。",
      "zh": "我不可能解得出来，你知道我数学很差的。",
      "jaHtml": "わたしに<ruby>解け<rt>とけ</rt></ruby>る<span class=\"target\">はずがない</span>じゃない。<ruby>数学<rt>すうがく</rt></ruby>が<ruby>苦手<rt>にがて</rt></ruby>なの<ruby>知って<rt>しって</rt></ruby>るでしょ。"
     }
    ],
    "note": "表示根据情理或经验，推断完全没有出现某种情况的可能性。"
   }
  ],
  "kana": [
   "はずだ",
   "はずがない"
  ],
  "patternHtml": "〜はずだ/はずがない"
 },
 {
  "id": 158,
  "unit": 16,
  "pattern": "〜ば〜ほど",
  "senses": [
   {
    "connect": [
     "动词ば形＋ば＋同一动词辞书形＋ほど",
     "い形容词词干＋ければ＋同一い形容词＋ほど",
     "な形容词词干＋なら＋な＋ほど"
    ],
    "desc": "越……越……。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "この問題は考えれば考えるほど、頭の中が混乱してきた。",
      "zh": "这个问题越想头脑越混乱。",
      "jaHtml": "この<ruby>問題<rt>もんだい</rt></ruby>は<ruby>考え<rt>かんがえ</rt></ruby>れば<ruby>考え<rt>かんがえ</rt></ruby>る<span class=\"target\">ほど</span>、<ruby>頭<rt>あたま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<ruby>混乱<rt>こんらん</rt></ruby>してきた。"
     }
    ],
    "note": "表示随着前项程度增加，后项程度也增加。"
   }
  ],
  "kana": [
   "ば",
   "ほど"
  ],
  "patternHtml": "〜ば〜ほど"
 },
 {
  "id": 159,
  "unit": 16,
  "pattern": "〜ぶり",
  "senses": [
   {
    "connect": [
     "名词＋ぶり(に)",
     "名词＋ぶりの"
    ],
    "desc": "经过……之后又……。表示隔了一段时间后重新做某事。",
    "examples": [
     {
      "src": "2001年真题",
      "ja": "台風で電車が不通になっていたが、10時間ぶりに運転を始めたそうだ。",
      "zh": "听说因台风电车停运，但10个小时后又恢复运营了。",
      "jaHtml": "<ruby>台風<rt>たいふう</rt></ruby>で<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>不通<rt>ふつう</rt></ruby>になっていたが、10<ruby>時間<rt>じかん</rt></ruby><span class=\"target\">ぶり</span>に<ruby>運転<rt>うんてん</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>たそうだ。"
     },
     {
      "src": "",
      "ja": "5年ぶりの帰国だから、家族がとても喜んだ。",
      "zh": "时隔5年回国，家人都很高兴。",
      "jaHtml": "5<ruby>年<rt>ねん</rt></ruby><span class=\"target\">ぶり</span>の<ruby>帰国<rt>きこく</rt></ruby>だから、<ruby>家族<rt>かぞく</rt></ruby>がとても<ruby>喜んだ<rt>よろこんだ</rt></ruby>。"
     }
    ],
    "note": "接在表示时间名词后；「〜ぶりの」后续名词作定语，多用于书面。"
   },
   {
    "connect": [
     "动词ます形＋ぶり",
     "名词＋ぶり"
    ],
    "desc": "……的样子、……的状态。",
    "examples": [
     {
      "src": "",
      "ja": "彼の話しぶりが気に入らない。",
      "zh": "不喜欢他说话的样子。",
      "jaHtml": "<ruby>彼の<rt>かの</rt></ruby><ruby>話し<rt>はなし</rt></ruby><span class=\"target\">ぶり</span>が<ruby>気に入ら<rt>きにいら</rt></ruby>ない。"
     }
    ],
    "note": "常用「話しぶり（说话的样子）/慌てぶり（慌张的样子）/生活ぶり（生活状态）」等。"
   }
  ],
  "kana": [
   "ぶり"
  ],
  "patternHtml": "〜ぶり"
 },
 {
  "id": 160,
  "unit": 16,
  "pattern": "〜べき/べきだ/べきではない",
  "senses": [
   {
    "connect": [
     "动词辞书形＋べき/べきだ/べきではない"
    ],
    "desc": "应该……、不应该……。（する→するべき/すべき）",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "約束は守るべきです。そうしないと、信用を失いますよ。",
      "zh": "约定应该遵守，否则会失去信用。",
      "jaHtml": "<ruby>約束<rt>やくそく</rt></ruby>は<ruby>守る<rt>まもる</rt></ruby><span class=\"target\">べきで</span>す。そうしないと、<ruby>信用<rt>しんよう</rt></ruby>を<ruby>失い<rt>うしない</rt></ruby>ますよ。"
     },
     {
      "src": "2004年真题",
      "ja": "研究生院は自分で研究を進めるところだから、先生に頼ろうとするべきではない。",
      "zh": "研究生院是自己进行研究的地方，所以不应该总想着依赖老师。",
      "jaHtml": "<ruby>研究生<rt>けんきゅうせい</rt></ruby><ruby>院<rt>いん</rt></ruby>は<ruby>自分<rt>じぶん</rt></ruby>で<ruby>研究<rt>けんきゅう</rt></ruby>を<ruby>進め<rt>すすめ</rt></ruby>るところだから、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>頼ろ<rt>たよろ</rt></ruby>うとする<span class=\"target\">べきではない</span>。"
     }
    ],
    "note": "「〜べきだ」表示义务、应该；「〜べきではない」表示不应该。"
   }
  ],
  "kana": [
   "べき",
   "べきだ",
   "べきではない"
  ],
  "patternHtml": "〜べき/べきだ/べきではない"
 },
 {
  "id": 161,
  "unit": 17,
  "pattern": "〜ほど",
  "senses": [
   {
    "connect": [
     "名词＋ほどてない"
    ],
    "desc": "“没有……那么……和不如…。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "きょうはきのうほど風が強くない。",
      "zh": "今天的及淫有星天天。"
     },
     {
      "src": "2006年真题",
      "ja": "わたしの部屋は姉の部屋ほど広くない。",
      "zh": "表的穫周肖有電電的大。A弟仁兄甘些背仁祠<雁V\\。/弟弟没有哥哥个子高。"
     }
    ],
    "note": "后续和否定,表示比较的基准。"
   },
   {
    "connect": [
     "芝同普通形/い形容词普通形＋ほどな形容词局干†なほど名词ほど"
    ],
    "desc": "“几乎……”“简直……”。表示动作或状态的程度。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "5歳の娘は音楽の才能があるようだ。ピアノを習い始めて1年も経たないうちに、コンクールで優勝を争うほどになった。",
      "zh": "5光的友"
     },
     {
      "src": "2008年真题",
      "ja": "この料理はとても辛くて、体じゅうから沖が出るほどだ。",
      "zh": "遂道業辣得让"
     }
    ],
    "note": "「ごほど」用在句中,「ごほどだ」用在殺人希句,「ごほどの」語接名词作定前使用。相当于「こぐらい」.但星「こほど」是事面所,耐「てぐらい」是口语。"
   },
   {
    "connect": [
     "芝同普通形/い形容词普通形/な形容词词干＋な＋ほどではない/ほどの十名＋ではない"
    ],
    "desc": "“没有达到……地步*。",
    "examples": [
     {
      "src": "",
      "ja": "病状居著名众必要众匡此习三契U\\。/病情还没有发展到非要动手术的程度。ム人心配するほどの舎我ではない。/遂偽不宣彼宣,不用哉。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "わざわぎ行くほどのことではない。/用不着特意去。",
      "zh": ""
     }
    ],
    "note": "送時候不能用「こぐらい」匠換使用。"
   },
   {
    "connect": [
     "名词＋ほどてはない"
    ],
    "desc": "“没有比……更……\"。",
    "examples": [
     {
      "src": "",
      "ja": "これほど悲しいことはない。/浅有贅送件事情更偽心釣了。我が家ほどいい所伍丰LN。/自己家是最好的。ム彼女ほど頭のいい人はいない。/淫有地更双明釣人了。",
      "zh": ""
     }
    ],
    "note": "表示最高程度。相当于「てくらいてはない」。"
   }
  ]
 },
 {
  "id": 162,
  "unit": 17,
  "pattern": "〜まで",
  "senses": [
   {
    "connect": [
     "”动词辞书形/名词＋二习"
    ],
    "desc": "“到:……为止?。表示动作、状态.作用所持续的范围的界限。",
    "examples": [
     {
      "src": "",
      "ja": "きのうは昼まで寝ていた。/呼天一走叶到下午。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "きょうは夜9時まで会社にいます。/今暁9上妨正表会一表在公司。A雨が止むまで、ここで待ちましょう。/我合在六人ル等到雨停叱。",
      "zh": ""
     }
    ],
    "note": "[一未习」后面是持续性动词。"
   },
   {
    "connect": [
     "”名词＋玉民"
    ],
    "desc": "表示许可范围。",
    "examples": [
     {
      "src": "",
      "ja": "このホールは5000人まで入れます。/这个大厅可以容纳5000人。入二O工vA一夕一注20人人示下乘杞未才。/这个电梯可以容纳20人。和茶园寺20寺口示下扫金注世日吉世故。/120公斤以内的行李可以免费托运。",
      "zh": ""
     }
    ],
    "note": "[一主下」一般后续可能态动词。"
   },
   {
    "connect": [
     "”名词＋(助词)＋未"
    ],
    "desc": "\"2",
    "examples": [
     {
      "src": "",
      "ja": "若まで僕を蜂5OD办。/连你都怀疑我吗?",
      "zh": ""
     },
     {
      "src": "",
      "ja": "そんなことをすると、子どもにまで笑われますよ。/果條那征事的基,達小琉子都会嘲笑你的。人彼はお金に困って、密みまで働八大。/他为钱所困，甚至干起了偷窃的行当。",
      "zh": ""
     }
    ],
    "note": "”表示举出一个极端的事例。"
   },
   {
    "connect": [
     "名词＋(助同)＋まで"
    ],
    "desc": "“人のて取他…のの。",
    "examples": [
     {
      "src": "",
      "ja": "彼女は日本料理だけでなく、フランス料理まで作れます。/地不公会徴日本業,连法国菜也会做。人この漫画は子どもだけでなく、大人示下藤束扎亡人\\古。/这部漫画不只是小孩子，连大人都在看。ムA衝の結婚について、父のみならず母にまで反対された。/不伯父束。基皇居生素者反对我的婚事。",
      "zh": ""
     }
    ],
    "note": "表示添加。"
   },
   {
    "connect": [
     "名词＋まで"
    ],
    "desc": "“到……”。表示动作、作用的时间或场所的终点。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "「先適の授業、どこまで進んだ?」B[3課の文法の練習疾題を解いたところまでで終わったよ。」",
      "zh": "Al:“上周的课,上到哪里了?3”B:“第3课的文法练习已经上完了。”入大学表严禾草-30芬办办咯示＋。K2001年真题了/坐电车到大学需要花费30分钟，入镇行沽9时办扬3时未正下寺。/银行的营业时间是从早上9点到下午3点。"
     }
    ],
    "note": "常用「こからこまで」的形式。"
   }
  ]
 },
 {
  "id": 163,
  "unit": 17,
  "pattern": "〜までに",
  "senses": [
   {
    "connect": [
     "“名词/动词辞书形＋さ习纪"
    ],
    "desc": "“在……之前”。表示动作结束或开始的最后期限。",
    "examples": [
     {
      "src": "2009年真题J/明天上午9点之前请到这里来。ふとの宿題は10日去下[=出してください。【2007年真题",
      "ja": "“和为L天中彰注9时示下人二二人~来<<万雪V\\s",
      "zh": "请在10号之前交作业。入来通示下(=二四贿普志事务所已册LT达训V\\。/这份申请书请在下周之前交到事务所。"
     }
    ],
    "note": "[一卖芯世一才国」的形式不表示持续,而是表示某事的发生.注意「てまでに」語面是瞬间性动词。"
   }
  ]
 },
 {
  "id": 164,
  "unit": 17,
  "pattern": "〜みたいだ",
  "senses": [
   {
    "connect": [],
    "desc": "“像……一欄\"、“宛加……\"。表示比輸。",
    "examples": [
     {
      "src": "",
      "ja": "まるで夢を見ているみたいだ。/谷偽在修基。ム彼は子どもみだいだ。/他像條徹子似交。彼女は天使みたいな顔をしている。/地有一引天使般釣役。",
      "zh": ""
     },
     {
      "src": "2009年12月真题J/妹妹",
      "ja": "?へ妹は、体操の選手みたいに体侠沫己办WA。",
      "zh": "身体柔韧性很好,像体操运动员一样。"
     },
     {
      "src": "",
      "ja": "後みたいな人が好きだ。/胡圭交他那衝美型的人。チョョリッルートみたいな甘いものが好き到本。/我喜欢巧克力之类的甜食。",
      "zh": ""
     }
    ],
    "note": "「みたいだ」的活用形式与な形容词相同。「こみだいだ」用在句示,「こみたいに」用在句中作状午,「こみたいな」修饰名词。表示比喻时,经常和副词[二为」等搭配使用,此时与[一上慷|用法相同,主要用于口语。"
   },
   {
    "connect": [],
    "desc": "“像.…-那样\"表示列举。",
    "examples": [],
    "note": "用于列举相似的事物,表示其状态.性质,形状等方面相似.用于列举时通常不用[一双たいだ」的形式,面用「こみたいに」或「てこみたいな」的形式。"
   },
   {
    "connect": [],
    "desc": "“好像……”“似乎……”。表示主观推测,带有不确定的语气。",
    "examples": [
     {
      "src": "",
      "ja": "”人世与总已管音从还扎习w\\厂办龙必龙。/好像电车晚点了。ム田中さんは料理が上手起大LA下哥。/四中好像很擅长做饭。人外は雪が降っているみたいだ。/母像外面在下富。",
      "zh": ""
     }
    ],
    "note": "常和副語「どうも/どうやら(剖党得)」等搭配使用。"
   }
  ]
 },
 {
  "id": 165,
  "unit": 17,
  "pattern": "〜向きだ/向きに/向きの",
  "senses": [
   {
    "connect": [],
    "desc": "“适合于……”。表示正适合于某对象。",
    "examples": [
     {
      "src": "",
      "ja": "A二O服法寺Yy了向埋龙。/这件衣服适合野营。和日采信向考伍作记所大伸奉将理注卫共六志夸日芒。/为适合日本人口味所做的中餐,味道很清淡。入二OD7册AT下注女性向吉四仕事下信众V\\。/这不是适合女性的工作。",
      "zh": ""
     }
    ],
    "note": "相当于「こに適している」。「向きだ」用于结铝;[一向志记」作状语;[一向关中|后接名词作定语使用。"
   }
  ]
 },
 {
  "id": 166,
  "unit": 17,
  "pattern": "〜向けだ/向けに/向けの",
  "senses": [
   {
    "connect": [],
    "desc": "“面向……”“以……为对象\"表示针对的对象。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "この映画は大人向堵丰门下、子睛下法息蕊让瑟雪白雁U\\s",
      "zh": "这部电影是面向大"
     },
     {
      "src": "",
      "ja": "あのマンションは外国人向けに設計されている。/那座公富定を面向外国人疫填的。",
      "zh": ""
     }
    ],
    "note": "[~向片万|用于结名[一向片志」作状语;[一向二D1后接名词作定语使用。"
   }
  ]
 },
 {
  "id": 167,
  "unit": 17,
  "pattern": "〜も",
  "senses": [
   {
    "connect": [
     "名词も"
    ],
    "desc": "“竟然……”。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "入为四人及同性旺志10回志点人圭志大",
      "zh": "那个"
     }
    ],
    "note": "表示数量超过预想,带有惊讶,感叹的心情。"
   },
   {
    "connect": [
     "疑回司＋もこない"
    ],
    "desc": "“一点也不……”“丝训不………”。",
    "examples": [
     {
      "src": "",
      "ja": "ー回失敗したくらいで、何もそこまで悪く言わなくてもいいだろう。K2010年7月真题/只是失败一次,不用说得那么糟糕吧。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "私注何岂美人未世包下万。【〖2006年真题]/我什么也没买。和A知位此=一行2天四、给志知扬欢V\\。/谁也不知道他去哪里了。",
      "zh": ""
     }
    ],
    "note": "”表示完全否定。"
   }
  ]
 },
 {
  "id": 168,
  "unit": 17,
  "pattern": "〜もの/もん",
  "senses": [
   {
    "connect": [
     "“动词普通形/形容词普通形＋志O/志刀な形容词司圭二なもの/もん名词なもの/もん",
     "“因为.…..”。用于说明理由,陈述自己的观点。"
    ],
    "desc": "",
    "examples": [
     {
      "src": "",
      "ja": "「どうして食べないの。」・B「だっておいしくないもん。」/A:你为什么不吃呢??B:“因为不好吃嘛。”AA[&5LT送别人区来丰办2天D。B「だって知らなかったのだもの。」/Al:“为什么不参加送别会呢?”B:;“因为我根本就不知道嘛。”AA「カラオケに行かないの?」B「だってまだ仕事があるんだもん。」/A:“休不去唱玉拉OK吗?”B:“我工作还没有做完呢。”",
      "zh": ""
     }
    ],
    "note": "多用王対自己的行久逃行苦解。常和「だって」呼肥使用。是口交的表送方式.多妨女性和儿童使用,带有撒娇.辩解的语气。[一书九」比[一志丰|更加口语化。"
   }
  ]
 },
 {
  "id": 169,
  "unit": 17,
  "pattern": "〜や〜といった",
  "senses": [
   {
    "connect": [],
    "desc": "“……这样的……”。表示举例。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "この人形は、「こんにちは」「さようなら」といった簡単な言葉を話します。",
      "zh": "这个"
     },
     {
      "src": "",
      "ja": "条仁寿齐也天总已上D大和冥众好志刀。/我喜欢寿司、天妇罗这样的日式料理。",
      "zh": ""
     }
    ],
    "note": "前面常和助局「こや」呼記使用。和「こやンーなど/てような」意思相近。"
   }
  ]
 },
 {
  "id": 170,
  "unit": 17,
  "pattern": "〜やすい",
  "senses": [
   {
    "connect": [
     "“动词[未才形」＋守本心"
    ],
    "desc": "“容易……\"。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "“和二四广荐全大<六太四入全靖所世人在六也可以正二。【〖2005年真题]/这个季节,很多人容易生病。-入前落从清唱好村以办己、所塌忆六<<乱六Vs",
      "zh": "雨天路滑,请多加小入耻单先生四髓关注二工所分刀口总村w\\。/田中老师的说明浅显易懂。"
     }
    ],
    "note": "，表示容易发生某个动作,或者某个状态容易实现,常用的有[党完总村V\\(容易记)/钦办やすい(次之美的容易春咽的)/使いやすい(好用)」等注意「こやすい」和い形容光的活用形式一筐。"
   }
  ]
 },
 {
  "id": 171,
  "unit": 18,
  "pattern": "〜やら〜やら",
  "senses": [
   {
    "connect": [
     "“和名词/动词辞书形八\\形容词辞书形＋总己一总户"
    ],
    "desc": "“……噶……蚁”“又是……又是……”。表示列举两个有代表性的事例,暗示还有其他。",
    "examples": [
     {
      "src": "",
      "ja": "母は毎日洗濯やら料理也己习天长估。/母亲每天要洗衣服哟.做饭哟,很辛苦。人部屋を供りるのに、敷金やら礼金やらで、たくさんお人金を使った。/租萌子要付定全啊、礼金啊什么的,花了不少钱。今月はレポートやら試験やらでひどく从L办天。/这个月又是写报告,又是考试，忙得团团转。入冰仁人全人雇妇也己、获5也忆0闫该专大志大。/同学会上,又是喝酒又是唱歌的,一片喧冰。",
      "zh": ""
     }
    ],
    "note": "，所举出的事例多为消极内容,带有[天八玉九|的语气.是口语的表达方式。"
   }
  ]
 },
 {
  "id": 172,
  "unit": 18,
  "pattern": "〜ようがない/ようもない",
  "senses": [
   {
    "connect": [],
    "desc": "“无法……和2”“没有办法………”。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "故障した機械を直してくれと頼まれたが、部品がなくては修理しようがない。",
      "zh": "别"
     },
     {
      "src": "2001年真题",
      "ja": "なぜ彼女を好きになってしまったのかは、説明のしようがない。",
      "zh": "为什么会喜欢上她,我自己也说不清楚。ム彼の電話秋号がわからないので、連絡しようもない。/不如道他的呈番号斑。所必丈法联系。"
     }
    ],
    "note": "[上5」接在动词[未才形」后,表示做某事的方法。[睛5L上5电众人\\]为惯用表达，表示“毫无办法”。"
   }
  ]
 },
 {
  "id": 173,
  "unit": 18,
  "pattern": "〜ようだ",
  "senses": [
   {
    "connect": [],
    "desc": "“像……一样>“宛如.……”。表示比喻。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "彼女の笑顔は太陽のように明るく輝いている。",
      "zh": "地笑得像太男邪多"
     },
     {
      "src": "",
      "ja": "きょうは真夏のような腎さだ。/今天基香像産友的。A室くじに当たったなんてあたかも夢のようだ。/更然中了移杯。筒直像條大一梓。",
      "zh": ""
     }
    ],
    "note": "「ようだ」的活用形式与な形容词相同。「-ようだ」用在句末,「ように」用在句中作状邊,「てような」后面接名词。常和副語「まるで(好像)/あたかも(宛如)」等副周搭配。"
   },
   {
    "connect": [],
    "desc": "“像……那样\"。ーー",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "?へみんなが子どものように元気に歌い始めた。",
      "zh": "大家父徹子般精神他満地喝了起来。A彼のような優秀な"
     }
    ],
    "note": "”表示列举。说明3“好像……”“似乎……”。表示主观推测,带有不确定的语气。"
   },
   {
    "connect": [],
    "desc": "",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "A壬沉泣圆芯通从休六大二大上龙",
      "zh": "上周图书馆好像闭馆。和外注宕八上5下圳要。【〖2007年真题了7外面好像很冷。和"
     }
    ],
    "note": "[~上5大」表示委婉的断定,常和副词「睛与岂/睛与总握(总觉得)]等呼应使用,以加强推测的语气。"
   }
  ]
 },
 {
  "id": 174,
  "unit": 18,
  "pattern": "〜(よ)うとする",
  "senses": [
   {
    "connect": [
     "“动词意志形＋上才国"
    ],
    "desc": "“想要……”“就要………”。",
    "examples": [
     {
      "src": "",
      "ja": "“和出办片上直上二L大上时世、贡散四玲岂本唱志产。/刚要出门的时候,电话响了。ム食事しようとした時、友だちが訪ねてきた。/想打算委嘱奴的時侯。衣友来了。「",
      "zh": ""
     },
     {
      "src": "",
      "ja": "ヘエレベーターに乗ろうとした時、ドアが閉まりました。/起要生兄的時修。1]美Ya",
      "zh": ""
     }
    ],
    "note": "”表示就要做某动作或某种作用就要发生。"
   }
  ]
 },
 {
  "id": 175,
  "unit": 18,
  "pattern": "〜ように",
  "senses": [
   {
    "connect": [
     "“动词辞书形。[众改形」.可能形＋上5记天明1“为了.……”。"
    ],
    "desc": "",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "A上手に話せるように何度も練習未才。",
      "zh": "为了能够说好,练习了好多次。"
     },
     {
      "src": "",
      "ja": "列車に問に合うように早く家を出た。/久了赴上天生信平就出了ロ。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "忘れないようにノートにメモをしておく。/表破了多地。必免起志。ム後ろの席の人にも聞こえるように、大きい声で話しました。/カイ辻病面的人選能听到,我用很大的声音讲。",
      "zh": ""
     }
    ],
    "note": "表示目的。注意[~上3他」的前面用非意志动词(可能动词、[分办厂/关二文石]等)。"
   },
   {
    "connect": [],
    "desc": "“硕望……和“请…。",
    "examples": [
     {
      "src": "",
      "ja": "無事帰れるように祈ります。/凶学能称平放可未。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "この語は他人に話さないように。/遂件事不要告琉別人。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "どうか彼の病乞汞洽百卡51=。/希望他能早日康复。",
      "zh": ""
     }
    ],
    "note": "表示希望、要求。"
   },
   {
    "connect": [],
    "desc": "“请你(转告/转达)……:”。",
    "examples": [
     {
      "src": "",
      "ja": "彼世时<来硬目5车<<大六W。/请你驯他快点来。和A傣0示岂大户、家亿笛菜才为未导轨伟议<达六VW\\。/他回来之后,请转告他给家里打个电话。和加四大亿而吉昌怪本人丰八直51=昔2C<芒训WA。/请你叫他别太担心。",
      "zh": ""
     }
    ],
    "note": "”表示间接引用。后项常与[言3/途之思J等动词呼应使用。"
   }
  ]
 },
 {
  "id": 176,
  "unit": 18,
  "pattern": "〜ようにする",
  "senses": [
   {
    "connect": [
     "“动词辞书形。[砍V\\形」＋上避记才吾"
    ],
    "desc": "“努力做到.……”。",
    "examples": [
     {
      "src": "",
      "ja": "“入帘体管必电四在伪习丰由未5I=L切愉示可。〖2008年真题]/努力做到晚上不吃甜食。和A明朋办己、6时区起考古水与|=志未可。/从明天开始努力做到6点起床。和A霄愉出亡太芭在犯二砍作赤51=L未可。/努力做到不犯同样的错误。",
      "zh": ""
     }
    ],
    "note": "，表示为了达到[~上5已】」前面的目标而努力。"
   }
  ]
 },
 {
  "id": 177,
  "unit": 18,
  "pattern": "〜ようになる/ようになっている",
  "senses": [
   {
    "connect": [
     "动词辞名形・「ない形」・可能形ようになる"
    ],
    "desc": "“变得……”。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "子どもが生まれたことで、食べ物の安全を気にするようになった。",
      "zh": "孩子的出生,让我开始注意食品安全。ム毎日練習したので、泳げるようになりました。【2006年真题】/央カ毎天都在鐵ヲ,所以学会了游泳。"
     },
     {
      "src": "",
      "ja": "車は古くなったので、よく政障するようになりました。/光生田了。所以衝常役生故障。",
      "zh": ""
     }
    ],
    "note": "”表示能力或状态变化的结果,动作主语可以是第一人称,也可以是其他人称.另外,动词ない形＋なくなる」也可以表示\"変得不……”。"
   },
   {
    "connect": [
     "动词辞书形士ようになっている"
    ],
    "desc": "”表示正在发生某种变化。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "(ABCこども新聞の宮伝)'「私たちが作ったABC子ども新聞は、すべての漢字に振り仮名をつけてあるので、小学1年生からでも読めあるようになっています。」",
      "zh": "表"
     }
    ],
    "note": "”表示某种状态的变化正在进行,并且可能还将持续下去。"
   }
  ]
 },
 {
  "id": 178,
  "unit": 18,
  "pattern": "らしい",
  "senses": [
   {
    "connect": [],
    "desc": "“好像…….”。表示根据各种客观情况.传闻做出可能性很高的推测、判断。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "2人は来年結婚するらしいです。",
      "zh": "他"
     },
     {
      "src": "",
      "ja": "新L<出大携带管忒位上式电便利乌LU\\。/新上市的手机好像用起来很方便。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "晋田さんは中国語が让手包LUA。/吉田中文好像很好。",
      "zh": ""
     }
    ],
    "note": "，常和副词[上5志/睛5总己」搭配使用。"
   }
  ]
 },
 {
  "id": 179,
  "unit": 18,
  "pattern": "らしい（接尾語）",
  "senses": [
   {
    "connect": [],
    "desc": "“像……似的\"、*地道的……\"。、例句へ学生らしくもっと勉強しなさい。【2005年真题】/要昌共学ヲ。僚條学生的料子。人目朱語らしい日本語を身につけたい。/長起学揚地道的日短。今日は暖かくて、春らしい天気です。/今天処暖和,像赴春天了。",
    "examples": [],
    "note": "「らしい」属于w形容词活用,一般接在名词后面,表示主体充分具备了[一己Lv前面的名词应该具有的特点.性质.风格等。[一己L<1的后面接动词或形容词，[一己岂い」的后面接名词。"
   }
  ]
 },
 {
  "id": 180,
  "unit": 18,
  "pattern": "〜(ら)れる（被动态）",
  "senses": [
   {
    "connect": [
     "“一类动词[参己形」＋扎国二类、三类动週「枯中形」＋られる||本和形，|被M形。|書く書かれる一类动词|”、_詩り言われる食べる食べられる二类动词="
    ],
    "desc": "主语是人的直接被动身。被.……”“受到.……”。おたしせんせい",
    "examples": [
     {
      "src": "2006年真駄",
      "ja": "きょう私は先生にほめられました。",
      "zh": "今天表被老郭表折了。たなかかいぎおくしゃちょうちゅうい"
     }
    ],
    "note": "这是典型的被动句句型.动作的承受者用[伍|表示;动作的发动者用[tj」或[办扬|表示。[~(户)扎国」是二类动词活用型的助动词。"
   },
   {
    "connect": [],
    "desc": "，带宾语的间接被动句。だれみ三来",
    "examples": [
     {
      "src": "2009年真頭",
      "ja": "このメールを誰かに見られると困る。",
      "zh": "送封信吉末徹準外到的知。就"
     }
    ],
    "note": "”被动者作主语,用[性」提示,主语有时在句中省略(如第一个例句中省略了[私住|);受损害的事物充当宾语,用[志」提示。注意间接被动句是指主体间接承受了他人行为的影响,给主体带来了损害。"
   },
   {
    "connect": [],
    "desc": "”自动词构成的间接被动句。ちちにゅういんおたしhb:コ",
    "examples": [
     {
      "src": "",
      "ja": "父に入院されて、私人注困一民必未放。K1993年真古]/父亲住院了,我很伤脑筋。ヘタベー晩中赤ちゃんに泣かれて、眠れなかった。/星暁宝宝史了ー夜没貴着。",
      "zh": ""
     }
    ],
    "note": "“被动者作为主语,用[仁|表示.动作的发出者,用[tc」表示。这类被动句的特点是谓语动词是自动词,其动作间接地给第三者(主语)带来不良的影响或损害。"
   },
   {
    "connect": [],
    "desc": "”主语是事或物的直接被动句。",
    "examples": [
     {
      "src": "",
      "ja": "最这注目末四涛曾太八国厂在国蕊记示机开放示吉。〖2007年真题了/最近很多国家的人都在看日本的漫画。A二四空港坟有名众建策家世上二\"习裔时吉机大。/这个机场是由著名建筑师设计的。人花火大会は今週の日曜日に行われる予定だ。/畑花大会将子本周昌挙行。",
      "zh": ""
     }
    ],
    "note": "主要用于描写客观事实或新闻报道如果谓语是表示事物的发明、创造.创作或发现等动词,如[作厂/线朋放吾/设计方太/书<1等,这时动作的主语一般不用ft<」,而用[~によって」来表示。"
   }
  ]
 },
 {
  "id": 181,
  "unit": 19,
  "pattern": "〜(ら)れる（可能形）",
  "senses": [
   {
    "connect": [
     "“一类动词”把词尾改为[么段|假名＋思二类动词「ない形」＋られる三美部過するつできる来るつ来られる||矢吉形可能形書く書ける一类动词飲む飲める食べる食べられる二类动词_見る見られるする三类动词"
    ],
    "desc": "“能部“会2“可以ooつままえしあいゆうしょう",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "妻「この前の試合、あなたがけがしなかったら、優勝できたかもねえ。.」夫「ゥうーん。けがをしなかったら、4位くらいにはなれただろうけど、それでもやっぱり優勝はできなかったと思うよ。",
      "zh": "電子:“上次的比寒,東休小有記偽,選導可以閑礎。\"丈夫:“嗯。要是没有受伤的话,也许能够拿到第4名,但是取冠军还是不大可能的。”已もょかんじ这かたしら"
     },
     {
      "src": "",
      "ja": "この辞書で漢字の読み方が調べられます。2008年真题』/芝本宇下可以査況宇的送埋。しょかんしずべべんきょうム図書館は静かなので、勉強に集中できます。/央カ因事穫入朗藤,所以可以集中注意力来学习。",
      "zh": ""
     }
    ],
    "note": "“表示具有某种能力或可能性。注意可能动词前面的助词一般用r7)。"
   }
  ]
 },
 {
  "id": 182,
  "unit": 19,
  "pattern": "〜(ら)れる（自发态）",
  "senses": [
   {
    "connect": [
     "“一类动词[欢w\\形」＋所如二美、三美动词「ない形」＋られる移われる心配する心配される"
    ],
    "desc": "“不由得……”。表示心理自然而然地产生某种活动或变化。",
    "examples": [
     {
      "src": "",
      "ja": "二四笃芮志册允关仆、子二电力站上人是人由六机面。/每当看到这种照片,就不由得想起小时候的事情。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "なんだか不思議に思われる。/癌得有吉不可加到。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "娘の将来のことが案じられます。/克ル釣音途全人却交。",
      "zh": ""
     }
    ],
    "note": "”能构成自发态的动词大多是和情感有关的动词,如[感坊刀(感到)/繁已如(担心)/古日可(想起),等,并且动词前面的助词一般用r办;表示。"
   }
  ]
 },
 {
  "id": 183,
  "unit": 19,
  "pattern": "〜わけがない/わけはない",
  "senses": [
   {
    "connect": [],
    "desc": "“不可能……”“不会……”。ーー",
    "examples": [
     {
      "src": "2007年真题J/喜欢喝酒",
      "ja": "このマンガは若い人の間ですごく流行っているので、高校生が知らないわけがなLU二。【〖2009年12月真题了/这本漫画在年轻人中非常流行,所以高中生不可能不知道。人お酒の好きな田中さんが来るんだから、これだけで足りるわけがない。",
      "zh": "田中要来,所以光这些酒不可能够。Az刀雁幅Lv前是信子睛由记习吉硬要地本丰UL。/这么难的问题,小孩子是不可能做出来的。"
     }
    ],
    "note": "，表示说话人主观上的一种强烈的否定.即说话人根据前项的很充分、很确定的理由,理所当然地得出后项的结论。"
   }
  ]
 },
 {
  "id": 184,
  "unit": 19,
  "pattern": "わけだ",
  "senses": [
   {
    "connect": [
     "“动词普通形/形容词普通形＋把全大な形容词局圭二な＋わけだ]名词な/である＋わけだ"
    ],
    "desc": "“当然……”,“难怪…….”。",
    "examples": [
     {
      "src": "",
      "ja": "入著必要地龙。38度由为古。/难怪那么热,气温高达38度。入盘作物大为上伪习志UL未5。太百要他龙。/一有东西就吃,难怪这么胖。彼女は日本に10年もいたから、日本語が上手なわけです。/地在昌本住了10年了。难怪上日语这么好。",
      "zh": ""
     }
    ],
    "note": "”表示根据某既定事实,做出理所当然的结论.常和[天办己/OD1搭配使用。"
   },
   {
    "connect": [],
    "desc": "“也就是说……”“换句话说……”。表示换而言之。",
    "examples": [
     {
      "src": "",
      "ja": "入王示中、电与萎一导包大人钥必大要地下可机。/也就是说你已经吃过午饭了。AA社長がアメリカへ出張に行ったそうです。」B「ということは、あしたの会議に出られないわけですね。」/Al;“听说社长去美国出差了。”B:“也就是说,他不能出席明天的会议。ムへ彼女の父親は私の母の弟だ。つまり彼女と私は従兄弟同士なわけだ。/她的父亲是我妈的弟弟,也就是说她和我是表姐妹关系。",
      "zh": ""
     }
    ],
    "note": "常和「ということは/つまり+^ぐ」等搭配使用。和「てということだ/てということになる」意思相同。"
   }
  ]
 },
 {
  "id": 185,
  "unit": 19,
  "pattern": "〜わけではない/わけでもない",
  "senses": [
   {
    "connect": [],
    "desc": "“并不是……”。表示虽然并不全盘和否定,但是有一部分是那样。",
    "examples": [
     {
      "src": "",
      "ja": "最近の子どもはテレビゲームばかりしているようだが、必ずしも外で遊ばないわ过羽会丰UA【〖2004年真题了/最近的孩子好像一味地在玩游戏,但也不是不在外面玩。和A壬生产2、何世所分办蜀权地严二丰LA。/即使是老师,也并不是什么都懂。人全員が反対しているわけではない。/韻不着所有人全都反対。",
      "zh": ""
     }
    ],
    "note": "「てないわけではない」是用双重否定来表示青定。常用「てというわけではない」表示“并不是………”。"
   }
  ]
 },
 {
  "id": 186,
  "unit": 19,
  "pattern": "〜わけにはいかない",
  "senses": [
   {
    "connect": [
     "动词辞书形＋わけにはいかない"
    ],
    "desc": "“不能……\"、\"不可以……\"。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "人へ重要な会議だから、責任者の私が遅れていくわけにはいかない。",
      "zh": "因为是重要会议,身为负责"
     }
    ],
    "note": "“表示从一般常识.社会共识或过去的经验来看,不能做某事。"
   }
  ]
 },
 {
  "id": 187,
  "unit": 19,
  "pattern": "わりに(は)",
  "senses": [
   {
    "connect": [],
    "desc": "“虽然……但是……”。表示比较的基准。",
    "examples": [
     {
      "src": "2008年真遥",
      "ja": "そのアルバイトは、仕事が大変できついわりに給料が安いよ。",
      "zh": "那份兼职,工作很辛苦,但工资却很低。"
     }
    ],
    "note": "”表示前后项不协调、不成比例,类似于「てにしては」。"
   }
  ]
 },
 {
  "id": 188,
  "unit": 19,
  "pattern": "〜をきっかけに/がきっかけで/をきっかけとして",
  "senses": [
   {
    "connect": [],
    "desc": "“以……为开端?以……为机会\"表示某事物出现的起因或契机。",
    "examples": [
     {
      "src": "",
      "ja": "恵まれない子どもたちの姿を見たのがきっかけで、この支接活動を始めたので才。【〖2008年真题]/自从看到这些穷苦的孩子们的样子,我就开始了这项援助活动。和A痊拱走埋D办直人、芭术一在始由万。/以生病为契机,开始体育锻炼。和A笑帮am旗行走坦办地上L工、彼区上知口含志天。/以上个月的旅行为问机,和她相基子。",
      "zh": ""
     }
    ],
    "note": "[才四冉」是名词,意思为“机遇”“契机\"。"
   }
  ]
 },
 {
  "id": 189,
  "unit": 19,
  "pattern": "〜を込めて",
  "senses": [
   {
    "connect": [],
    "desc": "“充满……”“怀着…'…”。表示某种感情倾注于某件事物之中。",
    "examples": [
     {
      "src": "",
      "ja": "“入从中雍生日民、让去达的蕊七一夕一在逢侯基。[2004年真题了我用心给妈妈织了一件毛衣作生日礼物。和A感府中得持三在达抱世、二四力一下在作曲未孔万。/满怀着感激的心情,制作了这张卡片。和A侠专达的蕊、彼女人-一O蒜输在送口豆LL产。/和将这枚包含爱意的戒指送给了她。",
      "zh": ""
     }
    ],
    "note": "有「C心/願い/愛)を込めて」等常用的表达方式。[~志这边无」后接名词作定语使用。"
   }
  ]
 },
 {
  "id": 190,
  "unit": 19,
  "pattern": "〜を中心に(して)/を中心として/を中心とする",
  "senses": [
   {
    "connect": [],
    "desc": "“以……为中心\"。",
    "examples": [
     {
      "src": "2003年真片",
      "ja": "この作者の作品は、着い女性を中心に読まれている。",
      "zh": "遂"
     },
     {
      "src": "",
      "ja": "この物語は着い男女の恋愛を中心として展開する。/送條設事業以年軽男大赤愛为中心展开的。",
      "zh": ""
     }
    ],
    "note": "1一地中心区(LT)/在中心上上LE用在句中中顿;，[一在中心上才加」后接名词作定语使用。"
   }
  ]
 },
 {
  "id": 191,
  "unit": 19,
  "pattern": "〜を〜として/とする/とした",
  "senses": [
   {
    "connect": [],
    "desc": "“把……当做\"。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "A投可四籍果、山田氏去会富填才召二上志次定志去也万。",
      "zh": "根据投票结果,大家一致决定让山国担任会长。"
     },
     {
      "src": "",
      "ja": "田中さんをリーダーとしてサークルを作った。/必可下久作午成了小名",
      "zh": ""
     },
     {
      "src": "",
      "ja": "石油を原料とする製品はいろいろあります。/以油旋原料的声品有徐多。",
      "zh": ""
     }
    ],
    "note": "「こをことする/とした」語袋名避。"
   }
  ]
 },
 {
  "id": 192,
  "unit": 19,
  "pattern": "〜をはじめ(として)/をはじめとする",
  "senses": [
   {
    "connect": [],
    "desc": "“以……为首\"“以……为代表”。表示前述事项在同类事物中最为重要,最具代表性。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "私たちの町にはこのお寺をはじめ、いろいろな古い建物がある。",
      "zh": "在我们的城镇里,以这座地庙为代表,有很多古老的建筑。A社农去三已的上上L工、社鞭任员伙武"
     },
     {
      "src": "",
      "ja": "普析をはじめとする代表国泵了文风力埋访乔二大。/以首相为首的代表团访问了美国。",
      "zh": ""
     }
    ],
    "note": "「てをはじめ(として)」用在旬中作中頼,[一在尘世芝上才吾上」后接名词作定语使用。"
   }
  ]
 },
 {
  "id": 193,
  "unit": 19,
  "pattern": "〜んじゃない",
  "senses": [
   {
    "connect": [
     "动词普通形/い形容词普通形＋んじゃないな形容词词干/名词(な)＋んじゃない"
    ],
    "desc": "“不是.……吗?”。读升调,表示征求对方同意或反问.惊讶。",
    "examples": [
     {
      "src": "",
      "ja": "あの人、好きなんじゃない?/休赴不半音其那相人?",
      "zh": ""
     },
     {
      "src": "",
      "ja": "傘を持っていくように言ったんじゃない。/表不下千泊休要淀相去編?",
      "zh": ""
     },
     {
      "src": "",
      "ja": "リモコン?目の前にあるんじゃない?/進投器?不着在体明前編?",
      "zh": ""
     }
    ],
    "note": "征「てのではないか」的随意表送方式。"
   },
   {
    "connect": [
     "动词辞书形＋んじゃない"
    ],
    "desc": "“不要……?”、“不许……”.读降调,表示禁止对方的某种行为。",
    "examples": [
     {
      "src": "",
      "ja": "そこを動くんじゃない。/不癌区。",
      "zh": ""
     },
     {
      "src": "",
      "ja": "電車の中で騒ぐんじゃない。/不親在邊時裕財。油断するんじゃない。/不能哉科大意。",
      "zh": ""
     }
    ],
    "note": "「こんじゃない」多久男性使用。女性多使用礼貌体「こんじゃありません」。相当于「とするな/てしてはいけない」。"
   }
  ]
 },
 {
  "id": 194,
  "unit": 19,
  "pattern": "んだって",
  "senses": [
   {
    "connect": [
     "“动词普通形/形容词普通形＋九巷2な形容词词干＋な＋んだって名词な＋んだって"
    ],
    "desc": "“听说.…-…”。表示传闻。",
    "examples": [
     {
      "src": "",
      "ja": "彼はA大学に合格したんだって。/所現他考上了A大学。この店のラーメン、おいしいんだって。/所玉遂家店的枯面入好。彼女、来月結婚するんだって。/提区地下條月和希区。",
      "zh": ""
     }
    ],
    "note": "“与传闻助动词[一乏万」意思相同,但是[一侯芝元上用于较随便的会话。"
   }
  ]
 }
];

const N3_KEIGO = [
 {
  "page": 207,
  "text": "第20単元敬語\n日语敬语可以分为三大类:\nー、尊他午(尊敬語):表示尊敬时使用。动作、作用属于对方或第三者。\nけんじょうご\n二、自谦语(议尽語):表示谦让时使用。动作、作用属于自己或自己人。\nていねいご\n三、礼貌午(丁寧語),表示礼貌、客気的沈法。\n、そんけい三\n一、苯他语(尊敬语)\n一般来说,对长辈或上级使用尊他语。注意一般不用于自己的家人.与其他公司的人谈话而\n涉及自己公司的上级时也不使用尊他语。\n1.苯他语动词\n本いらっしゃる/おいでになる\nみなーー\n来吾見える/お見えになる/お越しになる\n知っている\n下\n有有し上かる/キがる\nご覧ください/ご祭になる\n注意「いらっしゃる/おっしゃる/くださる/なさる」的「ます形」是同尾的「る」変成\n「い」,如「いらっしゃいます」、「おっしゃいます」、「なさいます」等,送是一衝特殊\n的词形变化。\n189"
 },
 {
  "page": 208,
  "text": "例文へ(上申先生の研究室で)\n学生「田中先生はいらっしゃいますか。」\n秘書「今、ほかの学生と話していらっしゃいますから、少々待ってください。」\nK2010年7月真題】/\n(在田中老师的研究室)\n学生:“请问田中老师在吗?”\n秘书:田中老师现在正在和其他学生读话,请稍等\n意見がある方はおっしゃってください。【2004年真题J有意见的人请讲。\nAもう、そのパンフレットをご覧になりましたか。/閉伊小癌子悠放了世?\n2.れる/られる(〈敬所助区週)\n接续“一类动词:把词尾疙段假名改为了段假名十扎思\n二类动词:把词尾为去掉十握扎国\n三类动词,才厂-六机国\n来るつつ来られる\n说明“表示说话人对动作主体的尊敬。\n例文へ社長はあしたアメリカへ行かれます。/社共明天衣去美国。'\nムへ甲村先生は毎朝6時に起きられます。/村老施侍天平上6上起末。\nAA視のお客さんはもう来られましたか。/A公司的窒素了編?\n注意[一扎百/户扎为」是二类动词活用型的助动词。\n3.お/ごーになる\n接千お十効同「ます形」十になる\n芝十雪变动词词干十忆兢古\n说明“对对方或第三者的尊敬。\n例文“入壬年住所性自中世人雁口未岂关。【〖2007年真题了/老师已经回去了。\n入二必配他丰天下L上55。/让您担心了吧。\n人どうぞそちらにおかけになってください。/朝季。\n注意尊敬程度高王敬搬助効同「これる/られる」。\n4.お/ごーください-\n接お十剖司「ます形」二ください\n一十萎变动词词干+《大吉必\n说明“请求对方(上级长辈)做某事。“请……”、“请您……”。\n190"
 },
 {
  "page": 209,
  "text": "例文へA山田さんは、いらっしゃいますか。」\nB「はい。ちょっとお待ちください。」【2009年真題】/\nAl:e山困先生在吗?”\nB:“在,请稍候。\nム今から映画が始まりますから、どうぞ最後までお楽しみください。【2000年真量】/\n-电影现在就要开始放映了,歼请观赏。\nA工AN一夕一在二利用<大六WA。/请乘电梯。\n注意比「ててください」的尊敬程度更高一些,语气更郑重-些。\nS.お/ごーなさる\n接续お十効則「ます形」十なさる\nご十サ変芝同周二十なさる\n说明用法比「お/ごこになる」要除旧。\n例文人今日の新聞をお計みなさいましたか。/今天的振然條間直了喝?\nム人草くご運絡なさったほうがいいと思います。/表息倫逐症平点検系汽地。\n人邊中先生、あしたの結婚式にご出席なさいますか。/可下先生,修遇席明天的交礼\n吗?\n注意[砍立吾」是一类动词,不过其[束才形」是[欢立改上,而不是[欢立少」。\n6.お/ごーーです\n接续“办十动词[未才形|十习才\n一十十变动词词干十习才\n说明表示対対方或第三者的尊敬。\n例文へもうお帰りですか。/修回去赴昌?\nへ先生はどんな開題をご研究习坟办。/老师您在研究什么问题?\n人課長は正月日本へお戻り下坟。/科长新年准备回日本。\n注意，用法比较受限制,常用于一些固定的说法。\nけんじょうご\n二、自谦语(谦让语)\n自谦语是采用谦让的表达方式叙述自己或自己一方的人的行为.动作,以表示敬意.如和别\n人谈到自己的家人或自己公司的上级时,也使用自谦语。\n191"
 },
 {
  "page": 210,
  "text": "1.自谦语动词\n\n例文へ社長は今電話に出ておりますので、しばらくお待ちください。【2000年真題】/社天\n\n现在正在打电话,请稍等。\nへじゃあ、まず月曜日のご都合を僻八卖L上5。/那么,首先请问您星期一是否方便。\n人へ田中と申します。どうぞよろしくお願いします。/表赴相中,靖多多美。「\n人先生にお目にかかることができて、本当にうれしく存じます。/能多到老印真中間\n\n2.お/ごーする「\n\n接綾お十効周「ます形」二する\n\n192"
 },
 {
  "page": 211,
  "text": "二十萎变动词词干十才刀\n说明”通过自谦的方式表示对对方的尊敬。\n例文へ天山「小川さん、この本を山田先生に濾してくださいませんか。」\n小川「わかりました。あとでお渡しします。」【2004年真天】/\n大山:“小川,麻烦您把这本书交给山困老师.\n小川“知道了,过会儿我会交给老师的\nムへ荷物はわたしが来週の月曜日にお届けします。/下崩一表会把行才送到。\nへすぐにメールをお送りします。/表上瑞上欠條回信。\n注意，三类动词[来如和[二石上」不能用于这种形式。\n3.お/ごーーいたす\n接和仁お十効同「ます形」十いたす\n二十才变动词词干十大二\n说明”通过自谦的方式表示对对方的尊敬。\n例文”A9月四公社骨的公思9百稳在轩知己世八大忆示寺。【〖2010年12月真题了我来宣布一下9\n月份公司说明会的日程安排。\nへその仕事についてはわたしからご説明いたします。【2007年真大】/那項エ作由表未\n进行说明。\n人これから高島さんという方をご紹介いたします。/接下来表来介多高島先生。\n注意此句型比「お/ごこする」在撫気上更加湊恭。\n4.一ていただけますか\n接续効同「て形」十いただけますか\n说明“请您……”。\n例文学生「先生、日本語で作文を書いたのですが、わたしの作文を見ていただけません\nか。」・\n先生「をええ、いいですよ。」【2010年12月真量】/\n学生:“老师,我用日文写了一篇作文,请您帮我看一下可以吗?3\n老师;“好的。”\n和Az妃、髓0所DeL无八刀瑟寺大、企刀下人巨大片未才办。/这是要送人的礼物,麻\n需您包装一下。\n。人郵便局へ行く道を才えていただけませんか。/人能登泊表去部局息名走旨?「\n注意用手靖求対方活己仙某事。比「てていただけますか」更加礼狐的形式有「こていただ\nけませんか/ていただけないでしょうか」。\n-493."
 },
 {
  "page": 212,
  "text": "S.一(さ)せていただきます\n接续効同「ない形」十(さき)せていただきます\n说明“请允许(我)做……”。\n例文へでは、あした電話をさせていただきます。/那劉表明天符修打忠党。\nへじゃ、お先に帰らせていただきます。/那名.表先告知了。\nへまだ熱がありますから、今日も休ませていただきます。/央放逐在有焼。所以六間\n我今天再休息一天。\n注意”表示讲话人希望得到听话人认可。\n6.扒/二一收大大《/乱5\n接续“愉十动词[未才形」いただく/願う\n一十雪变动词词干すいただく/願う\n说明“承蒙您……”、“承请您……”。\n例文入千年i=推荐状专扫苦志顾改示才。/承请老师给我写推荐信。\nへすみません、これを和社長蕊办渡L顾改大W\\才泵。/对不起,请您把这个交给社长\n行吗?\nム来月の結婚式にご山席願いたをいのですが、ご都合はいかがでしょうか。/起列候参\n加下个月的结婚仪式,您有空吗?\n注意，意思是「-するのをお願いします」,比「こていただく」更加礼貌。\nていねいご\n三、礼瑶语(丁宁语)\n礼煞语是指说话人为了向听者表示敬意时用的礼貌表达方式。\n1.ございます\n说明「ございます」基「あります」的礼貌午。\n例文へ客「すみません。レストランは何階ですか。」\n案内の人「はい、5階にどざいます。」【2010年7月真題】/\n客人:*请问餐厅在几楼3\"\n向导:“在5楼。”\"\n人ヘネクタイ売り場は2階にございます。【2004年真馬】/叙帯を杉在二楼。\nへまだ時間がございますから、どうぞごゆっく0。/还有时间,请慢慢来。\n注意「ございます」遇礼貌社助効滞「ござる」和助効周「ます」格成。造気比「あります」\n恭敬,客気,其否定形式是「てございません」。\n494"
 },
 {
  "page": 213,
  "text": "2.一でございます\n\n接続な形容司同干/名司二でございます\n\n说明「こでございます」基「です」的礼角和。\n\n例文へはい、IMEでございます。/條好,遂還逢IME公司。\nへこの近りは交通がとても不便でございます。/遂一帯的交通実在不信便。\nへこちらは部長の渡辺でございます。/遂位症渡辺半。\n\n注意其否定形式是「てでございません」。\n\n3.お一/ごー(敬造接准週)\n\n接続お十名周/苑同「ます形」\n二十名词/萎变动词词二\n\n说明”表示说话人对于对方的事物的礼狐语气。\n\n例文へご両親はお元気ですか。/修父二素身体好中?\nへ長い間お世話になりました。どうもありがとうございました。/藤期以来承乱\n\n的关照,非常感谢。\n\n入二感想位\\办丰下L上与办。/请问您有什么感想?\n\n注意”一般来说,使用r必J的多是“和语”,即日语中固有的,读法采用训读的词汇*如[要元气\n(健康)】、[克世蘑(照顾)|、[的礼(谢意;礼品)」.而使用[二1的多是“汉语”即日\n语中取自汉语的词汇,或者日本人根据汉语词汇的形式而造的词汇,如T住所(地\n址)|、[二家族(您全家)1、[=感想(感想))等但是有些日常生活中常用的汉语记\n接「お」,如「お電話/お時間/お料理」等。\n\n195"
 }
];
