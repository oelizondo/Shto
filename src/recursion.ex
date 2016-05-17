defmodule Recu do
  def iterate([head | tail]) do
    IO.puts head
    unless (Enum.empty?(tail) do: iterate(tail))
  end
end

Recu.iterate([1,2,3])