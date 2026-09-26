"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { ILog } from '@/types/logtype';

interface IPlanContextType {
    myPlan: ILog[];
    setMyPlan: Dispatch<SetStateAction<ILog[]>>;
    savedList: ILog[];
    setSavedList: Dispatch<SetStateAction<ILog[]>>;
}

export const PlanContext = createContext<IPlanContextType>({
    myPlan: [],
    setMyPlan: () => {},
    savedList: [],
    setSavedList: () => {}
});

const PlanProvider = ({ children }: { children: ReactNode }) => {
    const [myPlan, setMyPlan] = useState<ILog[]>([]);
    const [savedList, setSavedList] = useState<ILog[]>([]);

    const sharedData: IPlanContextType = {
        myPlan,
        setMyPlan,
        savedList,
        setSavedList
    };

    return (
        <PlanContext.Provider value={sharedData}>
        {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;