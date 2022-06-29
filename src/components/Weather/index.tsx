import { WEATHER_INITIAL_STATE } from "../../reducers/weather";

import "./styles.scss";

interface WeatherProps {
  data: WEATHER_INITIAL_STATE;
}
function Weather({ data }: WeatherProps) {
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
