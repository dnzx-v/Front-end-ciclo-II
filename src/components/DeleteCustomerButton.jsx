import { useState } from 'react'

function DeleteCustomerButton({ customer, onDelete }) {
  const [error, setError] = useState('')
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    if (!window.confirm(`¿Eliminar a ${customer.firstName} ${customer.lastName}?`)) return

    setDeleting(true)
    setError('')
    try {
      await onDelete(customer.id)
    } catch (deleteError) {
      setError(deleteError.message)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <span className="delete-action">
      <button className="delete-button" type="button" onClick={handleDelete} disabled={deleting}>
        {deleting ? 'Eliminando...' : 'Eliminar'}
      </button>
      {error && <span className="delete-error" role="alert">{error}</span>}
    </span>
  )
}

export default DeleteCustomerButton
