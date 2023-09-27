import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useEffect, useState, useMemo } from "react";
import JudgeLogic from "./JudgeLogic";
import Form from "./Form";

const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";

const Judge = () => {
    // const { contract } = useContract(address);
    // const [forform, setForForm] = useState([""])
    // const childCallback = (formData)=>{
    //   setForForm(formData);
    // }
    return (
      <>
        <JudgeLogic/>
        <Form />
      </>
    );
  };
export default Judge;