import head from "../../Assets/Images/StakeMock/poolfirst/head.png";

const PoolFirst = () => {
  return (
    <div className="relative m-[10px] w-[515px] h-[265px]">
      <div className="absolute left-[10px] top-[12px] border-[#cbff0f] border-[8px] w-[485px] h-[235px] rounded-[10px] bg-[#201b1b]  shadow-[0_0_8px_8px_rgba(0,0,0,0.7)]"></div>
      <div className="absolute left-[3px] top-[7px]">
        <img src={head} alt="" />
      </div>
      <div className="absolute left-[93px] top-[20px]">
        <div className="font-face-bison-bold text-[48px] text-white tracking-[2px]">
          GEN 1 POOL
        </div>
      </div>
      <div className="cursor-pointer absolute left-[37px] top-[102px] w-[201px] h-[44px] bg-[#cbff0f] rounded-[10px] flex items-center justify-center">
        <div className="font-creepster text-[30px] text-black">BATCH STAKE</div>
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
        <div className="font-face-agency text-[22px] text-[#d44305]">Rate:</div>
        <div className="ml-[10px] font-face-agency text-[22px] text-white">
          $$$$ wCRO/Month
        </div>
      </div>
    </div>
  );
};

export default PoolFirst;
