// ---------- 만 나이 계산기 ----------
function calcAge(){
  var birthStr = document.getElementById('age-birth').value;
  if(!birthStr){ alert('생년월일을 입력해 주세요.'); return; }
  var refStr = document.getElementById('age-ref').value;
  var birth = new Date(birthStr + 'T00:00:00');
  var ref = refStr ? new Date(refStr + 'T00:00:00') : new Date();
  ref.setHours(0,0,0,0);

  var age = ref.getFullYear() - birth.getFullYear();
  var hasHadBirthdayThisYear =
    (ref.getMonth() > birth.getMonth()) ||
    (ref.getMonth() === birth.getMonth() && ref.getDate() >= birth.getDate());
  if(!hasHadBirthdayThisYear) age -= 1;

  var koreanAge = ref.getFullYear() - birth.getFullYear() + 1; // 세는나이(옛 한국식)
  var yearAge = ref.getFullYear() - birth.getFullYear(); // 연나이(현재 각종 법령 기준)

  var el = document.getElementById('age-result');
  el.className = 'result show';
  el.innerHTML =
    '<div class="line big">만 나이: ' + age + '세</div>' +
    '<div class="line">연 나이(현재 연도 - 출생 연도): ' + yearAge + '세</div>' +
    '<div class="line">세는 나이(옛 한국식): ' + koreanAge + '세</div>';
}

// ---------- D-Day 계산기 ----------
function calcDday(){
  var fromStr = document.getElementById('dday-from').value;
  var toStr = document.getElementById('dday-to').value;
  if(!toStr){ alert('목표일을 입력해 주세요.'); return; }
  var from = fromStr ? new Date(fromStr + 'T00:00:00') : new Date();
  from.setHours(0,0,0,0);
  var to = new Date(toStr + 'T00:00:00');

  var diffDays = Math.round((to - from) / (1000*60*60*24));
  var el = document.getElementById('dday-result');
  el.className = 'result show';
  if(diffDays === 0){
    el.innerHTML = '<div class="line big">오늘이 목표일입니다 (D-Day)</div>';
  } else if(diffDays > 0){
    el.innerHTML = '<div class="line big">D-' + diffDays + '</div><div class="line">목표일까지 ' + diffDays + '일 남았습니다.</div>';
  } else {
    el.innerHTML = '<div class="line big">D+' + Math.abs(diffDays) + '</div><div class="line">목표일이 지난 지 ' + Math.abs(diffDays) + '일 되었습니다.</div>';
  }
}

// ---------- 할인율 계산기 ----------
function calcDiscount(){
  var original = parseFloat(document.getElementById('disc-original').value);
  var rate = parseFloat(document.getElementById('disc-rate').value);
  if(isNaN(original) || isNaN(rate)){ alert('정가와 할인율을 모두 입력해 주세요.'); return; }
  var discounted = original * (1 - rate/100);
  var saved = original - discounted;
  var el = document.getElementById('discount-result');
  el.className = 'result show';
  el.innerHTML =
    '<div class="line big">' + Math.round(discounted).toLocaleString() + '원</div>' +
    '<div class="line">할인 후 가격 (할인율 ' + rate + '%)</div>' +
    '<div class="line">할인 금액: ' + Math.round(saved).toLocaleString() + '원</div>';
}

// ---------- 단위 변환기 ----------
var unitTables = {
  length: { 밀리미터:0.001, 센티미터:0.01, 미터:1, 킬로미터:1000, 인치:0.0254, 피트:0.3048, 마일:1609.34 },
  weight: { 밀리그램:0.000001, 그램:0.001, 킬로그램:1, 톤:1000, 파운드:0.453592, 온스:0.0283495 },
  volume: { 밀리리터:0.001, 리터:1, 갤런:3.78541, 컵:0.236588 }
};
function fillUnitOptions(){
  var typeEl = document.getElementById('unit-type');
  if(!typeEl) return;
  var type = typeEl.value;
  var units = Object.keys(unitTables[type]);
  var from = document.getElementById('unit-from');
  var to = document.getElementById('unit-to');
  from.innerHTML = ''; to.innerHTML = '';
  units.forEach(function(u){
    from.innerHTML += '<option value="'+u+'">'+u+'</option>';
    to.innerHTML += '<option value="'+u+'">'+u+'</option>';
  });
  if(units.length > 1){ to.selectedIndex = 1; }
}
function calcUnit(){
  var type = document.getElementById('unit-type').value;
  var value = parseFloat(document.getElementById('unit-value').value);
  if(isNaN(value)){ alert('변환할 값을 입력해 주세요.'); return; }
  var from = document.getElementById('unit-from').value;
  var to = document.getElementById('unit-to').value;
  var table = unitTables[type];
  var base = value * table[from];
  var result = base / table[to];
  var el = document.getElementById('unit-result');
  el.className = 'result show';
  el.innerHTML = '<div class="line big">' + result.toLocaleString(undefined,{maximumFractionDigits:6}) + ' ' + to + '</div>' +
    '<div class="line">' + value + ' ' + from + ' = ' + result.toLocaleString(undefined,{maximumFractionDigits:6}) + ' ' + to + '</div>';
}
if(document.getElementById('unit-type')){ fillUnitOptions(); }

