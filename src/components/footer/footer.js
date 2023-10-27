import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=6e62fde358a924fde289f7d052f4c2df`,
				)
					.then((res) => res.json())
					.then(({ name, main, weather }) => {
						setCity(name);
						setTemperature(Math.round(main.temp));
						setWeather(weather[0].description);
					});
			},
			(error) => {
				console.error(error);
			},
		);
	}, []);

	// useEffect(() => {
	// 	fetch(
	// 		'https://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&units=metric&lang=ru&appid=6e62fde358a924fde289f7d052f4c2df',
	// 	)
	// 		.then((res) => res.json())
	// 		.then(({ name, main, weather }) => {
	// 			setCity(name);
	// 			setTemperature(Math.round(main.temp));
	// 			setWeather(weather[0].description);
	// 		});
	// }, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: #fff;
	box-shadow: 0px 2px 20px #000;
`;
