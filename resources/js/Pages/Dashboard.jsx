import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InfoSection } from './InfoSection';
import { EventsSection } from './EventsSection';
import { SongsSection } from './SongsSection';
import { ReviewSection } from './ReviewSection';
import { ListsSection } from './ListsSection';
import { Collaborations } from './Collaborations';
import { TaskSection } from './TaskSection';

export default function Dashboard({ user }) {
    const isAdmin = user?.hasAdminRole;
    // console.log(isAdmin); 
    const isUser = user?.hasUserRole; 
    // console.log(isUser);

    return (
        <AuthenticatedLayout user={user}>
            {isUser && (
                <>
                    <InfoSection />
                    <EventsSection />
                    <SongsSection />
                    <ReviewSection />
                    <ListsSection />
                    <Collaborations />
                </>
            )}
            {isAdmin && (
                <>
                    <TaskSection></TaskSection>
                </>
            )}
        </AuthenticatedLayout>
    );
}

