const users = [
    {
        id: '8c4835dc09ce',
        name: 'Beatrice Gomez',
        email: 'henurdi@nucma.org',
        city: 'Mejzupaj',
        country: 'New Caledonia'
    },
    {
        id: '12c8c36931f5',
        name: 'Millie Schultz',
        email: 'jo@wonrok.jo',
        city: 'Nunagwar',
        country: 'Ascension Island'
    },
    {
        id: 'e4293bf948ff',
        name: 'Ronald Castillo',
        email: 'jetwuf@ziz.cz',
        city: 'Mavizo',
        country: 'Latvia'
    },
    {
        id: 'aa5d7d39b2eb',
        name: 'Norman Horton',
        email: 'ku@aw.ae',
        city: 'Bawelebu',
        country: 'Afghanistan'
    },
    {
        id: '5ca28725b01b',
        name: 'Francis Wells',
        email: 'su@ufo.at',
        city: 'Kispatkem',
        country: 'Algeria'
    },
    {
        id: '1272a3a66047',
        name: 'Polly Conner',
        email: 'non@nolsizaz.fk',
        city: 'Iceotonac',
        country: 'Paraguay'
    },
    {
        id: 'ec45c949d686',
        name: 'Dennis Ruiz',
        email: 'ozjun@du.tn',
        city: 'Fobrarnuj',
        country: 'Mauritius'
    },
    {
        id: '7877e6cbe71b',
        name: 'Laura Vasquez',
        email: 'natom@vu.sr',
        city: 'Kumgulva',
        country: 'Albania'
    },
    {
        id: '8e82a48e19ed',
        name: 'Lou Morris',
        email: 'wip@vajub.al',
        city: 'Gublafrod',
        country: 'Mozambique'
    },
    {
        id: '37003f5dcb11',
        name: 'Sean Mitchell',
        email: 'besebha@eg.uk',
        city: 'Awonutcav',
        country: 'New Caledonia'
    },
    {
        id: 'd163b79bf9d5',
        name: 'Elijah May',
        email: 'za@wipli.lr',
        city: 'Zaevusi',
        country: 'Papua New Guinea'
    },
    {
        id: 'c4558f16d36f',
        name: 'Olga Vasquez',
        email: 'towotvu@gusi.km',
        city: 'Ohocopzib',
        country: 'Ecuador'
    },
    {
        id: '8cfd878b80e0',
        name: 'Tommy Richards',
        email: 'wecap@li.at',
        city: 'Volieze',
        country: 'Tanzania'
    },
    {
        id: 'eab0452506d4',
        name: 'Lottie Martinez',
        email: 'cuchu@az.ki',
        city: 'Pawtoto',
        country: 'Georgia'
    },
    {
        id: 'a8316f9e4143',
        name: 'Beulah McDonald',
        email: 'guebu@kemjob.nr',
        city: 'Ehfujoli',
        country: 'Anguilla'
    },
    {
        id: '19c5291ebb33',
        name: 'Lilly Miller',
        email: 'hohdacso@dohikku.bs',
        city: 'Cahbefbaf',
        country: 'Bosnia & Herzegovina'
    },
    {
        id: 'fa54500ab383',
        name: 'Jeremiah Larson',
        email: 'kabafmoj@ulu.do',
        city: 'Evitevo',
        country: 'Equatorial Guinea'
    },
    {
        id: '4df6ecc61de7',
        name: 'Willie Smith',
        email: 'liwimvu@fa.zw',
        city: 'Ufaforod',
        country: 'Åland Islands'
    },
    {
        id: '380c8e4e9420',
        name: 'Sophia Daniels',
        email: 'nu@mopkab.kh',
        city: 'Saugma',
        country: 'Nicaragua'
    },
    {
        id: '41c8538915ce',
        name: 'John Houston',
        email: 'len@per.lk',
        city: 'Lehhaswu',
        country: 'Micronesia'
    },
    {
        id: '37e2b19cd6dd',
        name: 'Daisy Knight',
        email: 'pafezagid@hazfa.st',
        city: 'Megurfu',
        country: 'Belize'
    },
    {
        id: 'abbaab84cc43',
        name: 'Howard Weaver',
        email: 'muj@pim.cd',
        city: 'Likzenda',
        country: 'Western Sahara'
    },
    {
        id: '18f220e4c2c3',
        name: 'Sally Hamilton',
        email: 'nohsiruz@simdi.aq',
        city: 'Zuwiho',
        country: 'Argentina'
    },
    {
        id: '4e02283dfd68',
        name: 'Elva Sanders',
        email: 'vef@zimzot.py',
        city: 'Afihasnab',
        country: 'Honduras'
    },
    {
        id: '764562e789bc',
        name: 'Julian Stanley',
        email: 'ezu@iluse.ly',
        city: 'Noculho',
        country: 'Benin'
    },
    {
        id: 'ad76b52ad398',
        name: 'Angel Abbott',
        email: 'no@dujez.bj',
        city: 'Gumjahav',
        country: 'Myanmar (Burma)'
    }
]

users.map((item, index) => (item.index = index + 1))

export { users }

export const userLabels = {
    id: 'ID',
    name: '姓名',
    email: '邮箱',
    city: '城市',
    country: '国家',
    index: '序号'
}

export const userColbumLabels = [
    { key: 'label', label: '项' },
    { key: 'value', label: '值' }
]
