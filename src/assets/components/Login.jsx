export default function Login() {
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

        <div className="control no-margin">
          <p>Forgot your username or password? <a href="#">Contact Us!</a></p>
        </div>
      </div>
      <p className="form-actions">
        <button className="button">Login</button>
      </p>
    </form>
  );
}
