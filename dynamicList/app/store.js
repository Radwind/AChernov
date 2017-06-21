'use strict'
const store = [{
    id: 1,
    name: 'The Elder Scrolls 5: Skyrim',
    genre: 'rpg',
    description: 'The Elder Scrolls V: Skyrim - это приключенческая ролевая игра, пятая часть в серии The Elder Scrolls, с огромным открытым миром, который с самого начала полностью доступен для исследования.',
    prod: '11 ноября 2011',
    dev: 'Bethesda Softworks',
    url: "files/skyrim/logo.png",
    screenList: ['files/skyrim/1.jpg', 'files/skyrim/2.jpg', 'files/skyrim/3.jpg', 'files/skyrim/4.jpg', 'files/skyrim/5.jpg']
}, {
    id: 2,
    name: 'Minecraft',
    genre: 'puzzle',
    description: 'Minecraft - это инди-игра в жанре песочницы с элементами выживания и открытым миром. По стилю, мир игры полностью состоит из блоков (ландшафт, предметы, мобы, игрок), и для текстурирования используются текстуры с низким разрешением (16×16 текселей).',
    prod: '18 ноября 2011',
    dev: 'Mojang',
    url: "files/minecraft/logo.png",
    screenList: ['files/minecraft/1.jpg', 'files/minecraft/2.jpg', 'files/minecraft/3.jpg', 'files/minecraft/4.jpg', 'files/minecraft/5.jpg']
}, {
    id: 3,
    name: 'Need for Speed: Most Wanted',
    genre: 'racing',
    description: 'Need for Speed: Most Wanted - девятая игра серии аркадных гонок от Electronic Arts. Впервые за долгое время в серию вернулась полиция и появились масштабные, красивые погони.',
    prod: '15 ноября 2005',
    dev: 'EA Black Box',
    url: "files/nfsmw/logo.png",
    screenList: ['files/nfsmw/1.jpg', 'files/nfsmw/2.jpg', 'files/nfsmw/3.jpg', 'files/nfsmw/4.jpg', 'files/nfsmw/5.jpg']
}, {
    id: 4,
    name: 'Assassin\'s Creed 2',
    genre: 'action',
    description: 'Assassin\'s Creed II – это приключенческий экшен от третьего лица. Действие игры происходит в средние века в Италии. Современный потомок величайших убийц в истории Дезмонд оказывается в теле Эцио Аудиторе де ла Фиренце, мастерски владеющего хашшашинскими навыками.',
    prod: '17 ноября 2009',
    dev: 'Ubisoft',
    url: "files/ac2/logo.png",
    screenList: ['files/ac2/1.jpg', 'files/ac2/2.jpg', 'files/ac2/3.jpg', 'files/ac2/4.jpg', 'files/ac2/5.jpg']
}, {
    id: 5,
    name: 'Mass Effect',
    genre: 'rpg',
    description: 'Mass Effect - это мастшабная ролевая игра от BioWare на тему космических приключений.  История повествует о далеком будущем, где человечество занимает далеко не лидирующее положении среди межрасового альянса, которым управляет так назыываемый "Совет Цитадели".',
    prod: '23 ноября 2007',
    dev: 'Bioware',
    url: "files/me/logo.png",
    screenList: ['files/me/1.jpg', 'files/me/2.jpg', 'files/me/3.jpg', 'files/me/4.jpg', 'files/me/5.jpg']
}, {
    id: 6,
    name: 'Grand Theft Auto 5',
    genre: 'action',
    description: 'Grand Theft Auto V (она же GTA 5 или GTA V) — пятнадцатая игра из серии Grand Theft Auto, выполненная в жанре Action/Sandbox. Впервые в истории серии в игре присутствуют сразу три главных героя, между которыми можно переключаться почти в любое время.',
    prod: '17 сентября 2013',
    dev: 'Rockstar North',
    url: "files/gta5/logo.png",
    screenList: ['files/gta5/1.jpg', 'files/gta5/2.jpg', 'files/gta5/3.jpg', 'files/gta5/4.jpg', 'files/gta5/5.jpg']
}, {
    id: 7,
    name: 'Battlefield 3',
    genre: 'action',
    description: 'Battlefield 3 - продолжение популярной серии сетевых шутеров, которое создан на движке Frostbite 2.0, который призван отвечать за тотальное изничтожение всего и вся на карте.',
    prod: '28 октября 2011',
    dev: 'Digital Illusions Creative Entertainment',
    url: "files/b3/logo.png",
    screenList: ['files/b3/1.jpg', 'files/b3/2.jpg', 'files/b3/3.jpg', 'files/b3/4.jpg', 'files/b3/5.jpg']
}, {
    id: 8,
    name: 'Mafia 2',
    genre: 'action',
    description: 'Mafia 2 - это приключенческий экшен, который переносит игроков в преступный мир Америки 40-50-х годов прошлого века. События игры стартуют в феврале 1945 года, когда еще идет Вторая Мировая война.',
    prod: '27 августа 2010',
    dev: '2K Czech',
    url: "files/m2/logo.png",
    screenList: ['files/m2/1.jpg', 'files/m2/2.jpg', 'files/m2/3.jpg', 'files/m2/4.jpg', 'files/m2/5.jpg']
}, {
    id: 9,
    name: 'StarCraft 2: Wings of Liberty',
    genre: 'strategy',
    description: 'StarCraft II: Wings of Liberty – это первая часть StarCraft II, являющаяся продолжением одной из самых знаменитых стратегии мира, действие которой развернется спустя четыре года после оригинальной игры и аддона Brood War.',
    prod: '31 июля 2010',
    dev: 'Blizzard Entertainment',
    url: "files/sc2/logo.png",
    screenList: ['files/sc2/1.jpg', 'files/sc2/2.jpg', 'files/sc2/3.jpg', 'files/sc2/4.jpg', 'files/sc2/5.jpg']
}, {
    id: 10,
    name: 'Fallout 3',
    genre: 'rpg',
    description: 'Fallout 3 - это продолжение известной постапокалиптической ролевой серии, основанное на движке The Elder Scrolls 4: Oblivion. Сюжет третьего Fallout стартует через 36 лет после окончания Fallout 2, в 2277 году, и в совершенно другой точке страны - на Восточном побережье США.',
    prod: '31 октября 2008',
    dev: 'Bethesda Softworks',
    url: "files/f3/logo.png",
    screenList: ['files/f3/1.jpg', 'files/f3/2.jpg', 'files/f3/3.jpg', 'files/f3/4.jpg', 'files/f3/5.jpg']
}, {
    id: 11,
    name: 'Deus Ex: Human Revolution',
    genre: 'rpg',
    description: 'Deus Ex: Human Revolution - это приключенческая ролевая игра, выполненная в стилистике киберпанк, разработанная компанией Eidos Montreal и выпущенная компанией Square Enix в 2011 году на платформах Windows, Xbox 360 и PlayStation 3.',
    prod: '26 августа 2011',
    dev: 'Eidos',
    url: "files/dehr/logo.png",
    screenList: ['files/dehr/1.jpg', 'files/dehr/2.jpg', 'files/dehr/3.jpg', 'files/dehr/4.jpg', 'files/dehr/5.jpg']
}, {
    id: 12,
    name: 'Call of Duty: Modern Warfare 2',
    genre: 'action',
    description: 'Call of Duty: Modern Warfare 2 - продолжение одной из самых популярных игр в серии Call of Duty. Сюжетная кампания продолжает историю оригинальной игры, в которой игроки останавливали ультраправого националиста, грозившего уничтожить США ядерной ракетой.',
    prod: '10 ноября 2009',
    dev: 'Infinity Ward',
    url: "files/codmw2/logo.png",
    screenList: ['files/codmw2/1.jpg', 'files/codmw2/2.jpg', 'files/codmw2/3.jpg', 'files/codmw2/4.jpg', 'files/codmw2/5.jpg']
}, {
    id: 13,
    name: 'The Walking Dead: The Game',
    genre: 'adventure',
    description: 'The Walking Dead: The Game — это эпизодическая видеоигра по мотивам комикса Роберта Киркмана «Ходячие мертвецы». Некоторые из персонажей оригинального комикса также присутствуют в игре, например, Хершел Грин и Гленн. Игроки смогут повстречать их перед соответствующими событиями в комиксах.',
    prod: '31 декабря 2012',
    dev: 'Telltale Games',
    url: "files/wd/logo.png",
    screenList: ['files/wd/1.jpg', 'files/wd/2.jpg', 'files/wd/3.jpg', 'files/wd/4.jpg', 'files/wd/5.jpg']
}, {
    id: 14,
    name: 'Portal 2',
    genre: 'puzzle',
    description: 'Portal 2 - вторая часть головоломки от первого лица от компании Valve, продолжающая эксперименты над игроком и порталами. Со времен первой части игры прошло много лет, и лаборатория Aperture лежит в руинах.',
    prod: '21 апреля 2011',
    dev: 'Valve Software',
    url: "files/p2/logo.png",
    screenList: ['files/p2/1.jpg', 'files/p2/2.jpg', 'files/p2/3.jpg', 'files/p2/4.jpg', 'files/p2/5.jpg']
}, {
    id: 15,
    name: 'Far Cry 3',
    genre: 'action',
    description: 'Far Cry 3 - это приключенческий шутер от первого лица с открытым миром и элементами RPG, а так же третья (не считая аддонов и спин-оффов) игра из одноименной серии игр. Главным героем третьей части является совершенно новый протагонист, которого зовут Джейсон Броди.',
    prod: '30 ноября 2012',
    dev: 'Ubisoft Entertainment',
    url: "files/fc3/logo.png",
    screenList: ['files/fc3/1.jpg', 'files/fc3/2.jpg', 'files/fc3/3.jpg', 'files/fc3/4.jpg', 'files/fc3/5.jpg']
}, {
    id: 16,
    name: 'Dragon Age: Origins',
    genre: 'rpg',
    description: 'Dragon Age: Origins - это однопользовательская фэнтезийная RPG, которую можно назвать духовным наследником знаменитого Baldur\'s Gate. Игрокам предстоит странствовать по сказочному миру в составе отряда, сражаясь бок о бок с его членами и общаясь с ними.',
    prod: '3 ноября 2009',
    dev: 'BioWare',
    url: "files/dao/logo.png",
    screenList: ['files/dao/1.jpg', 'files/dao/2.jpg', 'files/dao/3.jpg', 'files/dao/4.jpg', 'files/dao/5.jpg']
}];