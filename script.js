const STORAGE_KEY = 'kod-dnya-profile';
const HISTORY_KEY = 'kod-dnya-history';

const zodiacRanges = [
  ['Козерог', [1, 19]],
  ['Водолей', [2, 18]],
  ['Рыбы', [3, 20]],
  ['Овен', [4, 19]],
  ['Телец', [5, 20]],
  ['Близнецы', [6, 20]],
  ['Рак', [7, 22]],
  ['Лев', [8, 22]],
  ['Дева', [9, 22]],
  ['Весы', [10, 22]],
  ['Скорпион', [11, 21]],
  ['Стрелец', [12, 21]],
  ['Козерог', [12, 31]],
];

const signBaseScores = {
  Овен: 6.7,
  Телец: 7.4,
  Близнецы: 7.8,
  Рак: 7.1,
  Лев: 8.2,
  Дева: 7.6,
  Весы: 8.0,
  Скорпион: 7.3,
  Стрелец: 8.1,
  Козерог: 7.9,
  Водолей: 7.5,
  Рыбы: 6.9,
};

const numberProfiles = {
  1: {
    title: '1 — день инициативы',
    meaning: 'Подходит для старта, быстрых решений и коротких смелых шагов, если не давить на людей слишком резко.',
    work: 'Бери лидерство, но не форсируй.',
    money: 'Хорошо решать точечные задачи.',
    love: 'Лучше говорить прямо.',
    mood: 'Энергии много, важно не перегореть.',
  },
  2: {
    title: '2 — день контакта',
    meaning: 'Сегодня лучше работает мягкость, переговоры и поиск общего ритма с людьми.',
    work: 'Договаривайся, а не дави.',
    money: 'Хорошо обсуждать условия.',
    love: 'Подходящий день для сближения.',
    mood: 'Чувствительность выше обычного.',
  },
  3: {
    title: '3 — день легкости',
    meaning: 'Работают идеи, подача, общение и то, что оживляет день, но важно не уйти в поверхностность.',
    work: 'Хорошо презентовать и предлагать.',
    money: 'Не трать из скуки.',
    love: 'Флирт и юмор в плюс.',
    mood: 'Подъем, если есть движение.',
  },
  4: {
    title: '4 — день структуры',
    meaning: 'Сильнее всего сегодня порядок, конкретика и доведение начатого до результата.',
    work: 'Закрывай хвосты и упорядочивай.',
    money: 'Подходят рациональные решения.',
    love: 'Нужны ясность и надежность.',
    mood: 'Спокойнее, если есть план.',
  },
  5: {
    title: '5 — день перемен',
    meaning: 'Полезны гибкость, новые ходы и движение, но импульсивность лучше держать под контролем.',
    work: 'Подходят быстрые перестройки.',
    money: 'Осторожнее с спонтанными тратами.',
    love: 'Хочется свободы и свежести.',
    mood: 'День живой, но дерганый.',
  },
  6: {
    title: '6 — день заботы',
    meaning: 'Фокус смещается в отношения, комфорт, красоту и бытовую гармонию.',
    work: 'Хорошо чинить процессы и атмосферу.',
    money: 'Покупай полезное, а не статусное.',
    love: 'Теплый день для внимания.',
    mood: 'Хочется уюта и стабильности.',
  },
  7: {
    title: '7 — день глубины',
    meaning: 'Лучше не расплескиваться, а идти в анализ, тишину и точные внутренние решения.',
    work: 'Подходит для концентрации.',
    money: 'Не торопись с выводами.',
    love: 'Нужна деликатность и пауза.',
    mood: 'Хочется уединения.',
  },
  8: {
    title: '8 — день результата',
    meaning: 'Подходит для сильных решений, переговоров о выгоде и наведения контроля там, где раньше был хаос.',
    work: 'Хорошо закрывать важное.',
    money: 'Сильный день для расчета.',
    love: 'Не дави и не контролируй лишнего.',
    mood: 'Много внутренней силы.',
  },
  9: {
    title: '9 — день завершения',
    meaning: 'Полезно отпускать лишнее, подводить итоги и освобождать место под следующий цикл.',
    work: 'Закрывай цикл, а не открывай десять новых.',
    money: 'Избавляйся от ненужного.',
    love: 'Лучше честность и зрелость.',
    mood: 'Немного эмоциональнее обычного.',
  },
};

const formulaProfiles = [
  'день собранности и контроля',
  'день переговоров и баланса',
  'день движения и перемен',
  'день спокойной силы',
  'день завершения и фокуса',
  'день мягкого влияния',
  'день точных решений',
  'день новых ходов',
  'день внутренней настройки',
];

