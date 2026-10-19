import { useState } from "react";

export default function Contribute(issues) {
    const [contributors, handleContribute] = useState(0);

    function handleClear() {
        handleContribute(0);
    }
    return (
        <div className="mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
            <div>
                <h3 className="text-2xl font-bold">
                    Want to contribute? 
                </h3>
                <p className="mt-1 text-xl">
                    Fix an open issue on  
                    <a className="font-bold underline" href="https://github.com/gailleamolong/CSIT340-G5-Midterms-Amolong" target="_blank"
                       onClick={() => handleContribute(contributors + 1)}>
                         GitHub 
                    </a>
                    .
                </p>
            </div>
            <div className="flex items-center gap-8">
                <p className="text-xl">
                    Contributors: <span className="font-bold">{contributors}</span>
                </p>
                <p className="text-xl">
                    Open issues: <span className="font-bold">{Math.max(issues - contributors, 0)}</span>
                </p>
                <button className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold" onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
    );
}