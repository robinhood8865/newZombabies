import template from "../../Assets/Images/StakeMock/poolfirst/template.png";
import head from "../../Assets/Images/StakeMock/poolsecond/head.png";
import title from "../../Assets/Images/StakeMock/poolsecond/title.png";
import stake from "../../Assets/Images/StakeMock/poolfirst/batchstake.png";
import unstake from "../../Assets/Images/StakeMock/poolfirst/batchunstake.png";
import apr from "../../Assets/Images/StakeMock/poolfirst/apr.png";
import rate from "../../Assets/Images/StakeMock/poolfirst/rate.png";
import deposite from "../../Assets/Images/StakeMock/poolfirst/deposite.png";
import bronze from "../../Assets/Images/StakeMock/poolsecond/bronze.png";
import bronzefor from "../../Assets/Images/StakeMock/poolsecond/bronzefor.png";
import silver from "../../Assets/Images/StakeMock/poolsecond/silver.png";
import silverfor from "../../Assets/Images/StakeMock/poolsecond/silverfor.png";
import gold from "../../Assets/Images/StakeMock/poolsecond/gold.png";
import goldfor from "../../Assets/Images/StakeMock/poolsecond/goldfor.png";
import platinum from "../../Assets/Images/StakeMock/poolsecond/platinum.png";
import platinumfor from "../../Assets/Images/StakeMock/poolsecond/platinumfor.png";

const PoolSecond = (props: any) => {
  const { gamelevel } = props;
  console.log(gamelevel);
  return (
    <div className="relative ">
      {gamelevel === "bronze" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[102px] -top-[15px]">
            <img src={bronze} alt="" />
          </div>
          <div className="absolute left-[201px] -top-[15px]">
            <img src={bronzefor} alt="" />
          </div>
        </div>
      )}
      {gamelevel === "silver" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[102px] -top-[15px]">
            <img src={silver} alt="" />
          </div>
          <div className="absolute left-[190px] -top-[15px]">
            <img src={silverfor} alt="" />
          </div>
        </div>
      )}

      {gamelevel === "gold" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[102px] -top-[15px]">
            <img src={gold} alt="" />
          </div>
          <div className="absolute left-[175px] -top-[15px]">
            <img src={goldfor} alt="" />
          </div>
        </div>
      )}
      {gamelevel === "platinum" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[83px] -top-[15px]">
            <img src={platinum} alt="" />
          </div>
          <div className="absolute left-[205px] -top-[15px]">
            <img src={platinumfor} alt="" />
          </div>
        </div>
      )}
      <div
        className="relative mt-[5px] w-[515px] h-[265px]"
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
    </div>
  );
};

export default PoolSecond;
