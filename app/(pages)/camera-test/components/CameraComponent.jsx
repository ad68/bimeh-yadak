'use client';


import { Button } from '@/common';
import { notify } from '@/helper';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('environment');
    const [image, setImage] = useState(null);
    const [cameraMode, setCameraMode] = useState(false)
    const [loading, setLoading] = useState(false)

    const base64ToFile = (base64, filename) => {
        const [metadata, data] = base64.split(';base64,');
        const mimeType = metadata.split(':')[1];
        const byteCharacters = atob(data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
            const byteArray = new Uint8Array(1024);
            for (let i = 0; i < 1024 && offset + i < byteCharacters.length; i++) {
                byteArray[i] = byteCharacters.charCodeAt(offset + i);
            }
            byteArrays.push(byteArray);
        }

        const byteArray = new Uint8Array(byteArrays.reduce((acc, curr) => acc.concat(Array.from(curr)), []));
        return new File([byteArray], filename, { type: mimeType });
    };

    const sendImage = async (base64Image) => {
        setLoading(true)
        try {
            const file = base64ToFile(base64Image, 'image.jpg');
            const formData = new FormData();
            formData.append('file', file);
            const response = await axios.post("https://api.tazminmashin.com/tazmin/tazmin-mashin/technician/add/1", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false)
            notify.Success('File uploaded successfully!');
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            setLoading(false)
            console.error('Error uploading file:', error);
        }
    };
    const capture = () => {
        const screenshot = webcamRef.current.getScreenshot();
        setImage(screenshot);
        setCameraMode(false)
        sendImage(screenshot);
    };
    const goToCamera = () => {
        setImage(false);
        setCameraMode(true)
    }

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
            <section className='mt-[100px]'>
                <button onClick={goToCamera}>📸 گرفتن عکس</button>
                <img src={image} alt="Captured" style={{ width: '100%', height: "auto", maxWidth: 400, borderRadius: 8 }} />
            </section>
            <Button loading={loading}>ارسال به سرور</Button>
        </div>
    );
};
/* asDAsASasAS */

export default CameraComponent;
