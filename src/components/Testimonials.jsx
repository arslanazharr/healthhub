/* eslint-disable react/jsx-key */
import { feedbacks } from "../utils/constants";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Testimonials = () => (
  <div className="bg-gray-100 py-10 px-5">
    <div className="flex whitespace-nowrap text-black text-[4vh] lg:text-[6vh] justify-center text-center mb-10 gap-4">
      <p>Smiling</p>
      <p className="font-bold">Faces</p>
    </div>
    <div className="flex overflow-auto w-full gap-4">
      {feedbacks.map((feedback, index) => (
        <div
          key={index}
          className="border-[1px] border-main p-4 min-w-[350px] max-w-[351px] flex flex-col gap-2 bg-secondary rounded-xl text-white hover:bg-transparent hover:text-black cursor-default transition"
        >
          <div className="flex flex-row text-2xl gap-2">
            <AccountCircleOutlinedIcon className="!text-4xl" />
            <h4> {feedback.name}</h4>
          </div>

          <div>{feedback.review}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
