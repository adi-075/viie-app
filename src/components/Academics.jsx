import { CSuniversity } from "../CSUniversities";
import { ManagementUnis } from "../ManagementUniversities";
import { MassMediaUnis } from "../MassMediaUnis";

const Academics = () => {
  return (
    <div>
      <h1 className="text-red-700 text-center text-5xl my-7 font-bold">
        Our Partner Universities
      </h1>
      <div>
        <h3 className="text-center text-3xl my-9 font-bold">
          Computer Science & IT
        </h3>
        <hr
          style={{
            color: "red",
            backgroundColor: "red",
            width: "15%",
            marginLeft: "42%",
            height: "3px",
          }}
        />

        <div className="flex flex-wrap md:flex-row mb-2">
          {CSuniversity.map((uni) => {
            return (
              <div className="shadow-2xl mx-auto my-10 rounded">
                <div className="px-2 py-2 text-center">
                  <img
                    src={uni.url}
                    style={{ height: "500px" }}
                    alt="CS University"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-center text-3xl my-9 font-bold">Management</h3>
        <hr
          style={{
            color: "red",
            backgroundColor: "red",
            width: "9%",
            marginLeft: "45%",
            height: "3px",
          }}
        />

        <div className="flex flex-wrap md:flex-row mb-2">
          {ManagementUnis.map((uni) => {
            return (
              <div className="shadow-2xl mx-auto my-10 rounded">
                <div className="px-2 py-2 text-center">
                  <img
                    src={uni.url}
                    style={{ height: "500px" }}
                    alt="Management University"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-center text-3xl my-9 font-bold">Mass Media</h3>
        <hr
          style={{
            color: "red",
            backgroundColor: "red",
            width: "9%",
            marginLeft: "45%",
            height: "3px",
          }}
        />

        <div className="flex flex-wrap md:flex-row mb-2">
          {MassMediaUnis.map((uni) => {
            return (
              <div className="shadow-2xl mx-auto my-10 rounded">
                <div className="px-2 py-2 text-center">
                  <img
                    src={uni.url}
                    style={{ height: "500px" }}
                    alt="Mass Media University"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Academics;
