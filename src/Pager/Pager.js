import "./Pager.css";

import Panel from "components/Panel/Panel";
import Pagers from "components/Pagers/Pagers";

const Pager = () => {
  return (
    <Panel>
      <div>
        <Pagers id={"p1"} idx={2} total={5}/>
      </div>
      <div>
        <Pagers id={"p2"} idx={4} total={7}/>
      </div>
      <div>
        <Pagers id={"p3"} idx={6} total={10}/>
      </div>
    </Panel>
  );
};

export default Pager;
