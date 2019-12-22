const moviesMock = [
  {
    id: '6c4ae698-2337-4b99-ab95-c7cf76233717',
    title: 'Message, The (a.k.a. Mohammad: Messenger of God)',
    year: 2002,
    cover: 'http://dummyimage.com/168x165.png/dddddd/000000',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 2026,
    contentRating: 'PG-13',
    source:
      'https://yelp.com/maecenas/pulvinar/lobortis/est/phasellus/sit.json',
    tags: ['Action|Drama|Sci-Fi|Thriller', 'Horror']
  },
  {
    id: 'e49946a4-88ea-4929-8353-aea8310fd3f0',
    title: 'Virus',
    year: 1993,
    cover: 'http://dummyimage.com/195x136.jpg/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1980,
    contentRating: 'PG-13',
    source: 'http://shutterfly.com/libero.js',
    tags: ['Comedy', 'Comedy|Romance', 'Action|Sci-Fi', 'Drama|Mystery|Romance']
  },
  {
    id: '381f1010-0e19-46ba-bfe3-f06fb552bf23',
    title: 'Magnificent Obsession',
    year: 2010,
    cover: 'http://dummyimage.com/161x208.png/ff4444/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2002,
    contentRating: 'PG-13',
    source:
      'https://redcross.org/non/interdum/in/ante/vestibulum/ante/ipsum.jpg',
    tags: ['Drama|Thriller', 'Crime|Drama', 'Thriller', 'Drama|Romance']
  },
  {
    id: '83350f8b-dece-4ced-9e52-125d12364ed3',
    title: 'Watermark',
    year: 1992,
    cover: 'http://dummyimage.com/111x153.png/5fa2dd/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 2042,
    contentRating: 'R',
    source: 'https://zimbio.com/nisl/aenean.jsp',
    tags: [
      'Comedy',
      'Romance',
      'Drama|Thriller',
      'Adventure|Western',
      'Documentary|Drama|Musical'
    ]
  },
  {
    id: '26c26979-a86b-4268-a30f-d636eb0f2c19',
    title: 'M. Butterfly',
    year: 2009,
    cover: 'http://dummyimage.com/106x237.bmp/5fa2dd/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2056,
    contentRating: 'PG',
    source: 'http://businesswire.com/rutrum/neque.html',
    tags: ['Adventure|Children|Fantasy', 'Action|Crime|Drama|Thriller']
  },
  {
    id: '3d0d840d-5f1d-44a6-af3d-0d7e4401d8d2',
    title: 'Before I Self Destruct',
    year: 2012,
    cover: 'http://dummyimage.com/133x102.png/cc0000/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1981,
    contentRating: 'NC-17',
    source: 'https://aol.com/vestibulum/vestibulum.json',
    tags: ['Comedy', 'Comedy', 'Crime|Thriller', 'Horror|Mystery', 'Drama|War']
  },
  {
    id: '9cf885a4-bb6e-4dd2-9def-63736cfb0fa9',
    title: "By the Pricking of My Thumbs (Mon petit doigt m'a dit...)",
    year: 2003,
    cover: 'http://dummyimage.com/139x194.png/dddddd/000000',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1898,
    contentRating: 'G',
    source: 'https://feedburner.com/leo/rhoncus/sed.jpg',
    tags: ['Comedy', 'Drama|Musical|Romance']
  },
  {
    id: 'a8af27d1-ce7b-41f9-beef-293813e97046',
    title: 'Wuthering Heights',
    year: 1996,
    cover: 'http://dummyimage.com/127x212.bmp/ff4444/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 2009,
    contentRating: 'NC-17',
    source: 'http://woothemes.com/massa/donec/dapibus/duis.aspx',
    tags: ['Children|Comedy']
  },
  {
    id: '3d544b6a-d389-46db-b328-aed1bb6eb3bb',
    title:
      'Godzilla, Mothra, and King Ghidorah: Giant Monsters All-Out Attack (Gojira, Mosura, Kingu Gidorâ: Daikaijû sôkôgeki) (Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack)',
    year: 1990,
    cover: 'http://dummyimage.com/153x231.bmp/cc0000/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 1925,
    contentRating: 'NC-17',
    source: 'https://g.co/quam.jpg',
    tags: ['Crime|Drama', 'Drama', 'Sci-Fi', 'Drama']
  },
  {
    id: '89f3d729-cb62-47c7-96cc-09af006d71a4',
    title: 'Canvas',
    year: 2007,
    cover: 'http://dummyimage.com/148x149.bmp/ff4444/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 1903,
    contentRating: 'NC-17',
    source: 'https://cpanel.net/ligula/nec/sem/duis.jpg',
    tags: ['Drama', 'Horror|Sci-Fi']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie .tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0])
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
}