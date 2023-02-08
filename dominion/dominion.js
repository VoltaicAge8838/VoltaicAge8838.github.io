var cards = [
    {
        name: 'Miser',
        cost: 4,
        set: 2,
        types: ['action'],
        plus: ['copper']
    },
    {
        name: 'Royal Carriage',
        cost: 5,
        set: 2,
        types: ['reserve'],
        require: ['action'],
        dup: 4
    },
    {
        name: 'Wine Merchant',
        cost: 5,
        set: 2,
        types: ['action', 'reserve']
    },
    {
        name: 'Ranger',
        cost: 4,
        set: 2,
        types: ['action'],
        special: ['journey']
    },
    {
        name: 'Ratcatcher',
        cost: 2,
        set: 2,
        types: ['action', 'reserve', 'trash']
    },
    {
        name: 'Artificer',
        cost: 5,
        set: 2,
        types: ['action', 'discard']
    },
    {
        name: 'Dungeon',
        cost: 3,
        set: 2,
        types: ['action', 'duration', 'discard']
    },
    {
        name: 'Port',
        cost: 4,
        set: 2,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Bridge Troll',
        cost: 5,
        set: 2,
        types: ['action', 'attack', 'duration'],
        special: ['-1 coin']
    },
    {
        name: 'Transmogrify',
        cost: 4,
        set: 2,
        types: ['action', 'reserve', 'trash']
    },
    {
        name: 'Gear',
        cost: 3,
        set: 2,
        types: ['action', 'duration']
    },
    {
        name: 'Distant Lands',
        cost: 5,
        set: 2,
        types: ['action', 'reserve', 'victory']
    },
    {
        name: 'Coin of the Realm',
        cost: 2,
        set: 2,
        types: ['treasure', 'reserve']
    },
    {
        name: 'Giant',
        cost: 5,
        set: 2,
        types: ['action', 'attack', 'trash', 'discard', 'curse'],
        special: ['journey', 'curse']
    },
    {
        name: 'Lost City',
        cost: 5,
        set: 2,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Page',
        cost: 2,
        set: 2,
        types: ['action', 'traveller'],
        dup: 5
    },
    {
        name: 'Relic',
        cost: 5,
        set: 2,
        types: ['treasure', 'attack'],
        special: ['-1 card']
    },
    {
        name: 'Magpie',
        cost: 4,
        set: 2,
        types: ['action'],
        plus: ['treasure']
    },
    {
        name: 'Messenger',
        cost: 4,
        set: 2,
        types: ['action'],
        dup: 2
    },
    {
        name: 'Haunted Woods',
        cost: 5,
        set: 2,
        types: ['action', 'attack', 'duration']
    },
    {
        name: 'Raze',
        cost: 2,
        set: 2,
        types: ['action', 'trash', 'discard']
    },
    {
        name: 'Amulet',
        cost: 3,
        set: 2,
        types: ['action', 'duration', 'trash', 'silver']
    },
    {
        name: 'Peasant',
        cost: 2,
        set: 2,
        types: ['action', 'traveller'],
        special: ['+1 tokens'],
        dup: 5
    },
    {
        name: 'Storyteller',
        cost: 5,
        set: 2,
        types: ['action']
    },
    {
        name: 'Duplicate',
        cost: 4,
        set: 2,
        types: ['action', 'reserve']
    },
    {
        name: 'Guide',
        cost: 3,
        set: 2,
        types: ['action', 'reserve', 'discard']
    },
    {
        name: 'Swamp Hag',
        cost: 5,
        set: 2,
        types: ['action', 'duration', 'attack', 'curse'],
        special: ['curse']
    },
    {
        name: 'Hireling',
        cost: 6,
        set: 2,
        types: ['action', 'duration']
    },
    {
        name: 'Treasure Trove',
        cost: 5,
        set: 2,
        types: ['treasure']
    },
    // {
    //     name: 'Caravan Guard',
    //     cost: 3,
    //     set: 2,
    //     types: ['action', 'duration', 'reaction'],
    //     require: ['attack']
    // },


    {
        name: 'Forge',
        cost: 7,
        set: 1,
        types: ['action', 'trash']
    },
    {
        name: 'Goons',
        cost: 6,
        set: 1,
        types: ['action', 'attack', 'discard'],
        special: ['victory coin']
    },
    {
        name: 'Talisman',
        cost: 4,
        set: 1,
        types: ['treasure']
    },
    {
        name: 'Quarry',
        cost: 4,
        set: 1,
        types: ['treasure']
    },
    {
        name: 'Mountebank',
        cost: 5,
        set: 1,
        types: ['action', 'attack', 'copper', 'curse'],
        special: ['curse']
    },
    {
        name: 'Counting House',
        cost: 5,
        set: 1,
        types: ['action'],
        plus: ['copper']
    },
    {
        name: 'City',
        cost: 5,
        set: 1,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Worker\'s Village',
        cost: 4,
        set: 1,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Grand Market',
        cost: 6,
        set: 1,
        types: ['action'],
        dup: 3
    },
    {
        name: 'Contraband',
        cost: 5,
        set: 1,
        types: ['treasure']
    },
    {
        name: 'Watchtower',
        cost: 3,
        set: 1,
        types: ['action', 'reaction']
    },
    // {
    //     name: 'Loan',
    //     cost: 3,
    //     set: 1,
    //     types: ['treasure']
    // },
    {
        name: 'Venture',
        cost: 5,
        set: 1,
        types: ['treasure']
    },
    {
        name: 'Bank',
        cost: 7,
        set: 1,
        types: ['treasure']
    },
    {
        name: 'Royal Seal',
        cost: 5,
        set: 1,
        types: ['treasure']
    },
    {
        name: 'Rabble',
        cost: 5,
        set: 1,
        types: ['action', 'attack', 'discard']
    },
    {
        name: 'King\'s Court',
        cost: 7,
        set: 1,
        types: [],
        require: ['action'],
        dup: 4
    },
    {
        name: 'Monument',
        cost: 4,
        set: 1,
        types: ['action'],
        special: ['victory coin']
    },
    {
        name: 'Mint',
        cost: 5,
        set: 1,
        types: ['action'],
        plus: ['treasure']
    },
    {
        name: 'Peddler',
        cost: 8,
        set: 1,
        types: ['action']
    },
    {
        name: 'Hoard',
        cost: 6,
        set: 1,
        types: ['treasure'],
        plus: ['victory']
    },
    {
        name: 'Expand',
        cost: 7,
        set: 1,
        types: ['action']
    },
    {
        name: 'Trade Route',
        cost: 3,
        set: 1,
        types: ['action', 'trash'],
        special: ['trade coin'],
        plus: ['victory']
    },
    {
        name: 'Bishop',
        cost: 4,
        set: 1,
        types: ['action', 'trash'],
        special: ['victory coin']
    },
    {
        name: 'Vault',
        cost: 5,
        set: 1,
        types: ['action', 'discard']
    },


    {
        name: 'Graverobber',
        cost: 5,
        set: 3,
        types: ['action', 'trash'],
        plus: ['trash']
    },
    {
        name: 'Catacombs',
        cost: 5,
        set: 3,
        types: ['action', 'discard'],
        plus: ['trash']
    },
    {
        name: 'Fortress',
        cost: 4,
        set: 3,
        types: ['action'],
        plus: ['trash'],
        dup: 1
    },
    {
        name: 'Urchin',
        cost: 3,
        set: 3,
        types: ['action', 'attack', 'trash', 'discard'],
        plus: ['attack']
    },
    {
        name: 'Knights',
        cost: 5,
        set: 3,
        types: ['action', 'attack', 'trash']
    },
    {
        name: 'Wandering Minstrel',
        cost: 4,
        set: 3,
        types: ['action', 'discard'],
        dup: 1
    },
    {
        name: 'Bandit Camp',
        cost: 5,
        set: 3,
        types: ['action'],
        special: ['spoils']
    },
    {
        name: 'Rogue',
        cost: 5,
        set: 3,
        types: ['action', 'attack', 'trash'],
        plus: ['trash']
    },
    {
        name: 'Procession',
        cost: 4,
        set: 3,
        types: ['trash'],
        require: ['action'],
        dup: 4
    },
    {
        name: 'Squire',
        cost: 2,
        set: 3,
        types: ['action'],
        plus: ['attack', 'trash', 'silver']
    },
    {
        name: 'Ironmonger',
        cost: 4,
        set: 3,
        types: ['action', 'discard']
    },
    {
        name: 'Band of Misfits',
        cost: 5,
        set: 3,
        types: ['action']
    },
    {
        name: 'Mystic',
        cost: 5,
        set: 3,
        types: ['action']
    },
    {
        name: 'Scavenger',
        cost: 4,
        set: 3,
        types: ['action']
    },
    {
        name: 'Count',
        cost: 5,
        set: 3,
        types: ['action', 'trash', 'discard', 'copper']
    },
    {
        name: 'Sage',
        cost: 3,
        set: 3,
        types: ['action', 'discard']
    },
    {
        name: 'Junk Dealer',
        cost: 5,
        set: 3,
        types: ['action', 'trash']
    },
    {
        name: 'Armory',
        cost: 4,
        set: 3,
        types: ['action']
    },
    {
        name: 'Beggar',
        cost: 2,
        set: 3,
        types: ['action', 'reaction', 'copper', 'silver'],
        require: ['attack']
    },
    {
        name: 'Hunting Grounds',
        cost: 6,
        set: 3,
        types: ['action'],
        plus: ['trash']
    },
    {
        name: 'Counterfeit',
        cost: 5,
        set: 3,
        types: ['treasure']
    },
    {
        name: 'Feodum',
        cost: 4,
        set: 3,
        types: ['victory'],
        plus: ['silver', 'trash']
    },
    {
        name: 'Poor House',
        cost: 1,
        set: 3,
        types: ['action']
    },
    {
        name: 'Death Cart',
        cost: 4,
        set: 3,
        types: ['action', 'looter', 'trash'],
        special: ['ruins']
    },
    {
        name: 'Hermit',
        cost: 3,
        set: 3,
        types: ['action', 'trash']
    },
    {
        name: 'Altar',
        cost: 6,
        set: 3,
        types: ['action', 'trash']
    },
    {
        name: 'Storeroom',
        cost: 3,
        set: 3,
        types: ['action', 'discard']
    },
    {
        name: 'Rebuild',
        cost: 5,
        set: 3,
        types: ['action']
    },
    {
        name: 'Vagrant',
        cost: 2,
        set: 3,
        types: ['action']
    },
    {
        name: 'Market Square',
        cost: 3,
        set: 3,
        types: ['action', 'reaction'],
        plus: ['trash'],
        dup: 3
    },
    {
        name: 'Cultist',
        cost: 5,
        set: 3,
        types: ['action', 'attack', 'looter'],
        plus: ['trash'],
        special: ['ruins']
    },
    {
        name: 'Rats',
        cost: 4,
        set: 3,
        types: ['action', 'trash'],
        plus: ['trash']
    },
    {
        name: 'Forager',
        cost: 3,
        set: 3,
        types: ['action', 'trash'],
        plus: ['treasure']
    },
    {
        name: 'Pillage',
        cost: 5,
        set: 3,
        types: ['action', 'attack'],
        special: ['spoils']
    },
    {
        name: 'Marauder',
        cost: 4,
        set: 3,
        types: ['action', 'attack', 'looter'],
        special: ['spoils', 'ruins']
    },


    {
        name: 'Fool\'s Gold',
        cost: 2,
        set: 4,
        types: ['treasure', 'reaction']
    },
    {
        name: 'Highway',
        cost: 5,
        set: 4,
        types: ['action']
    },
    {
        name: 'Ill-Gotten Gains',
        cost: 5,
        set: 4,
        types: ['treasure', 'copper', 'curse'],
        special: ['curse']
    },
    {
        name: 'Noble Brigand',
        cost: 4,
        set: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Stables',
        cost: 5,
        set: 4,
        types: ['action']
    },
    {
        name: 'Jack of all Trades',
        cost: 4,
        set: 4,
        types: ['action', 'silver', 'discard', 'trash']
    },
    {
        name: 'Haggler',
        cost: 5,
        set: 4,
        types: ['action']
    },
    {
        name: 'Cache',
        cost: 5,
        set: 4,
        types: ['treasure', 'copper']
    },
    {
        name: 'Embassy',
        cost: 5,
        set: 4,
        types: ['action', 'silver', 'discard']
    },
    {
        name: 'Crossroads',
        cost: 2,
        set: 4,
        types: ['action'],
        plus: ['victory']
    },
    {
        name: 'Farmland',
        cost: 6,
        set: 4,
        types: ['victory', 'trash']
    },
    {
        name: 'Oasis',
        cost: 3,
        set: 4,
        types: ['action', 'discard']
    },
    {
        name: 'Duchess',
        cost: 2,
        set: 4,
        types: ['action']
    },
    {
        name: 'Trader',
        cost: 4,
        set: 4,
        types: ['action', 'reaction', 'silver', 'trash']
    },
    {
        name: 'Margrave',
        cost: 5,
        set: 4,
        types: ['action', 'attack', 'discard']
    },
    {
        name: 'Cartographer',
        cost: 5,
        set: 4,
        types: ['action', 'discard']
    },
    {
        name: 'Inn',
        cost: 5,
        set: 4,
        types: ['action', 'discard'],
        dup: 1
    },
    {
        name: 'Silk Road',
        cost: 4,
        set: 4,
        types: ['victory'],
        plus: ['victory']
    },
    {
        name: 'Spice Merchant',
        cost: 4,
        set: 4,
        types: ['action']
    },
    {
        name: 'Nomad Camp',
        cost: 4,
        set: 4,
        types: ['action']
    },
    {
        name: 'Develop',
        cost: 3,
        set: 4,
        types: ['action']
    },
    {
        name: 'Border Village',
        cost: 6,
        set: 4,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Scheme',
        cost: 3,
        set: 4,
        types: [],
        require: ['action']
    },
    {
        name: 'Tunnel',
        cost: 3,
        set: 4,
        types: ['victory', 'reaction'],
        require: ['discard']
    },
    {
        name: 'Oracle',
        cost: 3,
        set: 4,
        types: ['action', 'attack', 'discard']
    },
    {
        name: 'Mandarin',
        cost: 5,
        set: 4,
        types: ['action']
    },


    {
        name: 'Smithy',
        cost: 4,
        set: 0,
        types: ['action']
    },
    {
        name: 'Market',
        cost: 5,
        set: 0,
        types: ['action'],
        dup: 3
    },
    {
        name: 'Adventurer',
        cost: 6,
        set: 0,
        types: ['action'],
        plus: ['treasure']
    },
    {
        name: 'Chancellor',
        cost: 3,
        set: 0,
        types: ['action'],
        dup: 2
    },
    {
        name: 'Witch',
        cost: 5,
        set: 0,
        types: ['action', 'attack', 'curse'],
        special: ['curse']
    },
    {
        name: 'Remodel',
        cost: 4,
        set: 0,
        types: ['action', 'trash']
    },
    {
        name: 'Chapel',
        cost: 2,
        set: 0,
        types: ['action', 'trash']
    },
    {
        name: 'Workshop',
        cost: 3,
        set: 0,
        types: ['action']
    },
    {
        name: 'Village',
        cost: 3,
        set: 0,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Moneylender',
        cost: 4,
        set: 0,
        types: ['action'],
        plus: ['copper']
    },
    // {
    //     name: 'Feast',
    //     cost: 4,
    //     set: 0,
    //     types: ['action']
    // },
    {
        name: 'Woodcutter',
        cost: 3,
        set: 0,
        types: ['action']
    },
    {
        name: 'Council Room',
        cost: 5,
        set: 0,
        types: ['action']
    },
    {
        name: 'Cellar',
        cost: 2,
        set: 0,
        types: ['action', 'discard']
    },
    {
        name: 'Militia',
        cost: 4,
        set: 0,
        types: ['action', 'attack', 'discard']
    },
    {
        name: 'Gardens',
        cost: 4,
        set: 0,
        types: ['victory']
    },
    {
        name: 'Thief',
        cost: 4,
        set: 0,
        types: ['action', 'attack'],
        plus: ['treasure']
    },
    {
        name: 'Library',
        cost: 5,
        set: 0,
        types: ['action']
    },
    {
        name: 'Mine',
        cost: 5,
        set: 0,
        types: ['action'],
        plus: ['treasure']
    },
    {
        name: 'Spy',
        cost: 4,
        set: 0,
        types: ['action', 'attack', 'discard']
    },
    {
        name: 'Bureaucrat',
        cost: 4,
        set: 0,
        types: ['action', 'attack', 'silver']
    },
    {
        name: 'Festival',
        cost: 5,
        set: 0,
        types: ['action']
    },
    {
        name: 'Throne Room',
        cost: 4,
        set: 0,
        types: [],
        require: ['action'],
        dup: 4
    },
    {
        name: 'Moat',
        cost: 2,
        set: 0,
        types: ['action', 'reaction'],
        require: ['attack']
    },
    {
        name: 'Laboratory',
        cost: 5,
        set: 0,
        types: ['action']
    },

    {
        name: 'Artisan',
        cost: 6,
        set: 0,
        types: ['action']
    },
    {
        name: 'Bandit',
        cost: 5,
        set: 0,
        types: ['action', 'attack']
    },
    {
        name: 'Harbinger',
        cost: 3,
        set: 0,
        types: ['action']
    },
    {
        name: 'Merchant',
        cost: 3,
        set: 0,
        types: ['action'],
        plus: ['silver']
    },
    {
        name: 'Poacher',
        cost: 4,
        set: 0,
        types: ['action']
    },
    {
        name: 'Sentry',
        cost: 5,
        set: 0,
        types: ['action']
    },
    {
        name: 'Vassal',
        cost: 3,
        set: 0,
        types: ['action'],
        require: ['action']
    },

    {
        name: 'Warehouse',
        cost: 3,
        set: 5,
        types: ['action']
    },
    {
        name: 'Wharf',
        cost: 5,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Tactician',
        cost: 5,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Treasure map',
        cost: 4,
        set: 5,
        types: ['action', 'trash']
    },
    {
        name: 'Treasury',
        cost: 5,
        set: 5,
        types: ['action']
    },
    {
        name: 'Outpost',
        cost: 5,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Pearl Diver',
        cost: 2,
        set: 5,
        types: ['action']
    },
    {
        name: 'Pirate Ship',
        cost: 4,
        set: 5,
        types: ['action', 'attack'],
        special: ['mat'],
    },
    {
        name: 'Cutpurse',
        cost: 4,
        set: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Embargo',
        cost: 2,
        set: 5,
        types: ['action', 'curse'],
        special: ['curse']
    },
    {
        name: 'Explorer',
        cost: 5,
        set: 5,
        types: ['action', 'silver']
    },
    {
        name: 'Fishing Village',
        cost: 3,
        set: 5,
        types: ['action', 'duration'],
        dup: 1
    },
    {
        name: 'Ghost Ship',
        cost: 5,
        set: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Haven',
        cost: 2,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Island',
        cost: 4,
        set: 5,
        types: ['action', 'victory'],
        special: ['mat'],
    },
    {
        name: 'Lighthouse',
        cost: 2,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Lookout',
        cost: 3,
        set: 5,
        types: ['action', 'trash']
    },
    {
        name: 'Merchant Ship',
        cost: 5,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Native Village',
        cost: 2,
        set: 5,
        types: ['action'],
        special: ['mat'],
        dup: 1
    },
    {
        name: 'Salvager',
        cost: 4,
        set: 5,
        types: ['action', 'trash']
    },
    {
        name: 'Sea Hag',
        cost: 4,
        set: 5,
        types: ['action', 'curse', 'attack']
    },
    {
        name: 'Smugglers',
        cost: 3,
        set: 5,
        types: ['action']
    },
    {
        name: 'Ambassador',
        cost: 3,
        set: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Bazaar',
        cost: 5,
        set: 5,
        types: ['action'],
        dup: 1
    },
    {
        name: 'Caravan',
        cost: 4,
        set: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Navigator',
        cost: 4,
        set: 5,
        types: ['action']
    },
].map((c, i) => {c.id = i; return c;});



