# -*- coding: utf-8 -*-
# Content for the "speed" calculator (speed / distance / time, solve for one given the other two),
# one entry per of the 19 site languages.
# Modes: "speed" (distance/time -> speed), "distance" (speed*time -> distance), "time" (distance/speed -> time)
SPEED = {
"ko": {
 "title": "속도·거리·시간 계산기 - 공식 v=d/t로 셋 중 하나 계산",
 "meta": "거리와 시간을 알면 속도를, 속도와 시간을 알면 거리를, 거리와 속도를 알면 걸리는 시간을 바로 계산합니다.",
 "card_desc": "무엇을 구할지 고르고 나머지 두 값을 입력하면 바로 계산합니다.",
 "nav": "속도·거리·시간",
 "home_desc": "거리·시간·속도 중 두 값으로 나머지 한 값 계산",
 "usage": [
   "구할 값을 선택합니다 (속도 / 거리 / 시간).",
   "나머지 두 값을 입력합니다 (거리는 km, 시간은 시간(소수 가능) 또는 시:분, 속도는 km/h).",
   "\"계산하기\"를 누르면 결과가 바로 표시됩니다."
 ],
 "method": "세 값은 속도 = 거리 ÷ 시간(v=d/t) 관계를 가집니다. 속도를 구할 때는 거리÷시간, 거리를 구할 때는 속도×시간, 시간을 구할 때는 거리÷속도로 계산합니다.",
 "examples": [
   "예시 1 — \"속도 구하기\" 모드에서 거리 150km, 시간 2시간 30분(2.5시간)이면 속도는 60km/h입니다.",
   "예시 2 — \"시간 구하기\" 모드에서 거리 100km, 속도 40km/h이면 걸리는 시간은 2.5시간(2시간 30분)입니다."
 ],
 "faq": [
   ["시간을 시:분으로 입력해도 되나요?", "네, 시간(소수)과 시:분 두 가지 입력 방식을 모두 지원합니다. 예를 들어 2시간 30분은 2.5시간과 같습니다."],
   ["km/h가 아니라 mph 등 다른 단위를 쓰고 싶어요.", "이 계산기는 단위 자체를 변환하지 않고 입력한 거리·속도 단위 체계를 그대로 사용합니다. mph로 계산하려면 거리를 마일, 속도를 mph로 일관되게 입력하세요."]
 ],
 "mode_options": ["속도 구하기 (거리 ÷ 시간)", "거리 구하기 (속도 × 시간)", "시간 구하기 (거리 ÷ 속도)"],
 "labels": {"distance": "거리 (km)", "time": "시간 (시간, 소수 가능)", "speed": "속도 (km/h)"},
 "alert": "필요한 값을 모두 정확히 입력해 주세요.",
 "result_tpl": [
   "속도는 {result} km/h입니다.",
   "거리는 {result} km입니다.",
   "걸리는 시간은 {result}시간 ({hm})입니다."
 ],
},
"en": {
 "title": "Speed, Distance, Time Calculator - Solve v = d / t",
 "meta": "Given distance and time, find speed. Given speed and time, find distance. Given distance and speed, find the time it takes.",
 "card_desc": "Choose what to solve for and enter the other two values to get the result instantly.",
 "nav": "Speed/Distance/Time",
 "home_desc": "Solve for speed, distance, or time given the other two values",
 "usage": [
   "Choose what to solve for (speed / distance / time).",
   "Enter the other two values (distance in km, time in hours (decimals allowed) or h:m, speed in km/h).",
   "Click \"Calculate\" to see the result instantly."
 ],
 "method": "The three values follow speed = distance ÷ time (v = d/t). To find speed: distance ÷ time. To find distance: speed × time. To find time: distance ÷ speed.",
 "examples": [
   "Example 1 — In \"find speed\" mode, distance=150 km and time=2.5 hours (2h30m) gives a speed of 60 km/h.",
   "Example 2 — In \"find time\" mode, distance=100 km and speed=40 km/h gives a time of 2.5 hours (2h30m)."
 ],
 "faq": [
   ["Can I enter time as hours and minutes instead of decimal hours?", "Yes, both decimal hours and h:m entry are supported. For example, 2 hours 30 minutes equals 2.5 hours."],
   ["Can I use mph or other units instead of km/h?", "This calculator doesn't convert units itself — it uses whatever distance/speed unit system you enter consistently. To work in mph, enter distance in miles and speed in mph."]
 ],
 "mode_options": ["Find speed (distance ÷ time)", "Find distance (speed × time)", "Find time (distance ÷ speed)"],
 "labels": {"distance": "Distance (km)", "time": "Time (hours, decimals allowed)", "speed": "Speed (km/h)"},
 "alert": "Please enter both required values correctly.",
 "result_tpl": [
   "The speed is {result} km/h.",
   "The distance is {result} km.",
   "The time needed is {result} hours ({hm})."
 ],
},
"ja": {
 "title": "速度・距離・時間計算機 - v=d/t の公式で計算",
 "meta": "距離と時間がわかれば速度を、速度と時間がわかれば距離を、距離と速度がわかればかかる時間をすぐに計算します。",
 "card_desc": "求めたい値を選び、残りの2つの値を入力するとすぐに計算されます。",
 "nav": "速度・距離・時間",
 "home_desc": "距離・時間・速度のうち2つの値から残りの1つを計算",
 "usage": [
   "求める値を選びます(速度/距離/時間)。",
   "残りの2つの値を入力します(距離はkm、時間は時間(小数可)またはh:m、速度はkm/h)。",
   "「計算する」を押すと結果がすぐに表示されます。"
 ],
 "method": "3つの値は 速度 = 距離 ÷ 時間(v=d/t)の関係にあります。速度を求めるときは距離÷時間、距離を求めるときは速度×時間、時間を求めるときは距離÷速度で計算します。",
 "examples": [
   "例1 —「速度を求める」モードで距離150km、時間2.5時間(2時間30分)のとき、速度は60km/hです。",
   "例2 —「時間を求める」モードで距離100km、速度40km/hのとき、かかる時間は2.5時間(2時間30分)です。"
 ],
 "faq": [
   ["時間を時:分で入力してもいいですか?", "はい、小数の時間とh:m入力の両方に対応しています。例えば2時間30分は2.5時間と同じです。"],
   ["km/hではなくmphなど他の単位を使いたいです。", "この計算機自体は単位を変換しません。入力した距離・速度の単位系をそのまま使います。mphで計算するには、距離をマイル、速度をmphで統一して入力してください。"]
 ],
 "mode_options": ["速度を求める(距離÷時間)", "距離を求める(速度×時間)", "時間を求める(距離÷速度)"],
 "labels": {"distance": "距離 (km)", "time": "時間 (時間、小数可)", "speed": "速度 (km/h)"},
 "alert": "必要な値を正確にすべて入力してください。",
 "result_tpl": [
   "速度は{result} km/hです。",
   "距離は{result} kmです。",
   "かかる時間は{result}時間({hm})です。"
 ],
},
"zh-cn": {
 "title": "速度·距离·时间计算器 - 用公式 v=d/t 求解",
 "meta": "已知距离和时间可求速度,已知速度和时间可求距离,已知距离和速度可求所需时间。",
 "card_desc": "选择要求解的值,输入另外两个值即可立即得到结果。",
 "nav": "速度距离时间",
 "home_desc": "根据距离、时间、速度中的两项求出第三项",
 "usage": [
  "选择要求解的值(速度 / 距离 / 时间)。",
  "输入另外两个值(距离单位为km,时间单位为小时(可为小数)或时:分,速度单位为km/h)。",
  "点击“计算”即可立即显示结果。"
 ],
 "method": "三者关系为 速度 = 距离 ÷ 时间(v=d/t)。求速度时用距离÷时间,求距离时用速度×时间,求时间时用距离÷速度。",
 "examples": [
  "示例1 — 在“求速度”模式下,距离150km,时间2.5小时(2小时30分),速度为60km/h。",
  "示例2 — 在“求时间”模式下,距离100km,速度40km/h,所需时间为2.5小时(2小时30分)。"
 ],
 "faq": [
  ["可以用时:分而不是小数小时输入时间吗?", "可以,同时支持小数小时和时:分两种输入方式。例如2小时30分等于2.5小时。"],
  ["可以用mph等其他单位而不是km/h吗?", "本计算器本身不做单位换算,只是按你输入的距离/速度单位体系原样计算。如需用mph计算,请将距离统一输入为英里,速度输入为mph。"]
 ],
 "mode_options": ["求速度(距离÷时间)", "求距离(速度×时间)", "求时间(距离÷速度)"],
 "labels": {"distance": "距离 (km)", "time": "时间 (小时,可为小数)", "speed": "速度 (km/h)"},
 "alert": "请正确输入所需的两个数值。",
 "result_tpl": [
  "速度为{result} km/h。",
  "距离为{result} km。",
  "所需时间为{result}小时({hm})。"
 ],
},
"hi": {
 "title": "गति, दूरी, समय कैलकुलेटर - v=d/t सूत्र से हल करें",
 "meta": "दूरी और समय पता होने पर गति निकालें, गति और समय पता होने पर दूरी निकालें, दूरी और गति पता होने पर लगने वाला समय निकालें।",
 "card_desc": "क्या निकालना है चुनें और बाकी दो वैल्यू डालें, नतीजा तुरंत मिलेगा।",
 "nav": "गति·दूरी·समय",
 "home_desc": "दूरी, समय, गति में से दो वैल्यू से तीसरी निकालें",
 "usage": [
  "क्या निकालना है चुनें (गति / दूरी / समय)।",
  "बाकी दो वैल्यू डालें (दूरी km में, समय घंटे में (दशमलव मान्य) या घं:मि में, गति km/h में)।",
  "\"गणना करें\" दबाते ही नतीजा तुरंत दिखेगा।"
 ],
 "method": "तीनों वैल्यू का संबंध गति = दूरी ÷ समय (v=d/t) है। गति निकालने के लिए दूरी÷समय, दूरी निकालने के लिए गति×समय, और समय निकालने के लिए दूरी÷गति इस्तेमाल होता है।",
 "examples": [
  "उदाहरण 1 — \"गति निकालें\" मोड में दूरी 150km, समय 2.5 घंटे (2 घंटे 30 मिनट) होने पर गति 60km/h है।",
  "उदाहरण 2 — \"समय निकालें\" मोड में दूरी 100km, गति 40km/h होने पर लगने वाला समय 2.5 घंटे (2 घंटे 30 मिनट) है।"
 ],
 "faq": [
  ["क्या समय घं:मि में भी डाल सकते हैं?", "हां, दशमलव घंटे और घं:मि दोनों तरीकों से समय डाला जा सकता है। जैसे 2 घंटे 30 मिनट = 2.5 घंटे।"],
  ["km/h की जगह mph जैसी दूसरी इकाई इस्तेमाल कर सकते हैं?", "यह कैलकुलेटर खुद इकाई नहीं बदलता, यह आपके डाले गए दूरी/गति की इकाई प्रणाली को जस का तस इस्तेमाल करता है। mph में हिसाब के लिए दूरी मील में और गति mph में डालें।"]
 ],
 "mode_options": ["गति निकालें (दूरी ÷ समय)", "दूरी निकालें (गति × समय)", "समय निकालें (दूरी ÷ गति)"],
 "labels": {"distance": "दूरी (km)", "time": "समय (घंटे, दशमलव मान्य)", "speed": "गति (km/h)"},
 "alert": "कृपया दोनों ज़रूरी वैल्यू सही से डालें।",
 "result_tpl": [
  "गति {result} km/h है।",
  "दूरी {result} km है।",
  "लगने वाला समय {result} घंटे ({hm}) है।"
 ],
},
"id": {
 "title": "Kalkulator Kecepatan, Jarak, Waktu - Selesaikan v = d / t",
 "meta": "Jika jarak dan waktu diketahui, cari kecepatan. Jika kecepatan dan waktu diketahui, cari jarak. Jika jarak dan kecepatan diketahui, cari waktu tempuh.",
 "card_desc": "Pilih nilai yang ingin dicari dan masukkan dua nilai lainnya untuk hasil instan.",
 "nav": "Kecepatan/Jarak/Waktu",
 "home_desc": "Hitung kecepatan, jarak, atau waktu dari dua nilai lainnya",
 "usage": [
  "Pilih nilai yang dicari (kecepatan / jarak / waktu).",
  "Masukkan dua nilai lainnya (jarak dalam km, waktu dalam jam (boleh desimal) atau j:m, kecepatan dalam km/h).",
  "Klik \"Hitung\" untuk melihat hasilnya secara instan."
 ],
 "method": "Ketiga nilai mengikuti kecepatan = jarak ÷ waktu (v = d/t). Untuk mencari kecepatan: jarak ÷ waktu. Untuk mencari jarak: kecepatan × waktu. Untuk mencari waktu: jarak ÷ kecepatan.",
 "examples": [
  "Contoh 1 — Mode \"cari kecepatan\" dengan jarak=150 km dan waktu=2,5 jam (2j30m) menghasilkan kecepatan 60 km/h.",
  "Contoh 2 — Mode \"cari waktu\" dengan jarak=100 km dan kecepatan=40 km/h menghasilkan waktu 2,5 jam (2j30m)."
 ],
 "faq": [
  ["Bisakah memasukkan waktu sebagai jam:menit, bukan desimal?", "Bisa, keduanya didukung — jam desimal dan format j:m. Misalnya 2 jam 30 menit sama dengan 2,5 jam."],
  ["Bisakah memakai mph atau satuan lain selain km/h?", "Kalkulator ini tidak mengonversi satuan sendiri — ia memakai satuan jarak/kecepatan apa pun yang Anda masukkan secara konsisten. Untuk mph, masukkan jarak dalam mil dan kecepatan dalam mph."]
 ],
 "mode_options": ["Cari kecepatan (jarak ÷ waktu)", "Cari jarak (kecepatan × waktu)", "Cari waktu (jarak ÷ kecepatan)"],
 "labels": {"distance": "Jarak (km)", "time": "Waktu (jam, boleh desimal)", "speed": "Kecepatan (km/h)"},
 "alert": "Silakan masukkan kedua nilai yang diperlukan dengan benar.",
 "result_tpl": [
  "Kecepatannya adalah {result} km/h.",
  "Jaraknya adalah {result} km.",
  "Waktu yang dibutuhkan adalah {result} jam ({hm})."
 ],
},
"pt-br": {
 "title": "Calculadora de Velocidade, Distância e Tempo - Resolva v = d / t",
 "meta": "Com distância e tempo, encontre a velocidade. Com velocidade e tempo, encontre a distância. Com distância e velocidade, encontre o tempo necessário.",
 "card_desc": "Escolha o que deseja calcular e informe os outros dois valores para o resultado na hora.",
 "nav": "Velocidade/Distância/Tempo",
 "home_desc": "Calcule velocidade, distância ou tempo a partir dos outros dois valores",
 "usage": [
  "Escolha o que calcular (velocidade / distância / tempo).",
  "Informe os outros dois valores (distância em km, tempo em horas (decimais permitidos) ou h:min, velocidade em km/h).",
  "Clique em \"Calcular\" para ver o resultado na hora."
 ],
 "method": "Os três valores seguem velocidade = distância ÷ tempo (v = d/t). Para achar a velocidade: distância ÷ tempo. Para achar a distância: velocidade × tempo. Para achar o tempo: distância ÷ velocidade.",
 "examples": [
  "Exemplo 1 — No modo \"achar velocidade\", distância=150 km e tempo=2,5 horas (2h30) resultam em velocidade de 60 km/h.",
  "Exemplo 2 — No modo \"achar tempo\", distância=100 km e velocidade=40 km/h resultam em um tempo de 2,5 horas (2h30)."
 ],
 "faq": [
  ["Posso informar o tempo em horas e minutos em vez de decimal?", "Sim, ambos os formatos são aceitos — horas decimais e h:min. Por exemplo, 2 horas e 30 minutos equivalem a 2,5 horas."],
  ["Posso usar mph ou outra unidade em vez de km/h?", "Esta calculadora não converte unidades sozinha — ela usa o sistema de unidades de distância/velocidade que você informar, desde que consistente. Para usar mph, informe a distância em milhas e a velocidade em mph."]
 ],
 "mode_options": ["Achar velocidade (distância ÷ tempo)", "Achar distância (velocidade × tempo)", "Achar tempo (distância ÷ velocidade)"],
 "labels": {"distance": "Distância (km)", "time": "Tempo (horas, decimais permitidos)", "speed": "Velocidade (km/h)"},
 "alert": "Informe corretamente os dois valores necessários.",
 "result_tpl": [
  "A velocidade é {result} km/h.",
  "A distância é {result} km.",
  "O tempo necessário é {result} horas ({hm})."
 ],
},
"ru": {
 "title": "Калькулятор скорости, расстояния и времени - формула v = d / t",
 "meta": "Зная расстояние и время, найдите скорость. Зная скорость и время, найдите расстояние. Зная расстояние и скорость, найдите время в пути.",
 "card_desc": "Выберите, что нужно найти, и введите два других значения, чтобы мгновенно получить результат.",
 "nav": "Скорость/Расстояние/Время",
 "home_desc": "Расчёт скорости, расстояния или времени по двум другим значениям",
 "usage": [
  "Выберите, что нужно найти (скорость / расстояние / время).",
  "Введите два других значения (расстояние в км, время в часах (можно дробное) или ч:мин, скорость в км/ч).",
  "Нажмите «Рассчитать», чтобы сразу увидеть результат."
 ],
 "method": "Три величины связаны формулой скорость = расстояние ÷ время (v = d/t). Чтобы найти скорость: расстояние ÷ время. Чтобы найти расстояние: скорость × время. Чтобы найти время: расстояние ÷ скорость.",
 "examples": [
  "Пример 1 — В режиме «найти скорость» при расстоянии 150 км и времени 2,5 часа (2 ч 30 мин) скорость равна 60 км/ч.",
  "Пример 2 — В режиме «найти время» при расстоянии 100 км и скорости 40 км/ч время в пути равно 2,5 часа (2 ч 30 мин)."
 ],
 "faq": [
  ["Можно ли вводить время как часы и минуты, а не десятичную дробь?", "Да, поддерживаются оба формата — десятичные часы и ч:мин. Например, 2 часа 30 минут равно 2,5 часам."],
  ["Можно ли использовать мили в час вместо км/ч?", "Калькулятор сам не переводит единицы — он использует ту систему единиц расстояния/скорости, которую вы вводите последовательно. Для миль в час вводите расстояние в милях, а скорость — в mph."]
 ],
 "mode_options": ["Найти скорость (расстояние ÷ время)", "Найти расстояние (скорость × время)", "Найти время (расстояние ÷ скорость)"],
 "labels": {"distance": "Расстояние (км)", "time": "Время (часы, можно дробное)", "speed": "Скорость (км/ч)"},
 "alert": "Введите корректно оба необходимых значения.",
 "result_tpl": [
  "Скорость составляет {result} км/ч.",
  "Расстояние составляет {result} км.",
  "Требуемое время составляет {result} ч ({hm})."
 ],
},
"ur": {
 "title": "رفتار، فاصلہ، وقت کیلکولیٹر - فارمولا v=d/t سے حل کریں",
 "meta": "فاصلہ اور وقت معلوم ہونے پر رفتار نکالیں، رفتار اور وقت معلوم ہونے پر فاصلہ نکالیں، فاصلہ اور رفتار معلوم ہونے پر لگنے والا وقت نکالیں۔",
 "card_desc": "کیا نکالنا ہے منتخب کریں اور باقی دو قدریں درج کریں، نتیجہ فوراً مل جائے گا۔",
 "nav": "رفتار·فاصلہ·وقت",
 "home_desc": "فاصلہ، وقت، رفتار میں سے دو قدروں سے تیسری نکالیں",
 "usage": [
  "کیا نکالنا ہے منتخب کریں (رفتار / فاصلہ / وقت)۔",
  "باقی دو قدریں درج کریں (فاصلہ km میں، وقت گھنٹوں میں (اعشاریہ قابل قبول) یا گھ:من میں، رفتار km/h میں)۔",
  "\"حساب کریں\" دبانے پر نتیجہ فوراً ظاہر ہوگا۔"
 ],
 "method": "تینوں قدروں کا تعلق رفتار = فاصلہ ÷ وقت (v=d/t) ہے۔ رفتار نکالنے کے لیے فاصلہ÷وقت، فاصلہ نکالنے کے لیے رفتار×وقت، اور وقت نکالنے کے لیے فاصلہ÷رفتار استعمال ہوتا ہے۔",
 "examples": [
  "مثال 1 — \"رفتار نکالیں\" موڈ میں فاصلہ 150km، وقت 2.5 گھنٹے (2 گھنٹے 30 منٹ) پر رفتار 60km/h ہے۔",
  "مثال 2 — \"وقت نکالیں\" موڈ میں فاصلہ 100km، رفتار 40km/h پر لگنے والا وقت 2.5 گھنٹے (2 گھنٹے 30 منٹ) ہے۔"
 ],
 "faq": [
  ["کیا وقت گھ:من میں بھی درج کر سکتے ہیں؟", "جی ہاں، اعشاریہ گھنٹے اور گھ:من دونوں طریقے سے وقت درج کیا جا سکتا ہے۔ مثلاً 2 گھنٹے 30 منٹ برابر 2.5 گھنٹے۔"],
  ["km/h کی بجائے mph جیسی دوسری اکائی استعمال کر سکتے ہیں؟", "یہ کیلکولیٹر خود اکائی تبدیل نہیں کرتا، یہ آپ کے درج کردہ فاصلہ/رفتار کی اکائی کو جوں کا توں استعمال کرتا ہے۔ mph میں حساب کے لیے فاصلہ میل میں اور رفتار mph میں درج کریں۔"]
 ],
 "mode_options": ["رفتار نکالیں (فاصلہ ÷ وقت)", "فاصلہ نکالیں (رفتار × وقت)", "وقت نکالیں (فاصلہ ÷ رفتار)"],
 "labels": {"distance": "فاصلہ (km)", "time": "وقت (گھنٹے، اعشاریہ قابل قبول)", "speed": "رفتار (km/h)"},
 "alert": "براہ کرم دونوں مطلوبہ قدریں درست درج کریں۔",
 "result_tpl": [
  "رفتار {result} km/h ہے۔",
  "فاصلہ {result} km ہے۔",
  "لگنے والا وقت {result} گھنٹے ({hm}) ہے۔"
 ],
},
"es": {
 "title": "Calculadora de Velocidad, Distancia y Tiempo - Resuelve v = d / t",
 "meta": "Con distancia y tiempo, halla la velocidad. Con velocidad y tiempo, halla la distancia. Con distancia y velocidad, halla el tiempo necesario.",
 "card_desc": "Elige qué calcular e introduce los otros dos valores para obtener el resultado al instante.",
 "nav": "Velocidad/Distancia/Tiempo",
 "home_desc": "Calcula velocidad, distancia o tiempo a partir de los otros dos valores",
 "usage": [
  "Elige qué calcular (velocidad / distancia / tiempo).",
  "Introduce los otros dos valores (distancia en km, tiempo en horas (decimales permitidos) o h:min, velocidad en km/h).",
  "Pulsa \"Calcular\" para ver el resultado al instante."
 ],
 "method": "Los tres valores siguen velocidad = distancia ÷ tiempo (v = d/t). Para hallar la velocidad: distancia ÷ tiempo. Para hallar la distancia: velocidad × tiempo. Para hallar el tiempo: distancia ÷ velocidad.",
 "examples": [
  "Ejemplo 1 — En modo \"hallar velocidad\", distancia=150 km y tiempo=2,5 horas (2h30) dan una velocidad de 60 km/h.",
  "Ejemplo 2 — En modo \"hallar tiempo\", distancia=100 km y velocidad=40 km/h dan un tiempo de 2,5 horas (2h30)."
 ],
 "faq": [
  ["¿Puedo introducir el tiempo en horas y minutos en vez de decimal?", "Sí, se admiten ambos formatos: horas decimales y h:min. Por ejemplo, 2 horas 30 minutos equivalen a 2,5 horas."],
  ["¿Puedo usar mph u otra unidad en vez de km/h?", "Esta calculadora no convierte unidades por sí sola: usa el sistema de distancia/velocidad que introduzcas de forma consistente. Para trabajar en mph, introduce la distancia en millas y la velocidad en mph."]
 ],
 "mode_options": ["Hallar velocidad (distancia ÷ tiempo)", "Hallar distancia (velocidad × tiempo)", "Hallar tiempo (distancia ÷ velocidad)"],
 "labels": {"distance": "Distancia (km)", "time": "Tiempo (horas, decimales permitidos)", "speed": "Velocidad (km/h)"},
 "alert": "Introduce correctamente los dos valores necesarios.",
 "result_tpl": [
  "La velocidad es {result} km/h.",
  "La distancia es {result} km.",
  "El tiempo necesario es {result} horas ({hm})."
 ],
},
"tl": {
 "title": "Kalkulator ng Bilis, Distansya, Oras - Lutasin ang v = d / t",
 "meta": "Kung alam ang distansya at oras, hanapin ang bilis. Kung alam ang bilis at oras, hanapin ang distansya. Kung alam ang distansya at bilis, hanapin ang oras na kailangan.",
 "card_desc": "Piliin ang gustong kalkulahin at ilagay ang dalawang halagang natitira para sa agarang resulta.",
 "nav": "Bilis/Distansya/Oras",
 "home_desc": "Kalkulahin ang bilis, distansya, o oras batay sa dalawang natitirang halaga",
 "usage": [
  "Piliin ang gustong kalkulahin (bilis / distansya / oras).",
  "Ilagay ang dalawang natitirang halaga (distansya sa km, oras sa oras (puwede decimal) o o:m, bilis sa km/h).",
  "I-click ang \"Kalkulahin\" para makita agad ang resulta."
 ],
 "method": "Ang tatlong halaga ay sumusunod sa bilis = distansya ÷ oras (v = d/t). Para hanapin ang bilis: distansya ÷ oras. Para hanapin ang distansya: bilis × oras. Para hanapin ang oras: distansya ÷ bilis.",
 "examples": [
  "Halimbawa 1 — Sa mode na \"hanapin ang bilis\", distansya=150 km at oras=2.5 oras (2o30m) ay nagbibigay ng bilis na 60 km/h.",
  "Halimbawa 2 — Sa mode na \"hanapin ang oras\", distansya=100 km at bilis=40 km/h ay nagbibigay ng oras na 2.5 oras (2o30m)."
 ],
 "faq": [
  ["Puwede bang ilagay ang oras bilang oras:minuto sa halip na decimal?", "Oo, parehong suportado — decimal na oras at o:m na format. Halimbawa, ang 2 oras 30 minuto ay katumbas ng 2.5 oras."],
  ["Puwede bang gumamit ng mph sa halip na km/h?", "Hindi awtomatikong kino-convert ng kalkulator na ito ang mga yunit — ginagamit nito ang anumang sistema ng distansya/bilis na ilalagay mo nang pare-pareho. Para sa mph, ilagay ang distansya sa milya at ang bilis sa mph."]
 ],
 "mode_options": ["Hanapin ang bilis (distansya ÷ oras)", "Hanapin ang distansya (bilis × oras)", "Hanapin ang oras (distansya ÷ bilis)"],
 "labels": {"distance": "Distansya (km)", "time": "Oras (oras, puwede decimal)", "speed": "Bilis (km/h)"},
 "alert": "Pakilagay nang tama ang dalawang kinakailangang halaga.",
 "result_tpl": [
  "Ang bilis ay {result} km/h.",
  "Ang distansya ay {result} km.",
  "Ang oras na kailangan ay {result} oras ({hm})."
 ],
},
"ar": {
 "title": "حاسبة السرعة والمسافة والزمن - حل المعادلة v = d / t",
 "meta": "إذا عرفت المسافة والزمن فاحسب السرعة. إذا عرفت السرعة والزمن فاحسب المسافة. إذا عرفت المسافة والسرعة فاحسب الزمن اللازم.",
 "card_desc": "اختر ما تريد حسابه وأدخل القيمتين الأخريين للحصول على النتيجة فوراً.",
 "nav": "السرعة/المسافة/الزمن",
 "home_desc": "احسب السرعة أو المسافة أو الزمن اعتماداً على القيمتين الأخريين",
 "usage": [
  "اختر ما تريد حسابه (السرعة / المسافة / الزمن).",
  "أدخل القيمتين الأخريين (المسافة بالكيلومتر، الزمن بالساعات (يقبل الكسور) أو س:د، السرعة بالكم/س).",
  "اضغط \"احسب\" لتظهر النتيجة فوراً."
 ],
 "method": "ترتبط القيم الثلاث بالعلاقة السرعة = المسافة ÷ الزمن (v=d/t). لإيجاد السرعة: المسافة ÷ الزمن. لإيجاد المسافة: السرعة × الزمن. لإيجاد الزمن: المسافة ÷ السرعة.",
 "examples": [
  "مثال 1 — في وضع \"إيجاد السرعة\" مع مسافة 150 كم وزمن 2.5 ساعة (2س30د)، السرعة 60 كم/س.",
  "مثال 2 — في وضع \"إيجاد الزمن\" مع مسافة 100 كم وسرعة 40 كم/س، الزمن اللازم 2.5 ساعة (2س30د)."
 ],
 "faq": [
  ["هل يمكن إدخال الزمن كساعات ودقائق بدلاً من الكسر العشري؟", "نعم، كلا الشكلين مدعوم — الساعات العشرية وصيغة س:د. مثلاً 2 ساعة و30 دقيقة تساوي 2.5 ساعة."],
  ["هل يمكن استخدام ميل/ساعة بدلاً من كم/س؟", "لا تحوّل هذه الحاسبة الوحدات بنفسها؛ فهي تستخدم أي نظام وحدات للمسافة/السرعة تدخله بثبات. للعمل بالميل، أدخل المسافة بالأميال والسرعة بالميل في الساعة."]
 ],
 "mode_options": ["إيجاد السرعة (المسافة ÷ الزمن)", "إيجاد المسافة (السرعة × الزمن)", "إيجاد الزمن (المسافة ÷ السرعة)"],
 "labels": {"distance": "المسافة (كم)", "time": "الزمن (ساعات، يقبل الكسور)", "speed": "السرعة (كم/س)"},
 "alert": "الرجاء إدخال القيمتين المطلوبتين بشكل صحيح.",
 "result_tpl": [
  "السرعة هي {result} كم/س.",
  "المسافة هي {result} كم.",
  "الزمن اللازم هو {result} ساعة ({hm})."
 ],
},
"vi": {
 "title": "Máy Tính Tốc Độ, Quãng Đường, Thời Gian - Giải v = d / t",
 "meta": "Biết quãng đường và thời gian, tìm tốc độ. Biết tốc độ và thời gian, tìm quãng đường. Biết quãng đường và tốc độ, tìm thời gian cần thiết.",
 "card_desc": "Chọn giá trị cần tìm và nhập hai giá trị còn lại để có kết quả ngay lập tức.",
 "nav": "Tốc Độ/Quãng Đường/Thời Gian",
 "home_desc": "Tính tốc độ, quãng đường hoặc thời gian từ hai giá trị còn lại",
 "usage": [
  "Chọn giá trị cần tìm (tốc độ / quãng đường / thời gian).",
  "Nhập hai giá trị còn lại (quãng đường tính bằng km, thời gian tính bằng giờ (có thể là số thập phân) hoặc giờ:phút, tốc độ tính bằng km/h).",
  "Nhấn \"Tính\" để xem kết quả ngay lập tức."
 ],
 "method": "Ba giá trị liên hệ theo công thức tốc độ = quãng đường ÷ thời gian (v = d/t). Tìm tốc độ: quãng đường ÷ thời gian. Tìm quãng đường: tốc độ × thời gian. Tìm thời gian: quãng đường ÷ tốc độ.",
 "examples": [
  "Ví dụ 1 — Ở chế độ \"tìm tốc độ\", quãng đường=150 km, thời gian=2,5 giờ (2h30), tốc độ là 60 km/h.",
  "Ví dụ 2 — Ở chế độ \"tìm thời gian\", quãng đường=100 km, tốc độ=40 km/h, thời gian cần là 2,5 giờ (2h30)."
 ],
 "faq": [
  ["Có thể nhập thời gian dạng giờ:phút thay vì số thập phân không?", "Có, cả hai định dạng đều được hỗ trợ — giờ thập phân và giờ:phút. Ví dụ 2 giờ 30 phút bằng 2,5 giờ."],
  ["Có thể dùng mph thay vì km/h không?", "Máy tính này không tự quy đổi đơn vị — nó dùng bất kỳ hệ đơn vị quãng đường/tốc độ nào bạn nhập một cách nhất quán. Để tính bằng mph, hãy nhập quãng đường theo dặm và tốc độ theo mph."]
 ],
 "mode_options": ["Tìm tốc độ (quãng đường ÷ thời gian)", "Tìm quãng đường (tốc độ × thời gian)", "Tìm thời gian (quãng đường ÷ tốc độ)"],
 "labels": {"distance": "Quãng đường (km)", "time": "Thời gian (giờ, có thể thập phân)", "speed": "Tốc độ (km/h)"},
 "alert": "Vui lòng nhập chính xác cả hai giá trị cần thiết.",
 "result_tpl": [
  "Tốc độ là {result} km/h.",
  "Quãng đường là {result} km.",
  "Thời gian cần thiết là {result} giờ ({hm})."
 ],
},
"de": {
 "title": "Geschwindigkeit-Strecke-Zeit-Rechner - Löse v = d / t",
 "meta": "Bei bekannter Strecke und Zeit die Geschwindigkeit berechnen. Bei bekannter Geschwindigkeit und Zeit die Strecke berechnen. Bei bekannter Strecke und Geschwindigkeit die benötigte Zeit berechnen.",
 "card_desc": "Wähle, was berechnet werden soll, und gib die anderen beiden Werte ein, um das Ergebnis sofort zu erhalten.",
 "nav": "Geschwindigkeit/Strecke/Zeit",
 "home_desc": "Geschwindigkeit, Strecke oder Zeit aus den beiden anderen Werten berechnen",
 "usage": [
  "Wähle, was berechnet werden soll (Geschwindigkeit / Strecke / Zeit).",
  "Gib die anderen beiden Werte ein (Strecke in km, Zeit in Stunden (Dezimalzahlen erlaubt) oder Std:Min, Geschwindigkeit in km/h).",
  "Klicke auf \"Berechnen\", um das Ergebnis sofort zu sehen."
 ],
 "method": "Die drei Werte folgen Geschwindigkeit = Strecke ÷ Zeit (v = d/t). Geschwindigkeit: Strecke ÷ Zeit. Strecke: Geschwindigkeit × Zeit. Zeit: Strecke ÷ Geschwindigkeit.",
 "examples": [
  "Beispiel 1 — Im Modus \"Geschwindigkeit finden\" ergibt Strecke=150 km und Zeit=2,5 Stunden (2h30) eine Geschwindigkeit von 60 km/h.",
  "Beispiel 2 — Im Modus \"Zeit finden\" ergibt Strecke=100 km und Geschwindigkeit=40 km/h eine Zeit von 2,5 Stunden (2h30)."
 ],
 "faq": [
  ["Kann ich die Zeit als Stunden:Minuten statt als Dezimalzahl eingeben?", "Ja, beide Formate werden unterstützt — Dezimalstunden und Std:Min. Zum Beispiel entsprechen 2 Stunden 30 Minuten 2,5 Stunden."],
  ["Kann ich mph statt km/h verwenden?", "Dieser Rechner rechnet Einheiten nicht selbst um — er verwendet das Einheitensystem für Strecke/Geschwindigkeit, das du konsistent eingibst. Für mph gib die Strecke in Meilen und die Geschwindigkeit in mph ein."]
 ],
 "mode_options": ["Geschwindigkeit finden (Strecke ÷ Zeit)", "Strecke finden (Geschwindigkeit × Zeit)", "Zeit finden (Strecke ÷ Geschwindigkeit)"],
 "labels": {"distance": "Strecke (km)", "time": "Zeit (Stunden, Dezimalzahlen erlaubt)", "speed": "Geschwindigkeit (km/h)"},
 "alert": "Bitte gib beide erforderlichen Werte korrekt ein.",
 "result_tpl": [
  "Die Geschwindigkeit beträgt {result} km/h.",
  "Die Strecke beträgt {result} km.",
  "Die benötigte Zeit beträgt {result} Stunden ({hm})."
 ],
},
"bn": {
 "title": "গতি, দূরত্ব, সময় ক্যালকুলেটর - v=d/t সূত্রে সমাধান",
 "meta": "দূরত্ব ও সময় জানা থাকলে গতি বের করুন, গতি ও সময় জানা থাকলে দূরত্ব বের করুন, দূরত্ব ও গতি জানা থাকলে লাগবে এমন সময় বের করুন।",
 "card_desc": "কী বের করতে চান বেছে নিন এবং বাকি দুটি মান দিন, ফলাফল তৎক্ষণাৎ পাবেন।",
 "nav": "গতি·দূরত্ব·সময়",
 "home_desc": "দূরত্ব, সময়, গতির মধ্যে দুটি মান থেকে তৃতীয়টি নির্ণয় করুন",
 "usage": [
  "কী বের করবেন বেছে নিন (গতি / দূরত্ব / সময়)।",
  "বাকি দুটি মান দিন (দূরত্ব km-এ, সময় ঘণ্টায় (দশমিক গ্রহণযোগ্য) বা ঘ:মি-তে, গতি km/h-এ)।",
  "\"হিসাব করুন\" চাপলে ফলাফল সাথে সাথে দেখা যাবে।"
 ],
 "method": "তিনটি মানের সম্পর্ক গতি = দূরত্ব ÷ সময় (v=d/t)। গতি বের করতে দূরত্ব÷সময়, দূরত্ব বের করতে গতি×সময়, এবং সময় বের করতে দূরত্ব÷গতি ব্যবহৃত হয়।",
 "examples": [
  "উদাহরণ ১ — \"গতি বের করুন\" মোডে দূরত্ব ১৫০ কিমি, সময় ২.৫ ঘণ্টা (২ ঘণ্টা ৩০ মিনিট) হলে গতি ৬০ কিমি/ঘণ্টা।",
  "উদাহরণ ২ — \"সময় বের করুন\" মোডে দূরত্ব ১০০ কিমি, গতি ৪০ কিমি/ঘণ্টা হলে লাগবে ২.৫ ঘণ্টা (২ ঘণ্টা ৩০ মিনিট)।"
 ],
 "faq": [
  ["সময় ঘ:মি হিসেবেও দেওয়া যায়?", "হ্যাঁ, দশমিক ঘণ্টা এবং ঘ:মি দুই ধরনের ইনপুটই সমর্থিত। যেমন ২ ঘণ্টা ৩০ মিনিট = ২.৫ ঘণ্টা।"],
  ["km/h-এর বদলে mph জাতীয় অন্য একক ব্যবহার করা যায়?", "এই ক্যালকুলেটর নিজে থেকে একক রূপান্তর করে না; আপনি যে দূরত্ব/গতির একক ধারাবাহিকভাবে দেবেন সেটিই ব্যবহার করে। mph-এ হিসাবের জন্য দূরত্ব মাইলে এবং গতি mph-এ দিন।"]
 ],
 "mode_options": ["গতি বের করুন (দূরত্ব ÷ সময়)", "দূরত্ব বের করুন (গতি × সময়)", "সময় বের করুন (দূরত্ব ÷ গতি)"],
 "labels": {"distance": "দূরত্ব (km)", "time": "সময় (ঘণ্টা, দশমিক গ্রহণযোগ্য)", "speed": "গতি (km/h)"},
 "alert": "অনুগ্রহ করে প্রয়োজনীয় দুটি মান সঠিকভাবে দিন।",
 "result_tpl": [
  "গতি {result} km/h।",
  "দূরত্ব {result} km।",
  "লাগবে {result} ঘণ্টা ({hm})।"
 ],
},
"tr": {
 "title": "Hız, Mesafe, Zaman Hesaplayıcı - v = d / t Formülünü Çöz",
 "meta": "Mesafe ve zaman bilinirse hızı, hız ve zaman bilinirse mesafeyi, mesafe ve hız bilinirse gereken süreyi bulun.",
 "card_desc": "Neyi hesaplamak istediğinizi seçin ve diğer iki değeri girin, sonuç anında görünsün.",
 "nav": "Hız/Mesafe/Zaman",
 "home_desc": "Diğer iki değerden hız, mesafe veya zaman hesaplayın",
 "usage": [
  "Neyi hesaplayacağınızı seçin (hız / mesafe / zaman).",
  "Diğer iki değeri girin (mesafe km, zaman saat (ondalık olabilir) veya sa:dk, hız km/sa).",
  "Sonucu anında görmek için \"Hesapla\"ya tıklayın."
 ],
 "method": "Üç değer hız = mesafe ÷ zaman (v=d/t) ilişkisini izler. Hız için: mesafe ÷ zaman. Mesafe için: hız × zaman. Zaman için: mesafe ÷ hız.",
 "examples": [
  "Örnek 1 — \"Hız bul\" modunda mesafe=150 km, zaman=2,5 saat (2sa30dk) ise hız 60 km/sa'dır.",
  "Örnek 2 — \"Zaman bul\" modunda mesafe=100 km, hız=40 km/sa ise gereken süre 2,5 saat (2sa30dk)'tir."
 ],
 "faq": [
  ["Zamanı saat:dakika olarak da girebilir miyim?", "Evet, hem ondalık saat hem de sa:dk formatı desteklenir. Örneğin 2 saat 30 dakika, 2,5 saate eşittir."],
  ["km/sa yerine mph gibi başka bir birim kullanabilir miyim?", "Bu hesaplayıcı birimleri kendisi dönüştürmez; girdiğiniz mesafe/hız birim sistemini tutarlı şekilde kullanır. mph için mesafeyi mil, hızı mph olarak girin."]
 ],
 "mode_options": ["Hız bul (mesafe ÷ zaman)", "Mesafe bul (hız × zaman)", "Zaman bul (mesafe ÷ hız)"],
 "labels": {"distance": "Mesafe (km)", "time": "Zaman (saat, ondalık olabilir)", "speed": "Hız (km/sa)"},
 "alert": "Lütfen gereken iki değeri de doğru girin.",
 "result_tpl": [
  "Hız {result} km/sa'dır.",
  "Mesafe {result} km'dir.",
  "Gereken süre {result} saat ({hm})'tir."
 ],
},
"fa": {
 "title": "ماشین‌حساب سرعت، مسافت، زمان - حل معادله v = d / t",
 "meta": "با داشتن مسافت و زمان، سرعت را بیابید. با داشتن سرعت و زمان، مسافت را بیابید. با داشتن مسافت و سرعت، زمان لازم را بیابید.",
 "card_desc": "انتخاب کنید چه چیزی می‌خواهید محاسبه کنید و دو مقدار دیگر را وارد کنید تا نتیجه فوراً به‌دست آید.",
 "nav": "سرعت/مسافت/زمان",
 "home_desc": "محاسبه سرعت، مسافت یا زمان از روی دو مقدار دیگر",
 "usage": [
  "انتخاب کنید چه چیزی محاسبه شود (سرعت / مسافت / زمان).",
  "دو مقدار دیگر را وارد کنید (مسافت به کیلومتر، زمان به ساعت (اعشار مجاز) یا ساعت:دقیقه، سرعت به کیلومتر بر ساعت).",
  "برای دیدن نتیجه فوری روی «محاسبه» کلیک کنید."
 ],
 "method": "سه مقدار از رابطه سرعت = مسافت ÷ زمان (v=d/t) پیروی می‌کنند. برای یافتن سرعت: مسافت ÷ زمان. برای یافتن مسافت: سرعت × زمان. برای یافتن زمان: مسافت ÷ سرعت.",
 "examples": [
  "مثال ۱ — در حالت «یافتن سرعت» با مسافت=۱۵۰ کیلومتر و زمان=۲.۵ ساعت (۲ساعت۳۰دقیقه)، سرعت ۶۰ کیلومتر بر ساعت است.",
  "مثال ۲ — در حالت «یافتن زمان» با مسافت=۱۰۰ کیلومتر و سرعت=۴۰ کیلومتر بر ساعت، زمان لازم ۲.۵ ساعت (۲ساعت۳۰دقیقه) است."
 ],
 "faq": [
  ["می‌توانم زمان را به‌صورت ساعت:دقیقه به‌جای اعشار وارد کنم؟", "بله، هر دو فرمت پشتیبانی می‌شود — ساعت اعشاری و ساعت:دقیقه. برای مثال ۲ ساعت و ۳۰ دقیقه برابر ۲.۵ ساعت است."],
  ["می‌توانم به‌جای کیلومتر بر ساعت از مایل بر ساعت استفاده کنم؟", "این ماشین‌حساب خودش واحدها را تبدیل نمی‌کند؛ از هر سیستم واحد مسافت/سرعتی که به‌طور یکدست وارد کنید استفاده می‌کند. برای مایل بر ساعت، مسافت را به مایل و سرعت را به mph وارد کنید."]
 ],
 "mode_options": ["یافتن سرعت (مسافت ÷ زمان)", "یافتن مسافت (سرعت × زمان)", "یافتن زمان (مسافت ÷ سرعت)"],
 "labels": {"distance": "مسافت (کیلومتر)", "time": "زمان (ساعت، اعشار مجاز)", "speed": "سرعت (کیلومتر بر ساعت)"},
 "alert": "لطفاً هر دو مقدار لازم را درست وارد کنید.",
 "result_tpl": [
  "سرعت {result} کیلومتر بر ساعت است.",
  "مسافت {result} کیلومتر است.",
  "زمان لازم {result} ساعت ({hm}) است."
 ],
},
"th": {
 "title": "เครื่องคำนวณความเร็ว ระยะทาง เวลา - แก้สมการ v = d / t",
 "meta": "รู้ระยะทางและเวลา หาความเร็วได้ รู้ความเร็วและเวลา หาระยะทางได้ รู้ระยะทางและความเร็ว หาเวลาที่ใช้ได้",
 "card_desc": "เลือกสิ่งที่ต้องการหาแล้วกรอกอีกสองค่าเพื่อดูผลลัพธ์ทันที",
 "nav": "ความเร็ว/ระยะทาง/เวลา",
 "home_desc": "คำนวณความเร็ว ระยะทาง หรือเวลา จากอีกสองค่าที่เหลือ",
 "usage": [
  "เลือกสิ่งที่ต้องการหา (ความเร็ว / ระยะทาง / เวลา)",
  "กรอกอีกสองค่า (ระยะทางเป็น km, เวลาเป็นชั่วโมง (ใส่ทศนิยมได้) หรือ ชม:นาที, ความเร็วเป็น km/h)",
  "กด \"คำนวณ\" เพื่อดูผลลัพธ์ทันที"
 ],
 "method": "ทั้งสามค่ามีความสัมพันธ์ ความเร็ว = ระยะทาง ÷ เวลา (v=d/t) หาความเร็ว: ระยะทาง÷เวลา หาระยะทาง: ความเร็ว×เวลา หาเวลา: ระยะทาง÷ความเร็ว",
 "examples": [
  "ตัวอย่างที่ 1 — โหมด \"หาความเร็ว\" ระยะทาง=150km, เวลา=2.5 ชั่วโมง (2ชม30น) ผลลัพธ์คือความเร็ว 60km/h",
  "ตัวอย่างที่ 2 — โหมด \"หาเวลา\" ระยะทาง=100km, ความเร็ว=40km/h ผลลัพธ์คือเวลา 2.5 ชั่วโมง (2ชม30น)"
 ],
 "faq": [
  ["กรอกเวลาเป็นชั่วโมง:นาทีแทนทศนิยมได้ไหม?", "ได้ รองรับทั้งสองแบบ ทั้งชั่วโมงทศนิยมและรูปแบบ ชม:นาที เช่น 2 ชั่วโมง 30 นาที เท่ากับ 2.5 ชั่วโมง"],
  ["ใช้ mph แทน km/h ได้ไหม?", "เครื่องคำนวณนี้ไม่ได้แปลงหน่วยให้เอง แต่ใช้หน่วยระยะทาง/ความเร็วตามที่คุณกรอกอย่างสม่ำเสมอ หากต้องการใช้ mph ให้กรอกระยะทางเป็นไมล์และความเร็วเป็น mph"]
 ],
 "mode_options": ["หาความเร็ว (ระยะทาง ÷ เวลา)", "หาระยะทาง (ความเร็ว × เวลา)", "หาเวลา (ระยะทาง ÷ ความเร็ว)"],
 "labels": {"distance": "ระยะทาง (km)", "time": "เวลา (ชั่วโมง ใส่ทศนิยมได้)", "speed": "ความเร็ว (km/h)"},
 "alert": "กรุณากรอกทั้งสองค่าที่จำเป็นให้ถูกต้อง",
 "result_tpl": [
  "ความเร็วคือ {result} km/h",
  "ระยะทางคือ {result} km",
  "เวลาที่ใช้คือ {result} ชั่วโมง ({hm})"
 ],
},
"fr": {
 "title": "Calculatrice Vitesse, Distance, Temps - Résoudre v = d / t",
 "meta": "Avec la distance et le temps, trouvez la vitesse. Avec la vitesse et le temps, trouvez la distance. Avec la distance et la vitesse, trouvez le temps nécessaire.",
 "card_desc": "Choisissez ce que vous voulez calculer et entrez les deux autres valeurs pour un résultat instantané.",
 "nav": "Vitesse/Distance/Temps",
 "home_desc": "Calculer la vitesse, la distance ou le temps à partir des deux autres valeurs",
 "usage": [
  "Choisissez ce qu'il faut calculer (vitesse / distance / temps).",
  "Entrez les deux autres valeurs (distance en km, temps en heures (décimales autorisées) ou h:min, vitesse en km/h).",
  "Cliquez sur \"Calculer\" pour voir le résultat instantanément."
 ],
 "method": "Les trois valeurs suivent vitesse = distance ÷ temps (v = d/t). Pour la vitesse : distance ÷ temps. Pour la distance : vitesse × temps. Pour le temps : distance ÷ vitesse.",
 "examples": [
  "Exemple 1 — En mode \"trouver la vitesse\", distance=150 km et temps=2,5 heures (2h30) donnent une vitesse de 60 km/h.",
  "Exemple 2 — En mode \"trouver le temps\", distance=100 km et vitesse=40 km/h donnent un temps de 2,5 heures (2h30)."
 ],
 "faq": [
  ["Puis-je entrer le temps en heures et minutes plutôt qu'en décimal ?", "Oui, les deux formats sont pris en charge — heures décimales et h:min. Par exemple, 2 heures 30 minutes équivalent à 2,5 heures."],
  ["Puis-je utiliser des mph au lieu de km/h ?", "Cette calculatrice ne convertit pas les unités elle-même — elle utilise le système d'unités de distance/vitesse que vous entrez de façon cohérente. Pour travailler en mph, entrez la distance en miles et la vitesse en mph."]
 ],
 "mode_options": ["Trouver la vitesse (distance ÷ temps)", "Trouver la distance (vitesse × temps)", "Trouver le temps (distance ÷ vitesse)"],
 "labels": {"distance": "Distance (km)", "time": "Temps (heures, décimales autorisées)", "speed": "Vitesse (km/h)"},
 "alert": "Veuillez entrer correctement les deux valeurs requises.",
 "result_tpl": [
  "La vitesse est de {result} km/h.",
  "La distance est de {result} km.",
  "Le temps nécessaire est de {result} heures ({hm})."
 ],
},
}