// ---------- BMI 계산기 ----------
function calcBmi(){
  var h = parseFloat(document.getElementById('bmi-height').value);
  var w = parseFloat(document.getElementById('bmi-weight').value);
  if(isNaN(h) || isNaN(w) || h<=0 || w<=0){ alert('키와 체중을 정확히 입력해 주세요.'); return; }
  var hm = h/100;
  var bmi = w/(hm*hm);
  var category;
  if(bmi < 18.5) category = '저체중';
  else if(bmi < 23) category = '정상';
  else if(bmi < 25) category = '과체중';
  else if(bmi < 30) category = '비만';
  else category = '고도비만';
  var el = document.getElementById('bmi-result');
  el.className = 'result show';
  el.innerHTML = '<div class="line big">BMI ' + bmi.toFixed(1) + '</div><div class="line">체형 분류: ' + category + ' (아시아·한국 기준)</div>';
}

/* ======================================================================
   아래는 다국어(비한국어) 페이지 전용 함수다. 위의 한국어 함수(calcAge,
   calcDday, calcDiscount, calcUnit, calcBmi, unitTables, fillUnitOptions)는
   절대 수정하지 않았고, 한국어 페이지는 계속 위 함수만 사용한다.
   다국어 페이지는 각 페이지에 인라인으로 심어둔 window.I18N 객체의 문자열을
   사용해 동일한 계산 로직을 해당 언어로 출력한다.
   ====================================================================== */

// ---------- 만 나이 계산기 (다국어) ----------
function calcAgeGlobal(){
  var t = window.I18N || {};
  var birthStr = document.getElementById('age-birth').value;
  if(!birthStr){ alert(t.age_alert || 'Please enter a birth date.'); return; }
  var refStr = document.getElementById('age-ref').value;
  var birth = new Date(birthStr + 'T00:00:00');
  var ref = refStr ? new Date(refStr + 'T00:00:00') : new Date();
  ref.setHours(0,0,0,0);

  var age = ref.getFullYear() - birth.getFullYear();
  var hasHadBirthdayThisYear =
    (ref.getMonth() > birth.getMonth()) ||
    (ref.getMonth() === birth.getMonth() && ref.getDate() >= birth.getDate());
  if(!hasHadBirthdayThisYear) age -= 1;

  var el = document.getElementById('age-result');
  el.className = 'result show';
  var label = t.age_result_label || 'Age';
  el.innerHTML = '<div class="line big">' + label + ': ' + age + '</div>';
}

// ---------- D-Day 계산기 (다국어) ----------
function calcDdayGlobal(){
  var t = window.I18N || {};
  var fromStr = document.getElementById('dday-from').value;
  var toStr = document.getElementById('dday-to').value;
  if(!toStr){ alert(t.dday_alert || 'Please enter a target date.'); return; }
  var from = fromStr ? new Date(fromStr + 'T00:00:00') : new Date();
  from.setHours(0,0,0,0);
  var to = new Date(toStr + 'T00:00:00');

  var diffDays = Math.round((to - from) / (1000*60*60*24));
  var el = document.getElementById('dday-result');
  el.className = 'result show';
  if(diffDays === 0){
    el.innerHTML = '<div class="line big">' + (t.dday_today || 'Today is D-Day') + '</div>';
  } else if(diffDays > 0){
    var tpl = t.dday_remaining_tpl || '{n} day(s) remaining.';
    el.innerHTML = '<div class="line big">D-' + diffDays + '</div><div class="line">' + tpl.replace('{n}', diffDays) + '</div>';
  } else {
    var tpl2 = t.dday_past_tpl || '{n} day(s) have passed.';
    el.innerHTML = '<div class="line big">D+' + Math.abs(diffDays) + '</div><div class="line">' + tpl2.replace('{n}', Math.abs(diffDays)) + '</div>';
  }
}

