// Content for the "fuel" calculator (mutual conversion between km/L,
// L/100km, US mpg, UK mpg), one entry per of the 19 site languages.
// Unit abbreviations (km/L, L/100km, US mpg, UK mpg) are kept as
// international standard abbreviations in every language, matching the
// convention already used by the site's unit converter.
const FUEL = {
"ko": {
 "title": "연비 변환기 - km/L, L/100km, 미국 mpg, 영국 mpg 상호 변환",
 "meta": "km/L, L/100km, 미국 mpg, 영국 mpg 중 아는 값을 입력하면 나머지 세 단위로 한 번에 변환합니다.",
 "card_desc": "가지고 있는 값의 단위를 고르고 값을 입력하면 나머지 세 단위로 즉시 변환됩니다.",
 "nav": "연비 변환",
 "home_desc": "km/L, L/100km, 미국·영국 mpg 상호 변환",
 "usage": [
  "현재 값이 어떤 단위인지 선택합니다 (km/L, L/100km, 미국 mpg, 영국 mpg).",
  "값을 입력합니다.",
  "\"계산하기\"를 누르면 나머지 세 단위로 동시에 변환된 값을 볼 수 있습니다."
 ],
 "method": "모든 값은 km/L을 기준으로 서로 변환됩니다. L/100km는 km/L의 역수에 100을 곱한 값입니다. 미국 mpg는 1 US 갤런 = 3.785411784리터, 1마일 = 1.609344km 기준으로 계산하고, 영국 mpg는 이보다 큰 임페리얼 갤런(4.54609리터) 기준으로 계산하기 때문에, 같은 km/L이라도 영국 mpg가 미국 mpg보다 더 크게 나옵니다.",
 "examples": [
  "예시 1 — 15km/L는 약 6.67 L/100km, 35.28 미국 mpg, 42.37 영국 mpg입니다.",
  "예시 2 — 8 L/100km(12.5km/L)는 약 29.40 미국 mpg, 35.31 영국 mpg입니다."
 ],
 "faq": [
  ["같은 차인데 미국 mpg와 영국 mpg가 왜 다른가요?", "미국 갤런(3.785리터)이 영국 임페리얼 갤런(4.546리터)보다 작기 때문에, 같은 연비라도 영국 mpg 수치가 미국 mpg보다 더 크게 나옵니다."],
  ["L/100km는 숫자가 작을수록 왜 연비가 좋은 건가요?", "L/100km는 정해진 거리(100km)를 가는 데 쓰는 연료량을 나타내므로, 적은 연료로 갈수록 효율이 좋은 것입니다. km/L·미국 mpg·영국 mpg는 반대로 숫자가 클수록 효율이 좋습니다."],
  ["어떤 단위를 사용해야 하나요?", "자신의 나라나 차량 설명서에서 쓰는 단위를 사용하면 됩니다. 한국을 포함한 대부분의 나라는 km/L 또는 L/100km를, 미국과 영국은 mpg(단, 갤런 크기가 다름)를 표준으로 사용합니다."]
 ],
 "labels": {"unit": "입력 단위", "value": "값"},
 "alert": "0보다 큰 값을 입력해 주세요.",
},
"zh-cn": {
 "title": "油耗单位换算器 - km/L、L/100km、美制mpg、英制mpg互相换算",
 "meta": "输入km/L、L/100km、美制mpg或英制mpg中的任意一个数值,立即换算成其余三种单位。",
 "card_desc": "选择你已知数值所用的单位并输入数值,立即换算成其余三种单位。",
 "nav": "油耗换算",
 "home_desc": "km/L、L/100km、美制与英制mpg互相换算",
 "usage": [
  "选择当前数值所使用的单位(km/L、L/100km、美制mpg或英制mpg)。",
  "输入数值。",
  "点击“计算”即可同时看到换算成其余三种单位的结果。"
 ],
 "method": "所有数值都以km/L为基准互相换算。L/100km是km/L的倒数乘以100。美制mpg按1美制加仑=3.785411784升、1英里=1.609344公里计算;英制mpg则使用更大的英制加仑(4.54609升),因此相同的km/L换算出的英制mpg会比美制mpg更高。",
 "examples": [
  "示例1 — 15 km/L约等于6.67 L/100km、35.28美制mpg、42.37英制mpg。",
  "示例2 — 8 L/100km(即12.5 km/L)约等于29.40美制mpg、35.31英制mpg。"
 ],
 "faq": [
  ["同一辆车为什么美制mpg和英制mpg不一样?", "美制加仑(3.785升)比英制加仑(4.546升)小,所以同样的油耗水平在英制mpg下的数值会比美制mpg更高。"],
  ["为什么L/100km数值越小反而代表油耗越省?", "L/100km衡量的是行驶固定距离(100公里)所消耗的升数,用的油越少说明越省油,这与km/L、美制mpg、英制mpg数值越大越省油正好相反。"],
  ["应该使用哪种单位?", "使用你所在国家或车辆说明书采用的单位即可:世界大部分地区常用km/L或L/100km,美国和英国则使用mpg(但加仑大小不同)。"]
 ],
 "labels": {"unit": "输入单位", "value": "数值"},
 "alert": "请输入大于0的数值。",
},
"hi": {
 "title": "ईंधन दक्षता कनवर्टर - km/L, L/100km, US mpg, UK mpg आपस में बदलें",
 "meta": "km/L, L/100km, US mpg या UK mpg में से कोई भी मान डालें और तुरंत बाकी तीनों इकाइयों में बदला हुआ मान देखें।",
 "card_desc": "जिस इकाई में आपका मान है उसे चुनें, मान डालें और बाकी तीन इकाइयों में तुरंत देखें।",
 "nav": "ईंधन दक्षता कनवर्टर",
 "home_desc": "km/L, L/100km, US और UK mpg आपस में बदलें",
 "usage": [
  "अपना मान किस इकाई में है वह चुनें (km/L, L/100km, US mpg, या UK mpg)।",
  "मान डालें।",
  "\"गणना करें\" दबाते ही बाकी तीनों इकाइयों में बदला हुआ मान एक साथ दिखेगा।"
 ],
 "method": "सभी मान km/L को आधार मानकर आपस में बदले जाते हैं। L/100km, km/L के व्युत्क्रम को 100 से गुणा करके निकाला जाता है। US mpg के लिए 1 US गैलन = 3.785411784 लीटर और 1 मील = 1.609344 किमी माना जाता है, जबकि UK mpg बड़े इंपीरियल गैलन (4.54609 लीटर) पर आधारित है, इसलिए एक ही km/L मान पर UK mpg, US mpg से ज़्यादा आता है।",
 "examples": [
  "उदाहरण 1 — 15 km/L लगभग 6.67 L/100km, 35.28 US mpg, और 42.37 UK mpg के बराबर है।",
  "उदाहरण 2 — 8 L/100km (यानी 12.5 km/L) लगभग 29.40 US mpg और 35.31 UK mpg के बराबर है।"
 ],
 "faq": [
  ["एक ही गाड़ी के लिए US mpg और UK mpg अलग क्यों होते हैं?", "US गैलन (3.785 लीटर) UK इंपीरियल गैलन (4.546 लीटर) से छोटा होता है, इसलिए एक ही ईंधन दक्षता पर UK mpg का आंकड़ा US mpg से ज़्यादा आता है।"],
  ["L/100km कम होने पर दक्षता अच्छी क्यों मानी जाती है?", "L/100km यह बताता है कि तय दूरी (100 किमी) तय करने में कितने लीटर ईंधन लगा; कम लीटर लगने का मतलब बेहतर दक्षता है — यह km/L, US mpg और UK mpg से उल्टा है, जहां ज़्यादा आंकड़ा बेहतर दक्षता दिखाता है।"],
  ["मुझे कौन-सी इकाई इस्तेमाल करनी चाहिए?", "अपने देश या गाड़ी की मैनुअल में इस्तेमाल होने वाली इकाई अपनाएं: दुनिया के ज़्यादातर हिस्सों में km/L या L/100km आम है, जबकि US और UK में mpg (अलग-अलग गैलन आकार के साथ) मानक है।"]
 ],
 "labels": {"unit": "इनपुट इकाई", "value": "मान"},
 "alert": "कृपया 0 से बड़ा मान डालें।",
},
"en": {
 "title": "Fuel Efficiency Converter - km/L, L/100km, US mpg, UK mpg",
 "meta": "Enter a fuel efficiency value in km/L, L/100km, US mpg, or UK mpg to instantly see it converted into all four units.",
 "card_desc": "Choose the unit you have, enter the value, and see it converted into the other three units at once.",
 "nav": "Fuel Efficiency",
 "home_desc": "Convert between km/L, L/100km, US mpg, and UK mpg",
 "usage": [
  "Choose the unit your value is currently in (km/L, L/100km, US mpg, or UK mpg).",
  "Enter the value.",
  "Click \"Calculate\" to see it converted into all four units at once."
 ],
 "method": "All values are converted through km/L as a common base. L/100km is the inverse of km/L scaled by 100. US mpg uses 1 US gallon = 3.785411784 liters and 1 mile = 1.609344 km, and UK mpg uses the larger Imperial gallon (4.54609 liters), so the same km/L value gives a higher UK mpg than US mpg.",
 "examples": [
  "Example 1 — 15 km/L converts to about 6.67 L/100km, 35.28 US mpg, and 42.37 UK mpg.",
  "Example 2 — 8 L/100km (12.5 km/L) converts to about 29.40 US mpg and 35.31 UK mpg."
 ],
 "faq": [
  ["Why are US mpg and UK mpg different for the same car?", "A US gallon (3.785 liters) is smaller than a UK Imperial gallon (4.546 liters), so the same fuel efficiency produces a higher mpg number in the UK than in the US."],
  ["Why does a lower L/100km mean better fuel efficiency?", "L/100km measures how many liters are used to travel a fixed distance, so using fewer liters for the same 100 km means the car is more efficient — the opposite of km/L, US mpg, and UK mpg, where higher numbers mean better efficiency."],
  ["Which unit should I use?", "Use whichever unit your country or car's manual uses: km/L or L/100km is common in most of the world, while mpg is standard in the US and UK (with different gallon sizes)."]
 ],
 "labels": {"unit": "Input unit", "value": "Value"},
 "alert": "Please enter a value greater than 0.",
},
"id": {
 "title": "Konverter Efisiensi Bahan Bakar - km/L, L/100km, mpg AS, mpg Inggris",
 "meta": "Masukkan nilai efisiensi bahan bakar dalam km/L, L/100km, mpg AS, atau mpg Inggris untuk langsung melihat konversinya ke keempat satuan.",
 "card_desc": "Pilih satuan nilai yang Anda miliki, masukkan nilainya, dan lihat hasil konversi ke tiga satuan lainnya sekaligus.",
 "nav": "Efisiensi Bahan Bakar",
 "home_desc": "Konversi antara km/L, L/100km, mpg AS, dan mpg Inggris",
 "usage": [
  "Pilih satuan nilai Anda saat ini (km/L, L/100km, mpg AS, atau mpg Inggris).",
  "Masukkan nilainya.",
  "Klik \"Hitung\" untuk melihat hasil konversi ke keempat satuan sekaligus."
 ],
 "method": "Semua nilai dikonversi melalui km/L sebagai dasar. L/100km adalah kebalikan dari km/L dikalikan 100. mpg AS menggunakan 1 galon AS = 3,785411784 liter dan 1 mil = 1,609344 km, sedangkan mpg Inggris menggunakan galon Imperial yang lebih besar (4,54609 liter), sehingga nilai km/L yang sama menghasilkan mpg Inggris lebih tinggi daripada mpg AS.",
 "examples": [
  "Contoh 1 — 15 km/L setara dengan sekitar 6,67 L/100km, 35,28 mpg AS, dan 42,37 mpg Inggris.",
  "Contoh 2 — 8 L/100km (12,5 km/L) setara dengan sekitar 29,40 mpg AS dan 35,31 mpg Inggris."
 ],
 "faq": [
  ["Mengapa mpg AS dan mpg Inggris berbeda untuk mobil yang sama?", "Galon AS (3,785 liter) lebih kecil dari galon Imperial Inggris (4,546 liter), sehingga efisiensi bahan bakar yang sama menghasilkan angka mpg lebih tinggi di Inggris dibanding di AS."],
  ["Mengapa L/100km yang lebih rendah berarti lebih efisien?", "L/100km mengukur berapa liter yang digunakan untuk menempuh jarak tetap (100 km), jadi semakin sedikit liter yang dipakai berarti semakin efisien — kebalikan dari km/L, mpg AS, dan mpg Inggris, di mana angka lebih tinggi berarti lebih efisien."],
  ["Satuan mana yang sebaiknya saya pakai?", "Gunakan satuan yang dipakai negara atau buku manual mobil Anda: km/L atau L/100km umum di sebagian besar dunia, sedangkan mpg standar di AS dan Inggris (dengan ukuran galon berbeda)."]
 ],
 "labels": {"unit": "Satuan input", "value": "Nilai"},
 "alert": "Masukkan nilai lebih besar dari 0.",
},
"pt-br": {
 "title": "Conversor de Consumo de Combustível - km/L, L/100km, mpg EUA, mpg Reino Unido",
 "meta": "Informe um valor de consumo em km/L, L/100km, mpg dos EUA ou mpg do Reino Unido para ver a conversão instantânea nas quatro unidades.",
 "card_desc": "Escolha a unidade do seu valor, informe o número e veja a conversão nas outras três unidades ao mesmo tempo.",
 "nav": "Consumo de Combustível",
 "home_desc": "Converta entre km/L, L/100km, mpg dos EUA e mpg do Reino Unido",
 "usage": [
  "Escolha a unidade em que seu valor está (km/L, L/100km, mpg EUA ou mpg Reino Unido).",
  "Informe o valor.",
  "Clique em \"Calcular\" para ver a conversão nas quatro unidades de uma vez."
 ],
 "method": "Todos os valores são convertidos usando km/L como base comum. L/100km é o inverso de km/L multiplicado por 100. O mpg dos EUA usa 1 galão americano = 3,785411784 litros e 1 milha = 1,609344 km, enquanto o mpg do Reino Unido usa o galão imperial, maior (4,54609 litros), então o mesmo valor em km/L gera um mpg do Reino Unido maior que o mpg dos EUA.",
 "examples": [
  "Exemplo 1 — 15 km/L equivale a cerca de 6,67 L/100km, 35,28 mpg EUA e 42,37 mpg Reino Unido.",
  "Exemplo 2 — 8 L/100km (12,5 km/L) equivale a cerca de 29,40 mpg EUA e 35,31 mpg Reino Unido."
 ],
 "faq": [
  ["Por que o mpg dos EUA e do Reino Unido são diferentes para o mesmo carro?", "O galão americano (3,785 litros) é menor que o galão imperial britânico (4,546 litros), então o mesmo consumo gera um número de mpg maior no Reino Unido do que nos EUA."],
  ["Por que um L/100km menor significa melhor eficiência?", "L/100km mede quantos litros são usados para percorrer uma distância fixa (100 km), então usar menos litros significa mais eficiência — o oposto de km/L, mpg EUA e mpg Reino Unido, onde números maiores significam mais eficiência."],
  ["Qual unidade devo usar?", "Use a unidade do seu país ou do manual do carro: km/L ou L/100km é comum na maior parte do mundo, enquanto mpg é padrão nos EUA e no Reino Unido (com tamanhos de galão diferentes)."]
 ],
 "labels": {"unit": "Unidade de entrada", "value": "Valor"},
 "alert": "Informe um valor maior que 0.",
},
"ru": {
 "title": "Конвертер расхода топлива - км/л, л/100км, US mpg, UK mpg",
 "meta": "Введите значение расхода топлива в км/л, л/100км, US mpg или UK mpg, чтобы мгновенно получить его в остальных трёх единицах.",
 "card_desc": "Выберите единицу вашего значения, введите его и сразу увидите пересчёт в остальные три единицы.",
 "nav": "Расход топлива",
 "home_desc": "Пересчёт между км/л, л/100км, US mpg и UK mpg",
 "usage": [
  "Выберите, в какой единице указано ваше значение (км/л, л/100км, US mpg или UK mpg).",
  "Введите значение.",
  "Нажмите «Рассчитать», чтобы увидеть пересчёт сразу во все четыре единицы."
 ],
 "method": "Все значения пересчитываются через км/л как общую базу. Л/100км — это обратная величина км/л, умноженная на 100. US mpg рассчитывается исходя из того, что 1 американский галлон = 3,785411784 литра, а 1 миля = 1,609344 км, тогда как UK mpg использует больший имперский галлон (4,54609 литра), поэтому при одинаковом значении км/л UK mpg получается выше, чем US mpg.",
 "examples": [
  "Пример 1 — 15 км/л соответствует примерно 6,67 л/100км, 35,28 US mpg и 42,37 UK mpg.",
  "Пример 2 — 8 л/100км (12,5 км/л) соответствует примерно 29,40 US mpg и 35,31 UK mpg."
 ],
 "faq": [
  ["Почему US mpg и UK mpg отличаются для одной и той же машины?", "Американский галлон (3,785 литра) меньше британского имперского галлона (4,546 литра), поэтому при одинаковом расходе топлива значение UK mpg получается выше, чем US mpg."],
  ["Почему меньшее значение л/100км означает лучшую экономичность?", "Л/100км показывает, сколько литров тратится на фиксированное расстояние (100 км), поэтому чем меньше литров, тем экономичнее автомобиль — это противоположно км/л, US mpg и UK mpg, где большее число означает лучшую экономичность."],
  ["Какую единицу измерения использовать?", "Используйте ту, что принята в вашей стране или указана в руководстве автомобиля: км/л или л/100км распространены в большинстве стран мира, а mpg — стандарт в США и Великобритании (с разными размерами галлона)."]
 ],
 "labels": {"unit": "Единица ввода", "value": "Значение"},
 "alert": "Пожалуйста, введите значение больше 0.",
},
"ur": {
 "title": "فیول ایفیشنسی کنورٹر - km/L، L/100km، US mpg، UK mpg آپس میں تبدیل کریں",
 "meta": "km/L، L/100km، US mpg یا UK mpg میں سے کوئی بھی ویلیو درج کریں اور فوراً باقی تینوں یونٹس میں تبدیل شدہ ویلیو دیکھیں۔",
 "card_desc": "اپنی ویلیو کا یونٹ منتخب کریں، ویلیو درج کریں، اور باقی تینوں یونٹس میں فوراً دیکھیں۔",
 "nav": "فیول ایفیشنسی کنورٹر",
 "home_desc": "km/L، L/100km، US اور UK mpg آپس میں تبدیل کریں",
 "usage": [
  "اپنی ویلیو کس یونٹ میں ہے وہ منتخب کریں (km/L، L/100km، US mpg، یا UK mpg)۔",
  "ویلیو درج کریں۔",
  "\"حساب لگائیں\" دبانے پر باقی تینوں یونٹس میں تبدیل شدہ ویلیو ایک ساتھ نظر آئے گی۔"
 ],
 "method": "تمام ویلیوز km/L کو بنیاد بنا کر آپس میں تبدیل کی جاتی ہیں۔ L/100km، km/L کے الٹ کو 100 سے ضرب دے کر نکالا جاتا ہے۔ US mpg کے لیے 1 US گیلن = 3.785411784 لیٹر اور 1 میل = 1.609344 کلومیٹر لیا جاتا ہے، جبکہ UK mpg بڑے امپیریل گیلن (4.54609 لیٹر) پر مبنی ہے، اس لیے ایک ہی km/L ویلیو پر UK mpg، US mpg سے زیادہ آتا ہے۔",
 "examples": [
  "مثال 1 — 15 km/L تقریباً 6.67 L/100km، 35.28 US mpg، اور 42.37 UK mpg کے برابر ہے۔",
  "مثال 2 — 8 L/100km (یعنی 12.5 km/L) تقریباً 29.40 US mpg اور 35.31 UK mpg کے برابر ہے۔"
 ],
 "faq": [
  ["ایک ہی گاڑی کے لیے US mpg اور UK mpg مختلف کیوں ہوتے ہیں؟", "US گیلن (3.785 لیٹر) UK امپیریل گیلن (4.546 لیٹر) سے چھوٹا ہوتا ہے، اس لیے ایک ہی فیول ایفیشنسی پر UK mpg کا ہندسہ US mpg سے زیادہ آتا ہے۔"],
  ["L/100km کم ہونے پر ایفیشنسی اچھی کیوں مانی جاتی ہے؟", "L/100km یہ بتاتا ہے کہ مقررہ فاصلہ (100 کلومیٹر) طے کرنے میں کتنے لیٹر خرچ ہوئے؛ کم لیٹر خرچ ہونے کا مطلب بہتر ایفیشنسی ہے — یہ km/L، US mpg اور UK mpg کے برعکس ہے جہاں زیادہ ہندسہ بہتر ایفیشنسی ظاہر کرتا ہے۔"],
  ["مجھے کون سا یونٹ استعمال کرنا چاہیے؟", "اپنے ملک یا گاڑی کے مینول میں استعمال ہونے والا یونٹ استعمال کریں: دنیا کے بیشتر حصوں میں km/L یا L/100km عام ہے، جبکہ US اور UK میں mpg معیاری ہے (مختلف گیلن سائز کے ساتھ)۔"]
 ],
 "labels": {"unit": "ان پٹ یونٹ", "value": "ویلیو"},
 "alert": "براہ کرم 0 سے بڑی ویلیو درج کریں۔",
},
"es": {
 "title": "Conversor de Eficiencia de Combustible - km/L, L/100km, mpg EE. UU., mpg RU",
 "meta": "Ingresa un valor de eficiencia de combustible en km/L, L/100km, mpg de EE. UU. o mpg del Reino Unido y conviértelo al instante a las otras tres unidades.",
 "card_desc": "Elige la unidad de tu valor, ingrésalo y velo convertido a las otras tres unidades al instante.",
 "nav": "Eficiencia de Combustible",
 "home_desc": "Convierte entre km/L, L/100km, mpg de EE. UU. y mpg del Reino Unido",
 "usage": [
  "Elige la unidad en la que está tu valor (km/L, L/100km, mpg EE. UU. o mpg RU).",
  "Ingresa el valor.",
  "Presiona \"Calcular\" para verlo convertido a las cuatro unidades a la vez."
 ],
 "method": "Todos los valores se convierten usando km/L como base común. L/100km es el inverso de km/L multiplicado por 100. El mpg de EE. UU. usa 1 galón estadounidense = 3.785411784 litros y 1 milla = 1.609344 km, mientras que el mpg del Reino Unido usa el galón imperial, más grande (4.54609 litros), por lo que el mismo valor en km/L da un mpg del Reino Unido mayor que el mpg de EE. UU.",
 "examples": [
  "Ejemplo 1 — 15 km/L equivale a unos 6.67 L/100km, 35.28 mpg EE. UU. y 42.37 mpg RU.",
  "Ejemplo 2 — 8 L/100km (12.5 km/L) equivale a unos 29.40 mpg EE. UU. y 35.31 mpg RU."
 ],
 "faq": [
  ["¿Por qué el mpg de EE. UU. y del Reino Unido son distintos para el mismo auto?", "El galón estadounidense (3.785 litros) es más pequeño que el galón imperial británico (4.546 litros), así que la misma eficiencia da un número de mpg mayor en el Reino Unido que en EE. UU."],
  ["¿Por qué un L/100km más bajo significa mejor eficiencia?", "L/100km mide cuántos litros se usan para recorrer una distancia fija (100 km), así que usar menos litros significa más eficiencia — lo contrario de km/L, mpg EE. UU. y mpg RU, donde un número más alto significa mejor eficiencia."],
  ["¿Qué unidad debería usar?", "Usa la que utilice tu país o el manual de tu auto: km/L o L/100km es común en la mayor parte del mundo, mientras que mpg es el estándar en EE. UU. y el Reino Unido (con tamaños de galón distintos)."]
 ],
 "labels": {"unit": "Unidad de entrada", "value": "Valor"},
 "alert": "Ingresa un valor mayor que 0.",
},
"ja": {
 "title": "燃費変換機 - km/L・L/100km・US mpg・UK mpgを相互変換",
 "meta": "km/L、L/100km、US mpg、UK mpgのいずれかの数値を入力すると、残り3つの単位にすぐ変換されます。",
 "card_desc": "持っている数値の単位を選び、値を入力すると残り3つの単位に一度に変換されます。",
 "nav": "燃費変換機",
 "home_desc": "km/L・L/100km・US mpg・UK mpgを相互変換",
 "usage": [
  "今の値がどの単位か選びます(km/L、L/100km、US mpg、UK mpg)。",
  "値を入力します。",
  "「計算する」を押すと残り3つの単位に変換された値が一度に表示されます。"
 ],
 "method": "すべての値はkm/Lを基準に相互変換されます。L/100kmはkm/Lの逆数に100を掛けた値です。US mpgは1USガロン=3.785411784リットル、1マイル=1.609344kmとして計算し、UK mpgはそれより大きいインペリアルガロン(4.54609リットル)を基準にするため、同じkm/Lの値でもUK mpgのほうがUS mpgより大きくなります。",
 "examples": [
  "例1 — 15km/Lは約6.67 L/100km、35.28 US mpg、42.37 UK mpgに相当します。",
  "例2 — 8 L/100km(12.5km/L)は約29.40 US mpg、35.31 UK mpgに相当します。"
 ],
 "faq": [
  ["同じ車なのになぜUS mpgとUK mpgが違うのですか?", "USガロン(3.785リットル)は英国のインペリアルガロン(4.546リットル)より小さいため、同じ燃費でもUK mpgの数値はUS mpgより大きくなります。"],
  ["L/100kmは数値が小さいほどなぜ燃費が良いのですか?", "L/100kmは決まった距離(100km)を走るのに使う燃料の量を表すため、使う燃料が少ないほど効率が良いことになります。km/L・US mpg・UK mpgは逆に数値が大きいほど効率が良いです。"],
  ["どの単位を使えばいいですか?", "自分の国や車の説明書で使われている単位を使ってください。世界の多くの地域ではkm/LまたはL/100kmが一般的で、米国と英国ではmpg(ガロンの大きさが異なる)が標準です。"]
 ],
 "labels": {"unit": "入力単位", "value": "値"},
 "alert": "0より大きい値を入力してください。",
},
"tl": {
 "title": "Converter ng Fuel Efficiency - km/L, L/100km, US mpg, UK mpg",
 "meta": "Ilagay ang halaga ng fuel efficiency sa km/L, L/100km, US mpg, o UK mpg para makita agad ito na na-convert sa lahat ng apat na yunit.",
 "card_desc": "Piliin ang yunit ng halaga mo, ilagay ang numero, at makita agad ang conversion sa tatlong yunit na iba.",
 "nav": "Fuel Efficiency",
 "home_desc": "I-convert sa pagitan ng km/L, L/100km, US mpg, at UK mpg",
 "usage": [
  "Piliin kung anong yunit ang kasalukuyang halaga mo (km/L, L/100km, US mpg, o UK mpg).",
  "Ilagay ang halaga.",
  "I-click ang \"Kalkulahin\" para makita ito na na-convert sa lahat ng apat na yunit nang sabay-sabay."
 ],
 "method": "Lahat ng halaga ay kina-convert gamit ang km/L bilang batayan. Ang L/100km ay ang kabaligtaran ng km/L na pinarami ng 100. Ang US mpg ay gumagamit ng 1 US gallon = 3.785411784 litro at 1 milya = 1.609344 km, samantalang ang UK mpg ay gumagamit ng mas malaking Imperial gallon (4.54609 litro), kaya ang parehong halaga ng km/L ay mas mataas ang resultang UK mpg kaysa US mpg.",
 "examples": [
  "Halimbawa 1 — Ang 15 km/L ay humigit-kumulang 6.67 L/100km, 35.28 US mpg, at 42.37 UK mpg.",
  "Halimbawa 2 — Ang 8 L/100km (12.5 km/L) ay humigit-kumulang 29.40 US mpg at 35.31 UK mpg."
 ],
 "faq": [
  ["Bakit magkaiba ang US mpg at UK mpg para sa parehong sasakyan?", "Mas maliit ang US gallon (3.785 litro) kaysa sa UK Imperial gallon (4.546 litro), kaya ang parehong fuel efficiency ay nagbubunga ng mas mataas na UK mpg kaysa US mpg."],
  ["Bakit mas mababang L/100km ang ibig sabihin ay mas magandang fuel efficiency?", "Sinusukat ng L/100km kung ilang litro ang ginagamit para tumakbo ng nakatakdang distansya (100 km), kaya mas kaunting litro ang ginamit ay mas magandang efficiency — kabaligtaran ito ng km/L, US mpg, at UK mpg kung saan mas mataas na numero ang mas magandang efficiency."],
  ["Aling yunit ang dapat kong gamitin?", "Gamitin ang yunit na ginagamit sa iyong bansa o sa manual ng sasakyan mo: karaniwan ang km/L o L/100km sa karamihan ng mundo, habang ang mpg ang pamantayan sa US at UK (may magkaibang laki ng gallon)."]
 ],
 "labels": {"unit": "Input na yunit", "value": "Halaga"},
 "alert": "Maglagay ng halagang higit sa 0.",
},
"ar": {
 "title": "محول كفاءة الوقود - تحويل بين km/L وL/100km وmpg الأمريكي وmpg البريطاني",
 "meta": "أدخل قيمة كفاءة الوقود بوحدة km/L أو L/100km أو mpg الأمريكي أو mpg البريطاني لتحويلها فورًا إلى الوحدات الأربع جميعها.",
 "card_desc": "اختر وحدة القيمة التي لديك، أدخلها، وشاهد تحويلها إلى الوحدات الثلاث الأخرى فورًا.",
 "nav": "كفاءة الوقود",
 "home_desc": "التحويل بين km/L وL/100km وmpg الأمريكي وmpg البريطاني",
 "usage": [
  "اختر الوحدة التي بها قيمتك حاليًا (km/L أو L/100km أو mpg الأمريكي أو mpg البريطاني).",
  "أدخل القيمة.",
  "اضغط \"احسب\" لرؤية تحويلها إلى الوحدات الأربع جميعًا في آنٍ واحد."
 ],
 "method": "تُحوَّل جميع القيم عبر km/L كأساس مشترك. L/100km هو مقلوب km/L مضروبًا في 100. يعتمد mpg الأمريكي على أن الغالون الأمريكي = 3.785411784 لتر والميل = 1.609344 كم، بينما يعتمد mpg البريطاني على الغالون الإمبراطوري الأكبر (4.54609 لتر)، لذا فإن نفس قيمة km/L تعطي mpg بريطانيًا أعلى من mpg الأمريكي.",
 "examples": [
  "مثال 1 — يعادل 15 km/L نحو 6.67 L/100km و35.28 mpg أمريكي و42.37 mpg بريطاني.",
  "مثال 2 — يعادل 8 L/100km (أي 12.5 km/L) نحو 29.40 mpg أمريكي و35.31 mpg بريطاني."
 ],
 "faq": [
  ["لماذا يختلف mpg الأمريكي عن mpg البريطاني لنفس السيارة؟", "الغالون الأمريكي (3.785 لتر) أصغر من الغالون الإمبراطوري البريطاني (4.546 لتر)، لذا فإن نفس كفاءة الوقود تعطي رقم mpg أعلى في بريطانيا منه في أمريكا."],
  ["لماذا يعني انخفاض L/100km كفاءة أفضل؟", "يقيس L/100km عدد اللترات المستخدمة لقطع مسافة ثابتة (100 كم)، فاستخدام لترات أقل يعني كفاءة أعلى — وهو عكس km/L وmpg الأمريكي وmpg البريطاني حيث يعني الرقم الأكبر كفاءة أفضل."],
  ["ما الوحدة التي يجب أن أستخدمها؟", "استخدم الوحدة المعتمدة في بلدك أو في دليل سيارتك: يشيع استخدام km/L أو L/100km في معظم أنحاء العالم، بينما mpg هو المعيار في أمريكا وبريطانيا (بأحجام غالون مختلفة)."]
 ],
 "labels": {"unit": "وحدة الإدخال", "value": "القيمة"},
 "alert": "يرجى إدخال قيمة أكبر من 0.",
},
"vi": {
 "title": "Bộ Chuyển Đổi Mức Tiêu Hao Nhiên Liệu - km/L, L/100km, mpg Mỹ, mpg Anh",
 "meta": "Nhập giá trị mức tiêu hao nhiên liệu theo km/L, L/100km, mpg Mỹ hoặc mpg Anh để chuyển đổi ngay sang cả bốn đơn vị.",
 "card_desc": "Chọn đơn vị của giá trị bạn có, nhập số liệu và xem kết quả chuyển đổi sang ba đơn vị còn lại ngay lập tức.",
 "nav": "Mức Tiêu Hao Nhiên Liệu",
 "home_desc": "Chuyển đổi giữa km/L, L/100km, mpg Mỹ và mpg Anh",
 "usage": [
  "Chọn đơn vị hiện tại của giá trị (km/L, L/100km, mpg Mỹ, hoặc mpg Anh).",
  "Nhập giá trị.",
  "Bấm \"Tính\" để xem giá trị được chuyển đổi sang cả bốn đơn vị cùng lúc."
 ],
 "method": "Mọi giá trị đều được chuyển đổi qua km/L làm cơ sở chung. L/100km là nghịch đảo của km/L nhân với 100. mpg Mỹ dùng 1 gallon Mỹ = 3,785411784 lít và 1 dặm = 1,609344 km, còn mpg Anh dùng gallon Imperial lớn hơn (4,54609 lít), nên cùng một giá trị km/L sẽ cho mpg Anh cao hơn mpg Mỹ.",
 "examples": [
  "Ví dụ 1 — 15 km/L tương đương khoảng 6,67 L/100km, 35,28 mpg Mỹ, và 42,37 mpg Anh.",
  "Ví dụ 2 — 8 L/100km (12,5 km/L) tương đương khoảng 29,40 mpg Mỹ và 35,31 mpg Anh."
 ],
 "faq": [
  ["Tại sao mpg Mỹ và mpg Anh khác nhau đối với cùng một chiếc xe?", "Gallon Mỹ (3,785 lít) nhỏ hơn gallon Imperial của Anh (4,546 lít), nên cùng một mức tiêu hao nhiên liệu sẽ cho ra số mpg Anh cao hơn mpg Mỹ."],
  ["Tại sao L/100km càng thấp lại càng tiết kiệm nhiên liệu?", "L/100km đo số lít nhiên liệu dùng để đi một quãng đường cố định (100 km), nên dùng ít lít hơn nghĩa là tiết kiệm hơn — ngược với km/L, mpg Mỹ và mpg Anh, nơi số càng cao càng tiết kiệm."],
  ["Tôi nên dùng đơn vị nào?", "Hãy dùng đơn vị mà quốc gia bạn hoặc sách hướng dẫn xe sử dụng: km/L hoặc L/100km phổ biến ở hầu hết thế giới, còn mpg là chuẩn ở Mỹ và Anh (với kích thước gallon khác nhau)."]
 ],
 "labels": {"unit": "Đơn vị đầu vào", "value": "Giá trị"},
 "alert": "Vui lòng nhập giá trị lớn hơn 0.",
},
"de": {
 "title": "Kraftstoffverbrauchsrechner - km/L, L/100km, US mpg, UK mpg umrechnen",
 "meta": "Wert in km/L, L/100km, US mpg oder UK mpg eingeben und sofort in alle vier Einheiten umgerechnet sehen.",
 "card_desc": "Einheit Ihres Werts wählen, Wert eingeben und sofort in die anderen drei Einheiten umgerechnet sehen.",
 "nav": "Kraftstoffverbrauch",
 "home_desc": "Umrechnung zwischen km/L, L/100km, US mpg und UK mpg",
 "usage": [
  "Wählen Sie, in welcher Einheit Ihr Wert aktuell vorliegt (km/L, L/100km, US mpg oder UK mpg).",
  "Wert eingeben.",
  "Auf \"Berechnen\" klicken, um den Wert sofort in alle vier Einheiten umgerechnet zu sehen."
 ],
 "method": "Alle Werte werden über km/L als gemeinsame Basis umgerechnet. L/100km ist der Kehrwert von km/L, multipliziert mit 100. US mpg basiert auf 1 US-Gallone = 3,785411784 Liter und 1 Meile = 1,609344 km, während UK mpg die größere Imperial-Gallone (4,54609 Liter) verwendet, sodass derselbe km/L-Wert einen höheren UK-mpg- als US-mpg-Wert ergibt.",
 "examples": [
  "Beispiel 1 — 15 km/L entsprechen etwa 6,67 L/100km, 35,28 US mpg und 42,37 UK mpg.",
  "Beispiel 2 — 8 L/100km (12,5 km/L) entsprechen etwa 29,40 US mpg und 35,31 UK mpg."
 ],
 "faq": [
  ["Warum unterscheiden sich US mpg und UK mpg beim gleichen Auto?", "Eine US-Gallone (3,785 Liter) ist kleiner als eine britische Imperial-Gallone (4,546 Liter), daher ergibt derselbe Kraftstoffverbrauch in Großbritannien eine höhere mpg-Zahl als in den USA."],
  ["Warum bedeutet ein niedrigerer L/100km-Wert eine bessere Effizienz?", "L/100km misst, wie viele Liter für eine feste Strecke (100 km) verbraucht werden, daher bedeuten weniger Liter eine höhere Effizienz — anders als bei km/L, US mpg und UK mpg, wo höhere Zahlen eine bessere Effizienz bedeuten."],
  ["Welche Einheit sollte ich verwenden?", "Verwenden Sie die Einheit, die in Ihrem Land oder im Handbuch Ihres Autos üblich ist: km/L oder L/100km ist in den meisten Ländern gängig, während mpg in den USA und Großbritannien Standard ist (mit unterschiedlichen Gallonengrößen)."]
 ],
 "labels": {"unit": "Eingabeeinheit", "value": "Wert"},
 "alert": "Bitte einen Wert größer als 0 eingeben.",
},
"bn": {
 "title": "জ্বালানি দক্ষতা কনভার্টার - km/L, L/100km, US mpg, UK mpg রূপান্তর করুন",
 "meta": "km/L, L/100km, US mpg বা UK mpg-এর যেকোনো মান দিন, সঙ্গে সঙ্গে বাকি তিনটি এককে রূপান্তরিত মান দেখুন।",
 "card_desc": "আপনার মানের একক বেছে নিন, মান দিন এবং সঙ্গে সঙ্গে বাকি তিনটি এককে দেখুন।",
 "nav": "জ্বালানি দক্ষতা",
 "home_desc": "km/L, L/100km, US ও UK mpg-এর মধ্যে রূপান্তর করুন",
 "usage": [
  "আপনার মান বর্তমানে কোন এককে আছে তা বেছে নিন (km/L, L/100km, US mpg, বা UK mpg)।",
  "মান দিন।",
  "\"হিসাব করুন\" চাপলে বাকি তিনটি এককে রূপান্তরিত মান একসঙ্গে দেখা যাবে।"
 ],
 "method": "সব মান km/L-কে ভিত্তি ধরে আপসে রূপান্তরিত হয়। L/100km হলো km/L-এর বিপরীত মানকে ১০০ দিয়ে গুণ করা মান। US mpg-এর হিসাবে ১ US গ্যালন = ৩.৭৮৫৪১১৭৮৪ লিটার এবং ১ মাইল = ১.৬০৯৩৪৪ কিমি ধরা হয়, আর UK mpg বড় ইম্পেরিয়াল গ্যালন (৪.৫৪৬০৯ লিটার) ব্যবহার করে, তাই একই km/L মানে UK mpg, US mpg-এর চেয়ে বেশি হয়।",
 "examples": [
  "উদাহরণ ১ — ১৫ km/L প্রায় ৬.৬৭ L/100km, ৩৫.২৮ US mpg এবং ৪২.৩৭ UK mpg-এর সমান।",
  "উদাহরণ ২ — ৮ L/100km (অর্থাৎ ১২.৫ km/L) প্রায় ২৯.৪০ US mpg এবং ৩৫.৩১ UK mpg-এর সমান।"
 ],
 "faq": [
  ["একই গাড়ির জন্য US mpg ও UK mpg আলাদা কেন?", "US গ্যালন (৩.৭৮৫ লিটার) UK ইম্পেরিয়াল গ্যালনের (৪.৫৪৬ লিটার) চেয়ে ছোট, তাই একই জ্বালানি দক্ষতায় UK mpg-এর সংখ্যা US mpg-এর চেয়ে বেশি আসে।"],
  ["L/100km কম হলে দক্ষতা ভালো বলা হয় কেন?", "L/100km নির্দিষ্ট দূরত্ব (১০০ কিমি) যেতে কত লিটার লাগে তা মাপে, তাই কম লিটার লাগা মানেই বেশি দক্ষতা — এটি km/L, US mpg ও UK mpg-এর বিপরীত, যেখানে বেশি সংখ্যা মানেই বেশি দক্ষতা।"],
  ["আমার কোন একক ব্যবহার করা উচিত?", "আপনার দেশ বা গাড়ির ম্যানুয়ালে যে একক ব্যবহার হয় সেটাই ব্যবহার করুন: বিশ্বের বেশিরভাগ জায়গায় km/L বা L/100km প্রচলিত, আর US ও UK-তে mpg (ভিন্ন গ্যালন আকারসহ) প্রমিত।"]
 ],
 "labels": {"unit": "ইনপুট একক", "value": "মান"},
 "alert": "অনুগ্রহ করে ০-এর বেশি মান দিন।",
},
"tr": {
 "title": "Yakıt Verimliliği Dönüştürücü - km/L, L/100km, US mpg, UK mpg",
 "meta": "km/L, L/100km, US mpg veya UK mpg cinsinden bir değer girin ve anında dört birime dönüştürülmüş halini görün.",
 "card_desc": "Sahip olduğunuz değerin birimini seçin, değeri girin ve diğer üç birime anında dönüştürülmüş halini görün.",
 "nav": "Yakıt Verimliliği",
 "home_desc": "km/L, L/100km, US mpg ve UK mpg arasında dönüştürün",
 "usage": [
  "Değerinizin hangi birimde olduğunu seçin (km/L, L/100km, US mpg veya UK mpg).",
  "Değeri girin.",
  "\"Hesapla\"ya tıklayarak değerin dört birime birden dönüştürülmüş halini görün."
 ],
 "method": "Tüm değerler ortak taban olarak km/L üzerinden dönüştürülür. L/100km, km/L'nin tersinin 100 ile çarpılmasıyla bulunur. US mpg, 1 ABD galonu = 3,785411784 litre ve 1 mil = 1,609344 km değerlerini kullanırken, UK mpg daha büyük olan Imperial galonu (4,54609 litre) kullanır, bu yüzden aynı km/L değeri UK mpg'de US mpg'den daha yüksek çıkar.",
 "examples": [
  "Örnek 1 — 15 km/L yaklaşık 6,67 L/100km, 35,28 US mpg ve 42,37 UK mpg'ye denk gelir.",
  "Örnek 2 — 8 L/100km (12,5 km/L) yaklaşık 29,40 US mpg ve 35,31 UK mpg'ye denk gelir."
 ],
 "faq": [
  ["Aynı araç için US mpg ve UK mpg neden farklı?", "ABD galonu (3,785 litre), İngiliz Imperial galonundan (4,546 litre) daha küçüktür, bu yüzden aynı yakıt verimliliği İngiltere'de ABD'den daha yüksek bir mpg değeri verir."],
  ["Daha düşük L/100km neden daha iyi verimlilik anlamına gelir?", "L/100km, sabit bir mesafeyi (100 km) gitmek için kullanılan litre sayısını ölçer, bu yüzden daha az litre kullanmak daha yüksek verimlilik demektir — bu, daha yüksek sayının daha iyi verimlilik anlamına geldiği km/L, US mpg ve UK mpg'nin tam tersidir."],
  ["Hangi birimi kullanmalıyım?", "Ülkenizde veya aracınızın kullanım kılavuzunda kullanılan birimi kullanın: km/L veya L/100km dünyanın çoğu yerinde yaygındır, mpg ise ABD ve İngiltere'de standarttır (farklı galon boyutlarıyla)."]
 ],
 "labels": {"unit": "Girdi birimi", "value": "Değer"},
 "alert": "Lütfen 0'dan büyük bir değer girin.",
},
"fa": {
 "title": "مبدل مصرف سوخت - تبدیل km/L و L/100km و mpg آمریکا و mpg بریتانیا",
 "meta": "مقدار مصرف سوخت را به km/L یا L/100km یا mpg آمریکا یا mpg بریتانیا وارد کنید تا فوراً به هر چهار واحد تبدیل شود.",
 "card_desc": "واحد مقدار خود را انتخاب کنید، آن را وارد کنید و فوراً تبدیل‌شده به سه واحد دیگر را ببینید.",
 "nav": "مصرف سوخت",
 "home_desc": "تبدیل بین km/L و L/100km و mpg آمریکا و mpg بریتانیا",
 "usage": [
  "انتخاب کنید مقدار فعلی شما در چه واحدی است (km/L، L/100km، mpg آمریکا یا mpg بریتانیا).",
  "مقدار را وارد کنید.",
  "روی «محاسبه» بزنید تا مقدار به هر چهار واحد به‌طور همزمان تبدیل شود."
 ],
 "method": "همه مقادیر با km/L به‌عنوان مبنای مشترک تبدیل می‌شوند. L/100km معکوس km/L ضرب‌شده در ۱۰۰ است. mpg آمریکا بر اساس ۱ گالن آمریکایی = ۳.۷۸۵۴۱۱۷۸۴ لیتر و ۱ مایل = ۱.۶۰۹۳۴۴ کیلومتر محاسبه می‌شود، در حالی که mpg بریتانیا از گالن امپریال بزرگ‌تر (۴.۵۴۶۰۹ لیتر) استفاده می‌کند، بنابراین یک مقدار یکسان km/L عدد mpg بریتانیا بالاتری نسبت به mpg آمریکا می‌دهد.",
 "examples": [
  "مثال ۱ — ۱۵ km/L تقریباً معادل ۶.۶۷ L/100km، ۳۵.۲۸ mpg آمریکا و ۴۲.۳۷ mpg بریتانیا است.",
  "مثال ۲ — ۸ L/100km (یعنی ۱۲.۵ km/L) تقریباً معادل ۲۹.۴۰ mpg آمریکا و ۳۵.۳۱ mpg بریتانیا است."
 ],
 "faq": [
  ["چرا mpg آمریکا و mpg بریتانیا برای یک خودرو یکسان متفاوت است؟", "گالن آمریکایی (۳.۷۸۵ لیتر) از گالن امپریال بریتانیا (۴.۵۴۶ لیتر) کوچک‌تر است، بنابراین همان مصرف سوخت عدد mpg بالاتری در بریتانیا نسبت به آمریکا نشان می‌دهد."],
  ["چرا L/100km کمتر به معنای مصرف بهتر است؟", "L/100km نشان می‌دهد برای طی مسافتی ثابت (۱۰۰ کیلومتر) چند لیتر سوخت مصرف شده است، پس مصرف لیتر کمتر یعنی کارایی بالاتر — برخلاف km/L و mpg آمریکا و mpg بریتانیا که عدد بالاتر یعنی کارایی بهتر است."],
  ["از کدام واحد استفاده کنم؟", "از واحدی که در کشور شما یا دفترچه راهنمای خودرو استفاده می‌شود بهره بگیرید: km/L یا L/100km در بیشتر نقاط جهان رایج است، در حالی که mpg استاندارد آمریکا و بریتانیا است (با اندازه گالن متفاوت)."]
 ],
 "labels": {"unit": "واحد ورودی", "value": "مقدار"},
 "alert": "لطفاً مقداری بزرگ‌تر از ۰ وارد کنید.",
},
"th": {
 "title": "ตัวแปลงอัตราสิ้นเปลืองน้ำมัน - km/L, L/100km, US mpg, UK mpg",
 "meta": "กรอกค่าอัตราสิ้นเปลืองน้ำมันเป็น km/L, L/100km, US mpg หรือ UK mpg เพื่อแปลงเป็นทั้งสี่หน่วยทันที",
 "card_desc": "เลือกหน่วยของค่าที่คุณมี กรอกค่า แล้วดูผลลัพธ์ที่แปลงเป็นอีกสามหน่วยทันที",
 "nav": "อัตราสิ้นเปลืองน้ำมัน",
 "home_desc": "แปลงระหว่าง km/L, L/100km, US mpg และ UK mpg",
 "usage": [
  "เลือกว่าค่าปัจจุบันของคุณเป็นหน่วยใด (km/L, L/100km, US mpg หรือ UK mpg)",
  "กรอกค่า",
  "กด \"คำนวณ\" เพื่อดูค่าที่แปลงเป็นทั้งสี่หน่วยพร้อมกัน"
 ],
 "method": "ค่าทั้งหมดถูกแปลงโดยใช้ km/L เป็นฐานร่วม L/100km คือส่วนกลับของ km/L คูณด้วย 100 ส่วน US mpg ใช้หลักการ 1 แกลลอนสหรัฐ = 3.785411784 ลิตร และ 1 ไมล์ = 1.609344 กม. ในขณะที่ UK mpg ใช้แกลลอนอิมพีเรียลที่ใหญ่กว่า (4.54609 ลิตร) ดังนั้นค่า km/L เดียวกันจะให้ UK mpg สูงกว่า US mpg",
 "examples": [
  "ตัวอย่าง 1 — 15 km/L เท่ากับประมาณ 6.67 L/100km, 35.28 US mpg และ 42.37 UK mpg",
  "ตัวอย่าง 2 — 8 L/100km (12.5 km/L) เท่ากับประมาณ 29.40 US mpg และ 35.31 UK mpg"
 ],
 "faq": [
  ["ทำไม US mpg และ UK mpg ของรถคันเดียวกันจึงต่างกัน?", "แกลลอนสหรัฐ (3.785 ลิตร) มีขนาดเล็กกว่าแกลลอนอิมพีเรียลของอังกฤษ (4.546 ลิตร) ดังนั้นอัตราสิ้นเปลืองเดียวกันจะให้ตัวเลข UK mpg สูงกว่า US mpg"],
  ["ทำไม L/100km ยิ่งน้อยยิ่งประหยัดน้ำมัน?", "L/100km วัดปริมาณน้ำมันที่ใช้ในการวิ่งระยะทางที่กำหนด (100 กม.) ยิ่งใช้น้ำมันน้อยยิ่งประหยัด ซึ่งตรงข้ามกับ km/L, US mpg และ UK mpg ที่ยิ่งตัวเลขมากยิ่งประหยัด"],
  ["ควรใช้หน่วยไหนดี?", "ใช้หน่วยที่ประเทศของคุณหรือคู่มือรถใช้: km/L หรือ L/100km พบได้ทั่วไปในหลายประเทศ ส่วน mpg เป็นมาตรฐานในสหรัฐและอังกฤษ (ขนาดแกลลอนต่างกัน)"]
 ],
 "labels": {"unit": "หน่วยที่ป้อน", "value": "ค่า"},
 "alert": "กรุณากรอกค่าที่มากกว่า 0",
},
"fr": {
 "title": "Convertisseur de Consommation de Carburant - km/L, L/100km, mpg US, mpg UK",
 "meta": "Entrez une valeur de consommation en km/L, L/100km, mpg US ou mpg UK pour la convertir instantanément dans les quatre unités.",
 "card_desc": "Choisissez l'unité de votre valeur, saisissez-la et voyez-la convertie dans les trois autres unités instantanément.",
 "nav": "Consommation de Carburant",
 "home_desc": "Convertissez entre km/L, L/100km, mpg US et mpg UK",
 "usage": [
  "Choisissez l'unité actuelle de votre valeur (km/L, L/100km, mpg US ou mpg UK).",
  "Saisissez la valeur.",
  "Cliquez sur \"Calculer\" pour la voir convertie dans les quatre unités à la fois."
 ],
 "method": "Toutes les valeurs sont converties via le km/L comme base commune. Le L/100km est l'inverse du km/L multiplié par 100. Le mpg US utilise 1 gallon US = 3,785411784 litres et 1 mile = 1,609344 km, tandis que le mpg UK utilise le plus grand gallon impérial (4,54609 litres), donc la même valeur en km/L donne un mpg UK plus élevé que le mpg US.",
 "examples": [
  "Exemple 1 — 15 km/L équivaut à environ 6,67 L/100km, 35,28 mpg US et 42,37 mpg UK.",
  "Exemple 2 — 8 L/100km (12,5 km/L) équivaut à environ 29,40 mpg US et 35,31 mpg UK."
 ],
 "faq": [
  ["Pourquoi le mpg US et le mpg UK sont-ils différents pour la même voiture ?", "Le gallon américain (3,785 litres) est plus petit que le gallon impérial britannique (4,546 litres), donc la même consommation donne un chiffre de mpg plus élevé au Royaume-Uni qu'aux États-Unis."],
  ["Pourquoi un L/100km plus bas signifie-t-il une meilleure efficacité ?", "Le L/100km mesure combien de litres sont utilisés pour parcourir une distance fixe (100 km), donc utiliser moins de litres signifie une meilleure efficacité — le contraire du km/L, du mpg US et du mpg UK, où un chiffre plus élevé signifie une meilleure efficacité."],
  ["Quelle unité devrais-je utiliser ?", "Utilisez celle qu'utilise votre pays ou le manuel de votre voiture : le km/L ou le L/100km est courant dans la plupart du monde, tandis que le mpg est la norme aux États-Unis et au Royaume-Uni (avec des tailles de gallon différentes)."]
 ],
 "labels": {"unit": "Unité d'entrée", "value": "Valeur"},
 "alert": "Veuillez entrer une valeur supérieure à 0.",
},
};
module.exports = FUEL;
