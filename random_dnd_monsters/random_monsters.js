// source: https://www.dndbeyond.com/monsters?filter-cr-max=9&filter-cr-min=2&filter-search=&filter-source=1&filter-type=1&filter-type=2&filter-type=3&filter-type=6&filter-type=7&filter-type=8&filter-type=9&filter-type=10&filter-type=11&filter-type=13

const monsters = [{
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/17087-allosaurus',
    challenge: '2',
    name: 'Allosaurus',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/160/100/100/636252759871343414.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16787-ankheg',
    challenge: '2',
    name: 'Ankheg',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/17088-ankylosaurus',
    challenge: '3',
    name: 'Ankylosaurus',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16793-axe-beak',
    challenge: '1/4',
    name: 'Axe Beak',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/170/100/100/636252761111723316.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16794-azer',
    challenge: '2',
    name: 'Azer',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/485/100/100/636376302568933278.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16800-barbed-devil',
    challenge: '5',
    name: 'Barbed Devil',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/184/100/100/636252762167578273.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16801-basilisk',
    challenge: '3',
    name: 'Basilisk',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/192/100/100/636252763396979340.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16803-bearded-devil',
    challenge: '3',
    name: 'Bearded Devil',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16806-black-bear',
    challenge: '1/2',
    name: 'Black Bear',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/495/100/100/636376308216548756.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16807-black-dragon-wyrmling',
    challenge: '2',
    name: 'Black Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/204/100/100/636252764168184085.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16809-blink-dog',
    challenge: '1/4',
    name: 'Blink Dog',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16810-blood-hawk',
    challenge: '1/8',
    name: 'Blood Hawk',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/21222/241/100/100/637708181280061323.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16811-blue-dragon-wyrmling',
    challenge: '3',
    name: 'Blue Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16812-boar',
    challenge: '1/4',
    name: 'Boar',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/214/100/100/636252764962271393.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16814-brass-dragon-wyrmling',
    challenge: '1',
    name: 'Brass Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/491/100/100/636376306908968820.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16815-bronze-dragon-wyrmling',
    challenge: '2',
    name: 'Bronze Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16816-brown-bear',
    challenge: '1',
    name: 'Brown Bear',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/31312/870/100/100/638084425509823947.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16817-bugbear',
    challenge: '1',
    name: 'Bugbear',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/222/100/100/636252765369007767.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16818-bulette',
    challenge: '5',
    name: 'Bulette',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/226/100/100/636252765572797492.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16821-centaur',
    challenge: '2',
    name: 'Centaur',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/240/100/100/636252767122187258.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16824-chuul',
    challenge: '4',
    name: 'Chuul',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/250/100/100/636252767744357291.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16828-cockatrice',
    challenge: '1/2',
    name: 'Cockatrice',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16830-constrictor-snake',
    challenge: '1/4',
    name: 'Constrictor Snake',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/254/100/100/636252768001433878.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16831-copper-dragon-wyrmling',
    challenge: '1',
    name: 'Copper Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/256/100/100/636252768141917525.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16832-couatl',
    challenge: '4',
    name: 'Couatl',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16834-crocodile',
    challenge: '1/2',
    name: 'Crocodile',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/262/100/100/636252768676230840.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16837-darkmantle',
    challenge: '1/2',
    name: 'Darkmantle',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/264/100/100/636252768821944335.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16838-death-dog',
    challenge: '1',
    name: 'Death Dog',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/483/100/100/636376300477893222.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16841-dire-wolf',
    challenge: '1',
    name: 'Dire Wolf',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/5634/468/100/100/636886889296409148.jpeg',
    link: 'https://www.dndbeyond.com/monsters/288142-diseased-giant-rat',
    challenge: '1/8',
    name: 'Diseased Giant Rat',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/292/100/100/636252771252812668.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16846-dretch',
    challenge: '1/4',
    name: 'Dretch',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/306/100/100/636252771953468980.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16849-dryad',
    challenge: '1',
    name: 'Dryad',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/804867-dust-devil',
    challenge: '5',
    name: 'Dust Devil',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/312/100/100/636252772213502587.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16851-dust-mephit',
    challenge: '1/2',
    name: 'Dust Mephit',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16855-elephant',
    challenge: '4',
    name: 'Elephant',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16857-elk',
    challenge: '1/4',
    name: 'Elk',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/338/100/100/636252776771218004.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16859-ettercap',
    challenge: '2',
    name: 'Ettercap',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/340/100/100/636252776953159856.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16860-ettin',
    challenge: '4',
    name: 'Ettin',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/516/100/100/636376319640282506.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16864-flying-snake',
    challenge: '1/8',
    name: 'Flying Snake',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/406/100/100/636252786294759835.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16868-gargoyle',
    challenge: '2',
    name: 'Gargoyle',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/529/100/100/636376327839109666.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16874-giant-badger',
    challenge: '1/4',
    name: 'Giant Badger',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16875-giant-bat',
    challenge: '1/4',
    name: 'Giant Bat',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16876-giant-boar',
    challenge: '2',
    name: 'Giant Boar',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16877-giant-centipede',
    challenge: '1/4',
    name: 'Giant Centipede',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16878-giant-constrictor-snake',
    challenge: '2',
    name: 'Giant Constrictor Snake',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16879-giant-crab',
    challenge: '1/8',
    name: 'Giant Crab',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16880-giant-crocodile',
    challenge: '5',
    name: 'Giant Crocodile',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/9/893/100/100/636334286969150741.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16881-giant-eagle',
    challenge: '1',
    name: 'Giant Eagle',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16882-giant-elk',
    challenge: '2',
    name: 'Giant Elk',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/520/100/100/636376321051878548.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16884-giant-frog',
    challenge: '1/4',
    name: 'Giant Frog',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16885-giant-goat',
    challenge: '1/2',
    name: 'Giant Goat',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16886-giant-hyena',
    challenge: '1',
    name: 'Giant Hyena',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16887-giant-lizard',
    challenge: '1/4',
    name: 'Giant Lizard',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/534/100/100/636376331787662089.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16889-giant-owl',
    challenge: '1/4',
    name: 'Giant Owl',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16890-giant-poisonous-snake',
    challenge: '1/4',
    name: 'Giant Poisonous Snake',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/537/100/100/636376332197484465.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16891-giant-rat',
    challenge: '1/8',
    name: 'Giant Rat',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16892-giant-scorpion',
    challenge: '3',
    name: 'Giant Scorpion',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/322/100/100/636252775648118279.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16895-giant-spider',
    challenge: '1',
    name: 'Giant Spider',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16896-giant-toad',
    challenge: '1',
    name: 'Giant Toad',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16897-giant-vulture',
    challenge: '1',
    name: 'Giant Vulture',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16898-giant-wasp',
    challenge: '1/2',
    name: 'Giant Wasp',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16899-giant-weasel',
    challenge: '1/8',
    name: 'Giant Weasel',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16900-giant-wolf-spider',
    challenge: '1/4',
    name: 'Giant Wolf Spider',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/344/100/100/636252777224528873.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16904-gnoll',
    challenge: '1/2',
    name: 'Gnoll',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/350/100/100/636252777818027282.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16907-goblin',
    challenge: '1/4',
    name: 'Goblin',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/7/515/100/100/636285466147907511.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17098-gold-dragon-wyrmling',
    challenge: '3',
    name: 'Gold Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/354/100/100/636252778124630613.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16908-gorgon',
    challenge: '5',
    name: 'Gorgon',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/362/100/100/636252778638695026.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16910-green-dragon-wyrmling',
    challenge: '2',
    name: 'Green Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/368/100/100/636252779341133571.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16912-grick',
    challenge: '2',
    name: 'Grick',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/372/100/100/636252779693237720.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16913-griffon',
    challenge: '2',
    name: 'Griffon',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/374/100/100/636252780049181458.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16914-grimlock',
    challenge: '1/4',
    name: 'Grimlock',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/386/100/100/636252781353278800.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16918-half-red-dragon-veteran',
    challenge: '5',
    name: 'Half-Red Dragon Veteran',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/390/100/100/636252781955283226.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16919-harpy',
    challenge: '1',
    name: 'Harpy',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/392/100/100/636252782460736418.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16921-hell-hound',
    challenge: '3',
    name: 'Hell Hound',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/330/100/100/636252776195489562.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16923-hill-giant',
    challenge: '5',
    name: 'Hill Giant',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/334/100/100/636252776577824273.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16924-hippogriff',
    challenge: '1',
    name: 'Hippogriff',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/388/100/100/636252781431307548.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16925-hobgoblin',
    challenge: '1/2',
    name: 'Hobgoblin',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/18/289/100/100/636379804105352414.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16932-ice-mephit',
    challenge: '1/2',
    name: 'Ice Mephit',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/360/100/100/636252778559844878.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16933-imp',
    challenge: '1',
    name: 'Imp',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/5388/844/100/100/636857603666570892.png',
    link: 'https://www.dndbeyond.com/monsters/257235-incubus',
    challenge: '4',
    name: 'Incubus',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/29317/459/100/100/638004850462112894.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16939-kobold',
    challenge: '1/8',
    name: 'Kobold',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/384/100/100/636252780905439206.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16941-lamia',
    challenge: '4',
    name: 'Lamia',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16944-lion',
    challenge: '1',
    name: 'Lion',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/232/100/100/636252766314280321.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16946-lizardfolk',
    challenge: '1/2',
    name: 'Lizardfolk',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/27189/667/100/100/637932510205006610.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16948-magma-mephit',
    challenge: '1/2',
    name: 'Magma Mephit',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/182/100/100/636252762033615447.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16949-magmin',
    challenge: '1/2',
    name: 'Magmin',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/186/100/100/636252762622641747.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16951-manticore',
    challenge: '3',
    name: 'Manticore',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/190/100/100/636252763294509791.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16953-mastiff',
    challenge: '1/8',
    name: 'Mastiff',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/216/100/100/636252765008399409.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16958-minotaur',
    challenge: '3',
    name: 'Minotaur',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/272/100/100/636252769492661436.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16964-nightmare',
    challenge: '3',
    name: 'Nightmare',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/26231/285/100/100/637898663725871357.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17092-nothic',
    challenge: '2',
    name: 'Nothic',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/284/100/100/636252770534498850.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16969-ogre',
    challenge: '2',
    name: 'Ogre',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/304/100/100/636252771930900220.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16973-otyugh',
    challenge: '5',
    name: 'Otyugh',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/29317/483/100/100/638004851982664062.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16975-owlbear',
    challenge: '3',
    name: 'Owlbear',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16976-panther',
    challenge: '1/4',
    name: 'Panther',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/18/302/100/100/636379808796590631.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16977-pegasus',
    challenge: '2',
    name: 'Pegasus',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/318/100/100/636252772537829906.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16978-phase-spider',
    challenge: '3',
    name: 'Phase Spider',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16982-poisonous-snake',
    challenge: '1/8',
    name: 'Poisonous Snake',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16983-polar-bear',
    challenge: '2',
    name: 'Polar Bear',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/282/100/100/636252770521232549.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16986-pseudodragon',
    challenge: '1/4',
    name: 'Pseudodragon',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/17093-pteranodon',
    challenge: '1/4',
    name: 'Pteranodon',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/270/100/100/636252769318074104.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16988-quasit',
    challenge: '1',
    name: 'Quasit',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/238/100/100/636252766855153799.jpeg',
    link: 'https://www.dndbeyond.com/monsters/16993-red-dragon-wyrmling',
    challenge: '4',
    name: 'Red Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/16996-rhinoceros',
    challenge: '2',
    name: 'Rhinoceros',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/206/100/100/636252764264556930.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17001-rust-monster',
    challenge: '1/2',
    name: 'Rust Monster',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/17002-saber-toothed-tiger',
    challenge: '2',
    name: 'Saber-Toothed Tiger',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/172/100/100/636252761197123810.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17004-salamander',
    challenge: '5',
    name: 'Salamander',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/168/100/100/636252760704309211.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17005-satyr',
    challenge: '1/2',
    name: 'Satyr',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/142/100/100/636252757537912885.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17014-silver-dragon-wyrmling',
    challenge: '2',
    name: 'Silver Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/14/484/100/100/636364324602264823.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17094-spectator',
    challenge: '3',
    name: 'Spectator',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/114/100/100/636252746444504884.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17020-sprite',
    challenge: '1/4',
    name: 'Sprite',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/112/100/100/636252745841351983.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17022-steam-mephit',
    challenge: '1/4',
    name: 'Steam Mephit',
    size: 'Small'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/29317/496/100/100/638004852558334625.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17023-stirge',
    challenge: '1/8',
    name: 'Stirge',
    size: 'Tiny'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/102/100/100/636252742572844243.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17027-succubus',
    challenge: '4',
    name: 'Succubus',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/17036-tiger',
    challenge: '1',
    name: 'Tiger',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/content/1-0-2545-0/skins/waterdeep/images/icons/monsters/beast.jpg',
    link: 'https://www.dndbeyond.com/monsters/17039-triceratops',
    challenge: '5',
    name: 'Triceratops',
    size: 'Huge'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/94/100/100/636252739681609582.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17040-troll',
    challenge: '5',
    name: 'Troll',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/92/100/100/636252739248329331.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17042-unicorn',
    challenge: '5',
    name: 'Unicorn',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/81/100/100/636252736004985361.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17053-werebear',
    challenge: '5',
    name: 'Werebear',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/79/100/100/636252735506215124.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17054-wereboar',
    challenge: '4',
    name: 'Wereboar',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/77/100/100/636252735120780359.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17055-wererat',
    challenge: '2',
    name: 'Wererat',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/75/100/100/636252734783206139.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17056-weretiger',
    challenge: '4',
    name: 'Weretiger',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/72/100/100/636252734043190643.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17057-werewolf',
    challenge: '3',
    name: 'Werewolf',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/414/100/100/636252789083045253.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17058-white-dragon-wyrmling',
    challenge: '2',
    name: 'White Dragon Wyrmling',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/53/100/100/636252725269484101.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17061-winter-wolf',
    challenge: '3',
    name: 'Winter Wolf',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/16/481/100/100/636376300223230358.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17062-wolf',
    challenge: '1/4',
    name: 'Wolf',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/51/100/100/636252724661448039.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17063-worg',
    challenge: '1/2',
    name: 'Worg',
    size: 'Large'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/0/45/100/100/636252723239523390.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17066-xorn',
    challenge: '5',
    name: 'Xorn',
    size: 'Medium'
}, {
    icon: 'https://www.dndbeyond.com/avatars/thumbnails/8/661/100/100/636313413410357149.jpeg',
    link: 'https://www.dndbeyond.com/monsters/17096-yeti',
    challenge: '3',
    name: 'Yeti',
    size: 'Large'
}];


