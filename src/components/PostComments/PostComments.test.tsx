import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "../Post";

test("Inserção de dois comentários", () => {
  render(<Post imageUrl="url_da_imagem">Texto do post</Post>);

  const textarea = screen.getByTestId("comment-textarea");

  fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
  fireEvent.submit(screen.getByTestId("comment-form"));

  expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

  fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
  fireEvent.submit(screen.getByTestId("comment-form"));

  expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
});
