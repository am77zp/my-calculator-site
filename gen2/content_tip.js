// Content for the "tip" calculator (bill amount + tip % + people -> tip
// amount, total with tip, per-person share), one entry per of the 19 site
// languages. Mirrors the structure of gen/content_*.py.
const TIP = {
"ko": {
 "title": "팁 계산기 - 팁 금액과 1인당 금액 계산",
 "meta": "음식값과 팁 비율, 인원 수를 입력하면 팁 금액, 팁 포함 총액, 1인당 부담 금액을 한 번에 계산합니다.",
 "card_desc": "음식값을 입력하고 팁 비율을 고르거나 직접 입력한 뒤 인원 수를 넣으면 바로 계산됩니다.",
 "nav": "팁 계산기",
 "home_desc": "팁 금액, 팁 포함 총액, 1인당 부담 금액 계산",
 "usage": [
  "팁을 포함하기 전 음식값을 입력합니다.",
  "팁 비율을 직접 입력하거나 자주 쓰는 비율(10%, 15%, 18%, 20%) 버튼을 눌러 채웁니다.",
  "함께 계산할 인원 수를 입력하고 \"계산하기\"를 누릅니다."
 ],
 "method": "팁 금액은 음식값에 팁 비율을 곱해서 구합니다. 팁 포함 총액은 음식값과 팁 금액을 더한 값이고, 1인당 금액은 그 총액을 인원 수로 똑같이 나눈 값입니다.",
 "examples": [
  "예시 1 — 음식값 80,000원, 팁 18%, 1명일 때: 팁은 14,400원, 총액은 94,400원입니다.",
  "예시 2 — 음식값 150,000원, 팁 20%, 4명이 나눌 때: 팁은 30,000원, 총액은 180,000원, 1인당 45,000원입니다."
 ],
 "faq": [
  ["빠른 선택 버튼에 없는 비율은 어떻게 입력하나요?", "팁 비율 칸에 원하는 숫자를 직접 입력하면 됩니다. 빠른 선택 버튼은 자주 쓰는 비율을 채워주는 단축 기능일 뿐입니다."],
  ["인원마다 먹은 양이 다른데 팁도 똑같이 나누나요?", "이 계산기는 전체 금액을 인원 수로 균등하게 나누는 방식입니다. 각자 주문한 만큼 따로 계산하고 싶다면 개인별로 이 계산기를 각각 사용하세요."],
  ["인원 수를 1명으로 두면 어떻게 되나요?", "인원 수가 1명이면 1인당 금액이 팁 포함 총액과 같아져서, 혼자 결제할 때 팁 포함 최종 금액을 바로 확인할 수 있습니다."]
 ],
 "labels": {"bill": "음식값", "people": "인원 수", "percent": "팁 비율 (%)", "presets": "빠른 선택"},
 "alert": "음식값, 팁 비율, 인원 수를 정확히 입력해 주세요 (인원 수는 1명 이상).",
 "result_tpl": {"per_tpl": "1인당 금액 ({people}명 기준)", "tip_tpl": "팁 금액: {tip} (팁 {percent}%)", "total_tpl": "팁 포함 총액: {total}"},
},
"zh-cn": {
 "title": "小费计算器 - 计算小费金额和人均应付金额",
 "meta": "输入账单金额、小费比例和人数,即可一次性算出小费金额、含小费总额和人均应付金额。",
 "card_desc": "输入账单金额,选择或直接输入小费比例,再输入人数即可立即计算。",
 "nav": "小费计算器",
 "home_desc": "计算小费金额、含小费总额和人均应付金额",
 "usage": [
  "输入未含小费的账单金额。",
  "直接输入小费比例,或点击常用比例按钮(10%、15%、18%、20%)。",
  "输入一起分摊的人数,然后点击“计算”。"
 ],
 "method": "小费金额等于账单金额乘以小费比例。总额是账单金额加上小费金额,人均金额则是把总额平均分给所有人。",
 "examples": [
  "示例1 — 账单80,小费18%,1人: 小费为14.4,总额为94.4。",
  "示例2 — 账单150,小费20%,4人平摊: 小费为30,总额为180,每人应付45。"
 ],
 "faq": [
  ["常用比例按钮里没有我想要的比例怎么办?", "可以直接在小费比例栏输入任意数字,常用比例按钮只是快速填入常见数值的快捷方式。"],
  ["每个人吃的分量不同,小费也是平均分摊吗?", "本计算器默认将总金额平均分给所有人。如果需要按各自点的餐分别计算,请为每个人单独使用本计算器。"],
  ["人数填1会怎样?", "人数为1时,人均金额就等于含小费总额,适合一个人结账时快速确认最终金额。"]
 ],
 "labels": {"bill": "账单金额", "people": "人数", "percent": "小费比例 (%)", "presets": "快速选择"},
 "alert": "请正确输入账单金额、小费比例和人数(人数至少为1)。",
 "result_tpl": {"per_tpl": "人均金额(按{people}人计算)", "tip_tpl": "小费金额: {tip}(小费{percent}%)", "total_tpl": "含小费总额: {total}"},
},
"hi": {
 "title": "टिप कैलकुलेटर - टिप राशि और प्रति व्यक्ति हिस्सा निकालें",
 "meta": "बिल राशि, टिप प्रतिशत और लोगों की संख्या डालें और तुरंत टिप राशि, कुल राशि और प्रति व्यक्ति हिस्सा जानें।",
 "card_desc": "बिल राशि डालें, टिप प्रतिशत चुनें या खुद लिखें, फिर लोगों की संख्या डालकर तुरंत गणना करें।",
 "nav": "टिप कैलकुलेटर",
 "home_desc": "टिप राशि, कुल राशि और प्रति व्यक्ति हिस्सा निकालें",
 "usage": [
  "टिप जोड़ने से पहले की बिल राशि डालें।",
  "टिप प्रतिशत खुद लिखें या आम प्रतिशत बटन (10%, 15%, 18%, 20%) दबाएं।",
  "बिल बांटने वाले लोगों की संख्या डालें और \"गणना करें\" दबाएं।"
 ],
 "method": "टिप राशि बिल राशि को टिप प्रतिशत से गुणा करके निकाली जाती है। कुल राशि बिल और टिप का जोड़ है, और प्रति व्यक्ति हिस्सा उस कुल राशि को लोगों की संख्या से बराबर बांटकर निकाला जाता है।",
 "examples": [
  "उदाहरण 1 — बिल 80, टिप 18%, 1 व्यक्ति: टिप 14.4 और कुल राशि 94.4 है।",
  "उदाहरण 2 — बिल 150, टिप 20%, 4 लोगों में बांटने पर: टिप 30, कुल 180, और हर व्यक्ति को 45 देने होंगे।"
 ],
 "faq": [
  ["अगर मुझे दिए गए प्रतिशत में से कोई नहीं चाहिए तो?", "टिप प्रतिशत वाले खाने में कोई भी संख्या सीधे लिख सकते हैं, बटन तो बस आम प्रतिशत जल्दी भरने के लिए हैं।"],
  ["क्या सबका खाना अलग-अलग होने पर भी टिप बराबर बंटती है?", "यह कैलकुलेटर कुल राशि को सबमें बराबर बांटता है। अगर हर व्यक्ति का हिसाब अलग रखना है तो हर व्यक्ति के लिए अलग से इस्तेमाल करें।"],
  ["लोगों की संख्या 1 रखने पर क्या होगा?", "1 व्यक्ति होने पर प्रति व्यक्ति राशि पूरी कुल राशि (टिप सहित) के बराबर हो जाती है, जो अकेले भुगतान करते समय काम आता है।"]
 ],
 "labels": {"bill": "बिल राशि", "people": "लोगों की संख्या", "percent": "टिप प्रतिशत (%)", "presets": "जल्दी चुनें"},
 "alert": "कृपया बिल राशि, टिप प्रतिशत और लोगों की संख्या सही-सही डालें (कम से कम 1 व्यक्ति)।",
 "result_tpl": {"per_tpl": "प्रति व्यक्ति ({people} लोग)", "tip_tpl": "टिप राशि: {tip} (टिप {percent}%)", "total_tpl": "टिप सहित कुल राशि: {total}"},
},
"en": {
 "title": "Tip Calculator - Calculate Tip Amount, Total, and Per-Person Share",
 "meta": "Enter the bill amount, tip percentage, and number of people to instantly calculate the tip amount, the total with tip, and how much each person owes.",
 "card_desc": "Enter the bill amount, choose or type a tip percentage, and enter the number of people to calculate instantly.",
 "nav": "Tip",
 "home_desc": "Calculate the tip amount, total with tip, and per-person share",
 "usage": [
  "Enter the bill amount before tip.",
  "Enter a tip percentage, or tap a quick preset button (10%, 15%, 18%, 20%).",
  "Enter the number of people splitting the bill, then click \"Calculate\"."
 ],
 "method": "The tip amount is the bill amount multiplied by the tip percentage. The total is the bill plus the tip, and the per-person share divides that total evenly by the number of people.",
 "examples": [
  "Example 1 — Bill 80, 18% tip, 1 person: the tip is 14.4 and the total is 94.4.",
  "Example 2 — Bill 150, 20% tip, split between 4 people: the tip is 30, the total is 180, and each person pays 45."
 ],
 "faq": [
  ["Can I enter a tip percentage that isn't in the presets?", "Yes, type any percentage directly into the tip percentage field — the preset buttons are just a shortcut for common values."],
  ["Does this split the tip evenly even if people didn't order the same amount?", "This calculator assumes an even split among everyone. For itemized splitting where each person pays for what they ordered, use it separately per person."],
  ["What if I leave the number of people as 1?", "With 1 person, the per-person amount is the same as the total bill with tip — useful when you're paying alone and just want the final amount."]
 ],
 "labels": {"bill": "Bill amount", "people": "Number of people", "percent": "Tip percentage (%)", "presets": "Quick picks"},
 "alert": "Please enter a valid bill amount, tip percentage, and number of people (at least 1).",
 "result_tpl": {"per_tpl": "Per person ({people} people)", "tip_tpl": "Tip amount: {tip} ({percent}% tip)", "total_tpl": "Total with tip: {total}"},
},
"id": {
 "title": "Kalkulator Tip - Hitung Jumlah Tip dan Bagian per Orang",
 "meta": "Masukkan jumlah tagihan, persentase tip, dan jumlah orang untuk langsung menghitung jumlah tip, total dengan tip, dan bagian tiap orang.",
 "card_desc": "Masukkan jumlah tagihan, pilih atau ketik persentase tip, lalu masukkan jumlah orang untuk menghitung langsung.",
 "nav": "Kalkulator Tip",
 "home_desc": "Hitung jumlah tip, total dengan tip, dan bagian per orang",
 "usage": [
  "Masukkan jumlah tagihan sebelum tip.",
  "Masukkan persentase tip, atau tekan tombol persentase umum (10%, 15%, 18%, 20%).",
  "Masukkan jumlah orang yang berbagi tagihan, lalu klik \"Hitung\"."
 ],
 "method": "Jumlah tip adalah tagihan dikalikan persentase tip. Totalnya adalah tagihan ditambah tip, dan bagian per orang membagi total itu secara merata sesuai jumlah orang.",
 "examples": [
  "Contoh 1 — Tagihan 80, tip 18%, 1 orang: tip-nya 14,4 dan totalnya 94,4.",
  "Contoh 2 — Tagihan 150, tip 20%, dibagi 4 orang: tip-nya 30, totalnya 180, dan tiap orang membayar 45."
 ],
 "faq": [
  ["Bagaimana jika persentase yang saya mau tidak ada di tombol cepat?", "Anda bisa mengetik angka berapa pun langsung di kolom persentase tip — tombol cepat hanya jalan pintas untuk angka yang umum dipakai."],
  ["Apakah tip tetap dibagi rata walau porsi makanan tiap orang beda?", "Kalkulator ini membagi total secara merata ke semua orang. Untuk pembagian per item pesanan masing-masing, hitung terpisah untuk tiap orang."],
  ["Bagaimana jika jumlah orang diisi 1?", "Dengan 1 orang, jumlah per orang sama dengan total tagihan plus tip — berguna saat Anda membayar sendiri dan ingin tahu jumlah akhirnya."]
 ],
 "labels": {"bill": "Jumlah tagihan", "people": "Jumlah orang", "percent": "Persentase tip (%)", "presets": "Pilihan cepat"},
 "alert": "Masukkan jumlah tagihan, persentase tip, dan jumlah orang dengan benar (minimal 1 orang).",
 "result_tpl": {"per_tpl": "Per orang ({people} orang)", "tip_tpl": "Jumlah tip: {tip} (tip {percent}%)", "total_tpl": "Total dengan tip: {total}"},
},
"pt-br": {
 "title": "Calculadora de Gorjeta - Calcule o Valor da Gorjeta e o Total por Pessoa",
 "meta": "Informe o valor da conta, a porcentagem da gorjeta e o número de pessoas para calcular na hora o valor da gorjeta, o total com gorjeta e quanto cada pessoa deve pagar.",
 "card_desc": "Informe o valor da conta, escolha ou digite a porcentagem da gorjeta e informe o número de pessoas para calcular na hora.",
 "nav": "Calculadora de Gorjeta",
 "home_desc": "Calcule o valor da gorjeta, o total com gorjeta e o valor por pessoa",
 "usage": [
  "Informe o valor da conta antes da gorjeta.",
  "Digite uma porcentagem de gorjeta ou toque em um botão rápido (10%, 15%, 18%, 20%).",
  "Informe o número de pessoas dividindo a conta e clique em \"Calcular\"."
 ],
 "method": "O valor da gorjeta é a conta multiplicada pela porcentagem escolhida. O total é a conta mais a gorjeta, e o valor por pessoa divide esse total igualmente entre todos.",
 "examples": [
  "Exemplo 1 — Conta de 80, gorjeta de 18%, 1 pessoa: a gorjeta é 14,4 e o total é 94,4.",
  "Exemplo 2 — Conta de 150, gorjeta de 20%, dividida entre 4 pessoas: a gorjeta é 30, o total é 180, e cada pessoa paga 45."
 ],
 "faq": [
  ["E se a porcentagem que eu quero não estiver nos botões?", "Você pode digitar qualquer número diretamente no campo de porcentagem da gorjeta — os botões são apenas um atalho para valores comuns."],
  ["A gorjeta é dividida igualmente mesmo se as pessoas pediram quantidades diferentes?", "Esta calculadora sempre divide o total igualmente entre todos. Para dividir por item pedido, calcule separadamente para cada pessoa."],
  ["O que acontece se eu deixar o número de pessoas como 1?", "Com 1 pessoa, o valor por pessoa é igual ao total com gorjeta — útil quando você está pagando sozinho e só quer saber o valor final."]
 ],
 "labels": {"bill": "Valor da conta", "people": "Número de pessoas", "percent": "Porcentagem da gorjeta (%)", "presets": "Atalhos"},
 "alert": "Informe corretamente o valor da conta, a porcentagem da gorjeta e o número de pessoas (no mínimo 1).",
 "result_tpl": {"per_tpl": "Por pessoa ({people} pessoas)", "tip_tpl": "Valor da gorjeta: {tip} (gorjeta de {percent}%)", "total_tpl": "Total com gorjeta: {total}"},
},
"ru": {
 "title": "Калькулятор чаевых - расчёт суммы чаевых и доли на человека",
 "meta": "Введите сумму счёта, процент чаевых и количество человек, чтобы сразу узнать сумму чаевых, итог со счётом и долю на каждого.",
 "card_desc": "Введите сумму счёта, выберите или введите процент чаевых и укажите количество человек для мгновенного расчёта.",
 "nav": "Чаевые",
 "home_desc": "Расчёт суммы чаевых, итоговой суммы и доли на человека",
 "usage": [
  "Введите сумму счёта без чаевых.",
  "Введите процент чаевых или нажмите одну из кнопок (10%, 15%, 18%, 20%).",
  "Введите количество человек, которые делят счёт, и нажмите «Рассчитать»."
 ],
 "method": "Сумма чаевых — это счёт, умноженный на процент чаевых. Итог — это счёт плюс чаевые, а доля на человека — это итог, поделённый поровну на всех.",
 "examples": [
  "Пример 1 — счёт 80, чаевые 18%, 1 человек: чаевые составят 14,4, итог — 94,4.",
  "Пример 2 — счёт 150, чаевые 20%, делят 4 человека: чаевые 30, итог 180, с каждого по 45."
 ],
 "faq": [
  ["Что делать, если нужного процента нет среди кнопок?", "Можно ввести любое число прямо в поле процента чаевых — кнопки лишь быстро подставляют часто используемые значения."],
  ["Чаевые делятся поровну, даже если люди заказали по-разному?", "Этот калькулятор всегда делит итоговую сумму поровну между всеми. Для раздельного расчёта по каждому заказу используйте калькулятор отдельно для каждого человека."],
  ["Что если оставить количество человек равным 1?", "При 1 человеке доля на человека равна итоговой сумме со чаевыми — удобно, если вы платите один и хотите узнать итоговую сумму."]
 ],
 "labels": {"bill": "Сумма счёта", "people": "Количество человек", "percent": "Процент чаевых (%)", "presets": "Быстрый выбор"},
 "alert": "Пожалуйста, корректно введите сумму счёта, процент чаевых и количество человек (не менее 1).",
 "result_tpl": {"per_tpl": "На человека ({people} чел.)", "tip_tpl": "Сумма чаевых: {tip} (чаевые {percent}%)", "total_tpl": "Итог со чаевыми: {total}"},
},
"ur": {
 "title": "ٹپ کیلکولیٹر - ٹپ کی رقم اور فی کس حصہ نکالیں",
 "meta": "بل کی رقم، ٹپ کا فیصد اور افراد کی تعداد درج کریں اور فوراً ٹپ کی رقم، کل رقم اور فی کس حصہ معلوم کریں۔",
 "card_desc": "بل کی رقم درج کریں، ٹپ کا فیصد چنیں یا خود لکھیں، پھر افراد کی تعداد ڈال کر فوراً حساب لگائیں۔",
 "nav": "ٹپ کیلکولیٹر",
 "home_desc": "ٹپ کی رقم، کل رقم اور فی کس حصہ نکالیں",
 "usage": [
  "ٹپ شامل کرنے سے پہلے بل کی رقم درج کریں۔",
  "ٹپ کا فیصد خود لکھیں یا عام فیصد کے بٹن (10%، 15%، 18%، 20%) دبائیں۔",
  "بل بانٹنے والے افراد کی تعداد درج کریں اور \"حساب لگائیں\" دبائیں۔"
 ],
 "method": "ٹپ کی رقم بل کو ٹپ کے فیصد سے ضرب دے کر نکالی جاتی ہے۔ کل رقم بل اور ٹپ کا مجموعہ ہے، اور فی کس حصہ اس کل رقم کو افراد کی تعداد پر برابر تقسیم کرکے نکالا جاتا ہے۔",
 "examples": [
  "مثال 1 — بل 80، ٹپ 18%، 1 شخص: ٹپ 14.4 اور کل رقم 94.4 ہوگی۔",
  "مثال 2 — بل 150، ٹپ 20%، 4 افراد میں تقسیم: ٹپ 30، کل 180، اور ہر شخص کو 45 دینا ہوں گے۔"
 ],
 "faq": [
  ["اگر مجھے درکار فیصد بٹنوں میں نہ ہو تو؟", "آپ ٹپ کے فیصد والے خانے میں کوئی بھی عدد براہ راست لکھ سکتے ہیں، بٹن صرف عام فیصد جلدی بھرنے کے لیے ہیں۔"],
  ["کیا ہر شخص کا کھانا مختلف ہونے پر بھی ٹپ برابر بٹتی ہے؟", "یہ کیلکولیٹر ہمیشہ کل رقم سب میں برابر تقسیم کرتا ہے۔ اگر ہر شخص کا حساب الگ رکھنا ہو تو ہر ایک کے لیے الگ سے استعمال کریں۔"],
  ["افراد کی تعداد 1 رکھنے پر کیا ہوگا؟", "1 شخص ہونے پر فی کس رقم ٹپ سمیت کل رقم کے برابر ہو جاتی ہے، جو اکیلے ادائیگی کرتے وقت مفید ہے۔"]
 ],
 "labels": {"bill": "بل کی رقم", "people": "افراد کی تعداد", "percent": "ٹپ کا فیصد (%)", "presets": "فوری انتخاب"},
 "alert": "براہ کرم بل کی رقم، ٹپ کا فیصد اور افراد کی تعداد درست درج کریں (کم از کم 1 شخص)۔",
 "result_tpl": {"per_tpl": "فی کس ({people} افراد)", "tip_tpl": "ٹپ کی رقم: {tip} (ٹپ {percent}%)", "total_tpl": "ٹپ سمیت کل رقم: {total}"},
},
"es": {
 "title": "Calculadora de Propina - Calcula la Propina y el Total por Persona",
 "meta": "Ingresa el monto de la cuenta, el porcentaje de propina y el número de personas para calcular al instante la propina, el total y cuánto paga cada quien.",
 "card_desc": "Ingresa el monto de la cuenta, elige o escribe el porcentaje de propina, e ingresa el número de personas para calcular al instante.",
 "nav": "Propina",
 "home_desc": "Calcula la propina, el total con propina y cuánto paga cada persona",
 "usage": [
  "Ingresa el monto de la cuenta antes de la propina.",
  "Escribe un porcentaje de propina o toca un botón rápido (10%, 15%, 18%, 20%).",
  "Ingresa el número de personas que van a dividir la cuenta y presiona \"Calcular\"."
 ],
 "method": "La propina es el monto de la cuenta multiplicado por el porcentaje elegido. El total es la cuenta más la propina, y el monto por persona divide ese total en partes iguales entre todos.",
 "examples": [
  "Ejemplo 1 — Cuenta de 80, propina de 18%, 1 persona: la propina es 14.4 y el total es 94.4.",
  "Ejemplo 2 — Cuenta de 150, propina de 20%, dividida entre 4 personas: la propina es 30, el total es 180 y cada persona paga 45."
 ],
 "faq": [
  ["¿Qué pasa si el porcentaje que quiero no está en los botones?", "Puedes escribir cualquier número directamente en el campo de porcentaje de propina; los botones solo son un atajo para los valores más comunes."],
  ["¿La propina se reparte igual aunque cada quien haya pedido algo distinto?", "Esta calculadora siempre divide el total en partes iguales entre todos. Si quieres calcular por lo que pidió cada persona, úsala por separado para cada una."],
  ["¿Qué pasa si dejo el número de personas en 1?", "Con 1 persona, el monto por persona es igual al total con propina, útil cuando pagas solo y quieres saber el monto final."]
 ],
 "labels": {"bill": "Monto de la cuenta", "people": "Número de personas", "percent": "Porcentaje de propina (%)", "presets": "Accesos rápidos"},
 "alert": "Ingresa correctamente el monto de la cuenta, el porcentaje de propina y el número de personas (mínimo 1).",
 "result_tpl": {"per_tpl": "Por persona ({people} personas)", "tip_tpl": "Propina: {tip} (propina del {percent}%)", "total_tpl": "Total con propina: {total}"},
},
"ja": {
 "title": "チップ計算機 - チップ金額と1人あたりの支払額を計算",
 "meta": "会計金額、チップの割合、人数を入力すると、チップ金額・チップ込みの合計額・1人あたりの支払額が一度に分かります。",
 "card_desc": "会計金額を入力し、チップの割合を選ぶか直接入力して、人数を入れるとすぐに計算されます。",
 "nav": "チップ計算機",
 "home_desc": "チップ金額・合計額・1人あたりの支払額を計算",
 "usage": [
  "チップを含める前の会計金額を入力します。",
  "チップの割合を直接入力するか、よく使う割合ボタン(10%、15%、18%、20%)を押します。",
  "割り勘する人数を入力して「計算する」を押します。"
 ],
 "method": "チップ金額は会計金額にチップの割合を掛けて求めます。合計額は会計金額とチップ金額を足したもので、1人あたりの金額はその合計額を人数で均等に割った値です。",
 "examples": [
  "例1 — 会計80、チップ18%、1人の場合: チップは14.4、合計は94.4です。",
  "例2 — 会計150、チップ20%、4人で割る場合: チップは30、合計は180、1人あたり45です。"
 ],
 "faq": [
  ["よく使う割合ボタンにない割合を入力したいときは?", "チップの割合欄に好きな数字を直接入力できます。ボタンはよく使う割合をすぐ入力するための機能です。"],
  ["人によって注文した量が違っても均等に割るのですか?", "この計算機は常に合計額を全員で均等に割ります。各自の注文分だけ計算したい場合は、1人ずつ個別に使ってください。"],
  ["人数を1のままにするとどうなりますか?", "人数が1のとき、1人あたりの金額はチップ込みの合計額と同じになるので、1人で会計するときの最終金額をすぐ確認できます。"]
 ],
 "labels": {"bill": "会計金額", "people": "人数", "percent": "チップの割合 (%)", "presets": "クイック選択"},
 "alert": "会計金額・チップの割合・人数を正しく入力してください(人数は1人以上)。",
 "result_tpl": {"per_tpl": "1人あたり({people}人で計算)", "tip_tpl": "チップ金額: {tip}(チップ{percent}%)", "total_tpl": "チップ込みの合計額: {total}"},
},
"tl": {
 "title": "Calculator ng Tip - Kalkulahin ang Halaga ng Tip at Bahagi ng Bawat Isa",
 "meta": "Ilagay ang halaga ng bill, porsyento ng tip, at bilang ng tao para agad makuha ang halaga ng tip, kabuuang bayad, at bahagi ng bawat isa.",
 "card_desc": "Ilagay ang halaga ng bill, pumili o mag-type ng porsyento ng tip, pagkatapos ilagay ang bilang ng tao para agad kalkulahin.",
 "nav": "Calculator ng Tip",
 "home_desc": "Kalkulahin ang halaga ng tip, kabuuang bayad, at bahagi ng bawat isa",
 "usage": [
  "Ilagay ang halaga ng bill bago idagdag ang tip.",
  "Mag-type ng porsyento ng tip, o pindutin ang mabilisang button (10%, 15%, 18%, 20%).",
  "Ilagay ang bilang ng taong maghahati sa bill, pagkatapos i-click ang \"Kalkulahin\"."
 ],
 "method": "Ang halaga ng tip ay ang bill na pinarami sa porsyento ng tip. Ang kabuuan ay ang bill kasama ang tip, at ang bahagi ng bawat isa ay ang kabuuang iyon na hinati nang pantay sa bilang ng tao.",
 "examples": [
  "Halimbawa 1 — Bill na 80, 18% na tip, 1 tao: ang tip ay 14.4 at ang kabuuan ay 94.4.",
  "Halimbawa 2 — Bill na 150, 20% na tip, hinati sa 4 na tao: ang tip ay 30, ang kabuuan ay 180, at magbabayad ang bawat isa ng 45."
 ],
 "faq": [
  ["Paano kung wala sa mabilisang button ang gusto kong porsyento?", "Puwede kang mag-type ng kahit anong numero diretso sa kahon ng porsyento ng tip — ang mga button ay para lang sa mga karaniwang halaga."],
  ["Pantay ba ang paghahati ng tip kahit magkaiba ang order ng bawat isa?", "Palaging pantay ang paghahati ng kabuuang halaga sa lahat sa calculator na ito. Kung gusto ninyo ng hiwalay na bayad ayon sa order, gamitin ito nang paisa-isa."],
  ["Ano ang mangyayari kung 1 lang ang bilang ng tao?", "Kapag 1 tao, ang bahagi ng isang tao ay katumbas ng kabuuang bayad kasama ang tip — kapaki-pakinabang kapag ikaw lang ang magbabayad."]
 ],
 "labels": {"bill": "Halaga ng bill", "people": "Bilang ng tao", "percent": "Porsyento ng tip (%)", "presets": "Mabilisang pili"},
 "alert": "Pakilagay nang tama ang halaga ng bill, porsyento ng tip, at bilang ng tao (kahit isa man lang).",
 "result_tpl": {"per_tpl": "Bawat isa ({people} tao)", "tip_tpl": "Halaga ng tip: {tip} ({percent}% na tip)", "total_tpl": "Kabuuan kasama ang tip: {total}"},
},
"ar": {
 "title": "حاسبة الإكرامية - احسب مبلغ الإكرامية ونصيب كل شخص",
 "meta": "أدخل مبلغ الفاتورة ونسبة الإكرامية وعدد الأشخاص لحساب مبلغ الإكرامية والمجموع الكلي ونصيب كل شخص فورًا.",
 "card_desc": "أدخل مبلغ الفاتورة، واختر نسبة الإكرامية أو اكتبها بنفسك، ثم أدخل عدد الأشخاص للحساب فورًا.",
 "nav": "حاسبة الإكرامية",
 "home_desc": "احسب مبلغ الإكرامية والمجموع الكلي ونصيب كل شخص",
 "usage": [
  "أدخل مبلغ الفاتورة قبل إضافة الإكرامية.",
  "اكتب نسبة الإكرامية أو اضغط أحد الأزرار السريعة (10%، 15%، 18%، 20%).",
  "أدخل عدد الأشخاص الذين سيتقاسمون الفاتورة ثم اضغط \"احسب\"."
 ],
 "method": "مبلغ الإكرامية هو مبلغ الفاتورة مضروبًا في نسبة الإكرامية. والمجموع هو الفاتورة زائد الإكرامية، أما نصيب كل شخص فهو ذلك المجموع مقسومًا بالتساوي على عدد الأشخاص.",
 "examples": [
  "مثال 1 — فاتورة 80، إكرامية 18%، شخص واحد: الإكرامية 14.4 والمجموع 94.4.",
  "مثال 2 — فاتورة 150، إكرامية 20%، تُقسّم على 4 أشخاص: الإكرامية 30، والمجموع 180، ويدفع كل شخص 45."
 ],
 "faq": [
  ["ماذا لو لم تكن النسبة التي أريدها ضمن الأزرار؟", "يمكنك كتابة أي رقم مباشرة في خانة نسبة الإكرامية، فالأزرار مجرد اختصار للنسب الشائعة."],
  ["هل تُقسّم الإكرامية بالتساوي حتى لو اختلفت طلبات كل شخص؟", "تقسّم هذه الحاسبة المجموع دائمًا بالتساوي بين الجميع. إذا أردت حسابًا منفصلًا لكل طلب، استخدمها بشكل منفصل لكل شخص."],
  ["ماذا يحدث إذا تركت عدد الأشخاص 1؟", "عند شخص واحد، يصبح نصيب الفرد مساويًا للمجموع الكلي مع الإكرامية، وهو مفيد عند الدفع بمفردك لمعرفة المبلغ النهائي مباشرة."]
 ],
 "labels": {"bill": "مبلغ الفاتورة", "people": "عدد الأشخاص", "percent": "نسبة الإكرامية (%)", "presets": "اختيار سريع"},
 "alert": "يرجى إدخال مبلغ الفاتورة ونسبة الإكرامية وعدد الأشخاص بشكل صحيح (شخص واحد على الأقل).",
 "result_tpl": {"per_tpl": "لكل شخص ({people} أشخاص)", "tip_tpl": "مبلغ الإكرامية: {tip} (إكرامية {percent}%)", "total_tpl": "المجموع مع الإكرامية: {total}"},
},
"vi": {
 "title": "Máy Tính Tiền Tip - Tính Số Tiền Tip và Phần Mỗi Người Trả",
 "meta": "Nhập số tiền hóa đơn, phần trăm tip và số người để tính ngay số tiền tip, tổng cộng và phần mỗi người phải trả.",
 "card_desc": "Nhập số tiền hóa đơn, chọn hoặc tự nhập phần trăm tip, rồi nhập số người để tính ngay.",
 "nav": "Tính Tiền Tip",
 "home_desc": "Tính số tiền tip, tổng cộng và phần mỗi người phải trả",
 "usage": [
  "Nhập số tiền hóa đơn trước khi tính tip.",
  "Nhập phần trăm tip hoặc bấm nút chọn nhanh (10%, 15%, 18%, 20%).",
  "Nhập số người chia hóa đơn rồi bấm \"Tính\"."
 ],
 "method": "Số tiền tip bằng hóa đơn nhân với phần trăm tip. Tổng cộng là hóa đơn cộng tiền tip, và phần mỗi người là tổng đó chia đều cho số người.",
 "examples": [
  "Ví dụ 1 — Hóa đơn 80, tip 18%, 1 người: tiền tip là 14,4 và tổng cộng là 94,4.",
  "Ví dụ 2 — Hóa đơn 150, tip 20%, chia cho 4 người: tiền tip là 30, tổng cộng là 180, mỗi người trả 45."
 ],
 "faq": [
  ["Nếu phần trăm tôi muốn không có trong các nút chọn nhanh thì sao?", "Bạn có thể nhập trực tiếp bất kỳ số nào vào ô phần trăm tip — các nút chỉ là lối tắt cho các mức phổ biến."],
  ["Mỗi người gọi món khác nhau thì tiền tip có chia đều không?", "Máy tính này luôn chia đều tổng số tiền cho tất cả mọi người. Nếu muốn tính riêng theo món của từng người, hãy dùng riêng cho mỗi người."],
  ["Nếu để số người là 1 thì sao?", "Khi chỉ có 1 người, phần mỗi người sẽ bằng tổng cộng đã gồm tiền tip — hữu ích khi bạn tự thanh toán và muốn biết số tiền cuối cùng."]
 ],
 "labels": {"bill": "Số tiền hóa đơn", "people": "Số người", "percent": "Phần trăm tip (%)", "presets": "Chọn nhanh"},
 "alert": "Vui lòng nhập đúng số tiền hóa đơn, phần trăm tip và số người (ít nhất 1 người).",
 "result_tpl": {"per_tpl": "Mỗi người ({people} người)", "tip_tpl": "Số tiền tip: {tip} (tip {percent}%)", "total_tpl": "Tổng cộng kèm tip: {total}"},
},
"de": {
 "title": "Trinkgeldrechner - Trinkgeldbetrag und Anteil pro Person berechnen",
 "meta": "Rechnungsbetrag, Trinkgeldprozentsatz und Personenzahl eingeben, um sofort Trinkgeldbetrag, Gesamtbetrag und Anteil pro Person zu berechnen.",
 "card_desc": "Rechnungsbetrag eingeben, Trinkgeldprozentsatz wählen oder eintippen und Personenzahl eingeben, um sofort zu berechnen.",
 "nav": "Trinkgeldrechner",
 "home_desc": "Trinkgeldbetrag, Gesamtbetrag und Anteil pro Person berechnen",
 "usage": [
  "Rechnungsbetrag vor dem Trinkgeld eingeben.",
  "Trinkgeldprozentsatz eintippen oder eine Schnellwahl-Taste (10%, 15%, 18%, 20%) drücken.",
  "Anzahl der Personen, die sich die Rechnung teilen, eingeben und auf \"Berechnen\" klicken."
 ],
 "method": "Der Trinkgeldbetrag ist der Rechnungsbetrag multipliziert mit dem Trinkgeldprozentsatz. Der Gesamtbetrag ist die Rechnung plus Trinkgeld, und der Anteil pro Person teilt diesen Gesamtbetrag gleichmäßig durch die Personenzahl.",
 "examples": [
  "Beispiel 1 — Rechnung 80, 18% Trinkgeld, 1 Person: Das Trinkgeld beträgt 14,4, der Gesamtbetrag 94,4.",
  "Beispiel 2 — Rechnung 150, 20% Trinkgeld, aufgeteilt auf 4 Personen: Das Trinkgeld beträgt 30, der Gesamtbetrag 180, jede Person zahlt 45."
 ],
 "faq": [
  ["Was, wenn der gewünschte Prozentsatz nicht bei den Schnellwahl-Tasten dabei ist?", "Sie können jede beliebige Zahl direkt in das Feld für den Trinkgeldprozentsatz eingeben — die Tasten sind nur eine Abkürzung für gängige Werte."],
  ["Wird das Trinkgeld auch dann gleichmäßig geteilt, wenn jeder unterschiedlich viel bestellt hat?", "Dieser Rechner teilt den Gesamtbetrag immer gleichmäßig auf alle auf. Für eine getrennte Berechnung nach Bestellung nutzen Sie den Rechner für jede Person einzeln."],
  ["Was passiert, wenn ich die Personenzahl bei 1 lasse?", "Bei 1 Person entspricht der Anteil pro Person genau dem Gesamtbetrag inklusive Trinkgeld — praktisch, wenn Sie allein zahlen und den Endbetrag wissen möchten."]
 ],
 "labels": {"bill": "Rechnungsbetrag", "people": "Anzahl der Personen", "percent": "Trinkgeldprozentsatz (%)", "presets": "Schnellwahl"},
 "alert": "Bitte Rechnungsbetrag, Trinkgeldprozentsatz und Personenzahl korrekt eingeben (mindestens 1 Person).",
 "result_tpl": {"per_tpl": "Pro Person ({people} Personen)", "tip_tpl": "Trinkgeldbetrag: {tip} ({percent}% Trinkgeld)", "total_tpl": "Gesamtbetrag mit Trinkgeld: {total}"},
},
"bn": {
 "title": "টিপ ক্যালকুলেটর - টিপের পরিমাণ ও জনপ্রতি ভাগ হিসাব করুন",
 "meta": "বিলের পরিমাণ, টিপের হার ও লোকসংখ্যা দিন, সঙ্গে সঙ্গে টিপের পরিমাণ, মোট বিল ও জনপ্রতি হিসাব পেয়ে যান।",
 "card_desc": "বিলের পরিমাণ দিন, টিপের হার বেছে নিন বা নিজে লিখুন, তারপর লোকসংখ্যা দিয়ে সঙ্গে সঙ্গে হিসাব করুন।",
 "nav": "টিপ ক্যালকুলেটর",
 "home_desc": "টিপের পরিমাণ, মোট বিল ও জনপ্রতি ভাগ হিসাব করুন",
 "usage": [
  "টিপ যোগ করার আগের বিলের পরিমাণ দিন।",
  "টিপের হার নিজে লিখুন অথবা প্রচলিত হারের বোতাম (10%, 15%, 18%, 20%) চাপুন।",
  "বিল ভাগ করে নেওয়া লোকসংখ্যা দিয়ে \"হিসাব করুন\" চাপুন।"
 ],
 "method": "টিপের পরিমাণ হলো বিলকে টিপের হার দিয়ে গুণ করে পাওয়া মান। মোট পরিমাণ হলো বিল ও টিপের যোগফল, আর জনপ্রতি ভাগ হলো সেই মোট পরিমাণকে সবার মধ্যে সমানভাবে ভাগ করা।",
 "examples": [
  "উদাহরণ ১ — বিল ৮০, টিপ ১৮%, ১ জন: টিপ হবে ১৪.৪ এবং মোট হবে ৯৪.৪।",
  "উদাহরণ ২ — বিল ১৫০, টিপ ২০%, ৪ জনে ভাগ করলে: টিপ ৩০, মোট ১৮০, জনপ্রতি দিতে হবে ৪৫।"
 ],
 "faq": [
  ["আমার পছন্দের হার বোতামে না থাকলে কী করব?", "টিপের হারের ঘরে সরাসরি যেকোনো সংখ্যা লিখতে পারেন, বোতামগুলো শুধু প্রচলিত হার দ্রুত বসানোর জন্য।"],
  ["সবার খাবারের পরিমাণ ভিন্ন হলেও কি টিপ সমান ভাগ হয়?", "এই ক্যালকুলেটর সবসময় মোট পরিমাণ সবার মধ্যে সমানভাবে ভাগ করে। আলাদাভাবে হিসাব করতে চাইলে প্রতিটি ব্যক্তির জন্য আলাদাভাবে ব্যবহার করুন।"],
  ["লোকসংখ্যা ১ রাখলে কী হবে?", "১ জন হলে জনপ্রতি পরিমাণ টিপসহ মোট বিলের সমান হয়ে যায়, যা একা বিল মেটানোর সময় কাজে লাগে।"]
 ],
 "labels": {"bill": "বিলের পরিমাণ", "people": "লোকসংখ্যা", "percent": "টিপের হার (%)", "presets": "দ্রুত নির্বাচন"},
 "alert": "অনুগ্রহ করে বিলের পরিমাণ, টিপের হার ও লোকসংখ্যা সঠিকভাবে দিন (কমপক্ষে ১ জন)।",
 "result_tpl": {"per_tpl": "জনপ্রতি ({people} জন)", "tip_tpl": "টিপের পরিমাণ: {tip} (টিপ {percent}%)", "total_tpl": "টিপসহ মোট: {total}"},
},
"tr": {
 "title": "Bahşiş Hesaplayıcı - Bahşiş Tutarını ve Kişi Başı Payı Hesaplayın",
 "meta": "Hesap tutarını, bahşiş yüzdesini ve kişi sayısını girerek bahşiş tutarını, toplam tutarı ve kişi başı payı anında hesaplayın.",
 "card_desc": "Hesap tutarını girin, bahşiş yüzdesini seçin veya yazın, ardından kişi sayısını girerek anında hesaplayın.",
 "nav": "Bahşiş Hesaplayıcı",
 "home_desc": "Bahşiş tutarını, toplam tutarı ve kişi başı payı hesaplayın",
 "usage": [
  "Bahşiş eklenmeden önceki hesap tutarını girin.",
  "Bahşiş yüzdesini yazın veya hızlı seçim düğmelerinden birine (%10, %15, %18, %20) basın.",
  "Hesabı paylaşan kişi sayısını girip \"Hesapla\"ya tıklayın."
 ],
 "method": "Bahşiş tutarı, hesabın bahşiş yüzdesiyle çarpılmasıyla bulunur. Toplam, hesap artı bahşiştir; kişi başı pay ise bu toplamın kişi sayısına eşit olarak bölünmesiyle bulunur.",
 "examples": [
  "Örnek 1 — Hesap 80, bahşiş %18, 1 kişi: bahşiş 14,4 ve toplam 94,4 olur.",
  "Örnek 2 — Hesap 150, bahşiş %20, 4 kişiye bölünürse: bahşiş 30, toplam 180 ve kişi başı 45 öder."
 ],
 "faq": [
  ["İstediğim yüzde hızlı seçim düğmelerinde yoksa ne yapmalıyım?", "Bahşiş yüzdesi kutusuna doğrudan istediğiniz sayıyı yazabilirsiniz; düğmeler yalnızca sık kullanılan değerler için bir kısayoldur."],
  ["Herkes farklı miktarda sipariş verse bile bahşiş eşit mi bölünür?", "Bu hesaplayıcı toplam tutarı her zaman herkese eşit böler. Sipariş bazında ayrı hesaplama için her kişi için ayrı ayrı kullanın."],
  ["Kişi sayısını 1 bırakırsam ne olur?", "1 kişiyle, kişi başı tutar bahşiş dahil toplam tutara eşit olur; tek başınıza öderken son tutarı görmek için kullanışlıdır."]
 ],
 "labels": {"bill": "Hesap tutarı", "people": "Kişi sayısı", "percent": "Bahşiş yüzdesi (%)", "presets": "Hızlı seçim"},
 "alert": "Lütfen hesap tutarını, bahşiş yüzdesini ve kişi sayısını doğru girin (en az 1 kişi).",
 "result_tpl": {"per_tpl": "Kişi başı ({people} kişi)", "tip_tpl": "Bahşiş tutarı: {tip} (%{percent} bahşiş)", "total_tpl": "Bahşiş dahil toplam: {total}"},
},
"fa": {
 "title": "ماشین‌حساب انعام - محاسبه مبلغ انعام و سهم هر نفر",
 "meta": "مبلغ صورت‌حساب، درصد انعام و تعداد نفرات را وارد کنید تا مبلغ انعام، مبلغ کل و سهم هر نفر فوراً محاسبه شود.",
 "card_desc": "مبلغ صورت‌حساب را وارد کنید، درصد انعام را انتخاب یا تایپ کنید و با وارد کردن تعداد نفرات فوراً محاسبه کنید.",
 "nav": "ماشین‌حساب انعام",
 "home_desc": "محاسبه مبلغ انعام، مبلغ کل و سهم هر نفر",
 "usage": [
  "مبلغ صورت‌حساب را پیش از افزودن انعام وارد کنید.",
  "درصد انعام را تایپ کنید یا یکی از دکمه‌های سریع (۱۰٪، ۱۵٪، ۱۸٪، ۲۰٪) را بزنید.",
  "تعداد نفراتی که صورت‌حساب را تقسیم می‌کنند وارد کرده و روی «محاسبه» بزنید."
 ],
 "method": "مبلغ انعام از ضرب صورت‌حساب در درصد انعام به دست می‌آید. مبلغ کل، صورت‌حساب به‌علاوه انعام است و سهم هر نفر از تقسیم مساوی همان مبلغ کل بر تعداد نفرات به دست می‌آید.",
 "examples": [
  "مثال ۱ — صورت‌حساب ۸۰، انعام ۱۸٪، ۱ نفر: انعام ۱۴.۴ و مبلغ کل ۹۴.۴ خواهد بود.",
  "مثال ۲ — صورت‌حساب ۱۵۰، انعام ۲۰٪، تقسیم بین ۴ نفر: انعام ۳۰، مبلغ کل ۱۸۰ و سهم هر نفر ۴۵ می‌شود."
 ],
 "faq": [
  ["اگر درصد موردنظرم در دکمه‌ها نبود چه کنم؟", "می‌توانید هر عددی را مستقیماً در کادر درصد انعام تایپ کنید؛ دکمه‌ها فقط میان‌بری برای مقادیر رایج هستند."],
  ["اگر سفارش هر نفر متفاوت باشد باز هم انعام مساوی تقسیم می‌شود؟", "این ماشین‌حساب همیشه مبلغ کل را به‌طور مساوی بین همه تقسیم می‌کند. برای محاسبه جداگانه بر اساس سفارش هر فرد، برای هر نفر جداگانه استفاده کنید."],
  ["اگر تعداد نفرات را ۱ بگذارم چه می‌شود؟", "با ۱ نفر، سهم هر نفر برابر با مبلغ کل به همراه انعام می‌شود؛ این حالت وقتی به‌تنهایی حساب می‌کنید مفید است."]
 ],
 "labels": {"bill": "مبلغ صورت‌حساب", "people": "تعداد نفرات", "percent": "درصد انعام (%)", "presets": "انتخاب سریع"},
 "alert": "لطفاً مبلغ صورت‌حساب، درصد انعام و تعداد نفرات را به‌درستی وارد کنید (حداقل ۱ نفر).",
 "result_tpl": {"per_tpl": "سهم هر نفر ({people} نفر)", "tip_tpl": "مبلغ انعام: {tip} (انعام {percent}٪)", "total_tpl": "مبلغ کل با انعام: {total}"},
},
"th": {
 "title": "เครื่องคำนวณทิป - คำนวณจำนวนทิปและส่วนแบ่งต่อคน",
 "meta": "กรอกยอดบิล เปอร์เซ็นต์ทิป และจำนวนคน เพื่อคำนวณจำนวนทิป ยอดรวม และส่วนที่แต่ละคนต้องจ่ายได้ทันที",
 "card_desc": "กรอกยอดบิล เลือกหรือพิมพ์เปอร์เซ็นต์ทิปเอง แล้วกรอกจำนวนคนเพื่อคำนวณทันที",
 "nav": "เครื่องคำนวณทิป",
 "home_desc": "คำนวณจำนวนทิป ยอดรวม และส่วนแบ่งต่อคน",
 "usage": [
  "กรอกยอดบิลก่อนรวมทิป",
  "พิมพ์เปอร์เซ็นต์ทิปเอง หรือกดปุ่มเปอร์เซ็นต์ที่ใช้บ่อย (10%, 15%, 18%, 20%)",
  "กรอกจำนวนคนที่จะหารบิลแล้วกด \"คำนวณ\""
 ],
 "method": "จำนวนทิปคือยอดบิลคูณด้วยเปอร์เซ็นต์ทิป ยอดรวมคือบิลบวกทิป และส่วนแบ่งต่อคนคือยอดรวมนั้นหารเท่า ๆ กันตามจำนวนคน",
 "examples": [
  "ตัวอย่าง 1 — บิล 80 ทิป 18% 1 คน: ทิปคือ 14.4 และยอดรวมคือ 94.4",
  "ตัวอย่าง 2 — บิล 150 ทิป 20% หาร 4 คน: ทิปคือ 30 ยอดรวมคือ 180 แต่ละคนจ่าย 45"
 ],
 "faq": [
  ["ถ้าเปอร์เซ็นต์ที่ต้องการไม่มีในปุ่มลัดล่ะ?", "สามารถพิมพ์ตัวเลขใดก็ได้ลงในช่องเปอร์เซ็นต์ทิปโดยตรง ปุ่มลัดเป็นเพียงทางลัดสำหรับค่าที่ใช้บ่อยเท่านั้น"],
  ["ถ้าแต่ละคนสั่งอาหารไม่เท่ากัน ทิปยังหารเท่ากันไหม?", "เครื่องคำนวณนี้จะหารยอดรวมเท่า ๆ กันเสมอ หากต้องการคิดแยกตามรายการที่แต่ละคนสั่ง ให้คำนวณแยกทีละคน"],
  ["ถ้าใส่จำนวนคนเป็น 1 จะเป็นอย่างไร?", "เมื่อมี 1 คน ส่วนแบ่งต่อคนจะเท่ากับยอดรวมที่รวมทิปแล้ว เหมาะสำหรับตอนจ่ายคนเดียวและต้องการรู้ยอดสุดท้าย"]
 ],
 "labels": {"bill": "ยอดบิล", "people": "จำนวนคน", "percent": "เปอร์เซ็นต์ทิป (%)", "presets": "เลือกด่วน"},
 "alert": "กรุณากรอกยอดบิล เปอร์เซ็นต์ทิป และจำนวนคนให้ถูกต้อง (อย่างน้อย 1 คน)",
 "result_tpl": {"per_tpl": "ต่อคน ({people} คน)", "tip_tpl": "จำนวนทิป: {tip} (ทิป {percent}%)", "total_tpl": "ยอดรวมพร้อมทิป: {total}"},
},
"fr": {
 "title": "Calculateur de Pourboire - Calculez le Montant du Pourboire et la Part par Personne",
 "meta": "Entrez le montant de l'addition, le pourcentage de pourboire et le nombre de personnes pour calculer instantanément le pourboire, le total et la part de chacun.",
 "card_desc": "Entrez le montant de l'addition, choisissez ou saisissez un pourcentage de pourboire, puis indiquez le nombre de personnes pour un calcul instantané.",
 "nav": "Pourboire",
 "home_desc": "Calculez le montant du pourboire, le total et la part par personne",
 "usage": [
  "Entrez le montant de l'addition avant le pourboire.",
  "Saisissez un pourcentage de pourboire ou touchez un bouton rapide (10%, 15%, 18%, 20%).",
  "Entrez le nombre de personnes qui partagent l'addition, puis cliquez sur \"Calculer\"."
 ],
 "method": "Le montant du pourboire est l'addition multipliée par le pourcentage choisi. Le total est l'addition plus le pourboire, et la part par personne divise ce total à parts égales entre tout le monde.",
 "examples": [
  "Exemple 1 — Addition de 80, pourboire de 18 %, 1 personne : le pourboire est de 14,4 et le total de 94,4.",
  "Exemple 2 — Addition de 150, pourboire de 20 %, partagée entre 4 personnes : le pourboire est de 30, le total de 180, et chaque personne paie 45."
 ],
 "faq": [
  ["Que faire si le pourcentage que je veux n'est pas dans les boutons ?", "Vous pouvez saisir n'importe quel nombre directement dans le champ du pourcentage de pourboire — les boutons ne sont qu'un raccourci pour les valeurs courantes."],
  ["Le pourboire est-il partagé également même si chacun a commandé différemment ?", "Ce calculateur partage toujours le total également entre tout le monde. Pour un calcul séparé par commande, utilisez-le individuellement pour chaque personne."],
  ["Que se passe-t-il si je laisse le nombre de personnes à 1 ?", "Avec 1 personne, la part par personne est égale au total avec le pourboire — pratique quand vous payez seul et voulez connaître le montant final."]
 ],
 "labels": {"bill": "Montant de l'addition", "people": "Nombre de personnes", "percent": "Pourcentage de pourboire (%)", "presets": "Choix rapides"},
 "alert": "Veuillez entrer correctement le montant de l'addition, le pourcentage de pourboire et le nombre de personnes (au moins 1).",
 "result_tpl": {"per_tpl": "Par personne ({people} personnes)", "tip_tpl": "Montant du pourboire : {tip} (pourboire de {percent} %)", "total_tpl": "Total avec pourboire : {total}"},
},
};
module.exports = TIP;
