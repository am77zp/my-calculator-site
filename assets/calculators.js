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
