import React from "react";
import { cleanup, render, } from "@testing-library/react";
import ForecastDetails from "../../components/forecast-details";

afterEach(cleanup);

describe("ForecastDetails", () => {
    const forecasts =
    {
        date: 1525046400000,
        temperature: {
            max: 11,
            min: 4,
        },
        wind: {
            speed: 30,
            direction: "s"
        },
        humidity: 30,

    };

    it("renders correctly to match ForecastDetails snapshot", () => {
        const { asFragment } = render(<ForecastDetails forecasts={forecasts} />);
        expect(asFragment).toMatchSnapshot();
    });


    it("renders the correct amount of ForecastSummary component props", () => {
        const { getByTestId } = render(
            <ForecastDetails forecasts={forecasts} />);

        expect(getByTestId("date-id")).toHaveClass("date");
        expect(getByTestId("minTemperature-id")).toHaveClass("minTemperature");
        expect(getByTestId("maxTemperature-id")).toHaveClass("maxTemperature");
        expect(getByTestId("humidity-id")).toHaveClass("humidity");
        expect(getByTestId("windSpeed-id")).toHaveClass("windSpeed");
        expect(getByTestId("windDirection-id")).toHaveClass("windDirection");

    });
});