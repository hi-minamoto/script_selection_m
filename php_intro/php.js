//ID tabcontrolとtag a の要素の取得
let tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
//ID tabbodylとtag div の要素の取得
const pages = document.getElementById('tabbody').getElementsByTagName('div');

function changeTab() {
   // href属性値から対象のid名を抜き出す
   const targetid = this.href.substring(this.href.indexOf('#') + 1, this.href.length);
   // console.log("targetid:", targetid)

   // 指定のタブページだけを表示する
   for (let i = 0; i < pages.length; i++) {
      if (pages[i].id != targetid) {
         //sytle.displayは素の表示に関する CSS の display の参照や更新ができる
         //"none"は非表示
         pages[i].style.display = "none";
      }
      else {
         //"block"は表示
         pages[i].style.display = "block";
      }
   }

   // クリックされたタブを前面に表示する
   for (let i = 0; i < tabs.length; i++) {
      //z-indexプロパティは、ボックス要素の重なり順を指定 数値が大きい程前面に表示
      tabs[i].style.zIndex = "0";
   }
   this.style.zIndex = "10";

   // ページ遷移しないようにfalseを返す
   return false;
}

// すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
for (let i = 0; i < tabs.length; i++) {
   // onclickはクリック時のイベントを実行
   tabs[i].onclick = changeTab;
}

// 最初は先頭のタブを選択しておく
tabs[0].onclick();
