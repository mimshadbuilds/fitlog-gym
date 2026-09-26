'use client';

import PlanLogCard from '@/components/shared/LogsPlanCard';
import { PlanContext } from '@/context/PlanContext';
import { ILog } from '@/types/logtype';
import { useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const MyPlans = () => {
    const { myPlan, savedList, setMyPlan, setSavedList } = useContext(PlanContext);

    const [sortBy, setSortBy] = useState<'rating' | 'duration' | 'caloriesBurned' | ''>('');

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const sortPlans = (logs: ILog[]) => {
        const sortedPlan = [...logs];

        if (sortBy === 'rating') {
            sortedPlan.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'caloriesBurned') {
            sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === 'duration') {
            sortedPlan.sort((a, b) => b.duration - a.duration);
        }

        return sortedPlan;
    };

    const sortedAddPlan = sortPlans(myPlan);
    const sortedAddSaved = sortPlans(savedList);

    const activeLogs = activeTab === 'plan' 
    ? sortedAddPlan 
    : sortedAddSaved;

    const totalMinutes = useMemo(() => {
        return activeLogs.reduce((total, log) => total + log.duration, 0);
    }, [activeLogs]);

    const totalCalories = useMemo(() => {
        return activeLogs.reduce(
            (total, log) => total + log.caloriesBurned, 0
        );
    }, [activeLogs]);

    const removeFromTab = (id: number) => {
        if (activeTab === 'plan') {
            setMyPlan((item: ILog[]) => 
                item.filter((log) => log.id !== id)
            );
            toast.error('Removed from add plan');
        } else {
            setSavedList((item: ILog[]) =>
                item.filter((log) => log.id !== id)
            );
            toast.error('Removed from saved list');
        }
    };

    return (
        <div className="mx-auto my-8 w-full max-w-[1232px] overflow-hidden px-4">
            <div className="mb-5 text-center md:text-left">
                <h2 className="text-xl font-bold text-white md:text-[30px]">
                    MY PLAN
                </h2>

                <p className="text-xs text-slate-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="my-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#232832] bg-[#13161d] sm:grid-cols-3 items-center justify-center">
                <div className="border-b border-[#232832] px-5 py-4 sm:border-b-0 sm:border-r text-center">
                    <p className="text-[12px] text-[#8e969f]">
                        Exercises
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-[#b8ff00] text-center">
                        {activeLogs.length}
                    </p>
                </div>

                <div className="border-b border-[#232832] px-5 py-4 sm:border-b-0 sm:border-r text-center">
                    <p className="text-[12px] text-[#8e969f]">
                        Minutes
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-white">
                        {totalMinutes}
                    </p>
                </div>

                <div className="px-5 py-4 text-center ">
                    <p className="text-[12px] text-[#8e969f]">
                        Calories
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-white">
                        {totalCalories}
                    </p>
                </div>
            </div>

            <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex rounded-lg border border-[#232832] bg-[#13161d] p-0.5">
                    <button
                        onClick={() => setActiveTab('plan')}
                        className={`rounded-md px-3 py-1.5 text-[12px] font-medium ${
                            activeTab === 'plan' 
                            ? 'bg-[#252a32] text-white'
                            : 'text-[#69717d]'
                        }`}>Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-md px-3 py-1.5 text-[12px] font-medium ${
                            activeTab === 'saved'
                                ? 'bg-[#252a32] text-white'
                                : 'text-[#69717d]'
                        }`}>
                        Saved
                    </button>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <span className="whitespace-nowrap text-[12px] text-[#69717d]">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy( e.target.value as | 'rating' | 'duration' | 'caloriesBurned' | '')
                        }

                        className="select select-sm h-8 min-h-8 border-[#232832] bg-[#13161d] px-8 text-[12px] text-white">
                        <option value="" disabled>
                            Duration
                        </option>
                        <option value="caloriesBurned">
                            Calory Burned
                        </option>
                        <option value="duration">
                            Duration
                        </option>
                        <option value="rating">
                            Rating
                        </option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                {activeLogs.length > 0 ? (
                    activeLogs.map((log) => (
                        <PlanLogCard key={log.id}
                            log={log}
                            onMarkDone={removeFromTab}
                            onRemove={removeFromTab}
                        />
                    ))
                ) : (
                    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-dashed border-[#232832] text-center">
                        <h3 className="text-[12px] font-bold uppercase text-white">
                            Nothing here yet
                        </h3>

                        <p className="mt-1 text-[12px] text-[#69717d]">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <button className="btn mt-3 h-7 min-h-7 rounded-full border-0 bg-[#b8ff00] px-4 text-[12px] font-semibold text-black hover:bg-[#a9ed00]">
                            Go to workouts
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlans;