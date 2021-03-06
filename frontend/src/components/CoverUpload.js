import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { uploadCoverImage } from '../store/actions/projectActions';
import { ErrorMessage } from './form';

const CoverUpload = (props) => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState(props.url);
    const [errors, setErrors] = useState()
    const imgRef = useRef();
    const fileInputRef = useRef();

    const readUrl = (event) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event) => setUrl(event.target.result);
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    useEffect(() => {
        setUrl(props.url);
    }, [props.url])

    const onAddingImage = event => {
        if (event.target.files[0]) {
            let newFile = event.target.files[0];
            let ext = newFile.name.split('.')[1].toLowerCase();
            if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg') {
                setErrors({ fatalError: 'Images with only .jpg, .jpeg and .png are acceptable' });
                fileInputRef.current.value = "";
                return;
            }
            else if (newFile.size > 3000000) {
                setErrors({ fatalError: 'Images with size   more than 3MB are not acceptable' });
                fileInputRef.current.value = "";
                return;
            } else {
                setErrors(null)
                dispatch(uploadCoverImage(event.target.files[0], '/project/upload-cover-image'));
                readUrl(event);
            }
        }
    }

    return (
        <>
            <input ref={fileInputRef} type="file" onChange={onAddingImage} />
            {errors && errors.fatalError ? <ErrorMessage error={errors.fatalError} visible={true} /> : null}
        </>
    )
}

export default CoverUpload;