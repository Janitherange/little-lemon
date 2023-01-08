import Booking from "./Booking";
import { describe, expect, it, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";

describe("Booking", () => {
  const result = render(<Booking />);

  let date = result.container.querySelector("#date");
  let occasion = result.container.querySelector("#occasion");
  let gusts = result.container.querySelector("#gusts");

  test("Date cannot be empty", () => {
    date.value = "01/09/2023";
    expect(date.value).toBe("");
  });

  test("Time cannot be empty", () => {
    date.value = "01/09/2023";
    const time = result.container.getElementsByClassName("selected_1");
    // fireEvent.click(time[0]);
    expect(time[0]).toBe(undefined);
  });

  test("Gusts count cannot be empty", () => {
    const increaseCount = result.container.querySelector("#increaseCount");
    // fireEvent.click(increaseCount);
    expect(gusts.innerHTML).equal("0");
  });

  test("Occasion cannot be empty", () => {
    const selectButton = result.container.querySelector("#selectButton");
    // fireEvent.click(selectButton);
    const selection = result.container.getElementsByClassName("li_1");
    expect(selection[0]).equal(undefined);
  });
});
