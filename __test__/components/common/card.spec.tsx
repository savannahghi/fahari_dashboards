import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/card";

describe("Button Component Unit Test", () => {
  it("renders a button", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>Unit Test</CardDescription>
        </CardHeader>
        <CardContent>Braza</CardContent>
        <CardFooter>Future</CardFooter>
      </Card>
    );

    const cardTitle = screen.getByText("Card");
    const cardDescription = screen.getByText("Braza");
    const cardFooter = screen.getByText("Future");

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
    expect(cardFooter).toBeInTheDocument();
  });
});
