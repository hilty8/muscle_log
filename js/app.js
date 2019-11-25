$(document).foundation();

// 小目標：種目を登録できるようにする
// -- PUT先のURLは？
// >> >> POST > /restaurants これで restaurant が createできる
// -- ボックスの中身をFORM送信するために必要なのは？
// -- 
// 小目標：種目を登録したときに、セレクトボックス一覧も更新するようにする_関数を呼び出す
// 小目標：筋トレ実行したときに、日付＋種目＋回数＋


// responseをゲットする方法
// 1, url
// >> strapi取得例
// >> http://localhost:1337/Events?id=1
// 2, XMLHttpRequest .onreadystatechange
// 3, xhttp.open + xhttp.send

// セレクトボックスの中身を変更する処理
function init_training_select_box(types) {
  let types_select_box = document.getElementById('training_type')
  for (i = 0; i < types.length; i++) {
    let type = document.createElement('option');
    type.value = types[i].id;
    type.text = types[i].name;
    types_select_box.appendChild(type);
  }
}

// addEventListener('load', function(){}) よりも早い
window.addEventListener('DOMContentLoaded', function(){
  const base_url = 'http://localhost:1337';
  const types_url = `${base_url}/Types`;
  // const events_url = `${base_url}/Events`;
  // const targets_url = `${base_url}/Targets`;

  // strapi から取得
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // 筋トレの種目(Types)を受け取る
      let response = JSON.parse(xhttp.responseText);
      // セレクトボックスに反映
      init_training_select_box(response);
    }
  }

  // データ取得開始
  xhttp.open("GET", types_url, true);
  xhttp.send();
})

// フォームの入力値を取得 - これをAPIにPostすればEvent が作成できる
document.getElementById('now_first').value;
document.getElementById('now_second').value;
document.getElementById('now_third').value;

// 小目標：Event の登録の仕方をAPI形式で把握する - URLSearchParams() 形式で
// 小目標：Eventを取得し、前回の最新の結果を取得する方法を考える
// 1, Eventレスポンス取得 -> SelectBoxの値を取得し、それと一致するデータだけを選別
// -- select-box の値を取得 -> document.getElementById('training_type').value
// 配列のfilter を使って、select-box のID値と一致する項目を選別する

// まずは「前回のデータ」を出すときに、昨日のぶんのデータだけを出してもいいかも
// -> 昨日の分のデータを出したいなら、新しくテーブルとして「

// Events データを全取得 -> 
// strapi に「データを検索して渡す」みたいなメソッドをつけられないか？

// strapi に 「今洗濯しているものと同様の種目について、
// 「前回は負荷何キロで、何回やったのか」を返すURLを定義したい
// 必要なもの１：コントローラでの定義
// 必要なもの２：ルーティングの設定


function getEvents(){
  const base_url = 'http://localhost:1337';
  const events_url = `${base_url}/Events`;
  
  // strapi から取得
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // 筋トレの種目(Types)を受け取る
      let RESULT = JSON.parse(xhttp.responseText);
      console.log(RESULT);
    }
  }
  xhttp.open("GET", events_url, true);
  xhttp.send();
}

/*
let target = {
  name: 'ふくらはぎ',
  detail: '足'
}
*/

/*
// 登録成功
let params = new URLSearchParams();
params.append('name', 'ふくらはぎ');
params.append('parts', '足');
axios.post('http://localhost:1337/Targets', params);

*/
/*
const data = { name: 'hoge' };
Axios
    .post('/api/sample/', data)
    .then(res => {
        alert("「" + data.name + "」登録完了");
        this.$router.push({path: '/articles/list'});
    })
    .catch(error => {
        alert("「" + data.name + "」登録失敗");
        console.log(error, data);
    });
    */

