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

/* ======================================================================
   아래는 새로 추가된 5개 계산기(퍼센트, 퍼센트 증감, 날짜 차이, 시간, 속도)의
   함수다. 기존 5개 계산기 함수(calcAge, calcDday, calcDiscount, calcUnit,
   calcBmi 및 각 *Global 버전)는 위쪽에 그대로 유지되며 전혀 수정하지 않았다.
   여기서도 동일한 이중 구조(한국어 하드코딩 함수 + window.I18N을 사용하는
   *Global 함수)를 따른다. 모드 전환(pcToggleMode 등)은 언어와 무관한 순수
   UI 토글이라 한국어/다국어 페이지가 함께 사용한다.
   ====================================================================== */

// ---------- 공통 숫자 포맷 헬퍼(신규) ----------
function pctRound2(n){ return Math.round(n*100)/100; }
function spRound2(n){ return Math.round(n*100)/100; }
function spFormatHM(hours){
  var totalMin = Math.round(hours*60);
  var h = Math.floor(totalMin/60), m = totalMin%60;
  return h+':'+(m<10?'0':'')+m;
}
function spParseTimeInput(str){
  str = (str||'').trim();
  if(str.indexOf(':') > -1){
    var p = str.split(':');
    return parseFloat(p[0]) + (parseFloat(p[1])||0)/60;
  }
  return parseFloat(str);
}

// ---------- 퍼센트 계산기 ----------
function calcPercent(){
  var mode = document.getElementById('percent-mode').value;
  var a = parseFloat(document.getElementById('percent-a').value);
  var b = parseFloat(document.getElementById('percent-b').value);
  if(isNaN(a) || isNaN(b)){ alert('값 A와 값 B를 모두 입력해 주세요.'); return; }
  var el = document.getElementById('percent-result');
  el.className = 'result show';
  var result, html;
  if(mode === '1'){
    result = pctRound2(b * a / 100);
    html = '<div class="line big">' + result + '</div><div class="line">' + b + '의 ' + a + '%는 ' + result + '입니다.</div>';
  } else if(mode === '2'){
    result = pctRound2(a / (b / 100));
    html = '<div class="line big">' + result + '</div><div class="line">' + a + '가 ' + b + '%일 때 전체 값은 ' + result + '입니다.</div>';
  } else {
    result = pctRound2(a / b * 100);
    html = '<div class="line big">' + result + '%</div><div class="line">' + a + '는 ' + b + '의 ' + result + '%입니다.</div>';
  }
  el.innerHTML = html;
}
function calcPercentGlobal(){
  var t = window.I18N || {};
  var mode = document.getElementById('percent-mode').value;
  var a = parseFloat(document.getElementById('percent-a').value);
  var b = parseFloat(document.getElementById('percent-b').value);
  if(isNaN(a) || isNaN(b)){ alert(t.percent_alert || 'Please enter both Value A and Value B.'); return; }
  var el = document.getElementById('percent-result');
  el.className = 'result show';
  var tpl = t.percent_result_tpl || ['{a} is {result}% of {b}.', '{a}% of {b} is {result}.', 'If {a} is {b}% of a number, that number is {result}.'];
  var result, idx;
  if(mode === '1'){ result = pctRound2(b * a / 100); idx = 1; }
  else if(mode === '2'){ result = pctRound2(a / (b / 100)); idx = 2; }
  else { result = pctRound2(a / b * 100); idx = 0; }
  var line = (tpl[idx] || '{result}').split('{a}').join(a).split('{b}').join(b).split('{result}').join(result);
  el.innerHTML = '<div class="line big">' + result + '</div><div class="line">' + line + '</div>';
}

