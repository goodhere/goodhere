import React from "react";
import EnsureResources from "../ensure-resources";
import { render, getNodeText, cleanup } from "@testing-library/react";
jest.mock(`../loader`, () => {
    return {
        loadPageSync(path) {
            return { loadPageSync: true, path };
        },
        loadPage(path) {
            return Promise.resolve({ loadPage: true, path });
        },
    };
});
afterAll(cleanup);
describe(`EnsureResources`, () => {
    it(`loads pages synchronously`, () => {
        const location = {
            pathname: `/`,
        };
        const { container } = render(<EnsureResources location={location}>
        {(data) => JSON.stringify(data.pageResources)}
      </EnsureResources>);
        expect(getNodeText(container)).toMatchInlineSnapshot(`"{\\"loadPageSync\\":true,\\"path\\":\\"/\\"}"`);
    });
});
