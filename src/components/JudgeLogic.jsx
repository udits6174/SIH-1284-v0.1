import React, { useEffect, useState } from "react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";

const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";
const JudgeLogic = () => {
  const { contract } = useContract(address);
  const { data: List, isLoading: isLoadingList } = useContractRead(
    contract,
    "getAllCases"
  );


  return (
    <>
      {!isLoadingList ? (
        List.forEach((ele) => {
          console.log(ele);
        })
      ) : (
        <div>isLoading</div>
      )}
    </>
  );
};

export default JudgeLogic;
