var faker = require("faker");

faker.seed(123);

const BooksData = [
    {
        id: faker.datatype.uuid(),
        bookName: "Harry Potter and the Philosopher's Stone",
        authorName: "JK Rowling",
        img: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Attitude Is Everything: Change Your Attitude",
        authorName: "Jeff Keller",
        img: "https://images-na.ssl-images-amazon.com/images/I/710jnzKlDTL.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Rich Dad Poor Dad",
        authorName: "Robert T. Kiyosaki",
        img: "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "The Automatic Millionaire",
        authorName: "David Bach",
        img: "https://images-na.ssl-images-amazon.com/images/I/51TwrcNahKL.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Your Money or Your Life",
        authorName: "Vicki Robin",
        img: "https://images-na.ssl-images-amazon.com/images/I/51fFQ9HJBjL._SX325_BO1,204,203,200_.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Second Chance : For Your Money and Your Life",
        authorName: "Robert T. Kiyosaki",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1441818069l/24846302._SY475_.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Harry Potter and the Chamber of Secrets",
        authorName: "JK Rowling",
        img: "https://hpmedia.bloomsbury.com/rep/s/9781408855904_309575.jpeg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Harry Potter and the Deathly Hallows",
        authorName: "JK Rowling",
        img: "https://images.penguinrandomhouse.com/cover/9780739360385",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Financial Freedom A Proven Path to All the Money You Will Ever Need",
        authorName: "Vicki Robin",
        img: "https://images.randomhouse.com/cover/9780525534587",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Your Money Life: Your 20s",
        authorName: "Peter Dunn",
        img: "https://img.money.com/2019/08/your-money-life-your-20s.jpg?quality=60",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Broke Millennial: Stop Scraping By and Get Your Financial Life Together",
        authorName: "Erin Lowry",
        img: "https://img.money.com/2019/08/broke-millennial-1.jpg?quality=60",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Debt Free For Life: The Finish Rich Plan for Financial Freedom",
        authorName: "David Bach",
        img: "https://images-na.ssl-images-amazon.com/images/I/51Dr0G5qiWL._SX328_BO1,204,203,200_.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "The Latte Factor: Why You Don't Have to Be Rich to Live Rich",
        authorName: "David Bach",
        img: "https://images-na.ssl-images-amazon.com/images/I/41ma4+wZ0RL._SX323_BO1,204,203,200_.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Broke Millennial Talks Money: Scripts, Stories, and Advice to Navigate Awkward Financial Conversations",
        authorName: "Erin Lowry",
        img: "https://m.media-amazon.com/images/I/412s7+CZOTL.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Broke Millennial Takes On Investing: A Beginner's Guide to Leveling Up Your Money",
        authorName: "Erin Lowry",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553439689l/41108699.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    },
    {
        id: faker.datatype.uuid(),
        bookName: "Think and Grow Rich",
        authorName: "Napoleon Hill",
        img: "https://www.naphill.org/wp-content/uploads/paperback-think-and-grow-rich-1937-new.jpg",
        isbn: faker.datatype.number({
            "min": 1000000000000,
            "max": 9999999999999
        }),
        bookDescription: faker.lorem.paragraph(8)
    }
]

const AuthorData = [
    {
        id: faker.datatype.uuid(),
        authorImg: "https://i.insider.com/5978b6df197cf7fd1f8b48a4?width=750&format=jpeg&auto=webp",
        authorName: "JK Rowling",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://harpercollins.co.in/wp-content/uploads/2016/01/JEFF-KELLER.jpg",
        authorName: "Jeff Keller",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://pbs.twimg.com/profile_images/472421066007015424/MHUJj15g_400x400.jpeg",
        authorName: "Robert T. Kiyosaki",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://images3.penguinrandomhouse.com/author/235545",
        authorName: "Vicki Robin",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://www.wwsg.com/wp-content/uploads/2016/11/Peter-Dunn-Detail-Image.jpg",
        authorName: "Peter Dunn",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://images.gr-assets.com/authors/1552219366p5/15907227.jpg",
        authorName: "Erin Lowry",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://upload.wikimedia.org/wikipedia/commons/8/89/Final_headshot_David_Bach_e_142.jpg",
        authorName: "David Bach",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
    {
        id: faker.datatype.uuid(),
        authorImg: "https://4residualinc.com/wp-content/uploads/2018/09/napoleon-hill.jpg",
        authorName: "Napoleon Hill",
        authorDescription: faker.lorem.paragraph(5),
        socials: {
            twitter: "https://twitter.com/rohan_gupta96",
            instagram: "https://www.instagram.com/rohan_gupta94/",
            facebook: "https://www.facebook.com/rohang9896"
        },
    },
]

const addBooksInAuthorsData = (AuthorData, BooksData) => {
    for(let i=0; i<AuthorData.length; i++) {
        AuthorData[i].books = BooksData.filter(book => book.authorName.toLowerCase() === AuthorData[i].authorName.toLowerCase())
    }
}

addBooksInAuthorsData(AuthorData, BooksData);


export {BooksData, AuthorData}