// ---------- 퍼센트 증가/감소 계산기 ----------
function pcToggleMode(){
  var mode = document.getElementById('pc-mode');
  if(!mode) return;
  var d = document.getElementById('pc-group-diff');
  var a = document.getElementById('pc-group-apply');
  if(!d || !a) return;
  if(mode.value === 'apply'){ d.hidden = true; a.hidden = false; }
  else { d.hidden = false; a.hidden = true; }
}
function calcPercentChange(){
  var mode = document.getElementById('pc-mode').value;
  var el = document.getElementById('pc-result');
  el.className = 'result show';
  if(mode === 'apply'){
    var base = parseFloat(document.getElementById('pc-base').value);
    var pct = parseFloat(document.getElementById('pc-percent').value);
    if(isNaN(base) || isNaN(pct)){ alert('필요한 값을 모두 입력해 주세요.'); return; }
    var result = pctRound2(base * (1 + pct/100));
    el.innerHTML = '<div class="line big">' + result + '</div><div class="line">' + base + '에서 ' + pct + '%를 적용하면 ' + result + '입니다.</div>';
  } else {
    var before = parseFloat(document.getElementById('pc-before').value);
    var after = parseFloat(document.getElementById('pc-after').value);
    if(isNaN(before) || isNaN(after) || before === 0){ alert('필요한 값을 모두 입력해 주세요.'); return; }
    var result = pctRound2((after - before) / before * 100);
    var dir = result > 0 ? '증가' : (result < 0 ? '감소' : '변화 없음');
    el.innerHTML = '<div class="line big">' + result + '%</div><div class="line">변화율은 ' + result + '%입니다 (' + dir + ').</div>';
  }
}
function pcToggleModeGlobal(){ pcToggleMode(); }
function calcPercentChangeGlobal(){
  var t = window.I18N || {};
  var mode = document.getElementById('pc-mode').value;
  var el = document.getElementById('pc-result');
  el.className = 'result show';
  var tpl = t.percentchange_result_tpl || ['The percent change is {result}% ({dir}).', 'Applying {percent}% to {base} gives {result}.'];
  if(mode === 'apply'){
    var base = parseFloat(document.getElementById('pc-base').value);
    var pct = parseFloat(document.getElementById('pc-percent').value);
    if(isNaN(base) || isNaN(pct)){ alert(t.percentchange_alert || 'Please enter all required values.'); return; }
    var result = pctRound2(base * (1 + pct/100));
    var line = (tpl[1] || '{result}').split('{base}').join(base).split('{percent}').join(pct).split('{result}').join(result);
    el.innerHTML = '<div class="line big">' + result + '</div><div class="line">' + line + '</div>';
  } else {
    var before = parseFloat(document.getElementById('pc-before').value);
    var after = parseFloat(document.getElementById('pc-after').value);
    if(isNaN(before) || isNaN(after) || before === 0){ alert(t.percentchange_alert || 'Please enter all required values.'); return; }
    var result = pctRound2((after - before) / before * 100);
    var dir = result > 0 ? (t.percentchange_dir_up || 'increase') : (result < 0 ? (t.percentchange_dir_down || 'decrease') : (t.percentchange_dir_same || 'no change'));
    var line = (tpl[0] || '{result}').split('{result}').join(result).split('{dir}').join(dir);
    el.innerHTML = '<div class="line big">' + result + '%</div><div class="line">' + line + '</div>';
  }
}

