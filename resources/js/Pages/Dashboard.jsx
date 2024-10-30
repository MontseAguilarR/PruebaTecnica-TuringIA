import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InfoSection } from './components/InfoSection';
import { EventsSection } from './components/EventsSection';
import { SongsSection } from './components/SongsSection';
import { ReviewSection } from './components/ReviewSection';

export default function Dashboard({ user }) {
    return (
        <AuthenticatedLayout
            user={user}>

            <InfoSection></InfoSection>
            <EventsSection></EventsSection>
            <SongsSection></SongsSection>
            <ReviewSection></ReviewSection>
        </AuthenticatedLayout>

        
    );
}
