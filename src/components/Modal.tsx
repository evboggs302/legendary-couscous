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
              justifyContent: "center",
            }}>
            <div>Top client suggestions based on their perceived needs.</div>
          </div>
          <br />
          <div>
            <span style={{ fontStyle: "italic" }}>Client Info Summary:</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}>
              <span>Name: Lady Gaga</span>
              <span>Age: 30</span>
              <span>Investible Assets: $50,000</span>
              <span>Share of Wallet: 20%</span>
              <span>Living in Retirement: No</span>
              <span>Kids: 2</span>
              <span>Estate Need: N/A</span>
              <span>Wellness Score: 50</span>
            </div>
          </div>
          <br />
          <div>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Suggested Conversation 1: {Data[0].Goals_1}
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  <span
                    style={{
                      textDecoration: "underline",
                      fontStyle: "italic",
                    }}>
                    Potential Question:
                  </span>
                  <br />
                  <span>{Data[0]["EQ Questions_1"]}</span>
                </span>
                <br />
                <span>
                  <span
                    style={{
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}>
                    Resources:
                  </span>
                  <br />
                  <span>
                    Review <a>WEB615954</a> for the 'Preparing for the
                    Unexpected IPC Guidance' report.
                  </span>
                </span>
              </span>
              <div>
                <PieChart percentHelpful={Data[0].Field_Helpfulness_1} />
              </div>
            </div>
          </div>
          <br />
          <div>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Suggested Conversation 2: {Data[0].Goals_2}
            </span>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  <span
                    style={{
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}>
                    Potential Question:
                  </span>
                  <br />
                  <span>{Data[0]["EQ Questions_2"]}</span>
                </span>
                <br />
                <span>
                  <span
                    style={{
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}>
                    Resources:
                  </span>
                  <br />
                  <span>
                    Review <a>WEB147334</a> for the 'Paying for Education' Main
                    Page.
                  </span>
                </span>
              </span>
              <div>
                <PieChart percentHelpful={Data[0].Field_Helpfulness_2} />
              </div>
            </div>
          </div>
          <br />
          <div>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Suggested Conversation 3: {Data[0].Goals_3}
            </span>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  <span
                    style={{
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}>
                    Potential Question:
                  </span>
                  <br />
                  <span>{Data[0]["EQ Questions_3"]}</span>
                </span>
                <br />
                <span>
                  <span
                    style={{
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}>
                    Resources:
                  </span>
                  <br />
                  <span>
                    Review <a>WEB046258</a> for the 'Planning for Retirement'
                    report.
                  </span>
                </span>
              </span>
              <div>
                <PieChart percentHelpful={Data[0].Field_Helpfulness_3} />
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default InsightsModal;
