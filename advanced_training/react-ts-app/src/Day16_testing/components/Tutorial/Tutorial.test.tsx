import { render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";
import userEvent from "@testing-library/user-event";

describe("Tutorial", () => {
  test("should render correctly", () => {
    // https://testing-library.com/docs/queries/about/

    //difference between queries returned by render and screen
    const { getByText } = render(<Tutorial />);

    const tutorial = getByText(/Tutorial/);
    expect(tutorial).toBeInTheDocument();
  });

  test("should receive an onClick function", async () => {
    const user = userEvent.setup();
    const foo = jest.fn();
    const { getByRole } = render(<Tutorial onClick={foo} />);
    const button = getByRole("button", { name: /Click/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    await user.click(button);

    expect(foo).toHaveBeenCalledTimes(2);
  });

  test("should work without onClick function", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Tutorial />);
    const button = getByRole("button", { name: /Click/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
  });
});
