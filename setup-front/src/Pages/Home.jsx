import { useState } from 'react';
import CardButton from '../Components/CardButton';
import InvoicesDetails from '../Components/InvoicesDetails';
import Header from '../Components/Header';
import InvoiceForm from '../Components/InvoiceForm';

const Home = () => {
  const [showForm, setShowForm] = useState({
    isShown: false,
    type: 'add',
    data: null
  });


  return (

    <div className="min-h-screen bg-gray-100">

      <Header username="user name" />
      <div className="p-4">
        <div className="flex flex-row gap-10 items-center justify-center">

        <CardButton title={'View'}/>
         <CardButton title={'Add'} onClick={() => {}}/>
         <CardButton title={'Edit'}/>
         <CardButton title={'Delete'}/>

        </div>
        <InvoicesDetails />
        {showForm.isShown && <InvoiceForm />}
      </div>
    </div>
  );
};



export default Home;