// ---------- 날짜 차이 계산기 ----------
function calcDateDiff(){
  var sVal = document.getElementById('dd-start').value;
  var eVal = document.getElementById('dd-end').value;
  if(!sVal || !eVal){ alert('시작일과 종료일을 모두 입력해 주세요.'); return; }
  var d1 = new Date(sVal + 'T00:00:00');
  var d2 = new Date(eVal + 'T00:00:00');
  if(d1 > d2){ var tmp = d1; d1 = d2; d2 = tmp; }
  var totalDays = Math.round((d2 - d1) / (1000*60*60*24));
  var el = document.getElementById('dd-result');
  el.className = 'result show';
  if(totalDays === 0){ el.innerHTML = '<div class="line big">두 날짜가 같습니다 (0일)</div>'; return; }
  var weeks = Math.floor(totalDays/7), restdays = totalDays % 7;
  var y = d2.getFullYear() - d1.getFullYear();
  var m = d2.getMonth() - d1.getMonth();
  var dd = d2.getDate() - d1.getDate();
  if(dd < 0){ m -= 1; var prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0); dd += prevMonth.getDate(); }
  if(m < 0){ y -= 1; m += 12; }
  el.innerHTML =
    '<div class="line big">총 ' + totalDays + '일 차이</div>' +
    '<div class="line">' + weeks + '주 ' + restdays + '일</div>' +
    '<div class="line">' + y + '년 ' + m + '개월 ' + dd + '일 차이</div>';
}
function calcDateDiffGlobal(){
  var t = window.I18N || {};
  var sVal = document.getElementById('dd-start').value;
  var eVal = document.getElementById('dd-end').value;
  if(!sVal || !eVal){ alert(t.datediff_alert || 'Please enter both the start date and the end date.'); return; }
  var d1 = new Date(sVal + 'T00:00:00');
  var d2 = new Date(eVal + 'T00:00:00');
  if(d1 > d2){ var tmp = d1; d1 = d2; d2 = tmp; }
  var totalDays = Math.round((d2 - d1) / (1000*60*60*24));
  var el = document.getElementById('dd-result');
  el.className = 'result show';
  if(totalDays === 0){ el.innerHTML = '<div class="line big">' + (t.datediff_same || 'The two dates are the same (0 days)') + '</div>'; return; }
  var weeks = Math.floor(totalDays/7), restdays = totalDays % 7;
  var y = d2.getFullYear() - d1.getFullYear();
  var m = d2.getMonth() - d1.getMonth();
  var dd = d2.getDate() - d1.getDate();
  if(dd < 0){ m -= 1; var prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0); dd += prevMonth.getDate(); }
  if(m < 0){ y -= 1; m += 12; }
  var daysLine = (t.datediff_days_tpl || '{days} day(s) total').split('{days}').join(totalDays);
  var weeksLine = (t.datediff_weeks_tpl || '{weeks} week(s) {restdays} day(s)').split('{weeks}').join(weeks).split('{restdays}').join(restdays);
  var ymdLine = (t.datediff_ymd_tpl || '{y} year(s) {m} month(s) {d} day(s)').split('{y}').join(y).split('{m}').join(m).split('{d}').join(dd);
  el.innerHTML = '<div class="line big">' + daysLine + '</div><div class="line">' + weeksLine + '</div><div class="line">' + ymdLine + '</div>';
}

