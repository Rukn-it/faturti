import { TbTrash } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';

import Invoices from '../assets/Invoices';
const InvoicesDetails = ({onEdit,onDelete}) => {

    return (
        <div className='mx-auto max-w-[1440px] px-6 lg:px-20 pt-20'>
            <table className='w-full mx-auto'>
                <thead className=''>

                    <tr className='bg-slate-800/100 regular-18 sm:regular-22 text-white py-12'>

                        <th className='p-1 py-2'>Invoices Number</th>
                        <th className='p-1 py-2'>Customer Name</th>
                        <th className='p-1 py-2'>Date</th>
                        <th className='p-1 py-2'>Unit Price</th>
                        <th className='p-1 py-2'>Quantity</th>

                        <th className='p-1 py-2'>Total Anount</th>
                        <th className='p-1 py-2'>Edit</th>
                        <th className='p-1 py-2'>Remove</th>

                    </tr>
                </thead>

                <tbody>

                    {Invoices.map((e) => {

                        return <tr key={e.id} className='border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center'>
                            <td>{e.id}</td>
                            <td><div>{e.customer_name}</div></td>
                            <td>{e.date}</td>
                            <td>{e.unit_price}</td>
                            <td>{e.quantity}</td>
                            <td className='w-16 h-16 bg-white'>{e.total_amount}</td>
                            <td>
                                <div className='bold-22 pl-14'>
                                    <MdEdit onClick={onEdit} />
                                </div>
                            </td>
                            <td>
                                <div className='bold-22 pl-14'>
                                    <TbTrash onClick={onDelete} />
                                </div>
                            </td>

                        </tr>

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default InvoicesDetails