function rand(x) {
    return Math.floor(Math.random() * x);
}

function update_ui(ui_index, monster_index) {
    document.getElementById("n"+ui_index).textContent=monsters[monster_index].name;
    document.getElementById("n"+ui_index).href=monsters[monster_index].link;
    document.getElementById("s"+ui_index).textContent=monsters[monster_index].size;
    document.getElementById("c"+ui_index).textContent=monsters[monster_index].challenge;
    document.getElementById("i"+ui_index).src=monsters[monster_index].icon;
}

function set_monsters(i0, i1, i2) {
    update_ui(0, i0);
    update_ui(1, i1);
    update_ui(2, i2);
}

function get_monsters() {
    var reverse = true;
    var i0 = rand(monsters.length);
    var i1 = rand(monsters.length-1);
    if (i1 >= i0){
        i1+=1;
        reverse = false;
    }
    var i2 = rand(monsters.length-2);
    if ((i2 >= i0 && !reverse) || (i2 >= i1 && reverse)){
        i2+=1;
    }
    if ((i2 >= i1 && !reverse) || (i2 >= i0 && reverse)){
        i2+=1;
    }

    const params = new URLSearchParams();
    params.append('i0', i0);
    params.append('i1', i1);
    params.append('i2', i2);
    window.location.search = params.toString();
}

function init() {
    const urlParams = new URLSearchParams(window.location.search);
    var i0 = parseInt(urlParams.get('i0'));
    var i1 = parseInt(urlParams.get('i1'));
    var i2 = parseInt(urlParams.get('i2'));

    if (i0 !== null && i1 !== null && i2 !== null) {
        set_monsters(i0, i1, i2);
    }
}
