import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <div className="Menu">
          <span>
            <Link to="/">Home</Link> #
          </span>
          <span>
            <Link to="/test">Do a Test</Link> #
          </span>
          <span>
            <Link to="/qa">Test - Question & Answers</Link> #
          </span>
          <span>
            <Link to="/results">User - Test results</Link> #
          </span>
          <span>
            <Link to="/todo">Test ToDoList</Link>
          </span>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
