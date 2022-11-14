import logo from "../../Assets/Images/StakeMock/logo.png";
import staking from "../../Assets/Images/StakeMock/staking.png";
import connectwallet from "../../Assets/Images/StakeMock/connectwallet.png";
import unclaimedrewards from "../../Assets/Images/StakeMock/unclaimedrewards.png";
import claimrewards from "../../Assets/Images/StakeMock/claimrewards.png";
import layer from "../../Assets/Images/StakeMock/layer.png";
// import bg from "../../Assets/Images/StakeMock/bg.png";

import PoolFirst from "../../Components/Dashboard/PoolFirst";
import PoolSecond from "../../Components/Dashboard/PoolSecond";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center bg-gradient-to-b from-black via-[#00a6a4] to-black ">
      {/* <div className="relative w-full h-full flex justify-center  ">
      <div className="absolute w-full h-full">
        <img className="w-full h-full" src={bg} alt="" />
      </div> */}

      <div className="template">
        <div className="flex justify-center">
          <div className="mt-[42px] flex justify-center">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="mt-[19px] pt-[3px] flex justify-center w-[493px] h-[86px] items-start"
            style={{ backgroundImage: `url(${layer})` }}
          >
            <div className="font-face-bison-bold text-[40px] text-black tracking-[2px]">
              MULTI-TIER NFT STAKING
            </div>
          </div>
        </div>
        <div className="flex justify-center cursor-pointer">
          <div className="mt-[11px] w-[194px] h-[48px] rounded-[5px] bg-[#201b1b] flex justify-center items-center">
            <div className="font-face-agency text-[30px] text-[#e5e418]">
              Connect Wallet
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="mt-[14px] w-[383px] h-[48px]  bg-black flex  items-center px-[15px]">
            <div className="font-face-agency text-[30px] text-white">
              UnClaimed Rewards:
            </div>
          </div>
        </div>
        <div className="flex justify-center cursor-pointer">
          <div className="mt-[21px] w-[194px] h-[48px] rounded-[5px] bg-black flex justify-center items-center">
            <div className="font-face-agency text-[30px] text-[#00a652]">
              Claimed Rewards
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-[45px]">
          <PoolFirst />
        </div>
        <div className="flex justify-center mb-[45px]">
          <PoolSecond gamelevel="bronze" />
        </div>
        <div className="flex justify-center mb-[45px]">
          <PoolSecond gamelevel="silver" />
        </div>
        <div className="flex justify-center mb-[45px]">
          <PoolSecond gamelevel="gold" />
        </div>
        <div className="flex justify-center mb-[100px]">
          <PoolSecond gamelevel="platinum" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
