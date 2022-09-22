import "./RadioButtons.css";

import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import RadioButton from "components/RadioButton/RadioButton";

const RadioButtons = () => {
  return (
    <Panel>
      <div>
        <form>
            <fieldset>
              <input type="radio" category="fruit" id="apple" value="Apple" name="fruit" defaultChecked/>
              <label htmlFor="apple">Apple</label>

              <input type="radio" category="fruit" id="pear" value="Pear" name="fruit"/>
              <label htmlFor="pear">Pear</label>

              <input type="radio" category="fruit" id="orange" value="Orange" name="fruit"/>
              <label htmlFor="orange">Orange</label>
            </fieldset>
        </form>
      </div>

      <div>
        <form>
          <fieldset>
            <RadioButton name="vegetable" items={["Onion", "Potato", "Garlic", "Ginger"]}/>
          </fieldset>
        </form>
      </div>

      <div>
        <form>
          <fieldset>
            <RadioButton name="game" items={["game1", "game2", "game3", "game4", "game5"]}/>
          </fieldset>
        </form>
      </div>

    </Panel>
  )
};

export default RadioButtons;