// ---------- 시간 계산기 ----------
function timeToggleMode(){
  var mode = document.getElementById('tm-mode');
  if(!mode) return;
  var g1 = document.getElementById('tm-group-elapsed');
  var g2 = document.getElementById('tm-group-addsub');
  if(!g1 || !g2) return;
  if(mode.value === 'addsub'){ g1.hidden = true; g2.hidden = false; }
  else { g1.hidden = false; g2.hidden = true; }
}
function timeToggleModeGlobal(){ timeToggleMode(); }
function calcTime(){
  var mode = document.getElementById('tm-mode').value;
  var el = document.getElementById('tm-result');
  el.className = 'result show';
  if(mode === 'addsub'){
    var base = document.getElementById('tm-base').value;
    var durH = parseFloat(document.getElementById('tm-dur-h').value) || 0;
    var durM = parseFloat(document.getElementById('tm-dur-m').value) || 0;
    var op = document.getElementById('tm-op').value;
    if(!base){ alert('필요한 값을 모두 입력해 주세요.'); return; }
    var bp = base.split(':');
    var baseMin = parseInt(bp[0],10) * 60 + parseInt(bp[1],10);
    var durMin = durH * 60 + durM;
    var totalMin = (op === 'sub') ? (baseMin - durMin) : (baseMin + durMin);
    var dayOffset = 0;
    while(totalMin >= 1440){ totalMin -= 1440; dayOffset += 1; }
    while(totalMin < 0){ totalMin += 1440; dayOffset -= 1; }
    var hh = Math.floor(totalMin/60), mm = totalMin % 60;
    var timeStr = (hh<10?'0':'')+hh + ':' + (mm<10?'0':'')+mm;
    var suffix = dayOffset > 0 ? ' (다음 날)' : (dayOffset < 0 ? ' (전날)' : '');
    el.innerHTML = '<div class="line big">' + timeStr + '</div><div class="line">결과 시각: ' + timeStr + suffix + '</div>';
  } else {
    var sVal = document.getElementById('tm-start').value;
    var eVal = document.getElementById('tm-end').value;
    if(!sVal || !eVal){ alert('필요한 값을 모두 입력해 주세요.'); return; }
    var sp = sVal.split(':'), ep = eVal.split(':');
    var sMin = parseInt(sp[0],10)*60 + parseInt(sp[1],10);
    var eMin = parseInt(ep[0],10)*60 + parseInt(ep[1],10);
    var diff = eMin - sMin;
    var crossed = false;
    if(diff < 0){ diff += 1440; crossed = true; }
    var h = Math.floor(diff/60), m = diff % 60;
    el.innerHTML = '<div class="line big">' + h + '시간 ' + m + '분</div><div class="line">경과 시간: ' + h + '시간 ' + m + '분' + (crossed ? ' (자정을 넘김)' : '') + '</div>';
  }
}
function calcTimeGlobal(){
  var t = window.I18N || {};
  var mode = document.getElementById('tm-mode').value;
  var el = document.getElementById('tm-result');
  el.className = 'result show';
  if(mode === 'addsub'){
    var base = document.getElementById('tm-base').value;
    var durH = parseFloat(document.getElementById('tm-dur-h').value) || 0;
    var durM = parseFloat(document.getElementById('tm-dur-m').value) || 0;
    var op = document.getElementById('tm-op').value;
    if(!base){ alert(t.time_alert || 'Please enter all required values.'); return; }
    var bp = base.split(':');
    var baseMin = parseInt(bp[0],10) * 60 + parseInt(bp[1],10);
    var durMin = durH * 60 + durM;
    var totalMin = (op === 'sub') ? (baseMin - durMin) : (baseMin + durMin);
    var dayOffset = 0;
    while(totalMin >= 1440){ totalMin -= 1440; dayOffset += 1; }
    while(totalMin < 0){ totalMin += 1440; dayOffset -= 1; }
    var hh = Math.floor(totalMin/60), mm = totalMin % 60;
    var timeStr = (hh<10?'0':'')+hh + ':' + (mm<10?'0':'')+mm;
    var tplKey = dayOffset > 0 ? 'time_addsub_next_tpl' : (dayOffset < 0 ? 'time_addsub_prev_tpl' : 'time_addsub_tpl');
    var tpl = t[tplKey] || 'Resulting time: {time}';
    el.innerHTML = '<div class="line big">' + timeStr + '</div><div class="line">' + tpl.split('{time}').join(timeStr) + '</div>';
  } else {
    var sVal = document.getElementById('tm-start').value;
    var eVal = document.getElementById('tm-end').value;
    if(!sVal || !eVal){ alert(t.time_alert || 'Please enter all required values.'); return; }
    var sp = sVal.split(':'), ep = eVal.split(':');
    var sMin = parseInt(sp[0],10)*60 + parseInt(sp[1],10);
    var eMin = parseInt(ep[0],10)*60 + parseInt(ep[1],10);
    var diff = eMin - sMin;
    var crossed = false;
    if(diff < 0){ diff += 1440; crossed = true; }
    var h = Math.floor(diff/60), m = diff % 60;
    var tpl = crossed ? (t.time_elapsed_next_tpl || 'Elapsed time: {h}h {m}m (crosses midnight)') : (t.time_elapsed_tpl || 'Elapsed time: {h}h {m}m');
    var line = tpl.split('{h}').join(h).split('{m}').join(m);
    el.innerHTML = '<div class="line big">' + h + ':' + (m<10?'0':'')+m + '</div><div class="line">' + line + '</div>';
  }
}

