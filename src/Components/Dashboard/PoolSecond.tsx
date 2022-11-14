import head from "../../Assets/Images/StakeMock/poolsecond/head.png";
import bronze from "../../Assets/Images/StakeMock/poolsecond/bronze.png";
import silver from "../../Assets/Images/StakeMock/poolsecond/silver.png";
import gold from "../../Assets/Images/StakeMock/poolsecond/gold.png";
import platinum from "../../Assets/Images/StakeMock/poolsecond/platinum.png";

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
          <div className="absolute left-[201px] -top-[27px]">
            <div className="font-face-agency text-[32px] text-white tracking-[2px] ">
              For 1-5x Holders
            </div>
          </div>
        </div>
      )}
      {gamelevel === "silver" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[102px] -top-[15px]">
            <img src={silver} alt="" />
          </div>
          <div className="absolute left-[190px] -top-[27px]">
            <div className="font-face-agency text-[32px] text-white tracking-[2px]">
              For 6-15x Holders
            </div>
          </div>
        </div>
      )}

      {gamelevel === "gold" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[102px] -top-[15px]">
            <img src={gold} alt="" />
          </div>
          <div className="absolute left-[175px] -top-[27px]">
            <div className="font-face-agency text-[32px] text-white tracking-[2px]">
              For 16-39x Holders
            </div>
          </div>
        </div>
      )}
      {gamelevel === "platinum" && (
        <div>
          <div className="absolute left-[75px] -top-[28px] w-[362px] h-[53px] bg-black rounded-[10px]"></div>
          <div className="absolute left-[83px] -top-[15px]">
            <img src={platinum} alt="" />
          </div>
          <div className="absolute left-[200px] -top-[27px]">
            <div className="font-face-agency text-[32px] text-white tracking-[2px]">
              For 40x + Holders
            </div>
          </div>
        </div>
      )}

      <div className="relative mt-[5px] w-[515px] h-[265px] p-[10px] ">
        <div className="absolute left-[10px] top-[12px] border-[#cbff0f] border-[8px] w-[485px] h-[235px] rounded-[10px] bg-[#201b1b]  shadow-[0_0_8px_8px_rgba(0,0,0,0.7)]"></div>
        <div className="absolute left-[3px] top-[7px]">
          <img src={head} alt="" />
        </div>
        <div className="absolute left-[93px] top-[20px]">
          <div className="font-face-bison-bold text-[48px] text-white tracking-[2px]">
            GEN 2 POOL
          </div>
        </div>
        <div className="cursor-pointer absolute left-[37px] top-[102px] w-[201px] h-[44px] bg-[#cbff0f] rounded-[10px] flex items-center justify-center">
          <div className="font-creepster text-[30px] text-black">
            BATCH STAKE
          </div>
        </div>
        <div className="cursor-pointer absolute left-[37px] top-[164px] w-[201px] h-[44px] bg-[#cbff0f] rounded-[10px] flex items-center justify-center">
          <div className="font-creepster text-[30px] text-black">
            BATCH UNSTAKE
          </div>
        </div>
        <div className="absolute left-[344px] top-[45px] flex">
          <div className="font-face-agency text-[26px] text-[#d44305]">APR</div>
          <div className="ml-[10px] font-face-agency text-[26px] text-white">
            %
          </div>
        </div>
        <div className="absolute left-[267px] top-[109px] ">
          <div className="flex">
            <div className="font-face-agency text-[24px] text-[#cbff0f]">
              Total Deposits:
            </div>
            <div className="ml-[10px] font-face-agency text-[26px] text-white">
              10
            </div>
          </div>
          <div className="flex">
            <div className="font-face-agency text-[24px] text-[#cbff0f]">
              Your Deposits:
            </div>
            <div className="ml-[10px] font-face-agency text-[26px] text-white">
              10
            </div>
          </div>
        </div>
        <div className="absolute left-[270px] top-[190px] flex items-end">
          <div className="font-face-agency text-[22px] text-[#d44305]">
            Rate:
          </div>
          <div className="ml-[10px] font-face-agency text-[22px] text-white">
            $$$$ wCRO/Month
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolSecond;
