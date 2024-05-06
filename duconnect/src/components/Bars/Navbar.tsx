// components/Navbar.tsx
const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          My Website
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#">
            Home
          </a>
          <a class="navbar-item" href="#">
            About
          </a>
          <a class="navbar-item" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
