import { useEffect, useRef, useState } from "react"

const UploadWidget = ({value, valueName, setValue}) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dluqxr8lw',
            uploadPreset: 'hi5bzww0',
            sources: ['local'],
            multiple: false,
            maxFiles: 1
        }, function(err, result){
            if(result?.data?.info?.files) {
                setValue({
                    ...value,
                    [valueName]: result?.data?.info?.files?.[0]?.uploadInfo?.secure_url
                })
            }
        })
    return (
        <label>
            <button onClick={() => widgetRef.current.open()}>
                upload
            </button>
        </label>
    )
}

export default UploadWidget