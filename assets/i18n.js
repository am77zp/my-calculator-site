// 언어 선택 모달 (중앙 팝업) 동작
// - 자동 리디렉션 없음 (사용자가 실제로 선택한 언어만 저장)
// - X로 닫으면 "다시 표시하지 않기"를 체크한 경우에만 영구 저장
(function(){
  function ready(fn){
    if(document.readyState !== 'loading'){ fn(); }
    else{ document.addEventListener('DOMContentLoaded', fn); }
  }

  // 모달 제목 / 체크박스 문구 / 닫기·변경 버튼 라벨 (페이지의 <html lang> 속성 기준)
  var STRINGS = {
    'ko':{ title:'언어를 선택하세요', dontShow:'이 언어 선택창 다시 표시하지 않기', close:'닫기', change:'언어 변경' },
    'en':{ title:'Choose your language', dontShow:"Don't show this language picker again", close:'Close', change:'Change language' },
    'ja':{ title:'言語を選択してください', dontShow:'この言語選択を再表示しない', close:'閉じる', change:'言語を変更' },
    'zh-CN':{ title:'请选择语言', dontShow:'不再显示此语言选择框', close:'关闭', change:'更改语言' },
    'hi':{ title:'अपनी भाषा चुनें', dontShow:'यह भाषा चयन विंडो दोबारा न दिखाएं', close:'बंद करें', change:'भाषा बदलें' },
    'id':{ title:'Pilih bahasa Anda', dontShow:'Jangan tampilkan lagi pemilih bahasa ini', close:'Tutup', change:'Ubah bahasa' },
    'pt-BR':{ title:'Escolha seu idioma', dontShow:'Não mostrar este seletor de idioma novamente', close:'Fechar', change:'Alterar idioma' },
    'ru':{ title:'Выберите язык', dontShow:'Больше не показывать это окно выбора языка', close:'Закрыть', change:'Изменить язык' },
    'ur':{ title:'اپنی زبان منتخب کریں', dontShow:'یہ زبان منتخب کرنے والی ونڈو دوبارہ نہ دکھائیں', close:'بند کریں', change:'زبان تبدیل کریں' },
    'es':{ title:'Elige tu idioma', dontShow:'No volver a mostrar este selector de idioma', close:'Cerrar', change:'Cambiar idioma' },
    'tl':{ title:'Piliin ang iyong wika', dontShow:'Huwag nang ipakita muli ang tagapili ng wikang ito', close:'Isara', change:'Baguhin ang wika' },
    'ar':{ title:'اختر لغتك', dontShow:'عدم إظهار نافذة اختيار اللغة هذه مرة أخرى', close:'إغلاق', change:'تغيير اللغة' },
    'vi':{ title:'Chọn ngôn ngữ của bạn', dontShow:'Không hiển thị lại cửa sổ chọn ngôn ngữ này', close:'Đóng', change:'Đổi ngôn ngữ' },
    'de':{ title:'Wähle deine Sprache', dontShow:'Diese Sprachauswahl nicht mehr anzeigen', close:'Schließen', change:'Sprache ändern' },
    'bn':{ title:'আপনার ভাষা নির্বাচন করুন', dontShow:'এই ভাষা নির্বাচন উইন্ডোটি আর দেখাবেন না', close:'বন্ধ করুন', change:'ভাষা পরিবর্তন করুন' },
    'tr':{ title:'Dilinizi seçin', dontShow:'Bu dil seçme penceresini bir daha gösterme', close:'Kapat', change:'Dili değiştir' },
    'fa':{ title:'زبان خود را انتخاب کنید', dontShow:'این پنجره انتخاب زبان را دوباره نشان نده', close:'بستن', change:'تغییر زبان' },
    'th':{ title:'เลือกภาษาของคุณ', dontShow:'ไม่ต้องแสดงหน้าต่างเลือกภาษานี้อีก', close:'ปิด', change:'เปลี่ยนภาษา' },
    'fr':{ title:'Choisissez votre langue', dontShow:'Ne plus afficher ce sélecteur de langue', close:'Fermer', change:'Changer de langue' }
  };

  ready(function(){
    var overlay = document.getElementById('lang-modal-overlay');
    var modal = document.getElementById('lang-modal');
    var fab = document.getElementById('lang-fab');
    if(!overlay || !modal || !fab) return;

    var titleEl = document.getElementById('lang-modal-title');
    var closeBtn = document.getElementById('lang-modal-close');
    var checkbox = document.getElementById('lang-dontshow-checkbox');
    var checkboxLabel = document.getElementById('lang-dontshow-label');
    var fabLabel = document.getElementById('lang-fab-label');

    var DONE_KEY = 'ac_lang_chosen_v1'; // 언어 선택 완료 여부
    var CODE_KEY = 'ac_lang_code_v1';   // 선택 언어 코드

    var htmlLang = document.documentElement.getAttribute('lang') || 'en';
    var s = STRINGS[htmlLang] || STRINGS['en'];

    if(titleEl){ titleEl.textContent = s.title; }
    if(checkboxLabel){ checkboxLabel.textContent = s.dontShow; }
    if(closeBtn){ closeBtn.setAttribute('aria-label', s.close); }
    fab.setAttribute('aria-label', s.change);

    // 언어 버튼에 표시할 이름은 현재 페이지 언어의 실제 표기(langname)를 그대로 사용
    var currentNameEl = modal.querySelector('.lang-item.current .langname');
    var selfName = currentNameEl ? currentNameEl.textContent : (s.title);
    if(fabLabel){ fabLabel.textContent = selfName; }

    var lastFocused = null;

    function focusableEls(){
      var list = modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])');
      var out = [];
      for(var i=0;i<list.length;i++){
        if(list[i].offsetParent !== null){ out.push(list[i]); }
      }
      return out;
    }

    function onKeydown(e){
      var key = e.key || '';
      if(key === 'Escape' || e.keyCode === 27){
        e.preventDefault();
        closeModal('dismiss');
        return;
      }
      if(key === 'Tab' || e.keyCode === 9){
        var f = focusableEls();
        if(f.length === 0){ return; }
        var first = f[0], last = f[f.length - 1];
        if(e.shiftKey && document.activeElement === first){
          e.preventDefault(); last.focus();
        } else if(!e.shiftKey && document.activeElement === last){
          e.preventDefault(); first.focus();
        }
      }
    }

    function openModal(){
      lastFocused = document.activeElement;
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
      var f = focusableEls();
      (closeBtn || f[0] || modal).focus();
      document.addEventListener('keydown', onKeydown, true);
    }

    function closeModal(reason){
      overlay.hidden = true;
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown, true);
      if(reason === 'dismiss' && checkbox && checkbox.checked){
        try{ localStorage.setItem(DONE_KEY, '1'); }catch(e){}
      }
      if(lastFocused && typeof lastFocused.focus === 'function'){ lastFocused.focus(); }
      else { fab.focus(); }
    }

    overlay.addEventListener('click', function(e){
      if(e.target === overlay){ closeModal('dismiss'); }
    });
    modal.addEventListener('click', function(e){ e.stopPropagation(); });
    if(closeBtn){ closeBtn.addEventListener('click', function(){ closeModal('dismiss'); }); }
    fab.addEventListener('click', function(){ openModal(); });

    // 언어를 실제로 선택한 경우: 체크 여부와 관계없이 항상 저장 (다음 방문부터 자동 미표시)
    var CALC_SLUGS = {age:1, dday:1, discount:1, unit:1, bmi:1, about:1, privacy:1, percent:1, percentchange:1, datediff:1, time:1, speed:1};
    function codeFromHref(href){
      var parts = href.split('/').filter(function(p){ return p && p !== '..'; });
      var first = parts[0];
      if(!first || CALC_SLUGS[first]){ return 'ko'; } // 언어 폴더가 없으면 한국어(루트)
      return first;
    }
    var items = modal.querySelectorAll('.lang-item');
    for(var j=0;j<items.length;j++){
      items[j].addEventListener('click', function(){
        try{
          localStorage.setItem(DONE_KEY, '1');
          localStorage.setItem(CODE_KEY, codeFromHref(this.getAttribute('href') || ''));
        }catch(e){}
      });
    }

    var done = null;
    try{ done = localStorage.getItem(DONE_KEY); }catch(e){}
    if(!done){ openModal(); }
  });
})();
