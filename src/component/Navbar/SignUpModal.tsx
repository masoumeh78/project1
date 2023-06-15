import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import React, { Fragment, useRef, useState } from 'react'

import './SignUpModal.css';

function SignUpModal() {


    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal)
    }
    const cancelButtonRef = useRef(null)
    // if(modal) {
    //     document.body.classList.add('active-modal')
    //   } else {
    //     document.body.classList.remove('active-modal')
    //   }

    return (

        <>
            <button className='btn-modal' onClick={toggleModal}>
                ورود و ثبت نام
            </button>


            {/* <>
                <Button type="primary" onClick={showModal}>
                    Open Modal with customized footer
                </Button>
                <Modal
                    open={open}
                    title="Title"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Submit
                        </Button>,
                        <Button
                            key="link"
                            href="https://google.com"
                            type="primary"
                            loading={loading}
                            onClick={handleOk}
                        >
                            Search on Google
                        </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </> */}







            {/* {modal && (
                <div className="modal">

                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            perferendis suscipit officia recusandae, eveniet quaerat assumenda
                            id fugit, dignissimos maxime non natus placeat illo iusto!
                            Sapiente dolorum id maiores dolores? Illum pariatur possimus
                            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                            placeat tempora vitae enim incidunt porro fuga ea.
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )} */}

        </>

    )
}

export default SignUpModal