var events = [
    {
        name: 'Alms',
        cost: 0,
        types: []
    },
    {
        name: 'Ball',
        cost: 5,
        types: [],
        special: ['-1 coin']
    },
    {
        name: 'Bonfire',
        cost: 3,
        types: ['trash']
    },
    {
        name: 'Borrow',
        cost: 0,
        types: [],
        special: ['-1 card']
    },
    {
        name: 'Expedition',
        cost: 3,
        types: []
    },
    {
        name: 'Ferry',
        cost: 3,
        types: [],
        special: ['-2 cost']
    },
    {
        name: 'Inheritance',
        cost: 7,
        types: [],
        special: ['estate token']
    },
    {
        name: 'Lost Arts',
        cost: 6,
        types: [],
        special: ['+1 action']
    },
    {
        name: 'Mission',
        cost: 4,
        types: []
    },
    {
        name: 'Pathfinding',
        cost: 8,
        types: [],
        special: ['+1 card']
    },
    {
        name: 'Pilgrimage',
        cost: 4,
        types: [],
        plus: ['journey'],
        special: ['journey']
    },
    {
        name: 'Plan',
        cost: 3,
        types: ['trash'],
        special: ['trash token']
    },
    {
        name: 'Quest',
        cost: 0,
        types: [],
        plus: ['attack', 'curse']
    },
    {
        name: 'Raid',
        cost: 5,
        types: ['silver'],
        plus: ['silver'],
        special: ['-1 card']
    },
    {
        name: 'Save',
        cost: 1,
        types: []
    },
    {
        name: 'Scouting Party',
        cost: 2,
        types: ['discard']
    },
    {
        name: 'Seaway',
        cost: 5,
        types: [],
        special: ['+1 buy']
    },
    {
        name: 'Trade',
        cost: 5,
        types: ['trash', 'silver']
    },
    {
        name: 'Training',
        cost: 6,
        types: [],
        special: ['+1 coin']
    },
    {
        name: 'Travelling Fair',
        cost: 2,
        types: []
    },
].map((c, i) => {c.id = i; return c;});

