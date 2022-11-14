// import template from "../../Assets/Images/StakeMock/pool1/template.png";
import template from "../../Assets/Images/StakeMock/poolfirst/template.png";
import head from "../../Assets/Images/StakeMock/poolfirst/head.png";
import title from "../../Assets/Images/StakeMock/poolfirst/title.png";
import stake from "../../Assets/Images/StakeMock/poolfirst/batchstake.png";
import unstake from "../../Assets/Images/StakeMock/poolfirst/batchunstake.png";
import apr from "../../Assets/Images/StakeMock/poolfirst/apr.png";
import rate from "../../Assets/Images/StakeMock/poolfirst/rate.png";
import deposite from "../../Assets/Images/StakeMock/poolfirst/deposite.png";
const PoolFirst = () => {
  return (
    <div
      className="relative m-[10px] w-[515px] h-[265px]"
      style={{ backgroundImage: `url(${template})` }}
    >
      <div className="absolute left-[5px] top-[10px]">
        <img src={head} alt="" />
      </div>
      <div className="absolute left-[93px] top-[40px]">
        <img src={title} alt="" />
      </div>
      <div className="cursor-pointer absolute left-[37px] top-[102px] w-[201px] h-[44px] bg-[#cbff0f] rounded-[10px] flex items-center justify-center">
        <img src={stake} alt="" />
      </div>
      <div className="cursor-pointer absolute left-[37px] top-[164px] w-[201px] h-[44px] bg-[#cbff0f] rounded-[10px] flex items-center justify-center">
        <img src={unstake} alt="" />
      </div>
      <div className="absolute left-[344px] top-[52px]">
        <img src={apr} alt="" />
      </div>
      <div className="absolute left-[267px] top-[109px]">
        <img src={deposite} alt="" />
      </div>
      <div className="absolute left-[270px] top-[198px]">
        <img src={rate} alt="" />
      </div>
    </div>
  );
};

export default PoolFirst;
