const projectsArray = [{
	name: 'SensorPipe',
	sub: 'スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング',
	img: 'project-SensorPipe-16-9.png',
	video: 'gwKyPqt2kd8',
	text: 'スマートフォンのセンサ情報とPCを連携させたプログラミングを実現するには双方でのアプリケーション開発が必要となり、製作時間がかかる上にハードルが高いものであった。これを解決するため、スマートフォンの各種センサ情報をPCに送信し続け、PC側からもスマートフォンにバイブレーションやウェブサイト表示などの所定の動作をさせる事ができるアプリケーションを開発した。これにより、プログラマはスマートフォン側のプログラミングを一切行わずに、PCでのセンサ情報を用いたプログラミングを行うことができる。WISS2015で発表。',
	implement: 'Androidアプリケーションとして実装。PCとスマートフォンを同じWi-Fiに接続後、UDP通信を確立することによってデータの送受信を行う。アプリケーションはバックグラウンドで動作する。PC側で利用するときは対応するProcessing用のライブラリを利用可能。',
	keywords: ['Android', 'Programming Experience(PX)', 'UDP', 'cooperation programming', 'sensor'],
}, {
	name: 'MiddleDrive',
	sub: 'Bluetooth通信によるアドホック型ドキュメント共同編集アプリ',
	img: 'project-MiddleDrive-16-9.png',
	video: 'vPAXrlKGeC8',
	text: '会議を行う際にその内容を複数人でウェブ上のドキュメントに書き出すことで記録をとったり、議題の整理をしたりすることが多くある。しかし、Wi-Fiの電波がない場所ではこれらのようなウェブアプリケーションは利用することができない。そこで、Wi-Fiなどのネットワーク環境が利用できない状況でも、リアルタイムに共同編集を行うことができるアプリケーションを開発した。ワイヤレスアドホックネットワークを構築し、ネットワーク内のPCとドキュメントの共同編集を行うことが出来る。',
	implement: 'チームで制作。フロントエンドとWebサーバを担当した。動作プラットフォームはWindowsPC。BluetoothによってPC同士をペアリングし、双方向のデータ通信を行う。各PC内でWebサーバが起動しているため、通常のウェブアプリケーションと同じようにブラウザでアクセスすることが出来る。Bluetooth通信はC#でwin APIを利用することで実現し、WebサーバはNode.jsを用いて実装している。',
	keywords: ['windows', 'Bluetooth', 'co-authoring', 'CSCW', 'win API', 'Ad-hoc network'],
}, {
	name: 'WristSlide',
	sub: 'イメージセンサを用いた手首を滑らせることによるスマートウォッチの片手操作手法',
	img: 'project-WristSlide-16-9.png',
	video: 'w9eHDKby8ro',
	text: 'スマートウォッチにおいて、スワイプのような連続的な入力を行うには、装着している手と反対の手で操作する必要がある。そこで、手首を机や壁、自身の身体などの上で滑らせることによって、スマートウォッチを片手で操作する手法を提案。バンド下部に埋め込まれたイメージセンサによって、物体に接地した状態での手首の移動量を取得し、片手での2次元方向の入力を可能にした。',
	implement: 'Android、Android Wearアプリケーションとして実装。スマートフォンと超小型ワイヤレスマウスをペアリングし、自端末にADBコマンドを発行することによってマウスイベントを監視。スマートフォンとペアリングされたスマートウォッチに移動量を送信してアプリケーションを操作する。',
	keywords: ['Android', 'Android Wear', 'Android Debug Bridge', 'Human Computer Interaction', 'smartwatch', 'image sensor', 'mouse']
}, {
	name: 'Ichimonitto',
	sub: 'ビデオチャットをしながらクイズ番組形式で回答する一問一答学習支援サービス',
	img: 'project-Ichimonitto-16-9.png',
	video: '',
	text: '英単語を知っていても、正確な発音ができなければ相手には伝わらない。そこで、WebRTCを利用した一問一答形式の学習支援サービスを制作した。カメラ映像とボイスチャットによって離れた場所でも一緒に学ぶことが出来る。画面に表示された単語の英語をいち早く、かつ正確に発音できたものがポイントを獲得する。Cloud n アプリケーションコンテストでWebRTC賞を受賞。',
	implement: 'チームで制作。フロントエンドを担当。Google Speech APIを使うことで、しっかりと認識されるような正確な発音での回答のみ正解とする点がポイント。現在接続しているユーザなどの管理にSkywayのAPIを利用。',
	keywords: ['Web RTC', 'quiz', 'video chat', 'Google Speech API'],
}, {
	name: 'GeoMelody',
	sub: '環境音を録音してネット上に集約するサウンドスケープSNS',
	img: 'project-GeoMelody-16-9.png',
	video: '',
	text: '位置情報と環境音を組み合わせて登録するサービス。風景には音が欠かせないという考え方、サウンドスケープをサービスとして組み込んだ作品。ユーザがスマートフォンで環境音を録音すると、音声をGPSや日付の情報と共にサーバにアップロードし、マップ上で閲覧することが出来る。Open Hack U 2014発表作品。',
	implement: 'チームで制作。アプリの大部分を担当した。Androidアプリケーションとして実装。Yahoo Map APIを使用して、録音された音声のマッピングを行っている。',
	keywords: ['Android', 'soundscape', 'map', 'record', 'microphone', 'GPS'],
	// https://www.youtube.com/embed/PYXsetGI7G8?rel=0&amp;start=3217
	// https://hacku.yahoo.co.jp/open2014/
}, {
	name: 'SoumuSSML',
	sub: '聴覚障害者のための新しい電子書籍フォーマットに対応した出版社用クラウド編集システム',
	img: 'project-SoumuSSML-16-9.png',
	video: '',
	text: '電子書籍を読む際などに用いられる、OS組み込みの読み上げ機能にはイントネーションの間違いが未だに多く残っている。そのため現在は、音声合成マークアップ言語SSMLを用いてイントネーションを出版社の人間が編集し、合成された音声を電子書籍に同封するというやり方が一般的である。そこで、電子書籍に音声ファイルではなくイントネーションを記したファイルを同封する新しい電子書籍フォーマットの提案を行った。同時に、出版社の人間がイントネーションを編集し、音声をその都度確認しながらクラウド上で編集するシステムを構築した。実証実験により効果的なツールと認められ、W3Cによって電子書籍の形式EPUBの次期仕様に盛り込まれた。総務省とアルバイト先の想隆社との共同プロジェクト。',
	implement: 'チームで制作。フロントエンドを担当した。サーバはPHPで実装。主な機能は以下の通り。電子書籍のアップロードと初期の発音記号の自動生成、編集した発音記号（イントネーションを表す）のバージョン管理とDiff表示、編集した音声をその場で再生、書籍内の文字検索、編集者の編集権限変更、ゲラ（校正用の印刷）の印刷機能とコメントのPDFアップロード、書籍内の画像表示。',
	keywords: ['E-book', 'EPUB', 'SSML', 'W3C', 'co-authoring', 'version control'],
	// http://www.soumu.go.jp/main_content/000499711.pdf
}, {
	name: 'BuddaBeautify',
	sub: '己の精神を磨くことで見た目も美しくなれるメディアアート作品',
	img: 'project-BuddaBeautify-16-9.png',
	video: 'X0SrajYh780',
	text: 'Nam June PaikによるTV-Buddhaにインスパイアを受け、己の精神を磨くことと画像処理による美顔化を組み合わせた作品。カメラとプロジェクタによって作られた擬似的な鏡の前で、ユーザは座禅を行う。身体のブレが少ない時は心の乱れも少ないと判断し、鏡の自分の顔に徐々に美顔化処理を行っていく。体験時間は1分程度。',
	implement: 'チームで制作。Processingで実装。身体にブレの度合いは動体験知によって数値化する。動体検知の実装を担当。顔の美顔化処理には、次のアルゴリズムを利用。（関川 慧, 下野 弘朗, 笹 航太, 松井 啓司, 荒川 薫. ε-フィルタを用いたリアルタイム顔画像美観化システム. 情報・システムソサイエティ特別企画 学生ポスターセッション予稿集.）',
	keywords: ['media art', 'motion detection', 'image processing'],
	// https://www.ieice.org/iss/jpn/Publications/issposter_2015/data/pdf/ISS-P-78.pdf
}]

export default projectsArray