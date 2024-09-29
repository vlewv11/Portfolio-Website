import styles from './HeroStyles.module.css';
import heroImg from '../../assets/alex.png';
import twitterLight from '../../assets/instagram.svg';
import githubLight from '../../assets/github.svg';
import linkedinLight from '../../assets/linkedin.svg';
import engCV from '../../assets/AlexeyLi_cv.pdf';
import korCV from '../../assets/LiAlexey_cv(kor).pdf';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Alexey Li"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Alexey (Alex) Li
        </h1>
        <h2>ML engineer | Computer Vision</h2>
        <p className={styles.description}>
        I am a Machine Learning Engineer specializing in Computer Vision and 
        Convolutional Neural Networks (CNNs). My expertise lies in developing 
        and optimizing models for image recognition, object detection, and other 
        visual tasks. I focus on building scalable machine learning solutions, 
        fine-tuning deep learning architectures, and efficiently handling large 
        datasets to deliver high-performance systems. 
        </p>
        <span>
          <a href="https://www.instagram.com/vlewv/?igsh=Nmo0Y255Zm1lYmcw&utm_source=qr" target="_blank">
            <img src={twitterLight} alt="Twitter icon" />
          </a>
          <a href="https://github.com/vlewv11" target="_blank">
            <img src={githubLight} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/alexey-li-265180262" target="_blank">
            <img src={linkedinLight} alt="Linkedin icon" />
          </a>
        
        <a href={engCV} download>
          <button className={styles.button}>
            Download CV(eng)
          </button>
        </a>
        <a href={korCV} download>
          <button className={styles.button}>
            Download CV(kor)
          </button>
        </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
