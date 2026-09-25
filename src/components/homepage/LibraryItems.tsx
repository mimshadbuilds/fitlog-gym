import { getLogs } from '@/lib/fit';
import LibraryCard from '../shared/LibraryCard';
import { ILog } from '@/types/logtype';

const LibraryItems = async () => {
    const logsData = await getLogs();
    // console.log('data', logsData)
    return (
        <section className="max-w-[1232px] mx-auto w-full px-4 py-8">
            <div className="mb-8 text-center md:text-left">
                <h1 className="font-serif text-2xl font-bold sm:text-3xl">THE LIBRARY</h1>
                <p className="mt-2 text-xs text-base-content/60">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    logsData.map((log: ILog) => (
                        <LibraryCard key={log.id} log={log} />
                    ) 
                )}
            </div>
        </section>
    );
};

export default LibraryItems;