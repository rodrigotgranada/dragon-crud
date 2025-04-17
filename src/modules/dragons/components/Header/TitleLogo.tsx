import { Link } from 'react-router-dom'
import '../../styles/components/Header/title-logo.scss';

export function TitleLogo() {
  return (
    <Link to="/dragons" className="dragons-title-logo">
      <h2>Dragões</h2>
    </Link>
  )
} 