import "./Pagers.css";

import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const Pagers = ({ id, idx, total, ...pageProps }) => {
  if (!idx) {
    idx = 1;
  }

  const handlePageSelect = (pageIdx) => {
    console.log(pageIdx);
    let domPage1 = document.querySelector("#" + id + " #Button" + idx);
    domPage1.classList.remove("Default-button-active");
    let domPage2 = document.querySelector("#" + id + " #Button" + pageIdx);
    domPage2.classList.add("Default-button-active");
    idx = pageIdx;
  };

  const handlePageClick = (pageIdx) => {
    console.log(pageIdx);
    handlePageSelect(pageIdx);
  };

  const handlePrev = () => {
    let prevIdx = total;
    if (idx != 1) {
      prevIdx = (idx - 1);
    }
    console.log(prevIdx);
    handlePageSelect(prevIdx);
  };

  const handleNext = () => {
    let nextIdx = 1;
    if (idx != total) {
      nextIdx = (idx + 1);
    }
    console.log(nextIdx);
    handlePageSelect(nextIdx);
  };

  return (
    <Panel>
      <div id={id}>
        <Button
          id={"ButtonPrev"}
          onClick={() => handlePrev()}
          text="Prev"
        />
        {[...Array(total)].map((x, i) =>
          (idx == i + 1) ?
            <Button
              id={"Button" + (i + 1)}
              active = {true}
              onClick={() => handlePageClick((i+1))}
              text={i+1}
            />
          :
            <Button
              id={"Button" + (i + 1)}
              onClick={() => handlePageClick((i+1))}
              text={i+1}
            />

        )}
        <Button
          id={"ButtonNext"}
          onClick={() => handleNext()}
          text="Next"
        />
      </div>
    </Panel>
  );
};

export default Pagers;
