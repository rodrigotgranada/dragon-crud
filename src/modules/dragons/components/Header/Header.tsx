import { TitleLogo } from "./TitleLogo";
import { UserMenu } from "./UserMenu";
import '../../styles/components/Header/header.scss';

export function Header() {
  return (
    <header className="dragons-header">
      <TitleLogo />
      <UserMenu />
    </header>
  )
} 