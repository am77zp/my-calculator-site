// Content for the "agediff" calculator (exact age difference between two
// birth dates in years/months/days, using real calendar-date subtraction,
// not a simple birth-year subtraction), one entry per of the 19 site
// languages.
const AGEDIFF = {
"ko": {
 "title": "나이 차이 계산기 - 두 사람의 정확한 나이 차이를 년/개월/일로 계산",
 "meta": "두 사람의 생년월일을 입력하면 단순히 출생연도를 빼는 것이 아니라 실제 날짜를 기준으로 정확한 나이 차이를 년/개월/일로 계산합니다.",
 "card_desc": "두 사람의 생년월일을 입력하면 누가 얼마나 나이가 많은지 정확히 계산합니다.",
 "nav": "나이 차이",
 "home_desc": "두 사람의 정확한 나이 차이를 년/개월/일로 계산",
 "usage": [
  "사람 A의 생년월일을 입력합니다.",
  "사람 B의 생년월일을 입력합니다.",
  "\"계산하기\"를 누르면 정확한 나이 차이가 년/개월/일로 표시됩니다."
 ],
 "method": "먼저 두 생년월일 중 어느 쪽이 더 빠른지 확인한 뒤, 연·월·일을 각각 빼서 계산합니다. 일이 부족하면 앞 달에서, 월이 부족하면 앞 해에서 빌려오는 방식으로 계산하기 때문에 단순히 출생연도만 빼는 것보다 정확합니다.",
 "examples": [
  "예시 1 — 사람 A 1990년 3월 15일생, 사람 B 1993년 11월 2일생: 사람 A가 3년 7개월 18일 더 많습니다.",
  "예시 2 — 사람 A 2010년 6월 1일생, 사람 B 2010년 1월 20일생: 사람 B가 4개월 12일 더 많습니다."
 ],
 "faq": [
  ["왜 출생연도만 빼면 안 되나요?", "생일이 이미 지났는지 여부에 따라 단순 연도 차이는 최대 1년까지 오차가 날 수 있습니다. 이 계산기는 실제 날짜를 기준으로 정확하게 계산합니다."],
  ["미래 날짜를 입력하면 어떻게 되나요?", "생년월일은 오늘보다 미래일 수 없으므로, 미래 날짜를 입력하면 다시 입력해 달라는 안내가 표시됩니다."],
  ["두 사람의 생년월일이 같으면 어떻게 되나요?", "나이 차이가 없다는 결과가 표시됩니다."]
 ],
 "labels": {"person_a": "사람 A의 생년월일", "person_b": "사람 B의 생년월일"},
 "alert": "두 사람의 생년월일을 모두 입력해 주세요.",
 "alert_future": "생년월일은 오늘보다 미래일 수 없습니다.",
 "result_tpl": {"diff_tpl": "{y}년 {m}개월 {d}일 차이", "a_older_tpl": "사람 A가 더 나이가 많습니다.", "b_older_tpl": "사람 B가 더 나이가 많습니다.", "same_tpl": "두 사람은 생년월일이 같습니다 (나이 차이 없음).", "total_days_tpl": "총 {days}일 차이"},
},
"zh-cn": {
 "title": "年龄差计算器 - 精确计算两人相差的年、月、日",
 "meta": "输入两个人的出生日期,不只是简单相减出生年份,而是按实际日期精确计算年龄差,精确到年、月、日。",
 "card_desc": "输入两个人的出生日期,精确计算谁大多少。",
 "nav": "年龄差",
 "home_desc": "精确计算两人年龄差,精确到年、月、日",
 "usage": [
  "输入甲的出生日期。",
  "输入乙的出生日期。",
  "点击“计算”即可看到精确的年龄差(年/月/日)。"
 ],
 "method": "先判断两个出生日期哪个更早,再分别相减年、月、日。日不够时向上一个月借,月不够时向上一年借,因此比单纯相减出生年份更精确。",
 "examples": [
  "示例1 — 甲出生于1990年3月15日,乙出生于1993年11月2日: 甲比乙大3年7个月18天。",
  "示例2 — 甲出生于2010年6月1日,乙出生于2010年1月20日: 乙比甲大4个月12天。"
 ],
 "faq": [
  ["为什么不能只用出生年份相减?", "单纯用年份相减,会因为生日是否已过而产生最多1年的误差。本计算器按实际日期精确计算。"],
  ["输入未来的日期会怎样?", "出生日期不能晚于今天,如果输入未来日期,会提示重新输入。"],
  ["如果两人出生日期相同会怎样?", "结果会显示两人年龄没有差异。"]
 ],
 "labels": {"person_a": "甲的出生日期", "person_b": "乙的出生日期"},
 "alert": "请输入两人的出生日期。",
 "alert_future": "出生日期不能晚于今天。",
 "result_tpl": {"diff_tpl": "相差{y}年{m}个月{d}天", "a_older_tpl": "甲的年龄更大。", "b_older_tpl": "乙的年龄更大。", "same_tpl": "两人出生日期相同(没有年龄差)。", "total_days_tpl": "共相差{days}天"},
},
"hi": {
 "title": "आयु अंतर कैलकुलेटर - दो लोगों की सटीक उम्र का अंतर साल/महीने/दिन में जानें",
 "meta": "दो लोगों की जन्मतिथि डालें और केवल जन्म वर्ष घटाने के बजाय वास्तविक तारीखों के आधार पर सटीक उम्र का अंतर साल, महीने और दिन में जानें।",
 "card_desc": "दोनों लोगों की जन्मतिथि डालें और जानें कौन कितना बड़ा है।",
 "nav": "आयु अंतर",
 "home_desc": "दो लोगों की सटीक उम्र का अंतर साल/महीने/दिन में निकालें",
 "usage": [
  "व्यक्ति A की जन्मतिथि डालें।",
  "व्यक्ति B की जन्मतिथि डालें।",
  "\"गणना करें\" दबाते ही सटीक उम्र का अंतर साल/महीने/दिन में दिखेगा।"
 ],
 "method": "पहले यह पता लगाया जाता है कि दोनों में से किसकी जन्मतिथि पहले है, फिर साल, महीना और दिन अलग-अलग घटाए जाते हैं। दिन कम पड़ने पर पिछले महीने से और महीना कम पड़ने पर पिछले साल से उधार लिया जाता है, इसलिए यह सिर्फ जन्म वर्ष घटाने से ज़्यादा सटीक है।",
 "examples": [
  "उदाहरण 1 — व्यक्ति A का जन्म 15 मार्च 1990, व्यक्ति B का जन्म 2 नवंबर 1993: व्यक्ति A, व्यक्ति B से 3 साल 7 महीने 18 दिन बड़ा है।",
  "उदाहरण 2 — व्यक्ति A का जन्म 1 जून 2010, व्यक्ति B का जन्म 20 जनवरी 2010: व्यक्ति B, व्यक्ति A से 4 महीने 12 दिन बड़ा है।"
 ],
 "faq": [
  ["सिर्फ जन्म वर्ष घटाना गलत क्यों है?", "जन्मदिन गुज़र चुका है या नहीं, इसके आधार पर सिर्फ वर्षों का अंतर 1 साल तक गलत हो सकता है। यह कैलकुलेटर वास्तविक तारीखों के आधार पर सटीक गणना करता है।"],
  ["भविष्य की तारीख डालने पर क्या होगा?", "जन्मतिथि आज से आगे की नहीं हो सकती, इसलिए भविष्य की तारीख डालने पर दोबारा सही तारीख डालने के लिए कहा जाएगा।"],
  ["अगर दोनों की जन्मतिथि एक जैसी हो तो?", "परिणाम में दिखेगा कि दोनों की उम्र में कोई अंतर नहीं है।"]
 ],
 "labels": {"person_a": "व्यक्ति A की जन्मतिथि", "person_b": "व्यक्ति B की जन्मतिथि"},
 "alert": "कृपया दोनों व्यक्तियों की जन्मतिथि डालें।",
 "alert_future": "जन्मतिथि आज से आगे की नहीं हो सकती।",
 "result_tpl": {"diff_tpl": "{y} साल {m} महीने {d} दिन का अंतर", "a_older_tpl": "व्यक्ति A बड़ा है।", "b_older_tpl": "व्यक्ति B बड़ा है।", "same_tpl": "दोनों की जन्मतिथि एक जैसी है (कोई उम्र अंतर नहीं)।", "total_days_tpl": "कुल {days} दिन का अंतर"},
},
"en": {
 "title": "Age Difference Calculator - Exact Years, Months, and Days Between Two Birth Dates",
 "meta": "Enter two birth dates to calculate the exact age difference in years, months, and days — not just a simple subtraction of birth years.",
 "card_desc": "Enter both birth dates to calculate exactly how much older one person is than the other.",
 "nav": "Age Difference",
 "home_desc": "Calculate the exact age difference between two people in years, months, and days",
 "usage": [
  "Enter Person A's birth date.",
  "Enter Person B's birth date.",
  "Click \"Calculate\" to see the exact difference in years, months, and days."
 ],
 "method": "The calculator finds which birth date is earlier, then subtracts year, month, and day separately — borrowing a month when the day is short and a year when the month is short — so the result is the real calendar difference, not just a subtraction of birth years.",
 "examples": [
  "Example 1 — Person A born 1990-03-15, Person B born 1993-11-02: Person A is 3 years 7 months 18 days older.",
  "Example 2 — Person A born 2010-06-01, Person B born 2010-01-20: Person B is 4 months 12 days older."
 ],
 "faq": [
  ["Why isn't this just the difference between birth years?", "Subtracting birth years alone can be off by up to a year depending on whether each person's birthday has passed yet this year. This calculator uses the actual calendar dates for an exact result."],
  ["What happens if I enter a future birth date?", "The calculator will show an alert asking you to enter a birth date that isn't later than today, since a birth date can't be in the future."],
  ["What if both people have the same birth date?", "The calculator will show that there is no age difference between the two people."]
 ],
 "labels": {"person_a": "Person A's birth date", "person_b": "Person B's birth date"},
 "alert": "Please enter both birth dates.",
 "alert_future": "A birth date cannot be later than today.",
 "result_tpl": {"diff_tpl": "{y} year(s) {m} month(s) {d} day(s) apart", "a_older_tpl": "Person A is older.", "b_older_tpl": "Person B is older.", "same_tpl": "Both people share the same birth date — no age difference.", "total_days_tpl": "{days} day(s) total"},
},
"id": {
 "title": "Kalkulator Selisih Usia - Hitung Selisih Usia Tepat dalam Tahun, Bulan, dan Hari",
 "meta": "Masukkan tanggal lahir dua orang untuk menghitung selisih usia yang tepat dalam tahun, bulan, dan hari — bukan sekadar mengurangi tahun lahir.",
 "card_desc": "Masukkan kedua tanggal lahir untuk menghitung tepatnya siapa yang lebih tua dan berapa selisihnya.",
 "nav": "Selisih Usia",
 "home_desc": "Hitung selisih usia dua orang secara tepat dalam tahun, bulan, dan hari",
 "usage": [
  "Masukkan tanggal lahir Orang A.",
  "Masukkan tanggal lahir Orang B.",
  "Klik \"Hitung\" untuk melihat selisih yang tepat dalam tahun, bulan, dan hari."
 ],
 "method": "Kalkulator ini menentukan tanggal lahir mana yang lebih awal, lalu mengurangi tahun, bulan, dan hari secara terpisah — meminjam satu bulan jika harinya kurang dan satu tahun jika bulannya kurang — sehingga hasilnya adalah selisih kalender yang sebenarnya, bukan sekadar pengurangan tahun lahir.",
 "examples": [
  "Contoh 1 — Orang A lahir 15-03-1990, Orang B lahir 02-11-1993: Orang A lebih tua 3 tahun 7 bulan 18 hari.",
  "Contoh 2 — Orang A lahir 01-06-2010, Orang B lahir 20-01-2010: Orang B lebih tua 4 bulan 12 hari."
 ],
 "faq": [
  ["Mengapa ini bukan sekadar selisih tahun lahir?", "Mengurangi tahun lahir saja bisa meleset hingga satu tahun, tergantung apakah ulang tahun masing-masing sudah lewat tahun ini. Kalkulator ini menggunakan tanggal kalender sebenarnya untuk hasil yang tepat."],
  ["Apa yang terjadi jika saya memasukkan tanggal lahir di masa depan?", "Kalkulator akan menampilkan peringatan agar Anda memasukkan tanggal lahir yang tidak lebih baru dari hari ini, karena tanggal lahir tidak bisa berada di masa depan."],
  ["Bagaimana jika kedua orang memiliki tanggal lahir yang sama?", "Kalkulator akan menunjukkan bahwa tidak ada selisih usia di antara keduanya."]
 ],
 "labels": {"person_a": "Tanggal lahir Orang A", "person_b": "Tanggal lahir Orang B"},
 "alert": "Masukkan kedua tanggal lahir.",
 "alert_future": "Tanggal lahir tidak boleh lebih baru dari hari ini.",
 "result_tpl": {"diff_tpl": "Selisih {y} tahun {m} bulan {d} hari", "a_older_tpl": "Orang A lebih tua.", "b_older_tpl": "Orang B lebih tua.", "same_tpl": "Kedua orang memiliki tanggal lahir yang sama — tidak ada selisih usia.", "total_days_tpl": "Total {days} hari"},
},
"pt-br": {
 "title": "Calculadora de Diferença de Idade - Anos, Meses e Dias Exatos Entre Duas Datas de Nascimento",
 "meta": "Informe duas datas de nascimento para calcular a diferença de idade exata em anos, meses e dias — não apenas uma subtração simples dos anos de nascimento.",
 "card_desc": "Informe as duas datas de nascimento para calcular exatamente quanto uma pessoa é mais velha que a outra.",
 "nav": "Diferença de Idade",
 "home_desc": "Calcule a diferença de idade exata entre duas pessoas em anos, meses e dias",
 "usage": [
  "Informe a data de nascimento da Pessoa A.",
  "Informe a data de nascimento da Pessoa B.",
  "Clique em \"Calcular\" para ver a diferença exata em anos, meses e dias."
 ],
 "method": "A calculadora identifica qual data de nascimento é mais antiga e então subtrai ano, mês e dia separadamente — pegando emprestado um mês quando o dia é insuficiente e um ano quando o mês é insuficiente — assim o resultado é a diferença real do calendário, não apenas uma subtração dos anos de nascimento.",
 "examples": [
  "Exemplo 1 — Pessoa A nascida em 15/03/1990, Pessoa B nascida em 02/11/1993: a Pessoa A é 3 anos, 7 meses e 18 dias mais velha.",
  "Exemplo 2 — Pessoa A nascida em 01/06/2010, Pessoa B nascida em 20/01/2010: a Pessoa B é 4 meses e 12 dias mais velha."
 ],
 "faq": [
  ["Por que isso não é apenas a diferença entre os anos de nascimento?", "Subtrair apenas os anos de nascimento pode errar em até um ano, dependendo se o aniversário de cada pessoa já passou neste ano. Esta calculadora usa as datas reais do calendário para um resultado exato."],
  ["O que acontece se eu informar uma data de nascimento futura?", "A calculadora mostrará um aviso pedindo que você informe uma data de nascimento que não seja posterior a hoje, já que uma data de nascimento não pode estar no futuro."],
  ["E se as duas pessoas tiverem a mesma data de nascimento?", "A calculadora mostrará que não há diferença de idade entre as duas pessoas."]
 ],
 "labels": {"person_a": "Data de nascimento da Pessoa A", "person_b": "Data de nascimento da Pessoa B"},
 "alert": "Informe as duas datas de nascimento.",
 "alert_future": "Uma data de nascimento não pode ser posterior a hoje.",
 "result_tpl": {"diff_tpl": "{y} ano(s) {m} mês(es) {d} dia(s) de diferença", "a_older_tpl": "A Pessoa A é mais velha.", "b_older_tpl": "A Pessoa B é mais velha.", "same_tpl": "As duas pessoas têm a mesma data de nascimento — sem diferença de idade.", "total_days_tpl": "{days} dia(s) no total"},
},
"ru": {
 "title": "Калькулятор разницы в возрасте - точная разница в годах, месяцах и днях между двумя датами рождения",
 "meta": "Введите две даты рождения, чтобы рассчитать точную разницу в возрасте в годах, месяцах и днях — а не просто вычесть годы рождения.",
 "card_desc": "Введите обе даты рождения, чтобы точно узнать, насколько один человек старше другого.",
 "nav": "Разница в возрасте",
 "home_desc": "Рассчитайте точную разницу в возрасте между двумя людьми в годах, месяцах и днях",
 "usage": [
  "Введите дату рождения человека A.",
  "Введите дату рождения человека B.",
  "Нажмите «Рассчитать», чтобы увидеть точную разницу в годах, месяцах и днях."
 ],
 "method": "Калькулятор определяет, какая дата рождения раньше, а затем вычитает год, месяц и день по отдельности — занимая месяц, если не хватает дней, и год, если не хватает месяцев, — поэтому результат отражает реальную календарную разницу, а не просто вычитание годов рождения.",
 "examples": [
  "Пример 1 — человек A родился 15.03.1990, человек B родился 02.11.1993: человек A старше на 3 года 7 месяцев 18 дней.",
  "Пример 2 — человек A родился 01.06.2010, человек B родился 20.01.2010: человек B старше на 4 месяца 12 дней."
 ],
 "faq": [
  ["Почему это не просто разница годов рождения?", "Простое вычитание годов рождения может ошибаться на целый год в зависимости от того, прошёл ли уже день рождения каждого человека в этом году. Этот калькулятор использует реальные календарные даты для точного результата."],
  ["Что произойдёт, если я введу дату рождения в будущем?", "Калькулятор покажет предупреждение с просьбой ввести дату рождения не позже сегодняшнего дня, поскольку дата рождения не может быть в будущем."],
  ["Что если у обоих людей одинаковая дата рождения?", "Калькулятор покажет, что разницы в возрасте между ними нет."]
 ],
 "labels": {"person_a": "Дата рождения человека A", "person_b": "Дата рождения человека B"},
 "alert": "Пожалуйста, введите обе даты рождения.",
 "alert_future": "Дата рождения не может быть позже сегодняшнего дня.",
 "result_tpl": {"diff_tpl": "Разница: {y} г. {m} мес. {d} дн.", "a_older_tpl": "Человек A старше.", "b_older_tpl": "Человек B старше.", "same_tpl": "У обоих людей одинаковая дата рождения — разницы в возрасте нет.", "total_days_tpl": "Всего {days} дн."},
},
"ur": {
 "title": "عمر کے فرق کا کیلکولیٹر - دو پیدائشی تاریخوں کے درمیان درست سال/مہینے/دن کا فرق",
 "meta": "دو افراد کی تاریخ پیدائش درج کریں اور صرف پیدائشی سال گھٹانے کے بجائے اصل تاریخوں کی بنیاد پر درست عمر کا فرق سال، مہینے اور دن میں معلوم کریں۔",
 "card_desc": "دونوں افراد کی تاریخ پیدائش درج کریں اور جانیں کون کتنا بڑا ہے۔",
 "nav": "عمر کا فرق",
 "home_desc": "دو افراد کی درست عمر کا فرق سال/مہینے/دن میں معلوم کریں",
 "usage": [
  "شخص A کی تاریخ پیدائش درج کریں۔",
  "شخص B کی تاریخ پیدائش درج کریں۔",
  "\"حساب لگائیں\" دبانے پر درست فرق سال/مہینے/دن میں دکھایا جائے گا۔"
 ],
 "method": "پہلے یہ معلوم کیا جاتا ہے کہ دونوں میں سے کس کی تاریخ پیدائش پہلے ہے، پھر سال، مہینہ اور دن الگ الگ گھٹائے جاتے ہیں۔ دن کم پڑنے پر پچھلے مہینے سے اور مہینہ کم پڑنے پر پچھلے سال سے ادھار لیا جاتا ہے، اس لیے یہ صرف پیدائشی سال گھٹانے سے زیادہ درست ہے۔",
 "examples": [
  "مثال 1 — شخص A کی پیدائش 15 مارچ 1990، شخص B کی پیدائش 2 نومبر 1993: شخص A، شخص B سے 3 سال 7 ماہ 18 دن بڑا ہے۔",
  "مثال 2 — شخص A کی پیدائش 1 جون 2010، شخص B کی پیدائش 20 جنوری 2010: شخص B، شخص A سے 4 ماہ 12 دن بڑا ہے۔"
 ],
 "faq": [
  ["صرف پیدائشی سال گھٹانا غلط کیوں ہے؟", "سالگرہ گزر چکی ہے یا نہیں، اس کی بنیاد پر صرف سال کا فرق 1 سال تک غلط ہو سکتا ہے۔ یہ کیلکولیٹر اصل تاریخوں کی بنیاد پر درست حساب لگاتا ہے۔"],
  ["مستقبل کی تاریخ درج کرنے پر کیا ہوگا؟", "تاریخ پیدائش آج سے مستقبل کی نہیں ہو سکتی، اس لیے مستقبل کی تاریخ درج کرنے پر دوبارہ درست تاریخ درج کرنے کی ہدایت دکھائی جائے گی۔"],
  ["اگر دونوں افراد کی تاریخ پیدائش ایک جیسی ہو تو؟", "نتیجے میں دکھایا جائے گا کہ دونوں کی عمر میں کوئی فرق نہیں ہے۔"]
 ],
 "labels": {"person_a": "شخص A کی تاریخ پیدائش", "person_b": "شخص B کی تاریخ پیدائش"},
 "alert": "براہ کرم دونوں افراد کی تاریخ پیدائش درج کریں۔",
 "alert_future": "تاریخ پیدائش آج سے مستقبل کی نہیں ہو سکتی۔",
 "result_tpl": {"diff_tpl": "{y} سال {m} مہینے {d} دن کا فرق", "a_older_tpl": "شخص A بڑا ہے۔", "b_older_tpl": "شخص B بڑا ہے۔", "same_tpl": "دونوں افراد کی تاریخ پیدائش ایک جیسی ہے (کوئی عمر کا فرق نہیں)۔", "total_days_tpl": "کل {days} دن کا فرق"},
},
"es": {
 "title": "Calculadora de Diferencia de Edad - Años, Meses y Días Exactos Entre Dos Fechas de Nacimiento",
 "meta": "Ingresa dos fechas de nacimiento para calcular la diferencia de edad exacta en años, meses y días, no solo una resta simple de los años de nacimiento.",
 "card_desc": "Ingresa ambas fechas de nacimiento para calcular exactamente cuánto mayor es una persona que la otra.",
 "nav": "Diferencia de Edad",
 "home_desc": "Calcula la diferencia de edad exacta entre dos personas en años, meses y días",
 "usage": [
  "Ingresa la fecha de nacimiento de la Persona A.",
  "Ingresa la fecha de nacimiento de la Persona B.",
  "Presiona \"Calcular\" para ver la diferencia exacta en años, meses y días."
 ],
 "method": "La calculadora determina cuál fecha de nacimiento es más antigua y luego resta año, mes y día por separado, tomando prestado un mes cuando el día no alcanza y un año cuando el mes no alcanza, de modo que el resultado es la diferencia real del calendario, no solo una resta de los años de nacimiento.",
 "examples": [
  "Ejemplo 1 — Persona A nacida el 15/03/1990, Persona B nacida el 02/11/1993: la Persona A es 3 años, 7 meses y 18 días mayor.",
  "Ejemplo 2 — Persona A nacida el 01/06/2010, Persona B nacida el 20/01/2010: la Persona B es 4 meses y 18 días mayor."
 ],
 "faq": [
  ["¿Por qué esto no es solo la diferencia entre los años de nacimiento?", "Restar solo los años de nacimiento puede fallar hasta por un año, dependiendo de si el cumpleaños de cada persona ya pasó este año. Esta calculadora usa las fechas reales del calendario para un resultado exacto."],
  ["¿Qué pasa si ingreso una fecha de nacimiento futura?", "La calculadora mostrará una alerta pidiéndote que ingreses una fecha de nacimiento que no sea posterior a hoy, ya que una fecha de nacimiento no puede estar en el futuro."],
  ["¿Qué pasa si ambas personas tienen la misma fecha de nacimiento?", "La calculadora mostrará que no hay diferencia de edad entre las dos personas."]
 ],
 "labels": {"person_a": "Fecha de nacimiento de la Persona A", "person_b": "Fecha de nacimiento de la Persona B"},
 "alert": "Ingresa ambas fechas de nacimiento.",
 "alert_future": "Una fecha de nacimiento no puede ser posterior a hoy.",
 "result_tpl": {"diff_tpl": "{y} año(s) {m} mes(es) {d} día(s) de diferencia", "a_older_tpl": "La Persona A es mayor.", "b_older_tpl": "La Persona B es mayor.", "same_tpl": "Ambas personas tienen la misma fecha de nacimiento; no hay diferencia de edad.", "total_days_tpl": "{days} día(s) en total"},
},
"ja": {
 "title": "年齢差計算機 - 2人の正確な年齢差を年・月・日で計算",
 "meta": "2人の生年月日を入力すると、単純に生まれた年を引くのではなく、実際の日付をもとに正確な年齢差を年・月・日で計算します。",
 "card_desc": "2人の生年月日を入力すると、どちらがどれだけ年上か正確に計算します。",
 "nav": "年齢差",
 "home_desc": "2人の正確な年齢差を年・月・日で計算",
 "usage": [
  "人物Aの生年月日を入力します。",
  "人物Bの生年月日を入力します。",
  "「計算する」を押すと正確な年齢差が年・月・日で表示されます。"
 ],
 "method": "まずどちらの生年月日が早いかを判定し、年・月・日をそれぞれ引き算します。日が足りなければ前の月から、月が足りなければ前の年から繰り下げるため、単純に生まれた年だけを引くより正確です。",
 "examples": [
  "例1 — 人物Aは1990年3月15日生まれ、人物Bは1993年11月2日生まれ: 人物Aが3年7か月18日年上です。",
  "例2 — 人物Aは2010年6月1日生まれ、人物Bは2010年1月20日生まれ: 人物Bが4か月12日年上です。"
 ],
 "faq": [
  ["生まれた年だけを引き算してはいけないのはなぜですか?", "誕生日が今年すでに過ぎているかどうかによって、単純な年の差は最大1年ずれることがあります。この計算機は実際の日付をもとに正確に計算します。"],
  ["未来の日付を入力するとどうなりますか?", "生年月日は今日より未来にはできないため、未来の日付を入力すると入力し直すよう案内が表示されます。"],
  ["2人の生年月日が同じ場合はどうなりますか?", "年齢差がないという結果が表示されます。"]
 ],
 "labels": {"person_a": "人物Aの生年月日", "person_b": "人物Bの生年月日"},
 "alert": "2人の生年月日を両方入力してください。",
 "alert_future": "生年月日は今日より未来にはできません。",
 "result_tpl": {"diff_tpl": "{y}年{m}か月{d}日の差", "a_older_tpl": "人物Aのほうが年上です。", "b_older_tpl": "人物Bのほうが年上です。", "same_tpl": "2人の生年月日は同じです(年齢差なし)。", "total_days_tpl": "合計{days}日の差"},
},
"tl": {
 "title": "Calculator ng Pagkakaiba ng Edad - Eksaktong Taon, Buwan, at Araw Sa Pagitan ng Dalawang Petsa ng Kapanganakan",
 "meta": "Ilagay ang dalawang petsa ng kapanganakan para kalkulahin ang eksaktong pagkakaiba ng edad sa taon, buwan, at araw — hindi lang simpleng pagbabawas ng taon ng kapanganakan.",
 "card_desc": "Ilagay ang dalawang petsa ng kapanganakan para malaman kung gaano kalaki ang pagkakaiba ng edad ng dalawa.",
 "nav": "Pagkakaiba ng Edad",
 "home_desc": "Kalkulahin ang eksaktong pagkakaiba ng edad ng dalawang tao sa taon, buwan, at araw",
 "usage": [
  "Ilagay ang petsa ng kapanganakan ni Tao A.",
  "Ilagay ang petsa ng kapanganakan ni Tao B.",
  "I-click ang \"Kalkulahin\" para makita ang eksaktong pagkakaiba sa taon, buwan, at araw."
 ],
 "method": "Tinutukoy muna ng calculator kung alin sa dalawang petsa ng kapanganakan ang mas maaga, pagkatapos ay ibinabawas nang hiwalay ang taon, buwan, at araw — humihiram ng isang buwan kapag kulang ang araw at isang taon kapag kulang ang buwan — kaya ang resulta ay ang tunay na pagkakaiba sa kalendaryo, hindi lang simpleng pagbabawas ng taon ng kapanganakan.",
 "examples": [
  "Halimbawa 1 — Ipinanganak si Tao A noong 1990-03-15, si Tao B noong 1993-11-02: mas matanda si Tao A ng 3 taon 7 buwan 18 araw.",
  "Halimbawa 2 — Ipinanganak si Tao A noong 2010-06-01, si Tao B noong 2010-01-20: mas matanda si Tao B ng 4 na buwan 12 araw."
 ],
 "faq": [
  ["Bakit hindi lang ito simpleng pagkakaiba ng taon ng kapanganakan?", "Ang simpleng pagbabawas ng taon ng kapanganakan ay puwedeng magkamali nang hanggang isang taon, depende kung nakaraan na ang kaarawan ng bawat tao ngayong taon. Gumagamit ang calculator na ito ng tunay na petsa sa kalendaryo para sa eksaktong resulta."],
  ["Ano ang mangyayari kung maglagay ako ng petsa ng kapanganakan sa hinaharap?", "Magpapakita ang calculator ng babala na hilingin sa iyong maglagay ng petsa ng kapanganakan na hindi lalampas sa ngayon, dahil hindi maaaring nasa hinaharap ang petsa ng kapanganakan."],
  ["Paano kung parehong petsa ng kapanganakan ang dalawang tao?", "Ipapakita ng calculator na walang pagkakaiba ng edad sa pagitan ng dalawang tao."]
 ],
 "labels": {"person_a": "Petsa ng kapanganakan ni Tao A", "person_b": "Petsa ng kapanganakan ni Tao B"},
 "alert": "Pakilagay ang parehong petsa ng kapanganakan.",
 "alert_future": "Hindi maaaring lalampas sa ngayon ang petsa ng kapanganakan.",
 "result_tpl": {"diff_tpl": "{y} taon {m} buwan {d} araw ang pagkakaiba", "a_older_tpl": "Mas matanda si Tao A.", "b_older_tpl": "Mas matanda si Tao B.", "same_tpl": "Pareho ang petsa ng kapanganakan ng dalawang tao — walang pagkakaiba ng edad.", "total_days_tpl": "{days} araw sa kabuuan"},
},
"ar": {
 "title": "حاسبة فرق العمر - احسب الفرق الدقيق بالسنوات والأشهر والأيام بين تاريخي ميلاد",
 "meta": "أدخل تاريخي ميلاد شخصين لحساب فرق العمر الدقيق بالسنوات والأشهر والأيام، وليس مجرد طرح بسيط لسنتي الميلاد.",
 "card_desc": "أدخل تاريخي الميلاد لمعرفة بالضبط كم يكبر أحدهما الآخر.",
 "nav": "فرق العمر",
 "home_desc": "احسب فرق العمر الدقيق بين شخصين بالسنوات والأشهر والأيام",
 "usage": [
  "أدخل تاريخ ميلاد الشخص A.",
  "أدخل تاريخ ميلاد الشخص B.",
  "اضغط \"احسب\" لرؤية الفرق الدقيق بالسنوات والأشهر والأيام."
 ],
 "method": "تحدد الحاسبة أولًا أي تاريخي الميلاد أسبق، ثم تطرح السنة والشهر واليوم كلًا على حدة — مقترضة شهرًا عند نقص الأيام وسنة عند نقص الأشهر — فيكون الناتج هو الفرق التقويمي الحقيقي، وليس مجرد طرح لسنتي الميلاد.",
 "examples": [
  "مثال 1 — وُلد الشخص A في 1990-03-15 والشخص B في 1993-11-02: الشخص A أكبر بـ 3 سنوات و7 أشهر و18 يومًا.",
  "مثال 2 — وُلد الشخص A في 2010-06-01 والشخص B في 2010-01-20: الشخص B أكبر بـ 4 أشهر و12 يومًا."
 ],
 "faq": [
  ["لماذا لا يكون هذا مجرد فرق بين سنتي الميلاد؟", "طرح سنتي الميلاد فقط قد يخطئ بمقدار سنة كاملة حسب ما إذا كان عيد ميلاد كل شخص قد مرّ هذا العام أم لا. تستخدم هذه الحاسبة التواريخ الفعلية للتقويم للحصول على نتيجة دقيقة."],
  ["ماذا يحدث إذا أدخلت تاريخ ميلاد مستقبليًا؟", "ستعرض الحاسبة تنبيهًا يطلب منك إدخال تاريخ ميلاد لا يتجاوز اليوم، لأن تاريخ الميلاد لا يمكن أن يكون في المستقبل."],
  ["ماذا لو كان لدى الشخصين نفس تاريخ الميلاد؟", "ستُظهر الحاسبة أنه لا يوجد فرق في العمر بين الشخصين."]
 ],
 "labels": {"person_a": "تاريخ ميلاد الشخص A", "person_b": "تاريخ ميلاد الشخص B"},
 "alert": "يرجى إدخال تاريخي ميلاد الشخصين.",
 "alert_future": "لا يمكن أن يكون تاريخ الميلاد بعد اليوم.",
 "result_tpl": {"diff_tpl": "فرق {y} سنة {m} شهرًا {d} يومًا", "a_older_tpl": "الشخص A أكبر سنًا.", "b_older_tpl": "الشخص B أكبر سنًا.", "same_tpl": "لدى الشخصين نفس تاريخ الميلاد — لا يوجد فرق في العمر.", "total_days_tpl": "{days} يومًا إجمالًا"},
},
"vi": {
 "title": "Máy Tính Chênh Lệch Tuổi - Tính Chính Xác Số Năm, Tháng, Ngày Giữa Hai Ngày Sinh",
 "meta": "Nhập hai ngày sinh để tính chính xác chênh lệch tuổi theo năm, tháng và ngày — không chỉ đơn giản là lấy năm sinh trừ nhau.",
 "card_desc": "Nhập cả hai ngày sinh để biết chính xác một người lớn hơn người kia bao nhiêu.",
 "nav": "Chênh Lệch Tuổi",
 "home_desc": "Tính chính xác chênh lệch tuổi giữa hai người theo năm, tháng, ngày",
 "usage": [
  "Nhập ngày sinh của Người A.",
  "Nhập ngày sinh của Người B.",
  "Bấm \"Tính\" để xem chênh lệch chính xác theo năm, tháng và ngày."
 ],
 "method": "Máy tính xác định ngày sinh nào sớm hơn, sau đó trừ riêng năm, tháng và ngày — mượn một tháng khi số ngày không đủ và mượn một năm khi số tháng không đủ — nên kết quả là chênh lệch lịch thực tế, không chỉ là phép trừ năm sinh.",
 "examples": [
  "Ví dụ 1 — Người A sinh ngày 15-03-1990, Người B sinh ngày 02-11-1993: Người A lớn hơn 3 năm 7 tháng 18 ngày.",
  "Ví dụ 2 — Người A sinh ngày 01-06-2010, Người B sinh ngày 20-01-2010: Người B lớn hơn 4 tháng 12 ngày."
 ],
 "faq": [
  ["Tại sao đây không chỉ đơn giản là chênh lệch năm sinh?", "Chỉ trừ năm sinh có thể sai lệch tới một năm, tùy vào việc sinh nhật của mỗi người đã qua trong năm nay hay chưa. Máy tính này dùng ngày lịch thực tế để cho kết quả chính xác."],
  ["Điều gì xảy ra nếu tôi nhập ngày sinh trong tương lai?", "Máy tính sẽ hiển thị cảnh báo yêu cầu bạn nhập ngày sinh không muộn hơn hôm nay, vì ngày sinh không thể ở tương lai."],
  ["Nếu cả hai người có cùng ngày sinh thì sao?", "Máy tính sẽ hiển thị rằng không có chênh lệch tuổi giữa hai người."]
 ],
 "labels": {"person_a": "Ngày sinh của Người A", "person_b": "Ngày sinh của Người B"},
 "alert": "Vui lòng nhập cả hai ngày sinh.",
 "alert_future": "Ngày sinh không thể muộn hơn hôm nay.",
 "result_tpl": {"diff_tpl": "Chênh lệch {y} năm {m} tháng {d} ngày", "a_older_tpl": "Người A lớn tuổi hơn.", "b_older_tpl": "Người B lớn tuổi hơn.", "same_tpl": "Cả hai người có cùng ngày sinh — không có chênh lệch tuổi.", "total_days_tpl": "Tổng cộng {days} ngày"},
},
"de": {
 "title": "Altersunterschied-Rechner - Exakte Jahre, Monate und Tage zwischen zwei Geburtsdaten",
 "meta": "Zwei Geburtsdaten eingeben, um den exakten Altersunterschied in Jahren, Monaten und Tagen zu berechnen — nicht nur eine einfache Subtraktion der Geburtsjahre.",
 "card_desc": "Beide Geburtsdaten eingeben, um genau zu berechnen, wie viel älter eine Person als die andere ist.",
 "nav": "Altersunterschied",
 "home_desc": "Berechnen Sie den exakten Altersunterschied zwischen zwei Personen in Jahren, Monaten und Tagen",
 "usage": [
  "Geburtsdatum von Person A eingeben.",
  "Geburtsdatum von Person B eingeben.",
  "Auf \"Berechnen\" klicken, um den exakten Unterschied in Jahren, Monaten und Tagen zu sehen."
 ],
 "method": "Der Rechner ermittelt, welches Geburtsdatum früher liegt, und subtrahiert dann Jahr, Monat und Tag separat — er leiht sich einen Monat, wenn der Tag zu knapp ist, und ein Jahr, wenn der Monat zu knapp ist — sodass das Ergebnis der echte Kalenderunterschied ist, nicht nur eine Subtraktion der Geburtsjahre.",
 "examples": [
  "Beispiel 1 — Person A geboren am 15.03.1990, Person B geboren am 02.11.1993: Person A ist 3 Jahre, 7 Monate und 18 Tage älter.",
  "Beispiel 2 — Person A geboren am 01.06.2010, Person B geboren am 20.01.2010: Person B ist 4 Monate und 12 Tage älter."
 ],
 "faq": [
  ["Warum ist das nicht einfach die Differenz der Geburtsjahre?", "Nur die Geburtsjahre zu subtrahieren kann um bis zu ein Jahr abweichen, je nachdem, ob der Geburtstag jeder Person dieses Jahr schon war. Dieser Rechner verwendet die tatsächlichen Kalenderdaten für ein exaktes Ergebnis."],
  ["Was passiert, wenn ich ein zukünftiges Geburtsdatum eingebe?", "Der Rechner zeigt eine Meldung an und bittet Sie, ein Geburtsdatum einzugeben, das nicht später als heute liegt, da ein Geburtsdatum nicht in der Zukunft liegen kann."],
  ["Was, wenn beide Personen dasselbe Geburtsdatum haben?", "Der Rechner zeigt an, dass zwischen den beiden Personen kein Altersunterschied besteht."]
 ],
 "labels": {"person_a": "Geburtsdatum von Person A", "person_b": "Geburtsdatum von Person B"},
 "alert": "Bitte beide Geburtsdaten eingeben.",
 "alert_future": "Ein Geburtsdatum kann nicht später als heute liegen.",
 "result_tpl": {"diff_tpl": "{y} Jahr(e) {m} Monat(e) {d} Tag(e) Unterschied", "a_older_tpl": "Person A ist älter.", "b_older_tpl": "Person B ist älter.", "same_tpl": "Beide Personen haben dasselbe Geburtsdatum — kein Altersunterschied.", "total_days_tpl": "{days} Tag(e) insgesamt"},
},
"bn": {
 "title": "বয়সের পার্থক্য ক্যালকুলেটর - দুজনের সঠিক বয়সের পার্থক্য বছর/মাস/দিনে বের করুন",
 "meta": "দুজনের জন্ম তারিখ দিন, শুধু জন্ম সাল বিয়োগ না করে প্রকৃত তারিখের ভিত্তিতে সঠিক বয়সের পার্থক্য বছর, মাস ও দিনে বের করুন।",
 "card_desc": "দুজনের জন্ম তারিখ দিন, কে কত বড় তা সঠিকভাবে হিসাব করুন।",
 "nav": "বয়সের পার্থক্য",
 "home_desc": "দুজনের সঠিক বয়সের পার্থক্য বছর/মাস/দিনে বের করুন",
 "usage": [
  "ব্যক্তি A-এর জন্ম তারিখ দিন।",
  "ব্যক্তি B-এর জন্ম তারিখ দিন।",
  "\"হিসাব করুন\" চাপলে সঠিক পার্থক্য বছর/মাস/দিনে দেখা যাবে।"
 ],
 "method": "প্রথমে দেখা হয় দুজনের মধ্যে কার জন্ম তারিখ আগে, তারপর বছর, মাস ও দিন আলাদাভাবে বিয়োগ করা হয়। দিন কম পড়লে আগের মাস থেকে এবং মাস কম পড়লে আগের বছর থেকে ধার নেওয়া হয়, তাই এটি শুধু জন্ম সাল বিয়োগের চেয়ে সঠিক।",
 "examples": [
  "উদাহরণ ১ — ব্যক্তি A-এর জন্ম ১৫ মার্চ ১৯৯০, ব্যক্তি B-এর জন্ম ২ নভেম্বর ১৯৯৩: ব্যক্তি A, ব্যক্তি B-এর চেয়ে ৩ বছর ৭ মাস ১৮ দিন বড়।",
  "উদাহরণ ২ — ব্যক্তি A-এর জন্ম ১ জুন ২০১০, ব্যক্তি B-এর জন্ম ২০ জানুয়ারি ২০১০: ব্যক্তি B, ব্যক্তি A-এর চেয়ে ৪ মাস ১২ দিন বড়।"
 ],
 "faq": [
  ["শুধু জন্ম সাল বিয়োগ করলে ভুল কেন হয়?", "জন্মদিন এ বছর পার হয়েছে কিনা তার ওপর নির্ভর করে শুধু সালের পার্থক্য ১ বছর পর্যন্ত ভুল হতে পারে। এই ক্যালকুলেটর প্রকৃত তারিখের ভিত্তিতে সঠিকভাবে হিসাব করে।"],
  ["ভবিষ্যতের তারিখ দিলে কী হবে?", "জন্ম তারিখ আজকের চেয়ে ভবিষ্যতের হতে পারে না, তাই ভবিষ্যতের তারিখ দিলে আবার সঠিক তারিখ দিতে বলা হবে।"],
  ["দুজনের জন্ম তারিখ একই হলে কী হবে?", "ফলাফলে দেখানো হবে যে দুজনের বয়সের কোনো পার্থক্য নেই।"]
 ],
 "labels": {"person_a": "ব্যক্তি A-এর জন্ম তারিখ", "person_b": "ব্যক্তি B-এর জন্ম তারিখ"},
 "alert": "অনুগ্রহ করে দুজনের জন্ম তারিখ দিন।",
 "alert_future": "জন্ম তারিখ আজকের চেয়ে ভবিষ্যতের হতে পারে না।",
 "result_tpl": {"diff_tpl": "{y} বছর {m} মাস {d} দিনের পার্থক্য", "a_older_tpl": "ব্যক্তি A বড়।", "b_older_tpl": "ব্যক্তি B বড়।", "same_tpl": "দুজনের জন্ম তারিখ একই (কোনো বয়সের পার্থক্য নেই)।", "total_days_tpl": "মোট {days} দিনের পার্থক্য"},
},
"tr": {
 "title": "Yaş Farkı Hesaplayıcı - İki Doğum Tarihi Arasındaki Tam Yıl, Ay ve Gün Farkı",
 "meta": "İki doğum tarihini girerek yaş farkını sadece doğum yıllarını çıkararak değil, tam olarak yıl, ay ve gün cinsinden hesaplayın.",
 "card_desc": "Her iki doğum tarihini girerek birinin diğerinden tam olarak ne kadar büyük olduğunu hesaplayın.",
 "nav": "Yaş Farkı",
 "home_desc": "İki kişi arasındaki tam yaş farkını yıl, ay ve gün olarak hesaplayın",
 "usage": [
  "A Kişisinin doğum tarihini girin.",
  "B Kişisinin doğum tarihini girin.",
  "Tam farkı yıl, ay ve gün olarak görmek için \"Hesapla\"ya tıklayın."
 ],
 "method": "Hesaplayıcı önce hangi doğum tarihinin daha erken olduğunu bulur, ardından yıl, ay ve günü ayrı ayrı çıkarır — gün yetersizse bir ay, ay yetersizse bir yıl ödünç alarak — böylece sonuç, sadece doğum yıllarının çıkarılması değil, gerçek takvim farkı olur.",
 "examples": [
  "Örnek 1 — A Kişisi 15.03.1990, B Kişisi 02.11.1993 doğumlu: A Kişisi 3 yıl 7 ay 18 gün daha büyük.",
  "Örnek 2 — A Kişisi 01.06.2010, B Kişisi 20.01.2010 doğumlu: B Kişisi 4 ay 12 gün daha büyük."
 ],
 "faq": [
  ["Bu neden sadece doğum yılları arasındaki fark değil?", "Sadece doğum yıllarını çıkarmak, her kişinin doğum gününün bu yıl geçip geçmediğine bağlı olarak bir yıla kadar hatalı olabilir. Bu hesaplayıcı tam sonuç için gerçek takvim tarihlerini kullanır."],
  ["Gelecekteki bir doğum tarihi girersem ne olur?", "Doğum tarihi gelecekte olamayacağı için hesaplayıcı, bugünden sonraki olmayan bir tarih girmenizi isteyen bir uyarı gösterir."],
  ["Ya iki kişinin doğum tarihi aynıysa?", "Hesaplayıcı iki kişi arasında yaş farkı olmadığını gösterir."]
 ],
 "labels": {"person_a": "A Kişisinin doğum tarihi", "person_b": "B Kişisinin doğum tarihi"},
 "alert": "Lütfen her iki doğum tarihini de girin.",
 "alert_future": "Doğum tarihi bugünden sonra olamaz.",
 "result_tpl": {"diff_tpl": "{y} yıl {m} ay {d} gün fark", "a_older_tpl": "A Kişisi daha büyük.", "b_older_tpl": "B Kişisi daha büyük.", "same_tpl": "İki kişinin doğum tarihi aynı — yaş farkı yok.", "total_days_tpl": "Toplam {days} gün"},
},
"fa": {
 "title": "ماشین‌حساب اختلاف سن - محاسبه دقیق سال، ماه و روز بین دو تاریخ تولد",
 "meta": "دو تاریخ تولد را وارد کنید تا اختلاف سن دقیق بر حسب سال، ماه و روز محاسبه شود، نه فقط تفریق ساده سال‌های تولد.",
 "card_desc": "هر دو تاریخ تولد را وارد کنید تا دقیقاً مشخص شود کدام‌یک چقدر بزرگ‌تر است.",
 "nav": "اختلاف سن",
 "home_desc": "محاسبه دقیق اختلاف سن بین دو نفر بر حسب سال، ماه و روز",
 "usage": [
  "تاریخ تولد فرد A را وارد کنید.",
  "تاریخ تولد فرد B را وارد کنید.",
  "روی «محاسبه» بزنید تا اختلاف دقیق بر حسب سال، ماه و روز نمایش داده شود."
 ],
 "method": "ابتدا مشخص می‌شود کدام تاریخ تولد زودتر است، سپس سال، ماه و روز جداگانه از هم کم می‌شوند؛ در صورت کمبود روز یک ماه و در صورت کمبود ماه یک سال قرض گرفته می‌شود، بنابراین نتیجه اختلاف واقعی تقویمی است، نه فقط تفریق سال‌های تولد.",
 "examples": [
  "مثال ۱ — فرد A متولد ۱۹۹۰-۰۳-۱۵، فرد B متولد ۱۹۹۳-۱۱-۰۲: فرد A، ۳ سال و ۷ ماه و ۱۸ روز بزرگ‌تر است.",
  "مثال ۲ — فرد A متولد ۲۰۱۰-۰۶-۰۱، فرد B متولد ۲۰۱۰-۰۱-۲۰: فرد B، ۴ ماه و ۱۲ روز بزرگ‌تر است."
 ],
 "faq": [
  ["چرا این فقط اختلاف سال‌های تولد نیست؟", "تفریق ساده سال‌های تولد ممکن است تا یک سال خطا داشته باشد، بسته به اینکه تولد هر فرد امسال گذشته باشد یا نه. این ماشین‌حساب برای نتیجه دقیق از تاریخ‌های واقعی تقویم استفاده می‌کند."],
  ["اگر تاریخ تولدی در آینده وارد کنم چه می‌شود؟", "چون تاریخ تولد نمی‌تواند در آینده باشد، ماشین‌حساب هشداری نمایش می‌دهد و از شما می‌خواهد تاریخی وارد کنید که دیرتر از امروز نباشد."],
  ["اگر تاریخ تولد هر دو نفر یکسان باشد چه می‌شود؟", "ماشین‌حساب نشان می‌دهد که هیچ اختلاف سنی بین دو نفر وجود ندارد."]
 ],
 "labels": {"person_a": "تاریخ تولد فرد A", "person_b": "تاریخ تولد فرد B"},
 "alert": "لطفاً هر دو تاریخ تولد را وارد کنید.",
 "alert_future": "تاریخ تولد نمی‌تواند دیرتر از امروز باشد.",
 "result_tpl": {"diff_tpl": "اختلاف {y} سال {m} ماه {d} روز", "a_older_tpl": "فرد A بزرگ‌تر است.", "b_older_tpl": "فرد B بزرگ‌تر است.", "same_tpl": "تاریخ تولد هر دو نفر یکسان است — بدون اختلاف سنی.", "total_days_tpl": "مجموعاً {days} روز"},
},
"th": {
 "title": "เครื่องคำนวณผลต่างอายุ - คำนวณปี เดือน วันที่ต่างกันระหว่างวันเกิดสองคนอย่างแม่นยำ",
 "meta": "กรอกวันเกิดของสองคนเพื่อคำนวณผลต่างอายุที่แม่นยำเป็นปี เดือน และวัน ไม่ใช่แค่การลบปีเกิดแบบง่าย ๆ",
 "card_desc": "กรอกวันเกิดทั้งสองคนเพื่อคำนวณว่าใครอายุมากกว่ากันเท่าไรอย่างแม่นยำ",
 "nav": "ผลต่างอายุ",
 "home_desc": "คำนวณผลต่างอายุที่แม่นยำระหว่างสองคนเป็นปี เดือน และวัน",
 "usage": [
  "กรอกวันเกิดของบุคคล A",
  "กรอกวันเกิดของบุคคล B",
  "กด \"คำนวณ\" เพื่อดูผลต่างที่แม่นยำเป็นปี เดือน และวัน"
 ],
 "method": "เครื่องคำนวณจะหาว่าวันเกิดใดเร็วกว่า จากนั้นลบปี เดือน และวันแยกกัน โดยยืมหนึ่งเดือนเมื่อวันไม่พอ และยืมหนึ่งปีเมื่อเดือนไม่พอ ผลลัพธ์จึงเป็นผลต่างตามปฏิทินจริง ไม่ใช่แค่การลบปีเกิด",
 "examples": [
  "ตัวอย่าง 1 — บุคคล A เกิดวันที่ 15 มี.ค. 1990 บุคคล B เกิดวันที่ 2 พ.ย. 1993: บุคคล A แก่กว่า 3 ปี 7 เดือน 18 วัน",
  "ตัวอย่าง 2 — บุคคล A เกิดวันที่ 1 มิ.ย. 2010 บุคคล B เกิดวันที่ 20 ม.ค. 2010: บุคคล B แก่กว่า 4 เดือน 12 วัน"
 ],
 "faq": [
  ["ทำไมไม่ใช้แค่การลบปีเกิด?", "การลบแค่ปีเกิดอาจคลาดเคลื่อนได้ถึงหนึ่งปี ขึ้นอยู่กับว่าวันเกิดของแต่ละคนผ่านไปแล้วในปีนี้หรือยัง เครื่องคำนวณนี้ใช้วันที่จริงตามปฏิทินเพื่อผลลัพธ์ที่แม่นยำ"],
  ["ถ้ากรอกวันเกิดในอนาคตจะเป็นอย่างไร?", "เครื่องคำนวณจะแจ้งเตือนให้กรอกวันเกิดที่ไม่เกินวันนี้ เพราะวันเกิดไม่สามารถอยู่ในอนาคตได้"],
  ["ถ้าทั้งสองคนเกิดวันเดียวกันจะเป็นอย่างไร?", "เครื่องคำนวณจะแสดงว่าทั้งสองคนไม่มีผลต่างอายุ"]
 ],
 "labels": {"person_a": "วันเกิดของบุคคล A", "person_b": "วันเกิดของบุคคล B"},
 "alert": "กรุณากรอกวันเกิดทั้งสองคน",
 "alert_future": "วันเกิดต้องไม่เกินวันนี้",
 "result_tpl": {"diff_tpl": "ต่างกัน {y} ปี {m} เดือน {d} วัน", "a_older_tpl": "บุคคล A แก่กว่า", "b_older_tpl": "บุคคล B แก่กว่า", "same_tpl": "ทั้งสองคนเกิดวันเดียวกัน — ไม่มีผลต่างอายุ", "total_days_tpl": "รวม {days} วัน"},
},
"fr": {
 "title": "Calculateur de Différence d'Âge - Années, Mois et Jours Exacts Entre Deux Dates de Naissance",
 "meta": "Entrez deux dates de naissance pour calculer la différence d'âge exacte en années, mois et jours — pas seulement une simple soustraction des années de naissance.",
 "card_desc": "Entrez les deux dates de naissance pour calculer exactement de combien une personne est plus âgée que l'autre.",
 "nav": "Différence d'Âge",
 "home_desc": "Calculez la différence d'âge exacte entre deux personnes en années, mois et jours",
 "usage": [
  "Entrez la date de naissance de la Personne A.",
  "Entrez la date de naissance de la Personne B.",
  "Cliquez sur \"Calculer\" pour voir la différence exacte en années, mois et jours."
 ],
 "method": "Le calculateur détermine quelle date de naissance est la plus ancienne, puis soustrait année, mois et jour séparément — en empruntant un mois quand le jour est insuffisant et une année quand le mois est insuffisant — de sorte que le résultat est la vraie différence calendaire, pas seulement une soustraction des années de naissance.",
 "examples": [
  "Exemple 1 — Personne A née le 15/03/1990, Personne B née le 02/11/1993 : la Personne A est plus âgée de 3 ans, 7 mois et 18 jours.",
  "Exemple 2 — Personne A née le 01/06/2010, Personne B née le 20/01/2010 : la Personne B est plus âgée de 4 mois et 12 jours."
 ],
 "faq": [
  ["Pourquoi n'est-ce pas juste la différence entre les années de naissance ?", "Soustraire uniquement les années de naissance peut être erroné jusqu'à un an, selon que l'anniversaire de chaque personne est déjà passé cette année. Ce calculateur utilise les dates calendaires réelles pour un résultat exact."],
  ["Que se passe-t-il si j'entre une date de naissance future ?", "Le calculateur affichera une alerte vous demandant d'entrer une date de naissance qui ne soit pas postérieure à aujourd'hui, car une date de naissance ne peut pas être dans le futur."],
  ["Que se passe-t-il si les deux personnes ont la même date de naissance ?", "Le calculateur indiquera qu'il n'y a aucune différence d'âge entre les deux personnes."]
 ],
 "labels": {"person_a": "Date de naissance de la Personne A", "person_b": "Date de naissance de la Personne B"},
 "alert": "Veuillez entrer les deux dates de naissance.",
 "alert_future": "Une date de naissance ne peut pas être postérieure à aujourd'hui.",
 "result_tpl": {"diff_tpl": "{y} an(s) {m} mois {d} jour(s) d'écart", "a_older_tpl": "La Personne A est plus âgée.", "b_older_tpl": "La Personne B est plus âgée.", "same_tpl": "Les deux personnes ont la même date de naissance — aucune différence d'âge.", "total_days_tpl": "{days} jour(s) au total"},
},
};
module.exports = AGEDIFF;
