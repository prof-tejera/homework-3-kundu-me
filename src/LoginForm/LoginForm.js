import "./LoginForm.css";

import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";

const LoginForm = () => {
  return (
    <Panel>
      <form>
        <div>
          <label>* Username: </label>
          <Input required={true} name="username" id="username" placeholder="Username"/>
        </div>
        <div>
          <label>* Password: </label>
          <Input type="password" required={true} name="password" id="password" placeholder="Password"/>
        </div>
        <div>
          <input type="checkbox"/>
          <label>Remember me</label>
        </div>
        <div>
          <input type="submit" value="Submit" className="Default-button-active"/>
        </div>
      </form>
    </Panel>
  );
};

export default LoginForm;