// ---------- 속도·거리·시간 계산기 ----------
function spToggleMode(){
  var mode = document.getElementById('sp-mode');
  if(!mode) return;
  var fd = document.getElementById('sp-field-distance');
  var ft = document.getElementById('sp-field-time');
  var fs = document.getElementById('sp-field-speed');
  if(!fd || !ft || !fs) return;
  fd.hidden = (mode.value === 'distance');
  ft.hidden = (mode.value === 'time');
  fs.hidden = (mode.value === 'speed');
}
function spToggleModeGlobal(){ spToggleMode(); }
function calcSpeed(){
  var mode = document.getElementById('sp-mode').value;
  var d = parseFloat(document.getElementById('sp-distance').value);
  var tval = spParseTimeInput(document.getElementById('sp-time').value);
  var s = parseFloat(document.getElementById('sp-speed').value);
  var el = document.getElementById('sp-result');
  el.className = 'result show';
  if(mode === 'distance'){
    if(isNaN(s) || isNaN(tval)){ alert('필요한 값을 모두 정확히 입력해 주세요.'); return; }
    var result = spRound2(s * tval);
    el.innerHTML = '<div class="line big">' + result + ' km</div><div class="line">거리는 ' + result + ' km입니다.</div>';
  } else if(mode === 'time'){
    if(isNaN(d) || isNaN(s) || s === 0){ alert('필요한 값을 모두 정확히 입력해 주세요.'); return; }
    var result = spRound2(d / s);
    var hm = spFormatHM(result);
    el.innerHTML = '<div class="line big">' + result + '시간</div><div class="line">걸리는 시간은 ' + result + '시간 (' + hm + ')입니다.</div>';
  } else {
    if(isNaN(d) || isNaN(tval) || tval === 0){ alert('필요한 값을 모두 정확히 입력해 주세요.'); return; }
    var result = spRound2(d / tval);
    el.innerHTML = '<div class="line big">' + result + ' km/h</div><div class="line">속도는 ' + result + ' km/h입니다.</div>';
  }
}
function calcSpeedGlobal(){
  var t = window.I18N || {};
  var mode = document.getElementById('sp-mode').value;
  var d = parseFloat(document.getElementById('sp-distance').value);
  var tval = spParseTimeInput(document.getElementById('sp-time').value);
  var s = parseFloat(document.getElementById('sp-speed').value);
  var el = document.getElementById('sp-result');
  el.className = 'result show';
  var tpl = t.speed_result_tpl || ['The speed is {result} km/h.', 'The distance is {result} km.', 'The time needed is {result} hours ({hm}).'];
  if(mode === 'distance'){
    if(isNaN(s) || isNaN(tval)){ alert(t.speed_alert || 'Please enter both required values correctly.'); return; }
    var result = spRound2(s * tval);
    var line = (tpl[1] || '{result}').split('{result}').join(result);
    el.innerHTML = '<div class="line big">' + result + ' km</div><div class="line">' + line + '</div>';
  } else if(mode === 'time'){
    if(isNaN(d) || isNaN(s) || s === 0){ alert(t.speed_alert || 'Please enter both required values correctly.'); return; }
    var result = spRound2(d / s);
    var hm = spFormatHM(result);
    var line = (tpl[2] || '{result}').split('{result}').join(result).split('{hm}').join(hm);
    el.innerHTML = '<div class="line big">' + result + '</div><div class="line">' + line + '</div>';
  } else {
    if(isNaN(d) || isNaN(tval) || tval === 0){ alert(t.speed_alert || 'Please enter both required values correctly.'); return; }
    var result = spRound2(d / tval);
    var line = (tpl[0] || '{result}').split('{result}').join(result);
    el.innerHTML = '<div class="line big">' + result + ' km/h</div><div class="line">' + line + '</div>';
  }
}

/* ======================================================================
   아래는 4개의 신규 계산기(팁, 더치페이, 연비 변환, 나이 차이)의 함수다.
   기존 10개 계산기 함수(위쪽 전부)는 전혀 수정하지 않았다. 여기서도 동일한
   이중 구조(한국어 하드코딩 함수 + window.I18N을 사용하는 *Global 함수)를
   따른다.
   ====================================================================== */

