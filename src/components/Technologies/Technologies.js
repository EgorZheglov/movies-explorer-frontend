import "./Technologies.css";

function Technologies() {
  return (
    <div className="technologies">
      <h1 id="technologies" className="technologies__header">Технологии</h1>
      <h2 className="technologies__title">7 технологий</h2>
      <div className="technologies__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </div>
      <ul className="technologies__list">
        <li className="technologies__list-item">HTML</li>
        <li className="technologies__list-item">CSS</li>
        <li className="technologies__list-item">JS</li>
        <li className="technologies__list-item">React</li>
        <li className="technologies__list-item">Git</li>
        <li className="technologies__list-item">Express.js</li>
        <li className="technologies__list-item">mongoDB</li>
      </ul>
    </div>
  );
}

export default Technologies;
