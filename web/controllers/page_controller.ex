defmodule Reactchat.PageController do
  use Reactchat.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
