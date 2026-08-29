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
      "jaHtml": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>講演<rt>こうえん</rt></ruby>の<span class=\"target\"><ruby>間<rt>あいだ</rt></ruby></span>、<ruby>皆<rt>みな</rt></ruby><ruby>熱心<rt>ねっしん</rt></ruby>に<ruby>話<rt>はなし</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>ていた。"
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
      "jaHtml": "どうぞ、<ruby>温かい<rt>あたたかい</rt></ruby><span class=\"target\">うち</span>にお<ruby>上が<rt>あが</rt></ruby>りください。"
     },
     {
      "src": "",
      "ja": "暇なうちに、遊びに来てください。",
      "zh": "趁有空的时候来玩吧。",
      "jaHtml": "<ruby>暇<rt>ひま</rt></ruby>な<span class=\"target\">うち</span>に、<ruby>遊び<rt>あそび</rt></ruby>に<ruby>来て<rt>きて</rt></ruby>ください。"
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
      "jaHtml": "<ruby>弟<rt>おとうと</rt></ruby>と<ruby>妹<rt>いもうと</rt></ruby>がいると<ruby>集中<rt>しゅうちゅう</rt></ruby>できないから、きょうはふたりが<ruby>帰っ<rt>かえっ</rt></ruby>てこない<span class=\"target\">うち</span>に、<ruby>宿題<rt>しゅくだい</rt></ruby>をやってしまおう。"
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
      "jaHtml": "テレビを<ruby>見て<rt>みて</rt></ruby>いる<span class=\"target\">うち</span>に、<ruby>眠っ<rt>ねむっ</rt></ruby>てしまった。"
     },
     {
      "src": "",
      "ja": "彼女の話を聞いているうちに、涙が出てきた。",
      "zh": "听着她的话，不由得流下了眼泪。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>ている<span class=\"target\">うち</span>に、<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出て<rt>でて</rt></ruby>きた。"
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
      "jaHtml": "<ruby>膝<rt>ひざ</rt></ruby>に<ruby>痛み<rt>いたみ</rt></ruby>がある<span class=\"target\">うちは</span>、まだ<ruby>運動<rt>うんどう</rt></ruby>をしないでください。"
     },
     {
      "src": "2001年真题",
      "ja": "若いうちはいろいろなことを経験させたほうがいい。",
      "zh": "趁年轻的时候，最好让孩子多经历一些事情。",
      "jaHtml": "<ruby>若い<rt>わかい</rt></ruby><span class=\"target\">うちは</span>いろいろなことを<ruby>経験<rt>けいけん</rt></ruby>させたほうがいい。"
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
      "jaHtml": "<ruby>皆様<rt>みなさま</rt></ruby>の<span class=\"target\">おかげ</span>で、<ruby>大会<rt>たいかい</rt></ruby>は<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>終わり<rt>おわり</rt></ruby>ました。"
     },
     {
      "src": "",
      "ja": "合格できたのは、応援してくれたみんなのおかげです。",
      "zh": "能够合格，多亏了大家为我加油。",
      "jaHtml": "<ruby>合格<rt>ごうかく</rt></ruby>できたのは、<ruby>応援<rt>おうえん</rt></ruby>してくれたみんなの<span class=\"target\">おかげ</span>です。"
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
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby><span class=\"target\">から<ruby>言<rt>い</rt></ruby></span>うと、その<ruby>提案<rt>ていあん</rt></ruby>には<ruby>賛成<rt>さんせい</rt></ruby>できない。"
     },
     {
      "src": "",
      "ja": "経験から言えば、この方法が一番確実だ。",
      "zh": "从经验来说，这个方法最可靠。",
      "jaHtml": "<ruby>経験<rt>けいけん</rt></ruby><span class=\"target\">から<ruby>言え<rt>いえ</rt></ruby>ば</span>、この<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>一番確実<rt>いちばんかくじつ</rt></ruby>だ。"
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
      "jaHtml": "<ruby>専門家<rt>せんもんか</rt></ruby><span class=\"target\">からすると</span>、<ruby>私<rt>わたし</rt></ruby>の<ruby>技術<rt>ぎじゅつ</rt></ruby>はまだ<ruby>未熟<rt>みじゅく</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "彼女の表情からすると、何かうれしいことがあったらしい。",
      "zh": "从她的表情来看，好像有什么高兴的事。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>表情<rt>ひょうじょう</rt></ruby><span class=\"target\">からすると</span>、<ruby>何か<rt>なにか</rt></ruby>うれしいことがあったらしい。"
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
      "jaHtml": "A「<ruby>私<rt>わたし</rt></ruby>の<ruby>指輪<rt>ゆびわ</rt></ruby>を<ruby>見て<rt>みて</rt></ruby>。<ruby>昨日<rt>きのう</rt></ruby><ruby>買っ<rt>かっ</rt></ruby>たの。かわいいでしょ。」B「いいな<span class=\"target\">あ</span>、わたしもそんな<ruby>指輪<rt>ゆびわ</rt></ruby>がほしいなあ。」"
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
      "jaHtml": "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>徹夜<rt>てつや</rt></ruby>したから、<ruby>眠く<rt>ねむく</rt></ruby><span class=\"target\">てし</span>かたがない。"
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
      "jaHtml": "お<ruby>客様<rt>きゃくさま</rt></ruby><span class=\"target\">に<ruby>対し<rt>たいし</rt></ruby></span>て<ruby>失礼<rt>しつれい</rt></ruby>なことをしてはいけない。"
     },
     {
      "src": "",
      "ja": "彼は誰に対しても親切だ。",
      "zh": "他对谁都很亲切。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>誰<rt>だれ</rt></ruby><span class=\"target\">に<ruby>対し<rt>たいし</rt></ruby></span>ても<ruby>親切<rt>しんせつ</rt></ruby>だ。"
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
     "名词＋ほど＋否定形"
    ],
    "desc": "没有……那么……、不如……。表示比较的基准。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "きょうはきのうほど風が強くない。",
      "zh": "今天的风没有昨天那么强。",
      "jaHtml": "きょうはきのう<span class=\"target\">ほど</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>強く<rt>つよく</rt></ruby>ない。"
     },
     {
      "src": "2006年真题",
      "ja": "わたしの部屋は姉の部屋ほど広くない。",
      "zh": "我的房间没有姐姐的房间宽敞。",
      "jaHtml": "わたしの<ruby>部屋<rt>へや</rt></ruby>は<ruby>姉<rt>あね</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby><span class=\"target\">ほど</span><ruby>広く<rt>ひろく</rt></ruby>ない。"
     },
     {
      "src": "",
      "ja": "弟は兄ほど背が高くない。",
      "zh": "弟弟没有哥哥个子高。",
      "jaHtml": "<ruby>弟<rt>おとうと</rt></ruby>は<ruby>兄<rt>あに</rt></ruby><span class=\"target\">ほど</span><ruby>背が<rt>せが</rt></ruby><ruby>高く<rt>たかく</rt></ruby>ない。"
     }
    ],
    "note": "后续用否定形，表示比较的基准。相当于「〜くらい」。"
   },
   {
    "connect": [
     "动词普通形/い形容词普通形＋ほど",
     "な形容词词干＋な＋ほど",
     "名词＋ほど"
    ],
    "desc": "几乎……、简直……。表示动作或状态的程度。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "5歳の娘は音楽の才能があるようだ。ピアノを習い始めて1年も経たないうちに、コンクールで優勝を争うほどになった。",
      "zh": "5岁的女儿好像有音乐天赋，学钢琴不到一年，就已经到了能在比赛中争夺冠军的程度。",
      "jaHtml": "5<ruby>歳<rt>とし</rt></ruby>の<ruby>娘<rt>むすめ</rt></ruby>は<ruby>音楽<rt>おんがく</rt></ruby>の<ruby>才能<rt>さいのう</rt></ruby>があるようだ。ピアノを<ruby>習い<rt>ならい</rt></ruby><ruby>始め<rt>はじめ</rt></ruby>て1<ruby>年<rt>ねん</rt></ruby>も<ruby>経た<rt>へた</rt></ruby>ないうちに、コンクールで<ruby>優勝<rt>ゆうしょう</rt></ruby>を<ruby>争う<rt>あらそう</rt></ruby><span class=\"target\">ほど</span>になった。"
     },
     {
      "src": "2008年真题",
      "ja": "この料理はとても辛くて、体じゅうから汗が出るほどだ。",
      "zh": "这道菜辣得让人浑身冒汗。",
      "jaHtml": "この<ruby>料理<rt>りょうり</rt></ruby>はとても<ruby>辛く<rt>つらく</rt></ruby>て、<ruby>体<rt>からだ</rt></ruby>じゅうから<ruby>汗<rt>あせ</rt></ruby>が<ruby>出る<rt>でる</rt></ruby><span class=\"target\">ほど</span>だ。"
     },
     {
      "src": "",
      "ja": "仕事が山ほどある。",
      "zh": "工作堆积如山。",
      "jaHtml": "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>山<rt>やま</rt></ruby><span class=\"target\">ほど</span>ある。"
     }
    ],
    "note": "「〜ほど」用在句中，「〜ほどだ」用在句末，「〜ほどの」接名词作定语使用。相当于「〜ぐらい」，但「〜ほど」是书面语，「〜ぐらい」是口语。"
   },
   {
    "connect": [
     "动词普通形/い形容词普通形/な形容词词干＋な＋ほどではない",
     "ほどの＋名词＋ではない"
    ],
    "desc": "没有达到……的地步。",
    "examples": [
     {
      "src": "",
      "ja": "病状は手術を受けるほどではない。",
      "zh": "病情还没有发展到非要动手术的程度。",
      "jaHtml": "<ruby>病状<rt>びょうじょう</rt></ruby>は<ruby>手術<rt>しゅじゅつ</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby><span class=\"target\">ほど</span>ではない。"
     },
     {
      "src": "",
      "ja": "心配するほどのことではない。",
      "zh": "用不着那么担心。",
      "jaHtml": "<ruby>心配<rt>しんぱい</rt></ruby>する<span class=\"target\">ほど</span>のことではない。"
     },
     {
      "src": "",
      "ja": "わざわざ行くほどのことではない。",
      "zh": "用不着特意去。",
      "jaHtml": "わざわざ<ruby>行く<rt>いく</rt></ruby><span class=\"target\">ほど</span>のことではない。"
     }
    ],
    "note": "这时候不能用「〜ぐらい」替换使用。"
   },
   {
    "connect": [
     "名词＋ほど＋否定形"
    ],
    "desc": "没有比……更……。表示最高程度。",
    "examples": [
     {
      "src": "",
      "ja": "これほど悲しいことはない。",
      "zh": "没有比这更让人伤心的事了。",
      "jaHtml": "これ<span class=\"target\">ほど</span><ruby>悲しい<rt>かなしい</rt></ruby>ことはない。"
     },
     {
      "src": "",
      "ja": "我が家ほどいい所はない。",
      "zh": "没有比自己家更好的地方了。",
      "jaHtml": "<ruby>我が家<rt>わがや</rt></ruby><span class=\"target\">ほど</span>いい<ruby>所<rt>ところ</rt></ruby>はない。"
     },
     {
      "src": "",
      "ja": "彼女ほど頭のいい人はいない。",
      "zh": "没有比她更聪明的人了。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby><span class=\"target\">ほど</span><ruby>頭<rt>あたま</rt></ruby>のいい<ruby>人<rt>にん</rt></ruby>はいない。"
     }
    ],
    "note": "表示最高程度。相当于「〜ぐらい…はない」。"
   }
  ],
  "patternHtml": "〜ほど"
 },
 {
  "id": 162,
  "unit": 17,
  "pattern": "〜まで",
  "senses": [
   {
    "connect": [
     "动词辞书形/名词＋まで"
    ],
    "desc": "到……为止。表示动作、状态、作用所持续的界限。",
    "examples": [
     {
      "src": "",
      "ja": "きのうは昼まで寝ていた。",
      "zh": "昨天一直睡到中午。",
      "jaHtml": "きのうは<ruby>昼<rt>ひる</rt></ruby><span class=\"target\">まで</span><ruby>寝て<rt>ねて</rt></ruby>いた。"
     },
     {
      "src": "",
      "ja": "きょうは夜9時まで会社にいます。",
      "zh": "今天在公司要待到晚上9点。",
      "jaHtml": "きょうは<ruby>夜<rt>よる</rt></ruby>9<ruby>時<rt>とき</rt></ruby><span class=\"target\">まで</span><ruby>会社<rt>かいしゃ</rt></ruby>にいます。"
     },
     {
      "src": "",
      "ja": "雨が止むまで、ここで待ちましょう。",
      "zh": "我们在这里等到雨停吧。",
      "jaHtml": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>止む<rt>とむ</rt></ruby><span class=\"target\">まで</span>、ここで<ruby>待ち<rt>まち</rt></ruby>ましょう。"
     }
    ],
    "note": "「〜まで」后面是持续性动词。"
   },
   {
    "connect": [
     "名词＋まで"
    ],
    "desc": "表示许可的范围。",
    "examples": [
     {
      "src": "",
      "ja": "このホールは5000人まで入れます。",
      "zh": "这个大厅最多可以容纳5000人。",
      "jaHtml": "このホールは5000<ruby>人<rt>にん</rt></ruby><span class=\"target\">まで</span><ruby>入れ<rt>いれ</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "このエレベーターは20人まで乗れます。",
      "zh": "这个电梯最多可以乘坐20人。",
      "jaHtml": "このエレベーターは20<ruby>人<rt>にん</rt></ruby><span class=\"target\">まで</span><ruby>乗れ<rt>のれ</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "20キロまでの手荷物は無料で預けられます。",
      "zh": "20公斤以内的行李可以免费托运。",
      "jaHtml": "20キロ<span class=\"target\">まで</span>の<ruby>手荷物<rt>てにもつ</rt></ruby>は<ruby>無料<rt>むりょう</rt></ruby>で<ruby>預け<rt>あずけ</rt></ruby>られます。"
     }
    ],
    "note": "「〜まで」一般后续可能态动词。"
   },
   {
    "connect": [
     "名词＋(助词)＋まで"
    ],
    "desc": "连……也……、甚至……。表示举出一个极端的事例。",
    "examples": [
     {
      "src": "",
      "ja": "君まで僕を疑うのか。",
      "zh": "连你都怀疑我吗？",
      "jaHtml": "<ruby>君<rt>くん</rt></ruby><span class=\"target\">まで</span><ruby>僕<rt>ぼく</rt></ruby>を<ruby>疑う<rt>うたがう</rt></ruby>のか。"
     },
     {
      "src": "",
      "ja": "そんなことをすると、子どもにまで笑われますよ。",
      "zh": "要是做那种事，连小孩子都会嘲笑你的。",
      "jaHtml": "そんなことをすると、<ruby>子ども<rt>こども</rt></ruby>に<span class=\"target\">まで</span><ruby>笑わ<rt>わらわ</rt></ruby>れますよ。"
     },
     {
      "src": "",
      "ja": "彼はお金に困って、盗みまでした。",
      "zh": "他为钱所困，甚至干起了偷窃的行当。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby>お<ruby>金<rt>きん</rt></ruby>に<ruby>困っ<rt>こまっ</rt></ruby>て、<ruby>盗み<rt>ぬすみ</rt></ruby><span class=\"target\">まで</span>した。"
     }
    ],
    "note": "表示举出一个极端的事例。"
   },
   {
    "connect": [
     "名词＋(助词)＋まで"
    ],
    "desc": "不仅……而且连……。表示添加。",
    "examples": [
     {
      "src": "",
      "ja": "彼女は日本料理だけでなく、フランス料理まで作れます。",
      "zh": "她不仅会做日本菜，连法国菜也会做。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>日本料理<rt>にほんりょうり</rt></ruby>だけでなく、フランス<ruby>料理<rt>りょうり</rt></ruby><span class=\"target\">まで</span><ruby>作れ<rt>つくれ</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "この漫画は子どもだけでなく、大人まで読んでいる。",
      "zh": "这部漫画不只是小孩子在看，连大人都在看。",
      "jaHtml": "この<ruby>漫画<rt>まんが</rt></ruby>は<ruby>子ども<rt>こども</rt></ruby>だけでなく、<ruby>大人<rt>おとな</rt></ruby><span class=\"target\">まで</span><ruby>読んで<rt>よんで</rt></ruby>いる。"
     },
     {
      "src": "",
      "ja": "兄の結婚について、父のみならず母にまで反対された。",
      "zh": "关于哥哥的婚事，不仅父亲，连母亲都反对了。",
      "jaHtml": "<ruby>兄<rt>あに</rt></ruby>の<ruby>結婚<rt>けっこん</rt></ruby>について、<ruby>父<rt>ちち</rt></ruby>のみならず<ruby>母<rt>はは</rt></ruby>に<span class=\"target\">まで</span><ruby>反対<rt>はんたい</rt></ruby>された。"
     }
    ],
    "note": "表示添加。"
   },
   {
    "connect": [
     "名词＋まで"
    ],
    "desc": "到……。表示动作、作用的时间或场所的终点。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "A「先週の授業、どこまで進んだ？」B「3課の文法の練習問題を解いたところまでで終わったよ。」",
      "zh": "A：上周的课上到哪里了？B：上到做完第3课文法的练习题就结束了。",
      "jaHtml": "A「<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>、どこ<span class=\"target\">まで</span><ruby>進ん<rt>すすん</rt></ruby>だ？」B「3<ruby>課<rt>か</rt></ruby>の<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>練習問題<rt>れんしゅうもんだい</rt></ruby>を<ruby>解い<rt>とい</rt></ruby>たところまでで<ruby>終わ<rt>おわ</rt></ruby>ったよ。」"
     },
     {
      "src": "2001年真题",
      "ja": "大学まで電車で30分かかる。",
      "zh": "坐电车到大学需要花费30分钟。",
      "jaHtml": "<ruby>大学<rt>だいがく</rt></ruby><span class=\"target\">まで</span><ruby>電車<rt>でんしゃ</rt></ruby>で30<ruby>分か<rt>わか</rt></ruby>かる。"
     },
     {
      "src": "",
      "ja": "銀行は9時から3時までです。",
      "zh": "银行的营业时间是从早上9点到下午3点。",
      "jaHtml": "<ruby>銀行<rt>ぎんこう</rt></ruby>は9<ruby>時<rt>とき</rt></ruby>から3<ruby>時<rt>とき</rt></ruby><span class=\"target\">まで</span>です。"
     }
    ],
    "note": "常用「〜から〜まで」的形式。"
   }
  ],
  "patternHtml": "〜まで"
 },
 {
  "id": 163,
  "unit": 17,
  "pattern": "〜までに",
  "senses": [
   {
    "connect": [
     "名词/动词辞书形＋までに"
    ],
    "desc": "在……之前。表示动作结束或开始的最后期限。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "明日の午前9時までにここに来てください。",
      "zh": "请在明天上午9点之前到这里来。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>の<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>とき</rt></ruby><span class=\"target\">までに</span>ここに<ruby>来て<rt>きて</rt></ruby>ください。"
     },
     {
      "src": "2007年真题",
      "ja": "この宿題は10日までに出してください。",
      "zh": "请在10号之前交作业。",
      "jaHtml": "この<ruby>宿題<rt>しゅくだい</rt></ruby>は10<ruby>日<rt>にち</rt></ruby><span class=\"target\">までに</span><ruby>出し<rt>だし</rt></ruby>てください。"
     },
     {
      "src": "",
      "ja": "この申込書は来週までに事務所に提出してください。",
      "zh": "这份申请书请在下周之前交到事务所。",
      "jaHtml": "この<ruby>申込書<rt>もうしこみしょ</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby><span class=\"target\">までに</span><ruby>事務所<rt>じむしょ</rt></ruby>に<ruby>提出<rt>ていしゅつ</rt></ruby>してください。"
     }
    ],
    "note": "「〜までに」后面是瞬间性动词，表示某事在期限内的某一点发生；若表示持续到某时点则用「〜まで」。"
   }
  ],
  "patternHtml": "〜までに"
 },
 {
  "id": 164,
  "unit": 17,
  "pattern": "〜みたいだ",
  "senses": [
   {
    "connect": [
     "动词/形容词普通形＋みたいだ",
     "な形容词词干/名词＋みたいだ"
    ],
    "desc": "像……一样、宛如……。表示比喻。",
    "examples": [
     {
      "src": "",
      "ja": "まるで夢を見ているみたいだ。",
      "zh": "简直像在做梦一样。",
      "jaHtml": "まるで<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>見て<rt>みて</rt></ruby>いる<span class=\"target\">みたい</span>だ。"
     },
     {
      "src": "",
      "ja": "彼は子どもみたいだ。",
      "zh": "他像个孩子似的。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>子ども<rt>こども</rt></ruby><span class=\"target\">みたい</span>だ。"
     },
     {
      "src": "",
      "ja": "彼女は天使みたいな顔をしている。",
      "zh": "她有一张天使般的脸。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>天使<rt>てんし</rt></ruby><span class=\"target\">みたい</span>な<ruby>顔<rt>かお</rt></ruby>をしている。"
     }
    ],
    "note": "「みたいだ」的活用形式与な形容词相同。「みたいだ」用在句末，「みたいに」用在句中作状语，「みたいな」修饰名词。表示比喻时常和副词「まるで」等搭配使用，此时与「〜ようだ」用法相同，主要用于口语。"
   },
   {
    "connect": [
     "名词＋みたいに/みたいな"
    ],
    "desc": "像……那样。表示列举。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "妹は、体操の選手みたいに体が柔らかい。",
      "zh": "妹妹的身体柔韧性很好，像体操运动员一样。",
      "jaHtml": "<ruby>妹<rt>いもうと</rt></ruby>は、<ruby>体操<rt>たいそう</rt></ruby>の<ruby>選手<rt>せんしゅ</rt></ruby><span class=\"target\">みたいに</span><ruby>体<rt>からだ</rt></ruby>が<ruby>柔らかい<rt>やわらかい</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "君みたいな人が好きだ。",
      "zh": "我喜欢你那样的人。",
      "jaHtml": "<ruby>君<rt>くん</rt></ruby><span class=\"target\">みたい</span>な<ruby>人<rt>にん</rt></ruby>が<ruby>好き<rt>すき</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "チョコレートみたいな甘いものが好きだ。",
      "zh": "我喜欢巧克力之类的甜食。",
      "jaHtml": "チョコレート<span class=\"target\">みたい</span>な<ruby>甘い<rt>あまい</rt></ruby>ものが<ruby>好き<rt>すき</rt></ruby>だ。"
     }
    ],
    "note": "用于列举相似的事物，表示其状态、性质、形状等方面相似。列举时通常不用「みたいだ」的形式，而用「みたいに」或「みたいな」的形式。"
   },
   {
    "connect": [
     "动词/形容词普通形＋みたいだ",
     "な形容词词干/名词＋みたいだ"
    ],
    "desc": "好像……、似乎……。表示主观推测，带有不确定的语气。",
    "examples": [
     {
      "src": "",
      "ja": "電車が遅れているみたいだ。",
      "zh": "好像电车晚点了。",
      "jaHtml": "<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅れ<rt>おくれ</rt></ruby>ている<span class=\"target\">みたい</span>だ。"
     },
     {
      "src": "",
      "ja": "田中さんは料理が上手みたいだ。",
      "zh": "田中好像很擅长做饭。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>料理<rt>りょうり</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby><span class=\"target\">みたい</span>だ。"
     },
     {
      "src": "",
      "ja": "外は雪が降っているみたいだ。",
      "zh": "好像外面在下雪。",
      "jaHtml": "<ruby>外<rt>そと</rt></ruby>は<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降っ<rt>ふっ</rt></ruby>ている<span class=\"target\">みたい</span>だ。"
     }
    ],
    "note": "常和副词「どうも/どうやら（总觉得）」等搭配使用。"
   }
  ],
  "kana": [
   "みたいに",
   "みたいな"
  ],
  "patternHtml": "〜みたいだ"
 },
 {
  "id": 165,
  "unit": 17,
  "pattern": "〜向きだ/向きに/向きの",
  "senses": [
   {
    "connect": [
     "名词＋向きだ/向きに/向きの"
    ],
    "desc": "适合于……。表示正适合于某对象。",
    "examples": [
     {
      "src": "",
      "ja": "この服はアウトドア向きだ。",
      "zh": "这件衣服适合户外活动。",
      "jaHtml": "この<ruby>服<rt>ふく</rt></ruby>はアウトドア<span class=\"target\"><ruby>向き<rt>むき</rt></ruby>だ</span>。"
     },
     {
      "src": "",
      "ja": "日本人向きに作られた中華料理は、味が薄めだ。",
      "zh": "为适合日本人口味而做的中餐，味道比较清淡。",
      "jaHtml": "<ruby>日本人<rt>にほんじん</rt></ruby><span class=\"target\"><ruby>向き<rt>むき</rt></ruby></span>に<ruby>作ら<rt>つくら</rt></ruby>れた<ruby>中華料理<rt>ちゅうかりょうり</rt></ruby>は、<ruby>味<rt>あじ</rt></ruby>が<ruby>薄め<rt>うすめ</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "この仕事は女性向きではない。",
      "zh": "这不是适合女性的工作。",
      "jaHtml": "この<ruby>仕事<rt>しごと</rt></ruby>は<ruby>女性<rt>じょせい</rt></ruby><span class=\"target\"><ruby>向き<rt>むき</rt></ruby></span>ではない。"
     }
    ],
    "note": "相当于「〜に適している」。「向きだ」用于结句；「向きに」作状语；「向きの」后接名词作定语使用。"
   }
  ],
  "patternHtml": "〜<ruby>向き<rt>むき</rt></ruby>だ/<ruby>向き<rt>むき</rt></ruby>に/<ruby>向き<rt>むき</rt></ruby>の"
 },
 {
  "id": 166,
  "unit": 17,
  "pattern": "〜向けだ/向けに/向けの",
  "senses": [
   {
    "connect": [
     "名词＋向けだ/向けに/向けの"
    ],
    "desc": "面向……、以……为对象。表示针对的对象。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "この映画は大人向けだが、子どもも十分楽しめる。",
      "zh": "这部电影是面向大人的，小孩子看了也觉得很有意思。",
      "jaHtml": "この<ruby>映画<rt>えいが</rt></ruby>は<ruby>大人<rt>おとな</rt></ruby><span class=\"target\"><ruby>向け<rt>むけ</rt></ruby></span>だが、<ruby>子ども<rt>こども</rt></ruby>も<ruby>十分<rt>じゅうぶん</rt></ruby><ruby>楽し<rt>たのし</rt></ruby>める。"
     },
     {
      "src": "",
      "ja": "子ども向けの絵本は飛ぶように売れている。",
      "zh": "面向孩子的绘本卖得非常火。",
      "jaHtml": "<ruby>子ども<rt>こども</rt></ruby><span class=\"target\"><ruby>向け<rt>むけ</rt></ruby>の</span><ruby>絵本<rt>えほん</rt></ruby>は<ruby>飛ぶ<rt>とぶ</rt></ruby>ように<ruby>売れ<rt>うれ</rt></ruby>ている。"
     },
     {
      "src": "",
      "ja": "あのマンションは外国人向けに設計されている。",
      "zh": "那座公寓是面向外国人设计的。",
      "jaHtml": "あのマンションは<ruby>外国人<rt>がいこくじん</rt></ruby><span class=\"target\"><ruby>向け<rt>むけ</rt></ruby></span>に<ruby>設計<rt>せっけい</rt></ruby>されている。"
     }
    ],
    "note": "「向けだ」用于结句；「向けに」作状语；「向けの」后接名词作定语使用。"
   }
  ],
  "patternHtml": "〜<ruby>向け<rt>むけ</rt></ruby>だ/<ruby>向け<rt>むけ</rt></ruby>に/<ruby>向け<rt>むけ</rt></ruby>の"
 },
 {
  "id": 167,
  "unit": 17,
  "pattern": "〜も",
  "senses": [
   {
    "connect": [
     "名词/数量词＋も"
    ],
    "desc": "竟然……。表示数量超过预想。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "あの人は同じ歌を10回も歌った。",
      "zh": "那个人同一首歌竟然唱了10遍。",
      "jaHtml": "あの<ruby>人<rt>にん</rt></ruby>は<ruby>同じ<rt>おなじ</rt></ruby><ruby>歌を<rt>うたを</rt></ruby>10<ruby>回<rt>かい</rt></ruby><span class=\"target\">も</span><ruby>歌っ<rt>うたっ</rt></ruby>た。"
     },
     {
      "src": "2006年真题",
      "ja": "彼は同じ小説を5回も読んだ。",
      "zh": "同一本小说他竟然读了5遍。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>同じ<rt>おなじ</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>を5<ruby>回<rt>かい</rt></ruby><span class=\"target\">も</span><ruby>読んだ<rt>よんだ</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "昨日、大人気のドーナツを買うため、2時間も並んだ。",
      "zh": "昨天，为了买人气爆棚的甜甜圈，竟然排了两个小时的队。",
      "jaHtml": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>大人気<rt>だいにんき</rt></ruby>のドーナツを<ruby>買う<rt>かう</rt></ruby>ため、2<ruby>時間<rt>じかん</rt></ruby><span class=\"target\">も</span><ruby>並ん<rt>ならん</rt></ruby>だ。"
     }
    ],
    "note": "表示数量超过预想，带有惊讶、感叹的心情。"
   },
   {
    "connect": [
     "疑问词＋も＋否定形"
    ],
    "desc": "一点也不……、丝毫不……。表示完全否定。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "一回失敗したくらいで、何もそこまで悪く言わなくてもいいだろう。",
      "zh": "只是失败一次，不用说得那么糟糕吧。",
      "jaHtml": "<ruby>一回<rt>いっかい</rt></ruby><ruby>失敗<rt>しっぱい</rt></ruby>したくらいで、<span class=\"target\"><ruby>何も<rt>なにも</rt></ruby></span>そこまで<ruby>悪く<rt>わるく</rt></ruby><ruby>言わ<rt>いわ</rt></ruby>なくてもいいだろう。"
     },
     {
      "src": "2006年真题",
      "ja": "私は何も買いませんでした。",
      "zh": "我什么也没买。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は<span class=\"target\"><ruby>何も<rt>なにも</rt></ruby></span><ruby>買い<rt>かい</rt></ruby>ませんでした。"
     },
     {
      "src": "",
      "ja": "彼がどこへ行ったか誰も知らない。",
      "zh": "谁也不知道他去哪里了。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>がどこへ<ruby>行った<rt>いった</rt></ruby>か<span class=\"target\"><ruby>誰も<rt>だれも</rt></ruby></span><ruby>知ら<rt>しら</rt></ruby>ない。"
     }
    ],
    "note": "表示完全否定。"
   }
  ],
  "patternHtml": "〜も"
 },
 {
  "id": 168,
  "unit": 17,
  "pattern": "〜もの/もん",
  "senses": [
   {
    "connect": [
     "动词普通形/形容词普通形＋もの/もん",
     "な形容词词干＋なもの/もん",
     "名词＋なもの/もん"
    ],
    "desc": "因为……。用于说明理由，陈述自己的观点。",
    "examples": [
     {
      "src": "",
      "ja": "A「どうして食べないの。」B「だっておいしくないもん。」",
      "zh": "A：你为什么不吃呢？B：因为不好吃嘛。",
      "jaHtml": "A「どうして<ruby>食べ<rt>たべ</rt></ruby>ないの。」B「だっておいしくない<span class=\"target\">もん</span>。」"
     },
     {
      "src": "",
      "ja": "A「どうして送別会に来なかったの。」B「だって知らなかったのだもの。」",
      "zh": "A：为什么没来参加送别会呢？B：因为我根本就不知道嘛。",
      "jaHtml": "A「どうして<ruby>送別会<rt>そうべつかい</rt></ruby>に<ruby>来な<rt>こな</rt></ruby>かったの。」B「だって<ruby>知ら<rt>しら</rt></ruby>なかったのだ<span class=\"target\">もの</span>。」"
     },
     {
      "src": "",
      "ja": "A「カラオケに行かないの？」B「だってまだ仕事があるんだもん。」",
      "zh": "A：你不去唱卡拉OK吗？B：我工作还没做完呢。",
      "jaHtml": "A「カラオケに<ruby>行か<rt>いか</rt></ruby>ないの？」B「だってまだ<ruby>仕事<rt>しごと</rt></ruby>があるんだ<span class=\"target\">もん</span>。」"
     }
    ],
    "note": "多用于对自己的行为进行辩解，常和「だって」呼应使用，是口语的表达方式，多为女性和儿童使用，带有撒娇、辩解的语气。「もん」比「もの」更加口语化。"
   }
  ],
  "patternHtml": "〜もの/もん"
 },
 {
  "id": 169,
  "unit": 17,
  "pattern": "〜や〜といった",
  "senses": [
   {
    "connect": [
     "名词＋や＋名词＋といった"
    ],
    "desc": "……这样的……。表示举例。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "この人形は、「こんにちは」「さようなら」といった簡単な言葉を話します。",
      "zh": "这个玩偶会说「你好」「再见」之类简单的话。",
      "jaHtml": "この<ruby>人形<rt>にんぎょう</rt></ruby>は、「こんにちは」「さようなら」<span class=\"target\">といった</span><ruby>簡単<rt>かんたん</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>を<ruby>話し<rt>はなし</rt></ruby>ます。"
     },
     {
      "src": "2001年真题",
      "ja": "この会社はタオルや洗剤といった様々な日用品を扱っている。",
      "zh": "这家公司经营毛巾、洗涤剂等各种各样的日用品。",
      "jaHtml": "この<ruby>会社<rt>かいしゃ</rt></ruby>はタオルや<ruby>洗剤<rt>せんざい</rt></ruby><span class=\"target\">といった</span><ruby>様々な<rt>さまざまな</rt></ruby><ruby>日用品<rt>にちようひん</rt></ruby>を<ruby>扱っ<rt>あつかっ</rt></ruby>ている。"
     },
     {
      "src": "",
      "ja": "寿司や天ぷらといった日本料理が好きだ。",
      "zh": "我喜欢寿司、天妇罗这样的日式料理。",
      "jaHtml": "<ruby>寿司<rt>すし</rt></ruby>や<ruby>天ぷら<rt>てんぷら</rt></ruby><span class=\"target\">といった</span><ruby>日本料理<rt>にほんりょうり</rt></ruby>が<ruby>好き<rt>すき</rt></ruby>だ。"
     }
    ],
    "note": "前面常和助词「や」呼应使用，和「〜や〜など/〜のような」意思相近。"
   }
  ],
  "patternHtml": "〜や〜といった"
 },
 {
  "id": 170,
  "unit": 17,
  "pattern": "〜やすい",
  "senses": [
   {
    "connect": [
     "动词ます形＋やすい"
    ],
    "desc": "容易……。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "この季節は多くの人が病気になりやすい。",
      "zh": "这个季节，很多人容易生病。",
      "jaHtml": "この<ruby>季節<rt>きせつ</rt></ruby>は<ruby>多く<rt>おおく</rt></ruby>の<ruby>人<rt>にん</rt></ruby>が<ruby>病気<rt>びょうき</rt></ruby>になり<span class=\"target\">やすい</span>。"
     },
     {
      "src": "2000年真题",
      "ja": "雨の日は道が滑りやすいので、気をつけてください。",
      "zh": "雨天路滑，请多加小心。",
      "jaHtml": "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>にち</rt></ruby>は<ruby>道<rt>みち</rt></ruby>が<ruby>滑り<rt>すべり</rt></ruby><span class=\"target\">やすい</span>ので、<ruby>気を<rt>きを</rt></ruby>つけてください。"
     },
     {
      "src": "",
      "ja": "田中先生の説明はわかりやすい。",
      "zh": "田中老师的说明浅显易懂。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>はわかり<span class=\"target\">やすい</span>。"
     }
    ],
    "note": "表示容易发生某个动作，或者某个状态容易实现。常用的有「覚えやすい（容易记）／飲みやすい（容易下咽）／使いやすい（好用）」等。注意「〜やすい」和い形容词的活用形式一样。"
   }
  ],
  "patternHtml": "〜やすい"
 },
 {
  "id": 171,
  "unit": 18,
  "pattern": "〜やら〜やら",
  "senses": [
   {
    "connect": [
     "名词/动词辞书形/い形容词辞书形＋やら＋名词/动词辞书形/い形容词辞书形＋やら"
    ],
    "desc": "……啦……啦、又是……又是……。表示列举两个有代表性的事例，暗示还有其他。",
    "examples": [
     {
      "src": "",
      "ja": "母は毎日洗濯やら料理やらで忙しい。",
      "zh": "母亲每天洗衣服啦做饭啦，忙个不停。",
      "jaHtml": "<ruby>母<rt>はは</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>洗濯<rt>せんたく</rt></ruby><span class=\"target\">やら</span><ruby>料理<rt>りょうり</rt></ruby>やらで<ruby>忙しい<rt>いそがしい</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "部屋を借りるのに、敷金やら礼金やらで、たくさんお金を使った。",
      "zh": "租房子要付押金啦、礼金啦什么的，花了不少钱。",
      "jaHtml": "<ruby>部屋<rt>へや</rt></ruby>を<ruby>借り<rt>かり</rt></ruby>るのに、<ruby>敷金<rt>しききん</rt></ruby><span class=\"target\">やら</span><ruby>礼金<rt>れいきん</rt></ruby>やらで、たくさんお<ruby>金<rt>きん</rt></ruby>を<ruby>使った<rt>つかった</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "今月はレポートやら試験やらでひどく忙しい。",
      "zh": "这个月又是写报告又是考试，忙得团团转。",
      "jaHtml": "<ruby>今月<rt>こんげつ</rt></ruby>はレポート<span class=\"target\">やら</span><ruby>試験<rt>しけん</rt></ruby>やらでひどく<ruby>忙しい<rt>いそがしい</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "同窓会では飲むやら歌うやらで、大騒ぎだった。",
      "zh": "同学会上又是喝酒又是唱歌，一片喧腾。",
      "jaHtml": "<ruby>同窓会<rt>どうそうかい</rt></ruby>では<ruby>飲む<rt>のむ</rt></ruby><span class=\"target\">やら</span><ruby>歌う<rt>うたう</rt></ruby>やらで、<ruby>大騒ぎ<rt>おおさわぎ</rt></ruby>だった。"
     }
    ],
    "note": "所举出的事例多为消极内容，带有「〜など」的语气，是口语的表达方式。"
   }
  ],
  "patternHtml": "〜やら〜やら"
 },
 {
  "id": 172,
  "unit": 18,
  "pattern": "〜ようがない/ようもない",
  "senses": [
   {
    "connect": [
     "动词ます形＋ようがない/ようもない"
    ],
    "desc": "无法……、没有办法……。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "故障した機械を直してくれと頼まれたが、部品がなくては修理しようがない。",
      "zh": "别人请我修机器，但没有零部件的话就没法修。",
      "jaHtml": "<ruby>故障<rt>こしょう</rt></ruby>した<ruby>機械<rt>きかい</rt></ruby>を<ruby>直し<rt>なおし</rt></ruby>てくれと<ruby>頼ま<rt>たのま</rt></ruby>れたが、<ruby>部品<rt>ぶひん</rt></ruby>がなくては<ruby>修理<rt>しゅうり</rt></ruby>し<span class=\"target\">よう</span>がない。"
     },
     {
      "src": "2001年真题",
      "ja": "なぜ彼女を好きになってしまったのかは、説明のしようがない。",
      "zh": "为什么会喜欢上她，我自己也说不清楚。",
      "jaHtml": "なぜ<ruby>彼女<rt>かのじょ</rt></ruby>を<ruby>好き<rt>すき</rt></ruby>になってしまったのかは、<ruby>説明<rt>せつめい</rt></ruby>のし<span class=\"target\">よう</span>がない。"
     },
     {
      "src": "",
      "ja": "彼の電話番号がわからないので、連絡しようもない。",
      "zh": "因为不知道他的电话号码，所以无法联系。",
      "jaHtml": "<ruby>彼の<rt>かの</rt></ruby><ruby>電話番号<rt>でんわばんごう</rt></ruby>がわからないので、<ruby>連絡<rt>れんらく</rt></ruby>し<span class=\"target\">ようもない</span>。"
     }
    ],
    "note": "「よう」接在动词ます形后，表示做某事的方法。「どうしようもない」为惯用表达，表示毫无办法。"
   }
  ],
  "patternHtml": "〜ようがない/ようもない"
 },
 {
  "id": 173,
  "unit": 18,
  "pattern": "〜ようだ",
  "senses": [
   {
    "connect": [
     "动词/形容词普通形＋ようだ",
     "な形容词词干＋な＋ようだ",
     "名词＋の＋ようだ"
    ],
    "desc": "像……一样、宛如……。表示比喻。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "彼女の笑顔は太陽のように明るく輝いている。",
      "zh": "她的笑容像太阳一样明亮闪耀。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>笑顔<rt>えがお</rt></ruby>は<ruby>太陽<rt>たいよう</rt></ruby>の<span class=\"target\">よう</span>に<ruby>明るく<rt>あかるく</rt></ruby><ruby>輝い<rt>かがやい</rt></ruby>ている。"
     },
     {
      "src": "",
      "ja": "きょうは真夏のような暑さだ。",
      "zh": "今天热得像盛夏一样。",
      "jaHtml": "きょうは<ruby>真夏<rt>まなつ</rt></ruby>の<span class=\"target\">よう</span>な<ruby>暑さ<rt>あつさ</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "くじに当たったなんて、あたかも夢のようだ。",
      "zh": "居然中了奖，简直像做梦一样。",
      "jaHtml": "くじに<ruby>当た<rt>あた</rt></ruby>ったなんて、あたかも<ruby>夢<rt>ゆめ</rt></ruby>の<span class=\"target\">ようだ</span>。"
     }
    ],
    "note": "「ようだ」的活用形式与な形容词相同。「ようだ」用在句末，「ように」用在句中作状语，「ような」后面接名词。常和副词「まるで（好像）／あたかも（宛如）」等搭配。"
   },
   {
    "connect": [
     "名词＋のように/のような"
    ],
    "desc": "像……那样。表示列举。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "みんなが子どものように元気に歌い始めた。",
      "zh": "大家像孩子般精神饱满地唱了起来。",
      "jaHtml": "みんなが<ruby>子ども<rt>こども</rt></ruby>の<span class=\"target\">よう</span>に<ruby>元気<rt>げんき</rt></ruby>に<ruby>歌い<rt>うたい</rt></ruby><ruby>始め<rt>はじめ</rt></ruby>た。"
     },
     {
      "src": "",
      "ja": "彼のような優秀な人材は珍しい。",
      "zh": "像他那么优秀的人才很少见。",
      "jaHtml": "<ruby>彼の<rt>かの</rt></ruby><span class=\"target\">よう</span>な<ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>人材<rt>じんざい</rt></ruby>は<ruby>珍しい<rt>めずらしい</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "数学のような理系科目は苦手だ。",
      "zh": "像数学那样的理科科目我不擅长。",
      "jaHtml": "<ruby>数学<rt>すうがく</rt></ruby>の<span class=\"target\">よう</span>な<ruby>理系<rt>りけい</rt></ruby><ruby>科目<rt>かもく</rt></ruby>は<ruby>苦手<rt>にがて</rt></ruby>だ。"
     }
    ],
    "note": "表示列举。"
   },
   {
    "connect": [
     "动词/形容词普通形＋ようだ",
     "な形容词词干＋な＋ようだ",
     "名词＋の＋ようだ"
    ],
    "desc": "好像……、似乎……。表示主观推测，带有不确定的语气。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "先週、図書館は休館だったようだ。",
      "zh": "上周图书馆好像闭馆了。",
      "jaHtml": "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>休館<rt>きゅうかん</rt></ruby>だった<span class=\"target\">ようだ</span>。"
     },
     {
      "src": "2007年真题",
      "ja": "外は寒いようだ。",
      "zh": "外面好像很冷。",
      "jaHtml": "<ruby>外<rt>そと</rt></ruby>は<ruby>寒い<rt>さむい</rt></ruby><span class=\"target\">ようだ</span>。"
     },
     {
      "src": "",
      "ja": "この人はどこかで会ったような気がします。",
      "zh": "总觉得这个人好像在哪里见过。",
      "jaHtml": "この<ruby>人<rt>にん</rt></ruby>はどこかで<ruby>会っ<rt>あっ</rt></ruby>た<span class=\"target\">よう</span>な<ruby>気が<rt>きが</rt></ruby>します。"
     }
    ],
    "note": "「ようだ」表示委婉的断定，常和副词「どうも/どうやら（总觉得）」等呼应使用，以加强推测的语气。"
   }
  ],
  "kana": [
   "ように",
   "ような"
  ],
  "patternHtml": "〜ようだ"
 },
 {
  "id": 174,
  "unit": 18,
  "pattern": "〜(よ)うとする",
  "senses": [
   {
    "connect": [
     "动词意志形＋(よ)うとする"
    ],
    "desc": "想要……、就要……。表示就要做某动作或某种作用就要发生。",
    "examples": [
     {
      "src": "",
      "ja": "出かけようとしたとき、電話が鳴った。",
      "zh": "刚要出门的时候，电话响了。",
      "jaHtml": "<ruby>出か<rt>でか</rt></ruby>け<span class=\"target\">ようと</span>したとき、<ruby>電話<rt>でんわ</rt></ruby>が<ruby>鳴っ<rt>なっ</rt></ruby>た。"
     },
     {
      "src": "",
      "ja": "食事をしようとした時、友だちが訪ねてきた。",
      "zh": "正要吃饭的时候，朋友来了。",
      "jaHtml": "<ruby>食事<rt>しょくじ</rt></ruby>をし<span class=\"target\">ようと</span>した<ruby>時<rt>とき</rt></ruby>、<ruby>友<rt>とも</rt></ruby>だちが<ruby>訪ね<rt>たずね</rt></ruby>てきた。"
     },
     {
      "src": "",
      "ja": "エレベーターに乗ろうとした時、ドアが閉まりました。",
      "zh": "正要上电梯的时候，门关上了。",
      "jaHtml": "エレベーターに<ruby>乗ろ<rt>のろ</rt></ruby><span class=\"target\">うと</span>した<ruby>時<rt>とき</rt></ruby>、ドアが<ruby>閉ま<rt>しま</rt></ruby>りました。"
     }
    ],
    "note": "表示就要做某动作，或某种作用就要发生。"
   }
  ],
  "kana": [
   "ようとした",
   "ようとする"
  ],
  "patternHtml": "〜(よ)うとする"
 },
 {
  "id": 175,
  "unit": 18,
  "pattern": "〜ように",
  "senses": [
   {
    "connect": [
     "动词辞书形/ない形/可能形＋ように"
    ],
    "desc": "为了……。表示目的。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "上手に話せるように何度も練習した。",
      "zh": "为了能够说好，练习了很多次。",
      "jaHtml": "<ruby>上手<rt>じょうず</rt></ruby>に<ruby>話せ<rt>はなせ</rt></ruby>る<span class=\"target\">ように</span><ruby>何度<rt>なんど</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>した。"
     },
     {
      "src": "",
      "ja": "列車に間に合うように早く家を出た。",
      "zh": "为了赶上列车，早早地出了门。",
      "jaHtml": "<ruby>列車<rt>れっしゃ</rt></ruby>に<ruby>間に合う<rt>まにあう</rt></ruby><span class=\"target\">ように</span><ruby>早く<rt>はやく</rt></ruby><ruby>家<rt>いえ</rt></ruby>を<ruby>出た<rt>でた</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "忘れないようにノートにメモをしておく。",
      "zh": "为了不忘掉，先记在笔记本上。",
      "jaHtml": "<ruby>忘れ<rt>わすれ</rt></ruby>ない<span class=\"target\">ように</span>ノートにメモをしておく。"
     },
     {
      "src": "",
      "ja": "後ろの席の人にも聞こえるように、大きい声で話しました。",
      "zh": "为了让后面座位的人也能听到，用很大的声音说话。",
      "jaHtml": "<ruby>後ろ<rt>うしろ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>の<ruby>人<rt>にん</rt></ruby>にも<ruby>聞こ<rt>きこ</rt></ruby>える<span class=\"target\">ように</span>、<ruby>大きい<rt>おおきい</rt></ruby><ruby>声<rt>こえ</rt></ruby>で<ruby>話し<rt>はなし</rt></ruby>ました。"
     }
    ],
    "note": "表示目的。「〜ように」的前面用非意志动词（可能动词、「なる/する」等）；意志动词用「〜ために」。"
   },
   {
    "connect": [
     "动词辞书形/ない形/可能形＋ように"
    ],
    "desc": "希望……、请……。表示希望、要求。",
    "examples": [
     {
      "src": "",
      "ja": "無事に帰れるように祈ります。",
      "zh": "祈祷能平安归来。",
      "jaHtml": "<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>帰れ<rt>かえれ</rt></ruby>る<span class=\"target\">ように</span><ruby>祈り<rt>いのり</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "このことは他人に話さないように。",
      "zh": "这件事不要告诉别人。",
      "jaHtml": "このことは<ruby>他人<rt>たにん</rt></ruby>に<ruby>話さ<rt>はなさ</rt></ruby>ない<span class=\"target\">ように</span>。"
     },
     {
      "src": "",
      "ja": "どうか彼の病気が早く治るように。",
      "zh": "希望他的病能早日痊愈。",
      "jaHtml": "どうか<ruby>彼の<rt>かの</rt></ruby><ruby>病気<rt>びょうき</rt></ruby>が<ruby>早く<rt>はやく</rt></ruby><ruby>治る<rt>なおる</rt></ruby><span class=\"target\">ように</span>。"
     }
    ],
    "note": "表示希望、要求。"
   },
   {
    "connect": [
     "动词辞书形/ない形＋ように"
    ],
    "desc": "请你（转告）……。表示间接引用。",
    "examples": [
     {
      "src": "",
      "ja": "彼に早く来るように言ってください。",
      "zh": "请你叫他快点来。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>に<ruby>早く<rt>はやく</rt></ruby><ruby>来る<rt>くる</rt></ruby><span class=\"target\">ように</span><ruby>言って<rt>いって</rt></ruby>ください。"
     },
     {
      "src": "",
      "ja": "彼が帰ってきたら、家に電話をかけるように伝えてください。",
      "zh": "他回来之后，请转告他给家里打个电话。",
      "jaHtml": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>帰っ<rt>かえっ</rt></ruby>てきたら、<ruby>家<rt>いえ</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>をかける<span class=\"target\">ように</span><ruby>伝え<rt>つたえ</rt></ruby>てください。"
     },
     {
      "src": "",
      "ja": "あまり心配しないように彼に言ってください。",
      "zh": "请你叫他别太担心。",
      "jaHtml": "あまり<ruby>心配<rt>しんぱい</rt></ruby>しない<span class=\"target\">ように</span><ruby>彼<rt>かれ</rt></ruby>に<ruby>言って<rt>いって</rt></ruby>ください。"
     }
    ],
    "note": "表示间接引用。后项常与「言う/伝える」等动词呼应使用。"
   }
  ],
  "patternHtml": "〜ように"
 },
 {
  "id": 176,
  "unit": 18,
  "pattern": "〜ようにする",
  "senses": [
   {
    "connect": [
     "动词辞书形/ない形＋ようにする"
    ],
    "desc": "努力做到……。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "夜は甘いものを食べないようにしています。",
      "zh": "努力做到晚上不吃甜食。",
      "jaHtml": "<ruby>夜<rt>よる</rt></ruby>は<ruby>甘い<rt>あまい</rt></ruby>ものを<ruby>食べ<rt>たべ</rt></ruby>ない<span class=\"target\">ようにしていま</span>す。"
     },
     {
      "src": "",
      "ja": "明日から6時に起きるようにします。",
      "zh": "从明天开始努力做到6点起床。",
      "jaHtml": "<ruby>明日<rt>あした</rt></ruby>から6<ruby>時に<rt>ときに</rt></ruby><ruby>起き<rt>おき</rt></ruby>る<span class=\"target\">ようにし</span>ます。"
     },
     {
      "src": "",
      "ja": "同じ失敗は繰り返さないようにします。",
      "zh": "努力做到不再犯同样的错误。",
      "jaHtml": "<ruby>同じ<rt>おなじ</rt></ruby><ruby>失敗<rt>しっぱい</rt></ruby>は<ruby>繰り返さ<rt>くりかえさ</rt></ruby>ない<span class=\"target\">ようにし</span>ます。"
     }
    ],
    "note": "表示为了达到「〜ように」前面的目标而努力。"
   }
  ],
  "kana": [
   "ようにしています",
   "ようにします",
   "ようにする"
  ],
  "patternHtml": "〜ようにする"
 },
 {
  "id": 177,
  "unit": 18,
  "pattern": "〜ようになる/ようになっている",
  "senses": [
   {
    "connect": [
     "动词辞书形/ない形/可能形＋ようになる"
    ],
    "desc": "变得……。表示能力或状态变化的结果。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "子どもが生まれたことで、食べ物の安全を気にするようになった。",
      "zh": "因为孩子出生了，我开始注意食品安全。",
      "jaHtml": "<ruby>子ども<rt>こども</rt></ruby>が<ruby>生まれ<rt>うまれ</rt></ruby>たことで、<ruby>食べ物<rt>たべもの</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>を<ruby>気に<rt>きに</rt></ruby>する<span class=\"target\">ようになっ</span>た。"
     },
     {
      "src": "2006年真题",
      "ja": "毎日練習したので、泳げるようになりました。",
      "zh": "因为每天都在练习，所以学会了游泳。",
      "jaHtml": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>したので、<ruby>泳げ<rt>およげ</rt></ruby>る<span class=\"target\">ようにな</span>りました。"
     },
     {
      "src": "",
      "ja": "車は古くなったので、よく故障するようになりました。",
      "zh": "因为车子旧了，所以经常发生故障。",
      "jaHtml": "<ruby>車<rt>くるま</rt></ruby>は<ruby>古く<rt>ふるく</rt></ruby>なったので、よく<ruby>故障<rt>こしょう</rt></ruby>する<span class=\"target\">ようにな</span>りました。"
     }
    ],
    "note": "表示能力或状态变化的结果，动作主语可以是第一人称，也可以是其他人称。另外，「动词ない形＋なくなる」也可以表示变得不……。"
   },
   {
    "connect": [
     "动词辞书形＋ようになっている"
    ],
    "desc": "表示正在发生某种变化，或已形成某种状态、机制。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "「私たちが作ったABC子ども新聞は、すべての漢字に振り仮名をつけてあるので、小学1年生からでも読めるようになっています。」",
      "zh": "我们制作的ABC儿童报纸，所有汉字都注了假名，所以即使小学一年级学生也能阅读。",
      "jaHtml": "「<ruby>私たち<rt>わたしたち</rt></ruby>が<ruby>作っ<rt>つくっ</rt></ruby>たABC<ruby>子ども<rt>こども</rt></ruby><ruby>新聞<rt>しんぶん</rt></ruby>は、すべての<ruby>漢字<rt>かんじ</rt></ruby>に<ruby>振り仮名<rt>ふりがな</rt></ruby>をつけてあるので、<ruby>小学<rt>しょうがく</rt></ruby>1<ruby>年生<rt>ねんせい</rt></ruby>からでも<ruby>読め<rt>よめ</rt></ruby>る<span class=\"target\">ようになっていま</span>す。」"
     },
     {
      "src": "",
      "ja": "当店ではクレジットカードが利用できるようになっています。",
      "zh": "在本店可以刷卡消费。",
      "jaHtml": "<ruby>当店<rt>とうてん</rt></ruby>ではクレジットカードが<ruby>利用<rt>りよう</rt></ruby>できる<span class=\"target\">ようになっていま</span>す。"
     },
     {
      "src": "",
      "ja": "火事のときは、このベルが自動的に鳴るようになっています。",
      "zh": "发生火灾时，这个电铃会自动响起。",
      "jaHtml": "<ruby>火事<rt>かじ</rt></ruby>のときは、このベルが<ruby>自動的<rt>じどうてき</rt></ruby>に<ruby>鳴る<rt>なる</rt></ruby><span class=\"target\">ようになっていま</span>す。"
     }
    ],
    "note": "表示某种状态的变化正在进行，并且可能还将持续下去。"
   }
  ],
  "kana": [
   "ようになっています",
   "ようになりました",
   "ようになった",
   "ようになって",
   "ようになる"
  ],
  "patternHtml": "〜ようになる/ようになっている"
 },
 {
  "id": 178,
  "unit": 18,
  "pattern": "らしい",
  "senses": [
   {
    "connect": [
     "动词/形容词普通形＋らしい",
     "な形容词词干/名词＋らしい"
    ],
    "desc": "好像……。表示根据各种客观情况、传闻做出可能性很高的推测、判断。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "2人は来年結婚するらしいです。",
      "zh": "两人好像明年要结婚。",
      "jaHtml": "2<ruby>人<rt>にん</rt></ruby>は<ruby>来年<rt>らいねん</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>する<span class=\"target\">らしい</span>です。"
     },
     {
      "src": "2001年真题",
      "ja": "この家には誰もいないらしく、いつ行っても静かだ。",
      "zh": "这个家里好像没有人住，无论什么时候去都很安静。",
      "jaHtml": "この<ruby>家<rt>いえ</rt></ruby>には<ruby>誰も<rt>だれも</rt></ruby>いない<span class=\"target\">らし</span>く、いつ<ruby>行って<rt>いって</rt></ruby>も<ruby>静か<rt>しずか</rt></ruby>だ。"
     },
     {
      "src": "",
      "ja": "新しく出た携帯電話は使いやすいらしい。",
      "zh": "新上市的手机好像用起来很方便。",
      "jaHtml": "<ruby>新しく<rt>あたらしく</rt></ruby><ruby>出た<rt>でた</rt></ruby><ruby>携帯電話<rt>けいたいでんわ</rt></ruby>は<ruby>使い<rt>つかい</rt></ruby>やすい<span class=\"target\">らしい</span>。"
     },
     {
      "src": "",
      "ja": "田中さんは中国語が上手らしい。",
      "zh": "田中的中文好像很好。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>中国語<rt>ちゅうごくご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby><span class=\"target\">らしい</span>。"
     }
    ],
    "note": "常和副词「どうも/どうやら」搭配使用。"
   }
  ],
  "patternHtml": "らしい"
 },
 {
  "id": 179,
  "unit": 18,
  "pattern": "らしい（接尾語）",
  "senses": [
   {
    "connect": [
     "名词＋らしい"
    ],
    "desc": "像……似的、地道的……。表示主体充分具备了前面名词应有的特点、性质、风格等。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "学生らしくもっと勉強しなさい。",
      "zh": "要像个学生的样子，更加努力学习。",
      "jaHtml": "<ruby>学生<rt>がくせい</rt></ruby><span class=\"target\">らし</span>くもっと<ruby>勉強<rt>べんきょう</rt></ruby>しなさい。"
     },
     {
      "src": "",
      "ja": "日本語らしい日本語を身につけたい。",
      "zh": "想掌握地道的日语。",
      "jaHtml": "<ruby>日本語<rt>にほんご</rt></ruby><span class=\"target\">らしい</span><ruby>日本語<rt>にほんご</rt></ruby>を<ruby>身に<rt>みに</rt></ruby>つけたい。"
     },
     {
      "src": "",
      "ja": "今日は暖かくて、春らしい天気です。",
      "zh": "今天很暖和，像是春天的天气。",
      "jaHtml": "<ruby>今日は<rt>きょうは</rt></ruby><ruby>暖かく<rt>あたたかく</rt></ruby>て、<ruby>春<rt>はる</rt></ruby><span class=\"target\">らしい</span><ruby>天気<rt>てんき</rt></ruby>です。"
     }
    ],
    "note": "「らしい」属于い形容词活用，一般接在名词后面。「〜らしく」的后面接动词或形容词，「〜らしい」的后面接名词。"
   }
  ],
  "kana": [
   "らしい"
  ],
  "patternHtml": "らしい（<ruby>接尾語<rt>せつびご</rt></ruby>）"
 },
 {
  "id": 180,
  "unit": 18,
  "pattern": "〜(ら)れる（被動）",
  "senses": [
   {
    "connect": [
     "一类动词ない形＋れる；二类、三类动词ない形＋られる"
    ],
    "desc": "被……、受到……。主语是人的直接被动句。",
    "examples": [
     {
      "src": "2006年真题",
      "ja": "きょう私は先生にほめられました。",
      "zh": "今天我被老师表扬了。",
      "jaHtml": "きょう<ruby>私<rt>わたし</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>にほめ<span class=\"target\">られ</span>ました。"
     },
     {
      "src": "2005年真题",
      "ja": "田中さんは会議に遅れて、社長に注意されました。",
      "zh": "田中开会迟到，被社长提醒了。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>遅れ<rt>おくれ</rt></ruby>て、<ruby>社長<rt>しゃちょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby><span class=\"target\">されました</span>。"
     },
     {
      "src": "",
      "ja": "彼はみんなに好かれている。",
      "zh": "他被大家所喜欢。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby>みんなに<ruby>好か<rt>すか</rt></ruby><span class=\"target\">れてい</span>る。"
     }
    ],
    "note": "这是典型的被动句句型。动作的承受者用「は/が」提示；动作的发动者用「に」或「から」表示。「〜(ら)れる」是二类动词活用型的助动词。"
   },
   {
    "connect": [
     "一类动词ない形＋れる；二类、三类动词ない形＋られる"
    ],
    "desc": "带宾语的间接被动句。被……（感到困扰）。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "このメールを誰かに見られると困る。",
      "zh": "这封邮件要是被别人看到就麻烦了。",
      "jaHtml": "このメールを<ruby>誰か<rt>だれか</rt></ruby>に<ruby>見<rt>み</rt></ruby><span class=\"target\">られる</span>と<ruby>困る<rt>こまる</rt></ruby>。"
     },
     {
      "src": "",
      "ja": "私は姉に日記を読まれました。",
      "zh": "我的日记被姐姐看了。",
      "jaHtml": "<ruby>私<rt>わたし</rt></ruby>は<ruby>姉<rt>あね</rt></ruby>に<ruby>日記<rt>にっき</rt></ruby>を<ruby>読<rt>よ</rt></ruby><span class=\"target\">まれました</span>。"
     }
    ],
    "note": "被动者作主语，用「は」提示，主语有时在句中省略；受损害的事物充当宾语，用「を」提示。间接被动句是指主体间接承受了他人行为的影响，给主体带来了损害。"
   },
   {
    "connect": [
     "自动词ない形＋れる/られる"
    ],
    "desc": "自动词构成的间接被动句。……让我（感到困扰）。",
    "examples": [
     {
      "src": "1993年真题",
      "ja": "父に入院されて、私は困ってしまった。",
      "zh": "父亲住院了，我很伤脑筋。",
      "jaHtml": "<ruby>父<rt>ちち</rt></ruby>に<ruby>入院<rt>にゅういん</rt></ruby><span class=\"target\">され</span>て、<ruby>私<rt>わたし</rt></ruby>は<ruby>困っ<rt>こまっ</rt></ruby>てしまった。"
     },
     {
      "src": "",
      "ja": "昨晩、一晩中赤ちゃんに泣かれて、眠れなかった。",
      "zh": "昨晚宝宝哭了一整夜，我没能睡着。",
      "jaHtml": "<ruby>昨晩<rt>さくばん</rt></ruby>、<ruby>一晩中<rt>ひとばんじゅう</rt></ruby><ruby>赤ちゃん<rt>あかちゃん</rt></ruby>に<ruby>泣か<rt>なか</rt></ruby><span class=\"target\">れて</span>、<ruby>眠れ<rt>ねむれ</rt></ruby>なかった。"
     }
    ],
    "note": "被动者作为主语，用「は」表示；动作的发出者用「に」表示。这类被动句的特点是谓语动词是自动词，其动作间接地给第三者（主语）带来不良影响或损害。"
   },
   {
    "connect": [
     "一类动词ない形＋れる；二类、三类动词ない形＋られる"
    ],
    "desc": "被……。主语是事或物的直接被动句。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "最近、日本の漫画は多くの国の人に読まれている。",
      "zh": "最近，很多国家的人都在看日本的漫画。",
      "jaHtml": "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>日本<rt>にっぽん</rt></ruby>の<ruby>漫画<rt>まんが</rt></ruby>は<ruby>多く<rt>おおく</rt></ruby>の<ruby>国<rt>くに</rt></ruby>の<ruby>人<rt>にん</rt></ruby>に<ruby>読ま<rt>よま</rt></ruby><span class=\"target\">れてい</span>る。"
     },
     {
      "src": "",
      "ja": "この空港は有名な建築家によって設計された。",
      "zh": "这个机场是由著名建筑师设计的。",
      "jaHtml": "この<ruby>空港<rt>くうこう</rt></ruby>は<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>建築家<rt>けんちくか</rt></ruby>によって<ruby>設計<rt>せっけい</rt></ruby><span class=\"target\">され</span>た。"
     },
     {
      "src": "",
      "ja": "花火大会は今週の日曜日に行われる予定だ。",
      "zh": "烟花大会预定于本周日举行。",
      "jaHtml": "<ruby>花火大会<rt>はなびたいかい</rt></ruby>は<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>に<span class=\"target\"><ruby>行わ<rt>おこなわ</rt></ruby>れ</span>る<ruby>予定<rt>よてい</rt></ruby>だ。"
     }
    ],
    "note": "主要用于描写客观事实或新闻报道。如果谓语是表示事物的发明、创造、创作或发现等的动词，如「作る/発明する/設計する/書く」等，动作的主语一般不用「に」，而用「〜によって」来表示。"
   }
  ],
  "kana": [
   "られました",
   "されました",
   "まれました",
   "れている",
   "されて",
   "された",
   "られて",
   "られる",
   "われて",
   "われている",
   "れて",
   "れた"
  ],
  "patternHtml": "〜(ら)れる（<ruby>被動<rt>ひどう</rt></ruby>）"
 },
 {
  "id": 181,
  "unit": 19,
  "pattern": "〜(ら)れる（可能形）",
  "senses": [
   {
    "connect": [
     "一类动词：把词尾改为え段假名＋る（書く→書ける）；二类动词：ない形＋られる（食べる→食べられる）；三类动词：する→できる、来る→来られる"
    ],
    "desc": "能……、会……、可以……。表示具有某种能力或可能性。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "妻「この前の試合、あなたがけがしなかったら、優勝できたかもねえ。」夫「うーん。けがをしなかったら、4位くらいにはなれただろうけど、それでもやっぱり優勝はできなかったと思うよ。」",
      "zh": "妻子：上次的比赛，你要是没受伤的话，说不定能拿冠军呢。丈夫：嗯，没受伤的话，也许能拿到第4名，但即便如此，我想还是拿不了冠军。",
      "jaHtml": "<ruby>妻<rt>つま</rt></ruby>「この<ruby>前<rt>まえ</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>、あなたがけがしなかったら、<ruby>優勝<rt>ゆうしょう</rt></ruby>できたかもねえ。」<ruby>夫<rt>おっと</rt></ruby>「うーん。けがをしなかったら、4<ruby>位<rt>くらい</rt></ruby>くらいにはなれただろうけど、それでもやっぱり<ruby>優勝<rt>ゆうしょう</rt></ruby>は<span class=\"target\">できなかった</span>と<ruby>思う<rt>おもう</rt></ruby>よ。」"
     },
     {
      "src": "2008年真题",
      "ja": "この辞書で漢字の読み方が調べられます。",
      "zh": "用这本词典可以查到汉字的读法。",
      "jaHtml": "この<ruby>辞書<rt>じしょ</rt></ruby>で<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読み方<rt>よみかた</rt></ruby>が<ruby>調べ<rt>しらべ</rt></ruby><span class=\"target\">られ</span>ます。"
     },
     {
      "src": "",
      "ja": "図書館は静かなので、勉強に集中できます。",
      "zh": "因为图书馆很安静，所以可以集中注意力学习。",
      "jaHtml": "<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>静か<rt>しずか</rt></ruby>なので、<ruby>勉強<rt>べんきょう</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby><span class=\"target\">でき</span>ます。"
     }
    ],
    "note": "表示具有某种能力或可能性。注意可能动词前面的助词一般用「が」。"
   }
  ],
  "kana": [
   "できた",
   "できなかった",
   "なれた",
   "られます",
   "できます",
   "られる"
  ],
  "patternHtml": "〜(ら)れる（<ruby>可能<rt>かのう</rt></ruby><ruby>形<rt>かたち</rt></ruby>）"
 },
 {
  "id": 182,
  "unit": 19,
  "pattern": "〜(ら)れる（自発態）",
  "senses": [
   {
    "connect": [
     "一类动词ない形＋れる（思う→思われる）；二类、三类动词ない形＋られる（心配する→心配される）"
    ],
    "desc": "不由得……。表示心理自然而然地产生某种活动或变化。",
    "examples": [
     {
      "src": "",
      "ja": "こういう写真を見ると、子どものころのことを思い出される。",
      "zh": "每当看到这种照片，就不由得想起小时候的事情。",
      "jaHtml": "こういう<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見る<rt>みる</rt></ruby>と、<ruby>子ども<rt>こども</rt></ruby>のころのことを<ruby>思い出さ<rt>おもいださ</rt></ruby><span class=\"target\">れる</span>。"
     },
     {
      "src": "",
      "ja": "なんだか不思議に思われる。",
      "zh": "总觉得有些不可思议。",
      "jaHtml": "なんだか<ruby>不思議<rt>ふしぎ</rt></ruby>に<ruby>思わ<rt>おもわ</rt></ruby><span class=\"target\">れる</span>。"
     },
     {
      "src": "",
      "ja": "娘の将来のことが案じられます。",
      "zh": "不由得担心起女儿的将来。",
      "jaHtml": "<ruby>娘<rt>むすめ</rt></ruby>の<ruby>将来<rt>しょうらい</rt></ruby>のことが<ruby>案じ<rt>あんじ</rt></ruby><span class=\"target\">られ</span>ます。"
     }
    ],
    "note": "能构成自发态的动词大多是和情感有关的动词，如「感動する（感动）／案じる（担心）／思い出す（想起）」等，并且动词前面的助词一般用「が」表示。"
   }
  ],
  "kana": [
   "られます",
   "られる",
   "される",
   "われる",
   "れた",
   "れて"
  ],
  "patternHtml": "〜(ら)れる（<ruby>自発<rt>じはつ</rt></ruby><ruby>態<rt>たい</rt></ruby>）"
 },
 {
  "id": 183,
  "unit": 19,
  "pattern": "〜わけがない/わけはない",
  "senses": [
   {
    "connect": [
     "动词/形容词普通形＋わけがない",
     "な形容词词干＋な＋わけがない",
     "名词な/である＋わけがない"
    ],
    "desc": "不可能……、不会……。表示说话人主观上的一种强烈的否定。",
    "examples": [
     {
      "src": "2009年12月真题",
      "ja": "このマンガは若い人の間ですごく流行っているので、高校生が知らないわけがない。",
      "zh": "这本漫画在年轻人中非常流行，所以高中生不可能不知道。",
      "jaHtml": "このマンガは<ruby>若い<rt>わかい</rt></ruby><ruby>人<rt>にん</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>ですごく<ruby>流行っ<rt>はやっ</rt></ruby>ているので、<ruby>高校生<rt>こうこうせい</rt></ruby>が<ruby>知ら<rt>しら</rt></ruby>ない<span class=\"target\">わけがない</span>。"
     },
     {
      "src": "2007年真题",
      "ja": "お酒の好きな田中さんが来るんだから、これだけで足りるわけがない。",
      "zh": "喜欢喝酒的田中要来，所以光这些不可能够。",
      "jaHtml": "お<ruby>酒<rt>さけ</rt></ruby>の<ruby>好き<rt>すき</rt></ruby>な<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>来る<rt>くる</rt></ruby>んだから、これだけで<ruby>足り<rt>たり</rt></ruby>る<span class=\"target\">わけがない</span>。"
     },
     {
      "src": "",
      "ja": "こんな難しい問題が、子どもに解けるわけがない。",
      "zh": "这么难的问题，小孩子是不可能做出来的。",
      "jaHtml": "こんな<ruby>難しい<rt>むずかしい</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>が、<ruby>子ども<rt>こども</rt></ruby>に<ruby>解け<rt>とけ</rt></ruby>る<span class=\"target\">わけがない</span>。"
     }
    ],
    "note": "表示说话人主观上的一种强烈的否定，即说话人根据前项很充分、很确定的理由，理所当然地得出后项的结论。"
   }
  ],
  "patternHtml": "〜わけがない/わけはない"
 },
 {
  "id": 184,
  "unit": 19,
  "pattern": "わけだ",
  "senses": [
   {
    "connect": [
     "动词/形容词普通形＋わけだ",
     "な形容词词干＋な＋わけだ",
     "名词な/である＋わけだ"
    ],
    "desc": "当然……、难怪……。表示根据某既定事实，做出理所当然的结论。",
    "examples": [
     {
      "src": "",
      "ja": "暑いわけだ。38度もある。",
      "zh": "难怪这么热，气温高达38度。",
      "jaHtml": "<ruby>暑い<rt>あつい</rt></ruby><span class=\"target\">わけ</span>だ。38<ruby>度<rt>ど</rt></ruby>もある。"
     },
     {
      "src": "",
      "ja": "彼は何でもよく食べる。太るわけだ。",
      "zh": "他什么都吃，难怪这么胖。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby><ruby>何で<rt>なんで</rt></ruby>もよく<ruby>食べ<rt>たべ</rt></ruby>る。<ruby>太る<rt>ふとる</rt></ruby><span class=\"target\">わけ</span>だ。"
     },
     {
      "src": "",
      "ja": "彼女は日本に10年もいたから、日本語が上手なわけです。",
      "zh": "她在日本待了10年，难怪日语这么好。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>日本<rt>にっぽん</rt></ruby>に10<ruby>年<rt>ねん</rt></ruby>もいたから、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>な<span class=\"target\">わけです</span>。"
     }
    ],
    "note": "表示根据某既定事实，做出理所当然的结论。常和「だから/ので」搭配使用。"
   },
   {
    "connect": [
     "动词/形容词普通形＋わけだ",
     "な形容词词干＋な＋わけだ",
     "名词な/である＋わけだ"
    ],
    "desc": "也就是说……、换句话说……。表示换而言之。",
    "examples": [
     {
      "src": "",
      "ja": "つまり、あなたはもう昼ご飯を食べてしまったわけだ。",
      "zh": "也就是说，你已经吃过午饭了。",
      "jaHtml": "つまり、あなたはもう<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>めし</rt></ruby>を<ruby>食べて<rt>たべて</rt></ruby>しまった<span class=\"target\">わけ</span>だ。"
     },
     {
      "src": "",
      "ja": "A「社長がアメリカへ出張に行ったそうです。」B「ということは、あしたの会議に出られないわけですね。」",
      "zh": "A：听说社长去美国出差了。B：也就是说，他不能出席明天的会议。",
      "jaHtml": "A「<ruby>社長<rt>しゃちょう</rt></ruby>がアメリカへ<ruby>出張<rt>しゅっちょう</rt></ruby>に<ruby>行った<rt>いった</rt></ruby>そうです。」B「ということは、あしたの<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出ら<rt>でら</rt></ruby>れない<span class=\"target\">わけですね</span>。」"
     },
     {
      "src": "",
      "ja": "彼女の父親は私の母の弟だ。つまり彼女と私は従兄弟同士なわけだ。",
      "zh": "她的父亲是我妈妈的弟弟，也就是说她和我是表姐妹关系。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>父親<rt>ちちおや</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>母<rt>はは</rt></ruby>の<ruby>弟<rt>おとうと</rt></ruby>だ。つまり<ruby>彼女<rt>かのじょ</rt></ruby>と<ruby>私<rt>わたし</rt></ruby>は<ruby>従兄弟<rt>いとこ</rt></ruby><ruby>同士<rt>どうし</rt></ruby>な<span class=\"target\">わけ</span>だ。"
     }
    ],
    "note": "常和「ということは/つまり」等搭配使用，和「〜ということだ/〜ということになる」意思相同。"
   }
  ],
  "kana": [
   "わけです",
   "わけですね"
  ],
  "patternHtml": "わけだ"
 },
 {
  "id": 185,
  "unit": 19,
  "pattern": "〜わけではない/わけでもない",
  "senses": [
   {
    "connect": [
     "动词/形容词普通形＋わけではない",
     "な形容词词干＋な＋わけではない",
     "名词な/である＋わけではない"
    ],
    "desc": "并不是……。表示并不是全盘否定，而是有一部分是那样。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "最近の子どもはテレビゲームばかりしているようだが、必ずしも外で遊ばないわけではない。",
      "zh": "最近的孩子好像一味地在玩游戏，但也不是不在外面玩。",
      "jaHtml": "<ruby>最近<rt>さいきん</rt></ruby>の<ruby>子ども<rt>こども</rt></ruby>はテレビゲームばかりしているようだが、<ruby>必ずしも<rt>かならずしも</rt></ruby><ruby>外<rt>そと</rt></ruby>で<ruby>遊ば<rt>あそば</rt></ruby>ない<span class=\"target\">わけで</span>はない。"
     },
     {
      "src": "",
      "ja": "先生だからといって、何でもわかるわけではない。",
      "zh": "即使是老师，也并不是什么都懂。",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>だからといって、<ruby>何で<rt>なんで</rt></ruby>もわかる<span class=\"target\">わけで</span>はない。"
     },
     {
      "src": "",
      "ja": "全員が反対しているわけではない。",
      "zh": "并不是所有人都反对。",
      "jaHtml": "<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>反対<rt>はんたい</rt></ruby>している<span class=\"target\">わけで</span>はない。"
     }
    ],
    "note": "「〜ないわけではない」是用双重否定来表示肯定。常用「〜というわけではない」表示并不是……。"
   }
  ],
  "patternHtml": "〜わけではない/わけでもない"
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
    "desc": "不能……、不可以……。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "重要な会議だから、責任者の私が遅れていくわけにはいかない。",
      "zh": "因为是重要会议，身为负责人的我不能迟到。",
      "jaHtml": "<ruby>重要な<rt>じゅうような</rt></ruby><ruby>会議<rt>かいぎ</rt></ruby>だから、<ruby>責任者<rt>せきにんしゃ</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>が<ruby>遅れ<rt>おくれ</rt></ruby>ていく<span class=\"target\">わけにはいかない</span>。"
     },
     {
      "src": "",
      "ja": "先生だからといって、学生を殴るわけにはいかない。",
      "zh": "虽说是老师，也不能殴打学生。",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>だからといって、<ruby>学生<rt>がくせい</rt></ruby>を<ruby>殴る<rt>なぐる</rt></ruby><span class=\"target\">わけにはいかない</span>。"
     },
     {
      "src": "",
      "ja": "あしたは試験があるので、学校を休むわけにはいかない。",
      "zh": "明天有考试，不能不上学。",
      "jaHtml": "あしたは<ruby>試験<rt>しけん</rt></ruby>があるので、<ruby>学校<rt>がっこう</rt></ruby>を<ruby>休む<rt>やすむ</rt></ruby><span class=\"target\">わけにはいかない</span>。"
     }
    ],
    "note": "表示从一般常识、社会共识或过去的经验来看，不能做某事。"
   }
  ],
  "patternHtml": "〜わけにはいかない"
 },
 {
  "id": 187,
  "unit": 19,
  "pattern": "わりに(は)",
  "senses": [
   {
    "connect": [
     "名词＋の＋わりに(は)",
     "な形容词词干＋な＋わりに(は)",
     "动词/形容词普通形＋わりに(は)"
    ],
    "desc": "虽然……但是……。表示比较的基准，前后项不协调、不成比例。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "そのアルバイトは、仕事が大変できついわりに給料が安いよ。",
      "zh": "那份兼职，工作很辛苦，但工资却很低。",
      "jaHtml": "そのアルバイトは、<ruby>仕事<rt>しごと</rt></ruby>が<ruby>大変<rt>たいへん</rt></ruby>できつい<span class=\"target\">わりに</span><ruby>給料<rt>きゅうりょう</rt></ruby>が<ruby>安い<rt>やすい</rt></ruby>よ。"
     },
     {
      "src": "2000年真题",
      "ja": "このレストランは、高いわりにはうまいとは言えない。",
      "zh": "这家餐馆虽然价格很贵，但却说不上好吃。",
      "jaHtml": "このレストランは、<ruby>高い<rt>たかい</rt></ruby><span class=\"target\">わりに</span>はうまいとは<ruby>言え<rt>いえ</rt></ruby>ない。"
     },
     {
      "src": "",
      "ja": "彼女は年のわりには若く見える。",
      "zh": "她看上去比实际年龄年轻。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>年<rt>ねん</rt></ruby>の<span class=\"target\">わりに</span>は<ruby>若く<rt>わかく</rt></ruby><ruby>見え<rt>みえ</rt></ruby>る。"
     }
    ],
    "note": "表示前后项不协调、不成比例，类似于「〜にしては」。"
   }
  ],
  "patternHtml": "わりに(は)"
 },
 {
  "id": 188,
  "unit": 19,
  "pattern": "〜をきっかけに/がきっかけで/をきっかけとして",
  "senses": [
   {
    "connect": [
     "名词＋をきっかけに/がきっかけで/をきっかけとして"
    ],
    "desc": "以……为开端、以……为契机。表示某事物出现的起因或契机。",
    "examples": [
     {
      "src": "2008年真题",
      "ja": "恵まれない子どもたちの姿を見たのがきっかけで、この支援活動を始めたのです。",
      "zh": "自从看到这些穷苦的孩子们的样子，我就开始了这项援助活动。",
      "jaHtml": "<ruby>恵ま<rt>めぐま</rt></ruby>れない<ruby>子ども<rt>こども</rt></ruby>たちの<ruby>姿<rt>すがた</rt></ruby>を<ruby>見た<rt>みた</rt></ruby>の<span class=\"target\">がきっかけで</span>、この<ruby>支援<rt>しえん</rt></ruby><ruby>活動<rt>かつどう</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>たのです。"
     },
     {
      "src": "",
      "ja": "病気をきっかけに、運動を始めた。",
      "zh": "以生病为契机，开始锻炼身体。",
      "jaHtml": "<ruby>病気<rt>びょうき</rt></ruby><span class=\"target\">をきっかけ</span>に、<ruby>運動<rt>うんどう</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>た。"
     },
     {
      "src": "",
      "ja": "先月の旅行をきっかけに、彼女と付き合い始めた。",
      "zh": "以上个月的旅行为契机，和她开始交往了。",
      "jaHtml": "<ruby>先月<rt>せんげつ</rt></ruby>の<ruby>旅行<rt>りょこう</rt></ruby><span class=\"target\">をきっかけ</span>に、<ruby>彼女<rt>かのじょ</rt></ruby>と<ruby>付き合い<rt>つきあい</rt></ruby><ruby>始め<rt>はじめ</rt></ruby>た。"
     }
    ],
    "note": "「きっかけ」是名词，意思为机遇、契机。"
   }
  ],
  "patternHtml": "〜をきっかけに/がきっかけで/をきっかけとして"
 },
 {
  "id": 189,
  "unit": 19,
  "pattern": "〜を込めて",
  "senses": [
   {
    "connect": [
     "名词＋を込めて"
    ],
    "desc": "充满……、怀着……。表示某种感情倾注于某件事物之中。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "母の誕生日に、心を込めてセーターを編んであげた。",
      "zh": "母亲生日的时候，我用心给她织了件毛衣。",
      "jaHtml": "<ruby>母<rt>はは</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>に、<ruby>心<rt>こころ</rt></ruby><span class=\"target\">を<ruby>込め<rt>こめ</rt></ruby>て</span>セーターを<ruby>編んで<rt>あんで</rt></ruby>あげた。"
     },
     {
      "src": "",
      "ja": "感謝の気持ちを込めて、このカードを作った。",
      "zh": "满怀着感激的心情，制作了这张卡片。",
      "jaHtml": "<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>気持ち<rt>きもち</rt></ruby><span class=\"target\">を<ruby>込め<rt>こめ</rt></ruby>て</span>、このカードを<ruby>作っ<rt>つくっ</rt></ruby>た。"
     },
     {
      "src": "",
      "ja": "愛を込めて、彼女に指輪を贈った。",
      "zh": "我将这枚包含爱意的戒指送给了她。",
      "jaHtml": "<ruby>愛<rt>あい</rt></ruby><span class=\"target\">を<ruby>込め<rt>こめ</rt></ruby>て</span>、<ruby>彼女<rt>かのじょ</rt></ruby>に<ruby>指輪<rt>ゆびわ</rt></ruby>を<ruby>贈っ<rt>おくっ</rt></ruby>た。"
     }
    ],
    "note": "有「心/願い/愛を込めて」等常用的表达方式。「〜を込めた」后接名词作定语使用。"
   }
  ],
  "patternHtml": "〜を<ruby>込め<rt>こめ</rt></ruby>て"
 },
 {
  "id": 190,
  "unit": 19,
  "pattern": "〜を中心に(して)/を中心として/を中心とする",
  "senses": [
   {
    "connect": [
     "名词＋を中心に(して)/を中心として/を中心とする"
    ],
    "desc": "以……为中心。",
    "examples": [
     {
      "src": "2003年真题",
      "ja": "この作者の作品は、若い女性を中心に読まれている。",
      "zh": "这位作家的作品以年轻女性为主要读者群。",
      "jaHtml": "この<ruby>作者<rt>さくしゃ</rt></ruby>の<ruby>作品<rt>さくひん</rt></ruby>は、<ruby>若い<rt>わかい</rt></ruby><ruby>女性<rt>じょせい</rt></ruby><span class=\"target\">を<ruby>中心<rt>ちゅうしん</rt></ruby>に</span><ruby>読ま<rt>よま</rt></ruby>れている。"
     },
     {
      "src": "",
      "ja": "地球は太陽を中心にして回っている。",
      "zh": "地球以太阳为中心公转。",
      "jaHtml": "<ruby>地球<rt>ちきゅう</rt></ruby>は<ruby>太陽<rt>たいよう</rt></ruby><span class=\"target\">を<ruby>中心<rt>ちゅうしん</rt></ruby>に</span>して<ruby>回っ<rt>まわっ</rt></ruby>ている。"
     },
     {
      "src": "",
      "ja": "この物語は若い男女の恋愛を中心として展開する。",
      "zh": "这个故事以年轻男女的爱情为中心展开。",
      "jaHtml": "この<ruby>物語<rt>ものがたり</rt></ruby>は<ruby>若い<rt>わかい</rt></ruby><ruby>男女<rt>だんじょ</rt></ruby>の<ruby>恋愛<rt>れんあい</rt></ruby><span class=\"target\">を<ruby>中心<rt>ちゅうしん</rt></ruby></span>として<ruby>展開<rt>てんかい</rt></ruby>する。"
     }
    ],
    "note": "「〜を中心に(して)/〜を中心として」用在句中中顿，「〜を中心とする」后接名词作定语使用。"
   }
  ],
  "patternHtml": "〜を<ruby>中心<rt>ちゅうしん</rt></ruby>に(して)/を<ruby>中心<rt>ちゅうしん</rt></ruby>として/を<ruby>中心<rt>ちゅうしん</rt></ruby>とする"
 },
 {
  "id": 191,
  "unit": 19,
  "pattern": "〜を〜として/とする/とした",
  "senses": [
   {
    "connect": [
     "名词＋を＋名词＋として/とする/とした"
    ],
    "desc": "把……当做……。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "投票の結果、山田氏を会長とすることに決定しました。",
      "zh": "根据投票结果，决定由山田担任会长。",
      "jaHtml": "<ruby>投票<rt>とうひょう</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>、<ruby>山田<rt>やまだ</rt></ruby><ruby>氏<rt>し</rt></ruby>を<ruby>会長<rt>かいちょう</rt></ruby><span class=\"target\">とす</span>ることに<ruby>決定<rt>けってい</rt></ruby>しました。"
     },
     {
      "src": "",
      "ja": "田中さんをリーダーとしてサークルを作った。",
      "zh": "让田中担任领队，组建了社团。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>さんをリーダー<span class=\"target\">とし</span>てサークルを<ruby>作っ<rt>つくっ</rt></ruby>た。"
     },
     {
      "src": "",
      "ja": "石油を原料とする製品はいろいろあります。",
      "zh": "以石油为原料的产品有许多。",
      "jaHtml": "<ruby>石油<rt>せきゆ</rt></ruby>を<ruby>原料<rt>げんりょう</rt></ruby><span class=\"target\">とす</span>る<ruby>製品<rt>せいひん</rt></ruby>はいろいろあります。"
     }
    ],
    "note": "「〜を〜とする/とした」后面接名词使用。"
   }
  ],
  "patternHtml": "〜を〜として/とする/とした"
 },
 {
  "id": 192,
  "unit": 19,
  "pattern": "〜をはじめ(として)/をはじめとする",
  "senses": [
   {
    "connect": [
     "名词＋をはじめ(として)/をはじめとする"
    ],
    "desc": "以……为首、以……为代表。表示前述事项在同类事物中最重要、最具代表性。",
    "examples": [
     {
      "src": "2005年真题",
      "ja": "私たちの町にはこのお寺をはじめ、いろいろな古い建物がある。",
      "zh": "在我们的城镇里，以这座寺庙为代表，有很多古老的建筑。",
      "jaHtml": "<ruby>私たち<rt>わたしたち</rt></ruby>の<ruby>町<rt>まち</rt></ruby>にはこのお<ruby>寺<rt>てら</rt></ruby><span class=\"target\">をはじめ</span>、いろいろな<ruby>古い<rt>ふるい</rt></ruby><ruby>建物<rt>たてもの</rt></ruby>がある。"
     },
     {
      "src": "",
      "ja": "社長をはじめとして、社員全員が式典に出席した。",
      "zh": "社长以及全体员工都出席了仪式。",
      "jaHtml": "<ruby>社長<rt>しゃちょう</rt></ruby><span class=\"target\">をはじめ</span>として、<ruby>社員<rt>しゃいん</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>式典<rt>しきてん</rt></ruby>に<ruby>出席<rt>しゅっせき</rt></ruby>した。"
     },
     {
      "src": "",
      "ja": "首相をはじめとする代表団がアメリカを訪問した。",
      "zh": "以首相为首的代表团访问了美国。",
      "jaHtml": "<ruby>首相<rt>しゅしょう</rt></ruby><span class=\"target\">をはじめ</span>とする<ruby>代表団<rt>だいひょうだん</rt></ruby>がアメリカを<ruby>訪問<rt>ほうもん</rt></ruby>した。"
     }
    ],
    "note": "「〜をはじめ(として)」用在句中作中顿，「〜をはじめとする」后接名词作定语使用。"
   }
  ],
  "patternHtml": "〜をはじめ(として)/をはじめとする"
 },
 {
  "id": 193,
  "unit": 19,
  "pattern": "〜んじゃない",
  "senses": [
   {
    "connect": [
     "动词普通形/い形容词普通形＋んじゃない",
     "な形容词词干/名词(な)＋んじゃない"
    ],
    "desc": "不是……吗？读升调，表示征求对方同意或反问、惊讶。",
    "examples": [
     {
      "src": "",
      "ja": "あの人、好きなんじゃない？",
      "zh": "你不是喜欢那个人吗？",
      "jaHtml": "あの<ruby>人<rt>にん</rt></ruby>、<ruby>好き<rt>すき</rt></ruby>な<span class=\"target\">んじゃない</span>？"
     },
     {
      "src": "",
      "ja": "傘を持っていくように言ったんじゃない。",
      "zh": "我不是说过要带伞去吗？",
      "jaHtml": "<ruby>傘<rt>かさ</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby>ていくように<ruby>言った<rt>いった</rt></ruby><span class=\"target\">んじゃない</span>。"
     },
     {
      "src": "",
      "ja": "リモコン？目の前にあるんじゃない？",
      "zh": "遥控器？不是就在你眼前吗？",
      "jaHtml": "リモコン？<ruby>目の前<rt>めのまえ</rt></ruby>にある<span class=\"target\">んじゃない</span>？"
     }
    ],
    "note": "是「〜のではないか」的随意表达方式。"
   },
   {
    "connect": [
     "动词辞书形＋んじゃない"
    ],
    "desc": "不要……、不许……。读降调，表示禁止对方的某种行为。",
    "examples": [
     {
      "src": "",
      "ja": "そこを動くんじゃない。",
      "zh": "不许在那里乱动。",
      "jaHtml": "そこを<ruby>動く<rt>うごく</rt></ruby><span class=\"target\">んじゃない</span>。"
     },
     {
      "src": "",
      "ja": "電車の中で騒ぐんじゃない。",
      "zh": "不许在电车里喧哗。",
      "jaHtml": "<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>騒ぐ<rt>さわぐ</rt></ruby><span class=\"target\">んじゃない</span>。"
     },
     {
      "src": "",
      "ja": "油断するんじゃない。",
      "zh": "不能粗心大意。",
      "jaHtml": "<ruby>油断<rt>ゆだん</rt></ruby>する<span class=\"target\">んじゃない</span>。"
     }
    ],
    "note": "「〜んじゃない」多为男性使用，女性多使用礼貌体「〜んじゃありません」。相当于「〜な/〜てはいけない」。"
   }
  ],
  "patternHtml": "〜んじゃない"
 },
 {
  "id": 194,
  "unit": 19,
  "pattern": "んだって",
  "senses": [
   {
    "connect": [
     "动词普通形/形容词普通形＋んだって",
     "な形容词词干＋な＋んだって",
     "名词＋な＋んだって"
    ],
    "desc": "听说……。表示传闻。",
    "examples": [
     {
      "src": "",
      "ja": "彼はA大学に合格したんだって。",
      "zh": "听说他考上了A大学。",
      "jaHtml": "<ruby>彼は<rt>かれは</rt></ruby>A<ruby>大学<rt>だいがく</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<span class=\"target\">んだって</span>。"
     },
     {
      "src": "",
      "ja": "この店のラーメン、おいしいんだって。",
      "zh": "听说这家店的拉面很好吃。",
      "jaHtml": "この<ruby>店<rt>みせ</rt></ruby>のラーメン、おいしい<span class=\"target\">んだって</span>。"
     },
     {
      "src": "",
      "ja": "彼女、来月結婚するんだって。",
      "zh": "听说她下个月要结婚了。",
      "jaHtml": "<ruby>彼女<rt>かのじょ</rt></ruby>、<ruby>来月<rt>らいげつ</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>する<span class=\"target\">んだって</span>。"
     }
    ],
    "note": "与传闻助动词「〜そうだ」意思相同，但「〜んだって」用于较随便的会话。"
   }
  ],
  "patternHtml": "んだって"
 }
];