const luckyColors = ['Синий', 'Лавандовый', 'Графитовый', 'Мятный', 'Янтарный', 'Серебристый', 'Голубой', 'Песочный', 'Вишневый'];
const luckyItems = ['Блокнот', 'Наушники', 'Термокружка', 'Ключ', 'Карта метро', 'Кольцо', 'Рюкзак', 'Ручка', 'Чехол для телефона'];
const luckyActions = ['Уточнить', 'Закрепить', 'Написать', 'Созвониться', 'Попросить прямо', 'Разобрать', 'Спланировать', 'Выбрать одно', 'Поставить границы'];
const questionOptions = [
  { key: 'message', label: 'Писать ли ему / ей?' },
  { key: 'buy', label: 'Стоит ли покупать?' },
  { key: 'meeting', label: 'Хороший ли день для встречи?' },
  { key: 'project', label: 'Начинать ли проект?' },
  { key: 'talk', label: 'Идти ли на сложный разговор?' },
];

const el = (id) => document.getElementById(id);
const profileForm = el('profile-form');
const dashboard = el('dashboard');
const historyCard = el('history-card');
const profileCard = el('profile-card');
const questionSelect = el('question-select');

questionOptions.forEach((option) => {
  const node = document.createElement('option');
  node.value = option.key;
  node.textContent = option.label;
  questionSelect.appendChild(node);
});

function reduceToDigit(value) {
  let number = value;
  while (number > 9) {
    number = number
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return number === 0 ? 1 : number;
}

function getSign(date) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  for (const [sign, [endMonth, endDay]] of zodiacRanges) {
    if (month < endMonth || (month === endMonth && day <= endDay)) return sign;
  }
  return 'Козерог';
}

function personalNumberFromBirthdate(date) {
  const digits = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
  return reduceToDigit(digits);
}

function getDateEnergy(today) {
  const digits = `${today.getUTCFullYear()}${today.getUTCMonth() + 1}${today.getUTCDate()}`
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
  return reduceToDigit(digits);
}

function hashString(input) {
  return input.split('').reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 1), 0);
}

function computeDayData(profile) {
  const today = new Date();
  const birthdate = new Date(profile.birthdate);
  const sign = getSign(birthdate);
  const basePersonal = personalNumberFromBirthdate(birthdate);
  const todayEnergy = getDateEnergy(today);
  const todaySeed = reduceToDigit(basePersonal + todayEnergy + today.getUTCDate());
  const formulaIndex = (basePersonal + todayEnergy) % formulaProfiles.length;
  const score = Math.min(9.8, Math.max(6.1, signBaseScores[sign] + todaySeed * 0.12 - todayEnergy * 0.05)).toFixed(1);
  const dateLabel = new Intl.DateTimeFormat('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).format(today);

  const signsRanking = Object.entries(signBaseScores)
    .map(([zodiacSign, base]) => ({
      sign: zodiacSign,
      score: Number((base + reduceToDigit(todayEnergy + hashString(zodiacSign)) * 0.11).toFixed(1)),
    }))
    .sort((a, b) => b.score - a.score);

  const signRank = signsRanking.findIndex((item) => item.sign === sign) + 1;
  const luckyIndex = (todaySeed + hashString(profile.name)) % luckyColors.length;
  const luckyHourStart = 9 + ((todaySeed + todayEnergy) % 8);
  const compatibilityPool = Object.keys(signBaseScores).filter((item) => item !== sign);
  const magnet = compatibilityPool[(todaySeed + 1) % compatibilityPool.length];
  const conflict = compatibilityPool[(todaySeed + 5) % compatibilityPool.length];
  const easy = compatibilityPool[(todaySeed + 8) % compatibilityPool.length];

  return {
    todayKey: today.toISOString().slice(0, 10),
    dateLabel: dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1),
    sign,
    signRank,
    score,
    personalNumber: todaySeed,
    basePersonal,
    dateEnergy: todayEnergy,
    formulaTitle: `${todaySeed} / ${todayEnergy} — ${formulaProfiles[formulaIndex]}`,
    formulaDescription: `Твой личный ритм сегодня собран вокруг числа ${todaySeed}, а фон даты задает энергия ${todayEnergy}. Это день, когда лучше работать через одно ясное действие, а не через хаотичную многозадачность.`,
    boost: ['простые решения', 'короткий план', 'ясный разговор', 'завершение задач', 'контроль деталей'][todaySeed % 5],
    drain: ['спешка', 'чужая срочность', 'импульсивные траты', 'эмоциональные споры', 'распыление'][todayEnergy % 5],
    chance: ['работа и концентрация', 'переговоры', 'личные инициативы', 'покупки по плану', 'романтический контакт'][(todaySeed + todayEnergy) % 5],
    risk: ['переутомление', 'обиды в общении', 'завышенные ожидания', 'неосторожные слова', 'финансовая импульсивность'][(todaySeed + 2) % 5],
    headlineAdvice: [
      'Не распыляйся: сегодня у тебя сильнее всего одно точное действие, доведенное до результата.',
      'Лучше говорить по делу и не тянуть важный разговор слишком долго.',
      'Ставь на конкретику: день любит ясные шаги и не любит лишний шум.',
      'Если давно откладывал решение, сегодня хороший момент закрыть его без драматизации.',
      'День не про рывок, а про точный ритм: меньше хаоса, больше управления.',
    ][(todaySeed + todayEnergy) % 5],
    luckyColor: luckyColors[luckyIndex],
    luckyColorNote: `Этот оттенок помогает держать собранность и визуально “собирает” день под нужный ритм.`,
    luckyNumber: reduceToDigit(todaySeed + todayEnergy),
    luckyItem: luckyItems[(luckyIndex + 2) % luckyItems.length],
    luckyItemNote: 'Подойдет как символ фокуса: сегодня полезно держать рядом что-то, что напоминает о главной задаче.',
    luckyHour: `${String(luckyHourStart).padStart(2, '0')}:00–${String(luckyHourStart + 1).padStart(2, '0')}:30`,
    luckyAction: luckyActions[(luckyIndex + 4) % luckyActions.length],
    luckyActionNote: 'Самая выигрышная стратегия — не гадать слишком долго, а оформить следующий шаг в конкретное действие.',
    doList: [
      'Закрыть одну задачу, которая висит дольше, чем должна.',
      'Поставить важный разговор или ключевое действие на первую половину удачного окна.',
      'Выбрать один главный фокус дня и возвращаться к нему, если начинает уносить в хаос.',
    ],
    avoidList: [
      'Не спорить на эмоциях, если вопрос можно решить формулировкой и фактом.',
      'Не покупать “для разрядки”, особенно во второй половине дня.',
      'Не обещать больше, чем реально получится закрыть сегодня.',
    ],
    numberProfile: numberProfiles[todaySeed],
    compatibility: {
      magnet,
      easy,
      conflict,
    },
    weeklyItems: [
      `Лучшие 3 дня недели: ${['вторник', 'четверг', 'суббота', 'понедельник', 'пятница'][(todaySeed + 1) % 5]}, ${['среда', 'пятница', 'воскресенье', 'вторник', 'четверг'][(todayEnergy + 2) % 5]} и ${['пятница', 'суббота', 'среда', 'воскресенье', 'понедельник'][(todaySeed + 3) % 5]}.`,
      `День осторожности: ${['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'][todayEnergy % 6]}.`,
      `Для покупок лучше подходит ${['среда', 'четверг', 'суббота', 'воскресенье'][todaySeed % 4]}.`,
      `Для общения и знакомств — ${['пятница', 'суббота', 'вторник', 'четверг'][todayEnergy % 4]}.`,
    ],
  };
}

function renderList(targetId, items) {
  const node = el(targetId);
  node.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    node.appendChild(li);
  });
}

function renderQuestionAnswer(dayData) {
  const verdicts = {
    message: ['Да, но коротко и по делу.', 'Сегодня лучше работает ясный первый шаг без лишней драматизации. Напиши, если понимаешь, что хочешь получить от разговора.'],
    buy: ['Скорее по плану, чем импульсивно.', 'Если покупка заранее понятна и полезна — ок. Если это способ снять напряжение, лучше отложить до завтра.'],
    meeting: ['Да, если есть конкретная цель.', 'День хорош для встречи, когда у нее есть ясный смысл: договориться, обсудить, прояснить.'],
    project: ['Начать можно, но с маленького шага.', 'Не пытайся запускать все сразу. Зафиксируй первый этап и проверь, хватает ли ресурса на продолжение.'],
    talk: ['Да, но мягко.', 'Сложный разговор сегодня лучше вести без напора: коротко, честно, с опорой на факты и собственные границы.'],
  };
  const [title, details] = verdicts[questionSelect.value];
  el('answer-verdict').textContent = `${title} Уровень благоприятности: ${dayData.score}/10.`;
  el('answer-details').textContent = details;
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

function loadProfile() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function loadHistory() {
  const raw = localStorage.getItem(HISTORY_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function upsertHistory(dayData, feedback = null) {
  const history = loadHistory();
  const existingIndex = history.findIndex((item) => item.todayKey === dayData.todayKey);
  const record = {
    todayKey: dayData.todayKey,
    dateLabel: dayData.dateLabel,
    formulaTitle: dayData.formulaTitle,
    score: dayData.score,
    headlineAdvice: dayData.headlineAdvice,
    feedback: feedback || (existingIndex >= 0 ? history[existingIndex].feedback : null),
  };
  if (existingIndex >= 0) history[existingIndex] = record;
  else history.unshift(record);
  saveHistory(history.slice(0, 14));
}

function renderHistory() {
  const history = loadHistory();
  el('history-count').textContent = history.length;
  const successCount = history.filter((item) => item.feedback === 'Сбылось').length;
  el('success-rate').textContent = history.length ? `${Math.round((successCount / history.length) * 100)}%` : '0%';

  let streak = 0;
  for (const item of history) {
    if (item.feedback) streak += 1;
    else break;
  }
  el('streak-count').textContent = streak;

  const container = el('history-list');
  container.innerHTML = '';
  if (!history.length) {
    container.innerHTML = '<div class="history-item"><strong>Пока пусто</strong><p>Зайди утром за прогнозом и вечером отметь, что совпало.</p></div>';
    return;
  }

  history.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'history-item';
    card.innerHTML = `
      <strong>${item.dateLabel}</strong>
      <span class="section-label">${item.score}/10</span>
      <p>${item.formulaTitle}</p>
      <p>${item.headlineAdvice}</p>
      <p>Вечером: <strong>${item.feedback || 'без отметки'}</strong></p>
    `;
    container.appendChild(card);
  });
}

function setFeedback(dayData, feedback) {
  upsertHistory(dayData, feedback);
  renderHistory();
  el('feedback-note').textContent = `Сохранено: ${feedback}. Завтра сервис сможет показать более личную историю совпадений.`;
  document.querySelectorAll('#feedback-buttons .button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.feedback === feedback);
  });
}

function render(dayData, profile) {
  profileCard.classList.add('hidden');
  dashboard.classList.remove('hidden');
  historyCard.classList.remove('hidden');

  el('today-label').textContent = dayData.dateLabel;
  el('day-score-badge').textContent = `${dayData.score}/10`;
  el('greeting').textContent = `${profile.name}, вот твой код дня`;
  el('headline-advice').textContent = dayData.headlineAdvice;
  el('sign-name').textContent = dayData.sign;
  el('sign-rank').textContent = `#${dayData.signRank}`;
  el('personal-number').textContent = dayData.personalNumber;
  el('date-energy').textContent = dayData.dateEnergy;
  el('formula-title').textContent = dayData.formulaTitle;
  el('formula-description').textContent = dayData.formulaDescription;
  el('boost-text').textContent = dayData.boost;
  el('drain-text').textContent = dayData.drain;
  el('chance-text').textContent = dayData.chance;
  el('risk-text').textContent = dayData.risk;

  el('lucky-color').textContent = dayData.luckyColor;
  el('lucky-color-note').textContent = dayData.luckyColorNote;
  el('lucky-number').textContent = dayData.luckyNumber;
  el('lucky-item').textContent = dayData.luckyItem;
  el('lucky-item-note').textContent = dayData.luckyItemNote;
  el('lucky-hour').textContent = dayData.luckyHour;
  el('lucky-action').textContent = dayData.luckyAction;
  el('lucky-action-note').textContent = dayData.luckyActionNote;

  renderList('do-list', dayData.doList);
  renderList('avoid-list', dayData.avoidList);

  el('number-title').textContent = dayData.numberProfile.title;
  el('number-meaning').textContent = dayData.numberProfile.meaning;
  el('number-work').textContent = dayData.numberProfile.work;
  el('number-money').textContent = dayData.numberProfile.money;
  el('number-love').textContent = dayData.numberProfile.love;
  el('number-mood').textContent = dayData.numberProfile.mood;

  el('compatibility-title').textContent = `Сегодня тебе проще с ${dayData.compatibility.easy}, а магнит дня — ${dayData.compatibility.magnet}.`;
  renderList('compatibility-list', [
    `Магнит дня: ${dayData.compatibility.magnet}. С этим знаком легче поймать нужный тон.`,
    `Проще договариваться с ${dayData.compatibility.easy}.`,
    `С ${dayData.compatibility.conflict} лучше не спорить по мелочам.`,
  ]);

  renderList('week-list', dayData.weeklyItems);
  renderQuestionAnswer(dayData);
  upsertHistory(dayData);
  renderHistory();

  const todayEntry = loadHistory().find((item) => item.todayKey === dayData.todayKey);
  document.querySelectorAll('#feedback-buttons .button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.feedback === todayEntry?.feedback);
    button.onclick = () => setFeedback(dayData, button.dataset.feedback);
  });
}

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(profileForm);
  const profile = {
    name: formData.get('name').toString().trim(),
    birthdate: formData.get('birthdate').toString(),
  };
  saveProfile(profile);
  render(computeDayData(profile), profile);
});

questionSelect.addEventListener('change', () => {
  const profile = loadProfile();
  if (!profile) return;
  renderQuestionAnswer(computeDayData(profile));
});

const existingProfile = loadProfile();
if (existingProfile) {
  profileForm.elements.name.value = existingProfile.name;
  profileForm.elements.birthdate.value = existingProfile.birthdate;
  render(computeDayData(existingProfile), existingProfile);
}
