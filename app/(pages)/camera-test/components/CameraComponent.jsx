'use client';

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('environment');
    const [image, setImage] = useState(null);
    const [mode, setMode] = useState("camera")

    const capture = () => {
        const screenshot = webcamRef.current.getScreenshot();
        setImage(screenshot);
    };

    /*     const switchCamera = () => {
            setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
        }; */

    return (
        <div style={{ textAlign: 'center' }}>

            <section className='fixed h-[100%] w-[100%] z-[2000] top-0 left-0 bg-black'>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode }}
                    style={{ width: '100%', height: "100%", borderRadius: 8 }}
                />
            </section>
            <div style={{ marginTop: 12 }}>
                {!image ? (
                    <>
                        <button onClick={capture}>📸 گرفتن عکس</button>

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
