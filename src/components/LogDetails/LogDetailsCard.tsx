import { ILog } from '@/types/logtype';
import Image from 'next/image';
import AddToPlanBtn from './Add2PlanBtn';
import SavedToListBtn from './Saved2ListBtn';

interface LogDetailsCardProps {
    log: ILog;
}

const LogDetailsCard = ({ log }: LogDetailsCardProps) => {
    return (
        <article className="mx-auto grid h-[797px] w-full max-w-[1232px] grid-cols-[520px_520px] items-start justify-center gap-[56px] text-white my-10">
            <div className="relative h-[600px] w-[520px] overflow-hidden rounded-xl border border-[#29313d] bg-[#151922]">
                <Image
                    src={log.image}
                    alt={log.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="520px"
                />
            </div>

            <div className="flex h-[610px] min-w-0 flex-col justify-between">
                <div>
                    <h1 className="font-heading text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
                        {log.name}
                    </h1>
                    <p className="mt-2 max-w-2xl text-xs leading-5 text-[#a8b0bd]">
                        {log.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {log.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#b8ff00] px-3 py-1 text-[10px] font-bold text-black">
                                {muscle}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#29313d] bg-[#151922]">
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Equipment
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.equipment}
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Difficulty
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.difficulty}
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Sets
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.sets}
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Reps
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.reps}
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Duration
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.duration} min
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Calories
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.caloriesBurned} kcal
                        </span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Rating
                        </span>
                        <span className="text-[10px] font-semibold text-white">
                            {log.rating}
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-bold uppercase tracking-wide text-white">
                        Instructions
                    </h2>
                    <ol className="mt-2 space-y-2">
                        {log.instructions.map((instruction, ind) => (
                            <li
                                key={ind}
                                className="flex gap-2 text-[10px] leading-4 text-[#b6beca]">
                                <span className="shrink-0 text-[#b8ff00]">
                                    {ind + 1}.
                                </span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-wrap gap-2">
                    <AddToPlanBtn log={log} />
                    <SavedToListBtn log={log} />
                </div>
            </div>
        </article>
    );
};

export default LogDetailsCard;