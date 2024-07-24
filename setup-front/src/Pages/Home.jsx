import { useState } from 'react';
import CardButton from '../Components/CardButton';
import InvoicesDetails from '../Components/InvoicesDetails';
import Header from '../Components/Header';
import InvoiceForm from '../Components/InvoiceForm';
import Modal from 'react-modal';
import Toast from '../Components/Toast';

const Home = () => {
  const [showForm, setShowForm] = useState({
    isShown: false,
    type: 'add',
    data: null
  });

  // to show toast notification if the process done successe or not
  const [showToastNotify, setShowToastNotify] = useState({
    isShown: false,
    type: 'add',
    message: ''
  })

  // handle show toast notification
  const showToastNotifying = (message, type) => {

    setShowToastNotify({
      isShown: true,
      type: type,
      message: message
    });
  };

  // handle close toast notification
  const toastCloseHandler = () => {
    setShowToastNotify({
      isShown: false,
      message: ''
    });
  };
  // make a model => edit
  const editHandller = (taskInfo) => {

    setShowForm({ isShown: true, data: taskInfo, type: 'edit' })
  }

    // when click close button switch add model
    const onClose = () => {
      setShowForm({ isShown: false, type: 'add', data: null })
    }
  

  return (

    <div className="min-h-screen bg-gray-100">

      <Header username="user name" />
      <div className="p-4">
        <div className="flex flex-row gap-10 items-center justify-center">

          <CardButton title={'View'} />
          <CardButton title={'Add'} onClick={() => {setShowForm({ isShown: true, type: 'add', data: null }) }} />
          <CardButton title={'Edit'} />
          <CardButton title={'Delete'} />

        </div>
        <InvoicesDetails onEdit={editHandller} onDelete={()=>{}} />
        {showForm.isShown && <InvoiceForm />}
      </div>
      <Modal
        isOpen={showForm.isShown}
        onRequestClose={() => { }}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
        }}
        contentLabel=''
        className='w-[35%] max-h-3/4 border rounded-3xl shadow-2xl bg-white px-7 py-10 mx-auto mt-24'
      >

        <InvoiceForm
          InvoiceInfo={showForm.data}
          type={showForm.type}
          fetchTasks={()=>{}}
          onClose={onClose}
          showToastNotifying={showToastNotifying}
        />
      </Modal>

      <Toast
        isShown={showToastNotify.isShown}
        type={showToastNotify.type}
        message={showToastNotify.message}
        onClose={toastCloseHandler}
      />
    </div>
  );
};



export default Home;
