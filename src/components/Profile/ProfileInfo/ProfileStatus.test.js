import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component" , () => {
    test("status should be in state", () => {
        const component = create(<ProfileStatus status="salambrosalam"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.length).not.toBeNull();
    });
    // test("status should be in state", () => {
    //     const component = create(<ProfileStatus status="salambrosalam"/>);
    //     const root = component.root;
    //     let span = root.findByType("span")
    //     expect(span.innerText).toBe("salambrosalam");
    // });
})