// a filter for each set
var set_filter = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
};

var cost_filter_3 = 2;
var cost_filter_4 = 2;
var cost_filter_5 = 1;
var cost_filter_0 = 1; // "not 3, 4, or 5"

var picked_cards = [{},{},{},{},{},{},{},{},{},{}];
var picked_events = [{},{}];

function require_filter_fun(index) {
    var types = new Set(picked_cards.filter((c, i) => i !== index && c.types)
            .flatMap(c => c.types));
    return c => (c.require || []).every(r => types.has(r));
}

function list_invalid_cards() {
    var types = new Set(picked_cards.flatMap(c => c.types));
    return picked_cards.map((c, i) => {if ((c.require || []).some(r => !types.has(r))) {
        return i;
    }}).filter(i => i);
}

function count_filter_fun(index) {
    var picked_costs = [0,0,0,0,0,0];
    picked_cards.filter((c, i) => i !== index && c.cost)
            .forEach((c, i) => {
                if (c.cost === 3 || c.cost === 4 || c.cost === 5) {
                    picked_costs[c.cost] += 1;
                } else {
                    picked_costs[0] += 1;
                }
            });
    var costs = new Set();
    var alt_costs = new Set([3, 4, 5]);
    if (picked_costs[3] < cost_filter_3) {
        costs.add(3);
        alt_costs.delete(3);
    }
    if (picked_costs[4] < cost_filter_4) {
        costs.add(4);
        alt_costs.delete(4);
    }
    if (picked_costs[5] < cost_filter_5) {
        costs.add(5);
        alt_costs.delete(5);
    }
    if (picked_costs[0] < cost_filter_0) {
        return c => !alt_costs.has(c.cost)
    } else if (costs.size > 0) {
        return c => costs.has(c.cost)
    } else {
        return c => true;
    }
}

