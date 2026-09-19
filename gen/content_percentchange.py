# -*- coding: utf-8 -*-
# Content for the "percentchange" calculator (percent increase/decrease),
# one entry per of the 19 site languages.
# Modes: "diff" (original + new value -> % change), "apply" (original + percent -> resulting value)
PERCENTCHANGE = {
"ko": {
 "title": "퍼센트 증가/감소 계산기 - 변화율(%)과 변경 후 값 계산",
 "meta": "이전 값과 이후 값을 입력하면 증가/감소율을 계산하고, 원래 값에 특정 퍼센트를 적용했을 때의 결과값도 바로 계산합니다.",
 "card_desc": "계산 방식을 고르고 값을 입력하면 변화율 또는 적용 후 값을 바로 계산합니다.",
 "nav": "증감율",
 "home_desc": "이전 값과 이후 값으로 증가율·감소율(%) 계산",
 "usage": [
   "계산 방식을 선택합니다 (변화율 구하기 / 적용 후 값 구하기).",
   "\"변화율 구하기\"에서는 이전 값과 이후 값을, \"적용 후 값 구하기\"에서는 원래 값과 퍼센트를 입력합니다.",
   "\"계산하기\"를 누르면 결과가 바로 표시됩니다."
 ],
 "method": "변화율은 (이후 값 − 이전 값) ÷ 이전 값 × 100 으로 계산합니다. 적용 후 값은 원래 값 × (1 + 퍼센트 ÷ 100) 으로 계산하며, 퍼센트가 음수면 감소를 의미합니다.",
 "examples": [
   "예시 1 — \"변화율 구하기\" 모드에서 이전 값 200, 이후 값 250이면 변화율은 +25% (25% 증가)입니다.",
   "예시 2 — \"적용 후 값 구하기\" 모드에서 원래 값 200, 퍼센트 −15%이면 적용 후 값은 170입니다."
 ],
 "faq": [
   ["증가와 감소를 어떻게 구분하나요?", "결과 퍼센트가 양수면 증가, 음수면 감소를 의미합니다. \"적용 후 값 구하기\"에서는 퍼센트에 마이너스(-)를 붙이면 감소로 계산됩니다."],
   ["할인율 계산기와 무엇이 다른가요?", "할인율 계산기는 가격 할인에 특화되어 있지만, 이 계산기는 매출·인구·점수 등 어떤 두 값 사이의 증감률이나 임의의 증감 적용에도 사용할 수 있습니다."]
 ],
 "mode_options": ["변화율 구하기 (이전 값 → 이후 값)", "적용 후 값 구하기 (원래 값 + 퍼센트)"],
 "labels": {"before": "이전 값", "after": "이후 값", "base": "원래 값", "percent": "퍼센트 (%)"},
 "alert": "필요한 값을 모두 입력해 주세요.",
 "result_tpl": [
   "변화율은 {result}%입니다 ({dir}).",
   "{base}에서 {percent}%를 적용하면 {result}입니다."
 ],
 "dir_up": "증가", "dir_down": "감소", "dir_same": "변화 없음",
},
"en": {
 "title": "Percent Change Calculator - Percentage Increase or Decrease",
 "meta": "Enter a before and after value to find the percent increase or decrease, or apply a percent change to a starting value to get the resulting number.",
 "card_desc": "Pick a mode and enter your values to get the percent change or the resulting value instantly.",
 "nav": "Percent Change",
 "home_desc": "Calculate percent increase or decrease between two values",
 "usage": [
   "Choose a mode (find the percent change, or apply a percent change).",
   "For \"find percent change\", enter the before and after values. For \"apply percent\", enter the starting value and the percent.",
   "Click \"Calculate\" to see the result instantly."
 ],
 "method": "Percent change is (after − before) ÷ before × 100. The resulting value after applying a percent is base × (1 + percent ÷ 100); a negative percent means a decrease.",
 "examples": [
   "Example 1 — In \"find percent change\" mode, before=200 and after=250 gives +25% (a 25% increase).",
   "Example 2 — In \"apply percent\" mode, base=200 and percent=-15% gives a resulting value of 170."
 ],
 "faq": [
   ["How do I tell an increase from a decrease?", "A positive result means an increase, a negative result means a decrease. In \"apply percent\" mode, enter a negative percent to apply a decrease."],
   ["How is this different from the discount calculator?", "The discount calculator is built specifically for price discounts, while this one works for the percent change between any two numbers — sales, population, scores — or applying any percent change."]
 ],
 "mode_options": ["Find percent change (before → after)", "Apply percent (base + percent)"],
 "labels": {"before": "Before value", "after": "After value", "base": "Base value", "percent": "Percent (%)"},
 "alert": "Please enter all required values.",
 "result_tpl": [
   "The percent change is {result}% ({dir}).",
   "Applying {percent}% to {base} gives {result}."
 ],
 "dir_up": "increase", "dir_down": "decrease", "dir_same": "no change",
},
"ja": {
 "title": "増減率計算機 - パーセントの増加・減少を計算",
 "meta": "変化前と変化後の値を入力すると増減率(%)がわかり、元の値にパーセントを適用した後の値もすぐに計算できます。",
 "card_desc": "モードを選んで値を入力すると、増減率または適用後の値がすぐに表示されます。",
 "nav": "増減率",
 "home_desc": "変化前後の値から増加率・減少率(%)を計算",
 "usage": [
   "モードを選びます(増減率を求める/適用後の値を求める)。",
   "「増減率を求める」では変化前・変化後の値を、「適用後の値を求める」では元の値とパーセントを入力します。",
   "「計算する」を押すと結果がすぐに表示されます。"
 ],
 "method": "増減率は (変化後 − 変化前) ÷ 変化前 × 100 で計算します。適用後の値は 元の値 ×(1 + パーセント ÷ 100) で、パーセントがマイナスなら減少を表します。",
 "examples": [
   "例1 —「増減率を求める」モードで変化前200、変化後250のとき、増減率は+25%(25%増加)です。",
   "例2 —「適用後の値を求める」モードで元の値200、パーセント−15%のとき、適用後の値は170です。"
 ],
 "faq": [
   ["増加と減少はどう見分けますか?", "結果がプラスなら増加、マイナスなら減少です。「適用後の値を求める」ではマイナスのパーセントを入力すると減少として計算されます。"],
   ["割引計算機と何が違いますか?", "割引計算機は価格の割引に特化していますが、この計算機は売上や人口、点数など任意の2つの値の増減率や、任意の増減の適用に使えます。"]
 ],
 "mode_options": ["増減率を求める(変化前→変化後)", "適用後の値を求める(元の値+パーセント)"],
 "labels": {"before": "変化前の値", "after": "変化後の値", "base": "元の値", "percent": "パーセント (%)"},
 "alert": "必要な値をすべて入力してください。",
 "result_tpl": [
   "増減率は{result}%です({dir})。",
   "{base}に{percent}%を適用すると{result}です。"
 ],
 "dir_up": "増加", "dir_down": "減少", "dir_same": "変化なし",
},
"zh-cn": {
 "title": "百分比增减计算器 - 计算增长率或下降率",
 "meta": "输入变化前和变化后的数值即可计算增减百分比,也可以为初始值应用某个百分比,直接得到结果值。",
 "card_desc": "选择计算模式并输入数值,即可立即得到增减率或计算后的结果值。",
 "nav": "增减率",
 "home_desc": "根据变化前后的数值计算增长率或下降率(%)",
 "usage": [
  "选择计算模式(求增减率 / 求应用后的结果值)。",
  "在“求增减率”中输入变化前和变化后的数值;在“求应用后的结果值”中输入初始值和百分比。",
  "点击“计算”即可立即显示结果。"
 ],
 "method": "增减率 =(变化后 − 变化前)÷ 变化前 × 100。应用百分比后的结果值 = 初始值 ×(1 + 百分比 ÷ 100),百分比为负数表示下降。",
 "examples": [
  "示例1 — 在“求增减率”模式下,变化前为200,变化后为250,结果为+25%(增长25%)。",
  "示例2 — 在“求应用后的结果值”模式下,初始值为200,百分比为−15%,结果值为170。"
 ],
 "faq": [
  ["如何区分增长和下降?", "结果为正数表示增长,为负数表示下降。在“求应用后的结果值”模式下,输入负数百分比即可计算下降。"],
  ["这和折扣计算器有什么区别?", "折扣计算器专门用于价格折扣,而本计算器可用于销售额、人口、分数等任意两个数值之间的增减率计算,或应用任意增减幅度。"]
 ],
 "mode_options": ["求增减率(变化前→变化后)", "求应用后的结果值(初始值+百分比)"],
 "labels": {"before": "变化前数值", "after": "变化后数值", "base": "初始值", "percent": "百分比 (%)"},
 "alert": "请输入所需的所有数值。",
 "result_tpl": [
  "增减率为{result}%({dir})。",
  "对{base}应用{percent}%后结果为{result}。"
 ],
 "dir_up": "增长", "dir_down": "下降", "dir_same": "无变化",
},
"hi": {
 "title": "प्रतिशत परिवर्तन कैलकुलेटर - बढ़ोतरी या कमी का प्रतिशत निकालें",
 "meta": "पहले और बाद की वैल्यू डालें और जानें कितने प्रतिशत बढ़ोतरी या कमी हुई, या किसी वैल्यू पर एक प्रतिशत लागू करके नतीजा निकालें।",
 "card_desc": "तरीका चुनें और वैल्यू डालें, प्रतिशत परिवर्तन या नतीजा तुरंत मिलेगा।",
 "nav": "प्रतिशत परिवर्तन",
 "home_desc": "दो वैल्यू के बीच बढ़ोतरी या कमी का प्रतिशत निकालें",
 "usage": [
  "तरीका चुनें (प्रतिशत परिवर्तन निकालें / प्रतिशत लागू करें)।",
  "\"प्रतिशत परिवर्तन निकालें\" में पहले और बाद की वैल्यू डालें; \"प्रतिशत लागू करें\" में मूल वैल्यू और प्रतिशत डालें।",
  "\"गणना करें\" दबाते ही नतीजा तुरंत दिखेगा।"
 ],
 "method": "प्रतिशत परिवर्तन = (बाद की वैल्यू − पहले की वैल्यू) ÷ पहले की वैल्यू × 100। प्रतिशत लागू करने पर नतीजा = मूल वैल्यू × (1 + प्रतिशत ÷ 100), ऋणात्मक प्रतिशत का मतलब कमी है।",
 "examples": [
  "उदाहरण 1 — \"प्रतिशत परिवर्तन निकालें\" मोड में पहले 200, बाद 250 होने पर परिणाम +25% (25% बढ़ोतरी) है।",
  "उदाहरण 2 — \"प्रतिशत लागू करें\" मोड में मूल वैल्यू 200, प्रतिशत −15% होने पर नतीजा 170 है।"
 ],
 "faq": [
  ["बढ़ोतरी और कमी कैसे पहचानें?", "धनात्मक परिणाम बढ़ोतरी दिखाता है और ऋणात्मक परिणाम कमी। \"प्रतिशत लागू करें\" में ऋणात्मक प्रतिशत डालने पर कमी के रूप में गणना होती है।"],
  ["यह डिस्काउंट कैलकुलेटर से कैसे अलग है?", "डिस्काउंट कैलकुलेटर सिर्फ कीमत छूट के लिए है, जबकि यह कैलकुलेटर बिक्री, जनसंख्या, स्कोर जैसे किसी भी दो मानों के बीच परिवर्तन या किसी भी प्रतिशत को लागू करने के लिए काम करता है।"]
 ],
 "mode_options": ["प्रतिशत परिवर्तन निकालें (पहले → बाद)", "प्रतिशत लागू करें (मूल वैल्यू + प्रतिशत)"],
 "labels": {"before": "पहले की वैल्यू", "after": "बाद की वैल्यू", "base": "मूल वैल्यू", "percent": "प्रतिशत (%)"},
 "alert": "कृपया सभी ज़रूरी वैल्यू डालें।",
 "result_tpl": [
  "प्रतिशत परिवर्तन {result}% है ({dir})।",
  "{base} पर {percent}% लागू करने पर नतीजा {result} है।"
 ],
 "dir_up": "बढ़ोतरी", "dir_down": "कमी", "dir_same": "कोई बदलाव नहीं",
},
"id": {
 "title": "Kalkulator Persentase Perubahan - Hitung Kenaikan atau Penurunan Persen",
 "meta": "Masukkan nilai sebelum dan sesudah untuk mengetahui persentase kenaikan atau penurunan, atau terapkan persentase pada nilai awal untuk mendapatkan hasil akhirnya.",
 "card_desc": "Pilih mode dan masukkan nilai untuk langsung mendapatkan persentase perubahan atau nilai hasilnya.",
 "nav": "Persentase Perubahan",
 "home_desc": "Hitung persentase kenaikan atau penurunan antara dua nilai",
 "usage": [
  "Pilih mode (cari persentase perubahan / terapkan persentase).",
  "Untuk \"cari persentase perubahan\", masukkan nilai sebelum dan sesudah. Untuk \"terapkan persentase\", masukkan nilai awal dan persentase.",
  "Klik \"Hitung\" untuk melihat hasilnya secara instan."
 ],
 "method": "Persentase perubahan = (sesudah − sebelum) ÷ sebelum × 100. Nilai hasil setelah menerapkan persentase = nilai awal × (1 + persentase ÷ 100); persentase negatif berarti penurunan.",
 "examples": [
  "Contoh 1 — Mode \"cari persentase perubahan\" dengan sebelum=200 dan sesudah=250 menghasilkan +25% (kenaikan 25%).",
  "Contoh 2 — Mode \"terapkan persentase\" dengan nilai awal=200 dan persentase=-15% menghasilkan nilai akhir 170."
 ],
 "faq": [
  ["Bagaimana membedakan kenaikan dan penurunan?", "Hasil positif berarti kenaikan, hasil negatif berarti penurunan. Pada mode \"terapkan persentase\", masukkan persentase negatif untuk menghitung penurunan."],
  ["Apa bedanya dengan kalkulator diskon?", "Kalkulator diskon dikhususkan untuk diskon harga, sedangkan kalkulator ini bisa dipakai untuk persentase perubahan antara dua angka apa pun — penjualan, populasi, skor — atau menerapkan perubahan persentase apa pun."]
 ],
 "mode_options": ["Cari persentase perubahan (sebelum → sesudah)", "Terapkan persentase (nilai awal + persentase)"],
 "labels": {"before": "Nilai sebelum", "after": "Nilai sesudah", "base": "Nilai awal", "percent": "Persentase (%)"},
 "alert": "Silakan masukkan semua nilai yang diperlukan.",
 "result_tpl": [
  "Persentase perubahan adalah {result}% ({dir}).",
  "Menerapkan {percent}% pada {base} menghasilkan {result}."
 ],
 "dir_up": "kenaikan", "dir_down": "penurunan", "dir_same": "tidak berubah",
},
"pt-br": {
 "title": "Calculadora de Variação Percentual - Aumento ou Redução em %",
 "meta": "Informe o valor antes e depois para saber o percentual de aumento ou redução, ou aplique uma porcentagem sobre um valor inicial para obter o resultado.",
 "card_desc": "Escolha o modo e informe os valores para obter a variação percentual ou o valor resultante na hora.",
 "nav": "Variação %",
 "home_desc": "Calcule o percentual de aumento ou redução entre dois valores",
 "usage": [
  "Escolha o modo (encontrar a variação percentual ou aplicar uma porcentagem).",
  "Em \"encontrar variação\", informe o valor antes e depois. Em \"aplicar porcentagem\", informe o valor base e a porcentagem.",
  "Clique em \"Calcular\" para ver o resultado na hora."
 ],
 "method": "A variação percentual é (depois − antes) ÷ antes × 100. O valor resultante ao aplicar uma porcentagem é base × (1 + porcentagem ÷ 100); uma porcentagem negativa indica redução.",
 "examples": [
  "Exemplo 1 — No modo \"encontrar variação\", antes=200 e depois=250 resultam em +25% (aumento de 25%).",
  "Exemplo 2 — No modo \"aplicar porcentagem\", base=200 e porcentagem=-15% resultam em 170."
 ],
 "faq": [
  ["Como sei se é aumento ou redução?", "Um resultado positivo indica aumento e um negativo indica redução. No modo \"aplicar porcentagem\", digite um valor negativo para calcular uma redução."],
  ["Qual a diferença para a calculadora de desconto?", "A calculadora de desconto é feita especificamente para descontos em preços, enquanto esta serve para a variação percentual entre quaisquer dois números — vendas, população, notas — ou para aplicar qualquer variação percentual."]
 ],
 "mode_options": ["Encontrar variação percentual (antes → depois)", "Aplicar porcentagem (base + porcentagem)"],
 "labels": {"before": "Valor antes", "after": "Valor depois", "base": "Valor base", "percent": "Porcentagem (%)"},
 "alert": "Informe todos os valores necessários.",
 "result_tpl": [
  "A variação percentual é {result}% ({dir}).",
  "Aplicar {percent}% em {base} resulta em {result}."
 ],
 "dir_up": "aumento", "dir_down": "redução", "dir_same": "sem mudança",
},
"ru": {
 "title": "Калькулятор процентного изменения - рост или снижение в %",
 "meta": "Введите значение до и после, чтобы узнать процент роста или снижения, либо примените процент к начальному значению и получите итоговое число.",
 "card_desc": "Выберите режим и введите значения, чтобы мгновенно получить процент изменения или итоговое значение.",
 "nav": "Изменение %",
 "home_desc": "Расчёт процента роста или снижения между двумя значениями",
 "usage": [
  "Выберите режим (найти процент изменения или применить процент).",
  "В режиме «найти изменение» введите значение до и после. В режиме «применить процент» — базовое значение и процент.",
  "Нажмите «Рассчитать», чтобы сразу увидеть результат."
 ],
 "method": "Процент изменения = (после − до) ÷ до × 100. Итоговое значение после применения процента = базовое значение × (1 + процент ÷ 100); отрицательный процент означает снижение.",
 "examples": [
  "Пример 1 — В режиме «найти изменение» при до=200 и после=250 результат +25% (рост на 25%).",
  "Пример 2 — В режиме «применить процент» при базовом значении 200 и проценте −15% результат равен 170."
 ],
 "faq": [
  ["Как отличить рост от снижения?", "Положительный результат означает рост, отрицательный — снижение. В режиме «применить процент» введите отрицательное число, чтобы посчитать снижение."],
  ["Чем это отличается от калькулятора скидок?", "Калькулятор скидок предназначен именно для скидок на цену, а этот калькулятор подходит для расчёта изменения между любыми двумя числами — продажи, население, баллы — или применения любого процентного изменения."]
 ],
 "mode_options": ["Найти процент изменения (до → после)", "Применить процент (база + процент)"],
 "labels": {"before": "Значение до", "after": "Значение после", "base": "Базовое значение", "percent": "Процент (%)"},
 "alert": "Введите все необходимые значения.",
 "result_tpl": [
  "Процент изменения составляет {result}% ({dir}).",
  "Применение {percent}% к {base} даёт {result}."
 ],
 "dir_up": "рост", "dir_down": "снижение", "dir_same": "без изменений",
},
"ur": {
 "title": "فیصد تبدیلی کیلکولیٹر - اضافہ یا کمی کا فیصد نکالیں",
 "meta": "پہلے اور بعد کی قدر درج کریں اور جانیں کتنے فیصد اضافہ یا کمی ہوئی، یا کسی ابتدائی قدر پر فیصد لگا کر نتیجہ حاصل کریں۔",
 "card_desc": "طریقہ منتخب کریں اور قدریں درج کریں، فیصد تبدیلی یا نتیجہ فوراً مل جائے گا۔",
 "nav": "فیصد تبدیلی",
 "home_desc": "دو قدروں کے درمیان اضافے یا کمی کا فیصد نکالیں",
 "usage": [
  "طریقہ منتخب کریں (فیصد تبدیلی نکالیں / فیصد لاگو کریں)۔",
  "\"فیصد تبدیلی نکالیں\" میں پہلے اور بعد کی قدر درج کریں؛ \"فیصد لاگو کریں\" میں ابتدائی قدر اور فیصد درج کریں۔",
  "\"حساب کریں\" دبانے پر نتیجہ فوراً ظاہر ہوگا۔"
 ],
 "method": "فیصد تبدیلی = (بعد کی قدر − پہلے کی قدر) ÷ پہلے کی قدر × 100۔ فیصد لاگو کرنے کے بعد نتیجہ = ابتدائی قدر × (1 + فیصد ÷ 100)؛ منفی فیصد کمی ظاہر کرتا ہے۔",
 "examples": [
  "مثال 1 — \"فیصد تبدیلی نکالیں\" موڈ میں پہلے 200، بعد 250 پر نتیجہ +25% (25% اضافہ) ہے۔",
  "مثال 2 — \"فیصد لاگو کریں\" موڈ میں ابتدائی قدر 200، فیصد −15% پر نتیجہ 170 ہے۔"
 ],
 "faq": [
  ["اضافے اور کمی میں فرق کیسے کریں؟", "مثبت نتیجہ اضافہ ظاہر کرتا ہے اور منفی نتیجہ کمی۔ \"فیصد لاگو کریں\" میں منفی فیصد درج کرنے سے کمی کا حساب ہوتا ہے۔"],
  ["یہ ڈسکاؤنٹ کیلکولیٹر سے کیسے مختلف ہے؟", "ڈسکاؤنٹ کیلکولیٹر خاص طور پر قیمت کی چھوٹ کے لیے ہے، جبکہ یہ کیلکولیٹر فروخت، آبادی، سکور جیسی کسی بھی دو قدروں کے درمیان تبدیلی یا کسی بھی فیصد کے اطلاق کے لیے استعمال ہو سکتا ہے۔"]
 ],
 "mode_options": ["فیصد تبدیلی نکالیں (پہلے → بعد)", "فیصد لاگو کریں (ابتدائی قدر + فیصد)"],
 "labels": {"before": "پہلے کی قدر", "after": "بعد کی قدر", "base": "ابتدائی قدر", "percent": "فیصد (%)"},
 "alert": "براہ کرم تمام مطلوبہ قدریں درج کریں۔",
 "result_tpl": [
  "فیصد تبدیلی {result}% ہے ({dir})۔",
  "{base} پر {percent}% لاگو کرنے سے نتیجہ {result} ہے۔"
 ],
 "dir_up": "اضافہ", "dir_down": "کمی", "dir_same": "کوئی تبدیلی نہیں",
},
"es": {
 "title": "Calculadora de Cambio Porcentual - Aumento o Disminución en %",
 "meta": "Introduce el valor antes y después para saber el porcentaje de aumento o disminución, o aplica un porcentaje a un valor inicial para obtener el resultado.",
 "card_desc": "Elige el modo e introduce los valores para obtener el cambio porcentual o el valor resultante al instante.",
 "nav": "Cambio %",
 "home_desc": "Calcula el porcentaje de aumento o disminución entre dos valores",
 "usage": [
  "Elige el modo (hallar el cambio porcentual o aplicar un porcentaje).",
  "En \"hallar cambio\", introduce el valor antes y después. En \"aplicar porcentaje\", introduce el valor base y el porcentaje.",
  "Pulsa \"Calcular\" para ver el resultado al instante."
 ],
 "method": "El cambio porcentual es (después − antes) ÷ antes × 100. El valor resultante al aplicar un porcentaje es base × (1 + porcentaje ÷ 100); un porcentaje negativo indica una disminución.",
 "examples": [
  "Ejemplo 1 — En el modo \"hallar cambio\", con antes=200 y después=250 se obtiene +25% (un aumento del 25%).",
  "Ejemplo 2 — En el modo \"aplicar porcentaje\", con base=200 y porcentaje=-15% se obtiene un resultado de 170."
 ],
 "faq": [
  ["¿Cómo distingo un aumento de una disminución?", "Un resultado positivo indica aumento y uno negativo indica disminución. En el modo \"aplicar porcentaje\", introduce un porcentaje negativo para calcular una disminución."],
  ["¿En qué se diferencia de la calculadora de descuentos?", "La calculadora de descuentos está pensada específicamente para descuentos de precio, mientras que esta sirve para el cambio porcentual entre dos números cualesquiera — ventas, población, puntuaciones — o para aplicar cualquier variación porcentual."]
 ],
 "mode_options": ["Hallar cambio porcentual (antes → después)", "Aplicar porcentaje (base + porcentaje)"],
 "labels": {"before": "Valor antes", "after": "Valor después", "base": "Valor base", "percent": "Porcentaje (%)"},
 "alert": "Introduce todos los valores necesarios.",
 "result_tpl": [
  "El cambio porcentual es {result}% ({dir}).",
  "Aplicar {percent}% a {base} da como resultado {result}."
 ],
 "dir_up": "aumento", "dir_down": "disminución", "dir_same": "sin cambio",
},
"tl": {
 "title": "Kalkulator ng Pagbabago sa Porsyento - Pagtaas o Pagbaba",
 "meta": "Ilagay ang halaga bago at pagkatapos para malaman ang porsyento ng pagtaas o pagbaba, o mag-apply ng porsyento sa isang simulang halaga para makuha ang resulta.",
 "card_desc": "Pumili ng mode at ilagay ang mga halaga para makuha agad ang pagbabago sa porsyento o ang resultang halaga.",
 "nav": "Pagbabago %",
 "home_desc": "Kalkulahin ang porsyento ng pagtaas o pagbaba sa pagitan ng dalawang halaga",
 "usage": [
  "Pumili ng mode (hanapin ang pagbabago sa porsyento o mag-apply ng porsyento).",
  "Sa \"hanapin ang pagbabago\", ilagay ang halaga bago at pagkatapos. Sa \"mag-apply ng porsyento\", ilagay ang batayang halaga at porsyento.",
  "I-click ang \"Kalkulahin\" para makita agad ang resulta."
 ],
 "method": "Ang pagbabago sa porsyento ay (pagkatapos − bago) ÷ bago × 100. Ang resultang halaga pagkatapos mag-apply ng porsyento ay batayang halaga × (1 + porsyento ÷ 100); negatibong porsyento ay nangangahulugang pagbaba.",
 "examples": [
  "Halimbawa 1 — Sa mode na \"hanapin ang pagbabago\", bago=200 at pagkatapos=250 ay nagbibigay ng +25% (25% na pagtaas).",
  "Halimbawa 2 — Sa mode na \"mag-apply ng porsyento\", batayang halaga=200 at porsyento=-15% ay nagbibigay ng resultang 170."
 ],
 "faq": [
  ["Paano malalaman kung pagtaas o pagbaba?", "Ang positibong resulta ay pagtaas, at ang negatibo ay pagbaba. Sa mode na \"mag-apply ng porsyento\", maglagay ng negatibong porsyento para sa pagbaba."],
  ["Ano ang pagkakaiba nito sa discount calculator?", "Ang discount calculator ay para sa diskwento sa presyo, habang ang kalkulator na ito ay pwede sa pagbabago sa porsyento sa pagitan ng anumang dalawang numero — benta, populasyon, marka — o sa pag-apply ng anumang pagbabago."]
 ],
 "mode_options": ["Hanapin ang pagbabago sa porsyento (bago → pagkatapos)", "Mag-apply ng porsyento (batayan + porsyento)"],
 "labels": {"before": "Halaga bago", "after": "Halaga pagkatapos", "base": "Batayang halaga", "percent": "Porsyento (%)"},
 "alert": "Pakilagay ang lahat ng kinakailangang halaga.",
 "result_tpl": [
  "Ang pagbabago sa porsyento ay {result}% ({dir}).",
  "Ang pag-apply ng {percent}% sa {base} ay nagbibigay ng {result}."
 ],
 "dir_up": "pagtaas", "dir_down": "pagbaba", "dir_same": "walang pagbabago",
},
"ar": {
 "title": "حاسبة نسبة التغير - زيادة أو انخفاض بالنسبة المئوية",
 "meta": "أدخل القيمة قبل وبعد لمعرفة نسبة الزيادة أو الانخفاض، أو طبّق نسبة مئوية على قيمة أساسية للحصول على النتيجة.",
 "card_desc": "اختر الوضع وأدخل القيم للحصول على نسبة التغير أو القيمة الناتجة فوراً.",
 "nav": "نسبة التغير",
 "home_desc": "احسب نسبة الزيادة أو الانخفاض بين قيمتين",
 "usage": [
  "اختر الوضع (إيجاد نسبة التغير أو تطبيق نسبة مئوية).",
  "في \"إيجاد التغير\" أدخل القيمة قبل وبعد. في \"تطبيق نسبة\" أدخل القيمة الأساسية والنسبة المئوية.",
  "اضغط \"احسب\" لتظهر النتيجة فوراً."
 ],
 "method": "نسبة التغير = (بعد − قبل) ÷ قبل × 100. القيمة الناتجة بعد تطبيق نسبة = القيمة الأساسية × (1 + النسبة ÷ 100)؛ النسبة السالبة تعني انخفاضاً.",
 "examples": [
  "مثال 1 — في وضع \"إيجاد التغير\" مع قبل=200 وبعد=250، النتيجة +25% (زيادة 25%).",
  "مثال 2 — في وضع \"تطبيق نسبة\" مع قيمة أساسية 200 ونسبة −15%، النتيجة 170."
 ],
 "faq": [
  ["كيف أميّز بين الزيادة والانخفاض؟", "النتيجة الموجبة تعني زيادة والسالبة تعني انخفاضاً. في وضع \"تطبيق نسبة\"، أدخل نسبة سالبة لحساب الانخفاض."],
  ["ما الفرق بينها وبين حاسبة الخصم؟", "حاسبة الخصم مخصصة لخصومات الأسعار، بينما تصلح هذه الحاسبة لنسبة التغير بين أي رقمين — المبيعات، عدد السكان، الدرجات — أو لتطبيق أي نسبة تغير."]
 ],
 "mode_options": ["إيجاد نسبة التغير (قبل → بعد)", "تطبيق نسبة (أساسية + نسبة)"],
 "labels": {"before": "القيمة قبل", "after": "القيمة بعد", "base": "القيمة الأساسية", "percent": "النسبة (%)"},
 "alert": "الرجاء إدخال جميع القيم المطلوبة.",
 "result_tpl": [
  "نسبة التغير هي {result}% ({dir}).",
  "تطبيق {percent}% على {base} يعطي {result}."
 ],
 "dir_up": "زيادة", "dir_down": "انخفاض", "dir_same": "لا تغيير",
},
"vi": {
 "title": "Máy Tính Tỷ Lệ Tăng/Giảm Phần Trăm",
 "meta": "Nhập giá trị trước và sau để biết tỷ lệ tăng hoặc giảm phần trăm, hoặc áp dụng phần trăm lên một giá trị ban đầu để có kết quả.",
 "card_desc": "Chọn chế độ và nhập giá trị để nhận ngay tỷ lệ thay đổi hoặc giá trị kết quả.",
 "nav": "Tỷ Lệ Thay Đổi",
 "home_desc": "Tính tỷ lệ tăng hoặc giảm phần trăm giữa hai giá trị",
 "usage": [
  "Chọn chế độ (tìm tỷ lệ thay đổi hoặc áp dụng phần trăm).",
  "Ở \"tìm tỷ lệ thay đổi\", nhập giá trị trước và sau. Ở \"áp dụng phần trăm\", nhập giá trị gốc và phần trăm.",
  "Nhấn \"Tính\" để xem kết quả ngay lập tức."
 ],
 "method": "Tỷ lệ thay đổi = (sau − trước) ÷ trước × 100. Giá trị kết quả sau khi áp dụng phần trăm = giá trị gốc × (1 + phần trăm ÷ 100); phần trăm âm nghĩa là giảm.",
 "examples": [
  "Ví dụ 1 — Ở chế độ \"tìm tỷ lệ thay đổi\", trước=200, sau=250, kết quả là +25% (tăng 25%).",
  "Ví dụ 2 — Ở chế độ \"áp dụng phần trăm\", giá trị gốc=200, phần trăm=-15%, kết quả là 170."
 ],
 "faq": [
  ["Làm sao phân biệt tăng và giảm?", "Kết quả dương là tăng, kết quả âm là giảm. Ở chế độ \"áp dụng phần trăm\", nhập số âm để tính mức giảm."],
  ["Khác gì với máy tính giảm giá?", "Máy tính giảm giá dành riêng cho việc giảm giá sản phẩm, còn máy tính này dùng được cho tỷ lệ thay đổi giữa hai con số bất kỳ — doanh số, dân số, điểm số — hoặc áp dụng bất kỳ mức thay đổi phần trăm nào."]
 ],
 "mode_options": ["Tìm tỷ lệ thay đổi (trước → sau)", "Áp dụng phần trăm (gốc + phần trăm)"],
 "labels": {"before": "Giá trị trước", "after": "Giá trị sau", "base": "Giá trị gốc", "percent": "Phần trăm (%)"},
 "alert": "Vui lòng nhập đầy đủ các giá trị cần thiết.",
 "result_tpl": [
  "Tỷ lệ thay đổi là {result}% ({dir}).",
  "Áp dụng {percent}% lên {base} cho kết quả {result}."
 ],
 "dir_up": "tăng", "dir_down": "giảm", "dir_same": "không đổi",
},
"de": {
 "title": "Prozentualer Änderungsrechner - Zunahme oder Abnahme in %",
 "meta": "Gib den Wert vorher und nachher ein, um den prozentualen Anstieg oder Rückgang zu berechnen, oder wende einen Prozentsatz auf einen Ausgangswert an.",
 "card_desc": "Wähle einen Modus und gib die Werte ein, um sofort die prozentuale Änderung oder das Ergebnis zu erhalten.",
 "nav": "Prozentuale Änderung",
 "home_desc": "Prozentualen Anstieg oder Rückgang zwischen zwei Werten berechnen",
 "usage": [
  "Wähle den Modus (prozentuale Änderung finden oder Prozentsatz anwenden).",
  "Bei \"Änderung finden\" gib den Wert vorher und nachher ein. Bei \"Prozentsatz anwenden\" gib den Basiswert und den Prozentsatz ein.",
  "Klicke auf \"Berechnen\", um das Ergebnis sofort zu sehen."
 ],
 "method": "Die prozentuale Änderung ist (nachher − vorher) ÷ vorher × 100. Der Ergebniswert nach Anwendung eines Prozentsatzes ist Basiswert × (1 + Prozentsatz ÷ 100); ein negativer Prozentsatz bedeutet eine Abnahme.",
 "examples": [
  "Beispiel 1 — Im Modus \"Änderung finden\" ergibt vorher=200 und nachher=250: +25 % (ein Anstieg von 25 %).",
  "Beispiel 2 — Im Modus \"Prozentsatz anwenden\" ergibt Basiswert=200 und Prozentsatz=-15 %: ein Ergebnis von 170."
 ],
 "faq": [
  ["Wie unterscheide ich Zunahme von Abnahme?", "Ein positives Ergebnis bedeutet eine Zunahme, ein negatives eine Abnahme. Gib im Modus \"Prozentsatz anwenden\" einen negativen Prozentsatz ein, um eine Abnahme zu berechnen."],
  ["Was ist der Unterschied zum Rabattrechner?", "Der Rabattrechner ist speziell für Preisrabatte gedacht, während dieser Rechner für die prozentuale Änderung zwischen beliebigen zwei Zahlen geeignet ist — Umsatz, Bevölkerung, Punktzahlen — oder um eine beliebige prozentuale Änderung anzuwenden."]
 ],
 "mode_options": ["Prozentuale Änderung finden (vorher → nachher)", "Prozentsatz anwenden (Basis + Prozentsatz)"],
 "labels": {"before": "Wert vorher", "after": "Wert nachher", "base": "Basiswert", "percent": "Prozentsatz (%)"},
 "alert": "Bitte gib alle erforderlichen Werte ein.",
 "result_tpl": [
  "Die prozentuale Änderung beträgt {result}% ({dir}).",
  "{percent}% auf {base} angewendet ergibt {result}."
 ],
 "dir_up": "Zunahme", "dir_down": "Abnahme", "dir_same": "keine Änderung",
},
"bn": {
 "title": "শতাংশ পরিবর্তন ক্যালকুলেটর - বৃদ্ধি বা হ্রাসের হার নির্ণয়",
 "meta": "আগের ও পরের মান দিন এবং জানুন কত শতাংশ বৃদ্ধি বা হ্রাস হয়েছে, অথবা কোনো মূল মানের ওপর একটি শতাংশ প্রয়োগ করে ফলাফল বের করুন।",
 "card_desc": "পদ্ধতি বেছে নিন এবং মান দিন, শতাংশ পরিবর্তন বা ফলাফল সাথে সাথে দেখতে পাবেন।",
 "nav": "শতাংশ পরিবর্তন",
 "home_desc": "দুটি মানের মধ্যে বৃদ্ধি বা হ্রাসের শতাংশ নির্ণয় করুন",
 "usage": [
  "পদ্ধতি বেছে নিন (শতাংশ পরিবর্তন নির্ণয় / শতাংশ প্রয়োগ করুন)।",
  "\"পরিবর্তন নির্ণয়\"-এ আগের ও পরের মান দিন; \"শতাংশ প্রয়োগ\"-এ মূল মান ও শতাংশ দিন।",
  "\"হিসাব করুন\" চাপলে ফলাফল সাথে সাথে দেখা যাবে।"
 ],
 "method": "শতাংশ পরিবর্তন = (পরের মান − আগের মান) ÷ আগের মান × ১০০। শতাংশ প্রয়োগের পর ফলাফল = মূল মান × (১ + শতাংশ ÷ ১০০); ঋণাত্মক শতাংশ মানে হ্রাস।",
 "examples": [
  "উদাহরণ ১ — \"পরিবর্তন নির্ণয়\" মোডে আগের ২০০, পরের ২৫০ হলে ফলাফল +২৫% (২৫% বৃদ্ধি)।",
  "উদাহরণ ২ — \"শতাংশ প্রয়োগ\" মোডে মূল মান ২০০, শতাংশ −১৫% হলে ফলাফল ১৭০।"
 ],
 "faq": [
  ["বৃদ্ধি ও হ্রাস কীভাবে বুঝব?", "ধনাত্মক ফলাফল বৃদ্ধি বোঝায়, ঋণাত্মক ফলাফল হ্রাস বোঝায়। \"শতাংশ প্রয়োগ\"-এ ঋণাত্মক শতাংশ দিলে হ্রাস হিসাব হবে।"],
  ["এটি ডিসকাউন্ট ক্যালকুলেটর থেকে কীভাবে আলাদা?", "ডিসকাউন্ট ক্যালকুলেটর শুধু দামের ছাড়ের জন্য, কিন্তু এই ক্যালকুলেটর বিক্রয়, জনসংখ্যা, স্কোরের মতো যেকোনো দুটি মানের পরিবর্তন বা যেকোনো শতাংশ প্রয়োগে ব্যবহার করা যায়।"]
 ],
 "mode_options": ["শতাংশ পরিবর্তন নির্ণয় (আগে → পরে)", "শতাংশ প্রয়োগ (মূল মান + শতাংশ)"],
 "labels": {"before": "আগের মান", "after": "পরের মান", "base": "মূল মান", "percent": "শতাংশ (%)"},
 "alert": "অনুগ্রহ করে প্রয়োজনীয় সব মান দিন।",
 "result_tpl": [
  "শতাংশ পরিবর্তন {result}% ({dir})।",
  "{base}-এ {percent}% প্রয়োগ করলে ফলাফল {result}।"
 ],
 "dir_up": "বৃদ্ধি", "dir_down": "হ্রাস", "dir_same": "কোনো পরিবর্তন নেই",
},
"tr": {
 "title": "Yüzde Değişim Hesaplayıcı - Artış veya Azalış Yüzdesi",
 "meta": "Önceki ve sonraki değeri girerek artış veya azalış yüzdesini bulun, ya da bir başlangıç değerine yüzde uygulayıp sonucu hesaplayın.",
 "card_desc": "Bir mod seçip değerleri girin, yüzde değişimi veya sonucu anında görün.",
 "nav": "Yüzde Değişim",
 "home_desc": "İki değer arasındaki artış veya azalış yüzdesini hesaplayın",
 "usage": [
  "Bir mod seçin (yüzde değişimi bulma veya yüzde uygulama).",
  "\"Değişimi bul\"da önceki ve sonraki değeri, \"yüzde uygula\"da başlangıç değerini ve yüzdeyi girin.",
  "Sonucu anında görmek için \"Hesapla\"ya tıklayın."
 ],
 "method": "Yüzde değişim = (sonraki − önceki) ÷ önceki × 100. Yüzde uygulandıktan sonraki sonuç = başlangıç değeri × (1 + yüzde ÷ 100); negatif yüzde azalış anlamına gelir.",
 "examples": [
  "Örnek 1 — \"Değişimi bul\" modunda önceki=200, sonraki=250 ise sonuç +%25'tir (%25 artış).",
  "Örnek 2 — \"Yüzde uygula\" modunda başlangıç=200, yüzde=-%15 ise sonuç 170'tir."
 ],
 "faq": [
  ["Artışı azalıştan nasıl ayırt ederim?", "Pozitif sonuç artışı, negatif sonuç azalışı gösterir. \"Yüzde uygula\" modunda azalış için negatif bir yüzde girin."],
  ["İndirim hesaplayıcıdan farkı nedir?", "İndirim hesaplayıcı özellikle fiyat indirimleri için tasarlanmıştır; bu hesaplayıcı ise satış, nüfus, puan gibi herhangi iki sayı arasındaki değişimi veya herhangi bir yüzde değişimin uygulanmasını hesaplar."]
 ],
 "mode_options": ["Yüzde değişimi bul (önceki → sonraki)", "Yüzde uygula (başlangıç + yüzde)"],
 "labels": {"before": "Önceki değer", "after": "Sonraki değer", "base": "Başlangıç değeri", "percent": "Yüzde (%)"},
 "alert": "Lütfen gerekli tüm değerleri girin.",
 "result_tpl": [
  "Yüzde değişim %{result} ({dir}).",
  "{base} üzerine %{percent} uygulanınca sonuç {result} olur."
 ],
 "dir_up": "artış", "dir_down": "azalış", "dir_same": "değişim yok",
},
"fa": {
 "title": "ماشین‌حساب تغییر درصد - افزایش یا کاهش درصدی",
 "meta": "مقدار قبل و بعد را وارد کنید تا درصد افزایش یا کاهش را بدانید، یا یک درصد را روی مقدار اولیه اعمال کنید تا نتیجه به‌دست آید.",
 "card_desc": "حالت را انتخاب کنید و مقادیر را وارد کنید تا درصد تغییر یا مقدار نتیجه فوراً نمایش داده شود.",
 "nav": "تغییر درصد",
 "home_desc": "محاسبه درصد افزایش یا کاهش بین دو مقدار",
 "usage": [
  "حالت را انتخاب کنید (یافتن درصد تغییر یا اعمال درصد).",
  "در «یافتن تغییر» مقدار قبل و بعد را وارد کنید؛ در «اعمال درصد» مقدار پایه و درصد را وارد کنید.",
  "برای دیدن نتیجه فوری روی «محاسبه» کلیک کنید."
 ],
 "method": "درصد تغییر = (بعد − قبل) ÷ قبل × ۱۰۰. مقدار نتیجه پس از اعمال درصد = مقدار پایه × (۱ + درصد ÷ ۱۰۰)؛ درصد منفی به معنی کاهش است.",
 "examples": [
  "مثال ۱ — در حالت «یافتن تغییر» با قبل=۲۰۰ و بعد=۲۵۰، نتیجه +۲۵٪ است (افزایش ۲۵٪).",
  "مثال ۲ — در حالت «اعمال درصد» با مقدار پایه ۲۰۰ و درصد −۱۵٪، نتیجه ۱۷۰ است."
 ],
 "faq": [
  ["چطور افزایش را از کاهش تشخیص دهم؟", "نتیجه مثبت یعنی افزایش و نتیجه منفی یعنی کاهش. در حالت «اعمال درصد»، برای محاسبه کاهش یک درصد منفی وارد کنید."],
  ["تفاوت آن با ماشین‌حساب تخفیف چیست؟", "ماشین‌حساب تخفیف مخصوص تخفیف قیمت است، اما این ماشین‌حساب برای محاسبه تغییر بین هر دو عدد — فروش، جمعیت، نمره — یا اعمال هر نوع تغییر درصدی مناسب است."]
 ],
 "mode_options": ["یافتن درصد تغییر (قبل → بعد)", "اعمال درصد (پایه + درصد)"],
 "labels": {"before": "مقدار قبل", "after": "مقدار بعد", "base": "مقدار پایه", "percent": "درصد (%)"},
 "alert": "لطفاً همه مقادیر لازم را وارد کنید.",
 "result_tpl": [
  "درصد تغییر {result}٪ است ({dir}).",
  "اعمال {percent}٪ روی {base} نتیجه {result} می‌دهد."
 ],
 "dir_up": "افزایش", "dir_down": "کاهش", "dir_same": "بدون تغییر",
},
"th": {
 "title": "เครื่องคำนวณอัตราการเปลี่ยนแปลงเปอร์เซ็นต์ - เพิ่มขึ้นหรือลดลง",
 "meta": "กรอกค่าก่อนและหลังเพื่อดูเปอร์เซ็นต์ที่เพิ่มขึ้นหรือลดลง หรือใส่เปอร์เซ็นต์ให้ค่าเริ่มต้นเพื่อดูผลลัพธ์",
 "card_desc": "เลือกโหมดแล้วกรอกค่าเพื่อดูอัตราการเปลี่ยนแปลงหรือผลลัพธ์ทันที",
 "nav": "อัตราเปลี่ยนแปลง %",
 "home_desc": "คำนวณเปอร์เซ็นต์ที่เพิ่มขึ้นหรือลดลงระหว่างสองค่า",
 "usage": [
  "เลือกโหมด (หาอัตราการเปลี่ยนแปลง หรือใส่เปอร์เซ็นต์)",
  "ในโหมด \"หาอัตราการเปลี่ยนแปลง\" กรอกค่าก่อนและหลัง ในโหมด \"ใส่เปอร์เซ็นต์\" กรอกค่าเริ่มต้นและเปอร์เซ็นต์",
  "กด \"คำนวณ\" เพื่อดูผลลัพธ์ทันที"
 ],
 "method": "อัตราการเปลี่ยนแปลง = (ค่าหลัง − ค่าก่อน) ÷ ค่าก่อน × 100 ผลลัพธ์หลังใส่เปอร์เซ็นต์ = ค่าเริ่มต้น × (1 + เปอร์เซ็นต์ ÷ 100) เปอร์เซ็นต์ติดลบหมายถึงลดลง",
 "examples": [
  "ตัวอย่างที่ 1 — โหมด \"หาอัตราการเปลี่ยนแปลง\" ก่อน=200, หลัง=250 ผลลัพธ์คือ +25% (เพิ่มขึ้น 25%)",
  "ตัวอย่างที่ 2 — โหมด \"ใส่เปอร์เซ็นต์\" ค่าเริ่มต้น=200, เปอร์เซ็นต์=-15% ผลลัพธ์คือ 170"
 ],
 "faq": [
  ["จะรู้ได้อย่างไรว่าเพิ่มขึ้นหรือลดลง?", "ผลลัพธ์เป็นบวกคือเพิ่มขึ้น เป็นลบคือลดลง ในโหมด \"ใส่เปอร์เซ็นต์\" กรอกค่าติดลบเพื่อคำนวณการลดลง"],
  ["ต่างจากเครื่องคำนวณส่วนลดอย่างไร?", "เครื่องคำนวณส่วนลดออกแบบมาสำหรับส่วนลดราคาโดยเฉพาะ ส่วนเครื่องนี้ใช้ได้กับอัตราการเปลี่ยนแปลงระหว่างตัวเลขสองจำนวนใดก็ได้ เช่น ยอดขาย ประชากร คะแนน หรือใส่การเปลี่ยนแปลงเปอร์เซ็นต์ใดก็ได้"]
 ],
 "mode_options": ["หาอัตราการเปลี่ยนแปลง (ก่อน → หลัง)", "ใส่เปอร์เซ็นต์ (ค่าเริ่มต้น + เปอร์เซ็นต์)"],
 "labels": {"before": "ค่าก่อน", "after": "ค่าหลัง", "base": "ค่าเริ่มต้น", "percent": "เปอร์เซ็นต์ (%)"},
 "alert": "กรุณากรอกค่าที่จำเป็นทั้งหมด",
 "result_tpl": [
  "อัตราการเปลี่ยนแปลงคือ {result}% ({dir})",
  "ใส่ {percent}% ให้ {base} ผลลัพธ์คือ {result}"
 ],
 "dir_up": "เพิ่มขึ้น", "dir_down": "ลดลง", "dir_same": "ไม่เปลี่ยนแปลง",
},
"fr": {
 "title": "Calculatrice de Variation en Pourcentage - Hausse ou Baisse",
 "meta": "Entrez la valeur avant et après pour connaître le pourcentage de hausse ou de baisse, ou appliquez un pourcentage à une valeur de départ pour obtenir le résultat.",
 "card_desc": "Choisissez un mode et entrez les valeurs pour obtenir instantanément la variation en pourcentage ou le résultat.",
 "nav": "Variation %",
 "home_desc": "Calculer le pourcentage de hausse ou de baisse entre deux valeurs",
 "usage": [
  "Choisissez le mode (trouver la variation en pourcentage ou appliquer un pourcentage).",
  "Dans \"trouver la variation\", entrez la valeur avant et après. Dans \"appliquer un pourcentage\", entrez la valeur de base et le pourcentage.",
  "Cliquez sur \"Calculer\" pour voir le résultat instantanément."
 ],
 "method": "La variation en pourcentage est (après − avant) ÷ avant × 100. Le résultat après application d'un pourcentage est base × (1 + pourcentage ÷ 100) ; un pourcentage négatif indique une baisse.",
 "examples": [
  "Exemple 1 — En mode \"trouver la variation\", avant=200 et après=250 donnent +25 % (une hausse de 25 %).",
  "Exemple 2 — En mode \"appliquer un pourcentage\", base=200 et pourcentage=-15 % donnent un résultat de 170."
 ],
 "faq": [
  ["Comment distinguer une hausse d'une baisse ?", "Un résultat positif indique une hausse, un résultat négatif indique une baisse. En mode \"appliquer un pourcentage\", entrez un pourcentage négatif pour calculer une baisse."],
  ["Quelle différence avec la calculatrice de remise ?", "La calculatrice de remise est conçue spécifiquement pour les remises de prix, tandis que celle-ci fonctionne pour la variation en pourcentage entre deux nombres quelconques — ventes, population, scores — ou pour appliquer n'importe quelle variation en pourcentage."]
 ],
 "mode_options": ["Trouver la variation en pourcentage (avant → après)", "Appliquer un pourcentage (base + pourcentage)"],
 "labels": {"before": "Valeur avant", "after": "Valeur après", "base": "Valeur de base", "percent": "Pourcentage (%)"},
 "alert": "Veuillez entrer toutes les valeurs nécessaires.",
 "result_tpl": [
  "La variation en pourcentage est de {result} % ({dir}).",
  "Appliquer {percent} % à {base} donne {result}."
 ],
 "dir_up": "hausse", "dir_down": "baisse", "dir_same": "aucun changement",
},
}
