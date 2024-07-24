import { MdClose } from 'react-icons/md';


const InvoiceForm = ({ InvoiceInfo, type, fetchInvoices, onClose, showToastNotifying }) => {
  return <>
    <div className='relative  border-t-4 border-t-gray-800'>

      <button className='w-8 h-8 rounded-full flex items-center justify-center absolute -left-6 -top-8 hover:text-slate-950 ' onClick={onClose}>
        <MdClose className='text-xl text-slate-400 self-center mb-2' />
      </button>

      <div className='flex flex-col gap-2 p-2 mt-8'>

        <label className='input-label text-xl font-medium'>Customer Id</label>
        <input
          type='text'
          className='text-xs text-slat-950 outline-none mb-3'
          placeholder='Enter customer id'
          value={''}
          onChange={() => {}}
        />
      </div>
      <div className='flex flex-col gap-2 p-2'>

        <label className='input-label text-xl font-medium'>Invoice Date</label>
        <input
          type='date'
          className='text-xs text-slat-950 outline-none mb-3'
          placeholder='Enter Invoice Date'
          value={''}
          onChange={() => {}}
        />
      </div>
      <div className='flex flex-col gap-2 p-2'>

        <label className='input-label text-xl font-medium'>Total Amount</label>
        <input
          type='text'
          className='text-xs text-slat-950 outline-none mb-3'
          placeholder='Enter Total Amount'
          value={''}
          onChange={() => {}}
        />
      </div>

      {/* {error && <p className='text-red-500 text-xs pt-4'>{error}</p>} */}

      <button className='w-full btn-primary font-medium mt-5 p-3 text-slate-800 border border-slate-800' onClick={()=>{}}>
        {type === 'add' ? 'Add' : 'Edit'}
      </button>
    </div>
    
  </>

};

export default InvoiceForm;