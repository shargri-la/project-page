import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Shargri-La', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'A Sharded Blockchain Simulator', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Shargri-La',
  subtitle: 'A Sharded Blockchain Simulator',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    '現在、ブロックチェーンのスケーラビリティ問題解決策としてシャーディングが注目されており、分散型アプリケーションプラットフォームであるEthereumは、シャーディングやProof of Stakeなどを導入した新しいEthereum 2.0に生まれ変わろうとしている。シャーディングはEthereumに限らず様々なブロックチェーンプロジェクトで採用が検討されており、また、アカデミアでも盛んに研究が進んでいる。シャーディングを組み込んだブロックチェーンにおいて、コンセンサスプロトコルレイヤでの安全性やアルゴリズムの検証は実用的にも学術的にも進んできているが、分散型アプリケーションプラットフォームで肝心なスマートコントラクトレイヤでのプロトコル開発および検証は未だ進んでいない。また、プロトコル開発におけるベストプラクティスもない。',
  paragraphTwo:
    'そこで本プロジェクトでは、そのような次世代の分散型アプリケーションプラットフォームのプロトコル開発を効率的かつ統一的に行えるプロトコル開発支援システムを構築する。本システムにより、プロトコル開発が効率化し、また、負荷集中現象やユーザエクスペリエンスの分析に用いることで、より良い分散型アプリケーションプラットフォームを実現できる。',
  paragraphThree: ' ',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// TEAM DATA
export const teamData = {
  img1: 'okanami.jpg',
  paragraph1: '岡南 直哉',
  img2: 'nakamura.jpg',
  paragraph2: '中村 龍矢',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'coming-soon.png',
    title: '未踏 2020',
    info:
      '2020年度未踏IT人材発掘・育成事業にて、Sharded Blockchain のシミュレータ『Shargri-La』を開発中。',
    info2: '',
    url: 'https://www.ipa.go.jp/jinzai/mitou/2020/koubokekka_index.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'wtsc.png',
    title: 'WTSC 2020',
    info:
      '"4th Workshop on Trusted Smart Contracts" (WTSC 2020) にてシャーディングにおける負荷集中現象の分析と負荷分散プロトコルを提案。',
    info2: '',
    url: 'http://fc20.ifca.ai/wtsc/WTSC2020/WTSC20_paper_7.pdf',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Shargri-La',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