const N3_KEIGO = [
 {
  "page": 207,
  "pattern": "敬語の種類と尊敬語の基本",
  "senses": [
   {
    "label": "敬語の三種類",
    "desc": "日语敬语可以分为三大类：一、尊他语（尊敬語）：表示尊敬时使用，动作、作用属于对方或第三者。二、自谦语（謙譲語）：表示谦让时使用，动作、作用属于自己或自己一方的人。三、礼貌语（丁寧語）：表示礼貌、客气的说法。"
   },
   {
    "label": "1. 尊他語動詞",
    "connect": [
     "行く/来る/いる → いらっしゃる・おいでになる",
     "言う → おっしゃる",
     "食べる/飲む → 召し上がる・上がる",
     "見る → ご覧になる",
     "する → なさる",
     "くれる → くださる",
     "知っている → ご存じだ"
    ],
    "desc": "一般来说，对长辈或上级使用尊他语。注意一般不用于自己的家人；与其他公司的人谈话而涉及自己公司的上级时，也不使用尊他语。",
    "note": "「いらっしゃる/おっしゃる/くださる/なさる」的「ます形」是把词尾「る」变成「い」，如「いらっしゃいます」「おっしゃいます」「なさいます」等，这是一种特殊的词形变化。"
   }
  ]
 },
 {
  "page": 208,
  "pattern": "尊敬語：動詞・れる/られる・お/ご〜になる・お/ご〜ください",
  "senses": [
   {
    "label": "尊他語動詞の例文",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "（田中先生の研究室で）学生「田中先生はいらっしゃいますか。」秘書「今、ほかの学生と話していらっしゃいますから、少々お待ちください。」",
      "zh": "（在田中老师的研究室）学生：请问田中老师在吗？秘书：田中老师现在正在和其他学生说话，请稍等。",
      "jaHtml": "（<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>研究室<rt>けんきゅうしつ</rt></ruby>で）<ruby>学生<rt>がくせい</rt></ruby>「<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<span class=\"target\">いらっしゃいま</span>すか。」<ruby>秘書<rt>ひしょ</rt></ruby>「<ruby>今<rt>いま</rt></ruby>、ほかの<ruby>学生<rt>がくせい</rt></ruby>と<ruby>話し<rt>はなし</rt></ruby>ていらっしゃいますから、<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待ち<rt>まち</rt></ruby>ください。」"
     },
     {
      "src": "2004年真题",
      "ja": "ご意見のある方はおっしゃってください。",
      "zh": "有意见的人请讲。",
      "jaHtml": "ご<ruby>意見<rt>いけん</rt></ruby>のある<ruby>方は<rt>かたは</rt></ruby><span class=\"target\">おっしゃって</span>ください。"
     },
     {
      "src": "",
      "ja": "もう、そのパンフレットをご覧になりましたか。",
      "zh": "您已经看过那份宣传册了吗？",
      "jaHtml": "もう、そのパンフレットを<span class=\"target\">ご<ruby>覧<rt>らん</rt></ruby>になりました</span>か。"
     }
    ]
   },
   {
    "label": "2. 〜れる/〜られる（尊敬）",
    "connect": [
     "一类动词：词尾う段假名改为え段假名＋れる",
     "二类动词：ない形＋られる",
     "三类动词：する→される、来る→来られる"
    ],
    "desc": "表示说话人对动作主体的尊敬。",
    "examples": [
     {
      "src": "",
      "ja": "社長はあしたアメリカへ行かれます。",
      "zh": "社长明天要去美国。",
      "jaHtml": "<ruby>社長<rt>しゃちょう</rt></ruby>はあしたアメリカへ<span class=\"target\"><ruby>行か<rt>いか</rt></ruby>れま</span>す。"
     },
     {
      "src": "",
      "ja": "田中先生は毎朝6時に起きられます。",
      "zh": "田中老师每天早上6点起床。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>毎朝<rt>まいあさ</rt></ruby>6<ruby>時に<rt>ときに</rt></ruby><span class=\"target\"><ruby>起き<rt>おき</rt></ruby>られま</span>す。"
     },
     {
      "src": "",
      "ja": "A社のお客様はもう来られましたか。",
      "zh": "A公司的客人已经来了吗？",
      "jaHtml": "A<ruby>社<rt>しゃ</rt></ruby>のお<ruby>客様<rt>きゃくさま</rt></ruby>はもう<span class=\"target\"><ruby>来ら<rt>こら</rt></ruby>れました</span>か。"
     }
    ],
    "note": "「〜れる/られる」是二类动词活用型的助动词。"
   },
   {
    "label": "3. お/ご〜になる",
    "connect": [
     "お＋動詞ます形＋になる",
     "ご＋サ変動詞詞幹＋になる"
    ],
    "desc": "对对方或第三者的尊敬。尊敬程度高于「れる/られる」。",
    "examples": [
     {
      "src": "2007年真题",
      "ja": "先生はもうお帰りになりました。",
      "zh": "老师已经回去了。",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>はもう<span class=\"target\">お<ruby>帰り<rt>かえり</rt></ruby>になりました</span>。"
     },
     {
      "src": "",
      "ja": "ご心配をおかけしました。",
      "zh": "让您担心了。",
      "jaHtml": "ご<ruby>心配<rt>しんぱい</rt></ruby>を<span class=\"target\">おかけ</span>しました。"
     },
     {
      "src": "",
      "ja": "どうぞそちらにおかけになってください。",
      "zh": "请到那边坐。",
      "jaHtml": "どうぞそちらに<span class=\"target\">おかけになって</span>ください。"
     }
    ]
   },
   {
    "label": "4. お/ご〜ください",
    "connect": [
     "お＋動詞ます形＋ください",
     "ご＋サ変動詞詞幹＋ください"
    ],
    "desc": "请求对方（上级、长辈）做某事。请……、请您……。比「〜てください」的尊敬程度更高，语气更郑重。",
    "examples": [
     {
      "src": "2009年真题",
      "ja": "A「山田さんはいらっしゃいますか。」B「はい。ちょっとお待ちください。」",
      "zh": "A：山田先生在吗？B：在的，请稍候。",
      "jaHtml": "A「<ruby>山田<rt>やまだ</rt></ruby>さんは<span class=\"target\">いらっしゃいま</span>すか。」B「はい。ちょっとお<ruby>待ち<rt>まち</rt></ruby>ください。」"
     },
     {
      "src": "2000年真题",
      "ja": "今から映画が始まりますから、どうぞ最後までお楽しみください。",
      "zh": "电影现在就要开始放映了，请尽情观赏。",
      "jaHtml": "<ruby>今か<rt>いまか</rt></ruby>ら<ruby>映画<rt>えいが</rt></ruby>が<ruby>始まり<rt>はじまり</rt></ruby>ますから、どうぞ<ruby>最後<rt>さいご</rt></ruby>まで<span class=\"target\">お<ruby>楽しみ<rt>たのしみ</rt></ruby>ください</span>。"
     },
     {
      "src": "",
      "ja": "エレベーターをご利用ください。",
      "zh": "请乘电梯。",
      "jaHtml": "エレベーターを<span class=\"target\">ご<ruby>利用<rt>りよう</rt></ruby>ください</span>。"
     }
    ]
   }
  ]
 },
 {
  "page": 209,
  "pattern": "尊敬語：お/ご〜なさる・お/ご〜です",
  "senses": [
   {
    "label": "5. お/ご〜なさる",
    "connect": [
     "お＋動詞ます形＋なさる",
     "ご＋サ変動詞詞幹＋なさる"
    ],
    "desc": "用法比「お/ご〜になる」更郑重。",
    "examples": [
     {
      "src": "",
      "ja": "今日の新聞をお読みになりましたか。",
      "zh": "您读今天的报纸了吗？",
      "jaHtml": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>を<span class=\"target\">お<ruby>読み<rt>よみ</rt></ruby>になりました</span>か。"
     },
     {
      "src": "",
      "ja": "早くご連絡なさったほうがいいと思います。",
      "zh": "我想您还是早点联系比较好。",
      "jaHtml": "<ruby>早く<rt>はやく</rt></ruby><span class=\"target\">ご<ruby>連絡<rt>れんらく</rt></ruby>なさった</span>ほうがいいと<ruby>思い<rt>おもい</rt></ruby>ます。"
     },
     {
      "src": "",
      "ja": "田中先生、あしたの結婚式にご出席なさいますか。",
      "zh": "田中老师，明天的婚礼您出席吗？",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>、あしたの<ruby>結婚式<rt>けっこんしき</rt></ruby>に<span class=\"target\">ご<ruby>出席<rt>しゅっせき</rt></ruby>なさいま</span>すか。"
     }
    ],
    "note": "「なさる」是一类动词，但其「ます形」是「なさいます」，而不是「なさい」。"
   },
   {
    "label": "6. お/ご〜です",
    "connect": [
     "お＋動詞ます形＋です",
     "ご＋サ変動詞詞幹＋です"
    ],
    "desc": "表示对对方或第三者的尊敬。",
    "examples": [
     {
      "src": "",
      "ja": "もうお帰りですか。",
      "zh": "您要回去了吗？",
      "jaHtml": "もう<span class=\"target\">お<ruby>帰り<rt>かえり</rt></ruby>ですか</span>。"
     },
     {
      "src": "",
      "ja": "先生はどんな問題をご研究ですか。",
      "zh": "老师在研究什么问题？",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>はどんな<ruby>問題<rt>もんだい</rt></ruby>を<span class=\"target\">ご<ruby>研究<rt>けんきゅう</rt></ruby></span>ですか。"
     },
     {
      "src": "",
      "ja": "課長は正月日本へお戻りですか。",
      "zh": "科长新年要回日本吗？",
      "jaHtml": "<ruby>課長<rt>かちょう</rt></ruby>は<ruby>正月<rt>しょうがつ</rt></ruby><ruby>日本<rt>にっぽん</rt></ruby>へ<span class=\"target\">お<ruby>戻り<rt>もどり</rt></ruby></span>ですか。"
     }
    ],
    "note": "用法比较受限制，常用于一些固定的说法。"
   },
   {
    "label": "自謙語の基本",
    "desc": "自谦语是采用谦让的表达方式叙述自己或自己一方的人的行为、动作，以表示敬意。如和别人谈到自己的家人或自己公司的上级时，也使用自谦语。"
   }
  ]
 },
 {
  "page": 210,
  "pattern": "謙譲語：自謙語動詞",
  "senses": [
   {
    "label": "1. 自謙語動詞",
    "connect": [
     "行く/来る → 参る・伺う",
     "言う → 申す・申し上げる",
     "食べる/飲む/もらう → いただく",
     "会う → お目にかかる",
     "知っている/思う → 存じる",
     "あげる → さしあげる",
     "聞く → 承る"
    ],
    "desc": "通过自谦的方式叙述自己或自己一方的人的行为，以表示对对方的敬意。",
    "examples": [
     {
      "src": "2000年真题",
      "ja": "社長は今電話に出ておりますので、しばらくお待ちください。",
      "zh": "社长现在正在打电话，请稍等。",
      "jaHtml": "<ruby>社長<rt>しゃちょう</rt></ruby>は<ruby>今<rt>いま</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>に<ruby>出て<rt>でて</rt></ruby>おりますので、しばらく<span class=\"target\">お<ruby>待ち<rt>まち</rt></ruby>ください</span>。"
     },
     {
      "src": "",
      "ja": "じゃあ、まず月曜日のご都合を伺います。",
      "zh": "那么，首先请问您星期一是否方便。",
      "jaHtml": "じゃあ、まず<ruby>月曜日<rt>げつようび</rt></ruby>のご<ruby>都合<rt>つごう</rt></ruby>を<span class=\"target\"><ruby>伺い<rt>うかがい</rt></ruby>ま</span>す。"
     },
     {
      "src": "",
      "ja": "田中と申します。どうぞよろしくお願いします。",
      "zh": "我叫田中，请多多关照。",
      "jaHtml": "<ruby>田中<rt>たなか</rt></ruby>と<span class=\"target\"><ruby>申し<rt>もうし</rt></ruby>ま</span>す。どうぞよろしくお<ruby>願い<rt>ねがい</rt></ruby>します。"
     },
     {
      "src": "",
      "ja": "先生にお目にかかることができて、本当にうれしく存じます。",
      "zh": "能见到老师，我真的很高兴。",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>に<span class=\"target\">お<ruby>目に<rt>めに</rt></ruby>かか</span>ることができて、<ruby>本当<rt>ほんとう</rt></ruby>にうれしく<ruby>存じ<rt>ぞんじ</rt></ruby>ます。"
     }
    ]
   }
  ]
 },
 {
  "page": 211,
  "pattern": "謙譲語：お/ご〜する・お/ご〜いたす・〜ていただけますか",
  "senses": [
   {
    "label": "2. お/ご〜する",
    "connect": [
     "お＋動詞ます形＋する",
     "ご＋サ変動詞詞幹＋する"
    ],
    "desc": "通过自谦的方式表示对对方的尊敬。",
    "examples": [
     {
      "src": "2004年真题",
      "ja": "大山「小川さん、この本を山田先生にお渡ししてくださいませんか。」小川「わかりました。あとでお渡しします。」",
      "zh": "大山：小川，麻烦您把这本书交给山田老师。小川：知道了，过会儿我会交给老师。",
      "jaHtml": "<ruby>大山<rt>おおやま</rt></ruby>「<ruby>小川<rt>おがわ</rt></ruby>さん、この<ruby>本<rt>ほん</rt></ruby>を<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>にお<ruby>渡し<rt>わたし</rt></ruby>してくださいませんか。」<ruby>小川<rt>おがわ</rt></ruby>「わかりました。あとで<span class=\"target\">お<ruby>渡し<rt>わたし</rt></ruby>しま</span>す。」"
     },
     {
      "src": "",
      "ja": "荷物はわたしが来週の月曜日にお届けします。",
      "zh": "行李我下周一给您送去。",
      "jaHtml": "<ruby>荷物<rt>にもつ</rt></ruby>はわたしが<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>月曜日<rt>げつようび</rt></ruby>に<span class=\"target\">お<ruby>届け<rt>とどけ</rt></ruby>しま</span>す。"
     },
     {
      "src": "",
      "ja": "すぐにメールをお送りします。",
      "zh": "我马上给您回邮件。",
      "jaHtml": "すぐにメールを<span class=\"target\">お<ruby>送り<rt>おくり</rt></ruby>しま</span>す。"
     }
    ],
    "note": "三类动词「来る」和「する」不能用于这种形式。"
   },
   {
    "label": "3. お/ご〜いたす",
    "connect": [
     "お＋動詞ます形＋いたす",
     "ご＋サ変動詞詞幹＋いたす"
    ],
    "desc": "通过自谦的方式表示对对方的尊敬。此句型比「お/ご〜する」在语气上更加谦恭。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "9月の会社説明会の日程についてご案内いたします。",
      "zh": "我来宣布一下9月份公司说明会的日程安排。",
      "jaHtml": "9<ruby>月<rt>がつ</rt></ruby>の<ruby>会社説明会<rt>かいしゃせつめいかい</rt></ruby>の<ruby>日程<rt>にってい</rt></ruby>について<span class=\"target\">ご<ruby>案内<rt>あんない</rt></ruby>いたしま</span>す。"
     },
     {
      "src": "2007年真题",
      "ja": "その仕事についてはわたしからご説明いたします。",
      "zh": "那项工作由我来进行说明。",
      "jaHtml": "その<ruby>仕事<rt>しごと</rt></ruby>についてはわたしから<span class=\"target\">ご<ruby>説明<rt>せつめい</rt></ruby>いたしま</span>す。"
     },
     {
      "src": "",
      "ja": "これから高島さんという方をご紹介いたします。",
      "zh": "接下来我来介绍高岛先生。",
      "jaHtml": "これから<ruby>高島<rt>たかしま</rt></ruby>さんという<ruby>方を<rt>ほうを</rt></ruby><span class=\"target\">ご<ruby>紹介<rt>しょうかい</rt></ruby>いたしま</span>す。"
     }
    ]
   },
   {
    "label": "4. 〜ていただけますか",
    "connect": [
     "動詞て形＋いただけますか"
    ],
    "desc": "请您……。",
    "examples": [
     {
      "src": "2010年12月真题",
      "ja": "学生「先生、日本語で作文を書いたのですが、わたしの作文を見ていただけませんか。」先生「ええ、いいですよ。」",
      "zh": "学生：老师，我用日语写了一篇作文，请您帮我看一下可以吗？老师：好的。",
      "jaHtml": "<ruby>学生<rt>がくせい</rt></ruby>「<ruby>先生<rt>せんせい</rt></ruby>、<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>書い<rt>かい</rt></ruby>たのですが、わたしの<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>見て<rt>みて</rt></ruby><span class=\"target\">いただけませんか</span>。」<ruby>先生<rt>せんせい</rt></ruby>「ええ、いいですよ。」"
     },
     {
      "src": "",
      "ja": "これはお礼の品ですので、包装していただけませんか。",
      "zh": "这是要送人的礼物，麻烦您给包装一下。",
      "jaHtml": "これはお<ruby>礼<rt>れい</rt></ruby>の<ruby>品<rt>ひん</rt></ruby>ですので、<ruby>包装<rt>ほうそう</rt></ruby>して<span class=\"target\">いただけませんか</span>。"
     },
     {
      "src": "",
      "ja": "郵便局へ行く道を教えていただけませんか。",
      "zh": "能请您告诉我去邮局的路吗？",
      "jaHtml": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>へ<ruby>行く<rt>いく</rt></ruby><ruby>道<rt>みち</rt></ruby>を<ruby>教え<rt>おしえ</rt></ruby>て<span class=\"target\">いただけませんか</span>。"
     }
    ],
    "note": "用于请求对方为自己做某事。比「〜てください」更加礼貌的形式有「〜ていただけませんか/ていただけないでしょうか」。"
   }
  ]
 },
 {
  "page": 212,
  "pattern": "謙譲語：〜(さ)せていただきます・お/ご〜いただく/願う",
  "senses": [
   {
    "label": "5. 〜(さ)せていただきます",
    "connect": [
     "動詞ない形＋(さ)せていただきます"
    ],
    "desc": "请允许（我）做……。",
    "examples": [
     {
      "src": "",
      "ja": "では、あした電話をさせていただきます。",
      "zh": "那么，我明天给您打电话。",
      "jaHtml": "では、あした<span class=\"target\"><ruby>電話<rt>でんわ</rt></ruby>をさせていただき</span>ます。"
     },
     {
      "src": "",
      "ja": "じゃ、お先に帰らせていただきます。",
      "zh": "那我先告辞了。",
      "jaHtml": "じゃ、お<ruby>先に<rt>さきに</rt></ruby><span class=\"target\"><ruby>帰ら<rt>かえら</rt></ruby>せていただきま</span>す。"
     },
     {
      "src": "",
      "ja": "まだ熱がありますから、今日も休ませていただきます。",
      "zh": "因为还在发烧，所以今天请允许我再休息一天。",
      "jaHtml": "まだ<ruby>熱<rt>ねつ</rt></ruby>がありますから、<ruby>今日<rt>きょう</rt></ruby>も<span class=\"target\"><ruby>休ま<rt>やすま</rt></ruby>せていただきま</span>す。"
     }
    ],
    "note": "表示讲话人希望得到听话人的认可。"
   },
   {
    "label": "6. お/ご〜いただく/願う",
    "connect": [
     "お＋動詞ます形＋いただく/願う",
     "ご＋サ変動詞詞幹＋いただく/願う"
    ],
    "desc": "承蒙您……、请您……。意思是「〜するのをお願いします」，比「〜ていただく」更加礼貌。",
    "examples": [
     {
      "src": "",
      "ja": "先生に推薦状をお書きいただきたいのですが。",
      "zh": "想请老师给我写推荐信。",
      "jaHtml": "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>推薦状<rt>すいせんじょう</rt></ruby>を<span class=\"target\">お<ruby>書き<rt>かき</rt></ruby>いただき</span>たいのですが。"
     },
     {
      "src": "",
      "ja": "すみません、これを社長にお渡し願えますか。",
      "zh": "对不起，请您把这个交给社长行吗？",
      "jaHtml": "すみません、これを<ruby>社長<rt>しゃちょう</rt></ruby>に<span class=\"target\">お<ruby>渡し<rt>わたし</rt></ruby><ruby>願え<rt>ねがえ</rt></ruby></span>ますか。"
     },
     {
      "src": "",
      "ja": "来月の結婚式にご出席願いたいのですが、ご都合はいかがでしょうか。",
      "zh": "想请您出席下个月的婚礼，您方便吗？",
      "jaHtml": "<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>結婚式<rt>けっこんしき</rt></ruby>に<span class=\"target\">ご<ruby>出席<rt>しゅっせき</rt></ruby><ruby>願い<rt>ねがい</rt></ruby></span>たいのですが、ご<ruby>都合<rt>つごう</rt></ruby>はいかがでしょうか。"
     }
    ]
   },
   {
    "label": "丁寧語の基本・1. ございます",
    "connect": [
     "ございます＝あります的礼貌形"
    ],
    "desc": "礼貌语是说话人为了向听者表示敬意而使用的礼貌表达方式。「ございます」是「あります」的礼貌形。",
    "examples": [
     {
      "src": "2010年7月真题",
      "ja": "客「すみません。レストランは何階ですか。」案内の人「はい、5階にございます。」",
      "zh": "客人：请问餐厅在几楼？向导：在5楼。",
      "jaHtml": "<ruby>客<rt>きゃく</rt></ruby>「すみません。レストランは<ruby>何階<rt>なんかい</rt></ruby>ですか。」<ruby>案内<rt>あんない</rt></ruby>の<ruby>人<rt>にん</rt></ruby>「はい、5<ruby>階<rt>かい</rt></ruby>に<span class=\"target\">ございま</span>す。」"
     },
     {
      "src": "2004年真题",
      "ja": "ネクタイ売り場は2階にございます。",
      "zh": "领带柜台在二楼。",
      "jaHtml": "ネクタイ<ruby>売り場<rt>うりば</rt></ruby>は2<ruby>階<rt>かい</rt></ruby>に<span class=\"target\">ございま</span>す。"
     },
     {
      "src": "",
      "ja": "まだ時間がございますから、どうぞごゆっくり。",
      "zh": "还有时间，请慢慢来。",
      "jaHtml": "まだ<ruby>時間<rt>じかん</rt></ruby>が<span class=\"target\">ございま</span>すから、どうぞごゆっくり。"
     }
    ],
    "note": "「ございます」由礼貌助动词「ござる」和助动词「ます」构成，语气比「あります」恭敬、客气，其否定形式是「ございません」。"
   }
  ]
 },
 {
  "page": 213,
  "pattern": "丁寧語：〜でございます・お/ご〜（美化語）",
  "senses": [
   {
    "label": "2. 〜でございます",
    "connect": [
     "な形容詞詞幹/名詞＋でございます"
    ],
    "desc": "「でございます」是「です」的礼貌形。",
    "examples": [
     {
      "src": "",
      "ja": "はい、JTBでございます。",
      "zh": "您好，这里是JTB旅行社。",
      "jaHtml": "はい、JTB<span class=\"target\">でございま</span>す。"
     },
     {
      "src": "",
      "ja": "この辺りは交通がとても不便でございます。",
      "zh": "这附近的交通很不方便。",
      "jaHtml": "この<ruby>辺り<rt>あたり</rt></ruby>は<ruby>交通<rt>こうつう</rt></ruby>がとても<ruby>不便<rt>ふべん</rt></ruby><span class=\"target\">でございま</span>す。"
     },
     {
      "src": "",
      "ja": "こちらは部長の渡辺でございます。",
      "zh": "这位是部长渡边。",
      "jaHtml": "こちらは<ruby>部長<rt>ぶちょう</rt></ruby>の<ruby>渡辺<rt>わたなべ</rt></ruby><span class=\"target\">でございま</span>す。"
     }
    ],
    "note": "其否定形式是「でございません」。"
   },
   {
    "label": "3. お/ご〜（美化語）",
    "connect": [
     "お＋名詞/動詞ます形",
     "ご＋名詞/サ変動詞詞幹"
    ],
    "desc": "表示说话人对于对方的事物的礼貌语气。",
    "examples": [
     {
      "src": "",
      "ja": "ご両親はお元気ですか。",
      "zh": "您父母身体好吗？",
      "jaHtml": "ご<ruby>両親<rt>りょうしん</rt></ruby>は<span class=\"target\">お<ruby>元気<rt>げんき</rt></ruby></span>ですか。"
     },
     {
      "src": "",
      "ja": "長い間お世話になりました。どうもありがとうございました。",
      "zh": "承蒙您长期以来的关照，非常感谢。",
      "jaHtml": "<ruby>長い<rt>ながい</rt></ruby><ruby>間<rt>あいだ</rt></ruby><span class=\"target\">お<ruby>世話<rt>せわ</rt></ruby></span>になりました。どうもありがとうございました。"
     },
     {
      "src": "",
      "ja": "ご感想はいかがでしょうか。",
      "zh": "请问您有什么感想？",
      "jaHtml": "<span class=\"target\">ご<ruby>感想<rt>かんそう</rt></ruby></span>はいかがでしょうか。"
     }
    ],
    "note": "一般来说，使用「お」的多是和语（训读）词汇，如「お元気（健康）」「お世話（照顾）」「お礼（谢意）」，而使用「ご」的多是汉语（音读）词汇，如「ご住所（地址）」「ご家族（您全家）」「ご感想（感想）」。但有些日常生活中常用的汉语词也接「お」，如「お電話/お時間/お料理」等。"
   }
  ]
 }
];

