const collection = [{
        title: 'Prison Break ',
        img: 'https://images6.fanpop.com/image/photos/34800000/Prison-Break-prison-break-34829728-1280-960.jpg',
        author: 'Paul T. Scheuring',
        category: ['Action'],
        link: 'https://youtu.be/AL9zLctDJaU',
        description: "En raison d'un complot politique, un innocent est condamné à mort et son seul espoir est son frère, qui a pour mission de se faire envoyer délibérément dans la même prison pour qu'ils puissent s'en échapper ensemble."
    },

    {
        title: 'Casa de Papel ',
        img: 'https://images.wallpapersden.com/image/download/money-heist_a2ttbG2UmZqaraWkpJRmZ21lrW5rZQ.jpg',
        author: 'Alex Pina',
        category: ['Action'],
        link: 'https://youtu.be/hMANIarjT50',
        description: "Un groupe de voleurs très particuliers s'attaquent à l'usine de Moneda et Timbre pour mener le braquage le plus parfait de l'histoire de l'Espagne et repartir avec 2400 millions d'euros."
    },

    {
        title: 'Family Business ',
        img: 'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/349/dgniftroxmyehbahw8dicgxvmbi-333.jpg',
        author: 'Igor Gotesman',
        category: ['Comedie'],
        link: 'https://youtu.be/axYAgIVfox4',
        description: "Apprenant que le cannabis sera légalisé, Joseph, un entrepreneur en faillite décide avec l'aide de sa famille et de ses amis de transformer la boucherie casher de son père et d'ouvrir le premier coffee shop de marijuana en France."
    },

    {
        title: 'Friends ',
        img: 'https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg',
        author: 'David Crane',
        category: ['Comedie'],
        link: 'https://youtu.be/hDNNmeeJs1Q',
        description: "Suit les vies personnelles et professionnelles de six amis d'une vingtaine et trentaine d'années vivant à Manhattan."
    },

    {
        title: 'Suits ',
        img: 'https://img.over-blog-kiwi.com/0/95/30/84/20200525/ob_511783_7800515076-suits-avocats-sur-mesure.jpg',
        author: 'Aaron Korsh',
        category: ['Drama'],
        link: 'https://youtu.be/85z53bAebsI',
        description: " Le brillant Mike Ross, ayant abandonné ses études universitaires, est en cavale à la suite d'un trafic de drogue qui mal tourné. Il trouve un emploi où il travaille avec Harvey Specter, l'un des meilleurs avocats de la ville de New York."
    },

    {
        title: 'Lucifer ',
        img: 'https://images.wallpapersden.com/image/download/lucifer-season-3_59149_1280x960.jpg',
        author: 'Tom Kapinos',
        category: ['Fantasy'],
        link: 'https://youtu.be/X4bF_quwNtw',
        description: "Lucifer Morningstar en a assez d'être serviteur dévoué en Enfer et décide de passer du temps sur Terre afin de mieux comprendre l'humanité. Il s'installe à Los Angeles, la cité des anges."
    },

    {
        title: 'Black Mirror ',
        img: 'https://wallpaperaccess.com/full/1304837.jpg',
        author: 'Charlie Brooker',
        category: ['Sci-Fi'],
        link: 'https://youtu.be/jDiYGjp5iFg',
        description: "Une série d'anthologie explorant un monde tourné vers la haute technologie où se heurtent les plus grandes innovations et les instincts les plus sombres de l'humanité."
    },

    {
        title: 'Narcos ',
        img: 'https://images.everyeye.it/img-notizie/narcos-mexico-netflix-rinnova-serie-terza-stagione-diego-luna-non-sara-v3-477436-1280x960.jpg',
        author: 'Carlo Bernanrd',
        category: ['Biographie'],
        link: 'https://youtu.be/xl8zdCY-abw',
        description: "Un article sur les exploits criminels du seigneur colombien de la drogue, Pablo Escobar, ainsi que sur les nombreux autres grands noms de la drogue qui ont frappé le pays au fil des ans."
    },

    {
        title: 'Breaking Bad ',
        img: 'https://wallpaperstock.net/breaking-bad%2C--series%2C-american_wallpapers_57504_1280x960.jpg',
        author: 'Vince Gillingan',
        category: ['Crime'],
        link: 'https://youtu.be/HhesaQXLuRY',
        description: "Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l'avenir de sa famille."
    },

    {
        title: 'The Boys ',
        img: 'https://www.fredzone.org/wp-content/uploads/2020/09/The-Boys-Amazon.jpg',
        author: 'Eric Kripke',
        category: ['Comedie'],
        link: 'https://youtu.be/06rueu_fh30',
        description: "Une histoire d'action centrée sur une équipe de la CIA chargée de maintenir les super-héros en ligne, par tous les moyens nécessaires"
    }

]

