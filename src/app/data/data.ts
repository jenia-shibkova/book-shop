import { IBook, Category } from '../books-page/models/book.models';

export const DATA: IBook[] = [
  {
    id: '1',
    name: 'The Handmaids Tale',
    author: 'Margaret Atwood',
    description:
      'In Margaret Atwood’s dystopian future, environmental disasters and declining birthrates have led to a Second American Civil War. The result is the rise of the Republic of Gilead, a totalitarian regime that enforces rigid social roles and enslaves the few remaining fertile women. Offred is one of these, a Handmaid bound to produce children for one of Gilead’s commanders. Deprived of her husband, her child, her freedom, and even her own name, Offred clings to her memories and her will to survive. At once a scathing satire, an ominous warning, and a tour de force of narrative suspense, The Handmaid’s Tale is a modern classic.',
    price: 17.34,
    category: Category.Fiction,
    createDate: 1985,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Bauhaus. Updated Edition',
    author: 'Magdalena Droste',
    description:
      'Magdalena Droste studied art history and literature in Aachen and Marburg. From 1980 she worked at the Bauhaus-Archiv in Berlin, after which she worked as a professor of art history at the BTU Cottbus. She has been responsible for numerous exhibitions and publications across all Bauhaus themes and artists.',
    price: 16.53,
    category: Category.Arts,
    createDate: 1990,
    isAvailable: false,
  },
  {
    id: '3',
    name: 'Empireland: How Imperialism Has Shaped Modern Britain',
    author: 'Sathnam Sanghera',
    description:
      'In his brilliantly illuminating new book Sathnam Sanghera demonstrates how so much of what we consider to be modern Britain is actually rooted in our imperial past. In prose that is, at once, both clear-eyed and full of acerbic wit, Sanghera shows how our past is everywhere: from how we live to how we think, from the foundation of the NHS to the nature of our racism, from our distrust of intellectuals in public life to the exceptionalism that imbued the campaign for Brexit and the governments early response to the Covid crisis. And yet empire is a subject, weirdly hidden from view.',
    price: 32.87,
    category: Category.History,
    createDate: 2021,
    isAvailable: true,
  },
  {
    id: '4',
    name: 'Origin',
    author: 'Dan Brown',
    description:
      'Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the Guggenheim Museum Bilbao to attend the unveiling of an astonishing scientific breakthrough. The evening’s host is billionaire Edmond Kirsch, a futurist whose dazzling high-tech inventions and audacious predictions have made him a controversial figure around the world.',
    price: 7.85,
    category: Category.Fiction,
    createDate: 2018,
    isAvailable: true,
  },
  {
    id: '5',
    name: 'Black Sun',
    author: 'Owen Matthews',
    description:
      '1961. Hidden deep within the forests of central Soviet Russia is a place that doesn’t appear on any map: a city called Arzamas-16. Here a community of dedicated scientists, technicians and engineers are building the most powerful nuclear device the world will ever see – three thousand times more powerful than Hiroshima.',
    price: 14.81,
    category: Category.Adventure,
    createDate: 2019,
    isAvailable: true,
  },
  {
    id: '6',
    name: 'The Princess Diarist',
    author: 'Carrie Fisher',
    description:
      'The Princess Diarist is a 2016 memoir written by Carrie Fisher, based on diaries she kept as a young woman around the time she starred in the 1977 film Star Wars. ... The book describes Fishers affair with co-star Harrison Ford in detail.',
    price: 11.39,
    category: Category.Biographies,
    createDate: 2017,
    isAvailable: true,
  },
  {
    id: '7',
    name: 'Atomic Habits',
    author: 'James Clear',
    description:
      'An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth. Bad habits repeat themselves again and again not because you dont want to change, but because you have the wrong system for change.',
    price: 29.4,
    category: Category.BusinessMoney,
    createDate: 2018,
    isAvailable: true,
  },
  {
    id: '8',
    name: 'Dune. Book 1',
    author: 'Brian Herbert',
    description:
      'Dune, Frank Herbert’s epic science-fiction masterpiece set in the far future amidst a sprawling feudal interstellar society, tells the story of Paul Atreides as he and his family accept control of the desert planet Arrakis. A stunning blend of adventure and mysticism, environmentalism, and politics, Dune is a powerful, fantastical tale that takes an unprecedented look into our universe, and is transformed by the graphic novel format. In the first volume of a three-book trilogy encompassing the original novel, Brian Herbert and Kevin J. Anderson’s adaptation retains the storys integrity, and Raúl Allén and Patricia Martín’s magnificent illustrations, along with cover art by Bill Sienkiewicz, bring the book to life for a new generation of readers.',
    price: 18.94,
    category: Category.GraphicNovels,
    createDate: 2020,
    isAvailable: true,
  },
  {
    id: '9',
    name: 'Game of Thrones: A Guide to Westeros and Beyond',
    author: 'Myles McNutt',
    description:
      'Covering all eight seasons of the hit HBO show, this remarkable volume offers a unique and exciting visual exploration into the incredible world of Game of Thrones.',
    price: 26.76,
    category: Category.Fantasy,
    createDate: 2019,
    isAvailable: true,
  },
  {
    id: '10',
    name: 'A Love Story for Bewildered Girls',
    author: 'Emma Morgan',
    description:
      'Grace has what one might call a "full and interesting life" which is code for not married and has no kids. Her life is the envy of her straight friends, but all this time she has been waiting in secret for love to hit her so hard that she runs out of breath, like the way a wave in a rough sea bowls you over, slams you into the sand, and nearly drowns you.',
    price: 20.77,
    category: Category.Romance,
    createDate: 2020,
    isAvailable: true,
  },
  {
    id: '11',
    name: 'His Dark Materials: The Complete Collection',
    author: 'Philip Pullman',
    description:
      'Lyra Belacqua lives half-wild and carefree among the scholars of Jordan College, with her daemon familiar always by her side. But the arrival of her fearsome uncle, Lord Asriel, draws her to the heart of a terrible struggle – a struggle born of Gobblers and stolen children, witch clans and armoured bears.',
    price: 20.77,
    category: Category.ChildrensBooks,
    createDate: 2015,
    isAvailable: true,
  },
  {
    id: '12',
    name: 'Recursion: A Novel',
    author: 'Blake Crouch',
    description:
      'Memory makes reality. Thats what NYC cop Barry Sutton is learning, as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.',
    price: 8.63,
    category: Category.ScienceFiction,
    createDate: 2019,
    isAvailable: true,
  },
  {
    id: '13',
    name: 'The Penguin Book of Brexit Cartoons',
    author: 'not available',
    description:
      'Not for many years has there been such a divisive issue as Brexit, and like all divisive issues it has provided a bonanza for cartoonists. This generous selection of pocket cartoons captures the sheer bewilderment and exasperation which have bedevilled us all since the referendum.',
    price: 3.99,
    category: Category.Politics,
    createDate: 2018,
    isAvailable: true,
  },
];
