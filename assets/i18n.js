// 언어/국가 선택 패널 동작 (자동 리디렉션 없음, localStorage에 선택 여부만 저장)
(function(){
  function ready(fn){
    if(document.readyState !== 'loading'){ fn(); }
    else{ document.addEventListener('DOMContentLoaded', fn); }
  }
  ready(function(){
    var panel = document.getElementById('lang-panel');
    var collapsedBtn = document.getElementById('lang-collapsed-btn');
    if(!panel || !collapsedBtn) return;

    var KEY = 'ac_lang_chosen_v1';
    var chosen = null;
    try{ chosen = localStorage.getItem(KEY); }catch(e){}

    function collapse(){
      panel.classList.add('hide');
      collapsedBtn.classList.add('show');
    }
    function expand(){
      panel.classList.remove('hide');
      collapsedBtn.classList.remove('show');
    }

    if(chosen){ collapse(); } else { expand(); }

    collapsedBtn.addEventListener('click', function(){
      expand();
    });

    // 국가/언어 항목 클릭 시: 선택 여부만 기록(자동 이동은 막지 않되 강제 리디렉션 로직은 없음 — 링크 자체가 이동을 수행)
    var items = panel.querySelectorAll('.lang-item');
    items.forEach(function(item){
      item.addEventListener('click', function(){
        try{ localStorage.setItem(KEY, '1'); }catch(e){}
      });
    });
  });
})();
