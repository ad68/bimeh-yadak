import dynamic from 'next/dynamic';

const CameraComponent = dynamic(() => import('./components/CameraComponent'), { ssr: false });

export default function Page() {
    return (
        <div>
            <CameraComponent />
        </div>
    );
}
