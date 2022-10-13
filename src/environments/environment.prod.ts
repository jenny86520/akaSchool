export const environment = {
  categories: [
    'Website',
    'Angular',
    'Git'
  ],
  postTitles: [
    {
      id: 0,
      title: 'akaSchool',
      path: null,
      category: ''
    },
    {
      id: 1,
      title: '從零開始的爆肝工程師日常',
      path: '0x00',
      // path: 'helloWorld',
      category: ''
    },
    {
      id: 2,
      title: '從零開始的個人網站【Angular、Git、GitHub 基礎入門】',
      path: '0x01',
      // path: 'helloWebsite',
      category: 'Website'
    },
    {
      id: 3,
      title: '我的第一篇文章-序章【Angular 專案檔案介紹】',
      path: '0x02',
      // path: 'helloPosts/file',
      category: 'Angular'
    },
    {
      id: 4,
      title: '我的第一篇文章-建立文章【[Angular]元件（Component）& NgModule 簡介】',
      path: '0x03',
      // path: 'helloPosts/component',
      category: 'Angular'
    },
    {
      id: 5,
      title: '我的第一篇文章-撰寫內容【[Angular]資料繫結（Binding）】',
      path: '0x04',
      // path: 'helloPosts/binding',
      category: 'Angular'
    },
    {
      id: 6,
      title: '我的第一篇文章-瀏覽文章吧！【[Angular]路由配置（Router）】',
      path: '0x05',
      // path: 'helloPosts/router',
      category: 'Angular'
    },
    {
      id: 7,
      title: '我的第一篇文章-簡單管理所有文章標題【[Angular]環境變數（environmemt.ts v.s environmemt.prod.ts）】',
      path: '0x06',
      // path: 'helloPosts/environment',
      category: 'Angular'
    },
    {
      id: 8,
      title: '前進 Git 版本控管吧！【版本控管（Version control） & Git & GitHub 簡介】',
      path: '0x07',
      // path: 'gitStart',
      category: 'Git'
    },
    {
      id: 9,
      title: 'Git 手把手安裝教學【[Git]安裝步驟（Windows）詳細介紹】',
      path: '0x08',
      // path: 'gitInstall',
      category: 'Git'
    },
    {
      id: 10,
      title: '版控新手村【[Git]本地版控基本操作（Add、Commit、Restore、Status、Log） & Vim 基本介紹】',
      path: '0x09',
      // path: 'gitInitial',
      category: 'Git'
    },
    {
      id: 11,
      title: '版控個人副本【[Git]本地版控分支（Branch、Checkout）、合併（Merge） 介紹】',
      path: '0x0A',
      // path: 'gitInstance/Branch-Merge',
      category: 'Git'
    },
    {
      id: 12,
      title: '版控個人副本【[Git]版控觀念（Working Tree、Index、Commit、HEAD）、比較差異（Diff、Patch） 介紹】',
      path: '0x0B',
      // path: 'gitInstance/Diff-Patch',
      category: 'Git'
    },
    {
      id: 13,
      title: '版控個人副本【[Git]復原變更（Reset、Checkout）、復原版本（Revert） 介紹】',
      path: '0x0C',
      // path: 'gitInstance/Reset-Revert',
      category: 'Git'
    },
    {
      id: 14,
      title: '版控個人副本【[Git]重定基底（Rebase） 介紹】', // 以及學會靈活地修改歷史紀錄（新增、修改、刪除、換位）
      path: '0x0D',
      // path: 'gitInstance/Rebase',
      category: 'Git'
    },
    {
      id: 15,
      title: '版控個人副本【[Git]暫存（Stash）、版本標記（Tag） 介紹】',
      path: '0x0E',
      // path: 'gitInstance/Stash-Tag',
      category: 'Git'
    },
    {
      id: 16,
      title: '探索「.git」資料夾 & 本地版控指令大集合【[Git] .git 資料夾內容介紹 & 所有本地版控指令】',
      path: '0x0F',
      // path: 'gitFinal',
      category: 'Git'
    }


  ],
  production: true

};

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCBLuqve2xhjBGcuaRnYYPgcq0UhfH9viE',
  authDomain: 'akaschool-f4936.firebaseapp.com',
  databaseURL: 'https://akaschool-f4936.firebaseio.com',
  projectId: 'akaschool-f4936',
  storageBucket: 'akaschool-f4936.appspot.com',
  messagingSenderId: '450948071841',
  appId: '1:450948071841:web:b108a9ac6c400e2ec00be0',
  measurementId: 'G-NTCK86N5W2'
};
