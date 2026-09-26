"use client"

import { PlanContext } from "@/context/PlanContext";
import { ILog } from "@/types/logtype";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToPlanBtn = ({ log }: {log: ILog}) => {
    const {myPlan, setMyPlan} = useContext(PlanContext);
    const handleAdd2Plan = () => {
        console.log(log)
        setMyPlan([...myPlan, log])

    toast.success(`${log.name} added to Plan.`);
    }
    return (
        <div>
            <button onClick={() => handleAdd2Plan()} className="btn h-9 min-h-9 border-0 bg-[#b8ff00] px-4 text-[10px] font-semibold text-black hover:bg-[#a9ed00]">
                <FaCheck className="text-[10px]" />
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default AddToPlanBtn;