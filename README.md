# Greek Vocabulary Learning Web App

A simple web application for learning Greek vocabulary with Russian translations. Display random Russian words, write the Greek translation on paper, reveal the answer, and mark it right or wrong. Words marked as learned are moved to a separate file.

---

## 🚀 Quick Start

### Requirements
- **Browser**: Chrome 86+ or Edge 86+ (requires File System Access API)
- **No API needed**: All translations included!

### Setup Instructions

1. **Open the App**
   - Open `index.html` in Chrome or Edge
   - Click "Load Word File"
   - Select the folder `/Users/vertix/Documents/dev/words/`
   - The directory is saved locally - you won't need to select it again!
   - Start learning!

2. **Add Your Own Words** (Optional)
   - Edit `words.txt` and add Greek words (one per line)
   - Click "Edit Translations" to add Russian translations
   - Or ask Claude to translate new words for you!

---

## 📖 How to Use

### Learning Session
1. The app displays a random **Russian word** (large, centered)
2. Write the **Greek translation** on paper
3. Click on the Russian word to **reveal the answer**
4. Click one of the buttons:
   - **✓ Got it right**: Word moves to `learned.tsv`, removed from active list
   - **✗ Got it wrong**: Word stays in active list for more practice
5. Next random word appears
6. Repeat until all words are learned

### Keyboard Shortcuts
- **Space**: Reveal answer
- **1** or **→**: Got it right
- **2** or **←**: Got it wrong
- **E**: Edit words

### Editing Words
- Click "Edit Words" button to add/remove Greek words
- Enter one word per line
- New words will be automatically translated
- Click "Save" to apply changes

### Directory Persistence
- **First time**: When you click "Load Word File", select the folder containing your vocabulary files
- **Saved locally**: The directory is stored in your browser's IndexedDB
- **Auto-load next time**: The app will automatically load your files on subsequent visits
- **No re-selection needed**: You won't be prompted to select the directory again
- **Reset if needed**: Click "Reset Directory" button to clear the saved directory and select a new one

### Editing Translations

**Option 1: In-App Editor** (for single edits)
- Click "Edit Translations" button
- Edit any Russian translation directly
- Click "Save" to apply

**Option 2: External Editor** (for bulk edits)
- Open `translations.tsv` in a text editor, Excel, or Google Sheets
- Format: `Greek[TAB]Russian` (one pair per line)
- Example:
  ```
  γεια	привет
  καλημέρα	доброе утро
  ευχαριστώ	спасибо
  ```
- Save the file
- App will automatically reload translations on next use

---

## 📁 File Structure

```
/Users/vertix/Documents/dev/words/
├── index.html           # Main application (open this file)
├── app.js              # Application logic
├── styles.css          # Styling
├── config.js           # API configuration
├── words.txt           # Greek words to learn (one per line)
├── translations.tsv    # Translation cache (Greek→Russian, tab-separated)
├── learned.tsv         # Learned words (Greek→Russian, tab-separated)
└── README.md           # This file
```

### File Formats

**words.txt** - Active Greek words (one per line):
```
γεια
καλημέρα
ευχαριστώ
νερό
```

**translations.tsv** - Translation cache (tab-separated values):
```
γεια	привет
καλημέρα	доброе утро
ευχαριστώ	спасибо
νερό	вода
```

**learned.tsv** - Learned words (same format as translations.tsv):
```
γεια	привет
ευχαριστώ	спасибо
```

---

## 🔄 Moving Words Between Lists

To review learned words:
1. Open `learned.tsv` in a text editor
2. Copy the lines you want to review
3. Paste them into `translations.tsv` (if not already there)
4. Add the Greek words to `words.txt`
5. Reload the app

All files are plain text and easy to edit manually!

---

## 🛠️ Troubleshooting

### API Key Issues
- **"API error 403"**: Invalid API key. Check your key in Settings.
- **"API error 456"**: Quota exceeded. You've used your free 500,000 characters for the month.
- **"API error 429"**: Rate limit reached. Wait a moment and try again.

### File Permission Issues
- The browser will ask for permission to read/write files
- Grant permission when prompted
- You can revoke permissions in browser settings if needed

