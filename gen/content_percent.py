# -*- coding: utf-8 -*-
# Content for the "percent" calculator (percent of / percent value / find whole),
# one entry per of the 19 site languages.
PERCENT = {
"ko": {
 "title": "퍼센트 계산기 - 두 값의 비율과 백분율 계산",
 "meta": "두 값을 입력하면 A가 B의 몇 %인지, B의 A%가 얼마인지, A가 B%일 때 전체 값이 얼마인지 세 가지 방식으로 바로 계산합니다.",
 "card_desc": "계산 방식을 고르고 값 A, 값 B를 입력하면 퍼센트 관련 값을 바로 계산합니다.",
 "nav": "퍼센트",
 "home_desc": "두 값의 비율(%)과 퍼센트 값 계산",
 "usage": [
   "계산 방식을 선택합니다 (비율 구하기 / 부분값 구하기 / 전체값 구하기).",
   "값 A와 값 B를 입력합니다.",
   "\"계산하기\"를 누르면 결과가 바로 표시됩니다."
 ],
 "method": "선택한 계산 방식에 따라 A÷B×100(비율), B×A÷100(부분값), A÷(B÷100)(전체값) 공식을 사용합니다.",
 "examples": [
   "예시 1 — \"A는 B의 몇 %인가요?\" 모드에서 A=25, B=200이면 25는 200의 12.5%입니다.",
   "예시 2 — \"B의 A%는 얼마인가요?\" 모드에서 A=20, B=150이면 150의 20%는 30입니다."
 ],
 "faq": [
   ["세 가지 계산 방식은 언제 쓰나요?", "비율(%)을 구하고 싶으면 첫 번째, 특정 비율의 실제 값을 구하고 싶으면 두 번째, 일부 값과 비율로 전체 값을 역산하고 싶으면 세 번째 방식을 사용하세요."],
   ["음수나 소수도 입력할 수 있나요?", "네, 값 A와 값 B에는 음수와 소수 모두 입력할 수 있습니다."]
 ],
 "mode_options": ["A는 B의 몇 %인가요? (A÷B×100)", "B의 A%는 얼마인가요? (B×A÷100)", "A가 B%일 때 전체 값은? (A÷(B÷100))"],
 "labels": {"a": "값 A", "b": "값 B"},
 "alert": "값 A와 값 B를 모두 입력해 주세요.",
 "result_tpl": ["{a}는 {b}의 {result}%입니다.", "{b}의 {a}%는 {result}입니다.", "{a}가 {b}%일 때 전체 값은 {result}입니다."],
},
"en": {
 "title": "Percentage Calculator - Ratio and Percent of Two Values",
 "meta": "Enter two values to find what percent A is of B, what value a percent of B is, or the whole value when A is a percent of it.",
 "card_desc": "Pick a calculation mode and enter Value A and Value B to get the percentage result instantly.",
 "nav": "Percent",
 "home_desc": "Find the ratio (%) or percent value between two numbers",
 "usage": [
   "Choose a calculation mode (find the ratio, find the part, or find the whole).",
   "Enter Value A and Value B.",
   "Click \"Calculate\" to see the result instantly."
 ],
 "method": "Depending on the mode, this uses A÷B×100 (ratio), B×A÷100 (part), or A÷(B÷100) (whole).",
 "examples": [
   "Example 1 — In \"What percent of B is A?\" mode, A=25 and B=200 gives 25 is 12.5% of 200.",
   "Example 2 — In \"What is A% of B?\" mode, A=20 and B=150 gives 20% of 150 is 30."
 ],
 "faq": [
   ["When should I use each mode?", "Use the first mode to find a ratio, the second to find the actual value behind a percentage, and the third to work backward from a part and a percent to the whole."],
   ["Can I enter negative numbers or decimals?", "Yes, Value A and Value B both accept negative numbers and decimals."]
 ],
 "mode_options": ["What percent of B is A? (A÷B×100)", "What is A% of B? (B×A÷100)", "A is B% of what number? (A÷(B÷100))"],
 "labels": {"a": "Value A", "b": "Value B"},
 "alert": "Please enter both Value A and Value B.",
 "result_tpl": ["{a} is {result}% of {b}.", "{a}% of {b} is {result}.", "If {a} is {b}% of a number, that number is {result}."],
},
"ja": {
 "title": "パーセント計算機 - 2つの数値の割合・百分率を計算",
 "meta": "2つの数値を入力すると、AはBの何%か、Bの何%はいくつか、全体の値はいくつかを3つの方法で計算します。",
 "card_desc": "計算方法を選び、値Aと値Bを入力するとパーセントの結果がすぐに表示されます。",
 "nav": "パーセント",
 "home_desc": "2つの数値の割合(%)やパーセント値を計算",
 "usage": [
   "計算方法を選びます(割合を求める/部分の値を求める/全体の値を求める)。",
   "値Aと値Bを入力します。",
   "「計算する」を押すと結果がすぐに表示されます。"
 ],
 "method": "選んだ方法に応じて A÷B×100(割合)、B×A÷100(部分の値)、A÷(B÷100)(全体の値) の式を使います。",
 "examples": [
   "例1 —「AはBの何%?」モードでA=25、B=200のとき、25は200の12.5%です。",
   "例2 —「Bの何%はいくつ?」モードでA=20、B=150のとき、150の20%は30です。"
 ],
 "faq": [
   ["3つのモードはどう使い分けますか?", "割合を知りたいときは1つ目、特定の割合の実際の値を知りたいときは2つ目、部分の値と割合から全体を逆算したいときは3つ目のモードを使ってください。"],
   ["負の数や小数も入力できますか?", "はい、値Aと値Bには負の数や小数も入力できます。"]
 ],
 "mode_options": ["AはBの何%? (A÷B×100)", "Bの何%はいくつ? (B×A÷100)", "AがB%のときの全体は? (A÷(B÷100))"],
 "labels": {"a": "値A", "b": "値B"},
 "alert": "値Aと値Bを両方入力してください。",
 "result_tpl": ["{a}は{b}の{result}%です。", "{b}の{a}%は{result}です。", "{a}が{b}%のとき、全体の値は{result}です。"],
},
"zh-cn": {
 "title": "百分比计算器 - 计算两个数值的比例和百分比",
 "meta": "输入两个数值,即可计算A是B的百分之几、B的百分之几是多少、以及A是某数的百分之几时该数是多少。",
 "card_desc": "选择计算方式并输入数值A和数值B,即可立即得到百分比结果。",
 "nav": "百分比",
 "home_desc": "计算两个数值的比例(%)或百分比数值",
 "usage": [
  "选择计算方式(求比例 / 求部分值 / 求整体值)。",
  "输入数值A和数值B。",
  "点击“计算”即可立即显示结果。"
 ],
 "method": "根据所选方式,分别使用 A÷B×100(比例)、B×A÷100(部分值)或 A÷(B÷100)(整体值)进行计算。",
 "examples": [
  "示例1 — 在“A是B的百分之几?”模式下,A=25,B=200,结果为25是200的12.5%。",
  "示例2 — 在“B的百分之几是多少?”模式下,A=20,B=150,结果为150的20%是30。"
 ],
 "faq": [
  ["三种模式分别什么时候用?", "想求比例时用第一种,想求某个百分比对应的实际值时用第二种,想根据部分值和百分比反推整体值时用第三种。"],
  ["可以输入负数或小数吗?", "可以,数值A和数值B都支持输入负数和小数。"]
 ],
 "mode_options": ["A是B的百分之几?(A÷B×100)", "B的百分之几是多少?(B×A÷100)", "A是某数的B%时,该数是多少?(A÷(B÷100))"],
 "labels": {"a": "数值A", "b": "数值B"},
 "alert": "请输入数值A和数值B。",
 "result_tpl": ["{a}是{b}的{result}%。", "{b}的{a}%是{result}。", "当{a}是某数的{b}%时,该数是{result}。"],
},
"hi": {
 "title": "प्रतिशत कैलकुलेटर - दो मानों का अनुपात और प्रतिशत निकालें",
 "meta": "दो मान डालें और जानें A, B का कितने प्रतिशत है, B के A% कितने होते हैं, या A किसी संख्या का B% होने पर वह संख्या क्या है।",
 "card_desc": "गणना का तरीका चुनें और मान A व मान B डालें, परिणाम तुरंत मिलेगा।",
 "nav": "प्रतिशत",
 "home_desc": "दो मानों का अनुपात (%) या प्रतिशत मान निकालें",
 "usage": [
  "गणना का तरीका चुनें (अनुपात निकालें / भाग का मान निकालें / पूरा मान निकालें)।",
  "मान A और मान B डालें।",
  "\"गणना करें\" दबाते ही परिणाम तुरंत दिखेगा।"
 ],
 "method": "चुने गए तरीके के अनुसार A÷B×100 (अनुपात), B×A÷100 (भाग का मान), या A÷(B÷100) (पूरा मान) सूत्र इस्तेमाल होता है।",
 "examples": [
  "उदाहरण 1 — \"A, B का कितने % है?\" मोड में A=25, B=200 होने पर 25, 200 का 12.5% है।",
  "उदाहरण 2 — \"B के A% कितने हैं?\" मोड में A=20, B=150 होने पर 150 के 20% यानी 30 होते हैं।"
 ],
 "faq": [
  ["तीनों मोड कब इस्तेमाल करें?", "अनुपात जानने के लिए पहला, किसी प्रतिशत का वास्तविक मान जानने के लिए दूसरा, और भाग व प्रतिशत से पूरा मान निकालने के लिए तीसरा मोड इस्तेमाल करें।"],
  ["क्या ऋणात्मक संख्या या दशमलव डाल सकते हैं?", "हां, मान A और मान B दोनों में ऋणात्मक संख्या और दशमलव डाले जा सकते हैं।"]
 ],
 "mode_options": ["A, B का कितने % है? (A÷B×100)", "B के A% कितने हैं? (B×A÷100)", "A किसी संख्या का B% है, तो वह संख्या क्या है? (A÷(B÷100))"],
 "labels": {"a": "मान A", "b": "मान B"},
 "alert": "कृपया मान A और मान B दोनों डालें।",
 "result_tpl": ["{a}, {b} का {result}% है।", "{b} के {a}% यानी {result} होते हैं।", "यदि {a}, किसी संख्या का {b}% है, तो वह संख्या {result} है।"],
},
"id": {
 "title": "Kalkulator Persen - Hitung Rasio dan Nilai Persen Dua Angka",
 "meta": "Masukkan dua angka untuk mengetahui berapa persen A dari B, berapa nilai persen dari B, atau berapa nilai keseluruhan jika A adalah persen darinya.",
 "card_desc": "Pilih mode perhitungan lalu masukkan Nilai A dan Nilai B untuk hasil persen secara instan.",
 "nav": "Persen",
 "home_desc": "Hitung rasio (%) atau nilai persen dari dua angka",
 "usage": [
  "Pilih mode perhitungan (cari rasio / cari nilai bagian / cari nilai keseluruhan).",
  "Masukkan Nilai A dan Nilai B.",
  "Klik \"Hitung\" untuk melihat hasilnya secara instan."
 ],
 "method": "Bergantung mode yang dipilih, rumus yang dipakai adalah A÷B×100 (rasio), B×A÷100 (nilai bagian), atau A÷(B÷100) (nilai keseluruhan).",
 "examples": [
  "Contoh 1 — Mode \"Berapa persen A dari B?\" dengan A=25, B=200 menghasilkan 25 adalah 12,5% dari 200.",
  "Contoh 2 — Mode \"Berapa A% dari B?\" dengan A=20, B=150 menghasilkan 20% dari 150 adalah 30."
 ],
 "faq": [
  ["Kapan memakai masing-masing mode?", "Gunakan mode pertama untuk mencari rasio, mode kedua untuk mencari nilai sebenarnya dari suatu persentase, dan mode ketiga untuk menghitung mundur nilai keseluruhan dari nilai bagian dan persennya."],
  ["Bisakah memasukkan angka negatif atau desimal?", "Ya, Nilai A dan Nilai B bisa diisi angka negatif maupun desimal."]
 ],
 "mode_options": ["Berapa persen A dari B? (A÷B×100)", "Berapa A% dari B? (B×A÷100)", "A adalah B% dari angka berapa? (A÷(B÷100))"],
 "labels": {"a": "Nilai A", "b": "Nilai B"},
 "alert": "Silakan masukkan Nilai A dan Nilai B.",
 "result_tpl": ["{a} adalah {result}% dari {b}.", "{a}% dari {b} adalah {result}.", "Jika {a} adalah {b}% dari suatu angka, angka itu adalah {result}."],
},
"pt-br": {
 "title": "Calculadora de Porcentagem - Razão e Porcentagem entre Dois Valores",
 "meta": "Digite dois valores para saber quantos por cento A representa de B, quanto vale uma porcentagem de B, ou qual é o valor total quando A é uma porcentagem dele.",
 "card_desc": "Escolha o modo de cálculo e informe o Valor A e o Valor B para obter o resultado em porcentagem na hora.",
 "nav": "Porcentagem",
 "home_desc": "Calcule a razão (%) ou o valor percentual entre dois números",
 "usage": [
  "Escolha o modo de cálculo (encontrar a razão, a parte ou o total).",
  "Informe o Valor A e o Valor B.",
  "Clique em \"Calcular\" para ver o resultado na hora."
 ],
 "method": "Conforme o modo escolhido, usa-se A÷B×100 (razão), B×A÷100 (parte) ou A÷(B÷100) (total).",
 "examples": [
  "Exemplo 1 — No modo \"Quantos % de B é A?\", com A=25 e B=200, 25 é 12,5% de 200.",
  "Exemplo 2 — No modo \"Quanto é A% de B?\", com A=20 e B=150, 20% de 150 é 30."
 ],
 "faq": [
  ["Quando usar cada modo?", "Use o primeiro para achar uma razão, o segundo para achar o valor real de uma porcentagem, e o terceiro para calcular o total a partir de uma parte e sua porcentagem."],
  ["Posso digitar números negativos ou decimais?", "Sim, o Valor A e o Valor B aceitam números negativos e decimais."]
 ],
 "mode_options": ["Quantos % de B é A? (A÷B×100)", "Quanto é A% de B? (B×A÷100)", "A é B% de qual número? (A÷(B÷100))"],
 "labels": {"a": "Valor A", "b": "Valor B"},
 "alert": "Informe o Valor A e o Valor B.",
 "result_tpl": ["{a} é {result}% de {b}.", "{a}% de {b} é {result}.", "Se {a} é {b}% de um número, esse número é {result}."],
},
"ru": {
 "title": "Калькулятор процентов - соотношение и процент двух значений",
 "meta": "Введите два значения, чтобы узнать, сколько процентов A составляет от B, чему равен процент от B, или чему равно целое число, если A — его процент.",
 "card_desc": "Выберите режим расчёта и введите значение A и значение B, чтобы мгновенно получить результат в процентах.",
 "nav": "Проценты",
 "home_desc": "Расчёт соотношения (%) или процентного значения двух чисел",
 "usage": [
  "Выберите режим расчёта (найти долю, найти часть или найти целое).",
  "Введите значение A и значение B.",
  "Нажмите «Рассчитать», чтобы сразу увидеть результат."
 ],
 "method": "В зависимости от режима используется формула A÷B×100 (доля), B×A÷100 (часть) или A÷(B÷100) (целое).",
 "examples": [
  "Пример 1 — В режиме «Сколько % от B составляет A?» при A=25, B=200 получаем: 25 — это 12,5% от 200.",
  "Пример 2 — В режиме «Чему равно A% от B?» при A=20, B=150 получаем: 20% от 150 равно 30."
 ],
 "faq": [
  ["Когда использовать каждый режим?", "Первый режим — чтобы найти долю, второй — чтобы найти реальное значение процента, третий — чтобы вычислить целое по части и проценту."],
  ["Можно ли вводить отрицательные числа и дроби?", "Да, значение A и значение B могут быть отрицательными и дробными."]
 ],
 "mode_options": ["Сколько % от B составляет A? (A÷B×100)", "Чему равно A% от B? (B×A÷100)", "A составляет B% от какого числа? (A÷(B÷100))"],
 "labels": {"a": "Значение A", "b": "Значение B"},
 "alert": "Введите значение A и значение B.",
 "result_tpl": ["{a} составляет {result}% от {b}.", "{a}% от {b} равно {result}.", "Если {a} составляет {b}% от числа, это число равно {result}."],
},
"ur": {
 "title": "فیصد کیلکولیٹر - دو اقدار کا تناسب اور فیصد نکالیں",
 "meta": "دو اقدار درج کریں اور معلوم کریں کہ A، B کا کتنے فیصد ہے، B کا A% کتنا ہے، یا اگر A کسی عدد کا B% ہو تو وہ عدد کیا ہے۔",
 "card_desc": "حساب کا طریقہ منتخب کریں اور قدر A اور قدر B درج کریں، نتیجہ فوراً مل جائے گا۔",
 "nav": "فیصد",
 "home_desc": "دو اقدار کا تناسب (%) یا فیصد قدر نکالیں",
 "usage": [
  "حساب کا طریقہ منتخب کریں (تناسب / حصے کی قدر / کل قدر نکالیں)۔",
  "قدر A اور قدر B درج کریں۔",
  "\"حساب کریں\" دبانے پر نتیجہ فوراً ظاہر ہوگا۔"
 ],
 "method": "منتخب کردہ طریقے کے مطابق A÷B×100 (تناسب)، B×A÷100 (حصہ)، یا A÷(B÷100) (کل قدر) کا فارمولا استعمال ہوتا ہے۔",
 "examples": [
  "مثال 1 — \"A، B کا کتنے فیصد ہے؟\" موڈ میں A=25، B=200 پر نتیجہ: 25، 200 کا 12.5% ہے۔",
  "مثال 2 — \"B کا A% کتنا ہے؟\" موڈ میں A=20، B=150 پر نتیجہ: 150 کا 20% یعنی 30 ہے۔"
 ],
 "faq": [
  ["تینوں موڈز کب استعمال کریں؟", "تناسب معلوم کرنے کے لیے پہلا، کسی فیصد کی اصل قدر جاننے کے لیے دوسرا، اور حصے اور فیصد سے کل قدر نکالنے کے لیے تیسرا موڈ استعمال کریں۔"],
  ["کیا منفی نمبر یا اعشاریہ درج کیا جا سکتا ہے؟", "جی ہاں، قدر A اور قدر B دونوں میں منفی نمبر اور اعشاریہ درج کیا جا سکتا ہے۔"]
 ],
 "mode_options": ["A، B کا کتنے فیصد ہے؟ (A÷B×100)", "B کا A% کتنا ہے؟ (B×A÷100)", "A کسی عدد کا B% ہے تو وہ عدد کیا ہے؟ (A÷(B÷100))"],
 "labels": {"a": "قدر A", "b": "قدر B"},
 "alert": "براہ کرم قدر A اور قدر B دونوں درج کریں۔",
 "result_tpl": ["{a}، {b} کا {result}% ہے۔", "{b} کا {a}% یعنی {result} ہے۔", "اگر {a} کسی عدد کا {b}% ہے تو وہ عدد {result} ہے۔"],
},
"es": {
 "title": "Calculadora de Porcentajes - Razón y Porcentaje entre Dos Valores",
 "meta": "Introduce dos valores para saber qué porcentaje es A de B, cuánto es un porcentaje de B, o cuál es el total cuando A es un porcentaje de él.",
 "card_desc": "Elige el modo de cálculo e introduce el Valor A y el Valor B para obtener el resultado en porcentaje al instante.",
 "nav": "Porcentaje",
 "home_desc": "Calcula la razón (%) o el valor porcentual entre dos números",
 "usage": [
  "Elige el modo de cálculo (hallar la razón, la parte o el total).",
  "Introduce el Valor A y el Valor B.",
  "Pulsa \"Calcular\" para ver el resultado al instante."
 ],
 "method": "Según el modo elegido, se usa A÷B×100 (razón), B×A÷100 (parte) o A÷(B÷100) (total).",
 "examples": [
  "Ejemplo 1 — En el modo \"¿Qué % de B es A?\", con A=25 y B=200, 25 es el 12.5% de 200.",
  "Ejemplo 2 — En el modo \"¿Cuánto es A% de B?\", con A=20 y B=150, el 20% de 150 es 30."
 ],
 "faq": [
  ["¿Cuándo usar cada modo?", "Usa el primero para hallar una razón, el segundo para hallar el valor real de un porcentaje, y el tercero para calcular el total a partir de una parte y su porcentaje."],
  ["¿Puedo introducir números negativos o decimales?", "Sí, tanto el Valor A como el Valor B admiten números negativos y decimales."]
 ],
 "mode_options": ["¿Qué % de B es A? (A÷B×100)", "¿Cuánto es A% de B? (B×A÷100)", "A es B% de qué número? (A÷(B÷100))"],
 "labels": {"a": "Valor A", "b": "Valor B"},
 "alert": "Introduce el Valor A y el Valor B.",
 "result_tpl": ["{a} es el {result}% de {b}.", "El {a}% de {b} es {result}.", "Si {a} es el {b}% de un número, ese número es {result}."],
},
"tl": {
 "title": "Kalkulator ng Porsyento - Ratio at Porsyento ng Dalawang Halaga",
 "meta": "Ilagay ang dalawang halaga para malaman kung ilang porsyento ang A ng B, magkano ang porsyento ng B, o ano ang buong halaga kung ang A ay porsyento nito.",
 "card_desc": "Pumili ng paraan ng pagkalkula at ilagay ang Halaga A at Halaga B para makuha agad ang resulta.",
 "nav": "Porsyento",
 "home_desc": "Kalkulahin ang ratio (%) o halaga ng porsyento ng dalawang numero",
 "usage": [
  "Piliin ang paraan ng pagkalkula (hanapin ang ratio, ang bahagi, o ang kabuuan).",
  "Ilagay ang Halaga A at Halaga B.",
  "I-click ang \"Kalkulahin\" para makita agad ang resulta."
 ],
 "method": "Depende sa napiling paraan, ginagamit ang A÷B×100 (ratio), B×A÷100 (bahagi), o A÷(B÷100) (kabuuan).",
 "examples": [
  "Halimbawa 1 — Sa mode na \"Ilang % ng B ang A?\", kung A=25 at B=200, ang 25 ay 12.5% ng 200.",
  "Halimbawa 2 — Sa mode na \"Ano ang A% ng B?\", kung A=20 at B=150, ang 20% ng 150 ay 30."
 ],
 "faq": [
  ["Kailan gagamitin ang bawat mode?", "Gamitin ang una para hanapin ang ratio, ang ikalawa para sa aktwal na halaga ng isang porsyento, at ang ikatlo para kalkulahin ang kabuuan mula sa bahagi at porsyento nito."],
  ["Puwede bang maglagay ng negatibong numero o decimal?", "Oo, tinatanggap ng Halaga A at Halaga B ang negatibong numero at decimal."]
 ],
 "mode_options": ["Ilang % ng B ang A? (A÷B×100)", "Ano ang A% ng B? (B×A÷100)", "Ang A ay B% ng anong numero? (A÷(B÷100))"],
 "labels": {"a": "Halaga A", "b": "Halaga B"},
 "alert": "Pakilagay ang Halaga A at Halaga B.",
 "result_tpl": ["Ang {a} ay {result}% ng {b}.", "Ang {a}% ng {b} ay {result}.", "Kung ang {a} ay {b}% ng isang numero, ang numerong iyon ay {result}."],
},
"ar": {
 "title": "حاسبة النسبة المئوية - نسبة ومقدار مئوي بين قيمتين",
 "meta": "أدخل قيمتين لمعرفة كم بالمئة تمثل A من B، أو كم قيمة نسبة مئوية من B، أو ما القيمة الكلية إذا كانت A نسبة منها.",
 "card_desc": "اختر طريقة الحساب وأدخل القيمة A والقيمة B للحصول على النتيجة فوراً.",
 "nav": "النسبة المئوية",
 "home_desc": "احسب النسبة (%) أو القيمة المئوية بين رقمين",
 "usage": [
  "اختر طريقة الحساب (إيجاد النسبة / إيجاد الجزء / إيجاد الكل).",
  "أدخل القيمة A والقيمة B.",
  "اضغط \"احسب\" لتظهر النتيجة فوراً."
 ],
 "method": "حسب الطريقة المختارة، تُستخدم الصيغة A÷B×100 (النسبة)، أو B×A÷100 (الجزء)، أو A÷(B÷100) (الكل).",
 "examples": [
  "مثال 1 — في وضع \"كم % من B تمثلها A؟\" مع A=25، B=200، فإن 25 تمثل 12.5% من 200.",
  "مثال 2 — في وضع \"ما هي A% من B؟\" مع A=20، B=150، فإن 20% من 150 تساوي 30."
 ],
 "faq": [
  ["متى أستخدم كل وضع؟", "استخدم الوضع الأول لإيجاد نسبة، والثاني لإيجاد القيمة الفعلية لنسبة مئوية، والثالث لحساب الكل من جزء ونسبته."],
  ["هل يمكن إدخال أرقام سالبة أو عشرية؟", "نعم، تقبل القيمة A والقيمة B الأرقام السالبة والعشرية."]
 ],
 "mode_options": ["كم % من B تمثلها A؟ (A÷B×100)", "ما هي A% من B؟ (B×A÷100)", "A تمثل B% من أي رقم؟ (A÷(B÷100))"],
 "labels": {"a": "القيمة A", "b": "القيمة B"},
 "alert": "الرجاء إدخال القيمة A والقيمة B.",
 "result_tpl": ["{a} تمثل {result}% من {b}.", "{a}% من {b} تساوي {result}.", "إذا كانت {a} تمثل {b}% من رقم، فذلك الرقم هو {result}."],
},
"vi": {
 "title": "Máy Tính Phần Trăm - Tỷ Lệ và Giá Trị Phần Trăm Giữa Hai Số",
 "meta": "Nhập hai giá trị để biết A chiếm bao nhiêu % của B, một phần trăm của B là bao nhiêu, hoặc tổng giá trị là bao nhiêu khi A là phần trăm của nó.",
 "card_desc": "Chọn chế độ tính rồi nhập Giá trị A và Giá trị B để nhận kết quả phần trăm ngay lập tức.",
 "nav": "Phần trăm",
 "home_desc": "Tính tỷ lệ (%) hoặc giá trị phần trăm giữa hai số",
 "usage": [
  "Chọn chế độ tính (tìm tỷ lệ / tìm phần / tìm tổng).",
  "Nhập Giá trị A và Giá trị B.",
  "Nhấn \"Tính\" để xem kết quả ngay lập tức."
 ],
 "method": "Tùy chế độ đã chọn, công thức sử dụng là A÷B×100 (tỷ lệ), B×A÷100 (phần), hoặc A÷(B÷100) (tổng).",
 "examples": [
  "Ví dụ 1 — Ở chế độ \"A chiếm bao nhiêu % của B?\", với A=25, B=200, kết quả 25 là 12,5% của 200.",
  "Ví dụ 2 — Ở chế độ \"A% của B là bao nhiêu?\", với A=20, B=150, kết quả 20% của 150 là 30."
 ],
 "faq": [
  ["Khi nào dùng mỗi chế độ?", "Dùng chế độ 1 để tìm tỷ lệ, chế độ 2 để tìm giá trị thực của một phần trăm, và chế độ 3 để tính ngược ra tổng từ một phần và tỷ lệ phần trăm của nó."],
  ["Có thể nhập số âm hoặc số thập phân không?", "Có, Giá trị A và Giá trị B đều có thể nhập số âm và số thập phân."]
 ],
 "mode_options": ["A chiếm bao nhiêu % của B? (A÷B×100)", "A% của B là bao nhiêu? (B×A÷100)", "A là B% của số nào? (A÷(B÷100))"],
 "labels": {"a": "Giá trị A", "b": "Giá trị B"},
 "alert": "Vui lòng nhập cả Giá trị A và Giá trị B.",
 "result_tpl": ["{a} là {result}% của {b}.", "{a}% của {b} là {result}.", "Nếu {a} là {b}% của một số, số đó là {result}."],
},
"de": {
 "title": "Prozentrechner - Verhältnis und Prozentwert zweier Zahlen",
 "meta": "Gib zwei Werte ein, um zu berechnen, wie viel Prozent A von B ist, wie hoch ein Prozentsatz von B ist, oder wie groß der Gesamtwert ist, wenn A ein Prozentsatz davon ist.",
 "card_desc": "Wähle den Rechenmodus und gib Wert A und Wert B ein, um sofort das Prozentergebnis zu erhalten.",
 "nav": "Prozent",
 "home_desc": "Verhältnis (%) oder Prozentwert zwischen zwei Zahlen berechnen",
 "usage": [
  "Wähle den Rechenmodus (Verhältnis, Anteil oder Gesamtwert finden).",
  "Gib Wert A und Wert B ein.",
  "Klicke auf \"Berechnen\", um das Ergebnis sofort zu sehen."
 ],
 "method": "Je nach Modus wird A÷B×100 (Verhältnis), B×A÷100 (Anteil) oder A÷(B÷100) (Gesamtwert) verwendet.",
 "examples": [
  "Beispiel 1 — Im Modus \"Wie viel % von B ist A?\" ergibt A=25, B=200: 25 sind 12,5 % von 200.",
  "Beispiel 2 — Im Modus \"Wie viel ist A% von B?\" ergibt A=20, B=150: 20 % von 150 sind 30."
 ],
 "faq": [
  ["Wann nutze ich welchen Modus?", "Nutze den ersten Modus, um ein Verhältnis zu finden, den zweiten für den tatsächlichen Wert eines Prozentsatzes, und den dritten, um aus Anteil und Prozentsatz den Gesamtwert zu berechnen."],
  ["Kann ich negative Zahlen oder Dezimalzahlen eingeben?", "Ja, Wert A und Wert B akzeptieren beide negative Zahlen und Dezimalzahlen."]
 ],
 "mode_options": ["Wie viel % von B ist A? (A÷B×100)", "Wie viel ist A% von B? (B×A÷100)", "A ist B% von welcher Zahl? (A÷(B÷100))"],
 "labels": {"a": "Wert A", "b": "Wert B"},
 "alert": "Bitte Wert A und Wert B eingeben.",
 "result_tpl": ["{a} ist {result}% von {b}.", "{a}% von {b} ist {result}.", "Wenn {a} gleich {b}% einer Zahl ist, ist diese Zahl {result}."],
},
"bn": {
 "title": "শতাংশ ক্যালকুলেটর - দুটি মানের অনুপাত ও শতাংশ নির্ণয়",
 "meta": "দুটি মান দিন এবং জানুন A, B-এর শতকরা কত, B-এর A% কত, অথবা A কোনো সংখ্যার B% হলে সেই সংখ্যা কত।",
 "card_desc": "হিসাবের পদ্ধতি বেছে নিন এবং মান A ও মান B লিখুন, ফলাফল সাথে সাথে দেখতে পাবেন।",
 "nav": "শতাংশ",
 "home_desc": "দুটি সংখ্যার অনুপাত (%) বা শতাংশ মান নির্ণয় করুন",
 "usage": [
  "হিসাবের পদ্ধতি বেছে নিন (অনুপাত / অংশের মান / পূর্ণ মান নির্ণয়)।",
  "মান A এবং মান B লিখুন।",
  "\"হিসাব করুন\" চাপলে ফলাফল সাথে সাথে দেখা যাবে।"
 ],
 "method": "নির্বাচিত পদ্ধতি অনুযায়ী A÷B×100 (অনুপাত), B×A÷100 (অংশ), অথবা A÷(B÷100) (পূর্ণ মান) সূত্র ব্যবহৃত হয়।",
 "examples": [
  "উদাহরণ ১ — \"A, B-এর শতকরা কত?\" মোডে A=25, B=200 হলে 25 হলো 200-এর 12.5%।",
  "উদাহরণ ২ — \"B-এর A% কত?\" মোডে A=20, B=150 হলে 150-এর 20% অর্থাৎ 30।"
 ],
 "faq": [
  ["তিনটি মোড কখন ব্যবহার করব?", "অনুপাত জানতে প্রথমটি, কোনো শতাংশের প্রকৃত মান জানতে দ্বিতীয়টি, এবং অংশ ও শতাংশ থেকে পূর্ণ মান বের করতে তৃতীয় মোড ব্যবহার করুন।"],
  ["ঋণাত্মক সংখ্যা বা দশমিক দেওয়া যাবে?", "হ্যাঁ, মান A এবং মান B উভয়েই ঋণাত্মক সংখ্যা ও দশমিক দেওয়া যায়।"]
 ],
 "mode_options": ["A, B-এর শতকরা কত? (A÷B×100)", "B-এর A% কত? (B×A÷100)", "A কোনো সংখ্যার B% হলে সেই সংখ্যা কত? (A÷(B÷100))"],
 "labels": {"a": "মান A", "b": "মান B"},
 "alert": "মান A এবং মান B উভয়ই লিখুন।",
 "result_tpl": ["{a}, {b}-এর {result}%।", "{b}-এর {a}% হলো {result}।", "{a} যদি কোনো সংখ্যার {b}% হয়, সেই সংখ্যা {result}।"],
},
"tr": {
 "title": "Yüzde Hesaplayıcı - İki Değer Arasındaki Oran ve Yüzde",
 "meta": "İki değer girerek A'nın B'nin yüzde kaçı olduğunu, B'nin belirli bir yüzdesinin ne kadar olduğunu veya A bir sayının yüzdesiyse o sayının ne olduğunu hesaplayın.",
 "card_desc": "Hesaplama yöntemini seçip A Değeri ve B Değerini girin, sonuç anında görünür.",
 "nav": "Yüzde",
 "home_desc": "İki sayı arasındaki oranı (%) veya yüzde değerini hesaplayın",
 "usage": [
  "Hesaplama yöntemini seçin (oranı, parçayı veya bütünü bulma).",
  "A Değeri ve B Değerini girin.",
  "Sonucu anında görmek için \"Hesapla\"ya tıklayın."
 ],
 "method": "Seçilen yönteme göre A÷B×100 (oran), B×A÷100 (parça) veya A÷(B÷100) (bütün) formülü kullanılır.",
 "examples": [
  "Örnek 1 — \"A, B'nin yüzde kaçı?\" modunda A=25, B=200 ise 25, 200'ün %12,5'idir.",
  "Örnek 2 — \"B'nin A%'si nedir?\" modunda A=20, B=150 ise 150'nin %20'si 30'dur."
 ],
 "faq": [
  ["Her modu ne zaman kullanmalıyım?", "Oranı bulmak için birinciyi, bir yüzdenin gerçek değerini bulmak için ikinciyi, parça ve yüzdeden bütünü hesaplamak için üçüncü modu kullanın."],
  ["Negatif sayı veya ondalık girebilir miyim?", "Evet, A Değeri ve B Değeri hem negatif sayıları hem de ondalıkları kabul eder."]
 ],
 "mode_options": ["A, B'nin yüzde kaçı? (A÷B×100)", "B'nin A%'si nedir? (B×A÷100)", "A, hangi sayının B%'si? (A÷(B÷100))"],
 "labels": {"a": "A Değeri", "b": "B Değeri"},
 "alert": "Lütfen A Değeri ve B Değerini girin.",
 "result_tpl": ["{a}, {b}'nin %{result}'idir.", "{b}'nin %{a}'si {result}'dir.", "{a}, bir sayının %{b}'si ise o sayı {result}'dir."],
},
"fa": {
 "title": "ماشین‌حساب درصد - نسبت و مقدار درصد بین دو عدد",
 "meta": "دو مقدار را وارد کنید تا بفهمید A چند درصد از B است، چند درصد از B چقدر می‌شود، یا اگر A درصدی از یک عدد باشد آن عدد چقدر است.",
 "card_desc": "حالت محاسبه را انتخاب کنید و مقدار A و مقدار B را وارد کنید تا نتیجه فوراً نمایش داده شود.",
 "nav": "درصد",
 "home_desc": "محاسبه نسبت (%) یا مقدار درصد بین دو عدد",
 "usage": [
  "حالت محاسبه را انتخاب کنید (یافتن نسبت / بخش / کل).",
  "مقدار A و مقدار B را وارد کنید.",
  "برای دیدن نتیجه فوری روی «محاسبه» کلیک کنید."
 ],
 "method": "بسته به حالت انتخابی از فرمول A÷B×100 (نسبت)، B×A÷100 (بخش) یا A÷(B÷100) (کل) استفاده می‌شود.",
 "examples": [
  "مثال ۱ — در حالت «A چند درصد از B است؟» با A=۲۵، B=۲۰۰، نتیجه: ۲۵ برابر ۱۲.۵٪ از ۲۰۰ است.",
  "مثال ۲ — در حالت «چند درصد از B، A است؟» با A=۲۰، B=۱۵۰، نتیجه: ۲۰٪ از ۱۵۰ برابر ۳۰ است."
 ],
 "faq": [
  ["هر حالت را چه زمانی استفاده کنم؟", "برای یافتن نسبت از حالت اول، برای یافتن مقدار واقعی یک درصد از حالت دوم، و برای محاسبه کل از روی بخش و درصد آن از حالت سوم استفاده کنید."],
  ["می‌توان عدد منفی یا اعشاری وارد کرد؟", "بله، هم مقدار A و هم مقدار B می‌توانند منفی یا اعشاری باشند."]
 ],
 "mode_options": ["A چند درصد از B است؟ (A÷B×100)", "چند درصد از B، A است؟ (B×A÷100)", "A چند درصد از کدام عدد است؟ (A÷(B÷100))"],
 "labels": {"a": "مقدار A", "b": "مقدار B"},
 "alert": "لطفاً مقدار A و مقدار B را وارد کنید.",
 "result_tpl": ["{a} برابر {result}٪ از {b} است.", "{result} برابر {a}٪ از {b} است.", "اگر {a} برابر {b}٪ از یک عدد باشد، آن عدد {result} است."],
},
"th": {
 "title": "เครื่องคำนวณเปอร์เซ็นต์ - อัตราส่วนและค่าเปอร์เซ็นต์ของสองค่า",
 "meta": "กรอกสองค่าเพื่อหาว่า A คิดเป็นกี่เปอร์เซ็นต์ของ B, กี่เปอร์เซ็นต์ของ B มีค่าเท่าไร หรือค่ารวมคือเท่าไรเมื่อ A เป็นเปอร์เซ็นต์ของมัน",
 "card_desc": "เลือกโหมดการคำนวณแล้วกรอกค่า A และค่า B เพื่อดูผลลัพธ์เปอร์เซ็นต์ทันที",
 "nav": "เปอร์เซ็นต์",
 "home_desc": "คำนวณอัตราส่วน (%) หรือค่าเปอร์เซ็นต์ของสองตัวเลข",
 "usage": [
  "เลือกโหมดการคำนวณ (หาอัตราส่วน / หาค่าบางส่วน / หาค่ารวม)",
  "กรอกค่า A และค่า B",
  "กด \"คำนวณ\" เพื่อดูผลลัพธ์ทันที"
 ],
 "method": "ขึ้นอยู่กับโหมดที่เลือก จะใช้สูตร A÷B×100 (อัตราส่วน), B×A÷100 (ค่าบางส่วน) หรือ A÷(B÷100) (ค่ารวม)",
 "examples": [
  "ตัวอย่างที่ 1 — โหมด \"A คิดเป็นกี่ % ของ B?\" เมื่อ A=25, B=200 ผลลัพธ์คือ 25 เป็น 12.5% ของ 200",
  "ตัวอย่างที่ 2 — โหมด \"A% ของ B คือเท่าไร?\" เมื่อ A=20, B=150 ผลลัพธ์คือ 20% ของ 150 คือ 30"
 ],
 "faq": [
  ["ควรใช้แต่ละโหมดเมื่อไร?", "ใช้โหมดแรกเพื่อหาอัตราส่วน โหมดที่สองเพื่อหาค่าจริงของเปอร์เซ็นต์ และโหมดที่สามเพื่อคำนวณย้อนกลับหาค่ารวมจากค่าบางส่วนและเปอร์เซ็นต์"],
  ["กรอกเลขติดลบหรือทศนิยมได้ไหม?", "ได้ ทั้งค่า A และค่า B สามารถกรอกเลขติดลบและทศนิยมได้"]
 ],
 "mode_options": ["A คิดเป็นกี่ % ของ B? (A÷B×100)", "A% ของ B คือเท่าไร? (B×A÷100)", "A คือ B% ของเลขอะไร? (A÷(B÷100))"],
 "labels": {"a": "ค่า A", "b": "ค่า B"},
 "alert": "กรุณากรอกค่า A และค่า B",
 "result_tpl": ["{a} คือ {result}% ของ {b}", "{a}% ของ {b} คือ {result}", "ถ้า {a} คือ {b}% ของตัวเลขหนึ่ง ตัวเลขนั้นคือ {result}"],
},
"fr": {
 "title": "Calculatrice de Pourcentage - Ratio et Pourcentage entre Deux Valeurs",
 "meta": "Entrez deux valeurs pour savoir quel pourcentage A représente de B, combien vaut un pourcentage de B, ou quel est le total quand A en est un pourcentage.",
 "card_desc": "Choisissez le mode de calcul et entrez la Valeur A et la Valeur B pour obtenir le résultat en pourcentage instantanément.",
 "nav": "Pourcentage",
 "home_desc": "Calculer le ratio (%) ou la valeur en pourcentage entre deux nombres",
 "usage": [
  "Choisissez le mode de calcul (trouver le ratio, la partie ou le tout).",
  "Entrez la Valeur A et la Valeur B.",
  "Cliquez sur \"Calculer\" pour voir le résultat instantanément."
 ],
 "method": "Selon le mode choisi, la formule utilisée est A÷B×100 (ratio), B×A÷100 (partie) ou A÷(B÷100) (tout).",
 "examples": [
  "Exemple 1 — En mode \"Quel % de B est A ?\", avec A=25 et B=200, 25 est 12,5 % de 200.",
  "Exemple 2 — En mode \"Combien vaut A% de B ?\", avec A=20 et B=150, 20 % de 150 vaut 30."
 ],
 "faq": [
  ["Quand utiliser chaque mode ?", "Utilisez le premier pour trouver un ratio, le deuxième pour trouver la valeur réelle d'un pourcentage, et le troisième pour calculer le tout à partir d'une partie et de son pourcentage."],
  ["Peut-on saisir des nombres négatifs ou décimaux ?", "Oui, la Valeur A et la Valeur B acceptent les nombres négatifs et décimaux."]
 ],
 "mode_options": ["Quel % de B est A ? (A÷B×100)", "Combien vaut A% de B ? (B×A÷100)", "A est B% de quel nombre ? (A÷(B÷100))"],
 "labels": {"a": "Valeur A", "b": "Valeur B"},
 "alert": "Veuillez entrer la Valeur A et la Valeur B.",
 "result_tpl": ["{a} représente {result}% de {b}.", "{a}% de {b} vaut {result}.", "Si {a} est {b}% d'un nombre, ce nombre est {result}."],
},
}
