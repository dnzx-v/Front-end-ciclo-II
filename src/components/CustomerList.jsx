import { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm.jsx'
import CuerpoPagina from './CuerpoPagina.jsx'
import './CustomerList.css'

const customersUrl = 'http://localhost:3000/api/customers'

async function readResponse(response) {
  const result = await response.json()
  if (!response.ok) {
    throw new Error(result.errors?.join(' ') || result.message || 'Ocurrió un error.')
  }
  return result
}

function CustomerList() {
  const [customers, setCustomers] = useState([])
  const [total, setTotal] = useState(0)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [editingCustomer, setEditingCustomer] = useState(null)

  useEffect(() => {
    fetch(customersUrl)
      .then(readResponse)
      .then((result) => {
        setCustomers(result.data)
        setTotal(result.total)
      })
      .catch((loadError) => setError(loadError.message))
      .finally(() => setLoading(false))
  }, [])

  async function saveCustomer(customer) {
    const response = await fetch(customersUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    })
    const result = await readResponse(response)
    setCustomers((currentCustomers) => [...currentCustomers, result.data])
    setTotal((currentTotal) => currentTotal + 1)
  }

  async function updateCustomer(id, customer) {
    const response = await fetch(`${customersUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    })
    const result = await readResponse(response)
    setCustomers((currentCustomers) =>
      currentCustomers.map((currentCustomer) =>
        currentCustomer.id === id ? result.data : currentCustomer,
      ),
    )
  }

  async function deleteCustomer(id) {
    const response = await fetch(`${customersUrl}/${id}`, { method: 'DELETE' })
    await readResponse(response)
    setCustomers((currentCustomers) => currentCustomers.filter((customer) => customer.id !== id))
    setTotal((currentTotal) => currentTotal - 1)
    setEditingCustomer((currentCustomer) => currentCustomer?.id === id ? null : currentCustomer)
  }

  return (
    <div className="pagina">
      <main className="contenido">
        <CuerpoPagina
          customers={customers}
          total={total}
          loading={loading}
          error={error}
          onDelete={deleteCustomer}
          onEdit={setEditingCustomer}
          form={(
            <CustomerForm
              key={editingCustomer ? `editing-${editingCustomer.id}` : 'new'}
              onSave={saveCustomer}
              onUpdate={updateCustomer}
              editingCustomer={editingCustomer}
              onCancelEdit={() => setEditingCustomer(null)}
            />
          )}
        />
      </main>
    </div>
  )
}

export default CustomerList