### Translation Failures
- If translations fail, you can manually edit `translations.tsv`
- Add missing translations in the format: `Greek[TAB]Russian`

### Character Encoding
- All files must be UTF-8 encoded
- Most text editors default to UTF-8
- If you see garbled text, check your editor's encoding settings

### Browser Compatibility
- **Supported**: Chrome 86+, Edge 86+
- **Not Supported**: Firefox, Safari (File System Access API not available)

---

## 🌐 Bulk Translation Alternative

If you don't want to use the DeepL API, you can translate words manually:

1. Copy all Greek words from `words.txt`
2. Go to https://translate.google.com
3. Paste Greek words, translate to Russian
4. Copy translated Russian text
5. Create `translations.tsv` with format: `Greek[TAB]Russian`
6. Open the app and load your files

This is completely free and requires no API key!

---

## 🔒 Privacy & Security

- **API Key**: Stored in browser localStorage with simple XOR encryption
- **All Data**: Stored locally on your computer
- **No Tracking**: No analytics or external requests (except DeepL API)
- **Offline**: Works offline after initial translation

---

# Приложение для изучения греческого словаря

Простое веб-приложение для изучения греческой лексики с русскими переводами. Показывает случайные русские слова, вы пишете греческий перевод на бумаге, затем открываете ответ и отмечаете правильно/неправильно. Выученные слова перемещаются в отдельный файл.

---

## 🚀 Быстрый старт

### Требования
- **Браузер**: Chrome 86+ или Edge 86+ (требуется File System Access API)
- **API не нужен**: Все переводы уже включены!

### Инструкция по установке

1. **Откройте приложение**
   - Откройте `index.html` в Chrome или Edge
   - Нажмите "Load Word File"
   - Выберите папку `/Users/vertix/Documents/dev/words/`
   - Папка сохраняется локально - больше не нужно её выбирать!
   - Начинайте учить!

2. **Добавьте свои слова** (Опционально)
   - Отредактируйте `words.txt` и добавьте греческие слова (по одному в строке)
   - Нажмите "Edit Translations" чтобы добавить русские переводы
   - Или попросите Claude перевести новые слова!

---

## 📖 Как использовать

### Сессия изучения
1. Приложение показывает случайное **русское слово** (крупным шрифтом, по центру)
2. Напишите **греческий перевод** на бумаге
3. Кликните на русское слово, чтобы **открыть ответ**
4. Нажмите одну из кнопок:
   - **✓ Правильно**: Слово перемещается в `learned.tsv`, удаляется из активного списка
   - **✗ Неправильно**: Слово остаётся в активном списке для повторения
5. Появляется следующее случайное слово
6. Повторяйте, пока не выучите все слова

### Горячие клавиши
- **Пробел**: Показать ответ
- **1** или **→**: Правильно
- **2** или **←**: Неправильно
- **E**: Редактировать слова

### Редактирование слов
- Нажмите кнопку "Edit Words", чтобы добавить/удалить греческие слова
- Вводите по одному слову в строке
- Новые слова будут автоматически переведены
- Нажмите "Save", чтобы применить изменения

### Сохранение папки
- **Первый раз**: При нажатии "Load Word File" выберите папку с файлами словаря
- **Сохраняется локально**: Папка сохраняется в IndexedDB браузера
- **Автозагрузка**: Приложение автоматически загрузит файлы при следующем запуске
- **Не нужно выбирать снова**: Папку больше не нужно указывать
- **Сброс**: Нажмите "Reset Directory" чтобы очистить сохранённую папку и выбрать новую

### Редактирование переводов

**Вариант 1: Редактор в приложении** (для одиночных правок)
- Нажмите кнопку "Edit Translations"
- Отредактируйте любой русский перевод
- Нажмите "Save" для применения

**Вариант 2: Внешний редактор** (для массовых правок)
- Откройте `translations.tsv` в текстовом редакторе, Excel или Google Sheets
- Формат: `Греческое[TAB]Русское` (одна пара на строку)
- Пример:
  ```
  γεια	привет
  καλημέρα	доброе утро
  ευχαριστώ	спасибо
  ```
- Сохраните файл
- Приложение автоматически загрузит переводы при следующем запуске

---

## 📁 Структура файлов

