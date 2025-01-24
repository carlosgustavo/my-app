import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DragonForm from "./DragonForm";

describe("DragonForm Component", () => {
  const mockSubmit = jest.fn();

  it("deve renderizar o formulário com campos iniciais", () => {
    render(<DragonForm onSubmit={mockSubmit} />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tipo/i)).toBeInTheDocument();
    expect(screen.getByText(/Histórias/i)).toBeInTheDocument();
    expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
  });

  it("deve permitir preencher os campos de nome e tipo", () => {
    render(<DragonForm onSubmit={mockSubmit} />);
    const nameInput = screen.getByLabelText(/Nome/i);
    const typeInput = screen.getByLabelText(/Tipo/i);

    fireEvent.change(nameInput, { target: { value: "Dragão Azul" } });
    fireEvent.change(typeInput, { target: { value: "Fogo" } });

    expect(nameInput).toHaveValue("Dragão Azul");
    expect(typeInput).toHaveValue("Fogo");
  });

  it("deve adicionar e remover histórias", () => {
    render(<DragonForm onSubmit={mockSubmit} />);
    const addHistoryButton = screen.getByText(/Adicionar história/i);

    // Adicionar história
    fireEvent.click(addHistoryButton);
    expect(screen.getAllByPlaceholderText(/História/i)).toHaveLength(1);

    // Remover história
    const removeButton = screen.getByText(/Remover/i);
    fireEvent.click(removeButton);
    expect(screen.queryByPlaceholderText(/História/i)).not.toBeInTheDocument();
  });

  it("deve chamar a função onSubmit com os dados do formulário", () => {
    render(<DragonForm onSubmit={mockSubmit} />);
    const nameInput = screen.getByLabelText(/Nome/i);
    const typeInput = screen.getByLabelText(/Tipo/i);
    const addHistoryButton = screen.getByText(/Adicionar história/i);
    const submitButton = screen.getByText(/Salvar/i);

    // Preencher campos
    fireEvent.change(nameInput, { target: { value: "Dragão Vermelho" } });
    fireEvent.change(typeInput, { target: { value: "Fogo" } });
    fireEvent.click(addHistoryButton);
    fireEvent.change(screen.getByPlaceholderText(/História 1/i), {
      target: { value: "Primeira história" },
    });

    // Submeter o formulário
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      name: "Dragão Vermelho",
      type: "Fogo",
      histories: ["Primeira história"],
    });
  });

  it("deve preencher os dados iniciais quando fornecidos", () => {
    const initialData = {
      name: "Dragão Verde",
      type: "Terra",
      histories: ["Primeira história"],
    };

    render(<DragonForm initialData={initialData} onSubmit={mockSubmit} />);

    expect(screen.getByLabelText(/Nome/i)).toHaveValue("Dragão Verde");
    expect(screen.getByLabelText(/Tipo/i)).toHaveValue("Terra");
    expect(screen.getByPlaceholderText(/História 1/i)).toHaveValue(
      "Primeira história"
    );
  });
});
