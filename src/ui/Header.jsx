import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  return (
    <header>
      <Link to="/">Fast react Piza Co.</Link>
      <SearchOrder />
      <p>Rizki</p>
    </header>
  );
}
