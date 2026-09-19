// Content for the "splitbill" calculator (total + people + optional extra
// charge/discount -> per-person share), one entry per of the 19 site
// languages.
const SPLITBILL = {
"ko": {
 "title": "더치페이 계산기 - 영수증 1/N 나누기, 1인당 금액 계산",
 "meta": "총 금액과 인원 수를 입력하면 1인당 부담 금액을 바로 계산합니다. 추가 비용이나 할인이 있다면 선택적으로 반영할 수 있습니다.",
 "card_desc": "총 금액과 인원 수를 입력하세요. 추가 비용이나 할인은 선택 항목입니다.",
 "nav": "더치페이",
 "home_desc": "영수증 금액을 인원 수만큼 똑같이 나누어 1인당 금액 계산",
 "usage": [
  "결제할 총 금액을 입력합니다.",
  "함께 나눌 인원 수를 입력합니다.",
  "봉사료 같은 추가 비용이나 할인이 있다면 선택적으로 입력하고 \"계산하기\"를 누릅니다."
 ],
 "method": "나눌 금액은 총 금액에 추가 비용을 더하고 할인을 뺀 값입니다. 이 조정된 금액을 인원 수로 똑같이 나누어 1인당 금액을 구합니다.",
 "examples": [
  "예시 1 — 총 금액 120,000원, 3명, 추가 비용·할인 없음: 1인당 40,000원입니다.",
  "예시 2 — 총 금액 200,000원에 봉사료 10,000원 추가, 할인 20,000원, 5명이 나눌 때: 정산 금액은 190,000원, 1인당 38,000원입니다."
 ],
 "faq": [
  ["\"추가 비용\"에는 무엇을 넣나요?", "배달비 또는 봉사료처럼 원래 금액 위에 더 붙는 비용을 넣으면 됩니다. 없다면 비워두거나 0으로 두세요."],
  ["할인 금액이 총 금액보다 크면 어떻게 되나요?", "정산 금액은 0보다 작아질 수 없으므로, 할인이 총 금액과 추가 비용의 합보다 크더라도 정산 금액은 0으로 처리됩니다."],
  ["한 명이 더 많이 주문했을 때도 똑같이 나누나요?", "이 계산기는 항상 인원 수로 균등하게 나눕니다. 사람마다 주문한 금액이 다르다면 각자 주문한 금액을 따로 더해서 계산하세요."]
 ],
 "labels": {"total": "총 금액", "people": "인원 수", "extra": "추가 비용 (선택)", "discount": "할인 금액 (선택)"},
 "alert": "총 금액과 인원 수를 정확히 입력해 주세요 (인원 수는 1명 이상, 추가 비용·할인은 0 이상).",
 "result_tpl": {"per_tpl": "1인당 금액 ({people}명 기준)", "total_tpl": "정산 금액: {adjusted}", "detail_tpl": "(총액 {total} + 추가비용 {extra} − 할인 {discount})"},
},
"zh-cn": {
 "title": "AA制分账计算器 - 均摊账单,计算人均金额",
 "meta": "输入总金额和人数,即可立即计算人均应付金额;还可以选择性地加入额外费用或折扣。",
 "card_desc": "输入总金额和人数,额外费用或折扣为可选项。",
 "nav": "AA制分账",
 "home_desc": "将总金额平均分摊给所有人,计算人均应付金额",
 "usage": [
  "输入需要支付的总金额。",
  "输入一起分摊的人数。",
  "如有服务费等额外费用或折扣,可选择性输入,然后点击“计算”。"
 ],
 "method": "应分摊金额等于总金额加上额外费用,再减去折扣。将这个调整后的金额平均分给所有人,即为人均金额。",
 "examples": [
  "示例1 — 总金额120,3人分摊,没有额外费用或折扣: 人均40。",
  "示例2 — 总金额200,另加服务费10,折扣20,5人分摊: 应分摊金额为190,人均38。"
 ],
 "faq": [
  ["“额外费用”应该填什么?", "可以填写配送费、服务费等在原价之外额外收取的费用。如果没有,留空或填0即可。"],
  ["如果折扣金额比总金额还大会怎样?", "应分摊金额不会低于0,因此即使折扣超过总金额加额外费用之和,应分摊金额也会按0计算。"],
  ["如果有人点得比较多,还是平均分摊吗?", "本计算器始终按人数平均分摊。如果每个人的消费金额不同,请分别累加各自的金额后再计算。"]
 ],
 "labels": {"total": "总金额", "people": "人数", "extra": "额外费用(可选)", "discount": "折扣金额(可选)"},
 "alert": "请正确输入总金额和人数(人数至少为1,额外费用和折扣不能小于0)。",
 "result_tpl": {"per_tpl": "人均金额(按{people}人计算)", "total_tpl": "应分摊金额: {adjusted}", "detail_tpl": "(总额{total} + 额外费用{extra} − 折扣{discount})"},
},
"hi": {
 "title": "बिल बांटने वाला कैलकुलेटर - सबके बीच बराबर हिस्सा निकालें",
 "meta": "कुल राशि और लोगों की संख्या डालें और तुरंत प्रति व्यक्ति हिस्सा जानें; चाहें तो अतिरिक्त शुल्क या छूट भी जोड़ सकते हैं।",
 "card_desc": "कुल राशि और लोगों की संख्या डालें। अतिरिक्त शुल्क या छूट डालना वैकल्पिक है।",
 "nav": "बिल बांटें",
 "home_desc": "कुल बिल को सबके बीच बराबर बांटकर प्रति व्यक्ति हिस्सा निकालें",
 "usage": [
  "चुकाई जाने वाली कुल राशि डालें।",
  "बांटने वाले लोगों की संख्या डालें।",
  "अगर सर्विस चार्ज जैसा कोई अतिरिक्त शुल्क या छूट है तो डालें, फिर \"गणना करें\" दबाएं।"
 ],
 "method": "बांटी जाने वाली राशि कुल राशि में अतिरिक्त शुल्क जोड़कर और छूट घटाकर निकाली जाती है। इस समायोजित राशि को लोगों की संख्या से बराबर बांटा जाता है।",
 "examples": [
  "उदाहरण 1 — कुल 120, 3 लोग, कोई अतिरिक्त शुल्क या छूट नहीं: प्रति व्यक्ति 40।",
  "उदाहरण 2 — कुल 200 में 10 सर्विस चार्ज जुड़ा और 20 की छूट, 5 लोगों में बांटने पर: समायोजित राशि 190, प्रति व्यक्ति 38।"
 ],
 "faq": [
  ["\"अतिरिक्त शुल्क\" में क्या डालें?", "डिलीवरी फीस या सर्विस चार्ज जैसी कोई भी राशि जो मूल बिल के ऊपर जुड़ती है। न हो तो खाली छोड़ें या 0 रखें।"],
  ["अगर छूट कुल राशि से ज़्यादा हो तो क्या होगा?", "समायोजित राशि 0 से कम नहीं हो सकती, इसलिए छूट कुल राशि और अतिरिक्त शुल्क के जोड़ से ज़्यादा होने पर भी राशि 0 मानी जाएगी।"],
  ["अगर किसी ने ज़्यादा ऑर्डर किया हो तो भी बराबर बंटेगा?", "यह कैलकुलेटर हमेशा लोगों की संख्या से बराबर बांटता है। अलग-अलग राशि के लिए हर व्यक्ति का हिसाब अलग से जोड़ें।"]
 ],
 "labels": {"total": "कुल राशि", "people": "लोगों की संख्या", "extra": "अतिरिक्त शुल्क (वैकल्पिक)", "discount": "छूट (वैकल्पिक)"},
 "alert": "कृपया कुल राशि और लोगों की संख्या सही डालें (कम से कम 1 व्यक्ति, अतिरिक्त शुल्क और छूट 0 या उससे अधिक होने चाहिए)।",
 "result_tpl": {"per_tpl": "प्रति व्यक्ति ({people} लोग)", "total_tpl": "बांटी जाने वाली राशि: {adjusted}", "detail_tpl": "(कुल {total} + अतिरिक्त {extra} − छूट {discount})"},
},
"en": {
 "title": "Split Bill Calculator - Divide a Bill Evenly Among Everyone",
 "meta": "Enter the total bill, the number of people, and any extra charges or discounts to see exactly how much each person owes.",
 "card_desc": "Enter the total amount and number of people. Extra charges or a discount are optional.",
 "nav": "Split Bill",
 "home_desc": "Split a total bill evenly among any number of people",
 "usage": [
  "Enter the total bill amount.",
  "Enter the number of people sharing the bill.",
  "Optionally enter an extra charge (like a service fee) or a discount, then click \"Calculate\"."
 ],
 "method": "The amount to split is the total bill plus any extra charge, minus any discount. That adjusted total is then divided evenly by the number of people.",
 "examples": [
  "Example 1 — Total 120 split between 3 people with no extra charge or discount: each person pays 40.",
  "Example 2 — Total 200 with a 10 service charge and a 20 discount, split between 5 people: the adjusted total is 190, so each person pays 38."
 ],
 "faq": [
  ["What counts as an \"extra charge\"?", "Anything added on top of the bill, such as a delivery fee or service charge. Leave it blank or at 0 if there isn't one."],
  ["Can I enter a discount larger than the bill?", "No — the adjusted total can't go below 0, so a discount larger than the bill plus any extra charge is capped at 0."],
  ["Does this handle uneven splits, like one person ordering more?", "No, this calculator always splits evenly. For uneven amounts, add up each person's own items separately."]
 ],
 "labels": {"total": "Total bill", "people": "Number of people", "extra": "Extra charge (optional)", "discount": "Discount (optional)"},
 "alert": "Please enter a valid total and number of people (at least 1); extra charge and discount must be 0 or more.",
 "result_tpl": {"per_tpl": "Per person ({people} people)", "total_tpl": "Amount to split: {adjusted}", "detail_tpl": "({total} total + {extra} extra − {discount} discount)"},
},
"id": {
 "title": "Kalkulator Patungan - Bagi Rata Tagihan untuk Semua Orang",
 "meta": "Masukkan total tagihan, jumlah orang, serta biaya tambahan atau diskon (jika ada) untuk mengetahui berapa yang harus dibayar tiap orang.",
 "card_desc": "Masukkan total tagihan dan jumlah orang. Biaya tambahan atau diskon bersifat opsional.",
 "nav": "Kalkulator Patungan",
 "home_desc": "Bagi rata total tagihan ke semua orang yang patungan",
 "usage": [
  "Masukkan total tagihan yang harus dibayar.",
  "Masukkan jumlah orang yang patungan.",
  "Jika ada biaya tambahan (seperti biaya layanan) atau diskon, masukkan secara opsional, lalu klik \"Hitung\"."
 ],
 "method": "Jumlah yang dibagi adalah total tagihan ditambah biaya tambahan, dikurangi diskon. Total yang sudah disesuaikan ini kemudian dibagi rata sesuai jumlah orang.",
 "examples": [
  "Contoh 1 — Total 120 dibagi 3 orang tanpa biaya tambahan atau diskon: tiap orang membayar 40.",
  "Contoh 2 — Total 200 dengan biaya layanan 10 dan diskon 20, dibagi 5 orang: total yang disesuaikan adalah 190, jadi tiap orang membayar 38."
 ],
 "faq": [
  ["Apa saja yang termasuk \"biaya tambahan\"?", "Segala biaya yang ditambahkan di atas tagihan, seperti biaya antar atau biaya layanan. Kosongkan atau isi 0 jika tidak ada."],
  ["Bagaimana jika diskon lebih besar dari tagihan?", "Total yang disesuaikan tidak bisa kurang dari 0, jadi diskon yang lebih besar dari tagihan ditambah biaya tambahan akan dibatasi hingga 0."],
  ["Apakah ini bisa membagi tidak rata, misalnya ada yang pesan lebih banyak?", "Tidak, kalkulator ini selalu membagi rata. Untuk jumlah yang berbeda tiap orang, jumlahkan pesanan masing-masing secara terpisah."]
 ],
 "labels": {"total": "Total tagihan", "people": "Jumlah orang", "extra": "Biaya tambahan (opsional)", "discount": "Diskon (opsional)"},
 "alert": "Masukkan total dan jumlah orang dengan benar (minimal 1 orang; biaya tambahan dan diskon harus 0 atau lebih).",
 "result_tpl": {"per_tpl": "Per orang ({people} orang)", "total_tpl": "Jumlah yang dibagi: {adjusted}", "detail_tpl": "(total {total} + tambahan {extra} − diskon {discount})"},
},
"pt-br": {
 "title": "Calculadora de Divisão de Conta - Divida a Conta Igualmente Entre Todos",
 "meta": "Informe o valor total, o número de pessoas e eventuais taxas extras ou descontos para ver exatamente quanto cada pessoa deve pagar.",
 "card_desc": "Informe o valor total e o número de pessoas. Taxas extras ou descontos são opcionais.",
 "nav": "Dividir Conta",
 "home_desc": "Divida o valor total igualmente entre qualquer número de pessoas",
 "usage": [
  "Informe o valor total da conta.",
  "Informe o número de pessoas dividindo a conta.",
  "Se houver, informe uma taxa extra (como taxa de serviço) ou desconto, depois clique em \"Calcular\"."
 ],
 "method": "O valor a dividir é o total da conta mais qualquer taxa extra, menos qualquer desconto. Esse total ajustado é então dividido igualmente pelo número de pessoas.",
 "examples": [
  "Exemplo 1 — Total de 120 dividido entre 3 pessoas, sem taxa extra ou desconto: cada pessoa paga 40.",
  "Exemplo 2 — Total de 200 com taxa de serviço de 10 e desconto de 20, dividido entre 5 pessoas: o total ajustado é 190, então cada pessoa paga 38."
 ],
 "faq": [
  ["O que conta como \"taxa extra\"?", "Qualquer valor adicionado à conta, como taxa de entrega ou taxa de serviço. Deixe em branco ou 0 se não houver."],
  ["Posso colocar um desconto maior que a conta?", "Não — o total ajustado não pode ficar abaixo de 0, então um desconto maior que a conta mais a taxa extra é limitado a 0."],
  ["Isso divide de forma desigual, como quando uma pessoa pede mais?", "Não, esta calculadora sempre divide igualmente. Para valores diferentes por pessoa, some os itens de cada um separadamente."]
 ],
 "labels": {"total": "Valor total", "people": "Número de pessoas", "extra": "Taxa extra (opcional)", "discount": "Desconto (opcional)"},
 "alert": "Informe corretamente o total e o número de pessoas (no mínimo 1); a taxa extra e o desconto devem ser 0 ou mais.",
 "result_tpl": {"per_tpl": "Por pessoa ({people} pessoas)", "total_tpl": "Valor a dividir: {adjusted}", "detail_tpl": "({total} total + {extra} extra − {discount} desconto)"},
},
"ru": {
 "title": "Калькулятор деления счёта - разделите счёт поровну между всеми",
 "meta": "Введите общую сумму, количество человек и, при необходимости, дополнительные расходы или скидку, чтобы узнать точную долю каждого.",
 "card_desc": "Введите общую сумму и количество человек. Дополнительные расходы или скидка — по желанию.",
 "nav": "Разделить счёт",
 "home_desc": "Разделите общую сумму счёта поровну между любым числом человек",
 "usage": [
  "Введите общую сумму счёта.",
  "Введите количество человек, которые делят счёт.",
  "При желании укажите дополнительный расход (например, сервисный сбор) или скидку, затем нажмите «Рассчитать»."
 ],
 "method": "Сумма для деления — это общий счёт плюс дополнительные расходы минус скидка. Эта скорректированная сумма делится поровну на количество человек.",
 "examples": [
  "Пример 1 — сумма 120, делят 3 человека, без доплат и скидок: с каждого по 40.",
  "Пример 2 — сумма 200, сервисный сбор 10, скидка 20, делят 5 человек: скорректированная сумма 190, с каждого по 38."
 ],
 "faq": [
  ["Что считается «дополнительным расходом»?", "Любая сумма, добавленная к счёту, например плата за доставку или сервисный сбор. Если её нет, оставьте поле пустым или укажите 0."],
  ["Можно ли указать скидку больше суммы счёта?", "Нет — скорректированная сумма не может быть меньше 0, поэтому скидка больше счёта с доплатами будет ограничена нулём."],
  ["Учитывается ли неравное распределение, если кто-то заказал больше?", "Нет, этот калькулятор всегда делит поровну. Для разных сумм на человека считайте заказы каждого отдельно."]
 ],
 "labels": {"total": "Общая сумма", "people": "Количество человек", "extra": "Доплата (необязательно)", "discount": "Скидка (необязательно)"},
 "alert": "Пожалуйста, корректно введите сумму и количество человек (не менее 1); доплата и скидка должны быть 0 или больше.",
 "result_tpl": {"per_tpl": "На человека ({people} чел.)", "total_tpl": "Сумма к разделению: {adjusted}", "detail_tpl": "(сумма {total} + доплата {extra} − скидка {discount})"},
},
"ur": {
 "title": "بل تقسیم کیلکولیٹر - بل کو سب میں برابر تقسیم کریں",
 "meta": "کل رقم اور افراد کی تعداد درج کریں، اور اگر ہو تو اضافی چارج یا رعایت بھی شامل کریں تاکہ ہر شخص کا صحیح حصہ معلوم ہو۔",
 "card_desc": "کل رقم اور افراد کی تعداد درج کریں۔ اضافی چارج یا رعایت اختیاری ہیں۔",
 "nav": "بل تقسیم کریں",
 "home_desc": "کل بل کو کسی بھی تعداد کے افراد میں برابر تقسیم کریں",
 "usage": [
  "ادا کی جانے والی کل رقم درج کریں۔",
  "بل بانٹنے والے افراد کی تعداد درج کریں۔",
  "اگر سروس چارج جیسا کوئی اضافی چارج یا رعایت ہو تو درج کریں، پھر \"حساب لگائیں\" دبائیں۔"
 ],
 "method": "تقسیم کی جانے والی رقم کل رقم میں اضافی چارج جمع کرکے اور رعایت منہا کرکے نکالی جاتی ہے۔ اس ایڈجسٹ شدہ رقم کو افراد کی تعداد پر برابر تقسیم کیا جاتا ہے۔",
 "examples": [
  "مثال 1 — کل رقم 120، 3 افراد، کوئی اضافی چارج یا رعایت نہیں: فی کس 40۔",
  "مثال 2 — کل رقم 200 میں 10 سروس چارج شامل اور 20 رعایت، 5 افراد میں تقسیم: ایڈجسٹ شدہ رقم 190، فی کس 38۔"
 ],
 "faq": [
  ["\"اضافی چارج\" میں کیا شامل کریں؟", "ڈیلیوری فیس یا سروس چارج جیسی کوئی بھی رقم جو اصل بل کے اوپر شامل ہو۔ نہ ہو تو خالی چھوڑیں یا 0 رکھیں۔"],
  ["اگر رعایت کل رقم سے زیادہ ہو تو کیا ہوگا؟", "ایڈجسٹ شدہ رقم 0 سے کم نہیں ہو سکتی، اس لیے رعایت کل رقم اور اضافی چارج کے مجموعے سے زیادہ ہونے پر بھی رقم 0 شمار ہوگی۔"],
  ["اگر کسی نے زیادہ آرڈر کیا ہو تو بھی برابر تقسیم ہوگی؟", "یہ کیلکولیٹر ہمیشہ افراد کی تعداد پر برابر تقسیم کرتا ہے۔ مختلف رقم کے لیے ہر شخص کا آرڈر الگ سے جمع کریں۔"]
 ],
 "labels": {"total": "کل رقم", "people": "افراد کی تعداد", "extra": "اضافی چارج (اختیاری)", "discount": "رعایت (اختیاری)"},
 "alert": "براہ کرم کل رقم اور افراد کی تعداد درست درج کریں (کم از کم 1 شخص؛ اضافی چارج اور رعایت 0 یا اس سے زیادہ ہونی چاہیے)۔",
 "result_tpl": {"per_tpl": "فی کس ({people} افراد)", "total_tpl": "تقسیم ہونے والی رقم: {adjusted}", "detail_tpl": "(کل {total} + اضافی {extra} − رعایت {discount})"},
},
"es": {
 "title": "Calculadora para Dividir la Cuenta - Reparte el Gasto Entre Todos por Igual",
 "meta": "Ingresa el total, el número de personas y algún cargo extra o descuento para ver exactamente cuánto debe pagar cada quien.",
 "card_desc": "Ingresa el monto total y el número de personas. El cargo extra o el descuento son opcionales.",
 "nav": "Dividir Cuenta",
 "home_desc": "Reparte el total de la cuenta en partes iguales entre cualquier número de personas",
 "usage": [
  "Ingresa el monto total de la cuenta.",
  "Ingresa el número de personas que van a dividir la cuenta.",
  "Si aplica, ingresa un cargo extra (como propina de servicio) o un descuento, y presiona \"Calcular\"."
 ],
 "method": "El monto a repartir es el total más cualquier cargo extra, menos cualquier descuento. Ese total ajustado se divide en partes iguales entre el número de personas.",
 "examples": [
  "Ejemplo 1 — Total de 120 dividido entre 3 personas sin cargo extra ni descuento: cada quien paga 40.",
  "Ejemplo 2 — Total de 200 con un cargo de servicio de 10 y un descuento de 20, dividido entre 5 personas: el total ajustado es 190, así que cada quien paga 38."
 ],
 "faq": [
  ["¿Qué cuenta como \"cargo extra\"?", "Cualquier monto agregado a la cuenta, como una tarifa de entrega o de servicio. Déjalo en blanco o en 0 si no aplica."],
  ["¿Puedo poner un descuento mayor que la cuenta?", "No: el total ajustado no puede ser menor que 0, así que un descuento mayor que la cuenta más el cargo extra se limita a 0."],
  ["¿Esto reparte de forma desigual si alguien pidió más?", "No, esta calculadora siempre reparte en partes iguales. Para montos distintos por persona, suma lo de cada quien por separado."]
 ],
 "labels": {"total": "Monto total", "people": "Número de personas", "extra": "Cargo extra (opcional)", "discount": "Descuento (opcional)"},
 "alert": "Ingresa correctamente el total y el número de personas (mínimo 1); el cargo extra y el descuento deben ser 0 o más.",
 "result_tpl": {"per_tpl": "Por persona ({people} personas)", "total_tpl": "Monto a repartir: {adjusted}", "detail_tpl": "({total} total + {extra} extra − {discount} descuento)"},
},
"ja": {
 "title": "割り勘計算機 - 合計金額を人数で均等に分ける",
 "meta": "合計金額と人数を入力すると、1人あたりの支払額がすぐに分かります。追加費用や割引がある場合は任意で入力できます。",
 "card_desc": "合計金額と人数を入力してください。追加費用や割引の入力は任意です。",
 "nav": "割り勘計算機",
 "home_desc": "合計金額を人数で均等に分けて1人あたりの支払額を計算",
 "usage": [
  "支払う合計金額を入力します。",
  "割り勘する人数を入力します。",
  "サービス料などの追加費用や割引があれば任意で入力し、「計算する」を押します。"
 ],
 "method": "分割する金額は、合計金額に追加費用を足し、割引を引いた金額です。この調整後の金額を人数で均等に割ったものが1人あたりの金額です。",
 "examples": [
  "例1 — 合計120、3人、追加費用・割引なしの場合: 1人あたり40です。",
  "例2 — 合計200にサービス料10が加わり割引20がある場合、5人で割ると: 調整後の金額は190、1人あたり38です。"
 ],
 "faq": [
  ["「追加費用」には何を入力すればいいですか?", "配送料やサービス料など、元の金額に上乗せされる費用を入力します。なければ空欄または0のままで構いません。"],
  ["割引が合計金額より大きい場合はどうなりますか?", "調整後の金額は0未満にはならないため、割引が合計金額と追加費用の合計を超える場合は0として計算されます。"],
  ["1人だけ多く注文した場合も均等に分けますか?", "この計算機は常に人数で均等に分けます。人によって金額が違う場合は、各自の注文分を別々に合計してください。"]
 ],
 "labels": {"total": "合計金額", "people": "人数", "extra": "追加費用(任意)", "discount": "割引額(任意)"},
 "alert": "合計金額と人数を正しく入力してください(人数は1人以上、追加費用と割引は0以上)。",
 "result_tpl": {"per_tpl": "1人あたり({people}人で計算)", "total_tpl": "分割する金額: {adjusted}", "detail_tpl": "(合計{total} + 追加費用{extra} − 割引{discount})"},
},
"tl": {
 "title": "Calculator ng Paghahati ng Bill - Hatiin nang Pantay-pantay ang Bill",
 "meta": "Ilagay ang kabuuang bill, bilang ng tao, at anumang extra na singil o diskwento para malaman kung magkano ang dapat bayaran ng bawat isa.",
 "card_desc": "Ilagay ang kabuuang halaga at bilang ng tao. Opsyonal ang extra na singil o diskwento.",
 "nav": "Hatiin ang Bill",
 "home_desc": "Hatiin nang pantay-pantay ang kabuuang bill sa kahit anong bilang ng tao",
 "usage": [
  "Ilagay ang kabuuang halaga ng bill.",
  "Ilagay ang bilang ng taong maghahati sa bill.",
  "Kung may extra na singil (tulad ng service charge) o diskwento, ilagay ito nang opsyonal, pagkatapos i-click ang \"Kalkulahin\"."
 ],
 "method": "Ang hahatiin ay ang kabuuang bill kasama ang extra na singil, bawas ang diskwento. Ang na-adjust na kabuuang ito ay hahatiin nang pantay-pantay ayon sa bilang ng tao.",
 "examples": [
  "Halimbawa 1 — Kabuuang 120 hinati sa 3 tao, walang extra na singil o diskwento: magbabayad ang bawat isa ng 40.",
  "Halimbawa 2 — Kabuuang 200 may service charge na 10 at diskwentong 20, hinati sa 5 tao: ang na-adjust na kabuuan ay 190, kaya magbabayad ang bawat isa ng 38."
 ],
 "faq": [
  ["Ano ang kasama sa \"extra na singil\"?", "Anumang idinagdag sa bill, tulad ng delivery fee o service charge. Iwanang blangko o 0 kung wala."],
  ["Puwede bang mas malaki ang diskwento sa kabuuang bill?", "Hindi — hindi maaaring bumaba sa 0 ang na-adjust na kabuuan, kaya ang diskwentong mas malaki sa bill kasama ang extra na singil ay ilalagay na lang sa 0."],
  ["Kaya ba nito ang hindi pantay na paghahati, gaya ng mas maraming inorder ng isang tao?", "Hindi, palaging pantay-pantay ang paghahati ng calculator na ito. Para sa magkaibang halaga, idagdag nang hiwalay ang order ng bawat isa."]
 ],
 "labels": {"total": "Kabuuang bill", "people": "Bilang ng tao", "extra": "Extra na singil (opsyonal)", "discount": "Diskwento (opsyonal)"},
 "alert": "Pakilagay nang tama ang kabuuan at bilang ng tao (kahit isa man lang); dapat 0 o higit pa ang extra na singil at diskwento.",
 "result_tpl": {"per_tpl": "Bawat isa ({people} tao)", "total_tpl": "Hahatiin na halaga: {adjusted}", "detail_tpl": "({total} kabuuan + {extra} extra − {discount} diskwento)"},
},
"ar": {
 "title": "حاسبة تقسيم الفاتورة - قسّم الفاتورة بالتساوي بين الجميع",
 "meta": "أدخل المبلغ الإجمالي وعدد الأشخاص، مع أي رسوم إضافية أو خصم إن وجد، لمعرفة المبلغ الدقيق المستحق على كل شخص.",
 "card_desc": "أدخل المبلغ الإجمالي وعدد الأشخاص. الرسوم الإضافية أو الخصم اختياريان.",
 "nav": "تقسيم الفاتورة",
 "home_desc": "قسّم المبلغ الإجمالي بالتساوي بين أي عدد من الأشخاص",
 "usage": [
  "أدخل المبلغ الإجمالي للفاتورة.",
  "أدخل عدد الأشخاص الذين يتقاسمون الفاتورة.",
  "أدخل رسومًا إضافية (مثل رسوم الخدمة) أو خصمًا إن وجد، ثم اضغط \"احسب\"."
 ],
 "method": "المبلغ الذي سيُقسّم هو الإجمالي زائد أي رسوم إضافية، ناقص أي خصم. يُقسّم هذا المبلغ المعدَّل بالتساوي على عدد الأشخاص.",
 "examples": [
  "مثال 1 — إجمالي 120 مقسّم على 3 أشخاص بدون رسوم إضافية أو خصم: يدفع كل شخص 40.",
  "مثال 2 — إجمالي 200 مع رسوم خدمة 10 وخصم 20، مقسّم على 5 أشخاص: المبلغ المعدَّل 190، فيدفع كل شخص 38."
 ],
 "faq": [
  ["ما الذي يُحتسب \"رسومًا إضافية\"؟", "أي مبلغ يُضاف فوق الفاتورة، مثل رسوم التوصيل أو الخدمة. اتركه فارغًا أو 0 إذا لم يكن هناك رسوم."],
  ["هل يمكنني إدخال خصم أكبر من الفاتورة؟", "لا — لا يمكن أن يقل المبلغ المعدَّل عن 0، لذا فإن الخصم الأكبر من الفاتورة زائد الرسوم الإضافية يُحدَّد عند 0."],
  ["هل يدعم هذا التقسيم غير المتساوي، كأن يطلب أحدهم أكثر؟", "لا، تقسّم هذه الحاسبة دائمًا بالتساوي. للمبالغ المختلفة لكل شخص، اجمع طلب كل شخص على حدة."]
 ],
 "labels": {"total": "المبلغ الإجمالي", "people": "عدد الأشخاص", "extra": "رسوم إضافية (اختياري)", "discount": "خصم (اختياري)"},
 "alert": "يرجى إدخال الإجمالي وعدد الأشخاص بشكل صحيح (شخص واحد على الأقل)؛ يجب أن تكون الرسوم الإضافية والخصم 0 أو أكثر.",
 "result_tpl": {"per_tpl": "لكل شخص ({people} أشخاص)", "total_tpl": "المبلغ المطلوب تقسيمه: {adjusted}", "detail_tpl": "(الإجمالي {total} + الإضافي {extra} − الخصم {discount})"},
},
"vi": {
 "title": "Máy Tính Chia Hóa Đơn - Chia Đều Hóa Đơn Cho Mọi Người",
 "meta": "Nhập tổng số tiền, số người, và phí phát sinh hoặc giảm giá (nếu có) để biết chính xác mỗi người phải trả bao nhiêu.",
 "card_desc": "Nhập tổng số tiền và số người. Phí phát sinh hoặc giảm giá là tùy chọn.",
 "nav": "Chia Hóa Đơn",
 "home_desc": "Chia đều tổng hóa đơn cho bất kỳ số người nào",
 "usage": [
  "Nhập tổng số tiền cần thanh toán.",
  "Nhập số người cùng chia hóa đơn.",
  "Nếu có, nhập phí phát sinh (như phí dịch vụ) hoặc giảm giá, rồi bấm \"Tính\"."
 ],
 "method": "Số tiền cần chia bằng tổng hóa đơn cộng phí phát sinh, trừ giảm giá. Số tiền đã điều chỉnh này sau đó được chia đều cho số người.",
 "examples": [
  "Ví dụ 1 — Tổng 120 chia cho 3 người, không phí phát sinh hay giảm giá: mỗi người trả 40.",
  "Ví dụ 2 — Tổng 200 cộng phí dịch vụ 10, giảm giá 20, chia cho 5 người: số tiền đã điều chỉnh là 190, mỗi người trả 38."
 ],
 "faq": [
  ["\"Phí phát sinh\" gồm những gì?", "Bất kỳ khoản nào cộng thêm vào hóa đơn, như phí giao hàng hoặc phí dịch vụ. Để trống hoặc để 0 nếu không có."],
  ["Tôi có thể nhập giảm giá lớn hơn hóa đơn không?", "Không — số tiền đã điều chỉnh không thể nhỏ hơn 0, nên giảm giá lớn hơn hóa đơn cộng phí phát sinh sẽ được giới hạn ở mức 0."],
  ["Máy này có chia không đều, như khi một người gọi nhiều hơn không?", "Không, máy tính này luôn chia đều. Với số tiền khác nhau cho từng người, hãy cộng riêng phần của mỗi người."]
 ],
 "labels": {"total": "Tổng số tiền", "people": "Số người", "extra": "Phí phát sinh (tùy chọn)", "discount": "Giảm giá (tùy chọn)"},
 "alert": "Vui lòng nhập đúng tổng số tiền và số người (ít nhất 1 người); phí phát sinh và giảm giá phải từ 0 trở lên.",
 "result_tpl": {"per_tpl": "Mỗi người ({people} người)", "total_tpl": "Số tiền cần chia: {adjusted}", "detail_tpl": "(tổng {total} + phí phát sinh {extra} − giảm giá {discount})"},
},
"de": {
 "title": "Rechnungsteiler - Rechnung gleichmäßig unter allen aufteilen",
 "meta": "Gesamtbetrag, Personenzahl sowie eventuelle Zusatzkosten oder Rabatte eingeben, um genau zu sehen, wie viel jede Person zahlen muss.",
 "card_desc": "Gesamtbetrag und Personenzahl eingeben. Zusatzkosten oder Rabatt sind optional.",
 "nav": "Rechnung teilen",
 "home_desc": "Gesamtrechnung gleichmäßig auf beliebig viele Personen aufteilen",
 "usage": [
  "Gesamtbetrag der Rechnung eingeben.",
  "Anzahl der Personen eingeben, die sich die Rechnung teilen.",
  "Optional Zusatzkosten (z. B. Servicegebühr) oder einen Rabatt eingeben, dann auf \"Berechnen\" klicken."
 ],
 "method": "Der aufzuteilende Betrag ist die Gesamtrechnung plus eventuelle Zusatzkosten, minus eines eventuellen Rabatts. Dieser angepasste Betrag wird dann gleichmäßig durch die Personenzahl geteilt.",
 "examples": [
  "Beispiel 1 — Gesamtbetrag 120, aufgeteilt auf 3 Personen ohne Zusatzkosten oder Rabatt: jede Person zahlt 40.",
  "Beispiel 2 — Gesamtbetrag 200 mit 10 Servicegebühr und 20 Rabatt, aufgeteilt auf 5 Personen: der angepasste Betrag ist 190, also zahlt jede Person 38."
 ],
 "faq": [
  ["Was zählt als \"Zusatzkosten\"?", "Alles, was zusätzlich zur Rechnung anfällt, etwa eine Liefer- oder Servicegebühr. Leer lassen oder 0 eingeben, wenn es keine gibt."],
  ["Kann ich einen Rabatt eingeben, der größer als die Rechnung ist?", "Nein — der angepasste Betrag kann nicht unter 0 fallen, daher wird ein Rabatt, der größer als Rechnung plus Zusatzkosten ist, auf 0 begrenzt."],
  ["Werden ungleiche Aufteilungen berücksichtigt, wenn jemand mehr bestellt hat?", "Nein, dieser Rechner teilt immer gleichmäßig auf. Bei unterschiedlichen Beträgen pro Person addieren Sie die Bestellungen jeder Person separat."]
 ],
 "labels": {"total": "Gesamtbetrag", "people": "Anzahl der Personen", "extra": "Zusatzkosten (optional)", "discount": "Rabatt (optional)"},
 "alert": "Bitte Gesamtbetrag und Personenzahl korrekt eingeben (mindestens 1 Person); Zusatzkosten und Rabatt müssen 0 oder mehr sein.",
 "result_tpl": {"per_tpl": "Pro Person ({people} Personen)", "total_tpl": "Aufzuteilender Betrag: {adjusted}", "detail_tpl": "({total} gesamt + {extra} zusätzlich − {discount} Rabatt)"},
},
"bn": {
 "title": "বিল ভাগ ক্যালকুলেটর - সবার মধ্যে সমানভাবে বিল ভাগ করুন",
 "meta": "মোট পরিমাণ, লোকসংখ্যা এবং প্রয়োজনে অতিরিক্ত খরচ বা ছাড় দিন, তাহলে প্রতিটি ব্যক্তির সঠিক হিসাব পেয়ে যাবেন।",
 "card_desc": "মোট পরিমাণ ও লোকসংখ্যা দিন। অতিরিক্ত খরচ বা ছাড় ঐচ্ছিক।",
 "nav": "বিল ভাগ করুন",
 "home_desc": "মোট বিল যেকোনো সংখ্যক মানুষের মধ্যে সমানভাবে ভাগ করুন",
 "usage": [
  "পরিশোধযোগ্য মোট পরিমাণ দিন।",
  "বিল ভাগ করে নেওয়া লোকসংখ্যা দিন।",
  "সার্ভিস চার্জের মতো কোনো অতিরিক্ত খরচ বা ছাড় থাকলে দিন, তারপর \"হিসাব করুন\" চাপুন।"
 ],
 "method": "ভাগ করার পরিমাণ হলো মোট পরিমাণের সাথে অতিরিক্ত খরচ যোগ করে ছাড় বাদ দেওয়া মান। এই সমন্বিত পরিমাণকে লোকসংখ্যা দিয়ে সমানভাবে ভাগ করা হয়।",
 "examples": [
  "উদাহরণ ১ — মোট ১২০, ৩ জন, কোনো অতিরিক্ত খরচ বা ছাড় নেই: জনপ্রতি ৪০।",
  "উদাহরণ ২ — মোট ২০০-তে ১০ সার্ভিস চার্জ যোগ ও ২০ ছাড়, ৫ জনে ভাগ করলে: সমন্বিত পরিমাণ ১৯০, জনপ্রতি ৩৮।"
 ],
 "faq": [
  ["\"অতিরিক্ত খরচ\"-এ কী দেব?", "ডেলিভারি ফি বা সার্ভিস চার্জের মতো মূল বিলের উপরে যোগ হওয়া যেকোনো খরচ। না থাকলে খালি রাখুন বা ০ দিন।"],
  ["ছাড় মোট পরিমাণের চেয়ে বেশি হলে কী হবে?", "সমন্বিত পরিমাণ ০-এর কম হতে পারে না, তাই ছাড় মোট পরিমাণ ও অতিরিক্ত খরচের যোগফলের চেয়ে বেশি হলেও পরিমাণ ০ ধরা হবে।"],
  ["কেউ বেশি অর্ডার করলেও কি সমান ভাগ হয়?", "এই ক্যালকুলেটর সবসময় লোকসংখ্যা অনুযায়ী সমানভাবে ভাগ করে। আলাদা পরিমাণের জন্য প্রত্যেকের অর্ডার আলাদাভাবে যোগ করুন।"]
 ],
 "labels": {"total": "মোট পরিমাণ", "people": "লোকসংখ্যা", "extra": "অতিরিক্ত খরচ (ঐচ্ছিক)", "discount": "ছাড় (ঐচ্ছিক)"},
 "alert": "অনুগ্রহ করে মোট পরিমাণ ও লোকসংখ্যা সঠিকভাবে দিন (কমপক্ষে ১ জন); অতিরিক্ত খরচ ও ছাড় ০ বা তার বেশি হতে হবে।",
 "result_tpl": {"per_tpl": "জনপ্রতি ({people} জন)", "total_tpl": "ভাগ করার পরিমাণ: {adjusted}", "detail_tpl": "(মোট {total} + অতিরিক্ত {extra} − ছাড় {discount})"},
},
"tr": {
 "title": "Hesap Bölüştürme Hesaplayıcı - Hesabı Herkese Eşit Bölün",
 "meta": "Toplam tutarı, kişi sayısını ve varsa ekstra ücret ya da indirimi girerek her kişinin ne kadar ödeyeceğini tam olarak öğrenin.",
 "card_desc": "Toplam tutarı ve kişi sayısını girin. Ekstra ücret veya indirim isteğe bağlıdır.",
 "nav": "Hesap Bölüştür",
 "home_desc": "Toplam hesabı istediğiniz sayıda kişiye eşit olarak bölün",
 "usage": [
  "Ödenecek toplam tutarı girin.",
  "Hesabı paylaşan kişi sayısını girin.",
  "Varsa servis ücreti gibi bir ekstra ücret veya indirim girin, ardından \"Hesapla\"ya tıklayın."
 ],
 "method": "Bölünecek tutar, toplam hesaba ekstra ücret eklenip indirim çıkarılarak bulunur. Bu düzeltilmiş tutar, kişi sayısına eşit olarak bölünür.",
 "examples": [
  "Örnek 1 — Toplam 120, 3 kişiye bölünürse, ekstra ücret veya indirim yoksa: kişi başı 40 öder.",
  "Örnek 2 — Toplam 200'e 10 servis ücreti eklenip 20 indirim uygulanır ve 5 kişiye bölünürse: düzeltilmiş tutar 190 olur, kişi başı 38 öder."
 ],
 "faq": [
  ["\"Ekstra ücret\" olarak ne sayılır?", "Teslimat ücreti veya servis ücreti gibi hesaba eklenen her şey. Yoksa boş bırakın veya 0 girin."],
  ["Hesaptan büyük bir indirim girebilir miyim?", "Hayır — düzeltilmiş tutar 0'ın altına inemez, bu yüzden hesap artı ekstra ücretten büyük bir indirim 0 ile sınırlandırılır."],
  ["Birinin daha fazla sipariş vermesi gibi eşit olmayan bölüşümü destekler mi?", "Hayır, bu hesaplayıcı her zaman eşit böler. Kişi başına farklı tutarlar için her kişinin siparişini ayrı ayrı toplayın."]
 ],
 "labels": {"total": "Toplam tutar", "people": "Kişi sayısı", "extra": "Ekstra ücret (isteğe bağlı)", "discount": "İndirim (isteğe bağlı)"},
 "alert": "Lütfen toplamı ve kişi sayısını doğru girin (en az 1 kişi); ekstra ücret ve indirim 0 veya daha büyük olmalıdır.",
 "result_tpl": {"per_tpl": "Kişi başı ({people} kişi)", "total_tpl": "Bölünecek tutar: {adjusted}", "detail_tpl": "({total} toplam + {extra} ekstra − {discount} indirim)"},
},
"fa": {
 "title": "ماشین‌حساب تقسیم صورت‌حساب - صورت‌حساب را بین همه مساوی تقسیم کنید",
 "meta": "مبلغ کل، تعداد نفرات و در صورت وجود هزینه اضافی یا تخفیف را وارد کنید تا سهم دقیق هر نفر مشخص شود.",
 "card_desc": "مبلغ کل و تعداد نفرات را وارد کنید. هزینه اضافی یا تخفیف اختیاری است.",
 "nav": "تقسیم صورت‌حساب",
 "home_desc": "مبلغ کل را بین هر تعداد نفر به‌طور مساوی تقسیم کنید",
 "usage": [
  "مبلغ کل قابل پرداخت را وارد کنید.",
  "تعداد نفراتی که صورت‌حساب را تقسیم می‌کنند وارد کنید.",
  "در صورت وجود هزینه اضافی (مانند هزینه خدمات) یا تخفیف، آن را وارد کرده و روی «محاسبه» بزنید."
 ],
 "method": "مبلغ قابل تقسیم برابر است با مبلغ کل به‌علاوه هزینه اضافی، منهای تخفیف. این مبلغ تعدیل‌شده سپس به‌طور مساوی بین تعداد نفرات تقسیم می‌شود.",
 "examples": [
  "مثال ۱ — مبلغ کل ۱۲۰ بین ۳ نفر بدون هزینه اضافی یا تخفیف: سهم هر نفر ۴۰ می‌شود.",
  "مثال ۲ — مبلغ کل ۲۰۰ به‌همراه ۱۰ هزینه خدمات و ۲۰ تخفیف، بین ۵ نفر تقسیم شود: مبلغ تعدیل‌شده ۱۹۰ و سهم هر نفر ۳۸ می‌شود."
 ],
 "faq": [
  ["«هزینه اضافی» شامل چه مواردی است؟", "هر مبلغی که به صورت‌حساب اصلی اضافه می‌شود، مانند هزینه ارسال یا هزینه خدمات. اگر وجود ندارد، خالی بگذارید یا صفر وارد کنید."],
  ["می‌توانم تخفیفی بزرگ‌تر از مبلغ کل وارد کنم؟", "خیر — مبلغ تعدیل‌شده نمی‌تواند کمتر از صفر شود، بنابراین تخفیف بزرگ‌تر از مجموع صورت‌حساب و هزینه اضافی در صفر محدود می‌شود."],
  ["اگر یک نفر سفارش بیشتری داده باشد، تقسیم نامساوی امکان‌پذیر است؟", "خیر، این ماشین‌حساب همیشه به‌طور مساوی تقسیم می‌کند. برای مبالغ متفاوت هر نفر، سفارش هر شخص را جداگانه جمع بزنید."]
 ],
 "labels": {"total": "مبلغ کل", "people": "تعداد نفرات", "extra": "هزینه اضافی (اختیاری)", "discount": "تخفیف (اختیاری)"},
 "alert": "لطفاً مبلغ کل و تعداد نفرات را به‌درستی وارد کنید (حداقل ۱ نفر)؛ هزینه اضافی و تخفیف باید ۰ یا بیشتر باشند.",
 "result_tpl": {"per_tpl": "سهم هر نفر ({people} نفر)", "total_tpl": "مبلغ قابل تقسیم: {adjusted}", "detail_tpl": "(کل {total} + اضافی {extra} − تخفیف {discount})"},
},
"th": {
 "title": "เครื่องคำนวณหารบิล - หารบิลเท่า ๆ กันให้ทุกคน",
 "meta": "กรอกยอดรวม จำนวนคน และค่าใช้จ่ายเพิ่มเติมหรือส่วนลด (ถ้ามี) เพื่อดูว่าแต่ละคนต้องจ่ายเท่าไรพอดี",
 "card_desc": "กรอกยอดรวมและจำนวนคน ค่าใช้จ่ายเพิ่มเติมหรือส่วนลดเป็นตัวเลือกเสริม",
 "nav": "หารบิล",
 "home_desc": "หารยอดบิลรวมให้เท่ากันตามจำนวนคนเท่าใดก็ได้",
 "usage": [
  "กรอกยอดรวมที่ต้องจ่าย",
  "กรอกจำนวนคนที่ร่วมหารบิล",
  "หากมีค่าใช้จ่ายเพิ่มเติม เช่น ค่าบริการ หรือส่วนลด ให้กรอก แล้วกด \"คำนวณ\""
 ],
 "method": "ยอดที่จะหารคือยอดรวมบวกค่าใช้จ่ายเพิ่มเติม ลบด้วยส่วนลด จากนั้นยอดที่ปรับแล้วนี้จะถูกหารเท่า ๆ กันตามจำนวนคน",
 "examples": [
  "ตัวอย่าง 1 — ยอดรวม 120 หาร 3 คน ไม่มีค่าใช้จ่ายเพิ่มเติมหรือส่วนลด: แต่ละคนจ่าย 40",
  "ตัวอย่าง 2 — ยอดรวม 200 บวกค่าบริการ 10 หักส่วนลด 20 หาร 5 คน: ยอดที่ปรับแล้วคือ 190 แต่ละคนจ่าย 38"
 ],
 "faq": [
  ["\"ค่าใช้จ่ายเพิ่มเติม\" คืออะไรบ้าง?", "ค่าใช้จ่ายใด ๆ ที่เพิ่มเข้ามานอกเหนือจากบิล เช่น ค่าส่งหรือค่าบริการ หากไม่มีให้เว้นว่างหรือใส่ 0"],
  ["ใส่ส่วนลดมากกว่ายอดรวมได้ไหม?", "ไม่ได้ เพราะยอดที่ปรับแล้วจะต่ำกว่า 0 ไม่ได้ ดังนั้นส่วนลดที่มากกว่ายอดรวมบวกค่าใช้จ่ายเพิ่มเติมจะถูกจำกัดไว้ที่ 0"],
  ["ถ้ามีคนสั่งมากกว่าคนอื่น หารไม่เท่ากันได้ไหม?", "ไม่ได้ เครื่องคำนวณนี้หารเท่า ๆ กันเสมอ หากยอดของแต่ละคนไม่เท่ากัน ให้รวมยอดของแต่ละคนแยกกันเอง"]
 ],
 "labels": {"total": "ยอดรวม", "people": "จำนวนคน", "extra": "ค่าใช้จ่ายเพิ่มเติม (ไม่บังคับ)", "discount": "ส่วนลด (ไม่บังคับ)"},
 "alert": "กรุณากรอกยอดรวมและจำนวนคนให้ถูกต้อง (อย่างน้อย 1 คน) ค่าใช้จ่ายเพิ่มเติมและส่วนลดต้องเป็น 0 หรือมากกว่า",
 "result_tpl": {"per_tpl": "ต่อคน ({people} คน)", "total_tpl": "ยอดที่จะหาร: {adjusted}", "detail_tpl": "(ยอดรวม {total} + เพิ่มเติม {extra} − ส่วนลด {discount})"},
},
"fr": {
 "title": "Calculateur de Partage d'Addition - Divisez l'Addition Équitablement",
 "meta": "Entrez le montant total, le nombre de personnes et d'éventuels frais supplémentaires ou remises pour savoir exactement combien chacun doit payer.",
 "card_desc": "Entrez le montant total et le nombre de personnes. Les frais supplémentaires ou la remise sont facultatifs.",
 "nav": "Partager l'Addition",
 "home_desc": "Divisez le montant total équitablement entre n'importe quel nombre de personnes",
 "usage": [
  "Entrez le montant total de l'addition.",
  "Entrez le nombre de personnes qui partagent l'addition.",
  "Entrez éventuellement des frais supplémentaires (comme des frais de service) ou une remise, puis cliquez sur \"Calculer\"."
 ],
 "method": "Le montant à partager est le total plus d'éventuels frais supplémentaires, moins une éventuelle remise. Ce total ajusté est ensuite divisé également par le nombre de personnes.",
 "examples": [
  "Exemple 1 — Total de 120 partagé entre 3 personnes sans frais ni remise : chaque personne paie 40.",
  "Exemple 2 — Total de 200 avec des frais de service de 10 et une remise de 20, partagé entre 5 personnes : le total ajusté est de 190, donc chaque personne paie 38."
 ],
 "faq": [
  ["Qu'est-ce qui compte comme \"frais supplémentaires\" ?", "Tout montant ajouté à l'addition, comme des frais de livraison ou de service. Laissez vide ou à 0 s'il n'y en a pas."],
  ["Puis-je entrer une remise supérieure à l'addition ?", "Non — le total ajusté ne peut pas être inférieur à 0, donc une remise supérieure à l'addition plus les frais supplémentaires est plafonnée à 0."],
  ["Cela gère-t-il un partage inégal, par exemple si une personne a commandé plus ?", "Non, ce calculateur partage toujours équitablement. Pour des montants différents par personne, additionnez séparément la commande de chacun."]
 ],
 "labels": {"total": "Montant total", "people": "Nombre de personnes", "extra": "Frais supplémentaires (facultatif)", "discount": "Remise (facultative)"},
 "alert": "Veuillez entrer correctement le total et le nombre de personnes (au moins 1) ; les frais supplémentaires et la remise doivent être de 0 ou plus.",
 "result_tpl": {"per_tpl": "Par personne ({people} personnes)", "total_tpl": "Montant à partager : {adjusted}", "detail_tpl": "({total} total + {extra} supplément − {discount} remise)"},
},
};
module.exports = SPLITBILL;
