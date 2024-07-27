import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';


const InvoiceForm = ({ InvoiceInfo, type, fetchInvoices, onClose, showToastNotifying }) => {

  const [invoice, setInvoice] = useState({
    customer_id: InvoiceInfo ? InvoiceInfo.customer_id : '',
    InvoiceDate: InvoiceInfo ? InvoiceInfo.InvoiceDate : '',
    TotalAmount: InvoiceInfo ? InvoiceInfo.TotalAmount : '',
    InvoiceItems: InvoiceInfo ? InvoiceInfo.InvoiceItems : [{ Description: '', Quantity: '', UnitPrice: '' }]
  });

  useEffect(() => {
    if (InvoiceInfo) {
      setInvoice({
        customer_id: InvoiceInfo.customer_id,
        InvoiceDate: InvoiceInfo.InvoiceDate,
        TotalAmount: InvoiceInfo.TotalAmount,
        InvoiceItems: InvoiceInfo.InvoiceItems
      });
    }
  }, [InvoiceInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({
      ...invoice,
      [name]: value
    });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...invoice.InvoiceItems];
    items[index][name] = value;
    setInvoice({
      ...invoice,
      InvoiceItems: items
    });
  };

  const addItem = () => {
    setInvoice({
      ...invoice,
      InvoiceItems: [...invoice.InvoiceItems, { Description: '', Quantity: '', UnitPrice: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(invoice);
    // Send data to backend here
    showToastNotifying('Invoice added successfully!', 'add');
    onClose();
  };

  return <>
    <div className='relative max-w-lg mx-auto flex flex-col h-screen max-h-[90vh] border-t-4 border-t-gray-800 bg-white' >

      <button
        className='w-8 h-8 rounded-full flex items-center justify-center absolute -left-6 -top-8 hover:text-slate-950 ' 
        onClick={onClose}
        >
        <MdClose className='text-xl text-slate-400 self-center mb-2' />
      </button>

      <div className='flex-grow overflow-auto p-4'>
        {/* <div className=''> */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-xl font-medium'>Customer Id</label>
              <input
                type='text'
                name='customer_id'
                className='text-xs text-slate-950 outline-none mb-3 border border-gray-300 rounded-md p-2'
                placeholder='Enter customer id'
                value={invoice.customer_id}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-xl font-medium'>Invoice Date</label>
              <input
                type='date'
                name='InvoiceDate'
                className='text-xs text-slate-950 outline-none mb-3 border border-gray-300 rounded-md p-2'
                placeholder='Enter Invoice Date'
                value={invoice.InvoiceDate}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-xl font-medium'>Total Amount</label>
              <input
                type='number'
                name='TotalAmount'
                className='text-xs text-slate-950 outline-none mb-3 border border-gray-300 rounded-md p-2'
                placeholder='Enter Total Amount'
                value={invoice.TotalAmount}
                onChange={handleChange}
              />
            </div>
            <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>
            {invoice.InvoiceItems.map((item, index) => (
              <div key={index} className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700">Description:</label>
                  <input
                    type="text"
                    name="Description"
                    value={item.Description}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700">Quantity:</label>
                  <input
                    type="number"
                    name="Quantity"
                    value={item.Quantity}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700">Unit Price:</label>
                  <input
                    type="number"
                    name="UnitPrice"
                    value={item.UnitPrice}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            ))}
            <button
              type='button'
              onClick={addItem}
              className='w-full btn-secondary font-medium mt-2 p-3 text-slate-800 border border-slate-800'
            >
              Add Item
            </button>
            <button
              type='submit'
              className='w-full btn-primary font-medium mt-5 p-3 text-slate-800 border border-slate-800'
            >
              {type === 'add' ? 'Add Invoice' : 'Edit Invoice'}
            </button>
          </form>
        {/* </div> */}
      </div>

      {/* {error && <p className='text-red-500 text-xs pt-4'>{error}</p>} */}

      <button className='w-full btn-primary bg-slate-800 font-medium mt-5 p-3 text-slate-800 border border-slate-800' onClick={() => { }}>
        {type === 'add' ? 'Add Invoice' : 'Edit Invoice'}
      </button>
    </div>

  </>

};

export default InvoiceForm;