// @flow

const sales = {
  development: '',
  staging: '',
  production: '5ae0457b08782dec19589758',
};

const realms = {
  development: '',
  staging: '',
  production: '5ab4e60facbaa7fec5dce368',
};

export const realm: string = realms[process.env.API] || realms.production;
export const sale: string = sales[process.env.API] || sales.production;
export const tokenName = 'HCFT';
export const contactEmail = 'investor@haritonov.capital';
export const termsOfServiceURL = 'terms.url';
export const withdrawalEmail = 'investor@haritonov.capital';

export const faq = [
  {
    question: 'Что такое криптовалюта?',
    answer:
      'Криптовалюта - это цифровая валюта, защищенная криптографией, т.е. шифрование (процесс преобразования данных в код). В первую очередь, криптовалюта – это быстрая и надежная система платежей и денежных переводов, основанная на новейшей технологии Блокчейн. Наиболее известные криптовалюты - Биткоин и Эфириум, а общее количество криптовалют насчитывает более 1000 наименований. ',
  },
  {
    question: 'Для чего нужна криптовалюта?',
    answer:
      'Цель - создать принципиально новую систему финансовых расчетов, которая не зависима от банков и государства. Все операции в этой системе должны быть мгновенными, невозвратными и абсолютно прозрачными, чтобы все пользователи могли беспрепятственно отследить любую транзакцию(перевод). ',
  },
  {
    question: 'Что такое Биткоин?',
    answer:
      'Биткоин – это ведущая криптовалюта, стоимость которой не регулируется государством, а зависит от спроса и предложения на рынке. Это одновременно и объект инвестиций, и платежное средство и система хранения информации о платежах.',
  },
  {
    question: 'Как выглядит биткоин?',
    answer:
      'Так как биткойн является виртуальной валютой, он выглядит не как привычные бумажные деньги или монеты, это электронный файл в виде наборов символов. Чтобы подробно понимать суть биткойна, нужно разбираться в процессах хеширования и криптографии, но для осуществления финансовых операций нет необходимости изучать эти сложные понятия. ',
  },
  {
    question: 'Как происходит эмиссия (выпуск) Биткоинов? ',
    answer:
      'Эмиссия биткоинов осуществляется путем добычи -"майнинга", для этого компьютеры участников сети «майнеры» с помощью математических вычислений, должны расшифровать сложную криптографическую задачу. Этот цифровой товар с ограниченным предложением, его алгоритм устроен таким образом, что в системе может существовать максимум 21 миллион единиц, каждая из которых также называется "биткойн". 1 биткойн делится на 100 000 000 частей, которые называются "сатоши", в честь создателя системы. График эмиссии определен согласно специальной программы и заранее известен. Ценность биткойна со временем будет только расти с учетом растущего спроса, не зря его называют «Цифровым золотом».  ',
  },
  {
    question: 'В чем преимущество Биткоина? ',
    answer: `
      <ul>
        <li>Скорость. Банковский SWIFT платеж может совершаться несколько дней, где банк должен проверить и подтвердить операцию. При переводе биткойна, вашу операцию может подтвердить любой участник сети, что значительно экономит время.  
        <li>Безопасность. Обеспечивается за счёт криптографии с открытым ключом (P2SH). 
        <li>Экономичность. Комиссия, которая уплачивается за перевод, не зависит от суммы, которую мы отправляем, является минимальной. 
        <li>Масштаб. Учитывая, что для перевода денег вам нужно лишь программное обеспечение, установленное на компьютер или мобильный телефон, абсолютно не важно, где географически находитесь вы и ваш партнер по переводу средств. Биткоин передается на любые расстояния, в любую точку мира, с одинаковой скоростью.  
      </ul>`,
  },
  {
    question: 'Где купить Биткойны и другие криптовалюты (Альткоины)? ',
    answer:
      'Обменять обычные деньги на биткоины и другие альткоины можно через торговые биржи, обменники или напрямую у людей, готовых их продать. Оплатить покупку можно наличным или безналичным расчетом в зависимости от того, у кого вы покупаете и где живете. Перед покупкой биткоинов вам стоит завести биткоин-кошелек. Вы можете хранить его на жестком диске своего компьютера, флеш- накопителе или в онлайн-кошельке. Желающих приобрести криптовалюту подстерегают опасности, покупка или обмен несут в себе множество рисков, можно потерять свои деньги из-за мошеннических действий и хакерских атак. Кроме профессиональных участников рынка, существуют желающие обогатиться за чужой счет. Наиболее безопасный способ - обратиться в инвестиционный фонд с хорошей репутацией и историей. Харитонов Крипто Фонд с радостью поможет вам безопасно решить данную проблему. Наши контакты: www.haritonovcrypro.fond; e-mail: <a href="mailto:info@haritonovcrypro.fond">info@haritonovcrypro.fond</a>',
  },
  {
    question: 'Как хранить Биткойны или другие Альткоины? ',
    answer:
      'Биткоины хранятся в специальных кошельках. При этом речь идёт не о валюте как таковой, а о специальных кодах, которые нужны вам для того чтобы отправить биткоины. Кошелек – способ хранения приватных ключей, привязанных к вашим биткоин-адресам. Кошельки могут иметь самую разнообразную форму – от программы-клиента, устанавливающейся на вашем компьютере, до обычного листа бумаги, на который вы выпишете ваши ключи. Подробнее о разных типах кошельков вы можете узнать при консультации. Биткоин-адрес – адрес, с которого вы отправляете и на который получаете биткоины (наиболее близкая аналогия – ваш адрес электронной почты). Может отображаться в виде комбинации букв и цифр или QR-кода. Выполняет функцию публичного ключа. Публичный ключ – ваш биткоин-адрес, который вы сообщаете другим пользователям для перевода и получения средств. В паре с приватным ключом, известным только вам, служит для заверения транзакции. Приватный ключ – Секретная комбинация букв и цифр, необходимая для заверения транзакции, аналог вашей подписи. Приватные ключи должны храниться в безопасном месте, Вы можете выбрать для этого кошелек, максимально отвечающий Вашим потребностям. QR-код – двумерный штрих-код, содержащий цепочку данных. Для его распознавания используется сканирующее оборудование, например, камера вашего смартфона. QR-код часто используется для отображения биткоин-адреса. Помимо этого, биткоин можно хранить в кошельке, который установлен на мобильном телефоне или флеш- карте. Существует такое понятие, как горячее и холодное хранение. ',
  },
  {
    question: 'Как потратить Биткойны?',
    answer:
      'Биткоин является популярным средством для оплаты покупок в интернете. Цифровую валюту уже принимает производитель компьютеров Dell, интернет-магазин Overstock, и интернет- магазин Microsoft (на территории США). С помощью цифровой валюты вы можете приобрести карты таких крупных компаний как Walmart, Amazon, Target и Nike. В последнее время сервисы по продаже карт за биткоины распространились в Европу. Постепенно биткоин проникает во все сферы жизни общества и используется для оплаты самых разнообразных услуг. ',
  },
  {
    question: 'Как продать Биткойны? ',
    answer:
      'Продать биткоины можно на онлайн-бирже, разместив на ней соответствующую заявку или передав их трейдеру. Для этого как правило требуется регистрация на конкретной торговой площадке и привязка аккаунта на бирже к банковскому счету. Помимо этого продать биткоины можно по личной договоренности. ',
  },
  {
    question: 'Переводы в Биткойнах? ',
    answer:
      'Переводы в биткоинах делаются между биткоин-кошельками и защищены цифровой подписью. Для того, чтобы отправить биткоины другому человеку вам нужно знать две вещи: адрес этого человека в биткоин-системе и специальный код или ключ, который необходим для доступа к вашим электронным деньгам. Для совершения перевода вы указываете адрес и количество биткоинов, «подписываете» перевод с помощью ключа и отправляете в мировую биткоин-систему. После того, как перевод пройдёт проверку, адресат вашего перевода сможет получить деньги. Процесс перевода занимает небольшое время. При этом в отличие от перевода по кредитной карте, биткоин-транзакцию нельзя отменить. ',
  },
  {
    question: 'Что такое Блокчейн? ',
    answer:
      'Блокчейн - это форма распределенной технологии учета (DLT), децентрализованная информационная система, состоящая из цепочки блоков транзакций, обеспечивающий учет и хранение данных, которая хранит постоянно растущий список упорядоченных записей, называемых блоками. Каждый блок содержит метку времени и ссылку на предыдущий блок. Вся система биткоин работает по технологии блокчейн. Это значит, что абсолютно все транзакции, совершенные с каждым блоком биткойн, заносятся в открытую базу данных, и каждый пользователь системы может отследить их. Все блоки в блокчейн связаны между собой в непрерывную цепочку, причем внести изменения в уже записанные в базу блоки невозможно. Реестры базы данных хранятся не в одном месте, а на миллионах компьютеров пользователей, являющихся участниками системы. Реестр постоянно автоматически обновляется и дополняется данными и о новых добытых блоках биткоин, и о совершенных транзакциях. Безопасность в технологии блокчейн обеспечивается через децентрализованный сервер, проставляющий метки времени. В результате формируется база данных, которая управляется автономно, без единого центра. Это делает цепочки блоков очень удобными для регистрации событий (например, внесения медицинских записей) и операций с данными, управления идентификацией и подтверждения подлинности источника. Представьте себе цифровую историю болезни: каждая запись и есть такой блок. У этой записи есть метка: дата и время внесения. Изначально считается обязательным запрет на изменение записей задним числом, потому что нужно, чтобы записи о диагностике, лечении и т.д. не допускали разных толкований и оставались в исходном виде. К записям могут получить доступ только врач, у которого есть один закрытый ключ, и пациент, у которого есть другой. Затем к этой информации получат доступ только те, кому один из этих пользователей предоставит свой закрытый ключ (например, больница в целом или отдельный специалист). Так, например, может использоваться технология блокчейн в медицинской базе данных. ',
  },
  {
    question: 'Как же работает технология блокчейн? ',
    answer:
      'Каждый человек может разместить в интернете информацию, а затем другие люди могут получить к ней доступ из любой точки мира. Цепочки блоков позволяют отправлять в любую точку мира, где будет доступен файл блокчейна, какие-либо ценности. Но у вас должен быть закрытый ключ, созданный по криптографическому алгоритму, чтобы разрешить вам доступ только к тем блокам, которыми вы «владеете». Предоставляя кому-либо свой закрытый ключ, вы по сути передаёте этому лицу денежную сумму, которая хранится в соответствующем разделе цепочки блоков.  В чём важность технологии блокчейн? Сегодня мы уже привыкли делиться информацией через децентрализованную интерактивную платформу интернета. Но когда речь заходит о пересылке ценностей (денег), мы обычно вынуждены снова пользоваться услугами старых централизованных финансовых учреждений (банков). Да, методы платежей через интернет появились практически в момент рождения этой сети (наиболее очевидный пример — PayPal), но они, как правило, требуют интеграции с банковским счётом или кредитной картой, иначе их нельзя полноценно использовать. Технология блокчейн предлагает возможность избавиться от этого «лишнего звена». Она может взять на себя все три важные роли, которые традиционно играет сектор финансовых услуг: регистрация сделок, подтверждение подлинности личности и заключение контрактов.  Что такое умные контракты? Это - компьютерный алгоритм, предназначенный для заключения и поддержания коммерческих контрактов в технологии блокчейн. Фрагмент кода можно запрограммировать так, чтобы он выполнялся, только когда обе договаривающиеся стороны вводят свои ключи, тем самым соглашаясь на заключение контракта. В нашем примере с медицинскими записями врач или пациент могут передать свой закрытый ключ медицинскому устройству, например монитору уровня сахара в крови. Тогда это устройство может автоматически, с соблюдением требований безопасности регистрировать значения уровня сахара в крови пациента, а затем, например, обмениваться данными с устройством для инъекций инсулина, которое будет на основании этих данных автоматически поддерживать нормальный уровень сахара. ',
  },
  {
    question: 'В чем заключается ваше предложение? ',
    answer:
      'Мы предлагаем инвестировать в крипто экономику через наш фонд. Демонстрируя высокую доходность, высокий уровень безопасности мы инвестируем только в проверенные активы, с значительным потенциальной роста. Мы поможем вам, с выбором инвестиционных продуктов и услуг. Актуальную информацию можно найти на сайте фонда. Более детально по портфелю и стратегиям будем рады проконсультировать при личной встречи. Наши контакты: www.haritonovcrypro.fond.ru; e-mail: <a href="mailto:info@haritonovcrypro.fond">info@haritonovcrypro.fond</a>',
  },
  {
    question: 'Какая доходность? ',
    answer:
      'По итогам 4 квартала 2017 года доходность составила 94,5% в долларах США, не говоря о результатах индивидуальных стратегиях, где показатели значительно выше.  ',
  },
  {
    question: 'Кто может вложить средства в криптофонд? ',
    answer:
      'Совершенно любой человек, который располагает свободными денежными средствами, понимает финансовые цели, потребность в ликвидности и отношения риска и доходности. ',
  },
  {
    question: 'Есть ли ограничения по объему инвестирования?',
    answer:
      'Для персонального доверительного управления от 10.000$ (или эквивалент евро, рублях или BTC, ETH). Но нужно учесть тот факт, что чем больше сумма инвестиций, тем большую прибыль Вы сможете заработать, т.к. заработок прямо пропорционален объему выводимых на рынок средств, кроме того курс обмена тоже зависит от суммы – чем больше сумма, тем он ниже.',
  },
  {
    question: 'Какие денежные средства можно инвестировать? ',
    answer:
      'Мы консультируем вас, как зарегистрироваться в нашем л/к, открыть там счет, на который вы можете перечислить любые фиатные средства (доллары, евро, рубли ), а из криптовалют BTC (биткоины) и ETH (эфиры).  ',
  },
  {
    question:
      'Могу ли я инвестировать наличными, банковским переводом или картой? ',
    answer: 'Да, возможны любые варианты вступления. ',
  },
  {
    question: 'На какой срок, я могу вложить средства? ',
    answer:
      'Вы можете попробовать инвестировать на короткий срок от 3 месяцев и увидеть результат уже через 1 месяц, но нужно учитывать, чтобы говорить о значительном росте вложений, необходимо от 6 до 12 месяцев, т.к. базовая стратегия распределения рисков и целевая доходность спроектированы с учетом среднесрочного периода. ',
  },
  {
    question: 'Когда я получу свою первую прибыль? ',
    answer: 'Первую прибыль Вы получите уже через месяц. ',
  },
  {
    question: 'В безопасности ли мои средства? ',
    answer:
      'Наш фонд распределяет средства между надежными и проверенными криптобиржами, кошельками и холодными хранилищами для достижения максимальной сохранности активов. Безопасность - один из ключевых и важных моментов работы. Поэтому стоит убедиться, что авторизация проходит в несколько этапов с помощью двухфакторная аутентификация, есть HTTPS-соединение, мультиподпись, т.е. используются комплексные меры защиты. Все это описано в Вашем личном кабинете. Наши менеджеры помогут Вам все правильно настроить.   ',
  },
  {
    question: 'Как фонд минимизирует риски? ',
    answer:
      'Фонд обеспечивает безопасность следующими способами: трейдинг осуществляется на базе алгоритмической торговли + работа трейдеров и аналитиков на следующих временных промежутках: 1 сутки, 1 неделя, 1 месяц, 1 квартал, что минимизирует риск ошибок, используется жёсткий метод управления риском, определяющий рациональный размер максимальных потерь, в зависимости от величины текущей подвижности рынка. В рамках системы контроля за рисками мониторинг портфеля осуществляется на ежедневной основе. Пересмотр структуры портфеля осуществляется еженедельно. Гарантия возврата первоначальных инвестиций обеспечена стабилизационным фондом в размере 25% от общего капитала. 10% от прибыли идет на его пополнение, покрывая тем самым возможные риски. Рынок криптовалют в отличии от рынка форекс или фондового рынка  подвержен сильному изменению в течение короткого промежутка времени. Наши трейдеры зарабатывают на покупках и продажах портфеля криптовалют и следят за этим 24/7. Риски в данном случае минимальны. У нас работают лучшие специалисты рынка и этим мы гарантируем высокую прибыль на вложенные инвестиции ',
  },
  {
    question: 'Где я могу проверить свой текущий баланс?',
    answer:
      'В своём мобильном сервисе или в Вашем личном кабинете. Доступ 24/7 ',
  },
  {
    question: 'Какой будет заключен договор наших взаимоотношений? ',
    answer:
      'По доверительному управлению у нас предусмотрен Договор публичной оферты. С этим документом вы сможете ознакомиться в личном кабинете.',
  },
  {
    question:
      'У вас есть возможность заработать реферальную комиссию, пригласив друга инвестировать? ',
    answer:
      'Да, бонус составляет 3% от привлеченной суммы, после 1 месяца успешной работы с новым клиентом.',
  },
  {
    question:
      'Если я могу купить сам набор криптовалют из Топ-20, зачем мне делать это через ваш фонд? ',
    answer:
      'Вы можете повторить структуру одной из стратегий фонда, но для этого вам потребуется значительное время и сумма от $50 тыс. Также возможны дополнительные затраты на консультации специалистов по ряду вопросов. Кроме этого рынок очень подвижен и требует глубокой экспертизы, грамотных решений и новых идей. Доверяя средства Харитонов Крипто Фонд, вы получаете возможность охватить все основные направления и аспекты криптоиндустрии, заработать существенную прибыль и снизить риски используя наш опыт и знания. ',
  },
  {
    question: 'Где зарегистрирован фонд?',
    answer:
      'GEA Technology – F.Z.C, код компании 23519 в лице юридического лица зарегистрированного согласно законодательства Объединенных Арабских Эмиратов ',
  },
  {
    question: 'Как инвестировать в ваш фонд? ',
    answer: `
      <ul>
        <li>Оставляете заявку на нашем сайте, либо звоните нам
        <li>Мы связываемся с вами и консультируем по всем интересующим вопросам. 
        <li>Личная встреча, формируем портфель и стратегии с учетом ваших финансовых целей, отношения риска и доходности, горизонта планирования. 
        <li>Помогаем зарегистрироваться в нашем л/к. 
        <li>В личном кабинете Вы пополняете баланс. Мы выпускаем под вас токен HCFT (внутренняя валюта нашего фонда на технологии блокчейн)
        <li>Т. К. наша система основана на технологии блокчейн, именно Ethereum, все транзакции фиксируются в цепочку блоков, базу данных. Ethereum работает на основе разработанного нами ТОКЕНА (смарт-контракта), который имеет ряд функций, запрограммированными условиями. Инвестируя в личном кабинете, вы приобретаете количество токенов эквивалентных сумме вашей инвестиции, по текущему курсу обмена. Актуальный курс HCFT указан в личном кабинете в разделе Dashboard. Курс HCFT зависит от успешности работы управляющих Фонда: чем выше доходность, тем выше курс.
        <li>После обмена Ваших средств на наш токен, средства начинают работать, вы контролируете сделки онлайн 24/7 на своём аккаунте. 
        <li>Прибыль инвестора фиксируется по результатам каждого месяца. 
        <li>Вознаграждение фонду ежемесячно, только за успешное управление криптоактивами и составляет 40% от прибыли.
      </ul>
    `,
  },
  {
    question: 'Где я могу ознакомиться со всеми условиями работы фонда? ',
    answer:
      'Вся информация указана в Договоре об условиях работы фонда и находится в Вашем л/к.',
  },
  {
    question:
      'Зачем Вы выпускаете свой токен, разве нельзя напрямую покупать криптовалюту и торговать ею? ',
    answer:
      'Поскольку мы управляем портфелем из разных криптовалют (до 20) и этот портфель постоянно меняется, для Вашего удобства мы создали единый токен HCFT (Haritonov Crypto Fund Token) – коэффициент пересчета всех курсов криптовалют на обычные деньги, и это позволяет быстро конвертировать одни средства в другие. Это также позволяет отслеживать успешность торговли и быстро выводить полученную прибыль. ',
  },
  {
    question: 'Как быстро я смогу вывести свою прибыль? ',
    answer:
      'Если вы предпочитаете вывод средств в BTC (биткойн) или в ETH (эфиры), то операция занимает до 5 часов, если вы предпочитаете вывод средств в Долларах США, то операция может занять до 5 рабочих дней и зависит от банка, через который производятся все расчеты.',
  },
  {
    question: 'Доверительное управление, что это?',
    answer:
      'Инвестиционное направление, где главное преимущество услуги перед другими формами инвестиций - возможность эффективного размещения денежных средств без необходимости постоянного контроля стоимости активов, анализа рынка, совершения торговых и депозитарных операций. Клиенты регулярно получают полную информацию о результатах и состоянии инвестиционного портфеля от управляющей компании. Вознаграждение управляющей компании напрямую зависит от дохода инвестора. ',
  },
  {
    question:
      'У меня возник вопрос, ответ на который я не смог найти на сайте фонда, что делать? ',
    answer: `
      Техническая и клиентская поддержка, а так же по всем возникшим вопросам касательно работы фонда, обращайтесь по указанным контактным данным: 
      <ul>
        <li> Для звонков по России (бесплатно): +7 800 350-81-84
        <li> Для звонков по Москве: +7 495 118-33-22
        <li> Е-майл: <a href="mailto:support@haritonov.capital">support@haritonov.capital</a>
      </ul>
    `,
  },
];

export const saleTimeline = [
  {
    title: 'Documents',
    steps: [
      {
        date: '1',
        text: 'Terms & Conditions',
        url: '/terms_and_conditions.pdf',
      },
      {
        date: '21 Aug',
        text: 'Privacy policy',
        url: '/privacy_policy.pdf',
      },
    ],
  },
];
