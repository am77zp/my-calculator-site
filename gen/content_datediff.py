# -*- coding: utf-8 -*-
# Content for the "datediff" calculator (difference between two dates),
# one entry per of the 19 site languages. No modes — two date inputs only.
DATEDIFF = {
"ko": {
 "title": "날짜 차이 계산기 - 두 날짜 사이의 일수·주수·개월수 계산",
 "meta": "시작일과 종료일을 입력하면 두 날짜 사이의 총 일수, 주수, 그리고 년/월/일 단위 차이를 한 번에 계산합니다.",
 "card_desc": "시작일과 종료일을 입력하면 두 날짜 사이의 차이를 바로 계산합니다.",
 "nav": "날짜 차이",
 "home_desc": "두 날짜 사이의 총 일수·주수·년월일 차이 계산",
 "usage": [
   "시작일을 선택합니다.",
   "종료일을 선택합니다 (시작일보다 이전이어도 계산됩니다).",
   "\"계산하기\"를 누르면 총 일수와 년/월/일 차이가 바로 표시됩니다."
 ],
 "method": "총 일수는 두 날짜의 차이를 그대로 일 단위로 계산합니다. 캘린더 기준 차이는 연도·월·일을 각각 뺀 뒤, 일이 부족하면 앞 달에서 빌려오고 월이 부족하면 앞 해에서 빌려오는 방식으로 계산합니다.",
 "examples": [
   "예시 1 — 시작일 2024-01-01, 종료일 2024-12-31이면 총 365일이며, 캘린더 기준으로는 0년 11개월 30일 차이입니다.",
   "예시 2 — 시작일 2025-03-10, 종료일 2026-09-19이면 총 558일(79주 5일)이며, 캘린더 기준으로는 1년 6개월 9일 차이입니다."
 ],
 "faq": [
   ["시작일이 종료일보다 늦어도 계산되나요?", "네, 어느 쪽이 더 빠른지 자동으로 판단해서 항상 양수인 차이 값을 보여줍니다."],
   ["결과의 \"총 일수\"와 \"년/월/일 차이\"는 왜 다르게 느껴지나요?", "총 일수는 정확한 날짜 간격을 하루 단위로 셈한 값이고, 년/월/일 차이는 달력 상의 연·월·일을 기준으로 나눈 값이라 월의 길이(28~31일)에 따라 체감이 다를 수 있습니다."]
 ],
 "labels": {"start": "시작일", "end": "종료일"},
 "alert": "시작일과 종료일을 모두 입력해 주세요.",
 "result_tpl": {
   "days": "총 {days}일 차이",
   "weeks": "{weeks}주 {restdays}일",
   "ymd": "{y}년 {m}개월 {d}일 차이",
   "same": "두 날짜가 같습니다 (0일)"
 },
},
"en": {
 "title": "Date Difference Calculator - Days, Weeks, and Months Between Two Dates",
 "meta": "Enter a start and end date to calculate the total number of days, weeks, and the year/month/day breakdown between them.",
 "card_desc": "Enter a start date and an end date to calculate the difference between them instantly.",
 "nav": "Date Difference",
 "home_desc": "Calculate the total days, weeks, and years/months/days between two dates",
 "usage": [
   "Select the start date.",
   "Select the end date (it can be earlier than the start date, too).",
   "Click \"Calculate\" to see the total days and the year/month/day breakdown instantly."
 ],
 "method": "The total number of days is the exact gap between the two dates in days. The calendar breakdown subtracts year, month, and day separately, borrowing a month when the day is short and a year when the month is short.",
 "examples": [
   "Example 1 — Start 2024-01-01, end 2024-12-31 gives 365 total days, and a calendar breakdown of 0 years 11 months 30 days.",
   "Example 2 — Start 2025-03-10, end 2026-09-19 gives 558 total days (79 weeks 5 days), and a calendar breakdown of 1 year 6 months 9 days."
 ],
 "faq": [
   ["Does it still work if the start date is after the end date?", "Yes, the calculator automatically detects which date is earlier and always shows a positive difference."],
   ["Why do the total days and the year/month/day breakdown feel different?", "Total days counts the exact gap day by day, while the year/month/day breakdown follows the calendar, so it can feel different depending on how long each month is (28 to 31 days)."]
 ],
 "labels": {"start": "Start date", "end": "End date"},
 "alert": "Please enter both the start date and the end date.",
 "result_tpl": {
   "days": "{days} day(s) total",
   "weeks": "{weeks} week(s) {restdays} day(s)",
   "ymd": "{y} year(s) {m} month(s) {d} day(s)",
   "same": "The two dates are the same (0 days)"
 },
},
"ja": {
 "title": "日付差計算機 - 2つの日付の日数・週数・年月日を計算",
 "meta": "開始日と終了日を入力すると、2つの日付の合計日数、週数、年月日の内訳を一度に計算します。",
 "card_desc": "開始日と終了日を入力すると、2つの日付の差がすぐに計算されます。",
 "nav": "日付差",
 "home_desc": "2つの日付間の合計日数・週数・年月日差を計算",
 "usage": [
   "開始日を選びます。",
   "終了日を選びます(開始日より前の日付でも計算できます)。",
   "「計算する」を押すと合計日数と年月日の内訳がすぐに表示されます。"
 ],
 "method": "合計日数は2つの日付の間隔をそのまま日単位で数えます。カレンダー内訳は年・月・日をそれぞれ引き算し、日が足りなければ前の月から、月が足りなければ前の年から繰り下げます。",
 "examples": [
   "例1 — 開始日2024-01-01、終了日2024-12-31のとき、合計365日、カレンダー内訳は0年11か月30日です。",
   "例2 — 開始日2025-03-10、終了日2026-09-19のとき、合計558日(79週5日)、カレンダー内訳は1年6か月9日です。"
 ],
 "faq": [
   ["開始日が終了日より後でも計算できますか?", "はい、どちらが早いか自動で判断し、常に正の差を表示します。"],
   ["合計日数と年月日の内訳はなぜ印象が違いますか?", "合計日数は正確な間隔を1日単位で数えた値で、年月日の内訳はカレンダー上の年・月・日で分けた値のため、月の長さ(28〜31日)によって感じ方が変わります。"]
 ],
 "labels": {"start": "開始日", "end": "終了日"},
 "alert": "開始日と終了日を両方入力してください。",
 "result_tpl": {
   "days": "合計{days}日",
   "weeks": "{weeks}週{restdays}日",
   "ymd": "{y}年{m}か月{d}日",
   "same": "2つの日付は同じです(0日)"
 },
},
"zh-cn": {
 "title": "日期差计算器 - 计算两个日期之间的天数、周数和年月日",
 "meta": "输入开始日期和结束日期,即可计算两个日期之间的总天数、周数,以及按年/月/日细分的差值。",
 "card_desc": "输入开始日期和结束日期,即可立即计算两者之间的差值。",
 "nav": "日期差",
 "home_desc": "计算两个日期之间的总天数、周数及年月日差",
 "usage": [
  "选择开始日期。",
  "选择结束日期(即使早于开始日期也可以计算)。",
  "点击“计算”即可立即显示总天数和年月日细分结果。"
 ],
 "method": "总天数是两个日期之间的精确天数差。日历细分则分别相减年、月、日,若日数不足则向前一个月借位,若月数不足则向前一年借位。",
 "examples": [
  "示例1 — 开始日期2024-01-01,结束日期2024-12-31,总天数为365天,日历细分为0年11个月30天。",
  "示例2 — 开始日期2025-03-10,结束日期2026-09-19,总天数为558天(79周5天),日历细分为1年6个月9天。"
 ],
 "faq": [
  ["开始日期晚于结束日期也能计算吗?", "可以,计算器会自动判断哪个日期更早,并始终显示正值的差。"],
  ["为什么总天数和年月日细分感觉不一样?", "总天数是按天精确计算的间隔,而年月日细分是按日历上的年、月、日划分的,由于每月天数(28到31天)不同,两者感觉会有差异。"]
 ],
 "labels": {"start": "开始日期", "end": "结束日期"},
 "alert": "请输入开始日期和结束日期。",
 "result_tpl": {
  "days": "共{days}天",
  "weeks": "{weeks}周{restdays}天",
  "ymd": "{y}年{m}个月{d}天",
  "same": "两个日期相同(0天)"
 },
},
"hi": {
 "title": "दिनांक अंतर कैलकुलेटर - दो तारीखों के बीच दिन, सप्ताह और महीने निकालें",
 "meta": "शुरुआत और अंतिम तारीख डालें और दोनों के बीच कुल दिन, सप्ताह और साल/महीने/दिन का ब्यौरा एक साथ जानें।",
 "card_desc": "शुरुआत की तारीख और अंतिम तारीख डालें, दोनों के बीच का अंतर तुरंत निकाला जाएगा।",
 "nav": "दिनांक अंतर",
 "home_desc": "दो तारीखों के बीच कुल दिन, सप्ताह और साल/महीने/दिन का अंतर निकालें",
 "usage": [
  "शुरुआत की तारीख चुनें।",
  "अंतिम तारीख चुनें (यह शुरुआत की तारीख से पहले भी हो सकती है)।",
  "\"गणना करें\" दबाते ही कुल दिन और साल/महीने/दिन का ब्यौरा तुरंत दिखेगा।"
 ],
 "method": "कुल दिन दोनों तारीखों के बीच का सटीक अंतर दिनों में है। कैलेंडर ब्यौरा साल, महीना और दिन अलग-अलग घटाकर निकाला जाता है; दिन कम पड़ने पर पिछले महीने से और महीना कम पड़ने पर पिछले साल से उधार लिया जाता है।",
 "examples": [
  "उदाहरण 1 — शुरुआत 2024-01-01, अंत 2024-12-31 पर कुल 365 दिन, कैलेंडर ब्यौरा 0 साल 11 महीने 30 दिन।",
  "उदाहरण 2 — शुरुआत 2025-03-10, अंत 2026-09-19 पर कुल 558 दिन (79 सप्ताह 5 दिन), कैलेंडर ब्यौरा 1 साल 6 महीने 9 दिन।"
 ],
 "faq": [
  ["क्या शुरुआत की तारीख अंत की तारीख से बाद की हो तो भी काम करेगा?", "हां, कैलकुलेटर अपने-आप पता लगा लेता है कौन-सी तारीख पहले है और हमेशा धनात्मक अंतर दिखाता है।"],
  ["कुल दिन और साल/महीने/दिन का ब्यौरा अलग क्यों लगता है?", "कुल दिन सटीक अंतर को दिन-दर-दिन गिनता है, जबकि साल/महीने/दिन का ब्यौरा कैलेंडर के हिसाब से बांटा जाता है, इसलिए महीनों की अलग-अलग लंबाई (28 से 31 दिन) के कारण फर्क महसूस हो सकता है।"]
 ],
 "labels": {"start": "शुरुआत की तारीख", "end": "अंतिम तारीख"},
 "alert": "कृपया शुरुआत और अंतिम दोनों तारीखें डालें।",
 "result_tpl": {
  "days": "कुल {days} दिन",
  "weeks": "{weeks} सप्ताह {restdays} दिन",
  "ymd": "{y} साल {m} महीने {d} दिन",
  "same": "दोनों तारीखें समान हैं (0 दिन)"
 },
},
"id": {
 "title": "Kalkulator Selisih Tanggal - Hitung Hari, Minggu, dan Bulan Antara Dua Tanggal",
 "meta": "Masukkan tanggal mulai dan tanggal akhir untuk menghitung total hari, minggu, serta rincian tahun/bulan/hari di antara keduanya.",
 "card_desc": "Masukkan tanggal mulai dan tanggal akhir untuk langsung menghitung selisih antara keduanya.",
 "nav": "Selisih Tanggal",
 "home_desc": "Hitung total hari, minggu, dan selisih tahun/bulan/hari antara dua tanggal",
 "usage": [
  "Pilih tanggal mulai.",
  "Pilih tanggal akhir (boleh lebih awal dari tanggal mulai).",
  "Klik \"Hitung\" untuk melihat total hari dan rincian tahun/bulan/hari secara instan."
 ],
 "method": "Total hari adalah selisih pasti antara dua tanggal dalam satuan hari. Rincian kalender mengurangi tahun, bulan, dan hari secara terpisah, meminjam satu bulan jika hari kurang dan satu tahun jika bulan kurang.",
 "examples": [
  "Contoh 1 — Mulai 2024-01-01, akhir 2024-12-31 menghasilkan total 365 hari, rincian kalender 0 tahun 11 bulan 30 hari.",
  "Contoh 2 — Mulai 2025-03-10, akhir 2026-09-19 menghasilkan total 558 hari (79 minggu 5 hari), rincian kalender 1 tahun 6 bulan 9 hari."
 ],
 "faq": [
  ["Apakah tetap bisa dihitung jika tanggal mulai setelah tanggal akhir?", "Ya, kalkulator otomatis mendeteksi tanggal mana yang lebih awal dan selalu menampilkan selisih positif."],
  ["Mengapa total hari dan rincian tahun/bulan/hari terasa berbeda?", "Total hari menghitung selisih pasti hari demi hari, sedangkan rincian tahun/bulan/hari mengikuti kalender, sehingga bisa terasa berbeda tergantung panjang tiap bulan (28 hingga 31 hari)."]
 ],
 "labels": {"start": "Tanggal mulai", "end": "Tanggal akhir"},
 "alert": "Silakan masukkan tanggal mulai dan tanggal akhir.",
 "result_tpl": {
  "days": "Total {days} hari",
  "weeks": "{weeks} minggu {restdays} hari",
  "ymd": "{y} tahun {m} bulan {d} hari",
  "same": "Kedua tanggal sama (0 hari)"
 },
},
"pt-br": {
 "title": "Calculadora de Diferença de Datas - Dias, Semanas e Meses",
 "meta": "Informe a data inicial e a data final para calcular o total de dias, semanas e a diferença em anos/meses/dias entre elas.",
 "card_desc": "Informe a data inicial e a data final para calcular a diferença entre elas na hora.",
 "nav": "Diferença de Datas",
 "home_desc": "Calcule o total de dias, semanas e a diferença em anos/meses/dias entre duas datas",
 "usage": [
  "Selecione a data inicial.",
  "Selecione a data final (pode ser anterior à data inicial também).",
  "Clique em \"Calcular\" para ver o total de dias e a diferença em anos/meses/dias na hora."
 ],
 "method": "O total de dias é a diferença exata entre as duas datas, em dias. A diferença em calendário subtrai ano, mês e dia separadamente, pegando emprestado um mês quando o dia é insuficiente e um ano quando o mês é insuficiente.",
 "examples": [
  "Exemplo 1 — Início 2024-01-01, fim 2024-12-31 dá 365 dias no total, com diferença de calendário de 0 anos, 11 meses e 30 dias.",
  "Exemplo 2 — Início 2025-03-10, fim 2026-09-19 dá 558 dias no total (79 semanas e 5 dias), com diferença de calendário de 1 ano, 6 meses e 9 dias."
 ],
 "faq": [
  ["Funciona se a data inicial for depois da data final?", "Sim, a calculadora detecta automaticamente qual data é anterior e sempre mostra uma diferença positiva."],
  ["Por que o total de dias e a diferença em anos/meses/dias parecem diferentes?", "O total de dias conta a diferença exata dia a dia, enquanto a diferença em anos/meses/dias segue o calendário, o que pode parecer diferente dependendo da duração de cada mês (28 a 31 dias)."]
 ],
 "labels": {"start": "Data inicial", "end": "Data final"},
 "alert": "Informe a data inicial e a data final.",
 "result_tpl": {
  "days": "{days} dia(s) no total",
  "weeks": "{weeks} semana(s) e {restdays} dia(s)",
  "ymd": "{y} ano(s) {m} mês(es) {d} dia(s)",
  "same": "As duas datas são iguais (0 dias)"
 },
},
"ru": {
 "title": "Калькулятор разницы дат - дни, недели и месяцы между двумя датами",
 "meta": "Введите начальную и конечную дату, чтобы рассчитать общее количество дней, недель, а также разницу в годах, месяцах и днях.",
 "card_desc": "Введите начальную и конечную дату, чтобы мгновенно рассчитать разницу между ними.",
 "nav": "Разница дат",
 "home_desc": "Расчёт общего числа дней, недель и разницы в годах/месяцах/днях между двумя датами",
 "usage": [
  "Выберите начальную дату.",
  "Выберите конечную дату (она также может быть раньше начальной).",
  "Нажмите «Рассчитать», чтобы сразу увидеть общее число дней и разбивку по годам/месяцам/дням."
 ],
 "method": "Общее число дней — это точный промежуток между датами в днях. Календарная разбивка вычитает год, месяц и день по отдельности, занимая месяц при нехватке дней и год при нехватке месяцев.",
 "examples": [
  "Пример 1 — Начало 2024-01-01, конец 2024-12-31 дают 365 дней всего, календарная разбивка — 0 лет 11 месяцев 30 дней.",
  "Пример 2 — Начало 2025-03-10, конец 2026-09-19 дают 558 дней всего (79 недель 5 дней), календарная разбивка — 1 год 6 месяцев 9 дней."
 ],
 "faq": [
  ["Работает ли это, если начальная дата позже конечной?", "Да, калькулятор автоматически определяет, какая дата раньше, и всегда показывает положительную разницу."],
  ["Почему общее число дней и разбивка по годам/месяцам/дням отличаются?", "Общее число дней считает точный промежуток день за днём, а разбивка следует календарю, поэтому результат может ощущаться иначе в зависимости от длины месяцев (от 28 до 31 дня)."]
 ],
 "labels": {"start": "Начальная дата", "end": "Конечная дата"},
 "alert": "Введите начальную и конечную дату.",
 "result_tpl": {
  "days": "Всего {days} дн.",
  "weeks": "{weeks} нед. {restdays} дн.",
  "ymd": "{y} г. {m} мес. {d} дн.",
  "same": "Обе даты совпадают (0 дней)"
 },
},
"ur": {
 "title": "تاریخ کے فرق کا کیلکولیٹر - دنوں، ہفتوں اور مہینوں کا حساب",
 "meta": "شروع اور آخر کی تاریخ درج کریں اور دونوں کے درمیان کل دن، ہفتے، اور سال/مہینہ/دن کا فرق ایک ساتھ معلوم کریں۔",
 "card_desc": "شروع کی تاریخ اور آخر کی تاریخ درج کریں، دونوں کے درمیان فرق فوراً معلوم ہوگا۔",
 "nav": "تاریخ کا فرق",
 "home_desc": "دو تاریخوں کے درمیان کل دن، ہفتے اور سال/مہینہ/دن کا فرق نکالیں",
 "usage": [
  "شروع کی تاریخ منتخب کریں۔",
  "آخر کی تاریخ منتخب کریں (یہ شروع کی تاریخ سے پہلے بھی ہو سکتی ہے)۔",
  "\"حساب کریں\" دبانے پر کل دن اور سال/مہینہ/دن کا فرق فوراً ظاہر ہوگا۔"
 ],
 "method": "کل دن دونوں تاریخوں کے درمیان درست فرق ہے۔ کیلنڈر کا فرق سال، مہینہ اور دن الگ الگ گھٹا کر نکالا جاتا ہے؛ دن کم ہونے پر پچھلے مہینے سے اور مہینہ کم ہونے پر پچھلے سال سے ادھار لیا جاتا ہے۔",
 "examples": [
  "مثال 1 — شروع 2024-01-01، اختتام 2024-12-31 پر کل 365 دن، کیلنڈر فرق 0 سال 11 ماہ 30 دن۔",
  "مثال 2 — شروع 2025-03-10، اختتام 2026-09-19 پر کل 558 دن (79 ہفتے 5 دن)، کیلنڈر فرق 1 سال 6 ماہ 9 دن۔"
 ],
 "faq": [
  ["اگر شروع کی تاریخ آخر کی تاریخ کے بعد ہو تو بھی کام کرے گا؟", "جی ہاں، کیلکولیٹر خود بخود پتا لگا لیتا ہے کون سی تاریخ پہلے ہے اور ہمیشہ مثبت فرق دکھاتا ہے۔"],
  ["کل دن اور سال/مہینہ/دن کا فرق مختلف کیوں محسوس ہوتا ہے؟", "کل دن درست فرق کو دن بہ دن گنتا ہے، جبکہ سال/مہینہ/دن کا فرق کیلنڈر کے مطابق تقسیم ہوتا ہے، اس لیے مہینوں کی مختلف لمبائی (28 سے 31 دن) کی وجہ سے فرق محسوس ہو سکتا ہے۔"]
 ],
 "labels": {"start": "شروع کی تاریخ", "end": "آخر کی تاریخ"},
 "alert": "براہ کرم شروع اور آخر دونوں تاریخیں درج کریں۔",
 "result_tpl": {
  "days": "کل {days} دن",
  "weeks": "{weeks} ہفتے {restdays} دن",
  "ymd": "{y} سال {m} مہینے {d} دن",
  "same": "دونوں تاریخیں ایک جیسی ہیں (0 دن)"
 },
},
"es": {
 "title": "Calculadora de Diferencia de Fechas - Días, Semanas y Meses",
 "meta": "Introduce la fecha de inicio y de fin para calcular el total de días, semanas y la diferencia en años/meses/días entre ambas.",
 "card_desc": "Introduce la fecha de inicio y la fecha de fin para calcular la diferencia entre ambas al instante.",
 "nav": "Diferencia de Fechas",
 "home_desc": "Calcula el total de días, semanas y la diferencia en años/meses/días entre dos fechas",
 "usage": [
  "Selecciona la fecha de inicio.",
  "Selecciona la fecha de fin (también puede ser anterior a la de inicio).",
  "Pulsa \"Calcular\" para ver el total de días y el desglose en años/meses/días al instante."
 ],
 "method": "El total de días es la diferencia exacta entre ambas fechas en días. El desglose de calendario resta año, mes y día por separado, tomando prestado un mes cuando faltan días y un año cuando faltan meses.",
 "examples": [
  "Ejemplo 1 — Inicio 2024-01-01, fin 2024-12-31 da 365 días en total, con un desglose de 0 años, 11 meses y 30 días.",
  "Ejemplo 2 — Inicio 2025-03-10, fin 2026-09-19 da 558 días en total (79 semanas y 5 días), con un desglose de 1 año, 6 meses y 9 días."
 ],
 "faq": [
  ["¿Funciona si la fecha de inicio es posterior a la de fin?", "Sí, la calculadora detecta automáticamente cuál fecha es anterior y siempre muestra una diferencia positiva."],
  ["¿Por qué el total de días y el desglose en años/meses/días se sienten distintos?", "El total de días cuenta la diferencia exacta día a día, mientras que el desglose sigue el calendario, por lo que puede sentirse distinto según la duración de cada mes (de 28 a 31 días)."]
 ],
 "labels": {"start": "Fecha de inicio", "end": "Fecha de fin"},
 "alert": "Introduce la fecha de inicio y la fecha de fin.",
 "result_tpl": {
  "days": "{days} día(s) en total",
  "weeks": "{weeks} semana(s) y {restdays} día(s)",
  "ymd": "{y} año(s) {m} mes(es) {d} día(s)",
  "same": "Las dos fechas son iguales (0 días)"
 },
},
"tl": {
 "title": "Kalkulator ng Pagkakaiba ng Petsa - Araw, Linggo, at Buwan",
 "meta": "Ilagay ang petsa ng simula at petsa ng katapusan para makalkula ang kabuuang araw, linggo, at pagkakaiba sa taon/buwan/araw sa pagitan nila.",
 "card_desc": "Ilagay ang petsa ng simula at petsa ng katapusan para makalkula agad ang pagkakaiba sa pagitan nila.",
 "nav": "Pagkakaiba ng Petsa",
 "home_desc": "Kalkulahin ang kabuuang araw, linggo, at pagkakaiba sa taon/buwan/araw sa pagitan ng dalawang petsa",
 "usage": [
  "Piliin ang petsa ng simula.",
  "Piliin ang petsa ng katapusan (maaari rin itong mas maaga kaysa petsa ng simula).",
  "I-click ang \"Kalkulahin\" para makita agad ang kabuuang araw at ang detalyeng taon/buwan/araw."
 ],
 "method": "Ang kabuuang araw ay ang eksaktong pagitan ng dalawang petsa sa araw. Ang detalyeng kalendaryo ay ibinabawas ang taon, buwan, at araw nang hiwalay, humihiram ng isang buwan kung kulang ang araw at isang taon kung kulang ang buwan.",
 "examples": [
  "Halimbawa 1 — Simula 2024-01-01, katapusan 2024-12-31 ay nagbibigay ng 365 araw sa kabuuan, na may detalyeng 0 taon 11 buwan 30 araw.",
  "Halimbawa 2 — Simula 2025-03-10, katapusan 2026-09-19 ay nagbibigay ng 558 araw sa kabuuan (79 linggo 5 araw), na may detalyeng 1 taon 6 buwan 9 araw."
 ],
 "faq": [
  ["Gagana ba kung ang petsa ng simula ay pagkatapos ng petsa ng katapusan?", "Oo, awtomatikong tinutukoy ng kalkulator kung aling petsa ang mas maaga at palaging nagpapakita ng positibong pagkakaiba."],
  ["Bakit magkaiba ang pakiramdam ng kabuuang araw at ng detalyeng taon/buwan/araw?", "Ang kabuuang araw ay binibilang ang eksaktong pagitan araw-araw, habang ang detalye ay sumusunod sa kalendaryo, kaya maaaring magkaiba depende sa haba ng bawat buwan (28 hanggang 31 araw)."]
 ],
 "labels": {"start": "Petsa ng simula", "end": "Petsa ng katapusan"},
 "alert": "Pakilagay ang petsa ng simula at ng katapusan.",
 "result_tpl": {
  "days": "{days} araw sa kabuuan",
  "weeks": "{weeks} linggo {restdays} araw",
  "ymd": "{y} taon {m} buwan {d} araw",
  "same": "Magkatulad ang dalawang petsa (0 araw)"
 },
},
"ar": {
 "title": "حاسبة الفرق بين تاريخين - الأيام والأسابيع والأشهر",
 "meta": "أدخل تاريخ البدء وتاريخ الانتهاء لحساب إجمالي عدد الأيام والأسابيع والفرق بالسنوات والأشهر والأيام بينهما.",
 "card_desc": "أدخل تاريخ البدء وتاريخ الانتهاء لحساب الفرق بينهما فوراً.",
 "nav": "الفرق بين تاريخين",
 "home_desc": "احسب إجمالي الأيام والأسابيع والفرق بالسنوات/الأشهر/الأيام بين تاريخين",
 "usage": [
  "اختر تاريخ البدء.",
  "اختر تاريخ الانتهاء (يمكن أن يكون أيضاً قبل تاريخ البدء).",
  "اضغط \"احسب\" لترى إجمالي الأيام والفرق بالسنوات والأشهر والأيام فوراً."
 ],
 "method": "إجمالي الأيام هو الفارق الدقيق بين التاريخين بالأيام. يُحسب الفرق التقويمي بطرح السنة والشهر واليوم كلٍّ على حدة، مع الاقتراض من الشهر السابق عند نقص الأيام ومن السنة السابقة عند نقص الأشهر.",
 "examples": [
  "مثال 1 — البدء 2024-01-01، الانتهاء 2024-12-31، الإجمالي 365 يوماً، والفرق التقويمي 0 سنة و11 شهراً و30 يوماً.",
  "مثال 2 — البدء 2025-03-10، الانتهاء 2026-09-19، الإجمالي 558 يوماً (79 أسبوعاً و5 أيام)، والفرق التقويمي سنة واحدة و6 أشهر و9 أيام."
 ],
 "faq": [
  ["هل يعمل إذا كان تاريخ البدء بعد تاريخ الانتهاء؟", "نعم، تكتشف الحاسبة تلقائياً أي تاريخ أسبق وتعرض دائماً فرقاً موجباً."],
  ["لماذا يبدو إجمالي الأيام مختلفاً عن الفرق بالسنوات/الأشهر/الأيام؟", "إجمالي الأيام يحسب الفارق الدقيق يوماً بيوم، بينما يتبع الفرق التقويمي التقويم، لذا قد يبدو مختلفاً حسب طول كل شهر (من 28 إلى 31 يوماً)."]
 ],
 "labels": {"start": "تاريخ البدء", "end": "تاريخ الانتهاء"},
 "alert": "الرجاء إدخال تاريخ البدء وتاريخ الانتهاء.",
 "result_tpl": {
  "days": "الإجمالي {days} يوم",
  "weeks": "{weeks} أسبوع و{restdays} يوم",
  "ymd": "{y} سنة و{m} شهر و{d} يوم",
  "same": "التاريخان متطابقان (0 يوم)"
 },
},
"vi": {
 "title": "Máy Tính Khoảng Cách Ngày - Số Ngày, Tuần và Tháng Giữa Hai Ngày",
 "meta": "Nhập ngày bắt đầu và ngày kết thúc để tính tổng số ngày, số tuần, và khoảng cách theo năm/tháng/ngày giữa hai mốc đó.",
 "card_desc": "Nhập ngày bắt đầu và ngày kết thúc để tính ngay khoảng cách giữa hai ngày.",
 "nav": "Khoảng Cách Ngày",
 "home_desc": "Tính tổng số ngày, tuần và khoảng cách năm/tháng/ngày giữa hai ngày",
 "usage": [
  "Chọn ngày bắt đầu.",
  "Chọn ngày kết thúc (có thể sớm hơn ngày bắt đầu cũng được).",
  "Nhấn \"Tính\" để xem ngay tổng số ngày và khoảng cách theo năm/tháng/ngày."
 ],
 "method": "Tổng số ngày là khoảng cách chính xác giữa hai ngày tính theo ngày. Khoảng cách theo lịch được tính bằng cách trừ riêng năm, tháng, ngày; mượn một tháng nếu thiếu ngày và mượn một năm nếu thiếu tháng.",
 "examples": [
  "Ví dụ 1 — Bắt đầu 2024-01-01, kết thúc 2024-12-31 cho tổng 365 ngày, khoảng cách theo lịch là 0 năm 11 tháng 30 ngày.",
  "Ví dụ 2 — Bắt đầu 2025-03-10, kết thúc 2026-09-19 cho tổng 558 ngày (79 tuần 5 ngày), khoảng cách theo lịch là 1 năm 6 tháng 9 ngày."
 ],
 "faq": [
  ["Nếu ngày bắt đầu sau ngày kết thúc thì có tính được không?", "Có, máy tính tự động nhận biết ngày nào sớm hơn và luôn hiển thị khoảng cách dương."],
  ["Vì sao tổng số ngày và khoảng cách năm/tháng/ngày lại khác nhau?", "Tổng số ngày đếm chính xác từng ngày một, còn khoảng cách năm/tháng/ngày theo lịch nên có thể khác nhau tùy theo độ dài mỗi tháng (28 đến 31 ngày)."]
 ],
 "labels": {"start": "Ngày bắt đầu", "end": "Ngày kết thúc"},
 "alert": "Vui lòng nhập cả ngày bắt đầu và ngày kết thúc.",
 "result_tpl": {
  "days": "Tổng cộng {days} ngày",
  "weeks": "{weeks} tuần {restdays} ngày",
  "ymd": "{y} năm {m} tháng {d} ngày",
  "same": "Hai ngày giống nhau (0 ngày)"
 },
},
"de": {
 "title": "Datumsdifferenz-Rechner - Tage, Wochen und Monate zwischen zwei Daten",
 "meta": "Gib ein Start- und Enddatum ein, um die Gesamtzahl der Tage, Wochen sowie die Differenz in Jahren/Monaten/Tagen zu berechnen.",
 "card_desc": "Gib ein Start- und ein Enddatum ein, um sofort die Differenz zwischen ihnen zu berechnen.",
 "nav": "Datumsdifferenz",
 "home_desc": "Gesamtzahl der Tage, Wochen und die Differenz in Jahren/Monaten/Tagen zwischen zwei Daten berechnen",
 "usage": [
  "Wähle das Startdatum.",
  "Wähle das Enddatum (es kann auch vor dem Startdatum liegen).",
  "Klicke auf \"Berechnen\", um sofort die Gesamtzahl der Tage und die Jahre/Monate/Tage zu sehen."
 ],
 "method": "Die Gesamtzahl der Tage ist der exakte Abstand zwischen beiden Daten in Tagen. Die Kalenderdifferenz zieht Jahr, Monat und Tag getrennt ab und leiht sich bei Bedarf einen Monat bzw. ein Jahr.",
 "examples": [
  "Beispiel 1 — Start 2024-01-01, Ende 2024-12-31 ergibt 365 Tage insgesamt, Kalenderdifferenz 0 Jahre 11 Monate 30 Tage.",
  "Beispiel 2 — Start 2025-03-10, Ende 2026-09-19 ergibt 558 Tage insgesamt (79 Wochen 5 Tage), Kalenderdifferenz 1 Jahr 6 Monate 9 Tage."
 ],
 "faq": [
  ["Funktioniert es auch, wenn das Startdatum nach dem Enddatum liegt?", "Ja, der Rechner erkennt automatisch, welches Datum früher liegt, und zeigt immer eine positive Differenz."],
  ["Warum wirken Gesamttage und die Jahre/Monate/Tage-Differenz unterschiedlich?", "Die Gesamttage zählen den exakten Abstand Tag für Tag, während die Kalenderdifferenz dem Kalender folgt, was je nach Monatslänge (28 bis 31 Tage) anders wirken kann."]
 ],
 "labels": {"start": "Startdatum", "end": "Enddatum"},
 "alert": "Bitte gib Start- und Enddatum ein.",
 "result_tpl": {
  "days": "Insgesamt {days} Tag(e)",
  "weeks": "{weeks} Woche(n) {restdays} Tag(e)",
  "ymd": "{y} Jahr(e) {m} Monat(e) {d} Tag(e)",
  "same": "Die beiden Daten sind gleich (0 Tage)"
 },
},
"bn": {
 "title": "তারিখ পার্থক্য ক্যালকুলেটর - দুটি তারিখের মধ্যে দিন, সপ্তাহ ও মাস নির্ণয়",
 "meta": "শুরু ও শেষ তারিখ দিন এবং দুটির মধ্যে মোট দিন, সপ্তাহ, এবং বছর/মাস/দিনের ভাঙন একসাথে জানুন।",
 "card_desc": "শুরুর তারিখ এবং শেষ তারিখ দিন, দুটির মধ্যে পার্থক্য সাথে সাথে বের হবে।",
 "nav": "তারিখ পার্থক্য",
 "home_desc": "দুটি তারিখের মধ্যে মোট দিন, সপ্তাহ ও বছর/মাস/দিনের পার্থক্য নির্ণয় করুন",
 "usage": [
  "শুরুর তারিখ নির্বাচন করুন।",
  "শেষ তারিখ নির্বাচন করুন (এটি শুরুর তারিখের আগেও হতে পারে)।",
  "\"হিসাব করুন\" চাপলে মোট দিন এবং বছর/মাস/দিনের ভাঙন সাথে সাথে দেখা যাবে।"
 ],
 "method": "মোট দিন হলো দুই তারিখের মধ্যে সঠিক ব্যবধান দিনে। ক্যালেন্ডার ভাঙন বছর, মাস ও দিন আলাদাভাবে বিয়োগ করে বের করা হয়; দিন কম হলে আগের মাস থেকে এবং মাস কম হলে আগের বছর থেকে ধার নেওয়া হয়।",
 "examples": [
  "উদাহরণ ১ — শুরু ২০২৪-০১-০১, শেষ ২০২৪-১২-৩১ হলে মোট ৩৬৫ দিন, ক্যালেন্ডার ভাঙন ০ বছর ১১ মাস ৩০ দিন।",
  "উদাহরণ ২ — শুরু ২০২৫-০৩-১০, শেষ ২০২৬-০৯-১৯ হলে মোট ৫৫৮ দিন (৭৯ সপ্তাহ ৫ দিন), ক্যালেন্ডার ভাঙন ১ বছর ৬ মাস ৯ দিন।"
 ],
 "faq": [
  ["শুরুর তারিখ শেষের তারিখের পরে হলেও হিসাব হবে?", "হ্যাঁ, ক্যালকুলেটর নিজে থেকে বুঝে নেয় কোনটি আগে এবং সবসময় ধনাত্মক পার্থক্য দেখায়।"],
  ["মোট দিন এবং বছর/মাস/দিনের ভাঙন আলাদা কেন মনে হয়?", "মোট দিন প্রতিটি দিন গুনে নির্ভুল ব্যবধান বের করে, আর বছর/মাস/দিনের ভাঙন ক্যালেন্ডার অনুসরণ করে, তাই মাসের দৈর্ঘ্যের (২৮ থেকে ৩১ দিন) কারণে পার্থক্য অনুভব হতে পারে।"]
 ],
 "labels": {"start": "শুরুর তারিখ", "end": "শেষ তারিখ"},
 "alert": "অনুগ্রহ করে শুরু এবং শেষ উভয় তারিখ দিন।",
 "result_tpl": {
  "days": "মোট {days} দিন",
  "weeks": "{weeks} সপ্তাহ {restdays} দিন",
  "ymd": "{y} বছর {m} মাস {d} দিন",
  "same": "দুটি তারিখ একই (০ দিন)"
 },
},
"tr": {
 "title": "Tarih Farkı Hesaplayıcı - İki Tarih Arasındaki Gün, Hafta ve Ay",
 "meta": "Başlangıç ve bitiş tarihini girerek aralarındaki toplam gün, hafta sayısını ve yıl/ay/gün farkını hesaplayın.",
 "card_desc": "Başlangıç ve bitiş tarihini girin, aralarındaki fark anında hesaplansın.",
 "nav": "Tarih Farkı",
 "home_desc": "İki tarih arasındaki toplam gün, hafta ve yıl/ay/gün farkını hesaplayın",
 "usage": [
  "Başlangıç tarihini seçin.",
  "Bitiş tarihini seçin (başlangıç tarihinden önce de olabilir).",
  "Toplam gün sayısını ve yıl/ay/gün farkını anında görmek için \"Hesapla\"ya tıklayın."
 ],
 "method": "Toplam gün, iki tarih arasındaki tam farktır. Takvim farkı; yıl, ay ve günü ayrı ayrı çıkararak hesaplanır, gün yetersizse önceki aydan, ay yetersizse önceki yıldan ödünç alınır.",
 "examples": [
  "Örnek 1 — Başlangıç 2024-01-01, bitiş 2024-12-31 ise toplam 365 gün, takvim farkı 0 yıl 11 ay 30 gündür.",
  "Örnek 2 — Başlangıç 2025-03-10, bitiş 2026-09-19 ise toplam 558 gün (79 hafta 5 gün), takvim farkı 1 yıl 6 ay 9 gündür."
 ],
 "faq": [
  ["Başlangıç tarihi bitiş tarihinden sonraysa da çalışır mı?", "Evet, hesaplayıcı hangi tarihin daha erken olduğunu otomatik olarak algılar ve her zaman pozitif bir fark gösterir."],
  ["Toplam gün ile yıl/ay/gün farkı neden farklı hissettiriyor?", "Toplam gün, farkı gün gün sayarken, yıl/ay/gün farkı takvime göre hesaplanır, bu yüzden ayların uzunluğuna (28-31 gün) göre farklı hissedilebilir."]
 ],
 "labels": {"start": "Başlangıç tarihi", "end": "Bitiş tarihi"},
 "alert": "Lütfen başlangıç ve bitiş tarihini girin.",
 "result_tpl": {
  "days": "Toplam {days} gün",
  "weeks": "{weeks} hafta {restdays} gün",
  "ymd": "{y} yıl {m} ay {d} gün",
  "same": "İki tarih aynı (0 gün)"
 },
},
"fa": {
 "title": "ماشین‌حساب اختلاف تاریخ - روز، هفته و ماه بین دو تاریخ",
 "meta": "تاریخ شروع و پایان را وارد کنید تا مجموع روزها، هفته‌ها و تفاوت به سال/ماه/روز بین آن‌ها محاسبه شود.",
 "card_desc": "تاریخ شروع و تاریخ پایان را وارد کنید تا فاصله بین آن‌ها فوراً محاسبه شود.",
 "nav": "اختلاف تاریخ",
 "home_desc": "محاسبه مجموع روزها، هفته‌ها و تفاوت سال/ماه/روز بین دو تاریخ",
 "usage": [
  "تاریخ شروع را انتخاب کنید.",
  "تاریخ پایان را انتخاب کنید (می‌تواند زودتر از تاریخ شروع هم باشد).",
  "برای دیدن مجموع روزها و تفاوت سال/ماه/روز روی «محاسبه» کلیک کنید."
 ],
 "method": "مجموع روزها فاصله دقیق بین دو تاریخ به روز است. تفاوت تقویمی با کم کردن سال، ماه و روز به‌طور جداگانه محاسبه می‌شود و در صورت کمبود روز از ماه قبل و در صورت کمبود ماه از سال قبل قرض گرفته می‌شود.",
 "examples": [
  "مثال ۱ — شروع ۲۰۲۴-۰۱-۰۱، پایان ۲۰۲۴-۱۲-۳۱، مجموعاً ۳۶۵ روز، تفاوت تقویمی ۰ سال و ۱۱ ماه و ۳۰ روز.",
  "مثال ۲ — شروع ۲۰۲۵-۰۳-۱۰، پایان ۲۰۲۶-۰۹-۱۹، مجموعاً ۵۵۸ روز (۷۹ هفته و ۵ روز)، تفاوت تقویمی ۱ سال و ۶ ماه و ۹ روز."
 ],
 "faq": [
  ["اگر تاریخ شروع بعد از تاریخ پایان باشد باز هم کار می‌کند؟", "بله، ماشین‌حساب به‌طور خودکار تشخیص می‌دهد کدام تاریخ زودتر است و همیشه یک تفاوت مثبت نشان می‌دهد."],
  ["چرا مجموع روزها با تفاوت سال/ماه/روز فرق دارد؟", "مجموع روزها فاصله دقیق را روز به روز می‌شمارد، در حالی که تفاوت سال/ماه/روز بر اساس تقویم است، بنابراین بسته به طول هر ماه (۲۸ تا ۳۱ روز) می‌تواند متفاوت به نظر برسد."]
 ],
 "labels": {"start": "تاریخ شروع", "end": "تاریخ پایان"},
 "alert": "لطفاً تاریخ شروع و پایان را وارد کنید.",
 "result_tpl": {
  "days": "مجموعاً {days} روز",
  "weeks": "{weeks} هفته و {restdays} روز",
  "ymd": "{y} سال و {m} ماه و {d} روز",
  "same": "دو تاریخ یکسان هستند (۰ روز)"
 },
},
"th": {
 "title": "เครื่องคำนวณส่วนต่างวันที่ - จำนวนวัน สัปดาห์ และเดือนระหว่างสองวันที่",
 "meta": "กรอกวันที่เริ่มต้นและวันที่สิ้นสุดเพื่อคำนวณจำนวนวันทั้งหมด จำนวนสัปดาห์ และส่วนต่างแบบปี/เดือน/วัน",
 "card_desc": "กรอกวันที่เริ่มต้นและวันที่สิ้นสุดเพื่อคำนวณส่วนต่างระหว่างสองวันที่ทันที",
 "nav": "ส่วนต่างวันที่",
 "home_desc": "คำนวณจำนวนวันทั้งหมด สัปดาห์ และส่วนต่างปี/เดือน/วันระหว่างสองวันที่",
 "usage": [
  "เลือกวันที่เริ่มต้น",
  "เลือกวันที่สิ้นสุด (จะเป็นวันที่ก่อนวันที่เริ่มต้นก็ได้)",
  "กด \"คำนวณ\" เพื่อดูจำนวนวันทั้งหมดและส่วนต่างปี/เดือน/วันทันที"
 ],
 "method": "จำนวนวันทั้งหมดคือระยะห่างที่แท้จริงระหว่างสองวันที่ นับเป็นวัน ส่วนต่างแบบปฏิทินคำนวณโดยลบปี เดือน และวันแยกกัน โดยยืมเดือนก่อนหน้าเมื่อวันไม่พอ และยืมปีก่อนหน้าเมื่อเดือนไม่พอ",
 "examples": [
  "ตัวอย่างที่ 1 — เริ่ม 2024-01-01 สิ้นสุด 2024-12-31 รวม 365 วัน ส่วนต่างปฏิทินคือ 0 ปี 11 เดือน 30 วัน",
  "ตัวอย่างที่ 2 — เริ่ม 2025-03-10 สิ้นสุด 2026-09-19 รวม 558 วัน (79 สัปดาห์ 5 วัน) ส่วนต่างปฏิทินคือ 1 ปี 6 เดือน 9 วัน"
 ],
 "faq": [
  ["ถ้าวันที่เริ่มต้นอยู่หลังวันที่สิ้นสุดจะคำนวณได้ไหม?", "ได้ เครื่องคำนวณจะตรวจจับอัตโนมัติว่าวันไหนมาก่อนและแสดงผลต่างเป็นค่าบวกเสมอ"],
  ["ทำไมจำนวนวันทั้งหมดกับส่วนต่างปี/เดือน/วันถึงรู้สึกไม่เท่ากัน?", "จำนวนวันทั้งหมดนับระยะห่างที่แท้จริงทีละวัน ส่วนส่วนต่างปี/เดือน/วันอิงตามปฏิทิน จึงอาจรู้สึกต่างกันตามความยาวของแต่ละเดือน (28 ถึง 31 วัน)"]
 ],
 "labels": {"start": "วันที่เริ่มต้น", "end": "วันที่สิ้นสุด"},
 "alert": "กรุณากรอกวันที่เริ่มต้นและวันที่สิ้นสุด",
 "result_tpl": {
  "days": "รวมทั้งหมด {days} วัน",
  "weeks": "{weeks} สัปดาห์ {restdays} วัน",
  "ymd": "{y} ปี {m} เดือน {d} วัน",
  "same": "สองวันที่เหมือนกัน (0 วัน)"
 },
},
"fr": {
 "title": "Calculatrice de Différence de Dates - Jours, Semaines et Mois",
 "meta": "Entrez une date de début et de fin pour calculer le nombre total de jours, de semaines et l'écart en années/mois/jours entre elles.",
 "card_desc": "Entrez une date de début et une date de fin pour calculer instantanément l'écart entre elles.",
 "nav": "Différence de Dates",
 "home_desc": "Calculer le nombre total de jours, de semaines et l'écart en années/mois/jours entre deux dates",
 "usage": [
  "Sélectionnez la date de début.",
  "Sélectionnez la date de fin (elle peut aussi être antérieure à la date de début).",
  "Cliquez sur \"Calculer\" pour voir instantanément le total de jours et l'écart en années/mois/jours."
 ],
 "method": "Le total de jours est l'écart exact entre les deux dates, en jours. L'écart calendaire soustrait l'année, le mois et le jour séparément, en empruntant un mois si le jour est insuffisant et une année si le mois est insuffisant.",
 "examples": [
  "Exemple 1 — Début 2024-01-01, fin 2024-12-31 donne 365 jours au total, avec un écart calendaire de 0 an, 11 mois et 30 jours.",
  "Exemple 2 — Début 2025-03-10, fin 2026-09-19 donne 558 jours au total (79 semaines et 5 jours), avec un écart calendaire de 1 an, 6 mois et 9 jours."
 ],
 "faq": [
  ["Est-ce que ça marche si la date de début est après la date de fin ?", "Oui, la calculatrice détecte automatiquement quelle date est antérieure et affiche toujours un écart positif."],
  ["Pourquoi le total de jours et l'écart en années/mois/jours semblent différents ?", "Le total de jours compte l'écart exact jour par jour, tandis que l'écart calendaire suit le calendrier, ce qui peut sembler différent selon la durée de chaque mois (28 à 31 jours)."]
 ],
 "labels": {"start": "Date de début", "end": "Date de fin"},
 "alert": "Veuillez entrer la date de début et la date de fin.",
 "result_tpl": {
  "days": "{days} jour(s) au total",
  "weeks": "{weeks} semaine(s) {restdays} jour(s)",
  "ymd": "{y} an(s) {m} mois {d} jour(s)",
  "same": "Les deux dates sont identiques (0 jour)"
 },
},
}
