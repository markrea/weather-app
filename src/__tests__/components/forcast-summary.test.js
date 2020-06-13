import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ForecastSummary from '../../components/forcast-summary';

describe("ForecastSummary", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
            <ForecastSummary
                date="mockDate"
                temperature="mockTemperature"
                description="mockDescription"
                icon="mockIcon"
            />
        );
        expect(asFragment).toMatchSnapshot();
    });

    it("renders the correct props", () => {
        const { getByText } = render(
            <ForecastSummary
            date="mockDate"
            temperature="mockTemperature"
            description="mockDescription"
            icon="mockIcon"
            />
        );
        expect(getByText("mockDate")).toHaveClass("date");
        expect(getByText("mockTemperature°C")).toHaveClass("temperature");
        expect(getByText("mockDescription")).toHaveClass("description");
        expect(getByText("mockIcon")).toHaveClass("icon");
    });
});