```
/Users/vertix/Documents/dev/words/
├── index.html           # Главное приложение (откройте этот файл)
├── app.js              # Логика приложения
├── styles.css          # Стили
├── config.js           # Настройки API
├── words.txt           # Греческие слова для изучения (по одному в строке)
├── translations.tsv    # Кэш переводов (греческий→русский, через табуляцию)
├── learned.tsv         # Выученные слова (греческий→русский, через табуляцию)
└── README.md           # Этот файл
```

### Форматы файлов

**words.txt** - Активные греческие слова (по одному в строке):
```
γεια
καλημέρα
ευχαριστώ
νερό
```

**translations.tsv** - Кэш переводов (значения через табуляцию):
```
γεια	привет
καλημέρα	доброе утро
ευχαριστώ	спасибо
νερό	вода
```

**learned.tsv** - Выученные слова (тот же формат, что translations.tsv):
```
γεια	привет
ευχαριστώ	спасибо
```

---

## 🔄 Перемещение слов между списками

Чтобы повторить выученные слова:
1. Откройте `learned.tsv` в текстовом редакторе
2. Скопируйте строки, которые хотите повторить
3. Вставьте их в `translations.tsv` (если их там ещё нет)
4. Добавьте греческие слова в `words.txt`
5. Перезагрузите приложение

Все файлы — это простой текст, их легко редактировать вручную!

---

## 🛠️ Решение проблем

### Проблемы с API-ключом
- **"API error 403"**: Неверный API-ключ. Проверьте ключ в настройках.
- **"API error 456"**: Квота исчерпана. Вы использовали бесплатные 500 000 символов за месяц.
- **"API error 429"**: Достигнут лимит запросов. Подождите немного и попробуйте снова.

### Проблемы с доступом к файлам
- Браузер запросит разрешение на чтение/запись файлов
- Предоставьте разрешение при запросе
- Вы можете отозвать разрешения в настройках браузера

### Ошибки перевода
- Если перевод не удался, можно вручную отредактировать `translations.tsv`
- Добавьте недостающие переводы в формате: `Греческое[TAB]Русское`

### Кодировка символов
- Все файлы должны быть в кодировке UTF-8
- Большинство текстовых редакторов по умолчанию используют UTF-8
- Если видите кракозябры, проверьте настройки кодировки в редакторе

### Совместимость с браузерами
- **Поддерживается**: Chrome 86+, Edge 86+
- **Не поддерживается**: Firefox, Safari (File System Access API недоступен)

---

## 🌐 Альтернатива массового перевода

Если не хотите использовать DeepL API, можно переводить вручную:

1. Скопируйте все греческие слова из `words.txt`
2. Перейдите на https://translate.google.com
3. Вставьте греческие слова, переведите на русский
4. Скопируйте переведённый русский текст
5. Создайте `translations.tsv` в формате: `Греческое[TAB]Русское`
6. Откройте приложение и загрузите файлы

Это полностью бесплатно и не требует API-ключа!

---

## 🔒 Конфиденциальность и безопасность

- **API-ключ**: Хранится в localStorage браузера с простым XOR-шифрованием
- **Все данные**: Хранятся локально на вашем компьютере
- **Без отслеживания**: Нет аналитики и внешних запросов (кроме DeepL API)
- **Офлайн**: Работает офлайн после первоначального перевода

---

## 💡 Tips for Effective Learning / Советы для эффективного обучения

### English
- Practice regularly (10-15 minutes daily is better than 2 hours once a week)
- Write the Greek words by hand to improve memory retention
- Review learned words periodically by moving them back to the active list
- Group similar words together in separate word files (e.g., food, greetings, verbs)
- Use the session accuracy stat to track your progress

### Русский
- Занимайтесь регулярно (10-15 минут ежедневно лучше, чем 2 часа раз в неделю)
- Пишите греческие слова от руки для лучшего запоминания
- Периодически повторяйте выученные слова, перемещая их обратно в активный список
- Группируйте похожие слова в отдельные файлы (например, еда, приветствия, глаголы)
- Используйте статистику точности сессии для отслеживания прогресса

---

## 📝 License

This project is free to use and modify. No license restrictions.

Этот проект можно свободно использовать и модифицировать. Нет ограничений по лицензии.
