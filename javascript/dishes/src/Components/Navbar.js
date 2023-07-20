import "../App.css";

export const Navbar = ({ onClick }) => {
  return (
    <navbar>
      <ul class="nav-list">
        <li class="list-item">Recipe Finder</li>
        <li class="list-item">
          <button class="button" onClick={onClick}>Find me a recipe!</button>
        </li>
      </ul>
    </navbar>
  );
};
