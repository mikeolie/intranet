import { WEATHER_INITIAL_STATE } from "../../reducers/weather";

interface WeatherProps {
  data: WEATHER_INITIAL_STATE;
}
function Weather({ data }: WeatherProps) {
  const { temp } = data
  return (
    <article>
      <h4></h4>
    </article>
  );
}
export default Weather;
