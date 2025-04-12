'use client';

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('environment'); // 'user' برای دوربین جلو
    const [image, setImage] = useState(null);

    const capture = () => {
        const screenshot = webcamRef.current.getScreenshot();
        setImage(screenshot);
    };

    const switchCamera = () => {
        setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {!image && (
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode }}
                    style={{ width: '100%', maxWidth: 400, borderRadius: 8 }}
                />
            )}

            <div style={{ marginTop: 12 }}>
                {!image ? (
                    <>
                        <button onClick={capture}>📸 گرفتن عکس</button>
                        <button onClick={switchCamera} style={{ marginLeft: 10 }}>
                            🔄 سوییچ دوربین
                        </button>
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
