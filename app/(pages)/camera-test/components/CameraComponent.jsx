'use client';

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('environment');
    const [image, setImage] = useState(null);
    const [cameraMode, setCameraMode] = useState(true)

    const capture = () => {
        const screenshot = webcamRef.current.getScreenshot();
        setImage(screenshot);
        setCameraMode(false)
    };

    /*//////const switchCamera = () => {
            setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
        }; */

    return (
        <div style={{ textAlign: 'center' }}>
            {
                cameraMode && <section className='fixed h-[100%] w-[100%] z-[2000] top-0 left-0 bg-black'>
                    <Webcam
                        ref={webcamRef}
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode }}
                        style={{ width: '100%', height: "100%", borderRadius: 8 }}
                    />
                    <section className='w-[100%] flex absolute bottom-[40px] justify-center items-center'>
                        <button onClick={capture} className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full'>
                            <section className='w-[50px] h-[50px] rounded-full border border-black'></section>
                        </button>
                    </section>

                </section>
            }
            <div style={{ marginTop: 12 }}>
                {!image ? (
                    <>
                        <button onClick={() => setCameraMode(true)}>📸 گرفتن عکس</button>
                    </>
                ) : (
                    <>
                        <img src={image} alt="Captured" style={{ width: '100%', maxWidth: 400, borderRadius: 8 }} />
                        <div style={{ marginTop: 12 }}>
                            <button onClick={() => setImage(null)}>🔙 بازگشت به دوربین</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CameraComponent;