const mainContainer = document.querySelector("body > section:nth-child(2) > div")
mainContainer.innerHTML = '';

const columns = document.createElement('div')
columns.className = 'columns is-multiline';

mainContainer.appendChild(columns)

for (let element of collection) {

    const column = document.createElement('div')
    column.className = 'column is-3';

    const card = document.createElement('div')
    card.className = 'card';

    const card_image = document.createElement('div')
    card_image.className = 'card-image';

    const image = document.createElement('figure')
    image.className = 'image is-4by3';

    const img = document.createElement('img')
    img.src = element.img;

    const card_content = document.createElement('div')
    card_content.className = 'card-content';

    const tag = document.createElement('span')
    tag.className = 'tag is-success'
    tag.textContent = element.category;

    const media = document.createElement('div')
    media.className = 'media'

    const media_content = document.createElement('div')
    media_content.className = 'media-content'

    const title = document.createElement('p')
    title.className = 'title is-4'
    title.textContent = element.title;

    const link = document.createElement('a')
    link.target = '_blank'
    link.href = element.link;

    const icon_yt = document.createElement('i')
    icon_yt.className = 'fab fa-youtube fa-1x'

    const subtitle = document.createElement('p')
    subtitle.className = 'subtitle is-6'
    subtitle.textContent = element.author;

    const content = document.createElement('div')
    content.className = 'content'
    content.textContent = element.description;


    columns.appendChild(column)
    column.appendChild(card)
    card.appendChild(card_image)
    card_image.appendChild(image)
    image.appendChild(img)
    card.appendChild(card_content)
    card_content.appendChild(tag)
    card_content.appendChild(media)
    media.appendChild(media_content)
    media_content.appendChild(title)
    title.appendChild(link)
    link.appendChild(icon_yt)
    media_content.appendChild(subtitle)
    card_content.appendChild(content)

}

function filterSeries(pattern) {
    const results = []

    for (let serie of collection) {
        if (serie.title.toLowerCase().match(pattern) || serie.description.toLowerCase().match(pattern))
            results.push(serie)
    }

    const resultsDiv = document.querySelector('#results')
    resultsDiv.innerHTML = ''
    mainContainer.innerHTML = ''

    for (let element of results) {


        const column = document.createElement('div')
        column.className = 'column is-3';

        const card = document.createElement('div')
        card.className = 'card';

        const card_image = document.createElement('div')
        card_image.className = 'card-image';

        const image = document.createElement('figure')
        image.className = 'image is-4by3';

        const img = document.createElement('img')
        img.src = element.img;

        const card_content = document.createElement('div')
        card_content.className = 'card-content';

        const tag = document.createElement('span')
        tag.className = 'tag is-success'
        tag.textContent = element.category;

        const media = document.createElement('div')
        media.className = 'media'

        const media_content = document.createElement('div')
        media_content.className = 'media-content'

        const title = document.createElement('p')
        title.className = 'title is-4'
        title.textContent = element.title;

        const link = document.createElement('a')
        link.target = '_blank'
        link.href = element.link;

        const icon_yt = document.createElement('i')
        icon_yt.className = 'fab fa-youtube fa-1x'

        const subtitle = document.createElement('p')
        subtitle.className = 'subtitle is-6'
        subtitle.textContent = element.author;

        const content = document.createElement('div')
        content.className = 'content'
        content.textContent = element.description;


        resultsDiv.appendChild(column)
        column.appendChild(card)
        card.appendChild(card_image)
        card_image.appendChild(image)
        image.appendChild(img)
        card.appendChild(card_content)
        card_content.appendChild(tag)
        card_content.appendChild(media)
        media.appendChild(media_content)
        media_content.appendChild(title)
        title.appendChild(link)
        link.appendChild(icon_yt)
        media_content.appendChild(subtitle)
        card_content.appendChild(content)


    }

}

document.querySelector('#filter_input')
    .addEventListener('keyup', input => {
        filterSeries(input.target.value.toLowerCase())
    })