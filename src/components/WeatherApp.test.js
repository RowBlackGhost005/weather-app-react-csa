import React from 'react';

import {render , screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeatherApp from './WeatherApp';
import { mockWeatherData } from '../tests/mocks/mockWeatherData';
import { mockLocationData } from '../tests/mocks/mockLocationData';




test('Renders Search Button' , () => {
    render(<WeatherApp/>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Search');
});

test('Renders Label' , () => {
    render(<WeatherApp/>);

    expect(screen.getByText('City:')).toBeInTheDocument();

    const label = screen.getByText('City:');
    expect(label.tagName).toBe('LABEL');

    expect(label).toHaveClass('form-label-bold');
})

test('Renders Input' , () => {
    render(<WeatherApp/>);

    const input = screen.getByRole('textbox', { name: /city/i });
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute('name', 'citySearch');
    expect(input).toHaveClass('text-input');
    expect(input).toHaveAttribute('type', 'text');
})

test('Displays fetched data', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockWeatherData),
    })
  );

    global.fetch = jest.fn()
        .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockLocationData),
    })
    .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockWeatherData),
    });

  const city = "Washington" ;

  render(<WeatherApp/>);
  const user = userEvent.setup();

  await user.type(screen.getByRole('textbox' , {name: /city/i}) , "Washington");
  await user.click(screen.getByText('Search'));

  expect(await screen.findByText('Washington Forecast')).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledWith(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
});

test('Displays error message on fetch fail', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockWeatherData),
    })
  );

    global.fetch = jest.fn()
        .mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve(mockLocationData),
    })
    .mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve(mockWeatherData),
    });

  const city = "Washington" ;

  render(<WeatherApp/>);
  const user = userEvent.setup();

  await user.type(screen.getByRole('textbox' , {name: /city/i}) , "Washington");
  await user.click(screen.getByText('Search'));

  expect(await screen.findByText('An error ocurred while fetching the forecast, please try again or check your spelling')).toBeInTheDocument();
});

test('Displays a fetching message', async () => {

    let resolveFetch;

    global.fetch = jest.fn(() =>
        new Promise((resolve) => {
        resolveFetch = resolve;
        })
    );

    const user = userEvent.setup();

    render(<WeatherApp/>);

    await user.type(screen.getByRole('textbox' , {name: /city/i}) , "Washington");
    await user.click(screen.getByText('Search'));

    expect(screen.getByText(/Fetching Data. . ./i)).toBeInTheDocument();

});

