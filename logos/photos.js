/* ============================================
   ФОТО ЭМБЛЕМ ПАРТИЙ
   ============================================
   Ключ — ID партии. Значение — путь к файлу.
   Формат: PNG лучше (с прозрачным фоном), 200×200.
   Создайте папку 'logos' рядом с index.html

   Если фото нет — покажется текстовая аббревиатура (ЕР, КПРФ, ...)
   ============================================ */
const partyPhotos = {
    // 'er': 'logos/er.png',
    'kprf': 'logos/kprf.png',
    // 'ldpr': 'logos/ldpr.png',
    // 'sr': 'logos/sr.png',
    // 'nl': 'logos/nl.png',
    // 'pens': 'logos/pens.png',
    // 'kr': 'logos/kr.png',
    // 'yabloko': 'logos/yabloko.png',
};

/* ============================================
   ФОТО СОВЕТНИКОВ
   ============================================
   Ключ — ID советника. Значение — путь к файлу.
   Формат: JPG/PNG, квадратные 200×200 или 400×400.
   Создайте папку 'photos' рядом с index.html

   Если фото нет — покажется первая буква имени.
   ============================================ */
const advisorPhotos = {
    /* --- Единая Россия --- */
    // 'er_1': 'photos/turchak.jpg',       // Андрей Турчак
    // 'er_2': 'photos/lavrov.jpg',        // Сергей Лавров
    // 'er_3': 'photos/golovin.jpg',       // Владислав Головин

    /* --- КПРФ --- */
    // 'kprf_1': 'photos/bondarenko.jpg',  // Николай Бондаренко
    // 'kprf_2': 'photos/afonin.jpg',      // Юрий Афонин
    // 'kprf_3': 'photos/anidalov.jpg',    // Александр Анидалов

    /* --- ЛДПР --- */
    // 'ldpr_1': 'photos/slutsky.jpg',     // Леонид Слуцкий
    // 'ldpr_2': 'photos/but.jpg',         // Виктор Бут
    // 'ldpr_3': 'photos/voropaeva.jpg',   // Мария Воропаева

    /* --- Справедливая Россия --- */
    // 'sr_1': 'photos/babakov.jpg',       // Александр Бабаков
    // 'sr_2': 'photos/kim.jpg',           // Марина Ким
    // 'sr_3': 'photos/chernyshev.jpg',    // Олег Чернышев

    /* --- Новые люди --- */
    // 'nl_1': 'photos/davankov.jpg',      // Владислав Даванков
    // 'nl_2': 'photos/avksentieva.jpg',   // Сардана Авксентьева
    // 'nl_3': 'photos/goryacheva.jpg',    // Ксения Горячева

    /* --- Партия пенсионеров --- */
    // 'pens_1': 'photos/prazdnikov.jpg',  // Эрик Праздников
    // 'pens_2': 'photos/shelygin.jpg',    // Юрий Шелыгин
    // 'pens_3': 'photos/vorozhtsov.jpg',  // Владимир Ворожцов

    /* --- Коммунисты России --- */
    // 'kr_1': 'photos/malinkovich.jpg',   // Сергей Малинкович
    // 'kr_2': 'photos/hugaev.jpg',        // Руслан Хугаев
    // 'kr_3': 'photos/sidorov.jpg',       // Ярослав Сидоров

    /* --- Яблоко --- */
    // 'yab_1': 'photos/rybakov.jpg',      // Николай Рыбаков
    // 'yab_2': 'photos/shlosberg.jpg',    // Лев Шлосберг
    // 'yab_3': 'photos/ivanenko.jpg',     // Сергей Иваненко
};

/* ============================================
   ФОТО СОБЫТИЙ
   ============================================
   Ключ — ID события. Значение — путь к файлу.
   Формат: горизонтальные 600×300 или 800×400.
   Создайте папку 'events' рядом с index.html

   Если фото нет — покажется эмодзи 📰.
   ============================================ */
const eventPhotos = {
    /* --- Крупные события --- */
    // 't2x2_event': 'events/t2x2.jpg',                  // Т2x2 поддержал КПРФ
    // 'bondarenko_removal': 'events/bondarenko.jpg',    // Снятие Бондаренко
    // 'yabloko_removal': 'events/yabloko.jpg',          // Снятие Яблока
    // 'court': 'events/court.jpg',                      // Суд
    // 'debate': 'events/debate.jpg',                    // Дебаты
    // 'newspaper_expose': 'events/press.jpg',           // Разоблачительная статья
    // 'local_support': 'events/support.jpg',            // Жители собрали подписи
    // 'social_media_trend': 'events/trends.jpg',        // Партия в трендах
    // 'endorsement_small': 'events/endorsement.jpg',    // Ксения Собчак поддержала
    // 'minor_provocation': 'events/provocation.jpg',    // Провокация на митинге
    // 'journalist_question': 'events/journalist.jpg',   // Неудобный вопрос

    /* --- Вторичные новости --- */
    // 't2x2_support': 'events/t2x2.jpg',                // Т2x2 в новостях
    // 'vbros': 'events/vbros.jpg',                      // Вбросы бюллетеней
    // 'observers_news': 'events/observers.jpg',         // Наблюдатели
    // 'court_pressure': 'events/court_pressure.jpg',    // Суд снимает кандидатов
    // 'hackers': 'events/hackers.jpg',                  // Хакерские атаки
    // 'bribe': 'events/bribe.jpg',                      // Подкуп избирателей
    // 'ddos': 'events/ddos.jpg',                        // DDoS-атаки
    // 'blogger': 'events/blogger.jpg',                  // Разоблачительный ролик
    // 'school': 'events/school.jpg',                    // Агитация в школе
    // 'kompromat': 'events/kompromat.jpg',              // Листовки с компроматом
    // 'protest': 'events/protest.jpg',                  // Пикеты и протесты
    // 'endorsement': 'events/endorsement.jpg',          // Поддержка знаменитостей
    // 'social_media': 'events/social_media.jpg',        // Соцсети

    /* --- Итоги выборов --- */
    // 'win': 'events/win.jpg',                          // Победа
    // 'passed': 'events/passed.jpg',                    // Барьер пройден
    // 'fail': 'events/fail.jpg',                        // Провал

    /* --- Дефолтное фото для событий без картинки --- */
    // 'default': 'events/default.jpg',
};
