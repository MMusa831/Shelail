import { Link } from 'react-router-dom'

function NavLinks() {

  return (

    <nav>
    <ul>
      <li>
        <Link to="/">الرئيسية</Link>
      </li>
      <li>
        <Link to="/about">أبرز الأخبار</Link>
      </li>
      <li>
        <Link to="/contact">راسلنا</Link>
      </li>
   
    </ul>

</nav>

  );
}

export default NavLinks;