// ---------- 팁 계산기 ----------
function tipSetPreset(p){
  var input = document.getElementById('tip-percent');
  if(input){ input.value = p; }
}
function tipSetPresetGlobal(p){ tipSetPreset(p); }
function calcTip(){
  var bill = parseFloat(document.getElementById('tip-bill').value);
  var percent = parseFloat(document.getElementById('tip-percent').value);
  var people = parseInt(document.getElementById('tip-people').value, 10);
  if(isNaN(bill) || bill < 0 || isNaN(percent) || percent < 0 || isNaN(people) || people < 1){
    alert('음식값, 팁 비율, 인원 수를 정확히 입력해 주세요 (인원 수는 1명 이상).');
    return;
  }
  var tipAmount = Math.round(bill * percent / 100);
  var total = bill + tipAmount;
  var perPerson = Math.round(total / people);
  var el = document.getElementById('tip-result');
  el.className = 'result show';
  el.innerHTML =
    '<div class="line big">' + perPerson.toLocaleString() + '원</div>' +
    '<div class="line">1인당 금액 (' + people + '명 기준)</div>' +
    '<div class="line">팁 금액: ' + tipAmount.toLocaleString() + '원 (팁 ' + percent + '%)</div>' +
    '<div class="line">팁 포함 총액: ' + Math.round(total).toLocaleString() + '원</div>';
}
function calcTipGlobal(){
  var t = window.I18N || {};
  var bill = parseFloat(document.getElementById('tip-bill').value);
  var percent = parseFloat(document.getElementById('tip-percent').value);
  var people = parseInt(document.getElementById('tip-people').value, 10);
  if(isNaN(bill) || bill < 0 || isNaN(percent) || percent < 0 || isNaN(people) || people < 1){
    alert(t.tip_alert || 'Please enter a valid bill amount, tip percentage, and number of people (at least 1).');
    return;
  }
  var tipAmount = pctRound2(bill * percent / 100);
  var total = pctRound2(bill + tipAmount);
  var perPerson = pctRound2(total / people);
  var el = document.getElementById('tip-result');
  el.className = 'result show';
  var perLine = (t.tip_per_tpl || 'Per person ({people} people)').split('{people}').join(people);
  var tipLine = (t.tip_tip_tpl || 'Tip amount: {tip} ({percent}% tip)').split('{tip}').join(tipAmount.toLocaleString()).split('{percent}').join(percent);
  var totalLine = (t.tip_total_tpl || 'Total with tip: {total}').split('{total}').join(total.toLocaleString());
  el.innerHTML =
    '<div class="line big">' + perPerson.toLocaleString() + '</div>' +
    '<div class="line">' + perLine + '</div>' +
    '<div class="line">' + tipLine + '</div>' +
    '<div class="line">' + totalLine + '</div>';
}

// ---------- 더치페이 계산기 ----------
function calcSplitBill(){
  var total = parseFloat(document.getElementById('split-total').value);
  var people = parseInt(document.getElementById('split-people').value, 10);
  var extraRaw = document.getElementById('split-extra').value;
  var discRaw = document.getElementById('split-discount').value;
  var extra = extraRaw === '' ? 0 : parseFloat(extraRaw);
  var disc = discRaw === '' ? 0 : parseFloat(discRaw);
  if(isNaN(total) || total < 0 || isNaN(people) || people < 1 || isNaN(extra) || extra < 0 || isNaN(disc) || disc < 0){
    alert('총 금액과 인원 수를 정확히 입력해 주세요 (인원 수는 1명 이상, 추가 비용·할인은 0 이상).');
    return;
  }
  var adjusted = total + extra - disc;
  if(adjusted < 0){ adjusted = 0; }
  var perPerson = Math.round(adjusted / people);
  var el = document.getElementById('split-result');
  el.className = 'result show';
  var detail = (extra > 0 || disc > 0)
    ? ' (총액 ' + Math.round(total).toLocaleString() + '원 + 추가비용 ' + Math.round(extra).toLocaleString() + '원 − 할인 ' + Math.round(disc).toLocaleString() + '원)'
    : '';
  el.innerHTML =
    '<div class="line big">' + perPerson.toLocaleString() + '원</div>' +
    '<div class="line">1인당 금액 (' + people + '명 기준)</div>' +
    '<div class="line">정산 금액: ' + Math.round(adjusted).toLocaleString() + '원' + detail + '</div>';
}
function calcSplitBillGlobal(){
  var t = window.I18N || {};
  var total = parseFloat(document.getElementById('split-total').value);
  var people = parseInt(document.getElementById('split-people').value, 10);
  var extraRaw = document.getElementById('split-extra').value;
  var discRaw = document.getElementById('split-discount').value;
  var extra = extraRaw === '' ? 0 : parseFloat(extraRaw);
  var disc = discRaw === '' ? 0 : parseFloat(discRaw);
  if(isNaN(total) || total < 0 || isNaN(people) || people < 1 || isNaN(extra) || extra < 0 || isNaN(disc) || disc < 0){
    alert(t.splitbill_alert || 'Please enter a valid total and number of people (at least 1); extra charge and discount must be 0 or more.');
    return;
  }
  var adjusted = pctRound2(total + extra - disc);
  if(adjusted < 0){ adjusted = 0; }
  var perPerson = pctRound2(adjusted / people);
  var el = document.getElementById('split-result');
  el.className = 'result show';
  var perLine = (t.splitbill_per_tpl || 'Per person ({people} people)').split('{people}').join(people);
  var totalLine = (t.splitbill_total_tpl || 'Amount to split: {adjusted}').split('{adjusted}').join(adjusted.toLocaleString());
  var detail = '';
  if(extra > 0 || disc > 0){
    detail = ' ' + (t.splitbill_detail_tpl || '({total} total + {extra} extra − {discount} discount)')
      .split('{total}').join(total.toLocaleString())
      .split('{extra}').join(extra.toLocaleString())
      .split('{discount}').join(disc.toLocaleString());
  }
  el.innerHTML =
    '<div class="line big">' + perPerson.toLocaleString() + '</div>' +
    '<div class="line">' + perLine + '</div>' +
    '<div class="line">' + totalLine + detail + '</div>';
}

