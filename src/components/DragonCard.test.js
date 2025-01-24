import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import DragonCard from "./DragonCard";
// Mock das funções onView, onEdit e onDelete
const mockOnView = jest.fn();
const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

const defaultProps = {
  id: "1",
  name: "Fogo",
  type: "Fogo",
  createdAt: "2025-01-23T00:00:00Z",
  histories: ["História 1", "História 2"],
  onView: mockOnView,
  onEdit: mockOnEdit,
  onDelete: mockOnDelete,
};

describe("DragonCard", () => {
  test("deve renderizar o componente corretamente", () => {
    render(<DragonCard {...defaultProps} />);
  
    // Verifica se o nome do dragão está sendo exibido
    const nameElements = screen.getAllByText(/Fogo/i);
    expect(nameElements[0]).toBeInTheDocument(); // Nome do dragão
  
    // Verifica se o tipo do dragão está sendo exibido
    expect(nameElements[1]).toBeInTheDocument(); // Tipo do dragão
  
    // Verifica se a data de criação está sendo exibida corretamente
    expect(screen.getByText(/Criado em:/i)).toBeInTheDocument();
  
    // Verifica se as histórias estão sendo exibidas
    expect(screen.getByText(/História 1/i)).toBeInTheDocument();
    expect(screen.getByText(/História 2/i)).toBeInTheDocument();
  });
  


  test("deve chamar a função onEdit quando clicar no botão 'Editar'", () => {
    render(<DragonCard {...defaultProps} />);

    const editButton = screen.getByRole("button", { name: /editar/i });
    fireEvent.click(editButton);

    // Verifica se a função onEdit foi chamada
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
    expect(mockOnEdit).toHaveBeenCalledWith("1");
  });

  test("deve chamar a função onDelete quando clicar no botão 'Deletar'", () => {
    render(<DragonCard {...defaultProps} />);

    const deleteButton = screen.getByRole("button", { name: /deletar/i });
    fireEvent.click(deleteButton);

    // Verifica se a função onDelete foi chamada
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });

  test("deve exibir mensagem 'Nenhuma história registrada' se não houver histórias", () => {
    const propsWithoutHistories = { ...defaultProps, histories: [] };
    render(<DragonCard {...propsWithoutHistories} />);

    // Verifica se a mensagem "Nenhuma história registrada" aparece
    expect(screen.getByText(/Nenhuma história registrada/i)).toBeInTheDocument();
  });
});
