//商品データ
const app = new Vue({
  el: '#itemall',
  data: {
    items: [
      {
        id: '101',
        tag: 'item1',
        category: '雑貨',
        sub: 'コンテンツ品番',
        name: 'ミモザ',
        price: '1000',
        link: 'item1.html',
        thumb: 'images/img/item1.jpg',
        image1: 'images/img/item1shosai1.jpg',
        image2: 'images/img/item1shosai2.jpg',
        image3: 'images/img/item1shosai3.jpg',
        image4: 'images/img/item1shosai4.jpg',
      },
      {
        id: '102',
        tag: 'item2',
        category: '食器',
        sub: '陶器',
        name: '豆皿',
        price: '1000',
        link: 'item2.html',
        thumb: 'images/img/item2.jpg',
        image1: 'images/img/item2shosai1.jpg',
        image2: 'images/img/item2shosai2.jpg',
        image3: 'images/img/item2shosai3.jpg',
        image4: 'images/img/item2shosai4.jpg',
      },
      {
        id: '103',
        tag: 'item3',
        category: '食器',
        sub: 'グラス',
        name: 'グラス',
        price: '1000',
        link: 'item3.html',
        thumb: 'images/img/item3.jpg',
        image1: 'images/img/item3shosai1.jpg',
        image2: 'images/img/item3shosai2.jpg',
        image3: 'images/img/item3shosai3.jpg',
        image4: 'images/img/item3shosai4.jpg',
      },
      {
        id: '104',
        tag: 'item4',
        category: '食器',
        sub: 'グラス',
        name: 'グラス',
        price: '1000',
        link: 'item4.html',
        thumb: 'images/img/item4.jpg',
        image1: 'images/img/item4shosai1.jpg',
        image2: 'images/img/item4shosai2.jpg',
        image3: 'images/img/item4shosai3.jpg',
        image4: 'images/img/item4shosai4.jpg',
      },
      {
        id: '105',
        tag: 'item5',
        category: '食器',
        sub: '急須',
        name: '急須',
        price: '1000',
        link: 'item5.html',
        thumb: 'images/img/item5.jpg',
        image1: 'images/img/item5shosai1.jpg',
        image2: 'images/img/item5shosai2.jpg',
        image3: 'images/img/item5shosai3.jpg',
        image4: 'images/img/item5shosai4.jpg',
      },
      {
        id: '106',
        tag: 'item6',
        category: '食器',
        sub: 'レンゲ',
        name: 'レンゲ',
        price: '1000',
        link: 'item6.html',
        thumb: 'images/img/item6.jpg',
        image1: 'images/img/item6shosai1.jpg',
        image2: 'images/img/item6shosai2.jpg',
        image3: 'images/img/item6shosai3.jpg',
        image4: 'images/img/item6shosai4.jpg',
      },
      {
        id: '107',
        tag: 'item7',
        category: '食器',
        sub: '陶器',
        name: '中皿',
        price: '1000',
        link: 'item7.html',
        thumb: 'images/img/item7.jpg',
        image1: 'images/img/item7shosai1.jpg',
        image2: 'images/img/item7shosai2.jpg',
        image3: 'images/img/item7shosai3.jpg',
        image4: 'images/img/item7shosai4.jpg',
      },
      {
        id: '108',
        tag: 'item8',
        category: '食器',
        sub: '陶器',
        name: '豆皿',
        price: '1000',
        link: 'item8.html',
        thumb: 'images/img/item8.jpg',
        image1: 'images/img/item8shosai1.jpg',
        image2: 'images/img/item8shosai2.jpg',
        image3: 'images/img/item8shosai3.jpg',
        image4: 'images/img/item8shosai4.jpg',
      },
      {
        id: '109',
        tag: 'item9',
        category: '食器',
        sub: '陶器',
        name: '茶器',
        price: '1000',
        link: 'item9.html',
        thumb: 'images/img/item9.jpg',
        image1: 'images/img/item9shosai1.jpg',
        image2: 'images/img/item9shosai2.jpg',
        image3: 'images/img/item9shosai3.jpg',
        image4: 'images/img/item9shosai4.jpg',
      },
      {
        id: '110',
        tag: 'item10',
        category: '食器',
        sub: '陶器',
        name: 'そばちょこ',
        price: '1000',
        link: 'item10.html',
        thumb: 'images/img/item10.jpg',
        image1: 'images/img/item10shosai1.jpg',
        image2: 'images/img/item10shosai2.jpg',
        image3: 'images/img/item10shosai3.jpg',
        image4: 'images/img/item10shosai4.jpg',
      },
      {
        id: '111',
        tag: 'item11',
        category: '食器',
        sub: '陶器',
        name: '茶碗',
        price: '1000',
        link: 'item11.html',
        thumb: 'images/img/item11.jpg',
        image1: 'images/img/item11shosai1.jpg',
        image2: 'images/img/item11shosai2.jpg',
        image3: 'images/img/item11shosai3.jpg',
        image4: 'images/img/item11shosai4.jpg',
      },
      {
        id: '112',
        tag: 'item12',
        category: '食器',
        sub: '陶器',
        name: '中皿',
        price: '1000',
        link: 'item12.html',
        thumb: 'images/img/item12.jpg',
        image1: 'images/img/item12shosai1.jpg',
        image2: 'images/img/item12shosai2.jpg',
        image3: 'images/img/item12shosai3.jpg',
        image4: 'images/img/item12shosai4.jpg',
      }
    ]
  },
  methods: {
    getToki() {
        // let toki = this.items.filter(e=>{e.sub==='陶器'});
        let toki = this.items.filter(function(item) {
          return item.sub==='陶器';
        });
        console.log(toki);
        return toki;
    },
    getShokki() {
        let shokki = this.items.filter(function(item) {
          return item.category==='食器';
        });
        console.log(shokki);
        return shokki;
    },
    getChawan() {
        let chawan = this.items.filter(function(item) {
          return item.name==='茶碗';
        });
        console.log(chawan);
        return chawan;
    },
    getChuzara() {
        let chuzara = this.items.filter(function(item) {
          return item.name==='中皿';
        });
        console.log(chuzara);
        return chuzara;
    },
    getMamezara() {
        let mamezara = this.items.filter(function(item) {
          return item.name==='豆皿';
        });
        console.log(mamezara);
        return mamezara;
    },
    getChaki() {
        let chaki = this.items.filter(function(item) {
          return item.name==='茶器';
        });
        console.log(chaki);
        return chaki;
    },
    getKyusu() {
        let kyusu = this.items.filter(function(item) {
          return item.name==='急須';
        });
        console.log(kyusu);
        return kyusu;
    },
    getGlass() {
        let glass = this.items.filter(function(item) {
          return item.name==='グラス';
        });
        console.log(glass);
        return glass;
    },
    getZakka() {
        let zakka = this.items.filter(function(item) {
          return item.category==='雑貨';
        });
        console.log(zakka);
        return zakka;
    },
    getMimoza() {
        let mimoza = this.items.filter(function(item) {
          return item.name==='ミモザ';
        });
        console.log(mimoza);
        return mimoza;
    }
  },
});

