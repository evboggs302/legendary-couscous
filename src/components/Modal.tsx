import { Modal, Loading } from "carbon-components-react";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../dux/store";
import { toggleInsights } from "../dux/insightsSlice";
import Data from "../MachineLearningData.json";
import PieChart from "./PieChart";

const InsightsModal = () => {
  const { insights } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => {
      setLoading(true);
    };
  }, []);
  console.log(Data[0]);
  return (
    <Modal
      modalHeading="360 Discovery"
      open={insights.open}
      onRequestClose={() => dispatch(toggleInsights())}
      primaryButtonText="Awesome!"
      secondaryButtonText="Cancel">
      {isLoading && <Loading />}
      {/* {!isLoading &&} */}
      {!isLoading && (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <div>Top client suggestions based on their perceived needs.</div>
          </div>
          <br />
          <div style={{}}>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Suggested Conversation 1: {Data[0].Goals_1}
            </span>
            <div>
              <span></span>
              <span></span>
            </div>
            <PieChart percentHelpful={Data[0].Field_Helpfulness_1} />
          </div>
          <br />
          <div style={{}}>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Suggested Conversation 2: {Data[0].Goals_2}
            </span>
            <div>
              <span></span>
              <span></span>
            </div>
            <PieChart percentHelpful={Data[0].Field_Helpfulness_2} />
          </div>
          <br />
          <div style={{}}>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Suggested Conversation 3: {Data[0].Goals_3}
            </span>
            <div>
              <span></span>
              <span></span>
            </div>
            <PieChart percentHelpful={Data[0].Field_Helpfulness_3} />
          </div>
        </>
      )}
    </Modal>
  );
};

export default InsightsModal;