const N3_UNITS = [
 {
  "unit": 1,
  "title": "〜間/間に",
  "count": 10
 },
 {
  "unit": 2,
  "title": "〜おきに",
  "count": 10
 },
 {
  "unit": 3,
  "title": "からして",
  "count": 10
 },
 {
  "unit": 4,
  "title": "〜こそ",
  "count": 10
 },
 {
  "unit": 5,
  "title": "〜ことはない/こともない",
  "count": 10
 },
 {
  "unit": 6,
  "title": "〜末に/末の",
  "count": 10
 },
 {
  "unit": 7,
  "title": "〜だけ",
  "count": 10
 },
 {
  "unit": 8,
  "title": "〜たまえ",
  "count": 10
 },
 {
  "unit": 9,
  "title": "〜で",
  "count": 10
 },
 {
  "unit": 10,
  "title": "〜てたまらない",
  "count": 10
 },
 {
  "unit": 11,
  "title": "〜てみる",
  "count": 10
 },
 {
  "unit": 12,
  "title": "〜ということだ",
  "count": 10
 },
 {
  "unit": 13,
  "title": "〜として/としての/としては/としても",
  "count": 10
 },
 {
  "unit": 14,
  "title": "なにしろ〜から",
  "count": 10
 },
 {
  "unit": 15,
  "title": "〜に対して/に対する/に対しての",
  "count": 10
 },
 {
  "unit": 16,
  "title": "〜の",
  "count": 10
 },
 {
  "unit": 17,
  "title": "〜ほど",
  "count": 10
 },
 {
  "unit": 18,
  "title": "〜やら〜やら",
  "count": 10
 },
 {
  "unit": 19,
  "title": "〜(ら)れる（可能形）",
  "count": 14
 }
];

