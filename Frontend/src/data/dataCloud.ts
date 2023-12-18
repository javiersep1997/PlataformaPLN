import type { ChartConfiguration } from 'chart.js'
const data = [
  {
    entidades1: [
      {
        key: 'Kelli',
        value: 39.18443846702576,
      },
      {
        key: 'Kelly',
        value: 18.725518465042114,
      },
      {
        key: 'apartment',
        value: 10.986813306808472,
      },
      {
        key: 'Mara',
        value: 6.611370086669922,
      },
      {
        key: 'Roger',
        value: 3.9308871030807495,
      },
      {
        key: 'listing',
        value: 3.8138744831085205,
      },
      {
        key: 'everything',
        value: 3.1765453815460205,
      },
      {
        key: 'location',
        value: 2.5959110260009766,
      },
      {
        key: 'Farah',
        value: 1.9602423906326294,
      },
      {
        key: 'Rachel',
        value: 1.8924576044082642,
      },
      {
        key: 'places',
        value: 1.8363659083843231,
      },
      {
        key: 'room',
        value: 1.771817922592163,
      },
      {
        key: 'host',
        value: 1.397375226020813,
      },
      {
        key: 'stay',
        value: 1.2534373998641968,
      },
      {
        key: 'Philps',
        value: 1.1186491250991821,
      },
      {
        key: 'boyfriend',
        value: 1.0195621252059937,
      },
      {
        key: 'lots',
        value: 0.9512255787849426,
      },
      {
        key: 'bedroom',
        value: 0.9425472915172577,
      },
      {
        key: 'park',
        value: 0.9012221097946167,
      },
      {
        key: 'people',
        value: 0.8548157811164856,
      },
      {
        key: 'bonus',
        value: 0.8238017857074738,
      },
      {
        key: 'Fatah',
        value: 0.8126581311225891,
      },
      {
        key: 'arrival',
        value: 0.7434179484844208,
      },
      {
        key: 'thing',
        value: 0.7110281735658646,
      },
      {
        key: 'price',
        value: 0.6986876130104065,
      },
      {
        key: 'Philip',
        value: 0.6514975428581238,
      },
      {
        key: 'posting',
        value: 0.6332627534866333,
      },
      {
        key: 'cookies',
        value: 0.5923429727554321,
      },
      {
        key: 'girlfriend',
        value: 0.5689612030982971,
      },
      {
        key: 'kitten',
        value: 0.5561314970254898,
      },
      {
        key: 'street',
        value: 0.5456973910331726,
      },
      {
        key: 'Miesha',
        value: 0.5369620323181152,
      },
      {
        key: 'courtney',
        value: 0.5251505374908447,
      },
      {
        key: 'chance',
        value: 0.49453628063201904,
      },
      {
        key: 'aspect',
        value: 0.4552697241306305,
      },
      {
        key: 'issue',
        value: 0.4296550154685974,
      },
      {
        key: '我们是一家三口',
        value: 0.4282390773296356,
      },
      {
        key: '可爱的女儿',
        value: 0.4282390773296356,
      },
      {
        key: 'Adam',
        value: 0.4180721640586853,
      },
      {
        key: 'friend',
        value: 0.40094321966171265,
      },
      {
        key: 'breeze',
        value: 0.3750319182872772,
      },
      {
        key: 'Great room',
        value: 0.3646760582923889,
      },
      {
        key: 'roger',
        value: 0.34919407963752747,
      },
      {
        key: 'home',
        value: 0.3407185673713684,
      },
      {
        key: 'theater',
        value: 0.32454559206962585,
      },
      {
        key: 'Courtney',
        value: 0.3116050064563751,
      },
      {
        key: 'email',
        value: 0.28475990891456604,
      },
      {
        key: 'works',
        value: 0.28112027049064636,
      },
      {
        key: 'areas',
        value: 0.2795276641845703,
      },
      {
        key: 'foot',
        value: 0.2731292247772217,
      },
      {
        key: 'breakfast',
        value: 0.27018746733665466,
      },
      {
        key: 'flight',
        value: 0.26768338680267334,
      },
      {
        key: 'keybox',
        value: 0.25559189915657043,
      },
      {
        key: 'guest room',
        value: 0.23836325109004974,
      },
      {
        key: 'style',
        value: 0.23436357080936432,
      },
      {
        key: 'block',
        value: 0.23057104647159576,
      },
      {
        key: 'Downtown',
        value: 0.22588688135147095,
      },
      {
        key: 'museum',
        value: 0.22319595515727997,
      },
      {
        key: 'most',
        value: 0.22064106166362762,
      },
      {
        key: 'group',
        value: 0.21510513126850128,
      },
      {
        key: 'experience',
        value: 0.214695543050766,
      },
      {
        key: 'windows',
        value: 0.21079513430595398,
      },
      {
        key: 'needs',
        value: 0.20981557667255402,
      },
      {
        key: 'grocer',
        value: 0.20790785551071167,
      },
      {
        key: 'biking',
        value: 0.2031627744436264,
      },
      {
        key: 'lock box',
        value: 0.20226943492889404,
      },
      {
        key: 'nothing',
        value: 0.20194730162620544,
      },
      {
        key: 'couple',
        value: 0.19655542075634003,
      },
      {
        key: '来到美丽的西雅图',
        value: 0.19352418184280396,
      },
      {
        key: 'questions',
        value: 0.19022078812122345,
      },
      {
        key: 'B.C.',
        value: 0.1882954239845276,
      },
      {
        key: 'others',
        value: 0.18216478824615479,
      },
      {
        key: 'Ballard',
        value: 0.18162848055362701,
      },
      {
        key: 'wifi',
        value: 0.180156409740448,
      },
      {
        key: 'weather',
        value: 0.17890018224716187,
      },
      {
        key: 'Towels',
        value: 0.1688111573457718,
      },
      {
        key: 'rest',
        value: 0.16683395206928253,
      },
      {
        key: 'anything',
        value: 0.1653980016708374,
      },
      {
        key: 'timing',
        value: 0.16474182903766632,
      },
      {
        key: 'House',
        value: 0.1598828285932541,
      },
      {
        key: 'city',
        value: 0.15948009490966797,
      },
      {
        key: 'shower',
        value: 0.15397396683692932,
      },
      {
        key: 'privacy',
        value: 0.15097901225090027,
      },
      {
        key: 'addition',
        value: 0.14500490203499794,
      },
      {
        key: 'John',
        value: 0.14449775218963623,
      },
      {
        key: 'part',
        value: 0.13750845193862915,
      },
      {
        key: 'hosts',
        value: 0.13669602572917938,
      },
      {
        key: 'second',
        value: 0.13656461238861084,
      },
      {
        key: 'trouble',
        value: 0.13633763790130615,
      },
      {
        key: 'Roger的房子里',
        value: 0.13211269676685333,
      },
      {
        key: 'wedding',
        value: 0.1319863498210907,
      },
      {
        key: 'hints',
        value: 0.1271326243877411,
      },
      {
        key: 'Coffee',
        value: 0.12707941234111786,
      },
      {
        key: 'space',
        value: 0.1264382004737854,
      },
      {
        key: 'bus stop',
        value: 0.12594068050384521,
      },
      {
        key: 'fruit',
        value: 0.12565197050571442,
      },
      {
        key: 'nuts',
        value: 0.12565197050571442,
      },
      {
        key: 'lady',
        value: 0.1239503026008606,
      },
      {
        key: 'decor',
        value: 0.12261199206113815,
      },
      {
        key: 'wine',
        value: 0.11960916966199875,
      },
      {
        key: 'fruits',
        value: 0.11797033995389938,
      },
      {
        key: '有各种各样的雕塑',
        value: 0.11780023574829102,
      },
      {
        key: 'Host',
        value: 0.11761227250099182,
      },
      {
        key: 'town',
        value: 0.11186416447162628,
      },
      {
        key: 'negative',
        value: 0.10957397520542145,
      },
      {
        key: 'for.',
        value: 0.10945555567741394,
      },
      {
        key: 'cleen',
        value: 0.10866715013980865,
      },
      {
        key: 'rooms',
        value: 0.1086244136095047,
      },
      {
        key: '还有宇宙中心的路标',
        value: 0.10827481746673584,
      },
      {
        key: 'roommate',
        value: 0.10800826549530029,
      },
      {
        key: 'hotel',
        value: 0.10800826549530029,
      },
      {
        key: 'touch',
        value: 0.10440626740455627,
      },
      {
        key: 'legs',
        value: 0.10207442939281464,
      },
      {
        key: 'size',
        value: 0.0987747386097908,
      },
      {
        key: 'some',
        value: 0.09693139046430588,
      },
      {
        key: 'touches',
        value: 0.09679905325174332,
      },
      {
        key: 'bags',
        value: 0.09620188176631927,
      },
      {
        key: 'ride',
        value: 0.09550689160823822,
      },
      {
        key: 'contact',
        value: 0.09539569169282913,
      },
      {
        key: 'Everything',
        value: 0.09502922743558884,
      },
      {
        key: 'cafes',
        value: 0.09463820606470108,
      },
      {
        key: 'cab ride',
        value: 0.09459944814443588,
      },
      {
        key: 'spot',
        value: 0.0934411808848381,
      },
      {
        key: 'insight',
        value: 0.0872957706451416,
      },
      {
        key: 'towels',
        value: 0.08713260293006897,
      },
      {
        key: 'kind',
        value: 0.08705601096153259,
      },
      {
        key: 'check',
        value: 0.08641380816698074,
      },
      {
        key: 'guys',
        value: 0.08586349338293076,
      },
      {
        key: 'heartbeat',
        value: 0.08579947054386139,
      },
      {
        key: 'building',
        value: 0.08511004596948624,
      },
      {
        key: 'advice',
        value: 0.08492828160524368,
      },
      {
        key: 'commuting',
        value: 0.08472713083028793,
      },
      {
        key: 'Farmhouse',
        value: 0.0826445072889328,
      },
      {
        key: 'list',
        value: 0.07971089333295822,
      },
      {
        key: 'school',
        value: 0.07667460292577744,
      },
      {
        key: 'proximity',
        value: 0.07647193223237991,
      },
      {
        key: 'daughter',
        value: 0.07647193223237991,
      },
      {
        key: 'downside',
        value: 0.07606945931911469,
      },
      {
        key: 'quiet',
        value: 0.07606945931911469,
      },
      {
        key: 'carmen',
        value: 0.07556253671646118,
      },
      {
        key: 'Farrah',
        value: 0.074924536049366,
      },
      {
        key: 'terms',
        value: 0.07410812377929688,
      },
      {
        key: 'futon',
        value: 0.07382021844387054,
      },
      {
        key: 'place',
        value: 0.07335001230239868,
      },
      {
        key: 'advices',
        value: 0.07311035692691803,
      },
      {
        key: 'love',
        value: 0.07271379977464676,
      },
      {
        key: 'music',
        value: 0.07271379977464676,
      },
      {
        key: 'suggestion',
        value: 0.0721108689904213,
      },
      {
        key: 'keys',
        value: 0.07128541171550751,
      },
      {
        key: 'Charlie',
        value: 0.07081832736730576,
      },
      {
        key: 'Nice',
        value: 0.07029664516448975,
      },
      {
        key: 'note',
        value: 0.06888216733932495,
      },
      {
        key: 'cabs',
        value: 0.06888216733932495,
      },
      {
        key: 'douzens',
        value: 0.06873307377099991,
      },
      {
        key: 'squirrels',
        value: 0.06873307377099991,
      },
      {
        key: 'garden',
        value: 0.06873307377099991,
      },
      {
        key: 'company',
        value: 0.06685272604227066,
      },
      {
        key: 'freemont',
        value: 0.06356631219387054,
      },
      {
        key: 'food',
        value: 0.06337455287575722,
      },
      {
        key: 'luggages',
        value: 0.0632191002368927,
      },
      {
        key: 'bike share',
        value: 0.060738705098629,
      },
      {
        key: 'sign',
        value: 0.059291571378707886,
      },
      {
        key: 'tips',
        value: 0.058603204786777496,
      },
      {
        key: 'walk',
        value: 0.05805586650967598,
      },
      {
        key: 'coats',
        value: 0.058038391172885895,
      },
      {
        key: 'closet',
        value: 0.058038391172885895,
      },
      {
        key: 'window',
        value: 0.05707208812236786,
      },
      {
        key: 'Belltown',
        value: 0.05681817606091499,
      },
      {
        key: 'ease',
        value: 0.056407563388347626,
      },
      {
        key: 'Brigette',
        value: 0.055443067103624344,
      },
      {
        key: 'desk',
        value: 0.055330805480480194,
      },
      {
        key: 'many',
        value: 0.05500659719109535,
      },
      {
        key: 'sights',
        value: 0.05500659719109535,
      },
      {
        key: 'bundle',
        value: 0.05447655916213989,
      },
      {
        key: 'locations',
        value: 0.05410122126340866,
      },
      {
        key: 'middle',
        value: 0.05382062867283821,
      },
      {
        key: 'somewhere',
        value: 0.05373256653547287,
      },
      {
        key: 'check-in',
        value: 0.05216387286782265,
      },
      {
        key: 'bathroom',
        value: 0.05196456238627434,
      },
      {
        key: 'vacation',
        value: 0.05156639963388443,
      },
      {
        key: 'Fremont',
        value: 0.05072774365544319,
      },
      {
        key: 'regret',
        value: 0.05053210258483887,
      },
      {
        key: 'feel',
        value: 0.050508905202150345,
      },
      {
        key: 'Brigitte',
        value: 0.04952850937843323,
      },
      {
        key: 'spots',
        value: 0.048166487365961075,
      },
      {
        key: 'browsing',
        value: 0.04787660762667656,
      },
      {
        key: 'little',
        value: 0.04751495644450188,
      },
      {
        key: 'heat wave',
        value: 0.04732915386557579,
      },
      {
        key: 'bread',
        value: 0.04640105739235878,
      },
      {
        key: 'beverages',
        value: 0.04640105739235878,
      },
      {
        key: 'downtown',
        value: 0.046099986881017685,
      },
      {
        key: 'distance',
        value: 0.045549582690000534,
      },
      {
        key: 'guidance',
        value: 0.0455162487924099,
      },
      {
        key: 'Rumor',
        value: 0.04523538053035736,
      },
      {
        key: 'things',
        value: 0.04505734518170357,
      },
      {
        key: 'Lots',
        value: 0.044990941882133484,
      },
      {
        key: 'right',
        value: 0.044405966997146606,
      },
      {
        key: 'Stone Way',
        value: 0.0442233644425869,
      },
      {
        key: 'coffee',
        value: 0.04323744401335716,
      },
      {
        key: 'option',
        value: 0.04237695038318634,
      },
    ],
    entidades2: [
      {
        key: 'room',
        value: 23.066426753997803,
      },
      {
        key: 'host',
        value: 12.908673763275146,
      },
      {
        key: 'experience',
        value: 7.018114328384399,
      },
      {
        key: 'space',
        value: 6.997910141944885,
      },
      {
        key: 'house',
        value: 4.882955610752106,
      },
      {
        key: 'people',
        value: 4.6446627378463745,
      },
      {
        key: 'stay',
        value: 3.875473737716675,
      },
      {
        key: 'Islam',
        value: 3.7108010053634644,
      },
      {
        key: 'exposure.',
        value: 3.2167224884033203,
      },
      {
        key: 'flight',
        value: 3.2081708312034607,
      },
      {
        key: 'thing',
        value: 1.9410580396652222,
      },
      {
        key: 'location',
        value: 1.6348686218261719,
      },
      {
        key: 'hosts',
        value: 1.5501104593276978,
      },
      {
        key: 'Room',
        value: 1.5319525003433228,
      },
      {
        key: 'Host',
        value: 1.068828821182251,
      },
      {
        key: 'Boston',
        value: 1.0044149160385132,
      },
      {
        key: 'SPACE',
        value: 1.0034741163253784,
      },
      {
        key: 'Islams',
        value: 0.9715901613235474,
      },
      {
        key: 'complaints',
        value: 0.9688684344291687,
      },
      {
        key: 'downtown',
        value: 0.9284217953681946,
      },
      {
        key: 'laundry',
        value: 0.9190146923065186,
      },
      {
        key: 'subway',
        value: 0.8605878353118896,
      },
      {
        key: 'everything',
        value: 0.8598887324333191,
      },
      {
        key: 'owner',
        value: 0.826835036277771,
      },
      {
        key: 'amenities',
        value: 0.8198509812355042,
      },
      {
        key: 'self-check',
        value: 0.7899856567382812,
      },
      {
        key: 'kitchen',
        value: 0.7836869955062866,
      },
      {
        key: 'Thanks',
        value: 0.7383053004741669,
      },
      {
        key: 'islam',
        value: 0.6815379858016968,
      },
      {
        key: 'food',
        value: 0.6607365310192108,
      },
      {
        key: 'place',
        value: 0.6164436340332031,
      },
      {
        key: 'directions',
        value: 0.6018986105918884,
      },
      {
        key: 'Mi estadía',
        value: 0.5985037088394165,
      },
      {
        key: 'Everything',
        value: 0.5855377912521362,
      },
      {
        key: 'charge',
        value: 0.5822117924690247,
      },
      {
        key: 'Una casa',
        value: 0.55170738697052,
      },
      {
        key: 'Izzy',
        value: 0.5227956175804138,
      },
      {
        key: 'city',
        value: 0.5044516324996948,
      },
      {
        key: 'anyone',
        value: 0.4908071756362915,
      },
      {
        key: 'LOCATION',
        value: 0.4694805443286896,
      },
      {
        key: 'area',
        value: 0.46447402238845825,
      },
      {
        key: 'gate',
        value: 0.44319549202919006,
      },
      {
        key: 'reviews',
        value: 0.44016969203948975,
      },
      {
        key: 'shuttle',
        value: 0.4206254184246063,
      },
      {
        key: 'detail',
        value: 0.41279336810112,
      },
      {
        key: 'nobody',
        value: 0.40568646788597107,
      },
      {
        key: 'no frills',
        value: 0.38865354657173157,
      },
      {
        key: 'spot.',
        value: 0.37661391496658325,
      },
      {
        key: 'friend',
        value: 0.3656887337565422,
      },
      {
        key: 'surprises',
        value: 0.3396660387516022,
      },
      {
        key: 'snow',
        value: 0.3395099490880966,
      },
      {
        key: 'PEOPLE',
        value: 0.3358788788318634,
      },
      {
        key: 't-station',
        value: 0.3304421603679657,
      },
      {
        key: 'blocks',
        value: 0.3301701545715332,
      },
      {
        key: 'request',
        value: 0.3214992582798004,
      },
      {
        key: 'computer',
        value: 0.3039470985531807,
      },
      {
        key: 'system',
        value: 0.2954508364200592,
      },
      {
        key: 'operation',
        value: 0.27888402342796326,
      },
      {
        key: 'deal',
        value: 0.27290254831314087,
      },
      {
        key: 'stairs',
        value: 0.26869070529937744,
      },
      {
        key: 'problem',
        value: 0.26648399233818054,
      },
      {
        key: 'travelers',
        value: 0.254401832818985,
      },
      {
        key: 'fridge',
        value: 0.25419050455093384,
      },
      {
        key: 'town',
        value: 0.25312092900276184,
      },
      {
        key: 'T Station',
        value: 0.24930283427238464,
      },
      {
        key: 'needs',
        value: 0.24712519347667694,
      },
      {
        key: 'shops',
        value: 0.24006345868110657,
      },
      {
        key: 'bed/room',
        value: 0.23925472795963287,
      },
      {
        key: 'roommate',
        value: 0.23513519763946533,
      },
      {
        key: 'rooms.',
        value: 0.23176628351211548,
      },
      {
        key: 'rooms',
        value: 0.2311888486146927,
      },
      {
        key: 't station',
        value: 0.23055250942707062,
      },
      {
        key: 'pictures',
        value: 0.22040577232837677,
      },
      {
        key: 'street',
        value: 0.2190680354833603,
      },
      {
        key: 'chance',
        value: 0.2136087268590927,
      },
      {
        key: 'option',
        value: 0.21055562794208527,
      },
      {
        key: 'floor',
        value: 0.2092171534895897,
      },
      {
        key: 'notice',
        value: 0.20585867762565613,
      },
      {
        key: '* value',
        value: 0.20283134281635284,
      },
      {
        key: 'idea',
        value: 0.20255590975284576,
      },
      {
        key: 'touch',
        value: 0.1998784989118576,
      },
      {
        key: 'airport.',
        value: 0.1942705512046814,
      },
      {
        key: 'Definately',
        value: 0.19116643071174622,
      },
      {
        key: '11PM',
        value: 0.1893537938594818,
      },
      {
        key: 'washer',
        value: 0.18821090459823608,
      },
      {
        key: 'sign',
        value: 0.1824164092540741,
      },
      {
        key: 'best',
        value: 0.18070527911186218,
      },
      {
        key: 'spectrum',
        value: 0.18070527911186218,
      },
      {
        key: 'outside',
        value: 0.17853322625160217,
      },
      {
        key: 'services',
        value: 0.17716915905475616,
      },
      {
        key: 'Plus Islam',
        value: 0.1743999719619751,
      },
      {
        key: 'return',
        value: 0.1675582081079483,
      },
      {
        key: 'cafe',
        value: 0.16557802259922028,
      },
      {
        key: 'response',
        value: 0.1627001315355301,
      },
      {
        key: 'autres',
        value: 0.15755076706409454,
      },
      {
        key: 'people.',
        value: 0.15707483887672424,
      },
      {
        key: 'side',
        value: 0.15586476027965546,
      },
      {
        key: 'vaisselle',
        value: 0.15568487346172333,
      },
      {
        key: 'cuisine',
        value: 0.15568487346172333,
      },
      {
        key: 'blue line',
        value: 0.15568487346172333,
      },
      {
        key: 'channels',
        value: 0.15377573668956757,
      },
      {
        key: 'booking',
        value: 0.1520949900150299,
      },
      {
        key: 'care',
        value: 0.15200552344322205,
      },
      {
        key: 'izzy',
        value: 0.14819274842739105,
      },
      {
        key: 'questions',
        value: 0.14481504261493683,
      },
      {
        key: 'concerns',
        value: 0.14481504261493683,
      },
      {
        key: 'door',
        value: 0.14133769646286964,
      },
      {
        key: 'park',
        value: 0.1409471035003662,
      },
      {
        key: 'arrival',
        value: 0.14056649431586266,
      },
      {
        key: 'luggage',
        value: 0.1383096631616354,
      },
      {
        key: 'spanish',
        value: 0.13812954723834991,
      },
      {
        key: 'price',
        value: 0.13624434173107147,
      },
      {
        key: 'concert',
        value: 0.13492600619792938,
      },
      {
        key: 'anything',
        value: 0.1289529800415039,
      },
      {
        key: 'condition',
        value: 0.12887004017829895,
      },
      {
        key: 'parking',
        value: 0.12686491012573242,
      },
      {
        key: 'areas',
        value: 0.12347419559955597,
      },
      {
        key: 'bath',
        value: 0.12304608523845673,
      },
      {
        key: 'calentita',
        value: 0.1225101500749588,
      },
      {
        key: 'Check-in',
        value: 0.12088806927204132,
      },
      {
        key: 'assistant',
        value: 0.1207536980509758,
      },
      {
        key: 'lock box',
        value: 0.11991976946592331,
      },
      {
        key: 'mix ups',
        value: 0.11490759253501892,
      },
      {
        key: 'comforts',
        value: 0.11195528507232666,
      },
      {
        key: 'bags',
        value: 0.11147277802228928,
      },
      {
        key: 'La chambre',
        value: 0.10712923109531403,
      },
      {
        key: 'problems',
        value: 0.10705367475748062,
      },
      {
        key: 'Issy',
        value: 0.10631221532821655,
      },
      {
        key: 'addition',
        value: 0.10530713200569153,
      },
      {
        key: 'WiFi.',
        value: 0.10435695201158524,
      },
      {
        key: 'anybody',
        value: 0.1000792384147644,
      },
      {
        key: 'buscarlos',
        value: 0.0954928770661354,
      },
      {
        key: 'airport',
        value: 0.09493941068649292,
      },
      {
        key: 'mold',
        value: 0.09296079725027084,
      },
      {
        key: 'Bathroom',
        value: 0.09296079725027084,
      },
      {
        key: 'time',
        value: 0.08926001936197281,
      },
      {
        key: 'walk',
        value: 0.08675646781921387,
      },
      {
        key: 'time.',
        value: 0.08637765049934387,
      },
      {
        key: 'value',
        value: 0.08597353100776672,
      },
      {
        key: 'access',
        value: 0.08589073270559311,
      },
      {
        key: 'ones',
        value: 0.08586445450782776,
      },
      {
        key: 'phone',
        value: 0.08399122208356857,
      },
      {
        key: 'winner',
        value: 0.0827997624874115,
      },
      {
        key: 'stops',
        value: 0.07802073657512665,
      },
      {
        key: 'inside',
        value: 0.07762910425662994,
      },
      {
        key: 'taxi',
        value: 0.07713604718446732,
      },
      {
        key: 'dolars',
        value: 0.07713604718446732,
      },
      {
        key: 'work',
        value: 0.0754939466714859,
      },
      {
        key: 'Rosie',
        value: 0.0735272541642189,
      },
      {
        key: 'cafés',
        value: 0.07296554744243622,
      },
      {
        key: 'Iyyz Jm',
        value: 0.07193827629089355,
      },
      {
        key: 'lots',
        value: 0.07047797739505768,
      },
      {
        key: 'towels',
        value: 0.06976351886987686,
      },
      {
        key: 'part',
        value: 0.06966415047645569,
      },
      {
        key: 'process',
        value: 0.0690973773598671,
      },
      {
        key: 'toilet',
        value: 0.06871762871742249,
      },
      {
        key: 'excrements',
        value: 0.06871762871742249,
      },
      {
        key: 'train',
        value: 0.06813770532608032,
      },
      {
        key: 'note',
        value: 0.06715377420186996,
      },
      {
        key: 'nights',
        value: 0.06611311435699463,
      },
      {
        key: 'hotel',
        value: 0.06497876346111298,
      },
      {
        key: 'brother',
        value: 0.06485868990421295,
      },
      {
        key: 'breakfast.',
        value: 0.06334853172302246,
      },
      {
        key: 'heart',
        value: 0.06326443701982498,
      },
      {
        key: 'Dryer',
        value: 0.06301232427358627,
      },
      {
        key: 'op de foto',
        value: 0.0629180520772934,
      },
      {
        key: 'bathrooms',
        value: 0.062492769211530685,
      },
      {
        key: 'livingroom',
        value: 0.06136707589030266,
      },
      {
        key: 'snow storm',
        value: 0.06005668267607689,
      },
      {
        key: 'others',
        value: 0.059773560613393784,
      },
      {
        key: 'basement',
        value: 0.059691283851861954,
      },
      {
        key: 'patio',
        value: 0.05750388652086258,
      },
      {
        key: 'tracks',
        value: 0.057348329573869705,
      },
      {
        key: 'whole',
        value: 0.05716974660754204,
      },
      {
        key: 'flat',
        value: 0.0566781610250473,
      },
      {
        key: 'breakfast',
        value: 0.05553034693002701,
      },
      {
        key: 'everyone',
        value: 0.055468298494815826,
      },
      {
        key: 'sense',
        value: 0.05512028560042381,
      },
      {
        key: 'feeling',
        value: 0.05343034118413925,
      },
      {
        key: 'shelving',
        value: 0.05284549295902252,
      },
      {
        key: 'mixer',
        value: 0.05216538533568382,
      },
      {
        key: 'check-in',
        value: 0.051756054162979126,
      },
      {
        key: 'facets',
        value: 0.051756054162979126,
      },
      {
        key: 'heater',
        value: 0.051602836698293686,
      },
      {
        key: 'shuttles',
        value: 0.05120604857802391,
      },
      {
        key: 'ride',
        value: 0.050849799066782,
      },
      {
        key: 'things',
        value: 0.0508372038602829,
      },
      {
        key: 'info',
        value: 0.05080795660614967,
      },
      {
        key: 'nightlife',
        value: 0.05080795660614967,
      },
      {
        key: 'Things',
        value: 0.04896986484527588,
      },
      {
        key: 'nothing',
        value: 0.048370227217674255,
      },
      {
        key: 'issue',
        value: 0.048302728682756424,
      },
      {
        key: 'fount',
        value: 0.048173174262046814,
      },
      {
        key: 'cellar',
        value: 0.04767221584916115,
      },
      {
        key: 'mess',
        value: 0.04729025438427925,
      },
      {
        key: 'mind',
        value: 0.04702351987361908,
      },
      {
        key: 'Airbnb',
        value: 0.04665301740169525,
      },
      {
        key: 'message',
        value: 0.0465497262775898,
      },
      {
        key: 'values',
        value: 0.0460708886384964,
      },
      {
        key: 'plus',
        value: 0.045538529753685,
      },
    ],
  },
]

export const cloudSeattle: ChartConfiguration<'wordCloud'>['data'] = {
  labels: Object.values(data[0].entidades1).map((item) => item.key),

  datasets: [
    {
      label: 'Seattle',
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
      label: 'Boston',
      data: Object.values(data[0].entidades2).map(
        (item) => 10 + item.value * 2
      ),
    },
  ],
}
