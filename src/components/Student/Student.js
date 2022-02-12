import "./Student.css";

function Student() {
  return (
    <div className="student">
      <div className="student__content">
        <h1 id="student" className="student__header">Студент</h1>
        <div className="student__info">
          <div className="student__description">
            <h2 className="student__title">Егор</h2>
            <div className="student__profession">Веб-разработчик, 24 года</div>
            <div className="student__about">
              После получения диплома бакалавра в области радиотехники появилось
              желание попробовать себя в смежной специальности и попробовать
              изучать веб разработку. В ВУЗе был опыт программирования (курс по
              ООП и ЯВУ на C/C++). Проходил стажировку в Epam и курсы от
              Яндекс.Практикум, А так же сделал несколько собственных проектов
              на React и node.js.
            </div>
            <div className="student__links link">
              <a
                className="student__link link"
                target="_blank"
                href="https://github.com/EgorZheglov"
              >
                Github
              </a>
              <a className="student__link">egorzh97@yandex.ru</a>
            </div>
          </div>
          <img className="student__img" src={require("../../images/111.png")} />
        </div>
        <div className="student__works">Портфолио</div>
        <div className="student__work">
          <a className="student__work-link" target="_blank" href="https://github.com/EgorZheglov/how-to-learn">
            Статичный сайт
          </a>
          <img className="student__link-img" src={require("../../images/link.png")} />
        </div>
        <div className="student__work">
          <a className="student__work-link" target="_blank" href="https://github.com/EgorZheglov/russian-travel">
            Адаптивный сайт
          </a>
          <img className="student__link-img" src={require("../../images/link.png")} />
        </div>
        <div className="student__work">
          <a className="student__work-link" target="_blank" href="https://github.com/EgorZheglov/react-mesto-api-full">
            Одностраничное приложение
          </a>
          <img className="student__link-img" src={require("../../images/link.png")} />
        </div>
      </div>
    </div>
  );
}

export default Student;
