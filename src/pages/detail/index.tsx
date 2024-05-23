import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card, { Item } from "~/components/card";
const News = () => {
  const item = history.state.usr as Item;
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="max-w-2xl w-full px-5">
        <div className="py-10 ">
          <Card onClick={() => {}} type="large" item={item} />
          <button
            onClick={() => navigate(-1)}
            className={`h-11 text-sm border-[1px] flex flex-row items-center justify-center px-4 rounded-lg font-medium  bg-blue-950 text-white mt-10`}
          >
            <FaAngleLeft className="text-white" size={18} />
            Go To News
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
