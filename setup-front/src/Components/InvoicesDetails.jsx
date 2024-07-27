import React, { useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { MdEdit, MdExpandMore, MdExpandLess } from 'react-icons/md';
import Invoices from '../assets/Invoices'; // Assuming this is an array of invoice data

const InvoicesDetails = ({ onEdit, onDelete }) => {

  const [expandedInvoiceId, setExpandedInvoiceId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedInvoiceId(expandedInvoiceId === id ? null : id);
  };

  return (
    <div className='mx-auto max-w-[1440px] px-6 lg:px-20 pt-20'>
      <table className='w-full mx-auto border-collapse'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='p-1 py-2'>Invoice Number</th>
            <th className='p-1 py-2'>Customer Name</th>
            <th className='p-1 py-2'>Date</th>
            <th className='p-1 py-2'>Total Amount</th>
            <th className='p-1 py-2'>Actions</th>
            <th className='p-1 py-2'>Details</th>
          </tr>
        </thead>
        <tbody>
          {Invoices.map((invoice) => (
            <React.Fragment key={invoice.id}>
              <tr className='border-b border-gray-300 text-gray-30 p-6 medium-14 text-center'>
                <td>{invoice.id}</td>
                <td>{invoice.customer_id}</td>
                <td>{invoice.InvoiceDate}</td>
                <td className='w-16 h-16 bg-white'>${invoice.TotalAmount}</td>
                <td>
                  <div className='bold-22 pl-14'>
                    <button
                      onClick={() => onEdit(invoice)}
                      className='text-blue-500 hover:text-blue-700'
                    >
                      <MdEdit className='text-lg' />
                    </button>
                    <button
                      onClick={() => onDelete(invoice.id)}
                      className='text-red-500 hover:text-red-700'
                    >
                      <TbTrash className='text-lg' />
                    </button>
                  </div>
                </td>
                <td className='p-3'>
                  <button
                    onClick={() => toggleExpand(invoice.id)}
                    className='text-gray-600 hover:text-gray-800 flex items-center'
                  >
                    {expandedInvoiceId === invoice.id ? (
                      <>
                        <span className='mr-2'>Hide Items</span>
                        <MdExpandLess className='text-lg' />
                      </>
                    ) : (
                      <>
                        <span className='mr-2'>Show Items</span>
                        <MdExpandMore className='text-lg' />
                      </>
                    )}
                  </button>
                </td>
              </tr>
              {expandedInvoiceId === invoice.id && (
                <tr>
                  <td colSpan="6" className='bg-gray-50'>
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold mb-4'>Invoice Items</h3>
                      <table className='w-full border-collapse bg-white shadow-md'>
                        <thead className='bg-gray-200'>
                          <tr>
                            <th className='p-3 text-left'>Description</th>
                            <th className='p-3 text-left'>Quantity</th>
                            <th className='p-3 text-left'>Unit Price</th>
                            <th className='p-3 text-left'>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoice.InvoiceItems.map((item, index) => (
                            <tr key={index} className='border-b border-gray-300'>
                              <td className='p-3'>{item.Description}</td>
                              <td className='p-3'>{item.Quantity}</td>
                              <td className='p-3'>${item.UnitPrice.toFixed(2)}</td>
                              <td className='p-3'>${(item.Quantity * item.UnitPrice).toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesDetails;
