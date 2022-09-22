import "./RadioButtons.css";

import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";

const RadioButtons = () => {
  return (
    <Panel>
      <form>
        <div>
          <fieldset>
            <input type="radio" category="fruit" id="apple" value="Apple" name="fruit" defaultChecked/>
            <label htmlFor="apple">Apple</label>

            <input type="radio" category="fruit" id="pear" value="Pear" name="fruit"/>
            <label htmlFor="pear">Pear</label>

            <input type="radio" category="fruit" id="orange" value="Orange" name="fruit"/>
            <label htmlFor="orange">Orange</label>
          </fieldset>
        </div>
      </form>
    </Panel>
  )
};

export default RadioButtons;
