# -*- coding: utf-8 -*-
# Content for the "time" calculator (elapsed time between two times, or
# adding/subtracting a duration to/from a time), one entry per of the 19 languages.
# Modes: "elapsed" (start time + end time -> duration), "addsub" (time + duration, add or subtract -> result time)
TIME = {
"ko": {
 "title": "시간 계산기 - 경과 시간, 시간 더하기·빼기 계산",
 "meta": "두 시각 사이의 경과 시간을 계산하거나, 특정 시각에 시간을 더하거나 빼서 결과 시각을 바로 계산합니다.",
 "card_desc": "계산 방식을 고르고 시간을 입력하면 경과 시간 또는 결과 시각을 바로 계산합니다.",
 "nav": "시간 계산",
 "home_desc": "두 시각 사이의 경과 시간 또는 시간 더하기·빼기 계산",
 "usage": [
   "계산 방식을 선택합니다 (경과 시간 구하기 / 시간 더하기·빼기).",
   "\"경과 시간 구하기\"에서는 시작 시각과 종료 시각을, \"시간 더하기·빼기\"에서는 기준 시각과 더하거나 뺄 시간(시:분), 더하기/빼기 여부를 입력합니다.",
   "\"계산하기\"를 누르면 결과가 바로 표시됩니다."
 ],
 "method": "경과 시간은 종료 시각에서 시작 시각을 빼서 계산하며, 종료 시각이 더 이르면 자정을 넘긴 것으로 보고 24시간을 더합니다. 시간 더하기·빼기는 기준 시각에 입력한 시간을 분 단위로 환산해 더하거나 뺀 뒤, 24시간(1440분) 기준으로 다시 시:분으로 변환합니다.",
 "examples": [
   "예시 1 — \"경과 시간 구하기\" 모드에서 시작 09:15, 종료 17:45이면 경과 시간은 8시간 30분입니다.",
   "예시 2 — \"시간 더하기·빼기\" 모드에서 기준 시각 23:10에 2시간 30분을 더하면 다음 날 01:40이 됩니다."
 ],
 "faq": [
   ["자정을 넘어가는 계산도 되나요?", "네, 경과 시간 계산에서 종료 시각이 시작 시각보다 이르면 자동으로 다음 날로 넘어간 것으로 계산하고, 시간 더하기·빼기에서도 24시간을 넘거나 0시 이전으로 내려가면 날짜가 바뀐 것으로 표시합니다."],
   ["초 단위까지 계산할 수 있나요?", "이 계산기는 시:분 단위로 계산합니다. 초 단위 정밀도가 필요하면 별도로 환산해 주세요."]
 ],
 "mode_options": ["경과 시간 구하기 (시작 → 종료)", "시간 더하기·빼기 (기준 시각 + 시간)"],
 "labels": {"start": "시작 시각", "end": "종료 시각", "base": "기준 시각", "dur": "시간 (시:분)", "op": "연산"},
 "op_options": ["더하기", "빼기"],
 "alert": "필요한 값을 모두 입력해 주세요.",
 "result_tpl": {
   "elapsed": "경과 시간: {h}시간 {m}분",
   "elapsed_next": "경과 시간: {h}시간 {m}분 (자정을 넘김)",
   "addsub": "결과 시각: {time}",
   "addsub_next": "결과 시각: {time} (다음 날)",
   "addsub_prev": "결과 시각: {time} (전날)"
 },
},
"en": {
 "title": "Time Calculator - Elapsed Time and Adding/Subtracting Time",
 "meta": "Calculate the elapsed time between two clock times, or add or subtract a duration to a time to get the resulting time instantly.",
 "card_desc": "Pick a mode and enter the times to get the elapsed time or the resulting time instantly.",
 "nav": "Time Calculator",
 "home_desc": "Calculate elapsed time between two times, or add/subtract a duration",
 "usage": [
   "Choose a mode (find elapsed time, or add/subtract time).",
   "For \"find elapsed time\", enter the start and end time. For \"add/subtract time\", enter the base time, the duration (hours:minutes), and whether to add or subtract.",
   "Click \"Calculate\" to see the result instantly."
 ],
 "method": "Elapsed time is the end time minus the start time; if the end time is earlier, it's treated as crossing midnight and 24 hours are added. Adding/subtracting time converts the duration to minutes, adds or subtracts it from the base time, and wraps the result within a 24-hour (1440-minute) day.",
 "examples": [
   "Example 1 — In \"find elapsed time\" mode, start=09:15 and end=17:45 gives an elapsed time of 8 hours 30 minutes.",
   "Example 2 — In \"add/subtract time\" mode, adding 2 hours 30 minutes to a base time of 23:10 gives 01:40 the next day."
 ],
 "faq": [
   ["Does it handle times that cross midnight?", "Yes — in elapsed time mode, if the end time is earlier than the start time, it's automatically treated as the next day. In add/subtract mode, going past 24:00 or before 00:00 is flagged as the next or previous day."],
   ["Can it calculate down to the second?", "This calculator works in hours and minutes. For second-level precision, convert separately."]
 ],
 "mode_options": ["Find elapsed time (start → end)", "Add/subtract time (base + duration)"],
 "labels": {"start": "Start time", "end": "End time", "base": "Base time", "dur": "Duration (h:m)", "op": "Operation"},
 "op_options": ["Add", "Subtract"],
 "alert": "Please enter all required values.",
 "result_tpl": {
   "elapsed": "Elapsed time: {h}h {m}m",
   "elapsed_next": "Elapsed time: {h}h {m}m (crosses midnight)",
   "addsub": "Resulting time: {time}",
   "addsub_next": "Resulting time: {time} (next day)",
   "addsub_prev": "Resulting time: {time} (previous day)"
 },
},
"ja": {
 "title": "時間計算機 - 経過時間・時刻の足し算引き算",
 "meta": "2つの時刻の間の経過時間を計算したり、ある時刻に時間を足したり引いたりして結果の時刻をすぐに計算します。",
 "card_desc": "モードを選んで時刻を入力すると、経過時間または結果の時刻がすぐに表示されます。",
 "nav": "時間計算",
 "home_desc": "2つの時刻の間の経過時間、または時間の足し算・引き算を計算",
 "usage": [
   "モードを選びます(経過時間を求める/時間を足す・引く)。",
   "「経過時間を求める」では開始時刻と終了時刻を、「時間を足す・引く」では基準時刻と加減する時間(時:分)、足す/引くを入力します。",
   "「計算する」を押すと結果がすぐに表示されます。"
 ],
 "method": "経過時間は終了時刻から開始時刻を引いて計算し、終了時刻が早い場合は日をまたいだとみなして24時間を加えます。時間の足し算・引き算は時間を分に換算して基準時刻に加減し、24時間(1440分)を基準に時:分へ戻します。",
 "examples": [
   "例1 —「経過時間を求める」モードで開始09:15、終了17:45のとき、経過時間は8時間30分です。",
   "例2 —「時間を足す・引く」モードで基準時刻23:10に2時間30分を足すと、翌日01:40になります。"
 ],
 "faq": [
   ["日をまたぐ計算もできますか?", "はい。経過時間モードで終了時刻が開始時刻より早い場合は自動的に翌日として計算し、足す・引くモードでも24:00を超えたり0:00より前になった場合は翌日・前日と表示します。"],
   ["秒単位まで計算できますか?", "この計算機は時:分単位で計算します。秒単位の精度が必要な場合は別途換算してください。"]
 ],
 "mode_options": ["経過時間を求める(開始→終了)", "時間を足す・引く(基準時刻+時間)"],
 "labels": {"start": "開始時刻", "end": "終了時刻", "base": "基準時刻", "dur": "時間 (時:分)", "op": "演算"},
 "op_options": ["足す", "引く"],
 "alert": "必要な値をすべて入力してください。",
 "result_tpl": {
   "elapsed": "経過時間: {h}時間{m}分",
   "elapsed_next": "経過時間: {h}時間{m}分(日をまたぎます)",
   "addsub": "結果の時刻: {time}",
   "addsub_next": "結果の時刻: {time}(翌日)",
   "addsub_prev": "結果の時刻: {time}(前日)"
 },
},
"zh-cn": {
 "title": "时间计算器 - 计算经过时间、时间加减",
 "meta": "计算两个时间点之间经过的时长,或对某个时间加上或减去一段时长,立即得到结果时间。",
 "card_desc": "选择计算模式并输入时间,即可立即得到经过时长或结果时间。",
 "nav": "时间计算",
 "home_desc": "计算两个时间之间的经过时长,或进行时间的加减",
 "usage": [
  "选择计算模式(求经过时长 / 时间加减)。",
  "在“求经过时长”中输入开始时间和结束时间;在“时间加减”中输入基准时间、要加减的时长(时:分)以及加或减。",
  "点击“计算”即可立即显示结果。"
 ],
 "method": "经过时长 = 结束时间 − 开始时间;若结束时间早于开始时间,则视为跨越午夜,加上24小时。时间加减将时长换算为分钟后加到或减去基准时间,并以24小时(1440分钟)为周期折算成时:分。",
 "examples": [
  "示例1 — “求经过时长”模式下,开始09:15,结束17:45,经过时长为8小时30分钟。",
  "示例2 — “时间加减”模式下,基准时间23:10加上2小时30分钟,结果为次日01:40。"
 ],
 "faq": [
  ["能计算跨越午夜的情况吗?", "可以。在“求经过时长”模式下,若结束时间早于开始时间,会自动视为跨越到第二天;在“时间加减”模式下,超过24:00或早于00:00时会标注为次日或前一日。"],
  ["可以精确到秒吗?", "本计算器以时:分为单位计算。如需精确到秒,请另行换算。"]
 ],
 "mode_options": ["求经过时长(开始→结束)", "时间加减(基准时间+时长)"],
 "labels": {"start": "开始时间", "end": "结束时间", "base": "基准时间", "dur": "时长 (时:分)", "op": "运算"},
 "op_options": ["加", "减"],
 "alert": "请输入所需的所有数值。",
 "result_tpl": {
  "elapsed": "经过时长:{h}小时{m}分钟",
  "elapsed_next": "经过时长:{h}小时{m}分钟(跨越午夜)",
  "addsub": "结果时间:{time}",
  "addsub_next": "结果时间:{time}(次日)",
  "addsub_prev": "结果时间:{time}(前一日)"
 },
},
"hi": {
 "title": "समय कैलकुलेटर - बीता हुआ समय और समय जोड़ना-घटाना",
 "meta": "दो समय के बीच बीता हुआ समय निकालें, या किसी समय में एक अवधि जोड़ें या घटाकर परिणामी समय तुरंत निकालें।",
 "card_desc": "तरीका चुनें और समय डालें, बीता हुआ समय या परिणामी समय तुरंत मिलेगा।",
 "nav": "समय कैलकुलेटर",
 "home_desc": "दो समय के बीच बीता हुआ समय, या समय जोड़ना-घटाना निकालें",
 "usage": [
  "तरीका चुनें (बीता समय निकालें / समय जोड़ें-घटाएं)।",
  "\"बीता समय निकालें\" में शुरू और अंत का समय डालें; \"समय जोड़ें-घटाएं\" में आधार समय, अवधि (घंटे:मिनट) और जोड़ना/घटाना चुनें।",
  "\"गणना करें\" दबाते ही नतीजा तुरंत दिखेगा।"
 ],
 "method": "बीता समय = अंत समय − शुरू समय; अगर अंत समय पहले का हो तो आधी रात पार करना मानकर 24 घंटे जोड़े जाते हैं। समय जोड़ना-घटाना अवधि को मिनट में बदलकर आधार समय में जोड़ता या घटाता है और 24 घंटे (1440 मिनट) के हिसाब से वापस घंटे:मिनट में बदलता है।",
 "examples": [
  "उदाहरण 1 — \"बीता समय निकालें\" मोड में शुरू 09:15, अंत 17:45 पर बीता समय 8 घंटे 30 मिनट है।",
  "उदाहरण 2 — \"समय जोड़ें-घटाएं\" मोड में आधार समय 23:10 में 2 घंटे 30 मिनट जोड़ने पर अगले दिन 01:40 होता है।"
 ],
 "faq": [
  ["क्या आधी रात पार करने वाला हिसाब होता है?", "हां, बीता समय मोड में अंत समय शुरू समय से पहले हो तो अगला दिन मानकर हिसाब होता है, और जोड़ें-घटाएं मोड में भी 24:00 पार करने या 00:00 से पहले जाने पर अगला/पिछला दिन दिखाया जाता है।"],
  ["क्या सेकंड तक हिसाब हो सकता है?", "यह कैलकुलेटर घंटे:मिनट में हिसाब करता है। सेकंड की सटीकता चाहिए तो अलग से बदलें।"]
 ],
 "mode_options": ["बीता समय निकालें (शुरू → अंत)", "समय जोड़ें-घटाएं (आधार + अवधि)"],
 "labels": {"start": "शुरू समय", "end": "अंत समय", "base": "आधार समय", "dur": "अवधि (घं:मि)", "op": "क्रिया"},
 "op_options": ["जोड़ें", "घटाएं"],
 "alert": "कृपया सभी ज़रूरी वैल्यू डालें।",
 "result_tpl": {
  "elapsed": "बीता समय: {h} घंटे {m} मिनट",
  "elapsed_next": "बीता समय: {h} घंटे {m} मिनट (आधी रात पार)",
  "addsub": "परिणामी समय: {time}",
  "addsub_next": "परिणामी समय: {time} (अगला दिन)",
  "addsub_prev": "परिणामी समय: {time} (पिछला दिन)"
 },
},
"id": {
 "title": "Kalkulator Waktu - Durasi Berlalu dan Tambah/Kurang Waktu",
 "meta": "Hitung durasi yang berlalu antara dua waktu, atau tambahkan/kurangkan durasi pada suatu waktu untuk mendapatkan waktu hasil secara instan.",
 "card_desc": "Pilih mode dan masukkan waktu untuk langsung mendapatkan durasi berlalu atau waktu hasilnya.",
 "nav": "Kalkulator Waktu",
 "home_desc": "Hitung durasi berlalu antara dua waktu, atau tambah/kurang durasi",
 "usage": [
  "Pilih mode (cari durasi berlalu / tambah-kurang waktu).",
  "Untuk \"cari durasi berlalu\", masukkan waktu mulai dan selesai. Untuk \"tambah-kurang waktu\", masukkan waktu dasar, durasi (jam:menit), dan pilih tambah atau kurang.",
  "Klik \"Hitung\" untuk melihat hasilnya secara instan."
 ],
 "method": "Durasi berlalu = waktu selesai − waktu mulai; jika waktu selesai lebih awal, dianggap melewati tengah malam dan ditambah 24 jam. Tambah/kurang waktu mengubah durasi ke menit, menambah atau menguranginya dari waktu dasar, lalu membungkusnya dalam siklus 24 jam (1440 menit).",
 "examples": [
  "Contoh 1 — Mode \"cari durasi berlalu\" dengan mulai=09:15 dan selesai=17:45 menghasilkan durasi 8 jam 30 menit.",
  "Contoh 2 — Mode \"tambah-kurang waktu\", menambahkan 2 jam 30 menit pada waktu dasar 23:10 menghasilkan 01:40 keesokan harinya."
 ],
 "faq": [
  ["Bisakah menghitung yang melewati tengah malam?", "Bisa — pada mode durasi berlalu, jika waktu selesai lebih awal dari waktu mulai, otomatis dianggap hari berikutnya. Pada mode tambah-kurang, melewati 24:00 atau sebelum 00:00 ditandai sebagai hari berikutnya atau sebelumnya."],
  ["Bisakah menghitung hingga detik?", "Kalkulator ini bekerja dalam satuan jam dan menit. Untuk presisi detik, silakan konversi secara terpisah."]
 ],
 "mode_options": ["Cari durasi berlalu (mulai → selesai)", "Tambah/kurang waktu (dasar + durasi)"],
 "labels": {"start": "Waktu mulai", "end": "Waktu selesai", "base": "Waktu dasar", "dur": "Durasi (j:m)", "op": "Operasi"},
 "op_options": ["Tambah", "Kurang"],
 "alert": "Silakan masukkan semua nilai yang diperlukan.",
 "result_tpl": {
  "elapsed": "Durasi berlalu: {h} jam {m} menit",
  "elapsed_next": "Durasi berlalu: {h} jam {m} menit (melewati tengah malam)",
  "addsub": "Waktu hasil: {time}",
  "addsub_next": "Waktu hasil: {time} (hari berikutnya)",
  "addsub_prev": "Waktu hasil: {time} (hari sebelumnya)"
 },
},
"pt-br": {
 "title": "Calculadora de Tempo - Tempo Decorrido e Soma/Subtração de Horas",
 "meta": "Calcule o tempo decorrido entre dois horários, ou some ou subtraia uma duração de um horário para obter o resultado na hora.",
 "card_desc": "Escolha o modo e informe os horários para obter o tempo decorrido ou o horário resultante na hora.",
 "nav": "Calculadora de Tempo",
 "home_desc": "Calcule o tempo decorrido entre dois horários, ou some/subtraia uma duração",
 "usage": [
  "Escolha o modo (encontrar tempo decorrido ou somar/subtrair tempo).",
  "Em \"tempo decorrido\", informe o horário inicial e final. Em \"somar/subtrair\", informe o horário base, a duração (horas:minutos) e se é soma ou subtração.",
  "Clique em \"Calcular\" para ver o resultado na hora."
 ],
 "method": "O tempo decorrido é o horário final menos o inicial; se o horário final for mais cedo, considera-se que passou da meia-noite e soma-se 24 horas. Somar/subtrair converte a duração em minutos, soma ou subtrai do horário base, e ajusta o resultado dentro de um ciclo de 24 horas (1440 minutos).",
 "examples": [
  "Exemplo 1 — No modo \"tempo decorrido\", início=09:15 e fim=17:45 resultam em 8 horas e 30 minutos decorridos.",
  "Exemplo 2 — No modo \"somar/subtrair\", somar 2 horas e 30 minutos a um horário base de 23:10 resulta em 01:40 do dia seguinte."
 ],
 "faq": [
  ["Ele lida com horários que passam da meia-noite?", "Sim — no modo tempo decorrido, se o horário final for anterior ao inicial, considera-se automaticamente o dia seguinte. No modo somar/subtrair, ultrapassar 24:00 ou ficar antes de 00:00 é marcado como dia seguinte ou anterior."],
  ["Ele calcula em segundos?", "Esta calculadora trabalha em horas e minutos. Para precisão em segundos, converta separadamente."]
 ],
 "mode_options": ["Encontrar tempo decorrido (início → fim)", "Somar/subtrair tempo (base + duração)"],
 "labels": {"start": "Horário inicial", "end": "Horário final", "base": "Horário base", "dur": "Duração (h:min)", "op": "Operação"},
 "op_options": ["Somar", "Subtrair"],
 "alert": "Informe todos os valores necessários.",
 "result_tpl": {
  "elapsed": "Tempo decorrido: {h}h {m}min",
  "elapsed_next": "Tempo decorrido: {h}h {m}min (passa da meia-noite)",
  "addsub": "Horário resultante: {time}",
  "addsub_next": "Horário resultante: {time} (dia seguinte)",
  "addsub_prev": "Horário resultante: {time} (dia anterior)"
 },
},
"ru": {
 "title": "Калькулятор времени - прошедшее время и сложение/вычитание времени",
 "meta": "Рассчитайте, сколько времени прошло между двумя моментами, или прибавьте/вычтите промежуток времени и мгновенно получите итоговое время.",
 "card_desc": "Выберите режим и введите время, чтобы мгновенно получить прошедшее время или итоговое время.",
 "nav": "Калькулятор времени",
 "home_desc": "Расчёт прошедшего времени между двумя моментами или сложение/вычитание времени",
 "usage": [
  "Выберите режим (найти прошедшее время или сложить/вычесть время).",
  "В режиме «прошедшее время» введите время начала и окончания. В режиме «сложить/вычесть» введите базовое время, продолжительность (часы:минуты) и операцию.",
  "Нажмите «Рассчитать», чтобы сразу увидеть результат."
 ],
 "method": "Прошедшее время = время окончания минус время начала; если время окончания раньше, считается, что прошла полночь, и добавляется 24 часа. Сложение/вычитание переводит продолжительность в минуты, прибавляет или вычитает её из базового времени и приводит результат к суточному циклу (1440 минут).",
 "examples": [
  "Пример 1 — В режиме «прошедшее время» начало=09:15, конец=17:45 даёт 8 часов 30 минут.",
  "Пример 2 — В режиме «сложить/вычесть», прибавление 2 часов 30 минут к базовому времени 23:10 даёт 01:40 следующего дня."
 ],
 "faq": [
  ["Учитывается ли переход через полночь?", "Да — в режиме прошедшего времени, если время окончания раньше времени начала, автоматически считается следующий день. В режиме сложения/вычитания переход за 24:00 или до 00:00 отмечается как следующий или предыдущий день."],
  ["Можно ли считать с точностью до секунд?", "Этот калькулятор работает в часах и минутах. Для точности до секунд пересчитайте отдельно."]
 ],
 "mode_options": ["Найти прошедшее время (начало → конец)", "Сложить/вычесть время (база + продолжительность)"],
 "labels": {"start": "Время начала", "end": "Время окончания", "base": "Базовое время", "dur": "Продолжительность (ч:мин)", "op": "Операция"},
 "op_options": ["Сложить", "Вычесть"],
 "alert": "Введите все необходимые значения.",
 "result_tpl": {
  "elapsed": "Прошло времени: {h} ч {m} мин",
  "elapsed_next": "Прошло времени: {h} ч {m} мин (переход через полночь)",
  "addsub": "Итоговое время: {time}",
  "addsub_next": "Итоговое время: {time} (на следующий день)",
  "addsub_prev": "Итоговое время: {time} (предыдущий день)"
 },
},
"ur": {
 "title": "وقت کیلکولیٹر - گزرا ہوا وقت اور وقت جمع/تفریق",
 "meta": "دو اوقات کے درمیان گزرا ہوا وقت نکالیں، یا کسی وقت میں مدت جمع یا تفریق کرکے نتیجہ فوراً حاصل کریں۔",
 "card_desc": "طریقہ منتخب کریں اور اوقات درج کریں، گزرا ہوا وقت یا نتیجہ فوراً مل جائے گا۔",
 "nav": "وقت کیلکولیٹر",
 "home_desc": "دو اوقات کے درمیان گزرا ہوا وقت، یا وقت جمع/تفریق نکالیں",
 "usage": [
  "طریقہ منتخب کریں (گزرا وقت نکالیں / وقت جمع/تفریق کریں)۔",
  "\"گزرا وقت نکالیں\" میں شروع اور اختتامی وقت درج کریں؛ \"وقت جمع/تفریق\" میں بنیادی وقت، مدت (گھنٹے:منٹ) اور جمع یا تفریق منتخب کریں۔",
  "\"حساب کریں\" دبانے پر نتیجہ فوراً ظاہر ہوگا۔"
 ],
 "method": "گزرا وقت = اختتامی وقت − شروع وقت؛ اگر اختتامی وقت پہلے کا ہو تو آدھی رات پار کرنا سمجھا جاتا ہے اور 24 گھنٹے جمع کیے جاتے ہیں۔ جمع/تفریق مدت کو منٹ میں بدل کر بنیادی وقت میں جمع یا تفریق کرتا ہے اور 24 گھنٹے (1440 منٹ) کے حساب سے واپس گھنٹے:منٹ میں بدلتا ہے۔",
 "examples": [
  "مثال 1 — \"گزرا وقت نکالیں\" موڈ میں شروع 09:15، اختتام 17:45 پر گزرا وقت 8 گھنٹے 30 منٹ ہے۔",
  "مثال 2 — \"وقت جمع/تفریق\" موڈ میں بنیادی وقت 23:10 میں 2 گھنٹے 30 منٹ جمع کرنے پر اگلے دن 01:40 بنتا ہے۔"
 ],
 "faq": [
  ["کیا آدھی رات پار کرنے والا حساب ہوتا ہے؟", "جی ہاں، گزرا وقت موڈ میں اگر اختتامی وقت شروع وقت سے پہلے ہو تو اگلے دن کا حساب خودکار ہوتا ہے، اور جمع/تفریق موڈ میں بھی 24:00 پار کرنے یا 00:00 سے پہلے جانے پر اگلا/پچھلا دن دکھایا جاتا ہے۔"],
  ["کیا سیکنڈ تک حساب ہو سکتا ہے؟", "یہ کیلکولیٹر گھنٹے:منٹ میں حساب کرتا ہے۔ سیکنڈ کی درستگی کے لیے الگ سے تبدیل کریں۔"]
 ],
 "mode_options": ["گزرا وقت نکالیں (شروع → اختتام)", "وقت جمع/تفریق (بنیادی + مدت)"],
 "labels": {"start": "شروع وقت", "end": "اختتامی وقت", "base": "بنیادی وقت", "dur": "مدت (گھ:من)", "op": "عمل"},
 "op_options": ["جمع", "تفریق"],
 "alert": "براہ کرم تمام مطلوبہ قدریں درج کریں۔",
 "result_tpl": {
  "elapsed": "گزرا وقت: {h} گھنٹے {m} منٹ",
  "elapsed_next": "گزرا وقت: {h} گھنٹے {m} منٹ (آدھی رات پار)",
  "addsub": "نتیجہ وقت: {time}",
  "addsub_next": "نتیجہ وقت: {time} (اگلا دن)",
  "addsub_prev": "نتیجہ وقت: {time} (پچھلا دن)"
 },
},
"es": {
 "title": "Calculadora de Tiempo - Tiempo Transcurrido y Suma/Resta de Horas",
 "meta": "Calcula el tiempo transcurrido entre dos horas, o suma o resta una duración a una hora para obtener el resultado al instante.",
 "card_desc": "Elige el modo e introduce las horas para obtener el tiempo transcurrido o la hora resultante al instante.",
 "nav": "Calculadora de Tiempo",
 "home_desc": "Calcula el tiempo transcurrido entre dos horas, o suma/resta una duración",
 "usage": [
  "Elige el modo (hallar tiempo transcurrido o sumar/restar tiempo).",
  "En \"tiempo transcurrido\", introduce la hora de inicio y fin. En \"sumar/restar\", introduce la hora base, la duración (horas:minutos) y si es suma o resta.",
  "Pulsa \"Calcular\" para ver el resultado al instante."
 ],
 "method": "El tiempo transcurrido es la hora final menos la inicial; si la hora final es anterior, se considera que cruzó la medianoche y se suman 24 horas. Sumar/restar convierte la duración a minutos, la suma o resta de la hora base, y ajusta el resultado dentro de un ciclo de 24 horas (1440 minutos).",
 "examples": [
  "Ejemplo 1 — En modo \"tiempo transcurrido\", inicio=09:15 y fin=17:45 dan 8 horas 30 minutos transcurridos.",
  "Ejemplo 2 — En modo \"sumar/restar\", sumar 2 horas 30 minutos a una hora base de 23:10 da 01:40 del día siguiente."
 ],
 "faq": [
  ["¿Funciona con horas que cruzan la medianoche?", "Sí — en el modo de tiempo transcurrido, si la hora final es anterior a la inicial, se considera automáticamente el día siguiente. En el modo sumar/restar, superar las 24:00 o bajar de las 00:00 se marca como día siguiente o anterior."],
  ["¿Puede calcular hasta segundos?", "Esta calculadora trabaja en horas y minutos. Para precisión de segundos, conviértelo por separado."]
 ],
 "mode_options": ["Hallar tiempo transcurrido (inicio → fin)", "Sumar/restar tiempo (base + duración)"],
 "labels": {"start": "Hora de inicio", "end": "Hora de fin", "base": "Hora base", "dur": "Duración (h:min)", "op": "Operación"},
 "op_options": ["Sumar", "Restar"],
 "alert": "Introduce todos los valores necesarios.",
 "result_tpl": {
  "elapsed": "Tiempo transcurrido: {h}h {m}min",
  "elapsed_next": "Tiempo transcurrido: {h}h {m}min (cruza la medianoche)",
  "addsub": "Hora resultante: {time}",
  "addsub_next": "Hora resultante: {time} (día siguiente)",
  "addsub_prev": "Hora resultante: {time} (día anterior)"
 },
},
"tl": {
 "title": "Kalkulator ng Oras - Lumipas na Oras at Pagdaragdag/Pagbabawas ng Oras",
 "meta": "Kalkulahin ang lumipas na oras sa pagitan ng dalawang oras, o magdagdag o magbawas ng tagal sa isang oras para makuha agad ang resulta.",
 "card_desc": "Pumili ng mode at ilagay ang mga oras para makuha agad ang lumipas na oras o ang resultang oras.",
 "nav": "Kalkulator ng Oras",
 "home_desc": "Kalkulahin ang lumipas na oras sa pagitan ng dalawang oras, o magdagdag/magbawas ng tagal",
 "usage": [
  "Pumili ng mode (hanapin ang lumipas na oras / magdagdag-bawas ng oras).",
  "Sa \"lumipas na oras\", ilagay ang oras ng simula at katapusan. Sa \"magdagdag-bawas\", ilagay ang batayang oras, ang tagal (oras:minuto), at kung dadagdagan o babawasan.",
  "I-click ang \"Kalkulahin\" para makita agad ang resulta."
 ],
 "method": "Ang lumipas na oras ay ang oras ng katapusan minus ang oras ng simula; kung mas maaga ang oras ng katapusan, ituturing itong tumawid ng hatinggabi at magdaragdag ng 24 oras. Ang pagdaragdag/pagbabawas ay ikinokombert ang tagal sa minuto, idinaragdag o binabawas mula sa batayang oras, at ibinabalik sa loob ng 24 oras (1440 minuto).",
 "examples": [
  "Halimbawa 1 — Sa mode na \"lumipas na oras\", simula=09:15 at katapusan=17:45 ay nagbibigay ng 8 oras 30 minuto.",
  "Halimbawa 2 — Sa mode na \"magdagdag-bawas\", pagdaragdag ng 2 oras 30 minuto sa batayang oras na 23:10 ay nagbibigay ng 01:40 kinabukasan."
 ],
 "faq": [
  ["Gumagana ba ito kung tumatawid ng hatinggabi?", "Oo — sa mode ng lumipas na oras, kung mas maaga ang oras ng katapusan, awtomatikong ituturing itong susunod na araw. Sa mode ng dagdag-bawas, ang paglampas sa 24:00 o pagbaba sa 00:00 ay minarkahan bilang susunod o nakaraang araw."],
  ["Puwede bang kalkulahin hanggang segundo?", "Ang kalkulator na ito ay gumagana sa oras at minuto. Para sa katumpakan ng segundo, mag-convert nang hiwalay."]
 ],
 "mode_options": ["Hanapin ang lumipas na oras (simula → katapusan)", "Magdagdag/magbawas ng oras (batayan + tagal)"],
 "labels": {"start": "Oras ng simula", "end": "Oras ng katapusan", "base": "Batayang oras", "dur": "Tagal (oras:minuto)", "op": "Operasyon"},
 "op_options": ["Idagdag", "Ibawas"],
 "alert": "Pakilagay ang lahat ng kinakailangang halaga.",
 "result_tpl": {
  "elapsed": "Lumipas na oras: {h} oras {m} minuto",
  "elapsed_next": "Lumipas na oras: {h} oras {m} minuto (tumatawid ng hatinggabi)",
  "addsub": "Resultang oras: {time}",
  "addsub_next": "Resultang oras: {time} (susunod na araw)",
  "addsub_prev": "Resultang oras: {time} (nakaraang araw)"
 },
},
"ar": {
 "title": "حاسبة الوقت - الوقت المنقضي وجمع/طرح الوقت",
 "meta": "احسب الوقت المنقضي بين وقتين، أو أضف أو اطرح مدة من وقت معين للحصول على الوقت الناتج فوراً.",
 "card_desc": "اختر الوضع وأدخل الأوقات للحصول على الوقت المنقضي أو الوقت الناتج فوراً.",
 "nav": "حاسبة الوقت",
 "home_desc": "احسب الوقت المنقضي بين وقتين، أو أضف/اطرح مدة",
 "usage": [
  "اختر الوضع (إيجاد الوقت المنقضي أو جمع/طرح الوقت).",
  "في \"الوقت المنقضي\" أدخل وقت البداية والنهاية. في \"جمع/طرح الوقت\" أدخل الوقت الأساسي والمدة (ساعة:دقيقة) واختر الجمع أو الطرح.",
  "اضغط \"احسب\" لتظهر النتيجة فوراً."
 ],
 "method": "الوقت المنقضي = وقت النهاية − وقت البداية؛ إذا كان وقت النهاية أبكر، يُعتبر ذلك عبوراً لمنتصف الليل وتُضاف 24 ساعة. جمع/طرح الوقت يحوّل المدة إلى دقائق، يضيفها أو يطرحها من الوقت الأساسي، ثم يعيد النتيجة ضمن دورة 24 ساعة (1440 دقيقة).",
 "examples": [
  "مثال 1 — في وضع \"الوقت المنقضي\" مع بداية=09:15 ونهاية=17:45، الوقت المنقضي 8 ساعات و30 دقيقة.",
  "مثال 2 — في وضع \"جمع/طرح الوقت\"، إضافة ساعتين و30 دقيقة إلى وقت أساسي 23:10 تعطي 01:40 في اليوم التالي."
 ],
 "faq": [
  ["هل يتعامل مع الأوقات التي تعبر منتصف الليل؟", "نعم — في وضع الوقت المنقضي، إذا كان وقت النهاية أبكر من وقت البداية، يُعتبر تلقائياً اليوم التالي. وفي وضع الجمع/الطرح، تجاوز 24:00 أو النزول قبل 00:00 يُشار إليه باليوم التالي أو السابق."],
  ["هل يمكنها الحساب حتى الثواني؟", "تعمل هذه الحاسبة بالساعات والدقائق. للدقة على مستوى الثواني، حوّل القيمة بشكل منفصل."]
 ],
 "mode_options": ["إيجاد الوقت المنقضي (البداية → النهاية)", "جمع/طرح الوقت (أساسي + مدة)"],
 "labels": {"start": "وقت البداية", "end": "وقت النهاية", "base": "الوقت الأساسي", "dur": "المدة (س:د)", "op": "العملية"},
 "op_options": ["جمع", "طرح"],
 "alert": "الرجاء إدخال جميع القيم المطلوبة.",
 "result_tpl": {
  "elapsed": "الوقت المنقضي: {h} س {m} د",
  "elapsed_next": "الوقت المنقضي: {h} س {m} د (يعبر منتصف الليل)",
  "addsub": "الوقت الناتج: {time}",
  "addsub_next": "الوقت الناتج: {time} (اليوم التالي)",
  "addsub_prev": "الوقت الناتج: {time} (اليوم السابق)"
 },
},
"vi": {
 "title": "Máy Tính Thời Gian - Thời Gian Trôi Qua và Cộng/Trừ Thời Gian",
 "meta": "Tính thời gian trôi qua giữa hai mốc giờ, hoặc cộng/trừ một khoảng thời gian vào một mốc giờ để có kết quả ngay lập tức.",
 "card_desc": "Chọn chế độ và nhập giờ để nhận ngay thời gian trôi qua hoặc giờ kết quả.",
 "nav": "Máy Tính Thời Gian",
 "home_desc": "Tính thời gian trôi qua giữa hai mốc giờ, hoặc cộng/trừ thời gian",
 "usage": [
  "Chọn chế độ (tìm thời gian trôi qua hoặc cộng/trừ thời gian).",
  "Ở \"thời gian trôi qua\", nhập giờ bắt đầu và kết thúc. Ở \"cộng/trừ thời gian\", nhập giờ gốc, khoảng thời gian (giờ:phút) và chọn cộng hay trừ.",
  "Nhấn \"Tính\" để xem kết quả ngay lập tức."
 ],
 "method": "Thời gian trôi qua = giờ kết thúc − giờ bắt đầu; nếu giờ kết thúc sớm hơn, coi như đã qua nửa đêm và cộng thêm 24 giờ. Cộng/trừ thời gian đổi khoảng thời gian ra phút, cộng hoặc trừ vào giờ gốc, rồi quy về chu kỳ 24 giờ (1440 phút).",
 "examples": [
  "Ví dụ 1 — Ở chế độ \"thời gian trôi qua\", bắt đầu=09:15, kết thúc=17:45, thời gian trôi qua là 8 giờ 30 phút.",
  "Ví dụ 2 — Ở chế độ \"cộng/trừ thời gian\", cộng 2 giờ 30 phút vào giờ gốc 23:10 cho kết quả 01:40 ngày hôm sau."
 ],
 "faq": [
  ["Có tính được trường hợp qua nửa đêm không?", "Có — ở chế độ thời gian trôi qua, nếu giờ kết thúc sớm hơn giờ bắt đầu, hệ thống tự động coi là ngày hôm sau. Ở chế độ cộng/trừ, vượt quá 24:00 hoặc trước 00:00 sẽ được đánh dấu là ngày sau hoặc ngày trước."],
  ["Có tính chính xác đến giây không?", "Máy tính này hoạt động theo giờ và phút. Nếu cần chính xác đến giây, hãy quy đổi riêng."]
 ],
 "mode_options": ["Tìm thời gian trôi qua (bắt đầu → kết thúc)", "Cộng/trừ thời gian (gốc + khoảng thời gian)"],
 "labels": {"start": "Giờ bắt đầu", "end": "Giờ kết thúc", "base": "Giờ gốc", "dur": "Khoảng thời gian (giờ:phút)", "op": "Phép tính"},
 "op_options": ["Cộng", "Trừ"],
 "alert": "Vui lòng nhập đầy đủ các giá trị cần thiết.",
 "result_tpl": {
  "elapsed": "Thời gian trôi qua: {h} giờ {m} phút",
  "elapsed_next": "Thời gian trôi qua: {h} giờ {m} phút (qua nửa đêm)",
  "addsub": "Giờ kết quả: {time}",
  "addsub_next": "Giờ kết quả: {time} (ngày hôm sau)",
  "addsub_prev": "Giờ kết quả: {time} (ngày hôm trước)"
 },
},
"de": {
 "title": "Zeitrechner - Verstrichene Zeit und Zeit addieren/subtrahieren",
 "meta": "Berechne die verstrichene Zeit zwischen zwei Uhrzeiten, oder addiere bzw. subtrahiere eine Dauer zu einer Uhrzeit für ein sofortiges Ergebnis.",
 "card_desc": "Wähle einen Modus und gib die Zeiten ein, um sofort die verstrichene Zeit oder die Ergebniszeit zu erhalten.",
 "nav": "Zeitrechner",
 "home_desc": "Verstrichene Zeit zwischen zwei Uhrzeiten berechnen oder Zeit addieren/subtrahieren",
 "usage": [
  "Wähle den Modus (verstrichene Zeit finden oder Zeit addieren/subtrahieren).",
  "Bei \"verstrichene Zeit\" gib die Start- und Endzeit ein. Bei \"addieren/subtrahieren\" gib die Basiszeit, die Dauer (Stunden:Minuten) und die Operation ein.",
  "Klicke auf \"Berechnen\", um das Ergebnis sofort zu sehen."
 ],
 "method": "Die verstrichene Zeit ist Endzeit minus Startzeit; ist die Endzeit früher, wird angenommen, dass Mitternacht überschritten wurde, und 24 Stunden werden addiert. Beim Addieren/Subtrahieren wird die Dauer in Minuten umgerechnet, zur Basiszeit addiert oder von ihr subtrahiert und innerhalb eines 24-Stunden-Zyklus (1440 Minuten) normalisiert.",
 "examples": [
  "Beispiel 1 — Im Modus \"verstrichene Zeit\" ergibt Start=09:15 und Ende=17:45 eine verstrichene Zeit von 8 Stunden 30 Minuten.",
  "Beispiel 2 — Im Modus \"addieren/subtrahieren\" ergibt das Addieren von 2 Stunden 30 Minuten zur Basiszeit 23:10 den Wert 01:40 am nächsten Tag."
 ],
 "faq": [
  ["Funktioniert es auch über Mitternacht hinweg?", "Ja — im Modus \"verstrichene Zeit\" wird, wenn die Endzeit früher als die Startzeit liegt, automatisch der nächste Tag angenommen. Im Modus \"addieren/subtrahieren\" wird ein Wert über 24:00 oder unter 00:00 als nächster bzw. vorheriger Tag markiert."],
  ["Kann es auf die Sekunde genau rechnen?", "Dieser Rechner arbeitet in Stunden und Minuten. Für Sekundenpräzision rechne separat um."]
 ],
 "mode_options": ["Verstrichene Zeit finden (Start → Ende)", "Zeit addieren/subtrahieren (Basis + Dauer)"],
 "labels": {"start": "Startzeit", "end": "Endzeit", "base": "Basiszeit", "dur": "Dauer (Std:Min)", "op": "Operation"},
 "op_options": ["Addieren", "Subtrahieren"],
 "alert": "Bitte gib alle erforderlichen Werte ein.",
 "result_tpl": {
  "elapsed": "Verstrichene Zeit: {h} Std {m} Min",
  "elapsed_next": "Verstrichene Zeit: {h} Std {m} Min (über Mitternacht)",
  "addsub": "Ergebniszeit: {time}",
  "addsub_next": "Ergebniszeit: {time} (nächster Tag)",
  "addsub_prev": "Ergebniszeit: {time} (vorheriger Tag)"
 },
},
"bn": {
 "title": "সময় ক্যালকুলেটর - অতিবাহিত সময় এবং সময় যোগ/বিয়োগ",
 "meta": "দুটি সময়ের মধ্যে অতিবাহিত সময় নির্ণয় করুন, অথবা কোনো সময়ে একটি স্থিতিকাল যোগ বা বিয়োগ করে ফলাফল সাথে সাথে বের করুন।",
 "card_desc": "পদ্ধতি বেছে নিন এবং সময় দিন, অতিবাহিত সময় বা ফলাফল সময় সাথে সাথে দেখতে পাবেন।",
 "nav": "সময় ক্যালকুলেটর",
 "home_desc": "দুটি সময়ের মধ্যে অতিবাহিত সময়, অথবা সময় যোগ/বিয়োগ নির্ণয় করুন",
 "usage": [
  "পদ্ধতি বেছে নিন (অতিবাহিত সময় নির্ণয় / সময় যোগ-বিয়োগ)।",
  "\"অতিবাহিত সময়\"-এ শুরু ও শেষ সময় দিন; \"যোগ-বিয়োগ\"-এ মূল সময়, স্থিতিকাল (ঘণ্টা:মিনিট) এবং যোগ বা বিয়োগ বেছে নিন।",
  "\"হিসাব করুন\" চাপলে ফলাফল সাথে সাথে দেখা যাবে।"
 ],
 "method": "অতিবাহিত সময় = শেষ সময় − শুরু সময়; শেষ সময় আগের হলে মধ্যরাত পার হয়েছে ধরে ২৪ ঘণ্টা যোগ করা হয়। যোগ-বিয়োগ স্থিতিকালকে মিনিটে রূপান্তর করে মূল সময়ে যোগ বা বিয়োগ করে এবং ২৪ ঘণ্টা (১৪৪০ মিনিট) অনুযায়ী ঘণ্টা:মিনিটে ফিরিয়ে আনে।",
 "examples": [
  "উদাহরণ ১ — \"অতিবাহিত সময়\" মোডে শুরু ০৯:১৫, শেষ ১৭:৪৫ হলে অতিবাহিত সময় ৮ ঘণ্টা ৩০ মিনিট।",
  "উদাহরণ ২ — \"যোগ-বিয়োগ\" মোডে মূল সময় ২৩:১০-এ ২ ঘণ্টা ৩০ মিনিট যোগ করলে পরের দিন ০১:৪০ হয়।"
 ],
 "faq": [
  ["মধ্যরাত পার হওয়া হিসাবও কি করা যায়?", "হ্যাঁ, অতিবাহিত সময় মোডে শেষ সময় শুরু সময়ের আগে হলে স্বয়ংক্রিয়ভাবে পরের দিন ধরে হিসাব হয়, এবং যোগ-বিয়োগ মোডেও ২৪:০০ পার হলে বা ০০:০০-এর আগে গেলে পরের/আগের দিন দেখানো হয়।"],
  ["সেকেন্ড পর্যন্ত হিসাব করা যায়?", "এই ক্যালকুলেটর ঘণ্টা:মিনিট এককে হিসাব করে। সেকেন্ডের নির্ভুলতা প্রয়োজন হলে আলাদাভাবে রূপান্তর করুন।"]
 ],
 "mode_options": ["অতিবাহিত সময় নির্ণয় (শুরু → শেষ)", "সময় যোগ-বিয়োগ (মূল + স্থিতিকাল)"],
 "labels": {"start": "শুরুর সময়", "end": "শেষ সময়", "base": "মূল সময়", "dur": "স্থিতিকাল (ঘ:মি)", "op": "ক্রিয়া"},
 "op_options": ["যোগ", "বিয়োগ"],
 "alert": "অনুগ্রহ করে প্রয়োজনীয় সব মান দিন।",
 "result_tpl": {
  "elapsed": "অতিবাহিত সময়: {h} ঘণ্টা {m} মিনিট",
  "elapsed_next": "অতিবাহিত সময়: {h} ঘণ্টা {m} মিনিট (মধ্যরাত পার)",
  "addsub": "ফলাফল সময়: {time}",
  "addsub_next": "ফলাফল সময়: {time} (পরের দিন)",
  "addsub_prev": "ফলাফল সময়: {time} (আগের দিন)"
 },
},
"tr": {
 "title": "Zaman Hesaplayıcı - Geçen Süre ve Zaman Toplama/Çıkarma",
 "meta": "İki saat arasında geçen süreyi hesaplayın, ya da bir saate süre ekleyip çıkararak sonucu anında bulun.",
 "card_desc": "Bir mod seçip saatleri girin, geçen süreyi veya sonuç saati anında görün.",
 "nav": "Zaman Hesaplayıcı",
 "home_desc": "İki saat arasında geçen süreyi hesaplayın veya zaman ekleyip çıkarın",
 "usage": [
  "Bir mod seçin (geçen süreyi bulma veya zaman ekleme/çıkarma).",
  "\"Geçen süre\"de başlangıç ve bitiş saatini, \"ekleme/çıkarma\"da temel saati, süreyi (saat:dakika) ve işlemi girin.",
  "Sonucu anında görmek için \"Hesapla\"ya tıklayın."
 ],
 "method": "Geçen süre, bitiş saati eksi başlangıç saatidir; bitiş saati daha erkense gece yarısını geçtiği varsayılır ve 24 saat eklenir. Ekleme/çıkarma, süreyi dakikaya çevirip temel saate ekler veya çıkarır ve sonucu 24 saatlik (1440 dakika) döngüye göre düzenler.",
 "examples": [
  "Örnek 1 — \"Geçen süre\" modunda başlangıç=09:15, bitiş=17:45 ise geçen süre 8 saat 30 dakikadır.",
  "Örnek 2 — \"Ekleme/çıkarma\" modunda 23:10 temel saatine 2 saat 30 dakika eklemek, ertesi gün 01:40 sonucunu verir."
 ],
 "faq": [
  ["Gece yarısını geçen hesaplamalar da yapılabiliyor mu?", "Evet — geçen süre modunda bitiş saati başlangıçtan erkense otomatik olarak ertesi gün sayılır. Ekleme/çıkarma modunda 24:00'ı geçmek veya 00:00'dan önceye düşmek ertesi veya önceki gün olarak işaretlenir."],
  ["Saniyeye kadar hesaplayabilir mi?", "Bu hesaplayıcı saat ve dakika cinsinden çalışır. Saniye hassasiyeti için ayrıca dönüştürün."]
 ],
 "mode_options": ["Geçen süreyi bul (başlangıç → bitiş)", "Zaman ekle/çıkar (temel + süre)"],
 "labels": {"start": "Başlangıç saati", "end": "Bitiş saati", "base": "Temel saat", "dur": "Süre (saat:dakika)", "op": "İşlem"},
 "op_options": ["Ekle", "Çıkar"],
 "alert": "Lütfen gerekli tüm değerleri girin.",
 "result_tpl": {
  "elapsed": "Geçen süre: {h} sa {m} dk",
  "elapsed_next": "Geçen süre: {h} sa {m} dk (gece yarısını geçiyor)",
  "addsub": "Sonuç saat: {time}",
  "addsub_next": "Sonuç saat: {time} (ertesi gün)",
  "addsub_prev": "Sonuç saat: {time} (önceki gün)"
 },
},
"fa": {
 "title": "ماشین‌حساب زمان - زمان سپری‌شده و جمع/تفریق زمان",
 "meta": "زمان سپری‌شده بین دو ساعت را محاسبه کنید، یا مدتی را به یک ساعت اضافه یا از آن کم کنید تا نتیجه فوراً به‌دست آید.",
 "card_desc": "حالت را انتخاب کنید و ساعت‌ها را وارد کنید تا زمان سپری‌شده یا ساعت نتیجه فوراً نمایش داده شود.",
 "nav": "ماشین‌حساب زمان",
 "home_desc": "محاسبه زمان سپری‌شده بین دو ساعت یا جمع/تفریق مدت زمان",
 "usage": [
  "حالت را انتخاب کنید (یافتن زمان سپری‌شده یا جمع/تفریق زمان).",
  "در «زمان سپری‌شده» ساعت شروع و پایان را وارد کنید. در «جمع/تفریق» ساعت پایه، مدت (ساعت:دقیقه) و عملیات را وارد کنید.",
  "برای دیدن نتیجه فوری روی «محاسبه» کلیک کنید."
 ],
 "method": "زمان سپری‌شده برابر است با ساعت پایان منهای ساعت شروع؛ اگر ساعت پایان زودتر باشد، عبور از نیمه‌شب در نظر گرفته شده و ۲۴ ساعت اضافه می‌شود. جمع/تفریق مدت را به دقیقه تبدیل کرده، به ساعت پایه اضافه یا از آن کم می‌کند و نتیجه را در چرخه ۲۴ ساعته (۱۴۴۰ دقیقه) تنظیم می‌کند.",
 "examples": [
  "مثال ۱ — در حالت «زمان سپری‌شده» با شروع=۰۹:۱۵ و پایان=۱۷:۴۵، زمان سپری‌شده ۸ ساعت و ۳۰ دقیقه است.",
  "مثال ۲ — در حالت «جمع/تفریق»، افزودن ۲ ساعت و ۳۰ دقیقه به ساعت پایه ۲۳:۱۰ نتیجه ۰۱:۴۰ روز بعد را می‌دهد."
 ],
 "faq": [
  ["آیا عبور از نیمه‌شب هم محاسبه می‌شود؟", "بله — در حالت زمان سپری‌شده، اگر ساعت پایان زودتر از شروع باشد، به‌طور خودکار روز بعد در نظر گرفته می‌شود. در حالت جمع/تفریق نیز عبور از ۲۴:۰۰ یا رسیدن به قبل از ۰۰:۰۰ به‌عنوان روز بعد یا قبل علامت‌گذاری می‌شود."],
  ["آیا می‌تواند تا ثانیه محاسبه کند؟", "این ماشین‌حساب بر اساس ساعت و دقیقه کار می‌کند. برای دقت در حد ثانیه، جداگانه تبدیل کنید."]
 ],
 "mode_options": ["یافتن زمان سپری‌شده (شروع → پایان)", "جمع/تفریق زمان (پایه + مدت)"],
 "labels": {"start": "ساعت شروع", "end": "ساعت پایان", "base": "ساعت پایه", "dur": "مدت (ساعت:دقیقه)", "op": "عملیات"},
 "op_options": ["جمع", "تفریق"],
 "alert": "لطفاً همه مقادیر لازم را وارد کنید.",
 "result_tpl": {
  "elapsed": "زمان سپری‌شده: {h} ساعت و {m} دقیقه",
  "elapsed_next": "زمان سپری‌شده: {h} ساعت و {m} دقیقه (عبور از نیمه‌شب)",
  "addsub": "ساعت نتیجه: {time}",
  "addsub_next": "ساعت نتیجه: {time} (روز بعد)",
  "addsub_prev": "ساعت نتیجه: {time} (روز قبل)"
 },
},
"th": {
 "title": "เครื่องคำนวณเวลา - เวลาที่ผ่านไปและการบวก/ลบเวลา",
 "meta": "คำนวณเวลาที่ผ่านไประหว่างสองเวลา หรือบวก/ลบระยะเวลาให้กับเวลาหนึ่งเพื่อดูผลลัพธ์ทันที",
 "card_desc": "เลือกโหมดและกรอกเวลาเพื่อดูเวลาที่ผ่านไปหรือเวลาผลลัพธ์ทันที",
 "nav": "เครื่องคำนวณเวลา",
 "home_desc": "คำนวณเวลาที่ผ่านไประหว่างสองเวลา หรือบวก/ลบระยะเวลา",
 "usage": [
  "เลือกโหมด (หาเวลาที่ผ่านไป หรือ บวก/ลบเวลา)",
  "ในโหมด \"เวลาที่ผ่านไป\" กรอกเวลาเริ่มต้นและสิ้นสุด ในโหมด \"บวก/ลบเวลา\" กรอกเวลาเริ่มต้น ระยะเวลา (ชั่วโมง:นาที) และเลือกบวกหรือลบ",
  "กด \"คำนวณ\" เพื่อดูผลลัพธ์ทันที"
 ],
 "method": "เวลาที่ผ่านไป = เวลาสิ้นสุด − เวลาเริ่มต้น หากเวลาสิ้นสุดเร็วกว่า จะถือว่าข้ามเที่ยงคืนและบวกเพิ่ม 24 ชั่วโมง การบวก/ลบเวลาจะแปลงระยะเวลาเป็นนาที บวกหรือลบจากเวลาเริ่มต้น แล้วปรับให้อยู่ในรอบ 24 ชั่วโมง (1440 นาที)",
 "examples": [
  "ตัวอย่างที่ 1 — โหมด \"เวลาที่ผ่านไป\" เริ่ม=09:15, สิ้นสุด=17:45 ผลลัพธ์คือ 8 ชั่วโมง 30 นาที",
  "ตัวอย่างที่ 2 — โหมด \"บวก/ลบเวลา\" บวก 2 ชั่วโมง 30 นาทีให้เวลาเริ่มต้น 23:10 ผลลัพธ์คือ 01:40 ของวันถัดไป"
 ],
 "faq": [
  ["คำนวณเวลาที่ข้ามเที่ยงคืนได้ไหม?", "ได้ — ในโหมดเวลาที่ผ่านไป หากเวลาสิ้นสุดเร็วกว่าเวลาเริ่มต้น จะถือว่าเป็นวันถัดไปโดยอัตโนมัติ ในโหมดบวก/ลบ หากเกิน 24:00 หรือต่ำกว่า 00:00 จะระบุว่าเป็นวันถัดไปหรือวันก่อนหน้า"],
  ["คำนวณละเอียดถึงวินาทีได้ไหม?", "เครื่องคำนวณนี้ทำงานในหน่วยชั่วโมงและนาที หากต้องการความละเอียดระดับวินาที กรุณาแปลงแยกต่างหาก"]
 ],
 "mode_options": ["หาเวลาที่ผ่านไป (เริ่มต้น → สิ้นสุด)", "บวก/ลบเวลา (เริ่มต้น + ระยะเวลา)"],
 "labels": {"start": "เวลาเริ่มต้น", "end": "เวลาสิ้นสุด", "base": "เวลาเริ่มต้น (ฐาน)", "dur": "ระยะเวลา (ชม:นาที)", "op": "การดำเนินการ"},
 "op_options": ["บวก", "ลบ"],
 "alert": "กรุณากรอกค่าที่จำเป็นทั้งหมด",
 "result_tpl": {
  "elapsed": "เวลาที่ผ่านไป: {h} ชั่วโมง {m} นาที",
  "elapsed_next": "เวลาที่ผ่านไป: {h} ชั่วโมง {m} นาที (ข้ามเที่ยงคืน)",
  "addsub": "เวลาผลลัพธ์: {time}",
  "addsub_next": "เวลาผลลัพธ์: {time} (วันถัดไป)",
  "addsub_prev": "เวลาผลลัพธ์: {time} (วันก่อนหน้า)"
 },
},
"fr": {
 "title": "Calculatrice de Temps - Temps Écoulé et Addition/Soustraction d'Heures",
 "meta": "Calculez le temps écoulé entre deux heures, ou ajoutez/soustrayez une durée à une heure pour obtenir le résultat instantanément.",
 "card_desc": "Choisissez un mode et entrez les heures pour obtenir instantanément le temps écoulé ou l'heure résultante.",
 "nav": "Calculatrice de Temps",
 "home_desc": "Calculer le temps écoulé entre deux heures, ou ajouter/soustraire une durée",
 "usage": [
  "Choisissez le mode (trouver le temps écoulé ou ajouter/soustraire une durée).",
  "Dans \"temps écoulé\", entrez l'heure de début et de fin. Dans \"ajouter/soustraire\", entrez l'heure de base, la durée (heures:minutes) et l'opération.",
  "Cliquez sur \"Calculer\" pour voir le résultat instantanément."
 ],
 "method": "Le temps écoulé est l'heure de fin moins l'heure de début ; si l'heure de fin est antérieure, on considère qu'elle passe minuit et on ajoute 24 heures. Ajouter/soustraire convertit la durée en minutes, l'ajoute ou la soustrait de l'heure de base, puis ramène le résultat dans un cycle de 24 heures (1440 minutes).",
 "examples": [
  "Exemple 1 — En mode \"temps écoulé\", début=09:15 et fin=17:45 donnent un temps écoulé de 8 heures 30 minutes.",
  "Exemple 2 — En mode \"ajouter/soustraire\", ajouter 2 heures 30 minutes à une heure de base de 23:10 donne 01:40 le lendemain."
 ],
 "faq": [
  ["Gère-t-elle les heures qui passent minuit ?", "Oui — en mode temps écoulé, si l'heure de fin est antérieure à l'heure de début, le lendemain est automatiquement pris en compte. En mode ajouter/soustraire, dépasser 24:00 ou descendre sous 00:00 est signalé comme le jour suivant ou précédent."],
  ["Peut-elle calculer à la seconde près ?", "Cette calculatrice fonctionne en heures et minutes. Pour une précision à la seconde, convertissez séparément."]
 ],
 "mode_options": ["Trouver le temps écoulé (début → fin)", "Ajouter/soustraire une durée (base + durée)"],
 "labels": {"start": "Heure de début", "end": "Heure de fin", "base": "Heure de base", "dur": "Durée (h:min)", "op": "Opération"},
 "op_options": ["Ajouter", "Soustraire"],
 "alert": "Veuillez entrer toutes les valeurs nécessaires.",
 "result_tpl": {
  "elapsed": "Temps écoulé : {h} h {m} min",
  "elapsed_next": "Temps écoulé : {h} h {m} min (passe minuit)",
  "addsub": "Heure résultante : {time}",
  "addsub_next": "Heure résultante : {time} (jour suivant)",
  "addsub_prev": "Heure résultante : {time} (jour précédent)"
 },
},
}
