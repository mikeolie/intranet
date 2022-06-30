import { useAppSelector } from "../../config/hooks";

import "./styles.scss";

function Weather() {
  const data = useAppSelector((state) => state.weather);
  const { temp, description, icon } = data;
  const formattedTemp = +temp.toFixed(0);
  return (
    <section className="weather-info__container">
      <img src={icon} alt={description} />
      <article>
        <h4>
          {formattedTemp} <span>℉</span>
        </h4>
        {description}
      </article>
    </section>
  );
}
export default Weather;
