import LogDetailsCard from '@/components/LogDetails/LogDetailsCard';
import { getLog } from '@/lib/fit';
import { notFound } from 'next/navigation';

interface ILogsDetailsProp {
    params: {
        logId: number
    }
}

const LogsDetailsPage = async ({params}: ILogsDetailsProp) => {
    const { logId } = await params;
    const log = await getLog(logId);

    if(!log) notFound();

    return (
        <main>
            <LogDetailsCard log={log} />
        </main>
    );
};

export default LogsDetailsPage;