// duplicates:
// 1 - village
// 2 - discard deck
// 3 - market
// 4 - repeat
// 5 - traveller

function dedup_filter_fun(index) {
    var dups = new Set();
    picked_cards.filter((c, i) => i !== index && c.dup)
            .forEach((c, i) => {
                if (c.dup) {
                    dups.add(c.dup);
                }
            });
    if (dups.size > 0) {
        return c => !dups.has(c.dup)
    } else {
        return c => true;
    }
}

function plus_cards(index) {
    var types = new Set(picked_cards.filter((_, i) => i !== index).flatMap(c => c.types));
    var pluses = new Set(picked_cards.filter((_, i) => i !== index).flatMap(c => c.plus || []));
    return c => (c.plus||[]).some(p => types.has(p))||c.types.some(t => pluses.has(t))?[c,c,c]:[c];
}

function rand(x) {
    return Math.floor(Math.random() * x);
}

function toggle_set_filter(set) {
    set_filter[set] = !set_filter[set];
    document.getElementById('f'+set).style['background'] = set_filter[set]?'rgba(0,0,0,0)':'#fff';
    document.getElementById('f'+set).style['filter'] = set_filter[set]?'invert(0)':'invert(1)';
}

function sort_cards() {
    picked_cards = picked_cards.sort((a, b) => a.name.localeCompare(b.name));
    for(var x=0; x<10; x++){
        update_card_ui(x);
    }
}

