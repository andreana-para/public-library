import styles from '../styles/HomePage.module.css';
import book1 from '../assets/sunriseOnTheReaping.jpg';
import book2 from '../assets/1984.jpg';
import book3 from '../assets/throneOfGlass.jpg';
import book4 from '../assets/The_Cat_in_the_Hat.png';
import book5 from '../assets/theGiver.jpg';
import book6 from '../assets/theHandmaidsTale.jpg';
import book7 from '../assets/theHobbit.jpg';
import { Link } from 'react-router-dom';


const books = [
    { id: 'sunrise', src: book1, alt: 'Sunrise on the Reaping' },
    { id: '1984', src: book2, alt: '1984' },
    { id: 'throne', src: book3, alt: 'Throne of Glass' },
    { id: 'cat', src: book4, alt: 'The Cat in the Hat' },
    { id: 'giver', src: book5, alt: 'The Giver' },
    { id: 'handmaid', src: book6, alt: 'The Handmaid\'s Tale' },
    { id: 'hobbit', src: book7, alt: 'The Hobbit' },
];

const HomePage = () => {
    return (
        <div>
            <div className={styles.topBoxes}>
                <div className={styles.left}>
                    <h2>Gather</h2>
                </div>

                <div className={styles.middle}>
                    <h2>Discover</h2>
                </div>

                <div className={styles.right}>
                    <h2>Explore</h2>
                </div>
            </div>

            <div className={styles.scrollContainer}>
                <div className={styles.scrollTrack}>
                    {[...books, ...books].map((book, index) => (
                        <Link
                            key={index}
                            to={`/book/${book.id}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={book.src} alt={book.alt} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default HomePage;