import libraryImage from '../assets/library.png'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.header}>About Us</h1>
                <img src={libraryImage} className={styles.image} />
                <p className={styles.paragraph}>The West Lafayette Public Library is a full-service public library 
                    serving the residents of West Lafayette, Indiana since 1921.
                </p>

                <p className={styles.paragraph}>The West Lafayette Public Library strives to be our community’s center for lifelong learning, the collector 
                    of our community’s written and audio-visual heritage, and the gateway to resources within and beyond the 
                    Library’s walls</p>
            </div>
        </div>
    )
}

export default About;