var set_img_src = {
    0: 'chess-rook.svg', // Original
    1: 'gem.svg', // Prosperity
    2: 'dragon.svg', // Adventures
    3: 'crow.svg', // Dark Ages
    4: 'horse.svg', // Hinterlands
    5: 'anchor.svg', // Seaside
};

function update_card_ui(index) {
    document.getElementById("n"+index).textContent=picked_cards[index].name;
    document.getElementById("i"+index).src=set_img_src[picked_cards[index].set];
    document.getElementById("c"+index).textContent=picked_cards[index].cost;
}

function pick_card(index) {
    var picked = picked_cards.reduce((a, c) => {if (c) {a[c.id]=true;} return a;}, {});
    var filtered_cards = cards.filter(c => set_filter[c.set])
            .filter(c => !picked[c.id])
            .filter(require_filter_fun(index))
            .filter(count_filter_fun(index))
            .filter(dedup_filter_fun(index))
            .flatMap(plus_cards(index));
    var randomIndex = rand(filtered_cards.length);
    var card = filtered_cards[randomIndex];
    picked_cards[index] = card;
}

function shuffle() {
    picked_cards = [{},{},{},{},{},{},{},{},{},{}];
    for (var i = 0; i < 10; i++) {
        pick_card(i)
    }
}

function update_event_ui(index) {
    document.getElementById("en"+index).textContent=picked_events[index].name||'...';
    document.getElementById("ei"+index).src=picked_events[index].name?'mountain.svg':'ellipsis-h.svg';
    document.getElementById("ec"+index).textContent=(picked_events[index].cost!=undefined)?picked_events[index].cost:'...';
}

function pick_event(index, nil) {
    if (nil) {
        picked_events[index] = {};
    } else {
        var picked = picked_events.reduce((a, c) => {if (c) {a[c.id]=true;} return a;}, {});
        var filtered_events = events.filter(c => !picked[c.id]);
        var randomIndex = rand(filtered_events.length);
        var event = filtered_events[randomIndex];
        picked_events[index] = event;
    }
    update_event_ui(index);
}

function shuffle_events() {
    picked_events = [{},{}];
    var random_value = rand(3);
    pick_event(0, random_value > 1);
    pick_event(1, random_value > 0);
}

function get_card(index) {
    pick_card(index);
    update_card_ui(index);
    list_invalid_cards().forEach(i => {
        console.log(i);
        pick_card(i);
        update_card_ui(i);
    });
}

function get_cards() {
    shuffle();
    sort_cards();
    shuffle_events();
}