const N3_PRACTICE = [
 {
  "unit": 1,
  "title": "第1単元 練習問題",
  "pages": [
   {
    "page": 24,
    "text": "」   なー  て ーーー     3 ば\n第1単元 練習問題\nパート1 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。\nかれ.  せ  たか\n[| 1 | 彼は診が高いうん、       )。 ハシサムだ。\n1 は      2 で       3 に     -。 4 が\nめんせつ        本   さいよう  -       き\n| 2 | 面接を(   )上で、採用するかどうかを決める。\n1 する      2 した       3 している    4 していた\nやす                 へ や 。 かたづ\n 休み(       )うちに、 部屋を片付けましょう。\n1 な      2 の       3 を      4 が\nしんぶん   かつじ   、 おMy            二\n| 4 | 新聞の活字が小さいので、読み(       )。\n1 にくい    2 やすい     3 がたい    4 ぎみだ\nみんな   まえ   やぐぞく      い じょう                 引 才    おな\n[| s| 皆の前で約束した以上(      )、二度と同じようなことをしてはいけない。\n1 に      2 が       3      4 は\nた なかせんせい    がく せい    しか    いっぽう                                        わす\n| 6 | 田中先生は学生を叱る一方(      )、ほめることも忘れない。\n1 窓      2 に       3 二      4 も\nすうねん かいすい おん ど       いっぽう                  _\n ここ数年、 海水の温度が(       )一方芒。\nたか           たか            たか           たか\n1 高くなる   2 高くする    3 高い     4 高かった\nとも         こうえん   さん ぼ                              あめ    走     だ\n 友だちと公園を散歩している(       )、雨が降り出してきた。\n1 あいだを  - 2 うえで      3 あいだに    4 うえは\nふ たり  kz 莹志\n19 | 二人は仕事の(       )、よきライバルだ。\n1 うえの     2 あいだで     3 あいだに    4 うえで\n 皆 の(       )、無事に 頂 上 までたどりついた。\n1 おかげで   2 おかげか    3 おかげだ    4 おかげに\n\n"
   },
   {
    "page": 25,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nさい。\nあいだ                      い じょう        いっぽう          いっぽう\nA 間 に     B  やすい     G以上      D 一方だ      選 =で\nF 上で    G 上に     H うちに    IT うち     本 おかげで\nかいしゃ   はい                        いっしょうけんめい   がん ば\n せっかくこの会社に入った(         )、 一 生 懸命に頑張らなければならない。\nる す            ませや 定      たず\n 留守の(        )、吉田さんが訪ねてきてくれたそうだ。\nきいきん     うんどう             ふと\n[13] 最近あまり運動していないから、太る(     )。\nかのじょ  | 莹游  がん ば                 か ぞく  めんどう  み\n 彼女は仕事で頑張っている(       )、 家族の面倒も見なければならない。\nくすり  にが み              の\n この 薬 は苦味がほとんどなく、飲み(       )。\nわか             あたら    ち しき         きゅうしゅう\n 若い(       )は、新 しい知識をどんどん吸収 しなければならない。\nかれ  で つだ                  しめきり 下   ま   あ\n 彼が手伝ってくれた(          )、締切日に間に合った。\nしけん 。 てんすう で                  しぼうこう き          おも\n 試験の点数が出た(       )、 志望校を決めたいと思う。\nあ                しゅっぱつ  とゅん ぴ\n 夜が明けない(      )、出発の準備をした。\nつ ゆ 已各   きおん たか            しつど たか\n 梅雨の時期に気温が高い(       )、湿度も高い。\n問題3 下の(〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nへん   ず               2    す\n[21| この辺は静かで      やすい 所 だ。 (住む)\nい じょう        べんきょう                  がくせい\n        以上 、しっかり勉強 しなければならない。(学生)\nわたし                    あいだ       ゆき     や              ねむ\n 私 が       間 に、雪が止んだ。 (眠る)\nた なか       に         いっぽう  ぶ か  めんどう      み\n 田中さんは仕事が     方、部下の面倒をよく見ている。 (できる)\nちゅう い じ こう           区楽           しょめい     ねが            よ\n[ 25| 注意事項を      上で、ここに填名をお願いします。 (読む)\nざん  けんこう         う移  3     たも\n 状山は健康を       上で役立つ。 (保つ)\nに ほん                              に ほん  豆帮 か   きょう みな    も                    上\n 日本のマンガを     うちに、日本の文化に 典 味を持つようになった。 (読む)\nパートTI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3・4から一つ選びなさい。\n[1 | 食 事をしているあいだ(       )、ドアのチャイ ムが鳴った。\n.      1 を            2 と              3 に            4 は\n\n"
   },
   {
    "page": 26,
    "text": "かれ やくそく     まも       ねっしん ひと    みんな しんらい\n| 2 | 後は約束をちゃんと守る(       )、 熱心な人なので、皆 に信頼されている。\n1 9に       2 までに        3 直う飼       4 なかに\nすうねん   じゅうたく    か かく   、              いっぽう\n3 | ここ数年、住 宅の価格が(      一方疙。\nあ            あ             あ\n1 上がった    2 上がらなかった 3 上がろう    4 上がる\nりょこう 。 し や ひろ          やく 。 た\n| 4 | 旅行は視野を広げる(       )役に立つ。\n1 までに      2 うえで       3 ように      4 うえを\nわか                      じ かん    たいせつ        き                       点十     Ca                               所\n5 | 着い(   )時間の大切さに気づかなかったが、年を取ってはじめてそれが分かった。\n1 うちは    2 ために     3 おきに    4 だけで\nけいたいでん わ      、        、おお               下已 よ\n[16 | この携帯電話はボタンが大きくて、 お年寄りにもやさしく(       )。\nつか              つか                つか              つか\n1 使いにくい  2 使いやすい   3 使いすぎる  4 使えばいい\nほん             ま   ねむ\n ゆうべ、本を(       )、いつの間にか眠ってしまった。\nよ\n1 読んだうちに            2 読んだときに\nまき                         よ\n3 読んでいるうちに         4 読んでいったときに\nかのじょ   べんきょう       じ かん                        、         起 ちゅう\n 彼女は勉強 する時間がない(       )、ゲームに夢 中 になっている。\nい   いっぱぽう                    い     いっぽう\n1 と言おう一方                2 と言っている一方\nい    おも                   い       おも\n3 と言おうと思って              4 と言っていると思って\nた なか                         たの      いちにち    す   =\n[| 9 | 田中さんに(      )、楽しい一日を過ごした。\nさそ                        さそ\n1 誘ってもらったおかげで       2 誘ってくれたおかげで\nさそ                        さそ\n3 誘ってあげたおかげで        4 誘ってさしあげたおかげで\nに ほん      りゅう がく                 代 ほん ご    べべんきょう ” 、               に ほん    しゃかい   ぶん か       と\n 日本への 留 学(     )、日本語の勉強 だけでなく、日本の社会や文化にも触れて\nみたい。\nき    WA\\ 世上5                  き\n1 が決まった以上          2 が決まったために\n3 することになる以上        4 することになるために\nせんせい し          ろんぶん かんせい\n[11 | 先生が(      )、この論文を完成 した。\nも どう                       もし どう\n1 指導したうちは          2 指導してくれたおかげで\nも どう                       し- だ\n3 指導してもらったうちは       4 指導してもらったうちは\nさかな         ね だん やす\n。 112| この急 は(      )、値段も安い。\nしんせん                        しんせん  ーー 、\n1 新鮮なうえで           2 新鮮なうえに\nしんせん                       しんせん    い じょう\n3 新鮮な一方で           4 新鮮である以上\nえい が                    ばいてん  い\n 映画がまだ(        )うちに、ちょっと売店に行ってくる。\n四                        はじ\n1 始まっている           2 始まった\nはじ                             はじ\n3 始まる              4 始まっていない\n\n"
   },
   {
    "page": 27,
    "text": "問題2? つぎの文の。 災 に入る最もよいものを、1-23-4からーつえらびなさい。\n きのう 。 婦 。 、眠ってしまった。\n1 うちに       2 を           3 見ている      4 テレビ\n[15] ベスの                   大          、 財布を突まれた。\n1 をしている     2 居眠り         3 間に        4 中で\n もう            以上 は、誰にすすめられても絶対\nに吸わないよ。\n1 吸わない      2 タバコを       3 決心した      4 と\n 彼女はきれいな           人気が高い。\n]  人          2  優しい         3 なので       4 うえに\n 鈴木先生が           女                    今回のコンタールに優勝\nできた。\n1 おかげばで      2 熱心に         3 くださった     4 教えて\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n日本には、おぼんや正月が近くなると、世話になった人や目上の人などに物を| 19 |。\nおぼんにおくる物を「お 中 元」といい、年の終わりにおくる物を「お歳暮」という。\nこれは、むかし、おぼんや正月に先祖の祭りをした 行 事に関係がある。先祖を大切に\nするの| 20 |、世話になった人や目上の人にあいさつをし、おくり物をしたのが、この\n「お中元」や「お歳暮」の始まりである。むかしは生活に必要な物、| 21 |、米や魚など\nをおくることが多かった。その習慣は、今も残っていて、食 料 品をおくることが一番多\nい。\n外国人の中には、「日本人は、物をあげたり、もらったりするのが好きな国民だ。」と言\nう人もいる。外国の人に日本人のこの習慣を、| 22 |のは、むずかしいかもしれない。しレし\nかし、このようなおくり物には、「いろいろお世話になりました。 | 23 |、ありがとうご\nざいました。あなたに助けていただいたので、いい生活ができました。これからもよろし\nくおねがいします。 私のお礼の気持ちをこのプレゼントといっしょにおくります。」とい\nう意味があるのである。              「\n\n"
   },
   {
    "page": 28,
    "text": "1 あげることがある         2 おくる習慣がある\n3 かかることがある          4 くれる習慣がある\n1 というくらいで                     2 といえないので\n”3 と同じ気持ちで           4 と違う形で\n1 しかし               2 つまり\n3 それでは              4 たとえば\n[22 |\n1 理解してもらう           2 理解させる\n3 理解される             4 理解してくれる\n[23|\n1 親切でたすけてくれて               2 親切にしてくださって\n3 親切でたすけてもらって     4 親切にしてあげて\n\n"
   }
  ]
 },
 {
  "unit": 2,
  "title": "第2単元 練習問題",
  "pages": [
   {
    "page": 33,
    "text": "たたに トう 2   S] 二\n第2単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2-3.4から一つ選びなさい。\nさけ へん\n11 | このお酒は変なにおい(       )する。\n1 で      2 を       3 の      4 が\nでん わ ばんごう  、 あ                                 也  かくにん\n| 2 | 電話番号が合っている(      )、ちょっと確認してみる。\n1 から     2 ためだ     3 かどうか   4 なら\nちか       かのじょ    じゅぎょう\n 近ごろ彼女は授 業 に(        )がちだ。\nおく        はく        おく        おく\n1 遅れる    2 遅れ      3 遅れない    4 遅れた\nぶん                    でんしゃ                はい\n4 ] 3分(        )電車がホームに入る。\n1 おきに   ・ 2 うちに     3 によれば   4 までに\nつ             つめ  もの の\n| 5 | 甘いですね。ビールが(     )か冷たい物が飲みたいですね。\n1 どこ     2 だれ      3 なに     4 どれ\nさいきん  わかもの  こうどう     おとな                  り かい           、\n| 6 | 最近の若者の行動は、大人たちにはなかなか理解 し(       )。\n1 写くい    2 がたい     3 すぎる    4 はじめる\nはし    、しゅうでん 未 あ 、\n 走っていけば 終電に間に合う(       ) しれない。\n1 かな     2 かも      3 かしら    4 から\nもんだい かいけつ    たいへん   、\n この間題を解決しないと、 大変なことが(       )。\nお                 お\n1 起こるはずがない         2 起こらないようになった\n33  Sそ              お\n3 起こる恐れがある         4 起こらないかもしれない\nろんぶん\n[9 | この論文は5つのパート(       )なっている。\n1 しか     2 まで      3 でも     4 から\nね だん                                    みせ         まる\n 値段から(      )、この店のほうがお得だ。\n1 言っては    2 言うと     3 言え     4 斉っても\n\n"
   },
   {
    "page": 34,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、 下のAJの中からーつ選びなさい。\nおそ\nA おきに  B 恐れ      C がする     D がたい  E がちだ\nなに                                 い\nF か      G か何か     H かもしれない I から  」から言うと\n忆     まえ とお\n[| パン倒さんの前を通ると、 いつもいいにおい(      )。\nみ ま   なに  も\n[ 12 A「見舞いに何を持っていけばいいですか。 」\nB「そうですね。本(       )時間を潰すものがいいと思います。」\nえき                 お\n[13] すみませんが、 駅はどこにある(      )教えてください、。\nけん         ぶどうや\n 3軒(       )不動屋さんがある。\nふゆ  さむ              N 世\n 冬は寒くて、ともすると風邪を引き(     )。\nなふた り  なか\n| 16| A「あの二人は仲がいいね。」\nらいねんけっこん\nB「そうね。もしかして来年結婚する(      2\nむ けいかく    ほ 办<                 しゅ   さかな   ぜつめつ\n 無計画に捕獲すると、この種の 魚 は絶滅する(        )がある。\nだいがく  がくちょうせんせい 、わい ろ  う  二            しん\n 大学の学 长 先生が賭略を受け取るなんて、ちょっと信じ(        )ことだ。\n 第の性格(       )、この仕事に向いていないと思う。\nにちよう ぴび            かいしゃ\n| 20| あしたは日曜日だ(       )、 会社に来なくてもいいよ。\n問題3 下の〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nねんかん     りゅう がく せv *がかつ    ほんとう                       、              わす\n|21| 2年間の 留 学生活は本当に     がたい。 (忘れる)\nトコ      う             し ごだ                わ           つづ\n[22] 子どもが生まれたら、この仕事は       かどうか分かりません。 (続ける)\nゆうえん ち   い              も                      や    と\n きのう遊園地に行ったが、カメラを持っていくのを       ので、号真を撮らなかっ\n>す\nた。 (忘れる)\n 全回のスポーツ大会はいつ       か知っていますか。 〈 行う)\nよ しん  =         たてもの こ      おそ   a      とうかい\n[25 | 余震が続いたら、この建物が      恐れがある。 (倒壌する)\nりょう り   つく         なん   ちょう み りょう                はは   き                い\n この 料理を作るとき、何の調味料を        か、母に聞いてみます。 (入れる)\nかれ.   なし                           ほんとう\n 彼の 話 はもしかして      かもしれない。 (本当だ)\n\n"
   },
   {
    "page": 35,
    "text": "パートLI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3.4からーつ選びなさい。\n[ 1 ] 10メートルおき(       )木を植える。\n1 と      2 で       3 に      4 が\n[| 2 ] 熱があるので、 寒気(       )する。\n1 を      2 に       3 が      4 で\n このプレゼントは(      )かどうか分かりませんが、どうぞお受け取りください、。\n1 お気をつける 2 お気にする    3 お気になる   4 お気に入る\n[4 ] これはよくあり(      )穴敗だから、あまり気にしないでください。\n1 がちで    2 がちな     3 がちだ    4 がちに\n| s ] ライターか(       )火をつけるものを貸してください。\n1 なにか    2 なにも     3 なんでも   4 なに\n[_e | あした晴れたら、 友だちは遊びに(       )。\n1 出かけたことがある        2 出かけるかもしれない\n3 出かけたところだ         4 出かけることにする\n だれでも(       )思い出がボーつやニつはあるだろう。\n1 忘れがる    2 忘れるような   3 忘れたまま   4 忘れがたい\n 日本という国は四つの大きな島(       9\n1 からなっている          2 までになっている\n3 ようになっている         4 そうになっている\n| 9 | 甘いものを食べ過ぎると、是歯になる(       )ので、二分 注意してください。\n1 ことがない           2 おそれがある\n3 ようとする           4 こともあれば\n 今の状 況(      )、適 未には観 客 が 百万人を超えると予想される。\n1 うちに    2 だけあり    3 によっては   4 からすると\n この1ヶ月 間、(       )天気が多かった。\n1 曇りがちる   2 曇りがちの    3 曇ったうちの 4 曇りうちな\n 後は足を(        )で、学校を休んでいる。\n1 怪我したかなにか         2 作我しているかどうか\n3 怪我したかどうか          4 倍我しているかなにか\n\n"
   },
   {
    "page": 36,
    "text": "回  ぶん  过                   かのじょ\n[313 ] もう30分も待っているんだ。もしかして彼女は(        )。\n1 来なくてはいけない                2  来てもいいだろう\n3 来ないかもしれない               4 来ていただろう\n問題2 つぎの文の ”让 。 に入る最もよいものを、1・2・3.4からーつえらびなさい。\n 彼女は5ヶ国語も話せる。 貿易会社                     大             だ。\nじんざい            とつ               类\n1 人材         2 実に           3 得がたい      4 には\n 家から空港までどのぐらい                     太             で調べます。\n1 かかる        2 か             3 インターネット 4 時間が\nかれ  じつりょよく    MM 、  、                                     ど りょく  ひつよう\n] 1e| 彼の実力から言えば、                         廊                の努力 が必要だ。\n1 には          2 なる           3 一流選手に 4 相当\nうんてんめんきょしょう                                 しょうめい         み\n 運転免許 证                 女          証明するものを見せてく\nださい。\n1 なにか        2 あなたの        3 か           4 身分を\nこん や たいふう  じょうりく          きょうなぶう                                   はち う\n 今夜台風が 上 陸するそうだ。 強風               大                       、 鉢植\nえなどはベランダに置かないでください。\n1 ある          2 麗れが         3 ので         4 の\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1・2・3・4から\nーつ選びなさい。\nヤンさんへの手紙\n| 拝啓\nお元気ですか。\n日本に来てからもう3か月たちました。本当に早いです。 今、私は中村さんという人の\n家で| 19 |、大学で日本語を勉強しています。 中村さんの家は、お父さんとお母さんと\n息子さんの3人家族です。皆英語が少し分かるので、初めは英語と日本語を使っていました\nが、 今はたいてい日本語だけで話しています。 息子さんの 誠 君は大学の2年生で、一週間\nに3日家庭教師のアルバイトをしています。アルバイトをしながら和勉強するのは| 20 |、\n日本の大学はアメリカの大学より宿題がずっとすくないので大丈夫だ、と誠君が言ってい\nま した。日本の大学生はアメリカの大学生| 21 |。週末だけでなく、普通の日でもよく\nまこと\nお酒を飲んだり、コユンサートへ行ったりして遊びます。 誠 君の話では、日本人は大学受験\nのためによく勉強しますし、会社に入ったらよく仕事をしますから、大学の4年間はよく遊\nんだそうです。アメリカとずいぶん違いますね。\n\n"
   },
   {
    "page": 37,
    "text": "今度の夏休みに私の両親が日本に遊びに来るかもしれません。両親をいろいろなところ\nへ連れて| 22 |。ヤンさんは夏休みに何をするつもりですか。 予定を教えて下さい。\n\nこれから著くなりますが、| 23 |。\n\n敬具\nスミス\n\nLe |   「\n\n1 ホームステイをしても       2 ホームステイをしたら\n\n3 ホームステイをしながら       4 ホームステイをすれば\n\n1 大変ではないと思いましたが     2 大変ではないかと言いますが\n\n3 大変だろうと言いますが       4 大変だろうと思いましたが\n[31 |\n\n1 ほどよく勉強しません        2 と同じように勉強します\n\n3 あまり勉強しません         4 よりよく勉強します\n[22 |\n\n1 行くと思います           2 行こうと思っています\n\n3 行けると思います          4 行けばと思っています\n[23 |\n\n1 体に気をつけなさい         2 体にお気をつけなさい\n\n3 お体に気をつけください       4 お体に気をつけてください\n\n條\n\n"
   }
  ]
 },
 {
  "unit": 3,
  "title": "第3単元 練習問題",
  "pages": [
   {
    "page": 44,
    "text": "第3単元 練習問題\nパート1i 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3-4から一つ選びなさい。\nあ す  てんき よ ほう     きん き ちほう   かんとう ち ほう              記    おおあめ\n| 1 | 明日の天気予報です。近畿地方から関東地方(      )かけて、午後から大雨になる\nでしまう。\n1 を      2 まで      3 が      4 に\nはな 。 かた        かれ じもと ひと     -\n| 2 | 話し方(      )すると、彼は地元の人ではないようだ。\n1 より     2 ほど      3 から     4 でも\nちゅうしゃ   おお\n 注 射を      )がる子どもが多い。\n1 嫌だ     2 嫌な      3 嬢で     4 嫌\nひっこ  て っだ           3  と    、\n| 4 | 引越しを手伝ってくれた(      )、ごちそうしてあげましょう。\n1 かわりに   2 かどうか    3 おかげで   4 うえに\n回 来世 あ    ね     っ  か 世      、\n[| s | ゆうべ窓を開けたまま寝たので、どうも風邪(   9。\n1 はず      2 よう       3 ところ     4 ぎみ\nがいこくじん            おだ革     しゅうかん   ふ し ぎ           、\n| 6 | 外国人から(     )、 私 たちの 習 慣には不思議なものもあるだろう。\n1 見よう    2 見た      3 見れば    4 見るなら\nひと 。 はな 。 かた      ごうまん 。 ひと     “\n あの人の話し方(       )、傲慢欢人产。\n1 からして   2 と曹って    3 として    4 かどうか\nあに げん き       びょう き\n 兄は元気な(     )、病 気のふねりをしている。\n1 くせに    2 とどで    3 うえに    4 くせで\nかれ 。 はこね     す    ところ    しん\n[9 | 彼は箱根(        )住みやすい 所 はないと信じている。\n1 より      2 ぐらい      3 ごろ      4 ばかり\n 他人に何を言われても、彼女のことを信じ        )います。\n1 きって     2 たい      3 おねわって    4 はじめて\n\n"
   },
   {
    "page": 45,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のヘーJの中から一つ選びな\nさい。\nA かなにか  B からして でC から     D から見ると  Eがる\nき みみ\nF かわりに   G 気味       H きれない IT くせに       J ぐらい\nびょう き        はは            あね  の ょう り   つく\n[il| 病気になった母の(       )姉が 料 理を作ってくれた。\nふたり           りょう 9         ちゅうもん      た\n112 | 二人だけなので、料 理をたくさん注文したら食べ(        ) 天\nひと めんせつ       はな かた        よわ    \\ん\n さっきの人は面接のときの話し方(       )弱さが感じられる。\nあたた         と\n[14| ラーメン(      ) 温 かいものを食べましょう。\nミうしょう       すす                い ちょう       あせ\n[1s] 交渉がうまく進んでいないようで、部 長はどうも焦り(     )だ。\nいなか ひと           とかい せいかつ   に    はや   、\n 田舎の人(     )、 都会の生活リズムが速すぎるかもしれない。\nだいがくせい                かんたん けいさん\n 大学生の(       )、こんな簡単な計算もできないなんて。\nまいにちゆうしょくご   ぶん        こうえん さんぼ\n 毎日夕食後、20分(        )公園を散歩します。\nとり 。 あき        信ゆ       に ほ\n この鳥は衝(       )生にかけて日本にやってきます。\nきいきん あぶら      い季や     ひと おお\n 最近、脂 っぽいものを嫌(        )人が多くなった。\n問題3 下の(〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nい              所                      -\n[21] そんな      きったことを、 言わなくてもいい。 (分かる)\n、           一   、おお    こわ        」\n[22| ネズミを       がる子どもが多い。 (怖い)\nかの じ ょ    学                  あざ  けっせき\n 彼女は仕事が       かわりに、 遅刻や欠席などが多い。 (する)\n 彼が書いた字はよく__ くらい小さい。 (見える)\nしょうせつ すずき               =               よ\n[25| その 小説、 鈴木さんも       たがっているみたいよ。 (読む)\nと                 たいぐう                                     5\n この仕事は      かわりに、待遇がいい。(きつい)\nとくばいひん        じ かん                        う\n 特売品はたった1時間で、        きれてしまった。 (売る)\nパートI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3・4から一つ選びなさい。\n 昨夜       今朝にかけて雪が降り続けている。\n1 も            2 から            3 は           4 ほど\n\n"
   },
   {
    "page": 46,
    "text": "かのじょ  ひょうじょう          なに\n2 | 彼女の表 情(        )、何かがあったみたい。\n_    1 からすれば     2 からでは        3 によって       4 のでは\nいま        て 。 はな          ぼく          かい ぎ   で\n| 3 | 今、ちょっと手が離せないので、僕の(       )会議に出てくれない?\n1 ために       2 かわりに       3 ように       4 ところに\n時  よるおそ            じ あい  み          すこ           ぎ み\n| 4 | きのうは夜遅くまでサッカー試合を見ていたので、少し(       )気味だ。\nつか              つか               つか              つか\n1 疲れる        2 疲れて          3 疲れ          4 疲れの\n、                  かれ        じゅけんべべんきょう\n| 5 | ゲームばかり(        )、彼はまじめに受験勉強 していないことがわかる。\nおも\n1 やっていないと思うが           2 やっていないことからして\nおも\n3 やっていると思うが             4 やっていることからして\nかれ  さいきん  けい ば   む ちゅう   ながねん  ちょきん\n6 | 彼は最近、競馬に夢 中 で、 長年の貯金を(        )。\n1 使いきってしまった                2 使いたくはない\nつか                               つか\n3 使われてしまった              4 使わないでください\n*のじょ    たんじょう び    なに\n A 「彼女のお誕 生日に、 何をプレゼントしたらいいかな…」\nゝのじょ  あたら\nB「そうね。彼女は 新 しいかばんを(       )みたいよ。」\n1 ほしい                         2 ほしがっている\n3 ほしくない                      4 ほしがらない\nやま だ          ほんとう                               なに   おし\n 山田さんは本当のことを(       )、何も教えてくれなかった。\nし                                1\n1 知っているくせに                 2 知っているおかげで\nし                                是\n3 知るかどうかについて              4 知ることだけでなく\nこんど 从  和             や ちん AA         こうつう 、 ちあ ん\n[ 9 | 今度引っ越してきたところは、 家賃が安い(       )、 交通が不便だ。\n1 くせに                         2 かわりに\n3 につれて                        4 からして\nまいにち し ごと   お                     にちよう ぴ\n 毎日仕事に追われていて、せめて日曜日(        )。\nす                             やす\n1 ぐらい休まなくてもいい       2 ほど休まなくてもいい\n可                           ややま\n3 ぐらいは休みたい                 4 ほど休みたい\nゆうえん ち                   へ や  そう も   てつだ\n11 | 遊園地に(       )かわりに、 部屋の掃除を手伝うね。\n1 連れて行ってもらう                2 連れてきてあげる\n3 連れてきてくれる                 4 連れて行ってほしい\nさいきん  た       让二\n[12 | 最近、 食べすぎで少 し(       )だ。\n1 ふとるらしい            2 ふとりぎみだ\n3 ふとくなったみたい                4 ふとっていくようだ\nなかむら     か とう                   ひとこと かのじょ はな     ・\n[13 | 中村さんは加藤さんのことが(       )、一言も彼女と話さない。\n\n"
   },
   {
    "page": 47,
    "text": "1 好きなくせに                   2 好きなかわりに\n3 好きぐらいで                   4 好きだから\n問題2 つぎの文の。 娘 に入る最もよいものを、1・2-3.4からーつえらびなさい。\n 今回 入 社した新人は礼儀正しい            可愛が\nられている。\n1 うえに        2 気が利く        3 皆に        4 ので\n[15] 日本人は初対面の人とあいさつをする時、                  娘          。\n1 かわりに      2 提手の         3 お辞儀を      4 する\n 客 の                   女           値段がちょっと高い。\n1 いうと        2 から           3 立場         4 この商品の\n この三適 間、            しまった。\n1 無理な        も和〒           3 仕事を        4 疲れきって\n 試合の           到                   落ち着いている。\n1 くらい        2 前に           3 彼女は        4 不思議な\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n\n日本には古い町がたくさんあります。\n\n款 都や奈良は、たいへん古い町ですが、鎌倉も古い町です。\n\n鎌倉は、東京の南、 50キロ| 19 |。町の北と東と西には山があって、南には海がありま\nす。木や花がたくさんあって、 静かで、きれいな町です。\n\n今から800年ぐらい前に、ここで 侍 の政治が始まりました。長い間、日本の経済、政\n治の中心は、西日本にありましたが、この時、| 20 |、東日本に、新しい政治の中心をつ\nくりました。そして、侍たちは、 中国の伏 教 の勉強をして、お寺をたくさんたてました。\n[| 21 |、いまも、鎌倉には古いお寺がたくさんあります。\n\n鎌倉は、 歴史の古い町ですから、日本人も、外国人も、おおぜいけんぶつに行きます。\n春や秋には若い人たちがハイキングに行きます。夏には海で泳ぎます。つりもします。 鎌\n倉は、 東京| 22 |から、休みの日には、人がおおぜい遊びに行きます。\n\n鎌倉には古い大仏があります。前はお寺のたてものの中にありましたが、 1500年ごろ海\nから大きい津淡が来て、| 23 |。 いまも、大仏は、たてものの中にはありません。雨の\n日も、風の日も、天気のいい日も、外で人びとをむかえています。\n\n-                           29\n\n"
   },
   {
    "page": 48,
    "text": "1 でぐらいのところにあります        2 定りのところです~\n3 しか遠くないです            4 ほどのところに近いです\n1 侍たちが弱くして              2 侍たちが古くなり\n3 侍たちが強くなって                      4 侍たちが新しくなって\n1 しかし             2 それに\n3 和过                  4 だから\n   1 より近い            2 から近い\n3 を近くする                4 と近づいている\n1 たてものをおとしました          2 たてものをなくしました\n3 だでやものめがなくだなりました        4 だでものがこわしました\n\n"
   }
  ]
 },
 {
  "unit": 4,
  "title": "第4単元 練習問題",
  "pages": [
   {
    "page": 53,
    "text": "            第4単元\n人Ar  > ーー     てに                     -\n第4単元 練習問題\nパート1 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3・4から一つ選びなさい。\nにちよう 还   ときどきこうえん   さん ぼ\n 日曜日は時々公園へ散歩しに(       )ことがある。\n1 行った       2 行け          3 行く         4 行けば\nし ごと          あと          こん や             おも    き      の\n[ 2 | 仕事のことは後にして、 今夜(       )思い切って飲も う。\n1 記事        2 くらい        3 とか        4 まで\nすず き          らいげつけっこん\n A「鈴木さんは来月結婚するんだって。」\nB「ヘーえ、(      )ことは聞いていないよ。」\n1 こんな     2 そんな      3 あんな     4 どんな\nかい ぎ   とき     まえ       しょるい   よう い\n| 4 | 会議の時は、前もって書類を用意する(       )。\n1 なあ      2 こと       3 写るう     4 だい\nまま           しゅっぱつ  まえ かれ れんらく 、と    紀まうだMy 、\n| 5 | 困ったこと(      )、出 発する前に彼と連絡が取れない 状 態だ。\n1 が          2 記           3 で          4 も\nいま                            、         ゆうがた          いえ      ピリ)\n[6 | 今のスピードだと、夕方には家に着く(      )ができる。\n1 記を         2 もの          3 ため         4 の\nらいしゅう       なつやす       はい             かいがいりェこう     い\n 来週 から夏休みに入るので、海外旅行に行くこと(        ) した。\n1 を          2 が           3 に          4 も\nねん       ひら\n オリンピックは4年(       )開かれる。\n1 という       分 总区既         3 によって      4 あいだ\nこん や  かれ   あ 内 やく そく       、  きゅうよう  、はい        上 てい\n[| 9 | 今夜、後と会う約束をしたが、急用が入ったので予定をキャンセルすることに\n(      )。\n1 なくなった     | し計          3 窓きだ       4 なった\nよ 4    えき かいさつぐち ま  あ\n 吉田さんと駅の改札口で待ち合わせをすることに(       )。\n1 なっている     2 なりたかった     3 なりたい      4 なる\n\n"
   },
   {
    "page": 54,
    "text": "問題2? つぎの各文の(     )に入れる最も適当な言葉を、下のAー」の中から一つ選びな\nさい。\nA こそ    B その    C こと  。 Dことがある EE ことができる\nF ことに   G ごとに   H ことにする IT ことになっている\n[辐] A rz うすれば天 夫 夫ですか。 」\nB「いや、(      )やり方ではだめなんだ。」\n この地域は時々地震が起こる(       )。\n 指定地域以外の場所に自転車を止めない(       和\n[14| 2ヶ月(       )水道 料 金を払うことになっている。\n[15] 今で       )突って言えるが、当時は本当に恥ずかしかった。\n この辺は、 夏の夜になるとたくさんの 蛍 を見る(       )。\n 天学を卒業 してから、 故郷に帰る(       )。\n うれしい(       )、 息子が有名な会社に 就職できた。\n いっ始業 式や卒業 式を 行 うかは、 学校が決める(       )。\n 応募者は男性13名、女性20名なので、 合計33名(       )。\n問題3 下の(     )の中の言葉を適当な形に変えて、文中の     に書きなさい。\n[21 | 健康のために、これからタバコを       ことにした。 (吸う)\n[22]        ことに、彼は 急 用で来られなくなった。 (残念)\n 目覚まし時計を5分ごとに       ように設定した。 (鳴る)\n 国立博物館に二回ぐらい      ことがあります。 (行く)\n[25] 歩きながらタバュを      こと。 (吸う)\n 鈴木さんは来年、仕事で中 国に        ことになった。 (行く)\n その美術 館に行けば、日本の浮世絵を 。 ことができます。(見る)\n\n"
   },
   {
    "page": 55,
    "text": "パートTI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3・4からーつ選びなさい。\n| 1 ] 廊下で騒いだり走ったり しない(        )。\n工 朗     2 もの      3 ところ    4 かい\n[ 3 ] 鈴未さんという方がいますか。 (   )方にこの小包みを渡してくれませんか。\n1 この     2 その      3 あの     4 どの\n このマンガは 小 学生の頃に(       )ことがあります。\n1 読む     2 読める     3 読めば    4 読んだ\n| 4 ] 今を一生懸命に生きること(        )、 成功の近道だ。\n1 こと     2 から      3 には     4 こそ\n| 5」(      )とまあ世。 クラスメートの中に 私 と同じ名前の人が二人もいた。\n| 6 | この村には季節      )様々な 行事がある。\n1 这杰      9 ご才      3 ことよ記     4 どどに\n 予定より15分遅れるということは、講演は9時45分から(         )。\n1 終わるということになる       2 終わることができる\n3 始まるということになる       4 始まることができる\n 田中さんと約束をしたので、今夜はお酒を飲みに(       )。\n1 行かかいことがあった        2 行くことがある\n3 行かないことにした         4 行くことにした\n| 9 | この小説の詩人公は超 能力 を持っていて、 未来のことを(      4\n1 予知するかもしれない       2 予知するようになった\n3 予知することにした        4 予知することができる\n 新学期は4月8日から(        )。\n1 始まることになっている       2 始まることをした\n3 始めることにしている        4 始めるおそれがある\n 彼は足を怪我して入院しているので、あしたの吉合に(      )。\n1 出られないことにした       2 出きないことにした\n3 出られないことになった      4 出さないことになった\n (       )ことに、その人気女人が昨夜自殺したそうだ。\n\n"
   },
   {
    "page": 56,
    "text": "1 和驚かされた           2 驚いた\n3 驚いている            4 驚かせた\n 今年の夏はあまり臣くなかったので、クーラーを(      )。\n1 つけてはいけない         2 つけなければならない\n3 つけないこともあった       4 つけてもいいこともあった\n問題2 つぎの文の_。 文 に入る最もよいものを、1-2-3.4からーつえらびなさい。\n 水曜日から            を 行 うことになった。\n1 本社で      2 の          3 新人研修 4 東京\n| 15 | まだ時間があるので、                  女            ことにした。\n1 公園を      2 散歩する       3 の         4 近く\n[16] 先日同僚が私を家に呼んでくれたのだが、 驚いた\n            は 私の小学生の時のクラスメートだった。\n1 その        2 ことに        > 当人人        4 同僚の\n A「来週 また来ます。」\nB「じゃ、          きてください。」\n1 ときに    2 連れて     3 その     4 田中さんを\n あしたの           女                   ことになった。\n1 来てくれる 2 授業参観    3 母が     4 には\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1-2・3・4から\nーつ選びなさい。\nアメリカでは、口に物を入れながら話をしたり、食事中に大きな音を立てたりすると、\n| 19 |。しかし、日本では食事中様々な音を開く[| 20 |。音を立ててすすってもかまい\nません。スープを飲む時、そばを食べる時、ズルズル音を立ててすすっても問題ではあり\nません。コーヒーやお茶を飲む時でも大丈夫です。はじめは変な気持ちがしましたが、\n| 21 |何でもなくなりました。| 22 |私にもコーヒーをすする習慣がついて、アメリカ\nに帰ってきて、すぐ母に注意されました。\nアメリカで日本語を勉強した時、日本語についてはいろいろ習ったが、日本の文化や習\n慣についてはクラスで全然習いませんでした。日本人の家族と一緒に生活してはじめて、\n日本人が実際にどんな生活をして、どんな習慣を持っているのか| 23 |、とても良い経験\nになりました。               」\n。\n\n"
   },
   {
    "page": 57,
    "text": "1 両親からあまり言われません           2 よく両親から叱らせます\n3 両親からあまり叫らせません         4 よく両親から注意されます\n1 ことにします                 2 ことあなり頻した\n3 ことがありました                4 ことができますずす\n| 21| 1 慣れてあげたら                       2 慣れておいたら\n3 慣れてしまうと                   4 慣れてみると\n[22」\n1 知っているうちに                 2 やっているうちに\n3 知らないうちに                  4 やらないうちに\n1 よく分かって                    2 とうとう理解して\n3 あまり知らなくて                4 よく知っていて\n\n"
   },
   {
    "page": 58,
    "text": "第S単元\n\n41. 一ことはない/こともない\n\n接千 効周辞事形十ことはない/こともない\n\n说明 “不必……”\\、“用不着……”。表示没有必要做某事。\n\n例句“人着从一人习商任志感已百二上直人丰UN 过帮在基管人ww大己傈过于LTCU去5上上。\n【2009年7月真题J/你不必觉得是你一个人的责任。如果那样烦恼下去的话,身体会搞震的。\n和A志四器具仔厅四区俩利去与大从、丰< 工下困户丰八DO大办己、扣志和区凌二上二\n芯L 【2008年真题了 那个器械似乎的确很方便,但是即使没有也不发稚。因此没有必\n要特意去买。\nへ電話で話せばいい、 わざわざ行くことはない。/全乱計行了。不必百意去。\n\n注意 相当了手「こする必要はない」.用考濁活人対対方的忠告和効告等。常和副司「わざわぎ\n(特意)」 呼应使用。\n\n42、 一二\n\n接续 v\\形容词词干/全形容词词干十去\n\n说明 “……度\"“……之大”表示性质和状态的程度。\n\n例句“和A 私 部屋四庆喜汪二四部屋上大体间 已习才。K2004年真题]/我房间的大小和这个房\n间差不多。\nへその 尊om绷坟人 敬人关。K2000年真题]/令我吃惊的是那个包那么轻。\n入窗王昨四视六法3776又一下几苹才。/富士山的高度为3776米。\n\n注意”形容词词干接 [~ 闪」 ,可构成表示程度的名词。\n\n43. ー最店に\n\n接续“动词 [<v\\玖形」 /和名词十中十最中让\n\n说明 “正在……:的时候”。表示某个动作正在进行中。\n\n例名 人へ電話している最中に、誰かが玄関に来た。 【2002年真題】/正在打番的時修,有人送\n屋了。\nA 食事の最中に、お 客 雪儿泵来关。/正在吃饭的时候,客人来了。\n和元也已在见<V\\鸭最中[= 、传芝志万。/正在看电视的时候,停电了。\n\n注意，用 [~最中世、~关」 表示前项正在做某事时,后项突然发生了意外的、突发的事情。\n\n\n"
   }
  ]
 },
 {
  "unit": 5,
  "title": "第5単元 練習問題",
  "pages": [
   {
    "page": 62,
    "text": "第5単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の      )に入れるのに最もよいものを、 1-2・3-4からーつ選びなさい。\n| 1 ] 彼女はアメリカに行くことを親に(        )言わなかった。\n1 所过     2 さえ      3 ばかり     4 だけ\n| 2 | たいした 病 気ではないので、 心配すること(       )ない。\n1 が      2 に       3 は      4 も\n その闘題についてはいま 調 査の(      )なので、 何も申 レし上げることはでき ませ\nあ。\n1 最中     2 最後      3 最上     4 最低\n| 4 ] 今朝, 朝寝坊をして何も食べ(      )会社に来た。\n1 ずで     2 なしで     3 ずに     4 ず\n| 5 | この 曲 はそんなに 難 しくないので、(       )すぐできるようになるよ。\n1 練習ほどしなければ        2 練習 まですれば\n3 練習 だけしなければ        4 練習 さえすれば\n[ 6 | きのうは母に3時間も家の掃除を手伝わ(       )。\n1 された    2 させた     3 なかった   4 られた\n A 「毎日スポーツグラフに通っていますか。」\nB「いいえ、金曜日と日曜日       )行かないです。 」\n1 しか     2 だけ      3 でも     4 から\n 楼mw(        )は言葉では 表 現できないほどだ。\n1 美しき    2 美しい     3 美しく    4 美しくて\n[了| ここまで来たら、 頑張る(       )。\n1 おかげだ   2 しかない    3 ためだ    4 だろう\n 経済       理由で、学校を 中 退した。\n1 上の     2 中の      3 内は     4 下の\n\n"
   },
   {
    "page": 63,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nさい。\nA ことはない  B さ で 最晶に    D さえ    E ば\nF \"させられた GOGしか H しかない 1I 上の 』 ず\nしょく ぶつ  きむね         よわ\n この 植 物は寒(       )に弱いです。\nしゅ   あそ      おとな                 お ちゅう\n この種の遊びは大人で(       )夢中 になっている。\nしゅうでん  お                 かえ\n 終 電が終わったので、タクシーで帰る(      )。\nかれ  いえ  かえ      なに  い                    七\n 彼は家に帰ったら、何も言わ(      )に、ソファーに腰をかけていた。\nちゅうもん               か    い\n15 | インターネットで 注文すればいい。わざわざ買いに行く(       )。\nいま  じ だい    かね  、 も                      MO     兰求\n 今の時代はお金さえ持っていれ(      )、どこに行っても困らない。\nつか               ていでん\n コンピューターを使っている(       )、停電した。\nなか 、きゅう  いた         はんぶん       大\n お腹が急に痛くなったので、半分(        )食べなかった。\n 人々は彼の男気と行動に感動(       )。\nがかれ.    も .選あ         つ   あ       でん わ\n 彼とは仕事(        )付き合いでよく電話をする。\n問題3 下の(〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nかれ\n そのことは後にしか       。 (言う)\nいちもん ま ちが     加           まんてん  、 と         、\n その一問間違いさえ       、満点が取れるはずなのに。 (する)\nとお               むら  おく  い                    ある\n バスが通っていないので、その村の奥に行くには、       しかない。 (歩く)\nミ     まあ            はは                なら\n 子どもの頃、いやいやながら母にダンスを       。 (習う)\nべつ                           ていねい                      だい ヒ       いそ\n[25| 別に       ことはない。 丁寧にやっていくことが大事だ。 (急ぐ)\n 天気さえ       、ハイキングにでも行きたいなあ。 (いい)\nないしょ        おし\n あなたにしか      から、 内緒にしてね。 (教える)\nパートLI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3-4から一つ選びなさい。\nき じ  ト   みず           わ\n この記事を読んで水の(       )がよく分かった。\nたいせつ                                   たいせつ                                        たいせつ                                   たいせつ\n1 大切で        2 大切           3 大切だ       4 大切き\n\n"
   },
   {
    "page": 64,
    "text": "くすり                ず つう      おさ\n2 | この薬 さえ(      )、頭痛がすぐ治まるよ。\n1 飲めば    2 飲むと     3 飲んでも   4 飲むから\nなか      きょく                  かのじょ\n[ 3 ] クラスメートの中でこの 曲 をうまく弾けるのは彼女しか(      )。\n1 ない          2 いない          3 ある          4 いる\nか Sd        き            まえ む    かんが\n| 4 | 過去のことを気に(      )、前向きに考えなさい。\n1 しずに          2 せずで            3 せずに          4 なくて\nせきにん かれ                 きみ     、    、あやま\n| 5 | 責任は彼のほうにあるから、君がわざわざ 謝 る(   )。\n1 こともある     2 こと区した      3 ことをする     4 ことはない\nかいじょう              かいしゃ          はい             もど      い\n|e| 会場に(   )、 会社から連絡が入って、「すぐに戻れ」と言われた。\nな          きいちゅう                        8           らいだ\n1 向かっている最 中 に          2 向かっている 間 は\n和む                                       む\n3 向かいていながら                 4 向かっているところは\nりょうしん  、わたし         けっこん   はんたい                   けっこん ひ ろうえん\n| 7 | 両親が私たちの結婚に反対しているので、結婚披露宴に(   )。\nしゅっせき                             ゆっせき\n1 さえ出席してくれなかった     2 さえ出席するだろう\nしゅっせき                                   しゅっせき\n3 出席しなければならない           4 出席したほうがいいだろう\nさきいとう             ズんご し   し- ざま   や\n|8 | A「斉藤さん、どうして弁護士の仕事を辞めたんですか。」\n    B「いや、自分から辞めたんじゃなくて、(   )んだ。 」\n1 辞めさせてください         2 辞めさせていただいた\n将                                       可\n3 辞めさせられた                      4 辞めさせてもらった\nふた        しょうひん    がいけん                 、まった    おな              、\n[| 9 | この二つっの 商品は外見からすれば 全 く同じなんだけど、(   )。\nき のう  おな                               き のう  .参\n1 機能も同じだ            2 機能が異なる\nき のう    もんだい                           き のう    もんだい\n3 機能には問題がない         4 機能には問題がある\nせんしゅう           いた     は い しゃ\n[10] 先適からずっと歯が痛くて、歯医者に(      )。\n1 見ることになった          2 見てあげるしかない\n3 見たことがない           4 見てもらうことにした\nよる         まぐ.直ぐ          なに             ね\n[IT] きのうの夜はあまり 食欲がなくて、何も(   )寝た。\nだ   っ\n1 食べずに                            2 食べなくてでて\nた                                       花\n3 食べてから             4 食べるいじょう\nゆうえん ち   い    とき                       おどろ\n|12 | はじめてその遊園地に行った時、スケールの(      )に 驚いた。\n1  天きいこと                     2  大きいもの\nおお                                    おお\n3 大きさ         ]     4 大きいの\nVa   かい ぎ                     けいたいでん わ    な    六\n| 13| 午後の会議の(   )に、携帯電話が鳴り出してぴっくりした。\n1 最申    3 过世      3 うえは    4 ぐち5い\n\n"
   },
   {
    "page": 65,
    "text": "第 単元\n\n问题2 つぎの文の_ に入る最もよいものを、1・2・3.4からーつえらびなさい。\n 最近                   女            よらうらになった。\n\n1 使える       2 お年寄り       3 パソコンが    4 でも\n 試験の            しておいてください。\n\n1 鳴らない      2 携帯電話が      3 最申に      4 ように\n この番組に          、すぐに有名になるだろう。\n\n1 いれば       有  顔           3 さえ         4  出して\n メールで送れば                   娘            ことはない。\n\n1 いい         2 持っていく      3 わざわざ      4 んだから\n パソュコンが壊れてしまった           太                     しかない。\n1 を          2 買う          3 ので         4 新 しいの\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1-2・3-4から\n\nーつ選びなさい。\n\n人間は、不可能と思われたことを次々と| 19 |。例えば、鳥のように空を飛ぶことは、\n人類が大昔から持っていた願いでしたが、今日では 、 飛行機によってどんな鳥よりもよく\n空を飛べるようになりました。\n\n人間は、どのようにして、不可能なことを| 20 |のでしょうか。私は、それは発明と練\n習によって行われたのだと思っています。 飛行機が発明されて、空を飛べるようになりま\nしたが、私は自分で飛行機を操縦して空を飛ぶ| 21 |。そのための訓練を| 22 |のだか|-\nら、そんなことができるはずがありません。\n\n私は、先ごろ 、米国の宇宙飛行の研究所の施設を参観しました。そこには複雑な機器\nや装置が設けられていました。それとともに 、 飛行士たちが厳しい訓練を受けているのも\n見ました。 宇宙飛行という 仕事に、多くの発明が使われる| 23 |、歳しい練習が積まれ\nているのです。\n\n[19] 1 可能になってきました          2 実現していきました\n3 可能にしてきました             4 実現になっていきました\n\n"
   },
   {
    "page": 66,
    "text": " 1 実行することはない         2 実行させられた\n3 実行さきえすれば                       4 実行してきた\n1 ことがありました                 2 こと人注できまぜん\n3 ことはありません                   4 ことにしません\n1 受けていない                 2 受けたくない\n3 受かっていない                   4 受かりたくない\n区区区                         2 さいちゅうに\n\n    3 -くらいに           ，            4 と同時に\n\n\n"
   }
  ]
 },
 {
  "unit": 6,
  "title": "第6単元 練習問題",
  "pages": [
   {
    "page": 71,
    "text": "第6単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・-3-4からーつ選びなさい。\nしまで 已         さん ぼ い\n 食 事をした(      )、散歩に行く。\n1 あとで    2 あとに     3 あとが    4 あとも\nおと 、おお            ちい\n| 2 | テレビの音が大き(      )から、ちょっと小さくして。\n1 という    2 すぎる     3 やすい    4 ぐらい\nく ろう                           げんこう   かんせい\n いろいろ苦労した(       )、やっと原稿を完成 した。\nすえ                          い じょう\n1 末に     2 てから     3 まで     4 以上は\nかれ     なに   MY                    たが      き も わ\n[| 4 | 彼とは何も言わ(        )、お互いの気持ちが分かる。\n1 ずに     2 にども     3 ずとも    4 だって\nね 氷 そく        き ぶん 、\n| 5 | 寝不足の(        )気分がすっきりしない。\n1 せいに     2 せいなか     3 せいだ     4 せいを\nきんねんまえ  かれ. いちど あ おんしん 未 つう じょうたい 、\n| e | 三年前に、彼に一度会った(       )、その後音信不通の 状 態だ。\n1 しか     2 きり      3 ほど    4 ので\nじゅしょう     きっぽう   でん わ             りょうしん             未滞志\n| 7 |受賞 した吉報を電話で知らせ、両 親(     ) 喜 ばせた。\n1 に      2 が       3 を      4 で\nあめ は\n こんなに晴れているので、雨が降り(      )。\n1 そうがある   2 そうもない   3 そうになった  4 そうだ\nいち ど かいがい   い\n| 9 | チャンスがあれば、ぜひ一度海外に行ってみたい(       )。\n1 ことだ    2 くらい     3 ほど     4 ものだ\n住や                    じゅぎょう   おく\n| 10 | 早くしないとまた授業 に遅れる(\n1 か      2 ぞ       3 ね      4 の\n\n"
   },
   {
    "page": 72,
    "text": "第6単元\n問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のヘー]の中からーつ選びな    「\n         さい。\nすえ\nA 末   B すぎる      C ずとも    D せいか   E せる\nあと\nF ぞ   G そうもない  H ものだ    I た後で   J きり\nュー  こうえんかい たいなふう 、じょうりく         らいきゃくすう すく\n| 11| きのうの講演会は台風が上陸した(      )、来 客 数が少なかった。\nはん  た                   ぶん     さん ぽ\n[12] ご飯を食べ(       )、いつも30分ぐらい散歩するようにしている。\nかんが               に コ       りゅうがく         き\n[ 13] いろいろと 考 えた(     )、仕事をやめて 贸 学することを決めた。\nから だ              类\n|14| どんなに 体 ににいものでも、 食べ(      )のはよくない。\nかんたん           い\n そんなに簡単なことぐらい言わ(      )わかる。\nぼく  ぜったい  ゆる\n そんなことしたら、僕は絶対に許せない(        )。\nかた    いち ど   あ                   总  あ\n あの方とは一度お会いした(       )、その後、会っていません。\nいっしゅうかん  さむ  ひ  の\"の     さくら E 立\n ここ一 週 間、寒い日が続いて、桜 が咲き(      )。\nさんさきさい  ご      ひとり  いえ  かえ             む り\n 三歳の子どもを一人で家に帰ら(       )のは無理だろう。\nいま  しあわ   せいかつ         つづ                               *\n120| 今の 幸せな生活がこのまま続いてほしい(      )。\n問題3 下の〈     )の中の言葉を適当な形に変えて、文中の      に書きなさい。\nかあ      呈      いえ  そう じ            でを つだ\n[21] お母さんは子どもに家の掃除を       。 (手伝う)\nじゅぎょう              あと      ともだち    や きゅう   れんしゅう                        お\n[22] 援業が     後で、 友達と野球 の練 習 をするつもりだ。 (終わる)\na つ               あたま                  だ\n[23] 热去     せいか、頭 がふらふらしている。 (出す)\nみな               すえ          けつろん  7る      はな  あ\n[24| 皆といろいろ     末に、ようやく結論を出した。 (話し合う)\nさけ                け き   了     あたま  いた    の\n[25] ゆうべお酒を       すぎたので、 今朝、起きたら 頭 が痛い。 (飲む)\n本や  きゅう か         くに                、  かえ\n 早く 休暇をもらって国に __ _ たいものだ。(帰る)\nごただ               とお        あ\n|27| その答えは     ずとも遠からず。 (当たる)\nパートTI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。\nこんかい      あい         ぜったいゆうしょう\n[1] 今回の話合こそ、絶対優勝 してみせる(        )。\n1 ぞ            2 かな            3 か            4 こと\n\n"
   },
   {
    "page": 73,
    "text": "ぶっけん たか            ぶ つう                  か\n| 2 | このあたりの物件は高(   )、普通のサラリーマンでは買えそうもない。\n1 すぎて     2 ぎみで      3 きれて     4 がちで\nあと     じ けん  しんそう  あき\n| 3 | いろいろと(   )後で、事件の真相が明らかになるだろう。\nちょう さき               ちょう さき                 ちょう さ               ちょう\n1 調査して   2 調査する    3 調査した   4 調査しない\nかのじょ   か   もの   で        よる                しんばい  、\n| 4 | 彼女は買い物に出たきり、夜に(   )ので心配だ。\nかえ                                      かえ\n1 なって帰ってください                2 なって帰ってきた\nかえ                                    かえ\n3 なっても帰っていない                  4 なって帰るしかない\n未上    すえ\n| 5 | あれこれと迷った末に、(       )。\nべつ         か                            でつ         か\n1 別のものを買ったほうがいい     2 別のものを買った\nべつ         か                            べつ         か\n3 別のものを買うことができる         4 別のものも買いたかった\nじ かん 、じゅうぶん\n| 6 | 時間が 十 分あるから、そんなに(   )。\n1 急がなければならない        2 急いでください\n3  急ぐのはいいだろう                4  急がずと もいい\n 最近、ストレスを抱えているせいか、夜2、 3時になっても(        )。\nねむ                                      ねむ\n1 眠くなってきた                  2 眠るようにする\nね                                       ねむ\n3 さっそく寝よう            4 なかなか眠れない\nわたし           ひ       きら                    二万  はは\n| 8 | 私はピアノを弾くのが嫌いだったが、子どもの順に母に(   )。\n1 習われた              2 習わせてあげた\n3 習わされた             4 習わちせてもらった\nも 党だ  りょう  おお        ひとり   ちから\n[| 9 | この仕事は 量が多いので、一人の 力 では(   )。\n1 できそうもない                   2 できそうではない\n3 できるそうだ      4 できるそうだろう\n全       ころ  おお            か しゅ            はも\n[10] 子どもの頃、大きくなったら歌手(   )と思っていた。\n1 になるようにする                 2 になってくれる\n3 になるこはある                   4 になりたい\nあめ     、                   きっさ てん      はい    あまやど      、\n  [11| 雨はしばらく(   )ので、 喫茶店にでも入って雨宿りしよう。\n                                       宙\n1 止むことはない           2 止みそうもない\n0                                       や\n3 止みさえすれば                 4 止むことになる\nとなり    むすこ        ねんまえ  いえ で              かえ            国  、                         >\n[12| 隣の息子 さんは10年前に家出を(   )、 帰っていないそうだ。\n1 したきり              2 したうえに\n3 したかわりに                         4 したばかり\nせんしゅうまち    かのじょ     あ           =                                    かお\n[13| 先週 町で彼女に会ったが、あまり(   )顔をしていた。\n\n"
   },
   {
    "page": 74,
    "text": "1 元気ではない                  2 元気ではなさそうな\n\n3 元気な最申の                 4 元気ではないぎみの\n問題2? つぎの文の。 災 に入る最もよいものを、1-23-4からーつえらびなさい。\n 春になった           眠くてしょうがない。\n\n1 せい        2 いくら        3 寝ても       4 だろうか\n 姉は                   到           帰ってこなかった。\n\n1 一適間       2 きり           3 前に         4 家を出た\n こんな 難 しい                   贡            そうもない。\n\n1 小学生       2 解け         。 3 には         4 前是地\n 田中さんは            を怒らせたみたい。\n\n1 ので         2 遅れた         3 彼女         た ゲート\n 海外旅行の価格は           女                     ものだ。\n\n1 なって       2 もう少し       3 安く        4 ほしい\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\n\nーつ選びなさい。\nりんごは寒い地方で| 19 |。青礎県と長野県が、その産地として、特に有名です。\nりんごの花は五月に咲きます。そして、小さい実がたくさんなります。一本の木に、あ\n\nまり多くの実がなると、大きい実ができません。だから、| 20 |を残して、ほかの実はと\nってしまいます。審 晶 がつくのを[| 21 |、袋 をかぶせたり農薬をかけたり、いろいろと\n世語をして育てます。\n\nりんごにはいろいろな種類があります。 形の大きいものもありますし、小さいものもあ\nります。色の赤いのもありますし、 黄色いのもあります。また、夏ごろから食べられるも\nのや、秋の終わり| 22 |、食べられないものもあります。 寒い地方でとれたりんごは、箱\nに詰められ 、貨物列車やトラックに積まれて、外の地方へ運ばれます。そして、町の果物\n屋や八百屋の店先に| 23 |のです。\n\n1 生まれます             2 作られます\n\n3 育てられます                  4 植えます\n\n\n"
   },
   {
    "page": 75,
    "text": "第6単元\n1 弱そうな実しか          2 丈夫そうな実だけ\n3 弱ような実だけ          4 丈夫そうな実しか\n[21 |\n1 防ぐために            2 防げるように\n3 防いでいるのに          4 防げるには\n1 でなければ            2 になってから\n3 になったら            4 でいれば\n[23\n1 並ばれる             2 並ばせる\n3 並べられる            4 並べさせる\n\n"
   }
  ]
 },
 {
  "unit": 7,
  "title": "第7単元 練習問題",
  "pages": [
   {
    "page": 80,
    "text": "第7単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3・4から一つ選びなさい。\nじぶん 。 いえ かえ           やす\n 自分の家に帰った(      )で、ゆっくり休んでください。\n由 证与     2 あいだ     3 ところ    4 つもり\n庆生         はな\n 誰(        )ほかの人に話したくないことがあるだろう。\n1 だって    2 も       3 にも     4 では\n要  らい       いま\n 過去も未来もない。あるのは今(      )なんだ。\n1 しか     2 だけ      3 孙要    4 でも\n          で つだ        へ や  なか           世お         そう じ\n| 4 | お手伝いさんは部屋の中だけでなく、庭(       )掃除してくれた。\n1 を      2 も       3 は      4 が\nしゃしん みな          ひと       わ\n| s | 写真を見るだけ(       )、その人がいいかどうか分からない。\n1 では     2 には      3 のは     4 たら\nはんたい         い    、\n| el(      )みんなに反対されても、アフリカム行くつもりだ。\n1 たとえ    2 そんな     3 芒5    4 ただ\nかれ   あき は ばら    W                  あたら     でん き せいひん   か\n| 7 | 彼は秋葉原へ行く(     )、新 しい電気製品を買ってくる。\n1 としても    2 だけでなく    3 たびに    4 つもりで\nこん や ゆうしょく なに\n 今夜の夕食 は何(         )しますか。\n1 证      2 を       3 も      4 が\nひ ご             まきうす 、  わ\n| 9 | ここに引っ越してきた(      )、あたりの様子がよく分からない。\n     1 でもyyで   2 ばかりで    3 すえに    4 ことに\nうがた    さむ     ぼう\n 夕方になると寒くなるので、 帽子をかぶって(       )いいですよ。\n1 行くだけ             2 行くから\n3 行くまで             4 行ったほうが\n\n"
   },
   {
    "page": 81,
    "text": "第7単元\n問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nさい。\nA だけ     B だけでなく  C だけでは Dことにした\nE たつもり F だって       G たとえ    H たばかりだ\n1 たびに  J たほうがいい\nは             あま       た\n[11 | 歯によくないので、甘いものを食べない(     )。\nよしだ     せんげつ   ぼうえきがいしゃ 。 はい\n[| 12 | 吉田さんは先月この質易会社に入っ(       )。\n呈     せいちょう    がっこうきょういく         か ていきょういく たいせつ\n 子どもの成 長 には学校 教 育(      )家庭 教 育も大切だ。\nこんなん                きい ご       がん ば\n (       )どんな困難があっても、 最後まで頑張らなければならない。\nし ざた  がくれき              を       けいけん  じゅうよう\n[5] この仕事は学歴がある(        )足りない。 経験も 重 要だ。\nじゅん ぴ   お       あと    きゃく      く      ま\n クリスマスパペーティーの 準備は終わって、後はお 客 さんが来るのを待つ(        )花。\nしん             此\n A「新ちゃん、どうして食べないの。 」\nきら\nB 「(      )、嫌いんだもん。」\nうた 。 き            ちゅうがくせい ヒ だい       おおも 。 だ\n この歌を聞く(        )、中 学生時代のことを思い出す。\nかのじょ  か し                 まえ うた                -\n 彼女は歌手になっ(       )で、みんなの前で歌っている。\nしゅっちょう  い         けいたいでん わ  じゅうでん き   も    い\n 出張に行くときは、携帯電話の 充 電器を持って行っ(       )ですよ。\n問題3 下の〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nくび           ほんとう       い\n[21] たとぇ首に      も、本当のことを言うつもりだ。 (なる)\nしつろ ど  たか       あつ\n| 22| きのうは      だけでなく湿度も高かった。 (著い)\nはんたく き   すんしゅう                  つか           か\n この洗濯機は先 適       ばかりで、まだ使っていない。 (買う)\nせい じ か  ・                      まえ\n 政治家に        つもりで、みんなの前でスピーチをする。 (なる)\n*のじ   か         じ                  ないよう                        这\n 彼女が書いたものは字が       だけでなく、内容もしっかりしている。(きれいだ)\nけっ    もん く   い        つら\n どんなに      ても、決して文句を言わない。(辛い)\nかんが     こんかい  りょこう                   ちゅう し\n いろいろ 考 えて、今回の旅行を       ことにした。 (品目する)\n\"63\n\n"
   },
   {
    "page": 82,
    "text": "パートLI 実戦練習\n問題1 つぎの文の(   )に入れるのに最もよいものを、 1・2・3・4からーつ選びなさい。\n| 1 | 今回の事件は新聞だけでなく、半 刊誌に(        )載っているよ。\n1 を         2 が          3 で         4 も\n| 2 A 早くやってくれよ。 」\nB      )、ほんとうに暇がないんだもん。 」\n1 だっでて     2 し       3 のに     4 たら\n うちのクラスで 男 の学生は中村さん(      ) 到二。\n1 から        2 だけ         3 まで        4 ごろ\n| 』 | 彼はクリスマス(      )たびに、プレゼントを贈ってくれる。\n1 上         2 に          3 の         4 で\n たとえこの仕事が嫌でも、(       )。\n1 やらなくてもかまわない       2 やらないでください\n3 やらなければならない        4 やればいいようだ\n「e | ょ<(     )だが、またどこかに間佑いがあるかもしれない。\n| 確認になったこと         2 確認しておいたつもり\n3 確認したこと           4 確認だったつもり\n| 7 | その 話 は聞かなかった(      )。\n1 どら芝しよう            2 ことにしそうもない\n3 ことになりたいものだ           4 ことになるしかない\n| 8 | このテレビは先月(      )、もう壊れてしまった。\n1 買いたいことがあるが           2 買ったばかりなのに\n3 買うかどうかについて       4 買ったところなのに\n| 9 | きれいごと(      )ではすまないよ。 广避人上努为 しないと何も変わらない。\n1 しか         、            2 こそ\n3 まで                     4 だけ\n| 10] ゴールデンウィーク 中 はどこも人でいっぱいなので、外 出 を(       二。\n1 避けたほうがいい              2 避けることができない\n3 避けないほうがいい        4 避けないことができない\n| 彼らは今回の試合に絶対(      )練 習 に励んでいる。                        ]\n1 負けるだろう            2 負けないつもりで\n\n"
   },
   {
    "page": 83,
    "text": "第7単元\n\n3 負けそうにないで         4 負けたあとで\n| 12 | 政郷は(         )変わっていって、菅 の風景がだだんだんなくなってしまう。\n\n1 帰るまえに            2 帰ったあとで\n\n3 帰るたびに            4 帰るさいちゅうに\n 健康によくないので、 夜かしを(       )。\n\n1 しないことになる        2 しただけではいけない\n\n3 しそうではない         4 しないほうがいい\n問題2? つぎの文の に入る最もよいものを、1.2・3-4からーつえらびなさい。\n[14| 母はこの      文句を言 う。\n\n1 見る     2 コマーシャルを 3 商品の    4 たびに\n たとえ                     大             言ってはならない。\n\n1 でも     2 冗談     8 ことを    4 そんな\n 服を買うとき、色やデザイン             重 要だ。\n\n1 素材を    2 だけでなく    3 確かめる    4 ことも\n きのう           、 結果はまだ分からない。\n\n1 受けた    2 婁記試験    3 ばかりで   4 を\n[18] このことはもうぅ一回       娘           ほうがいいよ。\n\n1 話した    多 芝       3 会って     4 彼女\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\n\nーつ選びなさい。\n\nアメリカでは自分の手料理でお客をもてなすのが普通である。日本でも最近自分の手料\n理でお客をもてなす若い人が| 19 |が、まだ店屋物をお客に出すほうが多い。ホームス\nテイ先のお母さんは料理の先生に| 20 |と思うくらい料理が上手だが、お客が来るとい\nつも近くのすし屋やそば屋に注文して食べ物を出す。おいしい手料理を| 21 |と思うの\n\nまた、日本人がお客に食べ物をすすめる方法もとても面白い。お母さんは、どんなにお\nいしいお菓子を作っても、それをお客にすすめる時、 | 22 |分かりませんが、どうぞ」\nと言う。私は料理が嬢いで下手だが、私がおいしい物を作ったら、「これは私が作った物\nです。 おいしいですよ。 どうぞ。」と自分が作った物だということ、それがおいしいこと\nをはっきり言って| 23 |。\n\n\n"
   },
   {
    "page": 84,
    "text": "第7単元\n1 増えてきた                     2 少なくなっている\n3 多くなっておく                   4 減らしている\n1 なれないのではない              2 なったらいいと思う\n3 なれなくてもいいと思う            4 なれるのではないか\n[21 |\n1 出さなければならない             2 出してはいけない\n        3 出したほうがいい                   4 出さなくてよかった\n[22 |\n1 お口になるかどうか                2 お口に合うかどうか\n3 お口になるのではないか       4 お口に合うのではないか\n1 お客にすすめるのだろうか               2 おお客に言わないだろう\n3 お客に言わないだろうか                 4 お客にすすめるだろう\n\n"
   }
  ]
 },
 {
  "unit": 8,
  "title": "第8単元 練習問題",
  "pages": [
   {
    "page": 90,
    "text": "第8単元\n第8単元 練習問題\n\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2-3・4から一つ選びなさい。\n施工 著、ちょっとこっちへ(      )まえ。\n\n1 来た     2 来る      3 来て     3 来ない\n| 2 ] あの人(       )、いつもうそばかり言っている。\n\n1 のに     2 から      3 ったら    4 とは\n 日曜日だっ      )大 元夫です。 引越しを手伝いますよ。\n\n1 なら     2 たら      3 ても     4 とは\n[4 ] マイホームを買う(       )、 貯金している。\n\n1 ために    2 によって    3 ばかりに   4 まえに\n| 5 | せっかく のお誕生 日パーティーなので、 ほかの友だちも(        )どう?       「\n\n1 読うから    2 誘ったら     3 誘う     ~4 誘って\n\n        | 6 ] 子どもは泥(        )になって家に帰ってきた。\n\n1 だらけ    2 っぽい     3 ぎみ     4 みたい\n この計画、部 長 が養成してくれる(       )。\n\n1 こともある   2 たりする    3 だろう    4 しかない\n 彼が持ってきてくれたワインを全部飲ん(         )。\n\n1 ちゃった    2 じゃった     き 添た    4 だった\n[| 9 | 斉藤さんの結婚式はいつでした(        )。\n\n1 っけ     2 か       3 った     4 って\n あそこに「目まれ」(      )書いてあるよ。\n\n1 に      2 った      3 っけ     4 25\n\n\n"
   },
   {
    "page": 91,
    "text": "第8 単元\n問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のヘーJの中からーつ選びな\nさい。\nA たまえ         B ために  C たら     Dったら E のに\nF たらどうですか   G だらけ   H ちゃった 1 っけ     J って\nms  なんねん  ひと  す              ほこり\n[ il| この部屋は何年も人が住んでいないので、反(      )だ。\n二 光則         かた づ\n[12 ] 仕事をさっさと片付け(       )。\nじ かん             いっしょ 。 りょこう     い\n 時間があっ(       )、一緒に旅行にでも行きませんか。\nひと            かさ 。 でんしゃ お  わす\n あの人(       )、また傘を電車に置き忘れた。\nけんこう          まいあさ\n[ 15] 健康の(       )、毎朝ジョギングをしています。\n 歯が痛いんですか。じゃ、医者に診てもらっ(      )。\nへ や  そう じ                   か びん  わ\n きのう部屋を掃除したとき、うっかりして花瓶を割っ(       )。\nな     やま  みなみ\n 向こうの山が 南 アルプスでした(      )。\nご ぜんちゅう う     あ                                                   わす\n あっ、いけない。午前 中 、打ち合わせがあった(       )。すっかり 忘れてしまった。\nよし だ         かいしLゃ 。 やす         い\n| 20 | 吉田さんはあした会社を休む(       )言っていました。\n問題3 下の(     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nかれ              い            く\n[五] 後はすぐ     って言っていました。 (来る)\nあそ                く\n| 22| いつでも遊びに       たまえ。 (来る)\nかのじょ  い しゃ          い がく べんきぎょう\n 第 女は医者に      ために、医学を勉強 しています。 (なる)\n-       た なかせんせい    2              たかはし     、 き        たず\n 田中先生のお宅を      たら、 高橋さんが来ていた。 (訪ねる)\nじゅん 还                                     ゆっぱつ\n|25| さあ、 準備が      たら、出発しよう。(できる)\nクウ                                                 ね だん            たか             ぶふ ん\n 交通が     ため、ここのマンションの値段はあまり高くない。 (不便だ)\nんがく                  た なかせんせい                                 そうだん\n 進学のことですか。田中先生に      たらどうですか。 (相談する)\nパートTI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。\nひと          ほんとう            ひと\n[1 | あの人(       )、本当におしゃべりな人なんだから。\n1 から         2 には           3 だり         4 ったら\n\n"
   },
   {
    "page": 92,
    "text": "第8 単元\n| 2 ] 暇な時は遊びに(      )まえ。\n\n1 来た      2 来る       3 来て      4 来れば\n[3 ] その小説はおもしろいので、一気に(      ) じゃった。\n\n1 読ん      2 読み       3 読む      4 読んで\n[| 4 | 会社がつぶれてから、再就職できず、億金(   )になってしまった。\n\n1 だけ      2 だらけ      3 まで      4 ほど\n[5 ] あの人、 一度会ったことがあると思うんだけど、名前は何(       )。\n\n1 んだ      2 らしい      3 だろう     4 だっけ\n| 6 ] この一 適 間、仕事が(       )、友だちとの約束をすっかり 忘れてしまった。\n\n1 忙しくても              2 忙しかった\n\n3 忙しくては            4 忙しかったため\n 初めてギョーザを(      )、 意外と 難 しかった。\n\n1 作るために            2 作ったそうで\n\n3 作ってみるから           4 作ってみたら\n A [日本経済の資料 ですか。それでしたら、インターネットで(      )。 」\n\nB 「そうですね。そ う します。」\n\n1 調べようと思います         2 調べたらどうですか\n\n3 調べそうにもない          4 調べてくださいませんか\n[9 | このこと、彼が(      )だろうか。\n\n1 信じてくれる           2 信じていただく\n\n3 信じたりする           4 信じてほしい\n この 小 説はつまらないかな(      )だけど、結構面白かったよ。\n\n1 って思ってみたん              2 って思ってよかった\n\n3 って思っていたん              4 って思うだから\n 今回の試合では、どのチームが(      )。\n\n1 化勝するだろう          2 優勝するぞ\n\n3 優勝したいものだ         4 優勝したつもりだろう\n あれ?受験 京 、どこに(      )。              」\n\n1  置いたいの                  2  置いたっけ\n\n3 置いてくれる           4 置くとか\n 渡辺さんはあした美 術 館へ(      )言aでましたた。\n\n1 行くって    2 行くっけ     3 行くんっで   4 行っちゃう\n\n\n"
   },
   {
    "page": 93,
    "text": "問題2 つぎの文の。 に入る最もよいものを、1-2・3.4からーつえらびなさい。\n A [小松さんは            ヨで。 」\nB「え、 来ないですか。 残念ですね。」\n1 が           2 用事           3 来られない     4 あって\n 人に                   し<           みたらどうですか。\n1 やって        2 ないで         3 自分で        4 やらせ\n 志望大学に                    し<           海外旅行にでも行きたい。\n1 自分への      2 として         3 合格したら     4 ご徐美\n きょうは日曜日の                     女          がいっぱいだ。\n1 ため         2 人出           3 デパペートも     4 どこの\n A 「日本語能 力 試験の           女                   でしたっけ。 」\nB「あさってだよ。」\n1  締め切りは    2 の           3 いつ         4  申し込み\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n\n桜は日本の代表的な花です。毎年春になると、日本の各地で美しい花を咲かせ、\n| 19 |。楼にはどのぐらい種類があるのでしょうか。桜は、昔から日本の野や山に自然に\n生えていましたが、| 20 |。しかし、人々の手によっていろいろな種類が作られ、今で\nは、 三百種ぐらいになっています。楼の花は、色がだいたい同じで、ほとんど白かピンク\nです。ピンク には薄いのも、濃いのもあります。花はふつう五枚あって、輪のように丸く\n並んでいます。\n\n桜の花は暖かくなってから咲きますが、花の開く日は| 21 |。日本は、 南北に細長い国\nなので、南の端と北の端とでは緯度の差が20度もあり、気侯も違います。北に行けば行く\nほど桜の咲く時期が遅くなります。                     '\n\n一番初めに| 22 |、やはり南の端の沖縄で、一月中旬です。そして、三月の下旬に九州\n南部で咲きます。 東京で咲き始めるのは四月初旬ごろで、ちょうど入学式や入社式の時期\nに当たります。北海道で桜が咲き、春らしい季節を迎えるのは、 五月に| 23 |。\n\n\n"
   },
   {
    "page": 94,
    "text": "第8単元\n1 人々を楽しんでいます        2 人々を楽しませます\n3 人々を喜んでいます        4 人々を喜んでくれます\n           [\n1 種類もかなり豊富でした\n2 種類はあまり多くありませんでした\n3 形もそれぞれ違いました\n4 形もあまり似ていませんでした\n[41\n1 習慣によって違います        2 種類によって変わります\n3 地方によって違います        4 毎年によって変わります\n[22]\n1 楼が咲くのは            2 楼が咲いたのは\n3 桜が咲いたので          4 楼が咲くので\n1 なればいいです          2 なるといいです\n3 なってからです         4 なったからです\n76                                   、\n\n"
   }
  ]
 },
 {
  "unit": 9,
  "title": "第9単元 練習問題",
  "pages": [
   {
    "page": 100,
    "text": "第9単元 練習問題\nパート1i 基礎を固める練習\n問題1 つぎの文の  )に入れるのに最もよいものを、1.2・3-4からーつ選びなさい。\n| ュ | 雨が降って(      )。窓を閉めましょう。\n1 いきました   2 きました    3 きます    4 います\nしんん              こんかい    じ けん            し\n| 2 | 新聞(        )今回の事件のことを知った。\n1 で      2 が       3 に      4 と\nわたし むすめ あたら      か\n 私は娘に新 しいおもちゃを買って(     )。\n1 いただきました 2 くれました   3 もらいました 4 やりました\nかべ あたら      は\n| 4 | 壁に新 しいポスターが貼っ(        )。\n1 ています   2 てあります   3 ておきました 4 てきました\n、ひがし そら と\n[5 | ヘリュプターが 東 の空へ飛んで(         )。\n1 いった     2 みた       3 いる      4 ある\nあに しゅうしょく       よるおそ いえ かえ\n6 | 見は就職して(       )、夜遅く家に帰ってくるようになった。\n1 もの     2 たら      3 以来     4 後で\n 母がセーターを編んで(        )。\n、 1 くれました   2 いたしました   3 おきました   4 いました\nもんだい\n ちょっとこの韻題をやって(       )ごらん。\n1 みる     2 みて      3 みない    4 みれば\nし けん ごうかく        = 、\n| 9 | 試験に合格して(      ) しょうがない。\n1 うれしいゆい   3 れれし     3 うれしくてでて  4 うれしいの\nようとつ   さいわね ヽる 上     す\n[10] バイクと衝突したが、幸 い軽い怪我     )済んだ。\n1 きえ     2 で       3 では     4 と\n\n"
   },
   {
    "page": 101,
    "text": "_ 問題2 つぎの各文の(       )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nきい。\nA で     B てあげた  C てある    D ていく        E て以来\nF てきた  G てくれた  H てごらん  I てしかたがない 』で済む\nでまえ  たの     ん わ いっぽん\n[| 出前を頼むなら電話一本       )ことだ。\nかいしゃ   ゃいん  ぎょうせき                ゆう\n うちの会社は、社員の 業 績(     )ボーナスを支給 する。\nこんげつ             ちょう  /\n 今月 のスケジュールは手 帳 に書い(       5\n間朱しだ             わたなべべ                         、                 っつく\n 山下さんは渡辺さんにイチゴケーキを作っ(       )。\nき   お              いち ど\n[15 | 気を落とさないで、もう一度チャレンジし(     )。\nにゅうがく            いち ど  じゅぎょう     上\n 入 学し(      )、一度も授 業 をサボったことはない。\n このごろ、スポーツグラフに通う 人が増え      )。\nじょう ず                   じょう ず\n|18| テニスが 上手ですね。これからもっと 上手になっ(      )でしょう。\nびょう き       とき   ともだち 、くすり  か\n 病 気になった時に、 友達が 薬 を買っ(       )。\nゆう  おそ     べべんきょう             ねむ\n タベ遅くまで勉強 をしていたので、眠く(〈      )。\n問題3 下の(〈     )の中の言葉を適当な形に変えて、文中の     に書きなさい。\nふく                、     に あ おも     き\n|21| この服、ちょっと       ごらん、似合うと思うよ。(着る)\nかれ  おも  びょう き           、   、\n[22 | 後は重い 病 気にかかって、だんだん      てきた。 (やせる)\nま  ちゅうしゃじょう                 と\n ちょっと車を駐車場に       てきます。 (止める)\n    はなみ  kW        べべんとう                つく\n きょうはお花見に行くので、お弁当を       ておいた。(作る)\nかれ  L 下鼎            、     て つだ 、_\n|25 | 彼の仕事を       あげた。 (手伝う)\nなかむら    、                   はこ 、\n 中村さんがスーツケースを       くれた。 (運ぶ)\n 毎日同じ仕事をして、        しょうがない。 (つまらない)\nパートI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2-3・4から一つ選びなさい。\nゝのじょ   こ ほ             い らい   ゝぞく   しんらく\n 彼女は日本へ(      )以来、 家族と連絡したことはないそうだ。\n1 来て          2 来た           3 来る          4 来れば\n\n"
   },
   {
    "page": 102,
    "text": "かれ  こ とし せ かいたいかい  ゆう しょう                 いちやく ゆうめい\n| 2 | 彼は今年世界大会で優勝 したこと(        )、一曜有名になった。\n1 と           2 で            き 瑟           4 まで\nかいがいりょこう    い    ひと            な\n3 | これから海外旅行に行く人がもっと増えて(       )定るう。\n1 きて        2 きた          3 きます       4 いく\nぜったいおこ                       ほんとう                 ゆ\n| 4 | 絶対乱らないから、本当のことを言ってみて(       )。\n1 います        2 あります        3 なさい        4 ごらん\nしんゆう  であん う          さび\n[| 5 ] 親友が転校してしまって、寂しくて(      )。\n1 しょうがない   2 ください        3 なりました     4 ありません\nあさお            ちょうしょく\n| 6 | 朝起きてみると、もう朝 食が(     )。\nつく                             つく\n1 作っていた                     2 作っておいた    」\nつく                             つく         おも\n3 作ってあった                   4 作ってみたいと思った\nおそ         わたし  くるま\n もう遅いですから、私が車で(      )。\nおく                             おく\n1 送らせてください             2 送ってくださいましょうか\nおく                             おく\n3 送らせることにしてください       4 送りましょうか\nさくひん 、ゆうめい          ひ はん 至训\n この作品が有名になるにつれて、批判の声も(       )。\n1 増やしてください          2. 増えてきた\n3 増やさないほうがいい        4 増えるつもりだ\n、          まんえん      、  しんかんせん    せんえん\n| 9 | レンタルカーだと少なくとも2万円かかるが、新幹線で行くと5千円(       3\n1 でもない できる         3 で済む        4 でいられる\nなか だ                   しんせつ                に ほん ご    はつおん\n 中田さんはとても親切で、いつも日本語の発音を(       )。\n1 店してくれます                 2 半していらっしゃいました\nなお                      -      なお\n3 お直しました                   4 お直しになります\nこんかい                 おも     おお ま ちが   、\n[11| 今回のこと、(        )と思ったら大間違いだぞ。\nあやま                            あやま\n1 謝ってたまらない          2 謝らないですむ\nあやま    、                        あやま\n3 謝ってごらん                    4 謝ってみせる\nだいがく  そつぎょう          いち ど   ぽぼ こう  かえ        a\n[12| 大学を卒業(       )、一度も母校に帰ったことがない。\n1 して以来              2 したきり\n3 したために                    4 しては\n 後の無礼な態度に、(       )しかたがない。\n1 腹が立つ                      2 腹が立った\nら  た                          よら  本\n3 腹が立ち                      4 腹が立って\n\n"
   },
   {
    "page": 103,
    "text": "問題? つぎの文の。 災 に入る最もよいものを、1-2-3-4からーつえらびなさい。\n その人はスピード違反                   六           済んだようだ。       「\n1 捕まって    2 で       3 拓金を    4 支払って\n[5]療れ 。。  。 ネがります。\n1 と      2 仕事の     3 てくる     4 効率が\n[16] 後は -          あげました。\n1 書いた     2 直して     3 娘 の     1 作文を\n スイカは           下      、 食べたいときに食べてください。\n1 入れて    2 冷蔵庫に    3 あった    4 ので\n 彼はアメリカから            大                   人が変わったように真\n面目になった。\n1 きて     .2 まるで     3 帰って     4 以来\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n以前 、ヨコーロッパを旅行したとき、| 19 |。 観光バスに乗ってあちらこちら見て回った\n時のことです。 私は三歳の孫を抱いていました。バスに乗り合わせた四十人ばかりの乗客\nはみな外国人でした。 子供をかわいがる人たちだとみえて、私のそばを通る時に、孫の顔\nを見てにっこり笑ったり、手を振ったり、孫の手を操ったり、あるいは自国の言葉で\n| zo |\nそのうちに、一人の中年の婦人が突然孫の方に顔を寄せて、日本語で「こんにちは」と\n言いました。 | 21 |称はびっくりしてしまいました。いかにも人の良さそうな笑顔でし\nた。おそらくその人は日本に| 22 |のでしょう。日本語を覚えていて、しかも 、私たち\nが日本人であることを知って、わざわぎざ日本語であいさつをしてくれたのでしょう。私は\nこういう人たちに大変親しみを感じた。\nこんな時、日本人だったらどうでしょうか。 知らない人同士がバスに乗り合わせたら、\n互いにあいさつをするでしょうか。どちらかと言うと、| 23 |と思われます。殊に私たち\n| みたいな子供連れの外国人がいたら、その人たちに対してどんな態度をとるでしょうか。\nおそらく積極的に声をかける人は少ないでしょう。知らない大と話すのは恥ずかしい、面\n倒だなどと大部分の人が思ってしまうのではないでしょうか。                 「\n\n"
   },
   {
    "page": 104,
    "text": "第9 単元\n    1 そんなことを覚えました       2 こんな経験をしました\n3 あんなことをしました       4 どんな経験をしました\n1 声がかかっていきます       2 声をかけたりしていきます\n3 声がかかったりしてくれます     4 声をかけたりしてくれます\n[21 |\n1 面白いことなので          2 うれしいことなので\n3 意外なことに           4 おそろしいことに\n1 来ることがあった         2 来たことがある\n3 来ることがある          4 来たことがあった\n[23] 1 あまり話をしないのではないか    2 それほど話をしなかったのか\n3 なかり話をしていたのか      4 そうとう話をかけていたのか\n\n"
   }
  ]
 },
 {
  "unit": 10,
  "title": "第10単元 練習問題",
  "pages": [
   {
    "page": 109,
    "text": "第10単元 練習問題\nパート1 基礎を固める練習\n問題1 つぎの文の(   )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。\nおお  こえ      ーー   な\n| 1 | そんな大きな声を(        )子どもが泣いてしまうよ。\nだ        だ         党        (4\n1 出すには   2 出しては    3 出しておくと 4 出すよう\n、 き   あ  ゝ\n| 2 ] 政人=刺雪所大是苹尝< 蕊(         )。\n1 たまらない   2 たまります   3 たまれない   4 たまれます\nた なかせんしゅ 、     低守 いんたい       ざんねん\n 田中選手がこんなに早く引退するのは、残念(       )ならない。\n1 は      2 で       3 の      4 と\nお    ざっ し\n| 4 | あそこに置いてある雑誌を(       )ちょうだい。\nと        と         と        と\n1 取り      2 取って      3 取る     4 取らない\nかのじょ     い      だま\n[ 5 | 彼女にそこまで言われると、もう上黙っ(      )いられない。\n1 ては     2 ても      3 たら     4 から\nじっさい よ           ほん      、\n[6 ] 実際に読んでみて(      )、この本のおもしろさがわかる。\n1 経志して    2 いつのまにか   3 いったん    4 はじめて\nきょう   たんじょう びぴ          かれ   むか\n 今日は誕 生日なので、彼に迎えにき(       )。\n1 てほしい    2 ておく     3 でくれた    4 てあった\n ほら、やればできるん(       这\n1 ほうがいい  2 じゃないか   3 じゃなかった  4 信きでない\nえき  はな      や ちん           おも\n| 9 | そのマンションは駅から離れているので、家賃が(       )のではないかと思うけど。\n1 須い      2 安くない     3 安かった    4 安く\n ュピー機の使い方がわからないので、一度やって(       )くれませんか。            、\n1 うかがって   2 拝見して    3 お会いになって 4 みせて\n\n"
   },
   {
    "page": 110,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、 下のA一Jの中から一つ選びなさい。\nA たまらない       B てちょうだい    C てならない     D ては\nE ではいられない     F はじめて       G ないか\nおも\nH じゃないかと思う    I ほしい         J てみせる\nおか       きみ\n[11| ミスを犯したのは君のほうでは(\nともだち  あ\n 友達に会いたくて(       )。\nほん          ひと  つか\n この本をたくさんの人に使って(       )。\nこうこう じ だい  しゃしん  办         かし       おも  だ\n 高校時代の写真を見ていると、 昔 のことが思い出され(     )。\nわたし  和              主\n[1s| 私 も行くから、ちょっと待っ(       )。\nかな                           かんが\n| 16| いつまでも悲しん(      )。これからのことを考 えよう。\nて がみ  だ         もど                盖世\n 手紙を出したけど、 戻された。もしかして引越しした(        )けど。\nほうちょう                  さき                                      つか\n[ 18] 包丁 がこんなに錆びてい(     )、もう使えないよ。\nこんかい    あい  ぜったい  か\n 今回の諾合は絶対に勝っ(       )。\nだいがく  そつぎょう            がくせい じ だい       き                                 」\n 大学を卒業 して(     )学生時代のよさに気がついた。\n問題3 下の(  )の中の言葉を適当な形に変えて、文中の       に書きなさい。\nみせ             けっこう\n21| この店のスパゲッティ、結構      のではないか。 (おいしい)\nや生: だ         し 过类                  しょうかい\n[ 22 | 山田さんにこの仕事を       てほしい。 ( 紹 介する)\nじ ぶん  类             き           っぱい         “\n      はじめて自分の足りないところに気がついた。 (失敗する)\n       てたまらないので、一日 中 クーラーをつけていた。 (甘い)\nじ しょ              由  =     か\n[25| ちょっとその辞書を____ てちょうだい。 (貸す)\nかのじょ                た なかくん  、                                            円    SN\n 彼女にふられた田中知が____ でならない。(かわいそうだ)\nた 売9MA 修      きゃく                    く                         ちゃ                                     の\n 大事なお 客 さんがもうすぐ来るので、のんびりお茶を____ _ではいられない。(飲む)\nパートLI 実戦練習\n   問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。\nヽのじょ 。 ひょうじょう                   和                 おも\n| 1 ] 後女の表 情からみると、そのことを知っている(     )と思う。\n1 そうもない    2 のではないか    3 ことがある    4 おかげた\n\n"
   },
   {
    "page": 111,
    "text": "[ 2 | あんなにひどく(〈       )、子どもがかわいそ うだ。\nしか              しか                 か               か\n1 叶っては       2 叱っても         3 叱るには       4 叱らなくて\nじ どうしゃ             おと\n 自動車のクラクションの音が(      )たまらない。\n1 うるさく     2 うるさかった    3 うるさくて   4 うるさい\n し けん  とき    じ しょ  も   总        だ め\n[4 | 試験の時に、 辞書を持ち込むななんて駄目(       )。\n1 ならない       2 くらいだ        3 どうですか     4 じゃないか\n| 5 | このデジカメ、ちょっと(      )。\nつか                               つか\n1 使えるようになった            2 使ってみせてくれないか\nつか                               つか\n3 使えることになる                 4 使ってあげようか\nたつ や  だいどころ     さら\n| 6 | 達帆、台 所 からお皿を(      月\nと                                履\n1 取ってくることになっている       2 取ってくるのではなかった\nを                                と\n3 取ってきてちょうだい              4 取っていってちょうだい\nぴょう き           けんこう             き\n 病 気に(       )健康のありがたさに気づいた。\n1 ならないうちに                  2 なってはじめて\n3 なるかどうかは                  4 なりながらも\nらいしゅう     WA や  し けん\n 来週からは大事な試験がなあるので、(        )。\nあそ                               あそ\n1 遊ことになっている              2 遊ばなければならない\nあそ                               あそ     い\n3 遊んでばかりではいられない     4 遊んでも意味がない\nとき     べんきょう                いま\n[| 9 | あの時もっと勉強 しておけばよかったと今になって(        )。\nく                                く\n1 悔ややなことになった                2 悔やんでならない\nく                                く\n3 悔やみそうになった                4 悔やんでくださった\nわたなべべ   、こんかい            で   _- 、 かのじょェ    せいせき\n 渡辺さんが今回のスピーチコンテストに出るそうだ。 彼女にはよい成績を〈       )。\nと      けっしん                       と       おも\n1 取ろうと決心をした                 2 取りたいと思っている\nと                                と\n3 取りませんでしょうか              4 取ってほしい\nおや     -       二 そだ   むずか\n[11 | 親に(        )、 子育ての 難 しさがわかってきた。\n1 なったいじょう                    2 なってはじめて\n3 なっていらい               4 なったきり\nなんかいでん わ      起             かれ     5  いえ    1\n 何回電話しても出てくれないので、彼はたぶん家に(       )。\n1 いてもしかたがないじゃないか      2 いるんではないか\n3 いないんじゃないか                4 いてはいられないんじゃないか\nこんかい        たいかい  すいえいこうもく    ぜったい\n[13 | 今回のスポーツ大会の水泳項目では絶対(       )。\nゆうしょう                            ゆう しょう\n1 優勝してみせる             2 優勝してもらえる            '\n\n"
   },
   {
    "page": 112,
    "text": "3 優勝したっけ                  4 優勝するのだろうか\n問題2 つぎの文の。 文 に入る最もよいものを、1-2-3・4からーつえらびなさい。\n あしたは                   大           早く止んでほしい。\n1  行く         2  選足に         8 ので         4  雨が\n 自分の店を          「           が分かった。\n1 苦労         2 持って         3 その         4 はじめて\n[ 16 | 彼の人慢な             廊        いられない。 ，\n1 もう         2 には          3 我柱しては    4 態度\n 8年間飼っていた犬が            ならなかった。\n1 翡L<<    2 は          3 死んだ      4 とき\n 読み終わった新聞紙を            六                   にやさしいのでは\nないかと思う。\n1 尝资        2 すれば         3 地球の       4 リサイクル\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1・2・3・4から\nーつ選びなさい。\n\n私たちは、ふだん食べる物などをたいていスーパーマーケットで買います。スーパーで\n買い物をする時は、まず、入口で店の買い物かごをとります。 店内は、 野菜、肉、毎語な\nどいろいろな| 19 |ので、 買いたい物の売場に行き、 必要な物を自分で選んで、かごに\n入れます。 買いたい物が全部そろったら 、レジに行って、並びます。そこで、値段を計算\nしてもらって、お人金を払います。\n\nスーパーでは食料品| 20 |、衣類、文房具、化 和品、 洗剤、台 所 用品、 家庭用電気製品\nなど、 いろいろな物を売っています。そして、普通の価格より| 21 |。 スーパーの良い点は、\n値段が安いこと、 商品がそろっているので、一つの店で買い物が全部済むめことなどです。ま\n\n「      た、 大きな店には食堂や子供の遊び場があって、一日中そこで過ごすこともできます。\n\nしかし、スーパーには不便な点もあります。スーパーでは肉や野菜などがパックになっ\nていることが多いです。そのため、その中から| 22 |、必要なだけの量を買うことがで\nきません。それに、ビニールなどに包まれているために、 品物を直接見ることもできませ\nんし、吾所のごみも多くなってしまいます。\n\nこのように 、スーパーは、便利な点も不便な点もありますが、もう私たちの生活に欠か\nせないもの| 23 |。 これからもスーパーはますます増えていくでしょう。\n\n94                    、\n\n"
   },
   {
    "page": 113,
    "text": "第 10 単元\n1 売り場に分けている         2 売り場が分かっている\n3 売り場を分けている         4 売り場に分かれている\n1 もあれば            2 さえあれば\n3 だけでなく              4 しかなくて\n1 高くなります           2 安くしてあります\n3 高くしてあります         4 安くなります\n122 |\n1 選ばなければならず         2 選んではいけず\n3 選ばなければよかったのに      4 選んでいればよかったのに\n[23|\n1 と言えないでしょう        2 にしないといけないでしょう\n3 になってもいいです        4 となっています\n\n"
   }
  ]
 },
 {
  "unit": 11,
  "title": "第11単元 練習問題",
  "pages": [
   {
    "page": 120,
    "text": "第 11 単元\n第11単元 練習問題\nパート1 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・.4から一つ選びなさい。\nわた    じ もと               まち  あんない\n 私 は地元ら、     )町を案内してもらいました。\n1 綻      2 と       3 が      4 でも\n| 2 | よかったら、どうぞ(      )みてでください。\n天        つく        つく        つぐ\n1 作った    2 作り      3 作る     4 作って\nかれ なに い              5と   と\n 彼は何を言われ(        )にとこと卸と していて怒らない人だ。\n1 ても     2 たら      3 から     4 には\nやまだ   あ\n4 | きょう、山田さんに会え(      )。\n1 てよかった   2 てめいた     3 ておいた    东芝总营\nさくぶん か とき しゅうせいえき\n| 5 | 作文を書く時、修 正液を(     )かまいませんか。\nつかが       つか        つか       つか\n1 使いながら   2 使っても     3 使うぐらい   4 使うのに\n3)     しょうせつ よ  、\n|e | 「心」(     ) 小説を読んをだことがありますか。\n1 よりも    2 ところ     3 という    を によって\n いまさら(      )、もう遅い。\nこうかい       こうかい       こうかい       こうかい\n1 後悔しても   2 後悔したら   3 後悔するほど 4 後悔すること\nはる     きくら 、さき\n 春に(        ) 桜 が咲く。\n1 なるか    2 なっても    3 なると    4 なれば\nかれ     はじ\n| 9 | いまさら彼を(       )始まらない。\n1] 責めると    2 責めても    3 責めるなら   4 責めないで\n 夜更かしが 体 によくない(        )をみんな知っている。\n1 ということ   2 というもの    3 ように     4 ところ\n\n"
   },
   {
    "page": 121,
    "text": "問題? つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中からーつ選びな\nさい。\nA てみる          B ても       C かまわない     D しかたがない\nはじ\nE ても始まらない    F もらった    G よかった       H と\nI という            J ということ\nきょく  なんかいぶん          あ\n その 曲 は何回聞い(       )飽きない。\nこんかい   しんじんけんしゅう   わたし   さん か\n[12 | 今回の新人研修に私も参加できて(        浊\n そのことについてもう一度 考 え(      )。\nみせ           し はら\n この店はクレジットカードで支払っても(      》。\nしょう らい       だれ               しんばい\n[ 15| 将来のことは誰もわからないから、心配し(        )。\nお          もん く   い\n 終わったことに文句を言っても(       和\nた なか      き こく              き\n 田中さんが帰国する(       )を聞いてびっくりしました。\nあに  えき   おく\n 兄に駅まで送って(       )。\n 窓を開ける(       )、雪が降っていた。\nわたし    りょう    よる  じ す   はい          もんげん\n 私 たちの 寮 には、夜12時過ぎたら入れない(      )門限があります。\n問題3 下の(     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nあ\n[21| いまさら      てもしようがない。 (焦る)\nこう さ てん  みぎ               ひだりがわ  きっさき てん  、             未  、\n 交差点を右に       と、左 側に喫茶店があります。 (曲がる)\nすぎうえ   びょう き        かいしゃ らす\n 杉上さんは 病気に       ても会社を休んだことはない。 (なる)\nこんかい  りょこう       い     みな                  はな  あ\n 今回の旅行はどこに行くかは皆さんと        てみる。 (話し合う)\nきず 、なお      六 万                 はい\n| 25 | 傷が治ったら、お風呂に      てもかまわない。 (入る)\nょす 二   よる                             き      しんばぱい      かえ\n 叶子が後になってもまだ _ ということを開いて、心配した。 (帰る)\nせんせい    じ 世人   しんがく                                      そうだん\n 先生に事前に進学のことを       てよかった。 (相談する)\nパートI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1-2・3・4から一つ選びなさい。\nに   さんにち    あめ  *  つう             ま\n| 1 この三、三日 ずっと雨が降り続いている。あしたは晴れる(      )ね。\n\n"
   },
   {
    "page": 122,
    "text": "1 という        2 といった        3 といい        4 といって\nきゅうこう  の               ま   あ\n| 2 | 急行に乗らない〈   )、間に合いませんよ。\n1 は           2 と             9 記           4 ば\nじ     项式\n A「あすの10時ごろお宅に(      )もいいですか。」\nB「ええ、かまいませんよ。」\nうかが 、             うかが               うかが              うかが\n1 伺う        2 伺い          3 伺った       4 伺って\n| 4 | この仕事を(       )よかった。 .\nつづ   -          つづ               つづ             つづ\n1 続けている     2 続ける          3 続けて        4 続けた\nだいがく  にゅうがく   いわ    と しょけん           上\n| 5 | 大学の 入 学のお祝いに図書券(       )あげましょうか。\n1 でも          2 ほど           3 ので         4 しか\nke  お上    ぐ ち\n| 6 | この期に及んで愚痴を(       )。\n1 言えるはずだ                    2 言ってもかまわない\nい                              い     はじ\n3 言わなくなるだろう                4 言っても始まらない\nなん じ  はじ     でん わ                             、\n コンサートが何時に始まるか電話で(       )。\nき       い                       き\n1] 聞くように言う                   2 聞いているだろうか\nき                               き\n3 聞いてみてください             4 聞くかもしれない\nか ぜ  、なお          い しゃ\n 風邪が治らないなら、医者に(       )ですよ。\nみ\n1 見てくれることもない        2 見てくれたほうがいい\nみ\n3 見てもらうこともない           4 見てもらったほうがいい\nそんしつ  しょう    いま  ぶ か\n| 9 | 損失が 生 じた今、 部下を(        )。\nせ\nml  責めても しかたがない           2 責めなくてもいけない\nせ\n3 責めてくださいませんか          4 責めなくてもかまわない\nか じ          ひと  か ぞく            き     なみだ  で\n 火事でたくさんの人が家族を(        )を聞いて、 涙 が出た。\n1 失 ったというもの            2 失うといったもの\nう し                      うしな\n3  失 ったということ             4 失っているところ\nは                            はじ\n もう終わったことなので、いまさら(     )始まらない。\n1 後悔しても                     2 後悔にも\nこうかい                              こうかい\n3  後悔 しなければ                  4 後悔では\nじょうし そうだん          き               、\n| 12| そのことは 上 司と相談     )、 決められないんですが…。\n1 してみせると            2 してみせなければ\n3 してみれば                     4 してみないと\nで 用 はw   こわ             みせ   ひと\n 腕時計が壊れたので、店の人に(       )。\n\n"
   },
   {
    "page": 123,
    "text": "1 直してよかった                 2 直してもらった\n3 置してみた                    4 赴してもかまわなかった\n問題2 つぎの文の_ 娘 に入る最もよいものを、1・2・3.4からーつえらびなさい。\n 嘘がばれた 。。 六           よ。\n1 弁解し       2 始まらない      3 ても         4 いま\n[ 15] 後は            を赴してもらった。\n1 に          2  係り の人       3  間違い       4  書類の\n ーか月前に、ダンスを習い始めたが、                  大            下\n手にならない。      ]\n1 ても         2 どんなに       3 なかなか      4 練習し\n このあたりは通学に                   类            代辻かみぇ営くて\nもしかたがない。\n1 の          2 なので         3 マシショシ     4  便利\n いろんなことを身につけたし、                  と思っている。\n1 とと症       2 よかった        3 本当に       4 来て\n問題2 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n\n1962年に、 産業ロボットがアメリカで生まれました。 産業ロボット| 19 |、工場などで\nコンピュータ自動車など、いろいろな物を作るロボットのことです。 今、日本では、世\n界の産業ロボットの、約70パーセントを使っています。ほかの17パーセントは、ヨーロッ\nパで、13パーセントは、アメリカで使っています。\n\nロボットは、 長い時間、仕事をする| 20 |。そして、人間の行けない所へも、行くこと\nができます。たとえば、 危ない所とか、狭い所などです。火事の時など、もし、人間が火\nの中に入って行ったら、あぶないですが、ロボットは| 21 |。ほそいパイプの中には、人\n間の手は入れられませんが、ロボットの手は入れられます。海の中でも、ふくざつで、危\nない仕事をやることができます。\n\n少し前までは、 考えたり、人間の| 22 |ロボットはありませんでした。しかし、このご\nろは、目で物を見て、やり方を考えて、仕事をするロボットや、話ができるロボットが多\nくなりました。\n\nそして、 仕事もはやくなりました。 人間がする時間の二分の一か、三分のーーで、いろい\nろな物を作ることもできます。\n\nこれからも、ふくざつな| 23 |、人びとの生活は、もっと楽になるでしょう。\n\n\n"
   },
   {
    "page": 124,
    "text": "1 ということは          2 と思うことは\n3 というのは           4 と思うのは\n1 ことがあります         2 とどなります\n3 ことにします          4 ことができます\n[21 |\n1 入れて行きます .          2 入って行けます\n3 入れて行けます          4 入って行きます\n[22.|\n1 ことばがわかったりする      2 ことばを持ったりする\n3 ことばができるようにする     4 ことばを聞くようにする\n1 ロボットが少し増えておいて     2 ロボットがだんだん減ってきて\n3 ロボットがなくなって       4 ロボットがたくさん生まれて\n\n"
   }
  ]
 },
 {
  "unit": 12,
  "title": "第12単元 練習問題",
  "pages": [
   {
    "page": 130,
    "text": "                第12単元 練習問題\n\nパートI 基礎を固める練習\n\n問題1 つぎの文の〈     )に入れるのに最もよいものを、 1-2・3・4から一つ選びなさい。\nてんき よ ほう          9 汐   あめ     結\n\n 天気予報      )、午後から雨が降り出した。 ・\n1 とおりに   2 どおりに    3 とおりの   4 どおりだ\nた なか    で っ          本\n\n 田中さんから電話があって、きょうは来られない(      )。\n1 ということだ 2 というのだ   3 というものだ 4 としている\nおよ  、                 se\n\n| 3 | 泳げる(      )、10メートルぐらいだ。\n1 とともに   2 かわりに    3 といっても   4 かたちに\nきょう と         きんかく 七  おも  記\n\n[4 | 京都      )、 金関寺を思い出すでしょう。\n1 というのは  2 というと    3 といっては   4 といっても\nひと いっしょう           みじか\n\n| s | 人の一生 という(      )は、短 いものだ。\n1 蕊此     2 らしい     3 の      4 直らめ疲\n\n<下     かざ\n\n6 | ネックレス( )首につける飾りものだ。\n1 とは     2 には      3 こと信    4 ものは\n\n 子どものいたずらで、 大声で叱る(      )のことではない。\n1 ため      2 はず       3 よう      4 ほど\n\nもり          ひと  」\n\n さっき、森さん(  . )いう人がきてたよ。\n\n1 うち      2 から       3 とか      4 さえ\nはかせ か てい  しんがく                 ぶん や  けんきゅう\n\n| 9 | もし博士課程に進学する(      )、どんな分野を研 完 したいですか。\n1 としたら   2 いっぽう    3 としては   4 とともに\nわたし おんがく                 す\n\n 私 は音楽(      )、ダンス(      )が好きです。\n1 とか/とか   2 たり/たり    3 と/と    4 し/レ\n\n\n"
   },
   {
    "page": 131,
    "text": "問題2? つぎの各文の     )に入れる最も適当な言葉を、下のヘー]の中からーつ選びな\nさい。\nA といったら    B といえば   C というのは Dというほどではない\nE といっても    F というものは   G どおりに   H とか\n そのときのうれしき(      )、 言葉では 表 現できないほどだった。\n 古川さんは今夜パーティーがある(      )で、ドレスを着て出かけたよ。\n 日本 料理(      )、お寿司やお刺身などが有名 です。\n[14] 映画監任(     )、 映画を作ることを仕事とする人のことだ。\n その 話 が本当だ(       )、今までの替 力 が水の泡になる。\n 幸運(       ) 準備のある人にしか 訪 れないと思う。\n ここの 料 理は特別においしい(       )が、 店の雰囲気がいいので人気がある。\n のどが腫れているので、辛いもの(       )、脂 っぽいもの(       )、なるべく食\nべべないようにしてください。\n マイホームを購入 した(       )、狭い1DKのようなものだが。\n その選洗は 皆 の期待        )、浴メダルを取った。\n問題3 下の(     )の中の言葉を適当な形に変えて、文中の     に書きなさい。\n 北京に旅行に       としたら、秋が一番いいです。 (行く)                     」\n 共気予報によると、あすの午後から雪が_ _ . ということだ。 (降る)\n 宝 しくできた鉄道は、 市内から空港までただ25分しか__ ということだ。(かかる)\n いくら酒が        といっても、そんなにたくさん飲めません。 (好きだ)\n[25] くしゃみをしたぐらいで、わざわざ 薬 を       というほどではない。 (飲む)\n 田中さんの 話 では、林 さんは来月アメリカに       とか。 (出張する)\n これは別に 頭 を      というほどの間題ではない。 (悩ます)\n\n"
   },
   {
    "page": 132,
    "text": "第 12 単元\nパートL 実戦練習\n問題1 つぎの文の〈     )に入れるのに最もよいものを、 1・2・3・.4から一つ選びなさい。\nけい じ ばん   L                 き まつ         らいげつ     はじ\n| 1 | 掲板の知らせによると、 期末テストは来月から始まる(        )。\n1 こそ     2 とか     3 くらい    4 くせに\nむすめ こいびと     き たい\n| 2 | 娘の恋人は私たちの期待(     )人であった。\n1 について   2 としたら    3 とところに   4 どおりの\nな ふだ               じ ぶん   大 求证   か\n13 |名札(      )、自分の名前を書いたカードのことです。\n1 ということは  2 というと    3 というのは  4 といったら\n| 4 | 庭にはアジサイ(      )、 バラ(      )、いろいろな花が咲いている。\n1 でも/でも   2 も/も     3 や/や    4 とか/とか\nた なか                     さいきん       、 か            上    いっしょうけんめいはたら\n| s | 田中さん(      )、 最近、人が変わったように一 生懸命 働いている。\n1 といえば   2 としたら    3 というか   4 どおりに\nらいしゅう   でん き りょうきん\n[6 ] ニュメースによれば、 来 適から電気料金が )。\n1 上げるようになっている       2 上がるようにしている\nあ\n3 上げるというものだ        4 上がるということだ\nい き けん お\n 定期券を落としたといっても、(      )。\nきんがく                   きんがく 后\n1 たいした金額ではない       2 かなりの人金額だ\n3 返してくれなかった         4 返してあげた\nしんかんせん                        もくてき 为           じ かん\n 新幹線で(     )、目的地まで3時間ぐらいかかります。\n    1 行ってはじめて          2 行くかどうか\nい  どう じ              い\n3 行くと同時に           4 行くとしたら\nしゅじゅつ             本            びょう き                 しんぱい              、\n[9 |手術をしなければ(       ) 病 気ではないので、心配しないでください。\n1 いけないというほどの       2 いけるというほどの\n3 いけないほうがいい        4 いけるほうがいい\n[ie]     )、人に与えてもらうものではなく、自分の 心 で感じるものだ。\nっ                 あわ\n1 補 せというものから       多 幸 せというものは\nあわ\n3 幸せというからには        4 守せということから\n       あいさつてい ど\n[11| フランス語が(       )、挨拶程度なんです。\n1 できるということは         2 できるといえば\nな                 はな\n3 語せるといっても          4 話すというのは\n\n"
   },
   {
    "page": 133,
    "text": "[2] 私の(      )、今回の試験開題はそんなに 難 しくなかった。\n1 予想どおり           2 予想といえば\n3 予想ということで         4 予想とすれば         「\n ずっと 机 に向かってばかりいないで、時々 散歩      )ジョギング(      ) して\n*体 を動かしてください。\n1 とすれば/とすれば        2 ということ/ということ\n3 とは/とは           4 とか/とか\n問題2 つぎの文の _ 文 に入る最もよいものを、1・2・3・.4からーつえらびなさい。\n 今度の                   太            としたら、30人ぐらいになるで\nしょう。\n1 に      ら ポーディー    3 来る     4 全員が\n 田中さんが紹介して                   大            探してみたが、見\nつからなかった。\n1 本を     2 メモの     3 とおりに   4 くれた\n[16@| ニュースによると、日本の         ということ\n1 串国     2 来適から    3 を訪問する 4 総理大区が\n イタリア語ができるといっても、                       ーー           ほどではない。\n1 という     2 教えられる    3 立って     4 教壇に\n[18] も うすぐ直月ですね。 正月 _。。 婦 wow实\nいましたね。\n1 を      2 半年は     3 福袋     4 といえば\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n日本は地震の多い国です。 1年間に千回ぐらいあります。この回数を聞くと、外国人は\nたいていびっくりします。しかし、日本人は小さい地震なら、あまり心配しません。日本\nでは地震の研究が進んでいるので、丈夫なたてものが多いです。だから、地震があって\nも、たてものがたおれる| 19 |のです。お寺や大仏など、昔の古い物も| 20 |、たくさ\nん残っています。\n\n"
   },
   {
    "page": 134,
    "text": "第12 単元\n\nもし、 地震がおきたら、どうしたらいいのでしょうか。火を使っていれば、すぐその火\nを消さなければなりません。家がたおれるより火事になるほうが危険なのです。それか\nら、戸やまどを開けて、外へ出る| 21 |です。しかし、 地震がおきても、すぐ外へ出ない\n方が安全です。もし、上から何か落ちてきたら、危ないから、机やベッドなどの下に入り\nます。1分ぐらいたてば、 地震が続いていても、大丈夫だから、火やガスなどが| 22 |、\n調べます。大きい地震があった時は、ラジオやテレビで放送するから、よく聞いて、正し\n\n  いニュースを知ることが大切です。\n\n| 23 |]、知ることはまだむずかしいです。普から、動物がうるさく鳴いたり、物を食べ\nなくなったりすれば、地震がおきるという話もあります。しかし、ほんとうかどうか、研\n究しなければ、わからないことがたくさんあります。科学は進んだが、 地震の予知は、ま\nだむずかしい問題です。\n\n1 ことはあまりない          2 おそれがある\n\n3 かもしれない            4 ことができる\n\n1 たおれてこそ            2 たおれるかわりに\n\n3 たおれずに             4 たおれたあと\n121 |                        「\n\n1 用意しそうにない          2 用意したことにする\n\n3 用意したばかりだ                4 用意をしたほうがいい\n|22 |\n\n1 安全のように            2 安全かどうか\n\n3 安全らしい             4 安全までに\n|23| 1 地震がいつ起きるのか        2 地震が起きるといっても\n\n3 地震が起きるのではないか      4 地震が起きるというほどでもない\n\n\n"
   }
  ]
 },
 {
  "unit": 13,
  "title": "第13単元 練習問題",
  "pages": [
   {
    "page": 140,
    "text": "第13単元 練習問題\nパート 1{ 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3.4から一つ選びなさい。\nたんじょう 你\n お誕 生 日のプレゼントならブローチ(       )いかがですか。\n1 なんか    2 よりも     3 ほうが    4 だけで\nこうちょうせんせい はなし 、はや              なが   さま\n| 2 |校長先生の話が早く(      )かな。 いつも長くて困るよ。\nお           お            お           お\n1 終わっている  2 終わらない    3 終わっちゃう  4 終わる\nきび  ちち         はは      ひと\n 厳しい父とは(       )、母はやさしい人です。\nたい                                                          ちゅうしん                       はんたい\n1 に対して   2 ついでに    3 中心に    4 反対に\nかのじょ しゅみ           なら\n| 4 | 彼女は趣味        )ピアノを習っている。\n1 として     2 まえに      3 のまま     4 わけで\nかれ    に ほんじん                        ちゅうごく   ふる   けんちく                 ちゅうごくじん い じょう   くわ\n| 5 | 彼は日本人であり(     )、中 国の古い建築については、中 国人以上に詳しい。\n1 ながらも   2 つつも     3 ほかも    4 よりも\nじ だい   へん か                まち   未芳 手    か\n| 6 | 時代の変化(      )、町の様子も変わってきた。\n1 あいだは   2 までには    3 とともに   4 からには\nうんてん\n 運転するときは、(       )なければならない。\nしゅうちゅう        しゅうちゅう         しゅうちゅう       しゅうちゅう\n1 集中   2 集中せ   3 集中し , 4 集中する\nかれ 、    き                す   、\n 彼がすぐに来てくれたので、(      )済んだ。\n未           未           ビゴ          にコ\n1 待たずに    2 待たなくて   3 待つまでに  4 待つために\nそつぎょう ろんぶん   ていしゅつ      まえ            なか   いち 京                   なお\n| 9 | 卒業論文を提出する前に、その中の一部を(       )直した。\n1 書く     2 書き      3 書け     4 書い\nSA 和  す\n 電話で済せむことだから、わぎわぎざ(       )なくてもいい。\n1 行か     2 行く       3 行き     4 行け\n\n"
   },
   {
    "page": 141,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、 下のAJの中から一つ選びなさい。\nA としても        Bとともに C とは反対に  Dないで済んだ\nなお\nEE ないかな       F 直し      G ながら       H なければならない\nI かまわない      J なんか\nひ じょう              ほん          しかん                いち ど よ\n[11| 非常におもしろい本なので、時間があったら、もう一度読み(        )たい。\nなつやす   ともだち               い\n[ 12 | 夏休みは友達(       )、パリに行きました。\nざんねん                   いっしょう\n[13] 残谷     )、うちのチームは一 勝 もできなかった。\n、 だれ  さんせい                     じ ぶん  しん   みち  あゆ  つづ\n たとえ誰も賛成してくれない(      )、自分の信じる道を歩み続けていきたい。\nじ かん                      いそ\n[15 | 時間がたっぷりあるので、そんなに急がなくても(      9よ上。\nあめ  はや  过\n 雨が早く止んでくれ(       )。\nみんな   よ そう               たか だ せんしゅ   し あい\n 皆 の予想(      )、高田選手は試合に出なかった。\nあした        、              なく しゅう\n| 18 | 明日はテストがあるので、しっかり復 習 し(      )。\nともだち 、ふる  れいぞう こ            か\n 友達が古い冷蔵庫をくれたので、買わ(       )。\nわたし    きも   に\n 私 の気持ちがきみ(       )わからないよ。\n問題3 下の(     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nかのじょ       ひと               しん      ・     けっこん\n 彼女があんな人と       なんて、信じられない。 (結婚する)\nかのじょ  >欄|いテン)           、    し                    L\n[22] 彼女は事実を _ _ ながらも知らないふりをしていた。 (知っている)\nしょるい  なか  なんか しょ  ま ちが               いち ど        なお             >\n 書類の中に何ヶ所か間違っているから、もう一度         直してください。 (書く)\nみっ か かん  やす       り よこ う                 とお  ところ    むり 1  二   MY\n たった三日間の休みでは、 旅行に 。 _ _ としても、遠い所は無理だろう。 (行く)\nびょう き  はや              なお\n125| 病気が早く      かな。 (治る)\nとも 、   、くるま  えき   おく                    す   、   ち こく\n 友だちが 車 で駅まで送ってくれたので、         で済んだ。 (遅刻する)\nじ ぶん      も               8\n      ながらもやっと自分の店を持つようになった。 (狭い)\nパートI 実戦練習  ・\n問題1 つぎの文の〈     )に入れるのに最もよいものを、 1・2-3・4から一つ選びなさい。\n>                  かね  か\n1 | 彼はいやいや(       )、金を貸してくれた。\n1 ながらも       2 ばかり          3 あまり         4 わけで\n-                        123\n\n"
   },
   {
    "page": 142,
    "text": "| 2 | クラスメートの代表て   )今回のスピーチ大会に参加する予定だ。\n1 にして     2 ことに      3 うえに     4 として\n このプランについてもう一度(       )門してください。\n1 考える     2 考え      3 考える     4 考えて\n| 4 ] 年をとる(   )、 記憶 カカ が 衰 えてきた。\n1 について    2 ながらも     3 とともに    4 とおりに\n| s ] 彼に比べたら、僕(   )まだまだ足りない 所 がたくさんある。\n1 とおり     2 らし<      3 さえ      4 なんか\n| 6 | おとなしい姉(   )、 妹 のほうはおしゃべりだ。\n1 とは反対に   2 ながらに     3 とばかりに   4 とともに\n| 7 ] ちょっと手が離せないので、だれか代わりに電話に   )。\n-] 出ておいてほしい         2 出てきてほしい\n「   3 出ておいたかな           4 出てくれないかな\n| 8 | 普段からしっかりと復 幸 しておいたので、託験の前に(   )。\n1 機てないですんだ          2 慌てないほうがいい\n3 尼てるということだ         4 近てようがない\n| 9 A 携帯電話ですか。どんな機種をご希望ですか。こちらが新品でございますが。」\nB [通話機能とメール機能だけで結構です。(「  )が。」\n1 やっぱり新品がいいね        2 新品でなくてもかまいません\n3 やっぱり新品がほしいね       4 新品を使ってください\n この授業 の単位が取れなかった人はも う 一度試験を(        )。\n1 受けてもかまわない   「     2 受けるようにする\n3 受けなくてはいけない        4 受けることになる\n バスが早く(     )。じゃないと、また遅れる。\n1 来るかな               2 来ようか\n3 来ないかな            4 来ようかな\n[2] 私 たちは外国語を(   )とともに、その国の文化や事 情 もよく勉強 しなければ\nならない。\n1 勉強する            2 勉強しても\n     3 勉強しょう            4 勉強しろ\n あの子は幼い(       )、札儀正しくて落ち着いている。\n1 なんか    2 とともに    3 としては   4 ながらも\n4124\n\n"
   },
   {
    "page": 143,
    "text": "問題2 つぎの文の_ 文 に入る最もよいものを、1-2・3.4からーつえらびなさい。\nみせ                               き\n14| その店は 。。。 婦       も売っている。\n1 ほかに       2 おもちゃ       3 なんか       4 文房具の\nあた      、   あさ\n[15 | この辺りでは、ごみは朝                  大           いけないことに\nなっている。\n1 なければ      2 までに        3 出さ        4 8時\nかれ  い           レと じつ                                  レ\n[ 16 | 後の言っていることが事実だ          信じないだ\nろう。\nだれ                                           しょう こ\n1 誰も        2 としても       3 なければ     4 証拠が\n インターネットで本を 注文したので、                  大            済\nんだ。\nwe       ほん や           い\n1 本屋        2 行かないで      3 に          4 なんか\nあね     ともだち                                               す                    わたし\n18 | 姉は友達とおしゃべりするのが好きだが、私は        容\nて           す                    -\n一人でいるほうが好きだ。\nはんたい          あね             しず\n1 反対に       2 姉           3 静かに       4 と\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1・2・3-4から\nーつ選びなさい。\nあらわ      のうめ\n        日本人はあまり感情を顔に 表 さなくて能面| 19 |]、 という人がいます。アメリカ人だ\nったら、面白い時には大きな声で大きな口を開けて笑ったり、 怒った時には大きな声で時\nりの言葉を言ったりして怒りの| 20 |、日本人の場合は反応が少ないです。それは、日本\nおとな げ な\nで感情をはっきり顔に表すのは良くない、 大人気無いと考えられているからです。\n会議などで、だれかの言ったことに怒った人はどうするでしょう。アメリカでは、多分\nたい 央  あらわ\n怒った人は自分の感情を態度で 表 すでしょう。でも、日本では怒った感情を| 21 |、話\nを続けると思います。 自分の感情を出して他の人を不快な気持ちらにしないほうがいい、と\nいう思いやりの気持ちもあるのかもしれません。\n悲しい時は、アメリカと同じように、| 22 |悲しい表情を表しません。葬式などで、\n(コ                           遇6表溢\n涙も出さないで悲しみに耐えている人をよく見ます。特に、男性は人前で涙を見せる\nひとまえ\n| 23 |、と考えられていて、普通は人前で涙を見せません。しかし、本当に悲しくて男\n\"おとこ な\n性が泣いた時には、それを「男 泣きま」と言います。\n\n"
   },
   {
    "page": 144,
    "text": "1 のようだ                      2 どおりに\n3 という                         4 のために\n1 感情を表してほしいですが          2 感情を表してみますが\n3 感情を表してもらいますが          4 感情をはっきり表しますが\n[41 |         「\n1 見せるというものにして            2 見せてはいけないが\n3 見せないようにして       4 見せるのではないが\n      [22]\n1 そのために                     2 できるだけ\n3 その後で                       4 それなら\n1 ことができない                  2 そうにない\n3 信きではない                    4 はずがない\n\n"
   }
  ]
 },
 {
  "unit": 14,
  "title": "第14単元 練習問題",
  "pages": [
   {
    "page": 149,
    "text": "第 14 単元\n第14単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(〈     )に入れるのに最もよいものを、 1・2-3・.4から一つ選びなさい。\nしゅっちょうちゅう    ぶな ちょう                 やました        、かい ぎ    しゅっせき\n[1| 出張中の部長(     )、山下さんが会議に出席した。\n1 によって     2 にかえて       3 にかわっでて    4 について\nこうがい            か    もの       ぶ べん\n21(       )ここは郊外だから、 買い物には不便だ。\n1 なにしろ    2 なにも     3 せっかく    4 おそらく\nむす こ    こうこうにゅうがくいわ                 なに\n 息子の高校入学祝い(       )何がいいかな。\n1 于         2 に           3 の         4 を\nひと  My      き\n| 4 | あいつはほかの人の言うことを聞かないから、(       )にくい。\nせっとく          せっとく           せっとく          せっとく\n1 説得した     2 説得する       3 説得し       4 説得して\nしんじゅく  い          でんしゃ             おも\n| s |新宿に行く(       )、電車で行ったほうがいいと思います。\n1 ので        2 なら         3 から        4 たら\nあさくさ ちか        さんじゃまつ  本\n| 6 | 浅草の近く(       )、三社祭りが行われた。\n1 において     2 にとって       3 として       4 にしたら\nだい と かい                いな か            しず      ぶっか   やす\n 大都会(       )、田舎のほうは静かで物価も安い。\nくら           くら             くら           くら\n1 で比べて     2 が比べて       3 だ比べて     4 に比べ\nこうつう じ こ          し りょう  あぁあつ\n 今回の交通事故(       )資 料 を集めている。\nともな                        かん\n1 に伴って     2 にしでても       3 に関する     4 によれば\nさん か                         さん か                           はや      れんらく\n9 | 参加する(       )、参加しない(       )、早めに連絡したほうがいい。\n1 にしろ/にしろ                2 など/など\n3 につれ/につれ                4 たり/たり\nでんしゃ  い\n A 「電車で行くのですか。 」\nB「いいえ、バス(      ) します。」\n1 窓         2 从           3 を         4 が\n\n"
   },
   {
    "page": 150,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nさい。\n      A 何しろ       B なら     区 攻      D において      E にかわって\nかん                     くら\nF に関しては G にくい   H 比べて   1 にしろ/にしろる   J にする\nかい ぎ         SE\n 会議はあしたの午後(       )。\nしんじん         在 しよう            し かた\n|12|(        )新人ですから、多少 ミスがあっても仕方のないことだ。\nあし    けが    さ とうせんしゅ          うえむらせんしゅ 、 し あい  しゅつじょう\n 足を怪我 した佐藤選手(       )、上村選手が試合に出 場 した。\nやま だ      い}\n A「山田さんは今どこですか。 」\n直: 守                             けんきゅうしつ\nB「山田さん(     )、さっき、研 究 室にいましたよ。」\nちゅうせん    けっか                       ョ                 はっぴょう\n[5] 抽選の結果はホームページ(       )発表 します。\nしゃ  いま  かんきょう                しょうひん  かいはつ\n|16| わが社は今、環 境      )やさしい商品を開発している。\nき かい  せつめい  ぶふくざつ  わ\n この機械の説明は複雑で分かり(       )です。\nさんちょう   ふもと           き おん  ひく\n 山頂は、焦 に(       )気温が低い。\nせいてん           う てん               どお    しゅっしゃ\n 晴天       )、雨天(       )、いつも通りに出社しなければならない。\nじ けん             なん  ほうこく   う\n その事件(      )、まだ何の報告も受けていない。 ・\n問題3 下の(     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nか                し し直る           か\n       にせよ、買わないにせよ、まず試 食 してみたい。 (買う)\nなに    きゅう                   かんが\n[22| 何しろ急な     ので、ちょっと 考 えさせてください。 〈話)\nさら                あんぜん      わ\n この息は       にくくて、 安全です。〈割れる)\nひと                    むか り\n どうしても        というなら、ほかの人にやってもらうしかない。 (無理だ)\nし どど                     才     きら\n      にしろ      にしろ、この仕事をやらなければならない。 (好きだ/嫌いだ)\n 本当に       たいなら、 行ってもかまわないよ。 (行く)\nょよう     と                                       かのじょ    じつりょく                みと                        と\n 質 を取ったにしろ       にしろ、後女の実 力 はみんなに認められている。 (取る)\nパートTLI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。\nれんしゅう  まいしゅう  どよう 你\n ゴルフの練 習 は毎 週 の土曜日      )しましょうか。\n\n"
   },
   {
    "page": 151,
    "text": "1 が           2 を            8 容           4 に\nひこう き         よわ        しんかんせん  い\n| 2 | 飛行機(       )弱いのなら、新幹線で行くしかないだろう。\n1 の           2 で            3 諾           4 と\nわ しょく  ちゅう か りょう り           あじ 、\n13 |和食は中華料理(      )、味があっさりしている。\nくら               本\n1 にかけて      2 に比べて        3  に限らず      4 にかわり\nに ほんじん   おおみそ か    よる   なに    た\n14 | A「日本人は大星日の夜、何を食べますか。」\nおおみそ か  よる        か ぞく  「 っ0 の本=  必       ぶふ つう\nB「大蜂日の夜(     )家族で年越しそばを食べるのが普通- : .。。」\n1 なら         2 から           3 でも         4 とき\n芋 -要孝-  しんにゅうせい にゅうがくしき  だいこうどう       おこな\n[5 | 今年の新入 生の入学式は大講堂(         ) 行 われるそうだ。\n1 にとって       2 にくら太て      3 につれて      4 において\nなに\n| 6 | 何しろゴールデンウィークだから、(      )。\n1 ホテルはとても広い 。           2 ホテルから近い\nよ やく                         い\n3 どのホテルも予約でいっぱいだ       4 ホテルに行くところ\nぴょう き  にゅういん       はは\n 病 気で入院している母にかわって、(      )。\nちち  りょう り  つく                       ちち    あ\n1 父が料理を作ってくれた           2 父なら会ったことがある\nちち      げん き                    ちち  いち ど  き\n3 父はきっと元気になるだろう        4 父は一度も来てくれなかった\nちゃ れき し  かん\n お茶の歴史に関しては、(       )。\n   とうろん   ひと 生 、                      しかい じゅぎょう とうろん    _\n1 討論した人が増えている           2 また次回の授業 で討論しよう\nとうろん   ひと                       とうろん\n3 待論する人がなくなっている       4 討論したところだった\nどう ろ   いまこう じ ちゅう        じ どうし中\n[9 | この道路は今工事 中 なので、自動車は(        )。\nとお                             とお\n1 通りそうだ                2 通るようになった\nとお                             とおお\n3 通りやすい                4 通りにくい\nじ ぶん                 ひと  きょうりょく\n 自分でやるにしても、ほかの人と協力するにしても、(       )。\nいそが                        なっとく      し ごと\n1 ますます 忙 しくなった          2 納得のいく仕事をしたい\n和 靖波  り よう  一                        Ez 党捧  お\n3 仕事の量が減ってきた            4 仕事が終わったらしい\n 次回の環境 会議は 上 海(       )開かれるそうだ。\n1 における                      2 に持いて\n3 にかわって                 4 にかんして\nつ ゆ   き せつ  Lo だ  、たか   せんたくもの\n 梅雨の季節は湿度が高くて洗濯物が(       )。\nゝわ                             ま\n1 乾きにくい                    2 千しやすい\n*                              ほ\n3 乾きやすい                    4 千しにくい\nちゅう こ                        みせ\n[13| 中 古のパソコンを(      )、その店がおすすめです。\n\n"
   },
   {
    "page": 152,
    "text": "第 !は 単元                                                    ]\n「    1 買うと     2 買えば       3 買うに      4 買うなら\n問題? つぎの文の 災 に入る最もよいものを、1.2-3-4からーつえらびなさい。\n 日本                  女           により禁じられている。\n1 未成年者の  2 においては   3 法律     4 飲酒は\n[ 1s] この本は                  大           ので、今ベストセラーとなっ\n莽。\n1 gs王年ア     2 いる         3 富んで      4 に\n 条しろ           の人を探すのが大変でした。\n1 話だった   2 代わり     3 急な     4 ので\n 会議に出席するにしろ                   大            ください。\n1 にしろ     2 連絡して    3 早めに     4 欠席する\n[ 15 ] 先月、行 われた「ケータイ 小説              女                     面白\nかった。\n1 は         2 アンケート     3 とても       4 に関する\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1・2・3・4から\nーつ選びなさい。\n\n大切なことは、メールではなく、 直接会って話す| 19 |。直接会って話をしたほうが、\n相手のことを大切にしている気持ちが伝わります。また、相手の公囲気や表情から、的確\nな言葉を選んで話せるし、 誤解やすれ逢いも| 20 ]でしょう。\n\nメールだと、言葉に重みがなくなり、誤解も生まれやすくなるのです。\n\n明治大学の学生が「つきあっている人との別れ話をメールで伝えるか、直接会って伝え\nるか」という| 21 |、3ヵ月以上つきあった人に対しては、 直接会って伝える人が半数以\n上いるけれど、3ヵ月未満しかつきあっていない人に対しては、| 22 |人が多いという結\n果が出ました。「ちゃんと交際した」と思える人との別れ 話 は、メールではなく、直接\n会って話をする人が多いのです。\n\nメールは、いつでもどこでも手軽に使えて便利ですが、大切な人との大事な話は、直接\n会って話すのが基本です。\n\n会って話す| 23 |、相手を大切にしている気持ちが伝わります。 直接話している間に、\nその場の空気や流れが変わってくることもあるでしょう。\n\n\n"
   },
   {
    "page": 153,
    "text": "第14単元\n1 そうになりましょう             2 ためになりましょう\n3 ようにしましょう          4 としなければならないでしょう\n1 起こしやすくなる          2 起こりにくくなる\n3 起こしにくくなる          4 起こりやすくなる\n[21|\n1 調査をしたところ          2 調査をしながら\n3 調査するとともに          4 調査するとしても\n1 メールですむ            2 電話ですむ\n3 メールですませる          4 電話で済ませる\n1 時間を作らないかなと        2 時間を作り直すように\n3 時間を作るなら           4 時間を作ることで\n\n"
   }
  ]
 },
 {
  "unit": 15,
  "title": "第15単元 練習問題",
  "pages": [
   {
    "page": 159,
    "text": "第1S单元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、1・2・3・4からーつ選びなさい。\nわたも      おお\n| 1 | このコートは私(       )大きすぎる。\n1 より     2 には      3 では     4 にも\nに ほんじん   め うえ   ひと               けい ご   つか\n| 2 | 日本人は目上の人(       )、 敬語を使う。\nたい                      ともな\n1 に対して  2 といえば    3 に伴 って   4 としたら\nな        まち ふうけい かんどう\n 名も(       )ぬ町の風景に感動した。\n本          ls            し\n1 知れない    2 知れる     3 知ら     4 知らない\nき てい                        い はん   せんしゅ   しょばつ    う\n| 4 | 規定(       )、ルール違反の選手は処罰を受ける。\n1 にかわって   2 にしろ     3 だよって    4 にとって\nかれ しゃかいがく      けんきゅう\n| 5 | 彼は社会学(       研究 している。\n1 にしても    2 について   3 において   4 にかわり\nかいかん                        き ねんしゃしん    を\n[6 | 会館のロビー(       )記念写真を撮ることになっている。\n1 にて     2 には      3 にも     4 に\nて がみ   わたし                                     たからもの\n この手紙は 私(      )とって、かけがえのない 宝 物です。\n1 を      2 で       3 が      4 に   」\nてん き よ ほう        き 有ご   ゆき 、人な   本  、        “\n 天気予報(       )、午後から雪が降るそうだ。\n1 によると    キョ    3 によっては   4 により\nとき 、         いや     わす                               」\n19 | 時がたつ(       )、嫌なことも忘れる。\n1 飼つれて   2 につれる    3 につれは   4 につれも\nまいにちへや  まど  あ                                       ，\n 毎日部屋の窓を開け(       )ならぬ。\n1 なら     2 には      3 ねば     4 ない   ]\n\n"
   },
   {
    "page": 160,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nさい。\nたい\n人A  に対して   B について   C につれて   D にて   E にとっては\nF には      G とともに   H によると 工交    J ねばならぬ\nかのじょ    し          あいだ  しんゆう\n 彼女とは知ら(     _) 間 に親友になった。\nしゃいん       きゅうりょう たか   、たか\n 社員(        )、給 料が高ければ高いほどいい。\nらいねん   ぜいきんりつ  さ  、\n 万二一区       )、来年から税金率が下がるそうだ。\nちゅうごく       しょうすうみんぞく   ひとびと  せいかつしゅうかん        けんきゅう\n 中 国における 少 数民族の人 々 の生活習慣     )研究 している。\nきゃく          ていねい とと ば\n[15] お客さん(  )、丁寧な言葉づかいをしなければならない。\nげんかん  はい  とき  和 人  内  、\n 玄関に入る時、靴を脱が(       )。\nえんだか 、ますま         に ほん  りょこう  い ひと 人\n 円高が進む(       )、日本へ旅行に行く人が減ってきた。\nこんかい しゅのうかいだん よこはま      かいさい    よ てい =\n 今回の首脳会談は横浜(       )開催される予定だ。\nはな  こと ば   じ だい         か                  -\n“ 話し言葉は時代       )変わってきました。\nしょうせつ  か          じ かん\n 小説を書く(      )時間がかかる。                  「\n問題3 下の(〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nしゃちょう  はな        兰志 性        き\n[21 | 社長 と話すときは、言葉づかいに気を       ねばならない。 (つける)\nとっきゅうでんしゃ           えん つい か りょうきん 、ひつよう 、  の\n[22 | 特急 電車に       には、500円の追加 料 金が必要だ。 (乗る〉\n                                             てんかい\n このドラマはストーリーの      につれて、おもしろくなってきた。 (展開)\nじ こげんばぽば         しゅしょう  たい   ひ はん 、たか         My\n 事故現場に       由首相 に対する批判が高まっている。 (行く)\nき こう  はる  あめ 、        たい     なゆ       かんそう         おお\n| 25 | ここの気師は春は雨が      に対して、冬はわりと乾燥している。 (多い)\nさいしん  ちょう さ        いま  じょうきょう   だんせい - くら     じょせい    ee  、しゅう しょく\n 最新の 調査によると、今の状 況では男性に比べて、女性のほうが就職に\nゆう り\nそうだ。 (有利だ)\nしゅうまつ  き おん 、きゅう                 か ぜ   ひ    ひと  站 、        き  、\n 週 未に気温が急に      につれて、 風邪を引いた人も増えてきた。 (下がる)\nパートTI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3-4から一つ選びなさい。\nた なか              し ご  じんせい                       ・\n| 1 | 田中さん(〈       )、 仕事が人生のすべてである。\n\n"
   },
   {
    "page": 161,
    "text": "1 によって    2 に向けて    3 にとって    4 にかわって\n[ 2 ] あすは第3会議室(       )説明会を 行 います。\n\n1 までに    2 とも      3 ところ    4 にて\n きょうはところ(       )雨が降るかも しれない。\n\n1 になって    2 により     3 にあって    4 において\n[4 | 育児      )失がよく売れているそうだ。\n\n1 に関する   2 もとに     3 ままの    4 たびの\n[5s | そんな 難 しい質問には 私 も(        )め。\n\n] 符えさせる   2 紗えられる    3 稚えさせ   4 簿えられ\n[ 6 | 今朝の新聞によると、来年度、二つの医学大学が(       )。\n\n1 新設されている           2 新設されることにした\n\n3 新設されるそうだ          4 新設されたと言われている\n 都会には人が絶えず増えている。 (      )、田舎には人口が減り続けている。\n\n1 というのは           2 これみたいに\n\n3 なぜかというと          4 これに対して\n 経済の発展につれて、人 々 の生活も(       )。\n\n1 豊かになってきた         2 豊かだっただろう\n\n3 豊かになるぐらいだ        4 豊かにならぬだろう\n[| 9 ] 老後を有意義に過ごすには(        )が大事だ。\n\n1 趣味がおもしろくなるの       2 趣味を持つこと\n\n3 趣味ができるようになるの      4 趣味を持つことができる\n[10] いいレポートを書くためには、もっとたくさんの資料 を(   )。\n\n1 集めそうもない           2 集まりそうもない\n\n3 集めねばならめぬ           4 集まらねばならぬ\n[| 彼女は事実を知っているくせに、(      )顔をしている。\n\n1 知っていた            2 知りにくい\n\n3 知るならの            4 知らぬ\n この 曲 は新人歌手の中森さきんによって(       )。\n\n1 作らせた             2 作った\n\n3 作っていた             4 作られた\n\n「                                   443\n\n"
   },
   {
    "page": 162,
    "text": "[13] 物価の 上 算 につれて、 生活が(       )。\n1  普しいはずがない               2  苦しく なってきた\n3  苦しくてはいけなかった           4  苦しそうにもない\n問題2? つぎの文の 災 に入る最もよいものを、1・2・3-4からーつえらびなさい。\n ABC 株式会社に行く             方法だ。\n1 には         2 一番いい       3 乗るのが      4 地下鉄に\n 彼は欧米護国             よく知っている。\n1 アフリカ大陸の 2 についても      3 だけでなく     4 国々\n 飛行機で5時間                     3           、車 では二日間もかかる。\n1 かからない    2 に対して       3 しか         4 の\n 英会話の                     娘             どんどん広がってきた。\n1 にっつれて      2 上達         3 が          4 世界\n 私 たちの                     利益のあることだ。\n1 この        2 にとって       3 会社    - 4 計画は\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n\n日常生活の中でけじめの挨拶ができるかどうかで、その人の人間性が[| 19 |。\n\nたとえば、学生時代の先輩に焼肉を| 20 |。その日は当然先輩に心からお礼を言って別\nれるでしょう。ところが翌朝、先輩の会社に電話を入れて「昨日はごちそうになりまして\nありがとうございました」と言える人が何人いるでしょう。また、逆にあなたが後輩にご\nちそうした翌朝、お礼の電話をもらったらどう思うでしょう。 | 21 |後募には「なかなか\n礼儀正しい奴だな」と好感を持ち、 改めて見直すことと思います。\n\n職場でもそうです。営業に出かけるときは 下 22 |」、目上の人が出かけるときには\n\n「いってらっしゃい」をハッキリ言うことです。 言葉だけではなくその場に立っておじぎを\nそえて見送る気持ちが大切です。\n\n夕方、 退社するときにも 昌 23 |」とハッキリ言って丁寧におじぎをします。他の人が\n先に帰るとどきは「お疲れさまでした」と気持ちよく見送ることも大切です。小さいなこと\nですが、これがすべて相手の心によい印象を残すのです。\n\n\n"
   },
   {
    "page": 163,
    "text": "_ 1 評価します            2 評価になります\n3 評価させます           4 評価されます\n1 ごちそうしてあげたとします\n2 おごってあげたになります\n3 おごってもらったとします\n4 ごちそうしてもらったになります\n[21 |\n1 電話を入れていた         2 電話をかけてきた\n3 電話が入ってきた          4 電話がかかっていた\n[22|\n1 行ってきます           2 行ってらっしゃい\n3 だ大いま             4 おかまいなく\n1 お邪魔します          2 ごめんください\n3 お世話になりました         4 おお先に失礼します\n\n"
   }
  ]
 },
 {
  "unit": 16,
  "title": "第16単元 練習問題",
  "pages": [
   {
    "page": 169,
    "text": "第16単元 練習問題\nパート1 基礎を固める練習\n問題1 つぎの文の(〈     )に入れるのに最もよいものを、 1・2・3.4から一つ選びなさい。\nさ ぎょう   かい し      求十   ちゅう い                   此\n| 1 | 作業を開始する前に 注意(        )ことを読んでおいてください。\n1 すべきで    2 すべきに     3 すべき     4 すべし\nはいざら    お\n[| 2 | 灰皿はどこに置いといた(       )。\n1 の      2 と       3 な      4 が\nしんゆう       じゅうねん             さいかい   こ迄為. 宮\n 親友との1 0 年(       )再会を 心待ちにしていた。\n1 ぶりで     2 ぶりの     3 ぶりは    4 ぶりに\nしん       おとな 。 い         き\n| 4 ] 新ちゃん、大 人 の言うことをよく聞く(    )上。\n1 でも     2 んだ      3 のに     4 のが\nき かい   つか   かた        まえせつめい             、              わ                     、\nLS | 機械の使い方はこの前説明したことがあるから、分かる(       )だ。\n1 はず     2 まま      3 など     4 こと\n| 6 | このリモュンはテレビをつける(       )使います。\n1 のは     2 のが      3 のに     4 とは\nあに    つれん      い らい   まいにち     さけ             の\n うちの上兄は失恋して以来、毎日はお洒(      )飲んでいる。\n1 ばかり     2 しか       3 たとえ     4 もし\nち こく     よや お\n しまった、また遅刻か。もっと早く起きれ(      )のに。\n1 ばよかった   2 ばいい     3 ていい    4 てよかった\nすず き          く  おも\n9 | 鈴木さん(    )もうすぐ来ると思います。\n1 と      2 たら      3 なら     4 ば\nいちねんかん   ぶっか    ようしまう\n この一年間、物価は上 昇する       )だ。\n1 ほど     2 ばかり     3 太き     4 ぐでらい\n\n"
   },
   {
    "page": 170,
    "text": "問題2 つぎの各文の〈     )に入れる最も適当な言葉を、下のA一Jの中から一つ選びな\nさい。\nA の      B んだ     C のに     D ば    E ばかり\nF ばかりだ G はず     H ければ   I なぶり J太き\nこんかい  尖 送          はんせい                          おも\n 今回の事故については、 反省す(        )ところがたくさんあると思います。\nねむ  回\n[12| A「眠そうですね。 」\nB 「ええ、 きのう3時間 しか寝なかった(      )。」\nあぶら                六          ふと\n 油 っぽいもの(      )食べていると、太ってしまうよ。\nじゅぎょう  で\n A「きのう授 業 に出なかったね。どうした(      )。」\nからだ    ぐ あい   わる\nB「ちょっと 体 の具合が悪くて…。」\nかのじょェ  しんけん  し ごあ          かんどう\n[15 | 彼女の真剣な仕事(       )に感動 した。\nなべ  ちゅう か りょう り  つく          つか\n この鍋は中華料 理を作る(      )使います。\nこちよう ぴ       ぎんこう  や:ま\n きょうは日曜日だから、銀行は休みの(       )だけど。\nお   つ    未            さくしゃ  い と  、 わ          おも\n 落ち着いて読め(        )、作者の意図が分かってくると思います。\nがいこうもんだい りょうこく  かんけい 、あっ か\n 外交問題で両国の関係が悪化する(       )。\n このビールは冷た(       )浴たいほどおいしい。\n問題3 下の(     )の中の言葉を適当な形に変えて、文中の     に書きなさい。\nえだ           つか       き\n| 21| このはさみは枝を      のに使います。 (切る)\nかれ         ュ      じ ぶん   なに         人\n[22| 彼は      ばかりで自分では何もしない。 (言う)\nま      、      ねが   、\n[23] ちょっと待ってください。 お願いが__ _ _ んです。(ある)\nい『                       あ   ンとっ\n ほかの意見が      ば、あしたからこの案を実施します。 (ない)\n[25] ピアノのレッスンがとても      の。 (嫌いだ)\nかのじょ  さいきんかいしゃ         、          やす\n 彼女は最近会社を 。  _ ばかりいます。(休めむ)\nと    もの     ろ                     こうばん                            とど\n 落し物を拾ったとら、すぐに交番に       べきだ。 〈届ける)\n\n"
   },
   {
    "page": 171,
    "text": "パバートLI 実戦練習\n問題1 つぎの文の(〈     )に入れるのに最もよいものを、 1・2・3・4からーつ選びなさい。\n二 拒   つうきん       でんしゃ  こんざつ          い じょう\n この都市の、通勤ラッシュの電車の混雑(       )は異 常 だ。\n1 ぶり         2 ごと          3 おき        4 ほど\n、あやま           よう     かれ わる\n| 2 | きみが 謝 らなくてもいい。要するに、彼が悪い(       )。\n1 だね        2 んだろう       3 だった       4 んだ\nすうねん   じゅうたく     か かく                    いっぽう\n ここ数年、住 宅の価格は(      )一方だ。\nあ            あ                           2】\n1 上がった      2 上がらなかった 3 上がろう      4 上がる\n=       はは              かえ     、おそ                        でん わ\n14 | うちの母はちょっと帰りが遅くなると、いつも電話をかけてくれる(      )。\n1 な          2 の           3 し          4 が\n必 を  げんいん  ちょう さ             げつ\n| 5 | 事故の原因を調査する(         )2ヵ月もかかった。\n1 ばかり       2 より          3 のに        4 ほど\nじゅうしょ 、        わたなべ    き\n[| 6 | 住所が(      )、湊辺さんに聞いてみてください。\n加                          わ\n1 分からなければ               2 分かるようになって\nわ       おも                  所\n3 分かりたいと思って             4 分かるといったら\nと しん   ちか                          尝\n このマンションは都心から近くて、(      )のに、どうしてまた引っ越さなければな\nらないの。\nべベん り                         べん り\n1 便利になりやすくなる        2 便利なはずがない\nふ ん                         ぶ でん\n3 不便になりやすくなる            4 不便なはずがない\nくるま           あし 、よわ\n 車 に(      )と、足が弱くなるよ。\n1 乗りさえする                 2 乗ってばかりいる\nの  はじ                       の\n3 乗り始めてみる               4 乗れるはずがない\nて つだ   MO    、          なに\n| 9 | 手伝いに行ったが、(       )は何もなかった。\n1 やるできなこと                2 やるはずなもの\n3 やる太きこと                 4 やるはずもの\nひと ゆうめい     =     、               、 て\n 人は有名になればなるほど(       )のではないだろうか。\nいそが                         いそが                      ・\n1 忙しくなる             2 忙しくなくてもいい\nいそが                    いそが\n3 忙 しければ             4 忙しくてはいけない\n、            おんがく 、なが\n[11| このボタンを(       )、音楽が流れてきます。\n3】                          お\n1 押しておいたら                2 押すと\nお                          お\n3 押すによって                 4 押すによると\n\n"
   },
   {
    "page": 172,
    "text": "かんが   站      わ\n[12| 考 えれば(     )、 分からなくなってきた。\n1 考えるほど           2 考えたらそれで\nかんが                 かんが\n3 考えるにつれて        4 考えるには\nかいしゃ   でん わ    上み\n 会社の電話を私用に(        )。\n1 せねばならない           2 使うべきではない\n3 しなくてもかまわない       4 使わないかな\n問題2 つぎの文の _ 文 。 に入る最もよいものを、 1・2・3.4からーつえらびなさい。\n 山本さんの奥さんは茶道の                         娘               はずだ。\n1 だから     2 に詳しい    3 お茶     4 先生\nしんがく    じ ぶん ひとり                     き\n|15| 進学のことは自分一人で            し<       決めるべきだ\nせんせい                         に3                                そうだん                         か ぞく\n1 先生などに   2 決めずに     3 相談して    4 家族の人や\n 今住んでいる               便利なのです。\n1 通勤に    2 駅       3 に近いから   4 アパペートは\nかれ     あさ                                                                                                ぜんぜんべべんきょう\n 彼は朝から                   女          、全然勉強 しなかった。\n1 ばかり     2 いて      3 ゲーム    4 やって\n[18| その論文を 。。 到  ，\n*  き       げつ\n1 かかりました 2 のに      3 書き終わる   4 3ヶ月も\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1・2・3・4から\nーつ選びなさい。\n幸せなお金持ちは、自分を100%表現し、| 19 |、毎日充実感にちふれています。彼ら\nの生活の中には、昨日と同じことをただ繰り返すだけという、退屈な瞬間はありません。\n自分が楽しいと感じもことや、やりたいことを[| 20 |、虫動感のある毎日を送ります。\n毎日をワクワクしながら生きているお金持ちには、 不思議な存在感があります。自分の人\n生を100%生きている充実感が、自然に周囲にも伝わるのでしょう。\nあなたは、毎朝どんな気分で仕事に出かけますか?「さあ、今日も楽しいことをやる\nぞ」とワクワク していますか。  21 |、「あてあ、これから仕事かて」と愛(ゆう)錦(う\nつ)に感じていますか。\n\n"
   },
   {
    "page": 173,
    "text": "あなたが、どのような気分で仕事に出かけていくのか、子どもは見ています。そして、\nあなたの様子から、「仕事って楽しそうだな。早くやってみたいな」と思うようになるか、\n仕事って大変そうだな。 | 22 |」と思うようになるかが決まります。\n\nあなたの、 お金を稼ぐことに対する気持ちが、子どもに伝染するのです。\n\nよって子どもに、 幸せにお金を稼ぐことができる大人に| 23 |、 まずは、大人のあなた\nが、幸せにお金を稼ぐようになることが必要です。\n\n1 全て自分の意志で決めているため\n\n2 全て自分の意志で決まっているのに\n\n3 あまり他人の意見を考えないため\n\n4 あまり他人の意見を考えないのに\n\n1 何もしたくないので         2 何かをするにしろ\n\n3 何でもできるので          4 何をするにおいて\n\n1 だと有ば                     2 それとも\n\n3 だからこそ             4 それでは\n[22]\n\n1 できればやってみたいな        2 これからやるはずがない\n\n3 これからやる太きではない      4 できればやりたくないな\n[23|1 育ててもらいたいので            2 育ってほしいなら\n\n3 育ててくれたいなら         4 育ってもらいたいので\n\n\n"
   }
  ]
 },
 {
  "unit": 17,
  "title": "第17単元 練習問題",
  "pages": [
   {
    "page": 180,
    "text": "第17単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1-2・3・4からら一つ選びなさい。\nに ほん ふくおか      ながさき         い\n 日本の福岡      )長崎といったところに行ってみたい。\n1 や      2 上       3 も      4 に\nれいぞう こ しゅう り      げつ\n| 2 | 冷蔵庫を修理するのに、1ヵ月(       )かかった。\n1 で      2 も       3 か      4 の\nっ      じ かん い じょうある 。 つづ\n ごと演たどり甘く(       )2時間以上 歩き続けた。\n1 たら     2 まま      3 まで     4 なら\nわたなべくん                        おもしろ\n| 4 | 渡辺君(        )面白い人はいない。\n1 ほど      2 ばかり      3 ごろ      4 まで\nかれ    かみ    なが     の    、                じょせい                      、\n| 5 | 彼は髪を長く伸ばしていて女性(     )だ。\n1 みたいに    2 みたい     3 みたいな    4 みたいだ\nれんらく                  、\n| e | A「どうして連絡してくれなかったんだ。 」\nB「だって 忙 しいんだ(      )。 」\n1 上二     2 の        3 もん      4 こと\nなつやす    且   む            ばんぐみ 、おお\n 夏休みには子ども向け(        )テレビ番組が多い。\n1 の      2 で       3 へ      4 に\nよう けいしゃ      しょしんしゃ\n このスキー 場 は傾斜がきついので、初心者には(       )いない。\n站                 む\n1 向いて    2 向く      3 向き     4 向かない\nな まえ\n| 9 | 後の名前は(         )やすい。\nおぼ       おぼ        おぼ       おぼ 、\n1 覚えた    2 覚えて     3 覚え     4 覚える\nらいしゅう すいよう び       ていしゅつ\n レポートは来 週 の水曜日      )提 出してください。\n1 までが    2 までに     3 まで     4 までも\n\n"
   },
   {
    "page": 181,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、下のAーJの中から一つ選びな\nさい。\nA ほど  。B まで  C までに D みたいだ EE 向き\nむ\nF 向け    G も     H もん     IT といった     J やすい\n この店の窟囲気がいいのでカップル(       )だ。\nよる  ちち  かえ                   ヒコ\n きのうの夜、父が帰ってくる(       )ずっと待っていた。\nたい き お せん  さんせい う           かんきょうもんだい  、しんこく か\n 大気汚染や酸性雨(       )環 境 問題が深刻化してきた。\nひ  だ     なに        のきき\n 引き出しには何(       )残ってない。\nひさ      かれ  あ        わたし    い          这要\n 久 しぶりに彼に会ったので、 私 にも言いたいことが山(        )ある。\nさき とう     せつめい  加\n 佐藤さんの説明は分かり(       )。\nふゆやす    お              ほん よ  お\n 冬休みが終わる(       )この本を読み終わりたい。\n局    だい す        じょゆう       であ                   ゆめ\n きのう、大好きな女優に出会った。まるで夢(      Js\nさいきん                    ざっ   おお\n 最近はサラリーマン(      )の雑誌が多く出ている。\nに  な          か\n A「この前、話したカバン、 買ったの。」\n.            ね だん  たか\nB 「いいえ、 買わなかったの。 値段が高すぎるんだ(      )。 」\n問題3 下の(     )の中の言葉を適当な形に変えて、文中の     に書きなさい。\nつ                      ある\n       やすい靴を履いてジョギングをします。 (歩く)\n六 ちょう  かえ                  かえ         い\n[22 | 部 長 が帰ってもいいと        まで帰れません。 (言う)\nおそ\n[23| きょうはここまでにしようか。もう      もの。 (遅い)\n*ぜ    ね           つよ       と\n きのうの風は屋根が      ほど強かった。 (飛ばす)\nとし 于         せっけい           む   、\n[25| そのマンションはお年寄り       設計されている。 (向けだ)\nびょう き  いちにちなに           守\n きのうは 病気で一日何も      。 (食べる)\nれんきゅう              いち ど せんせい   たく  うかが        あ\n 連休が        までに一度先生のお宅に 伺 いたい。 (明ける)\nパートLI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1-2・3-4からーつ選びなさい。\nとも              じ かん        レル\n きのうは友だちとカラオケで3時間(       )歌った。\n\n"
   },
   {
    "page": 182,
    "text": "1 も           2 と            3 は           4 に\nかあ    、かえ               いえ        かた づ\n| 2 | お母さんが帰ってくる(      )、家をきれいに片付けよう。\n1 よすに     。 2 ないで         3 ほうが        4 までに\nあか            やわ     に  りょう り\n これは赤ちゃん(      )柔らかく煮た 料 理です。\nむ              む               让              』メ\n1 向けの      2 向けに         3 向けで        4  向けを\nわたし  さいとう\n[4 | 私も斉藤さん(        )パーマをかけようかな。\n1 みたいだ      2 みたいで        3 みたいに      4 みたいは\nかれ                    たっきゅう                         きょう 天    も\nLS | 彼はバトミントンや卓球     )スポーツに 興味を持っている。\n1 とっている     2 といって        3 という        4 といった\nと しょかん  しず   さんこうしょ\n| 6 | 図書館は静かで参考書もそろっているので、(〈        )必とろです。\nべべんきょう                          べんきょう\n1 勉強 しようがない                  2 勉強 しやすい\nべんきょう                          べんきょう\n3 勉強 したほうがいい                4 勉強 してほしい\nしょうがくせい む    つく        しょうひん   いま\n 小 学生向けに作られたこの 商 品は、今(       )。\nちゅうもく  あつ                       ちゅうもく  あつ       、\n1 注目を集めてみたい                2 注目を集めるべきだ\nちゅうもく  あつ                       ちゅうもく  あつ\n3 注目を集めてくれた            4 注目を集めている\n A「どうして泣いてるの。 」\nB「だって、お兄ちゃんがゲーム機を(      )んだもの。 」\nか                              ゝ\n1 貸してもらわない             2 貸してはいけない\nか                              、\n3 貸してくれない                 4 貸してもかまわない\nさいきん し ごと  たいへんいそが                 、\n[ 9 | 最近仕事が大変 忙しくて、(       )ことがある。\nしゅくじつ       しゅっきん                                           しゅくじつ          しゅっきん\n1 祝日まで出勤する           2 祝日からも出勤する\nしゅくじつ       しゅっきん                                           しゅくじつ          しゅっきん\n3 祝日まで出勤しない            4 祝日からも出勤しない\n可   べん り  だいどころようひん 本   、たか   かね  だ\n 確かに便利そうな台 所 用品だが、わざわざ高いお金を出して(        )。\n1 買うことではなかった            2 買うということではない\nか                             か\n3 買うはずではなかった             4 買うほどのものではない\nらいしゅう  きんよう び         そつぎょうろんぶん  でいしゅつ      、\n|11| 来週の金曜日(      )、卒業 論文を提出 してください。\n1 までに        2 まで           3 までの        4 までで\nかのじょ  老 上方 し     、  し 人              おも 、\n12 | 彼女は教師という仕事に(      )と思う。\n                             む              な\n1 向きになる     2 向いている      3 向けだ        4 向きだ\nさいきん  しょく ば  だんせい                し  おお  <\n 最近は職場の男性(      )ファッション誌も多く出ている。\n1 記とどって       2 むきの         3 ほどの        4 みたいな\n\n"
   },
   {
    "page": 183,
    "text": "'      問題2 つぎの文の 災 に入る最もよいものを、1.2-3-4からーつえらびなさい。\n 私 は田中さん           と思っている。\n1 になり       2 スポーツ選手    3 たい        4 みたいの\n この仕事は体力 が                   大            と思う。\n1  必要なので    2  お年寄り       3  向いていない   4 には\n 今まで一番           裏切られた。\n1 していた      2 信頼         3 まで        4 友達に\n[17 | このニュースほど人人々                  し          はないだろう。\n1 もの        2 不安          3 させる       4 を\n1 後は     2 驚いた    3 飛び上がる  4 ほど\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n気が合う人とだけおしゃべりできたら、[ 19 |と思いますが、世の中はそんなに甘くあ\nりません。\n顔はにこにこしているのに目が笑っていない人たちとの会話ほど、| 20 | そういうぅ人\nとも会話をしなくてはならないのが、大人の辛いところです。\nたとえば、パペーティーだとかお茶会だとかそういう席で、その場にいない人の悪口で盛\nり上がっていたとします。そのときどうしたらいいのでしょう。\n噂話が始まったら、罪のない話題へと| 21 |。お天気の話でも大丈夫ですが、ここは食\nべ物の話がベターでしょう。\n美味しいお店の話や、取って置きのレシピを披露すれば、 大概の人は話に乗ってきます。\nそうすれば、しめたものです。噂話からあなた自身を速ざけることに成功したわけです。  」\n「他人の不幸は蜜の味」と言いますが、それに陸を傾けた時点、「あなたの不幸」も\n[zz 」\n当たりまえのことのようですが、うそ、他人の悪口、噂話は自分からしないことはもち\nろん、しているところにも近づかないこと。\nそんな話より、もっと楽しくてためになる会話を楽しめる人になりましょう。そうすれ\nば、 おのずから、 素敵な人があなたの周りに| 23 |。\n(大前倫子『替せ日和: 毎日が楽しくなる98のレシピ』 による)\n\n"
   },
   {
    "page": 184,
    "text": "1 それほど楽しくない         2 楽しんだはずがない\n3 こんなに気楽で楽しいことはない   4 楽しまなければならない\n1 疲れるものでもないが        2 疲れたりはしないが\n3 疲れたばかりだが          4 疲れるものはありませんが\n[31 |\n1 話を持てば持つほどです       2 話を持たなければならないのです\n3 話を持っていくのです        4 話を持つべきではないのです\n1 始めたらいいと思います       2 始まってしまうのです\n3 始めてもいいと思います       4 始めてしまうのです\n1 集まってくるはずです        2 集まってくるほどです\n3 集まっているまでです        4 集まっていく太きです\n166            |\n\n"
   }
  ]
 },
 {
  "unit": 18,
  "title": "第18単元 練習問題",
  "pages": [
   {
    "page": 191,
    "text": "第18単元 練習問題\nパート1I 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1-2・3-4から一つ選びなさい。\nたんじょう\n 母のお誕生 日を(      )ように、カレンダーに 印 をつけた。\nわす        わす         わす        わす\n1 忘れない  . 语气      3 忘れる    4 忘れさせる\nせんげつ   ともだち   けっこんしき              おっと   たんじょう 【93                 しゅっ ぴ    おお\n| 2 | 先月は友達の結婚式(        ) 夫 の誕 生 日(        )で 出費が多かった。\n1 やら/やら   2 や/や      3 と/と     4 たり/たり\nけいたいでん わ    でんげん    き                      れんらく\n 携帯電話の電源が切れているので、連絡し(        )がない。\n1 ほど     2 ために     3 みたい    4 よう\nいえ かえ     、てあら  ョ 、\n| 4 | 家に帰ったら、 まず手洗いとうがいをする(      )しでいるあ。\n1 ようと     2 ようで      3 ように     4 ようは\nいえ        とき ぶ ちょう よ  と\n[5 | 家に(        )とした時、部 長 に呼び止められた。\n1 帰れば    2 帰ろう      3 帰りたい    4 帰る\nみせ よる     ひる ま      あか                   _-\n| 6 | この店は夜になっても昼間の(       )明るい。\n1 ように     2 ような      3 ようで     4 ようだ\n光志      に ほんじん                   かた\n それは確かに日本人(        )やり方ですね。\n1 らしかった   2 ちしくて    3 らしい    4 らしく\n 父は最近ゴルフを(         )ようになった。\n1 し      2 しで      3 すれば    4 する\nお        かわれ\n[| 9 | カーテンを下ろしているから、彼はもう(       )みたい。\nね        要         ね        ね\n1 寝よう     2 寝てしまった   3 寝て     4 寝る\nわたし いぬ あしくび\n 私 は犬に足首を(     )。\n*        か         ゃ        か\n1 噛まれた   2 噛ませた    3 噛んだ    4 噛まされた\n\n"
   },
   {
    "page": 192,
    "text": "問題? つぎの各文の(       )に入れる最も適当な言葉を、下のA一Jの中から一つ選びな\nさい。\nA やら/やら  B ようがない  C ようだ       D ようとした\nEように     F ようにする  Q ようになった  H らしく\nIT らしい      J されている\n\nた なかせんせい  えん か  、 す\n 田中先生は演歌が好きな(       )。\n\nわたし       わたなべ      しょうたい\n|12| 私 はいつも渡辺さんに招待(       )。\n\nしゃかいじん    しゃかいじん         ふる ま\n[13 | 社会人なら社会人(       )振舞ってください。\n\nぼうねんかい  の        レ信/ _        おおさわ EC\n 忘年会は飲む(       )歌う(       )の大騒ぎだった。\n\nまいにちべんきょう           に ほん ご  E諾  はな\n 毎日勉強 しているので、日本語が少し話せる(        )。\n\nへ や じゅうほこり       かた づ\n 部屋 中 境だらけで、片付け(        )。\n\nふゆやま         びひび じょう  き けん\n[17| 冬山というのは非常 に危険(      )。\n\nえい ご  、はな              まいにちれんしゃゅう\n 英語が話せる(      )、毎日練習 をしています。\n\nね         とき    じ し   お\n 韶(       )時に、 地震が起きた。\n\nしけん お            _          ぶふくしゅう\n[20 | 試験に落ちたので、きょうからちゃんと復習 をする(     )。\n問題3 下の(     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\n\nさいき                =      すく\n[21] 最近は     らしい子どもが少なくなった。 (子ども)\n\nちゅうごく  のうさんひん  に ほん                    ゆ しゅつ\n[22| 中 国の農産品は日本へ      されている。 (輸 出する)\n\nろ     -           とき               はい\n お風呂に        うとした時、めまいがした。 (入る)\n\nか ぜ           ー            かかぶ        ひ\n24 | 風邪を     ように、マフラーを被ります。 (引く)\n\n[25] パソュンがこんなにひどく壊れていてはもう      ようがない。 (直す)\n\nしょうがつ  まえ  へや  おおそう じ         しょうがつようひん              いそが      か _\n 正月の前に部屋の大掃除をするやら 正 月用品を     やらで 忙 しい。 (買う)\n あの和信が購入 したマンションは交通がとても         らしいですよ。 (便利だ)\n\nパートI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3・4から一つ選びなさい。\nと    じ 普          に ほんじん\n あの人のお辞儀はいかにも日本人(       )。\n\n"
   },
   {
    "page": 193,
    "text": "1 からだ     2 はずだ      3 ようだ     4 らしい\n| 2 ] 深夜に、陸 の部屋の人に(      )、目が覚めてしまった。\n1 騒がせて    2 騒いで      3 騒がれて   站\n[3 ] この家具はずいぶん歴史がある(   )。きっと大事なものだろう。\n1 くらいだ    2 もんだ      3 なんて     4 ようだ\n[4 ] ずっと嬢いだった 魚 料 理が、 最近   )ようになった。\n1 食べられる 2 食べる      3 食べさせる 4 食べた\n[ s ] アジア大会で2位に 入賞 した時は、うれしい(      )選しい(      )複雑な気持\nちだった。\n1 でも/でも  2 たり/たり    3 も/も    4 やら/やら\n| e | 先生に事務所に資 料 を取りに行く(         )。\n1 みたいに言われた          2 みたいに思われた\n3 ように言われた           4 ように思われた\n| 7 ] まだ完治していないので、しばらく激しい運動をしない(   )。\n1 つもりでください              2 ことにしてください\n3 つもりでいきなさい         4 ようにしてください\n[| s | 何度メールをしても返事が来なかった。彼女に(   )。\n1 嬢われないらしい          2 嬢われないように\n3 嬢われたように           4 嬢われたらしい\n[| 9 | セーターを(   )時に、お金が足りないことに気がついた。\n1 買おうとした            2 買いそうになった\n3 買っているところに        4 買うことになっている\n[10] せっかくの和社内旅行なのに、 家族のことで、行きたくても(   )。\n1 行くことにした           2 行っていきたい\n3 行きようがない           4 行くことではない\n[1 こうなった以上 、二人の関係はも う 修復の(   )。\n1 ようをすずす念                 2 しようがない\n3 ようにする   「          4 ようになる\n むすめを 女 の子(      )診てていきたいと思っている。\n1のように              2 やら\n3 らしく                4 むきに\n\n"
   },
   {
    "page": 194,
    "text": " 最近はなるべく野菜をたくさん食べる(      )。\n1 ようにしている                 2 ようになっている\n3 ようになった                   4 ようにした\n问题2 つぎの文の。 娘 に入る最もよいものを、12・3.4からーつえらびなさい。\n 10月に入ってから、                    娘           D、农作牧忆沁水\n状 態だ。\n1  降って        2  雨が          3 いない       4  雨ら しい\n 図書館では携帯電話                   1    ーー  。\n1 かけない      2 十与让         3 を          和4 しよう\n 一戸建てがほしいのだけど、 予算を           「     _ 支         がない。\n1 買い         2 オーバーした     3 よう         4 ので\n きのうは、財布を落とすやら                   娘            さんだん\nだった。\n1 上語に       2 で            3 叱られる      4 やら\n 交同のプロジェクトは 皆 の                     表 。 gs\n1 予想         2 かかる         3 時間が       4 。 以上に\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、 1・2・3・4から\nーつ選びなさい。\nどうしてでしょうか。世の中には子ども好きな男性と、子どもが苦手の男性とがいる\n| 19 |。子ども好きな男性は、自分の子どもが生まれると、いわゅる 子類悩」な父親に\nなります。 子どもが可愛くてたまらないので、いつも| 20 |、子どもと遊んだりしてい\nます。\n| 21 |、子ども嫌いな男性もいて、子どもは面倒くさいとか、うるさいと感じて、あま\nり付き合いたくない様子です。よく子どもに無関心な態度を取ります。\nどちらが子どもにとってよいかは、言わずもがなですね。親から可愛がられた子ども\nは、人間に対して基本的な| 22 |。子どもを可愛がる父親のほうが子どもによい影響を\n与えるのは当然です。でも、子どもとよく付き合う父親は、自分自身にとっても親子関係\nにとっても、よいことがたくさんあるということは、どうも見逃されているようです。\n\n"
   },
   {
    "page": 195,
    "text": "有18 单元\n親子関係について考えてみますと、子どもをいつもかわいがっていると、子どものほう\nはお父さんを好きになります。| 23 |、この「好き」という感情が何よりも大切なので\nす:。\n(林道義『父親のための家庭教育のヒント』による)\n1 ようあまします            2 よあでです\n3 までです               4 むけです\n1 子どもの面倒を見るやら       2 子どもの面倒を見るぶり\n3 子どもの面倒を見ようがなく     4 子どもの面倒を見たり\n1 ところが              2 それなら\n3 ただだをば              4 それでは\n[22]\n1 信頼感らしいものを持つわけです   2 信頼感を持つばかりです\n3 信頼感を持つようになります     4 信頼感を持つわけはないのですずす\n[23]\n1 父親にとっては            2 子どもに対しては\n3 親子とともに            4 親子関係にとっては\n\n"
   }
  ]
 },
 {
  "unit": 19,
  "title": "第19単元 練習問題",
  "pages": [
   {
    "page": 202,
    "text": "第19単元 練習問題\nパート 1i 基礎を固める練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1・2・3.4から一つ選びなさい。\nかれ  にゅうし                  かいしゃ  ぶん い き  いっ き   か\n 彼の 入 社(       )きっかけに、会社の雰囲気が一気に変わった。\n1 を         2 が          3 は         4 で\nた なか    かのじょ\n A「田中さん、彼女ができたらしいよ。」\nげん き\nB「なるほど、それで、 元気な(      )。」\n1 はずだ     2 わけだ      3 ことだ     4 べきだ\nべんきょう                せいせき  と                  R\n あまり和勉強 しなかった(       )、よい成績を取った。\n1 わりでは     2 わりにも       3 わりあい     4 わりには\nみみ    むかし          おも\n| 4 | このアルバムを見ると、昔 のこと(       )思い出される。\n1 が         2 を          3 に         4 で\nかれ けっこんしき                  おお   ゆうめいじん 、しゅっせき\n| s | 彼の結婚式にはトップスターを(       )多くの有名人が出席した。\n1 はじめて    2 はじめ      3 はじめる    4 はじめに\nぎんこう         かね                     りょうがえ                   に\n| 6 | この銀行でお金(       ) 両 堆することができる。\n1 を         2 が          3 证         4 は\nまつ だ せんせい    ちゅうしん                 けんきゅうかい    おこな\n 松田先生を中心(       )研 究 会が 行 われた。\n1 とする       2 による        3 にとって     4 になって\nいっしょうけんめいはたら       钨下二 し  みみと\n ー 生 懸命 働 いても、上 司に認められるわけ(        )ない。\n1 には        2 では         3 のは        4 ことは\nいそが         じ き        やす         と        かいがいりょこう     い                             、\n| 9 | こんなに 忙 しい時期に、休みを取って海外旅行に行ける(       )がない。\n1 わけ        2 もの         3 の         4 到疼\nかんしゃ  き も              せんせいがた   れい  もう  あ\n 感謝の気持ち(        )こめて、先生方にお礼を申し上げます。\n1 に         2 が          3 を         尖 “和\n\n"
   },
   {
    "page": 203,
    "text": "問題2 つぎの各文の(     )に入れる最も適当な言葉を、 下のAーJの中から一つ選びなさい。\nA られる     B わけがない     C わけだ     D わけではない\nE わりには  F をきっかけに  G をこめて H として\nI をはじめ  』 んだって\nみせ       なが 。 れつ             とくべつ 。 やす\n この店はいつも長い列おができているが、特別に安いという(       )。\nかのじょ 。 にほん    ねん たいざい            に ほん ご  じょうず\n 彼女は日本に10年も滞在しているので、日本語が上手な(      )。\nかのじょ  しゅうしょく             ひとり ぐ     はじ\n 彼女は就職したの(        )、一人暮らしを始めた。\nに ほん                                                      ゆうえん ち\n 日本にはディズニーランド(        )たくさんの遊園地がある。\nし け   はん い              の\n 訓験の範囲はホームページに載っている(       )。\nと しょかん     ほん さつ    か\n この図書館では、本5冊まで借り(       )。\nあい          かのじょ\n 愛(       )、 彼女にプロポーズをした。\nいま    じつりょく        せ かい                          か\n 今の実力では世界のチャンピオンに勝てる(         )。\nど りょく               きゃく         ひょうばん\n[19] 努力した(     )、お 客 さんからの 評 判はよくない。\nしゅ み           、     なら\n 趣味(       )、ギターを習っている。\n問題3 下の〈     )の中の言葉を適当な形に変えて、 文中の     に書きなさい。\nい             から       た\n        というわけではないが、胃によくないので、辛いものを食べないようにしてい\nる。 (嫌いだ)\nべべんきょう         あそ          し けん             、      ごうかく\n[22] 勉強もしないで遊んでばかりいては、試験に        わけがない。 (合格する)\n 除で人の悪口を       んじゃない。 (言う)\nみせ  りょう り                         やす\n この店の 料 理は      わりに、おいしい。 (安い)\nぶし                わか  み        と\n[25| あのおじいさんは年を       わりには、若く見えます。 〈取る)\nな           かいせんりょう り            た\n この店ではおいしい海鮮 料 理が      。 (食べる)\n 窓が開いている。床に 埃 が       わけだ。 (積もる)\nパートTI 実戦練習\n問題1 つぎの文の(     )に入れるのに最もよいものを、 1-2-3・4から一つ選びなさい。\n*っこう  だいひょう         こんかい         たいかい  しゅつじょう\n[1 | 学校の代表(        )今回のスポーツ大会に出 場する。                                .\n\n"
   },
   {
    "page": 204,
    "text": "1 たいして      2 记忆二         3 ように       4 として\nた なか           あたら\n| 2 | 田中さん(       ) 新 しいチームができた。\n1 からして      2 にかわって      3 を中心に     4 をして\nはは  わたし      と          べんとう  つく\n 母は 私 のために心 を(     )、弁当を作ってくれた。\nあつ\n1 集めて       2 こんで        き ともっで      4 こめて\nた なか           でん わ   、           ッう ごう  、わる      总\n| 4 | さっき田中さんから電話があって、 都合が悪くて来られんないんだ(       )。\n1 もん         2 と            3 っけ         4 っつて\nりゅう がく                              じ ぶん     和让                            わる                      六     、\n5 | 留学を(      )、自分の国のいいところと悪いところに気づいた。\n1 ばかりで      2 きっかけに      3 ためで        4 おかげで\n  や きゅう かんせん  だい す   ややまもとせんしゅ       ざんねん ョ\n| 6 | きのうの野球 の観戦では大好きな山本選手が(       )、残念だった。\n3                             を/3\n1 見られなくて            2 見られないで\nみな                             み\n3 見るれなくても                 4 見られないでも\nさいきん      じゅんちょう  い\n A「最近、どう。 順 調 に行っている ?」\n| コ    な                         入 さん    ン>ょようたい\nBIC       )よ。仕事が見つかれなくて、もう悲惨な 状 態なのよ。」\nとゅんちょう                             じゅんちょう\n1 順調なことがない                2 順 調ではないわけがない\nとゅんちょう                             じゅんちょう\n3 順 調ではない                   4 順調なわけがない\nこち             に        げつ     ほん\n 1日に10ページぐらい読めば、二ヶ月でこの本が(       )。\n让                             本\n1 読まれるところだ          2 読まれるほうだ\n素  お                          引  お\n3 読み終わりそうになった            4 読み終わちるわけだ\nえいが                  、   及 たいげき      回   、 す      、                         -\n9 | 映画は(       )が、 舞台劇のほうが好きだ。\n1] 見たものではない          2 見ないわけではない\n天                             办\n3 見させるものではない             4 見させるわけではない\n 交からデジタルビデオをもらったのをきっかけに、〈 ・  )。\nさつえい                                          さきつえい   じょう ず\n1 まったく<撮影がしなかった          2 かなり撮影が上手だ\nぶ つうてい ど                       さきつえい  む ちゅう\n3 普通程度にはできそうだ           4 撮影に夢中 になった\nきょく  き         たの       二     じ だい\n|11| この曲 を聞くたびに、楽しかった子ども時代が(        )。\nおも  し                          おも  だ\n1  思い出す                      2  思い出される\n3 思い出させる            4 思い出させられる\nかのじょ  に ほん    ねん  す            に ほん  ヒレ じょう\n[12| 彼女は日本に10年も住んでいたので、日本の事情 に(      )。\nくわ                             くわ\n1 詳しいわけだ                   2 詳しいらしい\n3 詳しくようになった             4 詳しいようがない\nせ わ       ひと  たの\n お世話になった人の頼みだから、(       )。\nこあねわ                            在志扫\n1 断るわけでもない           2 断るんじゃない\n\n"
   },
   {
    "page": 205,
    "text": "3 断 るわけにはいかない       4 断 るんだって\n問題2? つぎの文の 災 に入る最もよいものを、1.2・3・4からーつえらびなさい。\n か 旬            にプレゼントした。\n1 込めて    2 チョコレートを 3 作った     4 好きな人\n この市は                   女    が集まっている。\n1 中心に             2 銀行など\n3 いろいろなデパートや       4 駅を\n 別に           が、ちょうど手離せない仕事がある\n1 わけでもない  2 だく      3 ない     4 行き\n[委] 旅行 。 到 。 知9り合った。\n1 たくさんの   2 きっかけに    3 人と     4 を\n ダイエット                   食品は若い女性に人気がある。\n1 などの    2 「ノンカロリー」 3 を目的    4 とする\n問題3 つぎの文章を読んで、| 19 |から| 23 |の中に入る最もよいものを、1・2・3・4から\nーつ選びなさい。\n\n「都会では空を見てもおもしろくない」\n\n都会にいると季節を感じる| 19 |」     「\n\nこういう会話をよく耳にしますが、一日中オフィスビルで机に向かって仕事をしている\n限りは、まさに| 20 |……と思いました。\n\nこの、 |自然界から切り離されたような感覚」は東京に限らず、郊外のオフィスピルで\nも、 体感することがあるのではないでしょうか。\n\nしかし、それはあくまでも一日中屋内にいた場合の話です。\n\n都市部でも、ちょっと| 21 |、意外にも、 都市部なりの天気や季節感」を感じること\nができるものです。         前\n\n例えば、わずかな陽だまりに感じる春のぬくもり、高層ビルの上層階が雨雲の中にすっ\nぽぼりと包まれている様子、わずかな 緑 地帯に息づく草花の芽吹きや開花、並木の紅 葉\n\nちょっと季節を意識しながら丘感をフル活用する| 22 |、都市部でもそれなりに天気や\n季節を感じることができるのです。\n\n日本は四季の表情がとても豊かなところです。 | 23 |、天気や季節は、日本人にとっ\nて、もっとも身近で、もっとも普通に日常生活の中に取り入れられているものです。その\nため、どこにいても、その場所特有の天気や季節感を感じもることができます。\n\n(岩槻秀明『ポケット図解最新天気がよーくわかる本』 による)\n\n"
   },
   {
    "page": 206,
    "text": "1 ことにはいかない                 2 ことができない\n3 ことにはならない                4 ことはしない\n1 そのわけではないだろうな            2 そのとおりなんだろうな\n3 そんなはずがないんじゃない         4 そのようがないんじゃない\n1 季節を意識して外に出るわりに       2 季節を意識しながら外に出るやら\n3 季節を意識して外を歩くほど         4 季節を意識しながら外を歩けば\n外一形机区                            必 よのに\n3 ととょ由                        4 ことよで\n1 それをきっかけに                 2 そのわりに\n3 そのため                         4 そのわけで\n\n"
   }
  ]
 },
 {
  "unit": 20,
  "title": "第20単元 練習問題",
  "pages": [
   {
    "page": 214,
    "text": "第20単元 練習問題\nパート1 基礎を固める練習\nつぎ 。 かせんぶぷぶ ことば  てきせっ  そんけい ご 。 けんじょう ご   い   か _\n问题1 次の下線部の言葉を適切な尊敬語・謙 譲 語に言い換えなさい。\n| 问题例                                                       [\n1       党过二   しんかんせん かえ    _            _                    |\n:例1 午後8時の新幹線で帰るそうです。つ(尊敬語)\n|     評 ちょう 。。 ご ご 。 じ しんかんせん   かえ                         1\n    部 长 は午後8時の新幹線でお帰りになるそうです。\n1     わたし   い                 泊だし  まい                      >    1\n: 例2 私が行きます。つ(謙譲語) 私 が参ります。\nしゃちょう まいあさ じ  じ おしょ き         _\n 社長 は毎朝9時に事務所に来ます。 一(尊敬語)\nしゃちょう  まいあさ     じ お しょ\n社長 は毎朝9時に事務所に                                   。\nせんせい   きけ  の                _\n| 2 | 先生はお酒を飲みません。…(尊敬語)\nせんせい   さけ\n先生はお洒を                   。\n 先生は「お元気で」と言いま した。(尊敬語)    「\nせんせい      げん き\n先生は [お元気で」 と\nおう      りょこうちゅう        と\n| 4 | 王さんは旅行 中 、どこに泊まりますか。つ(尊敬語)\n王さんは旅行 中 、どこに                    か。\nか ちょう       ほん よ             _\n| s |課長はあちらで本を読んでいます。つ(尊敬語)\n課 長 はあちらで樽を 。。。。。。 。\nり              の = 立     あんない\n| 6 ] 李さんが旅行を案内してくれます。つ(尊敬語)\nり       りょこう  あんない\n李さんが旅行を案内して               。\nせんせい  あたら    ろんぶん  か        =\n 先生は新 しい論文を書くでしょう。 (尊敬語)\n先生は 新 しい論文を                      でしょう。\nつやまきょうじゅ             访去为 纺   た                                    ロ\n 松山 教授はよくフランス 料理を食べます。つ(尊敬語)\n松山 教授はよ くフランス料理を                       5\nそつぎょう き ねん  しゃしん  み           PP\n| 9 | 卒業記念の写真を見ました。(謙譲語)\nそつぎょう き ねん  しゃしん\n卒 業 記念の写真を  。\n このケーキをもらいます。 (謙譲語)\n\n"
   },
   {
    "page": 215,
    "text": "このケーキを                               o\nあした\n 明日、またここに来ます。一(謙譲語)\nあ す\n明日、またこちらに               5\nきょう  ちち  いえ\n 今日、父は家にいます。 一(謙譲語)\nきょう  ちち  いえ\n今日、父は家に                        。\nはなし  き\n ちょっとお 話 を聞きたいです。 一(謙譲語)\nはなし\nちょっとお 話 を                                  です。\nかた    区 まえ\n あの方のお名前を知っています。一(謙譲語)\nかた    な まえ\nあの方のお名前は                                     上\nあと        おく\n 後でメールで送ります。 一(謙譲語)\n後ほどメールで                   。\nれい    _ 。 けいごどうし  か _\n問題2 例のよう に敬語動詞に変えて ください。\n| (間題例)\n1          な ら   い                                     1\n1 人A「あした、奈良へ(行くついらっしゃいます)か。」\n1         い    まい                                      !\n| B「はい、 (行く一参ります)。 」\n未          でん わ ばんごう5      レ\n A「山田さんの電話番号を(知っているつ              )か。 」\nB「はい、 (知っているつ           '      )。 」\nひる  なに   た\n A「お昼は何を(食べるつ                )か。」\n し   た\nB「お寿司を(食べるつ                )。」\nき むら  なかやま            あいだすず き       本开   あ 、                   、\n 木村「中山さんですか。この 間 鈴木さんのお宅で(会うつ             )ことがあ\nるんです。」\nなかやま           き むら        しつれい                げん き\n中山「ああ、 木村さん。 失礼 しました。お元気ですか。 」\nな まえ  なん   い\n A 「名前は何と(言うつ             )か。」\nB 「李と(言うつ              )。」\nわたなべ か    え   み\n A「渡辺さんが書いた絵は(見るつ               )か。」\nみ\nB「はい、 (見るつ                )。」\nく\n A「どちらから(来る一                 )か。」\nちゅうご\nB 「中 国のヘルビンから(来るつ              2。」\n[22] A 「きょうは何時まで会社に(いるつ                )か。 」\nB 「5時ごろまで(いるつ              )。 」\n\n"
   },
   {
    "page": 216,
    "text": " A「ゴールデンウィークは何を(する一               )か。」\nB「旅行を(する一              )。 」              「\n A「コーヒーを(飲むー               )か。 」\nB「はい、 (飲むー              )。」\n[25] A「林 先生は大学で何を(教えているつ                )か。」\nB 「日本の文学を(教えている一              )。 」\nパートI 実戦練習\n問題3 つぎの文の(     )に入れるのに最もよいものを、 1・2-3・4から一つ選びなさい。\n A「山田先生にちょっとお(        )たいことがありますが、今いらっしゃいます\nか。 」\nB「あ、すこし前に実験実に行かれましたよ。」                          “\n1 うかがい      2 なさい        3 もうし       4 まいり\n A「あ、これ、おいしそうだね、一日食べてもいいの。 」\nB「だめよ。先生に       )ものだから。 」\n1 めしあがる    2 いただく       3 さしあげる    4 ちょうだい\n A 「後でこちらからご連絡(      2。\nB「はい、 お願いします。 」\n1 です      2 します      3 います    4 なります\n 先生がくださった本を大事にして(      )。\n1 おります     2 なります      3 あります     4 します\n| 30] どうぞたくさんお(      )ください。\n1 及し上がって 2 名し上がれ      3 用し上がり    4 召し上がい\n 先生から      )本なので、他の人に貸してやるわけにはいかない。\n1 お借りになった                2 お貸しした\n3 お貸しになった                4 お借りした\n わたしはまだパリに行ったことがないので、 今回はぜひ(      )。\n1 行ってください                2 行かせてください\n3 行かれてください              4 行かされてください\n 今夜はうちにお 食 事に      )か。\n1 いらっしゃるです               2 いらっしゃいです\n\n"
   },
   {
    "page": 217,
    "text": "3 いらっしゃいません             4 いらっしゃりではありません\n A「すみません、107号室はどこですか。 」\n\nB「わたしもよくわかりませんので、受付の人に(      )ください。 」\n\n1 お聞きになって                2 お聞きして\n\n3 お 伺 いになって          4 お 伺 って\n 社長 はいつも自分でお部屋を掃除(         )そうです。\n\n1 いらっしゃいる                2 めしあげる\n\n3 おっしゃる            4 なさる\n どうぞ温 かいうちに(      )ください。\n\n1 お名し上がり                 2 ご名し上がり\n\n3 お如し上がって               4 ご名し上がって\n 旅行のスケジュールに関しては、後日またご連絡(      )。\n\n1 くださいます            2 なさいます\n\n3 いたします                  4 ございます\n 無理は 承 知の上ですが、何とか(      )ませんでしょうか。\n\n1 お引き受け央い           2 お引き受け順え\n\n3 ご引き受け願い          4 ご引き受け願え\n 会議の時間をわたしから社 長 に      )おきます。\n\n1 もうしあげて              2 もうしになって\n\n3 おもうしあげて              4 おもうしになって\n A「すみません、旬人人服売り場は何階ですか。」\n\nB 【2階に(      )。 」\n\n1 おります                   2 ございます\n\n3 おあります                  4 いらっしゃいます\n 学生「先生、もう一度日本語で      )。」\n\n先生 「ええ、いいですよ。 」\n\n1 説明したいでしょうか        2 説明してはいけないでしょうか.」\n\n3 説明してもかまいませんが      4 説明していただけませんか\n A 山田さんはいらっしゃいますか。 」\n\nB「すみませんが、今あいにく席を外して(      。 」\n\n1 おります                   2 いたします\n\n3 なさいます                  4 さしあげます\n\n\n"
   },
   {
    "page": 218,
    "text": "つぎ   き かく                                   」\n| 43 | 次の企画が決まりましたら、ぜひわたしに(   )。\n1 担当しましょう        2 担当しませんか\nたんとう          -                         たんとう\n3 担当させてくだきい         4 担当してください\n=              、 とうきょう と ない\n[44] 申し訳ありませんが、東 京都内を(   )。\nあんない                               ない\n1 ご案内していいでしょうか      2 ご案内になりますか\nあんない                                          あんない\n3 ご案内してくださいませんか     4 ご案内いただけませんか\nか ちょう                 せい り   だれ\n|45 | 課長 「このファイルの整理、誰かやってくれないかな。」\n社員 「わたしでよければ、(   )。 」\n1 やらせていただきます        2 やらせましょうか\n3 やらせてあります          4 おやりいただきます\n\n"
   }
  ]
 }
];
