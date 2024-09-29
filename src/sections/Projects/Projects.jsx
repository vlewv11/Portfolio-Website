import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ageRecognition from '../../assets/age_recognition.jpg';
import flappyBird from '../../assets/flappy_bird.jpg';
import spamFilter from '../../assets/spam_filter.jpg';
import humanDetection from '../../assets/human_detection.jpg';


function Projects() {
  const [showMoreFlappy, setShowMoreFlappy] = useState(false);
  const [showMoreHumanDetection, setShowMoreHumanDetection] = useState(false);
  const [showMoreAgeRecognition, setShowMoreAgeRecognition] = useState(false);
  const [showMoreSpamFilter, setShowMoreSpamFilter] = useState(false);
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <img src={flappyBird} alt="flappy bird" />
          <div className={styles.projectInfo}>
            <h3>FlappyBird AI Bot</h3>
            <p><strong>NEAT PyGame Pickle</strong></p><br />
            <p>FlappyBird using NEAT (NeuroEvolution with Augmented Topologies) 
              framework with integrated Genetic Algorithm, tuning the model and population 
              genomes as soon it riches the game score 500</p>
            <span className={styles.links}>
            <a onClick={() => setShowMoreFlappy(!showMoreFlappy)} style={{ cursor: 'pointer' }}>
                {showMoreFlappy ? 'Show less' : 'Read more'}
            </a>
            <a href="https://github.com/vlewv11/FlappyBird-AI-bot" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a></span>
          </div>
        </div>
        <div className={styles.projectReadmore}>
          {showMoreFlappy && (
            <div>
              <h3>Implementation: </h3><br />
              <p><strong>Game Setup:</strong> The game is built using Pygame, where the bird restarts if 
              it touches a pipe or the top/bottom of the screen.</p>
              <p><strong>Fitness:</strong> Fitness decreases with each bird's death, with extra penalties 
              for dying by hitting the top/bottom of the screen. Birds are rewarded for successfully passing 
              through pipes.</p>
              <p><strong>NEAT Parameters:</strong> Population size: 100, Hidden layers: 1, Activation 
              function: tanh, Fitness threshold: 20,000 (equivalent to a game score of 500).</p>
              <p><strong>Features:</strong> Bird velocity, bird y-position, pipe x-position, top pipe y-position, and 
                bottom pipe y-position.</p><br />
              <h3>Results:</h3><br />
              <p>After 280 generations, the AI bot reached the fitness threshold, and the bird can now 
                consistently achieve a score of approximately 300 in each game.</p>
            </div>
          )}
        </div>
        <div className={styles.project}>
          <img src={humanDetection} alt="human detection" />
          <div className={styles.projectInfo}>
            <h3>Human Detection with Area Attendance</h3>
            <p><strong>OpenCV PIL Ultralytics TKinter</strong></p><br />
            <p>YOLOv10 model and DeepSort algorithm to detect presence in video using polygons for entry and exit areas, enabling 
              calculations of attendance and interest in public places. A Tkinter-based 
              GUI allows drawing and adjustment of these polygons.</p>
            <span className={styles.links}>
            <a onClick={() => setShowMoreHumanDetection(!showMoreHumanDetection)} style={{ cursor: 'pointer' }}>
                {showMoreHumanDetection ? 'Show less' : 'Read more'}
            </a>
            <a href="https://github.com/vlewv11/Human-Detection-with-Area-Attendance" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a></span>
          </div>
        </div>
        <div className={styles.projectReadmore}>
          {showMoreHumanDetection && (
            <div>
              <h3>Implementation: </h3><br />
              <p><strong>Human Detection Model:</strong> Utilizes the YOLOv10 model for accurate human detection in video footage.</p>
              <p><strong>DeepSort Algorithm:</strong> The DeepSort algorithm helps the tracker detect multiple human occurrences and 
              intersections. If the model fails to detect a human in a frame, it stores the human's ID and identifies the person as 
              the same individual, not a new one, in subsequent frames by adjusting the max-age parameter.</p>
              <p><strong>Polygons:</strong> Two polygons, inner and outer, are used for tracking detected humans within designated 
              areas. These polygons mark entry and exit zones, enabling accurate tracking of human movement and calculations of 
              attendance and interest in specific exhibits.</p>
              <p><strong>GUI:</strong> A GUI built with Tkinter allows users to draw and adjust polygons dynamically on the first 
              frame of a video. This helps to determine coordinates for entry and exit polygons, which enables the detection of the 
              number of customers/guests in a specific area and tracks how much time was spent in that area.</p><br />
              <h3>Results:</h3><br />
              <p>This algorithm helps accurately detect people and track their attendance using two polygons: an outer and inner 
                zone. It measures interest levels by counting the time between entering the outer polygon and exiting the inner
                polygon. This project can be integrated as a statistical evaluation tool for museums, shops, or other public spaces, 
                providing insights into visitor engagement and area-specific interest.</p>
            </div>
          )}
        </div>
        <div className={styles.project}>
          <img src={ageRecognition} alt="age recogntion" />
          <div className={styles.projectInfo}>
            <h3>Age Recognition with Localization</h3>
            <p><strong>Tensorflow Keras OpenCV Flask SpotifyAPI</strong></p><br />
            <p> OpenCV's Haar Cascade for face detection, feeding into a CNN model based on VGG19. Integrated with Spotify's API 
              recomendation system and wrapped on Flask server to recomend nostalgic music based on predicted age.</p>
            <span className={styles.links}>
            <a onClick={() => setShowMoreAgeRecognition(!showMoreAgeRecognition)} style={{ cursor: 'pointer' }}>
                {showMoreAgeRecognition ? 'Show less' : 'Read more'}
            </a>
            <a href="https://github.com/vlewv11/Tailoring-Music-for-Every-Generation" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a></span>
          </div>
        </div>
        <div className={styles.projectReadmore}>
          {showMoreAgeRecognition && (
            <div>
              <h3>Implementation: </h3><br />
              <p><strong>Logic:</strong> The system first detects a user's face, predicts their age using a CNN model, and assigns 
              them to an age group. Based on this age group, it recommends nostalgic music tracks, which are extended through 
              Spotify's API and stored on a Flask server for playback.</p>
              <p><strong>Face Detection:</strong> OpenCV's Haar Cascade is used to detect the user's face. The detected face is then 
              cropped and prepared for age prediction.</p>
              <p><strong>Age Recognition Model:</strong> The cropped face is sent to a CNN model based on VGG19, trained on 23,000 
              instances. This model predicts the user's age with a 6.32 MAE (Mean Absolute Error). Once the age is predicted, the 
              system assigns the user to the corresponding age group.</p>
              <p><strong>Flask Server:</strong> A Flask server is responsible for storing demo tracks, which users can access and 
              play after their age group has been determined and appropriate tracks have been selected.</p>
              <p><strong>Music Recommendation:</strong> The system recommends top music tracks for the user's predicted age group 
              to evoke nostalgic feelings. The Spotify API is integrated to extend these music recommendations, enhancing the user 
              experience with a broader selection of tracks.</p><br />
              <h3>Resutls: </h3><br />
              <p>The system accurately predicts age with a 6.32 MAE using the VGG19 model. Based on the predicted age group, 
                it provides personalized music recommendations, expanded via the Spotify API. Demo tracks are stored on a Flask 
                server for seamless playback, enhancing the user experience with tailored, nostalgic music.</p>
            </div>
          )}
        </div>
        <div className={styles.project}>
          <img src={spamFilter} alt="span filter" />
          <div className={styles.projectInfo}>
            <h3>Spam Filter Based on Sender Information</h3>
            <p><strong>Scikit-Learn NumPy Pandas Email Matplotlib</strong></p><br />
            <p>A meta model by combining a Naïve Bayes model trained on email text with a Random Forest 
              model based on sender features. Personal mailbox data was used for fitting Logistic Regression Meta Model.
            </p>
            <span className={styles.links}>
            <a onClick={() => setShowMoreSpamFilter(!showMoreSpamFilter)} style={{ cursor: 'pointer' }}>
                {showMoreSpamFilter ? 'Show less' : 'Read more'}
            </a>
            <a href="https://github.com/vlewv11/Spam-Filter" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a></span>
          </div>
        </div>
        <div className={styles.projectReadmore}>
          {showMoreSpamFilter && (
            <div>
              <h3>Implementation:</h3><br />
              <p><strong>Data Mining:</strong> Data was mined from my personal email account (leealkon@gmail.com) to create a diverse 
              dataset of real-world examples, with each email manually assigned as either spam or ham.</p>
              <p><strong>Naïve Bayes (NB):</strong> The Multinomial Naïve Bayes model evaluated email bodies, achieving an accuracy 
              of 0.77 by analyzing the content of the messages.</p>
              <p><strong>Random Forest (RF):</strong> The Random Forest model was trained using the rest senders' features, including
              sender names, email domains, and mail descriptions, achieving an accuracy of 0.80.</p>
              <p><strong>Meta-Model:</strong> Combining the Naïve Bayes, Random Forest, and Logistic Regression models resulted 
              in a total accuracy of 0.98</p><br />
              <h3>Results:</h3><br />
              <p>The combined model demonstrated superior performance in spam detection, with the Naïve 
              Bayes model at 77% accuracy, the Random Forest model at 80% accuracy, and the overall meta-model achieving 98%. This 
              approach effectively handled class imbalance and improved spam detection by analyzing both email content and sender 
              behavior.</p>
            </div>
          )}
        </div>
      </div>
      
    </section>
  );
}

export default Projects;
