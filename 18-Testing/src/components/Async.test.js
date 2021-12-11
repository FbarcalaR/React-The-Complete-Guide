import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });
        render(<Async />);

        // find... methods return promises wich can be awaited and are re-executed a couple of times
        // the timeout for that can be configured in a third parameter
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});