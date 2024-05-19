import logoImg from '../image/logo.png';
import excMark from '../image/yellow-exclamation mark.png';
import './style/Header.css'

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="App Logo" />
      <h1>welcome back<img src={excMark}/></h1>
      <p>please input your information</p>
    </header>
  );
}