// ---------- 연비 변환기 (km/L, L/100km, US mpg, UK mpg 상호 변환) ----------
var FUEL_MPG_US = 2.3521458329; // 1 km/L = 2.3521458329 US mpg
var FUEL_MPG_UK = 2.8248094476; // 1 km/L = 2.8248094476 UK (Imperial) mpg
function fuelToKml(unit, v){
  if(unit === 'kml'){ return v; }
  if(unit === 'l100km'){ return 100 / v; }
  if(unit === 'mpgus'){ return v / FUEL_MPG_US; }
  return v / FUEL_MPG_UK; // mpguk
}
function calcFuel(){
  var unit = document.getElementById('fuel-unit').value;
  var v = parseFloat(document.getElementById('fuel-value').value);
  if(isNaN(v) || v <= 0){ alert('변환할 값을 0보다 크게 입력해 주세요.'); return; }
  var kml = fuelToKml(unit, v);
  var l100km = 100 / kml;
  var mpgUs = kml * FUEL_MPG_US;
  var mpgUk = kml * FUEL_MPG_UK;
  var el = document.getElementById('fuel-result');
  el.className = 'result show';
  el.innerHTML =
    '<div class="line big">' + spRound2(kml) + ' km/L</div>' +
    '<div class="line">L/100km: ' + spRound2(l100km) + '</div>' +
    '<div class="line">US mpg: ' + spRound2(mpgUs) + '</div>' +
    '<div class="line">UK mpg: ' + spRound2(mpgUk) + '</div>';
}
function calcFuelGlobal(){
  var t = window.I18N || {};
  var unit = document.getElementById('fuel-unit').value;
  var v = parseFloat(document.getElementById('fuel-value').value);
  if(isNaN(v) || v <= 0){ alert(t.fuel_alert || 'Please enter a value greater than 0.'); return; }
  var kml = fuelToKml(unit, v);
  var l100km = 100 / kml;
  var mpgUs = kml * FUEL_MPG_US;
  var mpgUk = kml * FUEL_MPG_UK;
  var el = document.getElementById('fuel-result');
  el.className = 'result show';
  el.innerHTML =
    '<div class="line big">' + spRound2(kml) + ' km/L</div>' +
    '<div class="line">L/100km: ' + spRound2(l100km) + '</div>' +
    '<div class="line">US mpg: ' + spRound2(mpgUs) + '</div>' +
    '<div class="line">UK mpg: ' + spRound2(mpgUk) + '</div>';
}

