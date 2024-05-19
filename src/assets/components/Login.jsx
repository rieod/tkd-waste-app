import Header from './Header.jsx'
import LoginForm from './LoginForm.jsx';
import LoginIllustrate from './LoginIllustrate.jsx';
import './style/Login.css';

export default function Login() {
  return (
    <>
      <main>
        <div className='flex-container'>
        <div className ='flex-form'><Header /><LoginForm/></div>
        <div className='flex-illust'><LoginIllustrate/></div>
        </div>
      </main>
    </>
  );
}
