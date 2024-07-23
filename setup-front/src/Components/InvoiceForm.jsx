const InvoiceForm = () => (
    <div className="bg-white p-6 rounded shadow-md mt-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Invoice</h2>
      <form>
        <label className="block mb-2">
          Customer Name:
          <input type="text" name="customerName" className="block w-full p-2 border rounded mt-1" />
        </label>
        <label className="block mb-2">
          Invoice Date:
          <input type="date" name="invoiceDate" className="block w-full p-2 border rounded mt-1" />
        </label>
        <label className="block mb-2">
          Total Amount:
          <input type="number" name="totalAmount" className="block w-full p-2 border rounded mt-1" />
        </label>
        <button type="submit" className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 mt-4">Submit</button>
      </form>
    </div>
  );

  export default InvoiceForm;