import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h1 id='about' className="about__header">О проекте</h1>
        <div className="about__grid">
          <div>
            <h2 className="about__title">Дипломный проект включал 5 этапов</h2>
            <div className="about__desctiption">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </div>
          </div>
          <div>
            <h2 className="about__title">
              На выполнение диплома ушло 5 недель
            </h2>
            <div className="about__desctiption">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </div>
          </div>
        </div>
        <div className="about__progress-grid">
          <div className="about__progress-grid-item about__backend-stat">
            1 неделя
          </div>
          <div className="about__progress-grid-item about__frontend-stat">
            4 недели
          </div>
          <div className="about__progress-grid-item">Back-end</div>
          <div className="about__progress-grid-item">Front-end</div>
        </div>
      </div>
    </div>
  );
}

export default About;
