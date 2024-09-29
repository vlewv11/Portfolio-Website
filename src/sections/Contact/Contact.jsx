import styles from './ContactStyles.module.css';
import linkedinLight from '../../assets/linkedin.svg';
import email from '../../assets/email.png';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <p className={styles.sectionTextP1}>Get in Touch</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contact_info_upper_container}>
        <div className={styles.contact_info_container}>
          <img src={email} alt="Email icon" className={styles.contact_icon} />
          <p><a href="mailto:examplemail@gmail.com">leealkon@gmail.com</a></p>
        </div>
        <div className={styles.contact_info_container}>
          <img src={linkedinLight} alt="LinkedIn icon" className={styles.email_icon} />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
