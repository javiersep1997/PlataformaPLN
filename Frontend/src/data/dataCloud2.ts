import type { ChartConfiguration } from 'chart.js'
const data = [
  {
    entidades1: [
      {
        key: 'profesores',
        value: 14,
      },
      {
        key: 'voluntad',
        value: 8,
      },
      {
        key: 'clases',
        value: 7.30306351184845,
      },
      {
        key: 'criterio',
        value: 3.850865364074707,
      },
      {
        key: 'parte',
        value: 3.845885992050171,
      },
      {
        key: 'Clases',
        value: 3.7653250694274902,
      },
      {
        key: 'contenido',
        value: 3.1541764736175537,
      },
      {
        key: 'preguntas',
        value: 3.147590160369873,
      },
      {
        key: 'catedra',
        value: 2.980562686920166,
      },
      {
        key: 'ramo',
        value: 2.9230575561523438,
      },
      {
        key: 'ayudante',
        value: 2.8326305150985718,
      },
      {
        key: 'recursos',
        value: 2.8076326847076416,
      },
      {
        key: 'alumnos',
        value: 2.578803539276123,
      },
      {
        key: 'trato',
        value: 2.526160955429077,
      },
      {
        key: 'teoría',
        value: 2.504868805408478,
      },
      {
        key: 'ejercicios',
        value: 2.3483476638793945,
      },
      {
        key: 'ejercicio',
        value: 2.2352774143218994,
      },
      {
        key: 'alumno',
        value: 2.232147753238678,
      },
      {
        key: 'asignatura',
        value: 2.2024667263031006,
      },
      {
        key: 'francisco',
        value: 2.130797863006592,
      },
      {
        key: 'power',
        value: 2,
      },
      {
        key: 'biendiv',
        value: 2,
      },
      {
        key: 'depresión',
        value: 2,
      },
      {
        key: 'nada',
        value: 2,
      },
      {
        key: 'grano',
        value: 2,
      },
      {
        key: 'ambiente',
        value: 1.9463757276535034,
      },
      {
        key: 'horarios',
        value: 1.9134103059768677,
      },
      {
        key: 'profesro',
        value: 1.882034420967102,
      },
      {
        key: 'ayuda',
        value: 1.7754045724868774,
      },
      {
        key: 'algo',
        value: 1.6565628051757812,
      },
      {
        key: 'Todo',
        value: 1.550938606262207,
      },
      {
        key: 'guias',
        value: 1.4897832870483398,
      },
      {
        key: 'dudasnbsp',
        value: 1.4738389253616333,
      },
      {
        key: 'brevedad',
        value: 1.4288724660873413,
      },
      {
        key: 'paso',
        value: 1.3328932523727417,
      },
      {
        key: 'profesor',
        value: 1.32890784740448,
      },
      {
        key: 'carrera',
        value: 1.255950689315796,
      },
      {
        key: 'envio',
        value: 1.25510835647583,
      },
      {
        key: 'pagina web',
        value: 1.1941620111465454,
      },
      {
        key: 'positivo',
        value: 1.1772902011871338,
      },
      {
        key: 'respuestas',
        value: 1.147873044013977,
      },
      {
        key: 'forma',
        value: 1.1472920179367065,
      },
      {
        key: 'mejor',
        value: 1.138431191444397,
      },
      {
        key: 'actitud',
        value: 1.1052274703979492,
      },
      {
        key: 'aspecto',
        value: 1.0908955335617065,
      },
      {
        key: 'materia',
        value: 1.0782275199890137,
      },
      {
        key: 'frente',
        value: 1.0539336204528809,
      },
      {
        key: 'Asignatura',
        value: 1.0389530658721924,
      },
      {
        key: 'proceso',
        value: 1.0374531745910645,
      },
      {
        key: 'conceptos',
        value: 0.9928898215293884,
      },
      {
        key: 'ejemplos',
        value: 0.9860516488552094,
      },
      {
        key: 'equilibrio',
        value: 0.9810293316841125,
      },
      {
        key: 'práctica',
        value: 0.9705739617347717,
      },
      {
        key: 'matplotlib',
        value: 0.9666996002197266,
      },
      {
        key: 'escenario',
        value: 0.9567051529884338,
      },
      {
        key: 'Profesor',
        value: 0.9384883046150208,
      },
      {
        key: 'respeto',
        value: 0.9384883046150208,
      },
      {
        key: 'horario',
        value: 0.9224766790866852,
      },
      {
        key: 'tecnologia',
        value: 0.9179217219352722,
      },
      {
        key: 'contenidos',
        value: 0.9161590933799744,
      },
      {
        key: 'Trujillo',
        value: 0.9055082201957703,
      },
      {
        key: 'paciencia',
        value: 0.8820818662643433,
      },
      {
        key: 'material',
        value: 0.8803640604019165,
      },
      {
        key: 'llegada',
        value: 0.8640726208686829,
      },
      {
        key: 'dinamismo',
        value: 0.8364564180374146,
      },
      {
        key: 'interés',
        value: 0.8270984292030334,
      },
      {
        key: 'proyecto',
        value: 0.8153116703033447,
      },
      {
        key: 'inclusión',
        value: 0.8126712441444397,
      },
      {
        key: 'vivo',
        value: 0.8018391728401184,
      },
      {
        key: 'aspectos',
        value: 0.7771674990653992,
      },
      {
        key: 'cantidad',
        value: 0.7706199288368225,
      },
      {
        key: 'capacidad',
        value: 0.7681893706321716,
      },
      {
        key: 'caso',
        value: 0.7677220106124878,
      },
      {
        key: 'cerecania',
        value: 0.7644569277763367,
      },
      {
        key: 'espacios',
        value: 0.75678551197052,
      },
      {
        key: 'Profesores',
        value: 0.735490083694458,
      },
      {
        key: 'Cátedra',
        value: 0.7345857620239258,
      },
      {
        key: 'exigencia',
        value: 0.7316679358482361,
      },
      {
        key: 'clasesbien',
        value: 0.7015892267227173,
      },
      {
        key: 'Ambos',
        value: 0.6939871311187744,
      },
      {
        key: 'facilidad',
        value: 0.6902087330818176,
      },
      {
        key: 'computador',
        value: 0.659413754940033,
      },
      {
        key: 'pedagogía',
        value: 0.6587734222412109,
      },
      {
        key: 'demasnbsp',
        value: 0.6583273410797119,
      },
      {
        key: 'frecuencia',
        value: 0.646277129650116,
      },
      {
        key: 'encuentro',
        value: 0.6447166204452515,
      },
      {
        key: 'conjunto',
        value: 0.6341266632080078,
      },
      {
        key: 'consultas',
        value: 0.6324604749679565,
      },
      {
        key: 'pesar',
        value: 0.631452202796936,
      },
      {
        key: 'logica',
        value: 0.6244614124298096,
      },
      {
        key: 'asigantura',
        value: 0.6222388744354248,
      },
      {
        key: 'profesora',
        value: 0.6221135854721069,
      },
      {
        key: 'logro',
        value: 0.606605052947998,
      },
      {
        key: 'luis',
        value: 0.6038251519203186,
      },
      {
        key: 'moodle',
        value: 0.6025418043136597,
      },
      {
        key: 'teoria',
        value: 0.6003175973892212,
      },
      {
        key: 'prueba',
        value: 0.5923146605491638,
      },
      {
        key: 'cabo',
        value: 0.58049476146698,
      },
      {
        key: 'razones',
        value: 0.5758362412452698,
      },
      {
        key: 'ayudantes',
        value: 0.5695784687995911,
      },
      {
        key: 'ganas',
        value: 0.5600956082344055,
      },
      {
        key: 'ayudas',
        value: 0.5323765277862549,
      },
      {
        key: 'personas',
        value: 0.5312153697013855,
      },
      {
        key: 'dedicacion',
        value: 0.5192172527313232,
      },
      {
        key: 'guia',
        value: 0.5152198672294617,
      },
      {
        key: 'profe',
        value: 0.503645658493042,
      },
      {
        key: 'ejercisios',
        value: 0.5024545788764954,
      },
      {
        key: 'abstracto',
        value: 0.4973298907279968,
      },
      {
        key: 'clase',
        value: 0.49729856848716736,
      },
      {
        key: 'habilidad',
        value: 0.49257734417915344,
      },
      {
        key: 'estudiante',
        value: 0.48992303013801575,
      },
      {
        key: 'encuesta',
        value: 0.4897671937942505,
      },
      {
        key: 'errores',
        value: 0.4874836504459381,
      },
      {
        key: 'Profe',
        value: 0.4867287278175354,
      },
      {
        key: 'Ramo',
        value: 0.4860614538192749,
      },
      {
        key: 'onda',
        value: 0.48038923740386963,
      },
      {
        key: 'temas',
        value: 0.4758526384830475,
      },
      {
        key: 'pizarra',
        value: 0.47393032908439636,
      },
      {
        key: 'divLa',
        value: 0.47363612055778503,
      },
      {
        key: 'clasesnbsp',
        value: 0.4722818434238434,
      },
      {
        key: 'preparacin',
        value: 0.4619923233985901,
      },
      {
        key: 'semestre',
        value: 0.460025817155838,
      },
      {
        key: 'intelecto',
        value: 0.45769602060317993,
      },
      {
        key: 'consejos',
        value: 0.4451707899570465,
      },
      {
        key: 'tema',
        value: 0.44189533591270447,
      },
      {
        key: 'formación',
        value: 0.4412725567817688,
      },
      {
        key: 'Benjamin',
        value: 0.44034647941589355,
      },
      {
        key: 'alunos',
        value: 0.4360187351703644,
      },
      {
        key: 'lado',
        value: 0.4355676770210266,
      },
      {
        key: 'utilidad',
        value: 0.4338585138320923,
      },
      {
        key: 'dudas',
        value: 0.43285343050956726,
      },
      {
        key: 'manejo',
        value: 0.43240830302238464,
      },
      {
        key: 'info',
        value: 0.42997950315475464,
      },
      {
        key: 'trabajo',
        value: 0.4282369017601013,
      },
      {
        key: 'pruebas',
        value: 0.4184180796146393,
      },
      {
        key: 'resolución',
        value: 0.4139080345630646,
      },
      {
        key: 'hecho',
        value: 0.4090477526187897,
      },
      {
        key: 'Santiago',
        value: 0.4040956199169159,
      },
      {
        key: 'analisis',
        value: 0.40394866466522217,
      },
      {
        key: 'plataforma',
        value: 0.3989614248275757,
      },
      {
        key: 'equipo',
        value: 0.39436638355255127,
      },
      {
        key: 'apoyo',
        value: 0.3891782760620117,
      },
      {
        key: 'creción',
        value: 0.38908901810646057,
      },
      {
        key: 'vision',
        value: 0.3887886106967926,
      },
      {
        key: 'futuro',
        value: 0.38747426867485046,
      },
      {
        key: 'grupo',
        value: 0.3747090697288513,
      },
      {
        key: 'largo',
        value: 0.37065768241882324,
      },
      {
        key: 'grado',
        value: 0.37035971879959106,
      },
      {
        key: 'correo',
        value: 0.3648871183395386,
      },
      {
        key: 'empatia',
        value: 0.363362580537796,
      },
      {
        key: 'medio',
        value: 0.36192411184310913,
      },
      {
        key: 'intencion',
        value: 0.3598672151565552,
      },
      {
        key: 'punto.',
        value: 0.3565935790538788,
      },
      {
        key: 'tips',
        value: 0.35362860560417175,
      },
      {
        key: 'metodo',
        value: 0.3528624475002289,
      },
      {
        key: 'alumnado',
        value: 0.3513910472393036,
      },
      {
        key: 'creación',
        value: 0.3477914333343506,
      },
      {
        key: 'objetivo',
        value: 0.3470969796180725,
      },
      {
        key: 'udeuas',
        value: 0.34457477927207947,
      },
      {
        key: 'soluciones',
        value: 0.34338122606277466,
      },
      {
        key: 'algoritmos',
        value: 0.3423841893672943,
      },
      {
        key: 'respecto',
        value: 0.33519646525382996,
      },
      {
        key: 'totalidad',
        value: 0.33030572533607483,
      },
      {
        key: 'general',
        value: 0.32756850123405457,
      },
      {
        key: 'enseñanza',
        value: 0.3264014720916748,
      },
      {
        key: 'nivel',
        value: 0.32594460248947144,
      },
      {
        key: 'cuenta',
        value: 0.32527655363082886,
      },
      {
        key: 'instante',
        value: 0.3199513554573059,
      },
      {
        key: 'entrega',
        value: 0.31886863708496094,
      },
      {
        key: 'contexto',
        value: 0.309974730014801,
      },
      {
        key: 'uusotro',
        value: 0.30942127108573914,
      },
      {
        key: 'presencial',
        value: 0.3085029423236847,
      },
      {
        key: 'enfoque',
        value: 0.3033178448677063,
      },
      {
        key: 'actualidad',
        value: 0.29369062185287476,
      },
      {
        key: 'lógica',
        value: 0.2887243628501892,
      },
      {
        key: 'dedicación',
        value: 0.2852765619754791,
      },
      {
        key: 'formas',
        value: 0.284171462059021,
      },
      {
        key: 'tareas',
        value: 0.2799815833568573,
      },
      {
        key: 'confianza',
        value: 0.2792191207408905,
      },
      {
        key: 'mundo',
        value: 0.27888429164886475,
      },
      {
        key: 'vocación',
        value: 0.2760186791419983,
      },
      {
        key: 'tiop',
        value: 0.2697087228298187,
      },
      {
        key: 'materias',
        value: 0.26712489128112793,
      },
      {
        key: 'todos',
        value: 0.2667121887207031,
      },
      {
        key: 'aula',
        value: 0.26311859488487244,
      },
      {
        key: 'lenguaje',
        value: 0.26045626401901245,
      },
      {
        key: 'curso',
        value: 0.25941115617752075,
      },
      {
        key: 'peras',
        value: 0.25394678115844727,
      },
      {
        key: 'manzanas',
        value: 0.25394678115844727,
      },
      {
        key: 'manera',
        value: 0.2518816590309143,
      },
      {
        key: 'ramos',
        value: 0.24717319011688232,
      },
      {
        key: 'elementos',
        value: 0.2471522092819214,
      },
      {
        key: 'videos',
        value: 0.2462158203125,
      },
      {
        key: 'programa',
        value: 0.24497462809085846,
      },
      {
        key: 'controles',
        value: 0.24429920315742493,
      },
      {
        key: 'muestra',
        value: 0.24319306015968323,
      },
      {
        key: 'vida',
        value: 0.24268551170825958,
      },
      {
        key: 'proyectos',
        value: 0.24196963012218475,
      },
      {
        key: 'pptexplica',
        value: 0.2416514754295349,
      },
      {
        key: 'simpatía',
        value: 0.24101626873016357,
      },
    ],
    entidades2: [
      {
        key: 'materia',
        value: 36,
      },
      {
        key: 'pruebas',
        value: 9.033246517181396,
      },
      {
        key: 'veces',
        value: 8,
      },
      {
        key: 'contenido',
        value: 8,
      },
      {
        key: 'ayudante',
        value: 8,
      },
      {
        key: 'cosas',
        value: 6.722117185592651,
      },
      {
        key: 'apoyo',
        value: 5.526946067810059,
      },
      {
        key: 'ocasiones',
        value: 4,
      },
      {
        key: 'parecer',
        value: 3.6536192893981934,
      },
      {
        key: 'lenguaje',
        value: 3.5824860334396362,
      },
      {
        key: 'material',
        value: 3.501055955886841,
      },
      {
        key: 'ramo',
        value: 3.0702412128448486,
      },
      {
        key: 'parte',
        value: 2.8306084871292114,
      },
      {
        key: 'Ayudantes',
        value: 2.643549680709839,
      },
      {
        key: 'ayudantes',
        value: 2.44305020570755,
      },
      {
        key: 'recursos',
        value: 2.43562912940979,
      },
      {
        key: 'forma',
        value: 2.409379243850708,
      },
      {
        key: 'entrega',
        value: 2.3075315952301025,
      },
      {
        key: 'cantidad',
        value: 2.2641137838363647,
      },
      {
        key: 'contenidos',
        value: 2.0422933101654053,
      },
      {
        key: 'cátedra',
        value: 2.0296409726142883,
      },
      {
        key: 'puntos',
        value: 2,
      },
      {
        key: 'orden',
        value: 2,
      },
      {
        key: 'fallos',
        value: 2,
      },
      {
        key: 'demanda',
        value: 2,
      },
      {
        key: 'Irene',
        value: 2,
      },
      {
        key: 'detalles',
        value: 1.9491002559661865,
      },
      {
        key: 'profesores',
        value: 1.9414871335029602,
      },
      {
        key: 'teoría',
        value: 1.861405849456787,
      },
      {
        key: 'modalidad',
        value: 1.5670056343078613,
      },
      {
        key: 'exigencia',
        value: 1.531955599784851,
      },
      {
        key: 'método',
        value: 1.513161540031433,
      },
      {
        key: 'Nada',
        value: 1.5023168325424194,
      },
      {
        key: 'evaluación',
        value: 1.5012622475624084,
      },
      {
        key: 'nbsp',
        value: 1.4822075366973877,
      },
      {
        key: 'trabajo',
        value: 1.425866961479187,
      },
      {
        key: 'curso',
        value: 1.3759169578552246,
      },
      {
        key: 'intención',
        value: 1.37164306640625,
      },
      {
        key: 'paso',
        value: 1.3701730966567993,
      },
      {
        key: 'python',
        value: 1.340765118598938,
      },
      {
        key: 'Ayudantías',
        value: 1.3217748403549194,
      },
      {
        key: 'Todo',
        value: 1.3033088445663452,
      },
      {
        key: 'acuerdo',
        value: 1.2956287860870361,
      },
      {
        key: 'tema',
        value: 1.2630804777145386,
      },
      {
        key: 'novato',
        value: 1.2589924335479736,
      },
      {
        key: 'nada',
        value: 1.25510835647583,
      },
      {
        key: 'dinamica',
        value: 1.25510835647583,
      },
      {
        key: 'personal',
        value: 1.2501928806304932,
      },
      {
        key: 'consultas',
        value: 1.2381821870803833,
      },
      {
        key: 'textos',
        value: 1.2365270853042603,
      },
      {
        key: 'profe',
        value: 1.1941620111465454,
      },
      {
        key: 'Fallo',
        value: 1.194000244140625,
      },
      {
        key: 'algo',
        value: 1.181836187839508,
      },
      {
        key: 'ayuda',
        value: 1.1354795694351196,
      },
      {
        key: 'funciones',
        value: 1.1113126277923584,
      },
      {
        key: 'EJERCICIOS',
        value: 1.0844694375991821,
      },
      {
        key: 'ligera',
        value: 1.0684902667999268,
      },
      {
        key: 'alguien',
        value: 1.0673651695251465,
      },
      {
        key: 'cosa',
        value: 1.0392200946807861,
      },
      {
        key: 'aspectos',
        value: 1.0315515995025635,
      },
      {
        key: 'programa',
        value: 1.0143581628799438,
      },
      {
        key: 'alumnos',
        value: 0.9906397461891174,
      },
      {
        key: 'profesor',
        value: 0.9738906025886536,
      },
      {
        key: 'impresión',
        value: 0.9677186012268066,
      },
      {
        key: 'Criterio',
        value: 0.9657721519470215,
      },
      {
        key: 'Encuentro',
        value: 0.9657721519470215,
      },
      {
        key: 'prueba',
        value: 0.9569597840309143,
      },
      {
        key: 'instancia',
        value: 0.9422621726989746,
      },
      {
        key: 'ridiculez',
        value: 0.9197694659233093,
      },
      {
        key: 'trabajos',
        value: 0.9092725515365601,
      },
      {
        key: 'pauta',
        value: 0.8868147134780884,
      },
      {
        key: 'controles',
        value: 0.8786020874977112,
      },
      {
        key: 'ingenieros',
        value: 0.8625749349594116,
      },
      {
        key: 'confianza',
        value: 0.8364564180374146,
      },
      {
        key: 'formalidad',
        value: 0.8364564180374146,
      },
      {
        key: 'andres',
        value: 0.8186048269271851,
      },
      {
        key: 'relación',
        value: 0.813530683517456,
      },
      {
        key: 'Rice',
        value: 0.8130953311920166,
      },
      {
        key: 'asignatura',
        value: 0.8125807046890259,
      },
      {
        key: 'control',
        value: 0.8106929063796997,
      },
      {
        key: 'materias',
        value: 0.8059996962547302,
      },
      {
        key: 'orgullo',
        value: 0.7965900897979736,
      },
      {
        key: 'brecha',
        value: 0.7908414602279663,
      },
      {
        key: 'personas',
        value: 0.7887327671051025,
      },
      {
        key: 'experencia',
        value: 0.7823514342308044,
      },
      {
        key: 'quiz',
        value: 0.7691771984100342,
      },
      {
        key: 'ejemplos',
        value: 0.7650236487388611,
      },
      {
        key: 'claridad',
        value: 0.7607600688934326,
      },
      {
        key: 'pautas',
        value: 0.7607600688934326,
      },
      {
        key: 'catedra',
        value: 0.7580282092094421,
      },
      {
        key: 'especifico',
        value: 0.7448916435241699,
      },
      {
        key: 'potencial',
        value: 0.7439303398132324,
      },
      {
        key: 'cargo',
        value: 0.7410076260566711,
      },
      {
        key: 'llegada',
        value: 0.7328569889068604,
      },
      {
        key: 'variedad',
        value: 0.7112124562263489,
      },
      {
        key: 'conjunto',
        value: 0.7070708274841309,
      },
      {
        key: 'talleres',
        value: 0.7026199102401733,
      },
      {
        key: 'ambito',
        value: 0.6954893469810486,
      },
      {
        key: 'frecuencia',
        value: 0.6883981227874756,
      },
      {
        key: 'plazo',
        value: 0.678691565990448,
      },
      {
        key: 'pizzarra',
        value: 0.668426513671875,
      },
      {
        key: 'quizz',
        value: 0.6680747866630554,
      },
      {
        key: 'creación',
        value: 0.6545222997665405,
      },
      {
        key: 'carrera',
        value: 0.6497711539268494,
      },
      {
        key: 'métodos',
        value: 0.6443716883659363,
      },
      {
        key: 'códigos',
        value: 0.6399716734886169,
      },
      {
        key: 'demora',
        value: 0.628014862537384,
      },
      {
        key: 'clases.',
        value: 0.6217170357704163,
      },
      {
        key: 'Proyector',
        value: 0.6169530749320984,
      },
      {
        key: 'faltas',
        value: 0.6167050004005432,
      },
      {
        key: 'libros',
        value: 0.6049000024795532,
      },
      {
        key: 'internet',
        value: 0.6044358611106873,
      },
      {
        key: 'mecanismo',
        value: 0.5931584239006042,
      },
      {
        key: 'mismo',
        value: 0.5860278606414795,
      },
      {
        key: 'ortografía',
        value: 0.5825676918029785,
      },
      {
        key: 'Profesor',
        value: 0.573574423789978,
      },
      {
        key: 'sobra',
        value: 0.5544230341911316,
      },
      {
        key: 'nivel',
        value: 0.551735520362854,
      },
      {
        key: 'ejervicios',
        value: 0.5507147312164307,
      },
      {
        key: 'programar.',
        value: 0.5475010275840759,
      },
      {
        key: 'power',
        value: 0.5460584163665771,
      },
      {
        key: 'actitud',
        value: 0.5455902218818665,
      },
      {
        key: 'persona',
        value: 0.5435595512390137,
      },
      {
        key: 'verdad',
        value: 0.5424954891204834,
      },
      {
        key: 'profesora',
        value: 0.5349460244178772,
      },
      {
        key: 'estilo',
        value: 0.5268842577934265,
      },
      {
        key: 'preguntas',
        value: 0.5172683596611023,
      },
      {
        key: 'ejercicios',
        value: 0.5095656514167786,
      },
      {
        key: 'clases',
        value: 0.5095656514167786,
      },
      {
        key: 'casa',
        value: 0.5037153363227844,
      },
      {
        key: 'semestre',
        value: 0.503121018409729,
      },
      {
        key: 'aula',
        value: 0.5024545788764954,
      },
      {
        key: 'feriados',
        value: 0.5016118288040161,
      },
      {
        key: 'habilidad',
        value: 0.5006756782531738,
      },
      {
        key: 'Cambio',
        value: 0.4994737505912781,
      },
      {
        key: 'mails',
        value: 0.4900076687335968,
      },
      {
        key: 'guias',
        value: 0.48843976855278015,
      },
      {
        key: 'medios',
        value: 0.4817288815975189,
      },
      {
        key: 'manera',
        value: 0.47504645586013794,
      },
      {
        key: 'ayudantias',
        value: 0.46983957290649414,
      },
      {
        key: 'otras',
        value: 0.46979355812072754,
      },
      {
        key: 'guías',
        value: 0.4692955017089844,
      },
      {
        key: 'tareas',
        value: 0.462699294090271,
      },
      {
        key: 'enseñanza',
        value: 0.4607814848423004,
      },
      {
        key: 'resolucion',
        value: 0.4586881995201111,
      },
      {
        key: 'quizes',
        value: 0.4518952965736389,
      },
      {
        key: 'test',
        value: 0.43299436569213867,
      },
      {
        key: 'Nivel',
        value: 0.4311244487762451,
      },
      {
        key: 'formas',
        value: 0.42150482535362244,
      },
      {
        key: 'peps',
        value: 0.4198359251022339,
      },
      {
        key: 'calidad',
        value: 0.40606340765953064,
      },
      {
        key: 'eficiencia',
        value: 0.40167099237442017,
      },
      {
        key: 'tipo',
        value: 0.40097272396087646,
      },
      {
        key: 'horario',
        value: 0.3997856080532074,
      },
      {
        key: 'másnbsp',
        value: 0.39389023184776306,
      },
      {
        key: 'estructura',
        value: 0.3845924139022827,
      },
      {
        key: 'seguro',
        value: 0.3836385905742645,
      },
      {
        key: 'cases',
        value: 0.3801586627960205,
      },
      {
        key: 'rigidez',
        value: 0.3791596293449402,
      },
      {
        key: 'metodo',
        value: 0.37849190831184387,
      },
      {
        key: 'técnica',
        value: 0.3738400638103485,
      },
      {
        key: 'dudas',
        value: 0.3732839822769165,
      },
      {
        key: 'opinion',
        value: 0.3694722354412079,
      },
      {
        key: 'estudio',
        value: 0.3642120063304901,
      },
      {
        key: 'estosdiv',
        value: 0.36243826150894165,
      },
      {
        key: 'clase',
        value: 0.36118483543395996,
      },
      {
        key: 'algoritmos',
        value: 0.35454869270324707,
      },
      {
        key: 'Clases',
        value: 0.35228487849235535,
      },
      {
        key: 'conceptos',
        value: 0.35199153423309326,
      },
      {
        key: 'algunos',
        value: 0.3513072431087494,
      },
      {
        key: 'referencia',
        value: 0.35057076811790466,
      },
      {
        key: 'seguridad',
        value: 0.3481743037700653,
      },
      {
        key: 'informes',
        value: 0.34767451882362366,
      },
      {
        key: 'sistemas',
        value: 0.3433569073677063,
      },
      {
        key: 'preguntado',
        value: 0.33611851930618286,
      },
      {
        key: 'evaluacion',
        value: 0.3350071907043457,
      },
      {
        key: 'grupos',
        value: 0.31466808915138245,
      },
      {
        key: 'proyecto',
        value: 0.3142300248146057,
      },
      {
        key: 'tips',
        value: 0.31414344906806946,
      },
      {
        key: 'trato',
        value: 0.31374797224998474,
      },
      {
        key: 'sistema',
        value: 0.3129323422908783,
      },
      {
        key: 'PowerPoint',
        value: 0.30657386779785156,
      },
      {
        key: 'todos',
        value: 0.3057515025138855,
      },
      {
        key: 'dotes',
        value: 0.3057515025138855,
      },
      {
        key: 'casos',
        value: 0.30360525846481323,
      },
      {
        key: 'caso',
        value: 0.30037206411361694,
      },
      {
        key: 'vocacion',
        value: 0.29567980766296387,
      },
      {
        key: 'respecto',
        value: 0.2916315495967865,
      },
      {
        key: 'criticas',
        value: 0.28909987211227417,
      },
      {
        key: 'base',
        value: 0.28677868843078613,
      },
      {
        key: 'quizzes',
        value: 0.2865038514137268,
      },
      {
        key: 'notas',
        value: 0.27571478486061096,
      },
      {
        key: 'consejos',
        value: 0.2743857204914093,
      },
      {
        key: 'mismos',
        value: 0.2643622159957886,
      },
      {
        key: 'evaluar.',
        value: 0.26307883858680725,
      },
      {
        key: 'sentido',
        value: 0.2612958550453186,
      },
      {
        key: 'general',
        value: 0.2600546181201935,
      },
      {
        key: 'falta',
        value: 0.2576724588871002,
      },
      {
        key: 'alumno',
        value: 0.25542357563972473,
      },
      {
        key: 'corrección',
        value: 0.2535722255706787,
      },
    ],
  },
]

export const cloudSeattle: ChartConfiguration<'wordCloud'>['data'] = {
  labels: Object.values(data[0].entidades1).map((item) => item.key),

  datasets: [
    {
      label: 'Positivas',
      data: Object.values(data[0].entidades1).map(
        (item) => 10 + item.value * 2
      ),
    },
  ],
}

export const cloudBoston: ChartConfiguration<'wordCloud'>['data'] = {
  labels: Object.values(data[0].entidades2).map((item) => item.key),
  datasets: [
    {
      label: 'Negativas',
      data: Object.values(data[0].entidades2).map(
        (item) => 10 + item.value * 2
      ),
    },
  ],
}
