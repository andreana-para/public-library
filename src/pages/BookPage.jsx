import { useParams } from 'react-router-dom';
import book1 from '../assets/sunriseOnTheReaping.jpg';
import book2 from '../assets/1984.jpg';
import book3 from '../assets/throneOfGlass.jpg';
import book4 from '../assets/The_Cat_in_the_Hat.png';
import book5 from '../assets/theGiver.jpg';
import book6 from '../assets/theHandmaidsTale.jpg';
import book7 from '../assets/theHobbit.jpg';
import styles from '../styles/BookPage.module.css'

const bookDetails = {
    sunrise: { title: "Sunrise on the Reaping", author: "Suzanne Collins", image: book1, description: `As the day dawns on the fiftieth annual 
        Hunger Games, fear grips the districts of Panem. This year, in honor of the Quarter Quell, twice as many tributes will be taken 
        from their homes. Back in District 12, Haymitch Abernathy is trying not to think too hard about his chances. All he cares about 
        is making it through the day and being with the girl he loves. When Haymitch’s name is called, he can feel all his dreams break. 
        He’s torn from his family and his love, shuttled to the Capitol with the three other District 12 tributes: a young friend who’s 
        nearly a sister to him, a compulsive oddsmaker, and the most stuck-up girl in town. As the Games begin, Haymitch understands he’s 
        been set up to fail. But there’s something in him that wants to fight . . . and have that fight reverberate far beyond the deadly 
        arena.` },


    "1984": { title: "1984", author: "George Orwell", image: book2, description: `A masterpiece of rebellion and imprisonment where war is 
        peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our 
        vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a 
        forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also 
        individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes 
        imaginable the destruction of truth freedom and individuality. With a foreword by Thomas Pynchon. This beautiful paperback edition 
        features deckled edges and french flaps a perfect gift for any occasion.` },


    throne: { title: "Throne of Glass", author: "Sarah J. Maas", image: book3, description: `In a land without magic, where the king rules with 
        an iron hand, an assassin is summoned to the castle. She comes not to kill the king, but to win her freedom. If she defeats 
        twenty-three killers, thieves, and warriors in a competition, she is released from prison to serve as the king's champion. Her name 
        is Celaena Sardothien. The Crown Prince will provoke her. The Captain of the Guard will protect her. But something evil dwells in 
        the castle of glass—and it's there to kill. When her competitors start dying one by one, Celaena's fight for freedom becomes a fight 
        for survival, and a desperate quest to root out the evil before it destroys her world.` },


    cat: { title: "The Cat in the Hat", author: "Dr. Seuss", image: book4, description: `Then he said That is that. And then he was gone 
        With a tip of his hat.A dreary day turns into a wild romp when this beloved story introduces readers to the Cat in the Hat and his 
        troublemaking friends, Thing 1 and Thing 2 – And don't forget Fish! A favorite among kids, parents and teachers, this story uses 
        simple words and basic rhyme to encourage and delight beginning readers.Originally created by Dr. Seuss himself, Beginner Books are 
        fun, funny, and easy to read. These unjacketed hardcover early readers encourage children to read all on their own, using simple 
        words and illustrations. Smaller than the classic large format Seuss picture books like The Lorax and Oh, The Places You'll Go!, 
        these portable packages are perfect for practicing readers ages 3-7, and lucky parents too!` },


    giver: { title: "The Giver", author: "Lois Lowry", image: book5, description: `At the age of twelve, Jonas, a young boy from a seemingly 
        utopian, futuristic world, is singled out to receive special training from The Giver, who alone holds the memories of the true joys 
        and pain of life.` },


    handmaid: { title: "The Handmaid's Tale", author: "Margaret Atwood", image: book6, description: `Now a Hulu series starring Elizabeth Moss. The Handmaid's Tale is an instant classic and eerily prescient 
        cultural phenomenon, from 'the patron saint of feminist dystopian fiction' ( New York Times ) The Handmaid’s Tale is a novel 
        of such power that the reader will be unable to forget its images and its forecast. Set in the near future, it describes life 
        in what was once the United States and is now called the Republic of Gilead, a monotheocracy that has reacted to social unrest 
        and a sharply declining birthrate by reverting to, and going beyond, the repressive intolerance of the original Puritans. The 
        regime takes the Book of Genesis absolutely at its word, with bizarre consequences for the women and men in its population. The 
        story is told through the eyes of Offred, one of the unfortunate Handmaids under the new social order. In condensed but eloquent 
        prose, by turns cool-eyed, tender, despairing, passionate, and wry, she reveals to us the dark corners behind the establishment’s 
        calm facade, as certain tendencies now in existence are carried to their logical conclusions. The Handmaid’s Tale is funny, 
        unexpected, horrifying, and altogether convincing. It is at once scathing satire, dire warning, and a tour de force. It is Margaret 
        Atwood at her best. ` },


    hobbit: { title: "The Hobbit", author: "J.R.R. Tolkien", image: book7, description: `Set in a time "Between the Dawn of Færie and the 
        Dominion of Men", The Hobbit follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by the 
        dragon, Smaug. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory. The story is told in 
        the form of an episodic quest, and most chapters introduce a specific creature, or type of creature, of Tolkien's Wilderland. By 
        accepting the disreputable, romantic, fey and adventurous side of his nature and applying his wits and common sense, Bilbo gains a 
        new level of maturity, competence and wisdom. The story reaches its climax in the Battle of Five Armies, where many of the characters 
        and creatures from earlier chapters re-emerge to engage in conflict. Personal growth and forms of heroism are central themes of the 
        story. Along with motifs of warfare, these themes have led critics to cite Tolkien's own experiences during World War I as 
        instrumental in shaping the story. The author's scholarly knowledge of Germanic philology and interest in fairy tales are also often 
        noted as influences.` },

};

const BookPage = () => {
    const { bookId } = useParams();
    const book = bookDetails[bookId];

    // if (!book) {
    //     return <h2 style={{ textAlign: 'center', padding: '2rem' }}>Book not found.</h2>;
    // }

    return (
        <div className= {styles.descriptionHolder}>
            <img className={styles.bookImage} src={book.image} />
            <h1>{book.title}</h1>
            <h3>by {book.author}</h3>
            <p>{book.description}</p>
        </div>
    );
};

export default BookPage;