// ---------- 나이 차이 계산기 (단순 연도 차이가 아닌 실제 날짜 기준 계산) ----------
function adYmd(earlier, later){
  var y = later.getFullYear() - earlier.getFullYear();
  var m = later.getMonth() - earlier.getMonth();
  var d = later.getDate() - earlier.getDate();
  if(d < 0){
    m -= 1;
    var prevMonth = new Date(later.getFullYear(), later.getMonth(), 0);
    d += prevMonth.getDate();
  }
  if(m < 0){ y -= 1; m += 12; }
  return {y:y, m:m, d:d};
}
function calcAgeDiff(){
  var aStr = document.getElementById('ad-a').value;
  var bStr = document.getElementById('ad-b').value;
  if(!aStr || !bStr){ alert('두 사람의 생년월일을 모두 입력해 주세요.'); return; }
  var a = new Date(aStr + 'T00:00:00');
  var b = new Date(bStr + 'T00:00:00');
  if(isNaN(a.getTime()) || isNaN(b.getTime())){ alert('두 사람의 생년월일을 모두 입력해 주세요.'); return; }
  var today = new Date(); today.setHours(0,0,0,0);
  if(a > today || b > today){ alert('생년월일은 오늘보다 미래일 수 없습니다.'); return; }
  var el = document.getElementById('ad-result');
  el.className = 'result show';
  if(a.getTime() === b.getTime()){
    el.innerHTML = '<div class="line big">나이 차이 없음</div><div class="line">두 사람은 생년월일이 같습니다 (나이 차이 없음).</div>';
    return;
  }
  var aOlder = a < b;
  var earlier = aOlder ? a : b;
  var later = aOlder ? b : a;
  var totalDays = Math.round((later - earlier) / (1000*60*60*24));
  var ymd = adYmd(earlier, later);
  var who = aOlder ? '사람 A가 더 나이가 많습니다.' : '사람 B가 더 나이가 많습니다.';
  el.innerHTML =
    '<div class="line big">' + ymd.y + '년 ' + ymd.m + '개월 ' + ymd.d + '일 차이</div>' +
    '<div class="line">' + who + '</div>' +
    '<div class="line">총 ' + totalDays.toLocaleString() + '일 차이</div>';
}
function calcAgeDiffGlobal(){
  var t = window.I18N || {};
  var aStr = document.getElementById('ad-a').value;
  var bStr = document.getElementById('ad-b').value;
  if(!aStr || !bStr){ alert(t.agediff_alert || 'Please enter both birth dates.'); return; }
  var a = new Date(aStr + 'T00:00:00');
  var b = new Date(bStr + 'T00:00:00');
  if(isNaN(a.getTime()) || isNaN(b.getTime())){ alert(t.agediff_alert || 'Please enter both birth dates.'); return; }
  var today = new Date(); today.setHours(0,0,0,0);
  if(a > today || b > today){ alert(t.agediff_alert_future || 'A birth date cannot be later than today.'); return; }
  var el = document.getElementById('ad-result');
  el.className = 'result show';
  if(a.getTime() === b.getTime()){
    var same = t.agediff_same_tpl || 'Both people share the same birth date — no age difference.';
    el.innerHTML = '<div class="line big">0</div><div class="line">' + same + '</div>';
    return;
  }
  var aOlder = a < b;
  var earlier = aOlder ? a : b;
  var later = aOlder ? b : a;
  var totalDays = Math.round((later - earlier) / (1000*60*60*24));
  var ymd = adYmd(earlier, later);
  var diffLine = (t.agediff_diff_tpl || '{y} year(s) {m} month(s) {d} day(s) apart')
    .split('{y}').join(ymd.y).split('{m}').join(ymd.m).split('{d}').join(ymd.d);
  var whoLine = aOlder ? (t.agediff_a_older_tpl || 'Person A is older.') : (t.agediff_b_older_tpl || 'Person B is older.');
  var totalLine = (t.agediff_total_days_tpl || '{days} day(s) total').split('{days}').join(totalDays.toLocaleString());
  el.innerHTML =
    '<div class="line big">' + diffLine + '</div>' +
    '<div class="line">' + whoLine + '</div>' +
    '<div class="line">' + totalLine + '</div>';
}