// ---------- 할인율 계산기 (다국어, 통화 기호 없이 숫자만 표시) ----------
function calcDiscountGlobal(){
  var t = window.I18N || {};
  var original = parseFloat(document.getElementById('disc-original').value);
  var rate = parseFloat(document.getElementById('disc-rate').value);
  if(isNaN(original) || isNaN(rate)){ alert(t.discount_alert || 'Please enter both the original price and the discount rate.'); return; }
  var discounted = original * (1 - rate/100);
  var saved = original - discounted;
  var el = document.getElementById('discount-result');
  el.className = 'result show';
  var afterTpl = t.discount_after_tpl || 'Price after {rate}% discount';
  var savedLabel = t.discount_saved_label || 'You save';
  el.innerHTML =
    '<div class="line big">' + Math.round(discounted).toLocaleString() + '</div>' +
    '<div class="line">' + afterTpl.replace('{rate}', rate) + '</div>' +
    '<div class="line">' + savedLabel + ': ' + Math.round(saved).toLocaleString() + '</div>';
}

// ---------- 단위 변환기 (다국어, 국제 표준 약어 사용) ----------
var unitTablesGlobal = {
  length: { mm:0.001, cm:0.01, m:1, km:1000, 'in':0.0254, ft:0.3048, mi:1609.34 },
  weight: { mg:0.000001, g:0.001, kg:1, t:1000, lb:0.453592, oz:0.0283495 },
  volume: { ml:0.001, l:1, gal:3.78541, cup:0.236588 }
};
function fillUnitOptionsGlobal(){
  var typeEl = document.getElementById('unit-type');
  if(!typeEl) return;
  var type = typeEl.value;
  var units = Object.keys(unitTablesGlobal[type]);
  var from = document.getElementById('unit-from');
  var to = document.getElementById('unit-to');
  from.innerHTML = ''; to.innerHTML = '';
  units.forEach(function(u){
    from.innerHTML += '<option value="'+u+'">'+u+'</option>';
    to.innerHTML += '<option value="'+u+'">'+u+'</option>';
  });
  if(units.length > 1){ to.selectedIndex = 1; }
}
function calcUnitGlobal(){
  var t = window.I18N || {};
  var type = document.getElementById('unit-type').value;
  var value = parseFloat(document.getElementById('unit-value').value);
  if(isNaN(value)){ alert(t.unit_alert || 'Please enter a value to convert.'); return; }
  var from = document.getElementById('unit-from').value;
  var to = document.getElementById('unit-to').value;
  var table = unitTablesGlobal[type];
  var base = value * table[from];
  var result = base / table[to];
  var el = document.getElementById('unit-result');
  el.className = 'result show';
  el.innerHTML = '<div class="line big">' + result.toLocaleString(undefined,{maximumFractionDigits:6}) + ' ' + to + '</div>' +
    '<div class="line">' + value + ' ' + from + ' = ' + result.toLocaleString(undefined,{maximumFractionDigits:6}) + ' ' + to + '</div>';
}
if(document.getElementById('unit-type') && typeof window.I18N !== 'undefined'){ fillUnitOptionsGlobal(); }

// ---------- BMI 계산기 (다국어, WHO 국제 기준 사용) ----------
function calcBmiGlobal(){
  var t = window.I18N || {};
  var h = parseFloat(document.getElementById('bmi-height').value);
  var w = parseFloat(document.getElementById('bmi-weight').value);
  if(isNaN(h) || isNaN(w) || h<=0 || w<=0){ alert(t.bmi_alert || 'Please enter a valid height and weight.'); return; }
  var hm = h/100;
  var bmi = w/(hm*hm);
  var cats = t.bmi_cats || ['Underweight','Normal','Overweight','Obese'];
  var category;
  if(bmi < 18.5) category = cats[0];
  else if(bmi < 25) category = cats[1];
  else if(bmi < 30) category = cats[2];
  else category = cats[3];
  var el = document.getElementById('bmi-result');
  el.className = 'result show';
  var prefix = t.bmi_result_prefix || 'Category';
  var note = t.bmi_standard_note || '(WHO international standard)';
  el.innerHTML = '<div class="line big">BMI ' + bmi.toFixed(1) + '</div><div class="line">' + prefix + ': ' + category + ' ' + note + '</div>';
}
