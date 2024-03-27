const users = [
    {
        id: '8c4835dc09ce',
        name: 'Beatrice Gomez',
        email: 'henurdi@nucma.org',
        city: 'Mejzupaj',
        cid: '1',
        country: 'New Caledonia',
        createAt: '2022-12-12'
    },
    {
        id: '12c8c36931f5',
        name: 'Millie Schultz',
        email: 'jo@wonrok.jo',
        city: 'Nunagwar',
        cid: '2',
        country: 'Ascension Island',
        range: {
            start: '2012-12-12',
            end: '2012-12-29'
        }
    },
    {
        id: 'e4293bf948ff',
        name: 'Ronald Castillo',
        email: 'jetwuf@ziz.cz',
        city: 'Mavizo',
        cid: '3',
        country: 'Latvia'
    },
    {
        id: 'aa5d7d39b2eb',
        name: 'Norman Horton',
        email: 'ku@aw.ae',
        city: 'Bawelebu',
        cid: '4',
        country: 'Afghanistan'
    },
    {
        id: '5ca28725b01b',
        name: 'Francis Wells',
        email: 'su@ufo.at',
        city: 'Kispatkem',
        cid: '5',
        country: 'Algeria'
    },
    {
        id: '1272a3a66047',
        name: 'Polly Conner',
        email: 'non@nolsizaz.fk',
        city: 'Iceotonac',
        cid: '6',
        country: 'Paraguay'
    },
    {
        id: 'ec45c949d686',
        name: 'Dennis Ruiz',
        email: 'ozjun@du.tn',
        city: 'Fobrarnuj',
        cid: '7',
        country: 'Mauritius'
    },
    {
        id: '7877e6cbe71b',
        name: 'Laura Vasquez',
        email: 'natom@vu.sr',
        city: 'Kumgulva',
        cid: '8',
        country: 'Albania'
    },
    {
        id: '8e82a48e19ed',
        name: 'Lou Morris',
        email: 'wip@vajub.al',
        city: 'Gublafrod',
        cid: '9',
        country: 'Mozambique'
    },
    {
        id: '37003f5dcb11',
        name: 'Sean Mitchell',
        email: 'besebha@eg.uk',
        city: 'Awonutcav',
        cid: '10',
        country: 'New Caledonia'
    },
    {
        id: 'd163b79bf9d5',
        name: 'Elijah May',
        email: 'za@wipli.lr',
        city: 'Zaevusi',
        cid: '11',
        country: 'Papua New Guinea'
    },
    {
        id: 'c4558f16d36f',
        name: 'Olga Vasquez',
        email: 'towotvu@gusi.km',
        city: 'Ohocopzib',
        cid: '12',
        country: 'Ecuador'
    },
    {
        id: '8cfd878b80e0',
        name: 'Tommy Richards',
        email: 'wecap@li.at',
        city: 'Volieze',
        cid: '13',
        country: 'Tanzania'
    },
    {
        id: 'eab0452506d4',
        name: 'Lottie Martinez',
        email: 'cuchu@az.ki',
        city: 'Pawtoto',
        cid: '14',
        country: 'Georgia'
    },
    {
        id: 'a8316f9e4143',
        name: 'Beulah McDonald',
        email: 'guebu@kemjob.nr',
        city: 'Ehfujoli',
        cid: '15',
        country: 'Anguilla'
    },
    {
        id: '19c5291ebb33',
        name: 'Lilly Miller',
        email: 'hohdacso@dohikku.bs',
        city: 'Cahbefbaf',
        cid: '16',
        country: 'Bosnia & Herzegovina'
    },
    {
        id: 'fa54500ab383',
        name: 'Jeremiah Larson',
        email: 'kabafmoj@ulu.do',
        city: 'Evitevo',
        cid: '17',
        country: 'Equatorial Guinea'
    },
    {
        id: '4df6ecc61de7',
        name: 'Willie Smith',
        email: 'liwimvu@fa.zw',
        city: 'Ufaforod',
        cid: '18',
        country: 'Åland Islands'
    },
    {
        id: '380c8e4e9420',
        name: 'Sophia Daniels',
        email: 'nu@mopkab.kh',
        city: 'Saugma',
        cid: '19',
        country: 'Nicaragua'
    },
    {
        id: '41c8538915ce',
        name: 'John Houston',
        email: 'len@per.lk',
        city: 'Lehhaswu',
        cid: '20',
        country: 'Micronesia'
    },
    {
        id: '37e2b19cd6dd',
        name: 'Daisy Knight',
        email: 'pafezagid@hazfa.st',
        city: 'Megurfu',
        cid: '21',
        country: 'Belize'
    },
    {
        id: 'abbaab84cc43',
        name: 'Howard Weaver',
        email: 'muj@pim.cd',
        city: 'Likzenda',
        cid: '22',
        country: 'Western Sahara'
    },
    {
        id: '18f220e4c2c3',
        name: 'Sally Hamilton',
        email: 'nohsiruz@simdi.aq',
        city: 'Zuwiho',
        cid: '23',
        country: 'Argentina'
    },
    {
        id: '4e02283dfd68',
        name: 'Elva Sanders',
        email: 'vef@zimzot.py',
        city: 'Afihasnab',
        cid: '24',
        country: 'Honduras'
    },
    {
        id: '764562e789bc',
        name: 'Julian Stanley',
        email: 'ezu@iluse.ly',
        city: 'Noculho',
        cid: '25',
        country: 'Benin'
    },
    {
        id: 'ad76b52ad398',
        name: 'Angel Abbott',
        email: 'no@dujez.bj',
        city: 'Gumjahav',
        cid: '26',
        country: 'Myanmar (Burma)'
    }
]

export const citys = [
    { value: '1', label: 'Mejzupaj', color: 'red' },
    { value: '2', label: 'Nunagwar' },
    { value: '3', label: 'Mavizo' },
    { value: '4', label: 'Bawelebu' },
    { value: '5', label: 'Kispatkem' },
    { value: '6', label: 'Iceotonac' },
    { value: '7', label: 'Fobrarnuj' },
    { value: '8', label: 'Kumgulva' },
    { value: '9', label: 'Gublafrod' },
    { value: '10', label: 'Awonutcav' },
    { value: '11', label: 'Zaevusi' },
    { value: '12', label: 'Ohocopzib' },
    { value: '13', label: 'Volieze' },
    { value: '14', label: 'Pawtoto' },
    { value: '15', label: 'Ehfujoli' },
    { value: '16', label: 'Cahbefbaf' },
    { value: '17', label: 'Evitevo' },
    { value: '18', label: 'Ufaforod' },
    { value: '19', label: 'Saugma' },
    { value: '20', label: 'Lehhaswu' },
    { value: '21', label: 'Megurfu' },
    { value: '22', label: 'Likzenda' },
    { value: '23', label: 'Zuwiho' },
    { value: '24', label: 'Afihasnab' },
    { value: '25', label: 'Noculho' },
    { value: '26', label: 'Gumjahav' }
]

users.map((item, index) => (item.index = index + 1))

export { users }

export const userLabels = {
    id: 'ID',
    name: '姓名',
    email: '邮箱',
    city: '城市',
    cid: '城市ID',
    country: '国家',
    index: '序号'
}

export const userColbumLabels = [
    { key: 'label', label: '项' },
    { key: 'value', label: '值' }
]
