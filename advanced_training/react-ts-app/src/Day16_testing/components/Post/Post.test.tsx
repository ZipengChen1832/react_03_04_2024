import { render } from "@testing-library/react";
import Post from "./Post";

describe("Post", () => {
  test("should render with fetched data", async () => {
    const mockResData = {
      userId: 1,
      id: 1,
      title: "my title",
      body: "my body",
    };
    //we cannot make actual api call
    //1. a lot of network request, $$$
    //2. we cannot predict what the actual API will respond

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockResData,
      } as Response)
    );
    const { findByText, debug } = render(<Post id={1} />);

    const title = await findByText(`Title: ${mockResData.title}`);
    const body = await findByText(`Body: ${mockResData.body}`);
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
