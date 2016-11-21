class NotesController < ApplicationController
  def destroy
    @note = Note.find(params[:id])
    @note.delete
  end
end
