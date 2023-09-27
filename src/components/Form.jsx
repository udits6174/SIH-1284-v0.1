import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";
    const Form = (props)=> {
        const [caseNo, setCaseNo] = useState("");
        const [caseName, setCaseName] = useState("");
        const [judge, setJudge] = useState("");
        const [lawyer1, setLawyer1] = useState("");
        const [lawyer2, setLawyer2] = useState("");
        const [client1, setClient1] = useState("");
        const [client2, setClient2] = useState("");
        const [verdict, setVerdict] = useState("");
        const [uri, setUri] = useState("");

        // const handleSubmit = (event) => {
        //     event.preventDefault();
            
        //     // props.parentCallback(formData);
        // }
    return (
        <div className="flex items-center justify-center bg-blue-500">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add case data
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Case No." value={caseNo} onChange={(event) => { setCaseNo(event.target.value) }}/>
            <Input size="lg" label="Case Name" value={caseName} onChange={(event) => { setCaseName(event.target.value) }}/>
            <Input size="lg" label="Judge" value={judge} onChange={(event) => { setJudge(event.target.value) }}/>
            <Input size="lg" label="Prosecutor lawyer name" value={lawyer1} onChange={(event) => { setLawyer1(event.target.value) }}/>
            <Input size="lg" label="Defender lawyer name" value={lawyer2} onChange={(event) => { setLawyer2(event.target.value) }}/>
            <Input size="lg" label="Plaintiff" value={client1} onChange={(event) => { setClient1(event.target.value) }}/>
            <Input size="lg" label="Plea" value={client2} onChange={(event) => { setClient2(event.target.value) }}/>
            <Input size="lg" label="Verdict" value={verdict} onChange={(event) => { setVerdict(event.target.value) }}/>
            <Button className="mt-6">
                 upload evidence
            </Button>
          </div>


          <Web3Button
          contractAddress = {address}
          action={(contract) =>{
            contract.call("addData", [
                [caseNo, caseName, judge, lawyer1, lawyer2, client1, client2, verdict, uri]
              ,
            ])}
          }
        >
          Submit
        </Web3Button>


        </form>
      </Card>
      </div>
    );
  }

export default Form;