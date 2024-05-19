import './style/Login.css'

export default function LoginForm() {
  return (
    <form>
      <div className="control-column">
        <div className="control no-margin">
          <label htmlFor="username">Username</label>
          <input id="username" type="username" name="username" placeholder="johndoe@mail.com"/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="******" />
        </div>

          <p>Forgot your username or password? <a href="#">Contact Us!</a></p>
      
      </div>
      <p className="form-actions">
        <button className="button">Login</button>
      </p>
    </form>
  );
}
