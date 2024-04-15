import { render } from "@testing-library/react";
import Checkbox from "./Checkbox";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
  test("should render with label", () => {
    const label = "i am label";
    const { getByText } = render(
      <Checkbox label={label} isChecked={true} onChange={() => {}} />
    );
    expect(getByText(label)).toBeInTheDocument();
  });

  test("should be controlled with isChecked prop", () => {
    const label = "i am label";
    const { getByLabelText, rerender } = render(
      <Checkbox label={label} isChecked={true} onChange={() => {}} />
    );

    const checkbox = getByLabelText(label);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

    rerender(<Checkbox label={label} isChecked={false} onChange={() => {}} />);
    expect(checkbox).not.toBeChecked();
  });

  test("should be controlled via onChange", async () => {
    const label = "label";
    const user = userEvent.setup();
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <Checkbox label={label} isChecked={true} onChange={onChange} />
    );

    const checkbox = getByLabelText(label);
    await user.click(checkbox);
    expect(onChange).toBeCalledTimes(1);
    await user.click(checkbox);
    expect(onChange).toBeCalledTimes(2);
  });
});
