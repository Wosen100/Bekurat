import { render, screen } from "@testing-library/react";
import DonateCard from "./DonateCard";
import { Provider } from "react-redux";
import store from "../../store";

describe("Donation values", () => {
  it("Donation values must be with currency value", () => {
    render(
      <Provider store={store}>
        <DonateCard currentDonation={10} donationGoal={100} title="" />
      </Provider>
    );
    expect(screen.getByTestId("donation_value").textContent).toBe(
      "$10 raised of $100 goal"
    );
  });
});
